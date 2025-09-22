import { cn } from "@/lib/utils";
import React from "react";

type BraceType = "square" | "curly";

type DecorativeGlowBracesProps = {
  type?: BraceType;
  className?: string;
  glowColor?: string;
  glowIntensity?: "low" | "medium" | "high";
  size?: "lg" | "xl" | "2xl" | "3xl" | "4xl";
  rotation?: number;
  opacity?: number;
  glow?: boolean;
};

export function DecorativeGlowBraces({
  type = "square",
  className = "",
  glowColor = "var(--accent-purple)", // accent purple
  glowIntensity = "medium",
  size = "2xl",
  rotation = 0,
  opacity = 0.7,
  glow = true,
}: DecorativeGlowBracesProps) {
  const braces = {
    square: { open: "[", close: "]" },
    curly: { open: "{", close: "}" },
  };

  const sizeClasses = {
    lg: "text-6xl",
    xl: "text-7xl",
    "2xl": "text-8xl",
    "3xl": "text-9xl",
    "4xl": "text-[12rem]",
  };

  const glowIntensityMap = {
    low: "drop-shadow(0 0 10px currentColor)",
    medium:
      "drop-shadow(0 0 20px currentColor) drop-shadow(0 0 40px currentColor)",
    high: "drop-shadow(0 0 30px currentColor) drop-shadow(0 0 60px currentColor) drop-shadow(0 0 90px currentColor)",
  };

  const braceStyle = {
    filter: glow ? glowIntensityMap[glowIntensity] : "none",
    color: glowColor,
    opacity: opacity,
    transform: `rotate(${rotation}deg)`,
    textShadow: glow ? `0 0 20px ${glowColor}, 0 0 40px ${glowColor}` : "none",
  };

  return (
    <div
      className={cn(
        "absolute select-none pointer-events-none font-mono font-bold flex items-center gap-2",
        sizeClasses[size],
        className
      )}
      style={braceStyle}
    >
      <span>{braces[type].open}</span>
      <span>{braces[type].close}</span>
    </div>
  );
}
