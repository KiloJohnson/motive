"use client";

import { useState } from "react";

// --- Stepper ---

type StepStatus = "incomplete" | "active" | "complete";

function StepDot({ status }: { status: StepStatus }) {
  if (status === "complete") {
    return (
      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#589600" }}>
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (status === "active") {
    return <div className="w-5 h-5 rounded-full shrink-0" style={{ backgroundColor: "#589600" }} />;
  }
  return <div className="w-[14px] h-[14px] rounded-full shrink-0 bg-gray-300 mx-[3px]" />;
}

function Stepper({ steps, activeIndex }: { steps: string[]; activeIndex: number }) {
  return (
    <div className="flex items-end w-full">
      {steps.map((label, i) => {
        const status: StepStatus = i < activeIndex ? "complete" : i === activeIndex ? "active" : "incomplete";
        return (
          <div key={label} className="flex items-end flex-1 min-w-0">
            <div className="flex flex-col items-center gap-1.5 shrink-0">
              <p
                className="text-[10px] font-bold uppercase tracking-wider whitespace-nowrap"
                style={{ color: status !== "incomplete" ? "#589600" : "#a7a8a9", fontFamily: "var(--font-red-hat-text)" }}
              >
                {label}
              </p>
              <StepDot status={status} />
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 h-0.5 mb-[9px] mx-0.5" style={{ backgroundColor: i < activeIndex ? "#589600" : "#D1D5DB" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function MobileStepper({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex items-center gap-1.5 w-full">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="flex-1 h-2 rounded-full"
          style={{ backgroundColor: i <= current ? "#589600" : "#D1D5DB" }}
        />
      ))}
    </div>
  );
}

const steps5 = ["START", "APPOINTMENT", "SIGN IN", "PATIENT", "REVIEW"];

// --- Appointment Info Bar ---

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke="#005FCF" strokeWidth="1.5" />
      <path d="M3 9h18" stroke="#005FCF" strokeWidth="1.5" />
      <path d="M8 2v3M16 2v3" stroke="#005FCF" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="7" y="13" width="3" height="3" rx="0.5" fill="#005FCF" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#005FCF" strokeWidth="1.5" />
      <path d="M3 8h18" stroke="#005FCF" strokeWidth="1.5" />
      <rect x="7" y="12" width="3" height="3" rx="0.5" fill="#005FCF" />
      <rect x="13" y="12" width="3" height="3" rx="0.5" fill="#005FCF" />
      <rect x="7" y="17" width="3" height="2" rx="0.5" fill="#005FCF" />
      <rect x="13" y="17" width="3" height="2" rx="0.5" fill="#005FCF" />
    </svg>
  );
}

function ApptInfoBar({ mobile = false, expanded = false }: { mobile?: boolean; expanded?: boolean }) {
  if (!mobile) {
    return (
      <div className="flex items-center py-3 px-6 bg-white">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/providers/provider-1.png`} alt="Kosha Nathwani" className="w-11 h-11 rounded-full object-cover shrink-0" />
          <div>
            <p className="text-sm font-bold leading-tight" style={{ color: "#3c3c3c", fontFamily: "var(--font-red-hat-text)" }}>Kosha Nathwani, MD</p>
            <p className="text-sm text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>Family Medicine</p>
          </div>
        </div>
        <div className="w-px h-8 bg-gray-200 mx-6 shrink-0" />
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0">
            <CalendarIcon />
          </div>
          <div>
            <p className="text-sm font-bold leading-tight" style={{ color: "#3c3c3c", fontFamily: "var(--font-red-hat-text)" }}>Wednesday, Oct 14, 1:30 PM</p>
            <p className="text-sm text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>In-person visit</p>
          </div>
        </div>
        <div className="w-px h-8 bg-gray-200 mx-6 shrink-0" />
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0">
            <BuildingIcon />
          </div>
          <div>
            <p className="text-sm font-bold leading-tight" style={{ color: "#3c3c3c", fontFamily: "var(--font-red-hat-text)" }}>Scripps Clinic</p>
            <p className="text-sm text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>Encinitas, CA</p>
          </div>
        </div>
      </div>
    );
  }

  if (!expanded) {
    return (
      <div className="flex items-center gap-3 py-3 px-4 bg-white">
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/providers/provider-1.png`} alt="" className="w-9 h-9 rounded-full object-cover shrink-0" />
        <p className="text-sm font-bold text-gray-700 flex-1 truncate" style={{ fontFamily: "var(--font-red-hat-text)" }}>Kosha Nathwani, MD</p>
        <span className="text-gray-400 text-sm">—</span>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/providers/provider-1.png`} alt="" className="w-9 h-9 rounded-full object-cover shrink-0 opacity-40" />
        <span className="text-gray-400 font-light text-xl leading-none">+</span>
      </div>
    );
  }

  return (
    <div className="py-3 px-4 bg-white space-y-3">
      <div className="flex items-center gap-3">
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/providers/provider-1.png`} alt="" className="w-9 h-9 rounded-full object-cover shrink-0" />
        <div>
          <p className="text-sm font-bold leading-tight" style={{ color: "#3c3c3c", fontFamily: "var(--font-red-hat-text)" }}>Kosha Nathwani, MD</p>
          <p className="text-xs text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>Family Medicine</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 flex items-center justify-center shrink-0"><CalendarIcon /></div>
        <div>
          <p className="text-sm font-bold leading-tight" style={{ color: "#3c3c3c", fontFamily: "var(--font-red-hat-text)" }}>Wednesday, Oct 14, 1:30 PM</p>
          <p className="text-xs text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>In-person visit</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 flex items-center justify-center shrink-0"><BuildingIcon /></div>
        <p className="text-sm font-bold leading-tight" style={{ color: "#3c3c3c", fontFamily: "var(--font-red-hat-text)" }}>Scripps Clinic Encinitas – 326 Santa Fe</p>
      </div>
    </div>
  );
}

