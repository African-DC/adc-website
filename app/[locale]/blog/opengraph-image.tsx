import { toBlogLocale } from "@/lib/blog";
import { createPageOgImage, pageAlt } from "@/lib/og/pages";

export { size, contentType } from "@/lib/og/pages";

export const alt = pageAlt("blog");

type Params = Promise<{ locale: string }>;

export default async function Image({ params }: { params: Params }) {
  const { locale } = await params;
  return createPageOgImage("blog", toBlogLocale(locale));
}
