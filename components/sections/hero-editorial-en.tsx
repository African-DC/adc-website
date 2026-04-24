"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics/track";

const metrics = [
  { value: "2023", label: "Founded" },
  { value: "10+", label: "Digital experts" },
  { value: "50+", label: "Projects delivered" },
];

export function HeroEditorial() {
  return (
    <section
      className={`relative min-h-[100svh] pt-28 pb-12 md:pt-32 md:pb-12 flex flex-col bg-neutral-50 overflow-hidden`}
    >
      {/* Decorative faint grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Warm orange wash, very subtle */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-orange-300/25 blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
          {/* Brand mark + eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between flex-wrap gap-6 mb-10 md:mb-14 pb-8 border-b border-neutral-300/60"
          >
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
              Based in Sud-Comoé · Since 2023
            </span>
          </motion.div>

          {/* Headline — full width for proper line breaks */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[clamp(2.25rem,6vw,5.75rem)] font-semibold leading-[1] tracking-tight text-neutral-950 max-w-5xl"
          >
            Digital solutions with real{" "}
            <em className="text-orange-500 font-normal">social and human impact.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif mt-6 md:mt-8 text-xl md:text-2xl italic font-light text-neutral-700 max-w-xl"
          >
            Digital in service of people.
          </motion.p>

          {/* Description + CTAs row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
          >
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-md">
              African Digit Consulting builds digital solutions that are useful,
              durable, and grounded in the real lives of African communities.
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
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-orange-600 transition-colors whitespace-nowrap"
              >
                <span>See our case studies</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Metric strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-7xl mx-auto px-6 w-full mt-14 md:mt-16 pt-8 border-t border-neutral-300/70"
        >
          <dl className="grid grid-cols-3 gap-6 md:gap-12">
            {metrics.map((metric, i) => (
              <div key={metric.label} className="flex items-start gap-3 md:gap-4">
                <span className="text-[10px] md:text-xs text-neutral-400 tabular-nums tracking-wider mt-1 md:mt-2">
                  0{i + 1}
                </span>
                <div>
                  <dt
                    className="font-serif text-2xl md:text-4xl font-semibold text-neutral-950 leading-none mb-1 md:mb-2"
                  >
                    {metric.value}
                  </dt>
                  <dd className="text-[10px] md:text-xs tracking-[0.1em] uppercase text-neutral-500">
                    {metric.label}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
