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

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <NavbarDemo />
      <HeroBanner />
      {/* <SparklesHero /> */}
      <ServicesGrid />
      <OffresSection />
      <ClientLogos />
      <TeamCards />
      <LampSection />
      <TestimonialsSection />
      <ContactForm />
      {/* <CTASection /> */}
      <Footer />
    </main>
  );
}
