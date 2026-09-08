import RevealSection from "./RevealSection";
import SectionHead from "./SectionHead";
import {
  technicalSkills,
  coreCompetencies,
  educationCards,
} from "@/lib/data";

function ChipRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-[10px]">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-[20px] border border-line bg-white px-4 py-[9px] text-[0.86rem] text-ink"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <RevealSection id="skills" className="bg-cream py-[110px]">
      <div className="wrap">
        <SectionHead tag="Toolkit" title="Skills & competencies." showAccent={false} />

        <div className="grid grid-cols-1 gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-[60px]">
          <div>
            <h4 className="mb-5 text-[0.85rem] font-bold tracking-[0.02em] text-maroon">
              TECHNICAL SKILLS
            </h4>
            <ChipRow items={technicalSkills} />
          </div>
          <div>
            <h4 className="mb-5 text-[0.85rem] font-bold tracking-[0.02em] text-maroon">
              CORE COMPETENCIES
            </h4>
            <ChipRow items={coreCompetencies} />
          </div>
        </div>

        <div className="mt-[70px]">
          <h4 className="mb-5 text-[0.85rem] font-bold tracking-[0.02em] text-maroon">
            EDUCATION &amp; CERTIFICATION
          </h4>
          <div className="grid grid-cols-1 gap-px border border-line bg-line min-[900px]:grid-cols-2">
            {educationCards.map((card) => (
              <div key={card.title} className="bg-white p-9">
                <div className="mb-[10px] text-[0.9rem] font-bold text-maroon">
                  {card.period}
                </div>
                <h4 className="mb-[6px] font-serif text-[1.15rem] font-semibold text-ink">
                  {card.title}
                </h4>
                <p className="text-[0.9rem] text-[#5a5a5a]">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
