"use client";
import { useEffect, useRef } from "react";

interface Pt {
  ci: number; color: string; ox: number; oy: number; x: number; y: number;
  r: number; sp: number; ph: number; label: string | null;
}

const SPECTRUM = ["#5d6bff", "#7480ff", "#8aa0f4", "#74b8e8", "#5fc8d4", "#7ad0bc"];
const CLUSTERS = [
  { cx: 0.24, cy: 0.34, words: ["manifold", "vector", "metric"] },
  { cx: 0.44, cy: 0.66, words: ["syntax", "grammar", "token"] },
  { cx: 0.66, cy: 0.30, words: ["attention", "gradient", "embedding"] },
  { cx: 0.80, cy: 0.62, words: ["entropy", "signal", "prior"] },
  { cx: 0.36, cy: 0.50, words: ["proof", "lemma", "group"] },
  { cx: 0.62, cy: 0.50, words: ["meaning", "structure", "model"] },
];

function shade(hex: string, amt: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 255) + amt));
  const b = Math.max(0, Math.min(255, (n & 255) + amt));
  return `rgb(${r},${g},${b})`;
}

export default function EmbeddingField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    let W = 0, H = 0, raf: number | null = null, t = 0, visible = true, small = false;

    const pts: Pt[] = [];
    CLUSTERS.forEach((cl, ci) => {
      const n = 13 + (ci % 2);
      for (let i = 0; i < n; i++) {
        const ang = Math.random() * Math.PI * 2;
        const rad = Math.pow(Math.random(), 0.7) * 0.11;
        pts.push({
          ci, color: SPECTRUM[ci],
          ox: Math.cos(ang) * rad, oy: Math.sin(ang) * rad * 0.85,
          x: cl.cx, y: cl.cy, r: 0.9 + Math.random() * 1.8,
          sp: 0.25 + Math.random() * 0.6, ph: Math.random() * Math.PI * 2,
          label: i < cl.words.length && Math.random() > 0.18 ? cl.words[i] : null,
        });
      }
    });

    const mouse = { x: -1, y: -1, active: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      small = W < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const light = document.documentElement.getAttribute("data-theme") === "light";
      const px = pts.length;
      for (let i = 0; i < px; i++) {
        const p = pts[i], cl = CLUSTERS[p.ci];
        const tx = cl.cx + p.ox + Math.sin(t * p.sp + p.ph) * 0.018;
        const ty = cl.cy + p.oy + Math.cos(t * p.sp * 0.9 + p.ph) * 0.018;
        p.x += (tx - p.x) * 0.04; p.y += (ty - p.y) * 0.04;
        if (mouse.active) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
          if (d2 < 0.02) { const f = (0.02 - d2) * 5.5; p.x += dx * f; p.y += dy * f; }
        }
      }
      ctx.lineWidth = 1;
      for (let a = 0; a < px; a++) {
        const pa = pts[a];
        const best = [Infinity, Infinity], bi = [-1, -1];
        for (let b = 0; b < px; b++) {
          if (b === a) continue;
          const ddx = pa.x - pts[b].x, ddy = pa.y - pts[b].y, dd = ddx * ddx + ddy * ddy;
          if (dd < best[0]) { best[1] = best[0]; bi[1] = bi[0]; best[0] = dd; bi[0] = b; }
          else if (dd < best[1]) { best[1] = dd; bi[1] = b; }
        }
        for (let k = 0; k < 2; k++) {
          if (bi[k] < 0) continue;
          const pb = pts[bi[k]], dist = Math.sqrt(best[k]);
          if (dist > 0.16) continue;
          const alpha = (1 - dist / 0.16) * (light ? 0.22 : 0.30);
          ctx.strokeStyle = light ? `rgba(60,66,120,${alpha})` : `rgba(150,160,255,${alpha})`;
          ctx.beginPath(); ctx.moveTo(pa.x * W, pa.y * H); ctx.lineTo(pb.x * W, pb.y * H); ctx.stroke();
        }
      }
      for (let c = 0; c < px; c++) {
        const p2 = pts[c], X = p2.x * W, Y = p2.y * H;
        const col = light ? shade(p2.color, -30) : p2.color;
        const glow = ctx.createRadialGradient(X, Y, 0, X, Y, p2.r * 5);
        glow.addColorStop(0, col); glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.globalAlpha = light ? 0.55 : 0.85; ctx.fillStyle = glow;
        ctx.beginPath(); ctx.arc(X, Y, p2.r * 5, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 1; ctx.fillStyle = col;
        ctx.beginPath(); ctx.arc(X, Y, p2.r, 0, Math.PI * 2); ctx.fill();
        if (p2.label && !small) {
          ctx.globalAlpha = light ? 0.5 : 0.42;
          ctx.fillStyle = light ? "#3a3f6e" : "#aab3e8";
          ctx.font = "500 11px 'JetBrains Mono', monospace";
          ctx.fillText(p2.label, X + p2.r + 6, Y + 3);
          ctx.globalAlpha = 1;
        }
      }
    };

    const loop = () => { t += 0.006; draw(); if (visible) raf = requestAnimationFrame(loop); };

    resize();
    canvas.classList.add("ready");
    const animate = !reduce && fine;
    if (animate) loop();
    else { for (let s = 0; s < 60; s++) t += 0.006; draw(); }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; };
    if (animate) { canvas.addEventListener("pointermove", onMove); canvas.addEventListener("pointerleave", onLeave); }

    const onResize = () => { resize(); if (!animate) draw(); };
    window.addEventListener("resize", onResize);
    const onTheme = () => { if (!animate) draw(); };
    window.addEventListener("themechange", onTheme);

    const io = new IntersectionObserver((en) => {
      visible = en[0].isIntersecting;
      if (visible && animate && raf == null) raf = requestAnimationFrame(loop);
      else if (!visible && raf != null) { cancelAnimationFrame(raf); raf = null; }
    }, { threshold: 0 });
    io.observe(canvas);

    const onVis = () => {
      if (document.hidden && raf != null) { cancelAnimationFrame(raf); raf = null; }
      else if (!document.hidden && visible && animate && raf == null) raf = requestAnimationFrame(loop);
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      if (raf != null) cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("themechange", onTheme);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="field" aria-hidden />;
}