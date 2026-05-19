"use client";

import { useState } from "react";

function Toggle({
  label,
  footnote,
  disabled = false,
  defaultOn = false,
}: {
  label?: string;
  footnote?: string;
  disabled?: boolean;
  defaultOn?: boolean;
}) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div
      className={`flex items-start gap-3 ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
      onClick={() => !disabled && setOn(o => !o)}
    >
      <div
        role="switch"
        aria-checked={on}
        aria-disabled={disabled}
        className="mt-0.5 relative w-10 h-6 rounded-full transition-colors shrink-0"
        style={{ backgroundColor: on ? "#005FCF" : "#D1D5DB" }}
      >
        <span
          className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform"
          style={{ transform: on ? "translateX(18px)" : "translateX(2px)" }}
        />
      </div>
      {label && (
        <div>
          <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "var(--font-red-hat-text)" }}>{label}</p>
          {footnote && <p className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "var(--font-red-hat-text)" }}>{footnote}</p>}
        </div>
      )}
    </div>
  );
}

export default function TogglePage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Toggle</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          A binary on/off control for settings and filters that take effect immediately — no submit action required.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-3xl">

        {/* States */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">States</h2>
          <p className="text-sm text-gray-500 mb-6">Toggle between on and off by clicking. All examples below are interactive.</p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50 space-y-6">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Off (default)</p>
              <Toggle label="Only show providers with online booking" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>On</p>
              <Toggle label="Only show providers with online booking" defaultOn />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>With footnote</p>
              <Toggle label="Email appointment reminders" footnote="We'll send a reminder 24 hours before your visit." />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Disabled</p>
              <Toggle label="Video visits (not available for this provider)" disabled />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>No label (standalone)</p>
              <Toggle />
            </div>
          </div>
        </section>

        {/* In context */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">In context — Filter panel</h2>
          <p className="text-sm text-gray-500 mb-6">Toggles commonly appear in filter panels and settings lists. Changes apply immediately — no save button needed.</p>
          <div className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden max-w-sm">
            <div className="px-5 py-4 border-b border-gray-100">
              <p className="text-sm font-bold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>Availability filters</p>
            </div>
            <div className="px-5 py-4 space-y-4">
              <Toggle label="Online booking available" defaultOn />
              <Toggle label="Accepting new patients" defaultOn />
              <Toggle label="Video visits available" />
              <Toggle label="Available this week" />
            </div>
          </div>
        </section>

        {/* Usage */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Usage</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-100 rounded-xl p-5 bg-white">
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#589600", fontFamily: "var(--font-red-hat-text)" }}>Use toggle when</p>
              <ul className="space-y-2">
                {[
                  "The setting takes effect immediately",
                  "It's a binary on/off choice",
                  "It controls a filter or preference",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-500">
                    <span className="text-green-500 font-bold shrink-0">✓</span>
                    <span style={{ fontFamily: "var(--font-red-hat-text)" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-100 rounded-xl p-5 bg-white">
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#991b1b", fontFamily: "var(--font-red-hat-text)" }}>Don't use toggle when</p>
              <ul className="space-y-2">
                {[
                  "The action is destructive or irreversible",
                  "The user needs to confirm before it applies",
                  "There are more than two options",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-500">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span style={{ fontFamily: "var(--font-red-hat-text)" }}>{t}</span>
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
