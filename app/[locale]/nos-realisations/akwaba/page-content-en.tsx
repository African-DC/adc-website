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

// AKWABA brand orange — the warm Ivorian welcome
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
    title: "Multi-model routing",
    description:
      "Every request is routed to the right AI model based on its sensitivity: fast reply, legally risky topic, quality escalation or synthesis. The right intelligence for the right question.",
  },
  {
    number: "02",
    icon: <BookOpenCheck className="h-5 w-5" />,
    title: "Trustworthy knowledge base",
    description:
      "Hybrid search, semantic and lexical, with cited sources. AKWABA gives the documents required, the fees and the concrete steps, not generalities.",
  },
  {
    number: "03",
    icon: <ShieldAlert className="h-5 w-5" />,
    title: "Anti-scam shield",
    description:
      "Land, fake visa, fake job offer, Mobile Money, fake investments. AKWABA flags the frauds that target the diaspora before any payment.",
  },
  {
    number: "04",
    icon: <LifeBuoy className="h-5 w-5" />,
    title: "SOS detection",
    description:
      "Identifies situations of distress across four levels and triggers an emergency protocol to a human agent. No one is left alone facing a serious situation.",
  },
  {
    number: "05",
    icon: <Brain className="h-5 w-5" />,
    title: "Long-term memory",
    description:
      "AKWABA remembers the context of your cases from one conversation to the next. You never start over from scratch.",
  },
  {
    number: "06",
    icon: <Headset className="h-5 w-5" />,
    title: "Human handoff",
    description:
      "A consular agent can take over the conversation live, then hand it back to the assistant. AI and humans working together.",
  },
];

const verticals = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Consular services",
    description:
      "Passport and travel document, consular card, residence permit, civil status, nationality, legalization and power of attorney, appointment booking, case tracking. The goal: ease the load on consulates and make information reliable.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Invest",
    description:
      "Guidance toward pre-vetted SME opportunities via the CEPICI one-stop shop, and an introduction to an economic advisor. Investing back home, with confidence.",
  },
];

const sampleConversation = [
  {
    from: "user",
    label: "Diaspora · Paris",
    text: "Hello. How do I renew my Ivorian passport from Paris?",
  },
  {
    from: "akwaba",
    label: "AKWABA",
    text:
      "Akwaba. Renewal is handled at the consulate you depend on. Documents to prepare: your old passport, an up-to-date consular card, two ID photos and the application form. Would you like me to check which consulate covers you and set up the appointment?",
  },
  {
    from: "user",
    label: "Diaspora · Paris",
    text: "Yes. An agent offered me an express service for a Mobile Money payment, is that reliable?",
  },
  {
    from: "akwaba",
    label: "AKWABA",
    text:
      "Be careful. The consulate never charges an individual for an express service via Mobile Money. This is a known scam pattern. Do not pay anything. I can point you to the official channel and flag this contact.",
  },
];

const shields = [
  { name: "Land fraud", detail: "Fake plots, double sales" },
  { name: "Fake visa / job", detail: "Offers too good to be true" },
  { name: "Mobile Money", detail: "Diverted payments, fake fees" },
  { name: "Fake investments", detail: "Unrealistic returns, pyramids" },
];

