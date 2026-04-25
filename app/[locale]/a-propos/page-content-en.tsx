"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import ScrollProgress from "@/components/ui/scroll-progress";
import { m, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Lightbulb, Users, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const historyItems = [
  {
    year: "2023",
    title: "ADC is born",
    description:
      "African Digit Consulting is founded in Sud-Comoé by a group of experts passionate about digital in Africa.",
  },
  {
    year: "2024",
    title: "Services expand",
    description:
      "We broaden the offer: mobile applications, social media management, strategic advisory.",
  },
  {
    year: "2025",
    title: "International partnerships",
    description:
      "We team up with international technology partners to deepen our expertise.",
  },
  {
    year: "2026",
    title: "ADC today",
    description:
      "A team of more than 10 digital experts serving clients across Africa, with two signature products: KLASSCI and WOURI.",
  },
];

const pillars = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We build digital solutions that are useful, durable and truly fit for purpose.",
    detail:
      "No gadgets, no unnecessary layers. Every feature we ship exists for a precise, measurable reason.",
  },
  {
    number: "02",
    icon: Users,
    title: "Human impact",
    description: "We put people at the heart of every project.",
    detail:
      "We spend time with the teams who will actually use our tools, before writing a single line of code. The product comes from the ground up.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Local realities",
    description:
      "Our technologies answer the real needs of our communities.",
    detail:
      "Unstable connectivity, tight budgets, African cultural contexts. Our solutions are designed to work here, for real.",
  },
];

export default function AboutArticlePageEn() {
  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title="Digital in service of people."
        subtitle="Since 2023, we have been building digital solutions designed for African realities."
        eyebrow="About · Sud-Comoé · Since 2023"
        breadcrumbs={[{ label: "About", href: "/a-propos" }]}
      />

      <main className="overflow-hidden bg-white">
        {/* ===================== OUR COMPANY ===================== */}
        <section className="py-24 md:py-32 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7"
              >
                <div className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase">
                  <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
                  Our company
                </div>
                <h2
                  className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] text-neutral-950 mb-8"
                >
                  Building technology that{" "}
                  <em className="text-orange-500 font-normal">
                    actually matters, from Sud-Comoé
                  </em>
                  , for Africa.
                </h2>
                <div className="space-y-5 text-neutral-600 text-lg leading-relaxed max-w-2xl">
                  <p>
                    African Digit Consulting designs digital solutions with real
                    social and human impact, shaped from Sud-Comoé for the
                    entire African continent.
                  </p>
                  <p>
                    Our mission is simple: build useful technology in service
                    of local realities. We place people at the heart of every
                    project and commit to shipping solutions that are
                    sustainable, accessible, and aligned with the concrete
                    needs of our communities.
                  </p>
                  <p>
                    Our two flagship products, KLASSCI and WOURI, show what
                    this looks like in practice: one transforms how African
                    schools are run, the other helps farmers navigate climate
                    change.
                  </p>
                </div>
              </m.div>

              <m.div
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
                      alt="Bede Abel Josias, General Manager of ADC"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                  <figcaption className="mt-6 text-sm text-neutral-500 max-w-xs">
                    <span className="block font-medium text-neutral-900 mb-1">
                      Bede Abel Josias
                    </span>
                    General Manager, Founder · With ADC since 2023
                  </figcaption>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* ===================== PILLARS ===================== */}
        <section className="py-24 md:py-32 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16 md:mb-24">
              <div className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase">
                <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
                Our values
              </div>
              <h2
                className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] text-neutral-950"
              >
                Three convictions,{" "}
                <em className="text-orange-500 font-normal">
                  no compromise
                </em>
                .
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <m.article
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
                  </m.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== OUR STORY / TIMELINE ===================== */}
        <section className="py-24 md:py-32 border-t border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20 items-end">
              <div className="lg:col-span-7">
                <div className="mb-6 text-xs tracking-[0.22em] text-neutral-600 uppercase">
                  <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
                  Our story
                </div>
                <h2
                  className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] text-neutral-950"
                >
                  Three years in,{" "}
                  <em className="text-orange-500 font-normal">
                    still the same question
                  </em>{" "}
                  : what actually works?
                </h2>
              </div>
              <m.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 text-lg text-neutral-600 leading-relaxed lg:pl-10 lg:border-l border-neutral-300"
              >
                Tools come and go, frameworks move on. What stays: the
                discipline of shipping things that are useful, solid, and
                delivered on time.
              </m.p>
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
              Want to talk about it?
            </div>
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-12 md:mb-14"
            >
              Let's talk about{" "}
              <em className="text-orange-400 font-normal">
                what you want to build
              </em>
              .
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild variant="cta" size="cta">
                <Link href="/contact">
                  <span>Start a project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="/nos-realisations"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-orange-400 transition-colors"
              >
                See our case studies
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
        <m.div
          className="absolute inset-x-0 top-0 origin-top bg-orange-500"
          style={{ scaleY: lineScaleY, height: "100%" }}
        />
        {/* Animated dot */}
        <m.div
          className="absolute -left-[7px] md:-left-[8px] h-4 w-4 md:h-5 md:w-5 rounded-full bg-orange-500 border-[3px] md:border-4 border-white shadow-[0_0_0_3px_rgba(249,115,22,0.22)]"
          style={{ top: dotTop, opacity: dotOpacity, translateY: "-50%" }}
        />
      </div>

      {/* Items */}
      <ol className="md:col-span-12 md:grid md:grid-cols-12 md:gap-10 space-y-14 md:space-y-0">
        {historyItems.map((item, i) => (
          <m.li
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
          </m.li>
        ))}
      </ol>
    </div>
  );
}
