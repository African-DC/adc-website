"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics/track";

const metrics = [
  { value: "2023", label: "Année de fondation" },
  { value: "10+", label: "Experts digitaux" },
  { value: "50+", label: "Projets livrés" },
];

export function HeroEditorial() {
  return (
    <section
      className={`relative min-h-[100svh] pt-28 pb-12 md:pt-32 md:pb-12 flex flex-col bg-neutral-50 overflow-hidden`}
    >
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
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-orange-300/25 blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
          <div className="flex items-center justify-between flex-wrap gap-6 mb-10 md:mb-14 pb-8 border-b border-neutral-300/60">
            <div className="relative h-20 md:h-28 w-auto">
              <Image
                src="/img/adc-logo.png"
                alt="African Digit Consulting"
                width={320}
                height={320}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase">
              <span className="inline-block h-px w-10 bg-orange-500" />
              Basée dans le Sud-Comoé · Depuis 2023
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2.25rem,6vw,5.75rem)] font-semibold leading-[1] tracking-tight text-neutral-950 max-w-5xl">
            Des solutions digitales à fort impact{" "}
            <em className="text-orange-500 font-normal">social et humain.</em>
          </h1>

          <p className="font-serif mt-6 md:mt-8 text-xl md:text-2xl italic font-light text-neutral-700 max-w-xl">
            Le digital au service des peuples.
          </p>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-md">
              African Digit Consulting conçoit des solutions digitales utiles,
              durables et adaptées aux réalités locales des communautés
              africaines.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-end">
              <Button asChild variant="cta" size="cta">
                <Link
                  href="/contact"
                  onClick={() =>
                    track("home_hero_cta_click", {
                      cta: "start_project",
                      destination: "/contact",
                    })
                  }
                >
                  <span>Démarrer un projet</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="/nos-realisations"
                onClick={() =>
                  track("home_hero_cta_click", {
                    cta: "see_work",
                    destination: "/nos-realisations",
                  })
                }
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-orange-600 transition-colors whitespace-nowrap"
              >
                <span>Voir nos études de cas</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full mt-14 md:mt-16 pt-8 border-t border-neutral-300/70">
          <dl className="grid grid-cols-3 gap-6 md:gap-12">
            {metrics.map((metric, i) => (
              <div key={metric.label}>
                <dt className="font-serif text-2xl md:text-4xl font-semibold text-neutral-950 leading-none mb-1 md:mb-2">
                  <span aria-hidden className="block text-[10px] md:text-xs text-neutral-500 tabular-nums tracking-wider mb-2 font-sans font-normal">
                    0{i + 1}
                  </span>
                  {metric.value}
                </dt>
                <dd className="text-[10px] md:text-xs tracking-[0.1em] uppercase text-neutral-600">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
