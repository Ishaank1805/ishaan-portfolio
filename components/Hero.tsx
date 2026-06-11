"use client";
import { motion } from "motion/react";
import EmbeddingField from "./EmbeddingField";
import { ArrowRight } from "./icons";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

export default function Hero() {
  return (
    <header className="hero" id="hero">
      <EmbeddingField />
      <div className="wrap hero-inner">
        <motion.div className="hero-eyebrow eyebrow" {...fade(0)}>
          Undergraduate Researcher · IIIT Hyderabad
        </motion.div>
        <motion.h1 {...fade(0.08)}>
          I&apos;m interested in how machines<br />make sense of <em>language</em>.
        </motion.h1>
        <motion.p className="hero-sub" {...fade(0.18)}>
          I&apos;m <b>Ishaan Karan</b>, an undergraduate researcher at the Language Technologies Research
          Centre, <b>IIIT Hyderabad</b>. My focus is natural language processing, and most of what I do
          comes back to understanding how language models represent meaning.
        </motion.p>
        <motion.div className="hero-cta" {...fade(0.28)}>
          <a className="btn btn--primary" href="#research">See the research <ArrowRight /></a>
          <a className="btn btn--ghost" href="#contact">Get in touch</a>
        </motion.div>
      </div>
      <div className="hero-meta">
        <div className="scroll-hint"><span className="line" /> SCROLL</div>
        <div className="hm-right">LAT 17.4°N · HYDERABAD, INDIA</div>
      </div>
    </header>
  );
}
