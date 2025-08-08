import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ResumeSection } from "@/components/ResumeSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { DesignProcessSection } from "@/components/DesignProcessSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="resume">
        <ResumeSection />
      </div>
      <ProjectsSection />
      <DesignProcessSection />
    </main>
  );
}
