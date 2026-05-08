const scale = [
  { token: "1", px: 4,   rem: "0.25rem", use: "Icon gap, inline nudges" },
  { token: "2", px: 8,   rem: "0.5rem",  use: "Tight label/input gap, badge padding" },
  { token: "3", px: 12,  rem: "0.75rem", use: "Small component padding" },
  { token: "4", px: 16,  rem: "1rem",    use: "Standard inner padding, nav item spacing" },
  { token: "5", px: 20,  rem: "1.25rem", use: "Card internal spacing (mobile)" },
  { token: "6", px: 24,  rem: "1.5rem",  use: "Section padding (mobile), gap between cards" },
  { token: "8", px: 32,  rem: "2rem",    use: "Card padding (desktop), form field gap" },
  { token: "10", px: 40, rem: "2.5rem",  use: "Section vertical padding (tablet)" },
  { token: "12", px: 48, rem: "3rem",    use: "Large component padding" },
  { token: "14", px: 56, rem: "3.5rem",  use: "Hero padding, header height" },
  { token: "16", px: 64, rem: "4rem",    use: "Page outer margin (desktop)" },
  { token: "20", px: 80, rem: "5rem",    use: "Section vertical padding (desktop)" },
  { token: "24", px: 96, rem: "6rem",    use: "Large section separation" },
];

export default function SpacingPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Guidelines</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Spacing</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Scripps uses a 4px base spacing scale. Every margin, padding, and gap in the system is a multiple of 4 — keeping layouts optically consistent and making spacing decisions predictable.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* The scale */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Spacing Scale</h2>
          <p className="text-sm text-gray-500 mb-6">
            Values follow Tailwind's default scale, which is rooted at 4px. Tokens are referenced by their Tailwind step number (e.g. <span className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">p-4</span> = 16px).
          </p>

          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[60px_60px_80px_1fr_200px] bg-gray-50 border-b border-gray-100 px-6 py-3">
              {["Token", "px", "rem", "Visual", "Common use"].map(h => (
                <p key={h} className="text-xs font-semibold uppercase tracking-wider text-gray-400">{h}</p>
              ))}
            </div>
            {scale.map((row, i) => (
              <div key={row.token} className={`grid grid-cols-[60px_60px_80px_1fr_200px] px-6 py-3.5 border-b border-gray-100 last:border-0 items-center ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                <p className="font-mono text-sm font-semibold text-gray-700">{row.token}</p>
                <p className="font-mono text-sm text-gray-500">{row.px}</p>
                <p className="font-mono text-xs text-gray-400">{row.rem}</p>
                <div className="pr-8">
                  <div className="h-3 rounded-sm" style={{ width: Math.min(row.px * 2, 280), backgroundColor: "#005EB8", opacity: 0.5 }} />
                </div>
                <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Principles</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Use the scale, never arbitrary values",
                desc: "If a value isn't on the scale, choose the nearest step. One-off values like 13px or 22px break the visual rhythm and make maintenance harder.",
              },
              {
                title: "More space = more importance",
                desc: "Spacing communicates hierarchy. Primary sections get more breathing room than secondary elements. Don't give everything the same gap.",
              },
              {
                title: "Tighten on mobile, don't just shrink",
                desc: "Reduce outer margins and section gaps on small screens. Don't scale down internal component spacing — that kills readability.",
              },
              {
                title: "Consistent gaps between siblings",
                desc: "Items in the same group (list of cards, row of buttons) should have identical gaps. Use gap utilities, not margins, to enforce this.",
              },
            ].map(card => (
              <div key={card.title} className="border border-gray-100 rounded-xl p-5 bg-white">
                <p className="text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-red-hat-display)" }}>{card.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Responsive scaling */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Responsive Spacing</h2>
          <p className="text-sm text-gray-500 mb-6">Key spacing values that shift across breakpoints.</p>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[200px_1fr_1fr_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              {["Property", "Mobile (SM)", "Tablet (MD)", "Desktop (LG)"].map(h => (
                <p key={h} className="text-xs font-semibold uppercase tracking-wider text-gray-400">{h}</p>
              ))}
            </div>
            {[
              { prop: "Page outer margin", sm: "16px (p-4)", md: "32px (p-8)", lg: "64px (p-16)" },
              { prop: "Section vertical padding", sm: "40px (py-10)", md: "64px (py-16)", lg: "80px (py-20)" },
              { prop: "Card padding", sm: "16px (p-4)", md: "20px (p-5)", lg: "24–32px (p-6–p-8)" },
              { prop: "Gap between cards", sm: "12px (gap-3)", md: "16px (gap-4)", lg: "24px (gap-6)" },
              { prop: "Form field gap", sm: "12px", md: "16px", lg: "16–24px" },
            ].map(row => (
              <div key={row.prop} className="grid grid-cols-[200px_1fr_1fr_1fr] px-6 py-4 border-b border-gray-100 last:border-0 bg-white text-sm">
                <p className="font-medium text-gray-900" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.prop}</p>
                <p className="font-mono text-xs text-gray-500 mt-0.5">{row.sm}</p>
                <p className="font-mono text-xs text-gray-500 mt-0.5">{row.md}</p>
                <p className="font-mono text-xs text-gray-500 mt-0.5">{row.lg}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
