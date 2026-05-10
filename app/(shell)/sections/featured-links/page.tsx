"use client";

// Specialty icon — colored circle with a simple SVG stethoscope stand-in
function SpecialtyIcon({ color, size = "lg" }: { color: string; size?: "lg" | "sm" }) {
  const dim = size === "lg" ? "w-16 h-16" : "w-8 h-8";
  return (
    <div className={`${dim} rounded-full flex items-center justify-center shrink-0`} style={{ backgroundColor: color }}>
      <svg width={size === "lg" ? 28 : 16} height={size === "lg" ? 28 : 16} viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="8" r="4" stroke="white" strokeWidth="1.8"/>
        <path d="M10 12v6a6 6 0 0012 0v-2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="22" cy="16" r="2.5" stroke="white" strokeWidth="1.8"/>
      </svg>
    </div>
  );
}

// Color Block — Desktop
function FeaturedLinkColorBlockDesktop({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-3 cursor-pointer group w-[120px]">
      <SpecialtyIcon color={color} size="lg" />
      <p className="text-sm font-semibold text-center group-hover:underline" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
        {label}
      </p>
    </div>
  );
}

// No Block — Desktop
function FeaturedLinkNoBlockDesktop({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-3 cursor-pointer group w-[120px]">
      <div className="w-16 h-16 flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 28 28" fill="none">
          <circle cx="10" cy="8" r="4" stroke={color} strokeWidth="1.8"/>
          <path d="M10 12v6a6 6 0 0012 0v-2" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="22" cy="16" r="2.5" stroke={color} strokeWidth="1.8"/>
        </svg>
      </div>
      <p className="text-sm font-semibold text-center group-hover:underline" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
        {label}
      </p>
    </div>
  );
}

// Color Block — Mobile
function FeaturedLinkColorBlockMobile({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <SpecialtyIcon color={color} size="sm" />
      <p className="text-sm font-semibold group-hover:underline" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
        {label}
      </p>
    </div>
  );
}

// No Block — Mobile
function FeaturedLinkNoBlockMobile({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <div className="w-8 h-8 flex items-center justify-center shrink-0">
        <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
          <circle cx="10" cy="8" r="4" stroke={color} strokeWidth="1.8"/>
          <path d="M10 12v6a6 6 0 0012 0v-2" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="22" cy="16" r="2.5" stroke={color} strokeWidth="1.8"/>
        </svg>
      </div>
      <p className="text-sm font-semibold group-hover:underline" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
        {label}
      </p>
    </div>
  );
}

const SAMPLE_COLOR = "#005FCF";

export default function FeaturedLinksPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Sections</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Featured Links</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The atomic building block for Featured Specialties and other icon-driven link grids.
          Four variants cover two styles (Color Block and No Block) across desktop and mobile layouts.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16">

        {/* All 4 variants */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Variants</h2>
            <p className="text-sm text-gray-500">Two styles × two layouts = four variants. Each specialty supplies its own icon and brand color.</p>
          </div>
          <div className="border border-gray-100 rounded divide-y divide-gray-100">

            <div className="grid grid-cols-[200px_1fr] gap-6 px-6 py-8 items-center">
              <div>
                <p className="text-sm font-semibold text-gray-900">Color Block</p>
                <p className="text-xs text-gray-400 mt-0.5">Desktop</p>
                <p className="text-xs text-gray-500 mt-2">Colored circle behind the icon. Used in grid layouts on landing pages.</p>
              </div>
              <div className="flex gap-8">
                <FeaturedLinkColorBlockDesktop label="Primary Care" color="#005FCF" />
                <FeaturedLinkColorBlockDesktop label="OB/GYN" color="#E8944E" />
                <FeaturedLinkColorBlockDesktop label="Dermatology" color="#2A9D8F" />
              </div>
            </div>

            <div className="grid grid-cols-[200px_1fr] gap-6 px-6 py-8 items-center">
              <div>
                <p className="text-sm font-semibold text-gray-900">No Block</p>
                <p className="text-xs text-gray-400 mt-0.5">Desktop</p>
                <p className="text-xs text-gray-500 mt-2">Bare icon, no circle background. Used in lighter contexts or secondary sections.</p>
              </div>
              <div className="flex gap-8">
                <FeaturedLinkNoBlockDesktop label="Primary Care" color="#005FCF" />
                <FeaturedLinkNoBlockDesktop label="OB/GYN" color="#E8944E" />
                <FeaturedLinkNoBlockDesktop label="Dermatology" color="#2A9D8F" />
              </div>
            </div>

            <div className="grid grid-cols-[200px_1fr] gap-6 px-6 py-8 items-center">
              <div>
                <p className="text-sm font-semibold text-gray-900">Color Block</p>
                <p className="text-xs text-gray-400 mt-0.5">Mobile</p>
                <p className="text-xs text-gray-500 mt-2">Small circle + inline label. Stacks vertically in mobile layouts.</p>
              </div>
              <div className="flex flex-col gap-4">
                <FeaturedLinkColorBlockMobile label="Primary Care" color="#005FCF" />
                <FeaturedLinkColorBlockMobile label="OB/GYN" color="#E8944E" />
                <FeaturedLinkColorBlockMobile label="Dermatology" color="#2A9D8F" />
              </div>
            </div>

            <div className="grid grid-cols-[200px_1fr] gap-6 px-6 py-8 items-center">
              <div>
                <p className="text-sm font-semibold text-gray-900">No Block</p>
                <p className="text-xs text-gray-400 mt-0.5">Mobile</p>
                <p className="text-xs text-gray-500 mt-2">Bare icon + inline label. Used in compact mobile list views.</p>
              </div>
              <div className="flex flex-col gap-4">
                <FeaturedLinkNoBlockMobile label="Primary Care" color="#005FCF" />
                <FeaturedLinkNoBlockMobile label="OB/GYN" color="#E8944E" />
                <FeaturedLinkNoBlockMobile label="Dermatology" color="#2A9D8F" />
              </div>
            </div>

          </div>
        </section>

        {/* Usage */}
        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "Each specialty has its own icon and designated brand color — never reuse a color for a different specialty.",
              "Color Block is the default for landing pages and homepage grids.",
              "No Block is for secondary or supporting contexts where visual weight should be reduced.",
              "Labels should match the canonical specialty name — don't abbreviate.",
              "These are always links — they navigate to the specialty's Find a Doctor filtered results.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
