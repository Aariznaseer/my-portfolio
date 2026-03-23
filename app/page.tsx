import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer
        className="flex justify-between items-center px-12 py-10 border-t relative z-10 flex-wrap gap-4"
        style={{ borderColor: "var(--border)" }}
      >
        <span
          className="text-[1rem] font-light italic"
          style={{ fontFamily: "var(--ff-display)", color: "var(--gold)" }}
        >
          Aariz Naseer
        </span>
        <span
          className="text-[0.65rem] tracking-[0.15em] uppercase"
          style={{ color: "var(--muted)" }}
        >
          © 2025 · All rights reserved
        </span>
        <span
          className="text-[0.65rem] tracking-[0.1em] uppercase"
          style={{ color: "var(--muted)" }}
        >
          Built with <span style={{ color: "var(--gold)" }}>✦</span> in Bengaluru
        </span>
      </footer>
    </main>
  );
}