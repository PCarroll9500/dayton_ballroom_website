"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/lessons", label: "Lessons" },
  { href: "/about", label: "About & Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-burgundy text-cream shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-wide hover:text-gold-light transition-colors"
          onClick={() => setOpen(false)}
        >
          Dayton Ballroom Dance Club
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors hover:text-gold-light ${
                pathname === href ? "text-gold border-b-2 border-gold pb-0.5" : "text-cream/90"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-burgundy-dark transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block w-5 h-0.5 bg-cream mb-1" />
          <span className="block w-5 h-0.5 bg-cream mb-1" />
          <span className="block w-5 h-0.5 bg-cream" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-burgundy-dark border-t border-burgundy-dark/50 px-4 pb-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-cream/10 transition-colors hover:text-gold-light ${
                pathname === href ? "text-gold" : "text-cream/90"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
