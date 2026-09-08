import Image from "next/image";
import RevealSection from "./RevealSection";
import SectionHead from "./SectionHead";
import { traitList } from "@/lib/data";

export default function About() {
  return (
    <RevealSection id="about" className="bg-cream py-[110px]">
      <div className="wrap">
        <div className="grid grid-cols-1 items-start gap-10 min-[900px]:grid-cols-[0.9fr_1.1fr] min-[900px]:gap-[70px]">
          <div className="relative aspect-[4/5] overflow-hidden border border-line">
            <Image
              src="/images/becky-about.jpg"
              alt="Becky Anjola Lasore"
              fill
              className="object-cover object-top"
              sizes="(max-width: 900px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-maroon px-[26px] py-[22px] font-serif text-[0.95rem] italic text-cream">
              &ldquo;She leads with purpose and builds with impact.&rdquo;
            </div>
          </div>

          <div>
            <SectionHead
              tag="About"
              title="Building people. Leading change. Creating impact."
              className="mb-[26px]"
              showAccent={false}
            />
            <p className="mb-[18px] text-[1.05rem] leading-relaxed text-ink">
              Becky is a Financial Technology graduate at Covenant University
              with experience across digital banking, fintech operations, trade
              services, and treasury management.
            </p>
            <p className="mb-[18px] text-[1.05rem] leading-relaxed text-ink">
              Beyond finance, she is the CEO of Theokallia and ButtonUp.ng,
              where she explores entrepreneurship, leadership, and brand
              building. She is also a content creator who documents her journey
              on YouTube and Instagram, sharing her faith, experiences, and
              lessons with others.
            </p>
            <p className="mb-[18px] text-[1.05rem] leading-relaxed text-ink">
              Passionate about leadership and impact, Becky enjoys speaking at
              events and mentoring younger people, using her experiences to
              inspire and empower the next generation.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-[26px] gap-y-[14px] min-[900px]:grid-cols-2">
              {traitList.map((trait) => (
                <li
                  key={trait.label}
                  className="flex items-center gap-[10px] border-b border-line pb-3 text-[0.92rem] text-ink before:h-[6px] before:w-[6px] before:flex-none before:rounded-full before:bg-gold"
                >
                  {trait.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
