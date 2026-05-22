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
    <header className="bg-burgundy text-cream shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <Link
          href="/"
          className="font-display text-xl sm:text-2xl font-semibold tracking-wide hover:text-gold-light transition-colors leading-tight"
          onClick={() => setOpen(false)}
        >
          Dayton Ballroom<br className="hidden sm:block" />
          <span className="text-gold text-sm font-normal tracking-widest uppercase hidden sm:block">
            Dance Club
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-base font-medium transition-colors hover:text-gold-light ${
                pathname === href
                  ? "text-gold border-b-2 border-gold pb-0.5"
                  : "text-cream/90"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-3 rounded hover:bg-burgundy-dark transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block w-6 h-0.5 bg-cream mb-1.5" />
          <span className="block w-6 h-0.5 bg-cream mb-1.5" />
          <span className="block w-6 h-0.5 bg-cream" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-burgundy-dark border-t border-cream/10 px-4 pb-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block py-4 text-base font-medium border-b border-cream/10 transition-colors hover:text-gold-light ${
                pathname === href ? "text-gold" : "text-cream/90"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:info@daytonballroom.org"
            className="block pt-4 text-sm text-cream/60 hover:text-gold transition-colors"
          >
            info@daytonballroom.org
          </a>
        </nav>
      )}
    </header>
  );
}
