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
    description: "The certificate holder has gained practical expertise in designing agentic AI systems using modern frameworks and workflow patterns. Through hands-on labs and projects, they built LangGraph agents supporting memory, iteration, conditional logic, and Agentic RAG, developed self-improving AI agents, designed multi-agent systems with orchestration, and structured modular workflows using CrewAI. They also applied frameworks like IBM BeeAI and AG2 (AutoGen) to conversation-driven applications and scalable workflows, configuring agents, tasks, memory, and tools to enable reasoning, feedback loops, and autonomous behavior.",
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
    description: "The certificate holder is proficient in building advanced generative AI applications using RAG, agentic, and multimodal AI technologies. They understand the core concepts and real-world applications of generative AI and agent frameworks. They can design effective prompts, implement function calling, and use tools like LangChain to orchestrate complex reasoning workflows. They can build autonomous and collaborative agents that use memory, feedback, and chaining to solve structured and unstructured problems. They are able to integrate APIs, tools, and multi-step reasoning to create flexible, self-improving systems. They can design multi-agent architectures using frameworks like CrewAI and LangGraph, enabling distributed decision-making, dynamic context switching.",
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
  }
};
