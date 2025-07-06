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
    template: "%s | ADC - Agence digitate",
    default: "ADC - Agence Digitale Ivoirienne",
  },
  description:
    "African Digit Consulting, votre partenaire en communication digitale et solutions numériques en Afrique. Expertise en développement web, marketing digital et design.",
  keywords: [
    "agence digitale",
    "communication",
    "développement web",
    "marketing digital",
    "design",
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
    title: "ADC - Agence de Communication Digitale en Côte d'Ivoire",
    description:
      "African Digit Consulting, votre partenaire en communication digitale et solutions numériques en Afrique.",
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
    title: "ADC - Agence de Communication Digitale en Côte d'Ivoire",
    description:
      "African Digit Consulting, votre partenaire en communication digitale et solutions numériques en Afrique.",
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
      <head>
        {/* Préchargement des ressources critiques pour améliorer les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
