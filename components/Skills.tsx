"use client";
import { useState } from "react";
import { skills, skillFilters, type SkillCat } from "@/content/site";
import Reveal from "./Reveal";

export default function Skills() {
  const [active, setActive] = useState<SkillCat | "all">("all");
  return (
    <section className="section section--tight" id="skills" tabIndex={-1}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ Toolkit</span>
          <h2>What I build with.</h2>
          <p>Filter by area to highlight the relevant tools.</p>
        </Reveal>
        <Reveal>
          <div className="filters" role="tablist" aria-label="Filter skills">
            {skillFilters.map((f) => (
              <button key={f.f} className={`chip${active === f.f ? " active" : ""}`}
                aria-pressed={active === f.f} onClick={() => setActive(f.f)}>{f.label}</button>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="skill-cloud">
            {skills.map((s) => {
              const on = active === "all" || s.cat === active;
              return <span key={s.name} className={`skill${on ? "" : " off"}`}>{s.name}</span>;
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
