import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/blog";

/**
 * Un `Disallow` n'empêche pas l'indexation, il empêche l'exploration : Google
 * ne lit plus la page, mais peut quand même indexer son adresse si elle est
 * liée ailleurs. C'est le motif « Indexée malgré le blocage par le fichier
 * robots.txt » de la Search Console.
 *
 * `/_next/` était bloqué ici. C'est pourtant là que vivent le CSS, le
 * JavaScript et toutes les images optimisées (`/_next/image?url=…`) : Google
 * ne pouvait ni afficher les pages correctement, ni lire les images, dont les
 * adresses, liées depuis chaque page, finissaient indexées sans contenu. Il ne
 * faut pas le rebloquer.
 *
 * `/api/` reste bloqué : aucune page n'y renvoie, rien n'y est à indexer.
 * La directive `Host` n'est lue que par Yandex ; le canonique se déclare par
 * les balises `link rel=canonical`.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
