"use client";

import { useState } from "react";
import Link from "next/link";

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

const popularCarriers = [
  { name: "I'm paying for myself", icon: "💳" },
  { name: "Aetna",                 color: "#7C3AED" },
  { name: "Blue Cross Blue Shield",color: "#005FCF" },
  { name: "Cigna",                 color: "#059669" },
  { name: "Humana",                color: "#22c55e" },
  { name: "United",                color: "#2563EB" },
];

const allCarriersA = ["SCRIPPS UMR", "AARP", "Aetna"];
const allCarriersB = ["Beech Street", "Beech Street"];

const popularPlans = ["BCBS Commercial PPO", "Blue Cross HMO California", "Blue Advantage HMO", "Blue Precision HMO"];
const allPlansB = ["BCBS Blue Choice Options (Tier 1)", "BCBS Commercial PPO", "Blue Advantage HMO", "Blue Community FHP", "Blue Community MMAI"];

function CarrierIcon({ name, color }: { name: string; color?: string }) {
  return (
    <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-white text-[8px] font-bold" style={{ backgroundColor: color || "#6B7280" }}>
      {name[0]}
    </div>
  );
}

// Popover shell
function Popover({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="w-72 rounded-lg border border-gray-200 shadow-lg bg-white overflow-hidden">
      {/* Green accent bar */}
      <div className="h-1 w-full" style={{ backgroundColor: "#2A9D8F" }} />
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>{title}</p>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
          <CloseIcon />
        </button>
      </div>
      <div className="p-4" style={{ height: 440, overflowY: "auto" }}>
        {children}
      </div>
    </div>
  );
}

// Step 1 content
function Step1({ onSelect }: { onSelect: (c: string) => void }) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-semibold text-gray-700 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Step 1: Select a carrier</p>
      <div className="flex items-center gap-2 px-2.5 py-2 border border-gray-300 rounded mb-3">
        <SearchIcon />
        <input className="flex-1 text-sm outline-none placeholder:text-gray-400" placeholder="Search" style={{ fontFamily: "var(--font-red-hat-text)" }} readOnly />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-1 mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>Popular Carriers</p>
      {popularCarriers.map(c => (
        <button key={c.name} onClick={() => onSelect(c.name)}
          className="w-full flex items-center gap-2.5 px-2 py-2 rounded text-left hover:bg-gray-50 transition-colors"
          style={{ fontFamily: "var(--font-red-hat-text)" }}>
          {c.icon
            ? <span className="w-5 h-5 shrink-0 text-sm">{c.icon}</span>
            : <CarrierIcon name={c.name} color={c.color} />}
          <span className="flex-1 text-sm text-gray-900">{c.name}</span>
          <span className="text-gray-300"><ChevronRight /></span>
        </button>
      ))}
      <p className="text-xs font-bold text-gray-400 px-1 pt-2 pb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>A</p>
      {allCarriersA.map((name, i) => (
        <button key={i} onClick={() => onSelect(name)}
          className="w-full flex items-center gap-2.5 px-2 py-2 rounded text-left hover:bg-gray-50"
          style={{ fontFamily: "var(--font-red-hat-text)" }}>
          <div className="w-5 h-5 shrink-0 rounded-full border border-gray-200" />
          <span className="flex-1 text-sm text-gray-900">{name}</span>
          <span className="text-gray-300"><ChevronRight /></span>
        </button>
      ))}
    </div>
  );
}

// Step 2 content
function Step2({ carrier, onBack }: { carrier: string; onBack: () => void }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1.5 mb-2">
        <button onClick={onBack} className="hover:opacity-70" style={{ color: "#005FCF" }}><ChevronLeft /></button>
        <p className="text-xs font-semibold text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>Step 2: Select a plan</p>
      </div>
      <div className="flex items-center gap-2 px-2.5 py-2 border border-gray-300 rounded mb-3">
        <SearchIcon />
        <input className="flex-1 text-sm outline-none placeholder:text-gray-400" placeholder="Search" style={{ fontFamily: "var(--font-red-hat-text)" }} readOnly />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-1 mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>Popular Plans</p>
      {popularPlans.map(plan => (
        <button key={plan} className="w-full flex items-center gap-2 px-2 py-2 rounded text-left hover:bg-gray-50"
          style={{ fontFamily: "var(--font-red-hat-text)" }}>
          <div className="w-4 h-4 rounded-full border border-gray-300 shrink-0" />
          <span className="text-sm text-gray-900">{plan}</span>
        </button>
      ))}
      <p className="text-xs font-bold text-gray-400 px-1 pt-2 pb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>B</p>
      {allPlansB.map((plan, i) => (
        <button key={i} className="w-full flex items-center gap-2 px-2 py-2 rounded text-left hover:bg-gray-50"
          style={{ fontFamily: "var(--font-red-hat-text)" }}>
          <div className="w-4 h-4 rounded-full border border-gray-300 shrink-0" />
          <span className="text-sm text-gray-900">{plan}</span>
        </button>
      ))}
    </div>
  );
}

