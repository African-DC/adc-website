import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import ScrollProgress from "@/components/ui/scroll-progress";
import { HeroEditorial } from "@/components/sections/hero-editorial";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ServicesEditorial } from "@/components/sections/services-editorial";
import { ProjectSpotlight } from "@/components/sections/project-spotlight";
import { TeamEditorial } from "@/components/sections/team-editorial";
import { ClosingEditorial } from "@/components/sections/closing-editorial";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <NavbarDemo />
      <HeroEditorial />
      <PhilosophySection />
      <ServicesEditorial />
      <ProjectSpotlight />
      <TeamEditorial />
      <ClosingEditorial />
      <Footer />
    </main>
  );
}
