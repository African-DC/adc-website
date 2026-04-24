"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SalonEntrepreneurArticlePage() {
  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
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
      />

      <main className="overflow-hidden bg-white">
        <section className="py-8 md:py-12">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-100"
            >
              <Image
                src="/img/blog/salon-entrepreneur.jpg"
                alt="Équipe ADC au salon de l'entrepreneur"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </motion.div>
          </div>
        </section>

        <article className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-6 space-y-7 text-neutral-800 text-lg leading-relaxed">
            <p
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-2xl md:text-3xl italic font-light text-neutral-900 leading-snug"
            >
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

            <h2
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4"
            >
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

            <h2
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4"
            >
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

            <blockquote
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="my-10 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug"
            >
              La technologie la plus utile est celle qu'un entrepreneur
              peut s'approprier dès le lendemain.
            </blockquote>

            <h2
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4"
            >
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

        <section className="py-20 md:py-28 border-t border-neutral-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-3xl md:text-4xl font-medium leading-tight text-neutral-950 mb-8"
            >
              Vous êtes entrepreneur et vous cherchez à digitaliser ?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button asChild variant="cta" size="cta">
                <Link href="/contact">
                  <span>Démarrer un projet</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-orange-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour au blog
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
