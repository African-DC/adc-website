"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { track } from "@/lib/analytics/track";

const WOURI_GREEN = "#1a5d3a";
const WOURI_GREEN_LIGHT = "#a7d7b5";

export function ProjectSpotlight() {
  return (
    <section
      className={`relative py-24 md:py-32 bg-neutral-950 text-white overflow-hidden`}
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
      {/* Orange + green glows */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: WOURI_GREEN }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Eyebrow */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-400 uppercase mb-6"
        >
          <span className="inline-block h-px w-10 bg-orange-400" />
          Flagship projects · Case studies
        </m.div>

        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.05] max-w-4xl mb-14 md:mb-20"
        >
          Two products we're building,{" "}
          <em className="text-orange-400 font-normal">
            used in the field.
          </em>
        </m.h2>

        {/* 2-col projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* ============ KLASSCI CARD ============ */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/nos-realisations/klassci"
              onClick={() =>
                track("home_project_click", { project: "klassci" })
              }
              className="group block relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-orange-500/40 transition-all duration-500 h-full"
            >
              <div className="p-8 md:p-10 flex flex-col h-full gap-8">
                {/* Top — logo + status */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-xl bg-white shadow-lg p-1.5 flex-shrink-0">
                      <Image
                        src="/img/projets/klassci/logo-klassci.png"
                        alt="KLASSCI logo"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <h3
                      className="font-serif text-3xl md:text-4xl font-semibold leading-none"
                    >
                      KLASSCI<span className="text-orange-400">.</span>
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-orange-500/10 border border-orange-500/30 text-orange-300">
                    <span className="relative flex h-1.5 w-1.5" aria-hidden>
                      <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-400" />
                    </span>
                    In production
                  </span>
                </div>

                {/* Tagline */}
                <div>
                  <p
                    className="font-serif text-xl md:text-2xl italic font-light text-white/85 leading-snug mb-4"
                  >
                    The SaaS reinventing how African schools are run.
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Scheduling, enrollment, finance, report cards, payroll. Ten
                    higher-ed institutions in production.
                  </p>
                </div>

                {/* Screenshot preview */}
                <div className="relative flex-1 min-h-[180px] rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
                  <Image
                    src="/img/projets/klassci/hero_section.png"
                    alt="KLASSCI preview"
                    fill
                    className="object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>

                {/* Stats + CTA */}
                <div className="flex items-end justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex gap-6">
                    <div>
                      <div
                        className="font-serif text-2xl font-semibold"
                      >
                        10
                      </div>
                      <div className="text-[10px] tracking-[0.1em] uppercase text-neutral-500">
                        Schools
                      </div>
                    </div>
                    <div>
                      <div
                        className="font-serif text-2xl font-semibold"
                      >
                        All
                      </div>
                      <div className="text-[10px] tracking-[0.1em] uppercase text-neutral-500">
                        Cycles
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-orange-400 transition-colors">
                    Case study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </div>
            </Link>
          </m.div>

          {/* ============ WOURI CARD ============ */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Link
              href="/nos-realisations/wouri"
              onClick={() =>
                track("home_project_click", { project: "wouri" })
              }
              className="group block relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 hover:border-[#1a5d3a]/70 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 h-full"
            >
              <div className="p-8 md:p-10 flex flex-col h-full gap-8">
                {/* Top — logo + status */}
                <div className="flex items-start justify-between gap-4">
                  <h3
                    style={{ color: WOURI_GREEN_LIGHT }}
                    className="font-serif text-4xl md:text-5xl font-semibold leading-none"
                  >
                    WOURI<span style={{ color: WOURI_GREEN }}>.</span>
                  </h3>
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase"
                    style={{
                      background: `${WOURI_GREEN}20`,
                      border: `1px solid ${WOURI_GREEN}50`,
                      color: WOURI_GREEN_LIGHT,
                    }}
                  >
                    <span className="relative flex h-1.5 w-1.5" aria-hidden>
                      <span
                        className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                        style={{ background: WOURI_GREEN_LIGHT }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-1.5 w-1.5"
                        style={{ background: WOURI_GREEN_LIGHT }}
                      />
                    </span>
                    In beta
                  </span>
                </div>

                {/* Tagline */}
                <div>
                  <p
                    className="font-serif text-xl md:text-2xl italic font-light text-white/85 leading-snug mb-4"
                  >
                    The AI agent helping Ivorian farmers weather climate change.
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    On WhatsApp. In local languages. Practical advice for
                    seasons that no longer hold.
                  </p>
                </div>

                {/* Mini conversation visual */}
                <div
                  className="relative flex-1 min-h-[180px] rounded-xl border p-5 space-y-3 bg-neutral-900/60"
                  style={{ borderColor: `${WOURI_GREEN}30` }}
                >
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-neutral-800 px-4 py-2 text-[13px] text-neutral-200">
                      The rains are late. Do I plant or wait?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div
                      className="max-w-[80%] rounded-2xl rounded-tl-sm px-4 py-2 text-[13px] text-white"
                      style={{ background: WOURI_GREEN }}
                    >
                      Wait 6 to 8 days. Rains are on the way. Prepare the soil
                      in the meantime.
                    </div>
                  </div>
                </div>

                {/* Stats + CTA */}
                <div className="flex items-end justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex gap-6">
                    <div>
                      <div
                        className="font-serif text-2xl font-semibold"
                      >
                        4
                      </div>
                      <div className="text-[10px] tracking-[0.1em] uppercase text-neutral-500">
                        Languages
                      </div>
                    </div>
                    <div>
                      <div
                        className="font-serif text-2xl font-semibold"
                      >
                        WA
                      </div>
                      <div className="text-[10px] tracking-[0.1em] uppercase text-neutral-500">
                        WhatsApp
                      </div>
                    </div>
                  </div>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors"
                    style={{
                      // Match group hover with arbitrary tailwind
                    }}
                  >
                    Case study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </div>
            </Link>
          </m.div>
        </div>

      </div>
    </section>
  );
}
