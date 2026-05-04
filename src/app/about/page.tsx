import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Yiming Han — IT professional and aspiring cybersecurity specialist.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-neutral-100 mb-2">Yiming Han</h1>
        <p className="text-lg text-neutral-400">CompTIA Security+ & Network+ | Aspiring IT Professional | RRC Polytech</p>
        <p className="text-sm text-neutral-500 mt-1">Winnipeg, Manitoba, Canada</p>
      </div>

      <div className="space-y-6 text-neutral-300 leading-relaxed">
        <p>
          I&apos;m an IT professional with a global academic background and a passion for building
          secure, efficient infrastructure. Currently maintaining a 4.3/4.5 GPA in the Information
          Security program at RRC Polytech, I bridge the gap between complex technical systems and
          seamless user support.
        </p>
        <p>
          With a Bachelor of Information Technology from Federation University Australia and both
          CompTIA Security+ and Network+ certifications, I bring a disciplined, analytical approach
          to every technical challenge.
        </p>
        <p>
          My core focus areas include technical support &amp; troubleshooting across Windows
          (Server/AD/GPO) and Linux environments, secure network design and server hardening,
          full-stack web development (JavaScript, PHP, SQL), and automation with Python and
          PowerShell.
        </p>
        <p>
          I&apos;m currently looking for an IT Support, Junior Network, or Systems Administration
          role in Winnipeg. Open to on-site, hybrid, and remote opportunities.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-neutral-800">
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
      </div>
    </div>
  );
}
