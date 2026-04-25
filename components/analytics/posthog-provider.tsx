"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import posthog from "posthog-js";
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

if (
  typeof window !== "undefined" &&
  POSTHOG_KEY &&
  !POSTHOG_DISABLED &&
  !posthog.__loaded &&
  !shouldOptOut()
) {
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
    posthog.capture("$pageview", {
      $current_url: url,
      locale,
      pathname,
    });
  }, [pathname, searchParams, locale]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
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
