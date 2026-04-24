import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import ContentFr from "./page-content";
import ContentEn from "./page-content-en";

const SITE_URL = "https://www.africandigitconsulting.com";

type LocaleParams = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<LocaleParams>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  const title = isEn ? "Our expertise — ADC" : "Notre expertise — ADC";
  const description = isEn
    ? "Web development, business applications, applied AI — practical software built for African companies: what we design, how we ship, and who we partner with."
    : "Développement web, applications métier, IA appliquée : ce qu'on conçoit, comment on livre, avec qui.";

  const path = "/notre-expertise";
  const canonical = isEn ? `${SITE_URL}/en${path}` : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fr: `${SITE_URL}${path}`,
        en: `${SITE_URL}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: isEn ? "en_US" : "fr_FR",
      type: "website",
      siteName: "African Digit Consulting",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<LocaleParams>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return locale === "en" ? <ContentEn /> : <ContentFr />;
}
