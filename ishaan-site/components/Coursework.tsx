import { courseGroups } from "@/content/site";
import Reveal from "./Reveal";

export default function Coursework() {
  return (
    <section className="section section--tight" id="coursework" tabIndex={-1}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ Coursework</span>
          <h2>Courses I&apos;ve taken.</h2>
          <p>Selected coursework from my BTech and MS at IIIT Hyderabad, grouped by area.</p>
        </Reveal>
        <div className="courses">
          {courseGroups.map((g, i) => (
            <Reveal key={g.area} delay={i * 0.05}>
              <div className="course-group">
                <h3 className="cg-area">{g.area}</h3>
                <div className="cg-items">
                  {g.items.map((c) => <span className="course" key={c}>{c}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
