import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import InstructorCard from "@/components/InstructorCard";

export const metadata: Metadata = {
  title: "Lessons · Dayton Ballroom Dance Club",
  description:
    "Ballroom dance lessons, schedule, curriculum, and instructor information from the Dayton Ballroom Dance Club.",
};

const schedule = [
  { day: "First Sunday", time: "2:00 PM – 4:00 PM", level: "Beginner", styles: "Waltz, Foxtrot" },
  { day: "Second Sunday", time: "2:00 PM – 4:00 PM", level: "Intermediate", styles: "Tango, Viennese Waltz" },
  { day: "Third Sunday", time: "2:00 PM – 4:00 PM", level: "Advanced", styles: "Quickstep, Foxtrot" },
  { day: "Fourth Sunday", time: "2:00 PM – 4:00 PM", level: "All Levels", styles: "Cha-Cha, Rumba, Swing" },
];

const instructors = [
  {
    name: "Margaret Williams",
    title: "Lead Instructor",
    bio: "Margaret has been teaching ballroom dance for over 20 years. A former competitive dancer, she brings warmth and expertise to every lesson.",
    styles: ["Waltz", "Foxtrot", "Viennese Waltz", "Quickstep"],
  },
  {
    name: "Robert Chen",
    title: "Latin Instructor",
    bio: "Robert specializes in Latin and rhythm dances. His high-energy teaching style makes learning fun for dancers of all levels.",
    styles: ["Cha-Cha", "Rumba", "Samba", "Swing"],
  },
  {
    name: "Patricia Moore",
    title: "Beginner Specialist",
    bio: "Patricia has a gift for welcoming new dancers. Her patient, encouraging approach has helped hundreds of beginners find their footing on the dance floor.",
    styles: ["Waltz", "Foxtrot", "Cha-Cha", "Swing"],
  },
];

const danceStyles = [
  {
    name: "Waltz",
    type: "Smooth",
    description:
      "A graceful, flowing dance in 3/4 time. The waltz is often the first dance taught to beginners.",
  },
  {
    name: "Foxtrot",
    type: "Smooth",
    description:
      "A smooth, traveling dance in 4/4 time known for its versatility and elegant appearance.",
  },
  {
    name: "Tango",
    type: "Smooth",
    description:
      "A passionate and dramatic dance characterized by sharp, staccato movements and close connection.",
  },
  {
    name: "Cha-Cha",
    type: "Latin",
    description:
      "A fun, flirtatious Latin dance with syncopated footwork and lively hip movement.",
  },
  {
    name: "Rumba",
    type: "Latin",
    description:
      "The 'dance of love' — a slow Latin dance with sensual hip action and romantic connection.",
  },
  {
    name: "Swing",
    type: "Rhythm",
    description:
      "An upbeat, energetic American dance style perfect for social dancing to jazz and big band music.",
  },
];

export default function LessonsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      <SectionHeader
        title="Lessons & Curriculum"
        subtitle="We offer structured lessons for all experience levels, from complete beginners to advanced dancers looking to refine their technique."
      />

      {/* Schedule */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-dark mb-6">
          Lesson Schedule
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-cream-dark shadow-sm">
          <table className="w-full bg-white text-sm">
            <thead>
              <tr className="bg-burgundy text-cream">
                <th className="text-left px-6 py-4 font-semibold">Day</th>
                <th className="text-left px-6 py-4 font-semibold">Time</th>
                <th className="text-left px-6 py-4 font-semibold">Level</th>
                <th className="text-left px-6 py-4 font-semibold">Dance Styles</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr
                  key={row.day}
                  className={i % 2 === 0 ? "bg-white" : "bg-cream/40"}
                >
                  <td className="px-6 py-4 font-medium text-dark">{row.day}</td>
                  <td className="px-6 py-4 text-muted">{row.time}</td>
                  <td className="px-6 py-4">
                    <span className="bg-burgundy/10 text-burgundy text-xs font-semibold px-3 py-1 rounded-full">
                      {row.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted">{row.styles}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted text-xs mt-3">
          * Lessons are held monthly. Check the{" "}
          <a href="/events" className="text-gold hover:underline">
            Events page
          </a>{" "}
          for exact dates and any schedule changes.
        </p>
      </section>

      {/* Dance styles */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-dark mb-6">
          Dance Styles We Teach
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {danceStyles.map((style) => (
            <div
              key={style.name}
              className="bg-white rounded-2xl p-6 border border-cream-dark shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-lg font-bold text-burgundy">
                  {style.name}
                </h3>
                <span className="text-xs bg-gold/15 text-gold font-semibold px-2 py-0.5 rounded-full">
                  {style.type}
                </span>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                {style.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructors */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-dark mb-6">
          Our Instructors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.name} {...instructor} />
          ))}
        </div>
      </section>

      {/* Videos */}
      <section>
        <h2 className="font-display text-2xl font-bold text-dark mb-3">
          Lesson Videos
        </h2>
        <p className="text-muted text-sm mb-6">
          Watch introductory lesson videos to get a feel for each dance style
          before attending your first class.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Introduction to Waltz", id: "hj4mTUMsAjY" },
            { title: "Foxtrot Basics", id: "9fO3KFPFnnA" },
            { title: "Cha-Cha for Beginners", id: "R8DmcJDW4c0" },
            { title: "Swing Dance Fundamentals", id: "L0Ld8EKGGk4" },
          ].map(({ title, id }) => (
            <div key={id} className="rounded-2xl overflow-hidden shadow-sm border border-cream-dark">
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="bg-white px-4 py-3">
                <p className="text-sm font-medium text-dark">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
