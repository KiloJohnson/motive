"use client";

import { useState } from "react";

// --- Shared ---
function Label({ text }: { text: string }) {
  return <p className="text-sm font-semibold text-gray-700 mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>{text}</p>;
}

function FieldNote({ text, error }: { text: string; error?: boolean }) {
  return <p className={`text-xs mt-1 ${error ? "text-red-600" : "text-gray-400"}`} style={{ fontFamily: "var(--font-red-hat-text)" }}>{text}</p>;
}

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">{title}</h2>
      <p className="text-sm text-gray-500 max-w-2xl">{description}</p>
    </div>
  );
}

function StateGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-6 p-8 border border-gray-100 rounded bg-gray-50">{children}</div>;
}

function StateItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">{label}</p>
      {children}
    </div>
  );
}

// --- Search Box ---
function SearchBox({ state = "empty" }: { state?: "empty" | "filled" | "focus" | "error" | "disabled" }) {
  const [val, setVal] = useState(state === "filled" || state === "error" ? "Value" : "");
  const isFocus = state === "focus";
  const isError = state === "error";
  const isDisabled = state === "disabled";

  return (
    <div>
      <Label text="Label" />
      <div className={`flex items-center gap-2 px-3 h-11 rounded border transition-colors
        ${isError ? "border-red-500 bg-red-50" : isFocus ? "border-[#005FCF] bg-white" : isDisabled ? "border-gray-200 bg-gray-100" : "border-gray-300 bg-white"}
      `}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-gray-400">
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <input
          className="flex-1 text-sm outline-none bg-transparent text-gray-900 placeholder:text-gray-400 disabled:text-gray-400"
          placeholder="Search"
          value={val}
          onChange={e => setVal(e.target.value)}
          disabled={isDisabled}
          style={{ fontFamily: "var(--font-red-hat-text)" }}
        />
        {val && !isDisabled && (
          <button onClick={() => setVal("")} className="text-gray-400 hover:text-gray-600">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        )}
      </div>
      {isError && <FieldNote text="Error message" error />}
    </div>
  );
}

