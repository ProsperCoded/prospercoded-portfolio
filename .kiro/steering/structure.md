# Project Structure & Organization

## Root Directory Structure

```
├── .cursor/           # Cursor IDE configuration
├── .git/             # Git repository
├── .github/          # GitHub workflows and templates
├── .kiro/            # Kiro AI assistant configuration and steering
├── .next/            # Next.js build output (auto-generated)
├── node_modules/     # Dependencies (auto-generated)
├── public/           # Static assets
├── src/              # Source code
├── temp/             # Temporary files
└── [config files]    # Various configuration files
```

## Source Code Organization (`src/`)

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── api/          # API routes
│   ├── assets/       # Page-specific assets
│   ├── contact/      # Contact page
│   ├── projects/     # Projects page
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout component
│   └── page.tsx      # Home page
├── components/       # Reusable React components
│   ├── nav/          # Navigation components
│   ├── projects/     # Project-related components
│   ├── ui/           # Generic UI components
│   └── [sections]    # Page section components
├── data/             # Static data and configuration
└── lib/              # Utility functions and helpers
```

## Public Assets (`public/`)

```
public/
├── assets/           # Images, icons, and media files
├── docs/             # Documentation files
└── file.svg          # Favicon and other root-level assets
```

## Component Organization Patterns

- **Page Sections**: Components ending with "Section" (e.g., `HeroSection.tsx`, `AboutSection.tsx`)
- **UI Components**: Generic, reusable components in `src/components/ui/`
- **Feature Components**: Domain-specific components grouped by feature
- **Layout Components**: Navigation and structural components in `src/components/nav/`

## Data Management

- **Static Data**: Centralized in `src/data/` directory
- **Owner Information**: `owner.data.ts` for personal details
- **Content Data**: Separate files for projects, resume, technologies
- **Type Safety**: All data exports are properly typed

## File Naming Conventions

- **Components**: PascalCase (e.g., `HeroSection.tsx`, `PersonalCTAButton.tsx`)
- **Pages**: lowercase with hyphens for routes (e.g., `contact/page.tsx`)
- **Data Files**: camelCase with `.data.ts` suffix (e.g., `owner.data.ts`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Assets**: kebab-case for consistency (e.g., `hero-image.png`)

## Import Patterns

- **Absolute Imports**: Use `@/` alias for all src imports
- **Relative Imports**: Avoid deep relative paths, prefer absolute
- **External Libraries**: Import from package names directly
- **Type Imports**: Use `import type` for TypeScript types

## Styling Architecture

- **Global Styles**: `src/app/globals.css` for theme variables and base styles
- **Component Styles**: Inline Tailwind classes with `cn()` utility
- **Custom CSS**: CSS custom properties for theme consistency
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Configuration Management

- **Environment Variables**: `.env` for sensitive configuration
- **Build Configuration**: `next.config.ts` for Next.js settings
- **TypeScript**: `tsconfig.json` with strict mode and path mapping
- **Styling**: `tailwind.config.ts` for theme customization
