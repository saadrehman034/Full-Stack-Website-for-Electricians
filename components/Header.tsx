"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home",        href: "#home"     },
  { label: "Technicians", href: "#services" },
  { label: "About Us",    href: "#stats"    },
  { label: "Process",     href: "#process"  },
  { label: "Contact",     href: "#contact"  },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => { for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`); },
      { threshold: 0.4 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const goTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 shadow-lg" : "py-5"
      }`}
      style={{ background: scrolled ? "rgba(18,18,18,0.96)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none" }}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); goTo("#home"); }}
          className="flex items-center gap-2.5 group"
          aria-label="InstantRepair"
        >
          <span
            className="w-8 h-8 rounded-sm flex items-center justify-center text-white text-sm font-bold transition-transform duration-300 group-hover:scale-110"
            style={{ background: "var(--grad-red)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
          </span>
          <span className="font-display text-white text-xl font-bold tracking-wider uppercase">
            FIXORA<span style={{ color: "rgb(var(--red))" }}>.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); goTo(l.href); }}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                active === l.href ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 ${
                  active === l.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
                style={{ background: "rgb(var(--red))" }}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button aria-label="Search" className="text-white/60 hover:text-white transition-colors p-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); goTo("#contact"); }}
            className="btn-primary text-xs py-2.5 px-6"
            aria-label="Call Now"
          >
            Call Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close" : "Menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden border-t border-white/10"
            style={{ background: "rgba(18,18,18,0.97)" }}
            aria-label="Mobile navigation"
          >
            <div className="container-main py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); goTo(l.href); }}
                  className="text-white/70 hover:text-white text-sm py-3 border-b border-white/5 last:border-0 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); goTo("#contact"); }}
                className="btn-primary mt-3 justify-center text-sm"
              >
                Free Diagnosis
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
