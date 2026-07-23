import Link from "next/link";

function VariantTag({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded">
      {label}
    </span>
  );
}

function UsageList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm text-gray-500">
          <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function UtilityBar() {
  return (
    <div className="bg-white flex items-center justify-end gap-4 px-6 py-1.5 border-b border-gray-100">
      <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 transition-colors" style={{ fontFamily: "var(--font-red-hat-text)" }}>
        <span>🌐</span> English <span className="opacity-60">▾</span>
      </button>
      <button className="flex items-center gap-1.5 text-xs font-semibold hover:underline transition-colors" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M4 6h4M6 4v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
        Log In to MyScripps
      </button>
    </div>
  );
}

function DesktopHeaderPreview({ withUtility }: { withUtility?: boolean }) {
  return (
    <div className="border border-gray-200 rounded overflow-hidden shadow-sm">
      {withUtility && <UtilityBar />}
      <div className="bg-white flex items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/scripps.svg`} alt="Scripps" className="h-5 w-auto" />
        </div>
        <nav className="flex items-center gap-6 text-sm text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>
          <span>Doctors &amp; Services</span>
          <span>Locations</span>
          <span>Patients &amp; Visitors</span>
          <span>About</span>
          <span>Contact</span>
        </nav>
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-gray-600">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
          <button className="px-4 py-1.5 text-sm font-medium text-white rounded-full" style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
            Get Care
          </button>
        </div>
      </div>
    </div>
  );
}

function StickyHeaderPreview() {
  return (
    <div className="border border-gray-200 rounded overflow-hidden shadow-sm">
      <div className="bg-white flex items-center justify-between px-6 py-3 border-b border-gray-100">
        <div className="flex items-center">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/scripps.svg`} alt="Scripps" className="h-5 w-auto" />
        </div>
        <nav className="flex items-center gap-6 text-sm text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>
          <span>Doctors &amp; Services</span>
          <span>Locations</span>
          <span>Patients &amp; Visitors</span>
        </nav>
        <button className="px-4 py-1.5 text-sm font-medium text-white rounded" style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
          Get Care
        </button>
      </div>
      <div className="bg-gray-50 flex items-center justify-between px-6 py-2.5">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-gray-400" />
          <span className="text-xs font-medium text-gray-500" style={{ fontFamily: "var(--font-red-hat-display)" }}>Market 2</span>
        </div>
        <nav className="flex items-center gap-5 text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>
          <span>Doctors &amp; Services</span>
          <span>Locations</span>
          <span>Contact</span>
        </nav>
        <button className="px-3 py-1 text-xs font-medium text-white rounded bg-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>
          Get Care
        </button>
      </div>
    </div>
  );
}

function MobileHeaderPreview() {
  return (
    <div className="border border-gray-200 rounded overflow-hidden shadow-sm max-w-sm">
      <div className="bg-white flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/scripps.svg`} alt="Scripps" className="h-4 w-auto" />
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 text-xs font-medium text-white rounded" style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
            Get Care
          </button>
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="block w-5 h-0.5 bg-gray-700" />
            <span className="block w-5 h-0.5 bg-gray-700" />
            <span className="block w-5 h-0.5 bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeaderPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>
          Patterns
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Header</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The global header appears at the top of every page. It anchors navigation, brand identity, and the primary
          patient CTA. The complete desktop header has two layers — a utility bar on top and the main nav below.
        </p>
        <p className="text-sm text-gray-400 mt-3">
          Part of <Link href="/patterns/navigation" className="underline" style={{ color: "#005EB8" }}>Navigation</Link>
        </p>
      </div>

      <div className="px-16 py-12 space-y-16">

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Utility Bar</h2>
            <p className="text-sm text-gray-500">Sits above the main nav. Language selector and MyScripps login shortcut. Right-aligned, always present on desktop.</p>
          </div>
          <div className="border border-gray-200 rounded overflow-hidden shadow-sm">
            <UtilityBar />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <VariantTag label="Desktop" />
          </div>
          <UsageList items={[
            "Always right-aligned — never centered or left-aligned.",
            "Language selector opens a dropdown of supported languages.",
            "'Log In to MyScripps' links directly to the patient portal.",
            "Not shown on mobile — MyScripps login moves to the nav drawer.",
          ]} />
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Desktop Header — Complete</h2>
            <p className="text-sm text-gray-500">Utility bar + main nav together. This is the full desktop header as it appears on every page.</p>
          </div>
          <DesktopHeaderPreview withUtility />
          <div className="mt-4 flex flex-wrap gap-2">
            <VariantTag label="Market=Scripps" />
            <VariantTag label="Desktop" />
          </div>
          <UsageList items={[
            "The utility bar sits above the main nav — do not merge them into a single row.",
            "Navigation items reflect the primary site IA — do not add one-off links.",
            "Get Care CTA is always present and uses brand-primary (#005FCF).",
            "Search icon appears left of Get Care — opens an inline search input on click.",
            "Logo variant is determined by Market — never swap manually.",
          ]} />
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Sticky Header — Desktop</h2>
            <p className="text-sm text-gray-500">Compressed header that sticks to viewport on scroll. Supports a secondary market row.</p>
          </div>
          <StickyHeaderPreview />
          <div className="mt-4 flex flex-wrap gap-2">
            <VariantTag label="Market=Scripps" />
            <VariantTag label="Market=Market2" />
            <VariantTag label="Desktop" />
            <VariantTag label="Sticky" />
          </div>
          <UsageList items={[
            "Replaces the standard header after the user scrolls past the hero.",
            "When two markets are present, the primary market row is always on top.",
            "Height is compressed — logo and CTA remain, full nav collapses to essentials.",
          ]} />
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Mobile Header</h2>
            <p className="text-sm text-gray-500">Condensed header for small screens. Logo, Get Care, and hamburger menu.</p>
          </div>
          <MobileHeaderPreview />
          <div className="mt-4 flex flex-wrap gap-2">
            <VariantTag label="Market=Scripps" />
            <VariantTag label="Mobile" />
          </div>
          <UsageList items={[
            "Hamburger opens a full-screen nav drawer.",
            "Get Care is always visible — it is the primary patient action.",
            "Search and menu icons sit to the right of the CTA.",
            "Do not show the full nav on mobile — always use the drawer pattern.",
          ]} />
        </section>

      </div>
    </div>
  );
}
