"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useAnimation,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Award, Globe } from "lucide-react";

// Liste des clients (corrigée avec des chemins d'images valides)
const clients = [
  {
    name: "Mima Makeup",
    logo: "/img/header_img/Logo Mima makeup_Plan de travail 1.jpg",
    industry: "Cosmétique",
    year: "2023",
    website: "#",
  },
  {
    name: "Konate Marine Logistics",
    logo: "/img/header_img/Logo Komate marine logistics-04 (1).jpg",
    industry: "Logistique",
    year: "2022",
    website: "#",
  },
  {
    name: "Fedex Côte d'Ivoire",
    logo: "/img/header_img/Post Konate marine log.jpg",
    industry: "Transport & Livraison",
    year: "2023",
    website: "#",
  },
  {
    name: "Volaille d'Or",
    logo: "/img/header_img/2faf4b9d-0ae4-4f01-a304-a58805df757b.jpg",
    industry: "Agroalimentaire",
    year: "2022",
    website: "#",
  },
  {
    name: "Cannelles Editions",
    logo: "/img/header_img/34c46d2a-8da2-4882-a625-6f8802bd641c.jpg",
    industry: "Édition",
    year: "2023",
    website: "#",
  },
  {
    name: "FEJECI",
    logo: "/img/header_img/PHOTO-2024-03-23-08-22-55.jpg",
    industry: "Organisation",
    year: "2023",
    website: "#",
  },
];

export function ClientLogos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying] = useState(true);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Pour le compteur d'animation
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const progress = useMotionValue(0);

  // Effet pour le défilement automatique
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  // Effet pour animer le compteur lors du changement d'index
  useEffect(() => {
    const animation = animate(count, currentIndex, {
      duration: 0.5,
      ease: "easeInOut",
    });

    return animation.stop;
  }, [currentIndex]);

  // Effet pour animer la barre de progression
  useEffect(() => {
    animate(progress, currentIndex / (clients.length - 1), {
      duration: 0.5,
      ease: "easeInOut",
    });
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculer la position des éléments dans le carousel 3D
  const getCarouselItemStyle = (index: number) => {
    const diff = index - currentIndex;
    const rotateY = diff * 25; // rotation en degrés
    const translateZ = Math.abs(diff) * -100; // profondeur
    const opacity = 1 - Math.min(Math.abs(diff) * 0.25, 0.7); // opacité basée sur la distance
    const scale = 1 - Math.min(Math.abs(diff) * 0.1, 0.3); // échelle basée sur la distance

    // Utiliser will-change uniquement pour les éléments visibles pour optimiser les performances
    const willChange = Math.abs(diff) < 3 ? "transform, opacity" : "auto";

    return {
      transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
      opacity,
      zIndex: clients.length - Math.abs(diff),
      willChange,
    };
  };

  // Filtrer les logos par secteur
  const filterByIndustry = (industry: string | null) => {
    setActiveFeature(industry);
    if (!industry) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.1 },
      });
      return;
    }

    controls.start((i) => {
      const item = clients[i];
      if (item.industry === industry) {
        return { opacity: 1, y: 0, scale: 1.05, transition: { duration: 0.3 } };
      }
      return { opacity: 0.3, y: 0, scale: 0.95, transition: { duration: 0.3 } };
    });
  };

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-orange-50 via-orange-100 to-amber-100">
      {/* Effet de grille en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF8A0012_1px,transparent_1px),linear-gradient(to_bottom,#FF8A0012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-orange-400 rounded-full opacity-15 blur-[200px]"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-amber-300 rounded-full opacity-20 blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 px-6 py-2 rounded-full mb-6 border border-orange-300"
          >
            <Star className="h-4 w-4 fill-orange-600 text-orange-600" />
            <span className="font-medium uppercase text-xl">Nos clients</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-800 bg-clip-text text-transparent"
          >
            Ils nous font confiance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-orange-800/70 max-w-2xl mx-auto text-lg"
          >
            Découvrez les entreprises qui ont choisi notre expertise pour leur
            transformation digitale
          </motion.p>
        </div>

        {/* Showcase 3D */}
        <div className="mt-10 mb-20 relative" ref={containerRef}>
          {/* Filtres */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <button
              onClick={() => filterByIndustry(null)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
                activeFeature === null
                  ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-300/30"
                  : "border-orange-200 text-orange-700 hover:border-orange-500 hover:bg-orange-100"
              }`}
            >
              Tous
            </button>
            {Array.from(new Set(clients.map((c) => c.industry))).map(
              (industry) => (
                <button
                  key={industry}
                  onClick={() => filterByIndustry(industry)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
                    activeFeature === industry
                      ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-300/30"
                      : "border-orange-200 text-orange-700 hover:border-orange-500 hover:bg-orange-100"
                  }`}
                >
                  {industry}
                </button>
              )
            )}
          </motion.div>

          {/* Carousel 3D */}
          <div className="relative h-[400px] w-full perspective-1000 mb-12">
            <div
              ref={carouselRef}
              className="h-full w-full transform-style-3d transition-transform duration-500 ease-out relative"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  className="absolute top-0 left-0 w-full h-full backface-hidden p-4 cursor-pointer"
                  style={{
                    ...getCarouselItemStyle(index),
                    transition: "all 0.5s ease-out",
                    transformOrigin: "center center -200px",
                    willChange:
                      Math.abs(index - currentIndex) < 2
                        ? "transform, opacity"
                        : "auto",
                  }}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 h-full flex flex-col items-center justify-center border border-orange-200 overflow-hidden group relative hover:border-orange-500 transition-all duration-300 shadow-xl">
                    {/* Effet de lumière sur hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-300 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500 group-hover:blur-lg"></div>

                    <div className="relative h-32 w-full my-4">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === currentIndex}
                        loading={index === currentIndex ? "eager" : "lazy"}
                        className="object-contain"
                        quality={index === currentIndex ? 85 : 60}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-orange-900 mb-2 mt-4">
                      {client.name}
                    </h3>
                    <p className="text-orange-700 text-sm bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                      {client.industry}
                    </p>

                    <div className="mt-6 pt-6 border-t border-orange-100 w-full flex justify-between items-center">
                      <div className="flex items-center gap-2 text-orange-700 text-sm">
                        <Award className="h-4 w-4 text-orange-500" />
                        <span>Client depuis {client.year}</span>
                      </div>

                      <div className="flex items-center gap-2 text-orange-700 text-sm">
                        <Globe className="h-4 w-4 text-orange-500" />
                        <span>Voir le projet</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contrôles de navigation */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10">
              <button
                onClick={handlePrev}
                aria-label="Précédent"
                className="h-12 w-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-orange-200 text-orange-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-md"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10">
              <button
                onClick={handleNext}
                aria-label="Suivant"
                className="h-12 w-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-orange-200 text-orange-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-md"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mb-8">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Voir le client ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-10 bg-orange-500"
                    : "bg-orange-200 hover:bg-orange-300"
                }`}
              />
            ))}
          </div>

          {/* Barre de progression */}
          <div className="w-full max-w-md mx-auto h-1 bg-orange-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
              style={{ width: useTransform(progress, (v) => `${v * 100}%`) }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
