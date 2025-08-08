import { technologies } from "./TechnologiesData";

export type ProjectItem = {
  name: string;
  quote: string;
  designation: string;
  src: string;
  link: string;
  githubLink?: string;
  webLink?: string;
  techStack: (typeof technologies)[keyof typeof technologies][];
};

export const projects: ProjectItem[] = [
  {
    name: "UniNav",
    quote:
      "A university-wide platform that helps students access and share study materials in an organized, scalable way. Built with Node.js backend and modern frontend technologies to solve real campus challenges.",
    designation: "Full Stack Project",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
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
  {
    name: "MedMap",
    quote:
      "A healthcare platform designed to help users locate nearby medical facilities and services. Features real-time data integration and user-friendly interface for emergency and routine medical needs.",
    designation: "Healthcare Platform",
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
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
  {
    name: "GoalFund",
    quote:
      "A crowdfunding platform that connects goal-oriented individuals with supporters. Features secure payment integration, real-time progress tracking, and transparency-focused design.",
    designation: "Fintech Platform",
    src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
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
  {
    name: "Party Currency",
    quote:
      "An innovative event management and payment system that streamlines party planning and expense tracking. Built with modern technologies to handle real-time transactions and event coordination.",
    designation: "Event Management System",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
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
  {
    name: "Faculty Payment System",
    quote:
      "A comprehensive payment system developed for university faculty operations. Solves real-world logistical challenges on campus with secure transaction processing and administrative features.",
    designation: "Educational Platform",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
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
  {
    name: "ATC Africa Integration",
    quote:
      "Led a team of 5 Backend Engineers to integrate an event management system on the official ATC Africa site. Focused on scalability, performance optimization, and seamless user experience.",
    designation: "Team Leadership Project",
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
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
];
