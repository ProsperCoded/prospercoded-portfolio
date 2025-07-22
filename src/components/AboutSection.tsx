import Image from "next/image";
import GridBackground from "@/components/ui/grid-background";
import { GlowBraces } from "@/components/ui/glow-braces";
import { DecorativeGlowBraces } from "@/components/ui/decorative-glow-braces";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

export function AboutSection() {
  return (
    <section className="relative">
      <GridBackground spacing={40} className="min-h-screen">
        {/* Decorative Braces */}
        <DecorativeGlowBraces
          type="square"
          size="2xl"
          glowColor="rgb(34, 197, 94)"
          glowIntensity="medium"
          rotation={-20}
          opacity={0.4}
          glow={true}
          className="bottom-32 right-16"
        />
        <DecorativeGlowBraces
          type="curly"
          size="xl"
          glowColor="rgb(251, 191, 36)"
          glowIntensity="low"
          rotation={45}
          opacity={0.2}
          glow={false}
          className="top-1/3 right-10"
        />
        <DecorativeGlowBraces
          type="square"
          size="lg"
          glowColor="rgb(99, 102, 241)"
          rotation={-10}
          opacity={0.5}
          glow={false}
          className="bottom-20 left-20"
        />
        {/* Decorative brace near "introducing" */}
        <DecorativeGlowBraces
          type="curly"
          size="2xl"
          glowColor="rgb(168, 85, 247)"
          glowIntensity="medium"
          rotation={25}
          opacity={0.4}
          glow={true}
          className="top-16 right-32"
        />

        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
            {/* Profile Picture Side */}
            <div className="flex-shrink-0 relative">
              <div className="relative">
                {/* Profile Picture */}
                <div className="relative h-[600px] w-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/profile-picture.jpg"
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Location Badge - extends out of image */}
                <div className="absolute -top-3 -left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-3 shadow-xl border border-gray-200">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                    <MapPin className="w-4 h-4" />
                    Based in Ibadan, Nigeria
                  </div>
                </div>

                {/* QR Code with Resume */}
                <div className="absolute -bottom-8 -right-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-3 shadow-xl border border-orange-200">
                  <div className="relative size-32 mb-2">
                    <Image
                      src="/assets/resume-qrcode.png"
                      alt="Resume QR Code"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-1 rounded-full"></div>
                    <p className="text-xs font-medium text-gray-800">
                      Scan to see my CV
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 max-w-2xl">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-7xl md:text-8xl lg:text-8xl font-bold mb-4 text-shadow-white">
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    Intro
                  </span>
                  ducing
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  hello, I'm{" "}
                  <GlowBraces
                    type="square"
                    size="xl"
                    glowColor="rgb(168, 85, 247)"
                    className="text-4xl md:text-5xl"
                  >
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                      Prosper
                    </span>
                  </GlowBraces>
                  !
                </h1>

                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    <span className="text-white font-semibold">
                      Prosper Enwerem
                    </span>{" "}
                    here, a{" "}
                    <span className="text-yellow-400 font-semibold mr-2">
                      Backend Software Engineer
                    </span>
                    with over three years of experience specializing in the{" "}
                    <span className="text-yellow-400 font-semibold mr-2">
                      Node.js ecosystem
                    </span>
                    . I'm currently a student at the University of Ibadan, where
                    I've built and led several impactful projects.
                  </p>

                  <p>
                    My passion is not just in writing code but in{" "}
                    <span className="text-purple-400 font-semibold mr-2">
                      building systems that solve real-world problems
                    </span>
                    and make a tangible impact. From{" "}
                    <span className="text-green-400 font-semibold">
                      GoalFund
                    </span>{" "}
                    to{" "}
                    <span className="text-yellow-400 font-semibold">
                      MedMap
                    </span>
                    , I love participating in hackathons and building solutions
                    that matter.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone */}
                <a
                  href="tel:+2349155004456"
                  className="flex items-center gap-3 bg-green-600/20 border border-green-600/30 rounded-lg px-4 py-3 text-green-400 hover:bg-green-600/30 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+234 915 500 4456</span>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/prospercoded/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-blue-600/20 border border-blue-600/30 rounded-lg px-4 py-3 text-blue-400 hover:bg-blue-600/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">@prospercoded</span>
                </a>
                {/* Email */}
                <a
                  href="mailto:prospercoded@gmail.com"
                  className="flex items-center gap-3 bg-orange-600/20 border border-orange-600/30 rounded-lg px-4 py-3 text-orange-400 hover:bg-orange-600/30 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">prospercoded@gmail.com</span>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/prospercoded"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-blue-600/20 border border-blue-600/30 rounded-lg px-4 py-3 text-blue-400 hover:bg-blue-600/30 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span className="font-medium">@prospercoded</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/prospercoded"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-600/20 border border-gray-600/30 rounded-lg px-4 py-3 text-gray-300 hover:bg-gray-600/30 transition-colors md:col-span-2"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">github.com/prospercoded</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
