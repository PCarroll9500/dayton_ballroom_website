import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About & Contact · Dayton Ballroom Dance Club",
  description:
    "Learn about the history of the Dayton Ballroom Dance Club, how to become a member, and how to get in touch.",
};

const affiliates = [
  { name: "76 Dance Club", location: "Dayton, OH" },
  { name: "Dance(tonians)", location: "Dayton, OH" },
  { name: "Stardust Dance Club", location: "Dayton, OH" },
  { name: "Gem City Swing", location: "Dayton, OH" },
  { name: "Miami Valley Dance Council", location: "Miami Valley, OH" },
  { name: "USA Dance", location: "National" },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeader
        title="About Us"
        subtitle="Learn about our club's history, mission, and the community we've built over more than six decades."
      />

      {/* History */}
      <section className="mb-16 grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-display text-2xl font-bold text-burgundy mb-4">
            Our History
          </h2>
          <div className="space-y-4 text-muted leading-relaxed text-sm">
            <p>
              The Dayton Ballroom Dance Club was founded in 1960 by a group of
              passionate dancers who wanted to create a welcoming, community-
              focused space for ballroom dancing in the Dayton area.
            </p>
            <p>
              Over the past 64 years, we have grown from a small gathering of
              enthusiasts into one of the most active ballroom dance clubs in
              Ohio. We have hosted hundreds of events, taught thousands of
              students, and built lasting friendships along the way.
            </p>
            <p>
              Our mission has always been simple: to share the joy of ballroom
              dancing with as many people as possible, regardless of age,
              experience level, or background. We believe that dance brings
              people together, and we are proud to be a cornerstone of the
              Dayton dance community.
            </p>
            <p>
              Today we are affiliated with the Miami Valley Dance Council and
              USA Dance, and we continue to partner with other local clubs to
              promote ballroom dancing throughout the region.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {[
            { year: "1960", event: "Club founded by a group of local dance enthusiasts" },
            { year: "1975", event: "First formal competition partnership with USA Dance" },
            { year: "1990", event: "Expanded curriculum to include Latin and rhythm dances" },
            { year: "2005", event: "Partnered with Miami Valley Dance Council" },
            { year: "2015", event: "Launched monthly themed dance nights" },
            { year: "2024", event: "Celebrating 64 years of dancing!" },
          ].map(({ year, event }) => (
            <div key={year} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-burgundy text-cream text-xs font-bold flex items-center justify-center shrink-0">
                  {year.slice(2)}
                </div>
                <div className="w-0.5 bg-cream-dark flex-1 mt-1" />
              </div>
              <div className="pb-4">
                <p className="text-gold font-semibold text-xs mb-1">{year}</p>
                <p className="text-sm text-muted leading-relaxed">{event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Membership */}
      <section className="mb-16 bg-burgundy/5 rounded-2xl p-8 border border-cream-dark">
        <h2 className="font-display text-2xl font-bold text-burgundy mb-3">
          Membership
        </h2>
        <p className="text-muted text-sm leading-relaxed mb-5 max-w-2xl">
          Becoming a member of the Dayton Ballroom Dance Club gives you access
          to discounted event tickets, priority registration for lessons, and a
          community of fellow dance enthusiasts. Membership runs annually.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:info@daytonballroom.org?subject=Membership%20Application"
            className="bg-burgundy hover:bg-burgundy-dark text-cream font-semibold px-6 py-3 rounded-full transition-colors text-sm"
          >
            Request Application
          </a>
          <a
            href="mailto:info@daytonballroom.org?subject=Membership%20Question"
            className="border-2 border-burgundy text-burgundy hover:bg-burgundy/5 font-semibold px-6 py-3 rounded-full transition-colors text-sm"
          >
            Ask a Question
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-16 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-2xl font-bold text-burgundy mb-5">
            Contact Us
          </h2>
          <div className="space-y-4 text-sm">
            <div className="flex gap-3 items-start">
              <span className="text-gold text-lg mt-0.5">📍</span>
              <div>
                <p className="font-medium text-dark">Location</p>
                <p className="text-muted">Dayton, Ohio</p>
                <a
                  href="/about"
                  className="text-gold text-xs hover:underline"
                >
                  View on map →
                </a>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-gold text-lg mt-0.5">✉️</span>
              <div>
                <p className="font-medium text-dark">Email</p>
                <a
                  href="mailto:info@daytonballroom.org"
                  className="text-gold hover:underline"
                >
                  info@daytonballroom.org
                </a>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-gold text-lg mt-0.5">📅</span>
              <div>
                <p className="font-medium text-dark">Events</p>
                <p className="text-muted">
                  Held on the first Saturday of each month, 7:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Email list signup */}
        <div className="bg-white rounded-2xl p-6 border border-cream-dark shadow-sm">
          <h3 className="font-display text-xl font-bold text-burgundy mb-2">
            Join Our Email List
          </h3>
          <p className="text-muted text-sm mb-4">
            Get event announcements, newsletters, and club updates delivered to
            your inbox.
          </p>
          <a
            href="mailto:info@daytonballroom.org?subject=Email%20List%20Signup"
            className="block w-full bg-gold hover:bg-gold-light text-dark font-semibold py-3 rounded-full transition-colors text-sm text-center"
          >
            Sign Up via Email
          </a>
        </div>
      </section>

      {/* Code of Regulations */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-burgundy mb-3">
          Code of Regulations
        </h2>
        <p className="text-muted text-sm leading-relaxed mb-4">
          The Dayton Ballroom Dance Club operates under a formal set of
          bylaws and regulations that govern membership, events, and club
          leadership.
        </p>
        <a
          href="mailto:info@daytonballroom.org?subject=Code%20of%20Regulations%20Request"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors"
        >
          Request a copy →
        </a>
      </section>

      {/* Affiliated clubs */}
      <section>
        <h2 className="font-display text-2xl font-bold text-burgundy mb-3">
          Affiliated Clubs
        </h2>
        <p className="text-muted text-sm mb-6">
          We are proud to work alongside these fellow dance organizations in the
          Miami Valley area and beyond.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {affiliates.map(({ name, location }) => (
            <div
              key={name}
              className="bg-white rounded-xl p-4 border border-cream-dark shadow-sm text-center"
            >
              <p className="font-semibold text-dark text-sm">{name}</p>
              <p className="text-muted text-xs mt-1">{location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
