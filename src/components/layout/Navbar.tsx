"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/skills", label: "Skills" },
  { href: "/certs", label: "Certs" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blogs" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-800 bg-neutral-950">
      <nav className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-neutral-100 hover:text-blue-400 transition-colors"
        >
          Yiming Han
        </Link>
        <ul className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors hover:text-blue-400 ${
                  pathname === href || pathname.startsWith(href + "/")
                    ? "text-blue-400 font-medium"
                    : "text-neutral-400"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
