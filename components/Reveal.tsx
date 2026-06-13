"use client";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export default function Reveal({
  children, className, delay = 0,
}: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y: 44, scale: 0.97 };
  const shown = reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 };
  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}