"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";

export default function WouriActionClimatiqueArticlePage() {
  return (
    <BlogArticleLayout
      title="WOURI et l'action climatique : une rencontre de travail à la SODEXAM."
      subtitle="Retour sur une rencontre professionnelle consacrée au dernier kilomètre de l'information météo, agricole et climatique."
      eyebrow="Blog · Événements · 26 juillet 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "WOURI et action climatique",
          href: "/blog/wouri-action-climatique-sodexam",
        },
      ]}
      hero={{
        src: "/img/blog/wouri-action-climatique-sodexam/hero.webp",
        alt: "Photo de groupe lors d'une rencontre de travail à la SODEXAM autour de l'action climatique",
      }}
      cta={{
        title: "Vous travaillez sur l'agriculture, la météo ou la résilience climatique ?",
        description:
          "WOURI est conçu pour rapprocher l'information utile des personnes qui en ont besoin sur le terrain.",
        label: "Découvrir WOURI",
        href: "/nos-realisations/wouri",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-lg leading-relaxed text-neutral-800">
          <p className="font-serif text-2xl leading-snug font-light text-neutral-900 italic md:text-3xl">
            À Abidjan, ADC a été reçue à la SODEXAM pour présenter WOURI et
            ouvrir une discussion concrète sur un sujet décisif : comment rendre
            l'information météo, agricole et climatique plus utile pour les
            producteurs.
          </p>

          <p>
            Cette rencontre faisait suite à une démarche formelle engagée par
            notre équipe. Nous n'en retiendrons ici que l'essentiel : WOURI
            répond à un besoin très clair, celui du dernier kilomètre de
            l'information. Une prévision, une alerte ou un conseil ne change
            vraiment les choses que lorsqu'il arrive au bon moment, dans un
            format compréhensible, sur un canal déjà utilisé par les personnes
            concernées.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Relier la donnée au terrain.
          </h2>

          <p>
            Les services climatiques progressent, les capacités de prévision se
            renforcent et les données deviennent plus structurées. Le défi
            suivant est celui de la diffusion utile : transformer une information
            fiable en message simple, contextualisé, attribué et actionnable
            pour une coopérative, un agent terrain ou un producteur.
          </p>

          <p>
            C'est précisément le rôle que nous voulons donner à WOURI : une
            interface vocale et multilingue entre les producteurs, les sources
            validées et les services utiles. Le producteur pose une question
            dans sa langue, WOURI comprend le contexte, consulte des sources
            encadrées, puis restitue une réponse claire avec les bons garde-fous.
          </p>

          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light text-neutral-900 italic md:pl-8 md:text-3xl">
            WOURI n'invente ni la météo ni la science agronomique. Il orchestre,
            explique et distribue l'information utile, tout en gardant la place
            de l'expert humain là où elle est nécessaire.
          </blockquote>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Ce que nous retenons.
          </h2>

          <p>
            Cette rencontre a confirmé l'importance de construire des ponts
            entre données climatiques, expertise métier et expérience
            utilisateur. Les besoins sont concrets : anticiper les risques,
            mieux comprendre les saisons, accompagner les décisions agricoles,
            rendre les alertes plus lisibles et mieux mesurer leur réception sur
            le terrain.
          </p>

          <p>
            Nous restons volontairement sobres sur les détails opérationnels de
            cette session. L'essentiel est simple : les défis climatiques
            demandent des collaborations sérieuses, des responsabilités claires
            et des outils conçus avec les personnes qui les utiliseront.
          </p>

          <p className="text-base text-neutral-500">
            Photos : rencontre de travail à la SODEXAM autour de l'action
            climatique et des usages numériques.
          </p>
        </div>
      </article>

      <BlogGallery
        eyebrow="Galerie · Action climatique"
        columns={2}
        aspect="landscape"
        images={[
          {
            src: "/img/blog/wouri-action-climatique-sodexam/1.webp",
            alt: "Participants réunis à la SODEXAM lors de la rencontre WOURI",
          },
          {
            src: "/img/blog/wouri-action-climatique-sodexam/2.webp",
            alt: "Photo de groupe pendant une session de travail sur les enjeux climatiques",
          },
        ]}
      />
    </BlogArticleLayout>
  );
}
