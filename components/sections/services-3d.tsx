"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Sparkles, LucideIcon, Globe, Code, Palette, Share, Zap, ArrowRight, LightbulbIcon, BarChart } from "lucide-react";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    title: "Stratégie Digitale",
    description: "Développez une présence en ligne cohérente avec une stratégie adaptée à vos objectifs.",
    icon: <Globe className="h-6 w-6" />,
    bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600",
    textColor: "text-blue-600",
    image: "/img/services/strategie.jpeg",
    features: ["Audit de présence digitale", "KPIs & Analytics", "Plan d'action stratégique"]
  },
  {
    title: "Développement Web",
    description: "Des solutions techniques robustes pour optimiser votre présence digitale et vos processus.",
    icon: <Code className="h-6 w-6" />,
    bgColor: "bg-gradient-to-br from-purple-400 to-indigo-600",
    textColor: "text-purple-600",
    image: "/img/services/solution_digitale.jpeg",
    features: ["Sites responsifs", "Applications web", "Intégration CRM/ERP"]
  },
  {
    title: "Création Graphique",
    description: "Designs visuels impactants qui renforcent votre image de marque et captent l'attention.",
    icon: <Palette className="h-6 w-6" />,
    bgColor: "bg-gradient-to-br from-pink-400 to-red-600",
    textColor: "text-pink-600",
    image: "/img/services/creation_de_contenu.jpeg",
    features: ["Identité visuelle", "Supports marketing", "Motion design"]
  },
  {
    title: "Community Management",
    description: "Gestion professionnelle de vos réseaux sociaux pour augmenter votre visibilité.",
    icon: <Share className="h-6 w-6" />,
    bgColor: "bg-gradient-to-br from-green-400 to-emerald-600",
    textColor: "text-green-600",
    image: "/img/services/gestion_de_reseaux.jpeg",
    features: ["Planning éditorial", "Création de contenu", "Gestion de communauté"]
  }
];

export function Services3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Arrière-plan dynamique */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200 rounded-full mix-blend-multiply opacity-20 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-200 rounded-full mix-blend-multiply opacity-20 blur-[100px]"></div>
      </div>
      
      {/* Motif de fond */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <motion.div 
        style={{ y }}
        className="max-w-7xl mx-auto px-4 relative z-10"
      >
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full bg-orange-100 text-orange-600 font-medium">
            <Sparkles className="h-4 w-4" />
            <span>SERVICES PROFESSIONNELS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">expertise</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions digitales adaptées aux défis spécifiques des entreprises africaines, 
            avec une approche locale et une vision globale.
          </p>
        </motion.div>
        
        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 50
              }}
              whileHover={{ 
                translateY: -15,
                transition: { 
                  duration: 0.3,
                  type: "tween",
                  ease: "easeOut" 
                }
              }}
              className="group h-full preserve-3d"
            >
              <div className="card-body h-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 transform hover:shadow-xl">
                {/* Image avec overlay */}
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 opacity-80 group-hover:opacity-90 transition-opacity duration-300" style={{ background: `linear-gradient(to bottom, transparent, ${service.bgColor.split(' ')[2]})` }}></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ background: service.bgColor.split(' ')[2] }}>
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 group-hover:${service.textColor} transition-colors`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center ${service.textColor.replace('text', 'bg')}/20`}>
                          <Zap className={`h-2.5 w-2.5 ${service.textColor}`} />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Call to action */}
                <div className="px-6 pb-6 mt-auto">
                  <Link href="/notre-expertise" className="group/link flex items-center text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">
                    <span>Découvrir</span>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="ml-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </div>
                
                {/* Background accent */}
                <div className="absolute inset-x-0 bottom-0 h-1 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" style={{ background: service.bgColor.split(' ')[2] }}></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Link 
            href="/notre-expertise"
            className="inline-flex items-center gap-2 px-8 py-4 font-medium text-white rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-md hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
          >
            <span>Explorer toutes nos solutions</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
        
        {/* Métriques */}
        <div className="mt-24 pt-16 border-t border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { icon: <LightbulbIcon className="h-7 w-7" />, value: "+30", label: "Projets réalisés", color: "bg-blue-100 text-blue-600" },
              { icon: <Sparkles className="h-7 w-7" />, value: "+10", label: "Experts digitaux", color: "bg-purple-100 text-purple-600" },
              { icon: <BarChart className="h-7 w-7" />, value: "+50%", label: "Croissance annuelle", color: "bg-red-100 text-red-600" },
              { icon: <Globe className="h-7 w-7" />, value: "+5", label: "Pays africains", color: "bg-green-100 text-green-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all text-center"
              >
                <div className={`w-14 h-14 rounded-full ${stat.color} mx-auto mb-5 flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      {/* CSS classes */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
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