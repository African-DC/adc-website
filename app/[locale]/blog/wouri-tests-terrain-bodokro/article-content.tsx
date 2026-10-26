"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";
import { Link } from "@/i18n/navigation";

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title={"À Bodokro, WOURI se construit avec les populations"}
      subtitle={"Une délégation de l’équipe WOURI est allée à la rencontre des populations pour présenter le projet, tester la solution et écouter leurs attentes."}
      eyebrow={"Blog · Terrain & innovation · Publié le 26 octobre 2026"}
      breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: "WOURI", href: "/blog/wouri-tests-terrain-bodokro" }]}
      hero={{ position: "50% 12%", src: "/img/blog/wouri-tests-terrain-bodokro/hero.webp", alt: "Participants à la rencontre WOURI de Bodokro — image extraite des vidéos de terrain" }}
      cta={{ title: "Vous souhaitez en savoir plus sur WOURI ?", label: "Découvrir WOURI", href: "/nos-realisations/wouri" }}
    >
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-lg leading-relaxed text-neutral-800">
          <p className="text-sm text-neutral-500">{"Images et vidéos : équipe WOURI, rencontre avec les populations de Bodokro. Le visuel de couverture est extrait des séquences de terrain."}</p>
          <p className="font-serif text-2xl leading-snug font-light italic text-neutral-900 md:text-3xl">{"Une solution agricole se construit aussi loin des écrans, dans les échanges avec celles et ceux qui pourraient l’utiliser. À Bodokro, dans la région de Bouaké, une délégation WOURI a présenté le projet et réalisé des tests directement avec les populations."}</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">{"Présenter la vision, puis écouter."}</h2>
          <p>{"Cette rencontre a permis à notre équipe de partager la vision de WOURI et de mieux comprendre les attentes des populations. Au-delà de la présentation, les tests sur place ont ouvert un dialogue sur les besoins auxquels la solution doit répondre."}</p>
          <p>{"Nous avons été touchés par l’accueil, l’intérêt et l’enthousiasme manifestés. Les échanges ont rappelé l’importance d’une solution pensée au plus près des réalités locales, dont l’utilité se comprend dans les activités de tous les jours."}</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">{"La météo, une attente concrète."}</h2>
          <p>{"La présentation des démarches engagées en vue d’un partenariat avec la SODEXAM a suscité un intérêt particulier. Pour les populations rencontrées, cette perspective représente une possibilité de se rapprocher des services météorologiques et d’accéder, à travers WOURI, à des informations utiles à leurs activités agricoles."}</p>
          <p>{"Il s’agit à ce stade de premiers échanges et de démarches de collaboration. Nous souhaitons poursuivre cette dynamique avec la SODEXAM et travailler ensemble aux prochaines étapes."}</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">{"Construire avec les populations."}</h2>
          <p>{"Les retours recueillis à Bodokro nourrissent notre compréhension des usages et guideront la poursuite du développement. Tester sur le terrain permet de confronter notre vision à l’expérience des personnes concernées et de donner une place à leurs attentes."}</p>
          <p>{"Nous remercions chaleureusement les populations de Bodokro pour leur disponibilité et leur accueil, ainsi que la SODEXAM pour les premiers échanges engagés. Cette expérience renforce notre conviction : WOURI doit être construit avec les populations et pour les populations."}</p>
          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light italic text-neutral-900 md:text-3xl">{"WOURI doit avant tout être construit avec les populations et pour les populations."}</blockquote>
          <aside className="border-y border-neutral-200 py-6"><Link className="inline-flex min-h-11 items-center font-semibold text-orange-600 hover:text-orange-700" href="/nos-realisations/wouri">Découvrir WOURI</Link></aside>
          
        </div>
      </article>
      <section className="mx-auto max-w-5xl px-6 pb-12" aria-labelledby="field-videos-title">
        <h2 id="field-videos-title" className="mb-8 font-serif text-3xl font-medium text-neutral-950">La rencontre en vidéo</h2>
        <div className="grid items-start gap-8 md:grid-cols-3">
          <figure>
            <video controls playsInline preload="metadata" poster="/img/blog/wouri-tests-terrain-bodokro/1.webp" aria-label="Échanges avec les populations de Bodokro — séquence 1." className="aspect-[9/16] w-full rounded-xl bg-neutral-950 object-contain">
              <source src="/videos/blog/wouri-tests-terrain-bodokro/rencontre-1.mp4" type="video/mp4" />
              <a href="/videos/blog/wouri-tests-terrain-bodokro/rencontre-1.mp4">Télécharger la vidéo</a>
            </video>
            <figcaption className="mt-3 text-sm text-neutral-600">Échanges avec les populations de Bodokro — séquence 1.</figcaption>
          </figure>
          <figure>
            <video controls playsInline preload="metadata" poster="/img/blog/wouri-tests-terrain-bodokro/2.webp" aria-label="Échanges avec les populations de Bodokro — séquence 2." className="aspect-[9/16] w-full rounded-xl bg-neutral-950 object-contain">
              <source src="/videos/blog/wouri-tests-terrain-bodokro/rencontre-2.mp4" type="video/mp4" />
              <a href="/videos/blog/wouri-tests-terrain-bodokro/rencontre-2.mp4">Télécharger la vidéo</a>
            </video>
            <figcaption className="mt-3 text-sm text-neutral-600">Échanges avec les populations de Bodokro — séquence 2.</figcaption>
          </figure>
          <figure>
            <video controls playsInline preload="metadata" poster="/img/blog/wouri-tests-terrain-bodokro/hero.webp" aria-label="Échanges avec les populations de Bodokro — séquence 3." className="aspect-[9/16] w-full rounded-xl bg-neutral-950 object-contain">
              <source src="/videos/blog/wouri-tests-terrain-bodokro/rencontre-3.mp4" type="video/mp4" />
              <a href="/videos/blog/wouri-tests-terrain-bodokro/rencontre-3.mp4">Télécharger la vidéo</a>
            </video>
            <figcaption className="mt-3 text-sm text-neutral-600">Échanges avec les populations de Bodokro — séquence 3.</figcaption>
          </figure>
        </div>
      </section>
      <BlogGallery eyebrow="Galerie · Bodokro" columns={4} aspect="portrait" images={[
        { src: "/img/blog/wouri-tests-terrain-bodokro/1.webp", alt: "Rencontre WOURI à Bodokro, image extraite de la séquence 1" },
        { src: "/img/blog/wouri-tests-terrain-bodokro/2.webp", alt: "Rencontre WOURI à Bodokro, image extraite de la séquence 2" },
        { src: "/img/blog/wouri-tests-terrain-bodokro/hero.webp", alt: "Rencontre WOURI à Bodokro, image extraite de la séquence 3" },
      ]} />
    </BlogArticleLayout>
  );
}
