import Image from "next/image";
import { PersonalCTAButton } from "@/components/ui/personal-cta-button";
import SplitText from "@/components/ui/split-text";
import RippleGrid from "@/components/ui/ripple-grid";
import { cn } from "@/lib/utils";
import { OWNER_DETAILS } from "@/data/owner.data";
const images = [
  { src: "/assets/icons/technologies/3D/nextjs-3d.png", alt: "Next.js" },
  { src: "/assets/icons/technologies/3D/docker-3d.png", alt: "Docker" },
  { src: "/assets/icons/technologies/3D/react-3d.png", alt: "React" },
  { src: "/assets/icons/technologies/3D/postgres-3d.png", alt: "Postgres" },
  { src: "/assets/icons/technologies/3D/nestjs-3d.webp", alt: "NestJS" },
  { src: "/assets/icons/technologies/3D/node-3d.png", alt: "Node.js" },
  { src: "/assets/icons/technologies/3D/typescript-3d.png", alt: "TypeScript" },
];

export function HeroSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Ripple Grid Background */}
      <div className="absolute inset-0 w-full h-full">
        <RippleGrid
          enableRainbow={true}
          gridColor="var(--imperial-red)"
          rippleIntensity={0.03}
          gridSize={30}
          gridThickness={10}
          mouseInteraction={true}
          mouseInteractionRadius={0.9}
          opacity={0.5}
          fadeDistance={3}
          vignetteStrength={5}
          glowIntensity={0.1}
          gridRotation={0}
        />
      </div>
      {/* Radial gradient overlay for fade effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* 3D Images - positioned around the hero section */}
      {images.map((img, idx) => (
        <Image
          key={img.alt}
          src={img.src}
          alt={img.alt}
          width={80}
          height={80}
          className={cn(
            "hidden sm:block absolute z-10 drop-shadow-xl transition-transform duration-500",
            idx === 0 && "top-10 left-1/4 rotate-[-10deg]",
            idx === 1 && "top-24 right-1/4 rotate-[12deg]",
            idx === 2 && "bottom-20 left-1/3 rotate-[8deg]",
            idx === 3 && "bottom-10 right-1/3 rotate-[-8deg]",
            idx === 4 && "top-1/2 left-10 -translate-y-1/2 rotate-[18deg]",
            idx === 5 && "top-1/2 right-10 -translate-y-1/2 rotate-[-18deg]",
            idx === 6 && "bottom-10 left-1/2 -translate-x-1/2 rotate-[5deg]"
          )}
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))" }}
        />
      ))}
      {/* Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-4 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground">
          <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <SplitText
            text={OWNER_DETAILS.username}
            className="font-medium text-muted-foreground"
            splitType="chars"
            delay={10}
            duration={1}
            from={{ opacity: 0, y: 20, rotateX: -90 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
            ease="back.out(1.7)"
            // The `threshold` prop in SplitText determines how much of the element must be visible in the viewport
            // before the animation triggers. A value of 0.8 means 80% of the element should be visible before animating.
            threshold={0.1}
            rootMargin="0px"
          />
        </div>
        {/* Main Heading */}
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl font-sans">
          Powering Innovations through{" "}
          <span className="bg-gradient-to-r from-imperial-red to-folly bg-clip-text text-transparent">
            Scalable Solutions
          </span>
        </h1>
        {/* Subheading */}
        <p className="mx-auto mb-8 max-w-2xl text-base text-zinc-100 md:text-xl relative font-sans">
          <span className="relative text-shadow-2xl z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            Hi, I'm {OWNER_DETAILS.fullName} a {OWNER_DETAILS.title} with {"  "}
            {OWNER_DETAILS.experience} of experience, specializing in{" "}
            {OWNER_DETAILS.specialization} and building systems that solve
            real-world problems
          </span>
          {/* Subtle background blur for better readability */}
          <span className="absolute inset-0 -z-10 bg-black/20 backdrop-blur-[2px] rounded-lg"></span>
        </p>
        {/* CTA Button */}
        <div className="flex justify-center">
          <PersonalCTAButton
            variant="filled"
            size="lg"
            imageSize="large"
            image="/assets/icons/cooking.svg"
            imageAlt="Project icon"
            href="/projects"
            className="font-semibold tracking-wide"
          >
            Visit my work
          </PersonalCTAButton>
        </div>
      </div>
    </section>
  );
}
