const themes = [
  {
    name: "Scripps Main",
    status: "active",
    statusLabel: "Active",
    primary: "#005EB8",
    secondary: "#005FCF",
    accent: "#F4B942",
    font: "Red Hat Display + Red Hat Text",
    desc: "The default theme. Used across scripps.org, patient-facing flows, and all Motive documentation.",
    statusColor: "#589600",
  },
  {
    name: "Qualcomm",
    status: "planned",
    statusLabel: "Assets needed",
    primary: null,
    secondary: null,
    accent: null,
    font: "TBD",
    desc: "Partnership theme for Qualcomm-branded Scripps experiences. Hex values, logo SVG, and font assets pending from brand team.",
    statusColor: "#F4B942",
  },
  {
    name: "Giving",
    status: "planned",
    statusLabel: "Assets needed",
    primary: null,
    secondary: null,
    accent: null,
    font: "TBD",
    desc: "Donation and fundraising theme for Scripps Health Foundation experiences. Assets pending from brand team.",
    statusColor: "#F4B942",
  },
  {
    name: "ScrippsConnect",
    status: "coming",
    statusLabel: "Coming soon",
    primary: null,
    secondary: null,
    accent: null,
    font: "TBD",
    desc: "Internal-facing theme for employee and provider portal experiences. Scope and assets TBD.",
    statusColor: "#9d9e9f",
  },
];

function Swatch({ color, label }: { color: string | null; label: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="w-10 h-10 rounded-lg border border-gray-200"
        style={{ backgroundColor: color ?? undefined, background: color ? undefined : "repeating-linear-gradient(45deg, #f3f4f6, #f3f4f6 4px, #e5e7eb 4px, #e5e7eb 8px)" }}
      />
      <p className="text-xs font-mono text-gray-400">{color ?? "—"}</p>
      <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>{label}</p>
    </div>
  );
}

export default function ThemesPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Guidelines</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Themes</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Motive is built to support multiple brand themes from a single component library. Swap a theme and the colors, typography, and logo update everywhere — without touching any component code.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* How theming works */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">How it works</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Every color, font, and radius value in Motive is a CSS variable. Switching themes replaces those variables at the root level — the components themselves never change. This means a button, a card, or a navigation item built once works correctly in every theme.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                step: "1",
                title: "Design tokens",
                desc: "Colors, fonts, and radii are defined as CSS variables (e.g. --color-brand-primary). Components reference tokens, never raw values.",
              },
              {
                step: "2",
                title: "Theme layer",
                desc: "Each theme provides its own set of token values. Applying a theme (via data-theme attribute) overrides the variables at the root.",
              },
              {
                step: "3",
                title: "Components adapt",
                desc: "Every component in the library automatically reflects the active theme — no variant props, no duplicated code.",
              },
            ].map(card => (
              <div key={card.step} className="border border-gray-100 rounded-xl p-5 bg-white">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-3" style={{ backgroundColor: "#005EB8" }}>
                  {card.step}
                </div>
                <p className="text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-red-hat-display)" }}>{card.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Theme catalog */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Theme Catalog</h2>
          <p className="text-sm text-gray-500 mb-6">Four themes are planned. Scripps Main is live — the others are queued pending brand asset delivery.</p>

          <div className="space-y-4">
            {themes.map(theme => (
              <div key={theme.name} className="border border-gray-100 rounded-xl p-6 bg-white flex gap-6 items-start">
                {/* Color swatches */}
                <div className="flex gap-3 shrink-0">
                  <Swatch color={theme.primary} label="Primary" />
                  <Swatch color={theme.secondary} label="Secondary" />
                  <Swatch color={theme.accent} label="Accent" />
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-base font-bold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>{theme.name}</p>
                    <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: theme.statusColor }}>
                      {theme.statusLabel}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>{theme.desc}</p>
                  <p className="text-xs text-gray-400 font-mono">Font: {theme.font}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What changes per theme */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">What changes per theme</h2>
          <p className="text-sm text-gray-500 mb-6">
            Themes control <strong className="text-gray-700">brand-specific</strong> values only. Universal foundations — spacing, elevation, motion, grid — never change.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-100 rounded-xl p-5 bg-white">
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#589600", fontFamily: "var(--font-red-hat-text)" }}>Changes with theme</p>
              <ul className="space-y-2">
                {["Brand colors (primary, secondary, accent)", "Logo SVG", "Typography (family + weight)", "Border radius defaults", "Button and link color", "Focus ring color"].map(item => (
                  <li key={item} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-green-500 font-bold shrink-0">✓</span>
                    <span style={{ fontFamily: "var(--font-red-hat-text)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-100 rounded-xl p-5 bg-white">
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#9d9e9f", fontFamily: "var(--font-red-hat-text)" }}>Always the same</p>
              <ul className="space-y-2">
                {["Spacing scale", "Elevation / shadow system", "Grid & breakpoints", "Motion & easing", "Component structure & logic", "Accessibility standards"].map(item => (
                  <li key={item} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-gray-300 font-bold shrink-0">—</span>
                    <span style={{ fontFamily: "var(--font-red-hat-text)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Assets needed */}
        <section>
          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 bg-gray-50">
            <p className="text-base font-bold text-gray-700 mb-2" style={{ fontFamily: "var(--font-red-hat-display)" }}>Assets needed to unlock remaining themes</p>
            <p className="text-sm text-gray-500 mb-5" style={{ fontFamily: "var(--font-red-hat-text)" }}>
              Once these are delivered, theme implementation takes hours — not days. The component library is already built.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { theme: "Qualcomm", items: ["Primary hex", "Secondary hex", "Logo SVG", "Font name / file"] },
                { theme: "Giving", items: ["Primary hex", "Secondary hex", "Logo SVG", "Font name / file"] },
              ].map(block => (
                <div key={block.theme} className="bg-white border border-gray-200 rounded-xl p-4">
                  <p className="text-sm font-bold text-gray-800 mb-3" style={{ fontFamily: "var(--font-red-hat-display)" }}>{block.theme}</p>
                  <ul className="space-y-1.5">
                    {block.items.map(item => (
                      <li key={item} className="flex gap-2 text-sm text-gray-500 items-center">
                        <span className="w-4 h-4 rounded border border-gray-300 shrink-0" />
                        <span style={{ fontFamily: "var(--font-red-hat-text)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
