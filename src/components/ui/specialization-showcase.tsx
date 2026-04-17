"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { SpecializationItem } from "@/data/SpecializationsData";
import { FeaturedShowcase } from "./featured-showcase";

// Credential Link Component
const CredentialLink = ({ url }: { url?: string }) => {
  if (!url || url === "#") return null;
  return (
    <div className="mt-4 pointer-events-auto">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg border border-primary/30 hover:border-primary/50 transition-all group"
      >
        <FontAwesomeIcon
          icon={faExternalLinkAlt}
          className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors"
        />
        <span className="text-sm font-medium text-primary group-hover:text-primary-foreground transition-colors">
          View Credential
        </span>
      </a>
    </div>
  );
};

type SpecializationShowcaseProps = {
  specializations: SpecializationItem[];
  autoplay?: boolean;
  colors?: { name?: string; issuer?: string; description?: string };
  fontSizes?: { name?: string; issuer?: string; description?: string };
  spacing?: {
    top?: string;
    bottom?: string;
    lineHeight?: string;
    nameTop?: string;
    nameBottom?: string;
    issuerTop?: string;
    issuerBottom?: string;
    descriptionTop?: string;
    descriptionBottom?: string;
  };
  mobile?: {
    fontSizes?: { name?: string; issuer?: string; description?: string };
    spacing?: {
      top?: string;
      bottom?: string;
      lineHeight?: string;
      nameTop?: string;
      nameBottom?: string;
      issuerTop?: string;
      issuerBottom?: string;
      descriptionTop?: string;
      descriptionBottom?: string;
    };
  };
  desktopVersionBottomThreshold?: number;
  imageAspectRatio?: number;
  isRTL?: boolean;
  outerRounding?: string;
  innerRounding?: string;
  outlineColor?: string;
  hoverOutlineColor?: string;
};

export const SpecializationShowcase = ({
  specializations,
  autoplay = false,
  colors = { name: "#fff", issuer: "gray-500", description: "gray-400" },
  fontSizes = { name: "2xl", issuer: "sm", description: "lg" },
  spacing = {
    top: "20",
    bottom: "20",
    lineHeight: "1.5",
    nameTop: "0",
    nameBottom: "0.5em",
    issuerTop: "0",
    issuerBottom: "0.25em",
    descriptionTop: "1em",
    descriptionBottom: "1em",
  },
  mobile = {},
  desktopVersionBottomThreshold,
  imageAspectRatio,
  isRTL,
  outerRounding,
  innerRounding,
  outlineColor,
  hoverOutlineColor,
}: SpecializationShowcaseProps) => {

  const [zoomedItem, setZoomedItem] = useState<{ src: string; name: string; issuer: string } | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const getPrimaryImage = (spec: SpecializationItem) => {
    const primaryImage = spec.images.find((img) => img.isPrimary);
    return primaryImage ? primaryImage.src : spec.images[0]?.src || "";
  };

  const renderContent = (item: SpecializationItem, isMobileView: boolean, activeIndex: number) => {
    const currentFontSizes = isMobileView && mobile.fontSizes ? mobile.fontSizes : fontSizes;
    const currentSpacing = { ...spacing, ...(isMobileView && mobile.spacing ? mobile.spacing : {}) };

    return (
      <div className="flex flex-col h-full justify-center pointer-events-none">
        <div className="flex items-center gap-3 mb-2 pointer-events-auto">
          {item.logoUrl && (
            <img
              src={item.logoUrl}
              alt={`${item.issuer} logo`}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-md bg-white/10 p-1"
            />
          )}
          <h3
            className={`font-bold`}
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
        <p
          className="pointer-events-auto"
          style={{
            fontSize: currentFontSizes.issuer,
            color: colors.issuer,
            marginTop: currentSpacing.issuerTop,
            marginBottom: currentSpacing.issuerBottom,
          }}
        >
          <span className="font-semibold">{item.issuer}</span> • {item.date}
        </p>
        <motion.div
          className="pointer-events-auto"
          style={{
            fontSize: currentFontSizes.description,
            color: colors.description,
            marginTop: currentSpacing.descriptionTop,
            marginBottom: currentSpacing.descriptionBottom,
          }}
        >
          {(() => {
            const defaultTruncateWords = isMobileView ? 18 : 35;
            const words = item.description.split(" ");
            const isTruncated = !isExpanded && words.length > defaultTruncateWords;
            const displayWords = isTruncated ? words.slice(0, defaultTruncateWords) : words;

            return (
              <>
                {displayWords.map((word, index) => (
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
                {isTruncated && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    ...{" "}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsExpanded(true);
                      }}
                      className="text-primary font-medium hover:underline ml-1 pointer-events-auto"
                    >
                      more
                    </button>
                  </motion.span>
                )}
                {isExpanded && words.length > defaultTruncateWords && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {" "}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsExpanded(false);
                      }}
                      className="text-primary font-medium hover:underline ml-1 pointer-events-auto"
                    >
                      less
                    </button>
                  </motion.span>
                )}
              </>
            );
          })()}
        </motion.div>

        {/* View Credential */}
        <CredentialLink url={item.links?.credentialUrl} />
      </div>
    );
  };

  return (
    <>
      <FeaturedShowcase
        items={specializations}
        renderContent={renderContent}
        autoplay={autoplay}
        paddingY={`py-${spacing.top}`}
        desktopVersionBottomThreshold={desktopVersionBottomThreshold}
        imageAspectRatio={imageAspectRatio}
        isRTL={isRTL}
        onImageClick={(item) => {
            setZoomedItem({
                src: getPrimaryImage(item),
                name: item.name,
                issuer: item.issuer
            });
        }}
        outerRounding={outerRounding}
        innerRounding={innerRounding}
        outlineColor={outlineColor}
        hoverOutlineColor={hoverOutlineColor}
        showZoomIconOnHover={true}
      />

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomedItem && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => setZoomedItem(null)}
          >
            <motion.div
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={zoomedItem.src}
                alt="Certificate zoomed"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />

              {/* Close Button */}
              <motion.button
                onClick={() => setZoomedItem(null)}
                className="absolute top-0 right-0 md:top-4 md:right-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              </motion.button>
              
              <div className="mt-4 text-white/80 text-center flex flex-col items-center">
                <p className="font-semibold text-lg">{zoomedItem.name}</p>
                <p className="text-sm opacity-80">{zoomedItem.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
