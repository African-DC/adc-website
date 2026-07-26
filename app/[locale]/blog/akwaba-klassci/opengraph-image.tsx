import { notFound } from "next/navigation";
import { toBlogLocale } from "@/lib/blog";
import { createBlogOgImage } from "@/lib/og-template";
import { SHOW_AKWABA } from "@/lib/site-features";

export { alt, size, contentType } from "@/lib/og-template";

type Params = Promise<{ locale: string }>;

export default async function Image({ params }: { params: Params }) {
  if (!SHOW_AKWABA) notFound();

  const { locale } = await params;
  return createBlogOgImage("akwaba-klassci", toBlogLocale(locale));
}
