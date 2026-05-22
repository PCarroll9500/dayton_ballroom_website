import Link from "next/link";
import EventCard from "@/components/EventCard";
import SectionHeader from "@/components/SectionHeader";

function DancingCouple() {
  return (
    <svg
      viewBox="0 0 260 340"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      {/* MAN (left) */}
      {/* Head */}
      <ellipse cx="88" cy="34" rx="19" ry="21" fill="white" fillOpacity="0.85" />
      {/* Torso / suit */}
      <path
        d="M70 55 Q88 67 106 55 L109 128 Q88 140 67 128 Z"
        fill="white"
        fillOpacity="0.85"
      />
      {/* Lapels */}
      <path
        d="M88 55 L80 80 L88 75 L96 80 L88 55Z"
        fill="white"
        fillOpacity="0.5"
      />
      {/* Left arm raised — holding partner's hand */}
      <path
        d="M106 72 Q130 55 150 52"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right arm — at partner's back */}
      <path
        d="M70 78 Q52 98 48 110"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Legs in step */}
      <path
        d="M78 128 Q68 190 60 240"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="15"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M98 128 Q112 185 118 235"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="15"
        strokeLinecap="round"
        fill="none"
      />

      {/* WOMAN (right) */}
      {/* Hair bun */}
      <circle cx="183" cy="18" r="11" fill="white" fillOpacity="0.85" />
      {/* Head */}
      <ellipse cx="178" cy="34" rx="17" ry="20" fill="white" fillOpacity="0.85" />
      {/* Torso */}
      <path
        d="M162 54 Q178 65 194 54 L196 105 Q178 114 160 105 Z"
        fill="white"
        fillOpacity="0.85"
      />
      {/* Flowing ball-gown skirt */}
      <path
        d="M160 105 Q138 165 112 250 Q148 232 178 238 Q208 232 244 250 Q218 165 196 105 Z"
        fill="white"
        fillOpacity="0.8"
      />
      {/* Left arm on man's shoulder */}
      <path
        d="M162 68 Q130 72 106 72"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right hand held up */}
      <path
        d="M194 62 Q165 52 150 52"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Decorative musical notes */}
      <text x="210" y="80" fontSize="28" fill="white" fillOpacity="0.3">♪</text>
      <text x="28" y="60" fontSize="20" fill="white" fillOpacity="0.2">♫</text>
      <text x="220" y="160" fontSize="16" fill="white" fillOpacity="0.2">♩</text>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-burgundy text-cream overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 65% 40%, #9B2550 0%, #7C1D3F 55%, #4A1026 100%)",
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white'%3E%3Cpath d='M40 0 L42 38 L80 40 L42 42 L40 80 L38 42 L0 40 L38 38 Z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32 flex items-center gap-8">
          {/* Text */}
          <div className="flex-1">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-5">
              Dayton, Ohio · Est. 1960
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-xl">
              Dayton Ballroom<br />Dance Club
            </h1>
            <p className="text-cream/85 text-lg sm:text-xl leading-relaxed max-w-lg mb-4">
              64 years of quality dance instruction and lasting friendships.
            </p>
            <p className="text-cream/70 text-base leading-relaxed max-w-lg mb-10">
              Whether you&apos;ve never set foot on a dance floor or you&apos;ve
              been dancing for decades — you are warmly welcome here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/events"
                className="bg-gold hover:bg-gold-light text-dark font-semibold px-8 py-4 rounded-full transition-colors shadow-md text-base"
              >
                Upcoming Events
              </Link>
              <Link
                href="/lessons"
                className="border-2 border-cream/60 hover:border-cream hover:bg-cream/10 text-cream font-semibold px-8 py-4 rounded-full transition-colors text-base"
              >
                Learn to Dance
              </Link>
            </div>
          </div>

          {/* Dancing couple silhouette */}
          <div className="hidden lg:flex items-end justify-center w-72 xl:w-80 shrink-0 opacity-90 -mb-8">
            <DancingCouple />
          </div>
        </div>
      </section>

      {/* Ornamental divider */}
      <div className="flex items-center justify-center gap-4 py-6 bg-cream-dark">
        <div className="h-px bg-gold/40 w-24" />
        <span className="text-gold text-2xl">♦</span>
        <div className="h-px bg-gold/40 w-24" />
      </div>

      {/* Next Dance highlight */}
      <section className="bg-cream-dark pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl p-7 shadow-sm border border-cream-dark">
            <div className="text-4xl">💃</div>
            <div className="flex-1">
              <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-1">
                Next Dance Night
              </p>
              <h2 className="font-display text-2xl font-bold text-burgundy mb-1">
                Derby Hats Night
              </h2>
              <p className="text-muted">
                Saturday, June 7, 2026 · 7:30 PM · Wear your best derby hat!
                Light refreshments provided.
              </p>
            </div>
            <Link
              href="/events"
              className="bg-burgundy hover:bg-burgundy-dark text-cream font-semibold px-7 py-4 rounded-full transition-colors text-base whitespace-nowrap"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>

      {/* Why Dance? — health benefits */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeader
          title="Why Ballroom Dancing?"
          subtitle="Dancing is one of the best things you can do for your body, mind, and spirit — at any age."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            {
              icon: "🫀",
              title: "Heart Health",
              body: "Regular dancing improves cardiovascular fitness just like walking or cycling — with a lot more fun.",
            },
            {
              icon: "🧠",
              title: "Mental Sharpness",
              body: "Learning steps and patterns keeps your mind active. Studies show dancing reduces dementia risk.",
            },
            {
              icon: "⚖️",
              title: "Balance & Posture",
              body: "Ballroom dancing strengthens core muscles and improves balance, helping prevent falls.",
            },
            {
              icon: "💛",
              title: "Social Connection",
              body: "Dancing with others builds lasting friendships and brings genuine joy to every evening.",
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-7 shadow-sm border border-cream-dark text-center flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="font-display text-xl font-bold text-burgundy mb-3">
                {title}
              </h3>
              <p className="text-muted text-base leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature strip */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Everything You Need to Dance"
            subtitle="From your very first lesson to years of joyful dancing — we're here for all of it."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: "🎵",
                title: "Monthly Lessons",
                body: "Patient, friendly instruction for all levels. Complete beginners are always welcome — no partner needed.",
                href: "/lessons",
                cta: "View Schedule",
              },
              {
                icon: "🎉",
                title: "Dance Nights",
                body: "Fun themed evenings held the first Saturday of every month. Come dance, socialize, and enjoy refreshments.",
                href: "/events",
                cta: "See Events",
              },
              {
                icon: "🤝",
                title: "Warm Community",
                body: "Our members look out for each other. Many of our friendships have lasted 20, 30, even 40 years.",
                href: "/about",
                cta: "Our Story",
              },
            ].map(({ icon, title, body, href, cta }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark flex flex-col"
              >
                <div className="text-5xl mb-5">{icon}</div>
                <h3 className="font-display text-2xl font-bold text-burgundy mb-3">
                  {title}
                </h3>
                <p className="text-muted text-base leading-relaxed flex-1">{body}</p>
                <Link
                  href={href}
                  className="mt-5 text-base font-semibold text-gold hover:text-gold-light transition-colors inline-flex items-center gap-1"
                >
                  {cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px bg-gold/40 w-16" />
          <span className="text-gold text-xl font-display italic">What Our Members Say</span>
          <div className="h-px bg-gold/40 w-16" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              quote:
                "I joined at 68 not knowing a single step. Within three months I was dancing the waltz. The instructors are so patient and the people are just wonderful.",
              name: "Dorothy M.",
              detail: "Member for 8 years",
            },
            {
              quote:
                "After my husband passed, I wasn't sure I'd ever feel like myself again. This club gave me a reason to get dressed up and go out. It saved me, truly.",
              name: "Barbara H.",
              detail: "Member for 12 years",
            },
            {
              quote:
                "My doctor told me to find something active and social. I found the Dayton Ballroom Club and I've never looked back. Best decision I ever made.",
              name: "Harold T.",
              detail: "Member for 5 years",
            },
          ].map(({ quote, name, detail }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-8 border border-cream-dark shadow-sm flex flex-col"
            >
              <p className="text-gold text-4xl font-display leading-none mb-4">&ldquo;</p>
              <p className="text-dark text-base leading-relaxed flex-1 italic">
                {quote}
              </p>
              <div className="mt-6 pt-4 border-t border-cream-dark">
                <p className="font-semibold text-burgundy">{name}</p>
                <p className="text-muted text-sm">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming events preview */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Upcoming Events"
            subtitle="All experience levels welcome. Come as you are."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <EventCard
              date="June 7, 2026"
              time="7:30 PM"
              theme="Derby Hats Night"
              description="Break out your finest derby hat for a lovely evening of ballroom dancing. Light refreshments provided."
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
              description="A colorful, floral-themed dance evening. Bring your favorite floral attire."
              location="Dayton, OH"
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/events"
              className="bg-burgundy hover:bg-burgundy-dark text-cream font-semibold px-10 py-4 rounded-full transition-colors inline-block text-base"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* About + stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="A Club Built on Fellowship"
              subtitle="Since 1960, we've been bringing people together through the joy of dance in Dayton, Ohio."
            />
            <p className="text-muted text-base leading-relaxed mb-4">
              We are a non-profit organization dedicated to promoting and
              preserving ballroom dancing in the Dayton area. Our members range
              from absolute beginners to experienced dancers, all united by a
              love of dance, music, and community.
            </p>
            <p className="text-muted text-base leading-relaxed mb-6">
              No experience is needed, no partner is required, and there is
              never any pressure. We simply love to dance and we&apos;d love
              for you to join us.
            </p>
            <Link
              href="/about"
              className="text-base font-semibold text-gold hover:text-gold-light transition-colors"
            >
              Our History →
            </Link>
          </div>
          <div className="bg-burgundy rounded-2xl p-10">
            <div className="grid grid-cols-2 gap-8 text-center">
              {[
                { stat: "64+", label: "Years of Dancing" },
                { stat: "12", label: "Events Per Year" },
                { stat: "6+", label: "Dance Styles" },
                { stat: "100+", label: "Active Members" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <div className="font-display text-5xl font-bold text-gold mb-2">
                    {stat}
                  </div>
                  <div className="text-cream/80 text-base">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-burgundy text-cream py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl mb-4">🕺💃</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready to Take the Floor?
          </h2>
          <p className="text-cream/80 text-lg leading-relaxed mb-8">
            Our next dance is just around the corner. Come for the dancing,
            stay for the friendships.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/events"
              className="bg-gold hover:bg-gold-light text-dark font-semibold px-10 py-4 rounded-full transition-colors text-base shadow-md"
            >
              See the Next Event
            </Link>
            <Link
              href="/about"
              className="border-2 border-cream/50 hover:border-cream hover:bg-cream/10 text-cream font-semibold px-10 py-4 rounded-full transition-colors text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
