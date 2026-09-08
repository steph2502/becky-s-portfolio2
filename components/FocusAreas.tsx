import RevealSection from "./RevealSection";
import SectionHead from "./SectionHead";
import { focusAreas } from "@/lib/data";

export default function FocusAreas() {
  return (
    <RevealSection className="bg-cream pb-[110px]">
      <div className="wrap">
        <SectionHead
          tag="Focus"
          title="Where her work shows up."
          description="Four areas that define how she builds, leads, and grows."
          showAccent={false}
          className="mb-10"
        />

        <div className="grid grid-cols-1 gap-px border border-line bg-line min-[560px]:grid-cols-2 min-[900px]:grid-cols-4">
          {focusAreas.map((area) => (
            <div key={area.number} className="bg-white px-7 py-[38px]">
              <h4 className="mb-[10px] font-serif text-[1.15rem] font-semibold text-ink">
                {area.title}
              </h4>
              <p className="text-[0.92rem] leading-relaxed text-[#5a5a5a]">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
