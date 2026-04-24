import type { Metadata } from "next";
import {
  getArticleBySlug,
  getArticleUrl,
  SITE_URL,
  type BlogArticle,
} from "@/lib/blog";

const SITE_NAME = "African Digit Consulting";

export function buildArticleMetadata(slug: string): Metadata {
  const article = getArticleBySlug(slug);
  if (!article) {
    return {
      title: "Article non trouvé",
      description: "Cet article n'existe pas ou a été déplacé.",
      robots: { index: false, follow: false },
    };
  }
  return buildMetadataFromArticle(article);
}

function buildMetadataFromArticle(article: BlogArticle): Metadata {
  const url = getArticleUrl(article.slug);
  const ogImage = `${url}/opengraph-image`;

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
    authors: [{ name: article.author.name }],
    creator: article.author.name,
    publisher: SITE_NAME,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      siteName: SITE_NAME,
      type: "article",
      locale: "fr_FR",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [article.author.name],
      tags: article.keywords,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
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

export function buildArticleJsonLd(slug: string) {
  const article = getArticleBySlug(slug);
  if (!article) return null;

  const url = getArticleUrl(slug);
  const ogImage = `${url}/opengraph-image`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
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
    inLanguage: "fr-FR",
    keywords: article.keywords?.join(", "),
    articleSection: article.category,
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
