"use client";

import { useState } from "react";
import Link from "next/link";

function SearchIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="shrink-0 text-gray-400"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function CloseIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function ArrowRight() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

const popularSearches = [
  "Urgent care locations",
  "MyChart login",
  "Insurance accepted",
  "Flu shot locations",
  "Maternity services",
];

type ResultItem = { label: string; category: string; type: "service" | "page" | "location" };

const allResults: ResultItem[] = [
  { label: "Primary Care",                                          category: "Medical Service", type: "service" },
  { label: "Metastatic Squamous Neck Cancer with Occult Primary",   category: "Medical Service", type: "service" },
  { label: "Privacy Policy",                                        category: "",                type: "page" },
  { label: "Scripps Coastal Medical Center Encinitas - Primary Care", category: "Location",     type: "location" },
  { label: "Scripps Price Transparency",                            category: "",                type: "page" },
];

function ResultIcon({ type }: { type: ResultItem["type"] }) {
  if (type === "service") return <img src="/icons/doctor-finder.svg" alt="" className="w-5 h-5 shrink-0 opacity-60" />;
  if (type === "location") return <img src="/icons/affiliated-location.svg" alt="" className="w-5 h-5 shrink-0 opacity-60" />;
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" className="shrink-0 text-gray-400">
      <rect x="1" y="1" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 6h10M4 10h7M4 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function highlightMatch(text: string, query: string) {
  if (!query) return <span>{text}</span>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <span>{text}</span>;
  return (
    <span>
      {text.slice(0, idx)}
      <strong className="text-gray-900">{text.slice(idx, idx + query.length)}</strong>
      {text.slice(idx + query.length)}
    </span>
  );
}

// Desktop search panel
function DesktopSearchPanel() {
  const [query, setQuery] = useState("");
  const results = query.length >= 2
    ? allResults.filter(r => r.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      {/* Search bar */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
        <SearchIcon size={20} />
        <input
          className="flex-1 text-2xl outline-none text-gray-900 placeholder:text-gray-300"
          placeholder="Search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ fontFamily: "var(--font-red-hat-display)" }}
          autoFocus
        />
        {query && (
          <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600">
            <CloseIcon />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="px-6 py-5">
        {results.length > 0 ? (
          <div className="space-y-1">
            {results.map((r, i) => (
              <div key={i} className="flex items-start gap-3 py-2.5 cursor-pointer hover:bg-gray-50 px-2 rounded transition-colors">
                <div className="mt-0.5"><ResultIcon type={r.type} /></div>
                <div>
                  <p className="text-sm text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>
                    {highlightMatch(r.label, query)}
                  </p>
                  {r.category && <p className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "var(--font-red-hat-text)" }}>{r.category}</p>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Popular Searches</p>
            <div className="space-y-1">
              {popularSearches.map(s => (
                <button key={s} className="block text-sm py-1.5 hover:underline text-left" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
                  {s}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Mobile search panel
function MobileSearchPanel() {
  const [query, setQuery] = useState("");
  const results = query.length >= 2
    ? allResults.filter(r => r.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  const helpCards = [
    { title: "Find a doctor",       color: "#2951A3", desc: "Search over 2,500 Scripps physicians and book appointments online." },
    { title: "Find locations",      color: "#01A289", desc: "Get the care you need from Scripps hospitals, clinics, and specialty centers." },
    { title: "Patient Resources",   color: "#F37420", desc: "Make an appointment, start an on-demand visit, see test results, pay a bill and more." },
  ];

  return (
    <div className="bg-white rounded-t-2xl shadow-lg overflow-hidden max-w-sm" style={{ minHeight: 480 }}>
      {/* Search bar */}
      <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-100">
        <SearchIcon size={18} />
        <input
          className="flex-1 text-lg outline-none text-gray-900 placeholder:text-gray-300"
          placeholder="Search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ fontFamily: "var(--font-red-hat-text)" }}
        />
        {query && (
          <button onClick={() => setQuery("")} className="text-gray-400"><CloseIcon /></button>
        )}
      </div>

      <div className="px-4 py-4">
        {results.length > 0 ? (
          <>
            <div className="space-y-1 mb-6">
              {results.map((r, i) => (
                <div key={i} className="flex items-start gap-3 py-2 cursor-pointer hover:bg-gray-50 rounded">
                  <div className="mt-0.5"><ResultIcon type={r.type} /></div>
                  <div>
                    <p className="text-sm text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>
                      {highlightMatch(r.label, query)}
                    </p>
                    {r.category && <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>{r.category}</p>}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>
              Having trouble? Call{" "}
              <span className="underline cursor-pointer" style={{ color: "#005FCF" }}>1-800-SCRIPPS</span>
              {" "}or{" "}
              <span className="underline cursor-pointer" style={{ color: "#005FCF" }}>send us feedback</span>
            </p>
          </>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Popular Searches</p>
            <div className="space-y-1 mb-5">
              {popularSearches.map(s => (
                <button key={s} className="block text-sm py-1.5 hover:underline text-left" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
                  {s}
                </button>
              ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Need Help</p>
            <div className="space-y-3">
              {helpCards.map(card => (
                <div key={card.title} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow flex items-start justify-between gap-3">
                  <div>
                    <p className="text-base font-bold mb-1" style={{ color: card.color, fontFamily: "var(--font-red-hat-display)" }}>{card.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>{card.desc}</p>
                  </div>
                  <span style={{ color: card.color }} className="shrink-0 mt-1"><ArrowRight /></span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function SearchPanelPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Patterns</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Search Panel</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The full-width overlay that appears when the search icon in the{" "}
          <Link href="/patterns/header" className="underline" style={{ color: "#005FCF" }}>Header</Link>{" "}
          is clicked. Shows popular searches when empty, real-time results with bold match highlighting when typing.
          Mobile adds a "Need Help" section with quick-access cards.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16 max-w-4xl">

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Desktop</h2>
            <p className="text-sm text-gray-500">Type to see real-time results with bold match highlighting. Clear shows popular searches.</p>
          </div>
          <DesktopSearchPanel />
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Mobile</h2>
            <p className="text-sm text-gray-500">Slides up from the bottom. Empty state includes "Need Help" quick-access cards. Type to see results.</p>
          </div>
          <MobileSearchPanel />
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Anatomy</h2></div>
          <div className="border border-gray-100 rounded overflow-hidden">
            {[
              { part: "Search input",        desc: "Full-width, large type. Placeholder 'Search'. Cursor visible on open." },
              { part: "Close button",        desc: "× icon, right-aligned. Clears the query and closes the panel." },
              { part: "Popular Searches",    desc: "Shown when query is empty. Editorially curated — top site-wide searches." },
              { part: "Search results",      desc: "Real-time. Each result shows an icon, label (with bold match highlight), and category below." },
              { part: "Result categories",   desc: "Medical Service, Location, or page — shown in smaller gray text below each result." },
              { part: "Need Help (mobile)",  desc: "Find a doctor, Find locations, Patient Resources. Each has a colored title and arrow CTA." },
              { part: "Trouble footer (mobile)", desc: "'Having trouble? Call 1-800-SCRIPPS' — appears in results state only." },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-[200px_1fr] px-6 py-4 border-b border-gray-100 last:border-0">
                <p className="text-sm font-medium text-gray-900">{row.part}</p>
                <p className="text-sm text-gray-500">{row.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "This is a global search panel — it searches all Scripps content, not just Find a Doctor.",
              "Results trigger after 2+ characters. Don't show results for a single character.",
              "Bold the matching substring in each result — it confirms the query is working.",
              "Popular Searches should be reviewed quarterly and updated to reflect current search trends.",
              "On mobile, 'Need Help' cards should always be the last resort — not the first thing shown.",
              "The panel closes on Escape key and on clicking outside — both must be implemented.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
