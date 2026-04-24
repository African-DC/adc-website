"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Globe, Code } from "lucide-react";
import { track } from "@/lib/analytics/track";
// Palette, Share icons kept on standby for services 03/04 if we reactivate them.

type Service = {
  number: string;
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    number: "01",
    slug: "strategy",
    title: "Digital strategy",
    description:
      "We start by understanding your business. Then we draw the digital strategy that actually fits it.",
    deliverables: ["Presence audit", "Action plan", "KPIs & analytics"],
    icon: <Globe className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    number: "02",
    slug: "web",
    title: "Web development",
    description:
      "Sites, applications, multi-tenant platforms. Clean, performant code built to last.",
    deliverables: ["Marketing sites", "Web applications", "API integration"],
    icon: <Code className="h-5 w-5" strokeWidth={1.5} />,
  },
  // Services ci-dessous desactives: ADC ne fournit plus ces prestations.
  // A reactiver en decommentant si l'offre change (ajouter Palette/Share aux imports).
  // {
  //   number: "03",
  //   title: "Graphic design",
  //   description:
  //     "Visual identity, marketing assets, motion design. A coherent art direction that carries your message.",
  //   deliverables: ["Visual identity", "Print assets", "Motion design"],
  //   icon: <Palette className="h-5 w-5" strokeWidth={1.5} />,
  // },
  // {
  //   number: "04",
  //   title: "Community management",
  //   description:
  //     "Social presence treated as a conversation with your community. Calendar, content, moderation.",
  //   deliverables: ["Editorial planning", "Content creation", "Engagement"],
  //   icon: <Share className="h-5 w-5" strokeWidth={1.5} />,
  // },
];

export function ServicesEditorial() {
  return (
    <section
      id="services"
      className={`relative py-24 md:py-36 bg-neutral-50 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 md:mb-28 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase mb-8"
            >
              <span className="inline-block h-px w-10 bg-orange-500" />
              Our expertise
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] text-neutral-950"
            >
              Two ways to{" "}
              <em className="text-orange-500 font-normal">work with us</em>
              . One philosophy.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 lg:pl-10 lg:border-l border-neutral-300"
          >
            <p className="text-lg text-neutral-600 leading-relaxed">
              Every project starts with a simple question: what will actually
              work for your users, in their context? The deliverables follow.
            </p>
            <Link
              href="/notre-expertise"
              onClick={() =>
                track("home_services_click", { service: "overview" })
              }
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-orange-600 transition-colors"
            >
              See the details
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
          {services.map((service, i) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() =>
                track("home_services_click", { service: service.slug })
              }
              className="group relative border-t border-neutral-200 pt-8"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <span
                    className="font-serif text-4xl italic font-light text-orange-500/80 leading-none"
                  >
                    {service.number}
                  </span>
                  <div className="flex items-center justify-center h-11 w-11 rounded-full border border-neutral-200 bg-white text-neutral-800">
                    {service.icon}
                  </div>
                </div>
              </div>

              <h3
                className="font-serif text-3xl md:text-4xl font-medium leading-tight text-neutral-950 mb-4"
              >
                {service.title}
              </h3>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-6 max-w-md">
                {service.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="text-xs tracking-wide px-3 py-1 rounded-full border border-neutral-200 bg-white text-neutral-700"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
