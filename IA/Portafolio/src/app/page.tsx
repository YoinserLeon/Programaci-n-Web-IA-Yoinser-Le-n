import Navbar from "@/components/Navbar";
import HeaderHero from "@/components/HeaderHero";
import IntroSection from "@/components/IntroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar />

      {/* --- SECCIÓN 1: HEADER (Cabecera) --- */}
      <HeaderHero />

      {/* --- SECCIÓN 2: INTRO (Presentación personal) --- */}
      <IntroSection />

      {/* --- SECCIÓN 3: CONOCIMIENTOS TÉCNICOS (Skills) --- */}
      <SkillsSection />

      {/* --- SECCIÓN 4: PROYECTOS (Featured Projects) --- */}
      <ProjectsSection />

      {/* --- SECCIÓN 5: SECCIÓN DE CONTACTO Y REDES SOCIALES --- */}
      <ContactSection />
    </main>
  );
}
