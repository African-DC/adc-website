"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics/track";

const heroImages = [
  "/img/home-hero/orange-village-stand.webp",
  "/img/home-hero/siade-demonstration.webp",
  "/img/home-hero/akwaba-klassci-evenement.webp",
  "/img/home-hero/akwaba-klassci-portrait.webp",
  "/img/home-hero/akwaba-klassci-echange.webp",
];

export function HeroEditorial() {
  return (
    <section className="relative flex h-[100svh] flex-col overflow-hidden bg-neutral-950 pt-24 pb-5 text-white md:pt-28 md:pb-7">
      <div aria-hidden className="absolute inset-0">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={index === 0}
            quality={95}
            className="home-hero-slide object-cover opacity-0"
            sizes="100vw"
            style={{ animationDelay: `${index * 6}s` }}
          />
        ))}
      </div>
      <div aria-hidden className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-between px-6">
        <div className="flex flex-wrap items-center justify-end gap-6 border-b border-white/20 pb-5">
          <span className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-white/75 uppercase">
            <span className="inline-block h-px w-10 bg-orange-500" />
            Basée dans le Sud-Comoé · Depuis 2023
          </span>
        </div>

        <div className="max-w-5xl pb-3 md:pb-8">
          <h1 className="font-serif text-4xl font-semibold leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Des solutions digitales à fort impact{" "}
            <em className="font-normal text-orange-500">social et humain.</em>
          </h1>

          <p className="mt-3 max-w-xl font-serif text-lg font-light text-white/82 italic md:mt-4 md:text-2xl">
            Le digital au service des peuples.
          </p>

          <div className="mt-4 grid grid-cols-1 items-start gap-5 md:mt-5 md:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] md:gap-10 lg:gap-16">
            <p className="max-w-lg text-sm leading-[1.08] text-white/78 md:text-base lg:text-lg">
              African Digit Consulting conçoit des solutions digitales utiles,
              durables et adaptées aux réalités locales des communautés
              africaines.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-end md:pt-1 lg:translate-x-6">
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
      </div>
    </section>
  );
}
