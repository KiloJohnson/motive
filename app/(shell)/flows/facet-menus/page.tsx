"use client";

import { useState } from "react";

// --- Shared ---
function CloseIcon() {
  return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function SearchIcon() {
  return <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0 text-gray-400"><circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M9 9l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function ChevronDown() {
  return <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function PinIcon() {
  return <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><circle cx="6" cy="6" r="4" stroke="#005FCF" strokeWidth="1.5"/><path d="M6 10v3" stroke="#005FCF" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function ChevronLeft() {
  return <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function ChevronRight() {
  return <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function Radio({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer py-1">
      <div onClick={onChange} className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${checked ? "border-[#005FCF]" : "border-gray-300"}`}>
        {checked && <div className="w-2 h-2 rounded-full bg-[#005FCF]" />}
      </div>
      <span className="text-sm text-gray-900" style={{ fontFamily: "var(--font-red-hat-text)" }}>{label}</span>
    </label>
  );
}

function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer py-1">
      <div onClick={onChange} className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${checked ? "border-[#005FCF] bg-[#005FCF]" : "border-gray-300"}`}>
        {checked && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </div>
      <span className="text-sm text-gray-900" style={{ fontFamily: "var(--font-red-hat-text)" }}>{label}</span>
    </label>
  );
}

function SelectRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-3">
      <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>{label}</p>
      <div className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded cursor-pointer hover:border-gray-400">
        <span className="text-sm text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>{value}</span>
        <ChevronDown />
      </div>
    </div>
  );
}

// Popover shell — same as insurance
function Popover({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="w-72 rounded-lg border border-gray-200 shadow-lg bg-white overflow-hidden">
      <div className="h-1 w-full" style={{ backgroundColor: "#2A9D8F" }} />
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>{title}</p>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><CloseIcon /></button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

// --- Near ---
function NearMenu() {
  const [val, setVal] = useState("");
  const locations = ["San Diego", "Encinitas", "Chula Vista", "Escondido", "La Mesa"];
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded">
        <PinIcon />
        <input className="flex-1 text-sm outline-none placeholder:text-gray-400" placeholder="City, zip, or address" value={val} onChange={e => setVal(e.target.value)} style={{ fontFamily: "var(--font-red-hat-text)" }} />
      </div>
      <button className="text-xs font-semibold" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>📍 Use my location</button>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>Popular Locations</p>
        {locations.map(l => (
          <button key={l} onClick={() => setVal(l)} className="w-full text-left px-1 py-1.5 text-sm text-gray-900 hover:text-[#005FCF] transition-colors" style={{ fontFamily: "var(--font-red-hat-text)" }}>{l}</button>
        ))}
      </div>
    </div>
  );
}

// --- Provider ---
function ProviderMenu() {
  const [type, setType] = useState("any");
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded mb-3">
        <SearchIcon />
        <input className="flex-1 text-sm outline-none placeholder:text-gray-400" placeholder="Looking for..." style={{ fontFamily: "var(--font-red-hat-text)" }} />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>Accepting New Patients</p>
      <Radio checked={type === "any"} onChange={() => setType("any")} label="Any provider" />
      <Radio checked={type === "new"} onChange={() => setType("new")} label="A provider who sees new patients" />
      <Radio checked={type === "reconnect"} onChange={() => setType("reconnect")} label="A provider I've seen before" />
      <p className="text-xs text-gray-400 pt-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Provider's name (optional)</p>
      <input className="w-full px-3 py-2 border border-gray-300 rounded text-sm outline-none" placeholder="Search" style={{ fontFamily: "var(--font-red-hat-text)" }} />
    </div>
  );
}

// --- Gender ---
function GenderMenu() {
  const [val, setVal] = useState("any");
  return (
    <div className="space-y-1">
      <Radio checked={val === "any"} onChange={() => setVal("any")} label="Any" />
      <Radio checked={val === "female"} onChange={() => setVal("female")} label="Female" />
      <Radio checked={val === "male"} onChange={() => setVal("male")} label="Male" />
    </div>
  );
}

// --- Patient Age ---
function AgeMenu() {
  const [val, setVal] = useState("all");
  return (
    <div className="space-y-1">
      <Radio checked={val === "all"} onChange={() => setVal("all")} label="All ages" />
      <Radio checked={val === "child"} onChange={() => setVal("child")} label="Child (under 18)" />
      <Radio checked={val === "adult"} onChange={() => setVal("adult")} label="Adult (18 or older)" />
    </div>
  );
}

// --- Language ---
const languages = ["English", "Arabic", "Farsi", "French", "German", "Hindi", "Korean", "Portugués", "Tagalog", "Vietnamese"];
function LanguageMenu() {
  const [selected, setSelected] = useState<Set<string>>(new Set(["English"]));
  const toggle = (l: string) => setSelected(prev => { const n = new Set(prev); n.has(l) ? n.delete(l) : n.add(l); return n; });
  return (
    <div className="space-y-0.5 max-h-64 overflow-y-auto">
      {languages.map(l => <Checkbox key={l} checked={selected.has(l)} onChange={() => toggle(l)} label={l} />)}
    </div>
  );
}

// --- Locations ---
const facilityTypes = [
  "Any", "Behavioral Health/Substance", "Children's and Families Locations",
  "Diabetes Locations", "Family Medicine Locations", "Internal Medicine Locations",
  "Hospitals", "Outpatient Rehabilitation", "Occupational Medicine Locations",
  "Orthopedic Care Locations", "Capistrano Surgery Locations", "Palliative Locations",
];
function LocationsMenu() {
  const [selected, setSelected] = useState<Set<string>>(new Set(["Any"]));
  const toggle = (l: string) => setSelected(prev => { const n = new Set(prev); n.has(l) ? n.delete(l) : n.add(l); return n; });
  return (
    <div className="space-y-0.5 max-h-64 overflow-y-auto">
      {facilityTypes.map(l => <Checkbox key={l} checked={selected.has(l)} onChange={() => toggle(l)} label={l} />)}
    </div>
  );
}

// --- Availability ---
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function AvailabilityMenu() {
  const [dayMode, setDayMode] = useState<"any" | "days" | "specific">("any");
  const [selectedDays, setSelectedDays] = useState<Set<string>>(new Set());
  const toggleDay = (d: string) => setSelectedDays(prev => { const n = new Set(prev); n.has(d) ? n.delete(d) : n.add(d); return n; });

  return (
    <div className="space-y-3">
      <SelectRow label="Visit type" value="Any visit type" />
      <SelectRow label="Time" value="Any time" />
      <div>
        <p className="text-xs text-gray-500 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Day</p>
        <div className="space-y-1.5">
          <Radio checked={dayMode === "any"} onChange={() => setDayMode("any")} label="On any day" />
          <Radio checked={dayMode === "days"} onChange={() => setDayMode("days")} label="On a day of the week" />
          {dayMode === "days" && (
            <div className="flex flex-wrap gap-1.5 pl-6 pt-1">
              {days.map(d => (
                <button key={d} onClick={() => toggleDay(d)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-full border transition-colors ${selectedDays.has(d) ? "bg-[#005FCF] text-white border-[#005FCF]" : "border-gray-300 text-gray-600 hover:border-[#005FCF]"}`}
                  style={{ fontFamily: "var(--font-red-hat-text)" }}>
                  {d}
                </button>
              ))}
            </div>
          )}
          <Radio checked={dayMode === "specific"} onChange={() => setDayMode("specific")} label="On a specific day" />
          {dayMode === "specific" && (
            <div className="pl-6 pt-1">
              <div className="flex items-center justify-between mb-2">
                <button className="text-gray-400 hover:text-gray-600"><ChevronLeft /></button>
                <p className="text-xs font-semibold text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>September 2024</p>
                <button className="text-gray-400 hover:text-gray-600"><ChevronRight /></button>
              </div>
              <div className="grid grid-cols-7 gap-0.5 text-center">
                {["S","M","T","W","T","F","S"].map((d, i) => (
                  <p key={i} className="text-[10px] font-semibold text-gray-400 py-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>{d}</p>
                ))}
                {[...Array(6)].map((_, i) => <div key={`e${i}`} />)}
                {[...Array(30)].map((_, i) => (
                  <button key={i}
                    className={`text-xs py-1 rounded-full hover:bg-gray-100 transition-colors ${i === 14 ? "bg-[#005FCF] text-white" : "text-gray-700"}`}
                    style={{ fontFamily: "var(--font-red-hat-text)" }}>
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Checkbox checked={false} onChange={() => {}} label="Only show providers with online appointment booking" />
    </div>
  );
}

type MenuKey = "near" | "provider" | "gender" | "age" | "language" | "locations" | "availability";

const menuDefs: { key: MenuKey; label: string; desc: string; component: React.ReactNode }[] = [
  { key: "near",         label: "Near",             desc: "Location input with city/zip/address, 'Use my location' shortcut, and Popular Locations list.",           component: <NearMenu /> },
  { key: "provider",     label: "Provider",         desc: "Free-text search + 'Accepting new patients' radio. Optional provider name field.",                       component: <ProviderMenu /> },
  { key: "gender",       label: "Provider's Gender",desc: "Radio: Any / Female / Male.",                                                                             component: <GenderMenu /> },
  { key: "age",          label: "Patient's Age",    desc: "Radio: All ages / Child (under 18) / Adult (18+).",                                                       component: <AgeMenu /> },
  { key: "language",     label: "Language",         desc: "Scrollable checkbox list of supported languages. English pre-selected.",                                  component: <LanguageMenu /> },
  { key: "locations",    label: "Locations",        desc: "Checkbox list of facility types. 'Any' deselects all others.",                                            component: <LocationsMenu /> },
  { key: "availability", label: "Availability",     desc: "Visit type + time dropdowns. Day filter: any day, day-of-week (pill selector), or specific date (calendar).", component: <AvailabilityMenu /> },
];

export default function FacetMenusPage() {
  const [openPopover, setOpenPopover] = useState<MenuKey | null>(null);

  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Facet Menus</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The dropdown content for each filter chip in the Results Header. Each facet has its own
          interaction model. All appear both inline (within the filter chip) and as a popover overlay.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16 max-w-5xl">

        {menuDefs.map(({ key, label, desc, component }) => (
          <section key={key}>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">{label}</h2>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
            <div className="flex gap-8 items-start flex-wrap">
              {/* Inline */}
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Inline</p>
                <div className="w-64 border border-gray-200 rounded bg-white p-4 shadow-sm">
                  {component}
                </div>
              </div>

              {/* Popover */}
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Popover</p>
                {openPopover === key ? (
                  <Popover title={label} onClose={() => setOpenPopover(null)}>
                    {component}
                  </Popover>
                ) : (
                  <button
                    onClick={() => setOpenPopover(key)}
                    className="px-4 py-2 text-sm font-semibold text-white rounded transition-colors"
                    style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
                  >
                    Open {label} popover
                  </button>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Usage */}
        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "All facet menus use the same popover shell — teal accent bar, title + close button.",
              "Inline menus appear directly below the filter chip. Popovers are modal overlays.",
              "Availability is the most complex facet — always render the full day/time/calendar set together.",
              "Language and Locations use checkboxes (multi-select). All other facets use radio buttons (single select).",
              "'Near' should always offer 'Use my location' as a shortcut — proximity is a primary filter.",
              "Applying a facet filter updates the result count in the Results Header in real time.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
