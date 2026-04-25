"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getAllArticles, getArticleHref, localize } from "@/lib/blog";
import { track } from "@/lib/analytics/track";
import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const articles = getAllArticles();

export default function BlogPage() {
  const t = useTranslations("blogIndex");
  const localeRaw = useLocale();
  const locale = localeRaw === "en" ? "en" : "fr";
  const [featured, ...rest] = articles;

  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title={t("title")}
        subtitle={t("subtitle")}
        eyebrow={t("eyebrow")}
        breadcrumbs={[{ label: t("breadcrumb"), href: "/blog" }]}
      />

      <main className="overflow-hidden bg-white">
        <section className="py-16 md:py-20 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8 inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase">
              <span className="inline-block h-px w-10 bg-orange-500" />
              {t("featuredLabel")}
            </div>

            <m.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={getArticleHref(featured.slug) as "/blog"}
                onClick={() =>
                  track("blog_article_card_click", {
                    slug: featured.slug,
                    position: "featured",
                  })
                }
                className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 order-1 lg:order-2">
                  <Image
                    src={featured.hero.src}
                    alt={localize(featured.hero.alt, locale)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
                <div className="lg:order-1">
                  <div className="flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-neutral-500 mb-6">
                    <span className="text-orange-600 font-medium">
                      {localize(featured.category, locale)}
                    </span>
                    <span>·</span>
                    <time dateTime={featured.publishedAt}>
                      {localize(featured.publishedAtDisplay, locale)}
                    </time>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-neutral-950 mb-5 group-hover:text-orange-600 transition-colors">
                    {localize(featured.title, locale)}
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                    {localize(featured.excerpt, locale)}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:text-orange-600 transition-colors">
                    {t("read")}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </m.article>
          </div>
        </section>

        <section className="py-16 md:py-24 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 md:mb-16 inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase">
              <span className="inline-block h-px w-10 bg-orange-500" />
              {t("allLabel")}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-stretch">
              {rest.map((article, i) => (
                <m.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full"
                >
                  <Link
                    href={getArticleHref(article.slug) as "/blog"}
                    onClick={() =>
                      track("blog_article_card_click", {
                        slug: article.slug,
                        position: "list",
                        list_index: i,
                      })
                    }
                    className="group flex flex-col h-full"
                  >
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 mb-6">
                      <Image
                        src={article.hero.src}
                        alt={localize(article.hero.alt, locale)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-neutral-500 mb-4">
                      <span className="text-orange-600 font-medium">
                        {localize(article.category, locale)}
                      </span>
                      <span>·</span>
                      <time dateTime={article.publishedAt}>
                        {localize(article.publishedAtDisplay, locale)}
                      </time>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-medium leading-tight text-neutral-950 mb-3 group-hover:text-orange-600 transition-colors">
                      {localize(article.title, locale)}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-6 flex-1">
                      {localize(article.excerpt, locale)}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:text-orange-600 transition-colors mt-auto">
                      {t("read")}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </Link>
                </m.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-neutral-950 text-white relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-orange-500/15 blur-[140px] pointer-events-none"
          />
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-400 uppercase mb-6">
                  <span className="inline-block h-px w-10 bg-orange-400" />
                  {t("newsletter.eyebrow")}
                </div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] mb-4">
                  {t("newsletter.title")}{" "}
                  <em className="text-orange-400 font-normal">
                    {t("newsletter.titleEm")}
                  </em>
                  .
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                  {t("newsletter.description")}
                </p>
              </div>

              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function NewsletterForm() {
  const t = useTranslations("blogIndex.newsletter");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    track("newsletter_subscribe_attempt", { source: "blog_index" });

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY || "",
      );
      formData.append("subject", "Nouvelle inscription newsletter ADC");
      formData.append("from_website", "Site ADC - Newsletter");
      formData.append(
        "message",
        `Nouvelle inscription a la newsletter ADC: ${email}`,
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
        track("newsletter_subscribe_success", { source: "blog_index" });
      } else {
        throw new Error(data.message || "Erreur");
      }
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      setStatus("error");
      track("newsletter_subscribe_error", {
        source: "blog_index",
        error: String(err).slice(0, 100),
      });
    }
  };

  if (status === "success") {
    return (
      <div className="lg:col-span-5 border border-white/15 rounded-2xl p-6 bg-white/5">
        <p className="text-sm text-orange-300 tracking-wider uppercase mb-2">
          {t("successEyebrow")}
        </p>
        <p className="text-white/80 leading-relaxed">{t("successMessage")}</p>
      </div>
    );
  }

  return (
    <form
      className="lg:col-span-5 flex flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        {t("placeholder")}
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("placeholder")}
        disabled={status === "loading"}
        className="h-12 px-4 rounded-full bg-white/5 border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition-colors disabled:opacity-60"
      />
      <Button
        type="submit"
        variant="cta"
        size="cta"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>{t("submitting")}</span>
          </>
        ) : (
          <>
            <span>{t("submit")}</span>
            <ArrowUpRight className="h-4 w-4" />
          </>
        )}
      </Button>
      {status === "error" && (
        <p className="text-sm text-red-300 mt-1">
          {t("error")}{" "}
          <a
            href="mailto:africandigitconsulting@gmail.com"
            className="underline"
          >
            africandigitconsulting@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
