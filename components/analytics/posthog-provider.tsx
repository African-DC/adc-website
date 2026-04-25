"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { Suspense, useEffect } from "react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";
const POSTHOG_DISABLED =
  process.env.NEXT_PUBLIC_DISABLE_ANALYTICS === "true";

function shouldOptOut(): boolean {
  if (typeof window === "undefined") return true;
  if (window.navigator.doNotTrack === "1") return true;
  if (new URLSearchParams(window.location.search).has("noanalytics")) return true;
  return false;
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();
  const ph = usePostHog();

  useEffect(() => {
    if (!pathname || !ph) return;
    const qs = searchParams?.toString();
    const url = pathname + (qs ? `?${qs}` : "");
    ph.capture("$pageview", {
      $current_url: url,
      locale,
      pathname,
    });
  }, [pathname, searchParams, locale, ph]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!POSTHOG_KEY || POSTHOG_DISABLED) return;
    if (shouldOptOut()) return;
    if (posthog.__loaded) return;

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
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
      advanced_disable_feature_flags: true,
      advanced_disable_feature_flags_on_first_load: true,
      persistence: "localStorage+cookie",
      cookie_name: "ph_adc",
    });
  }, []);

  if (!POSTHOG_KEY || POSTHOG_DISABLED) {
    return <>{children}</>;
  }

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
