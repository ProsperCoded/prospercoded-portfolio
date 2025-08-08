"use client";
import React from "react";
import Link from "next/link";
import { ProjectShowcase } from "./ui/project-showcase";
import { projects as projectsData } from "@/data/ProjectsData";
import GridBackground from "@/components/ui/grid-background";
import { DecorativeGlowBraces } from "@/components/ui/decorative-glow-braces";
function openInNewTab(link: string) {
  window.open(link, "_blank", "noopener,noreferrer");
}

export const ProjectsSection = () => {
  const projects = projectsData;

  return (
    <section id="projects" className="relative md:mt-[4rem]">
      {/* <GridBackground spacing={20}> */}
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
      <div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-4 relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-pink to-primary bg-clip-text text-transparent">
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

          {/* View More Button */}
          <div className="flex justify-center mt-8">
            <Link
              href="/projects"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out bg-gradient-to-r from-primary via-pink to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">View All Projects</span>
              <svg
                className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-pink/20 to-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-pink to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
      {/* </GridBackground> */}
    </section>
  );
};
