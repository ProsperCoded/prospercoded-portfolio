import { cn } from "@/lib/utils";
import React from "react";

type GridBackgroundProps = {
  spacing?: number;
  className?: string;
  children?: React.ReactNode;
};

export default function GridBackground({
  spacing = 20,
  className = "",
  children,
}: GridBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex h-screen w-full items-center justify-center bg-background",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]"
        )}
        style={{
          backgroundSize: `${spacing}px ${spacing}px`,
          maskImage:
            "radial-gradient(circle at center, black 0%, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, black 40%, transparent 80%)",
        }}
      />
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
