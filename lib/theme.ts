// Theme is stored on <html data-theme> and persisted to localStorage.
// A no-flash inline script (in layout) sets the initial value before paint.
export type Theme = "dark" | "light";

function safeGet(k: string): string | null {
  try { return localStorage.getItem(k); } catch { return null; }
}
function safeSet(k: string, v: string) {
  try { localStorage.setItem(k, v); } catch { /* sandboxed */ }
}

export function getTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
}

export function applyTheme(t: Theme) {
  document.documentElement.setAttribute("data-theme", t);
  safeSet("theme", t);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", t === "dark" ? "#07080B" : "#F6F5F1");
  window.dispatchEvent(new CustomEvent("themechange", { detail: t }));
}

export function toggleTheme() {
  applyTheme(getTheme() === "dark" ? "light" : "dark");
}

export const NO_FLASH_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export function _read() { return safeGet("theme"); }
