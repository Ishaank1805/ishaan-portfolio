"use client";
import { useState } from "react";
import { profile } from "@/content/site";
import Reveal from "./Reveal";
import { ArrowRight, Github, LinkedIn, Mail, FileText } from "./icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1700); };
    navigator.clipboard?.writeText(profile.email).then(done, done) ?? done();
  };
  const socials = [
    { href: profile.github, label: "GitHub", Icon: Github },
    { href: profile.linkedin, label: "LinkedIn", Icon: LinkedIn },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
    { href: profile.resume, label: "Résumé", Icon: FileText },
  ];

  return (
    <section className="section contact" id="contact" tabIndex={-1}>
      <div className="wrap">
        <Reveal><span className="eyebrow">§ Contact</span></Reveal>
        <Reveal delay={0.06}><h2>Let&apos;s talk <em>research</em>.</h2></Reveal>
        <Reveal delay={0.12}>
          <p className="lead">Open to research collaborations, internships, and conversations about NLP, interpretability, or anything hard. Email is fastest.</p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="contact-actions">
            <button className={`email-btn${copied ? " copied" : ""}`} onClick={copy}>
              <span>{copied ? "Copied to clipboard ✓" : profile.email}</span>
              {!copied && <span className="copy-ic" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
              </span>}
            </button>
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>Compose email <ArrowRight /></a>
          </div>
        </Reveal>
        <Reveal delay={0.16}><p className="contact-phone">or call {profile.phone}</p></Reveal>
        <Reveal delay={0.18}>
          <div className="socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}
                {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <s.Icon />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
