"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DigiGreenArticlePageEn() {
  return (
    <BlogArticleLayout
      title="ADC selected for the DigiGreen acceleration program."
      subtitle="A major opportunity for WOURI, our AI agent dedicated to Ivorian farmers facing climate change."
      eyebrow="Blog · Acceleration · April 17, 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "DigiGreen acceleration",
          href: "/blog/digigreen-acceleration-wouri",
        },
      ]}
      hero={{
        src: "/img/blog/digigreen-hero.jpg",
        alt: "Launch of the DigiGreen cohort at the Orange Digital Center",
      }}
      cta={{
        title: "Cooperative, NGO, agricultural service, researcher?",
        description:
          "WOURI is progressively opening its beta. If your work touches Ivorian agriculture or climate resilience, let's talk.",
        label: "Discover WOURI",
        href: "/nos-realisations/wouri",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            It&apos;s official. We have been selected for the acceleration
            phase of DigiGreen, a joint initiative from Orange, the German
            development cooperation GIZ and the European Union, dedicated
            to the digitalisation of Ivorian agriculture.
          </p>

          <p>
            For our team, this selection marks an important step. For
            WOURI, our AI agent on WhatsApp that helps Ivorian farmers
            cope with climate change, it&apos;s a concrete accelerator:
            mentorship, resources, access to a network of agricultural
            experts and partners, and access to technical infrastructure
            via the Orange Digital Center in Abidjan.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            DigiGreen &amp; Agri, in a nutshell.
          </h2>

          <p>
            DigiGreen &amp; Agri is a three-year, €7.6 million program
            co-funded by the European Union and implemented by Orange and
            GIZ under the develoPPP program of the German Federal Ministry
            for Economic Cooperation (BMZ). Its ambition: to support the
            digital transformation of the Ivorian agricultural sector —
            especially the cocoa value chain — while supporting the
            country&apos;s low-carbon transition.
          </p>

          <p>
            The program explicitly targets rural youth, women, girls and
            people with disabilities. It combines three pillars:
            training, digital employment in agriculture, and support for
            startups and SMEs building sustainable digital solutions for
            farming.
          </p>

          <p>
            Selected startups benefit from structured support at the
            Orange Digital Center, technical and entrepreneurial training,
            and for the most advanced, access to a seed fund dedicated to
            Ivorian agritech.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Why WOURI fits in.
          </h2>

          <p>
            WOURI is an AI agent accessible from WhatsApp, in the user&apos;s
            own language. A farmer asks a question in French, in Baoulé,
            in Dioula or in Bété, by text or voice message, and receives
            advice adapted to their region, crop and current season.
          </p>

          <p>
            The tool answers an emergency. The Ivorian agricultural
            calendar, which guided sowing, treatment and harvest decisions
            for generations, is collapsing under climate change. Rains
            come later, stop earlier, or fall too hard at once. Pests
            migrate. Yields drop. Public agricultural services exist, but
            they don&apos;t reach every village. Every farmer, on the other
            hand, has a phone. And on that phone, WhatsApp.
          </p>

          <div className="my-10 rounded-2xl p-6 md:p-8 bg-[#1a5d3a]/5 border border-[#1a5d3a]/20">
            <p className="font-serif text-xl md:text-2xl italic font-light text-neutral-900 leading-snug mb-0">
              DigiGreen acceleration lets us go further in our mission: to
              bring more value to farmers, small, medium and large, and
              help them better face climate challenges.
            </p>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            What we plan to do.
          </h2>

          <p>
            Three concrete workstreams will occupy our coming weeks with
            DigiGreen.
          </p>

          <ul className="space-y-4 list-none pl-0">
            <li className="flex gap-4 items-start">
              <span className="font-serif text-2xl italic font-light text-orange-500/80 leading-none mt-1 flex-shrink-0">
                01
              </span>
              <div>
                <h3 className="font-medium text-neutral-950 mb-1">
                  Expand language support
                </h3>
                <p className="text-neutral-600">
                  Consolidate languages already supported (Baoulé, Dioula,
                  Bété) and begin fine-tuning work on Attié, Agni and
                  Senufo.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="font-serif text-2xl italic font-light text-orange-500/80 leading-none mt-1 flex-shrink-0">
                02
              </span>
              <div>
                <h3 className="font-medium text-neutral-950 mb-1">
                  Refine climate advisory precision
                </h3>
                <p className="text-neutral-600">
                  Integrate more granular weather data sources for Côte
                  d&apos;Ivoire and cross-reference them with real cropping
                  calendars by region and crop.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="font-serif text-2xl italic font-light text-orange-500/80 leading-none mt-1 flex-shrink-0">
                03
              </span>
              <div>
                <h3 className="font-medium text-neutral-950 mb-1">
                  Expand the beta
                </h3>
                <p className="text-neutral-600">
                  Open WOURI to new agricultural cooperative partners,
                  collect field feedback, measure impact on seasonal
                  decisions.
                </p>
              </div>
            </li>
          </ul>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            A vision coming into focus.
          </h2>

          <p>
            Every day, we move a little further toward a clear ambition:
            contributing to Africa&apos;s digital sovereignty by building
            useful technologies rooted in human realities. DigiGreen gives
            us the means to do so on the agricultural front, a domain that
            affects millions of people in this country.
          </p>

          <p>
            Thanks to Orange, GIZ, the European Union and their partners
            for the trust. We intend to be worthy of it.
          </p>
        </div>
      </article>

      <section className="py-16 md:py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-xs tracking-[0.22em] text-neutral-600 uppercase">
            <span
              className="inline-block h-px w-10 mr-3 align-middle"
              style={{ background: "#1a5d3a" }}
            />
            Launch · DigiGreen Cohort
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100"
            >
              <Image
                src="/img/blog/digigreen-hero.jpg"
                alt="Presentation during the launch"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100"
            >
              <Image
                src="/img/blog/digigreen-2.jpg"
                alt="Discussions on the sidelines of the event"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </BlogArticleLayout>
  );
}
