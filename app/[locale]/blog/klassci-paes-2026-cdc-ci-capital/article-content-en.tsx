"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";
import { Link } from "@/i18n/navigation";

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title={"PAES 2026: ADC and KLASSCI Prepare Their Next Step"}
      subtitle={"A week of investment readiness with CDC-CI Capital, Agence Emploi Jeunes and Plug and Play Tech Center."}
      eyebrow={"Blog · Acceleration · Published October 27, 2026"}
      breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: "KLASSCI", href: "/blog/klassci-paes-2026-cdc-ci-capital" }]}
      hero={{ position: "50% 25%", src: "/img/blog/klassci-paes-2026-cdc-ci-capital/hero.webp", alt: "PAES 2026 participants talking in the training room" }}
      cta={{ title: "Want to learn more about KLASSCI?", label: "Discover KLASSCI", href: "/nos-realisations/klassci" }}
    >
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-lg leading-relaxed text-neutral-800">
          <p className="text-sm text-neutral-500">{"Photos: participation in PAES 2026, images supplied by the ADC team."}</p>
          <p className="font-serif text-2xl leading-snug font-light italic text-neutral-900 md:text-3xl">{"From October 19 to 24, 2026 in Abidjan, African Digit Consulting joined the PAES investment readiness week with KLASSCI, its education management solution. It was an opportunity to connect the product’s realities with investors’ expectations."}</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">{"A week to prepare for growth."}</h2>
          <p>{"Led by CDC-CI Capital and Agence Emploi Jeunes, with Plug and Play Tech Center, the programme brought together twenty finalist startups. From October 19 to 23, workshops covered investor presentations, funding materials, data rooms and the legal aspects of investment."}</p>
          <p>{"For ADC, this work supports a practical ambition: helping educational institutions manage their operations through KLASSCI. Investment preparation helps explain the problem the product solves, how it develops and what resources are needed next."}</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">{"KLASSCI: connecting the product and the business."}</h2>
          <p>{"An education solution’s value is measured in teams’ daily work: managing enrolment, tracking payments, organising teaching and producing results. Our role is to turn these needs into a coherent tool and build the conditions for its development."}</p>
          <p>{"The week’s discussions helped us work on our presentation, clarify our go-to-market strategy and better connect the product, business model and growth outlook."}</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">{"A new step after the final pitch."}</h2>
          <p>{"Following the October 24 pitch, African Digit Consulting is among the ten winners selected for an immersion in Morocco in December 2026. This next step is intended to open discussions with international investors about KLASSCI’s development."}</p>
          <p>{"We thank CDC-CI Capital, Agence Emploi Jeunes, Plug and Play Tech Center and the support teams. We continue our work with one priority: improving KLASSCI for educational institutions."}</p>
          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light italic text-neutral-900 md:text-3xl">{"Building a useful product also means preparing the conditions for its growth."}</blockquote>
          <aside className="border-y border-neutral-200 py-6"><Link className="inline-flex min-h-11 items-center font-semibold text-orange-600 hover:text-orange-700" href="/nos-realisations/klassci">Discover KLASSCI</Link></aside>
          <aside className="border-t border-neutral-200 pt-6 text-sm text-neutral-600"><p className="font-semibold">Further reading</p><ul className="mt-3 space-y-2"><li><a className="underline underline-offset-4" href="https://cdccapital.ci/paes-2026-20-startups-ivoiriennes-en-preparation-intensive-a-la-levee-de-fonds/">CDC-CI Capital — présentation de la semaine PAES 2026</a></li><li><a className="underline underline-offset-4" href="https://ladiplomatiquedabidjan.net/blog/cote-divoire-paes-2026-dix-startups-ivoiriennes-au-maroc-pour-une-levee-de-fonds-avec-plug-and-play-en-decembre-prochain">La Diplomatique d’Abidjan — les dix lauréates du PAES 2026</a></li></ul></aside>
        </div>
      </article>
      <BlogGallery eyebrow="Gallery · PAES 2026" columns={2} aspect="landscape" images={[
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/hero.webp", alt: "PAES 2026 participants talking in the training room" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/1.webp", alt: "Conversations between participants during PAES 2026" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/2.webp", alt: "Room prepared with CDC-CI Capital and Agence Emploi Jeunes materials" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/3.webp", alt: "Agence Emploi Jeunes and CDC-CI Capital materials" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/4.webp", alt: "Presentation to the jury during PAES 2026" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/5.webp", alt: "Speech at the CDC-CI Capital lectern" },
      ]} />
    </BlogArticleLayout>
  );
}
