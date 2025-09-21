"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Github,
  ExternalLink,
} from "lucide-react";
import { technologies } from "@/data/TechnologiesData";
import TechStack from "./tech-stack";
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
  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium text-white/80 mb-2">Tech Stack</h4>
      <div className="space-y-3">
        {Object.entries(techChoices).map(([category, techs]) => (
          <div key={category} className="space-y-2">
            <h5 className="text-xs font-medium text-white/60">{category}</h5>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 backdrop-blur-sm rounded-md border border-white/10 hover:bg-white/10 transition-colors"
                >
                  {"icon" in tech.tech && tech.tech.icon && (
                    <img
                      src={tech.tech.icon}
                      alt={tech.tech.name}
                      className="w-4 h-4 object-contain"
                    />
                  )}
                  <span className="text-xs font-medium text-white">
                    {tech.tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Project Links Component
const ProjectLinks = ({
  githubLink,
  webLink,
}: {
  githubLink?: string;
  webLink?: string;
}) => {
  return (
    <div className="mt-4 flex gap-3">
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-600/30 hover:border-gray-500/50 transition-all group"
        >
          <Github className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            GitHub
          </span>
        </a>
      )}
      {webLink && (
        <a
          href={webLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg border border-primary/30 hover:border-primary/50 transition-all group"
        >
          <ExternalLink className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
          <span className="text-sm text-primary group-hover:text-primary-foreground transition-colors">
            Live Demo
          </span>
        </a>
      )}
    </div>
  );
};

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  images: { src: string; isPrimary: boolean }[];
  link?: string;
  githubLink?: string;
  webLink?: string;
  architecture?: {
    techChoices: {
      [category: string]: {
        tech: (typeof technologies)[keyof typeof technologies];
        reason?: string;
      }[];
    };
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
  desktopVersionBottomThreshold?: number;
  maxImageWidth?: number;
  imageWidthPercentage?: number;
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
  imageAspectRatio?: number;
  isRTL?: boolean;
  onItemClick?: (link: string) => void;
  outerRounding?: string;
  innerRounding?: string;
  outlineColor?: string;
  hoverOutlineColor?: string;
  buttonInscriptions?: {
    previousButton: string;
    nextButton: string;
    openWebAppButton: string;
  };
  halomotButtonGradient?: string;
  halomotButtonBackground?: string;
  halomotButtonTextColor?: string;
  halomotButtonOuterBorderRadius?: string;
  halomotButtonInnerBorderRadius?: string;
  halomotButtonHoverTextColor?: string;
};

export const ProjectShowcase = ({
  testimonials,
  autoplay = false,
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
  desktopVersionBottomThreshold = 1024,
  mobile = {},
  imageAspectRatio = 1.37,
  isRTL = false,
  onItemClick,
  outerRounding = "18.2px",
  innerRounding = "18px",
  outlineColor = "#33313d",
  hoverOutlineColor = "#403d4d",
  buttonInscriptions = {
    previousButton: "Previous",
    nextButton: "Next",
    openWebAppButton: "Open Web App",
  },
  halomotButtonGradient = "linear-gradient(to right, #a123f4, #603dec)",
  halomotButtonBackground = "#111014",
  halomotButtonTextColor = "#fff",
  halomotButtonOuterBorderRadius = "6.34px",
  halomotButtonInnerBorderRadius = "6px",
  halomotButtonHoverTextColor,
}: ProjectShowcaseProps) => {
  const [active, setActive] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [componentWidth, setComponentWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  // Use Mobile Config (with defaults)
  const currentFontSizes =
    isMobileView && mobile.fontSizes ? mobile.fontSizes : fontSizes;
  const currentSpacing = {
    ...spacing,
    ...(isMobileView && mobile.spacing ? mobile.spacing : {}),
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && !isHovered) {
      const interval = setInterval(handleNext, 8000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isHovered]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleResize = useCallback(() => {
    if (componentRef.current) {
      setComponentWidth(componentRef.current.offsetWidth);
      setIsMobileView(
        componentRef.current.offsetWidth < desktopVersionBottomThreshold
      );
    }
  }, [desktopVersionBottomThreshold]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);
    if (componentRef.current) {
      resizeObserver.observe(componentRef.current);
    }
    handleResize(); // Initial check
    return () => {
      if (componentRef.current) {
        resizeObserver.unobserve(componentRef.current);
      }
    };
  }, [handleResize]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const calculateGap = (width: number) => {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth)
      return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
    return (
      minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
    );
  };

  // Helper function to get primary image
  const getPrimaryImage = (testimonial: Testimonial) => {
    const primaryImage = testimonial.images.find((img) => img.isPrimary);
    return primaryImage ? primaryImage.src : testimonial.images[0]?.src || "";
  };

  return (
    <div
      ref={componentRef}
      className={`w-full mx-auto antialiased font-sans py-${currentSpacing.top} pb-${currentSpacing.bottom}`}
      style={{
        lineHeight: currentSpacing.lineHeight,
        backgroundColor: "transparent",
        direction: isRTL ? "rtl" : "ltr",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative"
        style={{
          display: "grid",
          gridTemplateColumns: isMobileView
            ? "1fr"
            : isRTL
            ? "1fr 1fr"
            : "1fr 1fr",
          gap: `${calculateGap(componentWidth)}px`,
        }}
      >
        {isRTL && !isMobileView ? (
          <>
            <div className="w-full">
              <div
                className="relative"
                style={{ paddingTop: `${(1 / imageAspectRatio) * 100}%` }}
              >
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={`${testimonial.name}-${index}`}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index)
                          ? 999
                          : testimonials.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <ImageContainer
                        src={getPrimaryImage(testimonial)}
                        alt={testimonial.name}
                        outerRounding={outerRounding}
                        innerRounding={innerRounding}
                        outlineColor={outlineColor}
                        hoverOutlineColor={hoverOutlineColor}
                        onClick={() =>
                          isActive(index) &&
                          onItemClick &&
                          onItemClick(testimonials[active].link || "")
                        }
                        showViewIcon={isActive(index)}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex justify-between flex-col py-4 w-full">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <h3
                  className={`font-bold`}
                  style={{
                    fontSize: currentFontSizes.name,
                    color: colors.name,
                    marginTop: currentSpacing.nameTop,
                    marginBottom: currentSpacing.nameBottom,
                    textAlign: "right",
                  }}
                >
                  {testimonials[active].name}
                </h3>
                <p
                  style={{
                    fontSize: currentFontSizes.position,
                    color: colors.position,
                    marginTop: currentSpacing.positionTop,
                    marginBottom: currentSpacing.positionBottom,
                    textAlign: "right",
                  }}
                >
                  {testimonials[active].designation}
                </p>
                <motion.p
                  style={{
                    fontSize: currentFontSizes.testimony,
                    color: colors.testimony,
                    marginTop: currentSpacing.testimonyTop,
                    marginBottom: currentSpacing.testimonyBottom,
                    textAlign: "right",
                  }}
                >
                  {testimonials[active].quote.split(" ").map((word, index) => (
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
                </motion.p>

                {/* Tech Stack */}
                {testimonials[active].architecture?.techChoices && (
                  <ArchitectureTechChoices
                    techChoices={testimonials[active].architecture!.techChoices}
                  />
                )}

                {/* Project Links */}
                <ProjectLinks
                  githubLink={testimonials[active].githubLink}
                  webLink={testimonials[active].webLink}
                />
              </motion.div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              <div
                className="relative"
                style={{ paddingTop: `${(1 / imageAspectRatio) * 100}%` }}
              >
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={`${testimonial.name}-${index}`}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index)
                          ? 999
                          : testimonials.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <ImageContainer
                        src={getPrimaryImage(testimonial)}
                        alt={testimonial.name}
                        outerRounding={outerRounding}
                        innerRounding={innerRounding}
                        outlineColor={outlineColor}
                        hoverOutlineColor={hoverOutlineColor}
                        onClick={() =>
                          isActive(index) &&
                          onItemClick &&
                          onItemClick(testimonials[active].link || "")
                        }
                        showViewIcon={isActive(index)}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex justify-between flex-col py-4 w-full">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <h3
                  className={`font-bold`}
                  style={{
                    fontSize: currentFontSizes.name,
                    color: colors.name,
                    marginTop: currentSpacing.nameTop,
                    marginBottom: currentSpacing.nameBottom,
                  }}
                >
                  {testimonials[active].name}
                </h3>
                <p
                  style={{
                    fontSize: currentFontSizes.position,
                    color: colors.position,
                    marginTop: currentSpacing.positionTop,
                    marginBottom: currentSpacing.positionBottom,
                  }}
                >
                  {testimonials[active].designation}
                </p>
                <motion.p
                  style={{
                    fontSize: currentFontSizes.testimony,
                    color: colors.testimony,
                    marginTop: currentSpacing.testimonyTop,
                    marginBottom: currentSpacing.testimonyBottom,
                  }}
                >
                  {testimonials[active].quote.split(" ").map((word, index) => (
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
                </motion.p>

                {/* Tech Stack */}
                {testimonials[active].architecture?.techChoices && (
                  <ArchitectureTechChoices
                    techChoices={testimonials[active].architecture!.techChoices}
                  />
                )}

                {/* Project Links */}
                <ProjectLinks
                  githubLink={testimonials[active].githubLink}
                  webLink={testimonials[active].webLink}
                />
              </motion.div>
            </div>
          </>
        )}
      </div>

      {/* Overlay navigation arrows - desktop & mobile friendly */}
      <button
        aria-label="Previous project"
        onClick={handlePrev}
        className={`group absolute z-[1000] h-10 w-10 md:h-11 md:w-11 rounded-full border border-white/10 bg-black/40 text-white backdrop-blur flex items-center justify-center transition hover:bg-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-0 ${
          isMobileView ? "left-3 bottom-3" : "left-3 top-1/2 -translate-y-1/2"
        }`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next project"
        onClick={handleNext}
        className={`group absolute z-[1000] h-10 w-10 md:h-11 md:w-11 rounded-full border border-white/10 bg-black/40 text-white backdrop-blur flex items-center justify-center transition hover:bg-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-0 ${
          isMobileView ? "right-3 bottom-3" : "right-3 top-1/2 -translate-y-1/2"
        }`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

type ImageContainerProps = {
  src: string;
  alt: string;
  outerRounding: string;
  innerRounding: string;
  outlineColor: string;
  hoverOutlineColor: string;
  onClick?: () => void;
  showViewIcon?: boolean;
};

const ImageContainer = ({
  src,
  alt,
  outerRounding,
  innerRounding,
  outlineColor,
  hoverOutlineColor,
  onClick,
  showViewIcon,
}: ImageContainerProps) => (
  <div
    role={onClick ? "button" : undefined}
    tabIndex={onClick ? 0 : -1}
    onClick={onClick}
    onKeyDown={(e) => {
      if (!onClick) return;
      if (e.key === "Enter" || e.key === " ") onClick();
    }}
    className="relative h-full w-full project-showcase-image-container group"
    style={{
      borderRadius: outerRounding,
      padding: "1px",
      backgroundColor: outlineColor,
      transition: "background-color 0.3s ease-in-out",
    }}
  >
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        borderRadius: innerRounding,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        draggable={false}
        className="h-full w-full object-cover object-center"
      />

      {showViewIcon && (
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-black/50 text-white backdrop-blur transition group-hover:bg-primary/30">
            <Eye className="h-4 w-4" />
          </div>
        </div>
      )}
    </div>
    <style jsx>{`
      .project-showcase-image-container:hover {
        background-color: ${hoverOutlineColor} !important;
      }
    `}</style>
  </div>
);
