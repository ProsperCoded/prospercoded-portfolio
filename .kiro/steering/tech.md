# Technology Stack & Build System

## Core Technologies

- **Framework**: Next.js 15.4.2 with App Router
- **Runtime**: React 19.1.0 with React DOM 19.1.0
- **Language**: TypeScript 5+ with strict mode enabled
- **Styling**: Tailwind CSS 3.4.17 with PostCSS and Autoprefixer
- **Fonts**: Titillium Web, Geist Sans, and Geist Mono from Google Fonts

## Key Libraries & Dependencies

- **UI Components**: Radix UI primitives (@radix-ui/react-slot)
- **Animations**: Framer Motion 12.23.9, GSAP 3.13.0
- **3D Graphics**: Three.js 0.178.0, @react-three/fiber 9.2.0, OGL 1.0.11
- **Icons**: FontAwesome, Lucide React, React Icons
- **Utilities**: clsx, tailwind-merge, class-variance-authority
- **Email**: React Email with Resend integration
- **QR Codes**: qr-creator

## Development Tools

- **Package Manager**: npm (with pnpm-lock.yaml present)
- **Build Tool**: Next.js with Turbopack for development
- **Linting**: Next.js ESLint configuration
- **Type Checking**: TypeScript with strict settings

## Common Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## Configuration Files

- `next.config.ts` - Next.js configuration with image optimization
- `tsconfig.json` - TypeScript configuration with path aliases (@/\*)
- `tailwind.config.ts` - Tailwind CSS with custom theme and animations
- `postcss.config.mjs` - PostCSS with Tailwind and Autoprefixer

## Path Aliases

- `@/*` maps to `./src/*` for clean imports

## Image Optimization

- Remote patterns configured for Unsplash and Icons8
- Local assets stored in `/public/assets/`

## Styling Conventions

- CSS custom properties for theme colors and component variables
- Dark theme with imperial red, folly, and tangelo color scheme
- Custom animations: fade-in, slide-up, rainbow-pulse, gradient, shimmer
- Utility-first approach with Tailwind CSS
- Component-specific styling in globals.css when needed
