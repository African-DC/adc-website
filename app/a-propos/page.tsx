"use client";

import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import ScrollProgress from "@/components/ui/scroll-progress";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  CheckCircle2,
  Quote,
  Zap,
  Lightbulb,
  Users,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  // Notre histoire - timeline
  const historyItems = [
    {
      year: "2016",
      title: "Naissance d'ADC",
      description:
        "Fondation de African Digit Consulting par un groupe d'experts passionnés par le digital en Afrique.",
      image: "/img/TEAM_ADC/BEDE Abel Josias Manager.webp",
    },
    // {
    //   year: "2018",
    //   title: "Premiers clients majeurs",
    //   description: "Développement du portefeuille client avec des entreprises de renom en Côte d'Ivoire.",
    //   image: "/img/header_img/fedex5.jpg",
    // },
    {
      year: "2020",
      title: "Expansion des services",
      description:
        "Élargissement de notre offre avec le développement d'applications mobiles et la gestion de réseaux sociaux.",
      image: "/img/header_img/Interface 1.jpeg",
    },
    {
      year: "2022",
      title: "Partenariats internationaux",
      description:
        "Développement de collaborations avec des partenaires technologiques internationaux pour enrichir notre expertise.",
      image: "/img/header_img/Post Konate marine log.jpg",
    },
    {
      year: "2024",
      title: "ADC aujourd'hui",
      description:
        "Une équipe de plus de 10 experts digitaux servant plus de 50 clients à travers l'Afrique.",
      image: "/img/TEAM_ADC/ruben-Photoroom.webp",
    },
  ];

  // Nos valeurs (3 piliers — flyer ADC)
  const values = [
    {
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      title: "Innovation",
      description:
        "Nous créons des solutions digitales utiles, durables et adaptées.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Impact humain",
      description:
        "Nous plaçons l'humain au cœur de chaque projet.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Réalités locales",
      description:
        "Nos technologies répondent aux besoins concrets de nos communautés.",
      color: "from-blue-500 to-indigo-500",
    },
  ];


  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title="À propos de nous"
        subtitle="Le digital au service des peuples. Découvrez notre parcours, notre vision et les valeurs qui guident chacune de nos solutions."
        breadcrumbs={[{ label: "À propos", href: "/a-propos" }]}
        pageTheme="about"
        useAbstractBackground={true}
      />

      <main className="overflow-hidden relative">
        {/* Section Introduction */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full opacity-10 blur-[150px] -z-10"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-orange-400 rounded-full opacity-10 blur-[100px] -z-10"></div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Notre Entreprise
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  <span className="font-semibold text-orange-600">
                    African Digit Consulting
                  </span>{" "}
                  conçoit des solutions digitales à fort impact social et
                  humain, pensées depuis Abidjan pour l'ensemble du continent
                  africain.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Notre mission : construire des technologies utiles au service
                  des réalités locales. Nous plaçons l'humain au cœur de chaque
                  projet et nous engageons à livrer des solutions utiles,
                  durables et adaptées aux besoins concrets de nos
                  communautés.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 rounded-full p-1 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Innovation utile
                      </h3>
                      <p className="text-gray-600">
                        Nous créons des solutions digitales utiles, durables
                        et adaptées aux contextes dans lesquels elles sont
                        déployées.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 rounded-full p-1 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Impact social et humain
                      </h3>
                      <p className="text-gray-600">
                        Nous plaçons l'humain au cœur de chaque projet, pour
                        que la technologie serve toujours les personnes qui
                        l'utilisent.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 rounded-full p-1 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Ancrage dans les réalités locales
                      </h3>
                      <p className="text-gray-600">
                        Nos technologies répondent aux besoins concrets de
                        nos communautés, avec une compréhension fine des
                        marchés africains.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/img/TEAM_ADC/BEDE Abel Josias Manager.webp"
                    alt="Notre équipe"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-4 mb-3">
                    <Quote className="h-10 w-10 text-orange-500" />
                    <div className="h-px flex-grow bg-gray-200"></div>
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Construire des technologies utiles au service des
                    réalités locales."
                  </p>
                  <div className="font-semibold text-gray-800">
                    Notre vision
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Notre Histoire */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-2 rounded-full mb-6"
              >
                <span className="font-medium uppercase text-xl">
                  Notre Histoire
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-6 mx-auto max-w-2xl"
              >
                L'évolution de notre agence au fil des années
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 max-w-2xl mx-auto"
              >
                Découvrez comment African Digit Consulting est devenue une
                référence dans le domaine du digital en Afrique.
              </motion.p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-orange-200"></div>

              {historyItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center mb-16 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 mt-6 md:mt-0 text-center relative">
                    {/* Point sur la timeline */}
                    <div className="absolute left-1/2 md:left-auto md:right-auto md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-10 h-10 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                    <div
                      className={`bg-white p-6 rounded-xl shadow-md border border-orange-100 max-w-md mx-auto ${
                        index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                      }`}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Nos Valeurs */}
        <section className="py-20 bg-gradient-to-b from-white to-orange-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-2 rounded-full mb-6"
              >
                <span className="font-medium uppercase text-xl">
                  Nos Valeurs
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Les trois piliers qui guident nos actions
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 max-w-2xl mx-auto"
              >
                Innovation, impact humain et ancrage dans les réalités locales :
                trois valeurs qui structurent chaque projet que nous menons.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 border border-orange-100"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center mb-6`}
                  >
                    {value.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Notre Approche */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
          <div className="absolute -top-20 right-0 w-80 h-80 bg-orange-300 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-20 left-0 w-80 h-80 bg-red-300 rounded-full opacity-10 blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <Image
                    src="/img/TEAM_ADC/BEDE Abel Josias Manager.webp"
                    alt="Notre approche"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-xl z-10 relative"
                  />
                  <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-tr from-orange-500 to-red-500 rounded-2xl -z-10"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-2 rounded-full mb-6">
                  <span className="font-medium uppercase">Notre Approche</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Une méthodologie centrée sur vos besoins
                </h2>

                <p className="text-gray-600 mb-8">
                  Notre approche combine expertise technique, créativité et
                  connaissance approfondie du marché africain pour offrir des
                  solutions sur mesure qui correspondent parfaitement à vos
                  objectifs.
                </p>

                <div className="space-y-4">
                  {[
                    "Analyse approfondie de vos besoins et objectifs",
                    "Conception de solutions sur mesure et innovantes",
                    "Développement rigoureux et tests approfondis",
                    "Accompagnement personnalisé et support continu",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button asChild variant="cta" size="cta">
                    <Link href="/contact">
                      <span>Discuter de votre projet</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 relative overflow-hidden">
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
              <Zap className="h-16 w-16 text-white/70 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Rejoignez l'aventure digitale avec nous
              </h2>
              <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
                Ensemble, créons des solutions innovantes qui transformeront
                votre présence numérique et vous aideront à atteindre vos
                objectifs.
              </p>
            </motion.div>

            <Button asChild variant="ctaInverse" size="cta">
              <Link href="/contact">
                <span>Commencer la discussion</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
