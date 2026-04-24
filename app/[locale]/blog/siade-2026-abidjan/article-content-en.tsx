"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function SiadeArticlePageEn() {
  return (
    <BlogArticleLayout
      title="ADC at SIADE 2026: Two African AIs put to the test of technological sovereignty."
      subtitle="A look back at our participation in the 2nd edition of the International Salon of AI, Defense and Space."
      eyebrow="Blog · Events · April 21, 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: "SIADE 2026", href: "/blog/siade-2026-abidjan" },
      ]}
      hero={{
        src: "/img/blog/siade-hero.jpg",
        alt: "African Digit Consulting booth at SIADE 2026",
      }}
      cta={{
        title:
          "A project touching on education, agriculture or digital sovereignty?",
        label: "Talk to our team",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            On April 13 and 14, 2026, Abidjan hosted the second edition of
            SIADE, a salon that asks a question many still avoid: what
            strategy for African technological sovereignty by 2030?
          </p>

          <p>
            We were there as a young Ivorian company building solutions
            grounded in artificial intelligence. Not as observers. As
            participants, with two products to show, to explain, to discuss.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            A salon, a question.
          </h2>

          <p>
            SIADE is organised by SNEDAI Technologies and was held this year
            at the Félix Houphouët-Boigny Stadium, under the high patronage
            of the Ministry of Defense. The Minister of the Interior and
            Security, General Vagondo Diomandé, opened the proceedings on
            behalf of the Vice Prime Minister Téné Ouattara Birahima.
          </p>

          <p>
            Artificial intelligence, defense, space. Three domains long
            thought of as reserved territory for great powers. SIADE 2026
            made the opposite bet: what if Africa seized these topics
            without asking permission? Two strategic agreements were signed
            during the salon — one with the University of Montpellier for
            the launch of a nanosatellite project, the other with the
            Péléforo Gon Coulibaly University to strengthen training in
            advanced technologies.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            What we showcased.
          </h2>

          <p>
            Two products designed, developed and maintained by our team in
            Abidjan. Two answers to very concrete problems.
          </p>

          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 p-6 md:p-7 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-orange-600 mb-3">
                <span className="inline-block h-px w-8 bg-orange-500 mr-2 align-middle" />
                KLASSCI
              </div>
              <h3 className="font-serif text-2xl font-medium mb-3">
                An educational CRM for higher education institutions.
              </h3>
              <p className="text-neutral-600 text-base leading-relaxed mb-4">
                KLASSCI automates up to 95% of the administrative,
                pedagogical and financial tasks of universities and grandes
                écoles. Virtual classroom integrated, real-time financial
                tracking, complete LMD curriculum.
              </p>
              <Link
                href={"/nos-realisations/klassci" as "/nos-realisations"}
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-orange-600 transition-colors"
              >
                Read the case study
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </Link>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-6 md:p-7 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-[#1a5d3a] mb-3">
                <span
                  className="inline-block h-px w-8 mr-2 align-middle"
                  style={{ background: "#1a5d3a" }}
                />
                WOURI
              </div>
              <h3 className="font-serif text-2xl font-medium mb-3">
                An agritech AI that speaks the village&apos;s language.
              </h3>
              <p className="text-neutral-600 text-base leading-relaxed mb-4">
                WOURI turns weather data into practical advice for farmers,
                via WhatsApp and voice calls, in French and local languages.
              </p>
              <Link
                href={"/nos-realisations/wouri" as "/nos-realisations"}
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-[#1a5d3a] transition-colors"
              >
                Read the case study
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </Link>
            </div>
          </div>

          <p>
            Both products share the same philosophy: to create useful
            technologies designed for our realities. One transforms academic
            management, the other makes climate expertise accessible to
            small rural producers. Both are now in production or in beta on
            Ivorian soil.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Why technological sovereignty is not a slogan.
          </h2>

          <p>
            For a school managing 3,000 students, dependence on a SaaS
            hosted on the other side of the world is not a technical
            detail. It is a vulnerability: costs in foreign currency, delayed
            support, sensitive data processed in jurisdictions they have no
            leverage over.
          </p>

          <p>
            For a farmer in the Yamoussoukro region, a weather advisory tool
            that speaks neither Baoulé nor Dioula is not a tool. It&apos;s a
            beautiful promise that doesn&apos;t reach the village.
          </p>

          <p>
            Building from Abidjan, with Ivorian teams, rooted in local
            languages and constraints, is not just economic patriotism.
            It&apos;s what makes products actually useful. SIADE 2026 made it
            clear: sovereignty begins with knowing how to build.
          </p>

          <blockquote className="font-serif my-12 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            Two solutions, one vision: to create useful technologies
            designed for our realities.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            What we take away.
          </h2>

          <p>
            Two dense days. Exchanges with industrialists, public services,
            foreign delegations, other African startups. One certainty
            emerged: the Ivorian tech ecosystem knows what it wants. It
            wants to build, not just consume. It wants equitable
            partnerships, not subcontracting. It wants tools that speak its
            language.
          </p>

          <p>
            Every day, we move forward toward a clear objective:
            contributing to Africa&apos;s digital sovereignty. SIADE 2026
            reminded us that we are not alone on this road.
          </p>
        </div>
      </article>

      <section className="py-16 md:py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-xs tracking-[0.22em] text-neutral-600 uppercase">
            <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
            Gallery · SIADE 2026
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: "/img/blog/siade-2.jpg", alt: "WOURI booth at SIADE" },
              { src: "/img/blog/siade-3.jpg", alt: "ADC team in discussion" },
              { src: "/img/blog/siade-4.jpg", alt: "Presentation of ADC solutions" },
              { src: "/img/blog/siade-5.jpg", alt: "Visitors at the ADC booth" },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </BlogArticleLayout>
  );
}
