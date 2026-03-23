"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    num: "01",
    name: "Travel Blog",
    desc: "A rich, immersive travel blog for enthusiasts — featuring curated destination stories, stunning imagery, an about page and integrated contact form. Built during my internship at Varcons Technologies.",
    tags: ["Figma", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/Aariznaseer/TravelBlog",
  },
  {
    num: "02",
    name: "News App",
    desc: "An Android application delivering timely, relevant news articles to users with a clean reading experience. Built with Java and Android Studio during university studies at VTU.",
    tags: ["Java", "Android Studio", "REST API"],
    link: null,
  },
  {
    num: "03",
    name: "Zoca Website",
    desc: "Ongoing ownership of Zoca's product website — driving AI-powered design decisions, SEO strategy, performance optimisation and web analytics using Microsoft Clarity and data-led experimentation.",
    tags: ["SEO", "MS Clarity", "AI Design", "Analytics"],
    link: null,
  },
  {
    num: "04",
    name: "This Portfolio",
    desc: "A luxury, editorial-grade personal portfolio — built from scratch with refined typography, gold accents, scroll animations and a fully responsive layout. Designed and coded with intention.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: null,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting)
            setTimeout(() => e.target.classList.add("visible"), i * 120);
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="max-w-[1100px] mx-auto px-6 py-28 relative z-10"
    >
      <div
        className="reveal text-[0.65rem] tracking-[0.35em] uppercase mb-5 flex items-center gap-4"
        style={{ color: "var(--gold)" }}
      >
        Selected Work
        <span
          className="flex-1 h-px"
          style={{
            background: "linear-gradient(90deg, var(--border), transparent)",
          }}
        />
      </div>

      <h2
        className="reveal leading-[1.1] mb-12"
        style={{
          fontFamily: "var(--ff-display)",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 300,
        }}
      >
        Projects &amp;{" "}
        <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Craft</em>
      </h2>

      <div
        className="reveal grid grid-cols-1 md:grid-cols-2 gap-px"
        style={{
          background: "var(--border)",
          border: "1px solid var(--border)",
        }}
      >
        {projects.map((p) => (
          <div
            key={p.num}
            className="project-card group relative p-10 overflow-hidden transition-colors duration-400 cursor-pointer"
            style={{ background: "var(--bg2)" }}
            onClick={() => p.link && window.open(p.link, "_blank")}
          >
            {/* Gold left border on hover */}
            <span
              className="absolute top-0 left-0 w-[2px] h-0 transition-all duration-400 group-hover:h-full"
              style={{ background: "var(--gold)" }}
            />

            <span
              className="block text-[0.75rem] tracking-[0.2em] mb-4 opacity-50"
              style={{
                fontFamily: "var(--ff-display)",
                color: "var(--gold)",
              }}
            >
              {p.num} ✦
            </span>

            <h3
              className="text-[1.6rem] font-light mb-3 transition-colors duration-300 group-hover:text-[var(--gold2)]"
              style={{ fontFamily: "var(--ff-display)" }}
            >
              {p.name}
            </h3>

            <p
              className="text-[0.85rem] leading-[1.7] mb-6"
              style={{ color: "var(--muted)" }}
            >
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[0.62rem] tracking-[0.15em] uppercase px-3 py-1 border"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {p.link && (
              <span
                className="absolute bottom-8 right-8 text-[1.2rem] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                style={{ color: "var(--gold)" }}
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
