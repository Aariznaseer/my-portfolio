"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    title: "Web & Design",
    skills: [
      { name: "HTML & CSS", pct: 92 },
      { name: "JavaScript", pct: 80 },
      { name: "Front-End Design", pct: 85 },
      { name: "Figma", pct: 78 },
    ],
  },
  {
    title: "Product & SEO",
    skills: [
      { name: "SEO Strategy", pct: 88 },
      { name: "Microsoft Clarity", pct: 85 },
      { name: "Web Analytics", pct: 82 },
    ],
  },
  {
    title: "Engineering",
    skills: [
      { name: "Python", pct: 80 },
      { name: "Java", pct: 75 },
      { name: "SQL", pct: 78 },
    ],
  },
  {
    title: "AI & Tools",
    skills: [
      { name: "AI-Powered Design", pct: 90 },
      { name: "Microsoft 365 Copilot", pct: 82 },
      { name: "Problem Solving", pct: 92 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting)
            setTimeout(() => e.target.classList.add("visible"), i * 100);
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="max-w-[1100px] mx-auto px-6 py-28 relative z-10"
    >
      <div
        className="reveal text-[0.65rem] tracking-[0.35em] uppercase mb-5 flex items-center gap-4"
        style={{ color: "var(--gold)" }}
      >
        Expertise
        <span className="flex-1 h-px" style={{ background: "linear-gradient(90deg, var(--border), transparent)" }} />
      </div>

      <h2
        className="reveal leading-[1.1] mb-14"
        style={{ fontFamily: "var(--ff-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300 }}
      >
        Skills &amp;{" "}
        <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Capabilities</em>
      </h2>

      <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="mb-10">
            <div
              className="flex items-center gap-3 mb-6 text-[0.65rem] tracking-[0.3em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              {group.title}
              <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
            </div>
            {group.skills.map((skill, i) => (
              <div key={skill.name} className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[0.82rem] tracking-[0.05em]" style={{ color: "var(--text)" }}>
                    {skill.name}
                  </span>
                  <span className="text-[0.7rem]" style={{ fontFamily: "var(--ff-display)", color: "var(--gold)" }}>
                    {skill.pct}%
                  </span>
                </div>
                <div className="h-px relative overflow-hidden" style={{ background: "rgba(201,168,76,0.12)" }}>
                  <div
                    className="h-full origin-left"
                    style={{
                      width: `${skill.pct}%`,
                      background: "linear-gradient(90deg, var(--gold3), var(--gold), var(--gold2))",
                      animation: `growBar 1.5s ${i * 0.15}s ease both`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}