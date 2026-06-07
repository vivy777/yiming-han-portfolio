import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Yiming Han — an IT and cybersecurity professional based in Winnipeg.",
};

const highlights = [
  { label: "Current Role", value: "Digital Print Expert · Staples Canada" },
  { label: "Education", value: "Information Security, Honours" },
  { label: "Program GPA", value: "4.27 / 4.5" },
  { label: "Certifications", value: "Security+ · Network+" },
];

const focusAreas = [
  "IT support and technical troubleshooting",
  "Windows Server, Active Directory, and Group Policy",
  "Secure network design and server hardening",
  "Vulnerability assessment and security testing",
  "Python, PowerShell, and Bash automation",
  "Secure PHP, JavaScript, and SQL development",
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About"
        subtitle="IT and cybersecurity professional with a global academic background."
      />

      <div className="space-y-6 text-neutral-300 leading-relaxed">
        <p>
          I&apos;m Yiming Han, an IT professional based in Winnipeg with a focus on cybersecurity,
          infrastructure, and practical user support. I graduated with honours from RRC
          Polytech&apos;s Information Security program with a 4.27/4.5 GPA.
        </p>
        <p>
          With a Bachelor of Information Technology from Federation University Australia and both
          CompTIA Security+ and Network+ certifications, I combine software development foundations
          with hands-on experience in secure systems, networking, risk assessment, and technical
          documentation.
        </p>
        <p>
          I currently work full-time as a Digital Print Expert at Staples Canada, where I operate
          production equipment, troubleshoot hardware and software issues, verify digital files,
          perform quality assurance, and support customers in a deadline-driven environment.
        </p>
        <p>
          My broader technical experience includes designing a Windows Server and Active Directory
          lab, hardening a PHP and MariaDB application, conducting a digital forensics
          investigation, developing a business continuity and disaster recovery plan, and
          contributing security analysis and RBAC design to an industry capstone project.
        </p>
      </div>

      <section className="grid sm:grid-cols-2 gap-3 mt-10" aria-label="Professional highlights">
        {highlights.map(({ label, value }) => (
          <div key={label} className="border border-neutral-800 bg-neutral-900/30 rounded-lg p-4">
            <p className="text-xs text-blue-400 font-mono mb-1">{label}</p>
            <p className="text-sm text-neutral-200">{value}</p>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-blue-400 font-mono text-xs mb-4">## Focus Areas</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {focusAreas.map((area) => (
            <div
              key={area}
              className="flex gap-2 border-l-2 border-neutral-800 pl-3 text-sm text-neutral-400"
            >
              <span className="text-neutral-600 font-mono" aria-hidden="true">→</span>
              <span>{area}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 pt-8 border-t border-neutral-800">
        <h2 className="text-lg font-semibold text-neutral-100 mb-4">Get in touch</h2>
        <div className="flex flex-col gap-2 text-sm">
          <a
            href="https://github.com/vivy777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            github.com/vivy777
          </a>
          <a
            href="https://www.linkedin.com/in/yiminghan-ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            linkedin.com/in/yiminghan-ca
          </a>
        </div>
      </section>
    </div>
  );
}
