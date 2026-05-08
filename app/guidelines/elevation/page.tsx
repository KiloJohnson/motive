const levels = [
  {
    level: "0",
    name: "Flat",
    tailwind: "shadow-none",
    css: "none",
    use: "Inline content, table rows, sidebar items — things that live inside a surface, not on top of one.",
    bg: "bg-white border border-gray-200",
  },
  {
    level: "1",
    name: "Raised",
    tailwind: "shadow-sm",
    css: "0 1px 2px rgba(0,0,0,0.06)",
    use: "Cards, form inputs, chips. The default resting elevation for interactive containers.",
    bg: "bg-white",
    shadow: "0 1px 2px rgba(0,0,0,0.08)",
  },
  {
    level: "2",
    name: "Elevated",
    tailwind: "shadow",
    css: "0 2px 8px rgba(0,0,0,0.10)",
    use: "Provider result cards, content cards on gray backgrounds. Slightly more prominent than level 1.",
    bg: "bg-white",
    shadow: "0 2px 8px rgba(0,0,0,0.10)",
  },
  {
    level: "3",
    name: "Floating",
    tailwind: "shadow-md",
    css: "0 4px 16px rgba(0,0,0,0.12)",
    use: "Dropdowns, popovers, tooltip containers. Elements that float above the page surface.",
    bg: "bg-white",
    shadow: "0 4px 16px rgba(0,0,0,0.12)",
  },
  {
    level: "4",
    name: "Overlay",
    tailwind: "shadow-lg",
    css: "0 8px 24px rgba(0,0,0,0.14)",
    use: "Modals, drawers, sticky headers on scroll. The highest elevation for persistent UI.",
    bg: "bg-white",
    shadow: "0 8px 24px rgba(0,0,0,0.14)",
  },
  {
    level: "5",
    name: "Dialog",
    tailwind: "shadow-xl",
    css: "0 16px 48px rgba(0,0,0,0.16)",
    use: "Full-screen overlays, critical dialogs, booking confirmation modals.",
    bg: "bg-white",
    shadow: "0 16px 48px rgba(0,0,0,0.16)",
  },
];

export default function ElevationPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Guidelines</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Elevation</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Elevation communicates hierarchy through shadow depth. Higher elevation = closer to the user = more attention. Use it deliberately — not everything needs to float.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-5xl">

        {/* Visual scale */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Elevation Scale</h2>
          <p className="text-sm text-gray-500 mb-8">Six levels, 0 through 5. Each step increases shadow offset, blur radius, and spread — making the element appear physically higher above the surface.</p>

          <div className="grid grid-cols-3 gap-6 mb-12">
            {levels.map(lv => (
              <div key={lv.level} className="flex flex-col gap-3">
                <div
                  className={`rounded-xl p-6 ${lv.bg} flex items-center justify-center`}
                  style={{ boxShadow: lv.shadow, minHeight: 100 }}
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800" style={{ fontFamily: "var(--font-red-hat-display)" }}>{lv.level}</p>
                    <p className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "var(--font-red-hat-text)" }}>{lv.name}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 mb-1">{lv.tailwind}</p>
                  <p className="text-xs text-gray-400 leading-snug" style={{ fontFamily: "var(--font-red-hat-text)" }}>{lv.use}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Reference table */}
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[60px_120px_140px_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              {["Level", "Name", "Tailwind", "CSS value"].map(h => (
                <p key={h} className="text-xs font-semibold uppercase tracking-wider text-gray-400">{h}</p>
              ))}
            </div>
            {levels.map((lv, i) => (
              <div key={lv.level} className={`grid grid-cols-[60px_120px_140px_1fr] px-6 py-3.5 border-b border-gray-100 last:border-0 text-sm items-center ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                <p className="font-bold text-gray-700">{lv.level}</p>
                <p className="text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>{lv.name}</p>
                <p className="font-mono text-xs text-gray-500">{lv.tailwind}</p>
                <p className="font-mono text-xs text-gray-400">{lv.css}</p>
              </div>
            ))}
          </div>
        </section>

        {/* In context */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">In context</h2>
          <p className="text-sm text-gray-500 mb-6">Where each elevation level appears in the Scripps UI.</p>
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 p-8" style={{ minHeight: 320 }}>
            {/* Page bg */}
            <div className="absolute inset-0 bg-gray-100" />
            {/* Card */}
            <div className="relative z-10 bg-white rounded-xl p-5 max-w-xs" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.10)" }}>
              <p className="text-xs font-semibold text-gray-500 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Level 2 — Card</p>
              <div className="h-3 bg-gray-200 rounded mb-2 w-3/4" />
              <div className="h-3 bg-gray-100 rounded w-1/2" />
            </div>
            {/* Dropdown */}
            <div className="absolute top-20 left-52 z-20 bg-white rounded-xl p-4 w-48" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
              <p className="text-xs font-semibold text-gray-500 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Level 3 — Dropdown</p>
              <div className="space-y-1.5">
                {[1,2,3].map(i => <div key={i} className="h-2 bg-gray-100 rounded" />)}
              </div>
            </div>
            {/* Modal */}
            <div className="absolute bottom-6 right-6 z-30 bg-white rounded-2xl p-5 w-56" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.14)" }}>
              <p className="text-xs font-semibold text-gray-500 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Level 4 — Modal</p>
              <div className="h-3 bg-gray-200 rounded mb-2 w-full" />
              <div className="h-3 bg-gray-100 rounded w-2/3" />
            </div>
            {/* Labels */}
            <div className="absolute bottom-3 left-4 text-xs text-gray-400 font-mono">bg-gray-100 = Level 0 surface</div>
          </div>
        </section>

        {/* Rules */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Rules</h2>
          <ul className="space-y-2">
            {[
              "Don't skip levels. Going from 0 to 4 in one step breaks the visual hierarchy — use adjacent levels for adjacent elements.",
              "Elevation and color are separate signals. Don't use both a high shadow AND a brand color background to signal importance — pick one.",
              "In dark mode, shadows lose effectiveness on dark surfaces. Increase surface lightness (not shadow size) to convey elevation instead.",
              "Interactive elements (cards, buttons) can change elevation on hover — typically +1 level to signal interactivity.",
              "Never apply elevation to full-page backgrounds or layout containers. It's for floating UI elements only.",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {t}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}
