"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function SiadeArticlePage() {
  return (
    <BlogArticleLayout
      title="ADC au SIADE 2026 : deux IA africaines à l'épreuve de la souveraineté technologique."
      subtitle="Retour sur notre participation à la 2e édition du Salon International de l'IA, de la Défense et de l'Espace."
      eyebrow="Blog · Événements · 21 avril 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: "SIADE 2026", href: "/blog/siade-2026-abidjan" },
      ]}
      hero={{
        src: "/img/blog/siade-hero.jpg",
        alt: "Stand African Digit Consulting au SIADE 2026",
      }}
      cta={{
        title:
          "Un projet qui touche à l'éducation, l'agriculture ou la souveraineté numérique ?",
        label: "Parler avec notre équipe",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            Les 13 et 14 avril 2026, Abidjan a accueilli la deuxième
            édition du SIADE, un salon qui pose une question que beaucoup
            évitent encore : quelle stratégie pour une souveraineté
            technologique africaine à l'horizon 2030 ?
          </p>

          <p>
            Nous y étions en tant que jeune entreprise ivoirienne
            développant des solutions fondées sur l'intelligence
            artificielle. Pas comme observateurs. Comme participants, avec
            deux produits à montrer, à expliquer, à discuter.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Un salon, une question.
          </h2>

          <p>
            Le SIADE est organisé par SNEDAI Technologies et s'est tenu
            cette année au Stade Félix Houphouët-Boigny, sous le haut
            patronage du ministère de la Défense. Le ministre de
            l'Intérieur et de la Sécurité, le général Vagondo Diomandé, a
            ouvert les travaux au nom du Vice-Premier ministre Téné
            Ouattara Birahima.
          </p>

          <p>
            L'intelligence artificielle, la défense, l'espace. Trois
            domaines qui ont longtemps été pensés comme des terrains
            réservés aux grandes puissances. Le SIADE 2026 a fait un pari
            inverse : et si l'Afrique se saisissait de ces sujets sans
            demander la permission ? Deux accords stratégiques ont été
            signés pendant le salon, l'un avec l'Université de Montpellier
            pour le lancement d'un projet de nanosatellite, l'autre avec
            l'Université Péléforo Gon Coulibaly pour renforcer les
            formations en technologies avancées.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Ce que nous y avons présenté.
          </h2>

          <p>
            Deux produits conçus, développés et maintenus par notre
            équipe à Abidjan. Deux réponses à des problèmes très
            concrets.
          </p>

          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 p-6 md:p-7 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-orange-600 mb-3">
                <span className="inline-block h-px w-8 bg-orange-500 mr-2 align-middle" />
                KLASSCI
              </div>
              <h3 className="font-serif text-2xl font-medium mb-3">
                Un CRM éducatif pour les établissements supérieurs.
              </h3>
              <p className="text-neutral-600 text-base leading-relaxed mb-4">
                KLASSCI automatise jusqu'à 95 % des tâches
                administratives, pédagogiques et financières des
                universités et grandes écoles. Classe virtuelle intégrée,
                suivi financier en temps réel, parcours LMD complet.
              </p>
              <Link
                href="/nos-realisations/klassci"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-orange-600 transition-colors"
              >
                Lire l'étude de cas
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </Link>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-6 md:p-7 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-[#1a5d3a] mb-3">
                <span
                  className="inline-block h-px w-8 mr-2 align-middle"
                  style={{ background: "#1a5d3a" }}
                />
                WOURI
              </div>
              <h3 className="font-serif text-2xl font-medium mb-3">
                Une IA agritech dans la langue du village.
              </h3>
              <p className="text-neutral-600 text-base leading-relaxed mb-4">
                WOURI transforme les données météo en conseils pratiques
                pour les agriculteurs, via WhatsApp et appels vocaux,
                en français et en langues locales.
              </p>
              <Link
                href="/nos-realisations/wouri"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-[#1a5d3a] transition-colors"
              >
                Lire l'étude de cas
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </Link>
            </div>
          </div>

          <p>
            Les deux produits partagent la même philosophie : créer des
            technologies utiles, pensées pour nos réalités. L'un
            transforme la gestion académique, l'autre rend l'expertise
            climatique accessible aux petits producteurs ruraux. Tous deux
            sont aujourd'hui en production ou en beta sur le territoire
            ivoirien.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Pourquoi la souveraineté technologique n'est pas un slogan.
          </h2>

          <p>
            Pour une école qui gère 3 000 étudiants, la dépendance à un
            SaaS hébergé à l'autre bout du monde n'est pas un détail
            technique. C'est une vulnérabilité : coûts en devises, délais
            de support décalés, données sensibles traitées sur des
            juridictions sur lesquelles elle n'a aucun levier.
          </p>

          <p>
            Pour un agriculteur dans la région de Yamoussoukro, un outil
            de conseil météo qui ne parle ni baoulé ni dioula n'est pas un
            outil. C'est une belle promesse qui ne traverse pas le
            village.
          </p>

          <p>
            Construire depuis Abidjan, avec des équipes ivoiriennes,
            ancrées dans les langues et les contraintes locales, ce
            n'est pas juste du patriotisme économique. C'est ce qui rend
            les produits vraiment utiles. Le SIADE 2026 l'a posé
            clairement : la souveraineté, ça commence par savoir
            construire.
          </p>

          <blockquote className="font-serif my-12 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            Deux solutions, une même vision : créer des technologies
            utiles, pensées pour nos réalités.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Ce que nous en retenons.
          </h2>

          <p>
            Les deux jours ont été denses. Des échanges avec des
            industriels, des services publics, des délégations
            étrangères, d'autres startups africaines. Une certitude s'en
            est dégagée : l'écosystème technologique ivoirien sait ce
            qu'il veut. Il veut construire, pas seulement consommer. Il
            veut des partenariats équitables, pas de la sous-traitance.
            Il veut des outils qui parlent sa langue.
          </p>

          <p>
            Chaque jour, nous avançons vers un objectif clair :
            contribuer à la souveraineté numérique de l'Afrique. Le
            SIADE 2026 nous a rappelé que nous ne sommes pas seuls sur
            cette route.
          </p>
        </div>
      </article>

      <section className="py-16 md:py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-xs tracking-[0.22em] text-neutral-600 uppercase">
            <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
            Galerie · SIADE 2026
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: "/img/blog/siade-2.jpg", alt: "Stand WOURI au SIADE" },
              {
                src: "/img/blog/siade-3.jpg",
                alt: "Équipe ADC en discussion",
              },
              {
                src: "/img/blog/siade-4.jpg",
                alt: "Présentation des solutions ADC",
              },
              {
                src: "/img/blog/siade-5.jpg",
                alt: "Visiteurs au stand ADC",
              },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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
