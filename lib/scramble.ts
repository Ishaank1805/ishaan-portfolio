const GLYPHS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789#$%&/<>=+*";

// Progressively reveal `finalText` left-to-right while scrambling the rest.
export function scramble(el: HTMLElement, finalText: string): () => void {
  const total = finalText.length;
  const duration = Math.min(900, 240 + total * 26);
  const start = performance.now();
  let raf = 0;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const revealed = Math.floor(t * total);
    let out = "";
    for (let i = 0; i < total; i++) {
      const ch = finalText[i];
      if (ch === " ") out += " ";
      else if (i < revealed) out += ch;
      else out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
    }
    el.textContent = out;
    if (t < 1) raf = requestAnimationFrame(tick);
    else el.textContent = finalText;
  };
  raf = requestAnimationFrame(tick);
  return () => { cancelAnimationFrame(raf); el.textContent = finalText; };
}
