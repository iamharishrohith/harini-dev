import os
import shutil

print("Generating Harini portfolio files...")

os.makedirs('app/components', exist_ok=True)
os.makedirs('app/data', exist_ok=True)
os.makedirs('public', exist_ok=True)

if os.path.exists('HARINI K.pdf'):
    shutil.copyfile('HARINI K.pdf', 'public/Harini_K_Resume.pdf')
    print('Copied resume PDF to public folder')

# 1. next.config.mjs
with open('next.config.mjs', 'w', encoding='utf-8') as f:
    f.write('''/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
''')

# 2. app/data/portfolioData.js
with open('app/data/portfolioData.js', 'w', encoding='utf-8') as f:
    f.write('''export const personalInfo = {
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
    badge: "🏆 1st Place Champion",
    description: "Won first prize for designing and rapidly deploying a full-stack AI-assisted workflow automation system under timed hackathon constraints."
  },
  {
    title: "Runner-Up",
    event: "Technical Paper Presentation",
    org: "Rathinam Grand Fest (RGF) 2026",
    badge: "🥈 2nd Place",
    description: "Presented research paper on AI agent architectures and asynchronous backend optimization for high-concurrency systems."
  },
  {
    title: "National Finalist",
    event: "National Conference on Emerging Technologies 2026",
    org: "National Tech Consortium",
    badge: "🎖️ National Finalist",
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

export const terminalCommands = {
  "help": "Available commands: fde-info, deploy-astro, test-zara, skills, metrics, contact, clear",
  "fde-info": "Harini K | Forward Deployed Engineer & AI Architect\\nFocus: LLM Agents, Non-blocking Async Dispatchers, Enterprise Full-Stack Integration.",
  "deploy-astro": ">> Initializing ASTRO Enterprise Engine...\\n[OK] Async Python Dispatcher loaded\\n[OK] Intent Router initialized\\n[OK] Latency: 118ms (40% faster than sync baseline)\\nStatus: Deployed & Serving concurrent requests.",
  "test-zara": ">> Launching Zara AI multi-turn conversational session...\\n[PROMPT]: \\\"Optimize database query latency for agent logs\\\"\\n[ZARA]: Applied indexing to session_id with Redis read-through caching. Query turnaround < 12ms.",
  "skills": "• AI: GenAI, LLMs, Agentic Workflows, OpenAI/Gemini APIs, PyTorch\\n• Full Stack: React, Next.js, Node.js, Express, Async REST APIs\\n• Databases: MySQL, PostgreSQL, MongoDB, Redis, Firebase\\n• Cloud/DevOps: Azure (AZ-104), Docker, Git, CI/CD",
  "metrics": "• Academic CGPA: 8.50 / 10.0\\n• Hackathon: 1st Place Champion (Inter-College 2026)\\n• Optimization: 40% Latency Reduction on ASTRO Assistant",
  "contact": "Email: harinik37@gmail.com | LinkedIn: /in/harini-k-ai | GitHub: /harini-k-dev"
};
''')

print("portfolioData.js successfully generated!")
