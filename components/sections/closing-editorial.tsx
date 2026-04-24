"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ClosingEditorial() {
  return (
    <section
      className={`relative py-24 md:py-36 bg-neutral-950 text-white overflow-hidden`}
    >
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-orange-500/15 blur-[150px] pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-400 uppercase mb-10"
        >
          <span className="inline-block h-px w-10 bg-orange-400" />
          Une agence proche de vous, orientée résultats
        </motion.div>

        {/* Big statement */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontFamily: "var(--font-fraunces)" }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-white mb-12 md:mb-16"
        >
          Nous ne livrons pas des projets.
          <br />
          <em className="text-orange-400 font-normal">
            Nous livrons des résultats.
          </em>
        </motion.h2>

        {/* Testimonial quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-14"
        >
          <span
            aria-hidden
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="block text-7xl md:text-8xl italic leading-none text-orange-400/60 mb-2 select-none"
          >
            «
          </span>
          <p
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="text-2xl md:text-3xl italic font-light text-white/90 leading-snug mb-8"
          >
            ADC a compris notre métier avant de nous proposer une solution
            technique. C'est rare, et c'est ce qui fait toute la différence
            sur la durée.
          </p>
          <footer className="flex items-center justify-center gap-4 text-sm">
            <span className="block h-px w-10 bg-white/40" />
            <span className="text-left">
              <span className="block font-medium text-white">
                Direction académique
              </span>
              <span className="block text-neutral-400 text-xs tracking-[0.1em] uppercase mt-1">
                Client KLASSCI · Côte d'Ivoire
              </span>
            </span>
          </footer>
        </motion.blockquote>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button asChild variant="cta" size="cta">
            <Link href="/contact">
              <span>Parler avec notre équipe</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Link
            href="/nos-realisations"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-orange-400 transition-colors"
          >
            Voir nos études de cas
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
