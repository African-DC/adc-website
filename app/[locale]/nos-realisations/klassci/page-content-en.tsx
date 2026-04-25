"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { m } from "framer-motion";
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
import { useEffect } from "react";
import { useLocale } from "next-intl";
import { track } from "@/lib/analytics/track";

const KLASSCI_URL = "https://klassci.com";

const metrics = [
  { value: "10", label: "Institutions in production" },
  { value: "All cycles", label: "From primary to doctorate" },
  { value: "Real-time", label: "Financial tracking" },
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
    title: "Master scheduling",
    description:
      "Build, visualize and adjust the academic timetable for an entire university year. Institution-wide view for leadership, filtered view for each program.",
    image: "/img/projets/klassci/planning-general.png",
    imageAlt: "Master scheduling view in KLASSCI",
  },
  {
    number: "02",
    icon: <Wallet className="h-5 w-5" />,
    title: "Real-time financial tracking",
    description:
      "Student payments, due dates, outstanding balances and institutional cash flow, consolidated into a single view. Finance teams save hours every week.",
    image: "/img/projets/klassci/suivi-financier.png",
    imageAlt: "KLASSCI financial tracking dashboard",
  },
  {
    number: "03",
    icon: <GraduationCap className="h-5 w-5" />,
    title: "LMD degree pathways",
    description:
      "Bachelor, Master, Doctorate. Course units, ECTS credits, prerequisites, semesters. The full LMD model, cleanly built for the African higher education context.",
    image: "/img/projets/klassci/parcours-lmd.png",
    imageAlt: "LMD degree pathway configuration",
  },
  {
    number: "04",
    icon: <NotebookPen className="h-5 w-5" />,
    title: "Grading and report cards",
    description:
      "Faculty enter grades from anywhere. Report cards are generated automatically, with honors, ranks and comments. No more Excel files traded over email.",
    image: "/img/projets/klassci/saisie-notes-bulletins.png",
    imageAlt: "Grading and report card interface",
  },
  {
    number: "05",
    icon: <Users className="h-5 w-5" />,
    title: "Staff management",
    description:
      "Faculty, administration, adjunct lecturers. Assignments, availability, hours worked, payroll ready. The institution's HR file, always up to date.",
    image: "/img/projets/klassci/gestion-personnel.png",
    imageAlt: "Staff management module",
  },
  {
    number: "06",
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Results and analytics",
    description:
      "Results by class, by program, by session. Pass rates, grade averages, year-over-year trends. Clear data to support decisions.",
    image: "/img/projets/klassci/resultats.png",
    imageAlt: "Results and analytics view",
  },
];

