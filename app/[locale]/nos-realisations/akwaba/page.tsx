import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import ContentFr from "./page-content";
import ContentEn from "./page-content-en";

const SITE_URL = "https://www.africandigitconsulting.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  const title = isEn
    ? "AKWABA — Premium AI assistant for the Ivorian diaspora"
    : "AKWABA — Assistant IA premium pour la diaspora ivoirienne";
  const description = isEn
    ? "AKWABA guides the Ivorian diaspora through consular procedures and investment, on Web and WhatsApp, in French and local languages. In production."
    : "AKWABA accompagne la diaspora ivoirienne dans ses démarches consulaires et son envie d'investir, sur le Web et WhatsApp, en français et en langues locales. En production.";

  const canonical = `${SITE_URL}/${locale}/nos-realisations/akwaba`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fr: `${SITE_URL}/fr/nos-realisations/akwaba`,
        en: `${SITE_URL}/en/nos-realisations/akwaba`,
        "x-default": `${SITE_URL}/fr/nos-realisations/akwaba`,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: "African Digit Consulting",
      locale: isEn ? "en_US" : "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return locale === "en" ? <ContentEn /> : <ContentFr />;
}
