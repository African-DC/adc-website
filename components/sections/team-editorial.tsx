"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { track } from "@/lib/analytics/track";

type Member = {
  slug: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
};

const team: Member[] = [
  {
    slug: "marcel-djedje-li",
    name: "Marcel Djedje-li",
    role: "Chef du département développement",
    image: "/img/TEAM_ADC/marcel.webp",
    linkedin: "https://www.linkedin.com/in/marcel-djedje-li-099490235/",
  },
  {
    slug: "bede-abel-josias",
    name: "Bede Abel Josias",
    role: "Manager général · Transformation digitale",
    image: "/img/TEAM_ADC/BEDE Abel Josias Manager.webp",
    linkedin: "https://www.linkedin.com/in/abel-josias-bede-2372a0255/",
  },
  {
    slug: "yablai-ruben-virgil",
    name: "Yablai Ruben Virgil",
    role: "Développeur frontend",
    image: "/img/TEAM_ADC/ruben-Photoroom.webp",
    linkedin:
      "https://www.linkedin.com/in/yablai-ruben-virgil-yablai-b1657b1a9/",
  },
  {
    slug: "issouf-ouedraogo",
    name: "Issouf Ouedraogo",
    role: "Développeur full-stack · Administrateur de base de données",
    image: "/img/TEAM_ADC/issouf-ouedraogo.jpg",
    linkedin: "https://www.linkedin.com/in/issouf-ouedraogo-riqa/",
  },
  {
    slug: "hermann-kore",
    name: "Hermann Koré",
    role: "Commercial",
    image: "/img/TEAM_ADC/hermann-kore.webp",
  },
  {
    slug: "meledje-bythia",
    name: "Meledje Bythia",
    role: "Assistante de direction",
    image: "/img/TEAM_ADC/MELEDJE BYTHIA Assiatnte de direction .webp",
  },
];

export function TeamEditorial() {
  return (
    <section
      className={`relative py-24 md:py-36 bg-white overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 md:mb-24 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-600 uppercase mb-8"
            >
              <span className="inline-block h-px w-10 bg-orange-500" />
              Notre équipe
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] text-neutral-950"
            >
              Dix experts.{" "}
              <em className="text-orange-500 font-normal">Une boussole.</em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 lg:pl-10 lg:border-l border-neutral-300"
          >
            <p className="text-lg text-neutral-600 leading-relaxed">
              Développeur, stratège, gestionnaire de projet. Une équipe jeune,
              basée dans le Sud-Comoé, qui croit que la technologie la plus utile est
              celle qui sait rester simple.
            </p>
          </motion.div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-20">
          {team.map((member, i) => (
            <motion.figure
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Info */}
              <figcaption>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3
                      className="font-serif text-xl md:text-2xl font-medium text-neutral-950 leading-tight mb-1"
                    >
                      {member.name}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-snug">
                      {member.role}
                    </p>
                  </div>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn ${member.name}`}
                      onClick={() =>
                        track("home_team_card_click", { member: member.slug })
                      }
                      className="mt-1 inline-flex items-center justify-center h-8 w-8 rounded-full border border-neutral-200 text-neutral-500 hover:border-orange-500 hover:text-orange-600 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
