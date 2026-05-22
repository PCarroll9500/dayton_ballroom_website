import Link from "next/link";
import EventCard from "@/components/EventCard";
import SectionHeader from "@/components/SectionHeader";

function DancingCouple() {
  return (
    <svg
      viewBox="0 0 280 360"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      {/* === MAN (left, in tuxedo) === */}
      {/* Head */}
      <circle cx="95" cy="38" r="24" fill="white" fillOpacity="0.92" />
      {/* Tuxedo torso */}
      <path
        d="M72 62 Q95 74 118 62 L121 148 Q95 160 69 148 Z"
        fill="white"
        fillOpacity="0.9"
      />
      {/* Tuxedo lapels */}
      <path
        d="M95 62 L85 95 L95 88 L105 95 L95 62Z"
        fill="white"
        fillOpacity="0.38"
      />
      {/* Bow tie */}
      <path d="M88 63 L95 68 L102 63 L95 59 Z" fill="white" fillOpacity="0.55" />
      {/* Left arm raised — holding partner's hand aloft */}
      <path
        d="M118 80 C136 66, 154 57, 168 52"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right arm guiding partner's back */}
      <path
        d="M72 86 C57 100, 50 114, 48 126"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      {/* Legs mid-step */}
      <path
        d="M83 148 C74 192, 66 226, 60 264"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M107 148 C118 190, 124 222, 128 260"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />

      {/* === WOMAN (right, in ball gown) === */}
      {/* Elegant updo */}
      <ellipse cx="200" cy="16" rx="15" ry="10" fill="white" fillOpacity="0.88" />
      <circle cx="194" cy="24" rx="9" ry="9" fill="white" fillOpacity="0.88" />
      {/* Head */}
      <circle cx="196" cy="37" r="22" fill="white" fillOpacity="0.92" />
      {/* Torso */}
      <path
        d="M178 59 Q196 70 214 59 L216 112 Q196 122 176 112 Z"
        fill="white"
        fillOpacity="0.9"
      />
      {/* Left arm resting on man's shoulder */}
      <path
        d="M178 74 C162 78, 142 82, 118 80"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right arm raised to join man's left hand */}
      <path
        d="M214 72 C228 64, 244 56, 256 50"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      {/* BALL GOWN — sweeping skirt */}
      <path
        d="M176 112 C156 155, 126 210, 100 295
           C136 272, 182 264, 214 266
           C246 264, 272 248, 278 238
           C254 192, 230 150, 216 112 Z"
        fill="white"
        fillOpacity="0.85"
      />
      {/* Gown sheen layer */}
      <path
        d="M190 112 C176 152, 156 200, 142 262
           C168 254, 202 252, 230 256
           C252 248, 270 234, 278 238
           C256 192, 234 152, 216 112 Z"
        fill="white"
        fillOpacity="0.14"
      />

      {/* Floating musical notes */}
      <text x="30"  y="55"  fontSize="22" fill="white" fillOpacity="0.22">♪</text>
      <text x="232" y="88"  fontSize="28" fill="white" fillOpacity="0.18">♫</text>
      <text x="240" y="175" fontSize="17" fill="white" fillOpacity="0.15">♩</text>
      <text x="22"  y="200" fontSize="14" fill="white" fillOpacity="0.14">♬</text>
    </svg>
  );
}

const dances = [
  {
    name: "Waltz",
    type: "Smooth",
    mood: "Graceful & Timeless",
    desc: "Glide around the floor in sweeping 3/4 time — the dance of royalty and romance.",
    color: "border-burgundy",
    badge: "bg-burgundy/10 text-burgundy",
  },
  {
    name: "Foxtrot",
    type: "Smooth",
    mood: "Elegant & Versatile",
    desc: "The most beloved social dance — smooth, charming, and perfect for any occasion.",
    color: "border-gold",
    badge: "bg-gold/10 text-gold",
  },
  {
    name: "Tango",
    type: "Smooth",
    mood: "Passionate & Bold",
    desc: "Sharp, dramatic, and deeply expressive. Every step tells a story.",
    color: "border-dark",
    badge: "bg-dark/10 text-dark",
  },
  {
    name: "Cha-Cha",
    type: "Latin",
    mood: "Lively & Playful",
    desc: "Infectious rhythm and joyful hip action — impossible to do without a smile.",
    color: "border-gold",
    badge: "bg-gold/10 text-gold",
  },
  {
    name: "Rumba",
    type: "Latin",
    mood: "Warm & Romantic",
    desc: "Slow, connected, and tender. Often called the dance of love — and for good reason.",
    color: "border-burgundy",
    badge: "bg-burgundy/10 text-burgundy",
  },
  {
    name: "Swing",
    type: "Rhythm",
    mood: "Upbeat & Pure Joy",
    desc: "Big-band energy, happy feet, and a smile on every face in the room.",
    color: "border-dark",
    badge: "bg-dark/10 text-dark",
  },
];

