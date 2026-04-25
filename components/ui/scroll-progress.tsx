"use client";

import { cn } from "@/lib/utils";
import { m, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
  className?: string;
}

export default function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <m.div
      aria-hidden
      className={cn(
        "hidden md:block fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600",
        className
      )}
      style={{
        scaleX,
      }}
    />
  );
}
