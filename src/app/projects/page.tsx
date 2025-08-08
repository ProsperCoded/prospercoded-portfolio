"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projects as projectsData, UniqueProjects } from "@/data/ProjectsData";
import { ImagesSlider } from "@/components/ui/images-slider";
import AnimatedList from "@/components/ui/animated-list";
import Carousel from "@/components/ui/carousel";

export default function ProjectsPage() {
  const allProjects = Object.values(projectsData);
  const [selectedProject, setSelectedProject] = useState(
    UniqueProjects[0].project
  );
  const [currentProjectImages, setCurrentProjectImages] = useState<string[]>(
    []
  );
  const [displayedProjects, setDisplayedProjects] = useState(6);
  const [loading, setLoading] = useState(false);

  // Get primary images for all projects for the auto-sliding hero
  const primaryImages = useMemo(
    () =>
      allProjects
        .map(
          (project) =>
            project.images.find((img) => img.isPrimary)?.src ||
            project.images[0]?.src
        )
        .filter(Boolean),
    [allProjects]
  );

  // Update current project images when selected project changes
  useEffect(() => {
    if (selectedProject) {
      setCurrentProjectImages(selectedProject.images.map((img) => img.src));
    }
  }, [selectedProject]);

  // Handle unique project selection
  const handleUniqueProjectSelect = useCallback(
    (item: string, index: number) => {
      const uniqueProject = UniqueProjects[index];
      if (uniqueProject) {
        setSelectedProject(uniqueProject.project);
      }
    },
    []
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

  // Convert projects to carousel items
  const carouselItems = useMemo(
    () =>
      allProjects.slice(0, displayedProjects).map((project, index) => ({
        title: project.name,
        description: project.designation,
        id: index,
        icon: <div className="w-4 h-4 bg-primary rounded-full" />,
        project: project,
      })),
    [allProjects, displayedProjects]
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="relative z-50 p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section with Image Slider */}
      <section className="relative h-screen">
        <ImagesSlider
          images={
            currentProjectImages.length > 0
              ? currentProjectImages
              : primaryImages
          }
          className="h-full"
          autoplay={true}
          direction="up"
          overlay={false}
        >
          <div className="relative z-40 flex flex-col items-center justify-center h-full text-center px-6">
            <div className="p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
                  {selectedProject?.name || "All Projects"}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                  {selectedProject?.quote ||
                    "Explore my complete portfolio of innovative solutions"}
                </p>
                <div className="text-base sm:text-lg text-white/80 mb-8">
                  {selectedProject?.designation || "Full Stack Development"}
                </div>

                {/* Action Buttons Overlay */}
                {selectedProject && (
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    <Link
                      href={`/projects/${selectedProject.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Project Brief</span>
                    </Link>

                    {selectedProject.webLink && (
                      <a
                        href={selectedProject.webLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/80 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-all duration-300 text-sm sm:text-base"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Visit Live</span>
                      </a>
                    )}

                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </ImagesSlider>

        {/* Unique Projects Animated List */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <h3 className="text-white font-semibold mb-4 text-center">
              Featured Projects
            </h3>
            <AnimatedList
              items={UniqueProjects.map((up) => up.quote)}
              onItemSelect={handleUniqueProjectSelect}
              className="w-80"
              itemClassName="bg-white/5 hover:bg-white/10 border border-white/10"
              showGradients={true}
              displayScrollbar={false}
              initialSelectedIndex={0}
            />
          </div>
        </div>
      </section>

      {/* Mobile Unique Projects */}
      <section className="lg:hidden py-8 px-6 bg-background/95 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
          Featured Projects
        </h3>
        <div className="max-w-md mx-auto">
          <AnimatedList
            items={UniqueProjects.map((up) => up.quote)}
            onItemSelect={handleUniqueProjectSelect}
            className="w-full"
            itemClassName="bg-card/50 hover:bg-card border border-border/50"
            showGradients={true}
            displayScrollbar={true}
            initialSelectedIndex={0}
          />
        </div>
      </section>

      {/* All Projects Carousel Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-pink to-primary bg-clip-text text-transparent">
              All Projects
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Browse through my complete collection of projects, each showcasing
              different technologies and solutions.
            </p>
          </div>

          {/* Projects Grid with Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {carouselItems.map((item, index) => (
              <div key={item.id} className="relative">
                <Carousel
                  items={item.project.images.map((img, imgIndex) => ({
                    title: item.project.name,
                    description: item.project.quote,
                    id: imgIndex,
                    icon: (
                      <div
                        className="w-full h-full bg-cover bg-center rounded-lg flex flex-col justify-end p-6"
                        style={{
                          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${img.src})`,
                        }}
                      >
                        <h3 className="text-xl font-bold text-white mb-2">
                          {item.project.name}
                        </h3>
                        <p
                          className="text-white/80 text-sm leading-relaxed overflow-hidden"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {item.project.quote}
                        </p>
                      </div>
                    ),
                  }))}
                  baseWidth={500}
                  autoplay={false}
                  pauseOnHover={true}
                  loop={true}
                />

                {/* Action Buttons Outside Carousel */}
                <div className="flex justify-center gap-3 mt-4">
                  <Link
                    href={`/projects/${item.project.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground/10 border border-border/50 rounded-lg transition-all duration-200 text-sm"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Brief</span>
                  </Link>

                  {item.project.githubLink && (
                    <a
                      href={item.project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground/10 border border-border/50 rounded-lg transition-all duration-200 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}

                  {item.project.webLink && (
                    <a
                      href={item.project.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-pink text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {displayedProjects < allProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreProjects}
                disabled={loading}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-pink to-primary text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <span>Load More Projects</span>
                    <ChevronRight className="w-4 h-4" />
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
