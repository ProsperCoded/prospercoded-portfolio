"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Lightbulb, Code, Rocket } from "lucide-react";

const Card = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-border/20 group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-6 relative h-[300px] rounded-xl bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
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
        <div className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h3 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-foreground mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h3>
        <p className="dark:text-white/80 text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-muted-foreground mt-2 group-hover/canvas-card:text-white/80 group-hover/canvas-card:-translate-y-1 transition duration-200 leading-relaxed">
          {description}
        </p>
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
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-pink to-primary bg-clip-text text-transparent">
          My Design Process
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From ideation to deployment, here's how I approach building innovative
          solutions
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-6xl mx-auto">
        <Card
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
