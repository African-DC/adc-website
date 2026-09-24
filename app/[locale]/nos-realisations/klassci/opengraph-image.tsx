import { toBlogLocale } from "@/lib/blog";
import { caseStudyAlt, createCaseStudyOgImage } from "@/lib/og/case-study";

export { size, contentType } from "@/lib/og/case-study";

export const alt = caseStudyAlt("klassci", "fr");

type Params = Promise<{ locale: string }>;

export default async function Image({ params }: { params: Params }) {
  const { locale } = await params;
  return createCaseStudyOgImage("klassci", toBlogLocale(locale));
}
