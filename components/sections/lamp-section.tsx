"use client";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export function LampSection() {
  return (
    <div className="hidden md:block">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-neutral-800 to-neutral-600 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl font-['Open_Sans']"
        >
          <strong>
            ADC la solution digitale <br /> pour tous
          </strong>
        </motion.h1>
      </LampContainer>
    </div>
  );
}
