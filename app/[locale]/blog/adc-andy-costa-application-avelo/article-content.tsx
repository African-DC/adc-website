"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export default function AdcAndyCostaAveloArticlePage() {
  return (
    <BlogArticleLayout
      title="De WOURI à AVELO : ADC et Andy Costa imaginent le numérique au service de la transition écologique."
      subtitle="À l'occasion d'une rencontre avec l'éco-entrepreneur Andy Costa, ADC a présenté sa vision de l'innovation à impact et posé les premières bases d'une collaboration autour de l'application AVELO."
      eyebrow="Blog · Rencontres & nouveaux projets · 31 juillet 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "ADC × Andy Costa — AVELO",
          href: "/blog/adc-andy-costa-application-avelo",
        },
      ]}
      hero={{
        src: "/img/blog/adc-andy-costa-application-avelo/hero.webp",
        alt: "L'équipe d'African Digit Consulting aux côtés d'Andy Costa, reconnaissable à son casque vert, lors de leur rencontre à Abidjan",
        position: "50% 15%",
      }}
      cta={{
        title: "Vous portez un projet à impact environnemental ou social ?",
        description:
          "Nous accompagnons les porteurs de projets, de l'expression du besoin au déploiement d'une solution numérique complète.",
        label: "Parlons de votre projet",
        href: "/contact",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-lg leading-relaxed text-neutral-800">
          <p className="font-serif text-2xl leading-snug font-light text-neutral-900 italic md:text-3xl">
            À Abidjan, notre équipe a rencontré Andy Costa, éco-entrepreneur et
            ambassadeur du vélo en Afrique. De cet échange est née une conviction
            partagée : le numérique peut accélérer les initiatives durables
            conçues sur le continent.
          </p>

          <p>
            Fondateur de MyDream For Africa et reconnaissable à son casque vert,
            Andy Costa œuvre depuis des années à faire du vélo bien plus qu'un
            moyen de déplacement : un outil de mobilité durable, de sensibilisation
            environnementale et de création d'activités économiques. C'est aussi la
            conviction qui guide notre travail — la technologie n'a de valeur que
            lorsqu'elle répond à un besoin réel et sert durablement les
            communautés.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Une rencontre entre numérique et engagement écologique.
          </h2>

          <p>
            L'échange a porté sur ce que le numérique peut apporter à des projets
            environnementaux africains. Nous avons présenté WOURI, notre solution
            agritech et climate-tech : un producteur pose sa question par écrit ou
            par la voix, WOURI interprète le contexte, consulte des sources
            contrôlées et restitue une réponse simple, progressivement disponible
            dans plusieurs langues locales — avec WhatsApp comme premier canal, en
            complément du web, du mobile et des appels.
          </p>

          <aside className="flex flex-col gap-4 border-y border-neutral-200 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-neutral-950">
                Vous découvrez WOURI ?
              </p>
              <p className="mt-1 text-base text-neutral-600">
                Son rôle, son fonctionnement et ses garde-fous sont détaillés dans
                notre cas d'étude.
              </p>
            </div>
            <Link
              href="/nos-realisations/wouri"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 font-semibold text-orange-600 transition-colors hover:text-orange-700"
            >
              Découvrir WOURI
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </aside>

          <p>
            Au-delà de l'agriculture, WOURI illustre notre démarche : des
            technologies accessibles, ancrées dans les réalités locales et
            capables d'accompagner des transformations concrètes.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            AVELO : une dimension numérique pour la mobilité verte.
          </h2>

          <p>
            De cet échange est née une perspective de collaboration. Andy Costa a
            sollicité African Digit Consulting pour réfléchir à AVELO, une
            application destinée à la gestion et au développement de sa flotte de
            vélos. Portée par lui, l'initiative a démarré par un déploiement pilote
            au Parc national du Banco en février 2026, avec une première flotte
            d'une dizaine de vélos, avant un déploiement progressif vers d'autres
            réserves et sites naturels de Côte d'Ivoire.
          </p>

          <p>
            L'enjeu n'est pas seulement de créer une application mobile, mais de
            transformer une flotte physique en un service structuré et facile à
            piloter : enregistrement des vélos, locations et réservations,
            entretien, suivi des recettes, statistiques d'usage et mesure
            progressive de l'impact environnemental et social. La plateforme
            pourrait ainsi réunir une expérience simple pour les utilisateurs, un
            espace dédié aux agents de terrain et un tableau de bord pour le
            pilotage global de l'activité.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Deux projets, une même philosophie.
          </h2>

          <p>
            WOURI et AVELO interviennent dans des secteurs différents —
            l'agriculture d'un côté, la mobilité douce de l'autre — mais reposent
            sur la même idée : mettre la technologie au service d'une solution
            durable, pour la rendre plus accessible, plus efficace et plus proche
            de ses usagers.
          </p>

          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light text-neutral-900 italic md:pl-8 md:text-3xl">
            Dans les deux cas, le numérique n'est pas une finalité. Il devient un
            moyen d'organiser, de simplifier et d'amplifier une initiative à
            impact.
          </blockquote>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Construire sur des bases solides.
          </h2>

          <p>
            La prochaine étape sera une phase de cadrage avec Andy Costa et les
            équipes d'AVELO, pour préciser la composition de la flotte, les sites
            d'exploitation, le fonctionnement des locations, les modes de paiement
            et les indicateurs d'impact à suivre. L'objectif : définir un produit
            minimum viable centré sur l'essentiel, puis le faire évoluer à partir
            des usages et des retours du terrain.
          </p>

          <p>
            Avec WOURI, nous rapprochons l'information climatique des producteurs.
            Avec AVELO, nous voulons rapprocher la mobilité verte de ses
            utilisateurs — parce que les défis environnementaux appellent des
            réponses concrètes, construites avec celles et ceux qui les portent.
          </p>

          <p className="text-base text-neutral-500">
            Photo : rencontre de travail entre African Digit Consulting et Andy
            Costa, Abidjan.
          </p>
        </div>
      </article>

      <BlogGallery
        eyebrow="Galerie · La rencontre"
        columns={2}
        aspect="portrait"
        images={[
          {
            src: "/img/blog/adc-andy-costa-application-avelo/hero.webp",
            alt: "L'équipe d'African Digit Consulting aux côtés d'Andy Costa, reconnaissable à son casque vert, lors de leur rencontre à Abidjan",
          },
        ]}
      />
    </BlogArticleLayout>
  );
}
