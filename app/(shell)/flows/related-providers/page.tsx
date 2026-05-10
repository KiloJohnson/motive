function Stars({ rating = 4.9 }: { rating?: number }) {
  return (
    <div className="flex">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="12" height="12" viewBox="0 0 14 14" fill={i <= Math.round(rating) ? "#F4B942" : "#E5E7EB"}>
          <path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9l-3 1.5.5-3.5L2 4.5 5.5 4z"/>
        </svg>
      ))}
    </div>
  );
}

const providers = [
  { name: "Kosha Nathwani, MD", specialty: "Family Medicine", rating: 4.8, count: 94, photo: "/images/providers/provider-1.png" },
  { name: "James Rodriguez, MD", specialty: "Internal Medicine", rating: 4.9, count: 201, photo: null },
  { name: "Sarah Chen, MD", specialty: "Family Medicine", rating: 4.7, count: 67, photo: null },
];

function ProviderCard({ provider, mobile = false }: { provider: typeof providers[0]; mobile?: boolean }) {
  return (
    <div className={`bg-white border border-gray-200 rounded-xl p-4 shadow-sm ${mobile ? "w-full" : "w-56 shrink-0"}`}>
      <div className={`flex ${mobile ? "gap-4 items-center" : "flex-col items-center"} mb-3`}>
        {provider.photo ? (
          <img src={provider.photo} alt={provider.name}
            className={`rounded-full object-cover ${mobile ? "w-12 h-12 shrink-0" : "w-16 h-16 mb-2"}`} />
        ) : (
          <div className={`rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold ${mobile ? "w-12 h-12 shrink-0 text-sm" : "w-16 h-16 mb-2 text-lg"}`}
            style={{ fontFamily: "var(--font-red-hat-display)" }}>
            {provider.name.split(" ").map(n => n[0]).slice(0,2).join("")}
          </div>
        )}
        <div className={mobile ? "" : "text-center"}>
          <p className={`text-sm font-bold leading-tight ${mobile ? "mb-0.5" : "mb-0.5 text-center"}`}
            style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-display)" }}>
            {provider.name}
          </p>
          <p className={`text-xs text-gray-500 ${mobile ? "" : "text-center"}`} style={{ fontFamily: "var(--font-red-hat-text)" }}>
            {provider.specialty}
          </p>
        </div>
      </div>
      <div className={`flex items-center gap-1.5 mb-3 ${mobile ? "" : "justify-center"}`}>
        <Stars rating={provider.rating} />
        <span className="text-xs text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>
          {provider.rating} ({provider.count})
        </span>
      </div>
      <button className="w-full py-2 text-xs font-semibold text-white rounded-full"
        style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
        Schedule online
      </button>
    </div>
  );
}

export default function RelatedProvidersPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Related Providers</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          A "From your search" section at the bottom of the provider profile. Shows other providers
          matching the patient's original search context. Helps patients explore alternatives without
          leaving the profile.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16 max-w-4xl">

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Desktop</h2>
          <p className="text-sm text-gray-500 mb-6">Horizontal row of compact provider cards. "From your search" heading contextualizes the relevance.</p>
          <div className="border border-gray-100 rounded p-6 bg-gray-50">
            <p className="text-sm font-semibold text-gray-700 mb-4" style={{ fontFamily: "var(--font-red-hat-display)" }}>From your search</p>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {providers.map(p => <ProviderCard key={p.name} provider={p} />)}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Mobile</h2>
          <p className="text-sm text-gray-500 mb-6">Stacked vertical list. Each card is full-width with photo/info inline.</p>
          <div className="border border-gray-100 rounded p-4 bg-gray-50 max-w-sm">
            <p className="text-sm font-semibold text-gray-700 mb-4" style={{ fontFamily: "var(--font-red-hat-display)" }}>From your search</p>
            <div className="flex flex-col gap-3">
              {providers.map(p => <ProviderCard key={p.name} provider={p} mobile />)}
            </div>
            <button className="w-full mt-4 py-2.5 text-sm font-semibold rounded-full border border-[#005FCF]"
              style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
              Back to results
            </button>
          </div>
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "'From your search' — the heading always references the patient's original search, not a generic 'You may also like'.",
              "Show 3 providers on desktop, scroll to reveal more. Mobile shows all, stacked.",
              "Providers shown here match the same specialty/availability criteria as the original search.",
              "'Back to results' button on mobile is a shortcut — not shown on desktop where the back button in the header serves this purpose.",
              "Each card includes a direct 'Schedule online' CTA — don't make patients navigate to the full profile just to book.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
