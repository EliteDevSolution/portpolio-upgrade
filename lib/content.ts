import fs from "fs";
import path from "path";

export type TeamMember = {
  name: string;
  avatar?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  images: string[];
  featured: boolean;
  team: TeamMember[];
  content: string;
};

function readCase(file: string) {
  return fs.readFileSync(path.join(process.cwd(), "content", file), "utf8");
}

export const projects: Project[] = [
  {
    slug: "1-building-Browsing-Forensics-UI-at-MenloSecurity",
    title: "Developing Browsing Forensics UI at Menlo Security",
    description:
      "Development of a security-focused web application for deep visibility into enterprise browsing sessions, built with the latest Angular framework.",
    publishedAt: "2025-12-15",
    featured: true,
    images: [
      "/images/projects/menlo/cover-01.png",
      "/images/projects/menlo/cover-02.png",
      "/images/projects/menlo/cover-03.png",
      "/images/projects/menlo/cover-04.png",
    ],
    team: [
      { name: "Project Manager" },
      { name: "Baros Akriovs Jiang", avatar: "/images/avatar.jpg" },
      { name: "Backend Engineer" },
      { name: "Product Designer" },
      { name: "QA Team" },
    ],
    content: readCase("menlo.md"),
  },
  {
    slug: "2-building-CDXP-at-scale",
    title: "Building a Customer Data & Experience Platform at Scale",
    description:
      "A deep dive into building a scalable CDXP web application and browser extensions using Next.js, React, and modern frontend tooling.",
    publishedAt: "2024-06-01",
    featured: false,
    images: [
      "/images/projects/molequle/cover-01.png",
      "/images/projects/molequle/cover-02.png",
      "/images/projects/molequle/cover-03.png",
      "/images/projects/molequle/cover-04.png",
      "/images/projects/molequle/cover-05.png",
      "/images/projects/molequle/cover-06.png",
    ],
    team: [
      { name: "Baros Akriovs Jiang", avatar: "/images/avatar.jpg" },
      { name: "Backend Engineer" },
    ],
    content: readCase("cdxp.md"),
  },
  {
    slug: "4-building-DeFi-on-NEO",
    title: "Building a Cross-Chain DeFi Platform on Neo",
    description:
      "A deep dive into building and scaling a decentralized finance (DeFi) frontend for cross-chain trading, liquidity, and governance on the Neo blockchain.",
    publishedAt: "2024-06-01",
    featured: false,
    images: [
      "/images/projects/flamingo/fla-01.png",
      "/images/projects/flamingo/fla-02.png",
      "/images/projects/flamingo/fla-03.png",
      "/images/projects/flamingo/fla-04.png",
      "/images/projects/flamingo/fla-05.png",
      "/images/projects/flamingo/fla-06.png",
      "/images/projects/flamingo/fla-07.png",
      "/images/projects/flamingo/fla-08.png",
    ],
    team: [
      { name: "Baros Akriovs Jiang", avatar: "/images/avatar.jpg" },
      { name: "Collaborator" },
    ],
    content: readCase("flamingo.md"),
  },
  {
    slug: "3-building-BNPL-and-digital-wallet-mobile-app",
    title: "Building a BNPL & Digital Wallet Mobile App at KabCash",
    description:
      "Development of a consumer-facing fintech mobile application enabling virtual cards, deferred payments, and peer-to-peer transfers, built with React Native.",
    publishedAt: "2023-12-09",
    featured: false,
    images: [
      "/images/projects/kabcash/kab-1.png",
      "/images/projects/kabcash/kab-2.png",
    ],
    team: [
      { name: "Product Design" },
      { name: "CTO & Co-Founder" },
      { name: "Baros Akriovs Jiang", avatar: "/images/avatar.jpg" },
      { name: "Backend Engineering" },
      { name: "QA Testing" },
      { name: "Marketing" },
    ],
    content: readCase("kabcash.md"),
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${months[Number(month) - 1]} ${Number(day)}, ${year}`;
}
