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

export default function DigitalWomenArticlePage() {
  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title="Digital Women for Access : organiser la première édition à Abidjan."
        subtitle="Retour sur une initiative portée par ADC pour rendre le numérique plus accessible aux femmes ivoiriennes."
        eyebrow="Blog · Initiatives"
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          {
            label: "Digital Women for Access",
            href: "/blog/digital-women-for-access",
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
                src="/img/blog/digital-women.webp"
                alt="Première édition Digital Women for Access"
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
              L'accès au numérique n'est pas une abstraction. C'est une
              question très concrète de formation, d'équipement, de
              confiance. Pour les femmes, en Afrique francophone, l'écart
              reste réel. ADC a voulu y contribuer à sa petite échelle.
            </p>

            <p>
              Digital Women for Access est une initiative que nous avons
              organisée à Abidjan pour mettre en lumière le rôle des
              femmes dans la transformation digitale de la Côte d'Ivoire,
              et surtout pour créer un espace concret de formation,
              d'échange et de mise en réseau.
            </p>

            <h2
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4"
            >
              Pourquoi c'est important.
            </h2>

            <p>
              La Côte d'Ivoire, comme beaucoup de pays d'Afrique
              francophone, reste marquée par un écart de genre dans
              l'accès aux compétences numériques. Des initiatives
              structurantes existent déjà dans l'écosystème, comme
              DigiFemmes (porté par le Millennium Challenge Corporation,
              l'USAID et Microsoft en partenariat avec le ministère de la
              Communication et de l'Économie numérique) ou encore
              Abidjanaises In Tech. Notre démarche s'inscrit dans ce
              paysage : créer une passerelle locale, de terrain, entre
              ces grandes initiatives et les femmes qui veulent s'y
              relier.
            </p>

            <h2
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4"
            >
              Ce qu'on a fait.
            </h2>

            <p>
              Cette première édition a été pensée comme un événement
              hybride : des sessions d'acculturation numérique pour celles
              qui débutent, et des ateliers plus poussés sur des outils
              concrets (présence en ligne, communication digitale,
              premiers pas en e-commerce) pour celles qui avancent déjà.
              L'objectif n'était pas d'empiler des présentations, mais de
              repartir avec quelque chose d'utilisable le lundi suivant.
            </p>

            <blockquote
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="my-10 border-l-2 border-orange-500 pl-6 md:pl-8 italic text-2xl md:text-3xl font-light text-neutral-900 leading-snug"
            >
              Le digital ne remplace pas les opportunités. Il les rend
              simplement plus visibles pour celles qui savent s'en saisir.
            </blockquote>

            <h2
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-3xl md:text-4xl font-medium text-neutral-950 leading-tight pt-4"
            >
              Ce qu'on en retient.
            </h2>

            <p>
              L'écart se comble par des gestes répétés. Une formation,
              puis une deuxième. Un premier site vitrine, puis une
              communauté qui se crée autour. Nous avons l'intention de
              pérenniser cette initiative et de l'ouvrir à d'autres
              partenaires qui partagent l'idée qu'un accès réel au
              numérique se construit sur le long terme, pas sur un
              événement isolé.
            </p>
          </div>
        </article>

        <section className="py-20 md:py-28 border-t border-neutral-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-3xl md:text-4xl font-medium leading-tight text-neutral-950 mb-8"
            >
              Vous portez une initiative digitale inclusive ?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button asChild variant="cta" size="cta">
                <Link href="/contact">
                  <span>Nous en parler</span>
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
