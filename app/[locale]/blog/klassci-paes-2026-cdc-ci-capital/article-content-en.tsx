"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";
import { Link } from "@/i18n/navigation";

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title={"KLASSCI Among the 10 Winning Startups of PAES 2026"}
      subtitle={"Following the final pitch at CGECI, ADC and KLASSCI have been selected for the Morocco immersion in December 2026. A recognition that comes with responsibility."}
      eyebrow={"Blog · Awards · October 27, 2026"}
      breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: "KLASSCI", href: "/blog/klassci-paes-2026-cdc-ci-capital" }]}
      hero={{ position: "50% 75%", src: "/img/blog/klassci-paes-2026-cdc-ci-capital/hero.webp", alt: "KLASSCI presented to the PAES 2026 jury, with its traction shown on screen" }}
      cta={{ title: "Want to discover the winning project?", label: "Discover KLASSCI", href: "/nos-realisations/klassci" }}
    >
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-lg leading-relaxed text-neutral-800">
          <p className="font-serif text-2xl leading-snug font-light italic text-neutral-900 md:text-3xl">{"KLASSCI is one of the ten winning startups of PAES 2026. Following the final pitch on October 24 at CGECI, African Digit Consulting was selected to continue the programme with an immersion in Morocco in December 2026. This distinction recognises the work accomplished and gives new momentum to our ambition for African education."}</p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            {"A distinction carried by a team and a vision."}
          </h2>
          <p>
            {"Alongside Abel Josias Bede, Marcel Djedje-li, who leads KLASSCI’s development, presented the project to the jury. Selection among the ten winners is a moment of recognition for the ADC team and for the work carried out with the institutions using the solution."}
          </p>
          <p>
            {"Our conviction is clear: KLASSCI is digital infrastructure designed to help African educational institutions manage their operations, use their data and sustainably improve performance. The pitch connected this ambition to the product’s practical uses."}
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            {"Make the product’s value tangible."}
          </h2>
          <p>
            {"The investment readiness week, organised within PAES by CDC-CI Capital and Agence Emploi Jeunes with Plug and Play Tech Center, gave us time to challenge and structure our approach. From October 19 to 23, we worked on our presentation, investor materials and development strategy."}
          </p>
          <p>
            {"What problem do we really solve for institutions? How do we prove our impact? Why now? And how can KLASSCI become a major contributor to educational transformation in Africa? These questions guided our preparation."}
          </p>
          <p>
            {"As Marcel highlights in his account of the week, a strong product must also make its value clear: show what it changes in teams’ daily work and explain the ambition behind it. Enrolment, payments, teaching and data become the foundations of a broader vision."}
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            {"Next stop: Morocco, with the same commitment."}
          </h2>
          <p>
            {"The immersion planned in Morocco in December 2026 opens the next stage: presenting the project to international investors, continuing discussions and preparing the conditions for its development."}
          </p>
          <p>
            {"Being a winner commits us to keep building, learning and listening to our users. This recognition strengthens our responsibility towards the institutions that trust us and our commitment to product quality."}
          </p>
          <p>
            {"Thank you to CDC-CI Capital, Agence Emploi Jeunes and Plug and Play Tech Center for their support. We also thank the mentors, the entrepreneurs we met and everyone who believes in our vision. The work continues."}
          </p>

          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light italic text-neutral-900 md:text-3xl">
            {"“Being selected among the 10 startups continuing the journey in Morocco is a wonderful recognition. Above all, it is a responsibility: to keep building, learning, listening to our users and raising our standards.”"}
            <footer className="mt-4 font-sans text-sm not-italic text-neutral-600">
              Marcel Djedje-li, KLASSCI development lead — reflections shared on LinkedIn.
            </footer>
          </blockquote>
          <aside className="border-y border-neutral-200 py-6">
            <Link className="inline-flex min-h-11 items-center font-semibold text-orange-600 hover:text-orange-700" href="/nos-realisations/klassci">Discover KLASSCI</Link>
          </aside>
          <p className="text-sm text-neutral-500">Pitch and PAES week photographs: images supplied by the ADC team.</p>
          <aside className="border-t border-neutral-200 pt-6 text-sm text-neutral-600"><p className="font-semibold">Sources</p><ul className="mt-3 space-y-2"><li><a className="underline underline-offset-4" href="https://cdccapital.ci/paes-2026-20-startups-ivoiriennes-en-preparation-intensive-a-la-levee-de-fonds/">CDC-CI Capital — PAES 2026</a></li><li><a className="underline underline-offset-4" href="https://ladiplomatiquedabidjan.net/blog/cote-divoire-paes-2026-dix-startups-ivoiriennes-au-maroc-pour-une-levee-de-fonds-avec-plug-and-play-en-decembre-prochain">La Diplomatique d’Abidjan — the ten winners</a></li></ul></aside>
        </div>
      </article>

      <section className="mx-auto max-w-5xl px-6 pb-12" aria-labelledby="paes-pitch-title">
        <h2 id="paes-pitch-title" className="mb-6 font-serif text-3xl font-medium text-neutral-950">Our pitch to the jury</h2>
        <p className="mb-6 text-neutral-600">The complete recording is presented in two consecutive parts to make loading easier.</p>
        <div className="grid items-start gap-8 md:grid-cols-2">
          <figure>
            <video controls playsInline preload="metadata" poster="/img/blog/klassci-paes-2026-cdc-ci-capital/pitch-poster-1.webp" aria-label="KLASSCI pitch at PAES 2026 — part 1 of 2" className="aspect-video w-full rounded-xl bg-neutral-950 object-contain">
              <source src="/videos/blog/klassci-paes-2026-cdc-ci-capital/pitch-paes-partie-1.mp4" type="video/mp4" />
              <a href="/videos/blog/klassci-paes-2026-cdc-ci-capital/pitch-paes-partie-1.mp4">Download the video</a>
            </video>
            <figcaption className="mt-3 text-sm text-neutral-600">KLASSCI pitch at PAES 2026 — part 1 of 2 · 0:00–2:00</figcaption>
          </figure>
          <figure>
            <video controls playsInline preload="metadata" poster="/img/blog/klassci-paes-2026-cdc-ci-capital/pitch-poster-2.webp" aria-label="KLASSCI pitch at PAES 2026 — part 2 of 2" className="aspect-video w-full rounded-xl bg-neutral-950 object-contain">
              <source src="/videos/blog/klassci-paes-2026-cdc-ci-capital/pitch-paes-partie-2.mp4" type="video/mp4" />
              <a href="/videos/blog/klassci-paes-2026-cdc-ci-capital/pitch-paes-partie-2.mp4">Download the video</a>
            </video>
            <figcaption className="mt-3 text-sm text-neutral-600">KLASSCI pitch at PAES 2026 — part 2 of 2 · 2:00–3:58</figcaption>
          </figure>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-6 pb-12" aria-labelledby="klassci-film-title">
        <h2 id="klassci-film-title" className="mb-6 font-serif text-3xl font-medium text-neutral-950">The winning project, on film</h2>
        <figure>
          <video controls playsInline preload="metadata" poster="/img/blog/klassci-paes-2026-cdc-ci-capital/film-poster.webp" aria-label="KLASSCI presentation film and user testimonials" className="mx-auto aspect-[9/16] max-h-[75vh] w-full rounded-xl bg-neutral-950 object-contain">
            <source src="/videos/blog/klassci-paes-2026-cdc-ci-capital/presentation-klassci.mp4" type="video/mp4" />
            <a href="/videos/blog/klassci-paes-2026-cdc-ci-capital/presentation-klassci.mp4">Download the video</a>
          </video>
          <figcaption className="mt-3 text-sm text-neutral-600">KLASSCI presentation film and user testimonials. This film introduces the solution; it is not a recording of the PAES pitch.</figcaption>
        </figure>
      </section>
      <BlogGallery eyebrow="Gallery · PAES 2026" columns={2} aspect="landscape" images={[
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/hero.webp", alt: "KLASSCI pitch: presenting traction to the jury" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/pitch-produit.webp", alt: "KLASSCI pitch: presenting the product and its uses" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/pitch-modele.webp", alt: "KLASSCI pitch: presenting the business model" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/echanges.webp", alt: "Conversations between participants during PAES week" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/1.webp", alt: "Conversations at PAES 2026" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/2.webp", alt: "Room prepared for the PAES 2026 programme" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/3.webp", alt: "Agence Emploi Jeunes and CDC-CI Capital materials" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/4.webp", alt: "Presentation to the jury during PAES 2026" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/5.webp", alt: "Speech at the CDC-CI Capital lectern" },
      ]} />
    </BlogArticleLayout>
  );
}
