"use client";

import { Footer } from "@/components/sections/footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ExpertiseSkeleton } from "@/components/ui/loading-skeletons";
import { NavigationMenuDemo } from "@/components/ui/navigation-menu-demo";
import { motion } from "framer-motion";
import { Globe, MessageSquare, Palette, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ContactModal } from "../../components/sections/contact-modal";

const ExpertiseCard = ({
  title,
  description,
  icon: Icon,
  image,
  className,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  className?: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 bg-white border border-neutral-200 dark:border-white/[0.2] justify-between flex flex-col ${className}`}
  >
    <div className="relative flex-1 p-4 min-h-0">
      <Image src={image} alt={title} fill className="object-cover rounded-lg" />
      <div className="absolute inset-0 bg-black/60 group-hover/bento:bg-black/70 transition-colors duration-300 rounded-lg" />
      <div className="relative h-full p-6 flex flex-col justify-end">
        <div className="flex items-center gap-4 mb-4">
          <Icon className="h-8 w-8 text-[#ff942b]" />
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
    </div>
  </motion.div>
);

export default function ExpertisePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ExpertiseSkeleton />;
  }

  const expertises = [
    {
      title: "Communication digitale",
      description:
        "Stratégie Digitale: Élaboration de stratégies sur mesure pour optimiser votre présence en ligne.",
      icon: MessageSquare,
      image: "/img/crea1.webp",
      className: "md:col-span-2",
    },
    {
      title: "Développement web",
      description:
        "Conception et développement de sites web performants et adaptés à vos objectifs.",
      icon: Globe,
      image: "/img/web-dev.jpg",
    },
    {
      title: "Création visuelle",
      description:
        "Conception de charte graphique et création de visuels sur tous supports.",
      icon: Palette,
      image: "/img/crea2.jpg",
      className: "md:col-span-3",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pb-[0.4rem] bg-gradient-to-r from-[#ff942b] to-orange-600 bg-clip-text text-transparent font-['Open_Sans']">
              Notre expertise
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto font-['Open_Sans']">
              Découvrez nos domaines d&apos;expertise et comment nous pouvons
              vous aider à atteindre vos objectifs digitaux.
            </p>
          </motion.div>

          <div className="grid auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {expertises.map((expertise) => (
              <ExpertiseCard key={expertise.title} {...expertise} />
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
                    Prêt à démarrer votre projet ?
                  </h3>
                </div>
                <p className="text-white/90 text-lg mb-8 max-w-2xl font-['Open_Sans']">
                  Transformez votre vision en réalité avec notre expertise.
                  Contactez-nous pour discuter de vos besoins et objectifs.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#ff942b] rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 font-['Open_Sans']"
                >
                  Démarrer maintenant
                  <span className="text-xl">→</span> 
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
