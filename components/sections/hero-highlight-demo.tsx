"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <div className="space-y-8">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-6xl font-bold text-orange-950 dark:text-orange-950 max-w-5xl leading-tight lg:leading-tight text-center mx-auto whitespace-nowrap"
        >
          Bienvenue chez{" "}
          <Highlight className="text-orange-950 dark:text-orange-950">
            Africa Digit Consulting
          </Highlight>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            delay: 0.2,
          }}
          className="text-xl md:text-2xl text-orange-900/80 dark:text-orange-950/90 max-w-3xl text-center mx-auto px-4"
        >
          Une agence qui regroupe un consortium d&apos;experts dans les métiers
          du digital. Experte en communication et création de solutions
          digitales.
        </motion.p>
      </div>
    </HeroHighlight>
  );
}