// --- Text Field ---
function TextField({ state = "empty" }: { state?: "empty" | "filled" | "focus" | "error" | "disabled" }) {
  const [val, setVal] = useState(state === "filled" || state === "error" ? "Value" : "");
  const isFocus = state === "focus";
  const isError = state === "error";
  const isDisabled = state === "disabled";

  return (
    <div>
      <Label text="Label" />
      <div className={`flex items-center gap-2 px-3 h-11 rounded border transition-colors
        ${isError ? "border-red-500 bg-red-50" : isFocus ? "border-[#005FCF] bg-white" : isDisabled ? "border-gray-200 bg-gray-100" : "border-gray-300 bg-white"}
      `}>
        <input
          className="flex-1 text-sm outline-none bg-transparent text-gray-900 placeholder:text-gray-400 disabled:text-gray-400"
          placeholder="Placeholder"
          value={val}
          onChange={e => setVal(e.target.value)}
          disabled={isDisabled}
          style={{ fontFamily: "var(--font-red-hat-text)" }}
        />
        {val && !isDisabled && (
          <button onClick={() => setVal("")} className="text-gray-400 hover:text-gray-600 shrink-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        )}
      </div>
      {isError && <FieldNote text="Error message" error />}
    </div>
  );
}

// --- Select ---
function SelectField({ state = "empty" }: { state?: "empty" | "filled" | "focus" | "error" | "disabled" }) {
  const [val, setVal] = useState(state === "filled" || state === "error" ? "Value" : "");
  const isFocus = state === "focus";
  const isError = state === "error";
  const isDisabled = state === "disabled";

  return (
    <div>
      <Label text="Label" />
      <div className={`flex items-center gap-2 px-3 h-11 rounded border transition-colors cursor-pointer
        ${isError ? "border-red-500 bg-red-50" : isFocus ? "border-[#005FCF] bg-white" : isDisabled ? "border-gray-200 bg-gray-100" : "border-gray-300 bg-white"}
      `}>
        <select
          className="flex-1 text-sm outline-none bg-transparent text-gray-900 disabled:text-gray-400 cursor-pointer appearance-none"
          value={val}
          onChange={e => setVal(e.target.value)}
          disabled={isDisabled}
          style={{ fontFamily: "var(--font-red-hat-text)" }}
        >
          <option value="">Placeholder</option>
          <option value="Value">Value</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="shrink-0 text-gray-400">
          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {isError && <FieldNote text="Error message" error />}
    </div>
  );
}

// --- Textarea ---
function TextArea({ state = "empty" }: { state?: "empty" | "filled" | "focus" | "error" | "disabled" }) {
  const maxLen = 5000;
  const [val, setVal] = useState(state === "filled" || state === "error" ? "Value entered by the user goes here." : "");
  const isFocus = state === "focus";
  const isError = state === "error";
  const isDisabled = state === "disabled";

  return (
    <div>
      <Label text="Label" />
      <textarea
        rows={4}
        maxLength={maxLen}
        placeholder="Placeholder"
        value={val}
        onChange={e => setVal(e.target.value)}
        disabled={isDisabled}
        className={`w-full px-3 py-2.5 text-sm rounded border outline-none resize-none transition-colors
          ${isError ? "border-red-500 bg-red-50" : isFocus ? "border-[#005FCF] bg-white" : isDisabled ? "border-gray-200 bg-gray-100 text-gray-400" : "border-gray-300 bg-white"}
          placeholder:text-gray-400
        `}
        style={{ fontFamily: "var(--font-red-hat-text)" }}
      />
      <p className="text-xs text-gray-400 text-right" style={{ fontFamily: "var(--font-red-hat-text)" }}>
        {maxLen - val.length} characters remaining
      </p>
      {isError && <FieldNote text="Error message" error />}
    </div>
  );
}

// --- Radio ---
function RadioGroup() {
  const [selected, setSelected] = useState("a");
  return (
    <div className="space-y-3">
      {[{ id: "a", label: "Label", note: "Footnote" }, { id: "b", label: "Label", note: "Footnote" }].map(opt => (
        <label key={opt.id} className="flex items-start gap-3 cursor-pointer">
          <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors
            ${selected === opt.id ? "border-[#005FCF]" : "border-gray-300"}`}>
            {selected === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-[#005FCF]" />}
          </div>
          <input type="radio" className="sr-only" checked={selected === opt.id} onChange={() => setSelected(opt.id)} />
          <div>
            <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "var(--font-red-hat-text)" }}>{opt.label}</p>
            <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>{opt.note}</p>
          </div>
        </label>
      ))}
    </div>
  );
}

// --- Checkbox ---
function CheckboxGroup() {
  const [checked, setChecked] = useState<Set<string>>(new Set(["a"]));
  const toggle = (id: string) => setChecked(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  return (
    <div className="space-y-3">
      {[{ id: "a", label: "Label", note: "Footnote" }, { id: "b", label: "Label", note: "Footnote" }].map(opt => (
        <label key={opt.id} className="flex items-start gap-3 cursor-pointer">
          <div
            onClick={() => toggle(opt.id)}
            className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors cursor-pointer
              ${checked.has(opt.id) ? "border-[#005FCF] bg-[#005FCF]" : "border-gray-300 bg-white"}`}
          >
            {checked.has(opt.id) && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "var(--font-red-hat-text)" }}>{opt.label}</p>
            <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>{opt.note}</p>
          </div>
        </label>
      ))}
    </div>
  );
}

