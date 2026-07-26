import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SHOW_AKWABA } from "@/lib/site-features";
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
    ? SHOW_AKWABA
      ? "Our projects: AKWABA (AI assistant for the Ivorian diaspora), KLASSCI (academic management for higher education) and WOURI (multichannel voice interface for agriculture and climate)."
      : "Our projects: KLASSCI (academic management for higher education) and WOURI (multichannel voice interface for agriculture and climate)."
    : SHOW_AKWABA
      ? "Nos projets : AKWABA (assistant IA pour la diaspora ivoirienne), KLASSCI (gestion académique pour l'enseignement supérieur) et WOURI (interface vocale multicanale pour l'agriculture et le climat)."
      : "Nos projets : KLASSCI (gestion académique pour l'enseignement supérieur) et WOURI (interface vocale multicanale pour l'agriculture et le climat).";

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
