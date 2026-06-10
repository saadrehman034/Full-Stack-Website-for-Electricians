"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "$49",
    desc: "Fast fixes for common issues",
    features: ["Screen crack assessment", "Battery diagnosis", "Software troubleshoot", "Basic cleaning", "30-day warranty"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Standard",
    price: "$99",
    desc: "Most popular for full repairs",
    features: ["Screen replacement", "Battery replacement", "Charging port fix", "Water damage treatment", "Data backup", "90-day warranty"],
    cta: "Book Now",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "$179",
    desc: "Complete device overhaul",
    features: ["All Standard features", "Logic board repair", "Full data recovery", "Component-level repair", "Priority same-day service", "1-year warranty"],
    cta: "Get Premium",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing plans"
      className="py-20 md:py-28"
      style={{ background: "#f9f9f7" }}
    >
      <div className="container-main">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3c6e52", display: "block", marginBottom: 12 }}>
            Transparent Pricing
          </span>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#111", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Simple, Honest Pricing
          </h2>
          <p style={{ marginTop: 12, fontSize: 15, color: "rgba(0,0,0,0.45)", maxWidth: 460, margin: "12px auto 0" }}>
            No hidden fees. Free diagnosis before we start. Pay only if you&apos;re satisfied.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mobile-scroll-row items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.16,1,0.3,1] }}
              style={{
                background: p.highlight ? "#111" : "#fff",
                border: p.highlight ? "2px solid #3c6e52" : "1px solid rgba(0,0,0,0.08)",
                borderRadius: 20,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "relative",
                boxShadow: p.highlight ? "0 20px 60px rgba(60,110,82,0.20)" : "0 4px 20px rgba(0,0,0,0.06)",
                transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease",
              }}
              whileHover={{ y: -6, boxShadow: p.highlight ? "0 28px 80px rgba(60,110,82,0.28)" : "0 16px 48px rgba(0,0,0,0.12)" } as never}
            >
              {/* Badge */}
              {p.badge && (
                <span style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: "#3c6e52", color: "#fff",
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                  padding: "5px 16px", borderRadius: 9999,
                  whiteSpace: "nowrap",
                }}>
                  {p.badge}
                </span>
              )}

              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: p.highlight ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.35)", marginBottom: 8 }}>
                {p.name}
              </p>

              <div style={{ marginBottom: 6 }}>
                <span style={{ fontFamily: "var(--font-oswald, Oswald), sans-serif", fontSize: "clamp(2.4rem, 5vw, 3rem)", fontWeight: 700, color: p.highlight ? "#fff" : "#111", lineHeight: 1 }}>
                  {p.price}
                </span>
                <span style={{ fontSize: 13, color: p.highlight ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)", marginLeft: 4 }}>/ repair</span>
              </div>

              <p style={{ fontSize: 13, color: p.highlight ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.45)", marginBottom: 24, lineHeight: 1.5 }}>
                {p.desc}
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, flex: 1, marginBottom: 28 }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: p.highlight ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)", lineHeight: 1.4 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.highlight ? "#3c6e52" : "#3c6e52"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }} aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  width: "100%", padding: "14px 20px",
                  background: p.highlight ? "#3c6e52" : "transparent",
                  border: p.highlight ? "none" : "1.5px solid rgba(0,0,0,0.18)",
                  borderRadius: 9999,
                  color: p.highlight ? "#fff" : "#111",
                  fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  minHeight: 48,
                }}
                onMouseEnter={(e) => {
                  if (!p.highlight) (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  if (!p.highlight) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }}
              >
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-10"
          style={{ fontSize: 12, color: "rgba(0,0,0,0.35)", letterSpacing: "0.05em" }}
        >
          All prices are starting estimates. Final price confirmed after free diagnosis. No surprise charges.
        </motion.p>
      </div>
    </section>
  );
}
