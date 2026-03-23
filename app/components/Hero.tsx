"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden pt-24">

      {/* Ambient glow orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)", animation: "pulse 6s ease-in-out infinite" }}
      />
      <div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)", animation: "pulse 8s ease-in-out infinite reverse" }}
      />

      <div className="relative z-10 max-w-3xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
          style={{ color: "var(--gold)" }}
        >
          <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
          <span className="text-[0.68rem] tracking-[0.3em] uppercase">
            Product · Website · SEO · Bengaluru
          </span>
          <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="leading-[0.95] mb-3"
          style={{ fontFamily: "var(--ff-display)", fontSize: "clamp(4rem, 10vw, 8rem)", fontWeight: 300 }}
        >
          Aariz
          <em className="block" style={{ fontStyle: "italic", color: "var(--gold)" }}>
            Naseer
          </em>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[0.78rem] tracking-[0.25em] uppercase mb-8"
          style={{ color: "var(--muted)" }}
        >
          AI Product (Website &amp; SEO) @ Zoca
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "var(--ff-display)", fontSize: "1.2rem", fontStyle: "italic", color: "rgba(240,234,214,0.6)", maxWidth: "480px" }}
        >
          &ldquo;Designing intelligent experiences that grow businesses — one pixel, one keyword, one insight at a time.&rdquo;
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <a href="#projects" className="btn-gold">View My Work</a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.62rem] tracking-[0.25em] uppercase" style={{ color: "var(--muted)" }}>
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, var(--gold), transparent)", animation: "scrollGrow 2s ease-in-out infinite" }}
        />
      </motion.div>
    </section>
  );
}