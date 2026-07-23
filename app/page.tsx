"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { motiveContexts, useSidebar } from "./components/SidebarContext";

// ── Data ─────────────────────────────────────────────────────────────────────

const heroImages = [
  { src: "/images/home/01.webp", alt: "Person silhouetted at sunset on a San Diego beach, arms outstretched" },
  { src: "/images/home/02.webp", alt: "People exercising outdoors in a sunlit park" },
  { src: "/images/home/03.webp", alt: "Patient getting blood pressure checked in a warm home setting" },
  { src: "/images/home/04.webp", alt: "Hands holding a teal awareness ribbon" },
  { src: "/images/home/05.webp", alt: "Active woman at South Mission Beach volleyball court, San Diego" },
  { src: "/images/home/06.webp", alt: "Child bravely receiving a vaccination" },
  { src: "/images/home/07.webp", alt: "Surfer smiling at the San Diego coast" },
  { src: "/images/home/08.webp", alt: "Woman stretching mindfully beside a bright window" },
];

const resources = [
  {
    title: "For Leaders",
    description: "You don't need to know what a component library is. You need to know that Motive makes Scripps faster, more consistent, and legally safer — without your team starting over.",
    href: "/about/leaders",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "For Designers",
    description: "Tokens, components, and guidelines that free you from the repetitive decisions so you can focus on the work that actually requires your expertise. Figma-ready.",
    href: "/about/designers",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "For Developers",
    description: "Accessible, tested, Scripps-branded components ready to use. Not Bootstrap. Not a hand-rolled button. The real thing, documented, with the code right there.",
    href: "/about/developers",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "For AI-Assisted Work",
    description: "Motive is structured to be useful to the tools your team uses — Figma, GitHub Copilot, and AI assistants. The same guidelines that help a designer help an AI make a better suggestion.",
    href: "/marketing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.88 5.76a1 1 0 00.95.69H21l-4.94 3.57a1 1 0 00-.36 1.12L17.56 20 12 16.43 6.44 20l1.86-5.86a1 1 0 00-.36-1.12L3 9.45h6.17a1 1 0 00.95-.69L12 3z" />
      </svg>
    ),
  },
];

const services = [
  {
    title: "Marketing Pages",
    description: "Consumer-facing experiences for Scripps.org — search, scheduling, service lines, and more. Built to the same standard, every time.",
    href: "/marketing",
    img: "/images/home/03.webp",
  },
  {
    title: "Applications",
    description: "Production-ready components for internal tools, dashboards, and patient-facing applications. Accessible by default. Scripps-branded out of the box.",
    href: "/application",
    img: "/images/home/05.webp",
  },
  {
    title: "Brand Standards",
    description: "The complete 2013 Scripps print identity guide — every page, every rule, every specification — digitized and navigable for the first time.",
    href: "/brand-standards",
    img: "/images/home/08.webp",
  },
];

const newsItems = [
  {
    type: "Update",
    img: "/images/home/04.webp",
    title: "Brand Standards — The complete 2013 Scripps print guide, now fully digitized and navigable",
    href: "/brand-standards",
  },
  {
    type: "Feature",
    img: "/images/home/06.webp",
    title: "Applications context — Production-ready Flowbite components, Scripps-branded and accessible",
    href: "/application",
  },
  {
    type: "Guidelines",
    img: "/images/home/07.webp",
    title: "Icons — 654 Sparkle icons, live searchable with one-click copy",
    href: "/guidelines/icons",
  },
];

const coloredBanners = [
  {
    bg: "#DBEAFE",
    line1: "Marketing Pages —",
    line2: "Consumer-facing design",
    cta: "Explore Marketing",
    href: "/marketing",
  },
  {
    bg: "#D1FAE5",
    line1: "Applications —",
    line2: "Production-ready components",
    cta: "Explore Applications",
    href: "/application",
  },
  {
    bg: "#EDE9FE",
    line1: "Brand Standards —",
    line2: "Official print identity guide",
    cta: "Explore Brand Standards",
    href: "/brand-standards",
  },
];