const stack = [
  {
    label: "Frontend",
    value:
      "TanStack Start (React 19, Vite, Nitro), TypeScript, Tailwind CSS, shadcn/ui, AI SDK v6 for the streaming chat UI.",
  },
  {
    label: "Backend",
    value:
      "Convex as a real-time single store: database, server functions, vector search, cron and scheduler.",
  },
  {
    label: "Authentication",
    value: "Better Auth on Convex, Google sign-in.",
  },
  {
    label: "Artificial intelligence",
    value:
      "Multi-model gateway via OpenRouter: Gemini 3.5 Flash (classification / SOS), GPT-5.4 mini (standard), Claude Haiku 4.5 (sensitive topics), GPT-5.4 (escalation), GPT-5.5 (synthesis), Kimi K2.6 (fallback). 1024-dim embeddings and hybrid RAG with LLM reranking.",
  },
  {
    label: "Channels",
    value: "Web and WhatsApp.",
  },
  {
    label: "Deployment",
    value: "Vercel for the frontend, Convex for the backend, CI on Git push.",
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
                <span>All case studies</span>
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
                    Case study No. 03 · Diaspora & AI
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
                    In production
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
                  "Welcome", in Akan and Baoulé.
                </m.p>

                <m.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="font-serif text-2xl md:text-3xl italic font-light text-neutral-800 leading-snug mb-8 max-w-2xl"
                >
                  The AI assistant that welcomes the{" "}
                  <span
                    className="not-italic font-medium"
                    style={{ color: AKWABA_ORANGE }}
                  >
                    Ivorian diaspora
                  </span>
                  , step by step.
                </m.p>

                <m.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="text-lg text-neutral-600 leading-relaxed max-w-xl"
                >
                  Consular procedures and the desire to invest back home. AKWABA
                  guides you, in full confidentiality, on the Web and on
                  WhatsApp, in French and local languages.
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
                  { label: "Channels", value: "Web · WhatsApp" },
                  { label: "Sector", value: "Diaspora · Public services · AI" },
                  { label: "Languages", value: "French · Local languages" },
                  { label: "Status", value: "In production" },
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
              The context
            </m.div>

            <m.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-10 text-neutral-950"
            >
              Far from home, a simple procedure can turn into{" "}
              <em style={{ color: AKWABA_ORANGE }}>an uphill battle</em>.
            </m.h2>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg prose-neutral max-w-none text-neutral-700 space-y-5"
            >
              <p>
                The Ivorian diaspora is large, attached to home, and often faces
                the same questions: renewing a passport, getting a consular card,
                sorting out civil status, understanding a nationality procedure.
                Information is scattered, sometimes contradictory, and consulates
                are overloaded.
              </p>
              <p>
                On top of that complexity comes a very real risk: scams that
                specifically target the diaspora. Fake express services, fake
                investments, land fraud. Someone promises to go faster, for a
                payment, and the money vanishes.
              </p>
              <p>
                AKWABA answers both. Reliable, sourced information for the
                procedures, and active vigilance against fraud. All of it where
                people already are: on the Web and on WhatsApp.
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
              Two verticals
            </m.div>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium max-w-3xl leading-tight text-neutral-950 mb-16 md:mb-20"
            >
              Guiding the procedures, and the desire to invest.
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
              What sets it apart
            </m.div>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium max-w-3xl leading-tight text-neutral-950"
            >
              Six design choices built around trust.
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
                  Inside the conversation
                </m.div>
                <m.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6 text-neutral-950"
                >
                  A concrete answer, and a warning at the right moment.
                </m.h2>
                <m.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-neutral-700 leading-relaxed"
                >
                  AKWABA does more than reply. It cites its sources, prepares the
                  next step, and detects scam signals before you pay anything. On
                  the Web just as on WhatsApp.
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
                        online · Web & WhatsApp
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
                    Illustrative example. AKWABA is live in production on the Web
                    and on WhatsApp.
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
                  The anti-scam shield
                </m.div>
                <m.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6 text-neutral-950"
                >
                  Protecting before the money is gone.
                </m.h2>
                <m.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-neutral-600 leading-relaxed"
                >
                  The frauds that target the diaspora follow known patterns.
                  AKWABA recognizes them and warns the moment a message looks
                  like a scam attempt, before any payment.
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
              The operations console
            </m.div>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6 text-neutral-950"
            >
              Everything runs from a single dashboard.
            </m.h2>
            <m.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-12"
            >
              Conversations, knowledge base, audit log, AI routing, user feedback
              and agents. A real-time view for the teams running AKWABA.
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
                "Knowledge base",
                "Audit log",
                "AI routing",
                "User feedback",
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

        {/* ===================== TECH STACK ===================== */}
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
                  Tech stack
                </m.div>
                <m.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-serif text-3xl md:text-4xl font-medium leading-tight text-neutral-950"
                >
                  End to end, a modern real-time architecture.
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
                      alt="The African Digit Consulting team presenting AKWABA at their stand"
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
                  Who is behind AKWABA
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6 text-neutral-950">
                  A founder's vision, an engineering team's execution.
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  AKWABA was conceived by{" "}
                  <span className="font-medium text-neutral-900">
                    Bede Abel Josias
                  </span>
                  , CEO of African Digit Consulting, then architected and built
                  by{" "}
                  <span className="font-medium text-neutral-900">
                    Marcel Djedje-li
                  </span>{" "}
                  with the ADC team. A product designed for the diaspora, built
                  by people who know it.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Bede Abel Josias · CEO",
                    "Marcel Djedje-li · Lead dev",
                    "ADC team",
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
                        Discover the product
                      </div>
                      <h2 className="font-serif text-white text-4xl md:text-6xl font-medium leading-[1] mb-5">
                        Try AKWABA
                        <br />
                        <em style={{ color: AKWABA_ORANGE_LIGHT }}>
                          live in production.
                        </em>
                      </h2>
                      <p className="text-neutral-400 text-lg max-w-md">
                        The assistant is available right now. Ask a question,
                        AKWABA welcomes you.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-white">
                      <span className="text-sm tracking-wider uppercase text-neutral-400 hidden md:inline">
                        Open the site
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
                <span>See all case studies</span>
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
                  <span>Work with ADC</span>
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
