import { notFound } from "next/navigation";
import { toBlogLocale } from "@/lib/blog";
import { SHOW_AKWABA } from "@/lib/site-features";
import { caseStudyAlt, createCaseStudyOgImage } from "@/lib/og/case-study";

export { size, contentType } from "@/lib/og/case-study";

export const alt = caseStudyAlt("akwaba", "fr");

type Params = Promise<{ locale: string }>;

export default async function Image({ params }: { params: Params }) {
  // Same switch as the page: a hidden project must not leak through its share card.
  if (!SHOW_AKWABA) notFound();
  const { locale } = await params;
  return createCaseStudyOgImage("akwaba", toBlogLocale(locale));
}
