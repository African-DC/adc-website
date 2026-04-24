"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OrangeBusinessArticlePage() {
  return (
    <BlogArticleLayout
      title="KLASSCI à l'honneur chez Orange Business."
      subtitle="Présentation de notre CRM éducatif lors du lancement de l'offre Internet Pro illimité, au siège Orange Village d'Abidjan."
      eyebrow="Blog · Partenariats · 26 mars 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "KLASSCI chez Orange Business",
          href: "/blog/klassci-orange-business-village",
        },
      ]}
      hero={{
        src: "/img/blog/orange-village-hero.jpg",
        alt: "Stand ADC lors de l'événement Orange Business",
      }}
      cta={{
        title: "Vous dirigez une université, une grande école, un lycée ?",
        description:
          "Parlons de votre scolarité, de vos paiements, de vos bulletins. KLASSCI est peut-être la bonne conversation.",
        label: "Découvrir KLASSCI",
        href: "/nos-realisations/klassci",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            Le 26 mars 2026, nous avons eu le plaisir de présenter
            KLASSCI lors du salon privé organisé par Orange à l'occasion
            du lancement de son offre Internet Pro illimité, au siège
            Orange Village d'Abidjan.
          </p>

          <p>
            Orange Business est un acteur central de la transformation
            digitale en Côte d'Ivoire. L'opérateur a déployé sur le
            premier trimestre 2026 une nouvelle gamme dédiée aux
            structures professionnelles, dont Mobile Pro et Internet Pro
            illimité. L'objectif est clair : offrir aux entreprises
            ivoiriennes une connectivité capable de soutenir une vraie
            digitalisation des métiers.
          </p>

          <p>
            Pour nous, l'invitation avait un sens évident. Les
            universités et grandes écoles figurent parmi les structures
            professionnelles les plus gourmandes en bande passante, et
            les moins outillées pour la gérer. Lorsque 1 500 étudiants se
            connectent simultanément à une classe virtuelle, à un
            système de bulletins en ligne ou à un module de paiement des
            frais de scolarité, le réseau devient un acteur critique de
            l'expérience pédagogique.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Ce que KLASSCI change.
          </h2>

          <p>
            KLASSCI est un CRM éducatif multi-tenants que nous avons
            conçu et développé pour les établissements supérieurs
            africains. L'outil automatise jusqu'à 95 % des tâches
            administratives, pédagogiques et financières : inscriptions,
            planning, saisie des notes, génération des bulletins, suivi
            des paiements, gestion du personnel enseignant.
          </p>

          <p>
            Aujourd'hui, quatre établissements l'utilisent en production,
            de la filière BTS jusqu'au doctorat, avec des règles de
            notation, des années académiques et des grilles tarifaires
            propres à chacun. Une base de code, quatre contextes
            réels, une même discipline d'exécution.
          </p>

          <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="font-serif text-4xl font-semibold text-neutral-950 mb-2">
                95 %
              </div>
              <p className="text-sm text-neutral-600 leading-snug">
                des tâches administratives et pédagogiques automatisées
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="font-serif text-4xl font-semibold text-neutral-950 mb-2">
                4
              </div>
              <p className="text-sm text-neutral-600 leading-snug">
                établissements en production
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="font-serif text-4xl font-semibold text-neutral-950 mb-2">
                LMD
              </div>
              <p className="text-sm text-neutral-600 leading-snug">
                cycle complet Licence / Master / Doctorat
              </p>
            </div>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Connectivité et logiciel : le même problème, vu de deux
            angles.
          </h2>

          <p>
            Un bon logiciel métier sans connexion stable ne sert à rien.
            Une connexion stable sans outils métier n'apporte pas grand
            chose non plus. C'est ce que l'offre Orange Pro illimité et
            KLASSCI résolvent ensemble, chacun de son côté : l'un garantit
            la couche transport, l'autre la couche métier.
          </p>

          <p>
            Les échanges avec les équipes d'Orange et les autres invités
            du salon l'ont confirmé : les établissements de formation
            ivoiriens attendent des solutions qui savent dialoguer entre
            elles, qui s'installent sans douleur et qui tiennent la charge
            au jour le jour. Nos équipes sont reparties avec des
            perspectives de collaboration concrètes et plusieurs
            recommandations précieuses.
          </p>

          <blockquote className="font-serif my-12 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            L'avenir de l'éducation passe par des outils intelligents et
            adaptés à nos réalités.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            La suite.
          </h2>

          <p>
            Plusieurs pistes de collaboration ont émergé à la suite de
            cette présentation. Nous les travaillons. Notre conviction
            reste la même : les écoles ivoiriennes méritent un outil
            pensé depuis ici, pour ici, intégré au reste de leur
            écosystème numérique plutôt que plaqué par-dessus.
          </p>

          <p>
            Merci à Orange Business pour la confiance et à tous les
            partenaires rencontrés lors de cet événement pour la qualité
            des échanges.
          </p>
        </div>
      </article>

      <section className="py-16 md:py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-xs tracking-[0.22em] text-neutral-600 uppercase">
            <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
            Sur place · Orange Village
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100"
            >
              <Image
                src="/img/blog/orange-village-hero.jpg"
                alt="Stand ADC Orange Village"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100"
            >
              <Image
                src="/img/blog/orange-village-2.jpg"
                alt="Échanges avec les partenaires"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </BlogArticleLayout>
  );
}
