export const person = {
  name: "Baros Akriovs Jiang",
  role: "Self-Employed",
  title: "Software Engineer",
  location: "Greece/Kavala",
  timezone: "Europe/Athens",
  email: "barosjiang@gmail.com",
  avatar: "/images/avatar.jpg",
  headline: "Building bridges between design, code, and AI",
  subline:
    "Beautiful frontends • Reliable backends • Native/cross-platform mobile • AI used with intention and restraint",
  intro:
    "Baros is a software engineer with a passion for transforming complex challenges into simple, elegant code solutions. His work spans digital interfaces, interactive experiences, and the convergence of frontend and backend.",
  languages: ["English", "Cantonese"],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/elitedevsolution", icon: "github" },
  {
    label: "Email",
    href: "mailto:barosjiang@gmail.com",
    icon: "email",
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=14058808406&text=Hey%2C+I+hope+this+message+finds+you+well.+I+have+a+project+in+mind+that+I+think+would+suit+you+really+well.",
    icon: "whatsapp",
  },
  { label: "Telegram", href: "https://t.me/SuperCoder707", icon: "telegram" },
] as const;

export const experiences = [
  {
    company: "DFX5",
    place: "Queretaro, Mexico | Remote",
    timeframe: "05/2025 – 10/2025",
    role: "Mobile Application Architect",
    achievements: [
      "Architected AI-powered SaaS workflows using Python, FastAPI, Node.js, NestJS, and OpenAI APIs for enterprise automation.",
      "Designed distributed REST and GraphQL APIs and orchestration pipelines that improved high-volume job throughput by 35%.",
      "Owned delivery from requirements and architecture through production.",
      "Mentored engineers across 2 development squads through architecture and design reviews.",
    ],
  },
  {
    company: "Allcalls Technologies LLC",
    place: "Sheridan, Wyoming, United States | Remote",
    timeframe: "04/2024 – 05/2025",
    role: "Senior Full Stack Developer",
    achievements: [
      "Architected and developed a multi-tenant SaaS platform using Laravel, Vue 3, and TypeScript, improving feature delivery speed by 25%.",
      "Delivered 18 REST API endpoints integrating payments, notifications, PostgreSQL, Redis, and third-party services.",
      "Implemented authentication and authorization using JWT, OAuth 2.0, and Laravel Sanctum, reducing unauthorized-access incidents by 35%.",
      "Automated PHPUnit and Jest testing for critical checkout and authentication workflows, reducing production incidents by 30%.",
      "Worked remotely for a US-based company, collaborating in a distributed engineering environment.",
    ],
  },
  {
    company: "Toolla Inc",
    timeframe: "2022 - 2025",
    role: "Full-Stack Engineer",
    achievements: [
      "Led end-to-end development of custom web and mobile applications for international clients in cybersecurity, fintech, and healthcare, delivering projects on time and 10-20% under budget using Agile/Scrum methodologies",
      "Architected and implemented scalable full-stack solutions with React/Next.js/TypeScript or Angular 16+ (frontend), Node.js/Express or NestJS (backend), PostgreSQL/MongoDB, resulting in 40% faster page loads and handling 10,000+ daily users for high-traffic client platforms",
      "Developed cross-platform mobile applications using React Native (Expo) + TypeScript + Redux / MobX for state management, integrated with REST/GraphQL APIs, enabling clients to launch iOS & Android apps simultaneously and increasing user engagement by 25-35%",
      "Collaborated directly with clients and stakeholders to gather requirements, design system architecture, and iterate on features — reduced scope creep and delivered 95% client satisfaction ratings across multiple projects",
      "Delivered a React Native-based virtual card mobile app for a fintech client, achieving 4.8-star ratings on App/Play Store with 100,000+ downloads",
    ],
  },
  {
    company: "Molequle GmbH",
    timeframe: "2021 - 2022",
    role: "Senior Frontend Developer",
    achievements: [
      "Led frontend architecture and implementation of a next-generation SaaS Customer Data & Experience Platform (CDXP) built with Next.js 12, TypeScript, and styled-components, delivering a highly performant, responsive, and pixel-perfect user experience that closely followed designer-provided specifications and company brand guidelines",
      "Architected and delivered production-ready browser extensions for Chrome and Firefox using React, TypeScript, and Tailwind CSS, implementing complex content scripts, background/service workers, popup and options UIs while ensuring consistent behavior and excellent cross-browser compatibility.",
      "Built robust, state-synchronized UI components (popups, options pages, overlay interfaces) leveraging React Query (TanStack Query) for efficient data fetching, caching, optimistic updates, and real-time background synchronization — resulting in smooth, tab-consistent user experiences.",
      "Engineered scalable, data-intensive frontend interfaces including client dashboards, analytics modules, profile views, and reporting features, utilizing modern patterns with React Query + TypeScript to achieve excellent performance and maintainable state management.",
    ],
  },
];

export const studies = [
  {
    name: "Aristotle University of Thessaloniki",
    description: "Bachelor in Information Technology, Computer Science, 2012 - 2016",
  },
];

export const skills = [
  {
    title: "Frontend",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Vue.js",
      "Angular",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    tags: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Python",
      "Django",
      "Fast API",
      "Laravel",
      "PHP",
      "Java",
      "Spring Boot",
    ],
  },
  {
    title: "APIs & Architecture",
    tags: [
      "REST APIs",
      "GraphQL",
      "SOAP",
      "Microservices",
      "JWT",
      "OAuth 2.0",
      "Laravel Sanctum",
      "Distributed Systems",
    ],
  },
  {
    title: "Databases",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    tags: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Git"],
  },
  {
    title: "Testing & Quality",
    tags: ["Jest", "PHPUnit", "Postman", "Automated Testing", "Code Review"],
  },
  {
    title: "AI & Automation",
    tags: ["OpenAI APIs", "RAG", "n8n", "AI-powered workflows", "API integrations"],
  },
  {
    title: "Leadership",
    tags: [
      "Technical Architecture",
      "Engineering Leadership",
      "Mentoring",
      "Hiring",
      "Agile/Scrum",
      "Jira",
      "Stakeholder Management",
    ],
  },
];

export const toc = [
  { id: "introduction", label: "Introduction" },
  {
    id: "work-experience",
    label: "Work Experience",
    items: ["DFX5", "Allcalls Technologies LLC", "Toolla Inc", "Molequle GmbH"],
  },
  {
    id: "education",
    label: "Education",
    items: ["Aristotle University of Thessaloniki"],
  },
  {
    id: "technical-skills",
    label: "Core Technical Skills",
    items: [
      "Frontend",
      "Backend",
      "APIs & Architecture",
      "Databases",
      "Cloud & DevOps",
      "Testing & Quality",
      "AI & Automation",
      "Leadership",
    ],
  },
];
