"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { Suspense, useEffect } from "react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_DISABLED =
  process.env.NEXT_PUBLIC_DISABLE_ANALYTICS === "true";

function shouldOptOut(): boolean {
  if (typeof window === "undefined") return true;
  if (window.navigator.doNotTrack === "1") return true;
  if (new URLSearchParams(window.location.search).has("noanalytics")) return true;
  return false;
}

let initStarted = false;

function loadAndInit() {
  if (initStarted) return;
  initStarted = true;
  if (!POSTHOG_KEY || POSTHOG_DISABLED || shouldOptOut()) return;

  import("posthog-js").then(({ default: posthog }) => {
    if (posthog.__loaded) return;
    posthog.init(POSTHOG_KEY, {
      api_host: "/ingest",
      ui_host: "https://us.posthog.com",
      person_profiles: "identified_only",
      capture_pageview: false,
      capture_pageleave: true,
      autocapture: {
        dom_event_allowlist: ["click", "submit"],
        element_allowlist: ["a", "button"],
      },
      disable_surveys: true,
      disable_session_recording: true,
      capture_exceptions: false,
      advanced_disable_decide: false,
      advanced_disable_feature_flags: true,
      advanced_disable_feature_flags_on_first_load: true,
      persistence: "localStorage+cookie",
      cookie_name: "ph_adc",
    });

    window.__phAdc = posthog;
    const queue = window.__phAdcQueue;
    if (queue && queue.length) {
      for (const [name, props] of queue) {
        try {
          posthog.capture(name, props);
        } catch {
          /* swallow */
        }
      }
      window.__phAdcQueue = [];
    }
  });
}

function PostHogPageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();

  useEffect(() => {
    if (!pathname) return;
    if (typeof window === "undefined") return;
    const qs = searchParams?.toString();
    const url = pathname + (qs ? `?${qs}` : "");
    const ph = window.__phAdc;
    const fire = (p: typeof ph) =>
      p?.capture("$pageview", {
        $current_url: url,
        locale,
        pathname,
      });
    if (ph) {
      fire(ph);
    } else {
      (window.__phAdcQueue ||= []).push([
        "$pageview",
        { $current_url: url, locale, pathname },
      ]);
    }
  }, [pathname, searchParams, locale]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const idle =
      (window as Window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      }).requestIdleCallback;
    if (idle) {
      idle(loadAndInit, { timeout: 4000 });
    } else {
      window.setTimeout(loadAndInit, 1500);
    }
  }, []);

  if (!POSTHOG_KEY || POSTHOG_DISABLED) {
    return <>{children}</>;
  }

  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageviewTracker />
      </Suspense>
      {children}
    </>
  );
}
