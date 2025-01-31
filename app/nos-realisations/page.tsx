"use client";

import { Footer } from "@/components/sections/footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { RealisationsSkeleton } from "@/components/ui/loading-skeletons";
import { NavigationMenuDemo } from "@/components/ui/navigation-menu-demo";
import { motion } from "framer-motion";
import { FileText, Globe, Image as ImageIcon, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SolutionsModal } from "../../components/sections/solutions-modal";

const ProjectCard = ({
  title,
  description,
  icon: Icon,
  image,
  delay,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
  >
    <div className="relative h-48">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <Icon className="absolute bottom-4 left-4 h-8 w-8 text-white" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3 font-['Open_Sans']">{title}</h3>
      <p className="text-gray-600 text-sm font-['Open_Sans']">{description}</p>
    </div>
  </motion.div>
);

export default function RealisationsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSolutionsModalOpen, setIsSolutionsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <RealisationsSkeleton />;
  }

  const projects = [
    {
      title: "Sites web",
      description: "La présentation de tous les projets sites internets.",
      icon: Globe,
      image: "/img/web-dev.jpg",
    },
    {
      title: "Pages en gestion",
      description:
        "Les comptes et page que nous gérons et que nous avons gérer",
      icon: FileText,
      image: "/img/marketing.jpg",
    },
    {
      title: "Créations visuelles",
      description: "Les affiches et vidéos réalisées",
      icon: ImageIcon,
      image: "/img/design.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex flex-col">
      <NavigationMenuDemo />
      <main className="pt-24 pb-16 px-4 flex-grow">
        <div className="mt-8">
          <Breadcrumbs />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pb-[0.4rem] bg-gradient-to-r from-[#ff942b] to-orange-600 bg-clip-text text-transparent font-['Open_Sans']">
              Nos réalisations
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto font-['Open_Sans']">
              Découvrez nos projets et réalisations dans différents domaines du
              digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 0.2}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0">
                <Image
                  src="/img/CTA_image.jpg"
                  alt="Call to action background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff942b]/90 to-orange-600/90 mix-blend-multiply" />
              </div>
              <div className="relative p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                  <h3 className="text-2xl font-semibold text-white font-['Open_Sans']">
                    Découvrez nos solutions
                  </h3>
                </div>
                <p className="text-white/90 text-lg mb-8 max-w-2xl font-['Open_Sans']">
                  Explorez notre gamme complète de solutions digitales et
                  trouvez celle qui correspond parfaitement à vos besoins.
                </p>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSolutionsModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#ff942b] rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 font-['Open_Sans'] cursor-pointer"
                >
                  Explorer nos solutions
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <SolutionsModal 
        isOpen={isSolutionsModalOpen} 
        onClose={() => setIsSolutionsModalOpen(false)} 
      />
    </div>
  );
}
