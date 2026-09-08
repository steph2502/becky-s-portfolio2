interface SectionHeadProps {
  tag: string;
  title: string;
  description?: string;
  dark?: boolean;
  showAccent?: boolean;
  className?: string;
}

export default function SectionHead({
  tag,
  title,
  description,
  dark = false,
  showAccent = true,
  className = "",
}: SectionHeadProps) {
  return (
    <div className={`mb-14 max-w-[600px] ${className}`}>
      <div
        className={`mb-[14px] flex items-center gap-[10px] font-bold tracking-[0.02em] ${
          showAccent
            ? "text-[0.82rem] before:block before:h-[2px] before:w-[22px] before:bg-gold"
            : "text-[1.05rem]"
        } ${dark ? "text-gold-soft" : "text-maroon"}`}
      >
        {tag}
      </div>
      <h2
        className={`font-serif text-[clamp(1.9rem,3vw,2.5rem)] font-semibold leading-[1.15] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-[14px] max-w-[520px] ${
            dark ? "text-cream/65" : "text-[#5a5a5a]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
