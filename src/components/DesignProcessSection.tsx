"use client";
import React from "react";
import { DesignProcessCards } from "@/components/ui/design-process-cards";
import GridBackground from "@/components/ui/grid-background";
import { DecorativeGlowBraces } from "@/components/ui/decorative-glow-braces";

export const DesignProcessSection = () => {
  return (
    <section id="design-process" className="relative">
      <GridBackground spacing={20} compact={true}>
        {/* Decorative Background Elements */}
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

        <div className="min-w-[70vw] mx-auto px-4 py-6 overflow-hidden">
          <DesignProcessCards />
        </div>
      </GridBackground>
    </section>
  );
};
