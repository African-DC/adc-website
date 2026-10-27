"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";
import { Link } from "@/i18n/navigation";

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title={"PAES 2026 : ADC et KLASSCI préparent leur prochaine étape"}
      subtitle={"Une semaine de préparation à l’investissement avec CDC-CI Capital, l’Agence Emploi Jeunes et Plug and Play Tech Center."}
      eyebrow={"Blog · Accélération · Publié le 27 octobre 2026"}
      breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: "KLASSCI", href: "/blog/klassci-paes-2026-cdc-ci-capital" }]}
      hero={{ position: "50% 25%", src: "/img/blog/klassci-paes-2026-cdc-ci-capital/hero.webp", alt: "Participants au PAES 2026 échangeant dans la salle de formation" }}
      cta={{ title: "Vous souhaitez en savoir plus sur KLASSCI ?", label: "Découvrir KLASSCI", href: "/nos-realisations/klassci" }}
    >
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-lg leading-relaxed text-neutral-800">
          <p className="text-sm text-neutral-500">{"Photos : participation au PAES 2026, visuels communiqués par l’équipe ADC."}</p>
          <p className="font-serif text-2xl leading-snug font-light italic text-neutral-900 md:text-3xl">{"Du 19 au 24 octobre 2026 à Abidjan, African Digit Consulting a participé à la semaine de préparation à l’investissement du PAES avec KLASSCI, sa solution de gestion éducative. Un temps de travail pour mieux relier la réalité du produit aux attentes des investisseurs."}</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">{"Une semaine pour structurer le passage à l’échelle."}</h2>
          <p>{"Porté par CDC-CI Capital et l’Agence Emploi Jeunes, avec Plug and Play Tech Center, le programme a réuni vingt startups finalistes. Du 19 au 23 octobre, les ateliers ont porté sur la présentation aux investisseurs, le dossier de financement, la dataroom et les aspects juridiques de l’investissement."}</p>
          <p>{"Pour ADC, ce travail accompagne une ambition concrète : permettre aux établissements de mieux piloter leur activité avec KLASSCI. La préparation à l’investissement aide à expliquer ce que le produit résout, comment il se développe et quels moyens sont nécessaires pour la suite."}</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">{"KLASSCI, du produit au projet d’entreprise."}</h2>
          <p>{"La valeur d’une solution éducative se mesure dans le quotidien des équipes : gérer les inscriptions, suivre les paiements, organiser les enseignements et produire les résultats. Notre travail consiste à traduire ces besoins en un outil cohérent et à construire les conditions de son développement."}</p>
          <p>{"Les échanges de cette semaine nous ont permis de travailler notre présentation, de préciser notre stratégie de mise sur le marché et de mieux articuler produit, modèle économique et perspectives de croissance."}</p>
          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">{"Après le pitch final, une nouvelle étape."}</h2>
          <p>{"À l’issue du pitch du 24 octobre, African Digit Consulting figure parmi les dix lauréates sélectionnées pour une immersion au Maroc en décembre 2026. Cette prochaine étape doit ouvrir des échanges avec des investisseurs internationaux autour du développement de KLASSCI."}</p>
          <p>{"Nous remercions CDC-CI Capital, l’Agence Emploi Jeunes, Plug and Play Tech Center ainsi que les équipes d’accompagnement. Nous poursuivons le travail avec une priorité : faire progresser KLASSCI au service des établissements."}</p>
          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light italic text-neutral-900 md:text-3xl">{"Construire un produit utile, c’est aussi préparer les conditions de son développement."}</blockquote>
          <aside className="border-y border-neutral-200 py-6"><Link className="inline-flex min-h-11 items-center font-semibold text-orange-600 hover:text-orange-700" href="/nos-realisations/klassci">Découvrir KLASSCI</Link></aside>
          <aside className="border-t border-neutral-200 pt-6 text-sm text-neutral-600"><p className="font-semibold">Pour aller plus loin</p><ul className="mt-3 space-y-2"><li><a className="underline underline-offset-4" href="https://cdccapital.ci/paes-2026-20-startups-ivoiriennes-en-preparation-intensive-a-la-levee-de-fonds/">CDC-CI Capital — présentation de la semaine PAES 2026</a></li><li><a className="underline underline-offset-4" href="https://ladiplomatiquedabidjan.net/blog/cote-divoire-paes-2026-dix-startups-ivoiriennes-au-maroc-pour-une-levee-de-fonds-avec-plug-and-play-en-decembre-prochain">La Diplomatique d’Abidjan — les dix lauréates du PAES 2026</a></li></ul></aside>
        </div>
      </article>
      <BlogGallery eyebrow="Galerie · PAES 2026" columns={2} aspect="landscape" images={[
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/hero.webp", alt: "Participants au PAES 2026 échangeant dans la salle de formation" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/1.webp", alt: "Échanges entre participants pendant le PAES 2026" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/2.webp", alt: "Salle préparée avec les supports CDC-CI Capital et Agence Emploi Jeunes" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/3.webp", alt: "Supports de l’Agence Emploi Jeunes et de CDC-CI Capital" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/4.webp", alt: "Présentation devant le jury pendant le PAES 2026" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/5.webp", alt: "Prise de parole au pupitre CDC-CI Capital" },
      ]} />
    </BlogArticleLayout>
  );
}
