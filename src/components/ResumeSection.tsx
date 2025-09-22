"use client";
import { DecorativeGlowBraces } from "@/components/ui/decorative-glow-braces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react";
import {
  skillCategories as resumeSkillCategories,
  competitions as resumeCompetitions,
  organizations as resumeOrganizations,
  certifications as resumeCertifications,
  contracts as resumeContracts,
} from "@/data/ResumeData";

export function ResumeSection() {
  // Add state to track if scrolling is needed
  const [certScrollable, setCertScrollable] = useState(false);
  const [compScrollable, setCompScrollable] = useState(false);
  const [orgScrollable, setOrgScrollable] = useState(false);

  // Refs for the scroll containers
  const certContainerRef = useRef<HTMLDivElement>(null);
  const compContainerRef = useRef<HTMLDivElement>(null);
  const orgContainerRef = useRef<HTMLDivElement>(null);

  // Check if scrolling is needed on mount and resize
  useEffect(() => {
    const checkScrollable = () => {
      if (certContainerRef.current) {
        setCertScrollable(
          certContainerRef.current.scrollHeight >
            certContainerRef.current.clientHeight
        );
      }
      if (compContainerRef.current) {
        setCompScrollable(
          compContainerRef.current.scrollHeight >
            compContainerRef.current.clientHeight
        );
      }
      if (orgContainerRef.current) {
        setOrgScrollable(
          orgContainerRef.current.scrollHeight >
            orgContainerRef.current.clientHeight
        );
      }
    };

    // Initial check + listen to window resizes
    checkScrollable();
    window.addEventListener("resize", checkScrollable);

    // React to container size/content changes as well
    const resizeObserver = new ResizeObserver(() => checkScrollable());
    if (certContainerRef.current)
      resizeObserver.observe(certContainerRef.current);
    if (compContainerRef.current)
      resizeObserver.observe(compContainerRef.current);
    if (orgContainerRef.current)
      resizeObserver.observe(orgContainerRef.current);

    return () => {
      window.removeEventListener("resize", checkScrollable);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative">
      <div className="min-h-screen mt-[18rem] md:mt-[2rem] font-[500] font-sansSerif">
        {/* Decorative Glow Braces */}
        <DecorativeGlowBraces
          type="square"
          size="3xl"
          glowColor="var(--accent-yellow)"
          glowIntensity="high"
          rotation={-15}
          opacity={0.6}
          glow={true}
          className="top-20 left-16 hidden lg:block"
        />
        <DecorativeGlowBraces
          type="curly"
          size="2xl"
          glowColor="var(--accent-green)"
          glowIntensity="medium"
          rotation={25}
          opacity={0.4}
          glow={true}
          className="top-1/3 right-20 hidden lg:block"
        />
        <DecorativeGlowBraces
          type="square"
          size="xl"
          glowColor="var(--accent-purple)"
          glowIntensity="low"
          rotation={-35}
          opacity={0.3}
          glow={false}
          className="bottom-1/4 left-12 hidden lg:block"
        />
        <DecorativeGlowBraces
          type="curly"
          size="4xl"
          glowColor="var(--imperial-red)"
          glowIntensity="high"
          rotation={45}
          opacity={0.5}
          glow={true}
          className="bottom-16 right-24 hidden lg:block"
        />

        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 relative">
          {/* Resume Content */}
          <div className="max-w-7xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden">
            {/* Header - Hidden on mobile */}
            <div className="hidden sm:block bg-gradient-to-r from-gray-800/80 to-gray-900/80 px-8 py-8 border-b border-gray-700/50">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    ENWEREM PROSPER TOCHUKWU
                  </h1>
                  <p className="text-xl text-emerald-400 font-semibold">
                    BACKEND ENGINEER
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-4 sm:p-8">
              {/* Mobile-only compact header */}
              <div className="sm:hidden mb-6 text-center">
                <h2 className="text-xl font-bold text-white mb-1">
                  ENWEREM PROSPER TOCHUKWU
                </h2>
                <p className="text-emerald-400 font-semibold">
                  BACKEND ENGINEER
                </p>
              </div>

              {/* Two Column Layout on Desktop, Single Column on Mobile */}
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Left Column */}
                <div className="space-y-6 lg:space-y-8">
                  {/* Professional Summary */}
                  <div className="bg-gradient-to-br from-imperial-red/20 to-folly/20 rounded-xl p-4 border border-imperial-red/20">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Professional Summary
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Backend Engineer with 4+ years of experience, specializing
                      in Nest.js and system architecture, experienced in
                      designing scalable systems, APIs, and full-stack
                      applications with a touch of frontend design background. I
                      excel at Integrating Frontend systems, and streamlining
                      services to maximize business value.
                      <br />
                      <br /> My passion is not just in writing code but in
                      building systems and solutions that make the world easier
                      and make a real impact
                    </p>
                  </div>

                  {/* Organizations - Updated with new scroll effects */}
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
                      Organizations
                    </h2>
                    <div className="relative">
                      <div
                        ref={orgContainerRef}
                        className="max-h-[400px] overflow-y-auto pr-2 space-y-4 custom-scrollbar masked-overflow"
                        style={{ paddingBottom: "24px" }}
                      >
                        {resumeOrganizations.map((org, idx) => (
                          <div key={idx} className="group">
                            <div className="text-accent-purple font-semibold mb-1">
                              {org.period}
                            </div>
                            <div className="text-white font-medium mb-1">
                              {org.role}
                            </div>
                            <a
                              href={org.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-accent-green hover:text-accent-green/80 font-medium text-sm mb-2 transition-colors"
                            >
                              {org.company}
                              <FontAwesomeIcon
                                icon={faExternalLinkAlt}
                                className="w-3 h-3"
                              />
                            </a>
                            <div className="text-sm text-gray-300 leading-relaxed">
                              {org.description}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Enhanced visual indicators */}
                      {orgScrollable && (
                        <>
                          <div className="gradient-fade-overlay"></div>
                          <div className="scroll-indicator scroll-indicator-organizations">
                            <div className="scroll-dots">
                              <div className="scroll-dot"></div>
                              <div className="scroll-dot"></div>
                              <div className="scroll-dot"></div>
                            </div>
                            <div className="scroll-chevron"></div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Contracts - one-time jobs delivered excellently */}
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
                      Contracts
                    </h2>
                    <div className="space-y-4">
                      {resumeContracts.map((con, idx) => (
                        <a key={idx} href={con.link} className="group block">
                          <div className="flex items-start justify-between gap-2">
                            <div className="text-white font-medium group-hover:text-accent-purple transition-colors">
                              {con.title}
                            </div>
                            <div className="text-accent-purple text-xs font-medium whitespace-nowrap">
                              {con.period}
                            </div>
                          </div>
                          <div className="text-accent-green text-xs font-semibold mb-1">
                            {con.role}
                          </div>
                          <div className="text-sm text-gray-300 leading-relaxed">
                            {con.description}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6 lg:space-y-8">
                  {/* Education */}
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
                      Education
                    </h2>
                    <div className="text-accent-purple font-semibold mb-1">
                      2021 - 2025
                    </div>
                    <div className="text-white font-medium mb-1">
                      University of Ibadan
                    </div>
                    <div className="text-gray-300 text-sm">
                      B.Sc Computer Science
                    </div>
                  </div>

                  {/* Certifications - Updated with new scroll effects */}
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
                      Certifications
                    </h2>
                    <div className="relative">
                      <div
                        ref={certContainerRef}
                        className="max-h-[280px] overflow-y-auto pr-2 space-y-3 custom-scrollbar masked-overflow"
                        style={{ paddingBottom: "24px" }}
                      >
                        {resumeCertifications.map((cert, idx) => (
                          <a
                            key={idx}
                            href={cert.link}
                            className="block group hover:bg-gray-800/50 rounded-lg p-3 transition-colors border border-gray-700/30 hover:border-accent-purple/50"
                          >
                            <div className="text-white font-medium text-sm group-hover:text-accent-purple transition-colors flex items-center gap-1 mb-1">
                              {cert.title}
                              <FontAwesomeIcon
                                icon={faExternalLinkAlt}
                                className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                              />
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-accent-green text-xs font-medium">
                                {cert.org}
                              </div>
                              <div className="text-accent-purple text-xs font-medium">
                                {cert.date}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      {/* Enhanced visual indicators */}
                      {certScrollable && (
                        <>
                          <div className="gradient-fade-overlay"></div>
                          <div className="scroll-indicator scroll-indicator-certifications">
                            <div className="scroll-progress"></div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Competitions - Updated with new scroll effects */}
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
                      Competitions
                    </h2>
                    <div className="relative">
                      <div
                        ref={compContainerRef}
                        className="max-h-[200px] overflow-y-auto pr-2 space-y-3 custom-scrollbar masked-overflow"
                        style={{ paddingBottom: "24px" }}
                      >
                        {resumeCompetitions.map((comp, idx) => (
                          <a
                            key={idx}
                            href={comp.link}
                            className="block group hover:bg-gray-800/50 rounded-lg p-2 transition-colors"
                          >
                            <div className="flex items-start gap-2">
                              <span className="text-lg mt-0.5">
                                {comp.icon}
                              </span>
                              <div className="flex-1">
                                <div className="text-white font-medium text-sm group-hover:text-accent-purple transition-colors flex items-center gap-1">
                                  {comp.title}
                                  <FontAwesomeIcon
                                    icon={faExternalLinkAlt}
                                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                  />
                                </div>
                                <div className="text-gray-400 text-xs">
                                  {comp.event}
                                </div>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      {/* Enhanced visual indicators */}
                      {compScrollable && (
                        <>
                          <div className="gradient-fade-overlay"></div>
                          <div className="scroll-indicator scroll-indicator-competitions">
                            <div className="scroll-dots">
                              <div className="scroll-dot"></div>
                              <div className="scroll-dot"></div>
                            </div>
                            <div className="scroll-chevron"></div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Section - Full Width */}
              <div className="mt-8 lg:mt-12">
                <h2 className="text-xl lg:text-2xl font-bold text-white mb-6 text-center">
                  Relevant Skills
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(resumeSkillCategories).map(
                    ([category, skills]) => (
                      <div key={category} className="space-y-3">
                        <h3 className="text-lg font-semibold text-white border-b border-gray-600 pb-2">
                          {category}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {skills.map((tech, idx) => {
                            // If odd number of skills and this is the last one, span remaining columns
                            const isLastOdd =
                              skills.length % 3 === 1 &&
                              idx === skills.length - 1;
                            const isSecondLastOdd =
                              skills.length % 3 === 2 &&
                              idx === skills.length - 2;

                            return (
                              <div
                                key={idx}
                                className={`flex items-center gap-2 text-sm ${
                                  category === "LEARNING"
                                    ? "bg-gray-800/30 border border-gray-700/50"
                                    : "bg-gray-800/50"
                                } rounded-lg px-3 py-2 transition-colors hover:bg-gray-700/50 ${
                                  isLastOdd
                                    ? "lg:col-span-3"
                                    : isSecondLastOdd
                                    ? "lg:col-span-2"
                                    : ""
                                }`}
                              >
                                {"icon" in tech && tech.icon ? (
                                  <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-4 h-4 object-contain"
                                  />
                                ) : (
                                  <div
                                    className={`w-3 h-3 rounded-sm ${
                                      tech.color || "bg-gray-400"
                                    }`}
                                  />
                                )}
                                <span className={`font-medium ${tech.color}`}>
                                  {tech.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
