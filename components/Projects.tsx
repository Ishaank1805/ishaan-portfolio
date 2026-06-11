import { projects, domainLabel } from "@/content/site";
import Reveal from "./Reveal";
import { Github } from "./icons";

export default function Projects() {
  return (
    <section className="section" id="projects" tabIndex={-1}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ Projects</span>
          <h2>Things I&apos;ve built.</h2>
          <p>A few of the larger things I have designed and built.</p>
        </Reveal>

        <div className="proj-list">
          {projects.map((p, i) => (
            <Reveal key={p.idx} delay={i * 0.05}>
              <article className="proj">
                <div className="proj-header">
                  <div className="proj-meta">
                    <span className="proj-idx">{p.idx}</span>
                    <span className={`proj-domain ${p.domain}`}>{domainLabel[p.domain]}</span>
                    <span className="proj-period">{p.period}</span>
                  </div>
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-lede">{p.lede}</p>
                  <div className="proj-tech">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
                <div className="proj-detail">
                  <ul>{p.bullets.map((b, k) => <li key={k}>{b}</li>)}</ul>
                  <a className="proj-link" href={p.repo} target="_blank" rel="noopener noreferrer">
                    <Github /> View on GitHub
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
