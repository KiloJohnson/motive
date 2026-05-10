"use client";

import { useState } from "react";
import Link from "next/link";

const suggestions = [
  { label: "Primary care",          color: "#005FCF", path: "Specialties → Primary Care" },
  { label: "Pediatrics",            color: "#E8944E", path: "Specialties → Pediatrics" },
  { label: "Heart & vascular care", color: "#E74C3C", path: "Specialties → Heart & Vascular" },
];

function SearchIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

function OmnisearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = query
    ? suggestions.filter(s => s.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="relative max-w-lg">
      <div className="border border-gray-300 rounded-lg bg-white shadow-sm overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3">
          <span className="text-gray-400"><SearchIcon /></span>
          <input
            className="flex-1 text-sm outline-none text-gray-900 placeholder:text-gray-400"
            placeholder="Specialty, condition, or provider's name"
            value={query}
            onChange={e => { setQuery(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            style={{ fontFamily: "var(--font-red-hat-text)" }}
          />
        </div>
        <div className="px-4 pb-2.5 flex items-center gap-1.5">
          <span className="text-[#005FCF] text-xs">✦</span>
          <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            Try a combination like <span className="text-gray-600">"Pediatricians with video visits"</span>
          </p>
        </div>
      </div>

      {/* Dropdown results */}
      {open && query && filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
          {filtered.map(s => (
            <div
              key={s.label}
              className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer"
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

export default function OmnisearchBarPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Omnisearch Bar</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The primary search input for the Find a Doctor experience. Accepts specialties, conditions, and
          provider names. Features an AI combination hint and real-time search result dropdown.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16">

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Live Example</h2>
            <p className="text-sm text-gray-500">Type "primary" or "heart" to see the search result dropdown.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded bg-gray-50">
            <OmnisearchBar />
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Anatomy</h2>
          </div>
          <div className="border border-gray-100 rounded overflow-hidden">
            {[
              { part: "Search icon",    desc: "Magnifying glass — purely visual, non-interactive." },
              { part: "Input field",    desc: "Accepts free text. Triggers real-time search as user types." },
              { part: "AI hint",        desc: "Spark (✦) icon + suggestion text. Prompts users to try combination searches like 'Pediatricians with video visits'." },
              { part: "Result dropdown",desc: "Appears when query matches known specialties, conditions, or providers. Each result shows a colored icon and path breadcrumb." },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-[180px_1fr] px-6 py-4 border-b border-gray-100 last:border-0">
                <p className="text-sm font-medium text-gray-900">{row.part}</p>
                <p className="text-sm text-gray-500">{row.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Do</p>
              <ul className="space-y-2">
                {[
                  "Show the AI hint at all times — it teaches users the combination search pattern.",
                  "Show search results in real-time, not on submit.",
                  "Include a breadcrumb path on search results to disambiguate similar names.",
                  "Support keyboard navigation through the dropdown (arrow keys, Enter, Escape).",
                ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Don't</p>
              <ul className="space-y-2">
                {[
                  "Don't use this for global site search — it routes to Find a Doctor only.",
                  "Don't show the dropdown until at least 2 characters are entered.",
                  "Don't remove the AI hint — it's a key differentiator of the Omnisearch experience.",
                  "Don't use a static hint — rotate suggestions to surface different use cases.",
                ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
