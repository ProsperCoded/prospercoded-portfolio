"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faExternalLinkAlt,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  projects as projectsData,
  UniqueProjects,
  ProjectItem,
} from "@/data/ProjectsData";
// custom hero built for projects page
import HorizontalFeaturedList from "@/components/ui/horizontal-featured-list";
import ProjectCard from "@/components/ProjectCard";
import { PersonalCTAButton } from "@/components/ui/personal-cta-button";
import Logo from "@/components/ui/Logo";

export default function ProjectsPage() {
  const allProjects = Object.values(projectsData);
  // no featured selected by default
  const [selectedProject, setSelectedProject] = useState<
    ProjectItem | undefined
  >(undefined);
  // global rotation through primary images when no project is selected
  const [isGlobalRotation, setIsGlobalRotation] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [displayedProjects, setDisplayedProjects] = useState(6);
  const [loading, setLoading] = useState(false);

  // Build global slides: primary image per project
  const globalSlides = useMemo(
    () =>
      allProjects
        .map((project) => ({
          image:
            project.images.find((img) => img.isPrimary)?.src ||
            project.images[0]?.src,
          project,
        }))
        .filter((s) => Boolean(s.image)) as {
        image: string;
        project: ProjectItem;
      }[],
    [allProjects]
  );

  // Rotate slides depending on mode
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => {
        const total = isGlobalRotation
          ? globalSlides.length
          : selectedProject?.images.length || 0;
        if (total === 0) return 0;
        return (prev + 1) % total;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [isGlobalRotation, globalSlides.length, selectedProject?.images.length]);

  // Handle unique project selection
  const handleUniqueProjectSelect = useCallback(
    (item: string, index: number) => {
      // index -1 means deselect (toggle off)
      if (index === -1) {
        setIsGlobalRotation(true);
        setSelectedProject(undefined);
        setCurrentSlideIndex(0);
        return;
      }

      const uniqueProject = UniqueProjects[index];
      if (uniqueProject) {
        const clickedProject = uniqueProject.project as ProjectItem;
        const isSameProject = selectedProject?.slug === clickedProject.slug;
        if (!isGlobalRotation && isSameProject) {
          setIsGlobalRotation(true);
          setSelectedProject(undefined);
          setCurrentSlideIndex(0);
          return;
        }
        // Focus on the clicked project and rotate through its images
        setSelectedProject(clickedProject);
        setIsGlobalRotation(false);
        setCurrentSlideIndex(0);
      }
    },
    [isGlobalRotation, selectedProject]
  );

  // Load more projects (infinite scroll simulation)
  const loadMoreProjects = useCallback(() => {
    if (displayedProjects < allProjects.length && !loading) {
      setLoading(true);
      setTimeout(() => {
        setDisplayedProjects((prev) => Math.min(prev + 6, allProjects.length));
        setLoading(false);
      }, 1000);
    }
  }, [displayedProjects, allProjects.length, loading]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="relative z-50 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo size="md" className="text-white" />
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section - custom animated background */}
      <section className="relative h-screen overflow-hidden">
        {/* Background images */}
        <div className="absolute inset-0">
          <AnimatePresence>
            {isGlobalRotation
              ? globalSlides.length > 0 && (
                  <motion.div
                    key={`global-${currentSlideIndex}`}
                    initial={{ opacity: 0, scale: 1.05, rotateX: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    exit={{ opacity: 0, y: "-30%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={globalSlides[currentSlideIndex].image}
                      alt={`slide ${currentSlideIndex + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                )
              : selectedProject && (
                  <motion.div
                    key={`project-${selectedProject.slug}-${currentSlideIndex}`}
                    initial={{ opacity: 0, scale: 1.05, rotateX: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    exit={{ opacity: 0, y: "-30%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={
                        selectedProject.images[
                          currentSlideIndex % selectedProject.images.length
                        ].src
                      }
                      alt={`${selectedProject.name} screenshot ${
                        currentSlideIndex + 1
                      }`}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                )}
          </AnimatePresence>

          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                {(!isGlobalRotation
                  ? selectedProject?.logoUrl
                  : globalSlides[currentSlideIndex]?.project.logoUrl) && (
                  <img
                    src={
                      !isGlobalRotation
                        ? ((selectedProject as ProjectItem)?.logoUrl as string)
                        : (globalSlides[currentSlideIndex].project
                            .logoUrl as string)
                    }
                    alt={`$${
                      !isGlobalRotation
                        ? selectedProject?.name
                        : globalSlides[currentSlideIndex].project.name
                    } logo`}
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                  />
                )}
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white">
                  {(!isGlobalRotation
                    ? selectedProject?.name
                    : globalSlides[currentSlideIndex]?.project.name) ||
                    "All Projects"}
                </h1>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                {(!isGlobalRotation
                  ? selectedProject?.quote
                  : globalSlides[currentSlideIndex]?.project.quote) ||
                  "Explore my complete portfolio of innovative solutions"}
              </p>
              <div className="text-base sm:text-lg text-white/80 mb-8">
                {(!isGlobalRotation
                  ? selectedProject?.designation
                  : globalSlides[currentSlideIndex]?.project.designation) ||
                  "Full Stack Development"}
              </div>

              {/* Action Buttons Overlay */}
              {(!isGlobalRotation
                ? selectedProject
                : globalSlides[currentSlideIndex]?.project) && (
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  {(!isGlobalRotation
                    ? (selectedProject as ProjectItem)
                    : globalSlides[currentSlideIndex].project
                  ).links?.github && (
                    <a
                      href={
                        (!isGlobalRotation
                          ? (selectedProject as ProjectItem)
                          : globalSlides[currentSlideIndex].project
                        ).links?.github as string
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {(!isGlobalRotation
                    ? (selectedProject as ProjectItem)
                    : globalSlides[currentSlideIndex].project
                  ).links?.demo && (
                    <a
                      href={
                        (!isGlobalRotation
                          ? (selectedProject as ProjectItem)
                          : globalSlides[currentSlideIndex].project
                        ).links?.demo as string
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-500/80 backdrop-blur-sm rounded-full text-white hover:bg-blue-500 transition-all duration-300 text-sm sm:text-base"
                    >
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="w-4 h-4"
                      />
                      <span>Demo</span>
                    </a>
                  )}

                  {(!isGlobalRotation
                    ? (selectedProject as ProjectItem)
                    : globalSlides[currentSlideIndex].project
                  ).links?.live && (
                    <a
                      href={
                        (!isGlobalRotation
                          ? (selectedProject as ProjectItem)
                          : globalSlides[currentSlideIndex].project
                        ).links?.live as string
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-red-500/80 backdrop-blur-sm rounded-full text-white hover:bg-red-500 transition-all duration-300 text-sm sm:text-base"
                    >
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="w-4 h-4"
                      />
                      <span>Visit Live</span>
                    </a>
                  )}

                  <PersonalCTAButton
                    variant="rounded"
                    size="md"
                    href={`/projects/${
                      (!isGlobalRotation
                        ? (selectedProject as ProjectItem)
                        : globalSlides[currentSlideIndex].project
                      ).slug
                    }`}
                    image="/assets/icons/project-icon.svg"
                    imageAlt="Project Brief"
                    imageSize="medium"
                    className="text-white border-white/30 hover:border-white/50"
                  >
                    Project Brief
                  </PersonalCTAButton>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Positioned midway between hero and content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <h3 className="text-white font-semibold mb-4 text-center">
              Featured Projects
            </h3>
            <HorizontalFeaturedList
              items={UniqueProjects.map((up) => up.quote)}
              onItemSelect={handleUniqueProjectSelect}
              className="w-full"
              itemClassName="bg-white/5 hover:bg-white/10 border border-white/10"
              initialSelectedIndex={-1}
            />
          </div>
        </div>
      </section>

      {/* All Projects Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              All Projects
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Browse through my complete collection of projects, each showcasing
              different technologies and solutions.
            </p>
          </div>

          {/* Responsive Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
            {allProjects.slice(0, displayedProjects).map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <ProjectCard project={project} className="h-full" />
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {displayedProjects < allProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreProjects}
                disabled={loading}
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <span>Load More Projects</span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="w-4 h-4"
                    />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
