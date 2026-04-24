import type { MetadataRoute } from "next";
import { getAllArticles, SITE_URL } from "@/lib/blog";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

const localePath = (locale: Locale, path: string): string => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${normalized === "/" ? "" : normalized}` || `${SITE_URL}/`;
};

const STATIC_PATHS: ReadonlyArray<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/a-propos", priority: 0.8, changeFrequency: "monthly" },
  { path: "/notre-expertise", priority: 0.9, changeFrequency: "monthly" },
  { path: "/nos-realisations", priority: 0.9, changeFrequency: "monthly" },
  { path: "/nos-realisations/klassci", priority: 0.8, changeFrequency: "monthly" },
  { path: "/nos-realisations/wouri", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/politique-confidentialite", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority, changeFrequency } of STATIC_PATHS) {
    const languages = Object.fromEntries(
      routing.locales.map((l) => [l, localePath(l, path)]),
    );
    for (const locale of routing.locales) {
      entries.push({
        url: localePath(locale, path),
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages },
      });
    }
  }

  for (const article of getAllArticles()) {
    const articlePath = `/blog/${article.slug}`;
    const languages = Object.fromEntries(
      routing.locales.map((l) => [l, localePath(l, articlePath)]),
    );
    for (const locale of routing.locales) {
      entries.push({
        url: localePath(locale, articlePath),
        lastModified: new Date(article.updatedAt ?? article.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
