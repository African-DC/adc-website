"use client";

import { Footer } from "@/components/sections/footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { AboutSkeleton } from "@/components/ui/loading-skeletons";
import { NavigationMenuDemo } from "@/components/ui/navigation-menu-demo";
import { motion } from "framer-motion";
import { Sparkles, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <AboutSkeleton />;
  }

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
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 pb-[0.4rem] bg-gradient-to-r from-[#ff942b] to-orange-600 bg-clip-text text-transparent font-['Open_Sans']">
              Notre force
            </h1>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start gap-6">
                <Users className="h-12 w-12 text-[#ff942b] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4 font-['Open_Sans']">
                    Présentation de l&apos;équipe
                  </h2>
                  <p className="text-gray-600 leading-relaxed font-['Open_Sans']">
                    Notre équipe est composée de professionnels passionnés et
                    expérimentés dans le domaine du digital. Nous mettons notre
                    expertise au service de votre réussite pour vous accompagner
                    dans votre transformation numérique.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0">
                <Image
                  src="/img/CTA_image.jpg"
                  alt="Call to action background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff942b]/90 to-orange-600/90 mix-blend-multiply" />
              </div>
              <div className="relative p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                  <h3 className="text-2xl font-semibold text-white font-['Open_Sans']">
                    Rejoignez l&apos;aventure digitale
                  </h3>
                </div>
                <p className="text-white/90 text-lg mb-8 max-w-2xl font-['Open_Sans']">
                  Ensemble, créons des solutions innovantes qui transformeront
                  votre présence numérique.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#ff942b] rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 font-['Open_Sans']"
                >
                  Commencer la discussion
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
