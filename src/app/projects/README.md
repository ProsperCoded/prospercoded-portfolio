# Projects Documentation System

This directory contains the complete project documentation system for the portfolio. The system is designed to be highly reusable and scalable for adding new projects with comprehensive documentation.

## 🏗️ Architecture Overview

The project documentation system follows a component-based architecture with the following key principles:

- **Static Generation**: All project pages are statically generated for optimal SEO performance
- **Reusable Components**: Modular components for consistent documentation across projects
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Responsive Design**: Mobile-first approach with adaptive layouts

## 📁 Directory Structure

```
src/app/projects/
├── [slug]/                 # Dynamic project pages
│   └── page.tsx           # Generic project page template
├── uninav/               # Specific project pages
│   └── page.tsx          # UniNav project page
├── page.tsx              # Projects listing page
└── README.md             # This documentation

src/components/projects/
├── ProjectLayout.tsx     # Main layout with sidebar navigation
├── ProjectHero.tsx       # Hero section with image slider
├── ProjectSection.tsx     # Section wrapper component
├── ProjectTextBlock.tsx   # Text content component
├── ProjectImage.tsx       # Image display with zoom functionality
├── ProjectVideo.tsx       # Video player component
└── ProjectTechStack.tsx   # Technology stack display
```

## 🧩 Component Library

### Core Components

#### `ProjectLayout`

Main layout component that provides:

- Sidebar navigation with auto-scrolling
- Responsive design for mobile and desktop
- Project metadata and links
- Smooth scrolling between sections

**Usage:**

```tsx
<ProjectLayout project={project}>
  {/* Project content sections */}
</ProjectLayout>
```

#### `ProjectHero`

Hero section with image slider and project information:

- Auto-rotating image carousel
- Project title, description, and links
- Responsive design with mobile optimization

**Usage:**

```tsx
<ProjectHero project={project} className="h-screen" />
```

#### `ProjectSection`

Wrapper component for documentation sections:

- Consistent section headers with icons
- Smooth animations and transitions
- Responsive content layout

**Usage:**

```tsx
<ProjectSection
  id="brief"
  title="Brief"
  icon="https://img.icons8.com/dusk/64/brief.png"
>
  {/* Section content */}
</ProjectSection>
```

### Content Components

#### `ProjectTextBlock`

Flexible text content component with multiple variants:

**Props:**

- `title?: string` - Optional section title
- `content: string | string[]` - Text content or bullet points
- `variant?: "default" | "highlight" | "quote" | "code"` - Styling variant
- `size?: "small" | "medium" | "large"` - Text size

**Usage:**

```tsx
<ProjectTextBlock
  title="Motivation"
  content="Project motivation text..."
  variant="highlight"
  size="large"
/>

<ProjectTextBlock
  title="Features"
  content={["Feature 1", "Feature 2", "Feature 3"]}
  variant="default"
/>
```

#### `ProjectImage`

Image display component with zoom functionality:

**Props:**

- `src: string` - Image source URL
- `alt: string` - Alt text for accessibility
- `size?: "small" | "medium" | "large" | "full"` - Image size
- `showZoom?: boolean` - Enable zoom functionality
- `caption?: string` - Optional image caption

**Usage:**

```tsx
<ProjectImage
  src="https://example.com/image.jpg"
  alt="Project screenshot"
  size="full"
  caption="Main application interface"
/>
```

#### `ProjectVideo`

Video player component with custom controls:

**Props:**

- `src: string` - Video source URL
- `poster?: string` - Video poster image
- `size?: "small" | "medium" | "large" | "full"` - Video size
- `autoplay?: boolean` - Auto-play video
- `controls?: boolean` - Show custom controls
- `title?: string` - Video title overlay

**Usage:**

```tsx
<ProjectVideo
  src="https://example.com/demo.mp4"
  poster="https://example.com/poster.jpg"
  size="large"
  title="Project Demo"
/>
```

#### `ProjectTechStack`

Technology stack display component:

**Props:**

- `techStack: Technology[]` - Array of technologies
- `showCategories?: boolean` - Group by categories
- `size?: "small" | "medium" | "large"` - Badge size

**Usage:**

```tsx
<ProjectTechStack
  techStack={project.techStack}
  showCategories={true}
  size="medium"
/>
```

## 📊 Data Structure

### Enhanced Project Data

Each project extends the base `ProjectItem` with detailed documentation:

```typescript
export type ProjectItem = {
  // Basic project info
  name: string;
  quote: string;
  designation: string;
  images: ProjectImage[];
  link: string;
  githubLink?: string;
  webLink?: string;
  techStack: Technology[];

  // Enhanced documentation
  brief?: ProjectBrief;
  architecture?: ProjectArchitecture;
  uml?: ProjectUML;
  database?: ProjectDatabase;
  slug: string;
  category: string;
  featured: boolean;
};
```

### Content Types

#### `ProjectBrief`

