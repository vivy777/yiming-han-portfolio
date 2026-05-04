import { Experience } from "@/types";

export const skillGroups: { category: string; skills: string[] }[] = [
  {
    category: "Security & Networking",
    skills: [
      "CompTIA Security+", "CompTIA Network+", "Network Design", "Server Hardening",
      "Firewall Configuration", "VLAN", "VPN", "TCP/IP", "DNS / DHCP",
      "RBAC", "PCI DSS", "Cryptography", "Penetration Testing",
      "Vulnerability Assessment", "Digital Forensics", "Incident Response",
      "BCP / DRP", "Risk Assessment", "MFA", "Rate Limiting",
      "Account Lockout Mechanisms", "IAM",
    ],
  },
  {
    category: "Systems & Infrastructure",
    skills: [
      "Windows Server", "Active Directory", "Group Policy (GPO)",
      "Linux (Debian / Ubuntu)", "Kali Linux", "VirtualBox", "Hyper-V",
      "File Server Management", "Remote Desktop (RDP)", "IT Support & Troubleshooting",
    ],
  },
  {
    category: "Programming & Scripting",
    skills: ["Python", "PowerShell", "Bash", "JavaScript", "PHP", "SQL", "HTML / CSS", "MySQL / MariaDB"],
  },
  {
    category: "Security Tools",
    skills: ["Wireshark", "Nmap", "Metasploit", "EnCase", "FTK Imager", "Cisco Packet Tracer", "TryHackMe"],
  },
  {
    category: "Productivity & Dev Tools",
    skills: ["Git / GitHub", "VS Code", "Microsoft 365", "Office 365"],
  },
  {
    category: "Agile & Project Management",
    skills: [
      "Agile / Scrum", "Sprint Planning", "Backlog Management", "User Stories",
      "QA & Test Cases", "Technical Documentation", "Stakeholder Management",
      "Requirements Gathering", "Meeting Minutes", "Risk Assessment",
    ],
  },
  {
    category: "Languages",
    skills: ["Chinese (Native)", "English (Professional)", "French (Beginner)"],
  },
];

export const volunteering: Experience[] = [
  {
    company: "ISACA Winnipeg Chapter",
    role: "Conference Volunteer",
    period: "Apr 2026",
    event: "WCISC 2026 (Western Canada Information Security Conference)",
    photos: [
      "/volunteering/wcisc/IMG_1368.JPEG",
      "/volunteering/wcisc/IMG_1282.JPEG",
      "/volunteering/wcisc/PSX_20260421_173426.jpg",
    ],
    bullets: [
      "Assisted in the successful execution of WCISC 2026 (Western Canada Information Security Conference), a premier cybersecurity event in the region.",
      "Professional Networking: Engaged with industry-leading vendors and security professionals to discuss emerging technologies and real-world cybersecurity solutions.",
      "Operational Support: Facilitated event logistics at the RBC Convention Centre, ensuring a seamless experience for speakers and attendees.",
      "Industry Insights: Gained deep knowledge of the evolving threat landscape, with a focus on AI Governance, Shadow AI control, and the human element in cybersecurity risk management.",
      "Community Engagement: Represented the student/professional IT community, demonstrating commitment to continuous learning and the growth of the Western Canada infosec ecosystem.",
    ],
  },
  {
    company: "Canadian Manufacturers & Exporters",
    role: "Event Operations & Registration Support",
    period: "Jan 2026",
    event: "Made in Manitoba B2B Summit",
    photos: [
      "/volunteering/cme/Screenshot 2026-05-02 201614.png",
      "/volunteering/cme/82d8eed3-a022-418a-b83d-150033e33b9d.JPEG",
    ],
    bullets: [
      "Contributed to the operational success of the Made in Manitoba B2B Summit, a key industry event fostering collaboration within the province's manufacturing and exporting sectors.",
      "Front-Line User Support: Acted as the first point of contact for attendees, managing high-volume registration check-ins and badge distribution with professional accuracy.",
      "Logistics & Data Tracking: Monitored real-time attendance and synchronized on-site registration logistics to ensure a seamless entry process during peak hours.",
      "Stakeholder Engagement: Facilitated the transition of exhibitors to the tradeshow floor, providing onsite guidance and navigation support to ensure booth setup efficiency.",
      "Operational Collaboration: Partnered with CME staff to optimize tradeshow floor operations post-registration, demonstrating adaptability in a fast-paced, B2B corporate environment.",
    ],
  },
  {
    company: "RRC Polytech",
    role: "Speaker Liaison",
    period: "Oct 2025",
    event: "2025 Inspire Conference",
    bullets: [
      "Served as a key technical and communications link at the 2025 Inspire Conference, ensuring the seamless delivery of professional presentations and a high-quality attendee experience.",
      "Technical Troubleshooting: Provided on-site technical support for speakers, managing audiovisual setups and resolving hardware/software compatibility issues to ensure zero downtime between sessions.",
      "Communication Coordination: Managed real-time communication between event organizers and keynote speakers, overseeing scheduling and logistics for multiple concurrent tracks.",
      "Public Presentation: Facilitated session flow by professionally introducing speakers to diverse audiences, setting a focused and engaging tone for each technical discourse.",
      "Crisis Management: Acted as a rapid-response contact for speaker needs, demonstrating the ability to handle high-pressure situations with calm and professional problem-solving.",
    ],
  },
];

