"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { OptimizedImage } from "../ui/optimized-image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
};

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    image: string;
    bio?: string;
  };
  index: number;
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeInOut",
      }}
      className="group relative rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="aspect-square relative overflow-hidden">
        <OptimizedImage
          src={member.image}
          alt={member.name}
          size="medium"
          priority={index < 3}
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          fill
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-xl text-orange-800">{member.name}</h3>
        <p className="text-gray-600 mb-2">{member.role}</p>
        {member.bio && (
          <p className="text-gray-700 text-sm line-clamp-3">{member.bio}</p>
        )}
      </div>
    </motion.div>
  );
}

export function TeamCards() {
  const team: TeamMember[] = [
    {
      name: "Marcel Djedje-li",
      role: "Développeur Backend",
      image: "/img/TEAM_ADC/marcel.jpeg",
      bio: "Expert en développement de backend robustes et performants. Marcel possède une solide expérience dans la conception d'architectures système évolutives et sécurisées.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Yablai Yablai Ruben Virgil",
      role: "Développeur Frontend",
      image: "/img/TEAM_ADC/ruben-Photoroom.png",
      bio: "Passionné par l'expérience utilisateur et les interfaces modernes, Ruben excelle dans la création d'applications web réactives et intuitives.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Bede Abel Josias",
      role: "Manager General & Spécialiste en transformation digitale",
      image: "/img/TEAM_ADC/BEDE Abel Josias Manager.jpg",
      bio: "Visionnaire et stratège, Abel dirige l'équipe ADC avec passion et expertise. Il accompagne les entreprises dans leur transformation digitale avec une approche sur mesure.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "N'thomeny N'guessan Arvigne",
      role: "Responsable Développement Web",
      image: "/img/TEAM_ADC/Arvigne N'guessan Integrateur de solution.jpg",
      bio: "Intégrateur de solutions expérimenté, Arvigne dirige le département développement web avec rigueur et créativité, assurant l'excellence technique de chaque projet.",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "KIGNIELMAN KONE",
      role: "Social Media Manager",
      image: "/img/TEAM_ADC/KIGNIELMAN KONE SMM ADC.jpg",
      bio: "Expert en stratégies de médias sociaux, Kignielman crée des campagnes engageantes et analyse les tendances pour maximiser la visibilité digitale de nos clients.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "MELEDJE BYTHIA",
      role: "Assistante de Direction",
      image: "/img/TEAM_ADC/MELEDJE BYTHIA Assiatnte de direction .jpg",
      bio: "Organisée et polyvalente, Bythia coordonne efficacement les opérations internes et assure une communication fluide entre les différents départements.",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Siloue Joël",
      role: "Graphiste",
      image: "/img/TEAM_ADC/Siloue Joël Graphiste.jpg",
      bio: "Créatif et talentueux, Joël conçoit des identités visuelles uniques et des supports graphiques percutants qui captivent et communiquent avec impact.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-orange-50 overflow-hidden relative">
      {/* Éléments décoratifs */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-orange-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full opacity-15 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-orange-300 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-red-400 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-2 rounded-full mb-6"
          >
            <span className="font-medium uppercase text-xl">Notre Équipe
            </span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl"
          >
            Une équipe jeune qui respire et inspire la créativité, l'originalité, le sérieux et le professionnalisme.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {team.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
