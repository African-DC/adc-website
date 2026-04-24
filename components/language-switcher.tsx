"use client";

import { routing, type AppLocale } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState, useTransition } from "react";

type LanguageSwitcherProps = {
  className?: string;
  variant?: "default" | "inverted";
  align?: "left" | "right";
};

const LOCALE_LABELS: Record<AppLocale, { native: string; code: string }> = {
  fr: { native: "Français", code: "FR" },
  en: { native: "English", code: "EN" },
};

export function LanguageSwitcher({
  className,
  variant = "default",
  align = "right",
}: LanguageSwitcherProps) {
  const t = useTranslations("languageSwitcher");
  const currentLocale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const switchTo = (nextLocale: AppLocale) => {
    setOpen(false);
    if (nextLocale === currentLocale || isPending) return;
    startTransition(() => {
      router.replace(
        pathname as Parameters<typeof router.replace>[0],
        { locale: nextLocale },
      );
    });
  };

  const isInverted = variant === "inverted";
  const current = LOCALE_LABELS[currentLocale];

  return (
    <div className={cn("relative inline-block", className)} ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={t("aria")}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",
          isInverted
            ? "border-white/15 bg-white/5 text-white/80 hover:border-white/30 hover:text-white"
            : "border-neutral-200 bg-white/60 text-neutral-700 backdrop-blur hover:border-neutral-900 hover:text-neutral-950",
        )}
      >
        <Globe className="h-3.5 w-3.5 opacity-70" strokeWidth={1.8} />
        <span>{current.code}</span>
        <svg
          className={cn(
            "h-3 w-3 opacity-60 transition-transform duration-200",
            open && "rotate-180",
          )}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            id={menuId}
            role="listbox"
            aria-label={t("aria")}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
            className={cn(
              "absolute top-full z-50 mt-2 min-w-[160px] origin-top overflow-hidden rounded-xl border border-neutral-200 bg-white p-1 shadow-xl shadow-neutral-900/10",
              align === "right" ? "right-0" : "left-0",
            )}
          >
            {routing.locales.map((locale) => {
              const isActive = locale === currentLocale;
              const label = LOCALE_LABELS[locale];
              return (
                <li key={locale} role="none">
                  <button
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onClick={() => switchTo(locale)}
                    disabled={isPending}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                      isActive
                        ? "bg-neutral-50 text-neutral-950 font-medium"
                        : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950",
                      isPending && "opacity-60 cursor-wait",
                    )}
                  >
                    <div className="flex flex-col">
                      <span className="leading-tight">{label.native}</span>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                        {label.code}
                      </span>
                    </div>
                    {isActive ? (
                      <Check
                        className="h-4 w-4 text-orange-500 flex-shrink-0"
                        strokeWidth={2}
                      />
                    ) : null}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
