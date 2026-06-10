"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MinimalistHeroProps {
  mainText: string;
  readMoreLabel?: string;
  readMoreHref?: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: { part1: string; part2: string };
  socialLinks?: { icon: LucideIcon; href: string }[];
  locationText?: string;
  className?: string;
}

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/50 transition-colors hover:text-white"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export const MinimalistHero = ({
  mainText,
  readMoreLabel = "Read More",
  readMoreHref = "#services",
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks = [],
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[100svh] w-full flex-col items-center justify-between overflow-hidden p-8 md:p-12",
        className
      )}
    >
      {/* ── Main content grid ── */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3 gap-8">

        {/* LEFT — eyebrow text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <p className="text-sm leading-relaxed text-white/70 max-w-xs mx-auto md:mx-0">
            {mainText}
          </p>
          <a
            href={readMoreHref}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(readMoreHref)?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-4 inline-block text-sm font-semibold text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all"
          >
            {readMoreLabel} →
          </a>
        </motion.div>

        {/* CENTER — glowing circle + person image */}
        <div className="relative order-1 md:order-2 flex justify-center items-end h-full">

          {/* Yellow glow circle */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="absolute z-0 rounded-full"
            style={{
              width:  "clamp(220px, 30vw, 420px)",
              height: "clamp(220px, 30vw, 420px)",
              bottom: 0,
              background: "radial-gradient(circle, rgba(234,179,8,0.85) 0%, rgba(234,179,8,0.4) 60%, transparent 80%)",
              filter: "blur(2px)",
            }}
          />

          {/* Person */}
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 object-contain object-bottom"
            style={{
              width: "clamp(200px, 28vw, 400px)",
              height: "auto",
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
            }}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          />
        </div>

        {/* RIGHT — "INSTANT / REPAIR" heading */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="z-20 order-3 flex items-center justify-center md:justify-start"
        >
          <h1
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 0.88,
              color: "rgba(255,248,230,0.92)",
              fontSize: "clamp(3.2rem, 6vw, 6.5rem)",
            }}
          >
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>

      {/* ── Footer row ── */}
      {(socialLinks.length > 0 || locationText) && (
        <footer className="z-30 flex w-full max-w-7xl items-center justify-between mt-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, i) => (
              <SocialIcon key={i} href={link.href} icon={link.icon} />
            ))}
          </motion.div>
          {locationText && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="text-sm font-medium text-white/55"
            >
              {locationText}
            </motion.p>
          )}
        </footer>
      )}
    </div>
  );
};
