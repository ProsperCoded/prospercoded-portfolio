import { technologies } from "./TechnologiesData";

export type ProjectImage = {
  src: string;
  isPrimary: boolean;
};

// Enhanced content types for project documentation
export type ProjectBrief = {
  motivation: string;
  challenges: string[];
  solutions: string[];
  impact: string;
};

export type ProjectArchitecture = {
  overview: string;
  techChoices: {
    [category: string]: {
      tech: (typeof technologies)[keyof typeof technologies];
      reason?: string;
    }[];
  };
  systemFlow: string;
  keyFeatures: string[];
};

export type ProjectUML = {
  description: string;
  imageUrl: string;
  flowExplanation: string;
  components: string[];
};

export type ProjectDatabase = {
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

export type ProjectChallenges = {
  overview: string;
  challenges: {
    title: string;
    description: string;
    impact: string;
    solution: string;
    images?: string[];
    technologies?: string[];
  }[];
  summary: string;
};

export type ProjectItem = {
  name: string;
  quote: string;
  designation: string;
  images: ProjectImage[];
  logoUrl?: string; // Optional logo URL for the project
  links: {
    github?: string;
    projectLink?: string;
    live?: string;
    demo?: string;
  };
  // techStack: (typeof technologies)[keyof typeof technologies][];
  // Enhanced content for documentation
  brief?: ProjectBrief;
  architecture?: ProjectArchitecture;
  uml?: ProjectUML;
  database?: ProjectDatabase;
  challenges?: ProjectChallenges;
  slug: string;
  category: string;
  featured: boolean;
};

export const projects: Record<string, ProjectItem> = {
  UniNav: {
    name: "UniNav",
    quote:
      "A university-wide platform that helps students access and share study materials in an organized, scalable way. Built with Node.js backend and modern frontend technologies to solve real campus challenges.",
    designation: "Full Stack Project",
    logoUrl: "/assets/projects/uninav/logo.svg",
    images: [
      {
        src: "/assets/projects/uninav/showcase/image1.png",
        isPrimary: true,
      },
      {
        src: "/assets/projects/uninav/showcase/image2.png",
        isPrimary: false,
      },
      {
        src: "/assets/projects/uninav/showcase/image3.png",
        isPrimary: false,
      },
      {
        src: "/assets/projects/uninav/showcase/image4.png",
        isPrimary: false,
      },
    ],
    links: {
      github: "https://github.com/prospercoded/uninav-backend",
      live: "https://uninav.live",
      projectLink: "/projects/uninav",
      demo: "http://uninav-pitch.vercel.app/",
    },
    slug: "uninav",
    category: "Full Stack",
    featured: true,
    brief: {
      motivation:
        "As a student at the University of Ibadan, I experienced firsthand the challenges of accessing and sharing study materials. Traditional methods like scattered Google Drive links and WhatsApp groups were inefficient and disorganized. Some departments had useful materials that weren't accessible to other departments. I wanted to create a centralized platform that would help students access and share essential course-related resources in an organized, scalable way, like github for students",
      challenges: [
        "Scattered study materials across multiple platforms",
        "Difficulty finding relevant resources for specific courses",
        "No centralized system for material organization",
        "Limited collaboration between students",
        "Inefficient resource discovery during critical academic periods",
      ],
      solutions: [
        "Created a structured storage system organized by Faculty, Department, and Level",
        "Implemented advanced search and filtering capabilities",
        "Built a recommendation engine based on user profiles and academic interests",
        "Integrated role-based access with student, moderator, and admin roles",
        "Added monetization features including blog system and ad management",
      ],
      impact:
        "UniNav has transformed how students at University of Ibadan access and share study materials. The platform has created a community-driven approach where students actively contribute to a growing knowledge base, making academic resources more accessible and organized than ever before. Most of all uninav vission is to be more than just a study material plateform, we hope to expand it accommodate all activities that makes up a student life, Simplifying Students Academic journey",
    },
    architecture: {
      overview:
        "UniNav follows a modern full-stack architecture with a Next.js frontend and NestJS backend. The system is designed for scalability and performance, using PostgreSQL for data persistence and Docker for containerization",
      techChoices: {
        Frontend: [
          {
            tech: technologies.nextjs,
            reason:
              "Chosen for its excellent SEO capabilities, server-side rendering, and built-in optimization features that are crucial for a content-heavy platform",
          },
          {
            tech: technologies.typescript,
            reason:
              "For type safety, improved code quality, and better maintainability, especially in a growing codebase",
          },
        ],
        Backend: [
          {
            tech: technologies.nodejs,
            reason:
              "Selected for its non-blocking I/O model, efficiency, and ability to handle concurrent requests, making it suitable for a scalable API",
          },
          {
            tech: technologies.nestjs,
            reason:
              "For its modular architecture, scalability, and type safety, making it a great fit for a microservices architecture",
          },
        ],
        Database: [
          {
            tech: technologies.postgresql,
            reason:
              "For its reliability, feature richness, and strong support for complex queries and data integrity, used it for more optimized searches using pgvector",
          },
        ],
        Deployment: [
          {
            tech: technologies.docker,
            reason:
              "For containerizing the application, ensuring consistent environments from development to production and simplifying deployment",
          },
          {
            tech: technologies.vercel,
            reason:
              "For seamless deployment of the Next.js frontend with automatic scaling and CI/CD integration",
          },
        ],
      },
      systemFlow:
        "The application follows a three-tier architecture: Presentation Layer (Next.js), Business Logic Layer (NestJS API), and Data Layer (PostgreSQL). User requests flow through the Next.js frontend to the NestJS API, which processes business logic and interacts with the PostgreSQL database.",
      keyFeatures: [
        "Role-based access control system",
        "Advanced search and filtering",
        "Recommendation engine",
        "File upload and management",
        "Real-time notifications",
        "Monetization system with ads and boosted content",
      ],
    },
    uml: {
      description:
        "The UML diagram illustrates the complete system architecture and data flow of UniNav, showing how different components interact to deliver a seamless user experience.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      flowExplanation:
        "The system flow begins with user authentication and authorization. Students can upload materials, which go through a moderation process before being made available. The recommendation engine analyzes user behavior and academic profiles to suggest relevant content. The platform supports multiple user roles with different access levels and capabilities.",
      components: [
        "User Authentication & Authorization",
        "Material Upload & Management",
        "Search & Filtering System",
        "Recommendation Engine",
        "Moderation System",
        "Notification Service",
        "Monetization Module",
      ],
    },
    database: {
      overview:
        "The database design focuses on scalability and performance, with carefully designed relationships between users, materials, and interactions. The schema supports complex queries for the recommendation system while maintaining data integrity.",
      schema: {
        imageUrl: "/assets/projects/uninav/database/image1.png",
        description:
          "The database schema includes tables for users, materials, departments, faculties, interactions, and monetization features. Each table is optimized for specific query patterns and includes proper indexing for performance.",
      },
      designDecisions: [
        "Normalized database design to reduce redundancy and maintain data integrity",
        "Strategic indexing on frequently queried columns for optimal performance",
        "Soft delete implementation for materials to maintain historical data",
        "Separate tables for different interaction types to support analytics",
        "Optimized foreign key relationships to support complex queries",
      ],
      tables: [
        {
          name: "users",
          purpose:
            "Student accounts with auth, profile, matric number, role (student/mod/admin)",
        },
        {
          name: "moderators",
          purpose:
            "Moderator assignments per department/faculty with approval status",
        },
        {
          name: "faculties",
          purpose: "University faculties directory with moderation status",
        },
        {
          name: "departments",
          purpose: "Departments linked to faculties with descriptions",
        },
        {
          name: "courses",
          purpose: "Course catalog with unique course codes and descriptions",
        },
        {
          name: "department_courses",
          purpose: "Junction table mapping courses offered by each department",
        },
        {
          name: "student_courses",
          purpose: "Junction table of students enrolled in courses",
        },
        {
          name: "materials",
          purpose:
            "Study materials metadata (type, tags, address), counts, status, visibility",
        },
        {
          name: "collections",
          purpose:
            "User-created material collections with contributors, tags, visibility, restriction",
        },
        {
          name: "bookmarks",
          purpose: "User saves for materials or collections for quick access",
        },
        {
          name: "adverts",
          purpose:
            "Advertisements linked to materials/collections with pricing and metrics",
        },
        {
          name: "blogs",
          purpose:
            "Editorial content (articles/guidelines/schemes) with body, likes, clicks",
        },
        {
          name: "comments",
          purpose: "User comments on blog posts",
        },
      ],
    },
    challenges: {
      overview:
        "Building UniNav presented several complex challenges that required innovative solutions and deep technical expertise. From handling massive file uploads to implementing real-time features, each challenge pushed the boundaries of what was possible with the chosen technology stack.",
      challenges: [
        {
          title: "Role-based Access Control",
          description:
            "Implementing a complex permission system where different user types (students, moderators, admins) have varying levels of access to materials and features.",
          impact:
            "Security vulnerabilities were discovered where students could access admin functions, and moderators couldn't properly manage content, leading to potential data breaches.",
          solution:
            "Designed a hierarchical RBAC system with JWT tokens and middleware-based permission checking. Implemented fine-grained permissions for each resource type with audit logging.",
          images: ["/assets/projects/uninav/challenges/user-roles.png"],
        },
      ],
      summary:
        "These challenges taught me the importance of scalable architecture, performance optimization, and user experience design.",
    },
  },
  MedMap: {
    name: "MedMap",
    quote:
      "A healthcare platform designed to help users locate nearby medical facilities and services. Features real-time data integration and user-friendly interface for emergency and routine medical needs.",
    designation: "Healthcare Platform",
    logoUrl: "https://img.icons8.com/color/96/medical-bag.png",
    images: [
      {
        src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        isPrimary: true,
      },
      {
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        isPrimary: false,
      },
      {
        src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop",
        isPrimary: false,
      },
    ],
    links: {
      github: "https://github.com/prospercoded/medmap",
      live: "https://medmap-app.vercel.app",
      projectLink: "/projects/medmap",
    },
    slug: "medmap",
    category: "Healthcare",
    featured: true,
  },
  "Party Currency": {
    name: "Party Currency",
    quote:
      "An innovative event management and payment system that streamlines party planning and expense tracking. Built with modern technologies to handle real-time transactions and event coordination.",
    designation: "Event Management System",
    logoUrl: "https://img.icons8.com/color/96/party-popper.png",
    images: [
      {
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
        isPrimary: true,
      },
      {
        src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
        isPrimary: false,
      },
      {
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
        isPrimary: false,
      },
    ],
    links: {
      github: "https://github.com/prospercoded/party-currency",
      live: "https://party-currency.vercel.app",
      projectLink: "/projects/party-currency",
    },
    slug: "party-currency",
    category: "Event Management",
    featured: true,
  },

  "ATC Africa Integration": {
    name: "ATC Africa Integration",
    quote:
      "Led a team of 5 Backend Engineers to integrate an event management system on the official ATC Africa site. Focused on scalability, performance optimization, and seamless user experience.",
    designation: "Team Leadership Project",
    logoUrl: "/assets/projects/atcafrica/logo.png",
    images: [
      {
        src: "/assets/projects/atcafrica/showcase/image1.png",
        isPrimary: true,
      },
    ],
    links: {
      github: "https://github.com/amazingtechcom/atc-website-api",
      live: "https://atcafrica.com",
      projectLink: "/projects/atc-africa",
    },
    slug: "atc-africa",
    category: "Team Leadership",
    featured: true,
  },
};

// Helper function to get a project by name
export const getProjectByName = (name: string): ProjectItem | undefined => {
  return projects[name];
};

// Helper function to get a project by slug
export const getProjectBySlug = (slug: string): ProjectItem | undefined => {
  return Object.values(projects).find((project) => project.slug === slug);
};

// Helper function to get all project names
export const getProjectNames = (): string[] => {
  return Object.keys(projects);
};

// Helper function to get all project slugs for static generation
export const getAllProjectSlugs = (): string[] => {
  return Object.values(projects).map((project) => project.slug);
};

export const UniqueProjects = [
  {
    quote: "Best Vibe Coded Project",
    project: projects["UniNav"],
  },
  {
    quote: "Best Fullstack Project",
    project: projects["MedMap"],
  },
  {
    quote: "Best Event Management Project",
    project: projects["Party Currency"],
  },
  {
    quote: "Best Educational Project",
    project: projects["Uninav"],
  },
  {
    quote: "Best Team Leadership Project",
    project: projects["ATC Africa Integration"],
  },
];
