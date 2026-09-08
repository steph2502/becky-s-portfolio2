"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import RevealSection from "./RevealSection";
import SectionHead from "./SectionHead";
import { experienceItems } from "@/lib/data";

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const list = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemAnim = shouldReduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
        },
      };

  return (
    <RevealSection
      id="experience"
      className="bg-maroon-deep py-[110px] text-cream"
    >
      <div className="wrap">
        <SectionHead
          tag="Professional Experience"
          title="Where she has built and delivered."
          description="A path through founder, brand, and financial-services roles across fintech and banking operations."
          dark
          showAccent={false}
        />

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {experienceItems.map((exp, index) => (
            <motion.div
              key={`${exp.org}-${exp.period}`}
              variants={itemAnim}
              className={`grid grid-cols-1 gap-[10px] border-b border-cream/[0.14] py-9 min-[900px]:grid-cols-[200px_1fr] min-[900px]:gap-10 ${
                index === 0 ? "pt-0" : ""
              } ${index === experienceItems.length - 1 ? "border-b-0" : ""}`}
            >
              <div>
                <div className="text-[0.88rem] font-bold tracking-[0.02em] text-gold-soft">
                  {exp.period}
                </div>
                {exp.logo && (
                  <div className="mt-4 flex h-16 w-36 items-center justify-center overflow-hidden rounded-sm bg-white p-2 min-[900px]:h-20 min-[900px]:w-44">
                    <Image
                      src={exp.logo}
                      alt={`${exp.org} logo`}
                      width={200}
                      height={80}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}
              </div>
              <div>
                <h3 className="mb-1 font-serif text-[1.35rem] font-semibold text-white">
                  {exp.role}
                </h3>
                <div className="mb-4 font-serif text-[0.95rem] italic text-gold-soft">
                  {exp.org}
                </div>
                <ul className="list-disc space-y-2 pl-[18px] text-[0.95rem] text-cream/[0.72]">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </RevealSection>
  );
}
