import type { Metadata, Viewport } from "next";
import { Fraunces, Montserrat, Poppins } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { PostHogProvider } from "@/components/analytics/posthog-provider";
import { MotionConfigProvider } from "@/components/motion-config-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactNode } from "react";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
  preload: false,
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.africandigitconsulting.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const ogImage = "/img/logoadc.png";
  const ogLocale = locale === "fr" ? "fr_FR" : "en_US";
  const canonicalPath = locale === routing.defaultLocale ? "/" : `/${locale}`;

  return {
    title: {
      template: t("titleTemplate"),
      default: t("title"),
    },
    description: t("description"),
    keywords: [
      "agence digitale",
      "digital agency",
      "impact social",
      "Abidjan",
      "Côte d'Ivoire",
      "Afrique",
      "Africa",
    ],
    authors: [{ name: "African Digit Consulting" }],
    creator: "African Digit Consulting",
    publisher: "African Digit Consulting",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalPath,
      languages: {
        fr: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `${SITE_URL}${canonicalPath}`,
      siteName: "African Digit Consulting",
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "African Digit Consulting Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#ff942b",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale as AppLocale);

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${poppins.variable} ${fraunces.variable}`}
    >
      <body>
        <NextIntlClientProvider>
          <MotionConfigProvider>
            <PostHogProvider>{children}</PostHogProvider>
          </MotionConfigProvider>
        </NextIntlClientProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
