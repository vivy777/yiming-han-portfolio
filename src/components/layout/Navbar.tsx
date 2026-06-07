"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
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
      <nav className="max-w-2xl mx-auto px-4 min-h-14 flex items-center gap-5">
        <Link
          href="/"
          className="font-semibold text-neutral-100 hover:text-blue-400 transition-colors shrink-0"
        >
          Yiming Han
        </Link>
        <ul className="flex flex-1 items-center justify-end gap-4 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
