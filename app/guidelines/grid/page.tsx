export default function GridPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Guidelines</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Grid & Breakpoints</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Scripps uses a three-tier breakpoint system derived from the Sparkle CMS grid. Layouts adapt at two thresholds — one for tablet/mobile navigation, one for final mobile stacking.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-5xl">

        {/* Breakpoints */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Breakpoints</h2>
          <p className="text-sm text-gray-500 mb-6">Three tiers. The nav switches from horizontal to hamburger at the MD threshold — not SM — because the horizontal menu requires more width than most tablets provide.</p>

          <div className="border border-gray-100 rounded-xl overflow-hidden mb-8">
            <div className="grid grid-cols-[80px_160px_1fr_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              {["Tier", "Range", "Nav", "Key Behaviors"].map(h => (
                <p key={h} className="text-xs font-semibold uppercase tracking-wider text-gray-400">{h}</p>
              ))}
            </div>
            {[
              {
                tier: "LG", label: "Desktop", range: "> 1024px", nav: "Horizontal mega-dropdown",
                behaviors: "Full multi-column layouts, sticky header, inline search bar",
                color: "#005EB8",
              },
              {
                tier: "MD", label: "Tablet", range: "768px – 1024px", nav: "Hamburger menu",
                behaviors: "Reduced column counts, nav collapses, cards may stack",
                color: "#2A9D8F",
              },
              {
                tier: "SM", label: "Mobile", range: "≤ 767px", nav: "Hamburger menu",
                behaviors: "Single column, footer stacks, reduced padding, touch-optimized tap targets",
                color: "#F4B942",
              },
            ].map(row => (
              <div key={row.tier} className="grid grid-cols-[80px_160px_1fr_1fr] px-6 py-5 border-b border-gray-100 last:border-0 bg-white items-start gap-2">
                <div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: row.color }}>
                    {row.tier}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.label}</p>
                  <p className="text-xs font-mono text-gray-400 mt-0.5">{row.range}</p>
                </div>
                <p className="text-sm text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.nav}</p>
                <p className="text-sm text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.behaviors}</p>
              </div>
            ))}
          </div>

          {/* Visual breakpoint bar */}
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Visual scale</p>
            <div className="relative h-10 rounded-xl overflow-hidden flex">
              <div className="flex items-center justify-center text-xs font-bold text-white px-4 shrink-0" style={{ backgroundColor: "#F4B942", color: "#1a1a1a", width: "20%" }}>
                SM ≤767
              </div>
              <div className="flex items-center justify-center text-xs font-bold text-white px-4 shrink-0" style={{ backgroundColor: "#2A9D8F", width: "20%" }}>
                MD 768–1024
              </div>
              <div className="flex items-center justify-center text-xs font-bold text-white flex-1" style={{ backgroundColor: "#005EB8" }}>
                LG &gt;1024px
              </div>
            </div>
            <div className="flex text-xs text-gray-400 mt-1.5 font-mono">
              <span>0</span>
              <span className="ml-[20%] -translate-x-2">767</span>
              <span className="ml-[20%] -translate-x-4">1024</span>
              <span className="ml-auto">1440+</span>
            </div>
          </div>
        </section>

        {/* Grid columns */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Column Grid</h2>
          <p className="text-sm text-gray-500 mb-6">Content is built on a 12-column grid at LG, collapsing to 4 columns at SM. Most marketing content uses 4–8 column spans for readability.</p>

          <div className="space-y-6">
            {[
              { tier: "LG", label: "Desktop >1024px", cols: 12, color: "#005EB8" },
              { tier: "MD", label: "Tablet 768–1024px", cols: 8, color: "#2A9D8F" },
              { tier: "SM", label: "Mobile ≤767px", cols: 4, color: "#F4B942" },
            ].map(row => (
              <div key={row.tier}>
                <p className="text-xs text-gray-400 mb-2 font-mono">{row.label} — {row.cols} columns</p>
                <div className="flex gap-1">
                  {Array.from({ length: row.cols }).map((_, i) => (
                    <div key={i} className="flex-1 h-8 rounded" style={{ backgroundColor: row.color, opacity: 0.15 + (i % 2 === 0 ? 0.1 : 0) }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Max width & margins */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Max Width & Margins</h2>
          <p className="text-sm text-gray-500 mb-6">Content is capped at 1440px and centered. Margins scale with viewport width to keep content readable at any size.</p>

          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[140px_140px_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              {["Tier", "Content Max Width", "Outer Margins"].map(h => (
                <p key={h} className="text-xs font-semibold uppercase tracking-wider text-gray-400">{h}</p>
              ))}
            </div>
            {[
              { tier: "LG Desktop", max: "1440px", margin: "64px (px-16)" },
              { tier: "MD Tablet", max: "100%", margin: "32px (px-8)" },
              { tier: "SM Mobile", max: "100%", margin: "16px (px-4)" },
            ].map(row => (
              <div key={row.tier} className="grid grid-cols-[140px_140px_1fr] px-6 py-4 border-b border-gray-100 last:border-0 bg-white text-sm">
                <p className="font-medium text-gray-900" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.tier}</p>
                <p className="font-mono text-gray-500">{row.max}</p>
                <p className="text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.margin}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common layouts */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Common Layout Patterns</h2>
          <p className="text-sm text-gray-500 mb-6">These column spans recur throughout the site. They're not rules — they're proven starting points.</p>
          <div className="space-y-4">
            {[
              { name: "Full-width section", desktop: "12 col", tablet: "8 col", mobile: "4 col", use: "Hero, banners, map sections" },
              { name: "Editorial (text-heavy)", desktop: "8 col centered", tablet: "8 col", mobile: "4 col", use: "Health articles, legal pages" },
              { name: "2-up cards", desktop: "6 + 6", tablet: "4 + 4", mobile: "4 col stacked", use: "Featured links, service pairs" },
              { name: "3-up cards", desktop: "4 + 4 + 4", tablet: "4 + 4 stacked", mobile: "4 col stacked", use: "Featured specialties, app promo" },
              { name: "Sidebar layout", desktop: "8 content + 4 sidebar", tablet: "8 col (sidebar below)", mobile: "4 col stacked", use: "Provider profile, search results" },
            ].map(row => (
              <div key={row.name} className="grid grid-cols-[200px_100px_120px_100px_1fr] gap-4 px-6 py-4 border border-gray-100 rounded-lg bg-white text-sm items-center">
                <p className="font-semibold text-gray-800" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.name}</p>
                <p className="font-mono text-xs text-gray-500">{row.desktop}</p>
                <p className="font-mono text-xs text-gray-500">{row.tablet}</p>
                <p className="font-mono text-xs text-gray-500">{row.mobile}</p>
                <p className="text-gray-400 text-xs" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.use}</p>
              </div>
            ))}
            <div className="grid grid-cols-[200px_100px_120px_100px_1fr] gap-4 px-6 py-2 text-xs text-gray-400 font-semibold uppercase tracking-wider">
              <span />
              <span>Desktop</span>
              <span>Tablet</span>
              <span>Mobile</span>
              <span>Used for</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
