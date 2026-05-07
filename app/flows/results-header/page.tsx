"use client";

import { useState } from "react";
import Link from "next/link";

function ChevronDown() {
  return <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function FilterIcon() {
  return <svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 1h12M3 6h8M5 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function CloseSmall() {
  return <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function SearchIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function PinIcon() {
  return <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M6 10v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function ChevronLeft() {
  return <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function ChevronRight() {
  return <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function Breadcrumb() {
  return (
    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>
      <span className="hover:underline cursor-pointer">Home</span>
      <span>/</span>
      <span className="hover:underline cursor-pointer">Find a Doctor</span>
      <span>/</span>
      <span className="text-gray-400">Search Results</span>
    </div>
  );
}

function FilterChip({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border cursor-pointer select-none
      ${active ? "bg-[#005FCF] text-white border-[#005FCF]" : "border-gray-300 text-gray-700 hover:border-[#005FCF] hover:text-[#005FCF]"}`}
      style={{ fontFamily: "var(--font-red-hat-text)" }}
    >
      {label}
      {active ? <CloseSmall /> : <ChevronDown />}
    </div>
  );
}

function FilterBar({ activeFilters = [] }: { activeFilters?: string[] }) {
  const allFilters = ["Provider", "Specialty", "Availability", "Near", "Provider's gender", "Patient's age", "Language", "Facility"];
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-gray-300 text-gray-700 bg-white" style={{ fontFamily: "var(--font-red-hat-text)" }}>
        <FilterIcon /> Filters
      </button>
      {activeFilters.map(f => <FilterChip key={f} label={f} active />)}
      {allFilters.filter(f => !activeFilters.includes(f)).map(f => <FilterChip key={f} label={f} />)}
    </div>
  );
}

// Desktop header — no search bar
function DesktopHeader({ showSearch, activeFilters }: { showSearch?: boolean; activeFilters?: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded p-6 space-y-4">
      <Breadcrumb />
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900 shrink-0" style={{ fontFamily: "var(--font-red-hat-display)" }}>1,234 results</h2>
        {showSearch && (
          <div className="flex items-center gap-2 flex-1 max-w-lg">
            <div className="flex items-center gap-2 flex-1 px-3 py-2 border border-gray-300 rounded">
              <SearchIcon />
              <input className="flex-1 text-sm outline-none placeholder:text-gray-400" placeholder="Specialty, condition, or name" style={{ fontFamily: "var(--font-red-hat-text)" }} readOnly />
            </div>
            <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded w-32">
              <PinIcon />
              <input className="flex-1 text-sm outline-none placeholder:text-gray-400" placeholder="Near" style={{ fontFamily: "var(--font-red-hat-text)" }} readOnly />
            </div>
            <button className="px-4 py-2 text-sm font-semibold text-white rounded" style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>Search</button>
          </div>
        )}
      </div>
      <FilterBar activeFilters={activeFilters} />
    </div>
  );
}

// Mobile header
function MobileHeader() {
  return (
    <div className="bg-white border border-gray-200 rounded p-4 space-y-3 max-w-sm">
      <Breadcrumb />
      <p className="text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>1,234 results</p>
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-gray-300 text-gray-700 bg-white whitespace-nowrap" style={{ fontFamily: "var(--font-red-hat-text)" }}>
          <FilterIcon /> Filters
        </button>
        {["Provider", "Specialty", "Availability"].map(f => <FilterChip key={f} label={f} />)}
      </div>
    </div>
  );
}

// Results subheader — calendar
function CalendarSubheader() {
  const days = [
    { day: "Mon", date: "Mar 2" },
    { day: "Tue", date: "Mar 3" },
    { day: "Wed", date: "Mar 5", today: true },
    { day: "Thu", date: "Mar 4" },
    { day: "Fri", date: "Mar 6" },
  ];
  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded px-4 py-3">
      <div className="flex items-center gap-3">
        <button className="text-gray-400 hover:text-gray-600"><ChevronLeft /></button>
        <div className="flex items-center gap-1">
          {days.map(d => (
            <div key={d.date} className={`flex flex-col items-center px-3 py-1.5 rounded cursor-pointer ${d.today ? "bg-[#005FCF] text-white" : "hover:bg-gray-50 text-gray-700"}`}>
              <p className="text-[10px] font-semibold uppercase" style={{ fontFamily: "var(--font-red-hat-text)" }}>{d.day}</p>
              <p className="text-sm font-bold" style={{ fontFamily: "var(--font-red-hat-text)" }}>{d.date}</p>
            </div>
          ))}
        </div>
        <button className="text-gray-400 hover:text-gray-600"><ChevronRight /></button>
      </div>
      <button className="text-xs font-semibold hover:underline" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>Go to date ›</button>
    </div>
  );
}

// Results subheader — tiles/view toggle
function ViewSubheader() {
  const [view, setView] = useState<"list" | "map">("list");
  const [sort, setSort] = useState("Best Match");
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded px-4 py-3">
      <div className="flex items-center rounded-full border border-[#005FCF] overflow-hidden">
        {(["list", "map"] as const).map(v => (
          <button key={v} onClick={() => setView(v)}
            className={`px-4 py-1.5 text-xs font-semibold capitalize transition-colors ${view === v ? "bg-[#005FCF] text-white" : "text-[#005FCF] hover:bg-[#F3F8FB]"}`}
            style={{ fontFamily: "var(--font-red-hat-text)" }}>
            {v === "list" ? "List" : "Map"}
          </button>
        ))}
      </div>
      <button className="inline-flex items-center gap-1.5 text-xs font-semibold border border-gray-300 px-3 py-1.5 rounded-full hover:border-[#005FCF]" style={{ fontFamily: "var(--font-red-hat-text)" }}>
        {sort} <ChevronDown />
      </button>
    </div>
  );
}

export default function ResultsHeaderPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Results Header</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The top section of the Find a Doctor results page. Combines breadcrumb, result count, and{" "}
          <Link href="/flows/filter-chips" className="underline" style={{ color: "#005FCF" }}>Filter Chips</Link>{" "}
          into a cohesive header. Multiple layouts for desktop, desktop with search, and mobile.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16 max-w-5xl">

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Desktop — Standard</h2>
            <p className="text-sm text-gray-500">Breadcrumb + result count + filter bar. No active filters.</p>
          </div>
          <DesktopHeader />
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Desktop — With Search Bar</h2>
            <p className="text-sm text-gray-500">Search bar inline with result count. Used on pages where the hero search wasn't the entry point.</p>
          </div>
          <DesktopHeader showSearch />
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Desktop — Active Filters</h2>
            <p className="text-sm text-gray-500">Active filter chips appear before inactive ones.</p>
          </div>
          <DesktopHeader activeFilters={["Primary Care", "BCBS Blue Advantage"]} />
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Mobile</h2>
            <p className="text-sm text-gray-500">Compact layout. Filter chips scroll horizontally.</p>
          </div>
          <MobileHeader />
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Results Subheader — Calendar</h2>
            <p className="text-sm text-gray-500">Date picker strip for appointment availability. Shown when Calendar view is active.</p>
          </div>
          <CalendarSubheader />
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Results Subheader — View Toggle</h2>
            <p className="text-sm text-gray-500">List/Map toggle + sort control. Always visible below the main header.</p>
          </div>
          <ViewSubheader />
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "Always show the result count prominently — it orients the user immediately.",
              "Breadcrumb should reflect the actual navigation path, not always 'Home > Find a Doctor'.",
              "Show the search bar variant when the user arrived via a route other than the hero search.",
              "Active filters always appear before inactive ones in the filter bar.",
              "The view toggle (List/Map) and sort control appear in the subheader, below the main header.",
              "On mobile, the filter bar scrolls horizontally — never wraps.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
