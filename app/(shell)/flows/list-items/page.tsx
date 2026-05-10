"use client";

import { useState } from "react";
import Link from "next/link";

function PlusIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function CheckIcon() {
  return <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function ChevronRight() {
  return <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function NestedArrow() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2v8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 9l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function SpecialtyDot({ color }: { color: string }) {
  return <div className="w-6 h-6 rounded-full shrink-0" style={{ backgroundColor: color }} />;
}

// Standard list item
function StandardItem({ label, color, selected, expandable, nested, branching, searchResult, path }:
  { label: string; color?: string; selected?: boolean; expandable?: boolean; nested?: boolean; branching?: boolean; searchResult?: boolean; path?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer transition-colors ${
        selected ? "bg-[#005FCF]" : hovered ? "bg-gray-100" : ""
      } ${nested ? "pl-8" : ""}`}
      style={{ fontFamily: "var(--font-red-hat-text)" }}
    >
      {nested && <span className="text-gray-400 shrink-0"><NestedArrow /></span>}
      {!nested && color && <SpecialtyDot color={color} />}
      {!nested && !color && !searchResult && (
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${selected ? "border-white bg-white" : "border-gray-300"}`}>
          {selected && <div className="w-2 h-2 rounded-full bg-[#005FCF]" />}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold ${selected ? "text-white" : "text-gray-900"}`}>{label}</p>
        {searchResult && path && (
          <p className={`text-xs ${selected ? "text-blue-200" : "text-[#005FCF]"}`}>{path}</p>
        )}
      </div>
      {selected && expandable && (
        <div className={`w-6 h-6 rounded border flex items-center justify-center shrink-0 ${selected ? "border-white" : "border-gray-300"}`}>
          <PlusIcon />
        </div>
      )}
      {!selected && expandable && (
        <div className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center shrink-0 text-gray-400">
          <PlusIcon />
        </div>
      )}
      {branching && !selected && <span className="text-gray-400 shrink-0"><ChevronRight /></span>}
    </div>
  );
}

function ListHeader({ label }: { label: string }) {
  return (
    <div className="px-3 py-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</p>
    </div>
  );
}

const specialties = [
  { label: "Primary care", color: "#005FCF" },
  { label: "Pediatrics", color: "#E8944E" },
  { label: "Cancer care", color: "#9B59B6" },
  { label: "Heart & vascular care", color: "#E74C3C" },
  { label: "Orthopedics", color: "#2A9D8F" },
];

export default function ListItemsPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">List Items</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The atomic building blocks of the <Link href="/flows/facet-panel" className="underline" style={{ color: "#005FCF" }}>Facet Panel</Link>.
          Six item types cover every selection pattern in the Omnisearch experience.
        </p>
      </div>
      <div className="px-16 py-12 space-y-12">

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Standard</h2>
            <p className="text-sm text-gray-500">Basic selectable item. Default, hovered, and selected states.</p>
          </div>
          <div className="max-w-sm border border-gray-200 rounded divide-y divide-gray-100">
            <StandardItem label="Primary Care" color="#005FCF" />
            <StandardItem label="Primary Care" color="#005FCF" />
            <StandardItem label="Primary Care" color="#005FCF" selected />
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Expandable</h2>
            <p className="text-sm text-gray-500">Has child items. Shows a + button to reveal sub-categories. Selected state keeps the + button visible.</p>
          </div>
          <div className="max-w-sm border border-gray-200 rounded divide-y divide-gray-100">
            <StandardItem label="Primary Care" color="#005FCF" expandable />
            <StandardItem label="Primary Care" color="#005FCF" expandable />
            <StandardItem label="Primary Care" color="#005FCF" expandable selected />
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Nested</h2>
            <p className="text-sm text-gray-500">Child items revealed when a parent is expanded. Indented with an arrow indicator.</p>
          </div>
          <div className="max-w-sm border border-gray-200 rounded divide-y divide-gray-100">
            <StandardItem label="Primary Care" color="#005FCF" selected expandable />
            <StandardItem label="Primary Care" nested />
            <StandardItem label="Primary Care" nested />
            <StandardItem label="Primary Care" nested selected />
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Branching</h2>
            <p className="text-sm text-gray-500">Opens a sub-menu rather than expanding inline. Chevron indicates navigation to a deeper level.</p>
          </div>
          <div className="max-w-sm border border-gray-200 rounded divide-y divide-gray-100">
            <StandardItem label="Primary Care" color="#005FCF" branching />
            <StandardItem label="Primary Care" color="#005FCF" branching />
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">List Header</h2>
            <p className="text-sm text-gray-500">Section divider. Labels a group of items below it (e.g. "Popular", "All Specialties").</p>
          </div>
          <div className="max-w-sm border border-gray-200 rounded">
            <ListHeader label="Popular" />
            <div className="divide-y divide-gray-100">
              {specialties.slice(0, 3).map(s => <StandardItem key={s.label} label={s.label} color={s.color} />)}
            </div>
            <ListHeader label="All Specialties" />
            <div className="divide-y divide-gray-100">
              {specialties.slice(2).map(s => <StandardItem key={s.label} label={s.label} color={s.color} />)}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Search Result</h2>
            <p className="text-sm text-gray-500">Appears in the dropdown when typing in the search bar. Shows a breadcrumb path below the label for context.</p>
          </div>
          <div className="max-w-sm border border-gray-200 rounded divide-y divide-gray-100">
            <StandardItem label="Primary Care" color="#005FCF" searchResult path="Specialties → Primary Care" />
            <StandardItem label="Primary Care" color="#005FCF" searchResult path="Specialties → Primary Care" />
          </div>
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">When to use each type</h2></div>
          <div className="border border-gray-100 rounded overflow-hidden">
            <div className="grid grid-cols-[140px_1fr_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Type</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Use when</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Notes</p>
            </div>
            {[
              { type: "Standard",    use: "Single-level selectable items with no children", note: "Most common. Used for All Specialties list." },
              { type: "Expandable",  use: "Item has sub-categories the user may want to filter by", note: "+ button reveals nested children inline." },
              { type: "Nested",      use: "Child items of an expanded parent", note: "Always indented. Never used as top-level items." },
              { type: "Branching",   use: "Item leads to a deeper sub-menu, not inline expansion", note: "Chevron > signals navigation, not expansion." },
              { type: "List Header", use: "Labelling a group of related items", note: "Not selectable. Purely semantic/visual." },
              { type: "Search Result", use: "Real-time results as user types in the search bar", note: "Includes path breadcrumb for disambiguation." },
            ].map(row => (
              <div key={row.type} className="grid grid-cols-[140px_1fr_1fr] px-6 py-3 border-b border-gray-100 last:border-0">
                <p className="text-sm font-medium text-gray-900">{row.type}</p>
                <p className="text-sm text-gray-500 pr-4">{row.use}</p>
                <p className="text-sm text-gray-400">{row.note}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
