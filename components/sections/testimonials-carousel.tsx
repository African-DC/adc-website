"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Koffi Anderson",
    role: "Directeur Général",
    company: "Idée d'Afrique",
    image: "/img/temoignages/KoffiAnderson.webp",
    quote: "La collaboration avec Africa Digit Consulting a complètement transformé notre présence en ligne. Leur approche stratégique et leur compréhension des marchés africains ont fait toute la différence.",
    rating: 5
  },
  {
    name: "Marie Konaté",
    role: "Responsable Marketing",
    company: "Konaté Marine Logistics",
    image: "/img/temoignages/Koffi mensah.jpg",
    quote: "L'équipe d'ADC a su capturer l'essence de notre marque et la traduire en une identité visuelle cohérente et impactante. Leur créativité et leur professionnalisme sont remarquables.",
    rating: 5
  },
  {
    name: "Jean Mensah",
    role: "Fondateur",
    company: "Mima Collection",
    image: "/img/temoignages/Koffimensah.webp",
    quote: "Grâce au site web développé par ADC, notre entreprise a vu ses ventes en ligne augmenter de 70%. Leur expertise technique et leur service client sont exceptionnels.",
    rating: 5
  },
  {
    name: "Aya Touré",
    role: "Directrice de Communication",
    company: "Bit Color",
    image: "/img/temoignages/AichaToure.webp",
    quote: "La gestion de nos réseaux sociaux par ADC a considérablement augmenté notre portée et notre engagement. Ils comprennent vraiment les spécificités du marché africain.",
    rating: 5
  }
];

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  
  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-orange-50">
      {/* Fond dynamique */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-orange-200 rounded-full opacity-10 blur-[150px]"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-200 rounded-full opacity-10 blur-[100px]"></div>
      </div>
      
      {/* Éléments décoratifs */}
      <div className="absolute top-40 left-10 w-12 h-12 border-2 border-orange-200 rounded-lg rotate-12 opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-orange-200 rounded-full opacity-50"></div>
      <div className="absolute top-60 right-40 w-8 h-8 border-2 border-orange-200 rounded-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium mb-6">
            <Star className="h-4 w-4 fill-orange-500" />
            <span>CE QUE DISENT NOS CLIENTS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Des clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">satisfaits</span> partout en Afrique
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients qui ont transformé leur présence digitale grâce à nos solutions sur mesure.
          </p>
        </motion.div>
        
        {/* Carousel principal */}
        <div className="relative">
          {/* Grande citation décorative */}
          <div className="absolute -top-10 left-0 md:left-10 text-orange-200 opacity-30">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10.5C10 11.3284 9.32843 12 8.5 12C7.67157 12 7 11.3284 7 10.5C7 9.67157 7.67157 9 8.5 9C9.32843 9 10 9.67157 10 10.5Z" fill="currentColor"/>
              <path d="M17 10.5C17 11.3284 16.3284 12 15.5 12C14.6716 12 14 11.3284 14 10.5C14 9.67157 14.6716 9 15.5 9C16.3284 9 17 9.67157 17 10.5Z" fill="currentColor"/>
              <path d="M12 18C14.2091 18 16 16.2091 16 14H8C8 16.2091 9.79086 18 12 18Z" fill="currentColor"/>
              <path d="M10.0004 14C10.7548 15.6 12.2846 16.5 14.0003 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          
          {/* Conteneur du carousel */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image du témoin */}
            <motion.div
              key={`image-${active}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/3"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden shadow-xl mx-auto">
                  <Image 
                    src={testimonials[active].image}
                    alt={testimonials[active].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Informations sur le client */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(testimonials[active].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="font-bold text-lg">{testimonials[active].name}</div>
                    <div className="text-sm text-white/80">{testimonials[active].role}, {testimonials[active].company}</div>
                  </div>
                </div>
                
                {/* Logo de l'entreprise */}
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-orange-500" />
                  </div>
                </div>
                
                {/* Élément décoratif */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-dashed border-orange-200 rounded-full"></div>
              </div>
            </motion.div>
            
            {/* Témoignage */}
            <motion.div
              key={`quote-${active}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="lg:w-2/3 max-w-2xl"
            >
              <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                <div className="absolute -top-5 left-10 transform -translate-x-1/2 text-orange-500">
                  <Quote className="h-10 w-10" />
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-8">
                  "{testimonials[active].quote}"
                </blockquote>
                
                {/* Contrôles du carousel */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    {testimonials.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setActive(index)}
                        className={`w-3 h-3 rounded-full transition-all ${active === index ? 'bg-orange-500 scale-125' : 'bg-gray-200'}`}
                        aria-label={`Voir le témoignage ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center text-gray-600 hover:text-orange-500 transition-colors"
                      aria-label="Témoignage précédent"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center text-gray-600 hover:text-orange-500 transition-colors"
                      aria-label="Témoignage suivant"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 