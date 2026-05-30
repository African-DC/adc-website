"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { m } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  Route,
  BookOpenCheck,
  ShieldAlert,
  LifeBuoy,
  Brain,
  Headset,
  LayoutDashboard,
  Building2,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useLocale } from "next-intl";
import { track } from "@/lib/analytics/track";

// AKWABA brand orange — l'accueil chaleureux ivoirien
const AKWABA_ORANGE = "#E8590C";
const AKWABA_ORANGE_LIGHT = "#fbbf91";

const AKWABA_URL = "https://akwaba-zeta.vercel.app";

type Feature = {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    number: "01",
    icon: <Route className="h-5 w-5" />,
    title: "Routage multi-modèles",
    description:
      "Chaque demande est dirigée vers le bon modèle d'IA selon sa sensibilité : réponse rapide, sujet à risque légal, escalade qualité ou synthèse. La bonne intelligence pour la bonne question.",
  },
  {
    number: "02",
    icon: <BookOpenCheck className="h-5 w-5" />,
    title: "Base de connaissance fiable",
    description:
      "Recherche hybride, sémantique et lexicale, avec sources citées. AKWABA donne les pièces à fournir, les frais et les étapes concrètes, pas des généralités.",
  },
  {
    number: "03",
    icon: <ShieldAlert className="h-5 w-5" />,
    title: "Bouclier anti-arnaque",
    description:
      "Foncier, faux visa, fausse offre d'emploi, Mobile Money, faux placements. AKWABA alerte sur les fraudes qui ciblent la diaspora avant tout paiement.",
  },
  {
    number: "04",
    icon: <LifeBuoy className="h-5 w-5" />,
    title: "Détection SOS",
    description:
      "Repérage des situations de détresse sur quatre niveaux et protocole d'urgence vers un agent. Personne ne reste seul face à une situation grave.",
  },
  {
    number: "05",
    icon: <Brain className="h-5 w-5" />,
    title: "Mémoire long terme",
    description:
      "AKWABA se souvient du contexte de vos dossiers d'une conversation à l'autre. Vous ne recommencez jamais à zéro.",
  },
  {
    number: "06",
    icon: <Headset className="h-5 w-5" />,
    title: "Relais humain",
    description:
      "Un agent consulaire peut prendre la main en direct dans la conversation, puis la rendre à l'assistant. L'IA et l'humain travaillent ensemble.",
  },
];

const verticals = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Services consulaires",
    description:
      "Passeport et titre de voyage, carte consulaire, carte de séjour, état civil, nationalité, légalisation et procuration, prise de rendez-vous, suivi de dossier. Objectif : désengorger les consulats et fiabiliser l'information.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Invest",
    description:
      "Orientation vers des opportunités PME pré-vérifiées via le guichet CEPICI, et mise en relation avec un conseiller économique. Investir au pays, en confiance.",
  },
];

const sampleConversation = [
  {
    from: "user",
    label: "Diaspora · Paris",
    text: "Bonjour. Comment renouveler mon passeport ivoirien depuis Paris ?",
  },
  {
    from: "akwaba",
    label: "AKWABA",
    text:
      "Akwaba. Le renouvellement se fait au consulat dont vous dépendez. Pièces à prévoir : ancien passeport, carte consulaire à jour, deux photos d'identité et le formulaire de demande. Voulez-vous que je vérifie votre consulat de rattachement et que je prépare la prise de rendez-vous ?",
  },
  {
    from: "user",
    label: "Diaspora · Paris",
    text: "Oui. Et un agent m'a proposé un service express contre paiement Mobile Money, c'est fiable ?",
  },
  {
    from: "akwaba",
    label: "AKWABA",
    text:
      "Prudence. Le consulat ne facture jamais un service express par Mobile Money à un particulier. C'est un schéma d'arnaque connu. Ne payez rien. Je peux vous indiquer le canal officiel et signaler ce contact.",
  },
];

const shields = [
  { name: "Fraude foncière", detail: "Faux terrains, double vente" },
  { name: "Faux visa / emploi", detail: "Offres trop belles pour être vraies" },
  { name: "Mobile Money", detail: "Paiements détournés, faux frais" },
  { name: "Faux placements", detail: "Rendements irréalistes, pyramides" },
];

