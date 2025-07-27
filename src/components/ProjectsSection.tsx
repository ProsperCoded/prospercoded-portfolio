"use client";
import React from "react";
import { ProjectShowcase } from "./ui/project-showcase";
import { Code, Braces } from "lucide-react";
import GridBackground from "@/components/ui/grid-background";
import { DecorativeGlowBraces } from "@/components/ui/decorative-glow-braces";
import { DesignProcessCards } from "@/components/ui/design-process-cards";

function openInNewTab(link: string) {
  window.open(link, "_blank", "noopener,noreferrer");
}

export const ProjectsSection = () => {
  const projects = [
    {
      name: "UniNav",
      quote:
        "A university-wide platform that helps students access and share study materials in an organized, scalable way. Built with Node.js backend and modern frontend technologies to solve real campus challenges.",
      designation: "Full Stack Project",
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      link: "https://github.com/prospercoded/uninav",
    },
    {
      name: "MedMap",
      quote:
        "A healthcare platform designed to help users locate nearby medical facilities and services. Features real-time data integration and user-friendly interface for emergency and routine medical needs.",
      designation: "Healthcare Platform",
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      link: "https://github.com/prospercoded/medmap",
    },
    {
      name: "GoalFund",
      quote:
        "A crowdfunding platform that connects goal-oriented individuals with supporters. Features secure payment integration, real-time progress tracking, and transparency-focused design.",
      designation: "Fintech Platform",
      src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      link: "https://github.com/prospercoded/goalfund",
    },
    {
      name: "Party Currency",
      quote:
        "An innovative event management and payment system that streamlines party planning and expense tracking. Built with modern technologies to handle real-time transactions and event coordination.",
      designation: "Event Management System",
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      link: "https://github.com/prospercoded/party-currency",
    },
    {
      name: "Faculty Payment System",
      quote:
        "A comprehensive payment system developed for university faculty operations. Solves real-world logistical challenges on campus with secure transaction processing and administrative features.",
      designation: "Educational Platform",
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      link: "https://github.com/prospercoded/faculty-payment",
    },
    {
      name: "ATC Africa Integration",
      quote:
        "Led a team of 5 Backend Engineers to integrate an event management system on the official ATC Africa site. Focused on scalability, performance optimization, and seamless user experience.",
      designation: "Team Leadership Project",
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      link: "https://atcafrica.com",
    },
  ];

  return (
    <section id="projects" className="relative">
      <GridBackground spacing={20}>
        {/* Decorative Background Elements */}

        <DecorativeGlowBraces
          type="square"
          size="xl"
          glowColor="rgb(251, 191, 36)"
          glowIntensity="low"
          rotation={-25}
          opacity={0.4}
          glow={false}
          className="top-1/3 right-12"
        />
        <DecorativeGlowBraces
          type="curly"
          size="lg"
          glowColor="rgb(34, 197, 94)"
          rotation={45}
          opacity={0.2}
          glow={true}
          className="bottom-32 left-1/4 hidden sm:block"
        />
        <DecorativeGlowBraces
          type="square"
          size="xl"
          glowColor="rgb(239, 68, 68)"
          glowIntensity="medium"
          rotation={-15}
          opacity={0.3}
          glow={false}
          className="bottom-20 right-20 hidden sm:block"
        />

        <div className="container mx-auto px-4 py-20 overflow-hidden">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-pink to-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center mt-8 gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50"></div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                <div className="w-2 h-2 rounded-full bg-pink/60"></div>
                <div className="w-2 h-2 rounded-full bg-primary/60"></div>
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
          </div>

          {/* Design Process Cards */}
          <DesignProcessCards />

          <div className="max-w-6xl mx-auto relative">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-pink/5 rounded-3xl blur-3xl -z-10"></div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-8">
              <ProjectShowcase
                testimonials={projects}
                colors={{
                  name: "var(--project-showcase-name-color)",
                  position: "var(--project-showcase-position-color)",
                  testimony: "var(--project-showcase-testimony-color)",
                }}
                fontSizes={{
                  name: "var(--project-showcase-name-size)",
                  position: "var(--project-showcase-position-size)",
                  testimony: "var(--project-showcase-testimony-size)",
                }}
                spacing={{
                  nameTop: "var(--project-showcase-name-top)",
                  nameBottom: "var(--project-showcase-name-bottom)",
                  positionTop: "var(--project-showcase-position-top)",
                  positionBottom: "var(--project-showcase-position-bottom)",
                  testimonyTop: "var(--project-showcase-testimony-top)",
                  testimonyBottom: "var(--project-showcase-testimony-bottom)",
                  lineHeight: "var(--project-showcase-line-height)",
                }}
                halomotButtonGradient="var(--project-showcase-button-gradient)"
                halomotButtonBackground="var(--project-showcase-button-background)"
                halomotButtonTextColor="var(--project-showcase-button-text-color)"
                halomotButtonOuterBorderRadius="var(--project-showcase-button-outer-radius)"
                halomotButtonInnerBorderRadius="var(--project-showcase-button-inner-radius)"
                halomotButtonHoverTextColor="var(--project-showcase-button-hover-text-color)"
                onItemClick={openInNewTab}
                autoplay={true}
                mobile={{
                  fontSizes: {
                    name: "24px",
                    position: "16px",
                    testimony: "18px",
                  },
                  spacing: {
                    testimonyTop: "1em",
                    testimonyBottom: "1.5em",
                  },
                }}
                buttonInscriptions={{
                  previousButton: "Previous",
                  nextButton: "Next",
                  openWebAppButton: "View Project",
                }}
              />
            </div>
          </div>
        </div>
      </GridBackground>
    </section>
  );
};
