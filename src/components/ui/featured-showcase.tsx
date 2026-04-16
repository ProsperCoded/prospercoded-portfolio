"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faEye,
  faSearchPlus
} from "@fortawesome/free-solid-svg-icons";

export type BaseShowcaseItem = {
  name: string;
  images: { src: string; isPrimary?: boolean }[];
};

export type FeaturedShowcaseProps<T extends BaseShowcaseItem> = {
  items: T[];
  renderContent: (item: T, isMobileView: boolean, activeIndex: number) => React.ReactNode;
  autoplay?: boolean;
  paddingY?: string;
  desktopVersionBottomThreshold?: number;
  imageAspectRatio?: number;
  isRTL?: boolean;
  onImageClick?: (item: T) => void;
  outerRounding?: string;
  innerRounding?: string;
  outlineColor?: string;
  hoverOutlineColor?: string;
  showZoomIconOnHover?: boolean;
};

export const FeaturedShowcase = <T extends BaseShowcaseItem>({
  items,
  renderContent,
  autoplay = true,
  paddingY = "py-20",
  desktopVersionBottomThreshold = 1024,
  imageAspectRatio = 1.37,
  isRTL = false,
  onImageClick,
  outerRounding = "18.2px",
  innerRounding = "18px",
  outlineColor = "#33313d",
  hoverOutlineColor = "#403d4d",
  showZoomIconOnHover = false,
}: FeaturedShowcaseProps<T>) => {
  const [active, setActive] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [componentWidth, setComponentWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  // Touch handlers for mobile swipe
  const [touchStartPos, setTouchStartPos] = useState<number | null>(null);
  const [touchEndPos, setTouchEndPos] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && !isHovered) {
      const interval = setInterval(handleNext, 8000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isHovered, handleNext]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleNext, handlePrev]);

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

  const randomRotateY = (index: number) => {
    const staticRotations = [-5, 8, -3, 6, -9, 2, -7, 4, -1, 9, -8, 5, -2, 7, -6, 3, -4, 1, -10, 10, 0];
    return staticRotations[index % staticRotations.length];
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

  const getPrimaryImage = (item: BaseShowcaseItem) => {
    const primaryImage = item.images.find((img) => img.isPrimary);
    return primaryImage ? primaryImage.src : item.images[0]?.src || "";
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      ref={componentRef}
      className={`w-full mx-auto antialiased font-sans ${paddingY}`}
      style={{
        backgroundColor: "transparent",
        direction: isRTL ? "rtl" : "ltr",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={(e) => setTouchStartPos(e.targetTouches[0].clientX)}
      onTouchMove={(e) => setTouchEndPos(e.targetTouches[0].clientX)}
      onTouchEnd={() => {
        if (!touchStartPos || !touchEndPos) return;
        const distance = touchStartPos - touchEndPos;
        if (distance > 50) handleNext();
        if (distance < -50) handlePrev();
        setTouchStartPos(null);
        setTouchEndPos(null);
      }}
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
        <div className="w-full">
            <div
            className="relative"
            style={{ paddingTop: `${(1 / imageAspectRatio) * 100}%` }}
            >
            <AnimatePresence>
                {items.map((item, index) => (
                <motion.div
                    key={`${item.name}-${index}`}
                    initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: isMobileView ? randomRotateY(index) * 0.3 : randomRotateY(index),
                    }}
                    animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : (isMobileView ? randomRotateY(index) * 0.3 : randomRotateY(index)),
                    zIndex: isActive(index)
                        ? 999
                        : items.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: isMobileView ? randomRotateY(index) * 0.3 : randomRotateY(index),
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 origin-bottom"
                >
                    <ImageContainer
                        src={getPrimaryImage(item)}
                        alt={item.name}
                        outerRounding={outerRounding}
                        innerRounding={innerRounding}
                        outlineColor={outlineColor}
                        hoverOutlineColor={hoverOutlineColor}
                        onClick={() => {
                            if (!isActive(index)) {
                                setActive(index);
                                return;
                            }
                            if (onImageClick) {
                                onImageClick(item);
                            }
                        }}
                        showViewIcon={isActive(index) && !showZoomIconOnHover}
                        showZoomIcon={isActive(index) && showZoomIconOnHover}
                    />
                </motion.div>
                ))}
            </AnimatePresence>
            </div>
            
            {isMobileView && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center items-center gap-2 mt-4 mb-2 text-white/40 text-[10px] tracking-widest uppercase font-bold w-full select-none"
            >
                <div className="flex gap-0.5 opacity-60">
                <FontAwesomeIcon icon={faChevronLeft} className="w-2.5 h-2.5" />
                <FontAwesomeIcon icon={faChevronRight} className="w-2.5 h-2.5" />
                </div>
                <span>Swipe to navigate</span>
            </motion.div>
            )}
        </div>
        <div className="flex justify-between flex-col py-4 w-full h-full">
            <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            >
                {renderContent(items[active], isMobileView, active)}
            </motion.div>
        </div>
      </div>

      {/* Overlay navigation arrows - hidden on mobile so users swipe instead */}
      {!isMobileView && (
        <>
          <button
            aria-label="Previous item"
            onClick={handlePrev}
            className={`group absolute z-[1000] h-10 w-10 md:h-11 md:w-11 rounded-full border border-white/10 bg-black/40 text-white backdrop-blur flex items-center justify-center transition hover:bg-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-0 left-3 top-1/2 -translate-y-1/2`}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
          </button>
          <button
            aria-label="Next item"
            onClick={handleNext}
            className={`group absolute z-[1000] h-10 w-10 md:h-11 md:w-11 rounded-full border border-white/10 bg-black/40 text-white backdrop-blur flex items-center justify-center transition hover:bg-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-0 right-3 top-1/2 -translate-y-1/2`}
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5" />
          </button>
        </>
      )}
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
  showZoomIcon?: boolean;
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
  showZoomIcon,
}: ImageContainerProps) => (
  <div
    role={onClick ? "button" : undefined}
    tabIndex={onClick ? 0 : -1}
    onClick={onClick}
    onKeyDown={(e) => {
      if (!onClick) return;
      if (e.key === "Enter" || e.key === " ") onClick();
    }}
    className={`relative h-full w-full project-showcase-image-container group ${onClick ? 'cursor-pointer' : ''}`}
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
        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 select-none"
      />

      {showViewIcon && (
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <div className="flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-black/50 text-white backdrop-blur transition group-hover:bg-primary/30">
            <FontAwesomeIcon icon={faEye} className="h-4 w-4" />
          </div>
        </div>
      )}

      {showZoomIcon && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-all duration-300 pointer-events-none">
           <div className="flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
             <div className="flex items-center justify-center h-12 w-12 rounded-full border border-white/20 bg-black/60 text-white backdrop-blur shadow-xl">
               <FontAwesomeIcon icon={faSearchPlus} className="h-5 w-5" />
             </div>
             <span className="text-white font-medium text-sm drop-shadow-md">Click to view</span>
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
