"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    stars: 5,
    quote: "They fixed my laptop in under 2 hours. The technician explained everything clearly and the price was exactly what they quoted. Incredible service.",
    name: "Sarah M.",
    device: "MacBook Pro Repair",
    initials: "SM",
  },
  {
    stars: 5,
    quote: "Cracked my phone screen and they had it looking brand new same day. The 90-day warranty gave me real peace of mind. Highly recommend!",
    name: "James T.",
    device: "iPhone Screen Replacement",
    initials: "JT",
  },
  {
    stars: 5,
    quote: "Data recovery after a water-damaged tablet — I thought everything was lost. They saved 100% of my files. Worth every penny.",
    name: "Priya K.",
    device: "Tablet Data Recovery",
    initials: "PK",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#3c6e52" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Customer testimonials"
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
          <span className="section-label justify-center mb-4" style={{ color: "#3c6e52" }}>
            <span style={{ background: "#3c6e52", width: 24, height: 2, display: "inline-block", borderRadius: 1 }} />
            Customer Reviews
          </span>
          <h2
            className="font-display font-bold mt-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#111", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            What Our Customers Say
          </h2>
          <p style={{ marginTop: 12, fontSize: 15, color: "rgba(0,0,0,0.45)", maxWidth: 460, margin: "12px auto 0" }}>
            Over 5,000 repairs completed. Here&apos;s what real customers think.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="card-base"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.16,1,0.3,1] }}
              style={{ padding: "28px 24px", display: "flex", flexDirection: "column", gap: 16 }}
            >
              <Stars count={r.stars} />

              <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(0,0,0,0.65)", flex: 1 }}>
                &ldquo;{r.quote}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "linear-gradient(135deg, #3c6e52, #2d5440)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>{r.initials}</span>
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#111", lineHeight: 1.2 }}>{r.name}</p>
                  <p style={{ fontSize: 11, color: "rgba(0,0,0,0.4)", marginTop: 2, letterSpacing: "0.05em" }}>{r.device}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
