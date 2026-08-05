"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";
import { Link } from "@/i18n/navigation";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Safe9ArticlePage() {
  return (
    <BlogArticleLayout
      title="SAFE 9 : ADC distinguée pour son engagement auprès de la jeunesse entrepreneuriale africaine."
      subtitle="Au Salon Africain de l'Entrepreneuriat, African Digit Consulting a reçu un trophée saluant son engagement pour la promotion de l'entrepreneuriat auprès de la jeunesse en Afrique."
      eyebrow="Blog · Distinctions · 31 juillet 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "SAFE 9 — Distinction ADC",
          href: "/blog/safe-9-abidjan-prix-entrepreneuriat",
        },
      ]}
      hero={{
        src: "/img/blog/safe-9-abidjan-prix-entrepreneuriat/hero.webp",
        alt: "Abel Josias BEDE, directeur général d'ADC, avec le trophée du SAFE 9 aux côtés de Robert Brazza, à Abidjan",
      }}
      cta={{
        title: "Vous portez un projet à impact pour la jeunesse ou l'éducation ?",
        description:
          "Découvrez comment nous concevons des solutions numériques utiles, durables et adaptées aux réalités africaines.",
        label: "Découvrir nos réalisations",
        href: "/nos-realisations",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-lg leading-relaxed text-neutral-800">
          <p className="font-serif text-2xl leading-snug font-light text-neutral-900 italic md:text-3xl">
            À Abidjan, au Sofitel Hôtel Ivoire, African Digit Consulting a été
            distinguée lors de la 9e édition du Salon Africain de
            l'Entrepreneuriat (SAFE), un rendez-vous entièrement placé sous le
            signe de la transformation numérique.
          </p>

          <p>
            Le trophée remis à ADC porte une mention qui dit l'essentiel :
            «&nbsp;En reconnaissance de vos efforts pour la promotion de
            l'entrepreneuriat auprès de la jeunesse en Afrique&nbsp;». Une
            distinction que nous recevons avec sobriété, comme un encouragement
            à poursuivre un travail de fond plutôt que comme une fin en soi.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Un salon centré sur la transformation numérique.
          </h2>

          <p>
            Réunie les 30 et 31 juillet 2026 autour du thème «&nbsp;Transformation
            numérique&nbsp;: accélérer l'entrepreneuriat des jeunes en
            Afrique&nbsp;», la 9e édition du SAFE a rassemblé porteurs de
            projets, institutions et partenaires financiers. Au programme&nbsp;:
            des ateliers gratuits de montée en compétences — intelligence
            artificielle, cybersécurité, e-commerce —, une «&nbsp;clinique de
            l'entrepreneur&nbsp;» dédiée au diagnostic numérique, des rencontres
            d'affaires et un concours de projets.
          </p>

          <p>
            Le salon, conduit par le commissaire général Mohamed Fofana, a
            confirmé une orientation claire&nbsp;: faire du numérique un levier
            concret pour les jeunes entreprises. Un partenariat avec une
            institution financière y a permis de mobiliser un milliard de
            francs CFA pour le financement des PME locales.
          </p>

          <aside className="flex flex-col gap-4 border-y border-neutral-200 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-neutral-950">
                Notre contribution à l'éducation.
              </p>
              <p className="mt-1 text-base text-neutral-600">
                KLASSCI, notre solution de gestion scolaire, outille au
                quotidien des établissements et leurs communautés éducatives.
              </p>
            </div>
            <Link
              href="/nos-realisations/klassci"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 font-semibold text-orange-600 transition-colors hover:text-orange-700"
            >
              Découvrir KLASSCI
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </aside>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Une distinction qui reconnaît un engagement de fond.
          </h2>

          <p>
            Sur la scène du salon, le trophée a été remis à Abel Josias BEDE,
            directeur général d'ADC, par Mohamed Fofana. Au-delà du moment, cette
            reconnaissance salue une conviction qui guide notre équipe&nbsp;: le
            numérique n'a de sens que lorsqu'il sert des besoins réels et rend
            l'accès plus juste, en particulier pour les jeunes.
          </p>

          <p>
            C'est cette conviction qui relie nos projets — des solutions au
            service de l'éducation aux initiatives d'inclusion numérique — et
            que le SAFE a choisi de mettre en lumière.
          </p>

          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light text-neutral-900 italic md:pl-8 md:text-3xl">
            Un prix n'est pas une ligne d'arrivée. C'est une responsabilité de
            plus&nbsp;: continuer à bâtir des outils utiles pour celles et ceux
            qui entreprennent.
          </blockquote>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Ce que nous retenons.
          </h2>

          <p>
            L'écosystème entrepreneurial ivoirien se structure, et le numérique
            en devient un moteur assumé. L'enjeu, désormais, reste le même que
            celui qui oriente notre travail&nbsp;: outiller réellement les jeunes
            entreprises, avec des solutions pensées pour leur contexte et pour
            durer.
          </p>

          <p className="text-base text-neutral-500">
            Photos&nbsp;: 9e édition du Salon Africain de l'Entrepreneuriat,
            Sofitel Hôtel Ivoire, Abidjan.
          </p>
        </div>
      </article>

      <section className="border-t border-neutral-200 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8 text-xs tracking-[0.22em] text-neutral-600 uppercase">
            <span className="mr-3 inline-block h-px w-10 bg-orange-500 align-middle" />
            Vlog · Le moment en vidéo
          </div>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-black shadow-2xl shadow-neutral-900/20"
          >
            <video
              controls
              preload="metadata"
              poster="/videos/safe-9-abidjan-vlog-poster.webp"
              className="aspect-[3/4] w-full"
            >
              <source src="/videos/safe-9-abidjan-vlog.mp4" type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>
          </m.div>
          <p className="mt-6 text-center text-sm text-neutral-500">
            Retour en images sur la distinction reçue au SAFE 9.
          </p>
        </div>
      </section>

      <BlogGallery
        eyebrow="Galerie · SAFE 9"
        columns={2}
        aspect="landscape"
        images={[
          {
            src: "/img/blog/safe-9-abidjan-prix-entrepreneuriat/1.webp",
            alt: "Photo de groupe avec le trophée du SAFE 9, aux côtés de Robert Brazza, à Abidjan",
          },
          {
            src: "/img/blog/safe-9-abidjan-prix-entrepreneuriat/2.webp",
            alt: "Remise du trophée à Abel Josias BEDE par Mohamed Fofana, commissaire général du SAFE, sur la scène du salon",
          },
          {
            src: "/img/blog/safe-9-abidjan-prix-entrepreneuriat/3.webp",
            alt: "Les lauréats du SAFE 9 réunis sur scène lors de la cérémonie de remise des prix",
          },
        ]}
      />
    </BlogArticleLayout>
  );
}
