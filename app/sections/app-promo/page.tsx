function AppStoreButton({ store }: { store: "apple" | "google" }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/40 bg-black cursor-pointer hover:bg-gray-900 transition-colors">
      {store === "apple" ? (
        <>
          <svg width="14" height="16" viewBox="0 0 14 16" fill="white">
            <path d="M11.5 8.5c0-2 1.5-2.5 1.5-2.5S11.5 4 9.5 4c-1.5 0-2 .8-3 .8C5.5 4.8 5 4 3.5 4 1.5 4 0 6 0 8.5c0 3 2 7 3.5 7 1 0 1.5-.7 3-.7s1.5.7 3 .7C11 16 13 12 13 12s-1.5-.5-1.5-3.5zM9 3c.5-.5 1-1.5 1-2.5C10 0 9 .5 8 1.5S7 3.5 7 4.5c.5 0 1.5-.5 2-1.5z"/>
          </svg>
          <div>
            <p className="text-white text-[8px] leading-none opacity-70">Download on the</p>
            <p className="text-white text-xs font-semibold leading-tight">App Store</p>
          </div>
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l6 6-6 6" stroke="#4CAF50" strokeWidth="2"/>
            <path d="M13 7H7" stroke="#FF5722" strokeWidth="2"/>
            <path d="M1 1l12 6-12 6" stroke="#FFC107" strokeWidth="1.5" opacity="0.5"/>
          </svg>
          <div>
            <p className="text-white text-[8px] leading-none opacity-70">GET IT ON</p>
            <p className="text-white text-xs font-semibold leading-tight">Google Play</p>
          </div>
        </>
      )}
    </div>
  );
}

function DesktopAppPromo() {
  return (
    <div className="relative rounded overflow-hidden" style={{ background: "linear-gradient(135deg, #1a2a4a 0%, #2a3a5a 50%, #3a4a6a 100%)", minHeight: "200px" }}>
      <div className="absolute inset-0 opacity-20" style={{ background: "url('data:image/svg+xml,<svg/>')" }} />
      <div className="relative z-10 flex items-center gap-8 p-10">
        <div className="flex-1 max-w-md">
          <img src="/logos/myscripps.svg" alt="MyScripps" className="h-8 w-auto mb-4 brightness-0 invert" />
          <p className="text-white text-sm leading-relaxed mb-6 opacity-90" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            Find providers, make or cancel appointments, and meet from home — or anywhere with a secure video visit or e-visit.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <button className="px-5 py-2.5 text-sm font-semibold text-white rounded transition-colors" style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
              Sign up or sign in
            </button>
            <AppStoreButton store="apple" />
            <AppStoreButton store="google" />
          </div>
        </div>
        <div className="w-64 h-36 rounded opacity-40 overflow-hidden shrink-0 bg-gray-600 flex items-center justify-center">
          <p className="text-white text-xs opacity-50" style={{ fontFamily: "var(--font-red-hat-text)" }}>Photo</p>
        </div>
      </div>
    </div>
  );
}

function MobileAppPromo() {
  return (
    <div className="relative rounded overflow-hidden max-w-sm" style={{ background: "linear-gradient(135deg, #1a2a4a 0%, #2a3a5a 50%, #3a4a6a 100%)" }}>
      <div className="p-6">
        <img src="/logos/myscripps.svg" alt="MyScripps" className="h-7 w-auto mb-4 brightness-0 invert" />
        <p className="text-white text-sm leading-relaxed mb-5 opacity-90" style={{ fontFamily: "var(--font-red-hat-text)" }}>
          Find providers, make or cancel appointments, and meet from home — or anywhere with a secure video visit or e-visit.
        </p>
        <button className="w-full py-2.5 text-sm font-semibold text-white rounded mb-3 transition-colors" style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
          Sign up or sign in
        </button>
        <div className="flex gap-2">
          <AppStoreButton store="apple" />
          <AppStoreButton store="google" />
        </div>
      </div>
    </div>
  );
}

export default function AppPromoPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Sections</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">App Promo</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The MyScripps patient portal promotional banner. Drives sign-ups and app downloads.
          Dark background with photo, CTA button, and app store links. Desktop and mobile layouts.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16">

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Desktop</h2>
            <p className="text-sm text-gray-500">Full-width dark banner with photo on the right, CTA and app store buttons on the left.</p>
          </div>
          <DesktopAppPromo />
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Mobile</h2>
            <p className="text-sm text-gray-500">Stacked layout, no photo. CTA button full-width, app store buttons below.</p>
          </div>
          <MobileAppPromo />
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "Use the MyScripps logo in white (inverted) — never the standard color version on dark backgrounds.",
              "The CTA ('Sign up or sign in') is always present — it's the primary conversion goal.",
              "App store buttons are supplementary — always show after the main CTA.",
              "The dark background photo should feature a patient or caregiver in a relatable setting.",
              "Do not change the background color — the dark navy is part of the MyScripps brand.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
