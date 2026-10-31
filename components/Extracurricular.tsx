import { extracurricular } from "@/content/site";
import Reveal from "./Reveal";

export default function Extracurricular() {
  return (
    <section className="section section--tight" id="extracurricular" tabIndex={-1}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ Teaching &amp; leadership</span>
          <h2>Beyond research.</h2>
        </Reveal>
        <div className="exp-list">
          {extracurricular.map((e, i) => (
            <Reveal key={e.role + e.org} delay={i * 0.06}>
              <article className="exp">
                <div className="exp-period">{e.period}</div>
                <div className="exp-body">
                  <h3>{e.role}</h3>
                  <div className="exp-org">{e.org}</div>
                  <p>{e.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
