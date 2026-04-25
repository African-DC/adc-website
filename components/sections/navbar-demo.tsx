"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { track } from "@/lib/analytics/track";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/a-propos" },
  { key: "expertise", href: "/notre-expertise" },
  { key: "work", href: "/nos-realisations" },
  { key: "blog", href: "/blog" },
] as const;

export function NavbarDemo() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 20;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 md:bg-white/90 md:backdrop-blur-md border-b border-neutral-200/80"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-[72px] md:h-[80px] flex items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            aria-label={t("ariaLogo")}
            className="flex items-center flex-shrink-0"
          >
            <div className="relative h-10 md:h-12 w-auto">
              <Image
                src="/img/adc-logo.png"
                alt="African Digit Consulting"
                width={180}
                height={180}
                className="h-full w-auto object-contain"
                fetchPriority="high"
              />
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() =>
                      track("nav_click", {
                        item: link.key,
                        location: "desktop",
                      })
                    }
                    className={`relative inline-flex items-center h-11 px-4 text-sm font-medium transition-colors ${
                      active
                        ? "text-neutral-950"
                        : "text-neutral-600 hover:text-neutral-950"
                    }`}
                  >
                    {t(link.key)}
                    {active && (
                      <m.span
                        layoutId="nav-underline"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                        className="absolute left-4 right-4 -bottom-0.5 h-px bg-orange-500"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: Language + CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher className="hidden md:inline-flex" />

            <Link
              href="/contact"
              onClick={() =>
                track("cta_click", {
                  label: "navbar_contact",
                  location: "navbar",
                  destination: "/contact",
                })
              }
              className="hidden sm:inline-flex items-center gap-2 h-11 px-5 rounded-full bg-neutral-950 text-white text-sm font-medium hover:bg-orange-500 transition-colors"
            >
              {t("contact")}
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.8}
              />
            </Link>

            <button
              type="button"
              aria-label={t("openMenu")}
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen((s) => {
                  if (!s) {
                    track("mobile_menu_opened", { page: pathname });
                  }
                  return !s;
                });
              }}
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-neutral-200 bg-white text-neutral-950 hover:border-orange-500 hover:text-orange-500 transition-colors"
            >
              {menuOpen ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40 bg-neutral-50 pt-[72px]"
          >
            <div className="h-full overflow-y-auto px-6 py-10">
              <div className="text-xs tracking-[0.22em] uppercase text-neutral-500 mb-8">
                <span className="inline-block h-px w-8 bg-orange-500 mr-3 align-middle" />
                {t("menuLabel")}
              </div>
              <ul className="space-y-2">
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <m.li
                      key={link.href}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() =>
                          track("nav_click", {
                            item: link.key,
                            location: "mobile_drawer",
                          })
                        }
                        className={`font-serif flex items-center justify-between py-4 border-b border-neutral-200 text-3xl md:text-4xl font-medium transition-colors ${
                          active
                            ? "text-orange-600"
                            : "text-neutral-950 hover:text-orange-600"
                        }`}
                      >
                        <span>{t(link.key)}</span>
                        <ArrowUpRight
                          className="h-5 w-5 opacity-60"
                          strokeWidth={1.5}
                        />
                      </Link>
                    </m.li>
                  );
                })}
              </ul>

              <m.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-12"
              >
                <Link
                  href="/contact"
                  onClick={() =>
                    track("cta_click", {
                      label: "drawer_contact",
                      location: "mobile_drawer",
                      destination: "/contact",
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 w-full h-14 rounded-full bg-neutral-950 text-white text-base font-medium hover:bg-orange-500 transition-colors"
                >
                  {t("cta")}
                  <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
                </Link>

                <div className="mt-10 flex items-center justify-center">
                  <LanguageSwitcher />
                </div>

                <p className="mt-8 text-sm text-neutral-500 text-center">
                  Grand-Bassam, Côte d&apos;Ivoire
                  <br />
                  africandigitconsulting@gmail.com
                </p>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
