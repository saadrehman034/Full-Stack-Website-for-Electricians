"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = ["PERF⚡ROCKS", "NCR", "monday.com", "supabase", "ZULIP", "WOOpra"];

const leftStats = [
  { num: "30+", label: "Years Experience" },
  { num: "5k+", label: "Happy Clients" },
];

const rightBadges = [
  { icon: "⚡", val: "98%",      sub: "Satisfaction Rate" },
  { icon: "🔧", val: "Same Day", sub: "Service Available" },
  { icon: "✓",  val: "90-Day",  sub: "Work Guarantee" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        height: "100svh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        background: "#3c6e52",
      }}
    >
      {/* grain */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "180px",
      }} />

      {/* header spacer */}
      <div style={{ height: 68, flexShrink: 0 }} />

      {/* ── TOP META (hidden on mobile) ── */}
      <p className="hero-meta-text" style={{
        position: "absolute", top: 86, left: "clamp(20px, 4vw, 60px)",
        margin: 0, zIndex: 50, color: "rgba(255,255,255,0.45)",
        fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
      }}>
        Certified · Same-Day · 90-Day Guarantee
      </p>
      <p className="hero-meta-text" style={{
        position: "absolute", top: 86, right: "clamp(20px, 4vw, 60px)",
        margin: 0, zIndex: 50, color: "rgba(255,255,255,0.45)",
        fontSize: 10, fontWeight: 700, letterSpacing: "0.2em",
        textTransform: "uppercase", textAlign: "right",
      }}>
        Available Nationwide
      </p>

      {/* LEFT GLOW */}
      <div aria-hidden style={{
        position: "absolute", left: 0,
        top: "clamp(80px, 12vh, 140px)",
        width: "clamp(260px, 34vw, 480px)",
        height: "clamp(260px, 34vw, 480px)",
        zIndex: 5, pointerEvents: "none",
        transform: "translate(-35%, -10%)",
      }}>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          style={{
            width: "100%", height: "100%", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,200,80,0.18) 0%, rgba(220,160,40,0.08) 50%, transparent 72%)",
            filter: "blur(28px)",
          }}
        />
      </div>

      {/* RIGHT GLOW */}
      <div aria-hidden style={{
        position: "absolute", right: 0,
        top: "clamp(80px, 12vh, 140px)",
        width: "clamp(260px, 34vw, 480px)",
        height: "clamp(260px, 34vw, 480px)",
        zIndex: 5, pointerEvents: "none",
        transform: "translate(35%, -10%)",
      }}>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.25 }}
          style={{
            width: "100%", height: "100%", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,200,80,0.18) 0%, rgba(220,160,40,0.08) 50%, transparent 72%)",
            filter: "blur(28px)",
          }}
        />
      </div>

      {/* ══════════════════════════════════
          LEFT PANEL  — plain div hides on mobile, motion.div inside for fx
      ══════════════════════════════════ */}
      <div className="hero-side-panel" style={{
        position: "absolute",
        left: "clamp(24px, 5vw, 72px)",
        top: "clamp(110px, 16vh, 170px)",
        zIndex: 50,
        flexDirection: "column",
        gap: 14,
        maxWidth: 170,
      }}>
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.85, ease: [0.16,1,0.3,1] }}
          whileHover={{ filter: "drop-shadow(0 0 32px rgba(255,210,80,0.55)) drop-shadow(0 0 64px rgba(255,180,40,0.25))" }}
          style={{ display: "flex", flexDirection: "column", gap: 14, cursor: "default" }}
        >
          {/* heading */}
          <div>
            <p style={{
              margin: 0, color: "rgba(255,255,255,0.38)",
              fontSize: 10, fontWeight: 700, letterSpacing: "0.22em",
              textTransform: "uppercase", marginBottom: 10,
            }}>
              #1 Electrical Service
            </p>
            <h1 style={{
              margin: 0,
              fontFamily: "var(--font-oswald, Oswald), sans-serif",
              fontWeight: 700, textTransform: "uppercase",
              fontSize: "clamp(0.95rem, 1.35vw, 1.25rem)",
              color: "#fff", lineHeight: 1.2, letterSpacing: "0.01em",
            }}>
              Expert Care<br />For Every<br />
              <span style={{ color: "rgba(255,255,255,0.5)" }}>Circuit.</span>
            </h1>
          </div>

          {/* stat pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {leftStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.65, ease: [0.16,1,0.3,1] }}
                whileHover={{
                  boxShadow: "0 0 20px rgba(255,210,80,0.45), 0 0 40px rgba(255,180,40,0.18)",
                  borderColor: "rgba(255,210,80,0.35)",
                  transition: { duration: 0.2 },
                }}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 5, padding: "5px 10px",
                  backdropFilter: "blur(6px)",
                  cursor: "default",
                }}
              >
                <span style={{ fontFamily: "var(--font-oswald, Oswald), sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>{s.num}</span>
                <span style={{ fontSize: 8, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82, duration: 0.6, ease: [0.16,1,0.3,1] }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgb(229,57,53)", color: "#fff",
              fontWeight: 700, fontSize: 9, letterSpacing: "0.14em",
              textTransform: "uppercase", textDecoration: "none",
              padding: "7px 13px", borderRadius: 4,
              boxShadow: "0 4px 24px rgba(229,57,53,0.35)",
              width: "fit-content",
            }}
          >
            Book Service
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* ══════════════════════════════════
          RIGHT PANEL — plain div hides on mobile
      ══════════════════════════════════ */}
      <div className="hero-side-panel" style={{
        position: "absolute",
        right: "clamp(24px, 5vw, 72px)",
        top: "clamp(110px, 16vh, 170px)",
        zIndex: 50,
        flexDirection: "column",
        gap: 10,
      }}>
        {rightBadges.map((b, i) => (
          <motion.div
            key={b.val}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 + i * 0.12, duration: 0.75, ease: [0.16,1,0.3,1] }}
            whileHover={{
              boxShadow: "0 0 28px rgba(255,210,80,0.50), 0 0 60px rgba(255,180,40,0.22)",
              borderColor: "rgba(255,210,80,0.4)",
              background: "rgba(255,200,60,0.10)",
              transition: { duration: 0.25 },
            }}
            style={{
              background: "rgba(0,0,0,0.22)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 7,
              padding: "9px 13px",
              backdropFilter: "blur(10px)",
              display: "flex", alignItems: "center", gap: 10,
              minWidth: 150,
              cursor: "default",
            }}
          >
            <span style={{ fontSize: 26, lineHeight: 1 }}>{b.icon}</span>
            <div>
              <p style={{
                margin: 0,
                fontFamily: "var(--font-oswald, Oswald), sans-serif",
                fontWeight: 700, fontSize: "1.25rem", color: "#fff", lineHeight: 1.1,
              }}>{b.val}</p>
              <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 3 }}>
                {b.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ══════════════════════════════════
          PERSON  z-20
      ══════════════════════════════════ */}
      <div style={{
        position: "absolute",
        bottom: "calc(56px + 18vh)",
        left: "50%",
        transform: "translateX(-50%)",
        width: "clamp(260px, 80vw, 920px)",
        height: "clamp(280px, 72vh, 820px)",
        zIndex: 20,
        maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16,1,0.3,1], delay: 0.12 }}
          style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ delay: 2.2, duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "100%", height: "100%" }}
          >
            <Image
              src="/2.png"
              alt="Professional electrician"
              width={2500}
              height={2160}
              priority
              style={{
                width: "100%", height: "100%", display: "block",
                objectFit: "cover", objectPosition: "top center",
                transform: "scaleX(1.12)",
                filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.5))",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════
          INSTANT REPAIR  z-30
          hero-instant-wrap: on-person on mobile, below on desktop
      ══════════════════════════════════ */}
      <div className="hero-instant-wrap" style={{
        position: "absolute",
        bottom: "calc(56px + 8vh)",   /* desktop default — overridden on mobile via CSS */
        left: 0, right: 0,
        textAlign: "center",
        zIndex: 30,
        pointerEvents: "none", userSelect: "none",
      }}>
        <motion.span
          className="hero-headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.16,1,0.3,1], delay: 0.05 }}
          style={{
            fontFamily: "var(--font-oswald, Oswald), sans-serif",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            color: "#ffffff",
            display: "block",
            lineHeight: 0.92,
            textShadow: "0 4px 32px rgba(0,0,0,0.55)",
          }}
        >
          INSTANT REPAIR
        </motion.span>
      </div>

      {/* ══════════════════════════════════
          MOBILE-ONLY: stats strip (top) + CTA (bottom)
      ══════════════════════════════════ */}

      {/* Mid-body stats strip — mobile only */}
      <div className="hero-mobile-only" style={{
        position: "absolute",
        top: "38%",
        left: 0, right: 0,
        justifyContent: "center",
        gap: 8,
        zIndex: 50,
        pointerEvents: "none",
        flexWrap: "wrap",
        padding: "0 20px",
      }}>
        {[
          { icon: "⚡", text: "Same-Day" },
          { icon: "✓", text: "90-Day Warranty" },
          { icon: "★", text: "5k+ Clients" },
        ].map((b) => (
          <motion.span
            key={b.text}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16,1,0.3,1] }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              background: "rgba(0,0,0,0.28)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: 9999,
              padding: "5px 12px",
              backdropFilter: "blur(10px)",
              fontSize: 10, fontWeight: 700,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#3c6e52" }}>{b.icon}</span>
            {b.text}
          </motion.span>
        ))}
      </div>

      {/* Book Service CTA — mobile only */}
      <div className="hero-mobile-only" style={{
        position: "absolute",
        bottom: "calc(56px + 9vh)",
        left: 0, right: 0,
        justifyContent: "center",
        zIndex: 35,
      }}>
        <motion.a
          href="#services"
          onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16,1,0.3,1] }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgb(229,57,53)",
            color: "#fff",
            fontWeight: 700, fontSize: 11, letterSpacing: "0.14em",
            textTransform: "uppercase", textDecoration: "none",
            padding: "11px 22px", borderRadius: 9999,
            boxShadow: "0 6px 28px rgba(229,57,53,0.45)",
            minHeight: 44,
          }}
        >
          Book Service
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </motion.a>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "calc(56px + 4px)",
          left: "clamp(20px, 4vw, 60px)",
          zIndex: 50,
          display: "flex", alignItems: "center", gap: 8,
          pointerEvents: "none",
        }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}
        >
          <span style={{ display: "block", width: 1, height: 24, background: "rgba(255,255,255,0.3)" }} />
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1l4 4 4-4" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
      </motion.div>

      {/* bottom reddish glow */}
      <div aria-hidden style={{
        position: "absolute", bottom: 56, left: 0, right: 0, height: "40%",
        background: "linear-gradient(to top, rgba(160,20,20,0.60), rgba(120,15,15,0.22) 55%, transparent)",
        zIndex: 25, pointerEvents: "none",
      }} />

      {/* ── WHITE BRAND TICKER ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 40,
          background: "#ffffff", height: 56,
          display: "flex", alignItems: "center",
          overflow: "hidden", borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div aria-hidden style={{ position:"absolute", left:0, top:0, bottom:0, width:60, background:"linear-gradient(to right,#fff,transparent)", zIndex:2, pointerEvents:"none" }} />
        <div aria-hidden style={{ position:"absolute", right:0, top:0, bottom:0, width:60, background:"linear-gradient(to left,#fff,transparent)", zIndex:2, pointerEvents:"none" }} />
        <div className="marquee-run" style={{ display:"flex", width:"max-content" }}>
          {[...brands,...brands,...brands,...brands].map((b,i) => (
            <span key={i} style={{ padding:"0 40px", color:"#1a1a1a", fontSize:13, fontWeight:700, letterSpacing:"0.05em", whiteSpace:"nowrap" }}>
              {b}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
