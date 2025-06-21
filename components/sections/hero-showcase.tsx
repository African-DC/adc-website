"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, Star, Target, Zap, Shapes, MessageSquareText, Code, Globe, BarChart } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export function HeroShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Liste des images disponibles pour le fallback
  const fallbackImages = [
    "/img/header_img/Interface 1.jpeg",
    "/img/header_img/Interface 2.jpeg",
    "/img/header_img/PHOTO-2024-03-23-08-22-55.jpg"
  ];
  
  // Image principale avec un fallback
  const [mainImage, setMainImage] = useState("/img/header_img/fedex5.jpg");
  
  // Gestion du chargement de l'image avec fallback
  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      // Si l'image principale ne charge pas, utiliser une image de fallback
      const randomIndex = Math.floor(Math.random() * fallbackImages.length);
      setMainImage(fallbackImages[randomIndex]);
    };
    img.src = mainImage;
  }, [mainImage]);

  // Données des services de l'entreprise
  const services = [
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "Développement Web",
      description: "Sites vitrines, e-commerce, applications web sur mesure adaptés à vos besoins",
      color: "from-blue-500 to-blue-600",
      value: "96%"
    },
    {
      icon: <MessageSquareText className="h-6 w-6 text-white" />,
      title: "Community Management",
      description: "Gestion des réseaux sociaux, création de contenu et stratégie d'engagement",
      color: "from-orange-500 to-orange-600",
      value: "85%"
    },
    {
      icon: <Shapes className="h-6 w-6 text-white" />,
      title: "Design Graphique",
      description: "Création d'identité visuelle, logos, flyers et supports de communication",
      color: "from-purple-500 to-pink-500",
      value: "92%"
    },
    {
      icon: <BarChart className="h-6 w-6 text-white" />,
      title: "Marketing Digital",
      description: "Stratégies digitales, référencement SEO et campagnes publicitaires",
      color: "from-green-500 to-emerald-600",
      value: "88%"
    }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden" ref={containerRef}>
      {/* Fond dynamique avec gradient amélioré */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100">
        {/* Cercles de couleur en arrière-plan améliorés */}
        <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-orange-300 rounded-full opacity-15 blur-[120px] mix-blend-multiply animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-red-300 rounded-full opacity-15 blur-[100px] mix-blend-multiply animate-pulse-slow"></div>
        
        {/* Motif de points avec animation subtile */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-pattern"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-24 pb-16 md:pt-28 md:pb-24">
        {/* En-tête de la page avec sparkle */}
        <div className="relative mb-12 text-center">
          {/* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center shadow-lg shadow-orange-200/30">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-orange-400" />
            </motion.div>
          </div> */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-600 px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-sm"
          >
            <Star className="h-4 w-4 fill-orange-500" />
            <span>Agence de communication digitale</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 mx-auto max-w-3xl"
          >
            Votre partenaire digital 
            <span className="relative ml-3">
              complet
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute -bottom-2 left-0 w-full"
                width="100%"
                height="10"
                viewBox="0 0 100 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0 5C20 -2 40 12 60 5C80 -2 90 12 100 5"
                  stroke="#FF942B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">pour l'Afrique</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Africa Digit Consulting transforme votre présence numérique avec des solutions intégrées, de la conception à la gestion, adaptées au marché africain.
          </motion.p>
        </div>
        
        {/* Grille de services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`bg-gradient-to-r ${service.color} h-2 w-full`}></div>
              <div className="p-6">
                <div className={`bg-gradient-to-r ${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-500">Satisfaction client</div>
                  <div className="text-sm font-bold text-gray-900">{service.value}</div>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full mt-2">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: service.value }}
                    transition={{ duration: 1.2, delay: 1 + index * 0.2 }}
                    className={`h-full rounded-full bg-gradient-to-r ${service.color}`}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Section projet et image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-orange-100/50 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Notre mission</h2>
              <p className="text-gray-600 mb-6">
                Nous créons des solutions digitales qui renforcent votre présence en ligne et boostent votre croissance. Notre approche combine expertise technique, créativité et connaissance approfondie du marché africain.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {[
                  { value: "8+", label: "Années d'expertise" },
                  { value: "50+", label: "Projets réalisés" },
                  { value: "95%", label: "Clients satisfaits" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-white/80 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#services" className="relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-transform group-hover:translate-y-0 translate-y-full"></div>
                  <div className="relative px-6 py-3 bg-white text-gray-800 font-medium rounded-full border border-gray-200 shadow-md flex items-center gap-2 group-hover:text-orange-500 transition-colors">
                    <span>Explorer nos services</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </Link>
                
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/20 transition-all shadow-md">
                  <span>Démarrer un projet</span>
                  <Zap className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image avec citation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] md:h-[500px] order-1 lg:order-2"
          >
            <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl shadow-xl">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-orange-50 to-orange-100">
                  <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              <div className="relative w-full h-full">
                <Image
                  src={mainImage}
                  alt="Interface digitale"
                  fill
                  className="object-cover"
                  onLoad={() => setImageLoaded(true)}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                
                {/* Overlay avec citation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10">
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="text-lg md:text-xl font-medium text-white leading-relaxed"
                    >
                      « Le but de la vie, ce n'est pas l'espoir de devenir parfait, c'est la volonté d'être toujours meilleur. »
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.3 }}
                      className="text-sm text-white/80 mt-2"
                    >
                      Ralph Waldo Emerson
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Badge flottant */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-6 -right-6 z-20"
            >
              <div className="bg-white rounded-2xl shadow-lg px-4 py-3 border border-orange-100 flex items-center gap-3">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-full">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Solutions adaptées</div>
                  <div className="text-xs text-gray-500">pour le marché africain</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* CSS pour le motif de grille et animations */}
      <style jsx>{`
        .bg-grid-pattern {
          background-size: 30px 30px;
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.2;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
} 