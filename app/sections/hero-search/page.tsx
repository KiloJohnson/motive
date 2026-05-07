"use client";

import { useState } from "react";

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-gray-400">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" className="shrink-0 text-gray-400">
      <path d="M7 1C4.24 1 2 3.24 2 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="7" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function DesktopSearchBar() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div className="flex items-center gap-0 rounded-full border border-gray-300 bg-white overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 px-4 py-3 flex-1 border-r border-gray-200">
        <SearchIcon />
        <input
          className="flex-1 text-sm outline-none text-gray-900 placeholder:text-gray-400"
          placeholder="Specialty, condition, or clinician name"
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ fontFamily: "var(--font-red-hat-text)" }}
        />
      </div>
      <div className="flex items-center gap-2 px-4 py-3 w-48">
        <PinIcon />
        <input
          className="flex-1 text-sm outline-none text-gray-900 placeholder:text-gray-400"
          placeholder="Near"
          value={location}
          onChange={e => setLocation(e.target.value)}
          style={{ fontFamily: "var(--font-red-hat-text)" }}
        />
      </div>
      <button
        className="px-6 py-3 text-sm font-semibold text-white m-1 rounded-full transition-colors"
        style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
      >
        Search
      </button>
    </div>
  );
}

function MobileSearchBar() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div className="flex flex-col gap-2 max-w-sm">
      <div className="flex items-center gap-2 px-3 py-2.5 rounded border border-gray-300 bg-white">
        <SearchIcon />
        <input
          className="flex-1 text-sm outline-none text-gray-900 placeholder:text-gray-400"
          placeholder="Specialty, condition, or name"
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ fontFamily: "var(--font-red-hat-text)" }}
        />
      </div>
      <div className="flex items-center gap-2 px-3 py-2.5 rounded border border-gray-300 bg-white">
        <PinIcon />
        <input
          className="flex-1 text-sm outline-none text-gray-900 placeholder:text-gray-400"
          placeholder="Near"
          value={location}
          onChange={e => setLocation(e.target.value)}
          style={{ fontFamily: "var(--font-red-hat-text)" }}
        />
      </div>
      <button
        className="w-full py-2.5 text-sm font-semibold text-white rounded transition-colors"
        style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
      >
        Search
      </button>
    </div>
  );
}

export default function HeroSearchPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Sections</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Hero Search</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The primary search bar for finding doctors, specialties, and conditions. Appears prominently
          on the homepage and Find a Doctor pages. Desktop uses a single inline bar; mobile stacks into separate fields.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16">

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Desktop</h2>
            <p className="text-sm text-gray-500">Single pill-shaped bar with two input zones and a Search CTA.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded bg-gray-50">
            <DesktopSearchBar />
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Mobile</h2>
            <p className="text-sm text-gray-500">Two stacked input fields with a full-width Search button below.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded bg-gray-50">
            <MobileSearchBar />
          </div>
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Do</p>
              <ul className="space-y-2">
                {[
                  "Place prominently above the fold on homepage and Find a Doctor.",
                  "Pre-fill location from browser geolocation when permission is granted.",
                  "Trigger search on button click and on Enter key.",
                  "Placeholder text should describe the full scope — specialty, condition, OR clinician name.",
                ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Don't</p>
              <ul className="space-y-2">
                {[
                  "Don't use this for site-wide search — it routes to Find a Doctor, not global search.",
                  "Don't remove the location field — proximity is critical to healthcare search.",
                  "Don't stack the desktop layout on tablet — it should remain inline until mobile breakpoint.",
                ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