```typescript
type ProjectBrief = {
  motivation: string;
  challenges: string[];
  solutions: string[];
  impact: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
};
```

#### `ProjectArchitecture`

```typescript
type ProjectArchitecture = {
  overview: string;
  techChoices: {
    technology: string;
    reason: string;
    category: string;
  }[];
  systemFlow: string;
  keyFeatures: string[];
};
```

#### `ProjectUML`

```typescript
type ProjectUML = {
  description: string;
  imageUrl: string;
  flowExplanation: string;
  components: string[];
};
```

#### `ProjectDatabase`

```typescript
type ProjectDatabase = {
  overview: string;
  schema: {
    imageUrl: string;
    description: string;
  };
  designDecisions: string[];
  tables: {
    name: string;
    purpose: string;
  }[];
};
```

## 🚀 Adding New Projects

### Step 1: Update Project Data

Add your project to `src/data/ProjectsData.ts`:

```typescript
export const projects: Record<string, ProjectItem> = {
  // ... existing projects
  "Your Project": {
    name: "Your Project",
    quote: "Project description...",
    designation: "Project Type",
    images: [
      { src: "image1.jpg", isPrimary: true },
      { src: "image2.jpg", isPrimary: false },
    ],
    link: "https://github.com/your-repo",
    githubLink: "https://github.com/your-repo",
    webLink: "https://your-project.com",
    techStack: [
      technologies.react,
      technologies.nodejs,
      // ... other technologies
    ],
    slug: "your-project",
    category: "Category",
    featured: true,
    brief: {
      motivation: "Why you built this project...",
      challenges: ["Challenge 1", "Challenge 2"],
      solutions: ["Solution 1", "Solution 2"],
      impact: "Impact of the project...",
      links: {
        github: "https://github.com/your-repo",
        live: "https://your-project.com",
      },
    },
    // ... other sections
  },
};
```

### Step 2: Create Project Page (Optional)

For projects requiring custom layouts, create a specific page:

```typescript
// src/app/projects/your-project/page.tsx
import { ProjectLayout } from "@/components/projects/ProjectLayout";
// ... other imports

export default function YourProjectPage() {
  const project = getProjectBySlug("your-project");

  return (
    <ProjectLayout project={project}>
      {/* Custom content sections */}
    </ProjectLayout>
  );
}
```

### Step 3: Update Navigation

The project will automatically appear in the projects listing and be accessible via the dynamic route `/projects/your-project`.

## 🎨 Customization Guidelines

### Component Sizing

All components support size variants:

- **Text**: `small` (text-sm), `medium` (text-base), `large` (text-lg)
- **Images/Videos**: `small` (max-w-sm), `medium` (max-w-md), `large` (max-w-2xl), `full` (max-w-full)

### Color Scheme

The system uses your app's theme colors:

- **Primary**: Red-500 for highlights and CTAs
- **Background**: Card backgrounds with transparency
- **Text**: Foreground colors with opacity variants
- **Borders**: Subtle border colors with transparency

### Animation Guidelines

- **Entry animations**: Fade in with slight upward movement
- **Hover effects**: Subtle scale and color transitions
- **Scroll animations**: Staggered reveals for list items
- **Duration**: 300-600ms for smooth, professional feel

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px (sm)
- **Tablet**: 768px - 1024px (md)
- **Desktop**: > 1024px (lg)

### Mobile Optimizations

- Collapsible sidebar navigation
- Touch-friendly controls
- Optimized image sizes
- Simplified layouts for small screens

## 🔧 Development Guidelines

### Component Development

1. **Always use TypeScript** with proper type definitions
2. **Include accessibility attributes** (alt text, ARIA labels)
3. **Test responsive behavior** across all breakpoints
4. **Use semantic HTML** for better SEO
5. **Optimize animations** for performance

### Content Guidelines

1. **Use descriptive alt text** for all images
2. **Provide meaningful captions** for diagrams
3. **Structure content logically** with proper headings
4. **Keep text concise** but informative
5. **Use bullet points** for lists and features

### Performance Considerations

1. **Lazy load images** and videos
2. **Optimize image sizes** for different viewports
3. **Use static generation** for SEO benefits
4. **Minimize bundle size** with tree shaking
5. **Cache static assets** appropriately

## 🚀 Deployment

The system is designed for static generation and works seamlessly with:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting provider**

### SEO Optimization

- **Static generation** for all project pages
- **Metadata generation** for each project
- **Open Graph** tags for social sharing
- **Structured data** for search engines
- **Optimized images** with proper alt text

## 📚 Examples

See the UniNav project implementation for a complete example of how to use all components together effectively.

## 🤝 Contributing

When adding new components or features:

1. Follow the existing patterns and conventions
2. Update this documentation
3. Test across all supported devices
4. Ensure accessibility compliance
5. Optimize for performance

---

This documentation system provides a solid foundation for creating comprehensive, professional project documentation that scales with your portfolio growth.
