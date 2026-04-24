"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import { ShareButton } from "@/components/share/share-button";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Breadcrumb = { label: string; href: string };

type BlogArticleLayoutProps = {
  title: string;
  subtitle: string;
  eyebrow: string;
  breadcrumbs: Breadcrumb[];
  hero: { src: string; alt: string };
  cta: {
    title: string;
    label: string;
    href?: string;
    description?: string;
  };
  shareText?: string;
  children: ReactNode;
};

export function BlogArticleLayout({
  title,
  subtitle,
  eyebrow,
  breadcrumbs,
  hero,
  cta,
  shareText,
  children,
}: BlogArticleLayoutProps) {
  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title={title}
        subtitle={subtitle}
        eyebrow={eyebrow}
        breadcrumbs={breadcrumbs}
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
                src={hero.src}
                alt={hero.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </motion.div>
          </div>
        </section>

        {children}

        <section className="py-12 md:py-16 border-t border-neutral-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-500 uppercase">
                <span className="inline-block h-px w-10 bg-orange-500" />
                Cet article vous a intéressé ?
              </div>
              <p className="max-w-lg text-neutral-600 leading-relaxed">
                Partagez-le à celles et ceux qui peuvent en tirer quelque chose.
                L'information utile circule par capillarité.
              </p>
              <ShareButton
                title={title.replace(/\.$/, "")}
                text={shareText ?? subtitle}
              />
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 border-t border-neutral-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-neutral-950 mb-8">
              {cta.title}
            </h2>
            {cta.description && (
              <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl mx-auto -mt-4">
                {cta.description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button asChild variant="cta" size="cta">
                <Link href={cta.href ?? "/contact"}>
                  <span>{cta.label}</span>
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
