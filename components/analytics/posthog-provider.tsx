"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import posthog from "posthog-js";
import { PostHogProvider as Provider } from "posthog-js/react";
import { Suspense, useEffect } from "react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";
const POSTHOG_DISABLED =
  process.env.NEXT_PUBLIC_DISABLE_ANALYTICS === "true";

let didInit = false;

function ensureInit() {
  if (didInit) return;
  if (typeof window === "undefined") return;
  if (!POSTHOG_KEY) return;
  if (POSTHOG_DISABLED) return;
  if (window.navigator.doNotTrack === "1") return;
  if (new URLSearchParams(window.location.search).has("noanalytics")) return;

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "identified_only",
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: {
      dom_event_allowlist: ["click", "submit"],
      element_allowlist: ["a", "button"],
    },
    persistence: "localStorage+cookie",
    cookie_name: "ph_adc",
    loaded: (ph) => {
      if (process.env.NODE_ENV === "development") {
        ph.debug(false);
      }
    },
  });
  didInit = true;
}

function PostHogPageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();

  useEffect(() => {
    if (!pathname) return;
    if (typeof window === "undefined") return;
    if (!posthog.__loaded) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    posthog.capture("$pageview", {
      $current_url: url,
      locale,
      pathname,
    });
  }, [pathname, searchParams, locale]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    ensureInit();
  }, []);

  if (!POSTHOG_KEY || POSTHOG_DISABLED) {
    return <>{children}</>;
  }

  return (
    <Provider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageviewTracker />
      </Suspense>
      {children}
    </Provider>
  );
}
