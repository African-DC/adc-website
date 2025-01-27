"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Africa Digit Consulting a transformé notre présence digitale. Leur expertise et leur créativité ont dépassé nos attentes.",
    name: "Sarah Diallo",
    designation: "Directrice Marketing chez TechFlow Africa",
    src: "/img/person-temoin1.jpg",
  },
  {
    quote:
      "Une équipe exceptionnelle qui comprend vraiment les besoins spécifiques du marché africain. Leur approche innovante a révolutionné notre stratégie digitale.",
    name: "Mohamed Keita",
    designation: "CEO de InnovateAfrica",
    src: "/img/person-temoin2.jpg",
  },
  {
    quote:
      "Le professionnalisme et la qualité des solutions proposées par ADC sont remarquables. Ils ont su donner vie à notre vision digitale.",
    name: "Aminata Touré",
    designation: "Directrice des Opérations chez CloudScale",
    src: "/img/person-temoin3.jpg",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4 py-32 font-['Open_Sans']">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-[#ff942b] to-orange-600 bg-clip-text text-transparent font-['Open_Sans']">
          Ce que nos clients disent
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <div className="relative h-96 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 999
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      className="h-full w-full rounded-3xl object-cover object-center shadow-xl"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-between flex-col py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 font-['Open_Sans']">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-[#ff942b] font-['Open_Sans']">
                {testimonials[active].designation}
              </p>
              <motion.p className="text-lg text-gray-600 mt-8 font-['Open_Sans']">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-full bg-white border-2 border-[#ff942b] flex items-center justify-center group/button hover:bg-[#ff942b] transition-colors duration-300"
              >
                <IconArrowLeft className="h-5 w-5 text-[#ff942b] group-hover/button:text-white group-hover/button:rotate-12 transition-all duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-full bg-white border-2 border-[#ff942b] flex items-center justify-center group/button hover:bg-[#ff942b] transition-colors duration-300"
              >
                <IconArrowRight className="h-5 w-5 text-[#ff942b] group-hover/button:text-white group-hover/button:-rotate-12 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
