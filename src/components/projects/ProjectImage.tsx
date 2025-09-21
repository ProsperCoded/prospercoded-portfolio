"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  size?: "small" | "medium" | "large" | "full";
  showZoom?: boolean;
  caption?: string;
}

const sizeClasses = {
  small: "max-w-sm",
  medium: "max-w-md",
  large: "max-w-2xl",
  full: "max-w-full",
};

export default function ProjectImage({
  src,
  alt,
  className = "",
  size = "medium",
  showZoom = true,
  caption,
}: ProjectImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div className={`relative group ${sizeClasses[size]} ${className}`}>
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => showZoom && setIsZoomed(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        />

        {showZoom && (
          <motion.div
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <ZoomIn className="w-8 h-8 text-white" />
          </motion.div>
        )}

        {caption && (
          <p className="text-sm text-foreground/70 mt-2 text-center italic">
            {caption}
          </p>
        )}
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              className="relative max-w-7xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
              {caption && (
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm text-white p-4 rounded-lg">
                  <p className="text-center">{caption}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
