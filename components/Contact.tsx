import RevealSection from "./RevealSection";
import { contactInfo } from "@/lib/data";

export default function Contact() {
  return (
    <RevealSection id="contact" className="bg-maroon py-[110px] text-cream">
      <div className="wrap">
        <div className="grid grid-cols-1 items-center gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-[70px]">
          <div>
            <div className="mb-[14px] text-[1.05rem] font-bold tracking-[0.02em] text-gold-soft">
              Contact
            </div>
            <h2 className="mb-5 font-serif text-[clamp(2rem,3.4vw,2.7rem)] font-semibold text-white">
              Let&apos;s build something with impact.
            </h2>
            <p className="mb-9 max-w-[440px] text-cream/70">
              Open to Graduate Trainee opportunities in finance, operations,
              and business — and always glad to connect on fintech, brand, or
              community work.
            </p>
            <div className="flex flex-col gap-[18px]">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-[14px] border-b border-cream/[0.14] pb-[14px] text-[1rem] text-cream transition-colors duration-200 hover:text-gold-soft"
              >
                <span className="min-w-[76px] text-[0.78rem] tracking-[0.02em] text-gold-soft">
                  Email
                </span>
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phoneHref}`}
                className="flex items-center gap-[14px] border-b border-cream/[0.14] pb-[14px] text-[1rem] text-cream transition-colors duration-200 hover:text-gold-soft"
              >
                <span className="min-w-[76px] text-[0.78rem] tracking-[0.02em] text-gold-soft">
                  Phone
                </span>
                {contactInfo.phone}
              </a>
              <span className="flex items-center gap-[14px] border-b border-cream/[0.14] pb-[14px] text-[1rem] text-cream">
                <span className="min-w-[76px] text-[0.78rem] tracking-[0.02em] text-gold-soft">
                  Location
                </span>
                {contactInfo.location}
              </span>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[14px] border-b border-cream/[0.14] pb-[14px] text-[1rem] text-cream transition-colors duration-200 hover:text-gold-soft"
              >
                <span className="min-w-[76px] text-[0.78rem] tracking-[0.02em] text-gold-soft">
                  Instagram
                </span>
                @anjybecca
              </a>
              <a
                href={contactInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[14px] border-b border-cream/[0.14] pb-[14px] text-[1rem] text-cream transition-colors duration-200 hover:text-gold-soft"
              >
                <span className="min-w-[76px] text-[0.78rem] tracking-[0.02em] text-gold-soft">
                  YouTube
                </span>
                Watch on YouTube
              </a>
            </div>
          </div>

          <div className="border border-gold/30 bg-maroon-deep p-11">
            <h3 className="mb-[10px] font-serif text-[1.3rem] font-semibold text-white">
              Download Resume
            </h3>
            <p className="mb-[26px] text-[0.92rem] text-cream/65">
              Get the full picture — professional experience, leadership
              roles, and technical skills in one document.
            </p>
            <a
              href="/resume/becky-anjola-lasore-cv.pdf"
              download="Becky_Anjola_Lasore_CV.pdf"
              className="inline-flex items-center gap-2 rounded border border-transparent bg-gold px-[26px] py-[14px] text-[0.92rem] font-bold text-maroon-deep transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              Download CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
