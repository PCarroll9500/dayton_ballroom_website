interface EventCardProps {
  date: string;
  theme: string;
  description: string;
  time?: string;
  location?: string;
  highlight?: boolean;
}

export default function EventCard({
  date,
  theme,
  description,
  time,
  location,
  highlight = false,
}: EventCardProps) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-sm border transition-shadow hover:shadow-md ${
        highlight
          ? "bg-burgundy text-cream border-burgundy"
          : "bg-white border-cream-dark"
      }`}
    >
      <div
        className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
          highlight ? "text-gold-light" : "text-gold"
        }`}
      >
        {date}
        {time && ` · ${time}`}
      </div>
      <h3
        className={`font-display text-xl font-bold mb-2 ${
          highlight ? "text-cream" : "text-burgundy"
        }`}
      >
        {theme}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          highlight ? "text-cream/80" : "text-muted"
        }`}
      >
        {description}
      </p>
      {location && (
        <p
          className={`text-xs mt-3 ${
            highlight ? "text-cream/60" : "text-muted/70"
          }`}
        >
          {location}
        </p>
      )}
    </div>
  );
}
