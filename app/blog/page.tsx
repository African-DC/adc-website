"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import ScrollProgress from "@/components/ui/scroll-progress";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Article = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  href: string;
};

const articles: Article[] = [
  {
    title:
      "ADC au SIADE 2026 : deux IA africaines à l'épreuve de la souveraineté technologique",
    excerpt:
      "Retour sur notre participation à la 2e édition du Salon International de l'IA, de la Défense et de l'Espace, où nous avons présenté KLASSCI et WOURI.",
    image: "/img/blog/siade-hero.jpg",
    category: "Événements",
    date: "21 avril 2026",
    href: "/blog/siade-2026-abidjan",
  },
  {
    title: "KLASSCI à l'honneur chez Orange Business",
    excerpt:
      "Présentation de notre CRM éducatif lors du lancement de l'offre Internet Pro illimité, au siège Orange Village d'Abidjan.",
    image: "/img/blog/orange-village-hero.jpg",
    category: "Partenariats",
    date: "26 mars 2026",
    href: "/blog/klassci-orange-business-village",
  },
  {
    title: "ADC retenue en phase d'accélération du programme DigiGreen",
    excerpt:
      "Une opportunité majeure pour WOURI, notre agent IA dédié aux agriculteurs ivoiriens face au changement climatique. Partenaires : Orange, GIZ, Union européenne.",
    image: "/img/blog/digigreen-hero.jpg",
    category: "Accélération",
    date: "17 avril 2026",
    href: "/blog/digigreen-acceleration-wouri",
  },
  {
    title: "Digital Women for Access : première édition à Abidjan",
    excerpt:
      "Initiative portée par ADC pour rendre le numérique plus accessible aux femmes ivoiriennes. Formation, mise en réseau, acculturation digitale.",
    image: "/img/blog/digital-women.webp",
    category: "Initiatives",
    date: "Juin 2024",
    href: "/blog/digital-women-for-access",
  },
  {
    title:
      "ADC au Salon des opportunités publiques et privées de l'entrepreneur",
    excerpt:
      "Participation à la deuxième édition de ce rendez-vous qui réunit PME, institutions publiques et bailleurs autour de l'entrepreneuriat ivoirien.",
    image: "/img/blog/salon-entrepreneur.webp",
    category: "Entrepreneuriat",
    date: "Mai 2024",
    href: "/blog/salon-opportunites-entrepreneur",
  },
  {
    title: "Webinar : une vision pour l'Afrique numérique",
    excerpt:
      "Notre équipe partage sa lecture des défis et des opportunités du digital en Afrique francophone : souveraineté, IA, transformation réelle.",
    image: "/img/blog/webinar-afrique.jpg",
    category: "Vision",
    date: "Mars 2024",
    href: "/blog/webinar-afrique-numerique",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title="Le journal."
        subtitle="Nos observations sur le digital africain, entre pratique du terrain et regard critique."
        eyebrow="Blog · Actualités"
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />

      <main className="overflow-hidden bg-white">
        {/* ===================== FEATURED ===================== */}
        <section className="py-16 md:py-20 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8 inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase">
              <span className="inline-block h-px w-10 bg-orange-500" />
              À la une
            </div>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={featured.href}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 order-1 lg:order-2">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
                <div className="lg:order-1">
                  <div className="flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-neutral-500 mb-6">
                    <span className="text-orange-600 font-medium">
                      {featured.category}
                    </span>
                    <span>·</span>
                    <time>{featured.date}</time>
                  </div>
                  <h2
                    className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-neutral-950 mb-5 group-hover:text-orange-600 transition-colors"
                  >
                    {featured.title}
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:text-orange-600 transition-colors">
                    Lire l'article
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          </div>
        </section>

        {/* ===================== LIST ===================== */}
        <section className="py-16 md:py-24 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 md:mb-16 inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase">
              <span className="inline-block h-px w-10 bg-orange-500" />
              Tous les articles
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-stretch">
              {rest.map((article, i) => (
                <motion.article
                  key={article.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full"
                >
                  <Link
                    href={article.href}
                    className="group flex flex-col h-full"
                  >
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 mb-6">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-neutral-500 mb-4">
                      <span className="text-orange-600 font-medium">
                        {article.category}
                      </span>
                      <span>·</span>
                      <time>{article.date}</time>
                    </div>
                    <h3
                      className="font-serif text-2xl md:text-3xl font-medium leading-tight text-neutral-950 mb-3 group-hover:text-orange-600 transition-colors"
                    >
                      {article.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-6 flex-1">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:text-orange-600 transition-colors mt-auto">
                      Lire l'article
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== NEWSLETTER ===================== */}
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
                  Restez connecté
                </div>
                <h2
                  className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] mb-4"
                >
                  Une newsletter,{" "}
                  <em className="text-orange-400 font-normal">
                    une fois par mois
                  </em>
                  .
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                  Nos observations, nos chantiers en cours, et les
                  apprentissages qu'on a envie de partager. Pas de spam,
                  désinscription en un clic.
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
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY || ""
      );
      formData.append("subject", "Nouvelle inscription newsletter ADC");
      formData.append("from_website", "Site ADC - Newsletter");
      formData.append(
        "message",
        `Nouvelle inscription a la newsletter ADC: ${email}`
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        throw new Error(data.message || "Erreur");
      }
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="lg:col-span-5 border border-white/15 rounded-2xl p-6 bg-white/5">
        <p className="text-sm text-orange-300 tracking-wider uppercase mb-2">
          Merci !
        </p>
        <p className="text-white/80 leading-relaxed">
          Votre inscription est bien enregistrée. Vous recevrez notre
          prochaine édition dans votre boîte.
        </p>
      </div>
    );
  }

  return (
    <form
      className="lg:col-span-5 flex flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Votre adresse email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre@email.com"
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
            <span>Inscription…</span>
          </>
        ) : (
          <>
            <span>S'abonner</span>
            <ArrowUpRight className="h-4 w-4" />
          </>
        )}
      </Button>
      {status === "error" && (
        <p className="text-sm text-red-300 mt-1">
          Une erreur s'est produite. Réessayez ou écrivez-nous à{" "}
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
