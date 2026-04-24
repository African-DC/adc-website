import type { Metadata } from "next";
import {
  buildArticleJsonLd,
  buildArticleMetadata,
  jsonLdScriptProps,
} from "@/lib/blog-metadata";
import ArticleContent from "./article-content";

const SLUG = "webinar-afrique-numerique";

export function generateMetadata(): Metadata {
  return buildArticleMetadata(SLUG);
}

export default function Page() {
  const jsonLd = buildArticleJsonLd(SLUG);
  return (
    <>
      {jsonLd ? <script {...jsonLdScriptProps(jsonLd)} /> : null}
      <ArticleContent />
    </>
  );
}
