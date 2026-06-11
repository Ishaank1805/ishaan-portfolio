import { experience } from "@/content/site";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="section" id="experience" tabIndex={-1}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ Experience</span>
          <h2>Research &amp; engineering.</h2>
        </Reveal>
        <div className="exp-list">
          {experience.map((e, i) => (
            <Reveal key={e.org} delay={i * 0.08}>
              <article className="exp">
                <div className="exp-period">{e.period}</div>
                <div className="exp-body">
                  <h3>{e.role}</h3>
                  <div className="exp-org">{e.org}</div>
                  <p>{e.body}</p>
                  <div className="exp-tags">{e.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
