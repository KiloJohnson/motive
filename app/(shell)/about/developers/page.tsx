import Link from "next/link";

const reasons = [
  {
    q: "Why not Bootstrap?",
    a: "Bootstrap is generic. It doesn't know what Scripps blue is, how a provider result card should behave, or what contrast ratio is required for a disabled state in a WCAG 2.1 AA context. Motive does. Every component is already Scripps — you're not theming from scratch.",
  },
  {
    q: "What does 'accessible by default' actually mean?",
    a: "It means the ARIA roles, focus states, contrast ratios, and keyboard interactions are already handled in the component. You use it — you inherit compliance. You don't have to audit every interactive element you ship.",
  },
  {
    q: "Can I extend it?",
    a: "Yes. Motive sets the floor, not the ceiling. If a component doesn't exist yet, build it to the same standard and it becomes part of the system. The tokens and conventions are documented — extending Motive is just following the same rules.",
  },
  {
    q: "What's the actual stack?",
    a: "Next.js App Router, TypeScript, Tailwind CSS v4, Flowbite React. Tokens are CSS custom properties. Dark mode via next-themes. Everything is documented here with real code, not screenshots of code.",
  },
];

export default function ForDevelopersPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-20">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-4">
          For Developers
        </p>
        <h1 className="text-5xl font-black tracking-tight text-gray-900 max-w-2xl leading-tight mb-6">
          Skip the reading.<br />Go build something.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-10">
          Tested, accessible, Scripps-branded components with the code right there.
          If you want the philosophy first, it&apos;s below. If you want the components, here&apos;s the shortcut.
        </p>
        <div className="flex gap-4">
          <Link href="/components/buttons" style={{ backgroundColor: "var(--motive-primary)" }} className="px-6 py-3 text-sm font-medium text-white rounded hover:opacity-90 transition-opacity">
            Go to components →
          </Link>
          <Link href="/guidelines/colors" className="px-6 py-3 text-sm font-medium text-gray-700 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
            See the tokens
          </Link>
        </div>
      </section>

      <section className="px-16 py-16 border-b border-gray-100">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">
          Questions you probably have
        </h2>
        <div className="max-w-3xl space-y-0">
          {reasons.map((item, i) => (
            <div key={i} className="grid grid-cols-[1fr_2fr] gap-12 py-8 border-b border-gray-100 last:border-0">
              <p className="text-sm font-semibold text-gray-700 leading-snug pt-0.5">{item.q}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-16 py-16">
        <div className="grid grid-cols-3 gap-6 max-w-3xl">
          {[
            { label: "Components", href: "/components/buttons", desc: "Every UI component, documented with live examples and code." },
            { label: "Tokens", href: "/guidelines/colors", desc: "Color, spacing, type — the CSS custom properties behind everything." },
            { label: "Application", href: "/application", desc: "Flowbite Pro patterns white-labeled for Scripps. Tables, dashboards, forms." },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="group block p-6 border border-gray-100 hover:border-gray-300 rounded transition-colors">
              <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{item.label}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
