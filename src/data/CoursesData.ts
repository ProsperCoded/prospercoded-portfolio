export type CourseItem = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  url?: string;
};

export const courses: Record<string, CourseItem> = {
  kubernetesEssentials: {
    id: "kubernetes-essentials",
    name: "Kubernetes and Cloud Native Essentials",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    date: "2024",
    description: "A comprehensive course covering the fundamentals of cloud-native architecture, containerization with Docker, and orchestration using Kubernetes. Emphasizes modern deployment best practices.",
    image: "/assets/courses/kubernetes-and-cloud-native-essentials.png",
    url: "#",
  }
};
