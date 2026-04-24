import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  buildArticleJsonLd,
  buildArticleMetadata,
  jsonLdScriptProps,
} from "@/lib/blog-metadata";
import { toBlogLocale } from "@/lib/blog";
import ArticleFr from "./article-content";
import ArticleEn from "./article-content-en";

const SLUG = "siade-2026-abidjan";

type Params = Promise<{ locale: string }>;


export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildArticleMetadata(SLUG, toBlogLocale(locale));
}

export default async function Page({ params }: { params: Params }) {
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
