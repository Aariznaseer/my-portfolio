"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx.current}px`;
        ringRef.current.style.top = `${ry.current}px`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    animate();

    const hoverEls = document.querySelectorAll("a, button, .project-card");
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (ringRef.current)
          ringRef.current.style.transform = "translate(-50%,-50%) scale(2)";
      });
      el.addEventListener("mouseleave", () => {
        if (ringRef.current)
          ringRef.current.style.transform = "translate(-50%,-50%) scale(1)";
      });
    });

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="hidden md:block fixed w-[6px] h-[6px] bg-[var(--gold)] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ transition: "transform 0.1s" }}
      />
      <div
        ref={ringRef}
        className="hidden md:block fixed w-8 h-8 border border-[rgba(201,168,76,0.5)] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ transition: "transform 0.3s ease" }}
      />
    </>
  );
}
