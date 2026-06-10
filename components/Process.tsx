"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/* Electrician at work — provided image */
const PROCESS_IMG = "/process-img.webp";


const steps = [
  {
    n: "01",
    title: "Schedule a Visit",
    desc: "Book online or call us — we confirm your slot within minutes. Available 7 days a week.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    n: "02",
    title: "Expert Assessment",
    desc: "Our certified electrician arrives fully equipped, diagnoses the issue, and gives you a fixed quote.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    n: "03",
    title: "Precise Repair",
    desc: "We fix it right the first time using premium-grade parts. Every job comes with a 90-day warranty.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Process() {
  const hRef    = useRef(null);
  const hInView = useInView(hRef, { once: true, margin: "-80px" });
  const lRef    = useRef(null);
  const lInView = useInView(lRef, { once: true, margin: "-80px" });
  const rRef    = useRef(null);
  const rInView = useInView(rRef, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#0f0f0f" }}
      aria-label="Our process"
    >
      {/* ── Ambient background glow — warm amber, matches the electrical box image ── */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(180,120,40,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 10% 90%, rgba(229,57,53,0.07) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* ── Subtle grid pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px),
                            repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)`,
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">

        {/* ── Section header ── */}
        <motion.div
          ref={hRef}
          initial={{ opacity: 0, y: 28 }}
          animate={hInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <span className="section-label mb-4">How It Works</span>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-4">
            <h2
              className="text-display font-bold text-white"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Simple, Transparent
              <br />
              <span style={{ color: "rgb(var(--red))" }}>Process</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs lg:text-right">
              From booking to completion — we keep you informed every step of the way.
            </p>
          </div>

          {/* Divider line */}
          <div className="mt-8 h-px w-full" style={{ background: "linear-gradient(to right, rgba(229,57,53,0.5), rgba(255,255,255,0.08), transparent)" }} />
        </motion.div>

        {/* ── 2-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: numbered steps ── */}
          <motion.div
            ref={lRef}
            variants={containerVariants}
            initial="hidden"
            animate={lInView ? "visible" : "hidden"}
            className="flex flex-col gap-2"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                variants={itemVariants}
                className="group relative flex gap-5 pb-10"
              >
                {/* Vertical connector */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-[22px] top-12 w-px"
                    style={{
                      height: "calc(100% - 24px)",
                      background: "linear-gradient(to bottom, rgba(229,57,53,0.4), rgba(255,255,255,0.06))",
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Step number + icon circle */}
                <div className="flex-shrink-0 relative">
                  {/* Outer ring on hover */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "var(--grad-red)",
                      boxShadow: "0 0 0 0 rgba(229,57,53,0.4)",
                    }}
                  >
                    <span className="text-white">{s.icon}</span>
                  </div>
                  {/* Subtle glow behind circle */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                    style={{ background: "rgba(229,57,53,0.4)" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Step content */}
                <div className="pt-2 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="font-display text-[10px] font-bold tracking-[0.2em] uppercase"
                      style={{ color: "rgba(229,57,53,0.7)" }}
                    >
                      Step {s.n}
                    </span>
                  </div>
                  <h3 className="font-display text-white font-semibold text-lg uppercase tracking-wide mb-2 group-hover:text-white/90 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors">
                    {s.desc}
                  </p>
                </div>

                {/* Ghost number — large background numeral */}
                <span
                  className="absolute right-0 top-0 font-display font-bold text-7xl leading-none pointer-events-none select-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity"
                  style={{ color: "#fff" }}
                  aria-hidden="true"
                >
                  {s.n}
                </span>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={lInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.65 }}
              className="flex gap-3 mt-2"
            >
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
                aria-label="Book now"
              >
                Book Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/12 text-white/50 hover:text-white/80 hover:border-white/25 text-sm font-display uppercase tracking-wide rounded-sm transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.32 8.55a19.79 19.79 0 01-3.07-8.68 2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 6a16 16 0 006 6l.67-.67a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 13.92z"/>
                </svg>
                Call Us
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: vintage electrical box image ── */}
          <motion.div
            ref={rRef}
            initial={{ opacity: 0, x: 44, scale: 0.97 }}
            animate={rInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative"
          >
            {/* Main image container */}
            <div
              className="relative rounded-sm overflow-hidden"
              style={{
                aspectRatio: "16/9",
                boxShadow: "0 32px 100px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <Image
                src={PROCESS_IMG}
                alt="Electrician performing professional electrical repair work"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* Dark vignette overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.45) 100%)",
                }}
                aria-hidden="true"
              />

              {/* Warm amber tint — matches the bronze/copper of the electrical box */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(160,100,30,0.25) 0%, transparent 55%)",
                }}
                aria-hidden="true"
              />

              {/* Corner accent lines */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20" aria-hidden="true" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/20" aria-hidden="true" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20" aria-hidden="true" />

              {/* Experience badge — top left */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
                className="absolute top-6 left-6 rounded-sm p-4 text-white"
                style={{
                  background: "rgba(15,15,15,0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
                aria-hidden="true"
              >
                <p
                  className="font-display font-bold text-3xl leading-none"
                  style={{ color: "rgb(var(--red))" }}
                >
                  30+
                </p>
                <p className="text-white/55 text-[10px] uppercase tracking-widest mt-1">Years Exp</p>
              </motion.div>
            </div>

            {/* Floating satisfaction badge — bottom left, outside the card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 1.2 }}
              className="absolute -bottom-5 -left-5 rounded-sm p-4 flex items-center gap-3"
              style={{
                background: "rgba(20,20,20,0.95)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
              aria-hidden="true"
            >
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--grad-red)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <p className="font-display text-white font-semibold text-sm uppercase tracking-wide">98% Satisfied</p>
                <p className="text-white/35 text-[11px] tracking-wide mt-0.5">Verified Reviews</p>
              </div>
            </motion.div>

            {/* Warranty badge — right side */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }}
              className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-sm p-5 text-center"
              style={{
                background: "rgba(15,15,15,0.92)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(229,57,53,0.25)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                rotate: "0deg",
              }}
              aria-hidden="true"
            >
              <div style={{ writingMode: "vertical-rl" }}>
                <p className="font-display text-white/70 text-[10px] uppercase tracking-[0.2em]">90-Day</p>
                <p className="font-display text-white font-bold text-sm uppercase tracking-wide mt-1" style={{ color: "rgb(var(--red))" }}>Warranty</p>
              </div>
            </motion.div>

            {/* Decorative glow behind image */}
            <div
              className="absolute -inset-4 -z-10 rounded-sm opacity-30 blur-2xl"
              style={{ background: "radial-gradient(ellipse, rgba(180,120,40,0.3) 0%, rgba(229,57,53,0.15) 50%, transparent 80%)" }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
