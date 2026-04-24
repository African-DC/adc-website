import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  buildArticleJsonLd,
  buildArticleMetadata,
  jsonLdScriptProps,
} from "@/lib/blog-metadata";
import type { BlogLocale } from "@/lib/blog";
import ArticleFr from "./article-content";
import ArticleEn from "./article-content-en";

const SLUG = "webinar-afrique-numerique";

type Params = Promise<{ locale: string }>;

const toLocale = (locale: string): BlogLocale =>
  locale === "en" ? "en" : "fr";

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildArticleMetadata(SLUG, toLocale(locale));
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;
  const loc = toLocale(locale);
  setRequestLocale(locale);
  const jsonLd = buildArticleJsonLd(SLUG, loc);
  return (
    <>
      {jsonLd ? <script {...jsonLdScriptProps(jsonLd)} /> : null}
      {loc === "en" ? <ArticleEn /> : <ArticleFr />}
    </>
  );
}
