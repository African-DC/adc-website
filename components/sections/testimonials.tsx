"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "African Digit Consulting a transformé notre présence en ligne avec une stratégie digitale sur mesure. Grâce à leur expertise, nous avons augmenté notre visibilité et renforcé notre engagement client. Une équipe professionnelle et réactive que je recommande vivement !",
    name: "Audrey Kady",
    // designation: "Chargé des services",
    src: "/img/temoignages/Audrey kady.webp",
  },
  {
    quote:
      "Nous avions besoin d'une plateforme e-commerce performante et intuitive. ADC a su répondre à nos attentes avec une solution clé en main, parfaitement adaptée à nos besoins. Leur accompagnement et leur souci du détail font toute la différence !",
    name: "Koffi Mensah",
    // designation: "CEO de InnovateAfrica",
    src: "/img/temoignages/Koffi mensah.jpg",
  },
  {
    quote:
      "L'équipe d'ADC nous a aidés à élaborer une stratégie de communication digitale efficace, ce qui a considérablement amélioré notre notoriété. Leur créativité et leur professionnalisme sont un véritable atout pour toute entreprise en quête de visibilité !",
    name: "Aïcha Touré",
    designation: "Responsable Communication, InnovTech Mali",
    src: "/img/temoignages/Aïcha Toure.jpeg",
  },
  {
    quote:
      "Grâce à ADC, nous avons pu moderniser notre image de marque avec des visuels percutants et une identité graphique forte. Leur approche personnalisée et leur expertise en design ont dépassé nos attentes !",
    name: "Mamadou Bah",
    designation: "CEO, StartUp Guinée",
    src: "/img/temoignages/Mamadou Bah.jpeg",
  },
  {
    quote:
      "Collaborer avec African Digit Consulting a été une expérience enrichissante. Leur accompagnement stratégique et leurs solutions digitales innovantes nous ont permis d'optimiser notre communication et d'atteindre de nouveaux marchés. Un vrai partenaire de croissance !",
    name: "Koffi Anderson",
    // designation: "Responsable Communication, InnovTech Mali",
    src: "/img/temoignages/Koffi Anderson.jpeg",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0); // -1 pour gauche, 1 pour droite

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-orange-50">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-300 rounded-full opacity-20 blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full opacity-15 blur-[150px]"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-red-300 rounded-full opacity-10 blur-[100px]"></div>

      {/* Pattern géométrique */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-4 h-4 bg-orange-500 rounded-full"></div>
        <div className="absolute top-40 left-40 w-6 h-6 bg-orange-600 rounded-full"></div>
        <div className="absolute top-60 left-80 w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-5 h-5 bg-orange-500 rounded-full"></div>
        <div className="absolute bottom-80 right-80 w-4 h-4 bg-red-600 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-orange-400 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-2 rounded-full mb-6"
          >
            <span className="font-medium uppercase text-xl">Témoignages</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
          >
            Ce que nos clients disent
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Découvrez les expériences de ceux qui nous ont fait confiance pour leur transformation digitale
          </motion.p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ 
                  opacity: 0, 
                  x: direction * 50
                }}
                animate={{ 
                  opacity: 1,
                  x: 0
                }}
                exit={{ 
                  opacity: 0,
                  x: direction * -50
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="bg-white rounded-3xl p-8 shadow-xl relative"
              >
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Quote className="h-6 w-6 text-white" />
                </div>
                
                <div className="pt-4">
                  <p className="text-lg text-gray-700 mb-8 italic">
                    {testimonials[active].quote.split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.15,
                          ease: "easeOut",
                          delay: 0.01 * index,
                        }}
                        className="inline-block"
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-orange-200">
                      <Image
                        src={testimonials[active].src}
                        alt={testimonials[active].name}
                        width={60}
                        height={60}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonials[active].name}</h4>
                      {testimonials[active].designation && (
                        <p className="text-sm text-orange-600">{testimonials[active].designation}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-8 right-8 flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 text-orange-400 fill-orange-400" 
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex mt-8 gap-4">
              <button
                onClick={handlePrev}
                className="h-12 w-12 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center group hover:bg-orange-500 transition-colors duration-300 shadow-md"
              >
                <IconArrowLeft className="h-5 w-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </button>
              
              <div className="flex-1 flex items-center gap-2 px-4">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => {
                      setDirection(idx > active ? 1 : -1);
                      setActive(idx);
                    }}
                    className={`h-2 transition-all duration-300 rounded-full ${
                      idx === active 
                        ? "w-10 bg-orange-500" 
                        : "w-2 bg-orange-200 hover:bg-orange-300"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-200/40"
              >
                <IconArrowRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => {
                  const isActiveItem = isActive(index);
                  
                  return (
                    <motion.div
                      key={testimonial.src}
                      initial={{ scale: 0.9, opacity: 0.6 }}
                      animate={{
                        scale: isActiveItem ? 1.05 : 0.9,
                        opacity: isActiveItem ? 1 : 0.6,
                        y: isActiveItem ? -20 : 0,
                        zIndex: isActiveItem ? 10 : 0,
                      }}
                      whileHover={{ 
                        scale: isActiveItem ? 1.05 : 0.95, 
                        y: isActiveItem ? -20 : -10,
                        zIndex: 5
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      onClick={() => {
                        if (!isActiveItem) {
                          setDirection(index > active ? 1 : -1);
                          setActive(index);
                        }
                      }}
                      className={`relative rounded-2xl overflow-hidden shadow-xl cursor-pointer ${
                        index % 2 === 0 
                          ? isActiveItem ? 'md:translate-y-0' : 'md:translate-y-10' 
                          : isActiveItem ? 'md:translate-y-0' : 'md:translate-y-20'
                      } transition-all duration-500`}
                    >
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={testimonial.src}
                          alt={testimonial.name}
                          fill
                          className="object-cover object-center transition-all duration-500"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                          isActiveItem ? 'opacity-100' : 'opacity-70'
                        }`}></div>
                        
                        <div className="absolute bottom-0 left-0 w-full p-4">
                          <h3 className={`text-white font-semibold transition-all duration-300 ${
                            isActiveItem ? 'text-xl' : 'text-base'
                          }`}>{testimonial.name}</h3>
                          {testimonial.designation && (
                            <p className="text-orange-300 text-sm">{testimonial.designation}</p>
                          )}
                        </div>
                        
                        {isActiveItem && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-4 right-4 bg-orange-500 rounded-full p-1.5"
                          >
                            <Star className="h-4 w-4 text-white fill-white" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Effet de lumière atmosphérique */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-500 rounded-full opacity-20 blur-3xl -z-10"></div>
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-red-400 rounded-full opacity-15 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
