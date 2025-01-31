"use client";

import { ServicesGrid } from "@/components/sections/bento-grid";
import { CTASection } from "@/components/sections/cta-slider";
import { Footer } from "@/components/sections/footer";
import { LampSection } from "@/components/sections/lamp-section";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { OffresSection } from "@/components/sections/offres";
import { SparklesHero } from "@/components/sections/sparkles-hero";
import { TeamCards } from "@/components/sections/team-cards";
import { TestimonialsSection } from "@/components/sections/testimonials";
import ScrollProgress from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <NavbarDemo />
      <SparklesHero />
      <ServicesGrid />
      <OffresSection />
      <TeamCards />
      <LampSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
