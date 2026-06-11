import { ArrowUp } from "./icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="col"><b>Ishaan Karan</b> &nbsp;·&nbsp; © 2026 &nbsp;·&nbsp; Hyderabad, India</div>
        <div className="col">Set in <b>Newsreader</b>, <b>Hanken&nbsp;Grotesk</b> &amp; <b>JetBrains&nbsp;Mono</b>. Built with Next.js, React &amp; Motion.</div>
        <a className="top-link" href="#top">Back to top <ArrowUp /></a>
      </div>
    </footer>
  );
}
