import { aboutFacts, profile } from "@/content/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section" id="about" tabIndex={-1}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ About</span>
          <h2>A little about me.</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-body">
            <p className="lead">I work on language, models, and the structures that connect them.</p>
            <p>I am a computer science and computational linguistics student at <b>IIIT Hyderabad</b>, where I work with the Language Technologies Research Centre under Dr. Rajakrishnan Rajkumar.</p>
            <p>My research spans interpretable deep learning for long-document understanding, scene saliency in movie screenplays, harmful online discourse, and information retrieval. I am especially interested in understanding what models learn, where their decisions come from, and how to make those systems more reliable.</p>
            <p>My recent work includes an oral paper at <b>EMNLP 2026</b> on linguistically grounded scene saliency and a first-author paper at <b>SemEval 2026</b>, where our conspiracy-marker extraction system ranked second in Task 10.</p>
            <p>Outside research, I served as Sports Captain at IIIT Hyderabad and currently work as a Teaching Assistant for Computational Linguistics 2.</p>
          </Reveal>
          <Reveal className="about-side" delay={0.1}>
            <div className="portrait">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={profile.avatar} alt="Ishaan Karan" width={400} height={400} className="portrait-img" loading="lazy" />
            </div>
            <div className="about-facts">
              {aboutFacts.map((f) => (
                <div className="row" key={f.lab}>
                  <span className="lab">{f.lab}</span>
                  <span className="val">{f.val}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
