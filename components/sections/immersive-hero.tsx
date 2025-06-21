"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Award, ArrowRight, Sparkles, Check, Clock, Users, Monitor } from "lucide-react";

export function ImmersiveHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  const heroImages = [
    "/img/header_img/Mockup tshirt Mima makeup (1).jpg",
    "/img/header_img/Interface 1.jpeg",
    "/img/header_img/525ae4d7-9437-4dbe-b25c-ce1ee913dc17.jpg",
  ];
  
  const heroTitles = [
    { text: "Design", color: "from-pink-400 to-purple-600" },
    { text: "Développement", color: "from-blue-400 to-cyan-600" },
    { text: "Stratégie", color: "from-orange-400 to-red-600" },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="grad1" cx="0%" cy="0%" r="100%" fx="0%" fy="0%">
                <stop offset="0%" style={{ stopColor: '#FF942B', stopOpacity: 0.15 }} />
                <stop offset="100%" style={{ stopColor: '#FF942B', stopOpacity: 0 }} />
              </radialGradient>
              <radialGradient id="grad2" cx="100%" cy="100%" r="100%" fx="100%" fy="100%">
                <stop offset="0%" style={{ stopColor: '#FF4B2B', stopOpacity: 0.15 }} />
                <stop offset="100%" style={{ stopColor: '#FF4B2B', stopOpacity: 0 }} />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad1)" />
            <rect width="100%" height="100%" fill="url(#grad2)" />
          </svg>
        </div>
        
        {/* Grille subtile */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        {/* Cercles décoratifs */}
        <div className="absolute -top-20 right-20 w-[400px] h-[400px] bg-orange-200 rounded-full opacity-10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-orange-300 rounded-full opacity-10 blur-[120px]"></div>
      </div>
      
      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          {/* Contenu textuel */}
          <motion.div 
            ref={textRef}
            style={{ opacity, y }}
            className="w-full lg:w-1/2 mt-10 lg:mt-0 relative"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center rounded-full px-4 py-1.5 mb-6 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200"
            >
              <span className="inline-block mr-2 p-1 rounded-full bg-orange-500/20">
                <Award className="h-3.5 w-3.5 text-orange-600" />
              </span>
              <span className="text-sm font-medium text-orange-800 uppercase tracking-wider">Agence Primée</span>
            </motion.div>
            
            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              <span className="text-black">L'expertise digitale pour</span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="absolute inset-0 flex items-center">
                  <span className="h-[40%] w-full bg-orange-100 opacity-70 absolute bottom-0"></span>
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`relative inline-block bg-gradient-to-r ${heroTitles[activeIndex].color} text-transparent bg-clip-text`}
                  >
                    {heroTitles[activeIndex].text}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              <span className="text-black">en Afrique</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 text-lg text-gray-600 max-w-md"
            >
              Africa Digit Consulting transforme votre présence numérique avec des solutions personnalisées qui répondent aux défis spécifiques du marché africain.
            </motion.p>
            
            {/* Points clés */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                { icon: <Users className="h-5 w-5" />, text: "Équipe locale d'experts" },
                { icon: <Monitor className="h-5 w-5" />, text: "Solutions personnalisées" },
                { icon: <Check className="h-5 w-5" />, text: "Qualité internationale" },
                { icon: <Clock className="h-5 w-5" />, text: "Support réactif" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-1.5 rounded-full bg-orange-100 text-orange-600">
                    {item.icon}
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Boutons d'action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link 
                href="/contact"
                className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-xl flex items-center gap-2 transition-all shadow-sm hover:shadow-lg hover:shadow-orange-500/20"
              >
                <span>Démarrer un projet</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <Link 
                href="#services" 
                className="group relative px-8 py-3.5 bg-white text-gray-700 font-medium rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-200"
              >
                <span className="relative z-10 group-hover:text-orange-600 transition-colors">
                  Découvrir nos services
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>
            </motion.div>
            
            {/* Éléments d'accréditation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-16 pt-6 border-t border-gray-100"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Globe className="h-4 w-4 text-orange-500" />
                <span>Experts en communication digitale en Afrique</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">8+</div>
                  <div className="text-xs text-gray-500 mt-1">Années d'expérience</div>
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-xs text-gray-500 mt-1">Projets réalisés</div>
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-xs text-gray-500 mt-1">Clients satisfaits</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Section images */}
          <motion.div 
            style={{ scale }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Image principale */}
            <div className="relative h-[500px] w-full overflow-hidden">
              <div className="relative z-20 w-full h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroImages[activeIndex]}
                      alt={`Africa Digit Consulting - ${heroTitles[activeIndex].text}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Indicateurs de diapositive */}
                <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-30">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === activeIndex
                          ? "bg-white scale-125"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Voir l'image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Effet de profondeur */}
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl transform rotate-1 scale-[0.99] -translate-x-2 translate-y-3 opacity-20 blur-md"></div>
            </div>
            
            {/* Badge flottant */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-6 -right-3 md:right-12 bg-white rounded-xl shadow-lg py-3 px-4 z-30 transform rotate-2"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-full text-white">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Une approche créative</div>
                  <div className="text-xs text-gray-500">pour votre succès digital</div>
                </div>
              </div>
            </motion.div>
            
            {/* Élément décoratif */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute -top-10 -left-4 md:left-10 w-24 h-24 border-4 border-orange-200 rounded-full opacity-50"
            ></motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Section clients */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 mt-12"
      >
        <div className="text-center mb-10">
          <div className="text-sm uppercase tracking-wider text-gray-500 font-medium">
            Ils nous font confiance
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {[
            { name: "Idée d'Afrique", src: "/img/clients/Idée d'Afrique.jpg" },
            { name: "Mima Makeup", src: "/img/clients/Logo Mima Makeup.jpg" },
            { name: "Konaté Marine Logistics", src: "/img/header_img/Logo Komate marine logistics-04 (1).jpg" },
            { name: "Bit Color", src: "/img/clients/BIT COLOR.jpg" }
          ].map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="w-28 h-16 relative grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            >
              <Image
                src={client.src}
                alt={client.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* CSS pour la grille */}
      <style jsx>{`
        .bg-grid-pattern {
          background-size: 30px 30px;
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
} 