"use client";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/content/site";
import { getTheme, toggleTheme, type Theme } from "@/lib/theme";
import { Search, Moon, Sun, Menu, FileText } from "./icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState<Theme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTheme(getTheme());
    const onTheme = () => setTheme(getTheme());
    window.addEventListener("themechange", onTheme);

    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });

    return () => {
      window.removeEventListener("themechange", onTheme);
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? " is-scrolled" : ""}`} aria-label="Primary">
        <a className="brand" href="#top" aria-label="Ishaan Karan home">
          <span className="mark" aria-hidden>ik</span>
          <span><b>Ishaan Karan</b>&nbsp; <span className="sub">/ comp-ling</span></span>
        </a>
        <div className="nav-links">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""}>{n.label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="resume-btn" href={profile.resume} target="_blank" rel="noopener noreferrer"><FileText /> Résumé</a>
          <button className="cmd-btn" aria-label="Open command palette"
            onClick={() => window.dispatchEvent(new CustomEvent("cmdk:open"))}>
            <Search /><span className="lbl">Search</span><kbd>⌘K</kbd>
          </button>
          <button className="icon-btn" aria-label="Toggle colour theme" onClick={toggleTheme}>
            {theme === "dark" ? <Moon /> : <Sun />}
          </button>
          <button className="icon-btn nav-toggle" aria-label="Open menu" aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}>
            <Menu />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" onClick={(e) => { if ((e.target as HTMLElement).tagName === "A") setMenuOpen(false); }}>
          {navItems.map((n, i) => (
            <a key={n.id} href={`#${n.id}`}><span className="mn">{String(i + 1).padStart(2, "0")}</span>{n.label}</a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer"><span className="mn">CV</span>Résumé</a>
        </div>
      )}
    </>
  );
}
