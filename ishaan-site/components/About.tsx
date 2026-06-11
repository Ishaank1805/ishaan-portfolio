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
            <p className="lead">Language is the thing I keep coming back to.</p>
            <p>I find it genuinely surprising that something as messy and human as language can be modelled at all, and natural language processing is where I get to take that seriously. It is what most of my work is about, and what I want to keep doing.</p>
            <p>I have always liked a hard problem for its own sake. I did my A-Levels in London before coming to <b>IIIT Hyderabad</b>, where I study computer science and computational linguistics and do research at the Language Technologies Research Centre under Dr. Rajakrishnan Rajkumar.</p>
            <p>I would rather understand something properly than just get it working, so I am usually the one taking an idea apart to see how it actually fits together. I like asking a small question carefully more than a big one loosely.</p>
            <p>Away from research, I was sports captain at <b>IIIT Hyderabad</b>, where I organized sport across the institute. Team sport has taught me about as much about doing good work as anything I have done at a desk.</p>
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
