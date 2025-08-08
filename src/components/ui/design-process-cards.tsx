"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Lightbulb, Code, Rocket, MousePointer2 } from "lucide-react";

const Card = ({
  title,
  label,
  description,
  icon,
  children,
}: {
  title: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onClick={() => isMobile && setHovered(!hovered)}
      className={`border border-border/20 group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-6 relative h-[280px] lg:h-[300px] rounded-xl bg-card/30 backdrop-blur-sm transition-all duration-300 cursor-pointer lg:cursor-default ${
        hovered
          ? "border-primary/50 shadow-lg shadow-primary/10"
          : "hover:border-primary/30"
      }`}
    >
      {/* Corner decorations */}
      <Icon className="absolute h-4 w-4 -top-2 -left-2 text-primary/60" />
      <Icon className="absolute h-4 w-4 -bottom-2 -left-2 text-primary/60" />
      <Icon className="absolute h-4 w-4 -top-2 -right-2 text-primary/60" />
      <Icon className="absolute h-4 w-4 -bottom-2 -right-2 text-primary/60" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0 rounded-xl overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        {/* Default state - always visible */}
        <div
          className={`transition duration-200 w-full mx-auto flex flex-col items-center justify-center ${
            hovered ? "-translate-y-4 opacity-0" : ""
          }`}
        >
          {icon}
          <h3 className="text-lg font-bold text-foreground mt-3 mb-1">
            {label}
          </h3>
          <p className="text-xs text-muted-foreground/80">{title}</p>
          {/* Hover indicator for desktop */}
          {!isMobile && (
            <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground/60 opacity-60 group-hover/canvas-card:opacity-100 transition-opacity duration-200">
              <MousePointer2 className="h-3 w-3" />
              <span>Hover to explore</span>
            </div>
          )}
          {/* Tap indicator for mobile */}
          {isMobile && (
            <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground/60">
              <div className="w-3 h-3 rounded-full border border-current flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-current"></div>
              </div>
              <span>Tap to explore</span>
            </div>
          )}
        </div>

        {/* Hover state content */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition duration-200 px-6 py-8 ${
            hovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <h3 className="text-white text-xl font-bold mb-4">{label}</h3>
          <p className="text-white/90 text-sm font-sansSerif leading-relaxed text-center min-w-[12rem]">
            {description}
          </p>
          {/* Close indicator for mobile */}
          {isMobile && hovered && (
            <div className="mt-4 text-xs text-white/70">Tap again to close</div>
          )}
        </div>
      </div>
    </div>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export const DesignProcessCards = () => {
  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-pink to-primary bg-clip-text text-transparent">
          My Design Process
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From ideation to deployment, here's how I approach building innovative
          solutions
        </p>
        <p className="text-xs text-muted-foreground/70 mt-3 lg:hidden">
          Tap cards to explore each phase
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-6xl mx-auto">
        <Card
          label="Plan"
          title="Planning & Strategy"
          description="I start by understanding the problem, researching user needs, and mapping out technical requirements to build a solid foundation."
          icon={
            <Lightbulb className="h-12 w-12 text-primary group-hover/canvas-card:text-white transition-colors duration-200" />
          }
        >
          <CanvasRevealEffect
            animationSpeed={3.5}
            containerClassName="bg-emerald-900 rounded-xl"
            colors={[
              [34, 197, 94],
              [16, 185, 129],
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          label="Execute"
          title="Development & Testing"
          description="With a clear plan, I code iteratively, implement features with clean architecture, and ensure robust testing throughout the process."
          icon={
            <Code className="h-12 w-12 text-primary group-hover/canvas-card:text-white transition-colors duration-200" />
          }
        >
          <CanvasRevealEffect
            animationSpeed={3.2}
            containerClassName="bg-slate-900 rounded-xl"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90 rounded-xl" />
        </Card>

        <Card
          label="Deploy"
          title="Deploy & Optimize"
          description="Finally, I deploy with confidence, monitor performance, gather feedback, and continuously optimize for better user experience."
          icon={
            <Rocket className="h-12 w-12 text-primary group-hover/canvas-card:text-white transition-colors duration-200" />
          }
        >
          <CanvasRevealEffect
            animationSpeed={4.1}
            containerClassName="bg-blue-900 rounded-xl"
            colors={[
              [59, 130, 246],
              [125, 211, 252],
            ]}
            dotSize={2}
          />
        </Card>
      </div>
    </div>
  );
};
