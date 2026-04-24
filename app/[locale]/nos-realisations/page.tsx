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

  const title = isEn ? "Our work — ADC" : "Nos réalisations — ADC";
  const description = isEn
    ? "Our projects: KLASSCI (academic management for higher education) and WOURI (agritech AI on WhatsApp)."
    : "Nos projets : KLASSCI (gestion académique pour l'enseignement supérieur) et WOURI (IA agritech sur WhatsApp).";

  const canonical = `${SITE_URL}/${locale}/nos-realisations`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fr: `${SITE_URL}/fr/nos-realisations`,
        en: `${SITE_URL}/en/nos-realisations`,
        "x-default": `${SITE_URL}/fr/nos-realisations`,
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
