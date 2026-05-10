export default function DarkModePage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Guidelines</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Dark Mode</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Dark mode is a Scripps accessibility commitment — not a style trend. Every experience we build ships with both a light and dark version so patients can choose what's comfortable for them.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Why */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Why it matters</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            A significant portion of users prefer dark interfaces — not just for aesthetics, but for genuine comfort and accessibility needs.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: "👁️",
                title: "Reduced eye strain",
                desc: "Lower screen brightness reduces fatigue during prolonged use — especially at night or in low-light settings like hospital rooms.",
              },
              {
                icon: "♿",
                title: "Improved legibility",
                desc: "High contrast between light text and dark backgrounds benefits users with photosensitivity, migraines, and certain visual impairments.",
              },
              {
                icon: "🔋",
                title: "Battery & display",
                desc: "OLED screens consume significantly less power when rendering dark pixels. Matters for patients on mobile devices away from power.",
              },
            ].map(card => (
              <div key={card.title} className="border border-gray-100 rounded-xl p-5 bg-white">
                <div className="text-2xl mb-3">{card.icon}</div>
                <p className="text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-red-hat-display)" }}>{card.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">How it works</h2>
          <p className="text-sm text-gray-500 mb-6">Dark mode can be engaged in two ways — user preference always wins.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-100 rounded-xl p-6 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ backgroundColor: "#E8F0FB" }}>🌙</div>
                <p className="text-sm font-bold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>Manual toggle</p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
                A light/dark toggle is available in the UI — typically in the header or settings panel. The user's choice is persisted in localStorage so it survives page reloads and return visits.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-6 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ backgroundColor: "#E8F0FB" }}>⚙️</div>
                <p className="text-sm font-bold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>System preference</p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
                By default, Scripps experiences respect the OS-level preference via <span className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">prefers-color-scheme</span>. If the user has set their device to dark, the interface follows automatically.
              </p>
            </div>
          </div>
        </section>

        {/* Where it applies */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Where dark mode applies</h2>
          <p className="text-sm text-gray-500 mb-6">Dark mode rolls out across all three Scripps experience tracks — on different timelines.</p>

          <div className="space-y-4">
            {[
              {
                track: "Motive Design System",
                status: "active",
                statusLabel: "Active",
                desc: "Every component documented in Motive ships with both light and dark variants. The theme switcher in this doc site lets you preview components in both modes. This is the source of truth for dark mode token values.",
                color: "#589600",
              },
              {
                track: "Applications (Flowbite)",
                status: "active",
                statusLabel: "From day one",
                desc: "All application-context work built on Flowbite Pro includes dark mode from the start. Flowbite's built-in dark class system is wired to Scripps tokens, so every admin dashboard, form, and modal is dark-mode-ready at launch.",
                color: "#589600",
              },
              {
                track: "Scripps.org Marketing Site",
                status: "planned",
                statusLabel: "Planned",
                desc: "The marketing site currently ships in light mode only. A dark mode theme is planned — it will use the same CSS variable architecture as the other tracks and will be layered onto the Sparkle CMS theme system without requiring component rewrites.",
                color: "#F4B942",
              },
            ].map(row => (
              <div key={row.track} className="border border-gray-100 rounded-xl p-6 bg-white flex gap-5">
                <div className="shrink-0 mt-0.5">
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold text-white whitespace-nowrap"
                    style={{ backgroundColor: row.color }}
                  >
                    {row.statusLabel}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-red-hat-display)" }}>{row.track}</p>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design rules */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Design rules</h2>
          <ul className="space-y-2">
            {[
              "Never hard-code color values — always use CSS variables (tokens) so dark mode overrides work automatically.",
              "Dark mode is not just an inverted light mode. Shadows get lighter, not darker. Surfaces use distinct dark grays, not pure black.",
              "Ensure a minimum 4.5:1 contrast ratio in both modes — test both, not just light.",
              "Photography and SVG icons may need adjusted treatments in dark mode. Don't assume a white icon will be legible on a dark background.",
              "Interactive states (hover, focus, active) must be defined for both modes — don't leave them to chance.",
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
