"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home",     href: "#home"     },
  { label: "Services", href: "#services" },
  { label: "Process",  href: "#process"  },
  { label: "Stats",    href: "#stats"    },
  { label: "Contact",  href: "#contact"  },
];
const serviceList = ["Laptop Repair", "Phone Repair", "Tablet Repair", "Monitor Repair", "Device Care", "Data Recovery"];

const scroll = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent,  setSent]  = useState(false);

  return (
    <footer className="bg-[#0e0e0e] border-t border-white/6" aria-label="Footer">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scroll("#home"); }}
              className="flex items-center gap-2.5 mb-5 group"
              aria-label="InstantRepair"
            >
              <span
                className="w-8 h-8 rounded-sm flex items-center justify-center text-white text-sm transition-transform duration-300 group-hover:scale-110"
                style={{ background: "var(--grad-red)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
              </span>
              <span className="font-display text-white text-base font-semibold uppercase tracking-wide">
                Instant<span style={{ color: "rgb(var(--red))" }}>Repair</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Professional device repair with 30+ years of expertise. Fast, reliable, guaranteed.
            </p>
            <div className="flex gap-2.5">
              {["f", "x", "in", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-white/10 hover:border-white/30 text-white/40 hover:text-white/80 rounded-sm flex items-center justify-center text-xs font-bold uppercase tracking-wider transition-all duration-200"
                  aria-label={s}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-display text-white text-xs font-semibold uppercase tracking-[0.18em] mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); scroll(l.href); }}
                    className="text-white/40 hover:text-white/80 text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-white text-xs font-semibold uppercase tracking-[0.18em] mb-5">Services</h3>
            <ul className="flex flex-col gap-3">
              {serviceList.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scroll("#services"); }}
                    className="text-white/40 hover:text-white/80 text-sm transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="font-display text-white text-xs font-semibold uppercase tracking-[0.18em] mb-5">Contact</h3>
            <address className="not-italic flex flex-col gap-3 mb-7">
              {[
                { label: "+1 (555) 123-4567",          href: "tel:+15551234567"          },
                { label: "hello@instantrepair.com",     href: "mailto:hello@instantrepair.com" },
                { label: "123 Repair St, Tech City",    href: "#"                          },
              ].map((c) => (
                <a key={c.label} href={c.href} className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200">{c.label}</a>
              ))}
            </address>

            <h4 className="font-display text-white text-xs font-semibold uppercase tracking-[0.16em] mb-3">Newsletter</h4>
            {!sent ? (
              <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSent(true); }} className="flex gap-2">
                <input
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email" required
                  className="flex-1 min-w-0 bg-white/5 border border-white/10 focus:border-white/25 text-white placeholder-white/25 text-xs px-3 py-2.5 rounded-sm outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="text-white text-xs font-bold uppercase tracking-wide px-4 py-2.5 rounded-sm transition-all duration-200 hover:opacity-90 flex-shrink-0"
                  style={{ background: "var(--grad-red)" }}
                >
                  Join
                </button>
              </form>
            ) : (
              <p className="text-sm" style={{ color: "rgb(var(--red))" }}>Subscribed ✓</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} InstantRepair. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms", "Cookies"].map((t) => (
              <a key={t} href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors duration-200">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
