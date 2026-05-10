import Link from "next/link";

export default function ForDesignersPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-20">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-4">
          For Designers
        </p>
        <h1 className="text-5xl font-black tracking-tight text-gray-900 max-w-2xl leading-tight mb-6">
          The foundation.<br />Not the ceiling.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          Motive handles the decisions that don&apos;t need you — color tokens, spacing scales,
          component states, accessibility baselines. You focus on the ones that do.
        </p>
      </section>

      <section className="px-16 py-16 border-b border-gray-100">
        <div className="grid grid-cols-[1fr_2fr] gap-16 max-w-4xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Where to start
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Colors & Tokens", href: "/guidelines/colors", desc: "The full color system — brand, semantic, dark mode." },
              { label: "Typography", href: "/guidelines/typography", desc: "Red Hat Display + Red Hat Text. Every weight, every size, every use case." },
              { label: "Spacing & Grid", href: "/guidelines/spacing", desc: "The 8px base grid. How everything lines up." },
              { label: "Components", href: "/components/buttons", desc: "Every component, documented. What it is, when to use it, what it shouldn't do." },
              { label: "Icons", href: "/guidelines/icons", desc: "654 Sparkle icons, live searchable, with token names." },
              { label: "Themes", href: "/guidelines/themes", desc: "How Scripps, Qualcomm, Giving, and ScrippsConnect each express the system." },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="group block p-5 border border-gray-100 hover:border-gray-300 rounded transition-colors">
                <h3 className="text-sm font-bold text-gray-900 mb-1.5 group-hover:text-blue-700 transition-colors">{item.label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-16 py-16 border-b border-gray-100">
        <div className="grid grid-cols-[1fr_2fr] gap-16 max-w-4xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            The Figma workflow
          </h2>
          <div className="space-y-4">
            <p className="text-base text-gray-700 leading-relaxed">
              Motive is the source of truth. Figma references Motive — not the other way around.
              Tokens in Figma map directly to the CSS custom properties in code, so what you
              design in Figma is what gets built.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Figma Code Connect is the finishing step — once a component is stable in Motive,
              it gets linked back to its Figma counterpart so developers inspecting in Figma
              see real code, not AI guesses.
            </p>
          </div>
        </div>
      </section>

      <section className="px-16 py-16">
        <div className="grid grid-cols-[1fr_2fr] gap-16 max-w-4xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Accessibility
          </h2>
          <div className="space-y-4">
            <p className="text-base text-gray-700 leading-relaxed">
              Every component meets WCAG 2.1 AA from day one. That&apos;s not a section you fill
              in later — it&apos;s baked into the component spec. Color contrast, focus states,
              touch targets, motion — all of it.
            </p>
            <Link href="/accessibility" style={{ color: "var(--motive-primary)" }} className="text-sm font-medium">
              Read the accessibility guidelines →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
