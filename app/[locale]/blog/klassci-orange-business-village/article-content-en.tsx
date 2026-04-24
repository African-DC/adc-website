"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OrangeBusinessArticlePageEn() {
  return (
    <BlogArticleLayout
      title="KLASSCI in the spotlight at Orange Business."
      subtitle="Showcasing our educational CRM during the launch of the unlimited Internet Pro offer, at the Orange Village headquarters in Abidjan."
      eyebrow="Blog · Partnerships · March 26, 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "KLASSCI at Orange Business",
          href: "/blog/klassci-orange-business-village",
        },
      ]}
      hero={{
        src: "/img/blog/orange-village-hero.jpg",
        alt: "ADC booth at the Orange Business event",
      }}
      cta={{
        title: "Do you run a university, a grande école, a high school?",
        description:
          "Let's talk about your tuition, your payments, your report cards. KLASSCI might be the right conversation.",
        label: "Discover KLASSCI",
        href: "/nos-realisations/klassci",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            On March 26, 2026, we had the pleasure of presenting KLASSCI at
            the private salon organised by Orange for the launch of its
            unlimited Internet Pro offer, at the Orange Village
            headquarters in Abidjan.
          </p>

          <p>
            Orange Business is a central player in digital transformation
            in Côte d&apos;Ivoire. The operator rolled out a new range
            dedicated to professional structures in the first quarter of
            2026, including Mobile Pro and unlimited Internet Pro. The
            goal is clear: to offer Ivorian businesses connectivity
            capable of sustaining real digitalisation of workflows.
          </p>

          <p>
            For us, the invitation made obvious sense. Universities and
            grandes écoles are among the most bandwidth-hungry
            professional structures, and among the least equipped to
            manage it. When 1,500 students simultaneously connect to a
            virtual classroom, to an online report card system, or to a
            tuition payment module, the network becomes a critical player
            in the learning experience.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            What KLASSCI changes.
          </h2>

          <p>
            KLASSCI is a multi-tenant educational CRM we designed and
            developed for African higher education institutions. The tool
            automates up to 95% of administrative, pedagogical and
            financial tasks: enrolments, planning, grade entry, report
            card generation, payment tracking, teaching staff management.
          </p>

          <p>
            Today, ten institutions use it in production, from primary
            school to doctoral programs, with their own grading rules,
            academic years and fee schedules. One codebase, many real
            contexts, the same execution discipline.
          </p>

          <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="font-serif text-4xl font-semibold text-neutral-950 mb-2">
                95%
              </div>
              <p className="text-sm text-neutral-600 leading-snug">
                of administrative and pedagogical tasks automated
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="font-serif text-4xl font-semibold text-neutral-950 mb-2">
                10
              </div>
              <p className="text-sm text-neutral-600 leading-snug">
                institutions in production
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="font-serif text-4xl font-semibold text-neutral-950 mb-2">
                All cycles
              </div>
              <p className="text-sm text-neutral-600 leading-snug">
                from primary school to doctorate
              </p>
            </div>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Connectivity and software: the same problem, seen from two
            angles.
          </h2>

          <p>
            Good business software without a stable connection is
            useless. A stable connection without business tools
            doesn&apos;t bring much either. That&apos;s what the Orange Pro
            unlimited offer and KLASSCI solve together, each from their
            side: one guarantees the transport layer, the other the
            business layer.
          </p>

          <p>
            Conversations with Orange teams and other salon guests
            confirmed it: Ivorian training institutions expect solutions
            that talk to each other, install painlessly and hold the
            daily load. Our teams left with concrete collaboration
            prospects and several valuable recommendations.
          </p>

          <blockquote className="font-serif my-12 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            The future of education runs through intelligent tools adapted
            to our realities.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            What comes next.
          </h2>

          <p>
            Several collaboration avenues emerged from this presentation.
            We&apos;re working on them. Our conviction remains the same:
            Ivorian schools deserve a tool designed from here, for here,
            integrated with the rest of their digital ecosystem rather
            than layered on top.
          </p>

          <p>
            Thanks to Orange Business for the trust, and to all partners
            met during this event for the quality of the exchanges.
          </p>
        </div>
      </article>

      <section className="py-16 md:py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-xs tracking-[0.22em] text-neutral-600 uppercase">
            <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
            On site · Orange Village
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
                src="/img/blog/orange-village-hero.jpg"
                alt="ADC booth Orange Village"
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
                src="/img/blog/orange-village-2.jpg"
                alt="Exchanges with partners"
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
