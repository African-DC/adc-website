"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  Sprout,
  CloudRain,
  MessagesSquare,
  Languages,
  Leaf,
} from "lucide-react";
import Link from "next/link";

// Wouri brand green (deep forest, sophisticated)
const WOURI_GREEN = "#1a5d3a";

type Feature = {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    number: "01",
    icon: <MessagesSquare className="h-5 w-5" />,
    title: "Accessible via WhatsApp",
    description:
      "Pas d'application à télécharger, pas de compte à créer. L'agriculteur discute avec WOURI comme avec un contact WhatsApp, sur le téléphone qu'il a déjà.",
  },
  {
    number: "02",
    icon: <Languages className="h-5 w-5" />,
    title: "Langues locales ivoiriennes",
    description:
      "Baoulé, Dioula, Bété, et évidemment français. WOURI répond dans la langue dans laquelle l'agriculteur lui parle, par message texte ou par vocal.",
  },
  {
    number: "03",
    icon: <CloudRain className="h-5 w-5" />,
    title: "Conseils climat en temps réel",
    description:
      "Quand semer, quand irriguer, quelles variétés choisir face aux saisons changeantes. Des réponses adaptées à la région et au type de culture.",
  },
  {
    number: "04",
    icon: <Sprout className="h-5 w-5" />,
    title: "Pensé pour le terrain",
    description:
      "Connexion intermittente, messages vocaux, temps de réponse court. Chaque contrainte du monde agricole ivoirien a guidé la conception.",
  },
];

const sampleConversation = [
  {
    from: "farmer",
    label: "Agriculteur · Yamoussoukro",
    text: "Bonjour. Les pluies tardent cette année. Je dois planter mon maïs bientôt ou attendre ?",
  },
  {
    from: "wouri",
    label: "WOURI",
    text:
      "Bonjour. Dans ta zone, les prévisions donnent des pluies fiables à partir de la semaine prochaine. Je te conseille d'attendre 6 à 8 jours avant de semer. En attendant, prépare le sol et vérifie tes semences.",
  },
  {
    from: "farmer",
    label: "Agriculteur · Yamoussoukro",
    text: "N'mɔ m'aba kaban ? (Je peux commencer à planter ?)",
  },
  {
    from: "wouri",
    label: "WOURI",
    text:
      "Ɛlɛ, kɛ ka wulu ka taa ba 6 ni 8 tile waati la. Ji be na kɔ wula kɔ. (Non, attends 6 à 8 jours. Les pluies arrivent bien après.)",
  },
];

