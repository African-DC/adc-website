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
  });
}

function PostHogPageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();

  useEffect(() => {
    if (!pathname) return;
    if (typeof window === "undefined") return;

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
