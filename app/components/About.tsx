"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const meta = [
  { label: "Name", value: "Aariz Naseer", gold: false },
  { label: "Role", value: "AI Product · Website & SEO", gold: true },
  { label: "Company", value: "Zoca", gold: false },
  { label: "Location", value: "Bengaluru, India", gold: false },
  { label: "Education", value: "B.E. CS · VTU", gold: false },
];

const stats = [
  { num: "1+", label: "Year @ Zoca" },
  { num: "3+", label: "Years Experience" },
  { num: "∞", label: "SEO Experiments" },
  { num: "500+", label: "Connections" },
];

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="max-w-[1100px] mx-auto px-6 py-28 relative z-10"
    >
      <div
        className="reveal text-[0.65rem] tracking-[0.35em] uppercase mb-5 flex items-center gap-4"
        style={{ color: "var(--gold)" }}
      >
        About
        <span
          className="flex-1 h-px"
          style={{
            background: "linear-gradient(90deg, var(--border), transparent)",
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
        {/* Left — card + stats */}
        <div className="reveal">
          {/* Identity card */}
          <div
            className="border p-6 mb-1 relative"
            style={{
              background: "var(--bg2)",
              borderColor: "var(--border)",
            }}
          >
            <span
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 text-[0.8rem]"
              style={{ background: "var(--bg2)", color: "var(--gold)" }}
            >
              ✦
            </span>
            {/* Avatar */}
            <div
  className="w-full mb-6 relative overflow-hidden"
  style={{
    border: "1px solid var(--border)",
    background: "var(--bg2)",
  }}
>
  <Image
    src="/profile.jpg"
    alt="Aariz"
    width={500}
    height={500}
    className="w-full h-auto"
  />
</div>
            {/* Meta rows */}
            {meta.map((m) => (
              <div
                key={m.label}
                className="flex justify-between items-center py-2 border-b text-[0.78rem]"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="text-[0.65rem] tracking-[0.1em] uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  {m.label}
                </span>
                <span style={{ color: m.gold ? "var(--gold)" : "var(--text)" }}>
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Stats grid */}
          <div
            className="grid grid-cols-2 gap-px"
            style={{ background: "var(--border)", border: "1px solid var(--border)" }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center py-6 px-4"
                style={{ background: "var(--bg2)" }}
              >
                <span
                  className="block text-[2.5rem] font-light leading-none mb-1"
                  style={{
                    fontFamily: "var(--ff-display)",
                    color: "var(--gold)",
                  }}
                >
                  {s.num}
                </span>
                <span
                  className="text-[0.65rem] tracking-[0.2em] uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — text */}
        <div className="reveal">
          <h2
            className="leading-[1.1] mb-8"
            style={{
              fontFamily: "var(--ff-display)",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 300,
            }}
          >
            Shaping{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              Digital Presence
            </em>{" "}
            with Intelligence
          </h2>

          {[
            <>
              I&apos;m <strong>Aariz Naseer</strong>, an AI Product professional
              at <strong>Zoca</strong> in Bengaluru, where I drive the
              company&apos;s website strategy, design, and SEO growth. I sit at
              the intersection of technology, design, and data — turning
              insights into beautiful, high-performing digital experiences.
            </>,
            <>
              At Zoca, I own the full website lifecycle — from crafting
              intelligent AI-driven pages to running SEO experiments that move
              the needle on organic growth. Every edit, every optimisation,
              every pixel is intentional.
            </>,
            <>
              Previously I worked as a{" "}
              <strong>Graduate Engineering Trainee at UnifyCX</strong> and
              interned as a Web Developer at{" "}
              <strong>Varcons Technologies</strong>, where I built full
              websites from Figma to production.
            </>,
            <>
              I hold a <strong>B.E. in Computer Science from VTU</strong> and
              am certified in Ethics in Generative AI and Microsoft 365
              Copilot. I believe great websites aren&apos;t just built —
              they&apos;re grown.
            </>,
          ].map((para, i) => (
            <p
              key={i}
              className="mb-5 text-[0.95rem] leading-[1.8]"
              style={{ color: "var(--muted)" }}
            >
              {para}
            </p>
          ))}

          <a
            href="#projects"
            className="inline-block mt-4 px-8 py-3 text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-400 relative overflow-hidden"
            style={{
              border: "1px solid var(--gold)",
              color: "var(--gold)",
              textDecoration: "none",
            }}
          >
            See My Projects
          </a>
        </div>
      </div>
    </section>
  );
}
