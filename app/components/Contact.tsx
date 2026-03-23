"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);

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

  const inputStyle = {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--border)",
    padding: "0.75rem 0",
    color: "var(--text)",
    fontFamily: "var(--ff-body)",
    fontSize: "0.9rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.3s",
  } as React.CSSProperties;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="max-w-[1100px] mx-auto px-6 py-28 relative z-10"
    >
      <div
        className="reveal text-[0.65rem] tracking-[0.35em] uppercase mb-5 flex items-center gap-4"
        style={{ color: "var(--gold)" }}
      >
        Contact
        <span
          className="flex-1 h-px"
          style={{
            background: "linear-gradient(90deg, var(--border), transparent)",
          }}
        />
      </div>

      <h2
        className="reveal leading-[1.1] mb-14"
        style={{
          fontFamily: "var(--ff-display)",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 300,
        }}
      >
        Let&apos;s{" "}
        <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Connect</em>
      </h2>

      <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">

        {/* Left — info */}
        <div>
          <p
            className="mb-8 leading-[1.8]"
            style={{
              fontFamily: "var(--ff-display)",
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "rgba(240,234,214,0.6)",
            }}
          >
            &ldquo;Open to collaborations, conversations, and opportunities that
            push the boundaries of what a website can do.&rdquo;
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {[
              { icon: "✦", label: "Location", val: "Bengaluru, Karnataka, India" },
              { icon: "@", label: "Company", val: "Zoca · AI Product & SEO" },
              { icon: "↗", label: "Connections", val: "500+ on LinkedIn" },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-4 text-sm">
                <div
                  className="w-8 h-8 flex items-center justify-center text-[0.7rem] flex-shrink-0"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--gold)",
                  }}
                >
                  {row.icon}
                </div>
                <div>
                  <span
                    className="block text-[0.65rem] tracking-[0.15em] uppercase"
                    style={{ color: "var(--muted)" }}
                  >
                    {row.label}
                  </span>
                  <span style={{ color: "var(--text)" }}>{row.val}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/aariznaseer" },
              { label: "GitHub", href: "https://github.com/Aariznaseer" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-[0.65rem] tracking-[0.15em] uppercase transition-all duration-300"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--gold)";
                  el.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--muted)";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <label
                className="text-[0.65rem] tracking-[0.2em] uppercase"
                style={{ color: "var(--muted)" }}
              >
                Your Name
              </label>
              <input
                style={inputStyle}
                type="text"
                placeholder="Alex Johnson"
                onFocus={(e) =>
                  (e.target.style.borderBottomColor = "var(--gold)")
                }
                onBlur={(e) =>
                  (e.target.style.borderBottomColor = "var(--border)")
                }
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-[0.65rem] tracking-[0.2em] uppercase"
                style={{ color: "var(--muted)" }}
              >
                Email
              </label>
              <input
                style={inputStyle}
                type="email"
                placeholder="alex@example.com"
                onFocus={(e) =>
                  (e.target.style.borderBottomColor = "var(--gold)")
                }
                onBlur={(e) =>
                  (e.target.style.borderBottomColor = "var(--border)")
                }
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="text-[0.65rem] tracking-[0.2em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              Subject
            </label>
            <input
              style={inputStyle}
              type="text"
              placeholder="Let's collaborate on something great"
              onFocus={(e) =>
                (e.target.style.borderBottomColor = "var(--gold)")
              }
              onBlur={(e) =>
                (e.target.style.borderBottomColor = "var(--border)")
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="text-[0.65rem] tracking-[0.2em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              Message
            </label>
            <textarea
              style={{ ...inputStyle, minHeight: "100px", resize: "none" }}
              placeholder="Tell me about your project or idea..."
              onFocus={(e) =>
                (e.target.style.borderBottomColor = "var(--gold)")
              }
              onBlur={(e) =>
                (e.target.style.borderBottomColor = "var(--border)")
              }
            />
          </div>

          <button
            onClick={() => setSent(true)}
            className="self-start mt-2 px-10 py-3 text-[0.72rem] tracking-[0.2em] uppercase relative overflow-hidden transition-colors duration-400 group"
            style={{
              border: "1px solid var(--gold)",
              color: sent ? "var(--bg)" : "var(--gold)",
              background: sent ? "var(--gold)" : "transparent",
              cursor: "pointer",
              fontFamily: "var(--ff-body)",
            }}
          >
            {sent ? "Message Sent ✦" : "Send Message"}
          </button>
        </div>
      </div>
    </section>
  );
}
