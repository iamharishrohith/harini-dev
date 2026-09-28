export const personalInfo = {
  name: "Harini K",
  role: "Forward Deployed Engineer",
  subRole: "AI & Full-Stack Systems Architect",
  tagline: "Deploying production-grade Generative AI agents, asynchronous low-latency backend architectures, and high-velocity web interfaces.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "harinik37@gmail.com",
  linkedin: "https://linkedin.com/in/harini-k-ai",
  github: "https://github.com/harini-k-dev",
  status: "Available for Forward Deployed & AI Roles",
  summary: "AI & Full-Stack Developer skilled in building LLM-powered assistants, asynchronous REST APIs, and data-driven web platforms. Strong background in relational schema design and prompt optimization, with demonstrated technical success across hackathons and institutional projects.",
  metrics: [
    { label: "Academic CGPA", value: "8.50", detail: "B.Sc CS with AI (RGU)" },
    { label: "Hackathon Victory", value: "1st Place", detail: "Inter-College Mini-Hackathon 2026" },
    { label: "Async Latency Drop", value: "-40%", detail: "In Production AI Pipelines" },
    { label: "AI & Web Stack", value: "15+", detail: "Production Tools & Frameworks" }
  ]
};

export const galleryItems = [
  {
    id: "g1",
    title: "1st Place Champion - Inter-College Hackathon 2026",
    category: "Hackathons & Awards",
    date: "2026",
    location: "KPR College",
    description: "Awarded Overall Winner (1st Place) for rapidly architecting and deploying an end-to-end full-stack AI workflow automation system under timed constraints.",
    tags: ["Hackathon Winner", "1st Place", "Rapid Prototyping"],
    badge: "Champion Trophy",
    icon: "Award"
  },
  {
    id: "g2",
    title: "ASTRO AI Enterprise Architecture Blueprint",
    category: "Architecture & Systems",
    date: "2026",
    location: "ICT Department (RGU)",
    description: "System diagram showing the non-blocking asynchronous Python prompt dispatcher, multi-department intent router, and relational state cache.",
    tags: ["System Design", "AsyncIO", "FastAPI", "40% Latency Drop"],
    badge: "Architecture Spec",
    icon: "Cpu"
  },
  {
    id: "g3",
    title: "Technical Paper Presentation - Rathinam Grand Fest (RGF)",
    category: "Hackathons & Awards",
    date: "2026",
    location: "RGF 2026",
    description: "Runner-Up distinction for presenting research on AI agent orchestration, asynchronous backend concurrency, and multi-tenant scaling.",
    tags: ["Paper Presentation", "Runner-Up", "Agentic R&D"],
    badge: "2nd Place Distinction",
    icon: "Award"
  },
  {
    id: "g4",
    title: "Zara AI Multi-Turn Dialogue State Cache Model",
    category: "Architecture & Systems",
    date: "2025 – 2026",
    location: "Production AI Lab",
    description: "Dual-tier cache architecture integrating MySQL indexed session histories with in-memory buffers to eliminate redundant context roundtrips.",
    tags: ["OpenAI API", "MySQL Cache", "State Buffer"],
    badge: "Database Architecture",
    icon: "Database"
  },
  {
    id: "g5",
    title: "National Conference on Emerging Technologies Finalist",
    category: "Hackathons & Awards",
    date: "2026",
    location: "National Tech Consortium",
    description: "Selected among top nationwide technical finalists for innovative conversational assistant design and scalable backend infrastructure.",
    tags: ["National Finalist", "Emerging Tech", "Conference"],
    badge: "National Finalist",
    icon: "ShieldCheck"
  },
  {
    id: "g6",
    title: "Vectorized NumPy Compute Engine Schema",
    category: "Architecture & Systems",
    date: "2024 – 2025",
    location: "Smart Record Systems",
    description: "High-performance computational engine replacing sequential loops with vectorized array math for instant student metrics and grade batching.",
    tags: ["NumPy", "Python Math", "Performance Indexing"],
    badge: "Data Engine Spec",
    icon: "Zap"
  },
  {
    id: "g7",
    title: "Forward Deployed Terminal & Development Lab",
    category: "Engineering Snapshots",
    date: "2026",
    location: "Developer Workspace",
    description: "Core workstation environment configured for high-velocity LLM prototyping, Docker containerization, and automated Playwright / Vitest CI runs.",
    tags: ["FDE Workspace", "Docker", "Linux Terminal", "VS Code"],
    badge: "Engineering Lab",
    icon: "Terminal"
  },
  {
    id: "g8",
    title: "Cyfotech Infosys Full-Stack Delivery Milestone",
    category: "Engineering Snapshots",
    date: "2024",
    location: "Cyfotech Infosys",
    description: "Successful delivery of responsive client interfaces connected to dynamic REST CRUD backends for real-time dashboard monitoring.",
    tags: ["Internship Milestone", "Full Stack", "CRUD UI"],
    badge: "Client Delivery",
    icon: "Layers"
  }
];

