import Image from "next/image";
import GridBackground from "@/components/ui/grid-background";
import { GlowBraces } from "@/components/ui/glow-braces";
import { DecorativeGlowBraces } from "@/components/ui/decorative-glow-braces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export function AboutSection() {
  return (
    <section className="relative mt-[20rem] sm:mt-0">
      <GridBackground spacing={40} className="min-h-screen">
        {/* Decorative Braces */}
        <DecorativeGlowBraces
          type="square"
          size="2xl"
          glowColor="var(--accent-green)"
          glowIntensity="medium"
          rotation={-20}
          opacity={0.4}
          glow={true}
          className="bottom-32 right-16"
        />
        <DecorativeGlowBraces
          type="curly"
          size="xl"
          glowColor="var(--accent-yellow)"
          glowIntensity="low"
          rotation={45}
          opacity={0.2}
          glow={false}
          className="top-1/3 right-10"
        />
        <DecorativeGlowBraces
          type="square"
          size="lg"
          glowColor="var(--purple-start)"
          rotation={-10}
          opacity={0.5}
          glow={false}
          className="bottom-20 left-20 hidden sm:block"
        />
        {/* Decorative brace near "introducing" */}
        <DecorativeGlowBraces
          type="curly"
          size="2xl"
          glowColor="var(--accent-purple)"
          glowIntensity="medium"
          rotation={25}
          opacity={0.4}
          glow={true}
          className="top-16 right-32 hidden sm:block"
        />

        <div className="container mx-auto px-4 py-20 sm:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-16 max-w-7xl mx-auto">
            {/* Profile Picture Side */}
            <div className="flex-shrink-0 relative mt-8 sm:mt-0">
              <div className="relative mx-4 sm:mx-0">
                {/* Profile Picture */}
                <div className="relative h-[500px] w-[320px] sm:h-[600px] sm:w-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/profile-picture.jpg"
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Location Badge - extends out of image */}
                <div className="absolute -top-1 -left-2 sm:-top-3 sm:-left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-3 shadow-xl border border-gray-200">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="w-4 h-4"
                    />
                    Based in Ibadan, Nigeria
                  </div>
                </div>

                {/* QR Code with Resume */}
                <div className="absolute -bottom-8 -right-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-3 shadow-xl border border-orange-200 hidden sm:block">
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
                  <span className="bg-gradient-to-r from-imperial-red to-tangelo bg-clip-text text-transparent">
                    Intro
                  </span>
                  ducing
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  hello, I'm{" "}
                  <GlowBraces
                    type="square"
                    size="xl"
                    glowColor="var(--accent-purple)"
                    className="text-4xl md:text-5xl"
                  >
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-imperial-red to-tangelo bg-clip-text text-transparent">
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
                    <span className="text-accent-yellow font-semibold mr-2">
                      Backend Software Engineer
                    </span>
                    with over three years of experience specializing in the{" "}
                    <span className="text-accent-yellow font-semibold mr-2">
                      Node.js ecosystem
                    </span>
                    . I'm currently a student at the University of Ibadan, where
                    I've built and led several impactful projects.
                  </p>

                  <p>
                    My passion is not just in writing code but in{" "}
                    <span className="text-accent-purple font-semibold mr-2">
                      building systems that solve real-world problems
                    </span>
                    and make a tangible impact. From{" "}
                    <span className="text-accent-green font-semibold">
                      GoalFund
                    </span>{" "}
                    to{" "}
                    <span className="text-accent-yellow font-semibold">
                      MedMap
                    </span>
                    , I love participating in hackathons and building solutions
                    that matter.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 w-full">
                {/* First Row: Phone, LinkedIn, X */}
                <a
                  href="tel:+2349155004456"
                  className="flex items-center justify-center sm:justify-start gap-3 bg-accent-green/20 border border-accent-green/30 rounded-lg px-4 py-3 text-accent-green hover:bg-accent-green/30 transition-colors col-span-1 sm:col-span-2"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-8 h-8 sm:w-5 sm:h-5 flex-shrink-0"
                  />
                  <span className="font-medium hidden sm:block">
                    +234 915 500 4456
                  </span>
                </a>
                <a
                  href="https://linkedin.com/in/prospercoded/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-3 bg-purple-start/20 border border-purple-start/30 rounded-lg px-4 py-3 text-purple-start hover:bg-purple-start/30 transition-colors col-span-1 sm:col-span-2"
                >
                  <Image
                    src="/assets/linkedIn.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-5 sm:h-5 flex-shrink-0"
                  />
                  <span className="font-medium hidden sm:block">
                    @prospercoded
                  </span>
                </a>
                <a
                  href="https://twitter.com/prospercoded"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-3 bg-gray-800/20 border border-gray-600/30 rounded-lg px-4 py-3 text-white hover:bg-gray-800/30 transition-colors col-span-1 sm:col-span-2"
                >
                  <Image
                    src="/assets/x.svg"
                    alt="X (Twitter)"
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-5 sm:h-5 flex-shrink-0"
                  />
                  <span className="font-medium hidden sm:block">
                    @prospercoded
                  </span>
                </a>
                {/* Second Row: Email, LeetCode (span 3 each on desktop) */}
                <a
                  href="mailto:prospercoded@gmail.com"
                  className="flex items-center justify-center sm:justify-start gap-3 bg-imperial-red/20 border border-imperial-red/30 rounded-lg px-4 py-3 text-imperial-red hover:bg-imperial-red/30 transition-colors col-span-1 sm:col-span-3"
                >
                  <Image
                    src="/assets/gmail.svg"
                    alt="Gmail"
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-5 sm:h-5 flex-shrink-0"
                  />
                  <span className="font-medium hidden sm:block">
                    prospercoded@gmail.com
                  </span>
                </a>
                <a
                  href="https://leetcode.com/u/prosperCoded/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-3 bg-tangelo/20 border border-tangelo/30 rounded-lg px-4 py-3 text-tangelo hover:bg-tangelo/30 transition-colors col-span-1 sm:col-span-3"
                >
                  <Image
                    src="/assets/leetcode.svg"
                    alt="LeetCode"
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-5 sm:h-5 flex-shrink-0"
                  />
                  <span className="font-medium hidden sm:block">
                    leetcode.com/u/prospercoded
                  </span>
                </a>
                {/* GitHub: full width on desktop, regular grid item on mobile */}
                <a
                  href="https://github.com/prospercoded"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-3 bg-gray-600/20 border border-gray-600/30 rounded-lg px-4 py-3 text-gray-300 hover:bg-gray-600/30 transition-colors col-span-1 sm:col-span-6"
                >
                  <Image
                    src="/assets/github.svg"
                    alt="GitHub"
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-5 sm:h-5 flex-shrink-0"
                  />
                  <span className="font-medium hidden sm:block">
                    github.com/prospercoded
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
