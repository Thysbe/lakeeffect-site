"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/events", label: "Events" },
  { href: "/merch", label: "Merch" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-shore bg-night/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-display uppercase tracking-[0.18em] text-snow hover:text-lake transition-colors duration-200"
          style={{ fontWeight: 700, fontSize: "0.8rem" }}
        >
          Lake Effect Records
        </Link>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-200 ${
                pathname === link.href
                  ? "text-lake"
                  : "text-mist hover:text-snow"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
