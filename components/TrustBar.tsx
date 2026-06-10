"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "TechCorp",   abbr: "TC"  },
  { name: "FixPro",     abbr: "FP"  },
  { name: "RepairHub",  abbr: "RH"  },
  { name: "Gadgetwise", abbr: "GW"  },
  { name: "DeviceMax",  abbr: "DM"  },
  { name: "SpeedFix",   abbr: "SF"  },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Trusted by customers"
      style={{ background: "#f9f9f7", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
      className="py-10"
    >
      <div className="container-main">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
          style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }}
        >
          Trusted by 5,000+ customers nationwide
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {logos.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 20px",
                borderRadius: 10,
                border: "1px solid rgba(0,0,0,0.08)",
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              {/* placeholder logo SVG */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="rgb(229,57,53)" opacity="0.12" />
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
                  fill="rgb(229,57,53)" fontSize="10" fontWeight="700" fontFamily="system-ui">
                  {l.abbr}
                </text>
              </svg>
              <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(0,0,0,0.5)", letterSpacing: "0.04em" }}>
                {l.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
