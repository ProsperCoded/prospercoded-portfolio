"use client";
import React from "react";
import { SpecializationShowcase } from "./ui/specialization-showcase";
import { specializations as specializationsData } from "@/data/SpecializationsData";
import { DecorativeGlowBraces } from "@/components/ui/decorative-glow-braces";
import { SectionTitle } from "@/components/ui/section-title";

export const SpecializationsSection = () => {
  const specializations = Object.values(specializationsData);

  return (
    <section id="specializations" className="relative md:mt-[4rem]">
      {/* Decorative Elements - Adjusted colors for differentiation */}
      <DecorativeGlowBraces
        type="square"
        size="xl"
        glowColor="var(--accent-blue, #3b82f6)"
        glowIntensity="low"
        rotation={15}
        opacity={0.3}
        glow={false}
        className="top-1/4 left-12 hidden sm:block"
      />
      <DecorativeGlowBraces
        type="curly"
        size="lg"
        glowColor="var(--accent-purple, #8b5cf6)"
        rotation={-35}
        opacity={0.2}
        glow={true}
        className="bottom-32 right-1/4 hidden sm:block"
      />

      <div>
        <div className="max-w-6xl mx-auto relative">
          <SectionTitle 
            title="Specializations" 
            gradientFrom="from-blue-500"
            gradientVia="via-indigo-500"
            gradientTo="to-purple-500"
            lineColorFrom="from-transparent"
            lineColorTo="to-indigo-500/50"
            dotColor1="bg-blue-500/60"
            dotColor2="bg-indigo-500/60"
            dotColor3="bg-purple-500/60"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl blur-3xl -z-10"></div>

          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-8">
            <SpecializationShowcase
              specializations={specializations}
              colors={{
                name: "var(--project-showcase-name-color, #fff)",
                issuer: "var(--project-showcase-position-color, #9ca3af)",
                description: "var(--project-showcase-testimony-color, #d1d5db)",
              }}
              fontSizes={{
                name: "var(--project-showcase-name-size, 1.5rem)",
                issuer: "var(--project-showcase-position-size, 0.875rem)",
                description: "var(--project-showcase-testimony-size, 1.125rem)",
              }}
              spacing={{
                nameTop: "var(--project-showcase-name-top, 0)",
                nameBottom: "var(--project-showcase-name-bottom, 0.5em)",
                issuerTop: "var(--project-showcase-position-top, 0)",
                issuerBottom: "var(--project-showcase-position-bottom, 0.25em)",
                descriptionTop: "var(--project-showcase-testimony-top, 1em)",
                descriptionBottom: "var(--project-showcase-testimony-bottom, 1em)",
                lineHeight: "var(--project-showcase-line-height, 1.5)",
              }}
              autoplay={true}
              mobile={{
                fontSizes: {
                  name: "24px",
                  issuer: "14px",
                  description: "16px",
                },
                spacing: {
                  descriptionTop: "1em",
                  descriptionBottom: "1.5em",
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
