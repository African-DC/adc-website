import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // `(?:fr|en)/(?:.*/)?opengraph-image` : une image de partage dont l'adresse
    // porte déjà sa langue est servie telle quelle. Sans cette exclusion, le
    // préfixe `/fr` (langue par défaut, masquée) déclenchait une redirection
    // 307, que WhatsApp et Slack ne suivent pas toujours pour une image : le
    // lien s'affichait alors avec l'icône du site au lieu de sa carte.
    // Les adresses sans préfixe (articles) restent réécrites par le middleware.
    "/((?!api|_next/static|_next/image|favicon.ico|img|videos|fonts|icons|sitemap.xml|robots.txt|sw.js|manifest.json|(?:fr|en)/(?:.*/)?opengraph-image|.*\\..*).*)",
  ],
};
