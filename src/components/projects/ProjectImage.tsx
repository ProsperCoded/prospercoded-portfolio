"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearchPlus } from "@fortawesome/free-solid-svg-icons";

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
  const [imageRect, setImageRect] = useState<DOMRect | null>(null);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!showZoom) return;

    // Get the image's position and dimensions
    const rect = e.currentTarget.getBoundingClientRect();
    setImageRect(rect);
    setIsZoomed(true);
  };

  return (
    <>
      <div className={`relative group ${sizeClasses[size]} ${className}`}>
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={handleImageClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        />

        {showZoom && (
          <motion.div
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <FontAwesomeIcon
              icon={faSearchPlus}
              className="w-8 h-8 text-white"
            />
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              initial={{
                scale: 0.1,
                opacity: 0,
                x: imageRect
                  ? imageRect.left + imageRect.width / 2 - window.innerWidth / 2
                  : 0,
                y: imageRect
                  ? imageRect.top +
                    imageRect.height / 2 -
                    window.innerHeight / 2
                  : 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                x: 0,
                y: 0,
              }}
              exit={{
                scale: 0.1,
                opacity: 0,
                x: imageRect
                  ? imageRect.left + imageRect.width / 2 - window.innerWidth / 2
                  : 0,
                y: imageRect
                  ? imageRect.top +
                    imageRect.height / 2 -
                    window.innerHeight / 2
                  : 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={src}
                alt={alt}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                initial={{ borderRadius: "0.5rem" }}
                animate={{ borderRadius: "0.75rem" }}
                transition={{ duration: 0.3 }}
              />

              {/* Close Button */}
              <motion.button
                onClick={() => setIsZoomed(false)}
                className="absolute top-6 right-6 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              </motion.button>

              {/* Caption */}
              {caption && (
                <motion.div
                  className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm text-white p-4 rounded-lg border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <p className="text-center text-sm">{caption}</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
