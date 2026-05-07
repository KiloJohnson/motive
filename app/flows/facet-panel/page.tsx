"use client";

import { useState } from "react";
import Link from "next/link";

function SearchIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-gray-400"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function PlusIcon({ white }: { white?: boolean }) {
  return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke={white ? "white" : "currentColor"} strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function CheckIcon() {
  return <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

const popularSpecialties = [
  { label: "Primary care",         color: "#005FCF" },
  { label: "Pediatrics",           color: "#E8944E" },
  { label: "Cancer care",          color: "#9B59B6" },
  { label: "Heart & vascular care",color: "#E74C3C" },
  { label: "Orthopedics",          color: "#2A9D8F" },
  { label: "Women's health",       color: "#E91E8C" },
  { label: "Gastroenterology",     color: "#6A994E" },
  { label: "Neuroscience",         color: "#E9C46A" },
];

const allSpecialties = [
  "Allergy and immunology","Anesthesiology","Cancer care",
  "Heart & vascular care","Orthopedics","Women's health",
  "Gastroenterology","Neuroscience",
];

function FacetPanel({ selectedItem }: { selectedItem: string | null }) {
  return (
    <div className="w-72 border border-gray-200 rounded bg-white overflow-hidden">
      {/* Search */}
      <div className="p-3 border-b border-gray-100">
        <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded">
          <SearchIcon />
          <input className="flex-1 text-sm outline-none text-gray-900 placeholder:text-gray-400" placeholder="Specialty, condition, or provider's name" style={{ fontFamily: "var(--font-red-hat-text)" }} readOnly />
        </div>
        <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>
          <span>✦</span> Try a combination like "Pediatricians with video visits"
        </p>
      </div>

      {/* Popular */}
      <div>
        <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>Popular</p>
        {popularSpecialties.map(s => {
          const isSelected = selectedItem === s.label;
          return (
            <div key={s.label} className={`flex items-center gap-2.5 px-3 py-2 ${isSelected ? "bg-[#005FCF]" : "hover:bg-gray-50"}`}>
              {isSelected && <CheckIcon />}
              <div className="w-5 h-5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
              <p className={`flex-1 text-sm font-semibold ${isSelected ? "text-white" : "text-gray-900"}`} style={{ fontFamily: "var(--font-red-hat-text)" }}>{s.label}</p>
              <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${isSelected ? "border-white text-white" : "border-gray-300 text-gray-400"}`}>
                <PlusIcon white={isSelected} />
              </div>
            </div>
          );
        })}
      </div>

      {/* All Specialties */}
      <div>
        <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>All Specialties</p>
        {allSpecialties.map(s => {
          const isSelected = selectedItem === s;
          return (
            <div key={s} className={`flex items-center gap-2.5 px-3 py-2 ${isSelected ? "bg-[#005FCF]" : "hover:bg-gray-50"}`}>
              <div className={`w-5 h-5 rounded-full border-2 shrink-0 ${isSelected ? "border-white bg-white" : "border-gray-200"}`} />
              <p className={`flex-1 text-sm ${isSelected ? "text-white font-semibold" : "text-gray-700"}`} style={{ fontFamily: "var(--font-red-hat-text)" }}>{s}</p>
              {!isSelected && (
                <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center shrink-0 text-gray-400">
                  <PlusIcon />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FacetPanelPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Facet Panel</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The filter sidebar in the Find a Doctor experience. Composed of{" "}
          <Link href="/flows/list-items" className="underline" style={{ color: "#005FCF" }}>List Items</Link> arranged
          into Popular and All Specialties groups. Three states — none selected, one selected, and selected with expansion.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16">

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Default — No Selection</h2>
            <p className="text-sm text-gray-500">Initial state. All items unselected. Popular specialties at top, full list below.</p>
          </div>
          <FacetPanel selectedItem={null} />
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Root Selected</h2>
            <p className="text-sm text-gray-500">One specialty selected. Item turns blue with checkmark. + button remains visible to expand sub-categories.</p>
          </div>
          <FacetPanel selectedItem="Primary care" />
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "The search bar inside the panel filters the list — it's scoped to specialties, not global search.",
              "Popular specialties are editorially curated — they reflect the most searched services at Scripps.",
              "The + button on a selected item reveals sub-specialties (expandable). See List Items for the nested pattern.",
              "Only one root specialty can be selected at a time — selecting another deselects the current.",
              "The AI hint below the search bar should be rotated or personalised in production — not static.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
