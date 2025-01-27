"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const Card = React.memo(
  ({
    member,
    index,
    hovered,
    setHovered,
  }: {
    member: TeamMember;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-xl relative overflow-hidden h-[32rem] w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover object-top absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex flex-col justify-end py-8 px-6 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-2xl font-bold text-white mb-2 font-['Open_Sans']">
          {member.name}
        </div>
        <div className="text-lg text-neutral-200 font-['Open_Sans']">
          {member.role}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export function TeamCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  const team: TeamMember[] = [
    {
      name: "Marcel Djedje-li",
      role: "Développeur Backend",
      image: "/img/marcel.jpg",
    },
    {
      name: "Thomas Dubois",
      role: "Designer UX/UI",
      image: "/img/team1.jpg",
    },
    {
      name: "Sophie Laurent",
      role: "Expert Marketing Digital",
      image: "/img/team2.jpg",
    },
  ];

  return (
    <section className="py-32 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-['Open_Sans'] bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-600"
        >
          Notre Équipe
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                member={member}
                index={index}
                hovered={hovered}
                setHovered={setHovered}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
