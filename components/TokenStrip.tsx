"use client";
import { motion } from "motion/react";

// "how language models represent meaning" as subword tokens, wrapped in BERT specials
const TOKENS: { t: string; sp?: boolean }[] = [
  { t: "[CLS]", sp: true },
  { t: "▁how" }, { t: "▁language" }, { t: "▁model" }, { t: "s" },
  { t: "▁repres" }, { t: "ent" }, { t: "▁mean" }, { t: "ing" },
  { t: "[SEP]", sp: true },
];

export default function TokenStrip() {
  return (
    <motion.div
      className="tokstrip"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      aria-label="how language models represent meaning, shown as transformer tokens"
    >
      <span className="tokstrip-tag">tokenizer</span>
      <div className="toks" aria-hidden>
        {TOKENS.map((tk, i) => (
          <span key={i} className={`tok${tk.sp ? " tok--sp" : ""}`}>
            <span className="tok-t">{tk.t}</span>
            <span className="tok-i">{i}</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
