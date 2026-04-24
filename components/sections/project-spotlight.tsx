"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces-spotlight",
});

export function ProjectSpotlight() {
  return (
    <section
      className={`${fraunces.variable} relative py-24 md:py-32 bg-neutral-950 text-white overflow-hidden`}
    >
      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Orange glow */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 text-xs tracking-[0.2em] text-orange-300/90 uppercase mb-6"
        >
          <span className="inline-block h-px w-8 bg-orange-400" />
          Projet vedette · Étude de cas N° 01
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: "var(--font-fraunces-spotlight)" }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] max-w-3xl mb-16 md:mb-20"
        >
          Un SaaS que nous avons construit,{" "}
          <em className="text-orange-400 font-normal">utilisé chaque jour</em>{" "}
          par cinq grandes écoles africaines.
        </motion.h2>

        {/* Showcase */}
        <Link
          href="/nos-realisations/klassci"
          className="group block relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-orange-500/40 transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Left — text */}
            <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-10">
              <div>
                {/* Logo + KLASSCI wordmark */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-xl bg-white shadow-lg shadow-black/30 p-1.5 flex-shrink-0">
                    <Image
                      src="/img/projets/klassci/logo-klassci.png"
                      alt="Logo KLASSCI"
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>
                  <h3
                    style={{ fontFamily: "var(--font-fraunces-spotlight)" }}
                    className="text-4xl md:text-5xl font-semibold leading-none"
                  >
                    KLASSCI
                    <span className="text-orange-400">.</span>
                  </h3>
                </div>

                <p
                  style={{ fontFamily: "var(--font-fraunces-spotlight)" }}
                  className="text-xl md:text-2xl italic font-light text-white/80 leading-snug mb-8 max-w-md"
                >
                  Le SaaS qui réinvente la gestion des universités africaines.
                </p>

                <p className="text-neutral-400 leading-relaxed max-w-md">
                  Cinq établissements en production, de la filière BTS jusqu'au
                  doctorat. Planning, scolarité, finances, bulletins, paie.
                  Conçu, développé et maintenu par ADC.
                </p>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-3 gap-5 pt-8 border-t border-white/10 max-w-md">
                  {[
                    { value: "5", label: "Écoles en prod" },
                    { value: "LMD", label: "Licence · Master · Doctorat" },
                    { value: "24/7", label: "Disponible" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div
                        style={{ fontFamily: "var(--font-fraunces-spotlight)" }}
                        className="text-2xl md:text-3xl font-semibold text-white mb-1 leading-none"
                      >
                        {stat.value}
                      </div>
                      <div className="text-[11px] tracking-wide text-neutral-500 uppercase leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA line */}
              <div className="flex items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-2 text-white font-medium group-hover:text-orange-400 transition-colors">
                  Lire l'étude de cas complète
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-500">6 min de lecture</span>
              </div>
            </div>

            {/* Right — screenshot */}
            <div className="relative bg-gradient-to-br from-orange-500/10 via-neutral-900 to-neutral-950 p-6 md:p-10 lg:p-14 flex items-center justify-center overflow-hidden min-h-[360px]">
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                className="relative w-full transition-transform duration-700 group-hover:scale-[1.03] group-hover:-rotate-0"
              >
                <div className="absolute -inset-3 bg-gradient-to-br from-orange-500/20 to-transparent rounded-xl" />
                <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-orange-500/10 bg-neutral-950">
                  <Image
                    src="/img/projets/klassci/hero_section.png"
                    alt="Aperçu de l'interface KLASSCI"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
              {/* Decorative glow */}
              <div
                aria-hidden
                className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-orange-500/20 blur-[100px] pointer-events-none"
              />
            </div>
          </div>
        </Link>

        {/* Tenants strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 md:mt-16 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
        >
          <div className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase">
            Ils l'utilisent déjà
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-neutral-300">
            {[
              "ESBTP Abidjan",
              "ESBTP Yamoussoukro",
              "ISLG Rostan",
              "Hetec",
              "Presentation",
            ].map((tenant) => (
              <span key={tenant} className="font-medium">
                {tenant}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
