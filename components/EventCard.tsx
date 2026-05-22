interface EventCardProps {
  date: string;
  theme: string;
  description: string;
  time?: string;
  location?: string;
  highlight?: boolean;
  emoji?: string;
}

export default function EventCard({
  date,
  theme,
  description,
  time,
  location,
  highlight = false,
  emoji = "💃",
}: EventCardProps) {
  return (
    <div
      className={`rounded-2xl p-7 shadow-sm border transition-all hover:shadow-lg hover:-translate-y-0.5 ${
        highlight
          ? "bg-burgundy text-cream border-burgundy"
          : "bg-white border-cream-dark"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className={`text-xs font-semibold uppercase tracking-widest leading-relaxed ${
            highlight ? "text-gold-light" : "text-gold"
          }`}
        >
          {date}
          {time && (
            <>
              <br />
              {time}
            </>
          )}
        </div>
        <span className="text-2xl">{emoji}</span>
      </div>

      <h3
        className={`font-display text-2xl font-bold mb-3 leading-tight ${
          highlight ? "text-cream" : "text-burgundy"
        }`}
      >
        {theme}
      </h3>

      <p
        className={`text-base leading-relaxed ${
          highlight ? "text-cream/85" : "text-muted"
        }`}
      >
        {description}
      </p>

      {location && (
        <p
          className={`text-sm mt-4 flex items-center gap-1 ${
            highlight ? "text-cream/60" : "text-muted/70"
          }`}
        >
          <span>📍</span> {location}
        </p>
      )}

      {highlight && (
        <div className="mt-5 pt-4 border-t border-cream/20">
          <span className="text-xs text-gold-light uppercase tracking-widest font-semibold">
            ★ Next Event
          </span>
        </div>
      )}
    </div>
  );
}
