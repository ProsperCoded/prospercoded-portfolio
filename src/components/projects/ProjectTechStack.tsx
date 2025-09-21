"use client";
import React from "react";
import { motion } from "motion/react";
import { technologies } from "@/data/TechnologiesData";

interface ProjectTechStackProps {
  techStack: (typeof technologies)[keyof typeof technologies][];
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
  className = "",
  showCategories = true,
  size = "medium",
}: ProjectTechStackProps) {
  // Group technologies by category
  const groupedTech = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof techStack>);

  const categoryColors = {
    frontend: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    backend: "bg-green-500/10 text-green-500 border-green-500/20",
    database: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    deployment: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    language: "bg-red-500/10 text-red-500 border-red-500/20",
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
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {techStack.map((tech, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`${sizeClasses[size]} rounded-full border font-medium ${
              categoryColors[tech.category]
            }`}
          >
            {tech.name}
          </motion.span>
        ))}
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
            {techs.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`${
                  sizeClasses[size]
                } rounded-full border font-medium ${
                  categoryColors[tech.category]
                }`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
