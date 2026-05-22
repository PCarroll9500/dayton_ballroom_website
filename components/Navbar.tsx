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
      {/* Top accent stripe */}
      <div className="h-1 bg-gradient-to-r from-burgundy-dark via-gold to-burgundy-dark" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setOpen(false)}
        >
          <span className="text-gold text-3xl leading-none group-hover:scale-110 transition-transform">
            ♫
          </span>
          <div>
            <div className="font-display text-xl font-bold tracking-wide leading-tight group-hover:text-gold-light transition-colors">
              Dayton Ballroom
            </div>
            <div className="text-gold text-xs font-semibold uppercase tracking-widest leading-none">
              Dance Club · Est. 1960
            </div>
          </div>
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
          className="md:hidden p-3 rounded-lg hover:bg-burgundy-dark transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block w-6 h-0.5 bg-cream mb-1.5 transition-transform" />
          <span className="block w-6 h-0.5 bg-cream mb-1.5" />
          <span className="block w-6 h-0.5 bg-cream transition-transform" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-burgundy-dark border-t border-cream/10 px-4 pb-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block py-4 text-lg font-medium border-b border-cream/10 transition-colors hover:text-gold-light ${
                pathname === href ? "text-gold" : "text-cream/90"
              }`}
            >
              {label}
            </Link>
          ))}
          <p className="pt-4 text-sm text-cream/50 text-center">
            ♪ First Saturday of every month · 7:30 PM ♪
          </p>
        </nav>
      )}
    </header>
  );
}
