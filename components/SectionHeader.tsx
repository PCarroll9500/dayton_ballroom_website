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
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-lg sm:text-xl max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-1 w-20 bg-gold rounded-full ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
