"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faPlay,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectItem } from "@/data/ProjectsData";

interface ProjectHeroProps {
  project: ProjectItem;
  className?: string;
}

export default function ProjectHero({
  project,
  className = "",
}: ProjectHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

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

  // Auto-rotate images
  useEffect(() => {
    if (loadedImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex + 1 === loadedImages.length ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [loadedImages.length]);

  const slideVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      rotateX: -45,
    },
  };

  return (
    <div className={`relative h-screen overflow-hidden ${className}`}>
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {loadedImages.length > 0 && (
            <motion.div
              key={currentImageIndex}
              initial="initial"
              animate="visible"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={loadedImages[currentImageIndex]}
                alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                className="h-full w-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      </div>

      {/* Image Indicators */}
      {loadedImages.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex gap-2">
            {loadedImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
