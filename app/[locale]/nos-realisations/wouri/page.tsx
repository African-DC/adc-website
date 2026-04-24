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
    ? "WOURI — Agritech AI for farmers"
    : "WOURI — IA agritech pour les agriculteurs ivoiriens";
  const description = isEn
    ? "WOURI is a WhatsApp AI agent helping Ivorian farmers face climate change, in Baoulé, Dioula and French. Built with DigiGreen."
    : "WOURI est un agent IA sur WhatsApp qui aide les agriculteurs ivoiriens face au changement climatique, en baoulé, dioula et français. Conçu avec DigiGreen.";

  const canonical = `${SITE_URL}/${locale}/nos-realisations/wouri`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fr: `${SITE_URL}/fr/nos-realisations/wouri`,
        en: `${SITE_URL}/en/nos-realisations/wouri`,
        "x-default": `${SITE_URL}/fr/nos-realisations/wouri`,
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
