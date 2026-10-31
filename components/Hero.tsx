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
          Undergraduate Researcher · LTRC, IIIT Hyderabad
        </motion.div>
        <motion.h1 {...fade(0.08)}>
          I&apos;m interested in how machines<br />make sense of <em>language</em>.
        </motion.h1>
        <motion.p className="hero-sub" {...fade(0.18)}>
          I&apos;m <b>Ishaan Karan</b>, a computer science and computational linguistics student at
          <b> IIIT Hyderabad</b>. I work on NLP, interpretable deep learning, long-document
          understanding, and information retrieval at the Language Technologies Research Centre.
          My research includes an oral paper at EMNLP 2026 and a second-place system at SemEval 2026.
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
