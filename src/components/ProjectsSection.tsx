"use client";
import React from "react";
import Link from "next/link";
import { ProjectShowcase } from "./ui/project-showcase";
import { projects as projectsData } from "@/data/ProjectsData";
import GridBackground from "@/components/ui/grid-background";
import { DecorativeGlowBraces } from "@/components/ui/decorative-glow-braces";
import { PersonalCTAButton } from "@/components/ui/personal-cta-button";
import { SectionTitle } from "@/components/ui/section-title";
function openInNewTab(link: string) {
  window.open(link, "_blank", "noopener,noreferrer");
}

export const ProjectsSection = () => {
  const projects = Object.values(projectsData);

  return (
    <section id="projects" className="relative md:mt-[4rem]">
      <DecorativeGlowBraces
        type="square"
        size="xl"
        glowColor="var(--accent-yellow)"
        glowIntensity="low"
        rotation={-25}
        opacity={0.4}
        glow={false}
        className="top-1/3 right-12"
      />
      <DecorativeGlowBraces
        type="curly"
        size="lg"
        glowColor="var(--accent-green)"
        rotation={45}
        opacity={0.2}
        glow={true}
        className="bottom-32 left-1/4 hidden sm:block"
      />
      <DecorativeGlowBraces
        type="square"
        size="xl"
        glowColor="var(--imperial-red)"
        glowIntensity="medium"
        rotation={-15}
        opacity={0.3}
        glow={false}
        className="bottom-20 right-20 hidden sm:block"
      />
      <div>
        <div className="max-w-6xl mx-auto relative">
          <SectionTitle title="Featured Projects" />

          <div className="absolute inset-0 bg-gradient-to-r from-imperial-red/5 via-transparent to-folly/5 rounded-3xl blur-3xl -z-10"></div>

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

          <div className="hidden md:flex justify-center mt-8">
            <PersonalCTAButton
              variant="arrow"
              size="lg"
              imageSize="large"
              href="/projects"
              image="/assets/icons/project-icon.svg"
              imageAlt="Project icon"
              className="font-semibold tracking-wide"
            >
              View All Projects
            </PersonalCTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};
