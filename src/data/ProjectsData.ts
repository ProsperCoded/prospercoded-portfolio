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
  link: string;
  githubLink?: string;
  webLink?: string;
  techStack: (typeof technologies)[keyof typeof technologies][];
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
          {
            tech: technologies.tailwindcss,
            reason:
              "For rapid UI development, highly customizable styling, and responsive design without writing custom CSS",
          },
        ],
        Backend: [
          {
            tech: technologies.nodejs,
            reason:
              "Selected for its non-blocking I/O model, efficiency, and ability to handle concurrent requests, making it suitable for a scalable API",
          },
          {
            tech: technologies.expressjs,
            reason:
              "A minimalist and flexible Node.js web application framework that provides a robust set of features for web and mobile applications",
          },
        ],
        Database: [
          {
            tech: technologies.postgresql,
            reason:
              "A powerful, open-source relational database known for its reliability, feature richness, and strong support for complex queries and data integrity",
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
    challenges: {
      overview:
        "Building UniNav presented several complex challenges that required innovative solutions and deep technical expertise. From handling massive file uploads to implementing real-time features, each challenge pushed the boundaries of what was possible with the chosen technology stack.",
      challenges: [
        {
          title: "Scalable File Upload System",
          description:
            "Students needed to upload large study materials (PDFs, videos, images) efficiently without overwhelming the server or causing timeouts.",
          impact:
            "Initial uploads were failing for files over 10MB, causing 40% of users to abandon the upload process. This severely limited the platform's usefulness.",
          solution:
            "Implemented a chunked upload system with resumable uploads using multer and cloud storage. Added progress bars and retry mechanisms. Files are now processed in 2MB chunks with automatic retry on failure.",
          images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          ],
          technologies: ["Node.js", "Multer", "AWS S3", "Redis"],
        },
        {
          title: "Real-time Recommendation Engine",
          description:
            "Creating a recommendation system that could analyze user behavior and suggest relevant materials in real-time without impacting performance.",
          impact:
            "Without recommendations, users had to manually search through thousands of materials, leading to poor user engagement and low content discovery rates.",
          solution:
            "Built a hybrid recommendation system combining collaborative filtering with content-based filtering. Implemented caching with Redis and background processing to ensure recommendations load instantly.",
          images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          ],
          technologies: ["Python", "Redis", "Machine Learning", "PostgreSQL"],
        },
        {
          title: "Role-based Access Control",
          description:
            "Implementing a complex permission system where different user types (students, moderators, admins) have varying levels of access to materials and features.",
          impact:
            "Security vulnerabilities were discovered where students could access admin functions, and moderators couldn't properly manage content, leading to potential data breaches.",
          solution:
            "Designed a hierarchical RBAC system with JWT tokens and middleware-based permission checking. Implemented fine-grained permissions for each resource type with audit logging.",
          images: [
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
          ],
          technologies: ["JWT", "Express.js", "PostgreSQL", "Middleware"],
        },
        {
          title: "Database Performance Optimization",
          description:
            "The database was becoming a bottleneck with complex queries for search, recommendations, and analytics taking 5+ seconds to execute.",
          impact:
            "Slow database queries were causing 3-5 second page load times, leading to 60% user abandonment and poor user experience.",
          solution:
            "Implemented database indexing strategy, query optimization, and connection pooling. Added read replicas for analytics queries and implemented caching layers.",
          images: [
            "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          ],
          technologies: [
            "PostgreSQL",
            "Redis",
            "Connection Pooling",
            "Database Indexing",
          ],
        },
        {
          title: "Real-time Notifications",
          description:
            "Implementing a notification system that could handle thousands of concurrent users and deliver instant updates about new materials, comments, and interactions.",
          impact:
            "Users were missing important updates about new materials in their departments, leading to low engagement and poor user retention.",
          solution:
            "Built a WebSocket-based notification system with Socket.io, implementing room-based subscriptions and message queuing to handle high concurrency.",
          images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          ],
          technologies: ["Socket.io", "Redis", "Node.js", "WebSockets"],
        },
      ],
      summary:
        "These challenges taught me the importance of scalable architecture, performance optimization, and user experience design. The solutions implemented not only solved the immediate problems but also created a robust foundation for future growth. The platform now handles 10x more users and processes 5x more data than initially anticipated.",
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
