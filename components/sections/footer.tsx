"use client";

import { Facebook, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces-footer",
});

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Notre expertise", href: "/notre-expertise" },
  { label: "Nos réalisations", href: "/nos-realisations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const projectLinks = [
  { label: "KLASSCI", href: "/nos-realisations/klassci" },
  { label: "Wouri", href: "/nos-realisations/wouri" },
];

const legalLinks = [
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];

export function Footer() {
  return (
    <footer
      className={`${fraunces.variable} relative bg-neutral-950 text-white overflow-hidden`}
    >
      {/* Subtle glow */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[140px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-10">
        {/* Top — big editorial block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-24">
          {/* Brand */}
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

            <h2
              style={{ fontFamily: "var(--font-fraunces-footer)" }}
              className="text-3xl md:text-4xl font-medium leading-[1.15] max-w-md"
            >
              Le digital au service{" "}
              <em className="text-orange-400 font-normal">des peuples.</em>
            </h2>

            <p className="mt-6 text-neutral-400 leading-relaxed max-w-md">
              African Digit Consulting conçoit des solutions digitales utiles,
              durables et adaptées aux réalités locales africaines.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://web.facebook.com/p/African-Digit-Consulting-100092649035928/?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 text-white/70 hover:text-orange-400 hover:border-orange-400 transition-colors"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/company/african-digit-consulting/?originalSubdomain=ci"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 text-white/70 hover:text-orange-400 hover:border-orange-400 transition-colors"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {/* Nav */}
            <div>
              <h3 className="text-xs tracking-[0.18em] uppercase text-neutral-500 mb-6">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 hover:text-orange-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-xs tracking-[0.18em] uppercase text-neutral-500 mb-6">
                Projets vedettes
              </h3>
              <ul className="space-y-3">
                {projectLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
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

            {/* Contact */}
            <div>
              <h3 className="text-xs tracking-[0.18em] uppercase text-neutral-500 mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2.5 text-sm text-white/80">
                  <MapPin
                    className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <span>Abidjan, Côte d'Ivoire</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/80">
                  <Phone
                    className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <a
                    href="tel:+2252732797538"
                    className="hover:text-orange-400 transition-colors"
                  >
                    +225 27 32 797 538
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/80">
                  <Mail
                    className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <a
                    href="mailto:contact@africandigitconsulting.com"
                    className="hover:text-orange-400 transition-colors break-all"
                  >
                    contact@africandigitconsulting.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} African Digit Consulting. Tous droits
            réservés.
          </p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-orange-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
