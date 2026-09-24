import { toBlogLocale } from "@/lib/blog";
import { caseStudyAlt, createCaseStudyOgImage } from "@/lib/case-study-og";

export { size, contentType } from "@/lib/case-study-og";

export const alt = caseStudyAlt("akwaba", "fr");

type Params = Promise<{ locale: string }>;

export default async function Image({ params }: { params: Params }) {
  const { locale } = await params;
  return createCaseStudyOgImage("akwaba", toBlogLocale(locale));
}
