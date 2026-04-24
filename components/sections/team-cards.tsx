"use client";

import { motion } from "framer-motion";
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
  member: TeamMember;
  index: number;
}

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeInOut",
      }}
      className="relative h-[380px] rounded-2xl overflow-hidden group"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

      {/* Image */}
      <div className="absolute inset-0 transition-transform duration-700 ease-in-out transform group-hover:scale-110">
        <OptimizedImage
          src={member.image}
          alt={member.name}
          size="medium"
          priority={index < 3}
          className="object-cover"
          fill
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transition-all duration-500 ease-in-out">
        <div className="transition-all duration-500 transform group-hover:-translate-y-2">
          <h3 className="font-bold text-2xl text-white mb-1">{member.name}</h3>
          <div className="w-10 h-1 bg-orange-500 rounded mb-3 transition-all duration-500 group-hover:w-16"></div>
          <p className="text-orange-300 font-medium mb-3">{member.role}</p>

          <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-24">
            {member.bio && (
              <p className="text-white/80 text-sm mb-4">{member.bio}</p>
            )}

            {member.social && (
              <div className="flex gap-3 mt-3">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="text-white hover:text-orange-400 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    className="text-white hover:text-orange-400 transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    className="text-white hover:text-orange-400 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function TeamCards() {
  const team: TeamMember[] = [
    {
      name: "Marcel Djedje-li",
      role: "Développeur Backend",
      image: "/img/TEAM_ADC/marcel.webp",
      bio: "Expert en développement de backend robustes et performants. Marcel possède une solide expérience dans la conception d'architectures système évolutives et sécurisées.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Yablai Yablai Ruben Virgil",
      role: "Développeur Frontend",
      image: "/img/TEAM_ADC/ruben-Photoroom.webp",
      bio: "Passionné par l'expérience utilisateur et les interfaces modernes, Ruben excelle dans la création d'applications web réactives et intuitives.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Bede Abel Josias",
      role: "Manager General & Spécialiste en transformation digitale",
      image: "/img/TEAM_ADC/BEDE Abel Josias Manager.webp",
      bio: "Visionnaire et stratège, Abel dirige l'équipe ADC avec passion et expertise. Il accompagne les entreprises dans leur transformation digitale avec une approche sur mesure.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "N'thomeny N'guessan Arvigne",
      role: "Responsable Développement Web",
      image: "/img/TEAM_ADC/Arvigne-N_guessan.webp",
      bio: "Intégrateur de solutions expérimenté, Arvigne dirige le département développement web avec rigueur et créativité, assurant l'excellence technique de chaque projet.",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "MELEDJE BYTHIA",
      role: "Assistante de Direction",
      image: "/img/TEAM_ADC/MELEDJE BYTHIA Assiatnte de direction .webp",
      bio: "Organisée et polyvalente, Bythia coordonne efficacement les opérations internes et assure une communication fluide entre les différents départements.",
      social: {
        linkedin: "#",
      },
    },
    {
      name: "Siloue Joël",
      role: "Graphiste",
      image: "/img/TEAM_ADC/SiloueJoel.webp",
      bio: "Créatif et talentueux, Joël conçoit des identités visuelles uniques et des supports graphiques percutants qui captivent et communiquent avec impact.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-orange-50 to-orange-100 relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-orange-300/20 blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-orange-400/10 blur-3xl"></div>
        <div className="absolute top-[40%] left-[30%] w-40 h-40 rounded-full bg-orange-500/10 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[20%] w-72 h-72 rounded-full bg-orange-200/30 blur-3xl"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-sm font-medium mb-3">
              Notre Équipe
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Une équipe passionnée{" "}
            <span className="text-orange-600">à votre service</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Une équipe jeune qui respire et inspire la créativité,
            l'originalité, le sérieux et le professionnalisme.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { TeamMemberCard };
