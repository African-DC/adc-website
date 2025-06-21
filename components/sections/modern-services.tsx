"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Globe, Code, PenTool, Share2, BrainCircuit, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Stratégie des moyens digitaux",
    description: "Élaborez une stratégie digitale sur mesure pour atteindre vos objectifs de visibilité, de notoriété et d'engagement.",
    gradient: "from-blue-500 to-cyan-400",
    image: "/img/services/strategie.jpeg",
    features: ["Audit de présence digitale", "Définition des KPIs", "Plan d'action"]
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Solutions Digitales",
    description: "Développez des solutions innovantes (site internet, CRM, ERP, LMS…) qui optimisent vos processus.",
    gradient: "from-purple-500 to-indigo-500",
    image: "/img/services/solution_digitale.jpeg",
    features: ["Développement sur mesure", "Intégration", "Optimisation"]
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Création de Contenu",
    description: "Créez des contenus visuels percutants qui mettent en valeur votre marque et communiquent efficacement.",
    gradient: "from-rose-400 to-red-500",
    image: "/img/services/creation_de_contenu.jpeg",
    features: ["Design graphique", "Montage vidéo", "Production audio"]
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Gestion des réseaux sociaux",
    description: "Optimisez votre présence en ligne et augmentez votre visibilité avec notre service de community management.",
    gradient: "from-emerald-400 to-green-500",
    image: "/img/services/gestion_de_reseaux.jpeg",
    features: ["Planning éditorial", "Création de posts", "Analyse de performance"]
  }
];

export function ModernServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section 
      ref={containerRef}
      id="services" 
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-orange-50"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-orange-200 rounded-full mix-blend-multiply opacity-20 blur-[120px] transform -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-200 rounded-full mix-blend-multiply opacity-20 blur-[100px] transform translate-x-1/3"></div>
      </div>
      
      {/* Dots pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none"></div>
      
      <motion.div 
        style={{ y }} 
        className="max-w-7xl mx-auto px-4 relative z-10"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 text-sm font-medium">
            <BrainCircuit className="mr-2 h-4 w-4" />
            SOLUTIONS ADAPTÉES À L'AFRIQUE
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions digitales adaptées aux défis spécifiques des entreprises de notre continent.
          </p>
        </motion.div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Service image */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <div className={`inline-flex items-center justify-center p-3 mb-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                
                {/* Service content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Fonctionnalités</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <Zap className="h-4 w-4 mr-2 text-orange-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* <div className="mt-6 pt-4 border-t border-gray-100">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      <span>En savoir plus</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.button>
                  </div> */}
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/0 to-red-500/0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            href="/notre-expertise"
            className="inline-flex items-center gap-2 px-8 py-4 font-medium text-white rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
          >
            <span>Voir toutes nos expertises</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
      
      {/* CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-size: 30px 30px;
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
} 