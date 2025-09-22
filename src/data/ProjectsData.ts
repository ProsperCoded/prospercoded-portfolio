import { technologies, Technology } from "./TechnologiesData";

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
    technologies?: (typeof technologies)[keyof typeof technologies][];
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
    logoUrl: "/assets/projects/medmap/logo.png",
    images: [
      {
        src: "/assets/projects/medmap/showcase/image1.png",
        isPrimary: true,
      },
      {
        src: "/assets/projects/medmap/showcase/image2.png",
        isPrimary: false,
      },
      {
        src: "/assets/projects/medmap/showcase/image3.png",
        isPrimary: false,
      },
      {
        src: "/assets/projects/medmap/showcase/image4.png",
        isPrimary: false,
      },
    ],
    links: {
      github: "https://github.com/prospercoded/medmap",
      live: "https://medmap.live",
      projectLink: "/projects/medmap",
    },
    slug: "medmap",
    category: "Healthcare",
    featured: true,
    brief: {
      motivation:
        "Many patients struggle to locate prescribed medications quickly. Lack of real-time drug availability information leads to treatment delays and avoidable complications. MedMap bridges patients to accessible, reliable healthcare by surfacing nearby pharmacies that stock requested medications and offering AI guidance. The software was presented in a state hackathon and took 4th place",
      challenges: [
        "No reliable, real-time visibility into drug availability across pharmacies",
        "Slow manual discovery and navigation to pharmacies that actually stock a drug",
        "Users lack quick, trustworthy guidance on drug usage and side effects",
        "Scaling data ingestion and search while keeping UX simple",
      ],
      solutions: [
        "Implemented medication search with proximity-based sorting and clear availability signals",
        "Integrated map and directions for fast route planning to pharmacies",
        "Added an AI assistant to explain usage, warnings, and side effects for common medications",
        "Structured data model for pharmacies and inventories to support future real-time sync",
      ],
      impact:
        "MedMap reduces time-to-medication by guiding users to nearby locations that are likely to have their prescriptions in stock, while the AI assistant improves understanding and safe usage. The approach lays a foundation for live inventory syncing and nation-wide scale.",
    },
    architecture: {
      overview:
        "MedMap follows a modular web architecture with a React frontend, a Node.js/Express API, and PostgreSQL managed via Drizzle ORM. It integrates Google Maps services for geospatial features and an AI layer for medication guidance.",
      techChoices: {
        Frontend: [
          {
            tech: technologies.react,
            reason: "Modern, performant UI with React 18",
          },
          {
            tech: technologies.tailwindcss,
            reason: "Rapid, consistent styling system",
          },
          {
            tech: technologies.openstreetmap,
            reason:
              "For geospatial features and distance calculations, and map view",
          },
        ],
        Backend: [
          {
            tech: technologies.expressjs,
            reason: "Minimal, flexible HTTP layer for REST",
          },
          {
            tech: technologies.websockets,
            reason: "Socket.io, for real time communication with AI chat bot",
          },
        ],
        Database: [
          {
            tech: technologies.postgresql,
            reason: "Reliable relational store with geospatial extensions",
          },
          {
            tech: technologies.drizzle,
            reason: "Type-safe schema and migrations with great DX",
          },
        ],
        Deployment: [
          {
            tech: technologies.vercel,
            reason: "Seamless hosting for the frontend with CI/CD",
          },
        ],
      },
      systemFlow:
        "Users search for medications → frontend queries the API → API filters pharmacies by inventory and distance → results are sorted by proximity and availability → users view map pins and directions. The AI assistant answers medication questions using curated data.",
      keyFeatures: [
        "Medication search with proximity-based ranking",
        "Map visualization with directions to pharmacies",
        "AI assistant for usage, warnings, and side effects",
        "Scalable data model for pharmacy inventories",
      ],
    },
    uml: {
      description:
        "High-level flow showing user search, inventory lookup, distance calculation, and AI Q&A.",
      imageUrl: "/assets/projects/medmap/showcase/image1.png",
      flowExplanation:
        "User submits a drug query → API loads candidate pharmacies → distance matrix computed via map services → results ranked and returned → user can ask AI for medication guidance.",
      components: [
        "React UI",
        "Express API",
        "PostgreSQL + Drizzle",
        "Maps/Distance Service",
        "AI Assistant Layer",
      ],
    },
    database: {
      overview:
        "Schema centers on pharmacies, medications, and an inventory join to represent stock and pricing. Designed to support future real-time sync and geospatial querying.",
      schema: {
        imageUrl: "/assets/projects/medmap/showcase/image2.png",
        description:
          "Core tables include pharmacies, medications, and pharmacy_inventories with quantity and price fields; future extensions can add live sync and auditing.",
      },
      designDecisions: [
        "Normalized tables for clean relationships and predictable queries",
        "Geolocation fields on pharmacies for proximity sorting",
        "Indexes on medication name/code and pharmacy location",
        "Inventory row versioning support for future real-time updates",
      ],
      tables: [
        {
          name: "pharmacies",
          purpose: "Registered pharmacies with geolocation and metadata",
        },
        {
          name: "medications",
          purpose: "Catalog of drugs with generic/brand names and tags",
        },
        {
          name: "pharmacy_inventories",
          purpose: "Stock availability, quantity, and pricing per pharmacy",
        },
        {
          name: "search_logs",
          purpose: "Anonymous search analytics for improving results",
        },
      ],
    },
    challenges: {
      overview:
        "Delivering trustworthy availability and guidance required careful data modeling, geospatial processing, and an AI layer that remains helpful and safe.",
      challenges: [
        {
          title: "Proximity-based Ranking for Medication Search",
          description:
            "Users need nearby options surfaced first, while still seeing availability context.",
          impact:
            "Without accurate distance sorting, users waste time visiting distant or irrelevant pharmacies.",
          solution:
            "Added geolocation to pharmacies and computed distance to user queries, ordering results by proximity and availability signals.",
        },
        {
          title: "Actionable Map and Directions UX",
          description:
            "Search results must translate into clear navigation and decision-making on a map.",
          impact:
            "Poor UX increases drop-off and delays in obtaining medication during urgent needs.",
          solution:
            "Integrated a map view with pins, summaries, and one-click directions to selected pharmacies.",
        },
        {
          title: "Helpful AI Guidance on Medications",
          description:
            "Users want quick, reliable information on usage, side effects, and warnings.",
          impact:
            "Misinformation or lack of guidance can lead to misuse and safety risks.",
          solution:
            "Embedded curated medication data into an AI assistant to answer common questions and emphasize safety warnings.",
        },
      ],
      summary:
        "The solution combines geospatial ranking, clear navigation, and AI assistance to reduce time-to-medication and support safer usage.",
    },
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
    project: projects["UniNav"],
  },
  {
    quote: "Best Team Leadership Project",
    project: projects["ATC Africa Integration"],
  },
];
