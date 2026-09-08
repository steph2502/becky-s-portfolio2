import RevealSection from "./RevealSection";

export default function Quote() {
  return (
    <RevealSection className="relative bg-maroon py-[120px] text-center text-cream">
      <div className="wrap">
        <div className="mb-[10px] font-serif text-[3rem] text-gold">
          &ldquo;
        </div>
        <blockquote className="mx-auto mb-[22px] max-w-[720px] font-serif text-[clamp(1.5rem,3vw,2.3rem)] font-medium italic text-white">
          Well done is better than well said. Excellence is not an act, it&apos;s
          a habit.
        </blockquote>
        <cite className="text-[0.9rem] not-italic tracking-[0.03em] text-gold-soft">
          — Becky Anjola Lasore
        </cite>
      </div>
    </RevealSection>
  );
}
