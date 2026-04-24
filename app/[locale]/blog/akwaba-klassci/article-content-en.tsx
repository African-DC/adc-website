"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  "Ministry of National Education",
  "Côte d'Ivoire Export",
  "GIZ",
  "Impact'Lab UNESCO",
];

const features = [
  "Full digitalisation of enrolments",
  "Automated grading and report card management",
  "Creation and distribution of schedules",
  "Automatic salary calculation for visiting teachers",
  "Real-time attendance and absence tracking",
  "Instant parent access to their children's academic journey",
  "Integrated accounting with tuition reminders",
  "Analytics tools for strategic decision-making",
];

const gallery = [
  { src: "/img/blog/akwaba-klassci/1.webp", alt: "AKAWABA KLASSCI presentation" },
  { src: "/img/blog/akwaba-klassci/2.webp", alt: "ADC team at the KLASSCI launch" },
  { src: "/img/blog/akwaba-klassci/3.webp", alt: "Institutional partners present" },
  { src: "/img/blog/akwaba-klassci/4.webp", alt: "Exchanges with guests" },
  { src: "/img/blog/akwaba-klassci/5.webp", alt: "KLASSCI platform demonstration" },
  { src: "/img/blog/akwaba-klassci/6.webp", alt: "Symbolic handover at the AKAWABA KLASSCI event" },
  { src: "/img/blog/akwaba-klassci/7.webp", alt: "Discussion between education sector players" },
  { src: "/img/blog/akwaba-klassci/8.webp", alt: "Official KLASSCI presentation moment" },
];

export default function AkwabaKlassciArticlePageEn() {
  return (
    <BlogArticleLayout
      title="AKAWABA KLASSCI: official launch of our school management solution."
      subtitle="On June 20, 2025, ADC officially introduced KLASSCI to the Ministry of National Education, GIZ, Côte d'Ivoire Export and Impact'Lab UNESCO."
      eyebrow="Blog · Launch · June 20, 2025"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: "AKAWABA KLASSCI", href: "/blog/akwaba-klassci" },
      ]}
      hero={{
        src: "/img/blog/akwaba-klassci/1.webp",
        alt: "AKAWABA KLASSCI event: official launch",
      }}
      cta={{
        title: "Do you lead an educational institution?",
        description:
          "KLASSCI is now in production in ten Ivorian schools, from primary to higher education. Let's talk about your back-to-school.",
        label: "Discover KLASSCI",
        href: "/nos-realisations/klassci",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            AKAWABA. &ldquo;Welcome&rdquo; in Akan. It&apos;s the word we chose
            to tell Ivorian education stakeholders that KLASSCI is here,
            ready to serve their schools.
          </p>

          <p>
            On Friday, June 20, 2025, African Digit Consulting officially
            introduced KLASSCI, its intelligent software for simplified
            school management. After a year of rigorous development, a
            product that doesn&apos;t just rely on marketing claims but
            delivers on its promises in the field.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            An ecosystem gathered around the product.
          </h2>

          <p>
            The event brought together key players from the Ivorian
            educational and entrepreneurial ecosystem, along with
            education professionals and seasoned entrepreneurs who came to
            challenge the tool.
          </p>

          <ul className="my-6 space-y-3">
            {partners.map((partner) => (
              <li
                key={partner}
                className="flex items-start gap-3 text-neutral-800"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500 mt-3 flex-shrink-0" />
                <span>{partner}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            What KLASSCI enables, concretely.
          </h2>

          <p>
            KLASSCI is much more than software: it&apos;s a 100% Ivorian
            solution designed for the realities of our schools. The
            features presented that day are not promises but modules
            already in production at our first clients.
          </p>

          <ul className="my-8 space-y-4 list-none pl-0">
            {features.map((feature, i) => (
              <li key={feature} className="flex gap-4 items-start">
                <span className="font-serif text-xl italic font-light text-orange-500/80 leading-none mt-1 flex-shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-neutral-700">{feature}</span>
              </li>
            ))}
          </ul>

          <blockquote className="font-serif my-12 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            KLASSCI is the connected, efficient, transparent school. In
            the service of educational excellence.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            One step among many.
          </h2>

          <p>
            AKAWABA KLASSCI was not an endpoint but a starting point.
            Feedback from the Ministry, GIZ, Impact&apos;Lab UNESCO and the
            entrepreneurs present fed the iterations of the following
            months. Today, KLASSCI runs in ten Ivorian institutions, from
            primary to higher education.
          </p>

          <p>
            Thanks to everyone who was there on June 20, for the trust
            and for the sharp questions. That&apos;s how you build a product
            that truly serves.
          </p>
        </div>
      </article>

      <section className="py-16 md:py-20 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-8 text-xs tracking-[0.22em] text-neutral-600 uppercase">
            <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
            Vlog · The day in 1:20
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-sm mx-auto rounded-2xl overflow-hidden bg-black shadow-2xl shadow-neutral-900/20 border border-neutral-200"
          >
            <video
              controls
              preload="metadata"
              poster="/videos/akwaba-klassci-vlog-poster.webp"
              className="w-full aspect-[9/16]"
            >
              <source src="/videos/akwaba-klassci-vlog.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </motion.div>
          <p className="mt-6 text-sm text-neutral-500 text-center">
            Looking back in pictures at the official presentation of June
            20, 2025.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-xs tracking-[0.22em] text-neutral-600 uppercase">
            <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
            Gallery · AKAWABA KLASSCI
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {gallery.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
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
