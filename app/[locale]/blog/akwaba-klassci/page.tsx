import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  buildArticleJsonLd,
  buildArticleMetadata,
  jsonLdScriptProps,
} from "@/lib/blog-metadata";
import { toBlogLocale } from "@/lib/blog";
import { SHOW_AKWABA } from "@/lib/site-features";
import ArticleFr from "./article-content";
import ArticleEn from "./article-content-en";

const SLUG = "akwaba-klassci";

type Params = Promise<{ locale: string }>;


export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  if (!SHOW_AKWABA) {
    return { robots: { index: false, follow: false } };
  }

  const { locale } = await params;
  return buildArticleMetadata(SLUG, toBlogLocale(locale));
}

export default async function Page({ params }: { params: Params }) {
  // Keep the full article source ready for a one-line restoration.
  if (!SHOW_AKWABA) notFound();

  const { locale } = await params;
  const loc = toBlogLocale(locale);
  setRequestLocale(locale);
  const jsonLd = buildArticleJsonLd(SLUG, loc);
  return (
    <>
      {jsonLd ? <script {...jsonLdScriptProps(jsonLd)} /> : null}
      {loc === "en" ? <ArticleEn /> : <ArticleFr />}
    </>
  );
}
