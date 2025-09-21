import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface PersonalCTAButtonProps {
  children: React.ReactNode;
  variant?: "outline" | "filled" | "minimal" | "arrow" | "rounded";
  size?: "sm" | "md" | "lg";
  image?: string;
  imageAlt?: string;
  imageSize?: "small" | "medium" | "large" | "xl";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string; // Add href prop for navigation
}

export function PersonalCTAButton({
  children,
  variant = "outline",
  size = "md",
  image,
  imageAlt = "Button icon",
  imageSize = "medium",
  className,
  onClick,
  disabled = false,
  href,
}: PersonalCTAButtonProps) {
  // Image size configurations
  const imageSizes = {
    small: { width: 16, height: 16, className: "h-4 w-4" },
    medium: { width: 20, height: 20, className: "h-5 w-5" },
    large: { width: 32, height: 32, className: "h-8 w-8" },
    xl: { width: 48, height: 48, className: "h-12 w-12" },
  };

  const currentImageSize = imageSizes[imageSize];

  // Base styles for all variants
  const baseStyles = cn(
    "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
    "group overflow-hidden rounded-xl", // More rounded corners
    // Size variants
    {
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    }
  );

  // Variant-specific styles
  const variantStyles = {
    outline: cn(
      "border-3 border-primary text-primary bg-white/15 backdrop-blur-md",
      "shadow-xl shadow-primary/30",
      "hover:bg-primary hover:text-primary-foreground hover:border-primary",
      "hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5",
      "active:translate-y-0 active:shadow-lg"
    ),
    filled: cn(
      "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-3 border-primary",
      "shadow-xl shadow-primary/30",
      "hover:from-primary/90 hover:to-primary/70 hover:shadow-2xl hover:shadow-primary/40",
      "hover:-translate-y-1 active:translate-y-0 active:shadow-lg",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent",
      "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
    ),
    minimal: cn(
      "text-primary bg-white/15 backdrop-blur-md border-2 border-primary/60",
      "shadow-lg shadow-primary/20",
      "hover:bg-primary/10 hover:shadow-xl hover:-translate-y-0.5",
      "active:translate-y-0 active:bg-primary/5"
    ),
    arrow: cn(
      "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-3 border-primary",
      "shadow-xl shadow-primary/30",
      "hover:from-primary/90 hover:to-primary/70 hover:shadow-2xl hover:shadow-primary/40",
      "hover:-translate-y-1 active:translate-y-0 active:shadow-lg",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent",
      "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
      "pr-6" // Extra padding for arrow
    ),
    rounded: cn(
      "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-3 border-primary",
      "bg-white/15 backdrop-blur-md",
      "shadow-xl shadow-primary/30",
      "hover:bg-primary hover:text-primary-foreground hover:border-primary",
      "hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5",
      "active:translate-y-0 active:shadow-lg",
      "rounded-full" // Fully rounded button
    ),
  };

  // Arrow component for arrow variant
  const ArrowIcon = () => (
    <div className="ml-2 flex h-6 w-6 items-center justify-center rounded-full border border-current transition-all duration-300  group-hover:translate-x-1">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  );

  // Render as Link if href is provided, otherwise as button
  const ButtonContent = () => (
    <>
      {/* Image/Icon for left side */}
      {image &&
        (variant === "rounded" ||
          variant === "filled" ||
          variant === "minimal") && (
          <div
            className={cn(
              "mr-3 flex items-center justify-center",
              currentImageSize.className
            )}
          >
            <Image
              src={image}
              alt={imageAlt}
              width={currentImageSize.width}
              height={currentImageSize.height}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}

      {/* Button text */}
      <span className="relative z-10">{children}</span>

      {/* Arrow for arrow variant */}
      {variant === "arrow" && <ArrowIcon />}

      {/* Animated glass effect overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        {/* Animated glass shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer opacity-80" />
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        <div
          className={cn(
            baseStyles,
            variantStyles[variant],
            className,
            "cursor-pointer"
          )}
        >
          <ButtonContent />
        </div>
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      <ButtonContent />
    </button>
  );
}
