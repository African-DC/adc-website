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
    ? "KLASSCI — Educational CRM for higher education"
    : "KLASSCI — CRM éducatif pour l'enseignement supérieur";
  const description = isEn
    ? "KLASSCI is a multi-tenant SaaS for higher education: LMD pathways, real-time finance, report cards, payroll. 10 institutions in production."
    : "KLASSCI est un SaaS multi-tenants pour l'enseignement supérieur : parcours LMD, finances temps réel, bulletins, paie. 10 établissements en production.";

  const canonical = `${SITE_URL}/${locale}/nos-realisations/klassci`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fr: `${SITE_URL}/fr/nos-realisations/klassci`,
        en: `${SITE_URL}/en/nos-realisations/klassci`,
        "x-default": `${SITE_URL}/fr/nos-realisations/klassci`,
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
