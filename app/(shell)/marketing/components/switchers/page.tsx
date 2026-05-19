"use client";

import { useState } from "react";

function SegmentedControl({
  options,
  defaultIndex = 0,
  size = "md",
}: {
  options: string[];
  defaultIndex?: number;
  size?: "sm" | "md" | "lg";
}) {
  const [active, setActive] = useState(defaultIndex);
  const sizeClasses = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
  };
  return (
    <div className="inline-flex bg-gray-100 rounded-lg p-1 gap-1">
      {options.map((opt, i) => (
        <button
          key={opt}
          onClick={() => setActive(i)}
          className={`rounded-md font-semibold transition-all ${sizeClasses[size]} ${
            active === i
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
          style={{ fontFamily: "var(--font-red-hat-text)" }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function PillSwitcher({ options, defaultIndex = 0 }: { options: string[]; defaultIndex?: number }) {
  const [active, setActive] = useState(defaultIndex);
  return (
    <div className="inline-flex gap-2">
      {options.map((opt, i) => (
        <button
          key={opt}
          onClick={() => setActive(i)}
          className="px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all"
          style={{
            backgroundColor: active === i ? "#005FCF" : "white",
            borderColor: "#005FCF",
            color: active === i ? "white" : "#005FCF",
            fontFamily: "var(--font-red-hat-text)",
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function IconSwitcher({ options }: { options: { label: string; icon: string }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="inline-flex bg-gray-100 rounded-lg p-1 gap-1">
      {options.map((opt, i) => (
        <button
          key={opt.label}
          onClick={() => setActive(i)}
          title={opt.label}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-semibold transition-all ${
            active === i ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
          }`}
          style={{ fontFamily: "var(--font-red-hat-text)" }}
        >
          <span>{opt.icon}</span>
          <span>{opt.label}</span>
        </button>
      ))}
    </div>
  );
}

export default function SwitchersPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Switchers</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Inline controls for switching between two or more mutually exclusive views or modes. Lighter than tabs — no associated content panels, no URL change.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Segmented control */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Segmented Control</h2>
          <p className="text-sm text-gray-500 mb-6">The primary switcher pattern. A pill-shaped container with options that slide a white highlight to the selected item. Three sizes — all interactive below.</p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50 space-y-6">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Small</p>
              <SegmentedControl options={["List", "Map"]} size="sm" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Medium (default)</p>
              <SegmentedControl options={["All results", "Available today", "Video visits"]} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>Large</p>
              <SegmentedControl options={["Overview", "Schedule", "Reviews"]} size="lg" />
            </div>
          </div>
        </section>

        {/* Pill switcher */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Pill Switcher</h2>
          <p className="text-sm text-gray-500 mb-6">Used when switching carries more visual weight — the selected option fills with brand blue. Common for view toggles on search results (List vs Map) and appointment type selection.</p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50 space-y-6">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>2 options</p>
              <PillSwitcher options={["List view", "Map view"]} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>3 options</p>
              <PillSwitcher options={["In-person", "Video", "Either"]} />
            </div>
          </div>
        </section>

        {/* Icon switcher */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">With Icons</h2>
          <p className="text-sm text-gray-500 mb-6">Icon + label combination for spatial view toggles where the icon reinforces the concept. Always include the label — never icon-only.</p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50">
            <IconSwitcher options={[{ label: "List", icon: "☰" }, { label: "Map", icon: "📍" }, { label: "Grid", icon: "⊞" }]} />
          </div>
        </section>

        {/* In context */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">In context — Search results toolbar</h2>
          <div className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <p className="text-sm font-bold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>247 results near Encinitas, CA</p>
              <SegmentedControl options={["List", "Map"]} size="sm" />
            </div>
            <div className="px-6 py-3 flex items-center gap-3">
              <PillSwitcher options={["All", "Available today", "Video"]} defaultIndex={0} />
            </div>
          </div>
        </section>

        {/* Usage */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Usage</h2>
          <ul className="space-y-2">
            {[
              "Max 4 options. More than that — use a select dropdown or tabs instead.",
              "All options should be roughly equal in label length. Avoid mixing very short and very long labels.",
              "Switchers change the current view — they don't navigate to a new page or trigger a form submit.",
              "Always have one option selected by default. Never start with nothing selected.",
              "Don't use a switcher for yes/no decisions — use a toggle instead.",
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
