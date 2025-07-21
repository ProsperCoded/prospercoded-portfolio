import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Grid Background */}
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

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-4xl px-4 text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            ProsperCoded: Building Reliable, Scalable, Real-World Solutions
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
            Hi, I'm a Software Engineer who builds systems and solutions that
            solve real-world problems and make a tangible impact
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <InteractiveHoverButton className="bg-primary text-primary-foreground hover:bg-primary/90 border-primary">
              Show my work
            </InteractiveHoverButton>
          </div>
        </div>
      </section>
    </main>
  );
}
