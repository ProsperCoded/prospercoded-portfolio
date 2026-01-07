"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Initialize smooth scrolling with inertia/momentum effect
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration (lower = faster, higher = slower)
      easing: (t) => Math.min(1, 1.002 - Math.pow(2, -15 * t)), // Slightly increased easing for smoother deceleration
      smoothWheel: true, // Enable smooth scrolling for wheel events
      syncTouch: false, // Disable touch sync for native feel on touch devices
      touchMultiplier: 2, // Touch scroll sensitivity
      autoRaf: true, // Automatically handle requestAnimationFrame
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
