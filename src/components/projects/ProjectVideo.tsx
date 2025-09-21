"use client";
import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

interface ProjectVideoProps {
  src: string;
  poster?: string;
  className?: string;
  size?: "small" | "medium" | "large" | "full";
  autoplay?: boolean;
  controls?: boolean;
  title?: string;
}

const sizeClasses = {
  small: "max-w-sm",
  medium: "max-w-md",
  large: "max-w-2xl",
  full: "max-w-full",
};

export default function ProjectVideo({
  src,
  poster,
  className = "",
  size = "medium",
  autoplay = false,
  controls = true,
  title,
}: ProjectVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <div className={`relative group ${sizeClasses[size]} ${className}`}>
      <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-auto"
          muted={isMuted}
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Custom Controls Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.button
            onClick={togglePlay}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8" />
            )}
          </motion.button>
        </div>

        {/* Bottom Controls */}
        {controls && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className="hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>
              <button
                onClick={toggleFullscreen}
                className="hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {title && (
          <div className="absolute top-4 left-4 right-4">
            <h3 className="text-white font-semibold bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              {title}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
