import type { Metadata } from "next";
import {
  getArticleBySlug,
  getArticleUrl,
  localize,
  SITE_URL,
  type BlogArticle,
  type BlogLocale,
} from "@/lib/blog";

const SITE_NAME = "African Digit Consulting";

export function buildArticleMetadata(
  slug: string,
  locale: BlogLocale = "fr",
): Metadata {
  const article = getArticleBySlug(slug);
  if (!article) {
    return {
      title: locale === "en" ? "Article not found" : "Article non trouvé",
      description:
        locale === "en"
          ? "This article does not exist or has been moved."
          : "Cet article n'existe pas ou a été déplacé.",
      robots: { index: false, follow: false },
    };
  }
  return buildMetadataFromArticle(article, locale);
}

function buildMetadataFromArticle(
  article: BlogArticle,
  locale: BlogLocale,
): Metadata {
  const url = getArticleUrl(article.slug, locale);
  const ogImage = `${url}/opengraph-image`;
  const title = localize(article.title, locale);
  const excerpt = localize(article.excerpt, locale);

  const frUrl = getArticleUrl(article.slug, "fr");
  const enUrl = getArticleUrl(article.slug, "en");

  return {
    title,
    description: excerpt,
    keywords: article.keywords,
    authors: [{ name: article.author.name }],
    creator: article.author.name,
    publisher: SITE_NAME,
    alternates: {
      canonical: url,
      languages: {
        fr: frUrl,
        en: enUrl,
        "x-default": frUrl,
      },
    },
    openGraph: {
      title,
      description: excerpt,
      url,
      siteName: SITE_NAME,
      type: "article",
      locale: locale === "en" ? "en_US" : "fr_FR",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [article.author.name],
      tags: article.keywords,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: excerpt,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function buildArticleJsonLd(slug: string, locale: BlogLocale = "fr") {
  const article = getArticleBySlug(slug);
  if (!article) return null;

  const url = getArticleUrl(slug, locale);
  const ogImage = `${url}/opengraph-image`;
  const title = localize(article.title, locale);
  const excerpt = localize(article.excerpt, locale);
  const category = localize(article.category, locale);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    image: [ogImage, `${SITE_URL}${article.hero.src}`],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/img/logoadc.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: locale === "en" ? "en-US" : "fr-FR",
    keywords: article.keywords?.join(", "),
    articleSection: category,
  };
}

export function jsonLdScriptProps(data: unknown) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    },
  };
}