const faqs = [
  {
    icon: "👫",
    q: "Do I need to bring a partner?",
    a: "Not at all! We rotate partners during lessons so you'll dance with many friendly faces. Many of our most devoted members have always come solo — and they wouldn't have it any other way.",
  },
  {
    icon: "🌱",
    q: "What if I've never danced before?",
    a: "You're in exactly the right place. Our instructors start from the very beginning, and they are wonderfully patient. Most of our members started right where you are. After one evening, you'll feel completely at home.",
  },
  {
    icon: "👗",
    q: "What should I wear?",
    a: "Smart casual is perfect — a nice dress, slacks, whatever makes you feel good. The one important thing: shoes with smooth soles (not rubber sneakers). Many of our members love to dress up a little, and we think that's half the fun!",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section
        className="relative bg-burgundy text-cream overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 60% 40%, #9B2550 0%, #7C1D3F 50%, #3E0D20 100%)",
        }}
      >
        {/* Dance floor tile pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='24' height='24' fill='white'/%3E%3Crect x='24' y='24' width='24' height='24' fill='white'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32 flex items-center gap-6">
          {/* Copy */}
          <div className="flex-1 max-w-xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-5">
              Dayton, Ohio &nbsp;·&nbsp; Established 1960
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Dayton Ballroom<br />Dance Club
            </h1>
            <p className="text-cream/90 text-lg sm:text-xl leading-relaxed mb-3">
              64 years of beautiful dancing and lasting friendships.
            </p>
            <p className="text-cream/70 text-base leading-relaxed mb-10">
              Whether you&apos;ve never set foot on a dance floor or you&apos;ve
              been dancing for decades — you are <em>warmly</em> welcome here.
              No partner needed. No experience required.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/events"
                className="bg-gold hover:bg-gold-light text-dark font-bold px-9 py-4 rounded-full transition-colors shadow-lg text-base"
              >
                See Upcoming Events
              </Link>
              <Link
                href="/lessons"
                className="border-2 border-cream/50 hover:border-cream hover:bg-cream/10 text-cream font-semibold px-9 py-4 rounded-full transition-colors text-base"
              >
                Learn to Dance
              </Link>
            </div>
          </div>

          {/* Dancing couple */}
          <div className="hidden lg:block w-72 xl:w-80 shrink-0 opacity-90 -mb-10 -mr-4">
            <DancingCouple />
          </div>
        </div>
      </section>

      {/* ─── ORNAMENTAL DIVIDER ────────────────────────────── */}
      <div className="flex items-center justify-center gap-3 py-5 bg-cream-dark">
        <div className="h-px bg-gold/30 w-20" />
        <span className="text-gold/60 text-lg">♩</span>
        <div className="h-px bg-gold/40 w-8" />
        <span className="text-gold text-2xl font-display">♦</span>
        <div className="h-px bg-gold/40 w-8" />
        <span className="text-gold/60 text-lg">♩</span>
        <div className="h-px bg-gold/30 w-20" />
      </div>

      {/* ─── NEXT DANCE BANNER ─────────────────────────────── */}
      <section className="bg-cream-dark pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-cream-dark flex flex-col sm:flex-row items-center gap-6">
            <div className="text-5xl">💃</div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-gold font-bold text-xs uppercase tracking-[0.18em] mb-1">
                ★ Next Dance Night
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-burgundy mb-1">
                Derby Hats Night
              </h2>
              <p className="text-muted text-base">
                Saturday, June 7, 2026 &nbsp;·&nbsp; Doors 7:00 PM &nbsp;·&nbsp; Dancing 7:30 PM
              </p>
              <p className="text-muted/70 text-sm mt-1">
                Wear your best derby hat — prizes for the most creative! Light refreshments provided.
              </p>
            </div>
            <Link
              href="/events"
              className="bg-burgundy hover:bg-burgundy-dark text-cream font-bold px-8 py-4 rounded-full transition-colors text-base whitespace-nowrap shadow-md"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DANCES WE LOVE ────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeader
          title="Dances We Love"
          subtitle="Six beautiful styles, one wonderful club. We'll teach you every one of them."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {dances.map(({ name, type, mood, desc, color, badge }) => (
            <div
              key={name}
              className={`bg-white rounded-2xl p-7 border-l-4 ${color} shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-2xl font-bold text-dark">
                  {name}
                </h3>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide ${badge}`}>
                  {type}
                </span>
              </div>
              <p className="text-gold text-sm font-semibold italic mb-3">{mood}</p>
              <p className="text-muted text-base leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-muted text-base">
          Not sure where to start?{" "}
          <Link href="/lessons" className="text-gold font-semibold hover:text-gold-light transition-colors">
            Our instructors will guide you →
          </Link>
        </p>
      </section>

      {/* ─── WHY DANCE ─────────────────────────────────────── */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Why Ballroom Dancing?"
            subtitle="It's one of the best things you can do for your body, your mind, and your spirit — at any age."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              {
                icon: "🫀",
                title: "Heart Health",
                body: "Regular dancing is as good for your heart as walking or cycling — with far more fun along the way.",
              },
              {
                icon: "🧠",
                title: "Mental Sharpness",
                body: "Learning steps keeps your mind active. Research shows dancing is one of the best ways to stay mentally sharp.",
              },
              {
                icon: "⚖️",
                title: "Balance & Posture",
                body: "Ballroom dancing strengthens your core and dramatically improves balance and posture.",
              },
              {
                icon: "💛",
                title: "True Friendship",
                body: "You&apos;ll find genuine warmth here. Many of our friendships have lasted decades.",
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 shadow-sm border border-cream-dark text-center flex flex-col items-center hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="font-display text-xl font-bold text-burgundy mb-3">
                  {title}
                </h3>
                <p className="text-muted text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── YOUR FIRST VISIT ──────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeader
          title="Your First Visit"
          subtitle="We know walking into something new can feel daunting. Here are the questions we hear most often."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {faqs.map(({ icon, q, a }) => (
            <div
              key={q}
              className="bg-white rounded-2xl p-8 border border-cream-dark shadow-sm"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-display text-xl font-bold text-burgundy mb-3">
                {q}
              </h3>
              <p className="text-muted text-base leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center bg-burgundy/5 rounded-2xl p-8 border border-cream-dark">
          <p className="font-display text-xl text-burgundy font-bold mb-2">
            Still have questions?
          </p>
          <p className="text-muted text-base mb-5">
            We are always happy to chat. Drop us an email and we&apos;ll get back to you warmly and promptly.
          </p>
          <a
            href="mailto:info@daytonballroom.org"
            className="bg-burgundy hover:bg-burgundy-dark text-cream font-bold px-9 py-4 rounded-full transition-colors inline-block text-base"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* ─── WHAT MEMBERS SAY ──────────────────────────────── */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px bg-gold/40 w-16" />
            <span className="font-display text-xl text-burgundy italic">
              What Our Members Say
            </span>
            <div className="h-px bg-gold/40 w-16" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I joined at 68 not knowing a single step. Within three months I was waltzing. The instructors are so patient, and the people are simply wonderful.",
                name: "Dorothy M.",
                detail: "Member for 8 years",
              },
              {
                quote:
                  "After my husband passed, I wasn't sure I'd feel like myself again. This club gave me a reason to get dressed up and go out. It truly saved me.",
                name: "Barbara H.",
                detail: "Member for 12 years",
              },
              {
                quote:
                  "My doctor said to find something active and social. Best advice I ever followed. I've never looked back, and I've made friends for life.",
                name: "Harold T.",
                detail: "Member for 5 years",
              },
            ].map(({ quote, name, detail }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-8 border border-cream-dark shadow-sm flex flex-col"
              >
                <p className="text-gold text-5xl font-display leading-none mb-4">&ldquo;</p>
                <p className="text-dark text-base leading-relaxed flex-1 italic">
                  {quote}
                </p>
                <div className="mt-6 pt-4 border-t border-cream-dark">
                  <p className="font-bold text-burgundy">{name}</p>
                  <p className="text-muted text-sm">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UPCOMING EVENTS ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeader
          title="Upcoming Events"
          subtitle="All experience levels welcome. Come as you are and leave with a smile."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <EventCard
            date="June 7, 2026"
            time="7:30 PM"
            theme="Derby Hats Night"
            description="Break out your finest derby hat for a lovely evening of ballroom dancing. Prizes for the most creative hat. Light refreshments provided."
            location="Dayton, OH"
            emoji="🎩"
            highlight
          />
          <EventCard
            date="July 5, 2026"
            time="7:30 PM"
            theme="Red, White & Blue Dance"
            description="Celebrate summer with a patriotic-themed dance night. Wear your red, white, and blue — and enjoy a wonderful evening."
            location="Dayton, OH"
            emoji="🇺🇸"
          />
          <EventCard
            date="August 2, 2026"
            time="7:30 PM"
            theme="Flower Power Night"
            description="A colorful, floral-themed dance evening. Bring your favorite floral attire and dance the summer night away."
            location="Dayton, OH"
            emoji="🌸"
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/events"
            className="bg-burgundy hover:bg-burgundy-dark text-cream font-bold px-10 py-4 rounded-full transition-colors inline-block text-base shadow-md"
          >
            See All Events
          </Link>
        </div>
      </section>

      {/* ─── FELLOWSHIP SECTION ────────────────────────────── */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="A Club Built on Fellowship"
                subtitle="Since 1960, we've been bringing people together through the joy of dance."
              />
              <p className="text-muted text-base leading-relaxed mb-4">
                We are a non-profit club dedicated to promoting ballroom dancing
                in the Dayton area. Our members range from absolute beginners to
                experienced dancers, all united by a love of music, movement, and
                each other.
              </p>
              <p className="text-muted text-base leading-relaxed mb-6">
                No experience needed. No partner required. No pressure, ever.
                We simply love to dance, and we&apos;d love for you to join us.
              </p>
              <Link
                href="/about"
                className="text-base font-bold text-gold hover:text-gold-light transition-colors"
              >
                Read Our History →
              </Link>
            </div>
            <div className="bg-burgundy rounded-2xl p-10">
              <div className="grid grid-cols-2 gap-8 text-center">
                {[
                  { stat: "64+", label: "Years of Dancing" },
                  { stat: "12", label: "Events Per Year" },
                  { stat: "6+", label: "Dance Styles" },
                  { stat: "100+", label: "Happy Members" },
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
        </div>
      </section>

      {/* ─── FIND US ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeader
          title="Come Find Us"
          subtitle="We dance the first Saturday of every month. Doors open at 7:00 PM, dancing starts at 7:30 PM."
          centered
        />
        <div className="rounded-2xl overflow-hidden border border-cream-dark shadow-lg" style={{ height: "420px" }}>
          <iframe
            src="https://www.google.com/maps?q=2150+Arbor+Blvd+Dayton+OH+45439&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dayton Ballroom Dance Club location"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-5 px-1">
          <p className="text-muted text-base">
            📍 Arbor Event Center, 2150 Arbor Blvd, Dayton, OH 45439 &nbsp;·&nbsp; 🕖 7:30 PM
          </p>
          <a
            href="https://maps.google.com/?q=2150+Arbor+Blvd+Dayton+OH+45439"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-semibold text-base hover:text-gold-light transition-colors whitespace-nowrap"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────────────────── */}
      <section
        className="text-cream py-16"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, #9B2550 0%, #7C1D3F 60%, #3E0D20 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-6xl mb-5">🕺💃</div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5 leading-tight">
            Ready to Take the Floor?
          </h2>
          <p className="text-cream/80 text-lg leading-relaxed mb-3">
            Our next dance night is just around the corner.
          </p>
          <p className="text-cream/65 text-base mb-10">
            Come for the dancing. Stay for the friendships that last a lifetime.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/events"
              className="bg-gold hover:bg-gold-light text-dark font-bold px-10 py-4 rounded-full transition-colors text-base shadow-lg"
            >
              See the Next Event
            </Link>
            <Link
              href="/about"
              className="border-2 border-cream/50 hover:border-cream hover:bg-cream/10 text-cream font-bold px-10 py-4 rounded-full transition-colors text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
