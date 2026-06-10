"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const [input,     setInput]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error,     setError]     = useState("");

  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) { setError("Please enter your email or phone."); return; }
    setError(""); setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "#111" }}
      aria-label="Contact and free diagnosis"
    >
      {/* ── Watermark background text ── */}
      <p className="watermark" aria-hidden="true">FIVORA</p>

      {/* Subtle red glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(229,57,53,0.18) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label justify-center mb-6 text-white/40">Free Consultation</span>

          <h2
            className="text-display font-bold text-white mt-4"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            LET&apos;S FIX YOUR
            <br />
            <span style={{ color: "rgb(var(--red))" }}>DEVICES</span>
          </h2>

          <p className="text-white/55 text-base mt-6 mb-12 max-w-lg mx-auto leading-relaxed">
            Tell us what&apos;s wrong. Our technicians will reach out within 24 hours
            with a free diagnosis — zero commitment required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.65 }}
        >
          {!submitted ? (
            <form onSubmit={handle} noValidate className="flex flex-col items-center gap-4" aria-label="Free diagnosis form">
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => { setInput(e.target.value); setError(""); }}
                  placeholder="Enter your email or phone number"
                  className="flex-1 bg-white/8 border border-white/12 text-white placeholder-white/30 text-sm px-5 py-4 outline-none transition-all duration-200 rounded-sm focus:border-white/35 min-h-[52px]"
                  aria-label="Email or phone"
                  aria-required="true"
                />
                <button type="submit" className="btn-primary flex-shrink-0 justify-center min-h-[52px]">
                  Get Free Diagnosis
                </button>
              </div>
              {error && <p className="text-red-400 text-sm" role="alert">{error}</p>}
              <p className="text-white/30 text-xs uppercase tracking-[0.12em]">No credit card · No obligation · 24hr response</p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-white/10 bg-white/5 rounded-sm p-10 max-w-md mx-auto"
              role="status"
            >
              <div
                className="w-14 h-14 rounded-sm flex items-center justify-center mx-auto mb-5"
                style={{ background: "var(--grad-red)", boxShadow: "var(--shadow-red)" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="font-display text-white font-semibold text-2xl uppercase mb-2">We&apos;ve Got It!</h3>
              <p className="text-white/50 text-sm">Our team will contact you within 24 hours with a free diagnosis plan.</p>
              <button
                onClick={() => { setSubmitted(false); setInput(""); }}
                className="mt-6 text-xs uppercase tracking-widest transition-colors duration-200"
                style={{ color: "rgb(var(--red))" }}
              >
                Submit another →
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-10 border-t border-white/8"
        >
          {[
            { icon: "🔒", label: "Secure & Confidential" },
            { icon: "⚡", label: "24hr Response"         },
            { icon: "✅", label: "No Obligation"          },
            { icon: "🏆", label: "Certified Technicians"  },
          ].map((t) => (
            <span key={t.label} className="flex items-center gap-2 text-white/35 text-xs uppercase tracking-[0.12em]">
              <span>{t.icon}</span>{t.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
