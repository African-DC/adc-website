"use client";

import { Check, Star, ChevronRight, ArrowRight, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

// Définition des types pour l'offre
export interface Offre {
  title: string;
  price: string;
  type: string;
  isPopular: boolean;
  features: string[];
  secondaryPrice?: string;
}

const FeatureRow = ({ feature }: { feature: string }) => (
  <motion.div 
    className="flex items-start gap-3 group" 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
  >
    <div className="bg-orange-100 rounded-full p-1.5 group-hover:bg-orange-600 transition-colors duration-300">
      <Check className="h-3 w-3 text-orange-600 group-hover:text-white" />
    </div>
    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
  </motion.div>
);

interface OffreCardProps {
  title: string;
  price: string;
  features: string[];
  type: string;
  secondaryPrice?: string;
  delay: number;
  isPopular?: boolean;
  onClick: () => void;
  onSelect: () => void;
}

const OffreCard = ({
  title,
  price,
  features,
  type,
  secondaryPrice,
  delay,
  isPopular = false,
  onClick,
  onSelect,
}: OffreCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: delay * 0.15 }}
    viewport={{ once: true }}
    whileHover={{ y: -10, transition: { duration: 0.2 } }}
    className={cn(
      "relative z-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500",
      isPopular ? "md:-mt-6 md:mb-6" : ""
    )}
  >
    {isPopular && (
      <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center py-2 text-sm font-semibold uppercase tracking-wider">
        Recommandé
      </div>
    )}
    
    <div className={cn(
      "bg-white p-7 md:p-8",
      isPopular ? "pt-12" : ""
    )}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="title-small text-gray-900">{title}</h3>
        <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs md:text-sm font-medium rounded-full">
          {type}
        </span>
      </div>

      <div className="mb-8">
        <div className="flex items-end gap-2">
          <div className="text-4xl md:text-5xl font-bold text-gray-900">{price}</div>
          {type === "MENSUEL" && (
            <div className="text-gray-500 mb-1">/mois</div>
          )}
        </div>
        {secondaryPrice && (
          <div className="text-base md:text-lg font-medium text-orange-600 mt-2">
            {secondaryPrice}
          </div>
        )}
      </div>

      <div className="space-y-3 mb-8 min-h-[180px] md:min-h-[220px]">
        {features.slice(0, 4).map((feature, index) => (
          <FeatureRow key={index} feature={feature} />
        ))}
        {features.length > 4 && (
          <div className="text-sm text-orange-600 font-medium mt-2 flex items-center gap-1 cursor-pointer hover:underline" onClick={onClick}>
            <span>Voir plus de fonctionnalités</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onSelect}
        className={cn(
          "w-full py-3 rounded-xl text-center font-medium transition-colors duration-300",
          isPopular
            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-orange-300/40"
            : "bg-orange-100 text-orange-600 hover:bg-orange-200"
        )}
      >
        Sélectionner cette offre
      </motion.button>
    </div>
  </motion.div>
);

const OffreDetailsModal = ({ 
  offre, 
  onClose,
  onSelect
}: { 
  offre: Offre; 
  onClose: () => void;
  onSelect: () => void;
}) => {
  if (!offre) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="title-small text-2xl text-gray-900">{offre.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-orange-600 transition-colors p-1"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          <h4 className="font-medium text-orange-600">Toutes les fonctionnalités incluses:</h4>
          {offre.features.map((feature, index) => (
            <FeatureRow key={index} feature={feature} />
          ))}
        </div>
        
        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSelect}
            className="w-full py-3 rounded-xl text-center font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
          >
            Sélectionner cette offre
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export function OffresSection() {
  const router = useRouter();
  const [selectedOffre, setSelectedOffre] = useState<Offre | null>(null);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const offres = [
    {
      title: "Offre Evolus",
      price: "50.000 Xof",
      type: "MENSUEL",
      isPopular: false,
      features: [
        "Analyse générale de la communication digitale de l'entreprise",
        "Création et/ou administration d'une page réseau social",
        "Un boost visibilité par mois",
        "08 créations visuelles",
      ],
    },
    {
      title: "Offre Glory",
      price: "110.000 Xof",
      type: "MENSUEL",
      isPopular: true,
      features: [
        "Analyse générale de la communication digitale de l'entreprise",
        "Création et/ou administration de deux pages réseaux sociaux",
        "Un boost visibilité par mois",
        "Conception de deux (2) vidéos",
        "16 créations visuelles",
        "Veille concurrentielle",
      ],
    },
    {
      title: "Offre Warrior",
      price: "450.000 Xof",
      secondaryPrice: "300.000 Xof / mensuel",
      type: "SOUSCRIPTION",
      isPopular: false,
      features: [
        "Analyse générale de la communication digitale de l'entreprise",
        "Création et/ou administration de deux pages réseaux sociaux",
        "Un boost visibilité par mois",
        "Refonte ou création de site internet",
        "Conception de quatre (4) vidéos",
        "16 créations visuelles",
        "Création ou refonte d'un site internet vitrine",
        "Optimisation du référencement naturel sur les moteurs de recherches (Google et Safari)",
        "Veille concurrentielle",
      ],
    },
  ];

  const handleSelectOffre = (offre: Offre) => {
    // Sauvegarde l'offre sélectionnée dans localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedOffre', JSON.stringify({
        title: offre.title,
        price: offre.price,
        type: offre.type,
        secondaryPrice: offre.secondaryPrice || '',
      }));
      
      // Rediriger vers la page de contact
      router.push('#contact');
      
      // Fermer le modal si ouvert
      setSelectedOffre(null);
    }
  };

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-white"> 
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-orange-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-orange-200 rounded-full opacity-30 blur-3xl"></div>
      
      <motion.div style={{ y }} className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-2 rounded-full mb-6"
          >
            <Star className="h-4 w-4 fill-orange-600 text-orange-600" />
            <span className="font-medium uppercase text-xl">Nos formules</span>
          </motion.div>
          
          {/* <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="title-large text-5xl md:text-6xl font-bold mb-6"
          >
            Découvrez nos offres
          </motion.h2> */}
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="body-text text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Des solutions complètes et adaptées à vos besoins spécifiques. Choisissez l'offre qui correspond à vos objectifs et commencez votre transformation digitale dès aujourd'hui.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {offres.map((offre, index) => (
            <OffreCard
              key={offre.title}
              {...offre}
              delay={index}
              onClick={() => setSelectedOffre(offre)}
              onSelect={() => handleSelectOffre(offre)}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-6">
            Vous ne trouvez pas l'offre qui vous convient?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
          >
            <span>Contactez-nous pour une offre personnalisée</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>
      
      {/* Éléments décoratifs */}
      <div className="hidden md:block absolute top-1/4 left-0 -translate-x-1/2 w-[300px] h-[300px] border-2 border-orange-200 rounded-full opacity-60"></div>
      <div className="hidden md:block absolute bottom-1/3 right-0 translate-x-1/3 w-[200px] h-[200px] border-2 border-orange-200 rounded-full opacity-60"></div>
      
      {selectedOffre && (
        <OffreDetailsModal 
          offre={selectedOffre} 
          onClose={() => setSelectedOffre(null)} 
          onSelect={() => handleSelectOffre(selectedOffre)}
        />
      )}
    </section>
  );
}
