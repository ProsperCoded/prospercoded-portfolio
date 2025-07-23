import Image from "next/image";
import GridBackground from "@/components/ui/grid-background";
import { DecorativeGlowBraces } from "@/components/ui/decorative-glow-braces";
import { Phone, MapPin, ExternalLink } from "lucide-react";

export function ResumeSection() {
  const skills = {
    expertise: [
      { name: "Laravel", icon: "🔺", color: "text-red-400" },
      { name: "Bootstrap", icon: "🅱️", color: "text-purple-400" },
      { name: "Tailwind", icon: "🎨", color: "text-cyan-400" },
      { name: "Scratch", icon: "🐱", color: "text-orange-400" },
      { name: "Node.js", icon: "🟢", color: "text-green-400" },
      { name: "React", icon: "⚛️", color: "text-blue-400" },
      { name: "Next.js", icon: "▲", color: "text-white" },
      { name: "TypeScript", icon: "🔷", color: "text-blue-500" },
      { name: "PostgreSQL", icon: "🐘", color: "text-blue-600" },
      { name: "Express", icon: "⚡", color: "text-yellow-400" },
      { name: "NestJS", icon: "🦅", color: "text-red-500" },
    ],
    learning: [{ name: "Go", icon: "🐹", color: "text-cyan-300" }],
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
  ];

  const certifications = [
    {
      title: "ADVANCED DATA MANIPULATION IN SQL",
      org: "DataCamp",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/2b164b59ab39258db288cdaa226854c6f338d02a",
    },
    {
      title: "INTERMEDIATE SQL",
      org: "DataCamp",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/0c22408c4c008894f6b5cd75ea015d632e32a221?raw=1",
    },
    {
      title: "JOINING DATA IN SQL",
      org: "DataCamp",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/cd25065c15b57bb66d07ad38c13f842f073f3005?raw=1",
    },
    {
      title: "AUTOMATE DEVELOPMENT TASK BY USING GITHUB ACTIONS",
      org: "Microsoft",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/ProsperEnwerem-1949/VD2JJFEM?sharingId=FA476B06016BDDDF",
    },
    {
      title: " FUNDAMENTAL AI CONCEPTS",
      org: "Microsoft",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/ProsperEnwerem-1949/UYLWEHK3?sharingId=FA476B06016BDDDF",
    },
  ];

  const softwares = [
    { name: "Android Studio", icon: "/assets/icons/android-studio.svg" },
    { name: "GitHub", icon: "/assets/github.svg" },
    { name: "Visual Studio Code", icon: "/assets/icons/vscode.svg" },
    { name: "Figma", icon: "/assets/icons/figma.svg" },
    { name: "IntelliJ IDEA", icon: "/assets/icons/intellij.svg" },
    { name: "MySQL", icon: "/assets/icons/mysql.svg" },
  ];

  return (
    <section className="relative">
      <GridBackground spacing={30} className="min-h-screen mt-[20rem]">
        {/* Decorative Glow Braces - replacing stars from the original design */}
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

        <div className="container mx-auto px-6 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl font-bold mb-2">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  resume
                </span>
              </h1>
            </div>
          </div>

          {/* Resume Content */}
          <div className="max-w-7xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 px-8 py-8 border-b border-gray-700/50">
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

            {/* Main Content Grid */}
            <div className="p-8 grid lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Education */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
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

                {/* Languages */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Languages
                  </h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white">English</span>
                      <span className="text-gray-400">Advanced</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">Igbo</span>
                      <span className="text-gray-400">Native</span>
                    </div>
                  </div>
                </div>

                {/* Organizations */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Organizations
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="text-purple-400 font-semibold mb-1">
                        2023 - 2024
                      </div>
                      <div className="text-white font-medium mb-1">
                        Lead Backend Engineer
                      </div>
                      <div className="text-sm text-gray-300 leading-relaxed">
                        Led a team of 5 Backend Engineers to integrate an event
                        management system, optimizing performance and ensuring
                        scalable architecture.
                      </div>
                    </div>
                    <div>
                      <div className="text-purple-400 font-semibold mb-1">
                        2022 - 2023
                      </div>
                      <div className="text-white font-medium mb-1">
                        Lead Fullstack Developer
                      </div>
                      <div className="text-sm text-gray-300 leading-relaxed">
                        Developed interactive e-commerce platforms and payment
                        systems, improving user experience and checkout
                        efficiency.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Column */}
              <div className="space-y-8">
                {/* Competitions */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Competitions
                  </h2>
                  <div className="space-y-3">
                    {competitions.map((comp, idx) => (
                      <a
                        key={idx}
                        href={comp.link}
                        className="block group hover:bg-gray-800/50 rounded-lg p-2 transition-colors"
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-lg mt-0.5">{comp.icon}</span>
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
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Expertise
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {skills.expertise.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-3 py-2"
                        >
                          <span className="text-sm">{skill.icon}</span>
                          <span
                            className={`text-sm font-medium ${skill.color}`}
                          >
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learning */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Learning
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {skills.learning.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-gray-800/30 rounded-lg px-3 py-2 border border-gray-700/50"
                        >
                          <span className="text-sm">{skill.icon}</span>
                          <span
                            className={`text-sm font-medium ${skill.color}`}
                          >
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Certifications */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    Certifications
                  </h2>
                  <div className="space-y-3">
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
                        <div className="text-emerald-400 text-xs font-medium">
                          {cert.org}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Softwares */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Softwares
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
                    {softwares.map((software, idx) => (
                      <div key={idx} className="text-center group">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-gray-700/50 transition-colors">
                          {software.icon ? (
                            <Image
                              src={software.icon}
                              alt={software.name}
                              width={24}
                              height={24}
                              className="w-6 h-6"
                            />
                          ) : (
                            <div className="w-6 h-6 bg-gray-600 rounded"></div>
                          )}
                        </div>
                        <div className="text-xs text-gray-300 group-hover:text-white transition-colors">
                          {software.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-4 border border-purple-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Professional Summary
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Experienced Backend Engineer specializing in Node.js,
                    excelling in designing and implementing scalable server-side
                    applications. Proficient in essential development tools like
                    Git, caching strategies, Kubernetes, and various
                    architectural patterns. Passionate about building systems
                    that make the world easier and create real impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
