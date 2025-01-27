"use client";

import { Footer } from "@/components/sections/footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { BlogSkeleton } from "@/components/ui/loading-skeletons";
import { NavigationMenuDemo } from "@/components/ui/navigation-menu-demo";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const BlogCard = ({
  title,
  description,
  image,
  delay,
}: {
  title: string;
  description: string;
  image: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
  >
    <div className="relative h-48">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3 font-['Open_Sans']">{title}</h3>
      <p className="text-gray-600 text-sm font-['Open_Sans']">{description}</p>
      <a
        href="#"
        className="inline-block mt-4 text-[#ff942b] font-semibold hover:text-orange-600 transition-colors font-['Open_Sans']"
      >
        Lire la suite →
      </a>
    </div>
  </motion.div>
);

export default function BlogPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <BlogSkeleton />;
  }

  const articles = [
    {
      title: "Article 1",
      description:
        "Organisation de la première édition de Digital Women for Access",
      image: "/img/crea1.webp",
    },
    {
      title: "Article 2",
      description:
        "Participation à la deuxième édition du salon des opportunités publiques et privées de l'entrepreneur",
      image: "/img/crea2.jpg",
    },
    {
      title: "Article 3",
      description: "Webinar (vision Afrique numérique)",
      image: "/img/crea3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex flex-col">
      <NavigationMenuDemo />
      <main className="pt-24 pb-16 px-4 flex-grow">
        <div className="mt-8">
          <Breadcrumbs />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pb-[0.4rem] bg-gradient-to-r from-[#ff942b] to-orange-600 bg-clip-text text-transparent font-['Open_Sans'] leading-tight">
              Blog
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto font-['Open_Sans']">
              Découvrez nos derniers articles et actualités
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <BlogCard key={article.title} {...article} delay={index * 0.2} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0">
                <Image
                  src="/img/CTA_image.jpg"
                  alt="Newsletter background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff942b]/90 to-orange-600/90 mix-blend-multiply" />
              </div>
              <div className="relative p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                  <h3 className="text-2xl font-semibold text-white font-['Open_Sans']">
                    Restez connecté
                  </h3>
                </div>
                <p className="text-white/90 text-lg mb-8 max-w-2xl font-['Open_Sans']">
                  Abonnez-vous à notre newsletter pour recevoir en
                  avant-première nos dernières actualités et conseils
                  d&apos;experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="flex-grow px-6 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors font-['Open_Sans']"
                  />
                  <button className="px-8 py-3 bg-white text-[#ff942b] rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 whitespace-nowrap font-['Open_Sans']">
                    S&apos;abonner
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
