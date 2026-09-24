import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://www.africandigitconsulting.com";
const PATH = "/blog";

type Params = Promise<{ locale: string }>;

/**
 * Métadonnées de la page /blog. La page elle-même est un composant client
 * (lettre d'information) et ne peut pas exporter `generateMetadata` : sans ce
 * layout, elle héritait de celles de l'accueil — canonique comprise, ce qui
 * faisait passer le blog pour un doublon de l'accueil aux yeux de Google.
 *
 * Les articles définissent leurs propres métadonnées, qui priment sur
 * celles-ci.
 */
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  const frUrl = `${SITE_URL}${PATH}`;
  const enUrl = `${SITE_URL}/en${PATH}`;

  const title = isEn ? "Blog — The journal" : "Blog — Le journal";
  const description = isEn
    ? "Our observations on African digital, between field practice and critical perspective: events, projects and lessons from the ADC team."
    : "Nos observations sur le digital africain, entre pratique du terrain et regard critique : événements, projets et apprentissages de l'équipe ADC.";

  return {
    title,
    description,
    alternates: {
      canonical: isEn ? enUrl : frUrl,
      languages: { fr: frUrl, en: enUrl, "x-default": frUrl },
    },
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "fr_FR",
      url: isEn ? enUrl : frUrl,
      title,
      description,
      siteName: "African Digit Consulting",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
