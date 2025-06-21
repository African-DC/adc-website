"use client";

import { cn } from "@/lib/utils";
import {
  IconBrandFigma,
  IconBrandGoogle,
  IconBulb,
  IconChevronRight,
  IconDevices,
  IconPencil,
  IconRocket,
  IconArrowRight,
  IconStar,
} from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ReactNode, useRef } from "react";

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  imageUrl,
  index,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  imageUrl: string;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col md:flex-row gap-8 items-center"
    >
      <div
        className={`order-2 ${isEven ? "md:order-2" : "md:order-1"} md:w-1/2`}
      >
        <div className="backdrop-blur-md bg-white/10 p-6 md:p-10 rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center bg-orange-600 rounded-xl w-12 h-12 text-white">
              {Icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 title-small group-hover:text-orange-600 transition-colors duration-300">
              {title}
            </h3>
          </div>
          <p className="body-text text-gray-600 mb-8">{description}</p>
          {/* <motion.div 
            className="flex items-center gap-2 text-orange-600 font-medium cursor-pointer w-fit"
            whileHover={{ x: 5 }}
          >
            <span>En savoir plus</span>
            <IconArrowRight className="h-4 w-4" />
          </motion.div> */}
        </div>
      </div>
      <div
        className={`order-1 ${isEven ? "md:order-1" : "md:order-2"} md:w-1/2`}
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: isEven ? -2 : 2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="relative h-64 md:h-80 w-full overflow-hidden rounded-3xl"
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white w-full">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">{title}</h4>
                <div className="flex items-center gap-1">
                  <IconStar className="h-4 w-4 text-orange-400 fill-orange-400" />
                  <IconStar className="h-4 w-4 text-orange-400 fill-orange-400" />
                  <IconStar className="h-4 w-4 text-orange-400 fill-orange-400" />
                  <IconStar className="h-4 w-4 text-orange-400 fill-orange-400" />
                  <IconStar className="h-4 w-4 text-orange-400 fill-orange-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export function ServicesGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const services = [
    {
      title: "Stratégie des moyens digitaux",
      description:
        "Élaborez une stratégie des moyens digitaux sur mesure pour atteindre vos objectifs de visibilité, de notoriété et d'engagement, tout en maximisant votre présence en ligne.",
      icon: <IconBulb className="h-6 w-6" />,
      imageUrl: "/img/services/strategie.jpeg",
    },
    {
      title: "Solutions Digitales",
      description:
        "Développez des solutions digitales sur mesure (site internet, CRM, ERP, LMS…), innovantes, qui corresponde à votre vision. Ainsi optimiser vos processus et améliorer votre efficacité opérationnelle.",
      icon: <IconDevices className="h-6 w-6" />,
      imageUrl: "/img/services/solution_digitale.jpeg",
    },
    {
      title: "Création de Contenu",
      description:
        "Créez des contenus visuels (infographies, affiches, logos, vidéos hero, carrousels…) qui mettent en valeur votre marque, communiquent la pertinence de vos services et renforcent votre image de marque.",
      icon: <IconPencil className="h-6 w-6" />,
      imageUrl: "/img/services/creation_de_contenu.jpeg",
    },
    {
      title: "Gestion des réseaux sociaux",
      description:
        "Optimisez votre présence en ligne et augmentez votre visibilité et notoriété avec notre service de community management axer sur le résultat.",
      icon: <IconBrandGoogle className="h-6 w-6" />,
      imageUrl: "/img/services/gestion_de_reseaux.jpeg",
    },
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-32 bg-gradient-to-b from-white to-orange-50 overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="max-w-7xl mx-auto px-4 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-orange-100 text-orange-600 px-6 py-2 rounded-full inline-flex items-center gap-2">
              <IconStar className="h-4 w-4 fill-orange-600" />
              <span className="font-medium uppercase text-xl">
                nos services
              </span>
            </div>
          </div>
          {/* <h2 className="title-large text-5xl md:text-6xl font-bold mb-8 text-gradient">
            Nos Expertises
          </h2> */}
          <p className="body-text text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions adaptées aux défis des entreprises de notre continent.
          </p>
        </motion.div>

        <div className="flex flex-col gap-20 lg:gap-32">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-400 rounded-full filter blur-[150px] opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-400 rounded-full filter blur-[150px] opacity-20"></div>
    </section>
  );
}
