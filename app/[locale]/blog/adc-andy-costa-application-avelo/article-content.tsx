"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export default function AdcAndyCostaAveloArticlePage() {
  return (
    <BlogArticleLayout
      title="De WOURI à AVELO : ADC et Andy Costa imaginent le numérique au service de la transition écologique."
      subtitle="À l'occasion d'une rencontre avec l'éco-entrepreneur Andy Costa, ADC a présenté sa vision de l'innovation à impact et posé les premières bases d'une collaboration autour de l'application AVELO."
      eyebrow="Blog · Rencontres & nouveaux projets · 5 août 2026"
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
            Chez African Digit Consulting, nous défendons une conviction simple :
            la technologie produit sa plus grande valeur lorsqu'elle répond à un
            besoin réel, améliore une expérience concrète et contribue durablement
            au développement des communautés.
          </p>

          <p>
            C'est dans cette dynamique que notre équipe a récemment rencontré
            Andy Costa, éco-entrepreneur ivoirien, fondateur de MyDream For Africa
            et figure engagée dans la promotion du vélo et de la mobilité durable
            en Afrique.
          </p>

          <p>
            Depuis plusieurs années, Andy Costa œuvre à faire du vélo bien plus
            qu'un moyen de déplacement. À travers ses initiatives, il le
            positionne comme un outil de mobilité durable, de sensibilisation
            environnementale, de création d'activités économiques et
            d'amélioration du cadre de vie. Son engagement en faveur du transport
            vert, des pistes cyclables et du développement d'activités autour du
            vélo est documenté depuis plusieurs années.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Une rencontre entre innovation numérique et engagement écologique.
          </h2>

          <p>
            Cette rencontre a permis aux équipes d'African Digit Consulting et à
            Andy Costa d'échanger autour des possibilités offertes par le
            numérique pour accompagner des initiatives environnementales conçues
            en Afrique. Notre équipe a notamment présenté WOURI, la solution
            agritech et climate-tech développée par ADC pour rendre l'information
            agricole et climatique plus accessible aux producteurs.
          </p>

          <p>
            WOURI permet à un utilisateur de poser une question par écrit ou par
            message vocal. La solution interprète le contexte de la demande,
            consulte des sources contrôlées et restitue une réponse simple,
            contextualisée et, progressivement, disponible dans plusieurs langues
            locales. WhatsApp constitue son premier canal cible, en complément du
            Web, du mobile et des appels.
          </p>

          <aside className="flex flex-col gap-4 border-y border-neutral-200 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-neutral-950">
                Vous découvrez WOURI ?
              </p>
              <p className="mt-1 text-base text-neutral-600">
                Son rôle, son fonctionnement et ses garde-fous sont détaillés
                dans notre cas d'étude.
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
            Au-delà de son utilisation dans le secteur agricole, WOURI illustre la
            démarche portée par ADC : concevoir des technologies accessibles,
            ancrées dans les réalités locales et capables d'accompagner des
            transformations sociales et environnementales concrètes.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            AVELO : donner une dimension numérique à la mobilité verte.
          </h2>

          <p>
            Les échanges ont également ouvert une nouvelle perspective de
            collaboration. Andy Costa a sollicité African Digit Consulting pour
            réfléchir à la conception de l'application AVELO, une plateforme
            numérique destinée à accompagner la gestion et le développement de sa
            flotte de vélos.
          </p>

          <p>
            AVELO est une initiative de mobilité verte portée par Andy Costa. En
            février 2026, une première flotte d'une dizaine de vélos a notamment
            été remise au projet pour un déploiement pilote au Parc national du
            Banco. L'initiative vise à favoriser les déplacements non polluants au
            sein du parc, à améliorer l'expérience des visiteurs et à créer des
            opportunités économiques pour les jeunes. Le projet prévoit également
            un déploiement progressif vers d'autres réserves et sites naturels de
            Côte d'Ivoire.
          </p>

          <p>
            La future application doit permettre de transformer cette flotte
            physique en un service plus structuré, plus simple à utiliser et plus
            facile à piloter. Selon les besoins qui seront précisés pendant la
            phase de cadrage, la plateforme pourra notamment intégrer :
          </p>

          <ul className="grid list-disc gap-2 pl-6 marker:text-orange-500 sm:grid-cols-2">
            <li>l'enregistrement et l'identification des vélos ;</li>
            <li>la gestion des locations et des réservations ;</li>
            <li>l'affectation des vélos à différents sites ;</li>
            <li>le suivi des entrées, des sorties et des restitutions ;</li>
            <li>la gestion des utilisateurs et des agents ;</li>
            <li>le signalement des pannes ou incidents ;</li>
            <li>la planification des opérations d'entretien ;</li>
            <li>le suivi des paiements et des recettes ;</li>
            <li>la consultation de statistiques d'utilisation ;</li>
            <li>
              la mesure progressive de l'impact environnemental et social du
              projet.
            </li>
          </ul>

          <p>
            L'objectif ne sera donc pas uniquement de créer une application
            mobile. Il s'agira de mettre en place un véritable système numérique
            de gestion de flotte, capable d'accompagner la croissance
            opérationnelle d'AVELO.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Du vélo physique à un service de mobilité connecté.
          </h2>

          <p>
            La réussite d'une initiative de mobilité partagée dépend autant de la
            disponibilité des équipements que de la qualité de leur gestion. À
            mesure que la flotte évolue, il devient nécessaire de savoir, en temps
            réel ou à intervalles réguliers :
          </p>

          <ul className="grid list-disc gap-2 pl-6 marker:text-orange-500 sm:grid-cols-2">
            <li>quels vélos sont disponibles ;</li>
            <li>quels vélos sont en circulation ;</li>
            <li>quels équipements doivent être entretenus ;</li>
            <li>sur quels sites les demandes sont les plus importantes ;</li>
            <li>quelles activités génèrent des revenus ;</li>
            <li>
              et comment le projet contribue à l'emploi, à l'écotourisme et à la
              réduction des déplacements polluants.
            </li>
          </ul>

          <p>
            L'application AVELO devra rendre ces informations accessibles aussi
            bien aux utilisateurs qu'aux équipes chargées de l'exploitation de la
            flotte. Elle pourrait ainsi comporter plusieurs interfaces
            complémentaires : une expérience simple pour les utilisateurs, un
            espace dédié aux agents de terrain, ainsi qu'un tableau de bord
            administratif pour le pilotage global de l'activité.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Deux projets, une même philosophie.
          </h2>

          <p>
            À première vue, WOURI et AVELO interviennent dans deux secteurs
            différents. WOURI s'adresse principalement au monde agricole, tandis
            qu'AVELO concerne la mobilité douce et la gestion de vélos. Pourtant,
            les deux initiatives reposent sur une philosophie commune : utiliser
            la technologie pour rendre une solution durable plus accessible, plus
            efficace et plus proche de ses utilisateurs.
          </p>

          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light text-neutral-900 italic md:pl-8 md:text-3xl">
            Dans les deux cas, le numérique n'est pas une finalité. Il devient un
            moyen d'organiser, de simplifier et d'amplifier une initiative à
            impact.
          </blockquote>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            ADC, partenaire technologique des projets à impact.
          </h2>

          <p>
            Cette rencontre confirme le positionnement qu'African Digit Consulting
            souhaite renforcer : celui d'une entreprise capable d'accompagner des
            porteurs de projets depuis l'expression du besoin jusqu'au déploiement
            d'une solution numérique complète. L'intervention d'ADC autour d'AVELO
            pourra notamment couvrir :
          </p>

          <ol className="grid list-decimal gap-2 pl-6 marker:font-semibold marker:text-orange-500">
            <li>l'analyse des activités actuelles et des besoins de la flotte ;</li>
            <li>la définition des parcours des utilisateurs et des agents ;</li>
            <li>la conception fonctionnelle et graphique de la plateforme ;</li>
            <li>le développement de l'application et de son tableau de bord ;</li>
            <li>
              l'intégration des mécanismes de réservation, de suivi et de
              paiement ;
            </li>
            <li>la formation des équipes chargées de l'exploitation ;</li>
            <li>la maintenance et l'évolution progressive de la solution.</li>
          </ol>

          <p>
            Cette méthodologie doit permettre de construire un outil correspondant
            aux réalités du terrain, plutôt que de transposer un modèle
            technologique générique ou inadapté.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Une collaboration à construire sur des bases solides.
          </h2>

          <p>
            La prochaine étape consistera à organiser une phase de cadrage avec
            Andy Costa et les équipes impliquées dans AVELO. Cette phase permettra
            notamment de préciser :
          </p>

          <ul className="grid list-disc gap-2 pl-6 marker:text-orange-500 sm:grid-cols-2">
            <li>la taille et la composition actuelle de la flotte ;</li>
            <li>les différents sites d'exploitation ;</li>
            <li>le fonctionnement des locations ;</li>
            <li>les catégories d'utilisateurs concernées ;</li>
            <li>les modes de paiement envisagés ;</li>
            <li>les responsabilités des agents de terrain ;</li>
            <li>les besoins de maintenance ;</li>
            <li>les indicateurs d'activité et d'impact à suivre ;</li>
            <li>ainsi que les priorités de la première version de l'application.</li>
          </ul>

          <p>
            L'objectif sera de définir un produit minimum viable, centré sur les
            fonctions essentielles, puis de faire évoluer progressivement la
            plateforme à partir des usages et des retours du terrain.
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            Faire avancer les solutions africaines.
          </h2>

          <p>
            À travers WOURI et la perspective ouverte par AVELO, African Digit
            Consulting réaffirme son engagement en faveur d'un numérique utile,
            responsable et construit autour des réalités africaines. La rencontre
            avec Andy Costa représente ainsi bien plus qu'un échange entre un
            éco-entrepreneur et une entreprise technologique : elle symbolise la
            convergence de deux expertises, celle d'un acteur engagé depuis
            plusieurs années dans la mobilité verte, et celle d'une équipe
            numérique déterminée à transformer des projets d'impact en solutions
            accessibles, structurées et évolutives.
          </p>

          <p>
            Parce que les défis environnementaux appellent des réponses concrètes,
            nous croyons que l'avenir se construira en réunissant les porteurs de
            vision, les communautés, les institutions et les compétences
            technologiques. Avec WOURI, nous rapprochons l'information climatique
            des producteurs. Avec AVELO, nous voulons rapprocher la mobilité verte
            de ses utilisateurs.
          </p>

          <div className="mt-12 grid gap-5 border-t border-neutral-200 pt-10 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-xs font-semibold tracking-[0.15em] text-orange-600 uppercase">
                À propos d'AVELO
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Initiative de mobilité verte portée par l'éco-entrepreneur Andy
                Costa. Le projet vise à faciliter l'accès au vélo, à soutenir
                l'écotourisme, à réduire les nuisances liées aux transports
                polluants et à créer des opportunités économiques autour de
                l'exploitation et de l'entretien des flottes. Une première phase
                opérationnelle a été lancée au Parc national du Banco en février
                2026.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-xs font-semibold tracking-[0.15em] text-orange-600 uppercase">
                À propos de WOURI
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Solution agritech et climate-tech développée par African Digit
                Consulting. Elle permet aux producteurs d'accéder à des
                informations agricoles et climatiques compréhensibles,
                contextualisées et progressivement disponibles dans plusieurs
                langues locales, par texte ou par message vocal.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-xs font-semibold tracking-[0.15em] text-orange-600 uppercase">
                À propos d'ADC
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                African Digit Consulting conçoit des solutions numériques utiles,
                durables et adaptées aux réalités africaines, et accompagne les
                organisations, les entrepreneurs et les institutions dans la
                conception, le développement et le déploiement de produits
                numériques à impact.
              </p>
            </div>
          </div>
        </div>
      </article>
    </BlogArticleLayout>
  );
}
