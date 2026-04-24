"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces-hero",
});

const metrics = [
  { value: "2016", label: "Année de fondation" },
  { value: "10+", label: "Experts digitaux" },
  { value: "50+", label: "Projets livrés" },
  { value: "4", label: "Écoles en production" },
];

export function HeroEditorial() {
  return (
    <section
      className={`${fraunces.variable} relative min-h-[92vh] pt-28 pb-12 md:pt-36 md:pb-16 flex flex-col bg-neutral-50 overflow-hidden`}
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
            className="flex items-center justify-between flex-wrap gap-6 mb-12 md:mb-16 pb-8 border-b border-neutral-300/60"
          >
            <div className="relative h-16 md:h-20 w-auto">
              <Image
                src="/img/adc-logo.png"
                alt="African Digit Consulting"
                width={240}
                height={240}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase">
              <span className="inline-block h-px w-10 bg-orange-500" />
              Basée à Abidjan · Depuis 2016
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            {/* Headline (left) */}
            <div className="lg:col-span-8">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{ fontFamily: "var(--font-fraunces-hero)" }}
                className="text-[clamp(2.75rem,7.8vw,7rem)] font-semibold leading-[0.94] tracking-tight text-neutral-950"
              >
                Des solutions digitales
                <br />
                à fort impact{" "}
                <em className="text-orange-500 font-normal">
                  social et humain.
                </em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                style={{ fontFamily: "var(--font-fraunces-hero)" }}
                className="mt-8 text-2xl md:text-3xl italic font-light text-neutral-700 max-w-xl"
              >
                Le digital au service des peuples.
              </motion.p>
            </div>

            {/* Right — editorial detail */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-neutral-300 max-w-md"
            >
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                African Digit Consulting conçoit des solutions digitales
                utiles, durables et adaptées aux réalités locales des
                communautés africaines.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="cta" size="cta">
                  <Link href="/contact">
                    <span>Démarrer un projet</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Link
                  href="/nos-realisations/klassci"
                  className="inline-flex items-center gap-2 h-auto px-6 py-4 text-sm font-medium text-neutral-900 hover:text-orange-600 transition-colors"
                >
                  <span>Voir notre étude de cas</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Metric strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-7xl mx-auto px-6 w-full mt-16 md:mt-20 pt-10 border-t border-neutral-300/70"
        >
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((metric, i) => (
              <div key={metric.label} className="flex items-start gap-4">
                <span className="text-xs text-neutral-400 tabular-nums tracking-wider mt-1">
                  0{i + 1}
                </span>
                <div>
                  <dt
                    style={{ fontFamily: "var(--font-fraunces-hero)" }}
                    className="text-3xl md:text-4xl font-semibold text-neutral-950 leading-none mb-2"
                  >
                    {metric.value}
                  </dt>
                  <dd className="text-xs tracking-[0.1em] uppercase text-neutral-500">
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
