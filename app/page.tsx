"use client";

import { Footer } from "@/components/sections/footer";
import { LampSection } from "@/components/sections/lamp-section";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { TeamCards } from "@/components/sections/team-cards";
import ScrollProgress from "@/components/ui/scroll-progress";
import { HeroEditorial } from "@/components/sections/hero-editorial";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { Services3D } from "@/components/sections/services-3d";
import { ProjectSpotlight } from "@/components/sections/project-spotlight";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <NavbarDemo />
      <HeroEditorial />
      <PhilosophySection />
      <Services3D />
      <ProjectSpotlight />
      <TeamCards />
      <LampSection />
      <TestimonialsCarousel />
      <Footer />
    </main>
  );
}
