import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import PolitiqueConfidentialiteContent from "./page-content";
import PolitiqueConfidentialiteContentEn from "./page-content-en";

const SITE_URL = "https://www.africandigitconsulting.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  const title = isEn
    ? "Privacy Policy — ADC"
    : "Politique de confidentialité — ADC";
  const description = isEn
    ? "How we handle your personal data. Compliant with the GDPR and the Ivorian data protection law (Law 2013-450)."
    : "Comment nous traitons vos données personnelles. Conforme au RGPD et à la loi ivoirienne sur la protection des données.";

  const canonicalPath = isEn
    ? "/en/politique-confidentialite"
    : "/politique-confidentialite";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/politique-confidentialite",
        en: "/en/politique-confidentialite",
        "x-default": "/politique-confidentialite",
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${canonicalPath}`,
      siteName: "African Digit Consulting",
      locale: isEn ? "en_US" : "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PolitiqueConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as "fr" | "en");

  if (locale === "en") {
    return <PolitiqueConfidentialiteContentEn />;
  }
  return <PolitiqueConfidentialiteContent />;
}
