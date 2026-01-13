"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import goldBarsHero from "@/assets/hero-img.png";
/* ------------------ FEATURES ------------------ */
import { ShieldCheck, Vault, Zap } from "lucide-react";

const features = [
  {
    title: "Pure Gold & Silver Holdings",
    subtitle: "Invest in 24K gold and 999 silver securely",
    icon: ShieldCheck,
  },
  {
    title: "Globally Insured Vaults",
    subtitle: "Safe storage across trusted international vaults",
    icon: Vault,
  },
  {
    title: "Instant Buy, Sell & Redeem",
    subtitle: "Real-time transactions anytime, anywhere",
    icon: Zap,
  },
];


/* ------------------ COMPONENT ------------------ */
export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  /* -------- SCROLL PARALLAX -------- */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageParallaxY = useTransform(scrollYProgress, [0, 0.7], [0, 70]);
  const imageScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.94]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4], [0.25, 0.55]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-navy-900"
    >
      {/* -------- BACKGROUND -------- */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--gold-400)/0.35),_transparent_60%)]"
      />

      {/* -------- CONTENT -------- */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
          {/* ---------- LEFT ---------- */}
          <div className="order-2 lg:order-1 space-y-10">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block text-sm tracking-[0.35em] uppercase text-gold-300/80"
            >
              Just Gold & Silver Savings
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-6xl xl:text-7xl font-serif font-semibold leading-[1.1] text-white"
            >
              Build Wealth in
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold-400 via-gold-200 to-silver-200">
                Gold & Silver
              </span>
              Savings
            </motion.h1>

            {/* ---------- FEATURE CARDS ---------- */}
            <div className="grid sm:grid-cols-3 gap-6 pt-10">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-gold-400/15 
  bg-gradient-to-b from-navy-800/80 to-navy-900/90 
  backdrop-blur-xl px-6 py-6 
  shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
                >
                  {/* Subtle edge highlight (no animation) */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl
    shadow-[inset_0_0_0_1px_rgba(255,215,120,0.25)]"
                  />

                  {/* Icon */}
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/10 text-gold-300">
                    <f.icon size={22} strokeWidth={1.6} />
                  </div>

                  {/* Text */}
                  <h4 className="text-sm font-semibold text-gold-200 tracking-wide">
                    {f.title}
                  </h4>
                  <p className="mt-1 text-xs text-gray-400">{f.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <motion.div
            style={{ y: imageParallaxY, scale: imageScale }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            {/* GOLD + SILVER AMBIENT GLOW */}
            <motion.div
              animate={{ opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -z-10 
      bg-[radial-gradient(circle_at_center,rgba(255,215,120,0.35) 0%,rgba(192,192,192,0.2) 40%,transparent 70%)] 
      blur-3xl scale-110"
            />

            {/* FLOATING IMAGE WITH FASTER AND LARGER Y MOTION */}
            <motion.img
              src={goldBarsHero}
              alt="Gold & Silver Investment"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -20, 0], // increased Y displacement
              }}
              transition={{
                opacity: { duration: 0.6, ease: "easeOut" },
                scale: { duration: 0.6, ease: "easeOut" },
                y: {
                  duration: 1.5, // faster movement
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative z-10 max-w-lg xl:max-w-2xl 
      drop-shadow-[0_40px_80px_rgba(0,0,0,0.65)]"
            />
          </motion.div>
        </div>
      </div>

      {/* ---------- SCROLL INDICATOR ---------- */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-300/60 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
