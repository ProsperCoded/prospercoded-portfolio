"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faExternalLinkAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { ProjectItem } from "@/data/ProjectsData";
import ProjectHero from "./ProjectHero";
import ProjectSection from "./ProjectSection";
import Logo from "../ui/Logo";

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
    icon: "https://img.icons8.com/liquid-glass/48/stacked-organizational-chart.png",
  },
  {
    id: "challenges",
    label: "Challenges & Solutions",
    icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-challenges-sales-flaticons-lineal-color-flat-icons-3.png",
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
          <div className="flex items-center gap-x-4">
            <Logo />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors group"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              />
              <span className="hidden sm:inline">Back to Projects</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {project.webLink && (
              <a
                href={project.webLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 text-xs sm:text-sm"
              >
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="w-3 h-3 sm:w-4 sm:h-4"
                />
                <span className="hidden sm:inline">Live Demo</span>
                <span className="sm:hidden">Demo</span>
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-foreground/5 hover:bg-foreground/10 border border-border/50 rounded-lg transition-all duration-300 text-xs sm:text-sm"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-3 h-3 sm:w-4 sm:h-4"
                />
                <span className="hidden sm:inline">GitHub</span>
                <span className="sm:hidden">Code</span>
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

      {/* Mobile Section Navigation */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
        <div className="flex items-center justify-between gap-3">
          {/* Previous Section Button */}
          <motion.button
            onClick={() => {
              const currentIndex = sidebarSections.findIndex(
                (s) => s.id === activeSection
              );
              if (currentIndex > 0) {
                scrollToSection(sidebarSections[currentIndex - 1].id);
              }
            }}
            disabled={activeSection === sidebarSections[0].id}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
              activeSection === sidebarSections[0].id
                ? "bg-foreground/5 text-foreground/30 cursor-not-allowed"
                : "bg-card/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-card/90"
            }`}
            whileHover={
              activeSection !== sidebarSections[0].id ? { scale: 1.02 } : {}
            }
            whileTap={
              activeSection !== sidebarSections[0].id ? { scale: 0.98 } : {}
            }
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
            <span className="text-sm font-medium">
              {activeSection === sidebarSections[0].id
                ? "Previous"
                : sidebarSections[
                    sidebarSections.findIndex((s) => s.id === activeSection) - 1
                  ]?.label}
            </span>
          </motion.button>

          {/* Next Section Button */}
          <motion.button
            onClick={() => {
              const currentIndex = sidebarSections.findIndex(
                (s) => s.id === activeSection
              );
              if (currentIndex < sidebarSections.length - 1) {
                scrollToSection(sidebarSections[currentIndex + 1].id);
              }
            }}
            disabled={
              activeSection === sidebarSections[sidebarSections.length - 1].id
            }
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
              activeSection === sidebarSections[sidebarSections.length - 1].id
                ? "bg-foreground/5 text-foreground/30 cursor-not-allowed"
                : "bg-card/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-card/90"
            }`}
            whileHover={
              activeSection !== sidebarSections[sidebarSections.length - 1].id
                ? { scale: 1.02 }
                : {}
            }
            whileTap={
              activeSection !== sidebarSections[sidebarSections.length - 1].id
                ? { scale: 0.98 }
                : {}
            }
          >
            <span className="text-sm font-medium">
              {activeSection === sidebarSections[sidebarSections.length - 1].id
                ? "Next"
                : sidebarSections[
                    sidebarSections.findIndex((s) => s.id === activeSection) + 1
                  ]?.label}
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
