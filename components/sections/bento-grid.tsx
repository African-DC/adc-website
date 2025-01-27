"use client";

import { cn } from "@/lib/utils";
import {
  IconBrandFigma,
  IconBrandGoogle,
  IconBulb,
  IconDevices,
  IconPencil,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[24rem] grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 bg-white border border-neutral-200 dark:border-white/[0.2] justify-between flex flex-col h-full",
        className
      )}
    >
      <div className="flex-1 p-4 min-h-0">{header}</div>
      <div className="p-6 group-hover/bento:translate-x-2 transition duration-200 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <div className="font-['Open_Sans'] font-bold text-xl text-neutral-800">
            {title}
          </div>
        </div>
        <div className="font-['Open_Sans'] font-normal text-neutral-600 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

const ImageHeader = ({
  src,
  title,
  description,
  icon: Icon,
}: {
  src: string;
  title: string;
  description: string;
  icon: ReactNode;
}) => {
  return (
    <motion.div
      className="relative h-full w-full rounded-3xl overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={title}
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />
      <div className="relative h-full p-8 flex flex-col justify-end">
        <div className="flex items-center gap-4 mb-4">
          {Icon}
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export function ServicesGrid() {
  const services = [
    {
      title: "Stratégie Digitale",
      description:
        "Élaborez une stratégie numérique sur mesure pour atteindre vos objectifs commerciaux et maximiser votre présence en ligne.",
      header: (
        <ImageHeader
          src="/img/hero-background.jpg"
          title="Stratégie Digitale"
          description="Élaborez une stratégie numérique sur mesure pour atteindre vos objectifs commerciaux et maximiser votre présence en ligne."
          icon={<IconBulb className="h-8 w-8 text-[#ff942b]" />}
        />
      ),
    },
    {
      title: "Design UX/UI",
      description:
        "Concevez des interfaces utilisateur intuitives et esthétiques qui offrent une expérience utilisateur exceptionnelle.",
      header: (
        <ImageHeader
          src="/img/crea2.jpg"
          title="Design UX/UI"
          description="Concevez des interfaces utilisateur intuitives et esthétiques qui offrent une expérience utilisateur exceptionnelle."
          icon={<IconBrandFigma className="h-8 w-8 text-[#ff942b]" />}
        />
      ),
    },
    {
      title: "Solutions Digitales",
      description:
        "Développez des solutions numériques innovantes pour optimiser vos processus et améliorer votre efficacité opérationnelle.",
      header: (
        <ImageHeader
          src="/img/solution_digitale.jpg"
          title="Solutions Digitales"
          description="Développez des solutions numériques innovantes pour optimiser vos processus et améliorer votre efficacité opérationnelle."
          icon={<IconDevices className="h-8 w-8 text-[#ff942b]" />}
        />
      ),
      className: "md:row-span-2",
    },
    {
      title: "Création de Contenu",
      description:
        "Créez un contenu engageant et percutant qui résonne avec votre audience et renforce votre image de marque.",
      header: (
        <ImageHeader
          src="/img/creation_contenu.jpg"
          title="Création de Contenu"
          description="Créez un contenu engageant et percutant qui résonne avec votre audience et renforce votre image de marque."
          icon={<IconPencil className="h-8 w-8 text-[#ff942b]" />}
        />
      ),
    },
    {
      title: "Stratégie Marketing",
      description:
        "Optimisez votre présence en ligne et augmentez votre visibilité avec des stratégies marketing ciblées.",
      header: (
        <ImageHeader
          src="/img/crea1.webp"
          title="Stratégie Marketing"
          description="Optimisez votre présence en ligne et augmentez votre visibilité avec des stratégies marketing ciblées."
          icon={<IconBrandGoogle className="h-8 w-8 text-[#ff942b]" />}
        />
      ),
    },
  ];

  return (
    <section className="py-20 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-[#ff942b] to-orange-600 bg-clip-text text-transparent font-['Open_Sans']">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className={service.className}>
              {service.header}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
