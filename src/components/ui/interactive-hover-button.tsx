import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <div className="relative">
      {/* Rainbow animated border */}
      <div
        className="absolute -inset-1 rounded-full opacity-75 blur-sm animate-rainbow-pulse"
        style={{
          background: `conic-gradient(from 0deg, 
            hsl(var(--primary)), 
            hsl(var(--pink)), 
            hsl(var(--destructive)), 
            hsl(var(--primary)), 
            hsl(var(--pink)), 
            hsl(var(--destructive)), 
            hsl(var(--primary))
          )`,
        }}
      />

      <button
        ref={ref}
        className={cn(
          "group relative w-auto cursor-pointer overflow-hidden rounded-full border-2 border-primary bg-background p-2 px-6 text-center font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-150 group-hover:bg-pink"></div>
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
          <span>{children}</span>
          <ArrowRight className="h-4 w-4" />
        </div>

        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-pink/20 to-destructive/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>
    </div>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
