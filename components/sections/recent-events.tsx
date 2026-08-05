"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { getAllArticles, getArticleHref, localize } from "@/lib/blog";
import { track } from "@/lib/analytics/track";

type RecentEventsSectionProps = {
  locale: "fr" | "en";
};

const COPY = {
  fr: {
    eyebrow: "Actualités · Événements",
    title: "Nos derniers événements et distinctions.",
    lead: "Salons, partenariats, lancements et reconnaissances : suivez la vie d'ADC au fil de nos rendez-vous.",
    all: "Voir tout le blog",
    read: "Lire l'article",
  },
  en: {
    eyebrow: "News · Events",
    title: "Our latest events and milestones.",
    lead: "Trade shows, partnerships, launches and recognitions: follow ADC's journey through our key moments.",
    all: "See the full blog",
    read: "Read the article",
  },
} as const;

export function RecentEventsSection({ locale }: RecentEventsSectionProps) {
  const copy = COPY[locale];
  const articles = getAllArticles().slice(0, 3);

  if (articles.length === 0) return null;

  return (
    <section className="border-t border-neutral-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase">
              <span className="inline-block h-px w-10 bg-orange-500" />
              {copy.eyebrow}
            </div>
            <h2 className="max-w-2xl font-serif text-3xl font-medium leading-tight text-neutral-950 md:text-4xl lg:text-[2.75rem]">
              {copy.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
              {copy.lead}
            </p>
          </div>
          <Link
            href="/blog"
            onClick={() => track("home_recent_events_view_all", {})}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-neutral-900 transition-colors hover:text-orange-600"
          >
            {copy.all}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {articles.map((article, i) => (
            <m.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={getArticleHref(article.slug) as "/blog"}
                onClick={() =>
                  track("home_recent_article_click", {
                    slug: article.slug,
                    position: i,
                  })
                }
                className="group flex h-full flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                  <Image
                    src={article.hero.src}
                    alt={localize(article.hero.alt, locale)}
                    fill
                    style={
                      article.hero.position
                        ? { objectPosition: article.hero.position }
                        : undefined
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs tracking-[0.15em] text-neutral-500 uppercase">
                  <span className="font-medium text-orange-600">
                    {localize(article.category, locale)}
                  </span>
                  <span>·</span>
                  <time dateTime={article.publishedAt}>
                    {localize(article.publishedAtDisplay, locale)}
                  </time>
                </div>
                <h3 className="mt-3 font-serif text-xl font-medium leading-snug text-neutral-950 transition-colors group-hover:text-orange-600 md:text-2xl">
                  {localize(article.title, locale)}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-600 md:text-base">
                  {localize(article.excerpt, locale)}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 transition-colors group-hover:text-orange-600">
                  {copy.read}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </Link>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
