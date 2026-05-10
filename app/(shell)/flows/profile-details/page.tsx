function Tag({ label, icon }: { label: string; icon?: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs text-gray-700 bg-white"
      style={{ fontFamily: "var(--font-red-hat-text)" }}>
      {icon && <span>{icon}</span>}
      {label}
    </div>
  );
}

function AwardBadge({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="flex flex-col items-center gap-1 text-center w-20">
      <div className="w-14 h-14 rounded-full bg-yellow-50 border-2 border-yellow-300 flex items-center justify-center text-xl">🏆</div>
      <p className="text-xs font-semibold text-gray-700 leading-snug" style={{ fontFamily: "var(--font-red-hat-text)" }}>{label}</p>
      <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>{sub}</p>
    </div>
  );
}

function AddressBlock() {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm max-w-sm">
      <p className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: "var(--font-red-hat-display)" }}>Scripps Clinic Encinitas</p>
      <p className="text-xs text-gray-500 mb-0.5" style={{ fontFamily: "var(--font-red-hat-text)" }}>326 Santa Fe Drive F13</p>
      <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Encinitas, CA 92024</p>
      <p className="text-xs text-[#005FCF] underline cursor-pointer mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>📍 Get directions</p>
      <p className="text-xs text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>📞 714-764-4020</p>
    </div>
  );
}

function EmergencyDisclaimer() {
  return (
    <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg max-w-2xl">
      <p className="text-sm font-bold text-red-700 mb-1" style={{ fontFamily: "var(--font-red-hat-display)" }}>
        If this is an emergency, please call 911
      </p>
      <p className="text-sm text-red-600 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
        For immediate life-threatening emergencies, call 911 or go to your nearest emergency room. Do not use this website for emergency situations. If you are experiencing symptoms and are unsure of the severity, call your doctor or <span className="underline cursor-pointer">nurse advice line</span>.
      </p>
    </div>
  );
}

function QuickViewCard() {
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm w-56">
      <img src="/images/providers/provider-1.png" alt="Kosha Nathwani, MD"
        className="w-16 h-16 rounded-full object-cover mx-auto mb-3" />
      <p className="text-sm font-bold text-center mb-0.5" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-display)" }}>
        Kosha Nathwani, MD
      </p>
      <p className="text-xs text-gray-500 text-center mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Family Medicine</p>
      <div className="flex justify-center mb-2">
        {[1,2,3,4,5].map(i => (
          <svg key={i} width="12" height="12" viewBox="0 0 14 14" fill="#F4B942"><path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9l-3 1.5.5-3.5L2 4.5 5.5 4z"/></svg>
        ))}
      </div>
      <p className="text-xs text-gray-500 text-center mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Scripps Clinic Encinitas</p>
      <button className="w-full py-2 text-xs font-semibold text-white rounded-full" style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
        Schedule online
      </button>
    </div>
  );
}

export default function ProfileDetailsPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Profile Details</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Supporting components for the provider profile page — badges, attributes, address, quick view card, and the emergency disclaimer.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16 max-w-4xl">

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Profile Badges</h2>
          <p className="text-sm text-gray-500 mb-6">Awards and recognition displayed on the provider's profile. Each badge shows an icon, award name, and year/source.</p>
          <div className="p-6 bg-gray-50 border border-gray-100 rounded flex gap-6 flex-wrap">
            <AwardBadge label="Patient's Choice" sub="2024" />
            <AwardBadge label="America's Top Doctors" sub="Castle Connolly" />
            <AwardBadge label="Best Doctors" sub="2023" />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Profile Attributes</h2>
          <p className="text-sm text-gray-500 mb-6">Tags summarizing key provider attributes. Same content as Results Badges but displayed in a more prominent pill format on the profile page.</p>
          <div className="p-6 bg-gray-50 border border-gray-100 rounded flex flex-wrap gap-2">
            <Tag icon="👤" label="Accepts new patients" />
            <Tag icon="🎥" label="Video and in-person visits" />
            <Tag icon="🗓️" label="Treats all ages" />
            <Tag icon="🌈" label="Offers gender-affirming care" />
            <Tag icon="💬" label="Speaks Spanish" />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Address</h2>
          <p className="text-sm text-gray-500 mb-6">Location card with clinic name, address, directions link, and phone number.</p>
          <AddressBlock />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Quick View Card</h2>
          <p className="text-sm text-gray-500 mb-6">Compact provider card used in sidebars, related provider lists, and comparison views.</p>
          <div className="p-8 bg-gray-50 border border-gray-100 rounded">
            <QuickViewCard />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Emergency Disclaimer</h2>
          <p className="text-sm text-gray-500 mb-6">Always present at the bottom of the profile page. Non-dismissable.</p>
          <EmergencyDisclaimer />
          <ul className="mt-4 space-y-1">
            {[
              "Always appears at the bottom of the page — never hidden or collapsible.",
              "Red left border and background make it visually distinct from all other content.",
              "The 'nurse advice line' link routes to Scripps nurse line contact info.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
