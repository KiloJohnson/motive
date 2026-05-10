export default function AccessibilityPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Guidelines</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Accessibility</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Accessibility is not a feature — it's a baseline. Every patient who visits scripps.org deserves the same experience, regardless of ability. Motive is built to WCAG 2.1 AA compliance across all contexts.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Commitment */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Scripps' commitment</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Scripps Health serves a diverse patient population across San Diego County — including patients with visual, auditory, motor, and cognitive disabilities. Our digital experiences must meet them where they are. This is both a legal requirement under the ADA and Section 508, and a reflection of our mission: <em>to deliver the highest quality of care, serve the community, and advance health through education, innovation, and research.</em>
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: "⚖️",
                title: "Legal requirement",
                desc: "The ADA and Section 508 mandate accessible digital experiences for healthcare providers. Non-compliance creates legal liability and — more importantly — excludes patients who need care.",
              },
              {
                icon: "🏥",
                title: "Patient equity",
                desc: "Approximately 1 in 4 US adults lives with a disability. For a health system, inaccessible digital tools directly impact a patient's ability to find care, book appointments, and manage their health.",
              },
              {
                icon: "📈",
                title: "Better for everyone",
                desc: "Accessible design improves usability for all users — captions help in noisy environments, high contrast helps in bright sunlight, keyboard nav helps power users. Accessibility raises the floor for everyone.",
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

        {/* Standard */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Our standard — WCAG 2.1 AA</h2>
          <p className="text-sm text-gray-500 mb-6">
            All Scripps digital experiences target <strong className="text-gray-700">WCAG 2.1 Level AA</strong> compliance. This is the widely accepted legal and industry standard for web accessibility. Level AAA is aspirational — we reach for it where practical.
          </p>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[100px_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              {["Level", "What it means"].map(h => (
                <p key={h} className="text-xs font-semibold uppercase tracking-wider text-gray-400">{h}</p>
              ))}
            </div>
            {[
              { level: "A", desc: "Minimum. Removes the most severe barriers — without this, some users cannot access content at all.", target: false },
              { level: "AA", desc: "Our target. Removes significant barriers for most users with disabilities. Required by law for public-sector and healthcare sites.", target: true },
              { level: "AAA", desc: "Highest standard. Not achievable for all content — we aim for it where feasible, especially in patient-critical flows.", target: false },
            ].map(row => (
              <div key={row.level} className={`grid grid-cols-[100px_1fr] px-6 py-4 border-b border-gray-100 last:border-0 text-sm ${row.target ? "bg-green-50/40" : "bg-white"}`}>
                <div className="flex items-center gap-2">
                  <span className={`font-bold text-base ${row.target ? "text-green-700" : "text-gray-400"}`}>
                    WCAG {row.level}
                  </span>
                  {row.target && (
                    <span className="text-xs font-semibold text-white px-1.5 py-0.5 rounded" style={{ backgroundColor: "#589600" }}>Our target</span>
                  )}
                </div>
                <p className="text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key areas */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Key areas</h2>
          <p className="text-sm text-gray-500 mb-6">Accessibility in Motive is addressed across six interconnected areas. Each links to the relevant guideline or component page where implementation details live.</p>
          <div className="space-y-3">
            {[
              {
                area: "Color & Contrast",
                standard: "4.5:1 min ratio for text, 3:1 for large text and UI components",
                desc: "All text and interactive elements meet minimum contrast ratios in both light and dark modes. Never use color as the only means of conveying information.",
                link: "/guidelines/colors",
                linkLabel: "Colors",
              },
              {
                area: "Dark Mode",
                standard: "Respects prefers-color-scheme",
                desc: "Dark mode reduces eye strain and supports users with photosensitivity. All components ship in both light and dark. The OS preference is respected by default.",
                link: "/guidelines/darkmode",
                linkLabel: "Dark Mode",
              },
              {
                area: "Typography",
                standard: "Min 16px body, scalable with user font size settings",
                desc: "Text sizes use relative units (rem) so they scale with the user's browser font size preference. Line height and spacing are generous to support readability.",
                link: "/guidelines/typography",
                linkLabel: "Typography",
              },
              {
                area: "Images & Alt Text",
                standard: "All informative images have descriptive alt text",
                desc: "Every image that conveys meaning has a descriptive alt attribute. Decorative images use an empty alt to be ignored by screen readers.",
                link: "/guidelines/images",
                linkLabel: "Images",
              },
              {
                area: "Motion",
                standard: "Respects prefers-reduced-motion",
                desc: "All animations respect the OS reduced-motion preference. Users with vestibular disorders can disable animations without losing any functionality.",
                link: "/guidelines/motion",
                linkLabel: "Motion",
              },
              {
                area: "Keyboard & Focus",
                standard: "All interactive elements reachable and operable by keyboard",
                desc: "Every button, link, and input is reachable via Tab and operable with Enter/Space. Focus rings are always visible — never removed without a visible replacement.",
                link: null,
                linkLabel: null,
              },
            ].map(item => (
              <div key={item.area} className="flex gap-5 p-5 border border-gray-100 rounded-xl bg-white">
                <div className="w-2 shrink-0 rounded-full bg-[#005EB8] mt-1" style={{ minHeight: 16 }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <p className="text-sm font-bold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>{item.area}</p>
                    <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{item.standard}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>{item.desc}</p>
                  {item.link && (
                    <a href={item.link} className="text-xs font-semibold mt-2 inline-block" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
                      See {item.linkLabel} guidelines →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coming soon */}
        <section>
          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center bg-gray-50">
            <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: "#E8F0FB" }}>
              ♿
            </div>
            <p className="text-lg font-semibold text-gray-700 mb-2" style={{ fontFamily: "var(--font-red-hat-display)" }}>
              Component-level accessibility specs coming soon
            </p>
            <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
              Each component page will include specific ARIA roles, keyboard interaction patterns, and screen reader announcements. This detail will be added as components are audited and tested.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
