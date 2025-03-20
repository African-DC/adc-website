"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Zap, BarChart, Code, Shapes, Target } from "lucide-react";

const services = [
  {
    icon: <Globe className="h-6 w-6" />,
    name: "Stratégie digitale",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Code className="h-6 w-6" />,
    name: "Solutions web",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Shapes className="h-6 w-6" />,
    name: "Design créatif",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    name: "Marketing",
    color: "from-green-500 to-emerald-400"
  },
];

export function HeroBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] bg-orange-400 rounded-full opacity-10 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-orange-500 rounded-full opacity-5 blur-[150px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-red-400 rounded-full opacity-5 blur-[100px]"></div>
        
        {/* Pattern géométrique */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-4 h-4 bg-orange-500 rounded-full"></div>
          <div className="absolute top-40 left-40 w-6 h-6 bg-orange-600 rounded-full"></div>
          <div className="absolute top-60 left-80 w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="absolute bottom-40 right-40 w-5 h-5 bg-orange-500 rounded-full"></div>
          <div className="absolute bottom-80 right-80 w-4 h-4 bg-red-600 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-6 h-6 bg-orange-400 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 lg:py-32 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-3 mb-6">
            <span className="bg-orange-100 text-orange-600 text-sm font-medium px-4 py-1.5 rounded-full">African Digit Consulting</span>
              <div className="h-px w-12 bg-orange-300"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              <span className="block relative">
                L'expertise 
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">digitale</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-orange-200 rounded-lg opacity-50"></span>
                </span>
              </span>
              <span className="block">qui transforme</span>
              <span className="block">votre vision</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">
              Une agence réunissant un consortium d'experts africains dans les métiers du digital. Nous sommes spécialisés en communication digitale ainsi qu'en conception et développement de solutions numériques.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="#contact" className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium px-8 py-4 rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-orange-200/40 transition-all">
                <span>Démarrer un projet</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <Link href="#services" className="bg-white text-gray-800 font-medium px-8 py-4 rounded-full border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all">
                Nos services
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-wrap gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className={`bg-gradient-to-r ${service.color} p-2 rounded-lg text-white`}>
                  {service.icon}
                </div>
                <span className="font-medium">{service.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Mosaïque d'images de réalisations */}
            {/* Image secondaire en arrière-plan */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -right-10 -top-10 z-0 w-[65%] h-[300px] rounded-xl overflow-hidden shadow-xl transform rotate-6"
            >
              <Image 
                src="/img/header_img/Mockup tshirt Mima makeup (1).jpg" 
                alt="Produits digitaux africains"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-right"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
            </motion.div>

            {/* Image réalisation flyer */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -left-12 top-20 z-10 w-[120px] h-[180px] rounded-lg overflow-hidden shadow-lg transform -rotate-6"
            >
              <Image 
                src="/img/header_img/Flyers .jpeg" 
                alt="Flyer design"
                fill
                sizes="120px"
                loading="lazy"
                className="object-cover"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>

            {/* Image réalisation carte de visite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -left-5 bottom-40 z-10 w-[140px] h-[100px] rounded-lg overflow-hidden shadow-lg transform rotate-12"
            >
              <Image 
                src="/img/header_img/Carte de visite .jpeg" 
                alt="Carte de visite design"
                fill
                sizes="140px"
                loading="lazy"
                className="object-cover"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>

            {/* Image réalisation logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute right-0 top-10 z-10 w-[80px] h-[80px] rounded-full overflow-hidden shadow-lg border-2 border-white"
            >
              <Image 
                src="/img/header_img/Logo Komate marine logistics-04 (1).jpg" 
                alt="Logo design"
                fill
                sizes="80px"
                loading="lazy"
                className="object-cover"
                quality={75}
              />
            </motion.div>

            {/* Image réalisation mockup casquette */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="absolute -right-10 bottom-32 z-20 w-[130px] h-[130px] rounded-lg overflow-hidden shadow-lg transform rotate-12"
            >
              <Image 
                src="/img/header_img/Mockup Casquette.jpg" 
                alt="Mockup casquette"
                fill
                sizes="130px"
                loading="lazy"
                className="object-cover"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
            </motion.div>

            {/* Image principale */}
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-2 z-10">
              <Image 
                src="/img/header_img/02b21557-4e81-46dd-ac22-bd57b7f78d13.jpg" 
                alt="Équipe digital africaine"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                className="object-cover"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
            </div>
            
            {/* Image réalisation interface */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="absolute -top-8 left-10 z-20 w-[180px] h-[100px] rounded-lg overflow-hidden shadow-lg transform -rotate-3"
            >
              <Image 
                src="/img/header_img/Interface 2.jpeg" 
                alt="Interface design"
                fill
                sizes="180px"
                loading="lazy"
                className="object-cover"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
            </motion.div>

            {/* Image produit cosmétique */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="absolute -bottom-10 right-32 z-20 w-[100px] h-[100px] rounded-lg overflow-hidden shadow-lg transform -rotate-6"
            >
              <Image 
                src="/img/header_img/cosmetic-jar-mockup_53876-66986.jpg" 
                alt="Product design"
                fill
                sizes="100px"
                loading="lazy"
                className="object-cover"
                quality={75}
              />
            </motion.div>
            
            {/* Effet de lumière */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-orange-300 rounded-full opacity-30 blur-3xl z-0"></div>
            <div className="absolute top-1/4 left-0 w-40 h-40 bg-orange-400 rounded-full opacity-20 blur-3xl z-0"></div>
            
            {/* Logo superposé sur l'image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <div className="bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-lg">
                <Image 
                  src="/img/logoadc.png"
                  alt="Africa Digit Consulting"
                  width={200}
                  height={100}
                  className="w-auto h-auto"
                />
              </div>
            </motion.div>
            
            {/* Éléments flottants */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 z-30 transform -rotate-3"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-medium">Solutions innovantes</div>
                <div className="text-xs text-gray-500">+200 projets réalisés</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-5 -right-5 bg-white p-3 rounded-xl shadow-xl z-30 transform rotate-3"
            >
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg text-white">
                  <Target className="h-5 w-5" />
                </div>
                <div className="text-sm font-medium">Expertise africaine</div>
              </div>
              <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[95%] bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Overlay diagonal */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white transform -skew-y-3 translate-y-12"></div>
    </section>
  );
} 