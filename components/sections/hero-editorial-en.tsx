"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics/track";

const metrics = [
  { value: "2023", label: "Founded" },
  { value: "10+", label: "Digital experts" },
  { value: "50+", label: "Projects delivered" },
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
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-neutral-950 pt-28 pb-12 text-white md:pt-32 md:pb-12">
      <div aria-hidden className="absolute inset-0">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={index === 0}
            className="home-hero-slide object-cover opacity-0"
            sizes="100vw"
            style={{ animationDelay: `${index * 6}s` }}
          />
        ))}
      </div>
      <div aria-hidden className="absolute inset-0 bg-neutral-950/30" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/68 to-neutral-950/36"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.45),rgba(10,10,10,0.12)_42%,rgba(10,10,10,0.64))]"
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-6 border-b border-white/20 pb-8 md:mb-14">
            <div className="relative h-16 w-auto rounded-lg bg-white/95 px-4 py-3 shadow-[0_20px_70px_rgba(0,0,0,0.28)] md:h-20">
              <Image
                src="/img/adc-logo.png"
                alt="African Digit Consulting"
                width={320}
                height={320}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-white/75 uppercase">
              <span className="inline-block h-px w-10 bg-orange-500" />
              Based in Sud-Comoé · Since 2023
            </span>
          </div>

          <h1 className="max-w-5xl font-serif text-5xl leading-[1] font-semibold text-white md:text-7xl lg:text-8xl">
            Digital solutions with real{" "}
            <em className="font-normal text-orange-500">
              social and human impact.
            </em>
          </h1>

          <p className="mt-6 max-w-xl font-serif text-xl font-light text-white/82 italic md:mt-8 md:text-2xl">
            Digital in service of people.
          </p>

          <div className="mt-10 grid grid-cols-1 items-start gap-8 md:mt-12 md:grid-cols-2 md:gap-12">
            <p className="max-w-md text-base leading-relaxed text-white/76 md:text-lg">
              African Digit Consulting builds digital solutions that are
              useful, durable, and grounded in the real lives of African
              communities.
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
                  <span>Start a project</span>
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
                <span>See our case studies</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 w-full max-w-7xl border-t border-white/20 px-6 pt-8 md:mt-16">
          <dl className="grid grid-cols-3 gap-6 md:gap-12">
            {metrics.map((metric, i) => (
              <div key={metric.label}>
                <dt className="mb-1 font-serif text-2xl leading-none font-semibold text-white md:mb-2 md:text-4xl">
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
