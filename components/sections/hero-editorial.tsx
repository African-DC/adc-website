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

const heroImages = [
  "/img/home-hero/atelier-partenaires.webp",
  "/img/home-hero/presentation-solution.webp",
  "/img/home-hero/session-travail.webp",
  "/img/home-hero/demonstration-produit.webp",
  "/img/home-hero/reunion-strategie.webp",
];

export function HeroEditorial() {
  return (
    <section className="relative flex h-[100svh] flex-col overflow-hidden bg-neutral-950 pt-24 pb-5 text-white md:pt-28 md:pb-7">
      <div aria-hidden className="absolute inset-0">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className="home-hero-slide absolute inset-0 opacity-0"
            style={{ animationDelay: `${index * 6}s` }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              className="scale-110 object-cover opacity-35 blur-lg"
              sizes="100vw"
            />
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              className="object-contain"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div aria-hidden className="absolute inset-0 bg-neutral-950/36" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-neutral-950/92 via-neutral-950/70 to-neutral-950/44"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.5),rgba(10,10,10,0.12)_42%,rgba(10,10,10,0.72))]"
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-between px-6">
        <div className="flex flex-wrap items-center justify-end gap-6 border-b border-white/20 pb-5">
          <span className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-white/75 uppercase">
              <span className="inline-block h-px w-10 bg-orange-500" />
              Basée dans le Sud-Comoé · Depuis 2023
            </span>
        </div>

        <div className="max-w-4xl">
          <h1 className="font-serif text-4xl font-semibold leading-[1.04] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Des solutions digitales à fort impact{" "}
            <em className="font-normal text-orange-500">social et humain.</em>
          </h1>

          <p className="mt-4 max-w-xl font-serif text-lg font-light text-white/82 italic md:mt-6 md:text-2xl">
            Le digital au service des peuples.
          </p>

          <div className="mt-6 grid grid-cols-1 items-start gap-5 md:mt-8 md:grid-cols-2 md:gap-10">
            <p className="max-w-md text-sm leading-relaxed text-white/76 md:text-base lg:text-lg">
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
                className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-white transition-colors hover:text-orange-300"
              >
                <span>Voir nos études de cas</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 md:pt-5">
          <dl className="grid grid-cols-3 gap-4 md:gap-12">
            {metrics.map((metric, i) => (
              <div key={metric.label}>
                <dt className="mb-1 font-serif text-xl leading-none font-semibold text-white md:mb-2 md:text-3xl lg:text-4xl">
                  <span
                    aria-hidden
                    className="mb-2 block font-sans text-[10px] font-normal tracking-wider text-white/45 tabular-nums md:text-xs"
                  >
                    0{i + 1}
                  </span>
                  {metric.value}
                </dt>
                <dd className="text-[10px] tracking-[0.1em] text-white/65 uppercase md:text-xs">
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
