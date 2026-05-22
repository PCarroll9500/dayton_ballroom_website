import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-cream/80 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-cream font-semibold text-lg mb-3">
            Dayton Ballroom Dance Club
          </h3>
          <p className="text-sm leading-relaxed text-cream/70">
            64 years of quality dance instruction and lasting fellowships in
            Dayton, Ohio.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-cream mb-3 text-sm uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/events", label: "Events" },
              { href: "/lessons", label: "Lessons" },
              { href: "/about", label: "About & Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-gold transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-cream mb-3 text-sm uppercase tracking-wider">
            Contact
          </h4>
          <address className="not-italic text-sm space-y-1 text-cream/70">
            <p>Dayton, Ohio</p>
            <p>
              <a
                href="mailto:info@daytonballroom.org"
                className="hover:text-gold transition-colors"
              >
                info@daytonballroom.org
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-cream/10 text-center text-xs text-cream/40">
        &copy; {new Date().getFullYear()} Dayton Ballroom Dance Club. All
        rights reserved.
      </div>
    </footer>
  );
}
