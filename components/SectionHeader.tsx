interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-burgundy mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 bg-gold rounded-full ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
