"use client";

import { useState } from "react";

// --- Radio Group ---
function RadioGroup({ options, name }: { options: { id: string; label: string; note?: string }[]; name: string }) {
  const [selected, setSelected] = useState(options[0].id);
  return (
    <div className="space-y-3">
      {options.map(opt => (
        <label key={opt.id} className="flex items-start gap-3 cursor-pointer">
          <div
            className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${selected === opt.id ? "border-[#005FCF]" : "border-gray-300"}`}
            onClick={() => setSelected(opt.id)}
          >
            {selected === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-[#005FCF]" />}
          </div>
          <input type="radio" name={name} className="sr-only" checked={selected === opt.id} onChange={() => setSelected(opt.id)} />
          <div>
            <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "var(--font-red-hat-text)" }}>{opt.label}</p>
            {opt.note && <p className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "var(--font-red-hat-text)" }}>{opt.note}</p>}
          </div>
        </label>
      ))}
    </div>
  );
}

// --- Checkbox Group ---
function CheckboxGroup({ options }: { options: { id: string; label: string; note?: string }[] }) {
  const [checked, setChecked] = useState<Set<string>>(new Set([options[0].id]));
  const toggle = (id: string) => setChecked(prev => {
    const n = new Set(prev);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  return (
    <div className="space-y-3">
      {options.map(opt => (
        <label key={opt.id} className="flex items-start gap-3 cursor-pointer">
          <div
            onClick={() => toggle(opt.id)}
            className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors cursor-pointer ${checked.has(opt.id) ? "border-[#005FCF] bg-[#005FCF]" : "border-gray-300 bg-white"}`}
          >
            {checked.has(opt.id) && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "var(--font-red-hat-text)" }}>{opt.label}</p>
            {opt.note && <p className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "var(--font-red-hat-text)" }}>{opt.note}</p>}
          </div>
        </label>
      ))}
    </div>
  );
}

// --- Native Select ---
function NativeSelect() {
  const [val, setVal] = useState("");
  return (
    <div className="max-w-xs">
      <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "var(--font-red-hat-text)" }}>Specialty</label>
      <div className={`flex items-center gap-2 px-3 h-11 rounded border transition-colors ${val ? "border-gray-400" : "border-gray-300"} bg-white focus-within:border-[#005FCF]`}>
        <select
          value={val}
          onChange={e => setVal(e.target.value)}
          className="flex-1 text-sm outline-none bg-transparent appearance-none cursor-pointer"
          style={{ color: val ? "#111827" : "#9CA3AF", fontFamily: "var(--font-red-hat-text)" }}
        >
          <option value="">Select a specialty</option>
          <option>Family Medicine</option>
          <option>Internal Medicine</option>
          <option>Pediatrics</option>
          <option>Cardiology</option>
          <option>Dermatology</option>
          <option>Orthopedics</option>
        </select>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="shrink-0 text-gray-400">
          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

// --- Searchable Select ---
const allOptions = [
  "Aetna Choice POS II", "Aetna HMO", "Aetna PPO",
  "BCBS Blue Choice", "BCBS Commercial PPO", "Blue Advantage HMO",
  "Cigna HMO", "Cigna PPO", "Cigna Open Access",
  "Kaiser Permanente", "Medicare Advantage",
  "United Healthcare Choice", "United Healthcare PPO",
];