export const education: Experience[] = [
  {
    company: "RRC Polytech",
    role: "Advanced Diploma — Information Security",
    period: "Aug 2024 – May 2026",
    photos: [
      "/education/rrc/IMG_5336.JPEG",
      "/education/rrc/IMG_0144.JPEG",
      "/education/rrc/IMG_6026.JPEG",
      "/education/rrc/44950c83-68e7-42fd-a94c-f8c86fed74a2.jpg",
    ],
    bullets: [
      "Cumulative GPA: 4.3 / 4.5",
      "Secure Network Design - Implemented a multi-user enterprise network by configuring Windows Server, Active Directory, Group Policy, and RBAC, while coordinating firewall integration, resulting in a secure, documented infrastructure with verified access control.",
      "Secure PHP & MySQL Web Design - Built and deployed a security-hardened PHP/MariaDB web on Debian Linux (Oracle VM), implementing secure authentication, role-based authorization, brute-force protection, parameterized SQL queries, and comprehensive XSS mitigation to meet industry-aligned secure web development requirements.",
      "PridePoint Bank Business Continuity & Disaster Recovery Plan - Conducted enterprise risk assessment and IT dependency mapping for a simulated financial institution, defining recovery strategies, RTOs, and control gaps to produce a compliant, testable BCP/DRP framework.",
      "Data Leakage Digital Forensics Investigation - Performed a full forensic analysis of Windows 7 and removable media images using EnCase and FTK Imager, validating evidence integrity (MD5/SHA-1), reconstructing user activity timelines, recovering deleted artifacts, and delivering a professional evidentiary report meeting forensic standards.",
      "Penetration Testing Labs - Executed vulnerability scanning and controlled exploitation in virtualized environments using Kali Linux and Metasploit, reinforcing practical skills in threat identification, validation, and remediation planning.",
    ],
  },
  {
    company: "Federation University Australia",
    role: "Bachelor of Information Technology - Software Development",
    period: "Aug 2020 – Jun 2023",
    photos: [
      "/education/federation/IMG_20220927_190403.jpg",
      "/education/federation/IMG_20220927_190913.JPEG",
      "/education/federation/IMG_20220924_134359.jpg",
    ],
    bullets: [
      "Completed a comprehensive IT degree focused on software development principles, programming languages, software architecture, and real-world application design to prepare for professional roles in software and general IT environments.",
      "Gained practical exposure to core IT foundations and specialist software development units, including structured career development and industry-oriented work placement components.",
      "Developed analytical problem-solving, systems analysis, and user-centered design skills foundational to software and IT operations roles.",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "RRC Polytech",
    role: "Security Analyst & Developer | Industry Project",
    period: "Jan 2026 – May 2026",
    photos: [
      "/experience/rrc/IMG_0352.JPEG",
    ],
    bullets: [
      "Security Architecture & Vulnerability Analysis: Conducted comprehensive vulnerability assessments and authored technical reports recommending critical security controls, including Multi-Factor Authentication (MFA), Account Lockout Mechanisms, and Rate Limiting to prevent brute-force attacks.",
      "Identity & Access Management (IAM): Designed and implemented a robust Role-Based Access Control (RBAC) framework tailored for Admin, Student, and Instructor roles, ensuring data privacy and least-privilege access.",
      "Agile Methodology & Project Governance: Facilitated Sprint Planning sessions and managed the project backlog by defining User Stories and technical requirements to ensure alignment with the Project Charter.",
      "Quality Assurance & Testing: Developed and executed structured Test Cases to validate system functionality, performance, and security-hardened features before client delivery.",
      "Client Stakeholder Management: Led and participated in client meetings to gather functional requirements, translate business needs into technical specifications, and provide transparent progress updates.",
      "Project Management Support: Collaborated directly with the Project Manager to produce high-quality documentation, including meeting minutes, risk assessments, and deliverable tracking to maintain project governance.",
      "Full-Stack Contribution & DevOps: Utilized JavaScript for dynamic front-end logic and managed version control via Git/GitHub, following industry-standard branching and merge request workflows.",
    ],
  },
  {
    company: "Self-Employed",
    role: "English Second Language Tutor",
    period: "Jul 2023 – Jun 2024",
    bullets: [
      "Provided one-on-one and small group tutoring to Chinese students, focusing on academic English, technical vocabulary, and professional communication.",
      "Designed structured lesson plans and practice materials to improve speaking, listening, reading, and writing proficiency for academic and workplace contexts.",
      "Explained complex grammar and vocabulary concepts in a clear, step-by-step manner, adapting instruction to individual learning pace and proficiency levels.",
      "Tracked learner progress using structured assessments and adjusted teaching strategies to meet short-term learning goals and long-term proficiency objectives.",
      "Achieved measurable learning outcomes, with students' English proficiency scores increasing by an average of 50% within one year.",
      "Strengthened technical explanation skills, documentation habits, and structured communication practices applicable to IT support, user training, and stakeholder interaction environments.",
    ],
  },
];
