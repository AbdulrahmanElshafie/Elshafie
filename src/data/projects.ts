export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: "AI Workflow" | "Backend Systems" | "Automation Engine";
  badge: string;
  role: string;
  summary: string;
  problem: {
    context: string;
    frictionPoints: string[];
  };
  solution: {
    overview: string;
    keyCapabilities: string[];
  };
  myRole: {
    summary: string;
    responsibilities: string[];
  };
  systemArchitecture: {
    title: string;
    description: string;
    stages: Array<{
      step: string;
      label: string;
      detail: string;
      icon: string;
    }>;
  };
  technicalDecisions: Array<{
    decision: string;
    rationale: string;
    outcome: string;
  }>;
  challenges: Array<{
    challenge: string;
    resolution: string;
  }>;
  verifiedOutcome: {
    type: "capability" | "metric";
    description: string;
    highlights: string[];
  };
  stack: {
    core: string[];
    backend: string[];
    aiOrAutomation: string[];
    dataOrStorage: string[];
  };
  links: {
    github?: string;
    githubPlaceholder?: string;
    liveDemo?: string;
    liveDemoPlaceholder?: string;
  };
}

export const projects: ProjectCaseStudy[] = [
  {
    id: "autowa",
    slug: "autowa",
    title: "AutoWA",
    subtitle: "WhatsApp Automation Platform",
    tagline: "Resilient workflow engine with OpenCV UI automation, batching, and session recovery.",
    category: "Automation Engine",
    badge: "Workflow Automation & Computer Vision",
    role: "System Architect & Backend/Automation Engineer",
    summary: "Engineered a robust desktop messaging workflow engine with multi-account rotation, dynamic template rendering, computer-vision UI automation via OpenCV, and self-healing session recovery mechanisms.",
    problem: {
      context: "Operational teams required scheduled, personalized messaging containing document-based attachments and per-contact payloads. Standard manual methods caused severe operational bottlenecks, frequent session crashes, rate-limit drops, and zero real-time visibility into dispatch status.",
      frictionPoints: [
        "Unreliable UI interactions on dynamic desktop interfaces leading to stalled dispatches",
        "Lack of session recovery causing entire batches to fail midway when interruptions occurred",
        "No structured mechanism for rotating sender accounts safely or batching personalized attachments",
        "Absence of granular error tracking and real-time execution telemetry"
      ]
    },
    solution: {
      overview: "Designed and built AutoWA as a resilient automation engine that decouples job scheduling, queue management, and UI execution. Utilizes computer vision to accurately locate interface targets and incorporates automatic session checkpoints to guarantee fault-tolerant delivery.",
      keyCapabilities: [
        "Automated batch processing and safe sender account rotation",
        "Self-healing session recovery to resume interrupted message batches without duplication",
        "Personalized templating engine supporting document-based messaging and per-contact attachments",
        "OpenCV-based visual anchor detection for reliable desktop UI navigation",
        "Real-time execution tracking, heartbeat monitoring, and structured diagnostic logs"
      ]
    },
    myRole: {
      summary: "Owned the architecture, execution engine design, computer vision automation pipelines, and recovery protocols.",
      responsibilities: [
        "Architected the batch orchestration and sender account rotation system",
        "Built the OpenCV visual pattern-matching layer to handle desktop UI state transitions",
        "Engineered the session recovery state machine and checkpoint storage",
        "Constructed per-contact template rendering with attachment validation",
        "Implemented real-time execution tracking and resilient retry policies"
      ]
    },
    systemArchitecture: {
      title: "AutoWA Orchestration & Recovery Pipeline",
      description: "A decoupled workflow engine translating contact batches into verified UI dispatches with checkpoint recovery.",
      stages: [
        {
          step: "01",
          label: "Job Ingestion & Validation",
          detail: "Ingests recipient manifests, validates per-contact attachments, and parses dynamic message template variables.",
          icon: "database"
        },
        {
          step: "02",
          label: "Batching & Rotation Engine",
          detail: "Partitions tasks into bounded batches, assigns sender accounts according to rotation policies, and sets retry gates.",
          icon: "layers"
        },
        {
          step: "03",
          label: "CV-Driven UI Automation",
          detail: "OpenCV pipeline identifies UI interaction anchors, confirms focus state, and safely inputs personalized payloads.",
          icon: "cpu"
        },
        {
          step: "04",
          label: "Checkpointing & Telemetry",
          detail: "Persists real-time dispatch progress, logs delivery signals, and triggers recovery procedures on interface anomalies.",
          icon: "activity"
        }
      ]
    },
    technicalDecisions: [
      {
        decision: "OpenCV visual anchor detection instead of brittle static screen coordinate scripting",
        rationale: "Desktop UI layouts, DPI scaling, and dynamic elements shift across environments. Visual pattern matching ensures execution proceeds only when the exact target element is verified.",
        outcome: "Eliminated false clicks and prevented silent failure states during long-running background dispatches."
      },
      {
        decision: "Granular checkpoint state machine over monolithic batch runs",
        rationale: "Network blips or desktop process disruptions shouldn't force operators to restart a batch from scratch or risk sending duplicate communications.",
        outcome: "Allowed instantaneous session recovery from the exact last confirmed recipient upon process resumption."
      },
      {
        decision: "Account rotation and rate-limiting throttles",
        rationale: "Preserves sender integrity and adheres to operational pacing requirements by balancing load across active sessions.",
        outcome: "Stable, continuous throughput without triggering protective account lockouts."
      }
    ],
    challenges: [
      {
        challenge: "Handling dynamic interface latency and unexpected desktop popups or focus loss.",
        resolution: "Constructed an adaptive OpenCV polling cycle with fallback state detection, validating target presence before dispatching keyboard or mouse events."
      },
      {
        challenge: "Ensuring zero duplicate messages upon unexpected system halts or network dropouts.",
        resolution: "Implemented atomic state transitions where each contact item transitions to 'Dispatched' only after target confirmation, logging state directly to persistent recovery storage."
      }
    ],
    verifiedOutcome: {
      type: "capability",
      description: "Delivered a fully fault-tolerant messaging automation platform with live monitoring, verified UI recovery, and multi-account dispatch capability.",
      highlights: [
        "Reliable desktop automation through OpenCV computer vision",
        "Resilient checkpointing with zero duplicate message dispatches on crash recovery",
        "End-to-end execution tracking with actionable error diagnostics"
      ]
    },
    stack: {
      core: ["Python", "OpenCV"],
      backend: ["Workflow Engine", "State Machine Architecture"],
      aiOrAutomation: ["Computer Vision UI Automation", "Desktop Event Orchestration"],
      dataOrStorage: ["JSON Session Stores", "Structured Event Logging"]
    },
    links: {
      github: "https://github.com/AbdulrahmanElshafie/AutoWA",
      githubPlaceholder: "View Repository on GitHub",
      liveDemoPlaceholder: "[Internal Desktop Automation Suite - Architecture Showcase]"
    }
  },
  {
    id: "docmanager",
    slug: "docmanager",
    title: "DocManager",
    subtitle: "Document Management System (Full Stack)",
    tagline: "Enterprise-grade Django REST API backend with RBAC, JWT authentication, and versioning.",
    category: "Backend Systems",
    badge: "Backend APIs & Data Architecture",
    role: "Full-Stack Backend Architect",
    summary: "Engineered a secure document management platform powered by Django REST Framework, featuring fine-grained hierarchical permissions, JWT security, immutable audit logging, and multi-format document versioning.",
    problem: {
      context: "Organizations managing sensitive internal documents faced security vulnerabilities, chaotic folder organizations, and unrecorded document edits without clear audit trails or access controls.",
      frictionPoints: [
        "Absence of role-based access control (RBAC) allowing unauthorized document views or modifications",
        "No historical record or file versioning, leading to accidental overwrites and unrecoverable data losses",
        "Inconsistent handling across diverse file formats (PDFs, spreadsheets, imagery)",
        "Zero traceability of user actions, document shares, or deletion events"
      ]
    },
    solution: {
      overview: "Designed and implemented a modular Django REST API backend backed by PostgreSQL, establishing strict hierarchical storage, JWT-based stateless authentication, comprehensive audit logs, and granular sharing permissions.",
      keyCapabilities: [
        "Django RESTful APIs with stateless JWT token lifecycle management",
        "Hierarchical folder and document tree architecture with inherited access permissions",
        "Comprehensive audit logging capturing read, write, share, and delete operations",
        "Multi-format document ingestion, storage abstractions, and revision versioning",
        "Granular user and team sharing controls with read/write permission scopes"
      ]
    },
    myRole: {
      summary: "Designed the relational data schema, engineered all RESTful API endpoints, authored custom permission classes, and built the document versioning engine.",
      responsibilities: [
        "Structured the relational database models for hierarchical folders and versioned documents",
        "Engineered secure Django REST Framework endpoints with custom JWT authentication",
        "Implemented object-level permission validators and role-based access control (RBAC)",
        "Built immutable activity tracking and audit log recording middleware",
        "Engineered multi-format file validation, metadata extraction, and storage boundaries"
      ]
    },
    systemArchitecture: {
      title: "DocManager Security & API Architecture",
      description: "Layered architecture enforcing security, hierarchical inheritance, and immutable audit logs.",
      stages: [
        {
          step: "01",
          label: "JWT Auth & Session Guard",
          detail: "Stateless JWT token verification validates caller identity and retrieves organizational scope before endpoint entry.",
          icon: "shield"
        },
        {
          step: "02",
          label: "Object-Level Permission Filter",
          detail: "Custom DRF permissions evaluate hierarchical folder access rights, team memberships, and document-level grants.",
          icon: "lock"
        },
        {
          step: "03",
          label: "Versioned Storage Pipeline",
          detail: "Multi-format file processing checks MIME signatures, creates immutable revision records, and coordinates file stores.",
          icon: "file-text"
        },
        {
          step: "04",
          label: "Audit Logging & Activity Bus",
          detail: "Every interaction is recorded to the activity ledger with user IDs, timestamps, IP context, and change deltas.",
          icon: "activity"
        }
      ]
    },
    technicalDecisions: [
      {
        decision: "Custom object-level permission classes in Django REST Framework",
        rationale: "Standard view-level permissions fail when access depends on hierarchical folder ownership and dynamic team sharing grants. Object-level checking ensures safety at the database query boundary.",
        outcome: "Guaranteed strict isolation of documents across departments and user groups."
      },
      {
        decision: "Immutable document revision model with pointer heads",
        rationale: "Overwriting files in storage destroys historical integrity. Storing each save as an immutable revision record enables instant rollbacks and compliance auditing.",
        outcome: "Complete version history preserved with zero risk of irreversible accidental overwrites."
      },
      {
        decision: "Stateless JWT authentication with refresh token rotation",
        rationale: "Enables secure API interactions without server-side session bloat, allowing frontend clients and external consumers to integrate cleanly.",
        outcome: "Scalable, secure authentication layer ready for multi-client consumption."
      }
    ],
    challenges: [
      {
        challenge: "Preventing circular dependencies and race conditions in deep hierarchical folder trees.",
        resolution: "Engineered recursive validation algorithms and relational constraints in PostgreSQL to prevent orphan nodes and cyclical parent references."
      },
      {
        challenge: "Balancing comprehensive audit logging with API response latency.",
        resolution: "Optimized database write paths for event ledgers and indexed query lookups for rapid administrative activity filtering."
      }
    ],
    verifiedOutcome: {
      type: "capability",
      description: "Delivered a production-ready, secure document backend supporting multi-tenant hierarchical permissions, immutable versioning, and end-to-end activity traceability.",
      highlights: [
        "Fully secured Django REST API with JWT authentication and granular RBAC",
        "Hierarchical storage tree with inherited permission propagation",
        "Comprehensive audit ledger tracking all critical document interactions"
      ]
    },
    stack: {
      core: ["Python", "Django", "Django REST Framework"],
      backend: ["JWT Authentication", "Role-Based Access Control (RBAC)", "PostgreSQL"],
      aiOrAutomation: ["Document Processing Pipelines", "MIME Validation"],
      dataOrStorage: ["Relational Schema Design", "Audit Ledgers", "File Storage Abstractions"]
    },
    links: {
      github: "https://github.com/AbdulrahmanElshafie/DocManager",
      githubPlaceholder: "View Repository on GitHub",
      liveDemoPlaceholder: "[Backend API Architecture - Documentation & Endpoints]"
    }
  },
  {
    id: "autowritey",
    slug: "autowritey",
    title: "Autowritey",
    subtitle: "AI Content Generation System",
    tagline: "11-stage LLM generation pipeline with style profiling, self-correction loops, and web grounding.",
    category: "AI Workflow",
    badge: "LLM Pipelines & AI Reliability",
    role: "AI Workflow Architect & Backend Engineer",
    summary: "Architected an 11-stage structured LLM generation pipeline featuring brand style profiling, few-shot prompt chaining, automated self-correction loops, and real-time fact verification via SerpAPI.",
    problem: {
      context: "Generic LLM text outputs frequently suffer from hallucinated claims, inconsistent brand voice, tone drift, and superficial formatting that fails editorial standards. Marketers and product teams were spending excessive manual hours editing raw AI drafts.",
      frictionPoints: [
        "Hallucinated facts and ungrounded claims requiring tedious human verification",
        "Drifting tone that fails to match established brand voice across different topics",
        "Single-prompt generations lacking structural depth, logical progression, and editorial nuance",
        "Absence of structured self-correction or constraint checking prior to output presentation"
      ]
    },
    solution: {
      overview: "Built Autowritey as an 11-stage deterministic pipeline that decomposes content creation into distinct, verifiable phases. Connects user style profiling configurations with few-shot guidance, external search grounding, and recursive self-correction loops.",
      keyCapabilities: [
        "Decomposed 11-stage pipeline covering outlining, drafting, tone enforcement, and fact verification",
        "Brand style profiling using structured schema configurations and curated few-shot exemplars",
        "Automated self-correction loops that evaluate drafts against explicit editorial constraints",
        "Real-time web fact verification integrated via SerpAPI to ground key factual claims",
        "Rigorous tone, length, and syntactic constraints enforced at model boundaries"
      ]
    },
    myRole: {
      summary: "Architected the 11-stage workflow, designed the style profiling engine, integrated SerpAPI fact-checking routines, and constructed the self-correction feedback loop.",
      responsibilities: [
        "Engineered the multi-stage LLM chaining pipeline and intermediate artifact schemas",
        "Built the user style profiling configuration parser and few-shot injection layer",
        "Integrated SerpAPI for live web grounding and factual claim verification",
        "Designed deterministic self-correction feedback loops for tone and constraint validation",
        "Optimized prompt structures and structured JSON outputs to maximize generation reliability"
      ]
    },
    systemArchitecture: {
      title: "Autowritey 11-Stage Generation & Verification Pipeline",
      description: "Sequential and evaluative stages ensuring brand fidelity and factual accuracy.",
      stages: [
        {
          step: "01",
          label: "Style & Intent Ingestion",
          detail: "Loads user brand profiles, few-shot voice exemplars, tone requirements, and topic parameters.",
          icon: "sliders"
        },
        {
          step: "02",
          label: "Research & Fact Grounding",
          detail: "Queries SerpAPI for real-time web context, extracting verified data points and citation anchors.",
          icon: "search"
        },
        {
          step: "03",
          label: "Drafting & Stage Chaining",
          detail: "Executes progressive generation across outline, section expansion, and narrative bridge synthesis.",
          icon: "cpu"
        },
        {
          step: "04",
          label: "Self-Correction & Polish",
          detail: "Evaluator checks draft against style profile and fact citations; loops back to refine deviations before output.",
          icon: "check-circle"
        }
      ]
    },
    technicalDecisions: [
      {
        decision: "11-stage decomposed pipeline rather than a single monolithic prompt",
        rationale: "Single mega-prompts overload model attention windows, leading to missed instructions and inconsistent voice. Breaking generation into modular phases guarantees each constraint is validated independently.",
        outcome: "Significantly higher structural quality and predictable adherence to voice guidelines."
      },
      {
        decision: "Integrated SerpAPI fact verification step prior to final synthesis",
        rationale: "Generative LLMs lack up-to-date domain knowledge and hallucinate citations. Querying live web search results grounds content in verifiable references.",
        outcome: "Grounds key factual assertions with verified web context."
      },
      {
        decision: "Structured configuration schemas for style profiling",
        rationale: "Abstract descriptions like 'sound friendly' produce wildly varying results. Quantified style profiles (sentence length targets, vocabulary filters, tone constraints) provide clear evaluation criteria.",
        outcome: "Enables programmatic self-correction evaluation against objective style targets."
      }
    ],
    challenges: [
      {
        challenge: "Preventing recursive self-correction loops from oscillating or timing out.",
        resolution: "Established bounded feedback passes with targeted delta instructions, focusing corrections strictly on identified style or factual violations."
      },
      {
        challenge: "Extracting relevant signals from web search without polluting the context window.",
        resolution: "Engineered a pre-filtering summarizer that extracts only high-confidence factual snippets before injecting them into the generation context."
      }
    ],
    verifiedOutcome: {
      type: "capability",
      description: "Engineered a production-ready LLM workflow that transforms raw prompts into brand-aligned, fact-grounded editorial content through structured self-correcting pipelines.",
      highlights: [
        "11-stage generation pipeline with dedicated constraint verification",
        "Deterministic brand style profiling using structured few-shot configs",
        "Web-grounded fact checking via live SerpAPI search integration"
      ]
    },
    stack: {
      core: ["Python", "LLM APIs", "SerpAPI"],
      backend: ["Pipeline Orchestration", "Prompt Chaining Architecture"],
      aiOrAutomation: ["Few-Shot Profiling", "Self-Correction Loops", "Constraint Evaluation"],
      dataOrStorage: ["Structured JSON Configs", "Context Injection Buffers"]
    },
    links: {
      github: "https://github.com/AbdulrahmanElshafie/Autowritey",
      githubPlaceholder: "View Repository on GitHub",
      liveDemoPlaceholder: "[AI Pipeline Demonstration & Schema Specs]"
    }
  }
];
