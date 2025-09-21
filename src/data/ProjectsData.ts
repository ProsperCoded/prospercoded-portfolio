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
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
};

export type ProjectArchitecture = {
  overview: string;
  techChoices: {
    technology: string;
    reason: string;
    category: string;
  }[];
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

export type ProjectItem = {
  name: string;
  quote: string;
  designation: string;
  images: ProjectImage[];
  link: string;
  githubLink?: string;
  webLink?: string;
  techStack: (typeof technologies)[keyof typeof technologies][];
  // Enhanced content for documentation
  brief?: ProjectBrief;
  architecture?: ProjectArchitecture;
  uml?: ProjectUML;
  database?: ProjectDatabase;
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
    images: [
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        isPrimary: true,
      },
      {
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        isPrimary: false,
      },
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        isPrimary: false,
      },
    ],
    link: "https://github.com/prospercoded/uninav",
    githubLink: "https://github.com/prospercoded/uninav",
    webLink: "https://uninav-demo.vercel.app",
    techStack: [
      technologies.react,
      technologies.nextjs,
      technologies.tailwindcss,
      technologies.typescript,
      technologies.nodejs,
      technologies.expressjs,
      technologies.postgresql,
      technologies.docker,
    ],
    slug: "uninav",
    category: "Full Stack",
    featured: true,
    brief: {
      motivation:
        "As a student at the University of Ibadan, I experienced firsthand the challenges of accessing and sharing study materials. Traditional methods like scattered Google Drive links and WhatsApp groups were inefficient and disorganized. I wanted to create a centralized platform that would help students access and share essential course-related resources in an organized, scalable way.",
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
        "UniNav has transformed how students at University of Ibadan access and share study materials. The platform has created a community-driven approach where students actively contribute to a growing knowledge base, making academic resources more accessible and organized than ever before.",
      links: {
        github: "https://github.com/prospercoded/uninav",
        live: "https://uninav-demo.vercel.app",
        demo: "https://uninav-demo.vercel.app",
      },
    },
    architecture: {
      overview:
        "UniNav follows a modern full-stack architecture with a React/Next.js frontend and Node.js/Express backend. The system is designed for scalability and performance, using PostgreSQL for data persistence and Docker for containerization.",
      techChoices: [
        {
          technology: "Next.js",
          reason:
            "Chosen for its excellent SEO capabilities, server-side rendering, and built-in optimization features that are crucial for a content-heavy platform",
          category: "Frontend",
        },
        {
          technology: "Node.js & Express",
          reason:
            "Selected for rapid development, excellent ecosystem, and seamless integration with modern frontend frameworks",
          category: "Backend",
        },
        {
          technology: "PostgreSQL",
          reason:
            "Chosen for its reliability, ACID compliance, and excellent performance with complex queries needed for the recommendation system",
          category: "Database",
        },
        {
          technology: "Docker",
          reason:
            "Implemented for consistent deployment across environments and easy scaling of the application",
          category: "DevOps",
        },
      ],
      systemFlow:
        "The application follows a three-tier architecture: Presentation Layer (React/Next.js), Business Logic Layer (Express.js API), and Data Layer (PostgreSQL). User requests flow through the Next.js frontend to the Express API, which processes business logic and interacts with the PostgreSQL database.",
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
        imageUrl:
          "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&h=800&fit=crop",
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
            "Stores user information, roles, and academic profiles for the recommendation system",
        },
        {
          name: "materials",
          purpose:
            "Contains uploaded study materials with metadata, categorization, and approval status",
        },
        {
          name: "departments",
          purpose: "Organizes materials by academic departments and levels",
        },
        {
          name: "interactions",
          purpose:
            "Tracks user interactions with materials for recommendation algorithms",
        },
        {
          name: "notifications",
          purpose: "Manages real-time notifications for users",
        },
      ],
    },
  },
  MedMap: {
    name: "MedMap",
    quote:
      "A healthcare platform designed to help users locate nearby medical facilities and services. Features real-time data integration and user-friendly interface for emergency and routine medical needs.",
    designation: "Healthcare Platform",
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
    link: "https://github.com/prospercoded/medmap",
    githubLink: "https://github.com/prospercoded/medmap",
    webLink: "https://medmap-app.vercel.app",
    techStack: [
      technologies.nextjs,
      technologies.typescript,
      technologies.mongodb,
      technologies.restapi,
      technologies.tailwindcss,
      technologies.vercel,
    ],
    slug: "medmap",
    category: "Healthcare",
    featured: true,
  },
  GoalFund: {
    name: "GoalFund",
    quote:
      "A crowdfunding platform that connects goal-oriented individuals with supporters. Features secure payment integration, real-time progress tracking, and transparency-focused design.",
    designation: "Fintech Platform",
    images: [
      {
        src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        isPrimary: true,
      },
      {
        src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
        isPrimary: false,
      },
      {
        src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
        isPrimary: false,
      },
    ],
    link: "https://github.com/prospercoded/goalfund",
    githubLink: "https://github.com/prospercoded/goalfund",
    webLink: "https://goalfund.vercel.app",
    techStack: [
      technologies.react,
      technologies.nodejs,
      technologies.postgresql,
      technologies.stripe,
      technologies.expressjs,
      technologies.docker,
    ],
    slug: "goalfund",
    category: "Fintech",
    featured: true,
  },
  "Party Currency": {
    name: "Party Currency",
    quote:
      "An innovative event management and payment system that streamlines party planning and expense tracking. Built with modern technologies to handle real-time transactions and event coordination.",
    designation: "Event Management System",
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
    link: "https://github.com/prospercoded/party-currency",
    githubLink: "https://github.com/prospercoded/party-currency",
    webLink: "https://party-currency.vercel.app",
    techStack: [
      technologies.nextjs,
      technologies.nestjs,
      technologies.postgresql,
      technologies.websockets,
      technologies.prisma,
      technologies.typescript,
    ],
    slug: "party-currency",
    category: "Event Management",
    featured: true,
  },
  "Faculty Payment System": {
    name: "Faculty Payment System",
    quote:
      "A comprehensive payment system developed for university faculty operations. Solves real-world logistical challenges on campus with secure transaction processing and administrative features.",
    designation: "Educational Platform",
    images: [
      {
        src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
        isPrimary: true,
      },
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        isPrimary: false,
      },
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        isPrimary: false,
      },
    ],
    link: "https://github.com/prospercoded/faculty-payment",
    githubLink: "https://github.com/prospercoded/faculty-payment",
    webLink: "https://faculty-payment-demo.vercel.app",
    techStack: [
      technologies.react,
      technologies.django,
      technologies.python,
      technologies.postgresql,
      technologies.restapi,
      technologies.aws,
    ],
    slug: "faculty-payment",
    category: "Educational",
    featured: true,
  },
  "ATC Africa Integration": {
    name: "ATC Africa Integration",
    quote:
      "Led a team of 5 Backend Engineers to integrate an event management system on the official ATC Africa site. Focused on scalability, performance optimization, and seamless user experience.",
    designation: "Team Leadership Project",
    images: [
      {
        src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
        isPrimary: true,
      },
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        isPrimary: false,
      },
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        isPrimary: false,
      },
    ],
    link: "https://atcafrica.com",
    githubLink: "https://github.com/atc-africa/event-management",
    webLink: "https://atcafrica.com",
    techStack: [
      technologies.nextjs,
      technologies.nodejs,
      technologies.typescript,
      technologies.mongodb,
      technologies.graphql,
      technologies.docker,
    ],
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
    quote: "Best Fintech Project",
    project: projects["GoalFund"],
  },
  {
    quote: "Best Event Management Project",
    project: projects["Party Currency"],
  },
  {
    quote: "Best Educational Project",
    project: projects["Faculty Payment System"],
  },
  {
    quote: "Best Team Leadership Project",
    project: projects["ATC Africa Integration"],
  },
];
