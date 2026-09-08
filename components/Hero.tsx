"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { essencePills } from "@/lib/data";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const item = shouldReduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 22 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
        },
      };

  return (
    <section
      id="home"
      className="hero-texture relative flex min-h-screen items-center overflow-hidden bg-maroon-deep pb-20 pt-[110px] text-cream"
      style={{
        backgroundImage:
          "radial-gradient(circle at 85% 12%, rgba(200,164,94,0.14), transparent 45%)",
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="wrap relative z-[2] grid grid-cols-1 items-center gap-[60px] min-[900px]:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.div
            variants={item}
            className="mb-[22px] text-[0.85rem] tracking-[0.04em] text-gold-soft"
          >
            FINANCE &middot; OPERATIONS &middot; BRAND STRATEGY &middot; LEADERSHIP
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-[22px] font-serif text-[clamp(2.6rem,4.6vw,3.9rem)] font-semibold leading-[1.15] text-white"
          >
            Becky Anjola <em className="font-medium italic text-gold-soft">Lasore</em>
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-[34px] max-w-[480px] text-[1.08rem] font-light text-cream/85"
          >
            Finance and operations professional focused on building reliable
            systems, strengthening teams, and driving measurable organisational
            growth.
          </motion.p>

          <motion.div
            variants={item}
            className="mb-[46px] flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded border border-transparent bg-gold px-[26px] py-[14px] text-[0.92rem] font-bold text-maroon-deep transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded border border-cream/50 px-[26px] py-[14px] text-[0.92rem] text-cream transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-gold-soft"
            >
              View Experience
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-[10px]">
            {essencePills.map((pill, index) =>
              shouldReduceMotion ? (
                <span
                  key={pill.label}
                  className="rounded-[20px] border border-gold/40 px-[14px] py-[7px] text-[0.78rem] text-gold-soft"
                >
                  {pill.label}
                </span>
              ) : (
                <motion.span
                  key={pill.label}
                  className="rounded-[20px] border border-gold/40 px-[14px] py-[7px] text-[0.78rem] text-gold-soft"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  whileHover={{
                    scale: 1.06,
                    borderColor: "rgba(200,164,94,0.9)",
                  }}
                >
                  {pill.label}
                </motion.span>
              )
            )}
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden border border-gold/35 min-[900px]:mx-0 min-[900px]:max-w-none min-[900px]:min-h-[480px] min-[900px]:aspect-auto"
        >
          <Image
            src="/images/becky-about.jpg"
            alt="Becky Anjola Lasore"
            fill
            priority
            sizes="(max-width: 900px) 340px, 40vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/92 to-transparent px-[28px] pb-[28px] pt-28">
            <div className="mb-4 flex items-end justify-between gap-3">
              <div>
                <div className="text-[0.7rem] uppercase tracking-[0.06em] text-gold-soft">
                  At a glance
                </div>
                <div className="mt-1 font-serif text-[1.05rem] text-white">
                  Founder &amp; CEO, Theokallia
                </div>
                <div className="mt-1 text-[0.85rem] text-cream/75">
                  Fintech &middot; Banking &middot; Treasury
                </div>
                <div className="mt-1 text-[0.85rem] text-cream/75">
                  Covenant University &apos;26
                </div>
              </div>
              <div className="shrink-0 overflow-hidden rounded-sm bg-white px-2 py-1.5">
                <Image
                  src="/images/theokallia-logo.png"
                  alt="Theokallia logo"
                  width={100}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
            <div className="border-t border-gold/30 pt-3 font-serif text-[1.1rem] italic leading-snug text-gold-soft">
              Purpose-driven. People-focused. Performance-led.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
