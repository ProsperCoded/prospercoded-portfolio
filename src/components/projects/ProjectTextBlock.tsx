"use client";
import React from "react";
import { motion } from "motion/react";

interface ProjectTextBlockProps {
  title?: string;
  content: string | string[];
  className?: string;
  variant?: "default" | "highlight" | "quote" | "code";
  size?: "small" | "medium" | "large";
}

const variantClasses = {
  default: "text-foreground/90",
  highlight: "bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg",
  quote: "italic text-foreground/80 border-l-4 border-red-500 pl-4",
  code: "bg-foreground/5 border border-border/50 p-4 rounded-lg font-mono text-sm",
};

const sizeClasses = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};

export default function ProjectTextBlock({
  title,
  content,
  className = "",
  variant = "default",
  size = "medium",
}: ProjectTextBlockProps) {
  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul className="space-y-2">
          {content.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-2"
            >
              <span className="text-red-500 mt-1">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      );
    }

    return (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="leading-relaxed"
      >
        {content}
      </motion.p>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {title && (
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl font-semibold mb-4 text-foreground"
        >
          {title}
        </motion.h3>
      )}
      {renderContent()}
    </motion.div>
  );
}
