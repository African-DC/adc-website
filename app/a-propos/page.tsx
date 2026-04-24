"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import ScrollProgress from "@/components/ui/scroll-progress";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Lightbulb, Users, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const historyItems = [
  {
    year: "2023",
    title: "Naissance d'ADC",
    description:
      "African Digit Consulting est fondée dans le Sud-Comoé par un groupe d'experts passionnés par le digital en Afrique.",
  },
  {
    year: "2024",
    title: "Expansion des services",
    description:
      "Élargissement de l'offre : applications mobiles, gestion de réseaux sociaux, accompagnement stratégique.",
  },
  {
    year: "2025",
    title: "Partenariats internationaux",
    description:
      "Collaborations avec des partenaires technologiques internationaux pour enrichir notre expertise.",
  },
  {
    year: "2026",
    title: "ADC aujourd'hui",
    description:
      "Une équipe de plus de 10 experts digitaux servant des clients à travers l'Afrique, avec deux produits signature : KLASSCI et WOURI.",
  },
];

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
    description: "Nous plaçons l'humain au cœur de chaque projet.",
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

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title="Le digital au service des peuples."
        subtitle="Depuis 2023, nous construisons des solutions digitales pensées pour les réalités africaines."
        eyebrow="À propos · Sud-Comoé · Depuis 2023"
        breadcrumbs={[{ label: "À propos", href: "/a-propos" }]}
      />

      <main className="overflow-hidden bg-white">
        {/* ===================== NOTRE ENTREPRISE ===================== */}
        <section className="py-24 md:py-32 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7"
              >
                <div className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase">
                  <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
                  Notre entreprise
                </div>
                <h2
                  className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] text-neutral-950 mb-8"
                >
                  Construire des technologies{" "}
                  <em className="text-orange-500 font-normal">
                    utiles, depuis le Sud-Comoé
                  </em>
                  , pour l'Afrique.
                </h2>
                <div className="space-y-5 text-neutral-600 text-lg leading-relaxed max-w-2xl">
                  <p>
                    African Digit Consulting conçoit des solutions digitales à
                    fort impact social et humain, pensées depuis le Sud-Comoé pour
                    l'ensemble du continent africain.
                  </p>
                  <p>
                    Notre mission est simple : construire des technologies
                    utiles au service des réalités locales. Nous plaçons
                    l'humain au cœur de chaque projet et nous engageons à
                    livrer des solutions durables, accessibles, et adaptées
                    aux besoins concrets de nos communautés.
                  </p>
                  <p>
                    Nos deux produits phares, KLASSCI et WOURI, illustrent
                    cette démarche : l'un transforme la gestion des
                    écoles africaines, l'autre aide les agriculteurs
                    face au changement climatique.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="lg:col-span-5"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl -rotate-2" />
                  <div
                    className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl shadow-neutral-900/10 bg-neutral-100"
                    style={{ transform: "rotate(1.5deg)" }}
                  >
                    <Image
                      src="/img/TEAM_ADC/BEDE Abel Josias Manager.webp"
                      alt="Bede Abel Josias, Manager général ADC"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                  <figcaption className="mt-6 text-sm text-neutral-500 max-w-xs">
                    <span className="block font-medium text-neutral-900 mb-1">
                      Bede Abel Josias
                    </span>
                    Manager général, fondateur · Avec ADC depuis 2023
                  </figcaption>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================== PILIERS ===================== */}
        <section className="py-24 md:py-32 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16 md:mb-24">
              <div className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase">
                <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
                Nos valeurs
              </div>
              <h2
                className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] text-neutral-950"
              >
                Trois convictions,{" "}
                <em className="text-orange-500 font-normal">
                  aucune concession
                </em>
                .
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.article
                    key={pillar.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <span
                        className="font-serif text-5xl md:text-6xl italic font-light text-orange-500/80 leading-none"
                      >
                        {pillar.number}
                      </span>
                      <div className="flex items-center justify-center h-11 w-11 rounded-full border border-neutral-200 bg-white text-neutral-800">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3
                      className="font-serif text-3xl md:text-[2rem] font-medium leading-tight text-neutral-950 mb-5"
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-lg text-neutral-800 leading-snug mb-5 font-medium">
                      {pillar.description}
                    </p>
                    <p className="text-[15px] text-neutral-500 leading-relaxed">
                      {pillar.detail}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== HISTOIRE / TIMELINE ===================== */}
        <section className="py-24 md:py-32 border-t border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20 items-end">
              <div className="lg:col-span-7">
                <div className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase">
                  <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
                  Notre histoire
                </div>
                <h2
                  className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] text-neutral-950"
                >
                  Trois ans plus tard,{" "}
                  <em className="text-orange-500 font-normal">
                    la même question
                  </em>{" "}
                  : qu'est-ce qui fonctionne vraiment ?
                </h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 text-lg text-neutral-600 leading-relaxed lg:pl-10 lg:border-l border-neutral-300"
              >
                Les outils changent, les frameworks passent. Ce qui reste :
                la discipline de faire des choses utiles, solides, livrées à
                temps.
              </motion.p>
            </div>

            <ScrollTimeline />
          </div>
        </section>

        {/* ===================== CTA ===================== */}
        <section className="py-24 md:py-32 bg-neutral-950 text-white relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-orange-500/15 blur-[140px] pointer-events-none"
          />
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-400 uppercase mb-8">
              <span className="inline-block h-px w-10 bg-orange-400" />
              Envie d'en discuter ?
            </div>
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-12 md:mb-14"
            >
              Parlons de{" "}
              <em className="text-orange-400 font-normal">
                ce que vous voulez construire
              </em>
              .
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild variant="cta" size="cta">
                <Link href="/contact">
                  <span>Démarrer un projet</span>
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function ScrollTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 35%"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0]
  );

  return (
    <div
      ref={containerRef}
      className="relative md:pl-[25%] pl-10 md:pl-0 md:grid md:grid-cols-12"
    >
      {/* Rail (track + progress) — fixed to the left on mobile, centered on a col on desktop */}
      <div
        aria-hidden
        className="absolute md:col-span-1 md:col-start-5 top-0 bottom-0 left-4 md:left-auto w-px md:w-[2px] pointer-events-none"
        style={{ transform: "translateX(-50%)" }}
      >
        {/* Static grey rail */}
        <div className="absolute inset-0 bg-neutral-200" />
        {/* Progressive orange line */}
        <motion.div
          className="absolute inset-x-0 top-0 origin-top bg-orange-500"
          style={{ scaleY: lineScaleY, height: "100%" }}
        />
        {/* Animated dot */}
        <motion.div
          className="absolute -left-[7px] md:-left-[8px] h-4 w-4 md:h-5 md:w-5 rounded-full bg-orange-500 border-[3px] md:border-4 border-white shadow-[0_0_0_3px_rgba(249,115,22,0.22)]"
          style={{ top: dotTop, opacity: dotOpacity, translateY: "-50%" }}
        />
      </div>

      {/* Items */}
      <ol className="md:col-span-12 md:grid md:grid-cols-12 md:gap-10 space-y-14 md:space-y-0">
        {historyItems.map((item, i) => (
          <motion.li
            key={item.year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="relative md:col-span-12 md:grid md:grid-cols-12 md:gap-10 md:items-baseline md:py-8 first:md:pt-0 last:md:pb-0"
          >
            {/* Year (left 4 cols on desktop) */}
            <div className="md:col-span-4 md:text-right md:pr-14">
              <span
                className="font-serif block text-5xl md:text-[5rem] font-semibold text-orange-500/85 leading-none"
              >
                {item.year}
              </span>
            </div>

            {/* Spacer col for rail (col 5) */}
            <div className="hidden md:block md:col-span-1" />

            {/* Content (right 7 cols on desktop) */}
            <div className="md:col-span-7 mt-3 md:mt-0 md:pl-2">
              <h3
                className="font-serif text-2xl md:text-3xl font-medium text-neutral-950 mb-3 leading-tight"
              >
                {item.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
