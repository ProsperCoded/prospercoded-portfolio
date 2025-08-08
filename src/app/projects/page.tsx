"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects as projectsData } from "@/data/ProjectsData";
import { DecorativeGlowBraces } from "@/components/ui/decorative-glow-braces";

export default function ProjectsPage() {
  const projects = projectsData;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <DecorativeGlowBraces
        type="square"
        size="xl"
        glowColor="rgb(251, 191, 36)"
        glowIntensity="low"
        rotation={-25}
        opacity={0.4}
        glow={false}
        className="top-1/3 right-12"
      />
      <DecorativeGlowBraces
        type="curly"
        size="lg"
        glowColor="rgb(34, 197, 94)"
        rotation={45}
        opacity={0.2}
        glow={true}
        className="bottom-32 left-1/4 hidden sm:block"
      />
      <DecorativeGlowBraces
        type="square"
        size="xl"
        glowColor="rgb(239, 68, 68)"
        glowIntensity="medium"
        rotation={-15}
        opacity={0.3}
        glow={false}
        className="bottom-20 right-20 hidden sm:block"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-pink to-primary bg-clip-text text-transparent">
              All Projects
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Explore my complete portfolio of projects, from full-stack
              applications to innovative solutions that solve real-world
              problems.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-primary/60"></div>
              <div className="w-2 h-2 rounded-full bg-pink/60"></div>
              <div className="w-2 h-2 rounded-full bg-primary/60"></div>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 via-pink/20 to-primary/20 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-4xl font-bold text-foreground/30">
                  {project.name.charAt(0)}
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.name}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {project.quote}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech.name}
                    </span>
                  ))}
                  {project.techStack && project.techStack.length > 4 && (
                    <span className="px-3 py-1 text-xs font-medium bg-foreground/10 text-foreground/70 rounded-full">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground/10 border border-border/50 rounded-lg transition-all duration-200 group"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.webLink && (
                    <a
                      href={project.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-pink text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 group"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-pink/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-foreground/70 mb-6 max-w-md mx-auto">
              Ready to collaborate on your next project? Let's discuss how we
              can bring your ideas to life.
            </p>
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-pink to-primary text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
