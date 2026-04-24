"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ExternalLink, Tag, EyeIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollProgress from "@/components/ui/scroll-progress";
import Link from "next/link";

// Définition des catégories
const categories = [
  "Tous",
  "Web Design",
  "Branding",
  "Social Media",
  "Graphisme",
  // "Développement"
];

// Définition des projets
const projects = [
  {
    id: 1,
    title: "Mima Makeup",
    category: "Branding",
    thumbnail: "/img/header_img/Logo Mima makeup_Plan de travail 1.jpg",
    fullImage: "/img/header_img/Logo Mima makeup_Plan de travail 1.jpg",
    description:
      "Création d'une identité visuelle complète pour une marque de cosmétiques premium.",
    client: "Mima Makeup",
    year: "2023",
    tags: ["Logo", "Identité visuelle", "Packaging"],
  },
  {
    id: 2,
    title: "Mima Collection",
    category: "Branding",
    thumbnail: "/img/header_img/Mockup tshirt Mima makeup (1).jpg",
    fullImage: "/img/header_img/Mockup tshirt Mima makeup (1).jpg",
    description:
      "Conception et développement d'une boutique en ligne responsive avec système de paiement sécurisé.",
    client: "Mima Collection",
    year: "2023",
    tags: ["Logo", "Identité visuelle", "Packaging"],
  },
  {
    id: 3,
    title: "Campagne merchandising Mima",
    category: "Graphisme",
    thumbnail: "/img/header_img/Mockup Casquette.jpg",
    fullImage: "/img/header_img/Mockup Casquette.jpg",
    description:
      "Création d'une gamme de produits dérivés pour renforcer l'identité de la marque.",
    client: "Mima Makeup",
    year: "2023",
    tags: ["Merchandising", "Design produit"],
  },
  {
    id: 4,
    title: "Konate Marine Logistics",
    category: "Branding",
    thumbnail: "/img/header_img/LogoKomatemarine.jpg",
    fullImage: "/img/header_img/LogoKomatemarine.jpg",
    description:
      "Création d'une identité visuelle moderne pour une entreprise de logistique maritime.",
    client: "KML",
    year: "2022",
    tags: ["Logo", "Charte graphique", "Cartes de visite"],
  },
  {
    id: 5,
    title: "Campagne Marketing KML",
    category: "Social Media",
    thumbnail: "/img/header_img/Post Konate marine log.jpg",
    fullImage: "/img/header_img/Post Konate marine log.jpg",
    description:
      "Stratégie de contenu pour les réseaux sociaux et création de visuels pour une visibilité accrue.",
    client: "Konate Marine Logistics",
    year: "2022",
    tags: ["Posts réseaux sociaux", "Stratégie contenu"],
  },
  {
    id: 6,
    title: "Flyers Promotionnels KML",
    category: "Graphisme",
    thumbnail: "/img/header_img/Flyers konate marine logistics.jpg",
    fullImage: "/img/header_img/Flyers konate marine logistics.jpg",
    description:
      "Conception de supports imprimés pour une campagne marketing ciblée.",
    client: "Konate Marine Logistics",
    year: "2022",
    tags: ["Print", "Flyers", "Marketing direct"],
  },
  {
    id: 7,
    title: "Site web FEJECI",
    category: "Web Design",
    thumbnail: "/img/header_img/PHOTO-2024-03-23-08-22-55.jpg",
    fullImage: "/img/header_img/PHOTO-2024-03-23-08-22-55.jpg",
    description:
      "Développement d'un site web moderne et responsive pour une association de jeunes entrepreneurs.",
    client: "FEJECI",
    year: "2023",
    tags: ["Web Design", "React", "Responsive"],
  },
  {
    id: 8,
    title: "Idée d'Afrique",
    category: "Graphisme",
    thumbnail: "/img/header_img/Flyers .jpeg",
    fullImage: "/img/header_img/Flyers .jpeg",
    description:
      "Conception de supports imprimés pour une campagne marketing ciblée.",
    client: "Idée d'Afrique",
    year: "2022",
    tags: ["Print", "Flyers", "Marketing direct"],
  },
  {
    id: 9,
    title: "Plateforme B2B",
    category: "Web Design",
    thumbnail: "/img/app_Plateforme.png",
    fullImage: "/img/app_Plateforme.png",
    description:
      "Développement d'une plateforme de commerce inter-entreprises avec gestion des commandes, catalogue de produits et espace client.",
    client: "Client Confidentiel",
    year: "2023",
    tags: ["Application Web", "React", "Node.js", "MongoDB"],
  },
  {
    id: 10,
    title: "Site Internet ADS",
    category: "Web Design",
    thumbnail: "/img/Site_internet_ADS.jpg",
    fullImage: "/img/Site_internet_ADS.jpg",
    description:
      "Conception et développement d'un site vitrine moderne avec animations fluides et design responsive pour une entreprise de services.",
    client: "ADS Services",
    year: "2023",
    tags: ["Site Vitrine", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
];

export default function RealisationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (selectedCategory === "Tous") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const openProjectModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title="Nos Réalisations"
        subtitle="Découvrez comment nous avons transformé les projets de nos clients en succès digitaux. Chaque réalisation témoigne de notre créativité et de notre expertise."
        backgroundImage="/img/CTA_image.jpg"
        breadcrumbs={[{ label: "Nos Réalisations", href: "/nos-realisations" }]}
        pageTheme="portfolio"
      />

      <main className="overflow-hidden bg-gradient-to-b from-orange-50 via-white to-orange-50">
        <div className="py-16 relative">
          {/* Éléments décoratifs en arrière-plan */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full opacity-10 blur-[150px] -z-10"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-amber-400 rounded-full opacity-10 blur-[100px] -z-10"></div>

          <div className="max-w-7xl mx-auto px-4">
            {/* Filtres de catégories */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-orange-500 text-white shadow-md shadow-orange-200/40"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300 hover:bg-orange-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Grille de projets */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group cursor-pointer"
                    onClick={() => openProjectModal(project)}
                  >
                    <div className="relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-6 w-full">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                              className="flex justify-between items-center"
                            >
                              <span className="text-xs font-medium text-orange-300">
                                {project.year}
                              </span>
                              <span className="px-2 py-1 bg-orange-500/20 backdrop-blur-sm rounded text-xs text-white">
                                {project.category}
                              </span>
                            </motion.div>
                          </div>
                        </div>

                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300">
                            <EyeIcon className="h-4 w-4" />
                          </div>
                        </div>
                      </div>

                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="mt-auto pt-4 border-t border-gray-100">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 2).map((tag, index) => (
                              <span
                                key={index}
                                className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 2 && (
                              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                +{project.tags.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Message si aucun projet */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">
                  Aucun projet trouvé dans cette catégorie.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Section CTA */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-500 py-20 relative overflow-hidden">
          {/* Éléments décoratifs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-20 right-0 w-72 h-72 bg-white rounded-full opacity-10 blur-[80px]"></div>
            <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-white rounded-full opacity-10 blur-[100px]"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <Star className="h-12 w-12 text-white/50 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à donner vie à votre projet?
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Partagez-nous votre vision et collaborons ensemble pour créer
              quelque chose d'exceptionnel.
            </p>
            <Button asChild variant="ctaInverse" size="cta">
              <Link href="/contact">
                <span>Commencer un projet</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Modal de projet */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72 sm:h-96">
                <Image
                  src={selectedProject.fullImage}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-center"
                />
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18"></path>
                    <path d="M6 6l12 12"></path>
                  </svg>
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
                  <div>
                    <span className="text-gray-500 block mb-1">Client</span>
                    <span className="font-medium">
                      {selectedProject.client}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block mb-1">Année</span>
                    <span className="font-medium">{selectedProject.year}</span>
                  </div>
                  <div className="flex-grow">
                    <span className="text-gray-500 block mb-1">Tags</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full flex items-center gap-1"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    À propos du projet
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
                    >
                      <span>Voir le site</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
