"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SalonEntrepreneurArticlePageEn() {
  return (
    <BlogArticleLayout
      title="ADC at the Public and Private Entrepreneur Opportunities Fair."
      subtitle="The second edition of this Ivorian entrepreneurship gathering, which we took part in."
      eyebrow="Blog · Entrepreneurship"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "Entrepreneur fair",
          href: "/blog/salon-opportunites-entrepreneur",
        },
      ]}
      hero={{
        src: "/img/blog/salon-entrepreneur/1.webp",
        alt: "ADC team at the Public and Private Entrepreneur Opportunities Fair",
      }}
      cta={{
        title: "Are you an entrepreneur looking to digitalise?",
        label: "Start a project",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-7 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            Ivorian entrepreneurship is built as much by its ideas as by
            its encounters. The Public and Private Entrepreneur
            Opportunities Fair remains one of the most useful gatherings
            for that reason.
          </p>

          <p>
            We took part in its second edition to present our solutions
            and, above all, to listen to the real needs of Ivorian
            companies looking to cross a digital threshold.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            A fair that connects two worlds.
          </h2>

          <p>
            The Public and Private Entrepreneur Opportunities Fair brings
            together, over two days, project holders, SMEs, institutional
            representatives and finance players. The idea is simple: make
            the right people cross paths, make sure tenders find qualified
            candidates, and let entrepreneurs discover support programs
            they would never have found alone.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            What we learned.
          </h2>

          <p>
            Three things. First, Ivorian SMEs don&apos;t lack ideas. They
            lack tools to turn those ideas into execution. Second,
            unfamiliarity with public support mechanisms is a real brake:
            many entrepreneurs work without knowing that a national
            program or international donor could support them. Finally,
            digital is expected as a lever, not decoration. It must
            produce measurable results: more customers, fewer overhead
            costs, more visibility.
          </p>

          <blockquote className="font-serif my-10 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            The most useful technology is one an entrepreneur can make
            their own the next day.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            What comes next.
          </h2>

          <p>
            We left the fair with several contacts from SMEs and
            institutions with whom collaborations are underway. Our role
            remains the same: translating business needs into robust,
            maintainable digital tools that really serve over time.
          </p>
        </div>
      </article>

      <section className="py-16 md:py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-xs tracking-[0.22em] text-neutral-600 uppercase">
            <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
            Gallery · Entrepreneur fair
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { src: "/img/blog/salon-entrepreneur/2.webp", alt: "Exchanges with visitors" },
              { src: "/img/blog/salon-entrepreneur/3.webp", alt: "Presentation of our solutions" },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </BlogArticleLayout>
  );
}
