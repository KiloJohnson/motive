import Link from "next/link";

const specialties = [
  { label: "Primary care",      color: "#005FCF" },
  { label: "OB/GYN",           color: "#E8944E" },
  { label: "Dermatology",       color: "#2A9D8F" },
  { label: "Orthopedics",       color: "#E9C46A" },
  { label: "Pediatrics",        color: "#90D7F5" },
  { label: "Gastroenterology",  color: "#6A994E" },
  { label: "Neurology",         color: "#264653" },
  { label: "Heart Care",        color: "#E76F51" },
];

function SpecialtyIconCircle({ color, size = "lg" }: { color: string; size?: "lg" | "sm" }) {
  const dim = size === "lg" ? "w-16 h-16" : "w-7 h-7";
  const iconSize = size === "lg" ? 28 : 14;
  return (
    <div className={`${dim} rounded-full flex items-center justify-center shrink-0`} style={{ backgroundColor: color }}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="8" r="4" stroke="white" strokeWidth="1.8"/>
        <path d="M10 12v6a6 6 0 0012 0v-2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="22" cy="16" r="2.5" stroke="white" strokeWidth="1.8"/>
      </svg>
    </div>
  );
}

function DesktopFeaturedSpecialties() {
  return (
    <div className="p-8 bg-gray-50 rounded border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-red-hat-display)" }}>
        Featured Specialties
      </h2>
      <div className="grid grid-cols-4 gap-6 mb-6">
        {specialties.map(s => (
          <div key={s.label} className="flex flex-col items-center gap-3 cursor-pointer group">
            <SpecialtyIconCircle color={s.color} size="lg" />
            <p className="text-sm font-semibold text-center group-hover:underline" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="px-5 py-2 text-sm font-semibold rounded-full border border-[#005FCF] transition-colors hover:bg-[#F3F8FB]" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
          All Specialties
        </button>
      </div>
    </div>
  );
}

function MobileFeaturedSpecialties() {
  return (
    <div className="p-6 bg-gray-50 rounded border border-gray-100 max-w-sm">
      <h2 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-red-hat-display)" }}>
        Featured Specialties
      </h2>
      <div className="flex flex-col divide-y divide-gray-200">
        {specialties.map(s => (
          <div key={s.label} className="flex items-center gap-3 py-2.5 cursor-pointer group">
            <SpecialtyIconCircle color={s.color} size="sm" />
            <p className="text-sm font-semibold group-hover:underline" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full py-2.5 text-sm font-semibold rounded-full border border-[#005FCF] hover:bg-[#F3F8FB] transition-colors" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
        Search all specialties
      </button>
    </div>
  );
}

export default function FeaturedSpecialtiesPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Sections</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Featured Specialties</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          A composed grid of{" "}
          <Link href="/sections/featured-links" className="underline" style={{ color: "#005FCF" }}>Featured Links</Link>
          {" "}showcasing Scripps specialty areas. Desktop uses a 4-column color block grid; mobile collapses to a stacked list.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16">

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Desktop</h2>
            <p className="text-sm text-gray-500">4-column grid, Color Block style. Max 8 specialties visible, "All Specialties" link below.</p>
          </div>
          <DesktopFeaturedSpecialties />
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Mobile</h2>
            <p className="text-sm text-gray-500">Vertical list, Color Block Mobile style. "Search all specialties" button below.</p>
          </div>
          <MobileFeaturedSpecialties />
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "Show a maximum of 8 specialties in the desktop grid — 2 rows of 4.",
              "The selection of specialties should reflect the most searched services at Scripps.",
              "Always include the 'All Specialties' / 'Search all specialties' link — don't make this section feel exhaustive.",
              "Specialty order should be consistent across desktop and mobile.",
              "Each specialty uses its canonical icon and color — see Featured Links for specs.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
