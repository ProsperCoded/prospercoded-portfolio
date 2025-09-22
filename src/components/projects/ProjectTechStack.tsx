"use client";
import React from "react";
import { motion } from "motion/react";
import { technologies } from "@/data/TechnologiesData";

interface ProjectTechStackProps {
  techStack?: (typeof technologies)[keyof typeof technologies][];
  architecture?: {
    techChoices: {
      [category: string]: {
        tech: (typeof technologies)[keyof typeof technologies];
        reason?: string;
      }[];
    };
  };
  className?: string;
  showCategories?: boolean;
  size?: "small" | "medium" | "large";
}

const sizeClasses = {
  small: "text-xs px-2 py-1",
  medium: "text-sm px-3 py-2",
  large: "text-base px-4 py-3",
};

export default function ProjectTechStack({
  techStack,
  architecture,
  className = "",
  showCategories = true,
  size = "medium",
}: ProjectTechStackProps) {
  // Use architecture.techChoices if available, otherwise fall back to techStack
  const techChoices = architecture?.techChoices || techStack;

  if (!techChoices) {
    return null;
  }

  // If using architecture.techChoices, it's already grouped by category
  const groupedTech =
    architecture?.techChoices ||
    (Array.isArray(techChoices)
      ? techChoices.reduce((acc, tech) => {
          const category = tech.category || "Other";
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(tech);
          return acc;
        }, {} as Record<string, typeof techChoices>)
      : {});

  const categoryColors = {
    frontend: "bg-purple-start/10 text-purple-start border-purple-start/20",
    backend: "bg-accent-green/10 text-accent-green border-accent-green/20",
    database: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
    deployment: "bg-tangelo/10 text-tangelo border-tangelo/20",
    language: "bg-imperial-red/10 text-imperial-red border-imperial-red/20",
    tool: "bg-gray-500/10 text-gray-500 border-gray-500/20",
  };

  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    deployment: "Deployment",
    language: "Language",
    tool: "Tools",
  };

  if (!showCategories) {
    // Flatten all technologies from all categories
    const allTechs = Object.values(groupedTech).flat();

    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {allTechs.map((tech, index) => {
          const techObj = "tech" in tech ? tech.tech : tech;
          const techName = techObj.name;
          const techIcon = techObj.icon;
          const techColor = techObj.color;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`flex items-center gap-1.5 ${sizeClasses[size]} bg-foreground/5 backdrop-blur-sm rounded-md border border-border/50 hover:bg-foreground/10 transition-colors`}
            >
              {techIcon ? (
                <img
                  src={techIcon}
                  alt={techName}
                  className="w-4 h-4 object-contain"
                />
              ) : (
                <div
                  className={`w-3 h-3 rounded-sm ${techColor || "bg-gray-400"}`}
                />
              )}
              <span className={`font-medium ${techColor || "text-foreground"}`}>
                {techName}
              </span>
            </motion.div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {Object.entries(groupedTech).map(([category, techs]) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <h4 className="text-lg font-semibold text-foreground">
            {categoryLabels[category as keyof typeof categoryLabels]}
          </h4>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech: any, index: number) => {
              const techObj = "tech" in tech ? tech.tech : tech;
              const techName = techObj.name;
              const techIcon = techObj.icon;
              const techColor = techObj.color;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex items-center gap-1.5 ${sizeClasses[size]} bg-foreground/5 backdrop-blur-sm rounded-md border border-border/50 hover:bg-foreground/10 transition-colors`}
                >
                  {techIcon ? (
                    <img
                      src={techIcon}
                      alt={techName}
                      className="w-4 h-4 object-contain"
                    />
                  ) : (
                    <div
                      className={`w-3 h-3 rounded-sm ${
                        techColor || "bg-gray-400"
                      }`}
                    />
                  )}
                  <span
                    className={`font-medium ${techColor || "text-foreground"}`}
                  >
                    {techName}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
