"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { useTranslations } from "next-intl";

interface PageHeroProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  breadcrumbs: { label: string; href: string }[];
  actions?: ReactNode;
  backgroundImage?: string;
  accentColor?: string;
  pageTheme?: "about" | "expertise" | "portfolio" | "contact" | "default";
  useAbstractBackground?: boolean;
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  breadcrumbs,
  actions,
}: PageHeroProps) {
  const tNav = useTranslations("nav");

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-neutral-50 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-orange-300/20 blur-[140px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between gap-6 mb-10">
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-neutral-500 min-w-0 flex-1"
          >
            <Link href="/" className="hover:text-orange-600 transition-colors">
              {tNav("home")}
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center gap-2 min-w-0">
                <ChevronRight
                  className="h-3.5 w-3.5 text-neutral-400 flex-shrink-0"
                  strokeWidth={1.8}
                />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-neutral-900 font-medium truncate">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href as "/blog"}
                    className="hover:text-orange-600 transition-colors truncate"
                  >
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </motion.nav>

          {actions ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex-shrink-0"
            >
              {actions}
            </motion.div>
          ) : null}
        </div>

        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase mb-6"
          >
            <span className="inline-block h-px w-10 bg-orange-500" />
            {eyebrow}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-[clamp(2rem,5vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-neutral-950 max-w-4xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif mt-6 md:mt-8 text-lg md:text-xl italic font-light text-neutral-700 max-w-2xl leading-snug"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
