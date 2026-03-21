"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { heroData } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pb-16"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-48 w-48 rounded-full bg-gold/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[20%] right-[10%] h-72 w-72 rounded-full bg-paper/[0.03] blur-3xl" />

      <div className="mx-auto grid w-full max-w-[1440px] items-end gap-12 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0 space-y-10">
          <div className="space-y-4">
            <p className="mono-label text-paper/65">{heroData.eyebrow}</p>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="space-y-1 sm:space-y-2"
            >
              <span className="display-title block text-paper">Abdallah</span>
              <span className="display-title display-outline block leading-[0.8] text-transparent">
                Dridi
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.12 }}
            className="grid gap-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)]"
          >
            <div className="min-w-0">
              <p
                data-cursor="text"
                className="max-w-[24ch] font-serif text-[clamp(1.38rem,2vw,2.02rem)] italic leading-[1.14] text-paper"
              >
                {heroData.lead}
              </p>
            </div>

            <div className="min-w-0 flex flex-col justify-end gap-6 lg:items-end">
              <ul className="space-y-3 text-[11px] uppercase tracking-[0.24em] text-paper/58">
                {heroData.metadata.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[0.55rem] h-px w-8 bg-gold/60" />
                    <span className="max-w-[30ch]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {heroData.quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    data-cursor="link"
                    className="cta-chip"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22 }}
          className="flex w-full max-w-[340px] flex-col gap-5 justify-self-center sm:max-w-[380px] lg:justify-self-end lg:self-end"
        >
          <div className="hero-portrait-shell">
            <div className="hero-portrait-frame">
              <Image
                src="/images/abdallah-portrait.jpg"
                alt="Abdallah Dridi examining hardware."
                width={2680}
                height={2466}
                priority
                className="hero-portrait-image"
                sizes="(max-width: 1024px) 80vw, 360px"
              />
              <div aria-hidden="true" className="hero-portrait-overlay" />
            </div>
            <div className="hero-portrait-caption">
              <span className="mono-label text-gold">Field Record</span>
              <span className="mono-label text-paper/44">Portrait / 2026</span>
            </div>
          </div>

          <a
            href="#manifesto"
            data-cursor="link"
            className="group inline-flex items-center gap-4 self-end text-[10px] uppercase tracking-[0.35em] text-paper/60"
          >
            <span>Scroll to continue</span>
            <span className="relative block h-16 w-px overflow-hidden bg-white/12">
              <span className="absolute inset-x-0 top-0 h-10 bg-gold transition-transform duration-700 group-hover:translate-y-6" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
