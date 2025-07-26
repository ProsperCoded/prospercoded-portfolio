import Image from "next/image";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import SplitText from "@/components/ui/split-text";
import { cn } from "@/lib/utils";

const images = [
  {
    src: require("@/app/assets/technologies/3D/nextjs-3d.png"),
    alt: "Next.js",
  },
  { src: require("@/app/assets/technologies/3D/docker-3d.png"), alt: "Docker" },
  { src: require("@/app/assets/technologies/3D/react-3d.png"), alt: "React" },
  {
    src: require("@/app/assets/technologies/3D/postgres-3d.png"),
    alt: "Postgres",
  },
  {
    src: require("@/app/assets/technologies/3D/nestjs-3d.webp"),
    alt: "NestJS",
  },
  { src: require("@/app/assets/technologies/3D/node-3d.png"), alt: "Node.js" },
  {
    src: require("@/app/assets/technologies/3D/typescript-3d.png"),
    alt: "TypeScript",
  },
];

export function HeroSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]"
        )}
      />
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
            text="Prosper Coded"
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
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Powering Innovations through{" "}
          <span className="bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent">
            Scalable Solutions
          </span>
        </h1>
        {/* Subheading */}
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Hi, I'm Prosper — a Fullstack Software Engineer with 3+ years of
          experience, specializing in Node.js and building systems that solve
          real-world problems
        </p>
        {/* CTA Button */}
        <div className="flex justify-center">
          <InteractiveHoverButton className="bg-primary text-primary-foreground hover:bg-primary/90 border-primary">
            Visit my work
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