const stack = [
  {
    label: "Frontend",
    value:
      "TanStack Start (React 19, Vite, Nitro), TypeScript, Tailwind CSS, shadcn/ui, AI SDK v6 pour le chat en streaming.",
  },
  {
    label: "Backend",
    value:
      "Convex en single-store temps réel : base de données, fonctions serveur, recherche vectorielle, cron et ordonnanceur.",
  },
  {
    label: "Authentification",
    value: "Better Auth sur Convex, connexion Google.",
  },
  {
    label: "Intelligence artificielle",
    value:
      "Passerelle multi-modèles via OpenRouter : Gemini 3.5 Flash (classification / SOS), GPT-5.4 mini (standard), Claude Haiku 4.5 (sujets sensibles), GPT-5.4 (escalade), GPT-5.5 (synthèse), Kimi K2.6 (secours). Embeddings dim 1024 et RAG hybride avec reranking LLM.",
  },
  {
    label: "Canaux",
    value: "Web et WhatsApp.",
  },
  {
    label: "Déploiement",
    value: "Vercel pour le frontend, Convex pour le backend, CI par push Git.",
  },
];

export default function AkwabaCaseStudyContent() {
  const rawLocale = useLocale();
  const locale: "fr" | "en" = rawLocale === "en" ? "en" : "fr";

  useEffect(() => {
    track("case_study_view", { project: "akwaba", locale });
  }, [locale]);

  return (
    <div className="bg-[#fbf7f2] text-neutral-950">
      <ScrollProgress />
      <NavbarDemo />

      <main className="relative overflow-hidden">
        {/* ===================== HERO ===================== */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          {/* Warm decorative glows */}
          <div
            aria-hidden
            className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none"
            style={{ background: AKWABA_ORANGE }}
          />
          <div
            aria-hidden
            className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
            style={{ background: AKWABA_ORANGE }}
          />

          <div className="relative max-w-7xl mx-auto px-6">
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <Link
                href="/nos-realisations"
                className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Toutes les réalisations</span>
              </Link>
            </m.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-8">
                <m.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-wrap items-center gap-4 mb-10"
                >
                  <span className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase">
                    <span
                      className="inline-block h-px w-10"
                      style={{ background: AKWABA_ORANGE }}
                    />
                    Étude de cas N° 03 · Diaspora & IA
                  </span>
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
                    style={{
                      background: `${AKWABA_ORANGE}12`,
                      color: AKWABA_ORANGE,
                      border: `1px solid ${AKWABA_ORANGE}33`,
                    }}
                  >
                    <span className="relative flex h-1.5 w-1.5" aria-hidden>
                      <span
                        className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                        style={{ background: AKWABA_ORANGE }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-1.5 w-1.5"
                        style={{ background: AKWABA_ORANGE }}
                      />
                    </span>
                    En production
                  </span>
                </m.div>

                {/* Wordmark Akwaba */}
                <m.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  style={{ color: AKWABA_ORANGE }}
                  className="font-serif text-[clamp(3.5rem,11vw,9.5rem)] font-semibold leading-[0.9] tracking-tight mb-6"
                >
                  AKWABA.
                </m.h1>

                <m.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-sm tracking-[0.1em] uppercase text-neutral-500 mb-8"
                >
                  « Bienvenue », en akan et en baoulé.
                </m.p>

                <m.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="font-serif text-2xl md:text-3xl italic font-light text-neutral-800 leading-snug mb-8 max-w-2xl"
                >
                  L'assistant IA qui accueille la{" "}
                  <span
                    className="not-italic font-medium"
                    style={{ color: AKWABA_ORANGE }}
                  >
                    diaspora ivoirienne
                  </span>
                  , étape par étape.
                </m.p>

                <m.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="text-lg text-neutral-600 leading-relaxed max-w-xl"
                >
                  Démarches consulaires et envie d'investir au pays. AKWABA
                  accompagne, en toute confidentialité, sur le Web et sur
                  WhatsApp, en français et en langues locales.
                </m.p>
              </div>

              {/* Right — metadata */}
              <m.dl
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="lg:col-span-4 lg:pl-10 lg:border-l border-neutral-200 space-y-6"
              >
                {[
                  { label: "Canaux", value: "Web · WhatsApp" },
                  { label: "Secteur", value: "Diaspora · Services publics · IA" },
                  { label: "Langues", value: "Français · Langues locales" },
                  { label: "Statut", value: "En production" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 pb-5 border-b border-neutral-200 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-[10px] tracking-[0.18em] uppercase text-neutral-400">
                      {item.label}
                    </dt>
                    <dd className="text-base font-medium text-neutral-900">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </m.dl>
            </div>
          </div>
        </section>

        {/* ===================== PROBLEM ===================== */}
        <section
          className="py-24 md:py-32 border-y"
          style={{ borderColor: `${AKWABA_ORANGE}20` }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase"
            >
              <span
                className="inline-block h-px w-10 mr-3 align-middle"
                style={{ background: AKWABA_ORANGE }}
              />
              Le contexte
            </m.div>

            <m.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-10 text-neutral-950"
            >
              Loin du pays, une simple démarche peut devenir{" "}
              <em style={{ color: AKWABA_ORANGE }}>un parcours du combattant</em>.
            </m.h2>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg prose-neutral max-w-none text-neutral-700 space-y-5"
            >
              <p>
                La diaspora ivoirienne est nombreuse, attachée au pays, et
                souvent confrontée aux mêmes questions : renouveler un passeport,
                obtenir une carte consulaire, régulariser un état civil,
                comprendre une procédure de nationalité. Les informations sont
                dispersées, parfois contradictoires, et les consulats sont
                engorgés.
              </p>
              <p>
                À cette complexité s'ajoute un risque réel : les arnaques qui
                ciblent spécifiquement la diaspora. Faux services express, faux
                placements, fraudes foncières. On promet d'aller plus vite,
                contre un paiement, et l'argent disparaît.
              </p>
              <p>
                AKWABA répond aux deux. Une information fiable et sourcée pour
                les démarches, et une vigilance active contre la fraude. Le tout
                là où les gens sont déjà : sur le Web et sur WhatsApp.
              </p>
            </m.div>
          </div>
        </section>

        {/* ===================== TWO VERTICALS ===================== */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase"
            >
              <span
                className="inline-block h-px w-10 mr-3 align-middle"
                style={{ background: AKWABA_ORANGE }}
              />
              Deux verticales
            </m.div>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium max-w-3xl leading-tight text-neutral-950 mb-16 md:mb-20"
            >
              Accompagner les démarches, et l'envie d'investir.
            </m.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {verticals.map((v, i) => (
                <m.article
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative rounded-2xl border bg-white p-8 md:p-10"
                  style={{ borderColor: `${AKWABA_ORANGE}20` }}
                >
                  <div
                    className="flex items-center justify-center h-12 w-12 rounded-xl mb-6"
                    style={{
                      background: `${AKWABA_ORANGE}12`,
                      color: AKWABA_ORANGE,
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium leading-tight mb-4 text-neutral-950">
                    {v.title}
                  </h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {v.description}
                  </p>
                </m.article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== FEATURES ===================== */}
        <section
          className="py-24 md:py-32"
          style={{ background: `${AKWABA_ORANGE}06` }}
        >
          <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-20">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase"
            >
              <span
                className="inline-block h-px w-10 mr-3 align-middle"
                style={{ background: AKWABA_ORANGE }}
              />
              Ce qui le distingue
            </m.div>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium max-w-3xl leading-tight text-neutral-950"
            >
              Six choix de conception au service de la confiance.
            </m.h2>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {features.map((feature, i) => (
              <m.article
                key={feature.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span
                    style={{ color: `${AKWABA_ORANGE}B3` }}
                    className="font-serif text-5xl italic font-light leading-none"
                  >
                    {feature.number}
                  </span>
                  <div
                    className="flex items-center justify-center h-11 w-11 rounded-full bg-white border text-neutral-800"
                    style={{ borderColor: `${AKWABA_ORANGE}30` }}
                  >
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-serif text-2xl md:text-[1.65rem] font-medium leading-tight mb-4 text-neutral-950">
                  {feature.title}
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </m.article>
            ))}
          </div>
        </section>

        {/* ===================== CONVERSATION MOCK ===================== */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left — copy */}
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase"
                >
                  <span
                    className="inline-block h-px w-10 mr-3 align-middle"
                    style={{ background: AKWABA_ORANGE }}
                  />
                  Dans la conversation
                </m.div>
                <m.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6 text-neutral-950"
                >
                  Une réponse concrète, et une mise en garde au bon moment.
                </m.h2>
                <m.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-neutral-700 leading-relaxed"
                >
                  AKWABA ne se contente pas de répondre. Il cite ses sources,
                  prépare la suite, et détecte les signaux d'arnaque avant que
                  vous ne payiez quoi que ce soit. Sur le Web comme sur WhatsApp.
                </m.p>
              </div>

              {/* Right — mock conversation */}
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7"
              >
                <div
                  className="relative rounded-2xl p-6 md:p-8 shadow-2xl border bg-white"
                  style={{ borderColor: `${AKWABA_ORANGE}20` }}
                >
                  <div className="flex items-center gap-3 pb-4 mb-6 border-b border-neutral-100">
                    <div
                      className="font-serif h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold"
                      style={{ background: AKWABA_ORANGE }}
                    >
                      A
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 text-sm">
                        AKWABA
                      </div>
                      <div className="text-xs text-neutral-500">
                        en ligne · Web & WhatsApp
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {sampleConversation.map((msg, i) => (
                      <m.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * i }}
                        className={`flex ${
                          msg.from === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div className="max-w-[85%]">
                          <div
                            className={`rounded-2xl px-4 py-3 text-sm md:text-[15px] leading-relaxed ${
                              msg.from === "user"
                                ? "bg-neutral-100 text-neutral-800 rounded-tr-sm"
                                : "text-white rounded-tl-sm"
                            }`}
                            style={
                              msg.from === "akwaba"
                                ? { background: AKWABA_ORANGE }
                                : undefined
                            }
                          >
                            {msg.text}
                          </div>
                          <div
                            className={`text-[11px] text-neutral-400 mt-1 ${
                              msg.from === "user" ? "text-right" : ""
                            }`}
                          >
                            {msg.label}
                          </div>
                        </div>
                      </m.div>
                    ))}
                  </div>

                  <p className="text-[11px] text-neutral-400 mt-6 italic">
                    Exemple illustratif. AKWABA est en production sur le Web et
                    sur WhatsApp.
                  </p>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* ===================== ANTI-FRAUD SHIELD ===================== */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase"
                >
                  <span
                    className="inline-block h-px w-10 mr-3 align-middle"
                    style={{ background: AKWABA_ORANGE }}
                  />
                  Le bouclier anti-arnaque
                </m.div>
                <m.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6 text-neutral-950"
                >
                  Protéger avant que l'argent ne parte.
                </m.h2>
                <m.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-neutral-600 leading-relaxed"
                >
                  Les fraudes qui ciblent la diaspora suivent des schémas
                  connus. AKWABA les reconnaît et alerte dès qu'un message
                  ressemble à une tentative d'arnaque, avant tout paiement.
                </m.p>
              </div>

              <ul className="lg:col-span-7 divide-y divide-neutral-200 border-t border-b border-neutral-200">
                {shields.map((shield, i) => (
                  <m.li
                    key={shield.name}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-center justify-between gap-6 py-5"
                  >
                    <span className="flex items-center gap-5">
                      <span className="text-xs tabular-nums text-neutral-400 tracking-wide w-6">
                        0{i + 1}
                      </span>
                      <span className="text-lg md:text-xl font-medium text-neutral-900">
                        {shield.name}
                      </span>
                    </span>
                    <span className="text-xs uppercase tracking-wider text-neutral-500 text-right">
                      {shield.detail}
                    </span>
                  </m.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===================== CONSOLE / DASHBOARD ===================== */}
        <section
          className="py-24 md:py-32"
          style={{ background: `${AKWABA_ORANGE}06` }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase"
            >
              <span
                className="inline-block h-px w-10"
                style={{ background: AKWABA_ORANGE }}
              />
              La console de pilotage
            </m.div>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6 text-neutral-950"
            >
              Tout se pilote depuis un seul tableau de bord.
            </m.h2>
            <m.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-12"
            >
              Conversations, base de connaissance, journal d'audit, routage IA,
              retours utilisateurs et agents. Une vue temps réel pour les
              équipes qui font tourner AKWABA.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {[
                "Conversations",
                "Base de connaissance",
                "Journal d'audit",
                "Routage IA",
                "Retours utilisateurs",
                "Agents",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border text-sm font-medium text-neutral-800"
                  style={{ borderColor: `${AKWABA_ORANGE}25` }}
                >
                  <LayoutDashboard
                    className="h-4 w-4"
                    style={{ color: AKWABA_ORANGE }}
                  />
                  {item}
                </span>
              ))}
            </m.div>
          </div>
        </section>

        {/* ===================== STACK TECHNIQUE ===================== */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase"
                >
                  <span
                    className="inline-block h-px w-10 mr-3 align-middle"
                    style={{ background: AKWABA_ORANGE }}
                  />
                  Stack technique
                </m.div>
                <m.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-serif text-3xl md:text-4xl font-medium leading-tight text-neutral-950"
                >
                  De A à Z, une architecture moderne et temps réel.
                </m.h2>
              </div>

              <dl className="lg:col-span-8 divide-y divide-neutral-200 border-t border-neutral-200">
                {stack.map((row, i) => (
                  <m.div
                    key={row.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-6"
                  >
                    <dt className="md:col-span-4 text-sm font-semibold tracking-wide text-neutral-900">
                      {row.label}
                    </dt>
                    <dd className="md:col-span-8 text-neutral-600 leading-relaxed">
                      {row.value}
                    </dd>
                  </m.div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ===================== CREDITS / HUMAN MOMENT ===================== */}
        <section
          className="py-24 md:py-32"
          style={{ background: `${AKWABA_ORANGE}06` }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <m.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-6"
              >
                <div className="relative">
                  <div
                    className="absolute -inset-3 rounded-2xl -rotate-2"
                    style={{
                      background: `linear-gradient(135deg, ${AKWABA_ORANGE}14, transparent)`,
                    }}
                  />
                  <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl shadow-neutral-900/10 bg-white">
                    <Image
                      src="/img/projets/akwaba/akwaba-stand.jpg"
                      alt="L'équipe African Digit Consulting présente AKWABA sur son stand"
                      width={1200}
                      height={1600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="lg:col-span-6"
              >
                <div className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase">
                  <span
                    className="inline-block h-px w-10 mr-3 align-middle"
                    style={{ background: AKWABA_ORANGE }}
                  />
                  Qui est derrière AKWABA
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6 text-neutral-950">
                  Une idée de vision, une exécution d'ingénieurs.
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  AKWABA a été imaginé par{" "}
                  <span className="font-medium text-neutral-900">
                    Bede Abel Josias
                  </span>
                  , CEO d'African Digit Consulting, puis architecturé et
                  développé par{" "}
                  <span className="font-medium text-neutral-900">
                    Marcel Djedje-li
                  </span>{" "}
                  avec l'équipe ADC. Un produit pensé pour la diaspora, construit
                  par des gens qui la connaissent.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Bede Abel Josias · CEO",
                    "Marcel Djedje-li · Lead dev",
                    "Équipe ADC",
                  ].map((credit) => (
                    <span
                      key={credit}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-white border text-sm font-medium text-neutral-800"
                      style={{ borderColor: `${AKWABA_ORANGE}25` }}
                    >
                      {credit}
                    </span>
                  ))}
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* ===================== CTA DEEPLINK ===================== */}
        <section className="py-24 md:py-32">
          <div className="max-w-5xl mx-auto px-6">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href={AKWABA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track("case_study_cta_click", {
                    project: "akwaba",
                    cta: "visit_akwaba",
                    destination: AKWABA_URL,
                  })
                }
                className="group block relative rounded-3xl overflow-hidden p-[1px]"
                style={{
                  background: `linear-gradient(135deg, ${AKWABA_ORANGE}, #f59e0b)`,
                }}
              >
                <div
                  className="relative rounded-3xl px-8 md:px-16 py-16 md:py-24 overflow-hidden"
                  style={{ background: "#1a0f06" }}
                >
                  <div
                    aria-hidden
                    className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
                    style={{ background: AKWABA_ORANGE }}
                  />

                  <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                    <div>
                      <div
                        className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase mb-6"
                        style={{ color: AKWABA_ORANGE_LIGHT }}
                      >
                        <span
                          className="h-px w-10"
                          style={{ background: AKWABA_ORANGE_LIGHT }}
                        />
                        Découvrir le produit
                      </div>
                      <h2 className="font-serif text-white text-4xl md:text-6xl font-medium leading-[1] mb-5">
                        Essayez AKWABA
                        <br />
                        <em style={{ color: AKWABA_ORANGE_LIGHT }}>
                          en production.
                        </em>
                      </h2>
                      <p className="text-neutral-400 text-lg max-w-md">
                        L'assistant est accessible dès maintenant. Posez une
                        question, AKWABA vous accueille.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-white">
                      <span className="text-sm tracking-wider uppercase text-neutral-400 hidden md:inline">
                        Ouvrir le site
                      </span>
                      <span className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-white text-neutral-950 transition-all duration-500 group-hover:-translate-y-1">
                        <ArrowUpRight
                          className="h-7 w-7 md:h-8 md:w-8 transition-transform duration-500 group-hover:rotate-45"
                          strokeWidth={1.5}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </m.div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
              <Link
                href="/nos-realisations"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Voir toutes les réalisations</span>
              </Link>
              <Button asChild variant="cta" size="cta">
                <Link
                  href="/contact"
                  onClick={() =>
                    track("case_study_cta_click", {
                      project: "akwaba",
                      cta: "start_project",
                      destination: "/contact",
                    })
                  }
                >
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
