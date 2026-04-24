import { createBlogOgImage } from "@/lib/og-template";

export { alt, size, contentType } from "@/lib/og-template";

type Params = Promise<{ locale: string }>;

export default async function Image({ params }: { params: Params }) {
  const { locale } = await params;
  return createBlogOgImage(
    "siade-2026-abidjan",
    locale === "en" ? "en" : "fr",
  );
}
