import { HeroSection } from "@/components/HeroSection";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
    </main>
  );
}