function SearchableSelect() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const filtered = allOptions.filter(o => o.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="max-w-xs relative">
      <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "var(--font-red-hat-text)" }}>Insurance carrier</label>
      <div
        className={`flex items-center gap-2 px-3 h-11 rounded border transition-colors cursor-pointer bg-white ${open ? "border-[#005FCF]" : "border-gray-300"}`}
        onClick={() => setOpen(o => !o)}
      >
        <span className="flex-1 text-sm truncate" style={{ color: selected ? "#111827" : "#9CA3AF", fontFamily: "var(--font-red-hat-text)" }}>
          {selected || "Search insurance carrier"}
        </span>
        {selected ? (
          <button onClick={e => { e.stopPropagation(); setSelected(null); setQuery(""); }} className="text-gray-400 hover:text-gray-600 text-xs font-bold">✕</button>
        ) : (
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-gray-400 shrink-0">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </div>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
          <div className="px-3 py-2 border-b border-gray-100">
            <input
              autoFocus
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Type to search..."
              className="w-full text-sm outline-none"
              style={{ fontFamily: "var(--font-red-hat-text)" }}
              onClick={e => e.stopPropagation()}
            />
          </div>
          <div className="max-h-48 overflow-y-auto py-1">
            {filtered.length > 0 ? filtered.map(opt => (
              <button
                key={opt}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${selected === opt ? "font-semibold" : ""}`}
                style={{ color: selected === opt ? "#005FCF" : "#374151", fontFamily: "var(--font-red-hat-text)" }}
                onClick={() => { setSelected(opt); setOpen(false); setQuery(""); }}
              >
                {opt}
              </button>
            )) : (
              <p className="px-4 py-3 text-sm text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>No results for "{query}"</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// --- Page ---
export default function SelectorsPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Selectors</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Input controls for choosing from a set of options. Four patterns — radio, checkbox, native select, and searchable select — each suited to a different type of choice.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Radio */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Radio Group</h2>
          <p className="text-sm text-gray-500 mb-6">
            For mutually exclusive choices — selecting one automatically deselects the others. Best for 2–4 options that are always visible. All interactive below.
          </p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50 grid grid-cols-2 gap-10">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>2 options</p>
              <RadioGroup name="visit-type" options={[
                { id: "inperson", label: "In-person visit", note: "At a Scripps clinic near you" },
                { id: "video", label: "Video visit", note: "From anywhere, on any device" },
              ]} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>3 options</p>
              <RadioGroup name="patient-type" options={[
                { id: "new", label: "New patient" },
                { id: "existing", label: "Existing patient" },
                { id: "notsure", label: "Not sure" },
              ]} />
            </div>
          </div>
        </section>

        {/* Checkbox */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Checkbox Group</h2>
          <p className="text-sm text-gray-500 mb-6">
            For multi-selection — any combination of options can be chosen simultaneously. Use when more than one answer is valid. All interactive below.
          </p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50 grid grid-cols-2 gap-10">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Availability filters</p>
              <CheckboxGroup options={[
                { id: "online", label: "Online booking", note: "Schedule without calling" },
                { id: "video", label: "Video visits available" },
                { id: "newpatient", label: "Accepting new patients" },
              ]} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Contact preferences</p>
              <CheckboxGroup options={[
                { id: "email", label: "Email reminders" },
                { id: "sms", label: "SMS reminders" },
                { id: "call", label: "Phone call reminders" },
              ]} />
            </div>
          </div>
        </section>

        {/* Native Select */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Native Select</h2>
          <p className="text-sm text-gray-500 mb-6">
            A browser-native dropdown for choosing one option from a predefined list. Use when there are 5+ options that don't need search. Minimal footprint — good for dense forms.
          </p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50">
            <NativeSelect />
          </div>
        </section>

        {/* Searchable Select */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Searchable Select</h2>
          <p className="text-sm text-gray-500 mb-6">
            A filterable list for long option sets — insurance carriers, locations, specialties. The user types to narrow the list, then clicks to select. Clear (✕) resets the field. Try searching "blue" or "aetna" below.
          </p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50">
            <SearchableSelect />
          </div>
          <p className="text-xs text-gray-400 mt-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            Full implementation in context → <a href="/flows/insurance-selector" className="underline" style={{ color: "#005FCF" }}>Insurance Selector flow</a>
          </p>
        </section>

        {/* Decision guide */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Which selector to use</h2>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[180px_100px_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              {["Pattern", "Selection", "Use when"].map(h => (
                <p key={h} className="text-xs font-semibold uppercase tracking-wider text-gray-400">{h}</p>
              ))}
            </div>
            {[
              { pattern: "Radio Group",        sel: "Single",   when: "2–4 mutually exclusive options, always visible. Patient type, visit type, appointment reason." },
              { pattern: "Checkbox Group",     sel: "Multiple", when: "Any combination valid. Filters, preferences, notification settings." },
              { pattern: "Native Select",      sel: "Single",   when: "5–15 predefined options, no search needed. State, specialty, age range." },
              { pattern: "Searchable Select",  sel: "Single",   when: "15+ options or user is unlikely to know the full list. Insurance carrier, clinic location." },
              { pattern: "Toggle",             sel: "Binary",   when: "On/off setting that takes immediate effect. See Toggle component." },
              { pattern: "Switcher",           sel: "Single",   when: "2–4 view options presented equally. List vs Map, In-person vs Video." },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-[180px_100px_1fr] px-6 py-4 border-b border-gray-100 last:border-0 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                <p className="font-semibold text-gray-800" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.pattern}</p>
                <span className={`inline-flex self-start mt-0.5 px-2 py-0.5 rounded-full text-xs font-semibold ${row.sel === "Multiple" ? "bg-purple-50 text-purple-700" : "bg-blue-50 text-blue-700"}`}>
                  {row.sel}
                </span>
                <p className="text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.when}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Usage */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Usage</h2>
          <ul className="space-y-2">
            {[
              "Never mix radio and checkbox in the same group — they communicate different selection rules.",
              "Radio and checkbox groups with more than 6 options should switch to a native or searchable select.",
              "Always show all radio options simultaneously — don't hide them behind a dropdown.",
              "Searchable select must handle a no-results state gracefully — always suggest an alternative action.",
              "Full states (focus, error, disabled) for all selector types are documented on the Forms page.",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />{t}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}
