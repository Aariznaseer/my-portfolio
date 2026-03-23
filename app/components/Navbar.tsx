"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-12 py-6 border-b border-[var(--border)] backdrop-blur-xl transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,7,0.9)" : "rgba(8,8,7,0.6)",
      }}
    >
      {/* Logo */}
      <span
        className="font-[var(--ff-display)] text-[1.4rem] font-light italic tracking-[0.15em]"
        style={{ color: "var(--gold)" }}
      >
        AN
      </span>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[0.72rem] tracking-[0.2em] uppercase transition-colors duration-300 relative group"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--gold2)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--muted)")
              }
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--gold)" }}
              />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: "var(--gold)",
              transform:
                menuOpen && i === 0
                  ? "rotate(45deg) translateY(8px)"
                  : menuOpen && i === 2
                  ? "rotate(-45deg) translateY(-8px)"
                  : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 border-t border-[var(--border)] px-6 py-5 flex flex-col gap-5 backdrop-blur-xl"
          style={{ background: "rgba(8,8,7,0.95)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.72rem] tracking-[0.2em] uppercase"
              style={{ color: "var(--muted)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
