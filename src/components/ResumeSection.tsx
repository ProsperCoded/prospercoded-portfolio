"use client";
import Image from "next/image";
import GridBackground from "@/components/ui/grid-background";
import { DecorativeGlowBraces } from "@/components/ui/decorative-glow-braces";
import { Phone, MapPin, ExternalLink } from "lucide-react";
import { useRef, useEffect, useState } from "react";

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

    checkScrollable();
    window.addEventListener("resize", checkScrollable);

    return () => {
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  const skillCategories = {
    "FRONTEND FRAMEWORKS": [
      { name: "React", icon: "⚛️", color: "text-blue-400" },
      { name: "Next.js", icon: "▲", color: "text-white" },
      { name: "Tailwind", icon: "🎨", color: "text-cyan-400" },
      { name: "SCSS", icon: "💎", color: "text-pink-400" },
      { name: "Redux", icon: "🔄", color: "text-purple-400" },
    ],
    "BACKEND FRAMEWORKS": [
      { name: "NestJS", icon: "🦅", color: "text-red-500" },
      { name: "Express", icon: "⚡", color: "text-yellow-400" },
      { name: "Django", icon: "🐍", color: "text-green-500" },
    ],
    "PROGRAMMING LANGUAGE": [
      { name: "TypeScript", icon: "🔷", color: "text-blue-500" },
      { name: "JavaScript", icon: "📜", color: "text-yellow-300" },
      { name: "Python", icon: "🐍", color: "text-yellow-400" },
      { name: "Java", icon: "☕", color: "text-orange-500" },
    ],
    "TESTING & DEBUGGING": [
      { name: "Jest", icon: "🃏", color: "text-red-400" },
      { name: "React Testing Library", icon: "🧪", color: "text-blue-300" },
    ],
    "BACKEND INTEGRATION": [
      { name: "REST", icon: "🔗", color: "text-green-400" },
      { name: "GraphQL", icon: "📊", color: "text-pink-500" },
      { name: "WebSockets", icon: "🔌", color: "text-purple-300" },
      { name: "PostgreSQL", icon: "🐘", color: "text-blue-600" },
      { name: "Supabase", icon: "⚡", color: "text-emerald-400" },
    ],
    OTHERS: [
      { name: "Node.js", icon: "🟢", color: "text-green-400" },
      { name: "Git & GitHub", icon: "🐙", color: "text-gray-300" },
      { name: "Software Architecture", icon: "🏗️", color: "text-blue-300" },
      { name: "Advanced DSA", icon: "🧮", color: "text-orange-400" },
    ],
    LEARNING: [{ name: "Go", icon: "🐹", color: "text-cyan-300" }],
  };

  const competitions = [
    {
      title: "1st Place in IPTLC UI Hackathon - SealRight",
      event: "IPTLC Hackathon 2025",
      icon: "🏆",
      link: "https://www.linkedin.com/posts/intellectual-property-and-technology-law-club-university-of-ibadan_tech-hackathon-winners-activity-7347892950288244737-aQm-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp6Pn4BfJ380XKae1xjuxDbYK45cneQbKA",
    },
    {
      title: "4th Place in TECHNEST Hackathon - Medmap",
      event: "TECHNEST Hackathon 2024",
      icon: "🏆",
      link: "#",
    },
    {
      title: "2nd Place in Code Jam - GoalFund",
      event: "Google Code Jam 2024",
      icon: "🥈",
      link: "#",
    },
    {
      title: "Finalist in AI Challenge - SmartAssist",
      event: "Microsoft AI Challenge 2023",
      icon: "🤖",
      link: "#",
    },
    {
      title: "3rd Place in Backend Challenge - DataSync",
      event: "AWS Hackathon 2023",
      icon: "🥉",
      link: "#",
    },
  ];

  const organizations = [
    {
      period: "April 2025 - Present",
      role: "Co-Lead Backend Engineer",
      company: "ATC Africa",
      link: "https://atcafrica.com",
      description:
        "Led a team of 5 Backend Engineers to integrate an event management system, optimizing performance and ensuring scalable architecture.",
    },
    {
      period: "Jan 2024 - Feb 2025",
      role: "Lead Fullstack Developer",
      company: "9jaMarkets",
      link: "https://9jamarkets.com",
      description:
        "Developed interactive e-commerce platforms and payment systems, improving user experience and checkout efficiency.",
    },
    {
      period: "May 2022 - Feb 2023",
      role: "Technical Operator Manager",
      company: "Indiana Ventures",
      link: "#",
      description:
        "Led a team of 2-Technical Operators and 5-Desktop Publishers, 3-Designers to deliver high-quality typesetting, editing, graphic design, and printing services without supervision, ensuring client satisfaction.",
    },
    {
      period: "Jan 2022 - May 2022",
      role: "Frontend Developer Intern",
      company: "TechCorp Solutions",
      link: "#",
      description:
        "Collaborated with senior developers to build responsive web applications using React and TypeScript.",
    },
    {
      period: "Aug 2021 - Dec 2021",
      role: "Junior Web Developer",
      company: "StartupLab Nigeria",
      link: "#",
      description:
        "Developed landing pages and basic web applications for various startup clients using HTML, CSS, and JavaScript.",
    },
    {
      period: "May 2021 - Aug 2021",
      role: "Code Instructor",
      company: "Youth Tech Academy",
      link: "#",
      description:
        "Taught programming fundamentals to high school students, focusing on Python and web development basics.",
    },
  ];

  const certifications = [
    {
      title: "ADVANCED DATA MANIPULATION IN SQL",
      org: "DataCamp",
      date: "March 2024",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/2b164b59ab39258db288cdaa226854c6f338d02a",
    },
    {
      title: "INTERMEDIATE SQL",
      org: "DataCamp",
      date: "February 2024",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/0c22408c4c008894f6b5cd75ea015d632e32a221?raw=1",
    },
    {
      title: "JOINING DATA IN SQL",
      org: "DataCamp",
      date: "January 2024",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/cd25065c15b57bb66d07ad38c13f842f073f3005?raw=1",
    },
    {
      title: "AUTOMATE DEVELOPMENT TASK BY USING GITHUB ACTIONS",
      org: "Microsoft",
      date: "December 2023",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/ProsperEnwerem-1949/VD2JJFEM?sharingId=FA476B06016BDDDF",
    },
    {
      title: " FUNDAMENTAL AI CONCEPTS",
      org: "Microsoft",
      date: "November 2023",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/ProsperEnwerem-1949/UYLWEHK3?sharingId=FA476B06016BDDDF",
    },
    {
      title: "The Ultimate Docker Course",
      org: "Mosh Hamedani",
      date: "October 2023",
      link: "#",
    },
    {
      title: "The Ultimate Git Course",
      org: "Mosh Hamedani",
      date: "September 2023",
      link: "#",
    },
    {
      title: "Advanced Node.js",
      org: "Udemy",
      date: "August 2023",
      link: "#",
    },
    {
      title: "React Performance Optimization",
      org: "Frontend Masters",
      date: "July 2023",
      link: "#",
    },
  ];

  return (
    <section className="relative">
      <GridBackground spacing={30} className="min-h-screen mt-[25rem]">
        {/* Decorative Glow Braces */}
        <DecorativeGlowBraces
          type="square"
          size="3xl"
          glowColor="rgb(251, 191, 36)"
          glowIntensity="high"
          rotation={-15}
          opacity={0.6}
          glow={true}
          className="top-20 left-16 hidden lg:block"
        />
        <DecorativeGlowBraces
          type="curly"
          size="2xl"
          glowColor="rgb(34, 197, 94)"
          glowIntensity="medium"
          rotation={25}
          opacity={0.4}
          glow={true}
          className="top-1/3 right-20 hidden lg:block"
        />
        <DecorativeGlowBraces
          type="square"
          size="xl"
          glowColor="rgb(168, 85, 247)"
          glowIntensity="low"
          rotation={-35}
          opacity={0.3}
          glow={false}
          className="bottom-1/4 left-12 hidden lg:block"
        />
        <DecorativeGlowBraces
          type="curly"
          size="4xl"
          glowColor="rgb(239, 68, 68)"
          glowIntensity="high"
          rotation={45}
          opacity={0.5}
          glow={true}
          className="bottom-16 right-24 hidden lg:block"
        />

        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 relative">
          {/* Vertical "resume" text - Desktop only */}
          <div className="hidden lg:block absolute -left-28 xl:-left-40 top-1/2 -translate-y-1/2 z-30">
            <div className="transform -rotate-90 origin-center">
              <h1 className="text-6xl xl:text-7xl font-bold whitespace-nowrap">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  resume
                </span>
              </h1>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="text-center mb-8 lg:hidden">
            <h1 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                resume
              </span>
            </h1>
          </div>

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
                  <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-4 border border-purple-500/20">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Professional Summary
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Experienced Backend Engineer specializing in Node.js,
                      excelling in designing and implementing scalable
                      server-side applications. Proficient in essential
                      development tools like Git, caching strategies,
                      Kubernetes, and various architectural patterns. Passionate
                      about building systems that make the world easier and
                      create real impact.
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
                        {organizations.map((org, idx) => (
                          <div key={idx} className="group">
                            <div className="text-purple-400 font-semibold mb-1">
                              {org.period}
                            </div>
                            <div className="text-white font-medium mb-1">
                              {org.role}
                            </div>
                            <a
                              href={org.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium text-sm mb-2 transition-colors"
                            >
                              {org.company}
                              <ExternalLink className="w-3 h-3" />
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
                </div>

                {/* Right Column */}
                <div className="space-y-6 lg:space-y-8">
                  {/* Education */}
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
                      Education
                    </h2>
                    <div className="text-purple-400 font-semibold mb-1">
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
                        {certifications.map((cert, idx) => (
                          <a
                            key={idx}
                            href={cert.link}
                            className="block group hover:bg-gray-800/50 rounded-lg p-3 transition-colors border border-gray-700/30 hover:border-purple-500/50"
                          >
                            <div className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors flex items-center gap-1 mb-1">
                              {cert.title}
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-emerald-400 text-xs font-medium">
                                {cert.org}
                              </div>
                              <div className="text-purple-400 text-xs font-medium">
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
                        {competitions.map((comp, idx) => (
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
                                <div className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors flex items-center gap-1">
                                  {comp.title}
                                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} className="space-y-3">
                      <h3 className="text-lg font-semibold text-white border-b border-gray-600 pb-2">
                        {category}
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {skills.map((skill, idx) => {
                          // If odd number of skills and this is the last one, span both columns
                          const isLastOdd =
                            skills.length % 2 === 1 &&
                            idx === skills.length - 1;
                          return (
                            <div
                              key={idx}
                              className={`flex items-center gap-2 text-sm ${
                                category === "LEARNING"
                                  ? "bg-gray-800/30 border border-gray-700/50"
                                  : "bg-gray-800/50"
                              } rounded-lg px-3 py-2 transition-colors hover:bg-gray-700/50 ${
                                isLastOdd ? "col-span-2" : ""
                              }`}
                            >
                              <span className="text-sm">{skill.icon}</span>
                              <span className={`font-medium ${skill.color}`}>
                                {skill.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
