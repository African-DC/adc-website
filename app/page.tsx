"use client";

import { ServicesGrid } from "@/components/sections/bento-grid";
import { ContactForm } from "@/components/sections/contact-form";
import { Footer } from "@/components/sections/footer";
import { LampSection } from "@/components/sections/lamp-section";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { OffresSection } from "@/components/sections/offres";
import { TeamCards } from "@/components/sections/team-cards";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { HeroBanner } from "@/components/sections/hero-banner";
import { ClientLogos } from "@/components/sections/client-logos";
import ScrollProgress from "@/components/ui/scroll-progress";
import { ModernServices } from "@/components/sections/modern-services";
import { HeroShowcase } from "@/components/sections/hero-showcase";
import { Services3D } from "@/components/sections/services-3d";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
// import { SocialShowcase } from "@/components/sections/social-showcase";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <NavbarDemo />
      
      {/* Section Hero - Nouvelle version */}
      <HeroShowcase />
      {/* <HeroBanner /> */}
      {/* <SparklesHero /> */}
      
      {/* Section Services - Nouvelle version */}
      <Services3D />
      {/* <ModernServices /> */}
      {/* <ServicesGrid /> */}
      
      {/* Section des offres commentée comme demandé */}
      {/* <OffresSection /> */}
      {/* <SocialShowcase /> */}
      
      {/* <ClientLogos /> */}
      <TeamCards />
      <LampSection />
      
      {/* Section Témoignages - Nouvelle version */}
      <TestimonialsCarousel />
      {/* <TestimonialsSection /> */}
      
      {/* Section de contact commentée comme demandé */}
      {/* <ContactForm /> */}
      {/* <CTASection /> */}
      <Footer />
    </main>
  );
}
