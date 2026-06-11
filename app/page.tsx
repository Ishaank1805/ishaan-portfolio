import Nav from "@/components/Nav";
import CommandPalette from "@/components/CommandPalette";
import Progress from "@/components/Progress";
import Hero from "@/components/Hero";
import Interactions from "@/components/Interactions";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Coursework from "@/components/Coursework";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import Extracurricular from "@/components/Extracurricular";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Progress />
      <Nav />
      <CommandPalette />
      <span id="top" />
      <main id="main">
        <Hero />
        <Interactions />
        <div className="grain" aria-hidden />
        <Research />
        <hr className="rule" />
        <Experience />
        <hr className="rule" />
        <Projects />
        <hr className="rule" />
        <Skills />
        <hr className="rule" />
        <Coursework />
        <hr className="rule" />
        <Timeline />
        <hr className="rule" />
        <Achievements />
        <hr className="rule" />
        <Extracurricular />
        <hr className="rule" />
        <About />
        <hr className="rule" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
