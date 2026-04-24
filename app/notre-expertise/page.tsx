"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Star,
  Code,
  BarChart,
  Users,
  PenTool,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ScrollProgress from "@/components/ui/scroll-progress";

// Définition des domaines d'expertise
const expertises = [
  {
    id: "web",
    title: "Conception & Développement Web",
    icon: <Code className="h-6 w-6" />,
    description:
      "Nous concevons et développons des sites web sur mesure, alliant esthétique et performance pour renforcer votre présence en ligne.",
    image: "/img/app_Plateforme.png",
    categories: [
      { name: "Sites vitrines", percentage: 90 },
      { name: "E-commerce", percentage: 85 },
      { name: "Applications web", percentage: 80 },
      { name: "Intranets", percentage: 75 },
    ],
    features: [
      "Sites responsive adaptés à tous les appareils",
      "Optimisation SEO pour un meilleur référencement",
      "Interfaces utilisateur intuitives et modernes",
      "Solutions e-commerce complètes",
      "Maintenance et support technique",
    ],
  },
  {
    id: "graphic",
    title: "Design & Identité Visuelle",
    icon: <PenTool className="h-6 w-6" />,
    description:
      "Nous créons des identités visuelles mémorables et des designs impactants qui reflètent l'essence de votre marque et captivent votre audience.",
    image: "/img/header_img/Logo Mima makeup_Plan de travail 1.jpg",
    categories: [
      { name: "Logo & Branding", percentage: 95 },
      { name: "Supports imprimés", percentage: 90 },
      { name: "Packaging", percentage: 85 },
      { name: "Design d'interface", percentage: 80 },
    ],
    features: [
      "Création de logos et identités visuelles",
      "Conception de chartes graphiques complètes",
      "Design de supports marketing imprimés",
      "Création de packaging produit",
      "Conception d'interfaces utilisateur",
    ],
  },
  {
    id: "digital",
    title: "Marketing Digital",
    icon: <BarChart className="h-6 w-6" />,
    description:
      "Nous élaborons des stratégies marketing digitales complètes pour accroître votre visibilité en ligne et générer des leads qualifiés.",
    image: "/img/header_img/Post Konate marine log.jpg",
    categories: [
      { name: "SEO", percentage: 85 },
      { name: "Médias sociaux", percentage: 95 },
      { name: "Publicité en ligne", percentage: 90 },
      { name: "Content Marketing", percentage: 85 },
    ],
    features: [
      "Stratégies SEO pour améliorer votre classement",
      "Gestion des médias sociaux et création de contenu",
      "Campagnes publicitaires ciblées (Google Ads, Facebook Ads)",
      "Email marketing et automation",
      "Analyse de données et rapports de performance",
    ],
  },
];

