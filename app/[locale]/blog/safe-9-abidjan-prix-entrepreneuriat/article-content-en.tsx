"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";
import { Link } from "@/i18n/navigation";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Safe9ArticlePageEn() {
  return (
    <BlogArticleLayout
      title="SAFE 9: ADC recognised for its commitment to Africa's young entrepreneurs."
      subtitle="At the African Entrepreneurship Salon, African Digit Consulting received an award recognising its commitment to promoting entrepreneurship among Africa's youth."
      eyebrow="Blog · Awards · July 31, 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "SAFE 9 — ADC award",
          href: "/blog/safe-9-abidjan-prix-entrepreneuriat",
        },
      ]}
      hero={{
        src: "/img/blog/safe-9-abidjan-prix-entrepreneuriat/hero.webp",
        alt: "Abel Josias BEDE, managing director of ADC, holding the SAFE 9 award alongside Robert Brazza, in Abidjan",
      }}
      cta={{
        title: "Building an impact project for youth or education?",
        description:
          "Discover how we design useful, durable digital solutions grounded in African realities.",
        label: "Explore our work",
        href: "/nos-realisations",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-lg leading-relaxed text-neutral-800">
          <p className="font-serif text-2xl leading-snug font-light text-neutral-900 italic md:text-3xl">
            In Abidjan, at the Sofitel Hôtel Ivoire, African Digit Consulting
            was recognised at the 9th edition of the African Entrepreneurship
            Salon (SAFE), an event entirely dedicated to digital transformation.
          </p>

          <p>
            The award handed to ADC carries a message that says the essential:
            &ldquo;In recognition of your efforts to promote entrepreneurship
            among Africa's youth.&rdquo; We receive this distinction with
            sobriety, as encouragement to keep doing substantive work rather
            than as an end in itself.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            A salon focused on digital transformation.
          </h2>

          <p>
            Held on July 30 and 31, 2026 around the theme &ldquo;Digital
            transformation: accelerating youth entrepreneurship in
            Africa,&rdquo; the 9th edition of SAFE brought together project
            leaders, institutions and financial partners. The programme
            featured free capacity-building workshops — artificial intelligence,
            cybersecurity, e-commerce —, an &ldquo;entrepreneur clinic&rdquo;
            dedicated to digital diagnostics, business meetings and a project
            competition.
          </p>

          <p>
            Led by Commissioner General Mohamed Fofana, the salon confirmed a
            clear direction: turning digital into a concrete lever for young
            businesses. A partnership with a financial institution mobilised one
            billion CFA francs to finance local SMEs.
          </p>

          <aside className="flex flex-col gap-4 border-y border-neutral-200 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-neutral-950">
                Our contribution to education.
              </p>
              <p className="mt-1 text-base text-neutral-600">
                KLASSCI, our school management solution, equips schools and
                their educational communities every day.
              </p>
            </div>
            <Link
              href="/nos-realisations/klassci"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 font-semibold text-orange-600 transition-colors hover:text-orange-700"
            >
              Discover KLASSCI
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </aside>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            A distinction that recognises deep commitment.
          </h2>

          <p>
            On the salon stage, the award was handed to Abel Josias BEDE,
            managing director of ADC, by Mohamed Fofana. Beyond the moment, this
            recognition honours a conviction that guides our team: technology
            only makes sense when it serves real needs and makes access fairer —
            especially for young people.
          </p>

          <p>
            It is this conviction that connects our projects — from solutions
            serving education to digital inclusion initiatives — and that SAFE
            chose to highlight.
          </p>

          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light text-neutral-900 italic md:pl-8 md:text-3xl">
            An award is not a finish line. It is one more responsibility: to keep
            building useful tools for those who take the entrepreneurial leap.
          </blockquote>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            What we take away.
          </h2>

          <p>
            Côte d'Ivoire's entrepreneurial ecosystem is maturing, and digital is
            becoming an acknowledged driver. The challenge now remains the same
            one that guides our work: genuinely equipping young businesses with
            solutions designed for their context and built to last.
          </p>

          <p className="text-base text-neutral-500">
            Photos: 9th edition of the African Entrepreneurship Salon, Sofitel
            Hôtel Ivoire, Abidjan.
          </p>
        </div>
      </article>

      <section className="border-t border-neutral-200 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8 text-xs tracking-[0.22em] text-neutral-600 uppercase">
            <span className="mr-3 inline-block h-px w-10 bg-orange-500 align-middle" />
            Vlog · The moment on video
          </div>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-black shadow-2xl shadow-neutral-900/20"
          >
            <video
              controls
              preload="metadata"
              poster="/videos/safe-9-abidjan-vlog-poster.webp"
              className="aspect-[3/4] w-full"
            >
              <source src="/videos/safe-9-abidjan-vlog.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </m.div>
          <p className="mt-6 text-center text-sm text-neutral-500">
            A look back at the distinction received at SAFE 9.
          </p>
        </div>
      </section>

      <BlogGallery
        eyebrow="Gallery · SAFE 9"
        columns={2}
        aspect="landscape"
        images={[
          {
            src: "/img/blog/safe-9-abidjan-prix-entrepreneuriat/1.webp",
            alt: "Group photo with the SAFE 9 award, alongside Robert Brazza, in Abidjan",
          },
          {
            src: "/img/blog/safe-9-abidjan-prix-entrepreneuriat/2.webp",
            alt: "Mohamed Fofana, SAFE Commissioner General, handing the award to Abel Josias BEDE on the salon stage",
          },
          {
            src: "/img/blog/safe-9-abidjan-prix-entrepreneuriat/3.webp",
            alt: "SAFE 9 award recipients gathered on stage during the ceremony",
          },
        ]}
      />
    </BlogArticleLayout>
  );
}
