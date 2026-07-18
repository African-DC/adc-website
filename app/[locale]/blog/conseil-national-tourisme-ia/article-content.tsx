"use client";

import { BlogGallery } from "@/components/gallery/blog-gallery";
import { BlogArticleLayout } from "@/components/sections/blog-article-layout";

const GALLERY_IMAGES = [
  {
    src: "/img/blog/conseil-national-tourisme-ia/2.webp",
    alt: "Abel Josias BEDE dans l'audience du Conseil National du Tourisme",
  },
  {
    src: "/img/blog/conseil-national-tourisme-ia/3.webp",
    alt: "Panel de la Rentrée Solennelle du Conseil National du Tourisme",
  },
  {
    src: "/img/blog/conseil-national-tourisme-ia/4.webp",
    alt: "Invités institutionnels lors de la session du Conseil National du Tourisme",
  },
  {
    src: "/img/blog/conseil-national-tourisme-ia/5.webp",
    alt: "Vue de la salle pendant la Rentrée Solennelle du Conseil National du Tourisme",
  },
];

export default function ConseilNationalTourismeArticlePage() {
  return (
    <BlogArticleLayout
      title="Tourisme 2030 : l'IA au service de la performance hôtelière et touristique."
      subtitle="Abel Josias BEDE a pris part à la Rentrée Solennelle et 1ère Session du Conseil National du Tourisme pour partager une vision de l'IA appliquée au tourisme ivoirien."
      eyebrow="Blog · Événements · 23 juin 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "Tourisme 2030",
          href: "/blog/conseil-national-tourisme-ia",
        },
      ]}
      hero={{
        src: "/img/blog/conseil-national-tourisme-ia/1.webp",
        alt: "Abel Josias BEDE intervient comme panéliste au Conseil National du Tourisme",
      }}
      cta={{
        title:
          "Vous préparez une transformation digitale dans le tourisme, l'hôtellerie ou les services ?",
        description:
          "Nous pouvons vous aider à structurer vos données, vos parcours clients et vos outils métier.",
        label: "Parler avec ADC",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            La compétitivité touristique ne dépend plus seulement de la
            beauté d'une destination. Elle dépend aussi de la qualité des
            données, de la fluidité des services et de la capacité des
            acteurs à personnaliser l'expérience avant, pendant et après le
            voyage.
          </p>

          <p>
            C'est dans cet esprit qu'Abel Josias BEDE, Manager Général
            d'African Digit Consulting, a participé comme panéliste à la
            Rentrée Solennelle et 1ère Session du Conseil National du
            Tourisme. Son intervention a porté sur un sujet devenu central
            pour le secteur : l'impact de l'intelligence artificielle dans
            l'amélioration de la performance touristique et de la performance
            hôtelière.
          </p>

          <p>
            Le tourisme ivoirien entre dans une période où la transformation
            digitale n'est plus un chantier annexe. Elle devient une
            condition de pilotage, de différenciation et de compétitivité.
            Les destinations qui savent exploiter leurs données comprennent
            mieux les attentes des voyageurs. Les hôtels qui automatisent
            les tâches répétitives libèrent du temps pour l'accueil, le suivi
            et la qualité de service.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            La donnée comme point de départ.
          </h2>

          <p>
            Parler d'intelligence artificielle dans le tourisme ne signifie
            pas commencer par des outils spectaculaires. Le point de départ
            est plus concret : collecter, structurer et relier les données
            déjà disponibles. Réservations, taux d'occupation, saisonnalité,
            motifs de visite, avis clients, habitudes de consommation,
            demandes récurrentes, incidents de service.
          </p>

          <p>
            Pris séparément, ces éléments restent des traces éparpillées.
            Mis en cohérence, ils deviennent une base de décision. Ils
            permettent d'anticiper les pics d'activité, d'améliorer les
            offres, de mieux répartir les équipes et de détecter les points
            de friction qui abîment l'expérience voyageur.
          </p>

          <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-orange-600 mb-3">
                Données
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Centraliser les signaux utiles pour mieux comprendre la
                demande et la saisonnalité.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-orange-600 mb-3">
                Automatisation
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Réduire les tâches répétitives et fiabiliser les opérations
                quotidiennes.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-orange-600 mb-3">
                Expérience
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Personnaliser les parcours et répondre plus vite aux besoins
                des voyageurs.
              </p>
            </div>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            L'IA comme levier opérationnel.
          </h2>

          <p>
            Dans l'hôtellerie, l'IA peut aider à ajuster les prix, prédire
            l'occupation, prioriser les demandes clients, analyser les avis
            ou assister les équipes dans la gestion des réservations. Dans
            la promotion touristique, elle peut aider à segmenter les
            audiences, personnaliser les recommandations et identifier les
            contenus qui déclenchent réellement l'intérêt.
          </p>

          <p>
            Mais la technologie n'a de valeur que si elle s'intègre aux
            métiers. Un modèle d'IA qui ne comprend pas les contraintes
            locales, les langues, les habitudes de réservation ou les réalités
            de connexion restera un outil périphérique. Pour créer de la
            performance, il faut partir du terrain, pas d'une démonstration.
          </p>

          <blockquote className="font-serif my-12 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            L'innovation n'est plus une option. Elle devient un moteur de
            compétitivité pour le tourisme ivoirien à l'horizon 2030.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Ce que nous retenons.
          </h2>

          <p>
            Cette rencontre confirme une conviction forte chez ADC : les
            secteurs de service ont besoin d'outils numériques qui rapprochent
            stratégie et exécution. Le tourisme, plus que beaucoup d'autres
            secteurs, vit dans le détail. Une réponse plus rapide, une
            meilleure anticipation, un parcours plus clair ou une information
            mieux partagée peuvent changer la perception d'une destination.
          </p>

          <p>
            L'enjeu n'est donc pas de parler d'IA comme d'un effet de mode.
            L'enjeu est de bâtir des systèmes capables d'aider les
            institutions, les hôtels, les agences et les acteurs culturels à
            travailler avec plus de précision.
          </p>

          <p>
            Source : publication LinkedIn d'Abel Josias BEDE du 23 juin
            2026, consultable{" "}
            <a
              href="https://fr.linkedin.com/posts/abel-josias-bede-2372a0255_tourisme-intelligenceartificielle-innovation-activity-7475112052383023104-tuBB"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ici
            </a>
            .
          </p>
        </div>
      </article>

      <BlogGallery
        eyebrow="Galerie · Conseil National du Tourisme"
        columns={4}
        aspect="landscape"
        images={GALLERY_IMAGES}
      />
    </BlogArticleLayout>
  );
}
