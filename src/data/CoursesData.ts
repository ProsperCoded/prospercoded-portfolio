export type CourseItem = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  url?: string;
  categories?: string[];
};

export const courses: Record<string, CourseItem> = {
  kubernetesEssentials: {
    id: "kubernetes-essentials",
    name: "Kubernetes and Cloud Native Essentials (LFS250)",
    issuer: "The Linux Foundation",
    date: "Apr 15, 2026",
    description: "A comprehensive course covering the fundamentals of cloud-native architecture, containerization with Docker, and orchestration using Kubernetes. Emphasizes modern deployment best practices.",
    image: "/assets/courses/kubernetes-and-cloud-native-essentials.png",
    url: "https://trainingportal.linuxfoundation.org/learn/dashboard",
    categories: ["Cloud Native"],
  },
  developingAsALeader: {
    id: "developing-as-a-leader",
    name: "Leading Teams: Developing as a Leader",
    issuer: "University of Illinois Urbana-Champaign",
    date: "Apr 5, 2026",
    description: "Designed to provide essential leadership strategies and soft skills for managing teams, improving communication, and fostering a productive environment.",
    image: "/assets/courses/developing-as-a-leader.png",
    url: "https://coursera.org/verify/KUV5T0QNL8ZK",
    categories: ["Softskills", "Leadership"],
  },
  theFutureOfPaymentTechnologies: {
    id: "the-future-of-payment-technologies",
    name: "The Future of Payment Technologies",
    issuer: "University of Michigan",
    date: "Jan 30, 2026",
    description: "An overview of rapid advancements in payment infrastructure, fintech innovations, and how modern systems are shaping digital economies.",
    image: "/assets/courses/the-future-of-payment-technologies.png",
    url: "https://coursera.org/verify/PU6Q3A2IQ5LW",
    categories: ["Softskills", "FinTech"],
  }
};
