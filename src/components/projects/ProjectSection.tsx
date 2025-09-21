"use client";
import React from "react";
import { motion } from "motion/react";
import ProjectImage from "./ProjectImage";
import ProjectTextBlock from "./ProjectTextBlock";
import ProjectVideo from "./ProjectVideo";
import ProjectTechStack from "./ProjectTechStack";

interface ProjectSectionProps {
  id: string;
  title: string;
  icon: string;
  children: React.ReactNode;
  className?: string;
}

export default function ProjectSection({
  id,
  title,
  icon,
  children,
  className = "",
}: ProjectSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`py-12 px-6 ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <img src={icon} alt={`${title} icon`} className="w-8 h-8" />
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Export individual components for easy access
export { ProjectImage, ProjectTextBlock, ProjectVideo, ProjectTechStack };