export default function WouriCaseStudyPage() {
  return (
    <div className={`bg-[#fafaf6] text-neutral-950`}>
      <ScrollProgress />
      <NavbarDemo />

      <main className="relative overflow-hidden">
        {/* ===================== HERO ===================== */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          {/* Organic decorative shapes */}
          <div
            aria-hidden
            className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none"
            style={{ background: WOURI_GREEN }}
          />
          <div
            aria-hidden
            className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
            style={{ background: WOURI_GREEN }}
          />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
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
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-8">
                {/* Eyebrow + Beta */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-wrap items-center gap-4 mb-10"
                >
                  <span className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase">
                    <span
                      className="inline-block h-px w-10"
                      style={{ background: WOURI_GREEN }}
                    />
                    Étude de cas N° 02 · Climat & agriculture
                  </span>
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
                    style={{
                      background: `${WOURI_GREEN}12`,
                      color: WOURI_GREEN,
                      border: `1px solid ${WOURI_GREEN}33`,
                    }}
                  >
                    <span
                      className="relative flex h-1.5 w-1.5"
                      aria-hidden
                    >
                      <span
                        className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                        style={{ background: WOURI_GREEN }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-1.5 w-1.5"
                        style={{ background: WOURI_GREEN }}
                      />
                    </span>
                    En beta
                  </span>
                </motion.div>

                {/* Wordmark Wouri */}
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  style={{ color: WOURI_GREEN }}
                  className="font-serif text-[clamp(4rem,13vw,11rem)] font-semibold leading-[0.9] tracking-tight mb-10"
                >
                  WOURI.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="font-serif text-2xl md:text-3xl italic font-light text-neutral-800 leading-snug mb-8 max-w-2xl"
                >
                  L'agent IA qui aide les agriculteurs ivoiriens à s'adapter au{" "}
                  <span
                    className="not-italic font-medium"
                    style={{ color: WOURI_GREEN }}
                  >
                    changement climatique
                  </span>
                  .
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="text-lg text-neutral-600 leading-relaxed max-w-xl"
                >
                  WOURI s'installe là où les agriculteurs sont déjà.
                  Sur WhatsApp. Dans leur langue. Avec des conseils concrets
                  pour des saisons qui ne ressemblent plus à celles d'avant.
                </motion.p>
              </div>

              {/* Right — metadata */}
              <motion.dl
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="lg:col-span-4 lg:pl-10 lg:border-l border-neutral-200 space-y-6"
              >
                {[
                  { label: "Canal", value: "WhatsApp" },
                  { label: "Secteur", value: "Agritech · Climate-tech" },
                  { label: "Langues", value: "Français · Baoulé · Dioula · Bété" },
                  { label: "Statut", value: "Beta privée · Côte d'Ivoire" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 pb-5 border-b border-neutral-200 last:border-b-0 last:pb-0">
                    <dt className="text-[10px] tracking-[0.18em] uppercase text-neutral-400">
                      {item.label}
                    </dt>
                    <dd className="text-base font-medium text-neutral-900">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </motion.dl>
            </div>
          </div>
        </section>

        {/* ===================== PROBLEM ===================== */}
        <section
          className="py-24 md:py-32 border-y"
          style={{ borderColor: `${WOURI_GREEN}20` }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase"
            >
              <span
                className="inline-block h-px w-10 mr-3 align-middle"
                style={{ background: WOURI_GREEN }}
              />
              Le problème
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-10 text-neutral-950"
            >
              Les saisons{" "}
              <em style={{ color: WOURI_GREEN }}>ne ressemblent plus</em> à
              celles que connaissaient nos aînés.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg prose-neutral max-w-none text-neutral-700 space-y-5"
            >
              <p>
                La Côte d'Ivoire est agricole avant tout. Cacao, café, hévéa,
                anacarde, cultures vivrières. Des millions de personnes vivent
                des décisions qu'elles prennent chaque semaine : quand semer,
                quand traiter, quelle variété choisir, comment protéger la
                récolte.
              </p>
              <p>
                Ces décisions s'appuyaient sur un calendrier qui a longtemps
                été stable. Ce calendrier est en train de disparaître. Les
                pluies arrivent plus tard, s'arrêtent plus tôt, ou tombent
                trop fort d'un coup. Les parasites se déplacent. Les
                rendements baissent.
              </p>
              <p>
                Les services agricoles publics existent, mais ils n'ont pas les
                moyens d'atteindre chaque village. Les agriculteurs, eux, ont
                tous un téléphone. Et sur ce téléphone, ils ont WhatsApp.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===================== FEATURES ===================== */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase"
            >
              <span
                className="inline-block h-px w-10 mr-3 align-middle"
                style={{ background: WOURI_GREEN }}
              />
              La solution
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium max-w-3xl leading-tight text-neutral-950"
            >
              Quatre principes de conception.
            </motion.h2>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
            {features.map((feature, i) => (
              <motion.article
                key={feature.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span
                    style={{ color: `${WOURI_GREEN}B3` }}
                    className="font-serif text-5xl italic font-light leading-none"
                  >
                    {feature.number}
                  </span>
                  <div
                    className="flex items-center justify-center h-11 w-11 rounded-full bg-white border text-neutral-800"
                    style={{ borderColor: `${WOURI_GREEN}30` }}
                  >
                    {feature.icon}
                  </div>
                </div>
                <h3
                  className="font-serif text-2xl md:text-3xl font-medium leading-tight mb-4 text-neutral-950"
                >
                  {feature.title}
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ===================== CONVERSATION MOCK ===================== */}
        <section
          className="py-24 md:py-32"
          style={{ background: `${WOURI_GREEN}08` }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left — copy */}
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase"
                >
                  <span
                    className="inline-block h-px w-10 mr-3 align-middle"
                    style={{ background: WOURI_GREEN }}
                  />
                  Dans la conversation
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6 text-neutral-950"
                >
                  Parle-lui comme tu parlerais à un voisin.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-neutral-700 leading-relaxed"
                >
                  WOURI comprend le français et les principales langues
                  parlées en Côte d'Ivoire. Les questions peuvent être écrites
                  ou vocales. Les réponses aussi. Aucun formulaire, aucun
                  bouton à apprendre.
                </motion.p>
              </div>

              {/* Right — mock conversation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7"
              >
                <div
                  className="relative rounded-2xl p-6 md:p-8 shadow-2xl border bg-white"
                  style={{ borderColor: `${WOURI_GREEN}20` }}
                >
                  <div className="flex items-center gap-3 pb-4 mb-6 border-b border-neutral-100">
                    <div
                      className="font-serif h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold"
                      style={{ background: WOURI_GREEN }}
                    >
                      W
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 text-sm">
                        WOURI
                      </div>
                      <div className="text-xs text-neutral-500">
                        en ligne · WhatsApp
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {sampleConversation.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * i }}
                        className={`flex ${
                          msg.from === "farmer" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div className="max-w-[85%]">
                          <div
                            className={`rounded-2xl px-4 py-3 text-sm md:text-[15px] leading-relaxed ${
                              msg.from === "farmer"
                                ? "bg-neutral-100 text-neutral-800 rounded-tr-sm"
                                : "text-white rounded-tl-sm"
                            }`}
                            style={
                              msg.from === "wouri"
                                ? { background: WOURI_GREEN }
                                : undefined
                            }
                          >
                            {msg.text}
                          </div>
                          <div
                            className={`text-[11px] text-neutral-400 mt-1 ${
                              msg.from === "farmer" ? "text-right" : ""
                            }`}
                          >
                            {msg.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-[11px] text-neutral-400 mt-6 italic">
                    Exemple illustratif. WOURI est actuellement en beta privée
                    avec un panel d'agriculteurs partenaires.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================== LANGUAGES ===================== */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase"
                >
                  <span
                    className="inline-block h-px w-10 mr-3 align-middle"
                    style={{ background: WOURI_GREEN }}
                  />
                  Les langues locales
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6 text-neutral-950"
                >
                  On ne touche pas un village si on ne parle pas sa langue.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-neutral-600 leading-relaxed"
                >
                  La Côte d'Ivoire compte plus de 60 langues locales. Nous
                  commençons par les plus parlées, avec un modèle fine-tuné
                  spécifiquement pour comprendre les tournures
                  agricoles et les métaphores locales.
                </motion.p>
              </div>

              <ul className="lg:col-span-7 divide-y divide-neutral-200 border-t border-b border-neutral-200">
                {[
                  { name: "Français", status: "Disponible" },
                  { name: "Baoulé", status: "Disponible" },
                  { name: "Dioula", status: "Disponible" },
                  { name: "Bété", status: "Beta" },
                  { name: "Attié · Agni · Sénoufo", status: "Bientôt" },
                ].map((lang, i) => (
                  <motion.li
                    key={lang.name}
                    initial={{ opacity: 0, x: 12 }}
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
                        {lang.name}
                      </span>
                    </span>
                    <span
                      className="text-xs uppercase tracking-wider"
                      style={{
                        color:
                          lang.status === "Bientôt"
                            ? "#9ca3af"
                            : WOURI_GREEN,
                      }}
                    >
                      {lang.status}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===================== CTA BETA ===================== */}
        <section className="py-24 md:py-32">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="relative rounded-3xl overflow-hidden p-[1px]"
                style={{
                  background: `linear-gradient(135deg, ${WOURI_GREEN}, #4a8f63)`,
                }}
              >
                <div
                  className="relative rounded-3xl px-8 md:px-16 py-16 md:py-24 overflow-hidden"
                  style={{ background: "#0c2418" }}
                >
                  {/* Leaf pattern hint */}
                  <div
                    aria-hidden
                    className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
                    style={{ background: WOURI_GREEN }}
                  />

                  <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                    <div>
                      <div
                        className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase mb-6"
                        style={{ color: "#a7d7b5" }}
                      >
                        <span
                          className="h-px w-10"
                          style={{ background: "#a7d7b5" }}
                        />
                        Rejoindre la beta
                      </div>
                      <h2
                        className="font-serif text-white text-4xl md:text-6xl font-medium leading-[1] mb-5"
                      >
                        Travaillez avec nous
                        <br />
                        <em style={{ color: "#a7d7b5" }}>
                          sur l'avenir de l'agriculture ivoirienne.
                        </em>
                      </h2>
                      <p className="text-neutral-400 text-lg max-w-md">
                        Coopératives, ONG, services agricoles, chercheurs.
                        WOURI ouvre progressivement sa beta. Contactez-nous pour
                        en discuter.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-white">
                      <span className="text-sm tracking-wider uppercase text-neutral-400 hidden md:inline">
                        Prendre contact
                      </span>
                      <Link
                        href="/contact"
                        className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-white text-neutral-950 hover:bg-[#a7d7b5] hover:text-neutral-950 transition-all duration-500 hover:-translate-y-1"
                      >
                        <Leaf
                          className="h-7 w-7 md:h-8 md:w-8"
                          strokeWidth={1.5}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
              <Link
                href="/nos-realisations"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors"
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
