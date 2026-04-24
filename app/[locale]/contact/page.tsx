import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import ContactPageContent from "./page-content";
import ContactPageContentEn from "./page-content-en";

const SITE_URL = "https://www.africandigitconsulting.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  const title = "Contact — ADC";
  const description = isEn
    ? "Write to us, call us, or come visit us in Grand-Bassam. We reply quickly."
    : "Écrivez-nous, appelez-nous, ou venez nous voir à Grand-Bassam. On répond vite.";

  const canonicalPath = isEn ? "/en/contact" : "/contact";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/contact",
        en: "/en/contact",
        "x-default": "/contact",
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
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as "fr" | "en");

  if (locale === "en") {
    return <ContactPageContentEn />;
  }
  return <ContactPageContent />;
}
