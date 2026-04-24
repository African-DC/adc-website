export type BlogAuthor = {
  name: string;
  role?: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  hero: { src: string; alt: string };
  author: BlogAuthor;
  publishedAt: string;
  publishedAtDisplay: string;
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
    title:
      "ADC au SIADE 2026 : deux IA africaines à l'épreuve de la souveraineté technologique",
    subtitle:
      "Retour sur notre participation à la 2e édition du Salon International de l'IA, de la Défense et de l'Espace, où nous avons présenté KLASSCI et WOURI.",
    excerpt:
      "Retour sur notre participation à la 2e édition du Salon International de l'IA, de la Défense et de l'Espace, où nous avons présenté KLASSCI et WOURI.",
    category: "Événements",
    hero: {
      src: "/img/blog/siade-hero.jpg",
      alt: "Stand African Digit Consulting au SIADE 2026",
    },
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-04-21",
    publishedAtDisplay: "21 avril 2026",
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
    title: "KLASSCI à l'honneur chez Orange Business",
    subtitle:
      "Présentation de notre CRM éducatif lors du lancement de l'offre Internet Pro illimité, au siège Orange Village d'Abidjan.",
    excerpt:
      "Présentation de notre CRM éducatif lors du lancement de l'offre Internet Pro illimité, au siège Orange Village d'Abidjan.",
    category: "Partenariats",
    hero: {
      src: "/img/blog/orange-village-hero.jpg",
      alt: "Stand ADC lors de l'événement Orange Business",
    },
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-03-26",
    publishedAtDisplay: "26 mars 2026",
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
    title: "ADC retenue en phase d'accélération du programme DigiGreen",
    subtitle:
      "Une opportunité majeure pour WOURI, notre agent IA dédié aux agriculteurs ivoiriens face au changement climatique. Partenaires : Orange, GIZ, Union européenne.",
    excerpt:
      "Une opportunité majeure pour WOURI, notre agent IA dédié aux agriculteurs ivoiriens face au changement climatique. Partenaires : Orange, GIZ, Union européenne.",
    category: "Accélération",
    hero: {
      src: "/img/blog/digigreen-hero.jpg",
      alt: "Inauguration de la cohorte DigiGreen à l'Orange Digital Center",
    },
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-04-17",
    publishedAtDisplay: "17 avril 2026",
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
    title:
      "AKAWABA KLASSCI : présentation officielle de notre solution de gestion scolaire",
    subtitle:
      "Le 20 juin 2025, ADC a dévoilé KLASSCI devant le Ministère de l'Éducation nationale, la GIZ, Côte d'Ivoire Export et Impact'Lab UNESCO. Retour sur un lancement qui a marqué un tournant.",
    excerpt:
      "Le 20 juin 2025, ADC a dévoilé KLASSCI devant le Ministère de l'Éducation nationale, la GIZ, Côte d'Ivoire Export et Impact'Lab UNESCO. Retour sur un lancement qui a marqué un tournant.",
    category: "Lancement",
    hero: {
      src: "/img/blog/akwaba-klassci/1.webp",
      alt: "Événement AKAWABA KLASSCI : présentation officielle",
    },
    author: DEFAULT_AUTHOR,
    publishedAt: "2025-06-20",
    publishedAtDisplay: "20 juin 2025",
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
    title: "Digital Women for Access : première édition à Abidjan",
    subtitle:
      "Initiative portée par ADC pour rendre le numérique plus accessible aux femmes ivoiriennes. Formation, mise en réseau, acculturation digitale.",
    excerpt:
      "Initiative portée par ADC pour rendre le numérique plus accessible aux femmes ivoiriennes. Formation, mise en réseau, acculturation digitale.",
    category: "Initiatives",
    hero: {
      src: "/img/blog/digital-women/1.webp",
      alt: "Première édition Digital Women for Access",
    },
    author: DEFAULT_AUTHOR,
    publishedAt: "2024-06-15",
    publishedAtDisplay: "Juin 2024",
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
    title:
      "ADC au Salon des opportunités publiques et privées de l'entrepreneur",
    subtitle:
      "Participation à la deuxième édition de ce rendez-vous qui réunit PME, institutions publiques et bailleurs autour de l'entrepreneuriat ivoirien.",
    excerpt:
      "Participation à la deuxième édition de ce rendez-vous qui réunit PME, institutions publiques et bailleurs autour de l'entrepreneuriat ivoirien.",
    category: "Entrepreneuriat",
    hero: {
      src: "/img/blog/salon-entrepreneur/1.webp",
      alt: "Équipe ADC au Salon des opportunités publiques et privées de l'entrepreneur",
    },
    author: DEFAULT_AUTHOR,
    publishedAt: "2024-05-20",
    publishedAtDisplay: "Mai 2024",
    keywords: [
      "entrepreneuriat ivoirien",
      "PME",
      "digitalisation",
      "Côte d'Ivoire",
    ],
  },
  {
    slug: "webinar-afrique-numerique",
    title: "Webinar : une vision pour l'Afrique numérique",
    subtitle:
      "Notre équipe partage sa lecture des défis et des opportunités du digital en Afrique francophone : souveraineté, IA, transformation réelle.",
    excerpt:
      "Notre équipe partage sa lecture des défis et des opportunités du digital en Afrique francophone : souveraineté, IA, transformation réelle.",
    category: "Vision",
    hero: {
      src: "/img/blog/webinar-afrique-affiche.webp",
      alt: "Affiche officielle du webinar ADC sur l'Afrique numérique",
    },
    author: DEFAULT_AUTHOR,
    publishedAt: "2024-03-10",
    publishedAtDisplay: "Mars 2024",
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

export function getArticleUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}

export function getArticleHref(slug: string): string {
  return `/blog/${slug}`;
}

export { SITE_URL };
