import Link from "next/link";
import EventCard from "@/components/EventCard";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-burgundy text-cream overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 50%, #9B2550 0%, #7C1D3F 50%, #4A1026 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-36">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
            Dayton, Ohio · Est. 1960
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold leading-tight mb-6 max-w-2xl">
            Dayton Ballroom Dance Club
          </h1>
          <p className="text-cream/80 text-lg sm:text-xl leading-relaxed max-w-xl mb-10">
            64 years of quality dance instruction and lasting fellowships.
            Everyone is welcome — from first-timers to seasoned dancers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/events"
              className="bg-gold hover:bg-gold-light text-dark font-semibold px-7 py-3 rounded-full transition-colors shadow-md"
            >
              Upcoming Events
            </Link>
            <Link
              href="/lessons"
              className="border-2 border-cream/50 hover:border-cream text-cream font-semibold px-7 py-3 rounded-full transition-colors"
            >
              Learn to Dance
            </Link>
          </div>
        </div>
      </section>

      {/* Next Dance highlight */}
      <section className="bg-cream-dark py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl p-6 shadow-sm border border-cream-dark">
            <div className="flex-1">
              <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-1">
                Next Dance
              </p>
              <h2 className="font-display text-2xl font-bold text-burgundy mb-1">
                Derby Hats Night
              </h2>
              <p className="text-muted text-sm">
                Saturday, June 7, 2026 · 7:30 PM · Wear your best derby hat!
              </p>
            </div>
            <Link
              href="/events"
              className="bg-burgundy hover:bg-burgundy-dark text-cream font-semibold px-6 py-3 rounded-full transition-colors text-sm whitespace-nowrap"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeader
          title="Everything You Need to Dance"
          subtitle="Whether you're joining us for the first time or have been dancing with us for years, we have something for everyone."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {[
            {
              icon: "🎵",
              title: "Weekly Lessons",
              body: "Structured classes for all levels — beginner through advanced. Learn waltz, foxtrot, cha-cha, and more.",
              href: "/lessons",
              cta: "View Schedule",
            },
            {
              icon: "🎉",
              title: "Monthly Events",
              body: "Themed dance nights throughout the year with live music, fun themes, and a welcoming community atmosphere.",
              href: "/events",
              cta: "See Events",
            },
            {
              icon: "🤝",
              title: "Our Community",
              body: "A club built on fellowship. Connect with other dance lovers in the Miami Valley area and beyond.",
              href: "/about",
              cta: "Learn More",
            },
          ].map(({ icon, title, body, href, cta }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-7 shadow-sm border border-cream-dark flex flex-col"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-display text-xl font-bold text-burgundy mb-3">
                {title}
              </h3>
              <p className="text-muted text-sm leading-relaxed flex-1">{body}</p>
              <Link
                href={href}
                className="mt-5 text-sm font-semibold text-gold hover:text-gold-light transition-colors inline-flex items-center gap-1"
              >
                {cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming events preview */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Join us for our next dance nights — all experience levels welcome."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <EventCard
              date="June 7, 2026"
              time="7:30 PM"
              theme="Derby Hats Night"
              description="Break out your finest derby hats for an elegant evening of ballroom dancing. Light refreshments provided."
              location="Dayton, OH"
              highlight
            />
            <EventCard
              date="July 5, 2026"
              time="7:30 PM"
              theme="Red, White & Blue Dance"
              description="Celebrate summer with a patriotic-themed dance night. Wear your red, white, and blue!"
              location="Dayton, OH"
            />
            <EventCard
              date="August 2, 2026"
              time="7:30 PM"
              theme="Flower Power Night"
              description="A colorful, floral-themed dance evening. Bring your favorite floral attire and dance the night away."
              location="Dayton, OH"
            />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/events"
              className="bg-burgundy hover:bg-burgundy-dark text-cream font-semibold px-8 py-3 rounded-full transition-colors inline-block"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* About blurb */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="A Club Built on Fellowship"
              subtitle="Since 1960, the Dayton Ballroom Dance Club has been bringing people together through the joy of dance."
            />
            <p className="text-muted leading-relaxed mb-6">
              We are a non-profit organization dedicated to promoting and
              preserving ballroom dancing in the Dayton, Ohio area. Our members
              range from absolute beginners to experienced competitors, all
              united by a love of dance and community.
            </p>
            <Link
              href="/about"
              className="text-sm font-semibold text-gold hover:text-gold-light transition-colors"
            >
              Our History →
            </Link>
          </div>
          <div className="bg-burgundy/5 rounded-2xl p-8 border border-cream-dark">
            <div className="grid grid-cols-2 gap-6 text-center">
              {[
                { stat: "64+", label: "Years of Dancing" },
                { stat: "12", label: "Events Per Year" },
                { stat: "6+", label: "Dance Styles" },
                { stat: "100+", label: "Active Members" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <div className="font-display text-4xl font-bold text-burgundy mb-1">
                    {stat}
                  </div>
                  <div className="text-muted text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
