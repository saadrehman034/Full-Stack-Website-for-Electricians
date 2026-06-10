"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const stats = [
  { val: 3,  suffix: "k+", label: "Devices Repaired" },
  { val: 5,  suffix: "k+", label: "Happy Customers" },
  { val: 98, suffix: "%",  label: "Customer Satisfaction" },
  { val: 5,  suffix: "+",  label: "Years Experience" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (1600 / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setN(target); clearInterval(id); }
      else setN(Math.floor(start));
    }, 16);
    return () => clearInterval(id);
  }, [inView, target]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export default function Stats() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="stats" ref={ref} className="relative overflow-hidden" aria-label="Statistics">

      {/* ── Full-bleed background image with parallax + Ken Burns ── */}
      <motion.div className="absolute inset-0" style={{ y: bgY }} aria-hidden="true">
        <div className="stats-bg-img relative w-full h-full">
          <Image
            src="/electrical-bg.png"
            alt=""
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>
      </motion.div>

      {/* ── Left-side dark vignette so text stays legible ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.08) 100%)",
        }}
        aria-hidden="true"
      />
      {/* ── Top edge fade ── */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent)" }}
        aria-hidden="true"
      />

      {/* ── Main content panel ── */}
      <div className="relative z-10 container-main" style={{ paddingTop: "5rem", paddingBottom: "10rem", minHeight: "620px" }}>

        {/* Top row: headline left + button/badge right */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-display font-bold text-white uppercase leading-tight max-w-sm"
            style={{ fontSize: "clamp(1.25rem, 2.8vw, 2rem)", letterSpacing: "0.03em" }}
          >
            Reliable Solutions For Every<br />Device You Depend On
          </motion.h2>

          {/* Right cluster: button + badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="flex flex-col items-start lg:items-end gap-5"
          >
            {/* Book a Service pill */}
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:bg-white/15"
              style={{ border: "1px solid rgba(255,255,255,0.55)" }}
              aria-label="Book a service"
            >
              Book a Service
            </button>

            {/* Certified badge block */}
            <div className="text-left lg:text-right">
              <p className="font-display font-bold text-white uppercase tracking-wide leading-snug"
                style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)" }}>
                Certified &amp;<br />Experienced<br />Technicians
              </p>
              <p className="text-white/45 text-xs mt-2 tracking-wide">3050 No, Devices repair</p>
              <p className="text-white/35 text-xs mt-0.5 tracking-widest uppercase">Sr-436346234</p>
            </div>
          </motion.div>
        </div>

        {/* Giant ghost "FO." — absolute bottom-left, bleeds into stats bar */}
        <div
          className="absolute bottom-0 left-0 pointer-events-none select-none"
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "clamp(7rem, 22vw, 17rem)",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(209, 202, 202, 0.88)",
            lineHeight: 0.82,
            paddingLeft: "1.5rem",
            paddingBottom: "17.5rem",
            transform: "translateY(42%)",
            zIndex: 20,
          }}
          aria-hidden="true"
        >
          FO.
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="relative z-10" style={{ background: "linear-gradient(to bottom, rgba(110,22,22,0.96) 0%, transparent 100%)" }}>
        <div className="container-main pt-32 pb-80 lg:pt-40 lg:pb-96">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.09, duration: 0.6 }}
                className="text-center"
              >
                <p
                  className="font-display font-bold text-white leading-none tabular-nums"
                  style={{ fontSize: "clamp(2.8rem, 8vw, 4.8rem)" }}
                >
                  <CountUp target={s.val} suffix={s.suffix} />
                </p>
                <p className="text-white/65 text-[13px] uppercase tracking-[0.14em] font-semibold mt-3">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
