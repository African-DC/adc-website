"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DigiGreenArticlePage() {
  return (
    <BlogArticleLayout
      title="ADC retenue en phase d'accélération du programme DigiGreen."
      subtitle="Une opportunité majeure pour WOURI, notre agent IA dédié aux agriculteurs ivoiriens face au changement climatique."
      eyebrow="Blog · Accélération · 17 avril 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "DigiGreen accélération",
          href: "/blog/digigreen-acceleration-wouri",
        },
      ]}
      hero={{
        src: "/img/blog/digigreen-hero.jpg",
        alt: "Inauguration de la cohorte DigiGreen à l'Orange Digital Center",
      }}
      cta={{
        title: "Coopérative, ONG, service agricole, chercheur ?",
        description:
          "WOURI ouvre progressivement sa beta. Si votre travail touche à l'agriculture ivoirienne ou à la résilience climatique, parlons-en.",
        label: "Découvrir WOURI",
        href: "/nos-realisations/wouri",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            Ça y est. Nous sommes officiellement retenus en phase
            d'accélération du programme DigiGreen, une initiative
            conjointe d'Orange, de la coopération allemande GIZ et de
            l'Union européenne dédiée à la numérisation de l'agriculture
            ivoirienne.
          </p>

          <p>
            Pour notre équipe, cette sélection marque une étape
            importante. Pour WOURI, notre agent IA sur WhatsApp qui aide
            les agriculteurs ivoiriens à faire face au changement
            climatique, c'est un accélérateur concret : mentorat,
            ressources, accès à un réseau d'experts et de partenaires
            agricoles, mise à disposition d'infrastructures techniques
            via l'Orange Digital Center d'Abidjan.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            DigiGreen & Agri, en quelques faits.
          </h2>

          <p>
            DigiGreen & Agri est un programme de 7,6 millions d'euros sur
            trois ans, co-financé par l'Union européenne et mis en œuvre
            par Orange et la GIZ dans le cadre du programme develoPPP du
            ministère fédéral allemand de la Coopération économique (BMZ).
            Son ambition : soutenir la transformation numérique du
            secteur agricole ivoirien, en particulier la filière cacao,
            tout en accompagnant la transition bas carbone du pays.
          </p>

          <p>
            Le programme cible explicitement les jeunes ruraux, les
            femmes, les filles et les personnes en situation de
            handicap. Il combine trois volets : formation, emploi
            digital dans l'agriculture, et soutien à des startups et
            PME qui développent des solutions numériques durables pour
            le monde agricole.
          </p>

          <p>
            Les startups retenues bénéficient d'un accompagnement
            structuré à l'Orange Digital Center, de formations
            techniques et entrepreneuriales, et, pour les plus
            avancées, d'un accès à un seed fund dédié à l'agritech
            ivoirien.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Pourquoi WOURI entre dans ce cadre.
          </h2>

          <p>
            WOURI est un agent IA accessible depuis WhatsApp, dans la
            langue de l'utilisateur. Un agriculteur pose sa question en
            français, en baoulé, en dioula ou en bété, par message texte
            ou par vocal, et reçoit des conseils adaptés à sa région, à
            sa culture, à la saison en cours.
          </p>

          <p>
            L'outil répond à une urgence. Le calendrier agricole
            ivoirien, qui guidait les décisions de semis, de traitement
            et de récolte depuis des générations, est en train de
            s'effondrer sous l'effet du changement climatique. Les
            pluies arrivent plus tard, s'arrêtent plus tôt, ou tombent
            trop fort d'un coup. Les parasites migrent. Les rendements
            baissent. Les services agricoles publics existent, mais ils
            n'atteignent pas chaque village. Chaque agriculteur, en
            revanche, a un téléphone. Et sur ce téléphone, WhatsApp.
          </p>

          <div className="my-10 rounded-2xl p-6 md:p-8 bg-[#1a5d3a]/5 border border-[#1a5d3a]/20">
            <p className="font-serif text-xl md:text-2xl italic font-light text-neutral-900 leading-snug mb-0">
              L'accélération DigiGreen nous permet d'aller plus loin
              dans notre mission : apporter davantage de valeur aux
              agriculteurs, petits, moyens et grands, afin de les aider
              à mieux faire face aux défis climatiques.
            </p>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Ce que nous comptons faire.
          </h2>

          <p>
            Trois chantiers concrets vont occuper nos prochaines semaines
            avec DigiGreen.
          </p>

          <ul className="space-y-4 list-none pl-0">
            <li className="flex gap-4 items-start">
              <span className="font-serif text-2xl italic font-light text-orange-500/80 leading-none mt-1 flex-shrink-0">
                01
              </span>
              <div>
                <h3 className="font-medium text-neutral-950 mb-1">
                  Élargir le support linguistique
                </h3>
                <p className="text-neutral-600">
                  Consolider les langues déjà prises en charge (baoulé,
                  dioula, bété) et commencer le travail de fine-tuning
                  sur attié, agni et sénoufo.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="font-serif text-2xl italic font-light text-orange-500/80 leading-none mt-1 flex-shrink-0">
                02
              </span>
              <div>
                <h3 className="font-medium text-neutral-950 mb-1">
                  Affiner la précision des conseils climatiques
                </h3>
                <p className="text-neutral-600">
                  Intégrer des sources de données météo plus granulaires
                  pour la Côte d'Ivoire et croiser avec les calendriers
                  culturaux réels par région et par culture.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="font-serif text-2xl italic font-light text-orange-500/80 leading-none mt-1 flex-shrink-0">
                03
              </span>
              <div>
                <h3 className="font-medium text-neutral-950 mb-1">
                  Étendre la beta
                </h3>
                <p className="text-neutral-600">
                  Ouvrir WOURI à de nouvelles coopératives agricoles
                  partenaires, collecter des retours terrain, mesurer
                  l'impact sur les décisions de saison.
                </p>
              </div>
            </li>
          </ul>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Une vision qui se précise.
          </h2>

          <p>
            Chaque jour, nous avançons un peu plus vers une ambition
            claire : contribuer à la souveraineté numérique de
            l'Afrique en construisant des technologies utiles, ancrées
            dans les réalités humaines. DigiGreen nous en donne les
            moyens sur le front agricole, un domaine qui concerne des
            millions de personnes dans ce pays.
          </p>

          <p>
            Merci à Orange, à la GIZ, à l'Union européenne et à leurs
            partenaires pour la confiance. Nous comptons bien en être
            dignes.
          </p>
        </div>
      </article>

      <section className="py-16 md:py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-xs tracking-[0.22em] text-neutral-600 uppercase">
            <span
              className="inline-block h-px w-10 mr-3 align-middle"
              style={{ background: "#1a5d3a" }}
            />
            Inauguration · Cohorte DigiGreen
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
                src="/img/blog/digigreen-hero.jpg"
                alt="Présentation pendant l'inauguration"
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
                src="/img/blog/digigreen-2.jpg"
                alt="Discussions en marge de l'événement"
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
