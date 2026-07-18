"use client";

import { BlogGallery } from "@/components/gallery/blog-gallery";
import { BlogArticleLayout } from "@/components/sections/blog-article-layout";

const GALLERY_IMAGES = [
  {
    src: "/img/blog/performance-collaboration-innovation-equipe/2.webp",
    alt: "Présentation d'une solution digitale pendant une réunion ADC",
  },
  {
    src: "/img/blog/performance-collaboration-innovation-equipe/3.webp",
    alt: "Équipe ADC réunie autour d'une session de travail collaborative",
  },
  {
    src: "/img/blog/performance-collaboration-innovation-equipe/4.webp",
    alt: "Membres de l'équipe ADC suivant une démonstration produit",
  },
  {
    src: "/img/blog/performance-collaboration-innovation-equipe/5.webp",
    alt: "Séance de travail ADC avec ordinateurs et écran de présentation",
  },
];

export default function PerformanceEquipeArticlePage() {
  return (
    <BlogArticleLayout
      title="Performance, collaboration et innovation : le rythme d'une équipe qui progresse."
      subtitle="Retour sur une session de travail consacrée à l'amélioration continue, à la coordination d'équipe et à la construction de solutions digitales plus solides."
      eyebrow="Blog · Événements · 26 juin 2026"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "Performance d'équipe",
          href: "/blog/performance-collaboration-innovation-equipe",
        },
      ]}
      hero={{
        src: "/img/blog/performance-collaboration-innovation-equipe/1.webp",
        alt: "Équipe ADC réunie autour d'une séance de suivi de performance",
      }}
      cta={{
        title:
          "Vous voulez structurer vos opérations digitales avec une équipe qui comprend le terrain ?",
        description:
          "Nous concevons des outils métier pensés pour les contraintes réelles des organisations africaines.",
        label: "Discuter avec notre équipe",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            La performance se construit rarement dans les grands discours.
            Elle se construit dans les points réguliers, les décisions
            suivies, les retours francs et la capacité d'une équipe à
            apprendre plus vite que ses propres blocages.
          </p>

          <p>
            Chez African Digit Consulting, chaque fin de semaine est une
            opportunité de ralentir le rythme opérationnel pour regarder le
            travail en face. Qu'avons-nous livré ? Qu'est-ce qui bloque ?
            Qu'avons-nous appris des utilisateurs, des clients, des tests et
            des démonstrations ? Quelles décisions doivent être prises avant
            la prochaine séquence ?
          </p>

          <p>
            Cette session de travail s'inscrit dans cette discipline. Une
            équipe réunie autour d'un objectif commun : améliorer nos
            performances, renforcer notre collaboration et continuer à
            innover avec plus de méthode.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Aligner avant d'accélérer.
          </h2>

          <p>
            Une startup peut vite confondre mouvement et progrès. Les tâches
            avancent, les réunions s'enchaînent, les demandes entrent, les
            urgences changent de forme. Sans temps d'alignement, l'équipe
            peut travailler beaucoup sans apprendre suffisamment.
          </p>

          <p>
            C'est pour cela que ces points comptent. Ils permettent de
            reconnecter les choix techniques aux besoins métier, les retours
            clients aux priorités produit, et les ambitions commerciales à la
            capacité réelle de livraison. La performance durable commence
            souvent par une question simple : sommes-nous tous en train de
            résoudre le même problème ?
          </p>

          <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-orange-600 mb-3">
                Observer
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Faire le point sur les livraisons, les retours et les
                signaux faibles.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-orange-600 mb-3">
                Décider
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Transformer les constats en priorités concrètes et
                actionnables.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-5 bg-neutral-50">
              <div className="text-xs tracking-[0.18em] uppercase text-orange-600 mb-3">
                Livrer
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Exécuter avec une responsabilité claire et une exigence de
                qualité.
              </p>
            </div>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Derrière chaque solution, une équipe.
          </h2>

          <p>
            Les produits digitaux que nous construisons ne naissent pas dans
            l'isolement. Ils se construisent dans les échanges entre design,
            développement, intégration, suivi client, stratégie et direction.
            Une fonctionnalité réussie dépend autant de la qualité du code
            que de la clarté du besoin, de la précision des tests et de la
            capacité à prendre une décision au bon moment.
          </p>

          <p>
            Les images de cette séance racontent quelque chose de simple :
            l'innovation est collective. Elle demande des remises en
            question, des désaccords utiles, de l'écoute et une attention
            constante à l'impact réel des solutions que nous mettons entre
            les mains des organisations.
          </p>

          <blockquote className="font-serif my-12 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            Grandir, c'est apprendre, s'adapter et progresser ensemble.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Une méthode pour tenir dans la durée.
          </h2>

          <p>
            La transformation digitale en Afrique ne se résume pas à lancer
            des plateformes. Elle suppose de maintenir les produits,
            accompagner les utilisateurs, intégrer les contraintes locales et
            améliorer les parcours au fil de l'usage. C'est un travail de
            durée.
          </p>

          <p>
            Pour tenir ce niveau d'exigence, l'équipe doit devenir son propre
            système d'amélioration continue. C'est ce que ces rendez-vous
            installent : une culture où l'on mesure, où l'on ajuste, où l'on
            partage les apprentissages et où chacun comprend mieux son rôle
            dans la réussite collective.
          </p>

          <p>
            Source : publication LinkedIn d'Abel Josias BEDE du 26 juin
            2026, consultable{" "}
            <a
              href="https://fr.linkedin.com/posts/abel-josias-bede-2372a0255_innovation-teamwork-performance-activity-7476391483387006976-htkL"
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
        eyebrow="Galerie · Session équipe ADC"
        columns={4}
        aspect="landscape"
        images={GALLERY_IMAGES}
      />
    </BlogArticleLayout>
  );
}