export const processStages = [
  {
    id: "01",
    phase: "PHASE 01: DISCOVERY & RECON",
    title: "Problem Discovery & Scope",
    subtitle: "Analyzing client bottlenecks, user boundaries, latency budgets, and technical constraints before code.",
    points: [
      "Initial architectural consulting & stakeholder alignment",
      "Client problem mapping & operational parameter definition",
      "LLM context window & token consumption budgeting",
      "Identification of synchronous blocking bottlenecks"
    ],
    targetOutcome: "Clear Operational Specifications & Latency Targets",
    simulation: {
      tag: "STAGE TELEMETRY",
      status: "ANALYSIS COMPLETE",
      metricLabel: "Identified Bottlenecks",
      metricValue: "4 Critical Paths",
      details: "Mapped client workflow from raw user ingestion to institutional database persistence.",
      visualNodes: ["Client Problem", "Latency Constraint", "Target Architecture"]
    }
  },
  {
    id: "02",
    phase: "PHASE 02: SYSTEM DESIGN",
    title: "Architecture & Schema Modeling",
    subtitle: "Structuring scalable relational entity models, caching layers, and decoupled API interfaces.",
    points: [
      "Normalized MySQL & PostgreSQL relational schema design",
      "Index strategy for high-velocity session queries",
      "Role-Based Access Control (RBAC) security mapping",
      "API contract & OpenAPI payload specification"
    ],
    targetOutcome: "Resilient Entity Models & Zero Data Anomalies",
    simulation: {
      tag: "DATABASE BENCHMARK",
      status: "SCHEMAS VALIDATED",
      metricLabel: "Query Execution Time",
      metricValue: "< 8ms",
      details: "Indexed primary keys and foreign constraints configured with connection pooling.",
      visualNodes: ["Relational Schema", "Connection Pool", "Cache Key Map"]
    }
  },
  {
    id: "03",
    phase: "PHASE 03: AI & AGENTS",
    title: "Agent Orchestration & Prompts",
    subtitle: "Constructing multi-turn conversational guardrails, dynamic prompt chains, and model routing.",
    points: [
      "Zero-shot and few-shot prompt template engineering",
      "OpenAI & Gemini API integration with fallback routing",
      "Context memory buffers for multi-turn coherence",
      "Output validation & structured JSON parsing"
    ],
    targetOutcome: "Deterministic Agent Output & High Intent Accuracy",
    simulation: {
      tag: "ORCHESTRATION PIPELINE",
      status: "PROMPTS OPTIMIZED",
      metricLabel: "Intent Routing Accuracy",
      metricValue: "98.4%",
      details: "Dynamic system prompt conditioning with conversational session persistence.",
      visualNodes: ["User Intent", "Prompt Buffer", "Model Inference"]
    }
  },
  {
    id: "04",
    phase: "PHASE 04: ASYNC OPTIMIZATION",
    title: "Asynchronous API Dispatchers",
    subtitle: "Eliminating request starvation with non-blocking async dispatchers and caching layers.",
    points: [
      "Asynchronous Python (FastAPI / AsyncIO) queue design",
      "Non-blocking prompt worker threads under load",
      "Redis & MySQL session state read-through caching",
      "Streamed token delivery for perceived instant latency"
    ],
    targetOutcome: "40% Latency Reduction Under Sustained Load",
    simulation: {
      tag: "PERFORMANCE TELEMETRY",
      status: "NON-BLOCKING QUEUE ACTIVE",
      metricLabel: "Response Latency",
      metricValue: "118ms",
      details: "Eliminated request starvation for concurrent multi-department university users.",
      visualNodes: ["Async Dispatcher", "Worker Queue", "Redis Layer"]
    }
  },
  {
    id: "05",
    phase: "PHASE 05: FULL-STACK INTEGRATION",
    title: "UI/UX & System Integration",
    subtitle: "Connecting high-velocity client interfaces with robust backend endpoints and automated QA.",
    points: [
      "Responsive, accessible Next.js & React interfaces",
      "Real-time WebSocket & SSE markdown rendering",
      "Automated testing with Vitest & Playwright",
      "Cross-browser reliability and error boundaries"
    ],
    targetOutcome: "Polished, Intuitive & Bug-Free User Interfaces",
    simulation: {
      tag: "INTEGRATION SUITE",
      status: "ALL TESTS PASSING",
      metricLabel: "Automated Test Coverage",
      metricValue: "96%",
      details: "End-to-end integration verified across mobile, tablet, and desktop viewports.",
      visualNodes: ["React UI", "Event Stream", "E2E Test Runner"]
    }
  },
  {
    id: "06",
    phase: "PHASE 06: PRODUCTION & SCALE",
    title: "Deployment & Observability",
    subtitle: "Containerizing systems with Docker and establishing telemetry for cloud environments.",
    points: [
      "Docker containerization & lightweight image builds",
      "Microsoft Azure & AWS cloud infrastructure provisioning",
      "GitHub Actions CI/CD automated deployment pipelines",
      "Live health check probes and structured error logging"
    ],
    targetOutcome: "Production-Ready Deployment with 99.9% Uptime",
    simulation: {
      tag: "PRODUCTION CLUSTER",
      status: "SYSTEM OPERATIONAL",
      metricLabel: "System Availability",
      metricValue: "99.95%",
      details: "Continuous telemetry monitoring with automated error capture and alert dispatching.",
      visualNodes: ["Docker Image", "Cloud Cluster", "Live Telemetry"]
    }
  }
];