// Search content
function SearchContent() {
  const carriers = ["Blue Cross Blue Shield"];
  const plans = ["Blue Cross HMO California", "Blue Advantage HMO", "Blue Precision HMO", "BCBS Blue Choice Options (Tier 1)", "BCBS Commercial PPO"];
  return (
    <div className="space-y-1">
      <p className="text-xs font-semibold text-gray-700 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Step 1: Select a carrier</p>
      <div className="flex items-center gap-2 px-2.5 py-2 border-2 border-[#005FCF] rounded mb-3">
        <SearchIcon />
        <input className="flex-1 text-sm outline-none" value="Blue" readOnly style={{ fontFamily: "var(--font-red-hat-text)" }} />
        <button className="text-gray-400"><CloseIcon /></button>
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-1 mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>Carriers</p>
      {carriers.map(name => (
        <button key={name} className="w-full flex items-center gap-2.5 px-2 py-2 rounded text-left hover:bg-gray-50"
          style={{ fontFamily: "var(--font-red-hat-text)" }}>
          <CarrierIcon name={name} color="#005FCF" />
          <span className="text-sm text-gray-900">{name}</span>
          <span className="text-gray-300 ml-auto"><ChevronRight /></span>
        </button>
      ))}
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-1 pt-2 mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>Plans</p>
      {plans.map(plan => (
        <button key={plan} className="w-full flex flex-col items-start px-2 py-2 rounded hover:bg-gray-50"
          style={{ fontFamily: "var(--font-red-hat-text)" }}>
          <span className="text-sm text-gray-900">{plan}</span>
          <span className="text-xs" style={{ color: "#005FCF" }}>Blue Cross Blue Shield</span>
        </button>
      ))}
    </div>
  );
}

function LivePopover() {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState<"root" | "child" | "search">("root");
  const [carrier, setCarrier] = useState<string | null>(null);

  if (!open) {
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>Popover closed</p>
        <button onClick={() => { setOpen(true); setStep("root"); setCarrier(null); }}
          className="px-4 py-2 text-sm font-semibold text-white rounded"
          style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
          Reopen popover
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-4 flex-wrap items-start">
      <Popover title="Insurance" onClose={() => setOpen(false)}>
        {step === "root" && <Step1 onSelect={c => { setCarrier(c); setStep("child"); }} />}
        {step === "child" && carrier && <Step2 carrier={carrier} onBack={() => setStep("root")} />}
        {step === "search" && <SearchContent />}
      </Popover>
      <div className="flex flex-col gap-2">
        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-red-hat-text)" }}>Jump to state</p>
        {[
          { label: "Root (Step 1)", state: "root" as const },
          { label: "Child (Step 2)", state: "child" as const },
          { label: "Search", state: "search" as const },
        ].map(s => (
          <button key={s.state}
            onClick={() => { setStep(s.state); if (s.state === "child") setCarrier("Blue Cross Blue Shield"); }}
            className={`px-3 py-2 text-xs font-semibold rounded border transition-colors ${step === s.state ? "border-[#005FCF] text-[#005FCF] bg-[#F3F8FB]" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}
            style={{ fontFamily: "var(--font-red-hat-text)" }}>
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function InsurancePopoverPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Insurance Popover</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The modal container for the{" "}
          <Link href="/flows/insurance-selector" className="underline" style={{ color: "#005FCF" }}>Insurance Selector</Link>.
          A single-panel popover that transitions between Root, Child, and Search states.
          The green accent bar at the top is specific to this popover.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16 max-w-4xl">

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Interactive</h2>
            <p className="text-sm text-gray-500">Select a carrier to go to Step 2. Use the state buttons to jump directly to any state. Click × to close.</p>
          </div>
          <LivePopover />
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Anatomy</h2></div>
          <div className="border border-gray-100 rounded overflow-hidden">
            {[
              { part: "Green accent bar", desc: "Teal (#2A9D8F) line at the very top. Visually distinguishes this popover from generic modals." },
              { part: "Title bar",        desc: "Label + close button. Title updates contextually ('Insurance', or can reflect the carrier name in Step 2)." },
              { part: "Step label",       desc: "'Step 1: Select a carrier' / 'Step 2: Select a plan'. Always visible at the top of the content area." },
              { part: "Back arrow",       desc: "Appears in Step 2. Returns to Step 1 without losing the carrier context." },
              { part: "Search",           desc: "Active search groups results under 'Carriers' and 'Plans' headers. Plan results show the carrier name below as a breadcrumb." },
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
          <ul className="space-y-2">
            {[
              "This popover is specific to insurance selection — don't reuse the green bar for other popovers.",
              "The popover always opens in Root (Step 1) state, even if the user previously made a selection.",
              "Closing the popover without completing both steps discards any partial selection.",
              "On mobile, the popover is full-screen — the keyboard appears when the search field is focused.",
              "Search results must separate Carriers and Plans under distinct headers to avoid confusion.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
