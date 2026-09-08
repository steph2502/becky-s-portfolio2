"use client";

import { motion, useReducedMotion } from "framer-motion";
import RevealSection from "./RevealSection";
import SectionHead from "./SectionHead";
import { leadershipItems } from "@/lib/data";

export default function Leadership() {
  const shouldReduceMotion = useReducedMotion();

  const list = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemAnim = shouldReduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, x: -18 },
        show: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
        },
      };

  const lineAnim = shouldReduceMotion
    ? undefined
    : {
        initial: { scaleY: 0 },
        whileInView: { scaleY: 1 },
        viewport: { once: true, amount: 0.2 },
        transition: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1] as const,
          delay: 0.15,
        },
      };

  return (
    <RevealSection id="leadership" className="bg-cream py-[110px]">
      <div className="wrap">
        <SectionHead
          tag="Leadership Experience"
          title="Where she has led and served."
          description="Leadership roles spanning ministry administration, academic coordination, and campus-wide initiatives."
          showAccent={false}
        />

        <div className="relative pl-9">
          <motion.div
            aria-hidden
            className="absolute bottom-[6px] left-[6px] top-[6px] w-px origin-top bg-line"
            {...(lineAnim ?? {})}
          />

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {leadershipItems.map((item) => (
              <motion.div
                key={`${item.org}-${item.period}`}
                variants={itemAnim}
                className="relative pb-11 last:pb-0 before:absolute before:-left-9 before:top-[5px] before:h-[13px] before:w-[13px] before:rounded-full before:border-2 before:border-maroon before:bg-cream"
              >
                <div className="mb-[6px] text-[0.82rem] font-bold text-maroon">
                  {item.period}
                </div>
                <h3 className="mb-[2px] font-serif text-[1.2rem] font-semibold text-ink">
                  {item.role}
                </h3>
                <div className="mb-3 font-serif text-[0.94rem] italic text-[#6a6a6a]">
                  {item.org}
                </div>
                {item.bullets && (
                  <ul className="list-disc space-y-[6px] pl-[18px] text-[0.94rem] text-[#4a4a4a]">
                    {item.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {item.note && (
                  <p className="text-[0.85rem] italic text-[#8a8a8a]">
                    {item.note}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </RevealSection>
  );
}
