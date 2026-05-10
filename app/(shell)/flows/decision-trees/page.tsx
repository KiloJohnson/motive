"use client";

import { useState } from "react";

// --- Shared primitives ---

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" fill="white" fillOpacity="0.3" />
      <path d="M5 10l4 4 6-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RadioIcon({ selected }: { selected: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.5" stroke={selected ? "white" : "#005FCF"} strokeWidth="1.5" />
      {selected && <circle cx="10" cy="10" r="5" fill="white" />}
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 6l4 4 4-4" stroke="#9d9e9f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// --- Option atom ---

type OptionState = "unselected" | "selected";

function Option({
  label,
  state = "unselected",
  onClick,
  fullWidth = false,
}: {
  label: string;
  state?: OptionState;
  onClick?: () => void;
  fullWidth?: boolean;
}) {
  const selected = state === "selected";
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2.5 rounded border-2 transition-colors text-left ${fullWidth ? "w-full" : "flex-1 min-w-0"}`}
      style={{
        borderColor: "#005FCF",
        backgroundColor: selected ? "#005FCF" : "white",
      }}
    >
      <span className="shrink-0 w-5 h-5 flex items-center justify-center">
        {selected ? <CheckIcon /> : <RadioIcon selected={false} />}
      </span>
      <span
        className="text-base font-bold leading-snug"
        style={{ color: selected ? "white" : "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
      >
        {label}
      </span>
    </button>
  );
}

// --- Step navigation ---

function StepNav({
  nextLabel = "Continue",
  nextActive = false,
  mobile = false,
}: {
  nextLabel?: string;
  nextActive?: boolean;
  mobile?: boolean;
}) {
  if (mobile) {
    return (
      <div className="flex flex-col items-center gap-3 pt-4">
        <button
          className="w-full py-3.5 text-base font-semibold text-white rounded-full"
          style={{ backgroundColor: nextActive ? "#005FCF" : "#9d9e9f", fontFamily: "var(--font-red-hat-text)" }}
        >
          {nextLabel}
        </button>
        <button
          className="flex items-center gap-1 text-sm font-semibold"
          style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
        >
          ‹ Back
        </button>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-between pt-6">
      <button
        className="flex items-center gap-1 text-base font-semibold"
        style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}
      >
        ‹ Back
      </button>
      <button
        className="px-8 py-3 text-base font-semibold text-white rounded-full"
        style={{ backgroundColor: nextActive ? "#005FCF" : "#9d9e9f", fontFamily: "var(--font-red-hat-text)" }}
      >
        {nextLabel}
      </button>
    </div>
  );
}

// --- Step card wrapper ---

function StepCard({ children, mobile = false }: { children: React.ReactNode; mobile?: boolean }) {
  return (
    <div
      className={`bg-white rounded-2xl border p-8 ${mobile ? "w-full max-w-sm" : "w-full"}`}
      style={{
        borderColor: "#dadbdb",
        boxShadow: "0 6px 12px rgba(39,41,55,0.1)",
      }}
    >
      {children}
    </div>
  );
}

// --- Step heading ---

function StepHeading({ title, body }: { title: string; body?: string }) {
  return (
    <div className="text-center mb-8">
      <h3
        className="text-3xl font-bold leading-tight mb-3"
        style={{ color: "#3c3c3c", fontFamily: "var(--font-red-hat-display)" }}
      >
        {title}
      </h3>
      {body && (
        <p className="text-base text-gray-500 leading-relaxed max-w-lg mx-auto" style={{ fontFamily: "var(--font-red-hat-text)" }}>
          {body}
        </p>
      )}
    </div>
  );
}

// --- Interactive Binary Demo ---

function BinaryDemo({ mobile = false }: { mobile?: boolean }) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <StepCard mobile={mobile}>
      <StepHeading
        title="Do you have a primary care physician?"
        body="This helps us match you with the right type of appointment."
      />
      <div className={`flex gap-3 ${mobile ? "flex-col" : "flex-row"}`}>
        <Option label="Yes" state={selected === "Yes" ? "selected" : "unselected"} onClick={() => setSelected("Yes")} fullWidth={mobile} />
        <Option label="No" state={selected === "No" ? "selected" : "unselected"} onClick={() => setSelected("No")} fullWidth={mobile} />
      </div>
      <StepNav nextLabel="Continue" nextActive={selected !== null} mobile={mobile} />
    </StepCard>
  );
}

// --- Interactive Multiselect Demo ---

function MultiselectDemo({ mobile = false }: { mobile?: boolean }) {
  const [value, setValue] = useState("");
  const options = ["Headache / Migraine", "Back or joint pain", "Skin condition", "Mental health", "Preventive / check-up", "Something else"];
  return (
    <StepCard mobile={mobile}>
      <StepHeading title="What is the primary reason for your visit?" />
      <div className="relative">
        <select
          value={value}
          onChange={e => setValue(e.target.value)}
          className="w-full appearance-none bg-white border rounded px-4 py-3.5 text-base pr-10"
          style={{
            borderColor: "#a7a8a9",
            color: value ? "#3c3c3c" : "#9d9e9f",
            fontFamily: "var(--font-red-hat-text)",
          }}
        >
          <option value="" disabled>Select a reason</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
          <ChevronDown />
        </div>
      </div>
      <StepNav nextLabel="Next" nextActive={value !== ""} mobile={mobile} />
    </StepCard>
  );
}

// --- Info Step Demo ---

function InfoDemo({ mobile = false }: { mobile?: boolean }) {
  return (
    <StepCard mobile={mobile}>
      <StepHeading
        title="You're almost there"
        body="We'll now connect you with a care coordinator who can review your information and confirm the best appointment type for your needs. This typically takes less than 2 minutes."
      />
      <StepNav nextLabel="Next" nextActive mobile={mobile} />
    </StepCard>
  );
}

// --- Page ---

export default function DecisionTreesPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Decision Trees</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Guided question flows used during booking and primary care selection. Each step is a single card — one question at a time — that advances the patient toward a recommendation or outcome.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Option atom */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Option</h2>
          <p className="text-sm text-gray-500 mb-6">
            The individual answer choice used in binary steps. Has two states — unselected and selected. Clicking toggles the selection and activates the Continue button.
          </p>
          <div className="border border-gray-100 rounded p-8 bg-gray-50 flex flex-col gap-4 max-w-sm">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Unselected</p>
              <Option label="Yes" state="unselected" fullWidth />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Selected</p>
              <Option label="Yes" state="selected" fullWidth />
            </div>
          </div>
        </section>

        {/* Binary step */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Binary Step</h2>
          <p className="text-sm text-gray-500 mb-6">
            A yes/no question. Options appear side by side on desktop, stacked on mobile. Selecting either option activates Continue. Try clicking below.
          </p>
          <div className="space-y-8">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Desktop — Interactive</p>
              <BinaryDemo />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Mobile — Interactive</p>
              <BinaryDemo mobile />
            </div>
          </div>
        </section>

        {/* Multiselect step */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Multiselect Step</h2>
          <p className="text-sm text-gray-500 mb-6">
            A question answered via dropdown. Used when there are too many options for individual buttons. Next activates once a value is chosen.
          </p>
          <div className="space-y-8">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Desktop — Interactive</p>
              <MultiselectDemo />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Mobile — Interactive</p>
              <MultiselectDemo mobile />
            </div>
          </div>
        </section>

        {/* Info step */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Info Step</h2>
          <p className="text-sm text-gray-500 mb-6">
            An informational card with no input. Used to set expectations or explain what happens next. Next is always active — no selection required.
          </p>
          <div className="space-y-8">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Desktop</p>
              <InfoDemo />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Mobile</p>
              <InfoDemo mobile />
            </div>
          </div>
        </section>

        {/* Usage */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Usage</h2>
          <ul className="space-y-2">
            {[
              "One question per card — never combine multiple questions into a single step.",
              "Binary is for yes/no or two-option decisions. Use Multiselect when there are 3+ options.",
              "Info steps appear at transitions — before a form section, after a branching decision, or before submitting.",
              "Continue/Next is always disabled until the current step's input is satisfied, except on Info steps.",
              "Back is never disabled — patients can always navigate backward.",
              "The decision tree result routes the patient to either a booking flow or a care coordinator recommendation.",
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
