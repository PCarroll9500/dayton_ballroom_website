interface InstructorCardProps {
  name: string;
  title: string;
  bio: string;
  styles: string[];
}

export default function InstructorCard({
  name,
  title,
  bio,
  styles,
}: InstructorCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark hover:shadow-md transition-shadow">
      <div className="w-16 h-16 rounded-full bg-burgundy/10 flex items-center justify-center mb-4">
        <span className="font-display text-2xl font-bold text-burgundy">
          {name.charAt(0)}
        </span>
      </div>
      <h3 className="font-display text-xl font-bold text-burgundy mb-1">
        {name}
      </h3>
      <p className="text-gold text-sm font-medium mb-3">{title}</p>
      <p className="text-muted text-sm leading-relaxed mb-4">{bio}</p>
      <div className="flex flex-wrap gap-2">
        {styles.map((style) => (
          <span
            key={style}
            className="bg-cream-dark text-dark text-xs px-3 py-1 rounded-full"
          >
            {style}
          </span>
        ))}
      </div>
    </div>
  );
}
