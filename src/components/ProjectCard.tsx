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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Get project images for the slider
  const projectImages = project.images.map((img) => img.src);

  // Load images on component mount
  useEffect(() => {
    const loadImages = async () => {
      const loadPromises = projectImages.map((image) => {
        return new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = () => resolve(image);
          img.onerror = reject;
        });
      });

      try {
        const loaded = await Promise.all(loadPromises);
        setLoadedImages(loaded);
      } catch (error) {
        console.error("Failed to load images", error);
      }
    };

    loadImages();
  }, [projectImages]);

  // Handle hover-triggered image scrolling
  useEffect(() => {
    if (isHovered && loadedImages.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex + 1 === loadedImages.length ? 0 : prevIndex + 1
        );
      }, 2000); // Change image every 2 seconds on hover
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isHovered, loadedImages.length]);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
    },
    upExit: {
      opacity: 1,
      y: "-150%",
    },
  };

  return (
    <motion.div
      className={`group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10 ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
    >
      {/* Custom Image Slider */}
      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
        <div
          className="h-full w-full relative flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {loadedImages.length > 0 && (
            <AnimatePresence>
              <motion.img
                key={currentImageIndex}
                src={loadedImages[currentImageIndex]}
                initial="initial"
                animate="visible"
                exit="upExit"
                variants={slideVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h-full w-full absolute inset-0 object-cover object-center"
              />
            </AnimatePresence>
          )}

          {/* Project Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/60 backdrop-blur-sm rounded-lg p-4"
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

          {/* Hover Overlay with Visit Icon */}
          <motion.div
            className="absolute inset-0 bg-red-500/20 z-30 flex items-center justify-center"
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
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.architecture?.techChoices &&
            (() => {
              const allTechs = Object.values(
                project.architecture.techChoices
              ).flat();
              const displayTechs = allTechs.slice(0, 4);
              const remainingCount = allTechs.length - 4;

              return (
                <>
                  {displayTechs.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-red-500/10 text-red-500 text-xs rounded-full border border-red-500/20"
                    >
                      {tech.tech.name}
                    </span>
                  ))}
                  {remainingCount > 0 && (
                    <span className="px-2 py-1 bg-foreground/10 text-foreground/60 text-xs rounded-full">
                      +{remainingCount} more
                    </span>
                  )}
                </>
              );
            })()}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Link
            href={`/projects/${project.slug}`}
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
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-500 text-white rounded-lg transition-all duration-200 hover:bg-red-600 hover:shadow-lg hover:scale-105 text-xs sm:text-sm flex-1 justify-center"
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
