"use client";
import { useEffect, useRef, type ElementType } from "react";
import { scramble } from "@/lib/scramble";

export default function ScrambleText({
  text, as = "span", className, delay = 0,
}: {
  text: string;
  as?: "span" | "em" | "div" | "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => scramble(el, text), delay);
    return () => window.clearTimeout(id);
  }, [text, delay]);
  const Tag: ElementType = as;
  return <Tag ref={ref as never} className={className}>{text}</Tag>;
}
