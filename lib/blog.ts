export type BlogLocale = "fr" | "en";

export type LocalizedString = {
  fr: string;
  en: string;
};

export type BlogAuthor = {
  name: string;
  role?: string;
};

export type BlogArticle = {
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  excerpt: LocalizedString;
  category: LocalizedString;
  hero: { src: string; alt: LocalizedString };
  author: BlogAuthor;
  publishedAt: string;
  publishedAtDisplay: LocalizedString;
  updatedAt?: string;
  keywords?: string[];
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.africandigitconsulting.com";

const DEFAULT_AUTHOR: BlogAuthor = {
  name: "African Digit Consulting",
  role: "Rédaction ADC",
};

export const BLOG_AUTHORS = {
  adc: DEFAULT_AUTHOR,
} as const;

export const blogArticles: BlogArticle[] = [
  {
    slug: "siade-2026-abidjan",
    title: {
      fr: "ADC au SIADE 2026 : deux IA africaines à l'épreuve de la souveraineté technologique",
      en: "ADC at SIADE 2026: Two African AIs Put to the Test of Technological Sovereignty",
    },
    subtitle: {
      fr: "Retour sur notre participation à la 2e édition du Salon International de l'IA, de la Défense et de l'Espace, où nous avons présenté KLASSCI et WOURI.",
      en: "A look back at our participation in the 2nd edition of the International Salon of AI, Defense and Space, where we showcased KLASSCI and WOURI.",
    },
    excerpt: {
      fr: "Retour sur notre participation à la 2e édition du Salon International de l'IA, de la Défense et de l'Espace, où nous avons présenté KLASSCI et WOURI.",
      en: "A look back at our participation in the 2nd edition of the International Salon of AI, Defense and Space, where we showcased KLASSCI and WOURI.",
    },
    category: { fr: "Événements", en: "Events" },
    hero: {
      src: "/img/blog/siade-hero.jpg",
      alt: {
        fr: "Stand African Digit Consulting au SIADE 2026",
        en: "African Digit Consulting booth at SIADE 2026",
      },
    },
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-04-21",
    publishedAtDisplay: { fr: "21 avril 2026", en: "April 21, 2026" },
    keywords: [
      "SIADE 2026",
      "souveraineté numérique",
      "IA Afrique",
      "KLASSCI",
      "WOURI",
      "Abidjan",
    ],
  },
  {
    slug: "klassci-orange-business-village",
    title: {
      fr: "KLASSCI à l'honneur chez Orange Business",
      en: "KLASSCI in the Spotlight at Orange Business",
    },
    subtitle: {
      fr: "Présentation de notre CRM éducatif lors du lancement de l'offre Internet Pro illimité, au siège Orange Village d'Abidjan.",
      en: "Showcasing our educational CRM during the launch of the unlimited Internet Pro offer, at the Orange Village headquarters in Abidjan.",
    },
    excerpt: {
      fr: "Présentation de notre CRM éducatif lors du lancement de l'offre Internet Pro illimité, au siège Orange Village d'Abidjan.",
      en: "Showcasing our educational CRM during the launch of the unlimited Internet Pro offer, at the Orange Village headquarters in Abidjan.",
    },
    category: { fr: "Partenariats", en: "Partnerships" },
    hero: {
      src: "/img/blog/orange-village-hero.jpg",
      alt: {
        fr: "Stand ADC lors de l'événement Orange Business",
        en: "ADC booth at the Orange Business event",
      },
    },
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-03-26",
    publishedAtDisplay: { fr: "26 mars 2026", en: "March 26, 2026" },
    keywords: [
      "Orange Business",
      "KLASSCI",
      "CRM éducatif",
      "transformation digitale",
      "Abidjan",
    ],
  },
  {
    slug: "digigreen-acceleration-wouri",
    title: {
      fr: "ADC retenue en phase d'accélération du programme DigiGreen",
      en: "ADC Selected for the DigiGreen Acceleration Program",
    },
    subtitle: {
      fr: "Une opportunité majeure pour WOURI, notre agent IA dédié aux agriculteurs ivoiriens face au changement climatique. Partenaires : Orange, GIZ, Union européenne.",
      en: "A major opportunity for WOURI, our AI agent dedicated to Ivorian farmers facing climate change. Partners: Orange, GIZ, European Union.",
    },
    excerpt: {
      fr: "Une opportunité majeure pour WOURI, notre agent IA dédié aux agriculteurs ivoiriens face au changement climatique. Partenaires : Orange, GIZ, Union européenne.",
      en: "A major opportunity for WOURI, our AI agent dedicated to Ivorian farmers facing climate change. Partners: Orange, GIZ, European Union.",
    },
    category: { fr: "Accélération", en: "Acceleration" },
    hero: {
      src: "/img/blog/digigreen-hero.jpg",
      alt: {
        fr: "Inauguration de la cohorte DigiGreen à l'Orange Digital Center",
        en: "Launch of the DigiGreen cohort at the Orange Digital Center",
      },
    },
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-04-17",
    publishedAtDisplay: { fr: "17 avril 2026", en: "April 17, 2026" },
    keywords: [
      "DigiGreen",
      "WOURI",
      "agritech",
      "IA agricole",
      "Orange",
      "GIZ",
      "Union européenne",
    ],
  },
  {
    slug: "akwaba-klassci",
    title: {
      fr: "AKAWABA KLASSCI : présentation officielle de notre solution de gestion scolaire",
      en: "AKAWABA KLASSCI: Official Launch of Our School Management Solution",
    },
    subtitle: {
      fr: "Le 20 juin 2025, ADC a dévoilé KLASSCI devant le Ministère de l'Éducation nationale, la GIZ, Côte d'Ivoire Export et Impact'Lab UNESCO. Retour sur un lancement qui a marqué un tournant.",
      en: "On June 20, 2025, ADC unveiled KLASSCI to the Ministry of National Education, GIZ, Côte d'Ivoire Export and Impact'Lab UNESCO. A look back at a landmark launch.",
    },
    excerpt: {
      fr: "Le 20 juin 2025, ADC a dévoilé KLASSCI devant le Ministère de l'Éducation nationale, la GIZ, Côte d'Ivoire Export et Impact'Lab UNESCO. Retour sur un lancement qui a marqué un tournant.",
      en: "On June 20, 2025, ADC unveiled KLASSCI to the Ministry of National Education, GIZ, Côte d'Ivoire Export and Impact'Lab UNESCO. A look back at a landmark launch.",
    },
    category: { fr: "Lancement", en: "Launch" },
    hero: {
      src: "/img/blog/akwaba-klassci/1.webp",
      alt: {
        fr: "Événement AKAWABA KLASSCI : présentation officielle",
        en: "AKAWABA KLASSCI event: official launch",
      },
    },
    author: DEFAULT_AUTHOR,
    publishedAt: "2025-06-20",
    publishedAtDisplay: { fr: "20 juin 2025", en: "June 20, 2025" },
    keywords: [
      "KLASSCI",
      "AKAWABA",
      "gestion scolaire",
      "éducation Côte d'Ivoire",
      "Ministère Éducation",
    ],
  },
  {
    slug: "digital-women-for-access",
    title: {
      fr: "Digital Women for Access : première édition à Abidjan",
      en: "Digital Women for Access: First Edition in Abidjan",
    },
    subtitle: {
      fr: "Initiative portée par ADC pour rendre le numérique plus accessible aux femmes ivoiriennes. Formation, mise en réseau, acculturation digitale.",
      en: "An initiative led by ADC to make digital more accessible to Ivorian women. Training, networking, digital acculturation.",
    },
    excerpt: {
      fr: "Initiative portée par ADC pour rendre le numérique plus accessible aux femmes ivoiriennes. Formation, mise en réseau, acculturation digitale.",
      en: "An initiative led by ADC to make digital more accessible to Ivorian women. Training, networking, digital acculturation.",
    },
    category: { fr: "Initiatives", en: "Initiatives" },
    hero: {
      src: "/img/blog/digital-women/cover.webp",
      alt: {
        fr: "Affiche Meeting'UP — Impact'Lab UNESCO et programme Digit Access for Women, vendredi 19 avril 2024 à Cocody Mermoz, avec S.E. Catherine Brooker (Ambassadrice de Grande-Bretagne) et Dr. Laurence Brouche (Directrice de l'Institut français du numérique)",
        en: "Meeting'UP poster — Impact'Lab UNESCO and Digit Access for Women programme, Friday 19 April 2024 at Cocody Mermoz, with H.E. Catherine Brooker (UK Ambassador) and Dr. Laurence Brouche (Director of the French Digital Institute)",
      },
    },
    author: DEFAULT_AUTHOR,
    publishedAt: "2024-06-15",
    publishedAtDisplay: { fr: "Juin 2024", en: "June 2024" },
    keywords: [
      "Digital Women for Access",
      "inclusion numérique",
      "femmes tech",
      "Abidjan",
      "formation digitale",
    ],
  },
  {
    slug: "salon-opportunites-entrepreneur",
    title: {
      fr: "ADC au Salon des opportunités publiques et privées de l'entrepreneur",
      en: "ADC at the Public and Private Entrepreneur Opportunities Fair",
    },
    subtitle: {
      fr: "Participation à la deuxième édition de ce rendez-vous qui réunit PME, institutions publiques et bailleurs autour de l'entrepreneuriat ivoirien.",
      en: "We joined the second edition of this gathering that brings together SMEs, public institutions and donors around Ivorian entrepreneurship.",
    },
    excerpt: {
      fr: "Participation à la deuxième édition de ce rendez-vous qui réunit PME, institutions publiques et bailleurs autour de l'entrepreneuriat ivoirien.",
      en: "We joined the second edition of this gathering that brings together SMEs, public institutions and donors around Ivorian entrepreneurship.",
    },
    category: { fr: "Entrepreneuriat", en: "Entrepreneurship" },
    hero: {
      src: "/img/blog/salon-entrepreneur/1.webp",
      alt: {
        fr: "Équipe ADC au Salon des opportunités publiques et privées de l'entrepreneur",
        en: "ADC team at the Public and Private Entrepreneur Opportunities Fair",
      },
    },
    author: DEFAULT_AUTHOR,
    publishedAt: "2024-05-20",
    publishedAtDisplay: { fr: "Mai 2024", en: "May 2024" },
    keywords: [
      "entrepreneuriat ivoirien",
      "PME",
      "digitalisation",
      "Côte d'Ivoire",
    ],
  },
  {
    slug: "webinar-afrique-numerique",
    title: {
      fr: "Webinar : une vision pour l'Afrique numérique",
      en: "Webinar: A Vision for Digital Africa",
    },
    subtitle: {
      fr: "Notre équipe partage sa lecture des défis et des opportunités du digital en Afrique francophone : souveraineté, IA, transformation réelle.",
      en: "Our team shares its reading of the challenges and opportunities of digital in French-speaking Africa: sovereignty, AI, real transformation.",
    },
    excerpt: {
      fr: "Notre équipe partage sa lecture des défis et des opportunités du digital en Afrique francophone : souveraineté, IA, transformation réelle.",
      en: "Our team shares its reading of the challenges and opportunities of digital in French-speaking Africa: sovereignty, AI, real transformation.",
    },
    category: { fr: "Vision", en: "Vision" },
    hero: {
      src: "/img/blog/webinar-afrique-affiche.webp",
      alt: {
        fr: "Affiche officielle du webinar ADC sur l'Afrique numérique",
        en: "Official poster of the ADC webinar on Digital Africa",
      },
    },
    author: DEFAULT_AUTHOR,
    publishedAt: "2024-03-10",
    publishedAtDisplay: { fr: "Mars 2024", en: "March 2024" },
    keywords: [
      "Afrique numérique",
      "souveraineté digitale",
      "transformation",
      "webinar",
    ],
  },
];

export function getAllArticles(): BlogArticle[] {
  return [...blogArticles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}

export function getArticleUrl(slug: string, locale: BlogLocale = "fr"): string {
  const prefix = locale === "fr" ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}/blog/${slug}`;
}

export function getArticleHref(slug: string): string {
  return `/blog/${slug}`;
}

export function localize(
  value: LocalizedString,
  locale: BlogLocale,
): string {
  return value[locale];
}

export function toBlogLocale(locale: string): BlogLocale {
  return locale === "en" ? "en" : "fr";
}

export { SITE_URL };
