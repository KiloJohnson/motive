import Link from "next/link";

const paths = [
  {
    audience: "I lead a team or product.",
    label: "For Leaders",
    href: "/about/leaders",
    description:
      "You don't need to know what a component library is. You need to know that Motive makes Scripps faster, more consistent, and legally safer — and that it doesn't require your team to start over.",
    cta: "What this means for you →",
    accent: "#005EB8",
  },
  {
    audience: "I design in Figma.",
    label: "For Designers",
    href: "/about/designers",
    description:
      "Motive is your foundation, not your ceiling. Tokens, components, and guidelines that free you from the repetitive decisions so you can focus on the ones that actually require your expertise.",
    cta: "Start with the design language →",
    accent: "#005EB8",
  },
  {
    audience: "I write the code.",
    label: "For Developers",
    href: "/about/developers",
    description:
      "Accessible, tested, Scripps-branded components ready to use. Not Bootstrap. Not a hand-rolled button with a mystery color. The real thing, documented, with the code right there.",
    cta: "Go straight to components →",
    accent: "#005EB8",
  },
];

const myths = [
  {
    myth: "Will everything look identical?",
    truth:
      "Consistent, not identical. The foundations are shared — color, type, spacing, components. What you build with them is still yours. Motive defines the vocabulary. You write the sentences.",
  },
  {
    myth: "Does this replace designers and developers?",
    truth:
      "It replaces the tedious parts. The repetitive decisions, the accessibility audits, the 'what color is that blue again' conversations. Your team gets to focus on the problems that actually need them.",
  },
  {
    myth: "Why not just use Bootstrap?",
    truth:
      "Bootstrap doesn't know what Scripps blue is. It doesn't know how a provider result card works, or what a Scripps button sounds like to a screen reader. Motive does. Every component is already Scripps.",
  },
  {
    myth: "We've always done it this way.",
    truth:
      "We have. That's why three teams built three different buttons last quarter, one of them failed an accessibility audit, and nobody agreed on which shade of blue was correct. Motive is the answer to that conversation — not a replacement for the people having it.",
  },
];

const principles = [
  {
    title: "Consistency earns trust.",
    body: "When every Scripps screen looks and behaves the same way, patients and staff trust it more. Trust is not a design flourish. It is the point.",
  },
  {
    title: "Accessibility is the floor.",
    body: "WCAG 2.1 AA is a federal standard. It is also the right thing. Motive builds it into every component by default — so your team inherits compliance instead of having to audit for it on every release.",
  },
  {
    title: "Speed through shared work.",
    body: "The best design decision is one you don't have to make twice. Motive makes the foundational decisions once, at a high standard, so every team can move faster without sacrificing quality.",
  },
  {
    title: "Built for humans and AI alike.",
    body: "Motive is structured to be readable by the tools your team uses — Figma, GitHub Copilot, Claude. The same guidelines that help a designer make a decision help an AI make a better suggestion.",
  },
];

export default function MotiveHome() {
  return (
    <div className="min-h-full">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-24 border-b border-gray-100">
        <div className="max-w-3xl">
          <div
            className="inline-block mb-8"
            style={{ borderBottom: "2px solid var(--motive-primary)", width: "2.5rem", paddingBottom: "0" }}
          />
          <h1 className="text-[64px] tracking-tight text-gray-900 leading-[1.05] mb-4" style={{ fontWeight: 600 }}>
            Effortlessly on brand.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-xl mb-6">
            Marketing pages to Applications, Motive is the shared design language
            of Scripps Health — the foundation every digital product is built on.
          </p>
          <p className="text-lg font-semibold tracking-tight text-gray-400">
            Design that holds up.
          </p>
        </div>
      </section>

      {/* ── What is a design system ────────────────────────────────────── */}
      <section id="what-is" className="px-16 py-16 border-b border-gray-100">
        <div className="grid grid-cols-[1fr_2fr] gap-16 max-w-4xl">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              What is a design system?
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Think of it as a shared vocabulary. Instead of every team making independent
              decisions about buttons, colors, and layouts, Motive defines them once —
              at a high standard — and every product draws from the same source.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              The result is a Scripps experience that feels like Scripps everywhere it appears.
              Not because someone enforced it, but because there was never a reason to do it differently.
            </p>
          </div>
        </div>
      </section>

      {/* ── Three paths ────────────────────────────────────────────────── */}
      <section className="px-16 py-16 border-b border-gray-100">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">
          Where do you want to start?
        </h2>
        <div className="grid grid-cols-3 gap-6 max-w-5xl">
          {paths.map((path) => (
            <Link
              key={path.label}
              href={path.href}
              className="group block p-8 border border-gray-100 hover:border-gray-300 rounded transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {path.audience}
              </p>
              <h3
                className="text-xl font-bold text-gray-900 mb-4 group-hover:transition-colors"
                style={{ transition: "color 0.15s" }}
              >
                {path.label}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {path.description}
              </p>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--motive-primary)" }}
              >
                {path.cta}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Design principles ──────────────────────────────────────────── */}
      <section className="px-16 py-16 border-b border-gray-100">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">
          Design language
        </h2>
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 max-w-4xl">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Addressing the room ────────────────────────────────────────── */}
      <section className="px-16 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">
          Let&apos;s address the room.
        </h2>
        <div className="max-w-3xl space-y-0">
          {myths.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_2fr] gap-12 py-8 border-b border-gray-100 last:border-0"
            >
              <p className="text-sm font-semibold text-gray-700 leading-snug pt-0.5">
                &ldquo;{item.myth}&rdquo;
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{item.truth}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
