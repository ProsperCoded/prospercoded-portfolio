"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { ProjectItem } from "@/data/ProjectsData";
import ProjectHero from "./ProjectHero";
import ProjectSection from "./ProjectSection";

interface ProjectLayoutProps {
  project: ProjectItem;
  children: React.ReactNode;
}

const sidebarSections = [
  {
    id: "brief",
    label: "Brief",
    icon: "https://img.icons8.com/dusk/64/brief.png",
  },
  {
    id: "architecture",
    label: "Architecture",
    icon: "https://img.icons8.com/color/96/data-configuration.png",
  },
  {
    id: "uml",
    label: "UML Diagram",
    icon: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/external-flow-interface-kiranshastry-lineal-color-kiranshastry.png",
  },
  {
    id: "database",
    label: "Database Design",
    icon: "https://img.icons8.com/color/96/data-configuration.png",
  },
];

export default function ProjectLayout({
  project,
  children,
}: ProjectLayoutProps) {
  const [activeSection, setActiveSection] = useState("brief");
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      const sections = sidebarSections.map((section) =>
        document.getElementById(section.id)
      );
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sidebarSections[i].id);
          break;
        }
      }

      setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="flex items-center justify-between p-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-4">
            {project.webLink && (
              <a
                href={project.webLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground/10 border border-border/50 rounded-lg transition-all duration-300 text-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <ProjectHero project={project} />

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:block w-80 bg-card/50 backdrop-blur-sm border-r border-border/50 sticky top-20 h-screen overflow-y-auto">
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-foreground mb-2">
                {project.name}
              </h1>
              <p className="text-foreground/70">{project.designation}</p>
            </div>

            <nav className="space-y-2">
              {sidebarSections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${
                    activeSection === section.id
                      ? "bg-red-500/10 text-red-500 border border-red-500/20"
                      : "hover:bg-foreground/5 text-foreground/70 hover:text-foreground"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={section.icon}
                    alt={`${section.label} icon`}
                    className="w-5 h-5"
                  />
                  <span className="font-medium">{section.label}</span>
                </motion.button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">{children}</div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <motion.button
          className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-sm font-medium">Menu</span>
        </motion.button>
      </div>
    </div>
  );
}
