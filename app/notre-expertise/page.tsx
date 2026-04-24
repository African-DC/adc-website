"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Code,
  BarChart,
  PenTool,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ScrollProgress from "@/components/ui/scroll-progress";

type Expertise = {
  number: string;
  id: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  features: string[];
  specialties: string[];
};

const expertises: Expertise[] = [
  {
    number: "01",
    id: "web",
    title: "Conception & développement web",
    icon: <Code className="h-5 w-5" strokeWidth={1.5} />,
    tagline:
      "Des plateformes pensées pour durer, pas juste pour impressionner au lancement.",
    description:
      "Sites vitrines, e-commerce, applications métier multi-tenants. Nous construisons avec un code propre, des architectures qui tiennent la charge, et une attention constante à l'expérience des utilisateurs finaux.",
    features: [
      "Sites responsive, mobile-first, adaptés à toutes les connexions",
      "Optimisation SEO technique et contenu pour un vrai référencement",
      "Interfaces utilisateur intuitives, testées sur le terrain",
      "Solutions e-commerce complètes, des paiements locaux à la logistique",
      "Maintenance continue, mises à jour de sécurité, support technique",
    ],
    specialties: [
      "Sites vitrines",
      "E-commerce",
      "Applications web",
      "Plateformes multi-tenants",
    ],
  },
  {
    number: "02",
    id: "graphic",
    title: "Design & identité visuelle",
    icon: <PenTool className="h-5 w-5" strokeWidth={1.5} />,
    tagline:
      "Une marque lisible en trois secondes, mémorable en trente jours.",
    description:
      "Identité visuelle, supports marketing, motion design. Notre direction artistique commence toujours par comprendre ce que votre marque veut dire avant de réfléchir à son apparence.",
    features: [
      "Création de logos et systèmes d'identité complets",
      "Chartes graphiques rigoureuses et exploitables",
      "Supports marketing imprimés et digitaux",
      "Packaging produit pensé pour la distribution locale",
      "Interfaces UX/UI adaptées à vos utilisateurs cibles",
    ],
    specialties: [
      "Logo & branding",
      "Supports imprimés",
      "Packaging",
      "UI/UX",
    ],
  },
  {
    number: "03",
    id: "digital",
    title: "Marketing digital",
    icon: <BarChart className="h-5 w-5" strokeWidth={1.5} />,
    tagline:
      "De la visibilité qui se mesure, pas des vanity metrics.",
    description:
      "Stratégies SEO, réseaux sociaux, campagnes publicitaires ciblées. Nous élaborons des plans marketing digitaux qui convertissent, avec des rapports mensuels honnêtes sur ce qui marche et ce qui ne marche pas.",
    features: [
      "Stratégies SEO on-page et off-page pour un référencement durable",
      "Gestion éditoriale des réseaux sociaux avec calendrier clair",
      "Campagnes publicitaires ciblées (Google Ads, Meta Ads)",
      "Email marketing et automation pour fidéliser",
      "Analyse de données et rapports mensuels transparents",
    ],
    specialties: [
      "SEO",
      "Médias sociaux",
      "Publicité en ligne",
      "Content marketing",
    ],
  },
];