const myths = [
  {
    myth: "Will everything look identical?",
    truth: "Consistent, not identical. The foundations are shared — color, type, spacing, components. What you build with them is still yours. Motive defines the vocabulary. You write the sentences.",
  },
  {
    myth: "Does this replace designers and developers?",
    truth: "It replaces the tedious parts. The repetitive decisions, the accessibility audits, the 'what color is that blue again' conversations. Your team focuses on the problems that actually need them.",
  },
  {
    myth: "Why not just use Bootstrap?",
    truth: "Bootstrap doesn't know what Scripps blue is. It doesn't know how a provider result card works, or what a Scripps button sounds like to a screen reader. Motive does. Every component is already Scripps.",
  },
  {
    myth: "We've always done it this way.",
    truth: "We have. That's why three teams built three different buttons last quarter, one failed an accessibility audit, and nobody agreed on which shade of blue was correct. Motive is the answer to that conversation.",
  },
];

// ── Animation ─────────────────────────────────────────────────────────────────

const spring = { type: "spring" as const, damping: 50, mass: 0.1, stiffness: 500 };
const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MotiveHome() {
  const { setActiveContext } = useSidebar();
  const [currentImage, setCurrentImage] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-white max-w-480 mx-auto">

      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-500">
        <div className="max-w-480 mx-auto flex items-center justify-between px-16 py-5">
          <Link href="/">
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/motive.svg`} alt="Motive — Scripps Health Design System" style={{ height: "30px", width: "auto" }} />
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--motive-primary)" }}
            >
              Explore Motive
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                <path d="M2 4l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50"
                >
                  {motiveContexts.map((ctx) => (
                    <Link
                      key={ctx.id}
                      href={ctx.href}
                      onClick={() => { setActiveContext(ctx.id); setDropdownOpen(false); }}
                      className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <span>{ctx.label}</span>
                      {ctx.stub && <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">soon</span>}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="flex px-16 gap-2.5" style={{ height: "100svh", paddingTop: "69px" }}>

        {/* Left: text */}
        <div className="flex-1 flex flex-col justify-end pb-16 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: "var(--motive-primary)" }}>
              Scripps Health Design System
            </p>
            <h1
              className="tracking-tight leading-[1.02] text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-red-hat-display)", fontWeight: 600, fontSize: "clamp(48px, 5vw, 78px)" }}
            >
              Effortlessly<br />on brand.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-md">
              Marketing pages to applications — Motive is the shared design language of Scripps Health. One system. Every screen.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/marketing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--motive-primary)" }}
              >
                Explore Motive
              </Link>
              <Link
                href="/about/leaders"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold border border-gray-300 text-gray-700 hover:border-gray-500 transition-colors"
              >
                About Motive
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right: rotating image gallery */}
        <div className="flex-1 relative overflow-hidden min-w-0">
          {heroImages.map((img, i) => (
            <motion.div
              key={img.src}
              className="absolute inset-0"
              style={{ zIndex: 0 }}
              animate={{ opacity: i === currentImage ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          ))}

          {/* Callout card overlay */}
          <div className="absolute bottom-0 left-0 p-8 max-w-90" style={{ background: "#FFDF8B", zIndex: 20 }}>
            <p className="text-sm text-gray-600 mb-3 tracking-wide">New in Motive</p>
            <h3
              className="text-2xl leading-tight text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-red-hat-display)", fontWeight: 400 }}
            >
              Brand Standards — The complete 2013 Scripps print guide, fully digitized
            </h3>
            <Link href="/brand-standards" className="flex items-center gap-2 text-sm font-medium text-gray-900">
              <span>Explore Brand Standards</span>
              <span className="border border-gray-900 rounded-full w-6 h-6 flex items-center justify-center text-xs">→</span>
            </Link>
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 right-6 flex gap-2 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                aria-label={`View image ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === currentImage ? "20px" : "6px",
                  height: "6px",
                  background: i === currentImage ? "white" : "rgba(255,255,255,0.45)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Accent CTA Banner ─────────────────────────────────────────────── */}
      <section className="px-16 pt-16">
        <div style={{ background: "#FFDF8B" }}>
          <div className="px-12 py-14 flex flex-col gap-8">
            <h2
              className="text-[70px] leading-[0.98] text-gray-900 max-w-220"
              style={{ fontFamily: "var(--font-red-hat-display)", fontWeight: 400, letterSpacing: "-1.75px" }}
            >
              The shared design foundation for every Scripps Health digital product
            </h2>
            <Link
              href="/marketing"
              className="self-start inline-flex items-center justify-center px-9 py-5 rounded-full text-sm font-semibold text-white"
              style={{ background: "#1d1a17" }}
            >
              Enter Motive
            </Link>
          </div>
          {/* Pattern blends with background color */}
          <div className="h-61 overflow-hidden">
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/home/cta1.png`} alt="" className="w-full h-full object-cover object-top-left" />
          </div>
        </div>
      </section>

      {/* ── Resources — 4 cards ───────────────────────────────────────────── */}
      <section className="px-16 py-24 border-t border-gray-100">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
        >
          <h2
            className="text-[52px] leading-none text-gray-900 mb-16 max-w-lg"
            style={{ fontFamily: "var(--font-red-hat-display)", fontWeight: 400, letterSpacing: "-1.3px" }}
          >
            Essential resources for every team
          </h2>
        </motion.div>
        <div className="grid grid-cols-4 gap-6">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...spring, delay: i * 0.07 }}
            >
              <Link href={r.href} className="group block h-full bg-gray-50 px-6 py-8 hover:bg-gray-100 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center text-gray-600 mb-10">
                  {r.icon}
                </div>
                <div className="space-y-4">
                  <div className="space-y-4">
                    <h3
                      className="text-xl leading-none text-gray-900"
                      style={{ fontFamily: "var(--font-red-hat-display)", fontWeight: 400, letterSpacing: "-0.5px" }}
                    >
                      {r.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{r.description}</p>
                  </div>
                  <div className="flex items-center gap-2 pt-4">
                    <span className="text-sm font-medium text-gray-900">Learn More</span>
                    <span className="border border-gray-900 rounded-full w-5 h-5 flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services — 3 image cards ──────────────────────────────────────── */}
      <section className="px-16 pb-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
          className="flex items-end justify-between mb-14"
        >
          <h2
            className="text-[52px] leading-none text-gray-900 max-w-lg"
            style={{ fontFamily: "var(--font-red-hat-display)", fontWeight: 400, letterSpacing: "-1.3px" }}
          >
            Design contexts built for Scripps
          </h2>
          <Link
            href="/marketing"
            className="inline-flex items-center justify-center px-6 py-4 rounded-full text-sm font-semibold border border-gray-300 text-gray-700 hover:border-gray-500 transition-colors"
          >
            Explore Contexts
          </Link>
        </motion.div>
        <div className="grid grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...spring, delay: i * 0.08 }}
            >
              <Link href={s.href} className="group block relative overflow-hidden" style={{ height: "600px" }}>
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="border-b border-white/50 pb-5 mb-4">
                    <h3
                      className="text-2xl leading-none text-white"
                      style={{ fontFamily: "var(--font-red-hat-display)", fontWeight: 400, letterSpacing: "-0.5px" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">{s.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </div>{/* end first max-width wrapper */}

    {/* ── News / Updates — full width ───────────────────────────────────── */}
    <section className="w-full border-t border-gray-100" style={{ background: "#F8F4F1" }}>
      <div className="max-w-480 mx-auto px-16 py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
          className="flex items-end justify-between mb-14"
        >
          <h2
            className="text-[52px] leading-none text-gray-900 max-w-lg"
            style={{ fontFamily: "var(--font-red-hat-display)", fontWeight: 400, letterSpacing: "-1.3px" }}
          >
            What&apos;s in Motive
          </h2>
          <Link
            href="/marketing"
            className="inline-flex items-center justify-center px-6 py-4 rounded-full text-sm font-semibold border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
          >
            View All →
          </Link>
        </motion.div>
        <div className="grid grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...spring, delay: i * 0.08 }}
            >
              <Link href={item.href} className="group block">
                <div className="border-b border-gray-800 pb-3 mb-4">
                  <p className="text-sm text-gray-700">{item.type}</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-36 h-52 shrink-0 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-between flex-1 pr-4">
                    <h3
                      className="text-2xl leading-none text-gray-900"
                      style={{ fontFamily: "var(--font-red-hat-display)", fontWeight: 400, letterSpacing: "-0.5px" }}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">Learn More</span>
                      <span className="border border-gray-900 rounded-full w-5 h-5 flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* second max-width wrapper — colored banners + myths */}
    <div className="max-w-480 mx-auto">

      {/* ── Colored Banners ───────────────────────────────────────────────── */}
      <section className="px-16 py-24 border-t border-gray-100 space-y-16">
        {coloredBanners.map((b, i) => (
          <motion.div
            key={b.cta}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: i * 0.06 }}
          >
            <div style={{ background: b.bg }}>
              <div className="px-12 py-14">
                <h2
                  className="text-[70px] leading-[0.98] text-gray-900 mb-8 max-w-220"
                  style={{ fontFamily: "var(--font-red-hat-display)", fontWeight: 400, letterSpacing: "-1.75px" }}
                >
                  {b.line1}<br />{b.line2}
                </h2>
                <Link
                  href={b.href}
                  className="inline-flex items-center justify-center px-9 py-5 rounded-full text-sm font-semibold text-white"
                  style={{ background: "#1d1a17" }}
                >
                  {b.cta}
                </Link>
              </div>
              {/* Pattern blends with background color */}
              <div className="h-61 overflow-hidden">
                <img src={`/images/home/cta${i + 2}.png`} alt="" className="w-full h-full object-cover object-top-left" />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── Let's address the room ────────────────────────────────────────── */}
      <section className="px-16 border-t border-gray-100">
        <div className="px-12 py-24" style={{ background: "#F8F4F1" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
        >
          <h2
            className="text-[52px] leading-none text-gray-900 mb-16 max-w-lg"
            style={{ fontFamily: "var(--font-red-hat-display)", fontWeight: 400, letterSpacing: "-1.3px" }}
          >
            Let&apos;s address the room.
          </h2>
        </motion.div>
        <div className="max-w-4xl">
          {myths.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...spring, delay: i * 0.06 }}
              className="grid grid-cols-[1fr_2fr] gap-12 py-8 border-b border-gray-300 last:border-0"
            >
              <p className="text-sm font-semibold text-gray-700 leading-snug pt-0.5">
                &ldquo;{item.myth}&rdquo;
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{item.truth}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

    </div>{/* end second max-width wrapper */}

    {/* ── Footer ────────────────────────────────────────────────────────── */}
    <footer style={{ background: "#1d1a17" }} className="w-full">
      <div className="max-w-480 mx-auto px-16 pt-16 pb-10">
        <div className="flex gap-14 mb-16">
          <div className="flex-1">
            <div className="border-b border-white/20 pb-4 mb-4">
              <p className="text-sm text-white/60">Motive</p>
            </div>
            <div className="space-y-3 text-sm text-white/60">
              <p><Link href="/" className="hover:text-white transition-colors">Home</Link></p>
              <p><Link href="/about/leaders" className="hover:text-white transition-colors">For Leaders</Link></p>
              <p><Link href="/about/designers" className="hover:text-white transition-colors">For Designers</Link></p>
              <p><Link href="/about/developers" className="hover:text-white transition-colors">For Developers</Link></p>
            </div>
          </div>
          <div className="flex-1">
            <div className="border-b border-white/20 pb-4 mb-4">
              <p className="text-sm text-white/60">Contexts</p>
            </div>
            <div className="space-y-3 text-sm text-white/60">
              <p><Link href="/marketing" className="hover:text-white transition-colors">Marketing Pages</Link></p>
              <p><Link href="/application" className="hover:text-white transition-colors">Applications</Link></p>
              <p><Link href="/brand-standards" className="hover:text-white transition-colors">Brand Standards</Link></p>
              <p><Link href="/myscripps" className="hover:text-white transition-colors">My Scripps</Link></p>
              <p><Link href="/scrippsconnect" className="hover:text-white transition-colors">ScrippsConnect</Link></p>
            </div>
          </div>
          <div className="flex-1">
            <div className="border-b border-white/20 pb-4 mb-4">
              <p className="text-sm text-white/60">Guidelines</p>
            </div>
            <div className="space-y-3 text-sm text-white/60">
              <p><Link href="/guidelines/colors" className="hover:text-white transition-colors">Colors</Link></p>
              <p><Link href="/guidelines/typography" className="hover:text-white transition-colors">Typography</Link></p>
              <p><Link href="/guidelines/icons" className="hover:text-white transition-colors">Icons</Link></p>
              <p><Link href="/guidelines/accessibility" className="hover:text-white transition-colors">Accessibility</Link></p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 pt-8">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/motive_dark.svg`} alt="Motive" style={{ height: "16px", width: "auto" }} />
          <p className="text-xs text-white/40">Scripps Health Design System — Internal use only</p>
          <Link href="/" className="text-xs text-white/40 hover:text-white/70 transition-colors">Back to Top ↑</Link>
        </div>
      </div>
    </footer>
    </>
  );
}