// --- Toggle ---
function Toggle({ label, footnote }: { label?: string; footnote?: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="flex items-start gap-3 cursor-pointer" onClick={() => setOn(o => !o)}>
      <div
        role="switch"
        aria-checked={on}
        className={`mt-0.5 relative w-10 h-6 rounded-full transition-colors shrink-0 ${on ? "bg-[#005FCF]" : "bg-gray-300"}`}
      >
        <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${on ? "translate-x-[18px]" : "translate-x-0.5"}`} />
      </div>
      {label && (
        <div>
          <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "var(--font-red-hat-text)" }}>{label}</p>
          {footnote && <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>{footnote}</p>}
        </div>
      )}
    </div>
  );
}

// --- Page ---
export default function FormsPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Form Elements</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The building blocks of every Scripps form. Each element covers all interactive states —
          use these components when building search, filters, appointment booking, and data entry flows.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16">

        {/* Text Field */}
        <section>
          <SectionHeader title="Text Field" description="Single-line text input. The standard field for names, emails, phone numbers, and most form data." />
          <StateGrid>
            <StateItem label="Empty"><TextField state="empty" /></StateItem>
            <StateItem label="Filled"><TextField state="filled" /></StateItem>
            <StateItem label="Focus"><TextField state="focus" /></StateItem>
            <StateItem label="Error"><TextField state="error" /></StateItem>
            <StateItem label="Disabled"><TextField state="disabled" /></StateItem>
          </StateGrid>
        </section>

        {/* Search Box */}
        <section>
          <SectionHeader title="Search Box" description="Text input with a search icon and clear button. Used for search interfaces, not general data entry." />
          <StateGrid>
            <StateItem label="Empty"><SearchBox state="empty" /></StateItem>
            <StateItem label="Filled"><SearchBox state="filled" /></StateItem>
            <StateItem label="Focus"><SearchBox state="focus" /></StateItem>
            <StateItem label="Error"><SearchBox state="error" /></StateItem>
            <StateItem label="Disabled"><SearchBox state="disabled" /></StateItem>
          </StateGrid>
        </section>

        {/* Select */}
        <section>
          <SectionHeader title="Select" description="Dropdown selector for choosing from a predefined list. Use when options are known and finite." />
          <StateGrid>
            <StateItem label="Empty"><SelectField state="empty" /></StateItem>
            <StateItem label="Filled"><SelectField state="filled" /></StateItem>
            <StateItem label="Focus"><SelectField state="focus" /></StateItem>
            <StateItem label="Error"><SelectField state="error" /></StateItem>
            <StateItem label="Disabled"><SelectField state="disabled" /></StateItem>
          </StateGrid>
        </section>

        {/* Textarea */}
        <section>
          <SectionHeader title="Text Area" description="Multi-line text input with a character counter. Use for longer free-form input like notes, messages, or descriptions." />
          <StateGrid>
            <StateItem label="Empty"><TextArea state="empty" /></StateItem>
            <StateItem label="Filled"><TextArea state="filled" /></StateItem>
            <StateItem label="Focus"><TextArea state="focus" /></StateItem>
            <StateItem label="Error"><TextArea state="error" /></StateItem>
            <StateItem label="Disabled"><TextArea state="disabled" /></StateItem>
          </StateGrid>
        </section>

        {/* Radio + Checkbox + Toggle */}
        <section>
          <SectionHeader title="Selection Controls" description="Radio buttons, checkboxes, and toggles for binary and multi-choice inputs." />
          <div className="grid grid-cols-3 gap-6 p-8 border border-gray-100 rounded bg-gray-50">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4">Radio Button</p>
              <RadioGroup />
              <p className="text-xs text-gray-400 mt-4">Single selection — use when options are mutually exclusive.</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4">Checkbox</p>
              <CheckboxGroup />
              <p className="text-xs text-gray-400 mt-4">Multiple selection — use when any combination is valid.</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4">Toggle</p>
              <div className="space-y-4">
                <Toggle label="Only show providers with online appointment booking" />
                <Toggle label="Only show providers with online appointment booking" />
              </div>
              <p className="text-xs text-gray-400 mt-4">Immediate on/off — use for settings and filters, not form submissions.</p>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section>
          <SectionHeader title="Usage Guidelines" description="" />
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Do</p>
              <ul className="space-y-2">
                {[
                  "Always include a visible label — never rely on placeholder text alone.",
                  "Show error messages inline, directly below the field.",
                  "Use the clear (×) button on text fields when the field has a value.",
                  "Use Select for 4+ predefined options; radio buttons for 2–3.",
                  "Use Toggle for settings that take effect immediately without a submit action.",
                  "Show character count on Textarea when there's a meaningful limit.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-500">
                    <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Don't</p>
              <ul className="space-y-2">
                {[
                  "Don't use placeholder text as a label substitute — it disappears on input.",
                  "Don't show errors before the user has interacted with the field.",
                  "Don't use Textarea for inputs that have a defined format (dates, phone numbers).",
                  "Don't mix radio and checkbox in the same group.",
                  "Don't use Toggle for destructive or irreversible actions — use a button instead.",
                  "Don't disable fields without explaining why nearby.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-500">
                    <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