export default function ExpertisePage() {
  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title="Trois expertises, une même discipline."
        subtitle="Nos services sont différents mais suivent tous la même règle : commencer par comprendre avant de proposer."
        eyebrow="Notre expertise"
        breadcrumbs={[{ label: "Notre expertise", href: "/notre-expertise" }]}
      />

      <main className="overflow-hidden bg-white">
        {/* ===================== INTRO ===================== */}
        <section className="py-20 md:py-24 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <h2
                  style={{ fontFamily: "var(--font-fraunces)" }}
                  className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-neutral-950"
                >
                  Nous ne vendons pas des services à la pièce. Nous résolvons
                  des problèmes métier,{" "}
                  <em className="text-orange-500 font-normal">
                    avec les outils qui font sens
                  </em>
                  .
                </h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 text-lg text-neutral-600 leading-relaxed lg:pl-10 lg:border-l border-neutral-300"
              >
                Un site ne sert à rien si personne ne le trouve. Une identité
                ne porte pas si le produit derrière ne tient pas. Une
                campagne ne convertit pas si l'expérience d'arrivée n'est pas
                pensée. Nous travaillons sur les trois ensemble.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ===================== EXPERTISES ===================== */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 space-y-28 md:space-y-36">
            {expertises.map((exp, index) => {
              const isEven = index % 2 === 1;
              return (
                <article
                  key={exp.id}
                  id={exp.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-neutral-200 pt-16 md:pt-20"
                >
                  {/* Left — text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`lg:col-span-7 ${
                      isEven ? "lg:order-2 lg:col-start-6" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        style={{ fontFamily: "var(--font-fraunces)" }}
                        className="text-5xl italic font-light text-orange-500/80 leading-none"
                      >
                        {exp.number}
                      </span>
                      <div className="flex items-center justify-center h-11 w-11 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-800">
                        {exp.icon}
                      </div>
                    </div>

                    <h3
                      style={{ fontFamily: "var(--font-fraunces)" }}
                      className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-neutral-950 mb-6"
                    >
                      {exp.title}
                    </h3>
                    <p
                      style={{ fontFamily: "var(--font-fraunces)" }}
                      className="text-xl md:text-2xl italic font-light text-neutral-700 leading-snug mb-6 max-w-xl"
                    >
                      {exp.tagline}
                    </p>
                    <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-xl mb-8">
                      {exp.description}
                    </p>

                    <ul className="flex flex-wrap gap-2 mb-10">
                      {exp.specialties.map((s) => (
                        <li
                          key={s}
                          className="text-xs tracking-wide px-3 py-1 rounded-full border border-neutral-200 bg-white text-neutral-700"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Right — features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="lg:sticky lg:top-32 rounded-2xl bg-neutral-50 border border-neutral-200 p-8 md:p-10">
                      <div className="text-xs tracking-[0.22em] uppercase text-neutral-600 mb-6">
                        <span className="inline-block h-px w-8 bg-orange-500 mr-3 align-middle" />
                        Ce que nous livrons
                      </div>
                      <ul className="space-y-4">
                        {exp.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-[15px] text-neutral-700 leading-relaxed"
                          >
                            <Check
                              className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0"
                              strokeWidth={2}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ===================== PROCESS ===================== */}
        <section className="py-24 md:py-32 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16 md:mb-20">
              <div className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase">
                <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
                Notre processus
              </div>
              <h2
                style={{ fontFamily: "var(--font-fraunces)" }}
                className="text-4xl md:text-5xl font-medium leading-[1.1] text-neutral-950"
              >
                Quatre étapes.{" "}
                <em className="text-orange-500 font-normal">Zéro surprise.</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {[
                {
                  num: "01",
                  title: "Discovery",
                  text: "On prend le temps de comprendre votre métier, vos utilisateurs, vos contraintes.",
                },
                {
                  num: "02",
                  title: "Design",
                  text: "Maquettes, parcours, prototypes. Validation à chaque étape, itérations rapides.",
                },
                {
                  num: "03",
                  title: "Build",
                  text: "Développement par sprints. Démos régulières, code revu, qualité mesurée.",
                },
                {
                  num: "04",
                  title: "Run",
                  text: "Mise en ligne, formation des équipes, maintenance et évolutions continues.",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative border-t border-neutral-300 pt-6"
                >
                  <span
                    style={{ fontFamily: "var(--font-fraunces)" }}
                    className="text-4xl italic font-light text-orange-500/80 leading-none block mb-4"
                  >
                    {step.num}
                  </span>
                  <h3
                    style={{ fontFamily: "var(--font-fraunces)" }}
                    className="text-xl md:text-2xl font-medium text-neutral-950 mb-3"
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
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
              Un besoin précis ?
            </div>
            <h2
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-12"
            >
              Dites-nous ce que vous voulez construire,{" "}
              <em className="text-orange-400 font-normal">
                on vous dit comment
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
