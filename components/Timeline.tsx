import { timeline } from "@/content/site";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section className="section" id="timeline" tabIndex={-1}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ Timeline</span>
          <h2>Education and experience.</h2>
          <p>A short chronology of where I have studied and worked.</p>
        </Reveal>
        <Reveal>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div className={`tl-item${t.key ? " key" : ""}`} key={i}>
                <div className="yr">{t.yr}</div>
                <h3>{t.title}</h3>
                <div className="org">{t.org}</div>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
