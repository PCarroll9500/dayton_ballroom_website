import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-cream mt-0">
      {/* Gold top border */}
      <div className="h-1 bg-gradient-to-r from-burgundy via-gold to-burgundy" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gold text-3xl">♫</span>
              <div>
                <div className="font-display text-lg font-bold text-cream leading-tight">
                  Dayton Ballroom Dance Club
                </div>
                <div className="text-gold text-xs uppercase tracking-widest">
                  Est. 1960
                </div>
              </div>
            </div>
            <p className="text-base leading-relaxed text-cream/70">
              64 years of joyful dancing, lasting friendships, and a community
              that welcomes everyone.
            </p>
            <p className="mt-4 text-gold text-base font-display italic">
              &ldquo;We&apos;d love to see you on the dance floor.&rdquo;
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-cream mb-4 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3 text-base">
              {[
                { href: "/", label: "Home" },
                { href: "/events", label: "Upcoming Events" },
                { href: "/lessons", label: "Lessons & Schedule" },
                { href: "/about", label: "About & Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & schedule */}
          <div>
            <h4 className="font-semibold text-cream mb-4 text-sm uppercase tracking-widest">
              Find Us
            </h4>
            <div className="space-y-3 text-base text-cream/70">
              <p className="flex items-start gap-2">
                <span className="text-gold mt-0.5">📍</span>
                <span>Arbor Event Center<br />2150 Arbor Blvd, Dayton, OH 45439</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-gold mt-0.5">📅</span>
                First Saturday of every month
                <br />
                Doors open at 7:00 PM · Dancing at 7:30 PM
              </p>
              <p className="flex items-start gap-2">
                <span className="text-gold mt-0.5">✉️</span>
                <a
                  href="mailto:info@daytonballroom.org"
                  className="hover:text-gold transition-colors break-all"
                >
                  info@daytonballroom.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-10 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-cream/40">
          <p>&copy; {new Date().getFullYear()} Dayton Ballroom Dance Club. All rights reserved.</p>
          <p className="text-gold/50">♩ ♪ ♫ ♬</p>
        </div>
      </div>
    </footer>
  );
}
