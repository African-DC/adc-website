"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SalonEntrepreneurArticlePage() {
  return (
    <BlogArticleLayout
      title="ADC présent au Salon des opportunités publiques et privées de l'entrepreneur."
      subtitle="Deuxième édition de ce rendez-vous de l'entrepreneuriat ivoirien auquel nous avons pris part."
      eyebrow="Blog · Entrepreneuriat"
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        {
          label: "Salon de l'entrepreneur",
          href: "/blog/salon-opportunites-entrepreneur",
        },
      ]}
      hero={{
        src: "/img/blog/salon-entrepreneur/1.webp",
        alt: "Équipe ADC au Salon des opportunités publiques et privées de l'entrepreneur",
      }}
      cta={{
        title: "Vous êtes entrepreneur et vous cherchez à digitaliser ?",
        label: "Démarrer un projet",
      }}
    >
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-7 text-neutral-800 text-lg leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug">
            L'entrepreneuriat ivoirien se construit autant par ses
            idées que par ses rencontres. Le Salon des opportunités
            publiques et privées de l'entrepreneur reste l'un des
            rendez-vous les plus utiles à ce titre.
          </p>

          <p>
            Nous avons participé à sa deuxième édition pour y
            présenter nos solutions et, surtout, pour écouter les
            besoins réels des entreprises ivoiriennes qui cherchent à
            franchir un cap digital.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Un salon qui connecte deux mondes.
          </h2>

          <p>
            Le Salon des opportunités publiques et privées de
            l'entrepreneur réunit pendant deux jours des porteurs de
            projets, des PME, des représentants institutionnels et des
            acteurs du financement. L'idée est simple : faire que les
            bonnes personnes se croisent, que les appels d'offres
            trouvent des candidats qualifiés, et que les entrepreneurs
            découvrent des dispositifs d'accompagnement qu'ils
            n'auraient jamais trouvés seuls.
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            Ce que nous y avons appris.
          </h2>

          <p>
            Trois choses. D'abord, les PME ivoiriennes ne manquent pas
            d'idées. Elles manquent d'outils pour transformer ces idées
            en exécution. Ensuite, la méconnaissance des dispositifs
            publics est un vrai frein : beaucoup d'entrepreneurs
            travaillent sans savoir qu'un programme national ou un
            bailleur international pourrait les soutenir. Enfin, le
            digital est attendu comme un levier, pas comme une
            décoration. Il doit produire des résultats mesurables :
            plus de clients, moins de charges, plus de visibilité.
          </p>

          <blockquote className="font-serif my-10 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
            La technologie la plus utile est celle qu'un entrepreneur
            peut s'approprier dès le lendemain.
          </blockquote>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4">
            La suite.
          </h2>

          <p>
            Nous sommes repartis du salon avec plusieurs contacts de
            PME et d'institutions avec lesquelles des collaborations
            sont en cours. Notre rôle reste le même : traduire des
            besoins business en outils digitaux robustes,
            maintenables, qui servent vraiment sur la durée.
          </p>
        </div>
      </article>

      <section className="py-16 md:py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-xs tracking-[0.22em] text-neutral-600 uppercase">
            <span className="inline-block h-px w-10 bg-orange-500 mr-3 align-middle" />
            Galerie · Salon de l'entrepreneur
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { src: "/img/blog/salon-entrepreneur/2.webp", alt: "Échanges avec les visiteurs" },
              { src: "/img/blog/salon-entrepreneur/3.webp", alt: "Présentation de nos solutions" },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </BlogArticleLayout>
  );
}
