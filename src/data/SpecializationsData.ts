import { ProjectImage } from "./ProjectsData";

export type SpecializationItem = {
  name: string;
  description: string;
  issuer: string;
  date: string;
  images: ProjectImage[];
  logoUrl?: string;
  links: {
    credentialUrl?: string;
  };
  slug: string;
};

export const specializations: Record<string, SpecializationItem> = {
  "Building AI Agents and Agentic Workflows": {
    name: "Building AI Agents and Agentic Workflows",
    description: "The certificate holder has demonstrated expertise in designing agentic AI systems using LangGraph - CrewAI - and AutoGen. This includes implementing memory - conditional reasoning - self-improving agents - and multi-agent workflows for scalable backend solutions.",
    issuer: "IBM & Coursera",
    date: "April 2026",
    images: [
      {
        src: "/assets/specializations/building-ai-agents-and-agentic-workflows.png",
        isPrimary: true,
      }
    ],
    links: {
      credentialUrl: "https://coursera.org/verify/specialization/SYJ5XNEC59NC",
    },
    slug: "building-ai-agents-and-agentic-workflows",
  },
  "IBM RAG and Agentic AI": {
    name: "IBM RAG and Agentic AI",
    description: "The certificate holder is proficient in building generative AI systems using RAG - LangChain - and multi-agent frameworks. This includes designing prompts - orchestrating tools via function calling - and constructing autonomous and collaborative agents for complex problem-solving.",
    issuer: "IBM & Coursera",
    date: "April 2026",
    images: [
      {
        src: "/assets/specializations/ibm-rag-and-agentic-ai.png",
        isPrimary: true,
      }
    ],
    links: {
      credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/XCQM611SNFVX",
    },
    slug: "ibm-rag-and-agentic-ai",
  },
  "Kubernetes and Cloud Native Associate": {
    name: "Kubernetes and Cloud Native Associate",
    description: "The certificate holder has successfully demonstrated a foundational understanding of Kubernetes and the cloud-native ecosystem. This includes container orchestration - Kubernetes architecture - application lifecycle management - observability - telemetry - and cloud-native security principles. Verified under Certificate ID: LF-7s8pdqbvst.",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    date: "April 30, 2026",
    images: [
      {
        src: "/assets/specializations/kubernetes-and-cloud-native-associate.png",
        isPrimary: true,
      }
    ],
    links: {
      credentialUrl: "https://training.linuxfoundation.org/certification/verify",
    },
    slug: "kubernetes-and-cloud-native-associate",
  }
};
