import { createBlogOgImage } from "@/lib/og-template";

export { alt, size, contentType } from "@/lib/og-template";

export default async function Image() {
  return createBlogOgImage("siade-2026-abidjan");
}
