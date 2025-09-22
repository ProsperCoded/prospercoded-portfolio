import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        pink: {
          DEFAULT: "hsl(var(--pink))",
        },
        // New theme colors
        imperial: {
          red: "var(--imperial-red)",
        },
        folly: "var(--folly)",
        tangelo: "var(--tangelo)",
        purple: {
          start: "var(--purple-gradient-start)",
          end: "var(--purple-gradient-end)",
        },
        golden: {
          yellow: "var(--golden-yellow)",
        },
        warm: {
          orange: "var(--warm-orange)",
        },
        // Accent colors (preserved)
        accent: {
          purple: "var(--accent-purple)",
          yellow: "var(--accent-yellow)",
          green: "var(--accent-green)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-titillium-web)",
          "var(--font-geist-sans)",
          "system-ui",
          "sans-serif",
        ],
        geist: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        sansSerif: ["sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        titillium: ["var(--font-titillium-web)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "rainbow-pulse": "rainbow-pulse 2s ease-in-out infinite",
        gradient: "gradient 8s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "rainbow-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.75" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
