"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faLightbulb,
  faExclamationTriangle,
  faCheckCircle,
  faCode,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import ProjectImage from "./ProjectImage";
import { ProjectChallenges as ProjectChallengesData } from "@/data/ProjectsData";

export default function ProjectChallenges({
  overview,
  challenges,
  summary,
}: ProjectChallengesData) {
  const [expandedChallenge, setExpandedChallenge] = useState<number | null>(
    null
  );

  const toggleChallenge = (index: number) => {
    setExpandedChallenge(expandedChallenge === index ? null : index);
  };

  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 sm:p-6 rounded-xl border border-orange-500/20">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center self-start">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="w-4 h-4 sm:w-6 sm:h-6 text-orange-500"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
              Challenge Overview
            </h3>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
              {overview}
            </p>
          </div>
        </div>
      </div>

      {/* Challenges Grid */}
      <div className="grid gap-6">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            className="bg-card/50 border border-border/50 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Challenge Header */}
            <div
              className="p-4 sm:p-6 cursor-pointer"
              onClick={() => toggleChallenge(index)}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-500 font-bold text-sm sm:text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                      {challenge.title}
                    </h4>
                    <p className="text-foreground/70 text-xs sm:text-sm line-clamp-2">
                      {challenge.description}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedChallenge === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/60"
                  />
                </motion.div>
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedChallenge === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-border/50"
                >
                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {/* Impact & Solution Grid */}
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      {/* Impact */}
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-red-500"
                          />
                          <h5 className="font-semibold text-red-500 text-sm sm:text-base">
                            Impact
                          </h5>
                        </div>
                        <div className="bg-red-500/10 p-3 sm:p-4 rounded-lg border border-red-500/20">
                          <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">
                            {challenge.impact}
                          </p>
                        </div>
                      </div>

                      {/* Solution */}
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-green-500"
                          />
                          <h5 className="font-semibold text-green-500 text-sm sm:text-base">
                            Solution
                          </h5>
                        </div>
                        <div className="bg-green-500/10 p-3 sm:p-4 rounded-lg border border-green-500/20">
                          <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">
                            {challenge.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    {challenge.technologies &&
                      challenge.technologies.length > 0 && (
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faCode}
                              className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500"
                            />
                            <h5 className="font-semibold text-foreground text-sm sm:text-base">
                              Technologies Used
                            </h5>
                          </div>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {challenge.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 sm:px-3 py-1 bg-blue-500/10 text-blue-500 text-xs sm:text-sm rounded-full border border-blue-500/20"
                              >
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* Images Grid */}
                    {challenge.images && challenge.images.length > 0 && (
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faImage}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500"
                          />
                          <h5 className="font-semibold text-foreground text-sm sm:text-base">
                            Visual Documentation
                          </h5>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          {challenge.images.map((image, imageIndex) => (
                            <ProjectImage
                              key={imageIndex}
                              src={image}
                              alt={`${challenge.title} - Image ${
                                imageIndex + 1
                              }`}
                              size="medium"
                              className="w-full"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-4 sm:p-6 rounded-xl border border-green-500/20">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg flex items-center justify-center self-start">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="w-4 h-4 sm:w-6 sm:h-6 text-green-500"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
              Key Learnings
            </h3>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
              {summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
