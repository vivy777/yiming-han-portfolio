import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Security-Focused Industry Capstone",
    description:
      "Worked as a Security Analyst and Developer on a client-facing academic project. Contributed vulnerability findings, an RBAC model for admin, student, and instructor roles, security test cases, sprint planning, requirements gathering, and technical documentation.",
    techStack: ["RBAC", "IAM", "JavaScript", "Git", "Agile", "Security Testing"],
  },
  {
    title: "Secure Enterprise Network",
    description:
      "Designed and implemented a multi-user enterprise lab environment using Windows Server, Active Directory, Group Policy, role-based access control, and firewall integration. Documented the infrastructure and verified access controls against the design requirements.",
    techStack: ["Windows Server", "Active Directory", "GPO", "RBAC", "Firewall"],
  },
  {
    title: "Security-Hardened Web Application",
    description:
      "Built and deployed a PHP and MariaDB application on Debian Linux with secure authentication, role-based authorization, parameterized SQL queries, brute-force protections, and XSS mitigation.",
    techStack: ["PHP", "MariaDB", "Debian Linux", "SQL", "Web Security"],
  },
  {
    title: "Data Leakage Forensics Investigation",
    description:
      "Investigated Windows and removable-media forensic images, validated evidence integrity with MD5 and SHA-1, reconstructed user activity, recovered deleted artifacts, and produced a structured evidentiary report.",
    techStack: ["EnCase", "FTK Imager", "Digital Forensics", "Hashing", "Reporting"],
  },
  {
    title: "Business Continuity & Disaster Recovery Plan",
    description:
      "Created a BCP and disaster recovery framework for a simulated financial institution by mapping IT dependencies, assessing risk, identifying control gaps, and defining recovery objectives and testable recovery strategies.",
    techStack: ["BCP", "DRP", "Risk Assessment", "RTO", "Documentation"],
  },
  {
    title: "Personal Blog",
    description:
      "This site — a minimal personal blog and portfolio built with Next.js 14 App Router, Tailwind CSS, and Markdown files. No database, no CMS, just files.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    githubUrl: "https://github.com/vivy777",
    liveUrl: "https://yiminghan.ca",
  },
];