export const skillsData = {
  "Generative AI & LLMs": [
    { name: "Generative AI & Agentic AI", level: 95, tag: "Core" },
    { name: "Prompt Engineering & Evaluation", level: 92, tag: "Core" },
    { name: "OpenAI & Gemini APIs", level: 95, tag: "Production" },
    { name: "PyTorch & Scikit-Learn", level: 85, tag: "ML" },
    { name: "NLP & Workflow Automation", level: 90, tag: "Agents" },
    { name: "NumPy & Pandas Analytics", level: 88, tag: "Data" }
  ],
  "Full Stack & Distributed": [
    { name: "React.js & Next.js", level: 92, tag: "Frontend" },
    { name: "Node.js & Express.js", level: 90, tag: "Backend" },
    { name: "Asynchronous REST APIs", level: 94, tag: "Architecture" },
    { name: "PostgreSQL & MySQL", level: 88, tag: "Database" },
    { name: "MongoDB & Firebase", level: 85, tag: "NoSQL" },
    { name: "Redis Caching", level: 82, tag: "Performance" }
  ],
  "Cloud & DevOps": [
    { name: "Microsoft Azure (AZ-104)", level: 88, tag: "Cloud" },
    { name: "AWS Fundamentals", level: 80, tag: "Cloud" },
    { name: "Docker Containerization", level: 82, tag: "DevOps" },
    { name: "Git & GitHub CI/CD", level: 90, tag: "Tooling" },
    { name: "Playwright & Vitest Testing", level: 80, tag: "QA" }
  ],
  "CS & System Design": [
    { name: "Data Structures & Algorithms", level: 88, tag: "DSA" },
    { name: "Object-Oriented Programming (OOP)", level: 92, tag: "OOP" },
    { name: "Relational Schema Design", level: 90, tag: "DBMS" },
    { name: "Auth & Access Control", level: 88, tag: "Security" },
    { name: "Agile & Scrum Delivery", level: 90, tag: "Delivery" }
  ]
};

export const projectsData = [
  {
    id: "astro-ai",
    title: "ASTRO Enterprise AI",
    badge: "Forward Deployed Flagship",
    role: "Lead AI Engineer (ICT Dept)",
    period: "Jan 2026 – Aug 2026",
    summary: "High-throughput AI dialogue assistant automating multi-department student inquiries, prompt dispatching, and workflow automation with sub-second response times.",
    highlights: [
      "Engineered non-blocking asynchronous Python endpoints, eliminating request starvation for concurrent users.",
      "Built multi-tenant intent routing layer directing academic queries to specialized agent pipelines.",
      "Achieved a 40% reduction in average query turnaround latency under sustained load."
    ],
    architecture: {
      client: "Responsive Web / Mobile App Client",
      gateway: "FastAPI / Async Python Dispatcher",
      orchestrator: "LLM Prompt Router & Context Memory Buffer",
      storage: "Relational State Cache & MySQL Enterprise DB",
      latency: "< 120ms token stream kickoff"
    },
    stack: ["Python", "AsyncIO", "REST APIs", "LLMs", "Prompt Optimization", "MySQL", "Docker"],
    link: "https://github.com/harini-k-dev",
    featured: true
  },
  {
    id: "zara-ai",
    title: "Zara AI – Multi-Turn Assistant",
    badge: "Conversational Intelligence",
    role: "Full Stack AI Developer",
    period: "2025 – 2026",
    summary: "Next-generation multi-turn conversational agent with stateful MySQL dialogue caching, dynamic prompt conditioning, and conversational context persistence.",
    highlights: [
      "Integrated OpenAI API with zero-shot and few-shot contextual guardrails.",
      "Engineered an indexed relational cache layer to log conversation sessions and accelerate multi-turn turnaround.",
      "Designed a clean, responsive glassmorphic chat interface with real-time markdown and code rendering."
    ],
    architecture: {
      client: "Glassmorphic React Client",
      gateway: "Node.js Express / Python Middleware",
      orchestrator: "OpenAI GPT-4o / Context Window Manager",
      storage: "Relational MySQL Cache + Session Store",
      latency: "Real-time streaming"
    },
    stack: ["OpenAI API", "Python", "Node.js", "MySQL", "JavaScript", "HTML5/CSS3"],
    link: "https://github.com/harini-k-dev",
    featured: true
  },
  {
    id: "smart-mgmt",
    title: "Smart Management System",
    badge: "High-Performance Data Engine",
    role: "Systems Developer",
    period: "2024 – 2025",
    summary: "Data-intensive academic record management platform built with complete CRUD persistence and vectorized numerical batch computations.",
    highlights: [
      "Vectorized grade batching and performance indexing using NumPy array operations for instant metric evaluation.",
      "Engineered transactional relational schemas ensuring zero data anomalies across batch grade imports.",
      "Built secure role-based access control (RBAC) for administrators, faculty, and student profiles."
    ],
    architecture: {
      client: "Desktop & Web Client Portal",
      gateway: "Python Application Core",
      orchestrator: "NumPy Vectorized Compute Engine",
      storage: "MySQL Relational Schemas",
      latency: "< 15ms batch compute"
    },
    stack: ["Python", "NumPy", "MySQL", "Relational Schemas", "Cloud Computing"],
    link: "https://github.com/harini-k-dev",
    featured: false
  }
];

