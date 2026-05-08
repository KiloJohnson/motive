"use client";

import { useState } from "react";

function Tag({
  label,
  icon,
  color,
  bg,
  dismissable = false,
}: {
  label: string;
  icon?: string;
  color?: string;
  bg?: string;
  dismissable?: boolean;
}) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border"
      style={{
        color: color ?? "#374151",
        backgroundColor: bg ?? "white",
        borderColor: color ? `${color}40` : "#E5E7EB",
        fontFamily: "var(--font-red-hat-text)",
      }}
    >
      {icon && <span>{icon}</span>}
      {label}
      {dismissable && (
        <button
          onClick={() => setDismissed(true)}
          className="ml-0.5 opacity-50 hover:opacity-100 transition-opacity font-bold leading-none"
          style={{ color: color ?? "#374151" }}
        >
          ✕
        </button>
      )}
    </div>
  );
}

function DotTag({ label, color }: { label: string; color: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-xs" style={{ color: "#374151", fontFamily: "var(--font-red-hat-text)" }}>
      <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
      {label}
    </div>
  );
}

export default function TagsPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Tags & Labels</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Small inline labels that communicate status, attributes, or categories. Used throughout provider results, profile pages, and search filters.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Attribute tags */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Attribute Tags</h2>
          <p className="text-sm text-gray-500 mb-6">Icon + label pills summarizing provider attributes. Appear on result cards and profile pages. Always neutral — gray border, white background.</p>
          <div className="border border-gray-100 rounded-xl p-6 bg-gray-50 flex flex-wrap gap-2">
            <Tag icon="👤" label="Accepts new patients" />
            <Tag icon="🎥" label="Video and in-person visits" />
            <Tag icon="🎥" label="Video visits only" />
            <Tag icon="🏥" label="In-person visits only" />
            <Tag icon="🗓️" label="Treats all ages" />
            <Tag icon="🗓️" label="Treats adults over 18" />
            <Tag icon="🗓️" label="Treats children under 18" />
            <Tag icon="🌈" label="Offers gender-affirming care" />
            <Tag icon="💬" label="Speaks Spanish" />
            <Tag icon="💬" label="Speaks Mandarin" />
          </div>
        </section>

        {/* Insurance status */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Insurance Status</h2>
          <p className="text-sm text-gray-500 mb-6">Color-coded dot tags indicating insurance network status. Dot color carries the semantic meaning — always paired with a label, never color alone.</p>
          <div className="border border-gray-100 rounded-xl p-6 bg-gray-50 flex flex-wrap gap-4">
            <DotTag label="Accepts your insurance" color="#2A9D8F" />
            <DotTag label="May accept your insurance" color="#E9C46A" />
            <DotTag label="Accepts self-pay" color="#005FCF" />
            <DotTag label="Out of network" color="#E76F51" />
            <DotTag label="Insurance unknown" color="#9d9e9f" />
          </div>
        </section>

        {/* Status labels */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Status Labels</h2>
          <p className="text-sm text-gray-500 mb-6">Filled pill labels for system or booking states. Use sparingly — only when status is genuinely important to the user's next action.</p>
          <div className="border border-gray-100 rounded-xl p-6 bg-gray-50 flex flex-wrap gap-2">
            <Tag label="Confirmed" color="#166534" bg="#f0fdf4" />
            <Tag label="Pending" color="#92400e" bg="#fffbeb" />
            <Tag label="Cancelled" color="#991b1b" bg="#fef2f2" />
            <Tag label="In-Network" color="#166534" bg="#f0fdf4" />
            <Tag label="Out of Network" color="#991b1b" bg="#fef2f2" />
            <Tag label="Verification Needed" color="#92400e" bg="#fffbeb" />
            <Tag label="New" color="#1e40af" bg="#eff6ff" />
            <Tag label="Updated" color="#1e40af" bg="#eff6ff" />
          </div>
        </section>

        {/* Dismissable */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Dismissable Tags</h2>
          <p className="text-sm text-gray-500 mb-6">Used in search filter chips and multi-select inputs. Clicking ✕ removes the tag and updates the filter state. Try dismissing below.</p>
          <div className="border border-gray-100 rounded-xl p-6 bg-gray-50 flex flex-wrap gap-2">
            <Tag label="Family Medicine" dismissable />
            <Tag label="Encinitas" dismissable />
            <Tag label="Accepting new patients" dismissable />
            <Tag label="Video visits" dismissable />
            <Tag label="My insurance" dismissable />
          </div>
        </section>

        {/* Usage */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Usage</h2>
          <ul className="space-y-2">
            {[
              "Never use color alone to communicate status — always pair with a label.",
              "Keep labels short — 1 to 4 words maximum. Truncate with ellipsis only as a last resort.",
              "Attribute tags use neutral styling (white + gray border). Reserve colored tags for status meaning.",
              "Don't stack more than 5–6 attribute tags without a 'Show more' control.",
              "Dismissable tags should visually disappear on dismiss — never leave an empty placeholder.",
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
