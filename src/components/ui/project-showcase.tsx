"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { technologies } from "@/data/TechnologiesData";
import TechStack from "./tech-stack";
import { FeaturedShowcase } from "./featured-showcase";

// Architecture Tech Choices Component
const ArchitectureTechChoices = ({
  techChoices,
}: {
  techChoices: {
    [category: string]: {
      tech: (typeof technologies)[keyof typeof technologies];
      reason?: string;
    }[];
  };
}) => {
  // Flatten all technologies from all categories
  const allTechs = Object.values(techChoices).flat();

  return (
    <TechStack 
      techStack={allTechs.map((tech) => tech.tech)} 
      limit={5} 
    />
  );
};

// Project Links Component
const ProjectLinks = ({
  links,
}: {
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}) => {
  return (
    <div className="mt-4 flex gap-3">
      {links?.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-600/30 hover:border-gray-500/50 transition-all group pointer-events-auto"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors"
          />
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            GitHub
          </span>
        </a>
      )}
      {links?.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg border border-primary/30 hover:border-primary/50 transition-all group pointer-events-auto"
        >
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors"
          />
          <span className="text-sm text-primary group-hover:text-primary-foreground transition-colors">
            Live Demo
          </span>
        </a>
      )}
      {links?.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-all group pointer-events-auto"
        >
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors"
          />
          <span className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
            Demo
          </span>
        </a>
      )}
    </div>
  );
};

export type Testimonial = {
  name: string;
  quote: string;
  designation: string;
  images: { src: string; isPrimary: boolean }[];
  logoUrl?: string;
  link?: string;
  links?: {
    github?: string;
    projectLink?: string;
    live?: string;
    demo?: string;
  };
  architecture?: {
    techChoices: any;
  };
};

type ProjectShowcaseProps = {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: { name?: string; position?: string; testimony?: string };
  fontSizes?: { name?: string; position?: string; testimony?: string };
  spacing?: {
    top?: string;
    bottom?: string;
    lineHeight?: string;
    nameTop?: string;
    nameBottom?: string;
    positionTop?: string;
    positionBottom?: string;
    testimonyTop?: string;
    testimonyBottom?: string;
  };
  mobile?: {
    fontSizes?: { name?: string; position?: string; testimony?: string };
    spacing?: {
      top?: string;
      bottom?: string;
      lineHeight?: string;
      nameTop?: string;
      nameBottom?: string;
      positionTop?: string;
      positionBottom?: string;
      testimonyTop?: string;
      testimonyBottom?: string;
    };
  };
  desktopVersionBottomThreshold?: number;
  imageAspectRatio?: number;
  isRTL?: boolean;
  onItemClick?: (link: string) => void;
  outerRounding?: string;
  innerRounding?: string;
  outlineColor?: string;
  hoverOutlineColor?: string;
  [key: string]: any;
};

export const ProjectShowcase = ({
  testimonials,
  autoplay = true,
  colors = { name: "#fff", position: "gray-500", testimony: "gray-500" },
  fontSizes = { name: "2xl", position: "sm", testimony: "lg" },
  spacing = {
    top: "20",
    bottom: "20",
    lineHeight: "1.5",
    nameTop: "0",
    nameBottom: "0.5em",
    positionTop: "0",
    positionBottom: "0.25em",
    testimonyTop: "1em",
    testimonyBottom: "1em",
  },
  mobile = {},
  desktopVersionBottomThreshold,
  imageAspectRatio,
  isRTL,
  onItemClick,
  outerRounding,
  innerRounding,
  outlineColor,
  hoverOutlineColor,
}: ProjectShowcaseProps) => {

  const renderContent = (item: Testimonial, isMobileView: boolean, activeIndex: number) => {
    const currentFontSizes = isMobileView && mobile.fontSizes ? mobile.fontSizes : fontSizes;
    const currentSpacing = { ...spacing, ...(isMobileView && mobile.spacing ? mobile.spacing : {}) };

    return (
      <div className="flex flex-col h-full justify-center space-y-2 pointer-events-none">
        <div className="flex items-center justify-between mb-2 gap-2">
          <div className="flex items-center gap-3">
            {item.logoUrl && (
              <img
                src={item.logoUrl}
                alt={`${item.name} logo`}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain pointer-events-auto"
              />
            )}
            <h3
              className={`font-bold pointer-events-auto`}
              style={{
                fontSize: currentFontSizes.name,
                color: colors.name,
                marginTop: currentSpacing.nameTop,
                marginBottom: currentSpacing.nameBottom,
              }}
            >
              {item.name}
            </h3>
          </div>
          {isMobileView && (
            <a
              href="/projects"
              className="text-[10px] sm:text-xs px-2.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/90 hover:bg-white/20 transition-colors whitespace-nowrap flex items-center gap-1.5 font-medium tracking-wide pointer-events-auto"
            >
              View All
              <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
            </a>
          )}
        </div>
        <p
          className="pointer-events-auto"
          style={{
            fontSize: currentFontSizes.position,
            color: colors.position,
            marginTop: currentSpacing.positionTop,
            marginBottom: currentSpacing.positionBottom,
            textAlign: "left",
          }}
        >
          {item.designation}
        </p>
        <motion.div
          className="pointer-events-auto"
          style={{
            fontSize: currentFontSizes.testimony,
            color: colors.testimony,
            marginTop: currentSpacing.testimonyTop,
            marginBottom: currentSpacing.testimonyBottom,
            textAlign: "left",
          }}
        >
          {item.quote.split(" ").map((word, index) => (
            <motion.span
                key={index}
                initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                animate={{
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                }}
                transition={{
                duration: 0.2,
                ease: "easeInOut",
                delay: 0.02 * index,
                }}
                className="inline-block"
            >
                {word}&nbsp;
            </motion.span>
            ))}
        </motion.div>

        <div className="pointer-events-auto">
            {/* Tech Stack */}
            {item.architecture?.techChoices && (
            <ArchitectureTechChoices techChoices={item.architecture.techChoices} />
            )}

            {/* Project Links */}
            <ProjectLinks links={item.links} />
        </div>
      </div>
    );
  };

  return (
    <FeaturedShowcase
      items={testimonials}
      renderContent={renderContent}
      autoplay={autoplay}
      paddingY={`py-${spacing.top}`}
      desktopVersionBottomThreshold={desktopVersionBottomThreshold}
      imageAspectRatio={imageAspectRatio}
      isRTL={isRTL}
      onImageClick={(item) => {
        if (!onItemClick) return;
        const link = item.links?.projectLink || item.link || "";
        onItemClick(link);
      }}
      outerRounding={outerRounding}
      innerRounding={innerRounding}
      outlineColor={outlineColor}
      hoverOutlineColor={hoverOutlineColor}
      showZoomIconOnHover={false}
    />
  );
};
