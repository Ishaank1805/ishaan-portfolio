import { researchAreas } from "@/content/site";
import Reveal from "./Reveal";
import Publications from "./Publications";

export default function Research() {
  return (
    <section className="section" id="research" tabIndex={-1}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ Research</span>
          <h2>What I work on.</h2>
          <p>My work spans natural language processing and interpretable machine learning: understanding salience in long-form narratives, extracting structured signals from social-media text, making dense retrieval more efficient, and probing safety representations in multimodal language models.</p>
        </Reveal>
        <div className="dirs">
          {researchAreas.map((d, i) => (
            <Reveal className="dir-cell" delay={i * 0.07} key={d.num}>
              <article className="dir">
                <div className="num">{d.num}</div>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
                <div className="tags">{d.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
        <hr className="rule rule--soft" />
        <Publications />
      </div>
    </section>
  );
}
