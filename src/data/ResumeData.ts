import { technologies } from "@/data/TechnologiesData";

export type SkillCategories = Record<
  string,
  (typeof technologies)[keyof typeof technologies][]
>;

export type Competition = {
  title: string;
  event: string;
  icon: string;
  link: string;
};

export type Organization = {
  period: string;
  role: string;
  company: string;
  link: string;
  description: string;
};

export type Certification = {
  title: string;
  org: string;
  date: string;
  link: string;
};

export type Contract = {
  title: string;
  role: string;
  period: string;
  description: string;
  link: string;
};

export const skillCategories: SkillCategories = {
  "BACKEND FRAMEWORKS": [
    technologies.nestjs,
    technologies.expressjs,
    technologies.django,
  ],
  "DATABASES / ORMS": [
    technologies.postgresql,
    technologies.turso,
    technologies.mongodb,
    technologies.redis,
    technologies.firebase,
    technologies.supabase,
    technologies.drizzle,
    technologies.typeorm,
    technologies.prisma,
  ],
  "PROGRAMMING LANGUAGE": [
    technologies.typescript,
    technologies.python,
    technologies.java,
  ],
  "TESTING & DEBUGGING": [technologies.jest, technologies.supertest],
  "BACKEND INTEGRATION": [
    technologies.restapi,
    technologies.graphql,
    technologies.websockets,
  ],
  OTHERS: [
    technologies.microservices,
    technologies.dsa,
    technologies.docker,
    technologies.mvc,
  ],
};

export const competitions: Competition[] = [
  {
    title: "1st Place in IPTLC UI Hackathon - SealRight",
    event: "IPTLC Hackathon 2025",
    icon: "🏆",
    link: "https://www.linkedin.com/posts/intellectual-property-and-technology-law-club-university-of-ibadan_tech-hackathon-winners-activity-7347892950288244737-aQm-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp6Pn4BfJ380XKae1xjuxDbYK45cneQbKA",
  },
  {
    title: "4th Place in TECHNEST Hackathon - Medmap",
    event: "TECHNEST Hackathon 2024",
    icon: "🏆",
    link: "#",
  },
];

export const organizations: Organization[] = [
  {
    period: "April 2025 - Sept 2025",
    role: "Co-Lead Backend Engineer",
    company: "ATC Africa",
    link: "https://atcafrica.com",
    description:
      "Led a team of 5 Backend Engineers to integrate an event management system, optimizing performance and ensuring scalable architecture.",
  },
  {
    period: "Jan 2024 - Feb 2025",
    role: "Lead Fullstack Developer",
    company: "9jaMarkets",
    link: "https://9jamarkets.com",
    description:
      "Developed interactive e-commerce platforms and payment systems, improving user experience and checkout efficiency.",
  },
];

export const certifications: Certification[] = [
  {
    title: "NESTJS MICROSERVICES: BUILD & DEPLOY A SCALEABLE BACKEND",
    org: "Udemy - Micheal Guay",
    date: "Learning",
    link: "https://www.bing.com/ck/a?!&&p=ba27db13a14ba49299128841f7addb3ef4963a580b43904a6f27da03767164abJmltdHM9MTc1ODQxMjgwMA&ptn=3&ver=2&hsh=4&fclid=3d9c62ef-a752-6c4f-123f-748da6f66d81&psq=NESTJS+MICROSERVICES%3a+BUILD+%26+DEPLOY+A+SCALEABLE+BACKEND&u=a1aHR0cHM6Ly93d3cudWRlbXkuY29tL2NvdXJzZS9uZXN0anMtbWljcm9zZXJ2aWNlcy1idWlsZC1kZXBsb3ktYS1zY2FsZWFibGUtYmFja2VuZC8&ntb=1",
  },
  {
    title: "ADVANCED DATA MANIPULATION IN SQL",
    org: "DataCamp",
    date: "March 2024",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/2b164b59ab39258db288cdaa226854c6f338d02a",
  },
  {
    title: "INTERMEDIATE SQL",
    org: "DataCamp",
    date: "February 2024",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/0c22408c4c008894f6b5cd75ea015d632e32a221?raw=1",
  },
  {
    title: "JOINING DATA IN SQL",
    org: "DataCamp",
    date: "January 2024",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/cd25065c15b57bb66d07ad38c13f842f073f3005?raw=1",
  },
  {
    title: "AUTOMATE DEVELOPMENT TASK BY USING GITHUB ACTIONS",
    org: "Microsoft",
    date: "December 2023",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/ProsperEnwerem-1949/VD2JJFEM?sharingId=FA476B06016BDDDF",
  },
  {
    title: " FUNDAMENTAL AI CONCEPTS",
    org: "Microsoft",
    date: "November 2023",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/ProsperEnwerem-1949/UYLWEHK3?sharingId=FA476B06016BDDDF",
  },
  {
    title: "The Ultimate Docker Course",
    org: "Mosh Hamedani",
    date: "October 2023",
    link: "#",
  },
  {
    title: "The Ultimate Git Course",
    org: "Mosh Hamedani",
    date: "September 2023",
    link: "#",
  },
];

export const contracts: Contract[] = [
  {
    title: "3YP",
    role: "Backend Engineer",
    period: "5 months",
    description:
      "Ride-hailing platform with intelligent dispatch optimized for battery efficiency and urban traffic in Nigeria.",
    link: "/projects/3yp",
  },
  {
    title: "NourishBox",
    role: "Fullstack Engineer",
    period: "3 months",
    description:
      "Recipe-selling platform for chefs to upload and sell recipes with browsing, ordering, and customer feedback.",
    link: "/projects/nourishbox",
  },
];
