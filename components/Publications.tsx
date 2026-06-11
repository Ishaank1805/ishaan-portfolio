import { publications } from "@/content/site";
import Reveal from "./Reveal";
import { Book } from "./icons";

export default function Publications() {
  return (
    <div className="pubs-block" id="publications">
      <Reveal className="subhead">
        <span className="eyebrow">Publications</span>
        <h3>Papers.</h3>
        <p>Peer-reviewed and under-review research.</p>
      </Reveal>

      <div className="pubs-list">
        {publications.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="pub">
              <div className="pub-main">
                <div className="pub-top">
                  <span className="pub-icon" aria-hidden><Book /></span>
                  <span className={`pub-status ${p.statusKind}`}>{p.status}</span>
                  <span className="pub-venue">{p.venue}</span>
                </div>
                <h3 className="pub-title">{p.title}</h3>
                <p className="pub-summary">{p.summary}</p>
                <div className="pub-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
