"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Delay in seconds before the reveal animation starts. */
  delay?: number;
}

/**
 * Wraps a section (or block) with a single, subtle fade/slide-up reveal
 * that triggers once when it scrolls into view. Respects
 * prefers-reduced-motion by disabling the animation entirely.
 */
export default function RevealSection({
  children,
  className,
  id,
  delay = 0,
}: RevealSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  );
}
