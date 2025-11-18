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
        Database: [
          {
            tech: technologies.postgresql,
            reason:
              "For its reliability, feature richness, and strong support for complex queries and data integrity, used it for more optimized searches using pgvector",
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
        Deployment: [
          {
            tech: technologies.vercel,
            reason: "Seamless hosting for the frontend with CI/CD",
          },
        ],
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

    database: {
      overview:
        "Schema centers on pharmacies, medications, and an inventory join to represent stock and pricing. Designed to support future real-time sync and geospatial querying.",
      schema: {
        imageUrl: "/assets/projects/medmap/database/image1.png",
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
    brief: {
      motivation:
        "ATC Africa needed a robust, backend-powered Event Management System to eliminate manual content updates and empower organizers to manage events end-to-end. The goal was to improve operational efficiency, transparency, and audience engagement across HQ, State, and Campus events.",
      challenges: [
        "Manual workflows caused slow event updates and inconsistent data",
        "No lifecycle automation to transition events post-date",
        "Access control needed for organizers, managers, and admins",
        "Scalable media handling and caching for a content-heavy site",
      ],
      solutions: [
        "Built a NestJS API with structured event CRUD and roles/permissions",
        "Implemented lifecycle automation with scheduled jobs and reminder emails",
        "Added RBAC enforcing Organizer, Community Manager, and Admin scopes",
        "Integrated AWS S3 for media and Redis caching for performance",
      ],
      impact:
        "The platform streamlines event operations, reduces developer bottlenecks, and showcases concluded events with measurable outcomes, boosting credibility and participation for future events.",
    },
    architecture: {
      overview:
        "Service-oriented backend built with NestJS exposing REST endpoints consumed by the official site. PostgreSQL (RDS) persists core entities, Redis accelerates reads, AWS S3 stores media, and Brevo handles transactional emails for lifecycle reminders.",
      techChoices: {
        Backend: [
          {
            tech: technologies.nestjs,
            reason: "Opinionated modular architecture with DI and decorators",
          },
          {
            tech: technologies.restapi,
            reason: "Simple, predictable integration surface for the website",
          },
        ],
        Deployment: [
          {
            tech: technologies.aws,
            reason: "RDS for PostgreSQL and S3 for object storage",
          },
          {
            tech: technologies.docker,
            reason: "Consistent runtime across environments and CI",
          },
        ],
        Database: [
          {
            tech: technologies.postgresql,
            reason: "Reliable relational store hosted on Amazon RDS",
          },
          {
            tech: technologies.redis,
            reason: "Caching with cache-manager to reduce response latency",
          },
        ],
        Tools: [
          {
            tech: technologies.github,
            reason: "Source control and team collaboration",
          },
          {
            tech: technologies.jest,
            reason: "Automated tests for critical modules",
          },
        ],
      },
      systemFlow:
        "Organizers create/update events → RBAC validates permissions → data stored in PostgreSQL → scheduled jobs monitor event dates → post-date, the system requests outcomes (media, attendance, slides) via Brevo emails → once submitted, status transitions to Concluded and content becomes visible on the site.",
      keyFeatures: [
        "Event CRUD with status tracking (Draft, Pending Approval, Approved, Concluded)",
        "Lifecycle automation with reminders and state transitions",
        "Role-based access control (Organizer, Community Manager, Admin)",
        "Media handling via S3 and API endpoints for galleries",
        "Caching layer for high-traffic endpoints",
      ],
    },
    uml: {
      description:
        "Sequence of event creation, approval, lifecycle monitoring, and conclusion with media submission and publication.",
      imageUrl: "/assets/projects/atcafrica/uml/image.jpeg",
      flowExplanation:
        "Create/approve event → scheduler checks event date → if exceeded, email reminders are sent → organizer submits outcomes → API validates and persists → status = Concluded → frontend displays in concluded section.",
      components: [
        "NestJS API",
        "PostgreSQL (RDS)",
        "Redis Cache",
        "AWS S3 Storage",
        "Email Service (Brevo)",
      ],
    },
    database: {
      overview:
        "Normalized schema around events, roles, and media artifacts. Event status and timestamps support automation; audit fields enable governance.",
      schema: {
        imageUrl: "/assets/projects/atcafrica/database/image.jpg",
        description:
          "Core entities include events, users, roles/permissions, speakers, sponsors, media assets, and audit trails. Status fields drive lifecycle transitions.",
      },
      designDecisions: [
        "Explicit event status machine for clear lifecycle handling",
        "RBAC tables separating users, roles, and permissions",
        "Media assets stored on S3 with DB metadata and signed access",
        "Indexes on event dates and status for dashboard queries",
      ],
      tables: [
        { name: "users", purpose: "Platform users with role assignments" },
        {
          name: "roles",
          purpose: "Role definitions (Organizer/Manager/Admin)",
        },
        { name: "user_roles", purpose: "Junction for user-to-role mapping" },
        {
          name: "events",
          purpose: "Event details, status, schedule, and metadata",
        },
        { name: "event_speakers", purpose: "Speakers linked to events" },
        { name: "event_sponsors", purpose: "Sponsors linked to events" },
        {
          name: "media_assets",
          purpose: "References to S3 objects and captions",
        },
        {
          name: "cta_modals",
          purpose: "Configurable CTAs for site engagement",
        },
      ],
    },
    challenges: {
      overview:
        "Transforming a static process into a dynamic, automated system required strong domain modeling, secure access control, and robust scheduling and media flows.",
      challenges: [
        {
          title: "Role-Based Access Control at Scale",
          description:
            "Different actors needed scoped access to create, approve, and conclude events.",
          impact:
            "Without RBAC, unauthorized actions and data inconsistencies could occur.",
          solution:
            "Implemented RBAC with guards and decorators in NestJS, mapping roles to route permissions and adding audits.",
        },
        {
          title: "Automated Event Lifecycle",
          description:
            "Events must transition post-date and prompt organizers for outcomes.",
          impact:
            "Manual follow-ups were slow and error-prone, delaying public updates.",
          solution:
            "Added scheduled jobs to detect overdue events and send Brevo reminders until outcomes are submitted.",
        },
        {
          title: "Media Storage and Performance",
          description:
            "High-resolution photos and assets needed reliable storage and fast delivery.",
          impact:
            "Large media could slow endpoints and increase load on the DB/API.",
          solution:
            "Stored media on S3 with signed URLs, leveraged Redis for caching, and optimized endpoints for gallery views.",
        },
      ],
      summary:
        "The system now reliably manages events end-to-end with security, automation, and performant content delivery, reducing operational friction for the ATC Africa team.",
    },
  },
  NourishBox: {
    name: "NourishBox",
    quote:
      "A fully functional meal kit delivery platform that makes healthy cooking accessible and convenient. Features secure payments, real-time order tracking, and comprehensive admin dashboard for managing the entire business workflow.",
    designation: "E-commerce Platform",
    logoUrl: "/assets/projects/nourishbox/logo.png",
    images: [
      {
        src: "/assets/projects/nourishbox/showcase/image1.png",
        isPrimary: true,
      },
      {
        src: "/assets/projects/nourishbox/showcase/image2.png",
        isPrimary: false,
      },
      {
        src: "/assets/projects/nourishbox/showcase/image3.png",
        isPrimary: false,
      },
      {
        src: "/assets/projects/nourishbox/showcase/image4.png",
        isPrimary: false,
      },
      {
        src: "/assets/projects/nourishbox/showcase/image5.png",
        isPrimary: false,
      },
      {
        src: "/assets/projects/nourishbox/showcase/image6.png",
        isPrimary: false,
      },
      {
        src: "/assets/projects/nourishbox/showcase/image7.png",
        isPrimary: false,
      },
      {
        src: "/assets/projects/nourishbox/showcase/image8.png",
        isPrimary: false,
      },
    ],
    links: {
      github: "https://github.com/prospercoded/nourish-box",
      live: "https://nourish-box.vercel.app",
      projectLink: "/projects/nourishbox",
    },
    slug: "nourishbox",
    category: "E-commerce",
    featured: true,
    brief: {
      motivation:
        "The meal kit delivery market in Nigeria was fragmented with poor user experiences and limited payment options. I wanted to create a comprehensive platform that would make healthy cooking accessible to busy professionals and families. The goal was to build a full-stack e-commerce solution that handles everything from product catalog to order fulfillment, with a focus on the Nigerian market's specific needs like Paystack integration and location-based delivery pricing.",
      challenges: [
        "Complex order management with multiple meal kits and quantities",
        "Secure payment processing with Paystack integration for Nigerian market",
        "Location-based delivery pricing across different states and LGAs",
        "Real-time order tracking and status updates",
        "Comprehensive admin dashboard for business operations",
        "Guest checkout support while maintaining order tracking",
        "Email notification system for order confirmations and updates",
      ],
      solutions: [
        "Built a sophisticated cart system with real-time price calculation and quantity management",
        "Integrated Paystack payment gateway with proper webhook handling and transaction verification",
        "Implemented dynamic delivery cost calculation based on state/LGA with configurable business rules",
        "Created a comprehensive admin dashboard for order management, recipe CRUD, and business analytics",
        "Developed a robust email notification system using Brevo with EJS templates",
        "Designed a flexible user system supporting both registered users and guest checkout",
        "Implemented Firebase Firestore for real-time data synchronization and scalable storage",
      ],
      impact:
        "NourishBox demonstrates a complete e-commerce solution from customer experience to business operations. The platform successfully handles the entire meal kit delivery workflow, from browsing recipes to order fulfillment, with proper payment processing and customer communication. The admin dashboard provides business owners with complete control over their operations, while the customer-facing features ensure a smooth shopping experience.",
    },
    architecture: {
      overview:
        "NourishBox follows a modern full-stack architecture with Next.js 15 frontend, Firebase backend services, and integrated third-party services. The system is designed for scalability and real-time operations, using Firebase Firestore for data persistence, Firebase Storage for media, and Next.js API routes for server-side logic.",
      techChoices: {
        Backend: [
          {
            tech: technologies.firebase,
            reason:
              "Firebase provides real-time database, authentication, and storage in one platform, perfect for e-commerce applications requiring real-time updates",
          },
          {
            tech: technologies.restapi,
            reason:
              "RESTful API design for predictable integration with payment gateways and third-party services",
          },
        ],
        Frontend: [
          {
            tech: technologies.nextjs,
            reason:
              "Next.js 15 with App Router provides excellent SEO capabilities, server-side rendering, and built-in optimization features crucial for an e-commerce platform",
          },
          {
            tech: technologies.typescript,
            reason:
              "Type safety is essential for e-commerce applications to prevent runtime errors in payment processing and order management",
          },
          {
            tech: technologies.tailwindcss,
            reason:
              "Rapid development and consistent styling system for building responsive e-commerce interfaces",
          },
          {
            tech: technologies.shadcn,
            reason:
              "Pre-built accessible components that accelerate development while maintaining design consistency",
          },
          {
            tech: technologies.framerMotion,
            reason:
              "Smooth animations and transitions that enhance user experience in the shopping flow",
          },
        ],
        Database: [
          {
            tech: technologies.firebase,
            reason:
              "Firestore's real-time capabilities and scalability make it ideal for e-commerce applications with dynamic inventory and order tracking",
          },
        ],
        Payments: [
          {
            tech: technologies.paystack,
            reason:
              "Paystack is the leading payment gateway in Nigeria, providing secure payment processing with excellent developer experience",
          },
        ],
        Communication: [
          {
            tech: technologies.brevo,
            reason:
              "Reliable email service for order confirmations, status updates, and customer communication with professional templates",
          },
          {
            tech: technologies.ejs,
            reason:
              "Template engine for creating dynamic email templates with order details and customer information",
          },
        ],
        Storage: [
          {
            tech: technologies.cloudinary,
            reason:
              "Cloud-based image and video management with automatic optimization and transformation for e-commerce media",
          },
        ],
        Deployment: [
          {
            tech: technologies.vercel,
            reason:
              "Seamless deployment with automatic scaling, perfect for e-commerce applications with variable traffic",
          },
        ],
      },
      systemFlow:
        "Customer browses meal kits → adds to cart with quantities → proceeds to checkout (guest or registered) → payment processed via Paystack → order created in Firestore → email confirmations sent → admin processes order → delivery status updated → customer receives notifications → order completed with review system.",
      keyFeatures: [
        "Advanced shopping cart with real-time price calculation",
        "Secure payment processing with Paystack integration",
        "Location-based delivery pricing system",
        "Real-time order tracking and status updates",
        "Comprehensive admin dashboard for business operations",
        "Guest and registered user checkout flows",
        "Email notification system with professional templates",
        "Review and rating system for meal kits",
        "Media management with Cloudinary integration",
      ],
    },

    challenges: {
      overview:
        "Building a complete e-commerce platform required solving complex challenges around payment processing, real-time data synchronization, and business operations management. Each challenge required careful consideration of user experience, security, and scalability.",
      challenges: [
        {
          title: "Complex Shopping Cart with Real-time Pricing",
          description:
            "Implementing a sophisticated cart system that handles multiple meal kits with different quantities, calculates delivery costs based on location, and applies business rules like taxes and fees in real-time.",
          impact:
            "Without proper cart management, customers would experience pricing inconsistencies and checkout failures, leading to abandoned carts and lost revenue.",
          solution:
            "Built a React Context-based cart system with real-time price calculation, location-based delivery pricing, and persistent state management for both guest and registered users.",
        },
        {
          title: "Secure Payment Integration with Paystack",
          description:
            "Integrating Paystack payment gateway with proper webhook handling, transaction verification, and error handling for the Nigerian market.",
          impact:
            "Payment failures or security vulnerabilities could result in financial losses and damage to customer trust.",
          solution:
            "Implemented comprehensive Paystack integration with webhook verification, transaction status checking, and proper error handling with user-friendly feedback.",
        },
        {
          title: "Real-time Order Management System",
          description:
            "Creating a system where orders are processed in real-time, status updates are synchronized across admin dashboard and customer notifications, and inventory is properly managed.",
          impact:
            "Poor order management could lead to overselling, delivery delays, and poor customer experience.",
          solution:
            "Leveraged Firebase Firestore's real-time capabilities to create a synchronized order management system with automatic notifications and status tracking.",
        },
        {
          title: "Comprehensive Admin Dashboard",
          description:
            "Building a complete admin interface for managing recipes, orders, users, business rules, and analytics while maintaining security and usability.",
          impact:
            "Without proper admin tools, business operations would be inefficient and error-prone.",
          solution:
            "Created a comprehensive admin dashboard with role-based access control, real-time data updates, and intuitive interfaces for all business operations.",
        },
        {
          title: "Location-based Delivery Pricing",
          description:
            "Implementing dynamic delivery cost calculation based on Nigerian states and LGAs with configurable business rules.",
          impact:
            "Incorrect delivery pricing could result in financial losses or poor customer experience.",
          solution:
            "Built a flexible delivery pricing system with state/LGA-based calculations and admin-configurable business rules for fees and taxes.",
        },
        {
          title: "Email Notification System",
          description:
            "Creating a reliable email system for order confirmations, status updates, and customer communication with professional templates.",
          impact:
            "Poor communication could lead to customer confusion and support issues.",
          solution:
            "Integrated Brevo email service with EJS templates to create professional, dynamic email notifications for all order lifecycle events.",
        },
      ],
      summary:
        "These challenges required deep understanding of e-commerce workflows, payment processing, real-time data management, and user experience design. The solutions implemented provide a robust foundation for a scalable meal kit delivery business.",
    },
  },
  "FiftyFirst Wellness": {
    name: "FiftyFirst Wellness",
    quote:
      "A comprehensive wellness web application for a UK startup featuring blogs powered by Strapi CMS, podcasts, webinars with Mux video streaming, and Stripe integrations for subscriptions and store purchases.",
    designation: "Wellness Platform",
    logoUrl: "/assets/projects/fiftyfirts_wellness/logo.png",
    images: [
      {
        src: "/assets/projects/fiftyfirts_wellness/showcase/image1.png",
        isPrimary: true,
      },
      {
        src: "/assets/projects/fiftyfirts_wellness/showcase/image2.png",
        isPrimary: false,
      },
      {
        src: "/assets/projects/fiftyfirts_wellness/showcase/image3.png",
        isPrimary: false,
      },
      {
        src: "/assets/projects/fiftyfirts_wellness/showcase/image4.png",
        isPrimary: false,
      },
    ],
    links: {
      live: "https://fiftyfirstswellness.co.uk",
      projectLink: "/projects/fiftyfirst-wellness",
    },
    slug: "fiftyfirst-wellness",
    category: "Wellness Platform",
    featured: true,
    brief: {
      motivation:
        "Built a comprehensive wellness platform for a UK startup that needed a scalable solution for content delivery, subscriptions, and e-commerce. The platform combines multiple content types (blogs, podcasts, webinars) with subscription management and a store, requiring seamless integration of various third-party services.",
      challenges: [
        "Integrating Prisma ORM with Turso DB (LibSQL) faced significant compatibility issues",
        "Building a scalable blogging system that could handle content management efficiently",
        "Implementing video streaming for webinars with proper playback and management",
        "Creating a unified payment system for both subscriptions and one-time store purchases",
        "Managing complex user access control across different content types and subscription tiers",
      ],
      solutions: [
        "Migrated from Prisma to Drizzle ORM which had native support for Turso DB, resolving integration issues",
        "Integrated Strapi as a headless CMS for blogs, providing a customizable content management experience",
        "Implemented Mux for video streaming, handling video uploads, processing, and playback for webinars",
        "Built a unified Stripe integration supporting both subscription billing and store checkout flows",
        "Designed a flexible access control system that manages user permissions based on subscription status and product purchases",
      ],
      impact:
        "FiftyFirst Wellness provides a complete wellness platform that seamlessly combines content delivery, subscription management, and e-commerce. The migration to Drizzle ORM enabled reliable database operations with Turso, while Strapi integration offers scalable content management. The platform is currently in testing phase with core features operational.",
    },
    architecture: {
      overview:
        "The platform follows a modern full-stack architecture with NestJS backend, React frontend, and multiple integrated services. Turso DB (LibSQL) provides distributed database capabilities, Strapi serves as the headless CMS for blogs, Mux handles video streaming, and Stripe manages all payment operations.",
      techChoices: {
        Backend: [
          {
            tech: technologies.nestjs,
            reason:
              "Modular architecture with dependency injection, perfect for managing multiple integrated services and complex business logic",
          },
          {
            tech: technologies.restapi,
            reason:
              "RESTful API design for predictable integration with Strapi CMS, Mux, and Stripe services",
          },
        ],
        Frontend: [
          {
            tech: technologies.react,
            reason:
              "Modern React 19 with hooks and context for managing complex state across content types and user sessions",
          },
          {
            tech: technologies.typescript,
            reason:
              "Type safety essential for payment processing, subscription management, and content type handling",
          },
          {
            tech: technologies.tailwindcss,
            reason:
              "Rapid development and consistent styling for a content-rich wellness platform",
          },
        ],
        Database: [
          {
            tech: technologies.turso,
            reason:
              "Distributed SQLite database providing edge-computing capabilities and low latency for global users",
          },
          {
            tech: technologies.drizzle,
            reason:
              "Native support for Turso DB with type-safe queries and migrations, solving Prisma compatibility issues",
          },
        ],
        CMS: [
          {
            tech: technologies.strapi,
            reason:
              "Headless CMS providing flexible content management for blogs with customizable content types and media handling",
          },
        ],
        Video: [
          {
            tech: technologies.mux,
            reason:
              "Professional video streaming platform handling upload, processing, and adaptive playback for webinars",
          },
        ],
        Payments: [
          {
            tech: technologies.stripe,
            reason:
              "Comprehensive payment processing for both subscription billing and one-time store purchases with webhook support",
          },
        ],
        Deployment: [
          {
            tech: technologies.vercel,
            reason:
              "Seamless frontend deployment with automatic scaling and CI/CD integration",
          },
          {
            tech: technologies.railway,
            reason:
              "Backend hosting with easy database integration and environment management",
          },
        ],
        Tools: [
          {
            tech: technologies.cloudinary,
            reason:
              "Media storage and optimization for product images and content assets",
          },
          {
            tech: technologies.brevo,
            reason:
              "Email service for transactional emails including order confirmations and subscription notifications",
          },
        ],
      },
      systemFlow:
        "Users browse content (blogs from Strapi, podcasts, webinars from Mux) → subscribe or purchase via Stripe → access granted based on subscription/product ownership → content delivered with proper access control. Admin manages content through Strapi CMS and product catalog through the platform.",
      keyFeatures: [
        "Blog system powered by Strapi headless CMS",
        "Podcast library with episode management",
        "Webinar platform with Mux video streaming",
        "Stripe subscription management for recurring billing",
        "E-commerce store with one-time purchases",
        "Role-based access control for content and features",
        "User dashboard for subscriptions and orders",
        "Admin management interface for content and products",
      ],
    },
    uml: {
      description:
        "System architecture showing the integration between NestJS backend, React frontend, Strapi CMS, Mux video streaming, Stripe payments, and Turso database. The diagram illustrates the flow of content delivery, subscription management, and e-commerce operations.",
      imageUrl: "/assets/projects/fiftyfirts_wellness/uml/image.jpg",
      flowExplanation:
        "User requests flow through React frontend → NestJS API processes business logic → Content fetched from Strapi CMS (blogs) or Mux (webinars) → Payment processing via Stripe → Access control verified against Turso database → Content delivered based on subscription/product ownership.",
      components: [
        "React Frontend (Vite)",
        "NestJS Backend API",
        "Strapi CMS (Blog Content)",
        "Mux (Video Streaming)",
        "Stripe (Payment Processing)",
        "Turso DB (Drizzle ORM)",
        "Cloudinary (Media Storage)",
        "Brevo (Email Service)",
      ],
    },
    database: {
      overview:
        "The database uses Turso (LibSQL) for distributed edge computing with Drizzle ORM. Schema supports users, subscriptions, products, orders, payments, and content access tracking.",
      schema: {
        imageUrl: "/assets/projects/fiftyfirts_wellness/uml/image.jpg",
        description:
          "Schema includes tables for users, subscriptions, subscription plans, products (store/programme/podcast), orders, payments, reviews, bookmarks, and delivery addresses. Relationships support complex access control and subscription management.",
      },
      designDecisions: [
        "Migrated from Prisma to Drizzle ORM for native Turso DB support",
        "Normalized schema for users, products, and orders with clear relationships",
        "Separate tables for subscription plans and active subscriptions",
        "Flexible product types (STORE, PROGRAMME, PODCAST) with unified catalog",
        "Payment tracking with support for multiple providers (Stripe, PayPal)",
        "Review system with moderation status for content quality control",
      ],
      tables: [
        {
          name: "users",
          purpose:
            "User accounts with authentication, profiles, and role management",
        },
        {
          name: "subscription_plans",
          purpose:
            "Subscription plan definitions with pricing, duration, and access levels",
        },
        {
          name: "subscriptions",
          purpose:
            "Active user subscriptions linked to plans with start/end dates and status",
        },
        {
          name: "products",
          purpose:
            "Unified product catalog supporting store items, programmes, and podcasts",
        },
        {
          name: "orders",
          purpose:
            "Order records for store purchases with delivery address and status tracking",
        },
        {
          name: "payments",
          purpose:
            "Payment records for both subscriptions and store purchases with provider integration",
        },
        {
          name: "reviews",
          purpose: "Product reviews with moderation status and rating system",
        },
        {
          name: "bookmarks",
          purpose: "User bookmarks for saved content and products",
        },
      ],
    },
    challenges: {
      overview:
        "Building a comprehensive wellness platform required solving complex integration challenges, database compatibility issues, and creating scalable content management solutions.",
      challenges: [
        {
          title: "Prisma to Drizzle ORM Migration",
          description:
            "Faced significant issues integrating Prisma ORM with Turso DB (LibSQL), as Prisma lacked native support for LibSQL driver, causing connection and query failures.",
          impact:
            "Development was blocked, unable to perform database operations reliably, and production deployment was at risk.",
          solution:
            "Migrated the entire codebase from Prisma to Drizzle ORM, which has native support for Turso DB. This enabled seamless database operations, type-safe queries, and proper migration management.",
        },
        {
          title: "Scalable Blogging System",
          description:
            "Needed a blogging system that could scale with content growth, support rich media, and provide a flexible content management experience without building a custom CMS.",
          impact:
            "Building a custom CMS would be time-consuming and maintenance-heavy, while basic solutions wouldn't scale or provide the flexibility needed.",
          solution:
            "Integrated Strapi as a headless CMS, providing a customizable content management interface for blogs. This allows content creators to manage articles, media, and metadata independently while the frontend consumes content via API.",
        },
        {
          title: "Video Streaming for Webinars",
          description:
            "Implementing reliable video streaming for webinars with proper upload, processing, playback, and access control.",
          impact:
            "Poor video quality or unreliable streaming would degrade user experience and reduce engagement with webinar content.",
          solution:
            "Integrated Mux for professional video streaming, handling video uploads, automatic processing, adaptive bitrate streaming, and secure playback with access control.",
        },
        {
          title: "Unified Payment System",
          description:
            "Creating a payment system that handles both recurring subscriptions and one-time store purchases with proper webhook handling and order management.",
          impact:
            "Separate payment flows would create complexity and potential inconsistencies in order processing and user experience.",
          solution:
            "Built a unified Stripe integration with a factory pattern supporting both subscription checkout and store checkout, with proper webhook handling for payment verification and order fulfillment.",
        },
      ],
      summary:
        "These challenges required deep understanding of database systems, content management architectures, video streaming, and payment processing. The solutions implemented provide a robust, scalable foundation for a comprehensive wellness platform.",
    },
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
  // {
  //   quote: "Best Vibe Coded Project",
  //   project: projects["UniNav"], //Jira Clone
  // },
  {
    quote: "Edu Tech Project",
    project: projects["UniNav"],
  },
  {
    quote: "Health Tech Project",
    project: projects["MedMap"],
  },
  {
    quote: "Best AI Integration Project",
    project: projects["MedMap"],
  },
  {
    quote: "Best E-commerce Project",
    project: projects["NourishBox"],
  },
  {
    quote: "Best Team Leadership Project",
    project: projects["ATC Africa Integration"],
  },
];
