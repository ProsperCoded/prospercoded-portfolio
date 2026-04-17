import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ResumeSection } from "@/components/ResumeSection";
import { Navbar } from "@/components/nav/Navbar";
import { MobileNavbar } from "@/components/nav/MobileNavbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SpecializationsSection } from "@/components/SpecializationsSection";
import { CoursesSection } from "@/components/CoursesSection";
import { DesignProcessSection } from "@/components/DesignProcessSection";

// Page component for the home route
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <MobileNavbar />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="resume">
        <ResumeSection />
      </div>
      <ProjectsSection />
      <SpecializationsSection />
      <CoursesSection />
      <DesignProcessSection />
    </main>
  );
}
