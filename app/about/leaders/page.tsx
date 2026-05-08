import Link from "next/link";

const benefits = [
  {
    title: "Your brand, protected.",
    body: "Every product built on Motive uses the same colors, the same type, the same interaction patterns. Scripps looks like Scripps — on every screen, from every team, on every deadline.",
  },
  {
    title: "Faster delivery, visibly.",
    body: "Teams stop re-solving solved problems. A developer doesn't hand-roll a button. A designer doesn't argue about which blue. Those hours go toward the work that actually needs human judgment.",
  },
  {
    title: "Accessibility is handled.",
    body: "WCAG 2.1 AA compliance is baked into every Motive component. Your teams inherit it automatically. This is not optional — it's a federal standard — and Motive means you're not auditing for it on every release.",
  },
  {
    title: "You are not being replaced.",
    body: "Motive handles the repetitive decisions so your teams can focus on the consequential ones. Strategy, context, judgment — those still require people. Motive just stops wasting their time on the easy stuff.",
  },
];

export default function ForLeadersPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-20">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-4">
          For Leaders
        </p>
        <h1 className="text-5xl font-black tracking-tight text-gray-900 max-w-2xl leading-tight mb-6">
          You don&apos;t need to know what a component is.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          You need to know that Motive makes your teams faster, keeps Scripps looking like
          Scripps, and removes a category of legal risk — without requiring anyone to start over.
        </p>
      </section>

      <section className="px-16 py-16 border-b border-gray-100">
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 max-w-4xl">
          {benefits.map((b) => (
            <div key={b.title}>
              <h3 className="text-base font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-16 py-16 border-b border-gray-100">
        <div className="grid grid-cols-[1fr_2fr] gap-16 max-w-4xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            The one thing to remember
          </h2>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              A design system is a decision made once, at a high standard, by the right people —
              so everyone else stops making it independently at varying standards under deadline pressure.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mt-4">
              Motive is that decision. Your team's job is to build great products on top of it.
            </p>
          </div>
        </div>
      </section>

      <section className="px-16 py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Ready to go deeper?</p>
        <div className="flex gap-4">
          <Link href="/guidelines/colors" style={{ backgroundColor: "var(--motive-primary)" }} className="px-6 py-3 text-sm font-medium text-white rounded hover:opacity-90 transition-opacity">
            See the design foundations
          </Link>
          <Link href="/" className="px-6 py-3 text-sm font-medium text-gray-600 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
            Back to Motive home
          </Link>
        </div>
      </section>
    </div>
  );
}
