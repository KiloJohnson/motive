export default function MotionPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Guidelines</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Motion</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Motion in Scripps interfaces is purposeful and restrained. It communicates state changes, guides attention, and provides feedback — never decorates for its own sake.
        </p>
      </div>

      <div className="px-16 py-12 space-y-12 max-w-4xl">

        {/* Principles */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Principles</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                title: "Purposeful",
                desc: "Every animation serves a function — confirming an action, revealing content, or transitioning between states. If you can't explain why the motion exists, remove it.",
              },
              {
                title: "Fast",
                desc: "UI motion should feel instant. Most transitions fall between 150ms and 300ms. Anything longer than 400ms starts to feel like the UI is in the way.",
              },
              {
                title: "Accessible",
                desc: "Always respect prefers-reduced-motion. Users with vestibular disorders can be harmed by parallax and excessive animation. Motion is an enhancement, not a requirement.",
              },
            ].map(card => (
              <div key={card.title} className="border border-gray-100 rounded-xl p-5 bg-white">
                <p className="text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-red-hat-display)" }}>{card.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What motion covers */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">What motion governs</h2>
          <p className="text-sm text-gray-500 mb-6">The motion system defines values for three categories of movement — tokens and examples for each are in progress.</p>
          <div className="space-y-3">
            {[
              { name: "Micro-interactions", desc: "Button hover states, toggle switches, checkbox checks, input focus rings. Duration: 100–150ms. Easing: ease-out." },
              { name: "Component transitions", desc: "Accordion expand/collapse, modal open/close, dropdown reveal, tooltip fade. Duration: 200–300ms. Easing: ease-in-out." },
              { name: "Page & view transitions", desc: "Route changes, skeleton-to-content swaps, tab panel switches. Duration: 250–400ms. Easing: ease-out. Avoid full-page slide animations." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 border border-gray-100 rounded-xl bg-white">
                <div className="w-2 h-2 rounded-full shrink-0 mt-2" style={{ backgroundColor: "#005EB8" }} />
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: "var(--font-red-hat-display)" }}>{item.name}</p>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coming soon */}
        <section>
          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center bg-gray-50">
            <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: "#E8F0FB" }}>
              🎬
            </div>
            <p className="text-lg font-semibold text-gray-700 mb-2" style={{ fontFamily: "var(--font-red-hat-display)" }}>
              Token table & live examples coming soon
            </p>
            <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
              The full motion token library — duration steps, named easing curves, and interactive before/after demos — is being defined alongside the theme system. It will live here once finalized.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
