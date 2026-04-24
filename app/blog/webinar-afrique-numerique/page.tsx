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

export default function WebinarAfriqueArticlePage() {
  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title="Webinar : une vision pour l'Afrique numérique."
        subtitle="Notre équipe a pris la parole pour partager sa lecture des défis et des opportunités du digital en Afrique francophone."
        eyebrow="Blog · Vision"
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          {
            label: "Webinar Afrique numérique",
            href: "/blog/webinar-afrique-numerique",
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
                src="/img/blog/webinar-afrique.jpg"
                alt="Webinar ADC sur l'Afrique numérique"
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
              L'Afrique numérique se raconte souvent à deux vitesses :
              soit comme un eldorado technologique, soit comme un
              continent en retard. La réalité est ailleurs, plus
              fragmentée, plus concrète.
            </p>

            <p>
              Lors de ce webinar, nous avons partagé avec notre
              communauté une lecture de terrain du digital africain, tel
              que nous le voyons depuis Abidjan, tel que nos clients le
              vivent au quotidien dans leurs métiers.
            </p>

            <h2
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4"
            >
              Trois angles pour comprendre.
            </h2>

            <p>
              Nous avons structuré le webinar autour de trois questions
              qui reviennent sans cesse dans nos échanges avec nos
              partenaires et nos clients.
            </p>

            <div className="my-8 space-y-6">
              <div>
                <h3
                  style={{ fontFamily: "var(--font-fraunces)" }}
                  className="text-xl font-medium text-neutral-950 mb-2"
                >
                  Quelle souveraineté numérique pour l'Afrique ?
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Cloud, hébergement, données sensibles. Un chantier
                  stratégique pour les gouvernements comme pour les
                  entreprises privées qui manipulent des données
                  critiques.
                </p>
              </div>
              <div>
                <h3
                  style={{ fontFamily: "var(--font-fraunces)" }}
                  className="text-xl font-medium text-neutral-950 mb-2"
                >
                  Comment l'IA sert-elle le continent ?
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Entre outils grand public et applications métier, nous
                  avons partagé comment nous l'utilisons concrètement
                  dans nos projets (KLASSCI, Wouri).
                </p>
              </div>
              <div>
                <h3
                  style={{ fontFamily: "var(--font-fraunces)" }}
                  className="text-xl font-medium text-neutral-950 mb-2"
                >
                  Où se joue la transformation digitale réelle ?
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Rarement dans les grandes annonces. Plutôt dans les
                  petites décisions quotidiennes de PME, d'écoles,
                  d'ONG, qui adoptent des outils pour gagner du temps et
                  mieux servir leurs utilisateurs.
                </p>
              </div>
            </div>

            <blockquote
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="my-10 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug"
            >
              L'Afrique numérique n'attend pas qu'on lui raconte son
              histoire. Elle a besoin d'acteurs qui construisent, ici,
              avec ses contraintes.
            </blockquote>

            <h2
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4"
            >
              Ce qu'on en retient.
            </h2>

            <p>
              Les échanges avec les participants ont été riches. Un
              constat partagé : l'Afrique numérique avance, mais
              inégalement. Les pays qui ont investi dans les
              infrastructures, la formation et une régulation claire
              prennent de l'avance. La Côte d'Ivoire est bien positionnée
              sur ces trois axes, ce qui explique l'effervescence qu'on
              observe actuellement à Abidjan.
            </p>

            <p>
              Pour nous, la vision reste la même. Construire des
              produits utiles, ancrés dans les réalités locales, qui
              apportent un changement mesurable à leurs utilisateurs.
              Le reste viendra.
            </p>
          </div>
        </article>

        <section className="py-20 md:py-28 border-t border-neutral-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-3xl md:text-4xl font-medium leading-tight text-neutral-950 mb-8"
            >
              Envie de poursuivre la conversation ?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button asChild variant="cta" size="cta">
                <Link href="/contact">
                  <span>Nous écrire</span>
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
