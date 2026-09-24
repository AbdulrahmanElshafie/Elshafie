export interface SkillCluster {
  title: string;
  tagline: string;
  skills: Array<{
    name: string;
    verifiedIn?: string;
    evidenceProject?: {
      title: string;
      url: string;
    };
  }>;
}

export const skillClusters: SkillCluster[] = [
  {
    title: "Backend Engineering & APIs",
    tagline: "Building high-integrity services, robust database models, and resilient API contracts.",
    skills: [
      { name: "Python", verifiedIn: "Core language across all systems" },
      { name: "Django & Django REST Framework", verifiedIn: "DocManager & Soda Marketing AI", evidenceProject: { title: "DocManager", url: "/work/docmanager/" } },
      { name: "PostgreSQL & SQL", verifiedIn: "Relational modeling, indexing, and transactional integrity" },
      { name: "Flask", verifiedIn: "Lightweight microservice and API prototyping" },
      { name: "JWT Auth & RBAC", verifiedIn: "Stateless security & hierarchical permissions", evidenceProject: { title: "DocManager", url: "/work/docmanager/" } },
      { name: "API Architecture", verifiedIn: "Contract design, pagination, error schemas, serialization" }
    ]
  },
  {
    title: "AI Workflows & LLM Systems",
    tagline: "Turning probabilistic models into deterministic, production-grade applications.",
    skills: [
      { name: "LLM Orchestration & Chaining", verifiedIn: "Autowritey 11-stage pipeline", evidenceProject: { title: "Autowritey", url: "/work/autowritey/" } },
      { name: "Prompt Architecture & Few-Shot Profiling", verifiedIn: "Dynamic voice configuration & constraint enforcement" },
      { name: "Fact Verification & Web Grounding", verifiedIn: "SerpAPI live search grounding", evidenceProject: { title: "Autowritey", url: "/work/autowritey/" } },
      { name: "Model Fine-tuning & Deployment", verifiedIn: "Soda Marketing AI generation services" },
      { name: "RAG & Semantic Retrieval Concepts", verifiedIn: "Contextual chunking, search integration, and synthesis" },
      { name: "PyTorch, TensorFlow, Scikit-learn", verifiedIn: "Academic AI foundation & BambooGeeks fraud pipeline" }
    ]
  },
  {
    title: "Automation & Computer Vision",
    tagline: "Automating operational workflows with resilient UI interaction and session recovery.",
    skills: [
      { name: "OpenCV UI Automation", verifiedIn: "AutoWA desktop visual anchor detection", evidenceProject: { title: "AutoWA", url: "/work/autowa/" } },
      { name: "Batching & Account Rotation", verifiedIn: "Fault-tolerant queue dispatch engine", evidenceProject: { title: "AutoWA", url: "/work/autowa/" } },
      { name: "Session Recovery & Checkpoints", verifiedIn: "Zero-duplicate crash resumption architecture" },
      { name: "Selenium & BeautifulSoup", verifiedIn: "Web automation, ingestion, and extraction pipelines" },
      { name: "System Telemetry & Error Handling", verifiedIn: "Real-time execution monitoring and retry policies" }
    ]
  },
  {
    title: "Product & Growth Context",
    tagline: "Connecting engineering decisions to user acquisition, search intent, and business outcomes.",
    skills: [
      { name: "SEO Strategy & Technical SEO", verifiedIn: "Techmart & ViciTech (#1 Google Play ranking)" },
      { name: "Google Analytics & Conversion Tracking", verifiedIn: "Campaign funnel measurement and telemetry" },
      { name: "Google Ads & Acquisition", verifiedIn: "Paid campaign optimization and landing page pairing" },
      { name: "User-Oriented Problem Framing", verifiedIn: "Translating ambiguous business friction into technical specs" },
      { name: "Operational Workflow Optimization", verifiedIn: "Automating manual business overhead into scalable software" }
    ]
  }
];