// --- Booking Navigation ---

function BookingNav({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="flex flex-col items-center gap-3">
        <button
          className="w-full py-4 text-sm font-semibold text-white rounded-full"
          style={{ backgroundColor: "#9d9e9f", fontFamily: "var(--font-red-hat-text)" }}
        >
          Continue
        </button>
        <button className="text-sm font-semibold flex items-center gap-1" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
          ‹ Back
        </button>
      </div>
    );
  }
  return (
    <div className="flex gap-6">
      <button
        className="flex-1 py-4 text-base font-semibold rounded-full border-2"
        style={{ borderColor: "#005FCF", color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
      >
        Back
      </button>
      <button
        className="flex-1 py-4 text-base font-semibold text-white rounded-full"
        style={{ backgroundColor: "#9d9e9f", fontFamily: "var(--font-red-hat-text)" }}
      >
        Continue
      </button>
    </div>
  );
}

// --- Appointment Switch ---

function ApptSwitchTab({
  selected,
  label,
  photo,
  flag,
  flagLabel,
}: {
  selected: boolean;
  label: string;
  photo?: string;
  flag?: "prepend" | "append";
  flagLabel?: string;
}) {
  return (
    <div className="relative">
      {flag === "prepend" && (
        <div
          className="absolute -top-3 left-4 z-10 px-2 py-0.5 rounded text-xs font-semibold"
          style={{ backgroundColor: "#E9C46A", color: "#1a1a1a", fontFamily: "var(--font-red-hat-text)" }}
        >
          {flagLabel}
        </div>
      )}
      <div
        className="flex items-center gap-4 px-5 py-4 rounded-xl border-2 transition-colors"
        style={{
          borderColor: "#005FCF",
          backgroundColor: selected ? "#005FCF" : "white",
        }}
      >
        <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 bg-gray-200 flex items-center justify-center">
          {photo ? (
            <img src={photo} alt="" className="w-full h-full object-cover" />
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke={selected ? "white" : "#005FCF"} strokeWidth="1.5" />
              <path d="M3 8h18" stroke={selected ? "white" : "#005FCF"} strokeWidth="1.5" />
              <rect x="7" y="12" width="3" height="3" rx="0.5" fill={selected ? "white" : "#005FCF"} />
              <rect x="13" y="12" width="3" height="3" rx="0.5" fill={selected ? "white" : "#005FCF"} />
            </svg>
          )}
        </div>
        <p
          className="text-sm font-bold flex-1 leading-snug"
          style={{ color: selected ? "white" : "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
        >
          {label}
        </p>
      </div>
      {flag === "append" && (
        <div
          className="absolute -bottom-3 right-4 z-10 px-2 py-0.5 rounded text-xs font-semibold"
          style={{ backgroundColor: "#E9C46A", color: "#1a1a1a", fontFamily: "var(--font-red-hat-text)" }}
        >
          {flagLabel}
        </div>
      )}
    </div>
  );
}

// --- Page ---

export default function BookingPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Booking</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Components that guide a patient through the appointment booking flow — stepper progress, appointment summary, step navigation, and provider switching.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-5xl">

        {/* STEPPER */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Stepper</h2>
          <p className="text-sm text-gray-500 mb-6">
            Horizontal progress indicator showing the patient's position in the booking flow. Completed steps show a checkmark, the active step is a filled circle, future steps are gray.
          </p>
          <div className="space-y-4">
            {steps5.map((_, i) => (
              <div key={i} className="border border-gray-100 rounded p-6 bg-gray-50">
                <p className="text-xs text-gray-400 mb-5 font-mono">Step {i + 1} of {steps5.length} active</p>
                <Stepper steps={steps5} activeIndex={i} />
              </div>
            ))}
          </div>

          <h3 className="text-base font-semibold text-gray-700 mt-10 mb-3">Mobile</h3>
          <p className="text-sm text-gray-500 mb-4">Step labels are hidden on mobile. A segmented bar fills from left to right as the patient advances.</p>
          <div className="border border-gray-100 rounded p-6 bg-gray-50 max-w-xs space-y-4">
            {steps5.map((_, i) => (
              <div key={i}>
                <p className="text-xs text-gray-400 mb-2 font-mono">Step {i + 1} of {steps5.length}</p>
                <MobileStepper total={steps5.length} current={i} />
              </div>
            ))}
          </div>
        </section>

        {/* APPOINTMENT INFO BAR */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Appointment Info Bar</h2>
          <p className="text-sm text-gray-500 mb-6">
            Persistent summary at the top of every booking step. Reminds the patient what they're booking so they don't lose context as they move through the form.
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Desktop</p>
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <ApptInfoBar />
              </div>
            </div>
            <div className="max-w-sm">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Mobile — Collapsed</p>
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <ApptInfoBar mobile />
              </div>
            </div>
            <div className="max-w-sm">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Mobile — Expanded</p>
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <ApptInfoBar mobile expanded />
              </div>
            </div>
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "Collapsed on mobile by default — tapping it reveals the expanded detail view.",
              "Shows the provider being switched away from when a second provider is in context (collapsed: photo → photo with +).",
              "The bar is sticky at the top of the booking step form on desktop.",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* BOOKING NAVIGATION */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Booking Navigation</h2>
          <p className="text-sm text-gray-500 mb-6">
            Back/Continue button pair fixed at the bottom of every booking step. Continue is disabled until the step's required inputs are valid.
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Desktop</p>
              <div className="border border-gray-100 rounded p-8 bg-gray-50 max-w-lg">
                <BookingNav />
              </div>
            </div>
            <div className="max-w-xs">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Mobile</p>
              <div className="border border-gray-100 rounded p-6 bg-gray-50">
                <BookingNav mobile />
              </div>
            </div>
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "Continue is always shown in a disabled (gray) state until all required fields on the current step are complete.",
              "Back is never disabled — patients can always go backward.",
              "On mobile, Back becomes a text link to save vertical space for content.",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* APPOINTMENT SWITCH */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Appointment Switch</h2>
          <p className="text-sm text-gray-500 mb-6">
            Shown when the patient's preferred provider has limited availability. Lets them choose between their original provider or an alternative (typically "any available provider at this location"). The selected option is highlighted in Scripps blue.
          </p>
          <div className="space-y-12">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-5" style={{ fontFamily: "var(--font-red-hat-text)" }}>Original Selected</p>
              <div className="border border-gray-100 rounded p-8 bg-gray-50 flex flex-col gap-3 max-w-lg">
                <ApptSwitchTab selected label="Damian C. Kosempa, MD" photo="/images/providers/provider-2.png" />
                <ApptSwitchTab selected={false} label="Any available provider at this location" />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-5" style={{ fontFamily: "var(--font-red-hat-text)" }}>Option Selected</p>
              <div className="border border-gray-100 rounded p-8 bg-gray-50 flex flex-col gap-3 max-w-lg">
                <ApptSwitchTab selected={false} label="Damian C. Kosempa, MD" photo="/images/providers/provider-2.png" />
                <ApptSwitchTab selected label="Any available provider at this location" />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-5" style={{ fontFamily: "var(--font-red-hat-text)" }}>With Flags</p>
              <p className="text-sm text-gray-500 mb-6">Flags surface additional context — a cost note, an urgency indicator, or a faster-availability callout. Can appear before or after the tab, never both.</p>
              <div className="border border-gray-100 rounded p-8 bg-gray-50 flex flex-col gap-8 max-w-lg">
                <ApptSwitchTab selected label="Damian C. Kosempa, MD" photo="/images/providers/provider-2.png" flag="prepend" flagLabel="Pay Prepend" />
                <ApptSwitchTab selected={false} label="Any available provider at this location" flag="append" flagLabel="Flag Append" />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Mobile</p>
              <div className="border border-gray-100 rounded p-6 bg-gray-50 flex flex-col gap-3 max-w-xs">
                <ApptSwitchTab selected label="Damian C. Kosempa, MD" photo="/images/providers/provider-2.png" />
                <ApptSwitchTab selected={false} label="Any available provider at this location" />
              </div>
            </div>
          </div>
          <ul className="mt-6 space-y-1">
            {[
              "Only shown when there is a genuine scheduling conflict — not on every booking.",
              "The original provider option always appears first.",
              "A flag may appear on either option but never on both simultaneously.",
              "Selecting a tab immediately highlights it in blue; the other deselects.",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {t}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}
