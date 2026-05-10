"use client";

import { useState } from "react";

function SearchIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-gray-400"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function ChevronRight() {
  return <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function ChevronLeft() {
  return <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function CloseIcon() {
  return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

function CarrierIcon({ name, color }: { name: string; color: string }) {
  return (
    <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-white text-[8px] font-bold" style={{ backgroundColor: color }}>
      {name[0]}
    </div>
  );
}

const popularCarriers = [
  { name: "I'm paying for myself", color: "#6B7280", icon: "💳" },
  { name: "Aetna",                 color: "#7C3AED" },
  { name: "Blue Cross Blue Shield",color: "#005FCF" },
  { name: "Cigna",                 color: "#059669" },
  { name: "Humana",                color: "#DC2626" },
  { name: "United",                color: "#2563EB" },
];

const allCarriers: { letter: string; names: string[] }[] = [
  { letter: "A", names: ["SCRIPPS UMR", "AARP", "Aetna"] },
  { letter: "B", names: ["Beech Street", "Beech Street", "Beech Street", "Beech Street"] },
];

const plansByCarrier: Record<string, { popular: string[]; all: { letter: string; names: string[] }[] }> = {
  "Blue Cross Blue Shield": {
    popular: ["BCBS Commercial PPO", "Blue Cross HMO California", "Blue Advantage HMO", "Blue Precision HMO"],
    all: [
      { letter: "B", names: ["BCBS Blue Choice Options (Tier 1)", "BCBS Commercial PPO", "Blue Advantage HMO", "Blue Community FHP", "Blue Community MHW", "Blue Cross HMO California", "Blue Cross Med Select PPO", "Blue Cross Med Select PPO"] },
    ],
  },
  "Aetna": {
    popular: ["Aetna HMO", "Aetna PPO", "Aetna Choice POS II"],
    all: [
      { letter: "A", names: ["Aetna Choice POS II", "Aetna HMO", "Aetna PPO", "Aetna Select"] },
    ],
  },
};

function CarrierList({ selected, onSelect, search, onSearch }: {
  selected: string | null;
  onSelect: (name: string) => void;
  search: string;
  onSearch: (val: string) => void;
}) {
  const filtered = search
    ? popularCarriers.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        .concat(allCarriers.flatMap(g => g.names.filter(n => n.toLowerCase().includes(search.toLowerCase())).map(n => ({ name: n, color: "#6B7280" }))))
    : null;

  return (
    <div className="flex flex-col h-full">
      <p className="text-xs font-semibold text-gray-500 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Step 1: Select a carrier</p>
      <div className="flex items-center gap-2 px-2.5 py-2 border border-gray-300 rounded mb-3">
        <SearchIcon />
        <input
          className="flex-1 text-sm outline-none placeholder:text-gray-400"
          placeholder="Search"
          value={search}
          onChange={e => onSearch(e.target.value)}
          style={{ fontFamily: "var(--font-red-hat-text)" }}
        />
        {search && <button onClick={() => onSearch("")} className="text-gray-400"><CloseIcon /></button>}
      </div>

      <div className="flex-1 overflow-y-auto space-y-1">
        {filtered ? (
          filtered.map(c => (
            <button key={c.name} onClick={() => onSelect(c.name)}
              className={`w-full flex items-center gap-2.5 px-2 py-2 rounded text-left hover:bg-gray-50 ${selected === c.name ? "bg-blue-50" : ""}`}
              style={{ fontFamily: "var(--font-red-hat-text)" }}>
              <CarrierIcon name={c.name} color={c.color || "#6B7280"} />
              <span className={`flex-1 text-sm ${c.name.toLowerCase().includes(search.toLowerCase()) ? "font-semibold text-[#005FCF]" : "text-gray-900"}`}>{c.name}</span>
              <ChevronRight />
            </button>
          ))
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-2 mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>Popular Carriers</p>
            {popularCarriers.map(c => (
              <button key={c.name} onClick={() => onSelect(c.name)}
                className={`w-full flex items-center gap-2.5 px-2 py-2 rounded text-left hover:bg-gray-50 transition-colors ${selected === c.name ? "bg-blue-50" : ""}`}
                style={{ fontFamily: "var(--font-red-hat-text)" }}>
                {c.icon
                  ? <span className="w-5 h-5 shrink-0 text-sm flex items-center justify-center">{c.icon}</span>
                  : <CarrierIcon name={c.name} color={c.color} />
                }
                <span className="flex-1 text-sm text-gray-900">{c.name}</span>
                <span className="text-gray-300"><ChevronRight /></span>
              </button>
            ))}
            {allCarriers.map(group => (
              <div key={group.letter}>
                <p className="text-xs font-bold text-gray-400 px-2 pt-2 pb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>{group.letter}</p>
                {group.names.map((name, i) => (
                  <button key={i} onClick={() => onSelect(name)}
                    className={`w-full flex items-center gap-2.5 px-2 py-2 rounded text-left hover:bg-gray-50 ${selected === name ? "bg-blue-50" : ""}`}
                    style={{ fontFamily: "var(--font-red-hat-text)" }}>
                    <div className="w-5 h-5 shrink-0" />
                    <span className="flex-1 text-sm text-gray-900">{name}</span>
                    <span className="text-gray-300"><ChevronRight /></span>
                  </button>
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

function PlanList({ carrier, onBack, onSelect, selectedPlan }: {
  carrier: string;
  onBack: () => void;
  onSelect: (plan: string) => void;
  selectedPlan: string | null;
}) {
  const plans = plansByCarrier[carrier] || { popular: ["Plan A", "Plan B", "Plan C"], all: [{ letter: "A", names: ["Plan A", "Plan B"] }] };
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-1.5 mb-2">
        <button onClick={onBack} className="text-[#005FCF] hover:opacity-70 transition-opacity">
          <ChevronLeft />
        </button>
        <p className="text-xs font-semibold text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>Step 2: Select a plan</p>
      </div>
      <div className="flex items-center gap-2 px-2.5 py-2 border border-gray-300 rounded mb-3">
        <SearchIcon />
        <input
          className="flex-1 text-sm outline-none placeholder:text-gray-400"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ fontFamily: "var(--font-red-hat-text)" }}
        />
        {search && <button onClick={() => setSearch("")} className="text-gray-400"><CloseIcon /></button>}
      </div>

      <div className="flex-1 overflow-y-auto space-y-1">
        {!search && (
          <>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-2 mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>Popular Plans</p>
            {plans.popular.map(plan => (
              <button key={plan} onClick={() => onSelect(plan)}
                className={`w-full flex items-center gap-2 px-2 py-2 rounded text-left hover:bg-gray-50 ${selectedPlan === plan ? "bg-blue-50" : ""}`}
                style={{ fontFamily: "var(--font-red-hat-text)" }}>
                <div className="w-2 h-2 rounded-full bg-gray-200 shrink-0" />
                <span className={`text-sm ${selectedPlan === plan ? "text-[#005FCF] font-semibold" : "text-gray-900"}`}>{plan}</span>
              </button>
            ))}
          </>
        )}
        {plans.all.map(group => (
          <div key={group.letter}>
            {!search && <p className="text-xs font-bold text-gray-400 px-2 pt-2 pb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>{group.letter}</p>}
            {group.names.filter(n => !search || n.toLowerCase().includes(search.toLowerCase())).map((name, i) => (
              <button key={i} onClick={() => onSelect(name)}
                className={`w-full flex items-center gap-2 px-2 py-2 rounded text-left hover:bg-gray-50 ${selectedPlan === name ? "bg-blue-50" : ""}`}
                style={{ fontFamily: "var(--font-red-hat-text)" }}>
                <div className="w-2 h-2 rounded-full bg-gray-200 shrink-0" />
                <span className={`text-sm ${selectedPlan === name ? "text-[#005FCF] font-semibold" : "text-gray-900"}`}>{name}</span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function InsuranceSelector() {
  const [carrier, setCarrier] = useState<string | null>(null);
  const [plan, setPlan] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  return (
    <div className="flex rounded-lg border border-gray-200 shadow-sm bg-white overflow-hidden" style={{ height: 480 }}>
      {/* Step 1 */}
      <div className="w-72 border-r border-gray-100 p-4 flex flex-col">
        <CarrierList
          selected={carrier}
          onSelect={c => { setCarrier(c); setPlan(null); }}
          search={search}
          onSearch={setSearch}
        />
      </div>

      {/* Step 2 */}
      <div className={`w-72 p-4 flex flex-col transition-all ${carrier ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
        {carrier ? (
          <PlanList
            carrier={carrier}
            onBack={() => { setCarrier(null); setPlan(null); }}
            onSelect={setPlan}
            selectedPlan={plan}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-sm text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            Select a carrier first
          </div>
        )}
      </div>
    </div>
  );
}

export default function InsuranceSelectorPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Insurance Selector</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          A two-step carrier and plan picker used in the Find a Doctor filter flow.
          Step 1 selects the insurance carrier. Step 2 reveals the available plans for that carrier.
          Both steps support search.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16 max-w-5xl">

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Interactive</h2>
            <p className="text-sm text-gray-500">Select a carrier to reveal Step 2. Search filters both lists in real time. Try "Blue" in the search.</p>
          </div>
          <InsuranceSelector />
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">States</h2></div>
          <div className="border border-gray-100 rounded overflow-hidden">
            <div className="grid grid-cols-[160px_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">State</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Description</p>
            </div>
            {[
              { state: "Root",   desc: "Step 1 active, Step 2 dimmed. Shows Popular Carriers then alphabetical full list." },
              { state: "Child",  desc: "Carrier selected. Step 2 activates with Popular Plans and full plan list for that carrier. Back arrow returns to Step 1." },
              { state: "Search", desc: "Search active in either step. List filters in real time. Matching text is highlighted in brand-primary blue." },
              { state: "Mobile", desc: "Full-screen panel, one step at a time. Back button navigates between steps." },
            ].map(row => (
              <div key={row.state} className="grid grid-cols-[160px_1fr] px-6 py-4 border-b border-gray-100 last:border-0">
                <p className="text-sm font-medium text-gray-900">{row.state}</p>
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
                  "Always show Popular Carriers/Plans first — they cover the majority of selections.",
                  "Back arrow in Step 2 should return to Step 1 without losing the carrier context.",
                  "Search should filter across both popular and full list simultaneously.",
                  "Highlight matching search text in brand-primary to aid scanability.",
                  "On mobile, each step takes the full panel — never show both columns simultaneously.",
                ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Don't</p>
              <ul className="space-y-2">
                {[
                  "Don't skip Step 1 — always require carrier selection before showing plans.",
                  "Don't show plans for all carriers at once — the list would be unmanageable.",
                  "Don't remove 'I'm paying for myself' from Popular Carriers — it's a top selection.",
                  "Don't use a standard select/dropdown — the two-step pattern exists for a reason.",
                ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
