"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, FileText } from "lucide-react";
import { ProjectItem } from "@/data/ProjectsData";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export default function ProjectCard({
  project,
  className = "",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Get project images for the slider
  const projectImages = project.images.map((img) => img.src);

  return (
    <motion.div
      className={`group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
    >
      {/* Image Slider */}
      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
        <ImagesSlider
          images={projectImages}
          className="h-full"
          autoplay={true}
          direction="up"
          overlay={false}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

          {/* Project Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-1">
                {project.name}
              </h3>
              <p className="text-sm text-white/80 mb-3 line-clamp-2">
                {project.designation}
              </p>
              <p className="text-xs sm:text-sm text-white/70 line-clamp-3 leading-relaxed">
                {project.quote}
              </p>
            </motion.div>
          </div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-primary/20 backdrop-blur-sm z-30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: isHovered ? 1 : 0.8,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-white"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium">View Project</p>
              </motion.div>
            </div>
          </motion.div>
        </ImagesSlider>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
            >
              {tech.name}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 bg-foreground/10 text-foreground/60 text-xs rounded-full">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Link
            href={`/projects/${project.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-foreground/5 hover:bg-foreground/10 border border-border/50 rounded-lg transition-all duration-200 text-xs sm:text-sm flex-1 justify-center"
          >
            <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Brief</span>
          </Link>

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-foreground/5 hover:bg-foreground/10 border border-border/50 rounded-lg transition-all duration-200 text-xs sm:text-sm flex-1 justify-center"
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Code</span>
            </a>
          )}

          {project.webLink && (
            <a
              href={project.webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-primary to-pink text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 text-xs sm:text-sm flex-1 justify-center"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
