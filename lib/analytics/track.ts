import posthog from "posthog-js";
import type { AnalyticsEventName, EventProps } from "./events";

export function track<N extends AnalyticsEventName>(
  name: N,
  props: EventProps<N>,
): void {
  if (typeof window === "undefined") return;
  posthog.capture(name, props);
}

export function bucketMessageLength(length: number): "<50" | "50-200" | "200+" {
  if (length < 50) return "<50";
  if (length <= 200) return "50-200";
  return "200+";
}

export function isExternalUrl(url: string): boolean {
  if (!url) return false;
  if (url.startsWith("/")) return false;
  if (url.startsWith("#")) return false;
  if (url.startsWith("mailto:") || url.startsWith("tel:")) return false;
  try {
    const u = new URL(url);
    return u.hostname !== "africandigitconsulting.com" &&
      u.hostname !== "www.africandigitconsulting.com";
  } catch {
    return false;
  }
}
