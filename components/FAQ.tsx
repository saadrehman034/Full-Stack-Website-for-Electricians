"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const faqs = [
  { q: "How long does a repair take?",         a: "Most repairs are completed same-day, typically within 1–3 hours. Complex repairs or parts sourcing may take up to 24–48 hours. We'll give you an accurate estimate before we start." },
  { q: "Do you offer a warranty on repairs?",   a: "Yes — every repair comes with a 90-day warranty covering parts and labour. If the same issue returns within 90 days, we'll fix it at no additional cost." },
  { q: "What devices do you repair?",           a: "We repair laptops, smartphones, tablets, desktop computers, monitors, gaming consoles, and more. If it has a circuit board, chances are we can fix it." },
  { q: "How much does a repair cost?",          a: "Pricing varies by device and issue. We provide a free, no-obligation diagnosis with a fixed quote before any work begins — no hidden fees, ever." },
  { q: "Do I need an appointment?",             a: "Walk-ins are welcome, but booking an appointment online or by phone guarantees the fastest service. We confirm your slot within minutes." },
  { q: "What if my device can't be repaired?",  a: "If we can't fix your device, you owe us nothing — not even a diagnostic fee. We'll also give you honest advice on your best next step." },
];

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.07, duration: 0.55 }}
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 16,
          padding: "22px 0", background: "none", border: "none",
          cursor: "pointer", textAlign: "left",
        }}
      >
        <span style={{ fontSize: "clamp(14px, 2vw, 15px)", fontWeight: 600, color: "rgba(255,255,255,0.88)", lineHeight: 1.4 }}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }}
          style={{
            flexShrink: 0,
            width: 32, height: 32,
            borderRadius: "50%",
            background: open ? "#3c6e52" : "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.25s ease",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={open ? "#fff" : "rgba(255,255,255,0.55)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
        style={{ overflow: "hidden" }}
      >
        <p ref={bodyRef} style={{ paddingBottom: 22, paddingLeft: 0, fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.45)", maxWidth: 640 }}>
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="py-20 md:py-28"
      style={{ background: "#0f1410", position: "relative", overflow: "hidden" }}
    >
      {/* subtle green ambient top-left */}
      <div style={{
        position: "absolute", top: -120, left: -120,
        width: 480, height: 480, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(60,110,82,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Left label col */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#3c6e52", marginBottom: 16,
            }}>
              <span style={{ width: 24, height: 1.5, background: "#3c6e52", display: "inline-block", borderRadius: 1 }} />
              FAQ
            </span>
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "#fff", lineHeight: 1.08, letterSpacing: "-0.01em" }}
            >
              Frequently Asked<br />
              <span style={{ color: "#3c6e52" }}>Questions</span>
            </h2>
            <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.35)", maxWidth: 300 }}>
              Can&apos;t find an answer? Call us or send a message — we respond within minutes.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{
                marginTop: 28, display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 26px", borderRadius: 9999, minHeight: 48,
                border: "1.5px solid rgba(60,110,82,0.6)",
                color: "#3c6e52", fontSize: 12, fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                textDecoration: "none", transition: "all 0.2s",
                background: "rgba(60,110,82,0.08)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(60,110,82,0.2)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(60,110,82,0.08)"; }}
            >
              Ask Us Anything
            </a>
          </motion.div>

          {/* Accordion col */}
          <div className="lg:col-span-3">
            {faqs.map((f, i) => (
              <Item key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