export default function KlassciCaseStudyContent() {
  const rawLocale = useLocale();
  const locale: "fr" | "en" = rawLocale === "en" ? "en" : "fr";

  useEffect(() => {
    track("case_study_view", { project: "klassci", locale });
  }, [locale]);

  return (
    <div className={`bg-neutral-50 text-neutral-950`}>
      <ScrollProgress />
      <NavbarDemo />

      <main className="relative overflow-hidden">
        {/* ===================== HERO ===================== */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-7xl mx-auto px-6">
            {/* Back link */}
            <m.div
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
                <span>All case studies</span>
              </Link>
            </m.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left column — editorial text */}
              <div className="lg:col-span-7">
                <m.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-3 text-xs tracking-[0.18em] text-neutral-500 uppercase mb-8"
                >
                  <span className="h-px w-8 bg-orange-500" />
                  <span>Case study No. 01 · Flagship project</span>
                </m.div>

                <m.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="flex items-center gap-5 md:gap-7 mb-8"
                >
                  <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-white border border-neutral-200 shadow-sm p-2 flex-shrink-0">
                    <Image
                      src="/img/projets/klassci/logo-klassci.png"
                      alt="KLASSCI logo"
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
                </m.div>

                <m.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="font-serif text-2xl md:text-3xl italic font-light text-neutral-700 leading-snug mb-8 max-w-2xl"
                >
                  The SaaS reinventing academic operations for{" "}
                  <span className="text-orange-600 not-italic font-medium">
                    African higher education
                  </span>
                  .
                </m.p>

                <m.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="text-lg text-neutral-600 leading-relaxed max-w-xl"
                >
                  A product built end-to-end by African Digit Consulting,
                  designed for higher education institutions that want to move
                  beyond Excel and run their academic operations like a true
                  modern SaaS.
                </m.p>

                {/* Metadata strip */}
                <m.dl
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-neutral-200"
                >
                  {[
                    { label: "Sector", value: "All education levels" },
                    { label: "Stack", value: "Laravel · Blade · Alpine" },
                    { label: "Deployment", value: "Multi-tenant" },
                    { label: "Status", value: "In production" },
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
                </m.dl>
              </div>

              {/* Right column — hero screenshot, tilted */}
              <m.div
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
                      alt="KLASSCI dashboard"
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
                  Live at klassci.com
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* ===================== METRICS ===================== */}
        <section className="relative py-16 md:py-20 border-y border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {metrics.map((metric, i) => (
                <m.div
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
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== VIDEO PRESENTATION ===================== */}
        <section className="py-20 md:py-24 bg-neutral-950 text-white">
          <div className="max-w-5xl mx-auto px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-xs tracking-[0.22em] text-neutral-400 uppercase text-center"
            >
              <span className="inline-block h-px w-10 bg-orange-400 mr-3 align-middle" />
              Product video
            </m.div>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-10 text-center max-w-2xl mx-auto"
            >
              One minute to understand{" "}
              <em className="text-orange-400 font-normal">what KLASSCI changes</em>.
            </m.h2>
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 bg-black"
            >
              <video
                controls
                preload="metadata"
                poster="/videos/klassci-presentation-poster.webp"
                className="w-full aspect-square"
              >
                <source src="/videos/klassci-presentation.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </m.div>
          </div>
        </section>

        {/* ===================== PROBLEM / CONTEXT ===================== */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-xs tracking-[0.18em] text-neutral-500 uppercase"
            >
              <span className="inline-block h-px w-8 bg-orange-500 mr-3 align-middle" />
              The context
            </m.div>

            <m.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-8"
            >
              Most African institutions still run their entire academic year on{" "}
              <em className="text-orange-600">scattered Excel files</em>.
              We built the alternative.
            </m.h2>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg prose-neutral max-w-none text-neutral-600 space-y-5"
            >
              <p>
                KLASSCI started from a simple observation. Between admissions,
                enrollment, grading, report cards, tuition payments and faculty
                payroll, an institution manages hundreds of critical data flows.
                Most do it with tools that were never designed for the job.
              </p>
              <p>
                We took the time to understand the domain in depth, with real
                institutional partners from day one. The result is a
                multi-tenant SaaS now running ten institutions in production,
                covering every level from primary school to doctorate programs.
              </p>
            </m.div>
          </div>
        </section>

        {/* ===================== FEATURES ===================== */}
        <section className="relative pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-xs tracking-[0.18em] text-neutral-500 uppercase"
            >
              <span className="inline-block h-px w-8 bg-orange-500 mr-3 align-middle" />
              What we built
            </m.div>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium max-w-3xl leading-tight"
            >
              Six modules built around the daily work of academic teams.
            </m.h2>
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
                  <m.div
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
                  </m.div>

                  {/* Image side */}
                  <m.div
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
                  </m.div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ===================== HUMAN MOMENT ===================== */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              {/* Portrait vertical */}
              <m.div
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
                      src="/img/TEAM_ADC/marcel-djedjeli.webp"
                      alt="Marcel Djedje-li"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                </div>
              </m.div>

              {/* Quote */}
              <m.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="md:col-span-7"
              >
                <div className="mb-8 text-xs tracking-[0.18em] text-neutral-500 uppercase">
                  <span className="inline-block h-px w-8 bg-orange-500 mr-3 align-middle" />
                  From the lead developer
                </div>

                <span
                  aria-hidden
                  className="font-serif block text-7xl md:text-8xl leading-none text-orange-500/80 mb-4 select-none"
                >
                  &ldquo;
                </span>

                <blockquote
                  className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] italic font-light leading-[1.2] text-neutral-900 mb-10"
                >
                  You can't build a tool for African institutions without
                  spending real time{" "}
                  <span className="text-orange-600 not-italic font-medium">
                    on the admin side of the school.
                  </span>
                </blockquote>

                <figcaption className="flex items-center gap-4 text-sm">
                  <span className="block h-px w-10 bg-neutral-900" />
                  <span>
                    <span className="block font-medium text-neutral-900">
                      Marcel Djedje-li
                    </span>
                    <span className="block text-neutral-500 text-xs tracking-[0.12em] uppercase mt-1">
                      Head of development · African Digit Consulting
                    </span>
                  </span>
                </figcaption>
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
              className="relative"
            >
              <Link
                href={KLASSCI_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track("case_study_cta_click", {
                    project: "klassci",
                    cta: "visit_klassci",
                    destination: KLASSCI_URL,
                  })
                }
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
                        Explore the product
                      </div>
                      <h2
                        className="font-serif text-white text-5xl md:text-7xl font-medium leading-[1] mb-4"
                      >
                        klassci
                        <span className="text-orange-400">.com</span>
                      </h2>
                      <p className="text-neutral-400 text-lg max-w-md">
                        See KLASSCI in action, request a demo, or reach the
                        product team directly.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-white">
                      <span className="text-sm tracking-wider uppercase text-neutral-400 hidden md:inline">
                        Open the site
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
            </m.div>

            {/* Secondary links */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
              <Link
                href="/nos-realisations"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-orange-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>See all case studies</span>
              </Link>
              <Button asChild variant="cta" size="cta">
                <Link
                  href="/contact"
                  onClick={() =>
                    track("case_study_cta_click", {
                      project: "klassci",
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
