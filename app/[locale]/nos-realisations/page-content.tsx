"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Tag, EyeIcon, ArrowUpRight } from "lucide-react";
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

export default function RealisationsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
        {/* Projets vedettes — KLASSCI + Wouri */}
        <section className="relative pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-3 text-xs tracking-[0.18em] text-neutral-600 uppercase"
            >
              <span className="inline-block h-px w-8 bg-orange-500" />
              Projets vedettes
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <Link
              href="/nos-realisations/klassci"
              className="group block relative rounded-2xl md:rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-xl shadow-neutral-900/5 hover:shadow-2xl hover:shadow-neutral-900/10 transition-all duration-500"
            >
              <div className="p-8 md:p-10 flex flex-col gap-7 h-full">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-xl bg-white border border-neutral-200 shadow-sm p-1.5 flex-shrink-0">
                      <Image
                        src="/img/projets/klassci/logo-klassci.png"
                        alt="Logo KLASSCI"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold leading-none">
                      KLASSCI<span className="text-orange-500">.</span>
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-[11px] font-semibold uppercase tracking-wide">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                    </span>
                    En production
                  </span>
                </div>

                <div>
                  <p className="text-xl md:text-2xl italic font-light text-neutral-700 leading-snug mb-3">
                    Le SaaS qui réinvente la gestion des écoles africaines.
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    Dix grandes écoles en production. Planning, scolarité,
                    finances, bulletins, paie.
                  </p>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 p-4 min-h-[200px] flex items-center justify-center flex-1">
                  <div
                    className="relative w-full transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ transform: "rotate(1deg)" }}
                  >
                    <div className="relative rounded-md overflow-hidden border border-neutral-200 shadow-lg bg-white">
                      <Image
                        src="/img/projets/klassci/hero_section.png"
                        alt="Aperçu KLASSCI"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-sm">
                  <span className="text-neutral-500">Enseignement supérieur · Multi-tenants</span>
                  <span className="inline-flex items-center gap-2 font-medium text-neutral-900 group-hover:text-orange-600 transition-colors">
                    Étude de cas
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Wouri card */}
            <Link
              href="/nos-realisations/wouri"
              className="group block relative rounded-2xl md:rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-xl shadow-neutral-900/5 hover:shadow-2xl transition-all duration-500"
            >
              <div className="p-8 md:p-10 flex flex-col gap-7 h-full">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-4xl md:text-5xl font-bold leading-none" style={{ color: "#1a5d3a" }}>
                    WOURI<span className="text-neutral-900">.</span>
                  </h3>
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide"
                    style={{ background: "#1a5d3a10", border: "1px solid #1a5d3a30", color: "#1a5d3a" }}
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ background: "#1a5d3a" }} />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#1a5d3a" }} />
                    </span>
                    En beta
                  </span>
                </div>

                <div>
                  <p className="text-xl md:text-2xl italic font-light text-neutral-700 leading-snug mb-3">
                    L'agent IA qui aide les agriculteurs ivoiriens face au changement climatique.
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    Sur WhatsApp. Dans les langues locales. Des conseils concrets pour des saisons qui changent.
                  </p>
                </div>

                <div
                  className="relative rounded-xl p-4 min-h-[200px] space-y-2.5 flex-1 flex flex-col justify-center"
                  style={{ background: "#1a5d3a06", border: "1px solid #1a5d3a1f" }}
                >
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-white border border-neutral-200 px-3.5 py-2 text-[13px] text-neutral-700">
                      Les pluies tardent. Je plante ?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-tl-sm px-3.5 py-2 text-[13px] text-white" style={{ background: "#1a5d3a" }}>
                      Attends 6 à 8 jours. Les pluies arrivent. Prépare le sol.
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-white border border-neutral-200 px-3.5 py-2 text-[13px] text-neutral-700 italic">
                      N'mɔ m'aba kaban ?
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-sm">
                  <span className="text-neutral-500">Agritech · Climate-tech · WhatsApp</span>
                  <span className="inline-flex items-center gap-2 font-medium text-neutral-900 transition-colors">
                    Étude de cas
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </div>
            </Link>
            </div>
          </div>
        </section>

        {/* Section "Autres realisations / Portfolio creatif" desactivee :
            ADC ne fournit plus Design / Branding / Social Media / Graphisme.
            Conservee pour reactivation future (cf. services-editorial.tsx). */}
        {false && (
        <div className="py-16 relative">
          {/* Éléments décoratifs en arrière-plan */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full opacity-10 blur-[150px] -z-10"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-amber-400 rounded-full opacity-10 blur-[100px] -z-10"></div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10 text-center">
              <div className="text-xs tracking-[0.18em] uppercase text-neutral-600 mb-3">
                <span className="inline-block h-px w-8 bg-orange-500 mr-3 align-middle" />
                Autres réalisations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Notre portfolio créatif
              </h2>
            </div>

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
        )}

        {/* ===================== CTA EDITORIAL ===================== */}
        <section className="relative py-24 md:py-32 bg-neutral-950 text-white overflow-hidden">
          {/* Grid pattern */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          {/* Warm orange glow */}
          <div
            aria-hidden
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-500/15 blur-[140px] pointer-events-none"
          />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 text-xs tracking-[0.22em] text-neutral-400 uppercase mb-8"
            >
              <span className="inline-block h-px w-10 bg-orange-400" />
              Et votre projet ?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-10"
            >
              Les études de cas d'aujourd'hui,{" "}
              <em className="text-orange-400 font-normal">
                ce sont vos idées d'hier
              </em>
              .
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg text-white/75 leading-relaxed max-w-2xl mx-auto mb-12"
            >
              Dites-nous ce que vous voulez construire. On commence par
              écouter, on continue par livrer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button asChild variant="cta" size="cta">
                <Link href="/contact">
                  <span>Démarrer un projet</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="/notre-expertise"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-orange-400 transition-colors"
              >
                Voir notre expertise
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>
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
