export default function PageStructurePage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Guidelines</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Page Structure</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Every Scripps.org page is built from a consistent set of zones. Understanding this anatomy helps teams design and build pages that feel cohesive — regardless of content type.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-5xl">

        {/* Anatomy diagram */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Page Anatomy</h2>
          <p className="text-sm text-gray-500 mb-8">A full Scripps.org page consists of five stacked zones. Each zone has a defined role — none are optional except the Broadcast bar.</p>

          <div className="flex gap-8 items-start">
            {/* Diagram */}
            <div className="flex flex-col gap-0 w-72 shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm text-xs font-mono">
              <div className="px-4 py-2.5 text-center font-semibold" style={{ backgroundColor: "#F4B942", color: "#1a1a1a" }}>
                Broadcast Bar
              </div>
              <div className="px-4 py-4 text-center font-semibold border-b border-gray-200" style={{ backgroundColor: "#005EB8", color: "white" }}>
                Site Header (sticky)
              </div>
              <div className="px-4 py-6 text-center font-semibold border-b border-gray-200" style={{ backgroundColor: "#E8F0FB", color: "#005EB8" }}>
                Hero / Page Header
              </div>
              <div className="px-4 py-12 text-center font-semibold border-b border-gray-200 bg-white text-gray-700">
                Page Content
                <p className="text-gray-400 font-normal mt-1 text-[10px]">sections stack here</p>
              </div>
              <div className="px-4 py-4 text-center font-semibold" style={{ backgroundColor: "#111827", color: "white" }}>
                Footer
              </div>
            </div>

            {/* Zone descriptions */}
            <div className="flex-1 space-y-6">
              {[
                {
                  name: "Broadcast Bar",
                  color: "#F4B942",
                  desc: "Sitewide alerts only — urgent notices, campaigns, or system messages. Optional. Never used for marketing promotions that aren't time-sensitive.",
                  rules: ["One message at a time", "Dismissable or persistent depending on urgency", "Sits above everything, including the sticky header"],
                },
                {
                  name: "Site Header",
                  color: "#005EB8",
                  desc: "Sticky — stays fixed as the user scrolls. Contains the Scripps logo, primary navigation, sitewide search, and the 'Get Care' CTA.",
                  rules: ["Always visible, never hidden behind content", "Desktop: horizontal nav + search + CTA", "Mobile: logo + CTA + hamburger menu"],
                },
                {
                  name: "Hero / Page Header",
                  color: "#005EB8",
                  desc: "The first content zone below the header. Sets the page context — usually contains the page title, a short description, and a primary CTA. Shape and depth vary by page type.",
                  rules: ["Homepage hero is full-bleed with search", "Interior pages use a lighter, text-focused header", "Always includes a clear primary action or entry point"],
                },
                {
                  name: "Page Content",
                  color: "#3c3c3c",
                  desc: "The main body of the page. Content sections stack vertically here — each with its own background color, layout, and purpose. Sections are composed from the shared component library.",
                  rules: ["Max content width: 1440px, centered", "Sections alternate background colors to create visual rhythm", "No sidebar on marketing pages (sidebar is application-context only)"],
                },
                {
                  name: "Footer",
                  color: "#111827",
                  desc: "Dark background. Contains secondary navigation, legal links, social icons, and contact information. Consistent across all page types.",
                  rules: ["Never customized per page", "Stacks to single column on mobile", "Includes copyright, privacy policy, and accessibility statement"],
                },
              ].map(zone => (
                <div key={zone.name} className="flex gap-4">
                  <div className="w-1 rounded-full shrink-0 mt-1" style={{ backgroundColor: zone.color, minHeight: "16px" }} />
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: "var(--font-red-hat-display)" }}>{zone.name}</p>
                    <p className="text-sm text-gray-500 mb-2 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>{zone.desc}</p>
                    <ul className="space-y-1">
                      {zone.rules.map((r, i) => (
                        <li key={i} className="flex gap-2 text-xs text-gray-400">
                          <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-1.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Header anatomy */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Header Anatomy</h2>
          <p className="text-sm text-gray-500 mb-6">The site header has distinct desktop and mobile layouts. Both are separate rendered elements — not CSS-toggled visibility.</p>

          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Desktop (&gt;1024px)</p>
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-6 rounded bg-gray-200" />
                    <div className="flex gap-5">
                      {["Doctors & Services", "Locations", "Patients & Visitors", "About", "Contact"].map(item => (
                        <span key={item} className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-200" />
                    <div className="px-3 py-1.5 rounded-full border border-gray-300 text-xs text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>Get Care</div>
                  </div>
                </div>
                <div className="px-6 py-3 bg-gray-50 flex gap-8 text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>
                  <span>① Logo</span>
                  <span>② Primary Nav (5 items, 3-level mega-dropdown)</span>
                  <span>③ Search</span>
                  <span>④ Get Care CTA</span>
                </div>
              </div>
            </div>

            <div className="max-w-sm">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Mobile (≤1024px)</p>
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
                  <div className="w-20 h-5 rounded bg-gray-200" />
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1.5 rounded-full border border-gray-300 text-xs text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>Get Care</div>
                    <div className="w-5 h-5 rounded-full bg-gray-200" />
                    <div className="flex flex-col gap-1 w-5">
                      <div className="h-0.5 bg-gray-400 rounded" />
                      <div className="h-0.5 bg-gray-400 rounded" />
                      <div className="h-0.5 bg-gray-400 rounded" />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 flex gap-4 text-xs text-gray-400 flex-wrap" style={{ fontFamily: "var(--font-red-hat-text)" }}>
                  <span>① Logo</span>
                  <span>② Get Care CTA</span>
                  <span>③ Search</span>
                  <span>④ Hamburger menu</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation depth */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Navigation Depth</h2>
          <p className="text-sm text-gray-500 mb-6">The main navigation supports three levels of hierarchy — top item, section group, and shortcuts/links.</p>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            {[
              { level: "Level 1", example: "Doctors & Services", desc: "Top-level nav item. Always visible in the header bar. Max 5 items." },
              { level: "Level 2", example: "Shortcuts, Featured Services", desc: "Appears in the mega-dropdown. Groups related links under a labeled section." },
              { level: "Level 3", example: "Find a Doctor, Urgent Care, Virtual Care", desc: "Individual links within a Level 2 group. This is where users actually navigate to." },
            ].map((row, i) => (
              <div key={row.level} className={`grid grid-cols-[120px_200px_1fr] gap-4 px-6 py-4 text-sm border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <p className="font-semibold text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.level}</p>
                <p className="text-gray-500 font-mono text-xs mt-0.5">{row.example}</p>
                <p className="text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Page types */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Page Types</h2>
          <p className="text-sm text-gray-500 mb-6">Different page types share the same zone structure but vary in hero treatment and sidebar presence.</p>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[160px_1fr_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              {["Page Type", "Hero Style", "Sidebar"].map(h => (
                <p key={h} className="text-xs font-semibold uppercase tracking-wider text-gray-400">{h}</p>
              ))}
            </div>
            {[
              { type: "Homepage", hero: "Full-bleed, dark overlay, omnisearch", sidebar: "No" },
              { type: "Marketing / Landing", hero: "Brand color with title + CTA", sidebar: "No" },
              { type: "Provider Profile", hero: "Provider header with photo, ratings, CTA", sidebar: "Yes (booking panel)" },
              { type: "Search Results", hero: "Compact header with omnisearch + filters", sidebar: "Yes (facets)" },
              { type: "Application (Flowbite)", hero: "None — starts with dashboard/table", sidebar: "Yes (nav rail)" },
            ].map(row => (
              <div key={row.type} className="grid grid-cols-[160px_1fr_1fr] px-6 py-4 text-sm border-b border-gray-100 last:border-0 bg-white">
                <p className="font-medium text-gray-900" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.type}</p>
                <p className="text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.hero}</p>
                <p className="text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.sidebar}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
