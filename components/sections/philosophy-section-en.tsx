"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, MapPin } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We build digital solutions that are useful, durable, and fit for purpose.",
    detail:
      "No gadgets, no unnecessary layers. Every feature we ship exists for a precise, measurable reason.",
  },
  {
    number: "02",
    icon: Users,
    title: "Human impact",
    description:
      "People sit at the center of every project we take on.",
    detail:
      "We spend time with the teams who will actually use our tools before we write a line of code. The product comes from the field.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Local realities",
    description:
      "Our technology answers the concrete needs of our communities.",
    detail:
      "Unreliable connectivity, tight budgets, African cultural contexts. Our solutions are engineered to actually work here.",
  },
];

export function PhilosophySection() {
  return (
    <section
      className={`relative py-24 md:py-36 bg-white overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase mb-8"
          >
            <span className="inline-block h-px w-10 bg-orange-500" />
            Our philosophy
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] text-neutral-950"
          >
            Three convictions that shape{" "}
            <em className="text-orange-500 font-normal">every line of code</em>{" "}
            we write.
          </motion.h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative flex flex-col"
              >
                {/* Number + icon */}
                <div className="flex items-center gap-4 mb-8">
                  <span
                    className="font-serif text-5xl md:text-6xl italic font-light text-orange-500/80 leading-none"
                  >
                    {pillar.number}
                  </span>
                  <div className="flex items-center justify-center h-11 w-11 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-800">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-serif text-3xl md:text-[2rem] font-medium leading-tight text-neutral-950 mb-5"
                >
                  {pillar.title}
                </h3>

                {/* Short description, punchy */}
                <p className="text-lg text-neutral-800 leading-snug mb-5 font-medium">
                  {pillar.description}
                </p>

                {/* Detail */}
                <p className="text-[15px] text-neutral-500 leading-relaxed">
                  {pillar.detail}
                </p>

                {/* Bottom rule */}
                <span
                  aria-hidden
                  className="block mt-8 h-px w-full bg-neutral-200"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
