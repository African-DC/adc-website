"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";

export default function DigitalWomenArticlePage() {
  return (
    <BlogArticleLayout
      title="Digital Women for Access : organiser la première édition à Abidjan."
      subtitle="Retour sur une initiative portée par ADC pour rendre le numérique plus accessible aux femmes ivoiriennes."
      eyebrow="Blog · Initiatives"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "Digital Women for Access",
          href: "/blog/digital-women-for-access",
        },
      ]}
      hero={{
        src: "/img/blog/digital-women/cover.webp",
        alt: "Affiche Meeting'UP — Impact'Lab UNESCO et programme Digit Access for Women, vendredi 19 avril 2024 à Cocody Mermoz",
      }}
      cta={{
        title: "Vous portez une initiative digitale inclusive ?",
        label: "Nous en parler",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-7 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            L'accès au numérique n'est pas une abstraction. C'est une
            question très concrète de formation, d'équipement, de
            confiance. Pour les femmes, en Afrique francophone, l'écart
            reste réel. ADC a voulu y contribuer à sa petite échelle.
          </p>

          <p>
            Digital Women for Access est une initiative que nous avons
            organisée à Abidjan pour mettre en lumière le rôle des
            femmes dans la transformation digitale de la Côte d'Ivoire,
            et surtout pour créer un espace concret de formation,
            d'échange et de mise en réseau.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Pourquoi c'est important.
          </h2>

          <p>
            La Côte d'Ivoire, comme beaucoup de pays d'Afrique
            francophone, reste marquée par un écart de genre dans
            l'accès aux compétences numériques. Des initiatives
            structurantes existent déjà dans l'écosystème, comme
            DigiFemmes (porté par le Millennium Challenge Corporation,
            l'USAID et Microsoft en partenariat avec le ministère de la
            Communication et de l'Économie numérique) ou encore
            Abidjanaises In Tech. Notre démarche s'inscrit dans ce
            paysage : créer une passerelle locale, de terrain, entre
            ces grandes initiatives et les femmes qui veulent s'y
            relier.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Ce qu'on a fait.
          </h2>

          <p>
            Cette première édition a été pensée comme un événement
            hybride : des sessions d'acculturation numérique pour celles
            qui débutent, et des ateliers plus poussés sur des outils
            concrets (présence en ligne, communication digitale,
            premiers pas en e-commerce) pour celles qui avancent déjà.
            L'objectif n'était pas d'empiler des présentations, mais de
            repartir avec quelque chose d'utilisable le lundi suivant.
          </p>

          <blockquote className="font-serif my-10 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            Le digital ne remplace pas les opportunités. Il les rend
            simplement plus visibles pour celles qui savent s'en saisir.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Ce qu'on en retient.
          </h2>

          <p>
            L'écart se comble par des gestes répétés. Une formation,
            puis une deuxième. Un premier site vitrine, puis une
            communauté qui se crée autour. Nous avons l'intention de
            pérenniser cette initiative et de l'ouvrir à d'autres
            partenaires qui partagent l'idée qu'un accès réel au
            numérique se construit sur le long terme, pas sur un
            événement isolé.
          </p>
        </div>
      </article>

      <BlogGallery
        eyebrow="Galerie · Digital Women for Access"
        images={[
          { src: "/img/blog/digital-women/2.webp", alt: "Atelier Digital Women for Access" },
          { src: "/img/blog/digital-women/3.webp", alt: "Prise de parole Digital Women for Access" },
          { src: "/img/blog/digital-women/4.webp", alt: "Intervention Digital Women for Access" },
          { src: "/img/blog/digital-women/5.webp", alt: "Participantes Digital Women for Access" },
        ]}
      />
    </BlogArticleLayout>
  );
}
