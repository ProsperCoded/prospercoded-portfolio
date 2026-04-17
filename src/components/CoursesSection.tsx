"use client";
import React from "react";
import { courses } from "@/data/CoursesData";
import { DecorativeGlowBraces } from "@/components/ui/decorative-glow-braces";
import { SectionTitle } from "@/components/ui/section-title";
import { CourseCard } from "@/components/ui/course-card";

export const CoursesSection = () => {
  const courseItems = Object.values(courses);

  return (
    <section id="courses" className="relative pb-24 md:pb-32 -mt-10 md:mt-[4rem]">
      {/* Decorative Elements - distinct colors but same style as specializations */}
      <DecorativeGlowBraces
        type="square"
        size="xl"
        glowColor="var(--accent-teal, #14b8a6)"
        glowIntensity="low"
        rotation={-15}
        opacity={0.3}
        glow={true}
        className="top-10 right-12 hidden sm:block"
      />
      <DecorativeGlowBraces
        type="curly"
        size="lg"
        glowColor="var(--accent-emerald, #10b981)"
        rotation={25}
        opacity={0.2}
        glow={false}
        className="bottom-10 left-1/4 hidden sm:block"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle 
          title="Professional Courses" 
          gradientFrom="from-teal-400"
          gradientVia="via-emerald-500"
          gradientTo="to-cyan-500"
          lineColorFrom="from-transparent"
          lineColorTo="to-teal-500/50"
          dotColor1="bg-teal-400/60"
          dotColor2="bg-emerald-500/60"
          dotColor3="bg-cyan-500/60"
        />

        <div className="absolute inset-x-0 top-20 bottom-0 bg-gradient-to-r from-teal-500/5 via-transparent to-cyan-500/5 rounded-3xl blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {courseItems.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              defaultTruncateWords={18} // Clamp somewhat short for consistency
            />
          ))}
        </div>
      </div>
    </section>
  );
};
