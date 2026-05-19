"use client";

import { useState } from "react";

// --- Segmented Tabs ---

function SegmentedTabs({ labels }: { labels: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="inline-flex rounded-full border border-[#005FCF] overflow-hidden bg-white">
      {labels.map((label, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`px-5 py-2.5 text-sm font-semibold transition-colors whitespace-nowrap ${
            active === i
              ? "bg-[#005FCF] text-white"
              : "bg-white text-[#005FCF] hover:bg-[#F3F8FB]"
          }`}
          style={{ fontFamily: "var(--font-red-hat-text)" }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

// --- Tab Segment (rectangular) ---

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.43L7 8.885l-3.09 1.615.59-3.43L2 4.635l3.455-.505L7 1z"/>
    </svg>
  );
}

type SegmentConfig = "label" | "icon" | "both";

function TabSegmentGroup({ config }: { config: SegmentConfig }) {
  const [active, setActive] = useState(0);
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  return (
    <div className="inline-flex border border-gray-200 rounded overflow-hidden">
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-semibold transition-colors border-r border-gray-200 last:border-r-0 ${
            active === i
              ? "bg-[#005FCF] text-white"
              : "bg-white text-[#005FCF] hover:bg-[#F3F8FB]"
          }`}
          style={{ fontFamily: "var(--font-red-hat-text)", minWidth: "100px" }}
        >
          {(config === "icon" || config === "both") && <StarIcon />}
          {(config === "label" || config === "both") && tab}
        </button>
      ))}
    </div>
  );
}

// --- Tab with Icon (underline) ---

function TabWithIcon({ labels }: { labels: { icon: boolean; text: string }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="inline-flex border-b border-gray-200">
      {labels.map((tab, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors relative ${
            active === i ? "text-[#005FCF]" : "text-gray-500 hover:text-[#005FCF]"
          }`}
          style={{ fontFamily: "var(--font-red-hat-text)" }}
        >
          {tab.icon && <StarIcon />}
          {tab.text}
          {active === i && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#005FCF] rounded-t" />
          )}
        </button>
      ))}
    </div>
  );
}

// --- Tablist (large underline) ---

function Tablist({ labels }: { labels: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex border-b border-gray-200 w-full">
      {labels.map((label, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`flex-1 py-4 text-base font-bold transition-colors relative ${
            active === i ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
          }`}
          style={{ fontFamily: "var(--font-red-hat-display)" }}
        >
          {label}
          {active === i && (
            <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#005FCF] rounded-t" />
          )}
        </button>
      ))}
    </div>
  );
}

// --- Page ---

export default function TabsPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>
          Components
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Tabs</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Tabs organize related content into panels. Scripps has four tab variants — choose based on
          context, content volume, and whether icons add meaningful clarity.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16">

        {/* Segmented */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Segmented Tabs</h2>
            <p className="text-sm text-gray-500 max-w-2xl">
              Pill-shaped container with a filled active segment. Best for 2–5 mutually exclusive options,
              like view toggles or filter groups.
            </p>
          </div>
          <div className="p-8 border border-gray-100 rounded bg-gray-50 flex flex-col gap-5 items-start">
            <SegmentedTabs labels={["Label", "Label"]} />
            <SegmentedTabs labels={["Label", "Label", "Label"]} />
            <SegmentedTabs labels={["Label", "Label", "Label", "Label"]} />
            <SegmentedTabs labels={["Label", "Label", "Label", "Label", "Label"]} />
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "Use for 2–5 options only — more than 5 becomes hard to scan.",
              "All options should be roughly equal in label length.",
              "Always have one segment selected — this is not a deselectable toggle.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Tab Segment */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Tab Segment</h2>
            <p className="text-sm text-gray-500 max-w-2xl">
              Rectangular tabs with a filled active state. Supports label only, icon only, or label + icon.
              Used when tabs sit within a card or panel.
            </p>
          </div>
          <div className="p-8 border border-gray-100 rounded bg-gray-50 flex flex-col gap-6 items-start">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Label only</p>
              <TabSegmentGroup config="label" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Label + Icon</p>
              <TabSegmentGroup config="both" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Icon only</p>
              <TabSegmentGroup config="icon" />
            </div>
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "Icon-only tabs must have accessible labels (aria-label) — icons alone aren't enough for all users.",
              "Use label + icon when the icon meaningfully reinforces the label.",
              "Keep labels short — one or two words max.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Tab with Icon */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Tab with Icon</h2>
            <p className="text-sm text-gray-500 max-w-2xl">
              Underline-style tabs with an icon alongside the label. Active state is indicated by a
              blue underline. Used for view or mode switching within a page section.
            </p>
          </div>
          <div className="p-8 border border-gray-100 rounded bg-gray-50">
            <TabWithIcon labels={[
              { icon: true, text: "List view" },
              { icon: true, text: "List view" },
              { icon: false, text: "Grid view" },
            ]} />
            <div className="mt-6 h-20 flex items-center justify-center text-sm text-gray-400 border border-dashed border-gray-300 rounded">
              Panel content
            </div>
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "Icons should be consistent across all tabs in a group — don't mix icon and no-icon tabs.",
              "The active underline is always brand-primary (#005FCF).",
              "Use this style for view toggles: List, Grid, Map, etc.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Tablist */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Tablist</h2>
            <p className="text-sm text-gray-500 max-w-2xl">
              Large, full-width underline tabs. Used for primary content switching — like "Find a Doctor"
              vs "Find a Location" — at the section or page level.
            </p>
          </div>
          <div className="border border-gray-100 rounded overflow-hidden">
            <div className="p-8">
              <Tablist labels={["Find a doctor", "Find a location", "Find a service"]} />
              <div className="mt-6 h-24 flex items-center justify-center text-sm text-gray-400 border border-dashed border-gray-300 rounded">
                Panel content
              </div>
            </div>
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "Use for top-level content switching only — not for filters or view modes.",
              "Labels use Red Hat Display Bold — they're headings, not UI controls.",
              "Limit to 2–4 tabs. More than 4 should become a different navigation pattern.",
              "Each tab should lead to meaningfully different content, not just a filtered view.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Choosing the right tab */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Choosing the right tab type</h2>
          </div>
          <div className="border border-gray-100 rounded overflow-hidden">
            <div className="grid grid-cols-[180px_1fr_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Type</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Best for</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Avoid when</p>
            </div>
            {[
              { type: "Segmented",     best: "View toggles, compact filters, 2–5 equal-weight options", avoid: "More than 5 options or unequal label lengths" },
              { type: "Tab Segment",   best: "Tabs inside a card or panel, icon-heavy interfaces", avoid: "Top-level page navigation" },
              { type: "Tab with Icon", best: "View mode switching (list/grid/map)", avoid: "When icons don't add meaning" },
              { type: "Tablist",       best: "Primary section-level content switching", avoid: "Filters, view modes, or more than 4 options" },
            ].map((row) => (
              <div key={row.type} className="grid grid-cols-[180px_1fr_1fr] px-6 py-4 border-b border-gray-100 last:border-0">
                <p className="text-sm font-medium text-gray-900">{row.type}</p>
                <p className="text-sm text-gray-500 pr-4">{row.best}</p>
                <p className="text-sm text-gray-400">{row.avoid}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
