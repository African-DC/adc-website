"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";
import { Link } from "@/i18n/navigation";

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title={"In Bodokro, WOURI Is Being Built with Local Communities"}
      subtitle={"A WOURI team delegation met local communities to introduce the project, test the solution and listen to their expectations."}
      eyebrow={"Blog · Fieldwork & Innovation · Published October 26, 2026"}
      breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: "WOURI", href: "/blog/wouri-tests-terrain-bodokro" }]}
      hero={{ position: "50% 12%", src: "/img/blog/wouri-tests-terrain-bodokro/hero.webp", alt: "Participants at the WOURI meeting in Bodokro — still from the field videos" }}
      cta={{ title: "Want to learn more about WOURI?", label: "Discover WOURI", href: "/nos-realisations/wouri" }}
    >
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-lg leading-relaxed text-neutral-800">
          <p className="text-sm text-neutral-500">{"Images and videos: WOURI team, meeting with the people of Bodokro. The cover image is a still from the field footage."}</p>
          <p className="font-serif text-2xl leading-snug font-light italic text-neutral-900 md:text-3xl">{"An agricultural solution is also built away from screens, through conversations with the people who may use it. In Bodokro, in the Bouaké area, a WOURI delegation introduced the project and carried out tests directly with local communities."}</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">{"Share the vision, then listen."}</h2>
          <p>{"The meeting allowed our team to share WOURI’s vision and better understand community expectations. Beyond the presentation, on-site tests opened a discussion about the needs the solution should address."}</p>
          <p>{"We were moved by the welcome, interest and enthusiasm expressed. The conversations underlined the importance of a solution designed around local realities, whose usefulness is clear in everyday activities."}</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">{"Weather information: a practical expectation."}</h2>
          <p>{"The presentation of steps taken towards a partnership with SODEXAM attracted particular interest. For the communities we met, this prospect offers a way to connect more closely with weather services and access information useful to their agricultural activities through WOURI."}</p>
          <p>{"At this stage, these remain initial discussions and steps towards collaboration. We hope to continue this dialogue with SODEXAM and work together on the next steps."}</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">{"Build with local communities."}</h2>
          <p>{"Feedback gathered in Bodokro deepens our understanding of how people may use the solution and will guide further development. Field testing helps compare our vision with the experience of the people concerned and gives their expectations a place in the work."}</p>
          <p>{"We warmly thank the people of Bodokro for their time and welcome, and SODEXAM for the initial discussions. This experience strengthens our conviction: WOURI must be built with local communities and for local communities."}</p>
          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light italic text-neutral-900 md:text-3xl">{"Above all, WOURI must be built with local communities and for local communities."}</blockquote>
          <aside className="border-y border-neutral-200 py-6"><Link className="inline-flex min-h-11 items-center font-semibold text-orange-600 hover:text-orange-700" href="/nos-realisations/wouri">Discover WOURI</Link></aside>
          
        </div>
      </article>
      <section className="mx-auto max-w-5xl px-6 pb-12" aria-labelledby="field-videos-title">
        <h2 id="field-videos-title" className="mb-8 font-serif text-3xl font-medium text-neutral-950">Watch the field visit</h2>
        <div className="grid items-start gap-8 md:grid-cols-3">
          <figure>
            <video controls playsInline preload="metadata" poster="/img/blog/wouri-tests-terrain-bodokro/1.webp" aria-label="Conversations with the people of Bodokro — clip 1." className="aspect-[9/16] w-full rounded-xl bg-neutral-950 object-contain">
              <source src="/videos/blog/wouri-tests-terrain-bodokro/rencontre-1.mp4" type="video/mp4" />
              <a href="/videos/blog/wouri-tests-terrain-bodokro/rencontre-1.mp4">Download the video</a>
            </video>
            <figcaption className="mt-3 text-sm text-neutral-600">Conversations with the people of Bodokro — clip 1.</figcaption>
          </figure>
          <figure>
            <video controls playsInline preload="metadata" poster="/img/blog/wouri-tests-terrain-bodokro/2.webp" aria-label="Conversations with the people of Bodokro — clip 2." className="aspect-[9/16] w-full rounded-xl bg-neutral-950 object-contain">
              <source src="/videos/blog/wouri-tests-terrain-bodokro/rencontre-2.mp4" type="video/mp4" />
              <a href="/videos/blog/wouri-tests-terrain-bodokro/rencontre-2.mp4">Download the video</a>
            </video>
            <figcaption className="mt-3 text-sm text-neutral-600">Conversations with the people of Bodokro — clip 2.</figcaption>
          </figure>
          <figure>
            <video controls playsInline preload="metadata" poster="/img/blog/wouri-tests-terrain-bodokro/hero.webp" aria-label="Conversations with the people of Bodokro — clip 3." className="aspect-[9/16] w-full rounded-xl bg-neutral-950 object-contain">
              <source src="/videos/blog/wouri-tests-terrain-bodokro/rencontre-3.mp4" type="video/mp4" />
              <a href="/videos/blog/wouri-tests-terrain-bodokro/rencontre-3.mp4">Download the video</a>
            </video>
            <figcaption className="mt-3 text-sm text-neutral-600">Conversations with the people of Bodokro — clip 3.</figcaption>
          </figure>
        </div>
      </section>
      <BlogGallery eyebrow="Gallery · Bodokro" columns={4} aspect="portrait" images={[
        { src: "/img/blog/wouri-tests-terrain-bodokro/1.webp", alt: "WOURI meeting in Bodokro, still from clip 1" },
        { src: "/img/blog/wouri-tests-terrain-bodokro/2.webp", alt: "WOURI meeting in Bodokro, still from clip 2" },
        { src: "/img/blog/wouri-tests-terrain-bodokro/hero.webp", alt: "WOURI meeting in Bodokro, still from clip 3" },
      ]} />
    </BlogArticleLayout>
  );
}
