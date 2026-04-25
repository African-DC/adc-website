"use client";

import { Facebook, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { track } from "@/lib/analytics/track";

const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/a-propos" },
  { key: "expertiseLong", href: "/notre-expertise" },
  { key: "workLong", href: "/nos-realisations" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

const PROJECT_LINKS = [
  { label: "KLASSCI", href: "/nos-realisations/klassci" },
  { label: "WOURI", href: "/nos-realisations/wouri" },
] as const;

const LEGAL_LINKS = [
  { key: "privacy", href: "/politique-confidentialite" },
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="relative bg-neutral-950 text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[140px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-24">
          <div className="lg:col-span-5">
            <div className="inline-block bg-white rounded-2xl p-4 mb-8">
              <Image
                src="/img/adc-logo.png"
                alt="African Digit Consulting"
                width={220}
                height={220}
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.15] max-w-md">
              {t("tagline")}{" "}
              <em className="text-orange-400 font-normal">{t("taglineEm")}</em>
            </h2>

            <p className="mt-6 text-neutral-400 leading-relaxed max-w-md">
              {t("description")}
            </p>

            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://web.facebook.com/p/African-Digit-Consulting-100092649035928/?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                onClick={() => track("footer_social_click", { platform: "facebook" })}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 text-white/70 hover:text-orange-400 hover:border-orange-400 transition-colors"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/company/klassci/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                onClick={() => track("footer_social_click", { platform: "linkedin" })}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 text-white/70 hover:text-orange-400 hover:border-orange-400 transition-colors"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            <div>
              <h3 className="text-xs tracking-[0.18em] uppercase text-neutral-400 mb-6">
                {t("navigation")}
              </h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => track("footer_link_click", { destination: link.href, category: "nav" })}
                      className="text-sm text-white/80 hover:text-orange-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      {tNav(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.18em] uppercase text-neutral-400 mb-6">
                {t("featuredProjects")}
              </h3>
              <ul className="space-y-3">
                {PROJECT_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => track("footer_link_click", { destination: link.href, category: "project" })}
                      className="text-sm text-white/80 hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        className="h-3 w-3 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.8}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.18em] uppercase text-neutral-400 mb-6">
                {t("contact")}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2.5 text-sm text-white/80">
                  <MapPin
                    className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <span>{t("addressLine")}</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/80">
                  <Phone
                    className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+2252732797523"
                      onClick={() => track("footer_link_click", { destination: "tel:+2252732797523", category: "contact" })}
                      className="hover:text-orange-400 transition-colors"
                    >
                      +225 27 32 797 523
                    </a>
                    <a
                      href="tel:+2250595459843"
                      onClick={() => track("footer_link_click", { destination: "tel:+2250595459843", category: "contact" })}
                      className="hover:text-orange-400 transition-colors"
                    >
                      +225 05 95 45 98 43
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/80">
                  <Mail
                    className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <a
                    href="mailto:africandigitconsulting@gmail.com"
                    onClick={() => track("footer_link_click", { destination: "mailto:africandigitconsulting@gmail.com", category: "contact" })}
                    className="hover:text-orange-400 transition-colors break-all"
                  >
                    africandigitconsulting@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-neutral-400">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <ul className="flex flex-wrap gap-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => track("footer_link_click", { destination: link.href, category: "legal" })}
                  className="hover:text-orange-400 transition-colors"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