export default function ExpertisePage() {
  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title="Notre expertise"
        subtitle="Découvrez nos services de communication digitale sur mesure pour propulser votre entreprise vers de nouveaux sommets."
        breadcrumbs={[{ label: "Notre expertise", href: "/notre-expertise" }]}
        pageTheme="expertise"
        useAbstractBackground={true}
      />

      <main className="overflow-hidden">
        {/* Introduction */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full opacity-10 blur-[150px] -z-10"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-orange-400 rounded-full opacity-10 blur-[100px] -z-10"></div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 mb-6"
              >
                <Star className="h-6 w-6 text-orange-500" />
                <span className="h-px w-8 bg-orange-300"></span>
                <span className="text-orange-600 font-medium">
                  NOTRE SAVOIR-FAIRE
                </span>
                <span className="h-px w-8 bg-orange-300"></span>
                <Star className="h-6 w-6 text-orange-500" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
              >
                Une équipe d'experts pour tous vos projets digitaux
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                Chez African Digit Consulting, nous réunissons une équipe
                pluridisciplinaire d'experts passionnés, chacun apportant son
                expertise unique pour offrir des solutions digitales complètes
                et sur mesure. Notre approche collaborative et notre vision
                panafricaine nous permettent de comprendre vos enjeux
                spécifiques et d'y répondre avec des solutions innovantes et
                adaptées.
              </motion.p>
            </div>

            {/* Statistiques */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              <div className="bg-white rounded-lg p-6 shadow-md border border-orange-100">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  2+
                </div>
                <div className="text-gray-600 font-medium">
                  Années d'expérience
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-orange-100">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  30+
                </div>
                <div className="text-gray-600 font-medium">
                  Projets réalisés
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-orange-100">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  95%
                </div>
                <div className="text-gray-600 font-medium">
                  Clients satisfaits
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-orange-100">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  10+
                </div>
                <div className="text-gray-600 font-medium">
                  Experts en digital
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Domaines d'expertise */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Nos Domaines d'Expertise
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-600 max-w-2xl mx-auto"
              >
                Découvrez nos compétences clés et comment nous pouvons
                transformer votre présence digitale.
              </motion.p>
            </div>

            <div className="space-y-32">
              {expertises.map((expertise, index) => (
                <section
                  key={expertise.id}
                  id={expertise.id}
                  className={`py-20 ${
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-gradient-to-b from-orange-50 to-white"
                  }`}
                >
                  <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="flex flex-col lg:flex-row gap-16 items-center"
                    >
                      {/* Image */}
                      <div
                        className={`lg:w-1/2 order-1 ${
                          index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                          <Image
                            src={expertise.image}
                            alt={expertise.title}
                            width={600}
                            height={450}
                            className="w-full h-auto object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div
                        className={`lg:w-1/2 order-2 ${
                          index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full mb-6">
                          {expertise.icon}
                          <span className="font-medium">{expertise.title}</span>
                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                          {expertise.description}
                        </p>

                        {/* Compétences */}
                        <div className="space-y-5 mb-8">
                          {expertise.categories.map((category) => (
                            <div key={category.name}>
                              <div className="flex justify-between mb-1">
                                <span className="font-medium text-gray-700">
                                  {category.name}
                                </span>
                                <span className="text-orange-600 font-medium">
                                  {category.percentage}%
                                </span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{
                                    width: `${category.percentage}%`,
                                  }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                  className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                                ></motion.div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Caractéristiques */}
                        <div className="space-y-3">
                          {expertise.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.1 * i }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {expertise.id === "web" && (
                          <div className="mt-10">
                            <Button asChild variant="cta" size="lg" className="w-fit">
                              <Link href="/nos-realisations?categorie=Web%20Design">
                                <span>Voir tous nos projets web</span>
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase des Réalisations Web */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-2 rounded-full mb-6"
              >
                <Code className="h-5 w-5" />
                <span className="font-medium uppercase text-xl">
                  Nos réalisations web
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent"
              >
                Découvrez nos projets de développement web
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 max-w-2xl mx-auto text-lg"
              >
                Des solutions web sur mesure conçues pour nos clients, alliant
                design moderne, expérience utilisateur optimale et performance
                technique.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Projet 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className="relative h-[300px] overflow-hidden rounded-xl shadow-lg mb-4">
                  <Image
                    src="/img/app_Plateforme.png"
                    alt="Plateforme Business to Business"
                    fill
                    className="object-cover object-top transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Plateforme B2B Complète
                    </h3>
                    <p className="text-white/90">
                      Solution e-commerce B2B avec catalogue produits, gestion
                      des commandes et espace client sécurisé.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <span className="text-xs bg-orange-600/80 text-white px-3 py-1 rounded-full">
                        React
                      </span>
                      <span className="text-xs bg-orange-600/80 text-white px-3 py-1 rounded-full">
                        Node.js
                      </span>
                      <span className="text-xs bg-orange-600/80 text-white px-3 py-1 rounded-full">
                        MongoDB
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors">
                  Plateforme Business to Business
                </h3>
                <p className="text-gray-600">
                  Application web de commerce inter-entreprises
                </p>
              </motion.div>

              {/* Projet 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group"
              >
                <div className="relative h-[300px] overflow-hidden rounded-xl shadow-lg mb-4">
                  <Image
                    src="/img/Site_internet_ADS.jpg"
                    alt="Site Internet ADS"
                    fill
                    className="object-cover object-top transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Site Vitrine ADS
                    </h3>
                    <p className="text-white/90">
                      Site vitrine moderne avec animations fluides et design
                      responsive adapté à tous les appareils.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <span className="text-xs bg-orange-600/80 text-white px-3 py-1 rounded-full">
                        Next.js
                      </span>
                      <span className="text-xs bg-orange-600/80 text-white px-3 py-1 rounded-full">
                        Tailwind CSS
                      </span>
                      <span className="text-xs bg-orange-600/80 text-white px-3 py-1 rounded-full">
                        Framer Motion
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors">
                  Site Internet ADS
                </h3>
                <p className="text-gray-600">
                  Site vitrine moderne avec expérience utilisateur optimisée
                </p>
              </motion.div>
            </div>

            <div className="flex justify-center mt-12">
              <Link
                href="/nos-realisations?categorie=Web%20Design"
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-blue-200 transition-all"
              >
                <span>Voir toutes nos réalisations web</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 py-20 relative overflow-hidden">
          {/* Éléments décoratifs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Users className="h-16 w-16 text-white/70 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à transformer votre vision en réalité digitale?
              </h2>
              <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
                Notre équipe d'experts est prête à vous accompagner dans tous
                vos projets digitaux, de la conception à la réalisation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/nos-realisations"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full hover:bg-white/20 transition-colors duration-300 inline-flex items-center gap-2"
              >
                <span>Voir nos réalisations</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Button asChild variant="ctaInverse" size="cta">
                <Link href="/contact">
                  <span>Discuter de votre projet</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
