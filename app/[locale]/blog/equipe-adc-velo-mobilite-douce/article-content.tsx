"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export default function EquipeAdcVeloArticlePage() {
  return (
    <BlogArticleLayout
      title="Le numérique à l'épreuve du terrain : l'équipe ADC enfourche le vélo."
      subtitle="Une initiative interne où notre équipe troque l'écran pour le guidon, le temps d'éprouver par elle-même la mobilité douce à Abidjan."
      eyebrow="Blog · Initiatives · 5 août 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "L'équipe ADC à vélo",
          href: "/blog/equipe-adc-velo-mobilite-douce",
        },
      ]}
      hero={{
        src: "/img/blog/equipe-adc-velo-mobilite-douce/hero.webp",
        alt: "Trois membres de l'équipe African Digit Consulting à vélo, casque sur la tête, à Abidjan",
      }}
      cta={{
        title: "Vous avez un projet numérique ancré dans le réel ?",
        description:
          "Nous concevons des solutions pensées avec celles et ceux qui les utiliseront.",
        label: "Parlons de votre projet",
        href: "/contact",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-lg leading-relaxed text-neutral-800">
          <p className="font-serif text-2xl leading-snug font-light text-neutral-900 italic md:text-3xl">
            Casques vissés, trois membres de l'équipe ADC ont pris le guidon dans
            Abidjan. Une initiative interne, sans caméra ni protocole — juste une
            équipe qui va voir par elle-même.
          </p>

          <p>
            Nous passons l'essentiel de nos journées à concevoir des interfaces,
            écrire du code et documenter des parcours utilisateurs. C'est notre
            métier. Mais il comporte un risque discret : celui de finir par
            imaginer des usages depuis un écran, sans jamais les éprouver.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Pratiquer ce que l'on défend.
          </h2>

          <p>
            Nous défendons un numérique utile, sobre et adapté aux réalités
            africaines. Il nous a semblé cohérent d'appliquer la même exigence à
            notre propre organisation, en commençant par un geste simple : se
            déplacer autrement. Le vélo n'est pas qu'un objet de discours sur la
            transition écologique. C'est un usage, avec ses contraintes et ses
            surprises.
          </p>

          <p>
            Rouler dans Abidjan, même sur une courte distance, apprend en
            quelques minutes ce qu'aucune note de cadrage ne restitue vraiment :
            l'état réel de la chaussée, la place laissée aux cyclistes, la chaleur
            selon l'heure, la distance qui sépare deux points sur une carte de la
            même distance vécue.
          </p>

          <aside className="flex flex-col gap-4 border-y border-neutral-200 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-neutral-950">
                Notre façon de travailler.
              </p>
              <p className="mt-1 text-base text-neutral-600">
                Comprendre le contexte avant de proposer une solution : c'est le
                fil conducteur de nos interventions.
              </p>
            </div>
            <Link
              href="/notre-expertise"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 font-semibold text-orange-600 transition-colors hover:text-orange-700"
            >
              Découvrir notre expertise
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </aside>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Ce que le terrain apprend.
          </h2>

          <p>
            Une contrainte se comprend mieux quand on la vit. C'est vrai du vélo
            comme de tous les usages pour lesquels nous concevons : un producteur
            qui consulte une information météo, un parent qui suit la scolarité de
            son enfant, un agent qui saisit une opération en fin de journée.
            Derrière chaque écran, il y a un contexte — une connexion instable, un
            téléphone partagé, un moment de la journée, une fatigue.
          </p>

          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light text-neutral-900 italic md:pl-8 md:text-3xl">
            On ne conçoit pas correctement pour un usage que l'on n'a jamais
            éprouvé.
          </blockquote>

          <p>
            Cette conviction guide notre méthode : passer du temps avec les
            personnes concernées, observer avant de proposer, tester tôt et
            accepter de revoir une idée quand le terrain la contredit. Une sortie
            à vélo ne remplace évidemment pas une étude d'usage. Elle rappelle
            simplement d'où doit partir le travail.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Une équipe, une conviction.
          </h2>

          <p>
            Au-delà de la méthode, il y a l'équipe. Sortir ensemble, se déplacer
            autrement et partager un moment simple fait aussi partie de ce que
            nous voulons construire : une entreprise où les convictions
            environnementales ne restent pas au stade de l'intention.
          </p>

          <p className="text-base text-neutral-500">
            Photos : initiative mobilité douce de l'équipe African Digit
            Consulting, Abidjan.
          </p>
        </div>
      </article>

      <BlogGallery
        eyebrow="Galerie · Mobilité douce"
        columns={4}
        aspect="portrait"
        images={[
          {
            src: "/img/blog/equipe-adc-velo-mobilite-douce/1.webp",
            alt: "L'équipe ADC à vélo, casque sur la tête, prête à partir",
          },
          {
            src: "/img/blog/equipe-adc-velo-mobilite-douce/2.webp",
            alt: "Vue large de l'équipe ADC à vélo dans Abidjan en fin de journée",
          },
          {
            src: "/img/blog/equipe-adc-velo-mobilite-douce/3.webp",
            alt: "Deux membres de l'équipe ADC en selle, casque sur la tête, pendant la sortie",
          },
          {
            src: "/img/blog/equipe-adc-velo-mobilite-douce/4.webp",
            alt: "Gros plan sur un membre de l'équipe ADC à vélo, casque et sourire, en fin de journée",
          },
        ]}
      />
    </BlogArticleLayout>
  );
}
