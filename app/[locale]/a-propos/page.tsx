import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import ContentFr from "./page-content";
import ContentEn from "./page-content-en";

const SITE_URL = "https://www.africandigitconsulting.com";
const PATH = "/a-propos";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  const frUrl = `${SITE_URL}${PATH}`;
  const enUrl = `${SITE_URL}/en${PATH}`;

  const title = isEn ? "About — ADC" : "À propos — ADC";
  const description = isEn
    ? "Our story, our principles, our team. African Digit Consulting builds useful digital products from Abidjan, for Africa."
    : "Notre histoire, nos piliers, notre équipe. African Digit Consulting construit le digital utile depuis Abidjan.";

  return {
    title,
    description,
    alternates: {
      canonical: isEn ? enUrl : frUrl,
      languages: {
        fr: frUrl,
        en: enUrl,
        "x-default": frUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "fr_FR",
      url: isEn ? enUrl : frUrl,
      title,
      description,
      siteName: "African Digit Consulting",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return locale === "en" ? <ContentEn /> : <ContentFr />;
}
