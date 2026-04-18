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
  },
  advancedRag: {
    id: "advanced-rag",
    name: "Advanced RAG with Vector Databases and Retrievers",
    issuer: "IBM",
    date: "Mar 16, 2026",
    description: "Deep dive into advanced Retrieval-Augmented Generation techniques, implementing sophisticated vector search patterns and retriever pipelines.",
    image: "/assets/courses/advanced-rag-with-vector-databases-and-retrievers.png",
    url: "https://coursera.org/verify/I81NZ556Z1IO",
    categories: ["AI Skills", "RAG"],
  },
  agenticAiLangchain: {
    id: "agentic-ai-langchain",
    name: "Agentic AI with LangChain and LangGraph",
    issuer: "IBM",
    date: "Apr 2, 2026",
    description: "Learned to orchestrate complex reasoning and action loops using LangChain and LangGraph to build fully autonomous AI agents.",
    image: "/assets/courses/agentic-ai-with-langchain-and-langgraph.png",
    url: "https://coursera.org/verify/PP7OOF2CQUB2",
    categories: ["AI Skills", "Agentic AI"],
  },
  agenticAiFrameworks: {
    id: "agentic-ai-frameworks",
    name: "Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI",
    issuer: "IBM",
    date: "Apr 2, 2026",
    description: "Extensive training across top agentic frameworks to build multi-agent systems, collaborative AI workflows, and resilient autonomous architectures.",
    image: "/assets/courses/agentic-ai-with-langgraph-crewAI-autoGen-and-beeAI.png",
    url: "https://coursera.org/verify/ZFHP62GPZWSS",
    categories: ["AI Skills", "Agentic AI"],
  },
  multimodalGenAi: {
    id: "multimodal-gen-ai",
    name: "Build Multimodal Generative AI Applications",
    issuer: "IBM",
    date: "Mar 20, 2026",
    description: "Explored techniques for creating generative AI applications capable of understanding and synthesizing diverse data modalities like text and images.",
    image: "/assets/courses/build-multimodal-generative-ai-applications.png",
    url: "https://coursera.org/verify/3BORW6TYNAVH",
    categories: ["AI Skills", "Generative AI"],
  },
  buildRagApplications: {
    id: "build-rag-applications",
    name: "Build RAG Applications: Get Started",
    issuer: "IBM",
    date: "Feb 17, 2026",
    description: "Foundational training on creating Retrieval-Augmented Generation applications, focusing on context enrichment and reducing AI hallucinations.",
    image: "/assets/courses/build-rag-applications-get-started.png",
    url: "https://coursera.org/verify/H0Q3QFHP9080",
    categories: ["AI Skills", "RAG"],
  },
  developGenAi: {
    id: "develop-gen-ai",
    name: "Develop Generative AI Applications: Get Started",
    issuer: "IBM",
    date: "Feb 13, 2026",
    description: "Core concepts of Generative AI, encompassing foundation models, ethical considerations, and practical prompt development strategies.",
    image: "/assets/courses/develop-generative-ai-applications-get-started.png",
    url: "https://coursera.org/verify/ICTCWWICXW1R",
    categories: ["AI Skills", "Generative AI"],
  },
  fundamentalsAiAgents: {
    id: "fundamentals-ai-agents",
    name: "Fundamentals of Building AI Agents",
    issuer: "IBM",
    date: "Mar 22, 2026",
    description: "Exploration of fundamental principles behind autonomous agents, including tool usage, memory management, and intelligent decision-making logic.",
    image: "/assets/courses/fundamentals-of-building-ai-agents.png",
    url: "https://coursera.org/verify/E405TPA226H7",
    categories: ["AI Skills", "Agentic AI"],
  },
  promptEngineering: {
    id: "prompt-engineering",
    name: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    date: "Feb 5, 2026",
    description: "Mastery of advanced prompt engineering techniques to maximize the accuracy, utility, and safety of Large Language Model outputs.",
    image: "/assets/courses/prompt-engineering certificate.png",
    url: "https://coursera.org/verify/LCPYAN9LXYX8",
    categories: ["AI Skills", "Softskills", "Prompt Engineering"],
  },
  vectorDatabasesRag: {
    id: "vector-databases-rag",
    name: "Vector Databases for RAG: An Introduction",
    issuer: "IBM",
    date: "Mar 18, 2026",
    description: "Deep examination of vector storage, embeddings, and similarity search mechanics required to support robust Retrieval-Augmented Generation pipelines.",
    image: "/assets/courses/vector-databases-for-RAG.png",
    url: "https://coursera.org/verify/43H4F4OWZX0L",
    categories: ["AI Skills", "RAG"],
  }
};
