"use client";

import { useState } from "react";

function SearchIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="shrink-0 text-gray-400">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// --- Omnisearch (Find a Doctor) ---
const doctorSuggestions = [
  { label: "Primary care",          color: "#005FCF", path: "Specialties → Primary Care" },
  { label: "Pediatrics",            color: "#E8944E", path: "Specialties → Pediatrics" },
  { label: "Heart & vascular care", color: "#E74C3C", path: "Specialties → Heart & Vascular" },
  { label: "Dermatology",           color: "#2A9D8F", path: "Specialties → Dermatology" },
];

function OmnisearchDemo() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const filtered = query.length >= 2
    ? doctorSuggestions.filter(s => s.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="relative max-w-lg">
      <div className="border-2 border-gray-300 rounded-xl bg-white shadow-sm overflow-hidden focus-within:border-[#005FCF] transition-colors">
        <div className="flex items-center gap-3 px-4 py-3">
          <SearchIcon size={18} />
          <input
            className="flex-1 text-sm outline-none text-gray-900 placeholder:text-gray-400"
            placeholder="Specialty, condition, or provider's name"
            value={query}
            onChange={e => { setQuery(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            style={{ fontFamily: "var(--font-red-hat-text)" }}
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600">
              <CloseIcon />
            </button>
          )}
        </div>
        <div className="px-4 pb-3 flex items-center gap-1.5 border-t border-gray-100">
          <span className="text-[#005FCF] text-xs">✦</span>
          <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            Try <span className="text-gray-600">"Pediatricians with video visits"</span>
          </p>
        </div>
      </div>
      {open && filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
          {filtered.map(s => (
            <div
              key={s.label}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0"
              onMouseDown={() => { setQuery(s.label); setOpen(false); }}
            >
              <div className="w-5 h-5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
              <div>
                <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "var(--font-red-hat-text)" }}>{s.label}</p>
                <p className="text-xs" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>{s.path}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Header / sitewide search panel ---
type ResultType = "service" | "page" | "location";
const allResults: { label: string; category: string; type: ResultType }[] = [
  { label: "Primary Care",                                             category: "Medical Service", type: "service" },
  { label: "Urgent Care",                                              category: "Medical Service", type: "service" },
  { label: "Cardiology",                                               category: "Medical Service", type: "service" },
  { label: "Scripps Coastal Medical Center Encinitas",                 category: "Location",        type: "location" },
  { label: "Privacy Policy",                                           category: "",                type: "page" },
  { label: "Price Transparency",                                       category: "",                type: "page" },
];

const popularSearches = ["Urgent care locations", "MyChart login", "Insurance accepted", "Flu shot locations", "Maternity services"];

function ResultTypeIcon({ type }: { type: ResultType }) {
  if (type === "location") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-gray-400">
        <path d="M8 1a5 5 0 015 5c0 3.5-5 9-5 9S3 9.5 3 6a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (type === "service") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-gray-400">
        <path d="M8 2a4 4 0 100 8A4 4 0 008 2zM13.5 13.5l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-gray-400">
      <rect x="2" y="1" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 5h6M5 8h4M5 11h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function highlight(text: string, query: string) {
  if (!query) return <span>{text}</span>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <span>{text}</span>;
  return (
    <span>
      {text.slice(0, idx)}
      <strong className="text-gray-900 font-bold">{text.slice(idx, idx + query.length)}</strong>
      {text.slice(idx + query.length)}
    </span>
  );
}

function SitewideSearchDemo() {
  const [query, setQuery] = useState("");
  const results = query.length >= 2
    ? allResults.filter(r => r.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-w-2xl">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
        <SearchIcon size={20} />
        <input
          className="flex-1 text-lg outline-none text-gray-900 placeholder:text-gray-300"
          placeholder="Search scripps.org"
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ fontFamily: "var(--font-red-hat-display)" }}
        />
        {query && (
          <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600">
            <CloseIcon />
          </button>
        )}
      </div>
      <div className="px-5 py-4">
        {results.length > 0 ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Results</p>
            {results.map((r, i) => (
              <div key={i} className="flex items-center gap-3 py-2.5 cursor-pointer hover:bg-gray-50 px-2 -mx-2 rounded-lg transition-colors">
                <ResultTypeIcon type={r.type} />
                <div>
                  <p className="text-sm text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>
                    {highlight(r.label, query)}
                  </p>
                  {r.category && <p className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "var(--font-red-hat-text)" }}>{r.category}</p>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Popular searches</p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map(s => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-[#005FCF] hover:text-[#005FCF] transition-colors"
                  style={{ fontFamily: "var(--font-red-hat-text)" }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// --- Base input states ---
function SearchInput({ state }: { state: "empty" | "focused" | "filled" | "disabled" }) {
  const borderColor = state === "focused" ? "#005FCF" : "#D1D5DB";
  const opacity = state === "disabled" ? "opacity-50" : "";
  const value = state === "filled" || state === "focused" ? "Primary care" : "";
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 bg-white max-w-xs ${opacity}`}
      style={{ borderColor }}
    >
      <SearchIcon />
      <span
        className={`text-sm flex-1 ${value ? "text-gray-900" : "text-gray-400"}`}
        style={{ fontFamily: "var(--font-red-hat-text)" }}
      >
        {value || "Search"}
      </span>
      {value && state !== "disabled" && (
        <span className="text-gray-400 text-xs"><CloseIcon /></span>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Search</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Scripps uses two distinct search patterns — the Omnisearch for Find a Doctor, and a sitewide search panel in the header. Both share the same input anatomy but serve different scopes.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Input states */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Input States</h2>
          <p className="text-sm text-gray-500 mb-6">The base search input has four states. Focus ring uses Scripps blue — consistent with all other interactive inputs.</p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50 grid grid-cols-2 gap-6">
            {(["empty", "focused", "filled", "disabled"] as const).map(state => (
              <div key={state}>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3 capitalize" style={{ fontFamily: "var(--font-red-hat-text)" }}>{state}</p>
                <SearchInput state={state} />
              </div>
            ))}
          </div>
        </section>

        {/* Omnisearch */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Omnisearch — Find a Doctor</h2>
          <p className="text-sm text-gray-500 mb-2">Scoped to the Find a Doctor flow. Accepts specialties, conditions, and provider names. Features an AI combination hint and real-time result dropdown. Type "primary" or "heart" below.</p>
          <p className="text-xs text-gray-400 mb-6" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            Full documentation → <a href="/flows/omnisearch-bar" className="underline" style={{ color: "#005FCF" }}>Omnisearch Bar flow page</a>
          </p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50">
            <OmnisearchDemo />
          </div>
          <div className="mt-4 border border-gray-100 rounded-xl overflow-hidden">
            {[
              { part: "AI hint (✦)",    desc: "Always visible below the input. Prompts users to try combination queries like 'Pediatricians with video visits'." },
              { part: "Result dropdown", desc: "Appears after 2+ characters. Shows specialty, condition, or provider matches with a colored icon and category path." },
              { part: "Scope",           desc: "Routes to Find a Doctor only — not general site content." },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-[160px_1fr] px-6 py-4 text-sm border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <p className="font-semibold text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.part}</p>
                <p className="text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sitewide search */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Sitewide Search — Header Panel</h2>
          <p className="text-sm text-gray-500 mb-2">Opens as an overlay from the search icon in the header. Searches all of scripps.org — services, locations, pages. Shows popular searches before the user types, live results after 2+ characters.</p>
          <p className="text-xs text-gray-400 mb-6" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            Full documentation → <a href="/patterns/search-panel" className="underline" style={{ color: "#005FCF" }}>Search Panel pattern page</a>
          </p>
          <SitewideSearchDemo />
          <div className="mt-4 border border-gray-100 rounded-xl overflow-hidden">
            {[
              { part: "Popular searches", desc: "Shown before the user types. Curated list of common queries — editable in the CMS." },
              { part: "Live results",     desc: "Appear after 2+ characters. Grouped by type: Medical Service, Location, Page." },
              { part: "Result icons",     desc: "Search icon = service, pin icon = location, document icon = page. Always icon + label, never icon alone." },
              { part: "Query highlight",  desc: "The matched portion of each result is bolded to help users confirm they're looking at the right item." },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-[160px_1fr] px-6 py-4 text-sm border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <p className="font-semibold text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.part}</p>
                <p className="text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Which to use */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Which pattern to use</h2>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[180px_1fr_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              {["", "Omnisearch", "Sitewide Search"].map(h => (
                <p key={h} className="text-xs font-semibold uppercase tracking-wider text-gray-400">{h}</p>
              ))}
            </div>
            {[
              { prop: "Scope",        omni: "Find a Doctor only",         site: "All of scripps.org" },
              { prop: "Entry point",  omni: "Hero search / FAD page",     site: "Header search icon (all pages)" },
              { prop: "Result types", omni: "Specialties, conditions, providers", site: "Services, locations, pages" },
              { prop: "AI hint",      omni: "Yes (combination search)",   site: "No" },
              { prop: "Popular searches", omni: "No",                     site: "Yes (before typing)" },
            ].map((row, i) => (
              <div key={row.prop} className={`grid grid-cols-[180px_1fr_1fr] px-6 py-4 text-sm border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <p className="font-semibold text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.prop}</p>
                <p className="text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.omni}</p>
                <p className="text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.site}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Usage */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Usage</h2>
          <ul className="space-y-2">
            {[
              "Don't trigger results until the user has typed at least 2 characters.",
              "Always support keyboard navigation — arrow keys through results, Enter to select, Escape to dismiss.",
              "Show a clear button (✕) as soon as the field has content.",
              "Never show a 'no results' empty state without a suggestion or fallback action.",
              "The Omnisearch AI hint should always be visible — it teaches a behavior that increases search success.",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {t}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}
