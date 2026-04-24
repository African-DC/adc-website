"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  "Ministère de l'Éducation Nationale",
  "Côte d'Ivoire Export",
  "GIZ",
  "Impact'Lab UNESCO",
];

const features = [
  "Digitalisation complète des inscriptions",
  "Automatisation de la gestion des évaluations et des bulletins",
  "Création et diffusion des emplois du temps",
  "Calcul automatique des salaires des professeurs vacataires",
  "Suivi en temps réel des présences et absences",
  "Accès instantané pour les parents au suivi de la scolarité de leurs enfants",
  "Comptabilité intégrée avec relance des frais de scolarité",
  "Outils d'analyse pour une prise de décision stratégique",
];

const gallery = [
  { src: "/img/blog/akwaba-klassci/1.webp", alt: "Présentation AKAWABA KLASSCI" },
  { src: "/img/blog/akwaba-klassci/2.webp", alt: "Équipe ADC lors du lancement KLASSCI" },
  { src: "/img/blog/akwaba-klassci/3.webp", alt: "Partenaires institutionnels présents" },
  { src: "/img/blog/akwaba-klassci/4.webp", alt: "Échanges avec les invités" },
  { src: "/img/blog/akwaba-klassci/5.webp", alt: "Démonstration de la plateforme KLASSCI" },
  { src: "/img/blog/akwaba-klassci/6.webp", alt: "Remise symbolique lors de l'événement AKAWABA KLASSCI" },
  { src: "/img/blog/akwaba-klassci/7.webp", alt: "Discussion entre acteurs du secteur éducatif" },
  { src: "/img/blog/akwaba-klassci/8.webp", alt: "Moment de présentation officielle KLASSCI" },
];

export default function AkwabaKlassciArticlePage() {
  return (
    <BlogArticleLayout
      title="AKAWABA KLASSCI : présentation officielle de notre solution de gestion scolaire."
      subtitle="Le 20 juin 2025, ADC a officiellement présenté KLASSCI devant le ministère de l'Éducation nationale, la GIZ, Côte d'Ivoire Export et Impact'Lab UNESCO."
      eyebrow="Blog · Lancement · 20 juin 2025"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: "AKAWABA KLASSCI", href: "/blog/akwaba-klassci" },
      ]}
      hero={{
        src: "/img/blog/akwaba-klassci/1.webp",
        alt: "Événement AKAWABA KLASSCI : présentation officielle",
      }}
      cta={{
        title: "Vous dirigez un établissement scolaire ?",
        description:
          "KLASSCI est aujourd'hui en production dans dix écoles ivoiriennes, du primaire au supérieur. Parlons de votre rentrée.",
        label: "Découvrir KLASSCI",
        href: "/nos-realisations/klassci",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            AKAWABA. « Bienvenue » en akan. C'est le mot que nous avons
            choisi pour dire aux acteurs de l'éducation ivoirienne que
            KLASSCI est là, prêt à servir leurs écoles.
          </p>

          <p>
            Le vendredi 20 juin 2025, African Digit Consulting a
            officiellement présenté KLASSCI, son logiciel intelligent de
            gestion simplifiée des établissements scolaires. Après une
            année de développement rigoureux, un produit qui ne se contente
            pas de prétentions marketing mais qui tient ses promesses sur
            le terrain.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Un écosystème rassemblé autour du produit.
          </h2>

          <p>
            L'événement a rassemblé des acteurs clés de l'écosystème
            éducatif et entrepreneurial ivoirien, ainsi que des
            professionnels de l'éducation et des entrepreneurs chevronnés
            venus challenger l'outil.
          </p>

          <ul className="my-6 space-y-3">
            {partners.map((partner) => (
              <li
                key={partner}
                className="flex items-start gap-3 text-neutral-800"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500 mt-3 flex-shrink-0" />
                <span>{partner}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Ce que KLASSCI permet, concrètement.
          </h2>

          <p>
            KLASSCI est bien plus qu'un logiciel : c'est une solution 100 %
            ivoirienne pensée pour les réalités de nos écoles. Les
            fonctionnalités présentées ce jour-là ne sont pas des promesses
            mais des modules déjà en production chez nos premiers clients.
          </p>

          <ul className="my-8 space-y-4 list-none pl-0">
            {features.map((feature, i) => (
              <li key={feature} className="flex gap-4 items-start">
                <span className="font-serif text-xl italic font-light text-orange-500/80 leading-none mt-1 flex-shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-neutral-700">{feature}</span>
              </li>
            ))}
          </ul>

          <blockquote className="font-serif my-12 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            KLASSCI, c'est l'école connectée, efficace, transparente. Au
            service de l'excellence éducative.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Une étape parmi d'autres.
          </h2>

          <p>
            AKAWABA KLASSCI n'était pas une fin de parcours mais un point
            de départ. Les retours du ministère, de la GIZ, d'Impact'Lab
            UNESCO et des entrepreneurs présents ont alimenté les
            itérations des mois qui ont suivi. Aujourd'hui, KLASSCI tourne
            dans dix établissements ivoiriens, du primaire au supérieur.
          </p>

          <p>
            Merci à toutes celles et ceux qui étaient là ce 20 juin, pour
            la confiance et pour les questions qui piquent. C'est comme ça
            qu'on construit un produit qui sert vraiment.
          </p>
        </div>
      </article>

      <section className="py-16 md:py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-xs tracking-[0.22em] text-neutral-600 uppercase">
            <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
            Galerie · AKAWABA KLASSCI
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {gallery.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </BlogArticleLayout>
  );
}
