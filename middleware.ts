import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|img|videos|fonts|icons|sitemap.xml|robots.txt|sw.js|manifest.json|.*\\..*).*)",
  ],
};
