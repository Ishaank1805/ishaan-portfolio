"use client";
import { useEffect, useRef } from "react";
import { scramble } from "@/lib/scramble";

const CARD_SEL = ".dir, .pub, .proj, .award, .exp";
const HOVER_SEL = "a, button, .dir, .proj, .pub, .award";

export default function Interactions() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // 1) cursor-follow glow on cards
    const onGlow = (e: PointerEvent) => {
      const card = (e.target as HTMLElement | null)?.closest<HTMLElement>(CARD_SEL);
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    document.addEventListener("pointermove", onGlow, { passive: true });
    cleanups.push(() => document.removeEventListener("pointermove", onGlow));

    // 2) custom cursor (precise dot + trailing ring)
    if (fine && !reduce && dotRef.current && ringRef.current) {
      const dot = dotRef.current, ring = ringRef.current;
      document.body.classList.add("has-cursor");
      let tx = window.innerWidth / 2, ty = window.innerHeight / 2, rx = tx, ry = ty, raf = 0;
      const move = (e: PointerEvent) => {
        tx = e.clientX; ty = e.clientY;
        dot.style.transform = `translate(${tx}px, ${ty}px)`;
      };
      const loop = () => {
        rx += (tx - rx) * 0.16; ry += (ty - ry) * 0.16;
        ring.style.transform = `translate(${rx}px, ${ry}px)`;
        raf = requestAnimationFrame(loop);
      };
      const over = (e: Event) => { if ((e.target as HTMLElement).closest?.(HOVER_SEL)) document.body.classList.add("cursor-active"); };
      const out = (e: Event) => { if ((e.target as HTMLElement).closest?.(HOVER_SEL)) document.body.classList.remove("cursor-active"); };
      const down = () => document.body.classList.add("cursor-down");
      const up = () => document.body.classList.remove("cursor-down");
      window.addEventListener("pointermove", move, { passive: true });
      document.addEventListener("pointerover", over, true);
      document.addEventListener("pointerout", out, true);
      window.addEventListener("pointerdown", down);
      window.addEventListener("pointerup", up);
      raf = requestAnimationFrame(loop);
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        window.removeEventListener("pointermove", move);
        document.removeEventListener("pointerover", over, true);
        document.removeEventListener("pointerout", out, true);
        window.removeEventListener("pointerdown", down);
        window.removeEventListener("pointerup", up);
        document.body.classList.remove("has-cursor", "cursor-active", "cursor-down");
      });
    }

    // 3) magnetic elements
    if (fine && !reduce) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.28}px, ${(e.clientY - (r.top + r.height / 2)) * 0.45}px)`;
        };
        const reset = () => { el.style.transform = ""; };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", reset);
        cleanups.push(() => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", reset); });
      });
    }

    // 4) nav-link decode on hover
    if (!reduce) {
      document.querySelectorAll<HTMLElement>(".nav-links a").forEach((el) => {
        const label = (el.textContent || "").trim();
        let stop: (() => void) | null = null;
        const enter = () => { stop?.(); stop = scramble(el, label); };
        el.addEventListener("pointerenter", enter);
        cleanups.push(() => { el.removeEventListener("pointerenter", enter); stop?.(); el.textContent = label; });
      });
    }

    // 5) section eyebrow decode on scroll-in
    if (!reduce) {
      const seen = new WeakSet<Element>();
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && !seen.has(en.target)) {
            seen.add(en.target);
            scramble(en.target as HTMLElement, (en.target.textContent || "").trim());
          }
        });
      }, { threshold: 0.7 });
      document.querySelectorAll(".section-head .eyebrow").forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    return () => cleanups.forEach((f) => f());
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
