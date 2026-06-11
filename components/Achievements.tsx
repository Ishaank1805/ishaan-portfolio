import { achievements } from "@/content/site";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section className="section section--tight" id="achievements" tabIndex={-1}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ Achievements</span>
          <h2>Honours and awards.</h2>
          <p>From a background in competition mathematics.</p>
        </Reveal>
        <div className="awards">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="award">
                <span className="aw-detail">{a.detail}</span>
                <div className="aw-title">{a.title}</div>
                <p className="aw-desc">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
