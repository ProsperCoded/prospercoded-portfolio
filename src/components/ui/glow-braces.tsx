import { cn } from "@/lib/utils";
import React from "react";

type BraceType = "square" | "curly";

type GlowBracesProps = {
  type?: BraceType;
  children: React.ReactNode;
  className?: string;
  glowOpacity?: number;
  glowColor?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export function GlowBraces({
  type = "square",
  children,
  className = "",
  glowOpacity = 0.6,
  glowColor = "rgb(147, 51, 234)", // purple-600
  size = "md",
}: GlowBracesProps) {
  const braces = {
    square: { open: "[", close: "]" },
    curly: { open: "{", close: "}" },
  };

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const braceStyle = {
    filter: `drop-shadow(0 0 8px ${glowColor})`,
    opacity: glowOpacity,
  };

  return (
    <span
      className={cn(
        "inline-flex items-baseline align-baseline",
        sizeClasses[size],
        className
      )}
    >
      <span className="font-mono font-bold text-primary" style={braceStyle}>
        {braces[type].open}
      </span>
      <span className="mx-1 align-baseline">{children}</span>
      <span className="font-mono font-bold text-primary" style={braceStyle}>
        {braces[type].close}
      </span>
    </span>
  );
}
