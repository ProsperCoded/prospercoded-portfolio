import { technologies } from "./TechnologiesData";

export type ProjectImage = {
  src: string;
  isPrimary: boolean;
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
  },
};

// Helper function to get a project by name
export const getProjectByName = (name: string): ProjectItem | undefined => {
  return projects[name];
};

// Helper function to get all project names
export const getProjectNames = (): string[] => {
  return Object.keys(projects);
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
