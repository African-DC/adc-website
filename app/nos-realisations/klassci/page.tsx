"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  CalendarClock,
  Wallet,
  GraduationCap,
  NotebookPen,
  Users,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const KLASSCI_URL = "https://klassci.com";

const tenants = [
  "ESBTP Abidjan",
  "ESBTP Yamoussoukro",
  "ISLG Rostan",
  "Hetec",
];

const metrics = [
  { value: "4", label: "Établissements en production" },
  { value: "3", label: "Cycles LMD couverts" },
  { value: "Temps réel", label: "Suivi financier" },
];

type Feature = {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const features: Feature[] = [
  {
    number: "01",
    icon: <CalendarClock className="h-5 w-5" />,
    title: "Planning général",
    description:
      "Construire, visualiser et ajuster le planning pédagogique de toute une année universitaire. Vue globale pour les directions, vue filtrée pour chaque filière.",
    image: "/img/projets/klassci/planning-general.png",
    imageAlt: "Vue planning général dans KLASSCI",
  },
  {
    number: "02",
    icon: <Wallet className="h-5 w-5" />,
    title: "Suivi financier en temps réel",
    description:
      "Les paiements des étudiants, les échéances, les impayés et la trésorerie de l'école, consolidés en une seule vue. Les équipes comptables gagnent des heures chaque semaine.",
    image: "/img/projets/klassci/suivi-financier.png",
    imageAlt: "Dashboard suivi financier KLASSCI",
  },
  {
    number: "03",
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Parcours LMD",
    description:
      "Licence, Master, Doctorat. Unités d'enseignement, crédits ECTS, prérequis, semestres. La logique LMD complète, modélisée proprement pour le contexte africain.",
    image: "/img/projets/klassci/parcours-lmd.png",
    imageAlt: "Configuration parcours LMD",
  },
  {
    number: "04",
    icon: <NotebookPen className="h-5 w-5" />,
    title: "Saisie des notes et bulletins",
    description:
      "Les enseignants saisissent les notes depuis n'importe où. Les bulletins sont générés automatiquement, avec mentions, rangs et observations. Plus de Excel envoyés par mail.",
    image: "/img/projets/klassci/saisie-notes-bulletins.png",
    imageAlt: "Interface de saisie des notes et bulletins",
  },
  {
    number: "05",
    icon: <Users className="h-5 w-5" />,
    title: "Gestion du personnel",
    description:
      "Enseignants, administration, intervenants vacataires. Affectations, disponibilités, heures effectuées, paie préparée. Le dossier RH de l'école, à jour.",
    image: "/img/projets/klassci/gestion-personnel.png",
    imageAlt: "Module gestion du personnel",
  },
  {
    number: "06",
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Résultats et analytics",
    description:
      "Les résultats par classe, par filière, par session. Taux de réussite, moyennes générales, évolution d'année en année. Des données claires pour décider.",
    image: "/img/projets/klassci/resultats.png",
    imageAlt: "Vue résultats et analytics",
  },
];

export default function KlassciCaseStudyPage() {
  return (
    <div className={`bg-neutral-50 text-neutral-950`}>
      <ScrollProgress />
      <NavbarDemo />

      <main className="relative overflow-hidden">
        {/* ===================== HERO ===================== */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-7xl mx-auto px-6">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <Link
                href="/nos-realisations"
                className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-orange-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Toutes les réalisations</span>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left column — editorial text */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-3 text-xs tracking-[0.18em] text-neutral-500 uppercase mb-8"
                >
                  <span className="h-px w-8 bg-orange-500" />
                  <span>Étude de cas N° 01 · Projet vedette</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="flex items-center gap-5 md:gap-7 mb-8"
                >
                  <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-white border border-neutral-200 shadow-sm p-2 flex-shrink-0">
                    <Image
                      src="/img/projets/klassci/logo-klassci.png"
                      alt="Logo KLASSCI"
                      fill
                      className="object-contain p-2"
                      priority
                    />
                  </div>
                  <h1
                    className="font-serif text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tight"
                  >
                    KLASSCI<span className="text-orange-500">.</span>
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="font-serif text-2xl md:text-3xl italic font-light text-neutral-700 leading-snug mb-8 max-w-2xl"
                >
                  Le SaaS qui réinvente la gestion des{" "}
                  <span className="text-orange-600 not-italic font-medium">
                    universités africaines
                  </span>
                  .
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="text-lg text-neutral-600 leading-relaxed max-w-xl"
                >
                  Un produit conçu de bout en bout par African Digit Consulting,
                  pensé pour les grandes écoles et universités qui veulent
                  sortir d'Excel et gérer leurs opérations académiques comme un
                  vrai SaaS moderne.
                </motion.p>

                {/* Metadata strip */}
                <motion.dl
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-neutral-200"
                >
                  {[
                    { label: "Secteur", value: "Enseignement supérieur" },
                    { label: "Stack", value: "Laravel · Blade · Alpine" },
                    { label: "Déploiement", value: "Multi-tenants" },
                    { label: "Statut", value: "En production" },
                  ].map((item) => (
                    <div key={item.label}>
                      <dt className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 mb-2">
                        {item.label}
                      </dt>
                      <dd className="text-sm font-medium text-neutral-800">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </motion.dl>
              </div>

              {/* Right column — hero screenshot, tilted */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: 1.5 }}
                transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                className="lg:col-span-5 relative"
              >
                <div className="relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl -rotate-2" />
                  <div className="relative rounded-xl overflow-hidden border border-neutral-200 shadow-2xl shadow-neutral-900/10 bg-white">
                    <Image
                      src="/img/projets/klassci/hero_section.png"
                      alt="Dashboard KLASSCI"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>

                {/* Floating tag */}
                <div className="absolute -bottom-6 -left-6 bg-white border border-neutral-200 rounded-full px-5 py-2 shadow-lg shadow-neutral-900/5 flex items-center gap-2 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Live sur klassci.com
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================== METRICS ===================== */}
        <section className="relative py-16 md:py-20 border-y border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div
                    className="font-serif text-5xl md:text-6xl font-semibold text-neutral-950 mb-2 leading-none"
                  >
                    {metric.value}
                  </div>
                  <div className="text-sm text-neutral-500 tracking-wide">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== PROBLEM / CONTEXTE ===================== */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-xs tracking-[0.18em] text-neutral-500 uppercase"
            >
              <span className="inline-block h-px w-8 bg-orange-500 mr-3 align-middle" />
              Le contexte
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-8"
            >
              La plupart des écoles supérieures africaines gèrent toute leur
              scolarité dans des{" "}
              <em className="text-orange-600">fichiers Excel éparpillés</em>.
              Nous avons construit l'alternative.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg prose-neutral max-w-none text-neutral-600 space-y-5"
            >
              <p>
                KLASSCI est né d'un constat simple. Entre les inscriptions, la
                scolarité, les notes, les bulletins, les paiements et la paie
                des enseignants, une école supérieure gère des centaines de
                flux de données critiques. La plupart le font avec des outils
                qui n'ont pas été conçus pour ça.
              </p>
              <p>
                Nous avons pris le temps de comprendre le métier en profondeur,
                avec de vraies écoles partenaires dès le premier jour. Le
                résultat est un SaaS multi-tenants qui sert aujourd'hui quatre
                établissements en production, de la filière BTS jusqu'au
                doctorat.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===================== FEATURES ===================== */}
        <section className="relative pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-xs tracking-[0.18em] text-neutral-500 uppercase"
            >
              <span className="inline-block h-px w-8 bg-orange-500 mr-3 align-middle" />
              Ce que nous avons construit
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium max-w-3xl leading-tight"
            >
              Six modules pensés pour le quotidien des équipes académiques.
            </motion.h2>
          </div>

          <div className="max-w-7xl mx-auto px-6 space-y-32 md:space-y-40">
            {features.map((feature, index) => {
              const imageFirst = index % 2 === 1;
              return (
                <article
                  key={feature.number}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  {/* Text side */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`lg:col-span-5 ${
                      imageFirst ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className="font-serif text-5xl italic font-light text-orange-500/80"
                      >
                        {feature.number}
                      </span>
                      <div className="flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 bg-white text-neutral-800">
                        {feature.icon}
                      </div>
                    </div>
                    <h3
                      className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-5"
                    >
                      {feature.title}
                    </h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>

                  {/* Image side */}
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className={`lg:col-span-7 ${
                      imageFirst ? "lg:order-1" : ""
                    }`}
                  >
                    <div
                      className="group relative"
                      style={{
                        transform: `rotate(${
                          imageFirst ? "-1.2deg" : "1.2deg"
                        })`,
                      }}
                    >
                      <div className="absolute -inset-3 bg-gradient-to-br from-orange-500/8 to-transparent rounded-2xl" />
                      <div className="relative rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-xl shadow-neutral-900/10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-neutral-900/15">
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt}
                          width={1400}
                          height={900}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </motion.div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ===================== TENANTS ===================== */}
        <section className="py-24 md:py-32 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 text-xs tracking-[0.18em] text-neutral-500 uppercase"
                >
                  <span className="inline-block h-px w-8 bg-orange-500 mr-3 align-middle" />
                  Ils l'utilisent chaque jour
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6"
                >
                  Quatre établissements en production, d'Abidjan à
                  Yamoussoukro.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-neutral-600 leading-relaxed"
                >
                  Chaque tenant a ses propres filières, ses règles de notation,
                  son année académique, sa grille tarifaire. Une base de code,
                  quatre contextes bien réels.
                </motion.p>
              </div>

              <ul className="lg:col-span-7 divide-y divide-neutral-200 border-t border-b border-neutral-200">
                {tenants.map((tenant, i) => (
                  <motion.li
                    key={tenant}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-center justify-between py-5"
                  >
                    <span className="flex items-center gap-5">
                      <span className="text-xs tabular-nums text-neutral-400 tracking-wide w-6">
                        0{i + 1}
                      </span>
                      <span className="text-lg md:text-xl font-medium text-neutral-900">
                        {tenant}
                      </span>
                    </span>
                    <span className="text-xs uppercase tracking-wider text-neutral-400">
                      Actif
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===================== HUMAN MOMENT ===================== */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              {/* Portrait vertical */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:col-span-5"
              >
                <div className="relative mx-auto max-w-sm md:max-w-none">
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl -rotate-2" />
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200 shadow-2xl shadow-neutral-900/15 border border-neutral-200">
                    <Image
                      src="/img/TEAM_ADC/marcel-djedjeli.png"
                      alt="Marcel Djedje-li"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="md:col-span-7"
              >
                <div className="mb-8 text-xs tracking-[0.18em] text-neutral-500 uppercase">
                  <span className="inline-block h-px w-8 bg-orange-500 mr-3 align-middle" />
                  Parole du développeur en chef
                </div>

                <span
                  aria-hidden
                  className="font-serif block text-7xl md:text-8xl leading-none text-orange-500/80 mb-4 select-none"
                >
                  «
                </span>

                <blockquote
                  className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] italic font-light leading-[1.2] text-neutral-900 mb-10"
                >
                  On ne construit pas un outil pour les universités africaines
                  sans passer du temps{" "}
                  <span className="text-orange-600 not-italic font-medium">
                    dans les universités africaines.
                  </span>
                </blockquote>

                <figcaption className="flex items-center gap-4 text-sm">
                  <span className="block h-px w-10 bg-neutral-900" />
                  <span>
                    <span className="block font-medium text-neutral-900">
                      Marcel Djedje-li
                    </span>
                    <span className="block text-neutral-500 text-xs tracking-[0.12em] uppercase mt-1">
                      Chef du département développement · African Digit Consulting
                    </span>
                  </span>
                </figcaption>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================== CTA DEEPLINK ===================== */}
        <section className="py-24 md:py-32">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <Link
                href={KLASSCI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-red-500 p-[1px]"
              >
                <div className="relative rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-8 md:px-16 py-16 md:py-24 overflow-hidden">
                  {/* Decorative grid lines */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Glow */}
                  <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl group-hover:bg-orange-500/30 transition-colors duration-700" />

                  <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                    <div>
                      <div className="inline-flex items-center gap-3 text-xs tracking-[0.18em] text-orange-300/80 uppercase mb-6">
                        <span className="h-px w-8 bg-orange-400" />
                        Explorez le produit
                      </div>
                      <h2
                        className="font-serif text-white text-5xl md:text-7xl font-medium leading-[1] mb-4"
                      >
                        klassci
                        <span className="text-orange-400">.com</span>
                      </h2>
                      <p className="text-neutral-400 text-lg max-w-md">
                        Découvrez KLASSCI en action, demandez une démo ou
                        contactez directement l'équipe produit.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-white">
                      <span className="text-sm tracking-wider uppercase text-neutral-400 hidden md:inline">
                        Ouvrir le site
                      </span>
                      <span className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-white text-neutral-950 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 group-hover:-translate-y-1">
                        <ArrowUpRight
                          className="h-7 w-7 md:h-8 md:w-8 transition-transform duration-500 group-hover:rotate-45"
                          strokeWidth={1.5}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Secondary links */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
              <Link
                href="/nos-realisations"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-orange-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Voir toutes les réalisations</span>
              </Link>
              <Button asChild variant="cta" size="cta">
                <Link href="/contact">
                  <span>Travailler avec ADC</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
