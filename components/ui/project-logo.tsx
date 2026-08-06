import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Plaque blanche + logo produit, utilisée pour KLASSCI et WOURI sur les cartes
 * de réalisations et les héros d'études de cas. La plaque garantit le contraste
 * du logo, y compris sur les sections sombres.
 */
const VARIANTS = {
  /** Carte de la page /nos-realisations (fond clair). */
  card: {
    box: "h-12 w-12 rounded-xl p-1.5 bg-white border border-neutral-200 shadow-sm",
    image: "p-1",
    sizes: "96px",
  },
  /** Carte de la section « Projets vedettes » de l'accueil (fond sombre). */
  cardDark: {
    box: "h-12 w-12 rounded-xl p-1.5 bg-white shadow-lg",
    image: "p-1",
    sizes: "96px",
  },
  /** Héros d'une page étude de cas. */
  hero: {
    box: "h-20 w-20 md:h-24 md:w-24 rounded-2xl p-2 bg-white border border-neutral-200 shadow-sm",
    image: "p-2",
    sizes: "(max-width: 768px) 80px, 96px",
  },
} as const;

export type ProjectLogoVariant = keyof typeof VARIANTS;

interface ProjectLogoProps {
  src: string;
  variant?: ProjectLogoVariant;
  /**
   * Vide par défaut : le logo est toujours accolé au nom du produit, le
   * répéter ferait annoncer deux fois la même chose par un lecteur d'écran.
   */
  alt?: string;
  priority?: boolean;
  className?: string;
}

export function ProjectLogo({
  src,
  variant = "card",
  alt = "",
  priority = false,
  className,
}: ProjectLogoProps) {
  const { box, image, sizes } = VARIANTS[variant];

  return (
    <div className={cn("relative flex-shrink-0", box, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-contain", image)}
      />
    </div>
  );
}
