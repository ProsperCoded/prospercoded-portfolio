"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
  xl: "w-12 h-12",
};

const textSizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  href = "/",
  className = "",
  showText = false,
  textClassName = "",
}) => {
  const logoContent = (
    <motion.div
      className={`relative inline-block ${sizeClasses[size]} ${className}`}
      whileHover={{
        scale: 1.1,
        rotate: [0, -10, 10, -10, 10, 0],
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        rotate: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
    >
      <Image
        src="/assets/logo.png"
        alt="Prosper Enwerem Tochukwu Logo"
        fill
        className="object-contain"
      />
    </motion.div>
  );

  if (showText) {
    return (
      <Link href={href} className="flex items-center gap-2 group">
        {logoContent}
        <motion.span
          className={`font-bold bg-gradient-to-r from-imperial-red via-folly to-tangelo bg-clip-text text-transparent ${textSizeClasses[size]} ${textClassName}`}
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          Prosper
        </motion.span>
      </Link>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {logoContent}
    </Link>
  );
};

export default Logo;
