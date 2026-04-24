"use client";

import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

type LanguageSwitcherProps = {
  className?: string;
  variant?: "default" | "inverted";
};

export function LanguageSwitcher({
  className,
  variant = "default",
}: LanguageSwitcherProps) {
  const t = useTranslations("languageSwitcher");
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchTo = (nextLocale: string) => {
    if (nextLocale === currentLocale || isPending) return;
    startTransition(() => {
      router.replace(
        pathname as Parameters<typeof router.replace>[0],
        { locale: nextLocale },
      );
    });
  };

  const baseClass = variant === "inverted" ? "text-white/70" : "text-neutral-500";
  const activeClass = variant === "inverted" ? "text-white" : "text-neutral-950";

  return (
    <div
      className={cn("inline-flex items-center gap-0", className)}
      role="group"
      aria-label={t("aria")}
    >
      {routing.locales.map((locale, index) => {
        const isActive = locale === currentLocale;
        const label = locale === "fr" ? t("fr") : t("en");
        return (
          <div key={locale} className="flex items-center">
            {index > 0 ? (
              <span
                className={cn(
                  "mx-2 text-xs",
                  variant === "inverted" ? "text-white/30" : "text-neutral-300",
                )}
                aria-hidden
              >
                ·
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => switchTo(locale)}
              disabled={isPending || isActive}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "relative text-xs font-medium uppercase tracking-[0.18em] transition-colors",
                isActive
                  ? cn(activeClass, "cursor-default")
                  : cn(baseClass, "hover:text-orange-500"),
              )}
            >
              {label}
              {isActive ? (
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 right-0 h-px bg-orange-500"
                />
              ) : null}
            </button>
          </div>
        );
      })}
    </div>
  );
}
