"use client";
import { useCallback, useEffect, useMemo, useRef, useState, type ComponentType, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/content/site";
import { toggleTheme } from "@/lib/theme";
import {
  Search, Layers, Grid, Clock, FileText, Flask, User, Mail, Moon, Copy, Github, LinkedIn, Book, Briefcase, Award, Activity,
} from "./icons";

type Cmd = { g: string; label: string; hint: string; Icon: ComponentType; run: () => void };

function go(hash: string) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
function ext(u: string) { window.open(u, "_blank", "noopener"); }

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const copyEmail = useCallback(() => {
    navigator.clipboard?.writeText(profile.email).catch(() => {});
    go("#contact");
  }, []);

  const commands: Cmd[] = useMemo(() => [
    { g: "Navigate", label: "Research", hint: "focus areas", Icon: Layers, run: () => go("#research") },
    { g: "Navigate", label: "Publications", hint: "papers", Icon: Book, run: () => go("#publications") },
    { g: "Navigate", label: "Projects", hint: "from scratch", Icon: Grid, run: () => go("#projects") },
    { g: "Navigate", label: "Experience", hint: "roles", Icon: Briefcase, run: () => go("#experience") },
    { g: "Navigate", label: "Skills", hint: "toolkit", Icon: Layers, run: () => go("#skills") },
    { g: "Navigate", label: "Coursework", hint: "what I studied", Icon: Book, run: () => go("#coursework") },
    { g: "Navigate", label: "Achievements", hint: "awards", Icon: Award, run: () => go("#achievements") },
    { g: "Navigate", label: "Extracurricular", hint: "sports captain", Icon: Activity, run: () => go("#extracurricular") },
    { g: "Navigate", label: "Timeline", hint: "chronology", Icon: Clock, run: () => go("#timeline") },
    { g: "Navigate", label: "About", hint: "narrative", Icon: User, run: () => go("#about") },
    { g: "Navigate", label: "Contact", hint: "reach out", Icon: Mail, run: () => go("#contact") },
    { g: "Actions", label: "Toggle theme", hint: "dark / light", Icon: Moon, run: () => toggleTheme() },
    { g: "Actions", label: "Copy email", hint: "clipboard", Icon: Copy, run: copyEmail },
    { g: "Links", label: "GitHub", hint: "@Ishaank1805", Icon: Github, run: () => ext(profile.github) },
    { g: "Links", label: "LinkedIn", hint: "profile", Icon: LinkedIn, run: () => ext(profile.linkedin) },
    { g: "Links", label: "Résumé", hint: "add resume.pdf to /public", Icon: FileText, run: () => ext(profile.resume) },
  ], [copyEmail]);

  const filtered = useMemo(() => {
    const f = q.trim().toLowerCase();
    if (!f) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(f) || c.hint.toLowerCase().includes(f));
  }, [q, commands]);

  const close = useCallback(() => { setOpen(false); setQ(""); setSel(0); }, []);
  const openP = useCallback(() => { setOpen(true); setQ(""); setSel(0); }, []);

  useEffect(() => {
    const onOpen = () => (open ? close() : openP());
    window.addEventListener("cmdk:open", onOpen);
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); open ? close() : openP(); }
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("cmdk:open", onOpen); window.removeEventListener("keydown", onKey); };
  }, [open, close, openP]);

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 30); }, [open]);
  useEffect(() => { setSel(0); }, [q]);

  const onKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, filtered.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); const c = filtered[sel]; if (c) { c.run(); if (c.label !== "Toggle theme") close(); } }
  };

  let lastGroup = "";
  return (
    <AnimatePresence>
      {open && (
        <div className="cmdk" role="dialog" aria-modal="true" aria-label="Command palette">
          <motion.div className="cmdk-scrim" onClick={close}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} />
          <motion.div className="cmdk-panel"
            initial={{ opacity: 0, y: -10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }} transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}>
            <div className="cmdk-input">
              <Search />
              <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={onKeyDown}
                placeholder="Jump to a section or run a command…" autoComplete="off" spellCheck={false} />
              <span className="esc">ESC</span>
            </div>
            <div className="cmdk-list">
              {filtered.length === 0 && <div className="cmdk-empty">No matches.</div>}
              {filtered.map((c, i) => {
                const showGroup = c.g !== lastGroup; lastGroup = c.g;
                const Icon = c.Icon;
                return (
                  <div key={c.label}>
                    {showGroup && <div className="cmdk-group">{c.g}</div>}
                    <div className={`cmdk-item${i === sel ? " sel" : ""}`} role="option" aria-selected={i === sel}
                      onMouseMove={() => setSel(i)}
                      onClick={() => { c.run(); if (c.label !== "Toggle theme") close(); }}>
                      <span className="ic"><Icon /></span>
                      <span className="lab">{c.label}</span>
                      <span className="hint">{c.hint}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
