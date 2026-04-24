"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DigitalWomenArticlePageEn() {
  return (
    <BlogArticleLayout
      title="Digital Women for Access: organising the first edition in Abidjan."
      subtitle="A look back at an initiative led by ADC to make digital more accessible to Ivorian women."
      eyebrow="Blog · Initiatives"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "Digital Women for Access",
          href: "/blog/digital-women-for-access",
        },
      ]}
      hero={{
        src: "/img/blog/digital-women/1.webp",
        alt: "First edition of Digital Women for Access",
      }}
      cta={{
        title: "Do you lead an inclusive digital initiative?",
        label: "Tell us about it",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-7 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            Digital access is not an abstraction. It&apos;s a very concrete
            matter of training, equipment, confidence. For women, in
            French-speaking Africa, the gap is real. ADC wanted to
            contribute to closing it at its own scale.
          </p>

          <p>
            Digital Women for Access is an initiative we organised in
            Abidjan to highlight the role of women in Côte d&apos;Ivoire&apos;s
            digital transformation, and above all to create a concrete
            space for training, exchange and networking.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Why it matters.
          </h2>

          <p>
            Côte d&apos;Ivoire, like many French-speaking African countries,
            still shows a gender gap in digital skills access. Structuring
            initiatives already exist in the ecosystem — such as DigiFemmes
            (led by the Millennium Challenge Corporation, USAID and
            Microsoft in partnership with the Ministry of Communication
            and Digital Economy) or Abidjanaises In Tech. Our approach
            fits into that landscape: creating a local, grassroots bridge
            between those major initiatives and the women who want to
            connect to them.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            What we did.
          </h2>

          <p>
            This first edition was designed as a hybrid event: digital
            acculturation sessions for those just getting started, and
            deeper workshops on concrete tools (online presence, digital
            communication, first steps in e-commerce) for those already
            moving forward. The goal was not to stack presentations but
            to leave with something actionable by Monday morning.
          </p>

          <blockquote className="font-serif my-10 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            Digital does not replace opportunities. It simply makes them
            more visible to those who know how to seize them.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            What we take away.
          </h2>

          <p>
            The gap closes through repeated gestures. One training, then
            a second. A first showcase website, then a community forming
            around it. We intend to sustain this initiative and open it
            to other partners who share the idea that real digital access
            is built over the long term, not on a single event.
          </p>
        </div>
      </article>

      <section className="py-16 md:py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-xs tracking-[0.22em] text-neutral-600 uppercase">
            <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
            Gallery · Digital Women for Access
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { src: "/img/blog/digital-women/2.webp", alt: "Digital Women for Access workshop" },
              { src: "/img/blog/digital-women/3.webp", alt: "Speaking at Digital Women for Access" },
              { src: "/img/blog/digital-women/4.webp", alt: "Talk at Digital Women for Access" },
              { src: "/img/blog/digital-women/5.webp", alt: "Digital Women for Access participants" },
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
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </BlogArticleLayout>
  );
}
