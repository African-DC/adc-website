import { notFound } from "next/navigation";

// Any unknown path under a locale renders that locale's not-found page,
// with the site navigation, instead of the bare Next.js 404 in English.
export default function CatchAll() {
  notFound();
}
