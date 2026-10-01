import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { Footer } from "@/components/sections/footer";

const PATHS = [
  { key: "work", href: "/nos-realisations" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <>
      <NavbarDemo />
      <main className="bg-neutral-50">
        <section className="max-w-7xl mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-32">
          <p className="font-sans text-sm text-neutral-600 mb-6">{t("eyebrow")}</p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium leading-[1.05] text-neutral-950 max-w-3xl text-balance">
            {t("title")}{" "}
            <em className="text-orange-700 font-normal">{t("titleEm")}</em>
          </h1>
          <p className="mt-6 text-lg text-neutral-700 max-w-xl">{t("lead")}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 h-12 text-white font-medium hover:bg-neutral-800 transition-colors"
            >
              {t("home")}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
            {PATHS.map((p) => (
              <Link
                key={p.key}
                href={p.href}
                className="text-neutral-900 underline decoration-orange-500 decoration-2 underline-offset-4 hover:text-orange-700"
              >
                {t(p.key)}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
