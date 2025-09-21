export type Technology = {
  name: string;
  icon?: string;
  color: string;
  category:
    | "frontend"
    | "backend"
    | "database"
    | "deployment"
    | "language"
    | "tool";
};

// Technologies as an object with keys for direct access
export const technologies = {
  // Languages
  typescript: {
    name: "TypeScript",
    icon: "/assets/icons/technologies/typescript.svg",
    color: "text-blue-500",
    category: "language" as const,
  },
  javascript: {
    name: "JavaScript",
    icon: "/assets/icons/technologies/javascript.svg",
    color: "text-yellow-400",
    category: "language" as const,
  },
  python: {
    name: "Python",
    icon: "/assets/icons/technologies/python.svg",
    color: "text-green-500",
    category: "language" as const,
  },
  java: {
    name: "Java",
    icon: "/assets/icons/technologies/java.svg",
    color: "text-orange-500",
    category: "language" as const,
  },

  // Frontend
  react: {
    name: "React",
    icon: "/assets/icons/technologies/react.svg",
    color: "text-blue-400",
    category: "frontend" as const,
  },
  nextjs: {
    name: "Next.js",
    icon: "/assets/icons/technologies/nextjs.svg",
    color: "text-white",
    category: "frontend" as const,
  },
  tailwindcss: {
    name: "Tailwind CSS",
    icon: "/assets/icons/technologies/tailwindcss.svg",
    color: "text-cyan-400",
    category: "frontend" as const,
  },
  scss: {
    name: "SCSS",
    color: "text-pink-400",
    category: "frontend" as const,
  },
  redux: {
    name: "Redux",
    color: "text-purple-400",
    category: "frontend" as const,
  },

  // Backend
  nodejs: {
    name: "Node.js",
    icon: "/assets/icons/technologies/node.svg",
    color: "text-green-400",
    category: "backend" as const,
  },
  nestjs: {
    name: "NestJS",
    icon: "/assets/icons/technologies/nestjs.svg",
    color: "text-red-500",
    category: "backend" as const,
  },
  expressjs: {
    name: "Express.js",
    icon: "/assets/icons/technologies/express.svg",
    color: "text-yellow-400",
    category: "backend" as const,
  },
  django: {
    name: "Django",
    color: "text-green-500",
    category: "backend" as const,
  },

  // Database
  postgresql: {
    name: "PostgreSQL",
    icon: "/assets/icons/technologies/postgresql.svg",
    color: "text-blue-600",
    category: "database" as const,
  },
  mongodb: {
    name: "MongoDB",
    icon: "/assets/icons/technologies/mongodb.svg",
    color: "text-green-600",
    category: "database" as const,
  },
  mysql: {
    name: "MySQL",
    icon: "/assets/icons/technologies/mysql.svg",
    color: "text-blue-500",
    category: "database" as const,
  },
  firebase: {
    name: "Firebase",
    icon: "/assets/icons/technologies/firebase.svg",
    color: "text-orange-500",
    category: "database" as const,
  },
  supabase: {
    name: "Supabase",
    color: "text-emerald-400",
    category: "database" as const,
  },
  prisma: {
    name: "Prisma",
    color: "text-indigo-400",
    category: "database" as const,
  },

  // Deployment & Tools
  docker: {
    name: "Docker",
    icon: "/assets/icons/technologies/docker.svg",
    color: "text-blue-500",
    category: "deployment" as const,
  },
  aws: {
    name: "AWS",
    color: "text-orange-400",
    category: "deployment" as const,
  },
  vercel: {
    name: "Vercel",
    color: "text-white",
    category: "deployment" as const,
  },
  git: {
    name: "Git",
    color: "text-orange-500",
    category: "tool" as const,
  },
  github: {
    name: "GitHub",
    color: "text-gray-300",
    category: "tool" as const,
  },

  // Additional Technologies
  graphql: {
    name: "GraphQL",
    color: "text-pink-500",
    category: "backend" as const,
  },
  restapi: {
    name: "REST API",
    color: "text-green-400",
    category: "backend" as const,
  },
  websockets: {
    name: "WebSockets",
    color: "text-purple-300",
    category: "backend" as const,
  },
  jest: {
    name: "Jest",
    color: "text-red-400",
    category: "tool" as const,
  },
  stripe: {
    name: "Stripe",
    color: "text-indigo-500",
    category: "tool" as const,
  },
} as const;

// Type for technology keys
