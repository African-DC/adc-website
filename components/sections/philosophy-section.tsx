"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, MapPin } from "lucide-react";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces-philo",
});

const pillars = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Nous créons des solutions digitales utiles, durables et adaptées.",
    detail:
      "Pas de gadget, pas de surcouche inutile. Chaque fonctionnalité que nous construisons existe pour une raison précise et mesurable.",
  },
  {
    number: "02",
    icon: Users,
    title: "Impact humain",
    description:
      "Nous plaçons l'humain au cœur de chaque projet.",
    detail:
      "Nous passons du temps avec les équipes qui utiliseront nos outils, avant d'écrire la première ligne de code. Le produit naît du terrain.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Réalités locales",
    description:
      "Nos technologies répondent aux besoins concrets de nos communautés.",
    detail:
      "Connectivité variable, contraintes budgétaires, contextes culturels africains. Nos solutions sont pensées pour fonctionner ici, vraiment.",
  },
];

export function PhilosophySection() {
  return (
    <section
      className={`${fraunces.variable} relative py-24 md:py-36 bg-white overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase mb-8"
          >
            <span className="inline-block h-px w-10 bg-orange-500" />
            Notre philosophie
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: "var(--font-fraunces-philo)" }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] text-neutral-950"
          >
            Trois convictions qui guident{" "}
            <em className="text-orange-500 font-normal">chaque ligne de code</em>{" "}
            que nous écrivons.
          </motion.h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative flex flex-col"
              >
                {/* Number + icon */}
                <div className="flex items-center gap-4 mb-8">
                  <span
                    style={{ fontFamily: "var(--font-fraunces-philo)" }}
                    className="text-5xl md:text-6xl italic font-light text-orange-500/80 leading-none"
                  >
                    {pillar.number}
                  </span>
                  <div className="flex items-center justify-center h-11 w-11 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-800">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{ fontFamily: "var(--font-fraunces-philo)" }}
                  className="text-3xl md:text-[2rem] font-medium leading-tight text-neutral-950 mb-5"
                >
                  {pillar.title}
                </h3>

                {/* Short description, punchy */}
                <p className="text-lg text-neutral-800 leading-snug mb-5 font-medium">
                  {pillar.description}
                </p>

                {/* Detail */}
                <p className="text-[15px] text-neutral-500 leading-relaxed">
                  {pillar.detail}
                </p>

                {/* Bottom rule */}
                <span
                  aria-hidden
                  className="block mt-8 h-px w-full bg-neutral-200"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
