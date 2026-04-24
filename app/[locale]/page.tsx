import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import ScrollProgress from "@/components/ui/scroll-progress";
import { HeroEditorial } from "@/components/sections/hero-editorial";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ServicesEditorial } from "@/components/sections/services-editorial";
import { ProjectSpotlight } from "@/components/sections/project-spotlight";
import { TeamEditorial } from "@/components/sections/team-editorial";
import { ClosingEditorial } from "@/components/sections/closing-editorial";
import { HeroEditorial as HeroEditorialEn } from "@/components/sections/hero-editorial-en";
import { PhilosophySection as PhilosophySectionEn } from "@/components/sections/philosophy-section-en";
import { ServicesEditorial as ServicesEditorialEn } from "@/components/sections/services-editorial-en";
import { ProjectSpotlight as ProjectSpotlightEn } from "@/components/sections/project-spotlight-en";
import { TeamEditorial as TeamEditorialEn } from "@/components/sections/team-editorial-en";
import { ClosingEditorial as ClosingEditorialEn } from "@/components/sections/closing-editorial-en";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.africandigitconsulting.com";

type Params = Promise<{ locale: string }>;

const META = {
  fr: {
    title: "ADC — Des solutions digitales à fort impact social et humain",
    description:
      "African Digit Consulting conçoit des solutions digitales utiles, durables et adaptées aux réalités locales africaines. Le digital au service des peuples.",
    locale: "fr_FR",
    canonical: SITE_URL,
  },
  en: {
    title: "ADC — Digital solutions with real social and human impact",
    description:
      "African Digit Consulting builds useful, durable digital solutions grounded in local African realities. Technology in service of people.",
    locale: "en_US",
    canonical: `${SITE_URL}/en`,
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const key = locale === "en" ? "en" : "fr";
  const m = META[key];

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: m.canonical,
      languages: {
        fr: SITE_URL,
        en: `${SITE_URL}/en`,
        "x-default": SITE_URL,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: m.canonical,
      siteName: "African Digit Consulting",
      locale: m.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
    },
  };
}

export default async function Home({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === "en";

  return (
    <main>
      <ScrollProgress />
      <NavbarDemo />
      {isEn ? (
        <>
          <HeroEditorialEn />
          <PhilosophySectionEn />
          <ServicesEditorialEn />
          <ProjectSpotlightEn />
          <TeamEditorialEn />
          <ClosingEditorialEn />
        </>
      ) : (
        <>
          <HeroEditorial />
          <PhilosophySection />
          <ServicesEditorial />
          <ProjectSpotlight />
          <TeamEditorial />
          <ClosingEditorial />
        </>
      )}
      <Footer />
    </main>
  );
}
