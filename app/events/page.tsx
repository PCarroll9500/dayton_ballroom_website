import type { Metadata } from "next";
import EventCard from "@/components/EventCard";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Events · Dayton Ballroom Dance Club",
  description:
    "Upcoming dance events, themed nights, and the monthly newsletter from the Dayton Ballroom Dance Club.",
};

const upcomingEvents = [
  {
    date: "June 7, 2026",
    time: "7:30 PM",
    theme: "Derby Hats Night",
    description:
      "Break out your finest derby hats for an elegant evening of ballroom dancing. Light refreshments provided. All levels welcome.",
    location: "Dayton, OH",
    highlight: true,
  },
  {
    date: "July 5, 2026",
    time: "7:30 PM",
    theme: "Red, White & Blue Dance",
    description:
      "Celebrate summer with a patriotic-themed dance night. Wear your red, white, and blue attire.",
    location: "Dayton, OH",
  },
  {
    date: "August 2, 2026",
    time: "7:30 PM",
    theme: "Flower Power Night",
    description:
      "A colorful, floral-themed dance evening. Bring your favorite floral attire and dance the night away.",
    location: "Dayton, OH",
  },
  {
    date: "September 6, 2026",
    time: "7:30 PM",
    theme: "Back to School Dance",
    description:
      "Kick off the fall season with a fun dance night. School colors encouraged!",
    location: "Dayton, OH",
  },
  {
    date: "October 4, 2026",
    time: "7:30 PM",
    theme: "Halloween Masquerade",
    description:
      "Our annual Halloween masquerade ball. Come in costume and dance the spooky night away.",
    location: "Dayton, OH",
  },
  {
    date: "November 1, 2026",
    time: "7:30 PM",
    theme: "Harvest Dance",
    description:
      "A warm autumn evening of dancing with fall-themed decorations and refreshments.",
    location: "Dayton, OH",
  },
];

const pastEvents = [
  {
    date: "April 5, 2026",
    time: "7:30 PM",
    theme: "Spring Fling",
    description: "A celebration of spring with pastel attire encouraged.",
    location: "Dayton, OH",
  },
  {
    date: "March 1, 2026",
    time: "7:30 PM",
    theme: "DBDC Shirts Night",
    description: "Show your club pride by wearing your Dayton Ballroom shirts.",
    location: "Dayton, OH",
  },
  {
    date: "February 1, 2026",
    time: "7:30 PM",
    theme: "Valentine's Dance",
    description:
      "A romantic Valentine's evening of ballroom dancing with red and pink attire encouraged.",
    location: "Dayton, OH",
  },
];

export default function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeader
        title="Events & Dance Nights"
        subtitle="We hold dance nights throughout the year — themed evenings open to members and guests alike. All experience levels are welcome."
      />

      {/* Upcoming */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-dark mb-6 flex items-center gap-3">
          <span className="inline-block w-3 h-3 rounded-full bg-gold" />
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={event.theme} {...event} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mb-16 bg-burgundy/5 rounded-2xl p-8 border border-cream-dark">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-burgundy mb-2">
              Event Newsletter
            </h2>
            <p className="text-muted text-sm leading-relaxed max-w-lg">
              Stay up to date with all DBDC events, announcements, and club
              news. Our newsletter goes out monthly with event flyers and
              schedules.
            </p>
          </div>
          <a
            href="mailto:info@daytonballroom.org?subject=Newsletter%20Signup"
            className="bg-burgundy hover:bg-burgundy-dark text-cream font-semibold px-6 py-3 rounded-full transition-colors text-sm whitespace-nowrap"
          >
            Subscribe
          </a>
        </div>
      </section>

      {/* Past events */}
      <section>
        <h2 className="font-display text-2xl font-bold text-dark mb-6 flex items-center gap-3">
          <span className="inline-block w-3 h-3 rounded-full bg-muted/40" />
          Past Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-75">
          {pastEvents.map((event) => (
            <EventCard key={event.theme} {...event} />
          ))}
        </div>
      </section>
    </div>
  );
}
