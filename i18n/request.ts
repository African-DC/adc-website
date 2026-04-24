import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    onError(error) {
      if (error.code === "MISSING_MESSAGE") {
        if (process.env.NODE_ENV !== "production") {
          console.warn("[next-intl] missing message:", error.message);
        }
        return;
      }
      throw error;
    },
    getMessageFallback({ key, namespace }) {
      const fullKey = namespace ? `${namespace}.${key}` : key;
      if (process.env.NODE_ENV !== "production") {
        return `[${fullKey}]`;
      }
      return key;
    },
  };
});
