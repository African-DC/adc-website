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
      "No app to download, no account to create. Farmers talk to WOURI like a regular WhatsApp contact, on the phone they already own.",
  },
  {
    number: "02",
    icon: <Languages className="h-5 w-5" />,
    title: "Ivorian local languages",
    description:
      "Baoulé, Dioula, Bété, and of course French. WOURI replies in whichever language the farmer uses, by text message or voice note.",
  },
  {
    number: "03",
    icon: <CloudRain className="h-5 w-5" />,
    title: "Real-time climate advice",
    description:
      "When to sow, when to irrigate, which varieties to pick in the face of shifting seasons. Answers tailored to the region and the type of crop.",
  },
  {
    number: "04",
    icon: <Sprout className="h-5 w-5" />,
    title: "Designed for the field",
    description:
      "Intermittent connectivity, voice notes, short response times. Every constraint of Ivorian farming life shaped the product.",
  },
];

const sampleConversation = [
  {
    from: "farmer",
    label: "Farmer · Yamoussoukro",
    text: "Hello. The rains are late this year. Should I plant my maize soon, or wait?",
  },
  {
    from: "wouri",
    label: "WOURI",
    text:
      "Hello. In your area, forecasts show reliable rains starting next week. I'd recommend waiting 6 to 8 days before sowing. In the meantime, prepare the soil and check your seeds.",
  },
  {
    from: "farmer",
    label: "Farmer · Yamoussoukro",
    text: "N'mɔ m'aba kaban ? (Can I start planting?)",
  },
  {
    from: "wouri",
    label: "WOURI",
    text:
      "Ɛlɛ, kɛ ka wulu ka taa ba 6 ni 8 tile waati la. Ji be na kɔ wula kɔ. (No, wait 6 to 8 days. The rains will come shortly after.)",
  },
];

export default function WouriCaseStudyContent() {
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
                <span>All case studies</span>
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
                    Case study No. 02 · Climate & agriculture
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
                    In beta
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
                  The AI agent helping Ivorian farmers adapt to{" "}
                  <span
                    className="not-italic font-medium"
                    style={{ color: WOURI_GREEN }}
                  >
                    climate change
                  </span>
                  .
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="text-lg text-neutral-600 leading-relaxed max-w-xl"
                >
                  WOURI meets farmers where they already are.
                  On WhatsApp. In their language. With concrete advice for
                  seasons that no longer look like the ones they grew up with.
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
                  { label: "Channel", value: "WhatsApp" },
                  { label: "Sector", value: "Agritech · Climate-tech" },
                  { label: "Languages", value: "French · Baoulé · Dioula · Bété" },
                  { label: "Status", value: "Private beta · Côte d'Ivoire" },
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
              The problem
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-10 text-neutral-950"
            >
              The seasons{" "}
              <em style={{ color: WOURI_GREEN }}>no longer look like</em> the
              ones our elders knew.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg prose-neutral max-w-none text-neutral-700 space-y-5"
            >
              <p>
                Côte d'Ivoire is an agricultural country first. Cocoa, coffee,
                rubber, cashew, food crops. Millions of people make a living
                from the decisions they take every week: when to sow, when to
                treat, which variety to choose, how to protect the harvest.
              </p>
              <p>
                These decisions used to rest on a calendar that stayed stable
                for generations. That calendar is disappearing. Rains arrive
                later, stop earlier, or come down too hard all at once. Pests
                shift. Yields drop.
              </p>
              <p>
                Public agricultural extension services exist, but they can't
                reach every village. Farmers, on the other hand, all have a
                phone. And on that phone, they have WhatsApp.
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
              The solution
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium max-w-3xl leading-tight text-neutral-950"
            >
              Four design principles.
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
                  Inside the conversation
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6 text-neutral-950"
                >
                  Talk to it the way you'd talk to a neighbor.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-neutral-700 leading-relaxed"
                >
                  WOURI understands French and the main languages spoken in
                  Côte d'Ivoire. Questions can be written or voice. Answers
                  too. No form to fill in, no button to learn.
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
                        online · WhatsApp
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
                    Illustrative example. WOURI is currently in private beta
                    with a panel of partner farmers.
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
                  Local languages
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6 text-neutral-950"
                >
                  You don't reach a village if you don't speak its language.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-neutral-600 leading-relaxed"
                >
                  Côte d'Ivoire has more than 60 local languages. We're
                  starting with the most widely spoken, with a model
                  fine-tuned specifically to understand agricultural phrasing
                  and local metaphors.
                </motion.p>
              </div>

              <ul className="lg:col-span-7 divide-y divide-neutral-200 border-t border-b border-neutral-200">
                {[
                  { name: "French", status: "Available" },
                  { name: "Baoulé", status: "Available" },
                  { name: "Dioula", status: "Available" },
                  { name: "Bété", status: "Beta" },
                  { name: "Attié · Agni · Sénoufo", status: "Soon" },
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
                          lang.status === "Soon"
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
                        Join the beta
                      </div>
                      <h2
                        className="font-serif text-white text-4xl md:text-6xl font-medium leading-[1] mb-5"
                      >
                        Build with us
                        <br />
                        <em style={{ color: "#a7d7b5" }}>
                          the future of Ivorian agriculture.
                        </em>
                      </h2>
                      <p className="text-neutral-400 text-lg max-w-md">
                        Cooperatives, NGOs, agricultural services, researchers.
                        WOURI is opening up its beta gradually. Get in touch to
                        discuss.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-white">
                      <span className="text-sm tracking-wider uppercase text-neutral-400 hidden md:inline">
                        Get in touch
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
                <span>See all case studies</span>
              </Link>
              <Button asChild variant="cta" size="cta">
                <Link href="/contact">
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
