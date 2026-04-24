import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

// Configuration des polices avec préchargement pour de meilleures performances
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | ADC - Agence digitale",
    default: "ADC - Agence Digitale Ivoirienne",
  },
  description:
    "African Digit Consulting conçoit des solutions digitales à fort impact social et humain en Afrique. Le digital au service des peuples, ancré dans les réalités locales.",
  keywords: [
    "agence digitale",
    "impact social",
    "solutions utiles",
    "communication",
    "développement web",
    "marketing digital",
    "design",
    "Abidjan",
    "Côte d'Ivoire",
    "Afrique",
    "solutions numériques",
  ],
  authors: [{ name: "African Digit Consulting" }],
  creator: "African Digit Consulting",
  publisher: "African Digit Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.africadigitconsulting.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ADC - Des solutions digitales à fort impact social et humain",
    description:
      "African Digit Consulting conçoit des solutions digitales utiles, durables et adaptées aux réalités locales africaines. Le digital au service des peuples.",
    url: "https://www.africadigitconsulting.com",
    siteName: "African Digit Consulting",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/img/logoadc.png",
        width: 1200,
        height: 630,
        alt: "African Digit Consulting Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADC - Des solutions digitales à fort impact social et humain",
    description:
      "African Digit Consulting conçoit des solutions digitales utiles, durables et adaptées aux réalités locales africaines.",
    images: ["/img/logoadc.png"],
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

export const viewport: Viewport = {
  themeColor: "#ff942b",
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
