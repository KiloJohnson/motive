"use client";

import { useState } from "react";
import Link from "next/link";

function ChevronDown() {
  return <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function CloseIcon() {
  return <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function FilterIcon() {
  return <svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 1h12M3 6h8M5 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function SpecialtyIcon({ color }: { color: string }) {
  return <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: color }} />;
}

// Single filter chip
function FilterChip({
  label, icon, active, focused, promoted, onRemove
}: {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  focused?: boolean;
  promoted?: boolean;
  onRemove?: () => void;
}) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold cursor-pointer select-none transition-colors
      ${active
        ? "bg-[#005FCF] text-white border border-[#005FCF]"
        : focused
        ? "border-2 border-[#005FCF] text-[#005FCF] bg-white"
        : promoted
        ? "border border-[#005FCF] text-[#005FCF] bg-[#F3F8FB]"
        : "border border-gray-300 text-gray-700 bg-white hover:border-[#005FCF] hover:text-[#005FCF]"
      }`}
      style={{ fontFamily: "var(--font-red-hat-text)" }}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
      {active && onRemove ? (
        <button onClick={onRemove} className="ml-0.5 opacity-80 hover:opacity-100">
          <CloseIcon />
        </button>
      ) : (
        <span className="opacity-60"><ChevronDown /></span>
      )}
    </div>
  );
}

// Interactive filter bar
function FilterBar() {
  const [active, setActive] = useState<string[]>([]);

  const filters = [
    { label: "Provider",          icon: null },
    { label: "Specialty",         icon: <SpecialtyIcon color="#005FCF" /> },
    { label: "Availability",      icon: null },
    { label: "Near",              icon: null },
    { label: "Provider's gender", icon: null },
    { label: "Patient's age",     icon: null },
    { label: "Language",          icon: null },
    { label: "Facility",          icon: null },
  ];

  const toggle = (label: string) =>
    setActive(prev => prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]);

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <button
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border border-gray-300 text-gray-700 bg-white hover:border-[#005FCF] hover:text-[#005FCF] transition-colors"
        style={{ fontFamily: "var(--font-red-hat-text)" }}
      >
        <FilterIcon /> Filters
      </button>
      {filters.map(f => (
        <FilterChip
          key={f.label}
          label={f.label}
          icon={f.icon ?? undefined}
          active={active.includes(f.label)}
          onRemove={() => toggle(f.label)}
          {...(!active.includes(f.label) ? { onClick: () => toggle(f.label) } : {})}
        />
      ))}
    </div>
  );
}

export default function FilterChipsPage() {
  const [removed, setRemoved] = useState(false);

  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Filter Chips</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Pill-shaped filter controls in the{" "}
          <Link href="/flows/results-header" className="underline" style={{ color: "#005FCF" }}>Results Header</Link>.
          Each chip represents one filter dimension. Chips toggle between inactive and active states,
          and active chips show an × to remove the filter.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16">

        {/* Facet Primitive variants */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Variants</h2>
            <p className="text-sm text-gray-500">Five states covering every filter interaction.</p>
          </div>
          <div className="border border-gray-100 rounded divide-y divide-gray-100">
            {[
              { label: "Inactive — Default",  chip: <FilterChip label="Specialty" />, desc: "No filter applied. Chevron signals dropdown." },
              { label: "Inactive — Focused",  chip: <FilterChip label="Specialty" focused />, desc: "Keyboard or click focus. Blue border, no fill." },
              { label: "Active — Default",    chip: <FilterChip label="Primary Care" icon={<SpecialtyIcon color="#005FCF" />} active onRemove={() => {}} />, desc: "Filter applied. Blue fill, white text, × to remove." },
              { label: "Active — Focused",    chip: <FilterChip label="Primary Care" active focused onRemove={() => {}} />, desc: "Active chip with focus state." },
              { label: "Promoted",            chip: <FilterChip label="Specialty" promoted />, desc: "Highlighted inactive chip — draws attention to a key filter." },
            ].map(({ label, chip, desc }) => (
              <div key={label} className="flex items-center gap-8 px-6 py-5">
                <div className="w-52 shrink-0">
                  <p className="text-sm font-medium text-gray-900">{label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                </div>
                {chip}
              </div>
            ))}
          </div>
        </section>

        {/* Active filter counts */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Active Filter States</h2>
            <p className="text-sm text-gray-500">How the bar looks as filters are applied.</p>
          </div>
          <div className="space-y-4 p-8 border border-gray-100 rounded bg-gray-50">
            {[
              { label: "0 active", chips: ["Provider", "Specialty", "Availability", "Near", "Language"] },
              { label: "1 active", active: ["Primary Care"], rest: ["Provider", "Availability", "Near", "Language"] },
              { label: "2 active", active: ["Primary Care", "BCBS Blue Advantage"], rest: ["Availability", "Near", "Language"] },
            ].map(row => (
              <div key={row.label}>
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">{row.label}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border border-gray-300 text-gray-700 bg-white" style={{ fontFamily: "var(--font-red-hat-text)" }}>
                    <FilterIcon /> Filters
                  </button>
                  {"active" in row && row.active?.map(l => (
                    <FilterChip key={l} label={l} active onRemove={() => {}} />
                  ))}
                  {("chips" in row ? row.chips : row.rest)?.map(l => (
                    <FilterChip key={l} label={l} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live interactive */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Interactive</h2>
            <p className="text-sm text-gray-500">Click any chip to activate it. Click × to remove.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded bg-gray-50">
            <FilterBar />
          </div>
        </section>

        {/* Usage */}
        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "Inactive chips always show a chevron — it signals there are options inside.",
              "Active chips show the selected value (not the filter name) and an × to remove.",
              "The Filters button always appears first, before the individual chips.",
              "On mobile, chips scroll horizontally — never wrap to a second line.",
              "Don't show more than 8 chips in the bar — use the Filters button to expose additional dimensions.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
