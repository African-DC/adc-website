"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const OffreCard = ({
  title,
  price,
  features,
  type,
  secondaryPrice,
  delay,
}: {
  title: string;
  price: string;
  features: string[];
  type: string;
  secondaryPrice?: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-2xl font-bold text-[#ff942b]">{title}</h3>
      <span className="px-4 py-1.5 bg-orange-100 text-[#ff942b] text-sm font-semibold rounded-full">
        {type}
      </span>
    </div>

    <div className="mb-8">
      <div className="text-4xl font-bold text-gray-900">{price}</div>
      {secondaryPrice && (
        <div className="text-lg font-semibold text-[#ff942b] mt-2">
          {secondaryPrice}
        </div>
      )}
    </div>

    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3 group">
          <div className="bg-orange-100 rounded-full p-1 group-hover:bg-[#ff942b] transition-colors duration-300">
            <Check className="h-4 w-4 text-[#ff942b] group-hover:text-white" />
          </div>
          <span className="text-gray-600">{feature}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export function OffresSection() {
  const offres = [
    {
      title: "Offre Evolus",
      price: "50.000 Xof",
      type: "MENSUEL",
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

  return (
    <section className="bg-[#f2f2f2] py-24"> 
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-[0.4rem] bg-gradient-to-r from-[#ff942b] to-orange-600 bg-clip-text text-transparent font-['Open_Sans']">
            Nos Offres 
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-['Open_Sans']">
            Découvrez nos offres adaptées à vos besoins et objectifs. Chaque offre est personnalisable selon vos exigences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offres.map((offre, index) => (
            <OffreCard
              key={offre.title}
              {...offre}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