export const experienceData = [
  {
    role: "AI Development Intern",
    organization: "ICT Department (RGU)",
    period: "Jan 2026 – Aug 2026",
    type: "Internship",
    description: "Spearheaded development of the ASTRO AI dialogue assistant for institutional automation. Engineered asynchronous Python endpoints to dispatch prompts, eliminating blocking latency for concurrent users across university departments.",
    tags: ["Agentic AI", "Async Python", "LLMs", "Enterprise Routing"]
  },
  {
    role: "Web Development Intern",
    organization: "Cyfotech Infosys",
    period: "May 2024 – Jul 2024",
    type: "Internship",
    description: "Built responsive, cross-browser client interfaces and UI components. Connected dynamic form views to backend database APIs for real-time CRUD operations, improving dashboard loading speed.",
    tags: ["Full Stack", "JavaScript", "REST APIs", "CRUD UI"]
  }
];

export const achievementsData = [
  {
    title: "Overall Winner (1st Place)",
    event: "Inter-College Mini-Hackathon 2026",
    org: "KPR College",
    badge: "1st Place Champion",
    description: "Won first prize for designing and rapidly deploying a full-stack AI-assisted workflow automation system under timed hackathon constraints."
  },
  {
    title: "Runner-Up",
    event: "Technical Paper Presentation",
    org: "Rathinam Grand Fest (RGF) 2026",
    badge: "2nd Place",
    description: "Presented research paper on AI agent architectures and asynchronous backend optimization for high-concurrency systems."
  },
  {
    title: "National Finalist",
    event: "National Conference on Emerging Technologies 2026",
    org: "National Tech Consortium",
    badge: "National Finalist",
    description: "Selected among top nationwide entries for innovative system architecture design in next-generation conversational assistants."
  }
];

export const educationData = [
  {
    degree: "B.Sc. Computer Science with Artificial Intelligence",
    institution: "Rathinam Global Deemed to be University",
    score: "CGPA: 8.50 / 10.0",
    period: "2024 – 2027 (Expected)",
    status: "Pursuing",
    highlights: ["Top percentile academic standing", "Specialization in Agentic AI & Systems Engineering"]
  },
  {
    degree: "Higher Secondary Certificate (HSC - 12th)",
    institution: "Sri Visweswara Vidyalaya Matric Higher Secondary School",
    score: "84.0%",
    period: "2023",
    status: "Completed",
    highlights: ["Mathematics & Computer Science Stream"]
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC - 10th)",
    institution: "Sri Visweswara Vidyalaya Matric Higher Secondary School",
    score: "84.0%",
    period: "2020",
    status: "Completed",
    highlights: ["Academic Distinction"]
  }
];

export const certificationsData = [
  {
    name: "Microsoft Azure Administrator Associate (AZ-104)",
    issuer: "Microsoft Press / Microsoft",
    tag: "Cloud Infrastructure"
  },
  {
    name: "Generative AI: Introduction & Application",
    issuer: "IBM",
    tag: "Artificial Intelligence"
  },
  {
    name: "Java Certified Foundations Associate",
    issuer: "Oracle / Java Ecosystem",
    tag: "Core Engineering"
  },
  {
    name: "Introduction to Big Data",
    issuer: "Coursera",
    tag: "Data Architecture"
  }
];
