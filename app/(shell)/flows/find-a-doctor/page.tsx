import Link from "next/link";

const pieces = [
  {
    name: "Omnisearch Bar",
    href: "/flows/omnisearch-bar",
    desc: "The primary search input. Accepts specialties, conditions, and provider names with real-time results and an AI combination hint.",
    role: "Entry point — how the user begins their search.",
  },
  {
    name: "Facet Panel",
    href: "/flows/facet-panel",
    desc: "The filter sidebar. Specialties organized into Popular and All Specialties groups. Supports selection, expansion, and nested sub-specialties.",
    role: "Refinement — how the user narrows results.",
  },
  {
    name: "List Items",
    href: "/flows/list-items",
    desc: "The atomic building blocks inside the Facet Panel. Six types covering every selection pattern: Standard, Expandable, Nested, Branching, List Header, and Search Result.",
    role: "Components — the individual UI elements.",
  },
];

const states = [
  {
    label: "1. Landing",
    desc: "User arrives. Omnisearch bar is prominent. Facet panel shows Popular specialties. No selection made.",
  },
  {
    label: "2. Typing",
    desc: "User types in the search bar. Real-time dropdown shows matching specialties and providers with path breadcrumbs.",
  },
  {
    label: "3. Specialty Selected",
    desc: "User selects a specialty. Facet panel highlights the selection in blue. Results filter to that specialty. + button allows expansion to sub-specialties.",
  },
  {
    label: "4. Sub-specialty Expanded",
    desc: "User taps +. Parent item stays selected. Nested children appear below the parent. User can select one or more sub-specialties.",
  },
];

export default function FindADoctorPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Find a Doctor</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The primary care discovery experience on scripps.org. Patients search for providers by specialty,
          condition, name, or a combination. The Omnisearch system powers the search and filter experience end-to-end.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-5xl">

        {/* What it is */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">What it is</h2>
            <p className="text-sm text-gray-500 max-w-2xl">
              Find a Doctor is Scripps' highest-traffic patient-facing flow. The Omnisearch system within it
              is purpose-built — not a standard search UI. It combines free-text search with a faceted filter
              panel and AI-assisted combination hints to surface the right provider for every patient's need.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {pieces.map(p => (
              <Link key={p.name} href={p.href} className="block p-6 border border-gray-100 rounded hover:border-gray-300 transition-colors group">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#005EB8" }}>{p.role}</p>
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:underline" style={{ fontFamily: "var(--font-red-hat-display)" }}>{p.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* User journey */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">User journey</h2>
            <p className="text-sm text-gray-500">Four stages from landing to filtered results.</p>
          </div>
          <div className="relative">
            <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gray-200" />
            <div className="space-y-6">
              {states.map((s, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-10 h-10 rounded-full border-2 border-[#005FCF] bg-white flex items-center justify-center shrink-0 z-10">
                    <span className="text-xs font-bold" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>{i + 1}</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm font-semibold text-gray-900 mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>{s.label}</p>
                    <p className="text-sm text-gray-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design principles */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Design principles</h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Combination search over keyword match", body: "Patients don't search like developers. 'Pediatricians near me with video visits' is a real query. The AI hint teaches this pattern." },
              { title: "Progressive disclosure", body: "Start broad (specialty), expand when the user signals intent (+ button). Don't overwhelm with every sub-specialty upfront." },
              { title: "Selection is always visible", body: "Blue selected state must be clear at a glance. A patient shouldn't have to remember what they filtered by." },
              { title: "Accessibility first", body: "Keyboard navigation, ARIA roles, and focus management are not optional here — healthcare decisions must be accessible to all." },
            ].map((p, i) => (
              <div key={i} className="p-5 border border-gray-100 rounded">
                <p className="text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>{p.title}</p>
                <p className="text-sm text-gray-500">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
