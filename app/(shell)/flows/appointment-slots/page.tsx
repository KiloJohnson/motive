"use client";

import { useState } from "react";

function VideoIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0">
      <rect x="1" y="1" width="8" height="8" rx="1.5" fill="currentColor"/>
      <path d="M9 3.5l4-2v7l-4-2V3.5z" fill="currentColor"/>
    </svg>
  );
}
function ChevronDown() {
  return <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

type SlotType = "inperson" | "video" | "multiple" | "overflow" | "empty";
type SlotSize = "large" | "medium";

function Slot({ type, size = "large", time = "9:00 AM" }: { type: SlotType; size?: SlotSize; time?: string }) {
  const [hovered, setHovered] = useState(false);
  const isLarge = size === "large";

  const base = `inline-flex items-center justify-center gap-1.5 rounded-full font-semibold transition-all cursor-pointer relative
    ${isLarge ? "px-5 py-2.5 text-sm" : "px-3.5 py-2 text-xs"}`;

  if (type === "empty") {
    return <div className={`${isLarge ? "w-24 h-11" : "w-16 h-9"} flex items-center justify-center`}>
      <div className="w-6 h-0.5 bg-gray-200 rounded" />
    </div>;
  }

  return (
    <div className="relative inline-flex flex-col items-center">
      {hovered && type !== "overflow" && (
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2.5 py-1.5 rounded whitespace-nowrap z-10"
          style={{ fontFamily: "var(--font-red-hat-text)" }}>
          {type === "inperson" ? "In-person visit" : type === "video" ? "Video visit" : "Video or in-person"}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${base} ${hovered ? "bg-[#004DA6]" : "bg-[#005FCF]"} text-white`}
        style={{ fontFamily: "var(--font-red-hat-text)" }}
      >
        {(type === "video" || type === "multiple") && <VideoIcon />}
        {type === "overflow" ? (
          <><span>{time.split(" ")[0] === "1" ? "1 more" : time}</span><ChevronDown /></>
        ) : (
          <span>{time}</span>
        )}
        {type === "overflow" && <ChevronDown />}
      </button>
    </div>
  );
}

const slotTypes: { type: SlotType; label: string; desc: string }[] = [
  { type: "inperson",  label: "In-Person",   desc: "In-person appointment. No icon. Tooltip: 'In-person visit'." },
  { type: "video",     label: "Video",       desc: "Video appointment. Camera icon. Tooltip: 'Video visit'." },
  { type: "multiple",  label: "Multiple",    desc: "Either video or in-person. Camera icon. Tooltip: 'Video or in-person'." },
  { type: "overflow",  label: "Overflow",    desc: "Additional slots exist beyond what's shown. Shows count + chevron." },
  { type: "empty",     label: "Empty",       desc: "No availability. Rendered as a subtle dash — preserves grid spacing." },
];

export default function AppointmentSlotsPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Appointment Slots</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Blue pill buttons representing individual bookable appointment times.
          Five types cover every booking scenario. Hover to reveal the visit type tooltip.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Types */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Types</h2>
            <p className="text-sm text-gray-500">Hover over each slot to see the tooltip.</p>
          </div>
          <div className="border border-gray-100 rounded divide-y divide-gray-100">
            {slotTypes.map(({ type, label, desc }) => (
              <div key={type} className="flex items-center gap-8 px-6 py-5">
                <div className="w-44 shrink-0">
                  <p className="text-sm font-medium text-gray-900">{label}</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-snug">{desc}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Slot type={type} size="large" time={type === "overflow" ? "1 more" : "9:00 AM"} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sizes */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Sizes</h2>
            <p className="text-sm text-gray-500">Large for primary views. Medium for compact spaces like the results subheader.</p>
          </div>
          <div className="border border-gray-100 rounded divide-y divide-gray-100">
            {(["large", "medium"] as SlotSize[]).map(size => (
              <div key={size} className="flex items-center gap-8 px-6 py-5">
                <p className="text-sm font-medium text-gray-900 w-20 shrink-0 capitalize">{size}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <Slot type="inperson" size={size} />
                  <Slot type="video" size={size} />
                  <Slot type="multiple" size={size} />
                  <Slot type="overflow" size={size} time="1 more" />
                  <Slot type="empty" size={size} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive row */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">In context</h2>
            <p className="text-sm text-gray-500">A typical row of slots as it appears in a provider card. Hover each slot.</p>
          </div>
          <div className="p-6 bg-gray-50 border border-gray-100 rounded flex flex-wrap gap-2">
            {["9:00 AM", "10:00 AM", "10:30 AM"].map(t => <Slot key={t} type="inperson" time={t} />)}
            <Slot type="video" time="11:00 AM" />
            <Slot type="multiple" time="1:00 PM" />
            <Slot type="overflow" time="3 more" />
          </div>
        </section>

        {/* Usage */}
        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "Always show the visit type tooltip on hover — icon alone is not sufficient for accessibility.",
              "Show a maximum of 3–4 time slots before collapsing to an Overflow slot.",
              "Overflow slot label should show the count: '1 more', '3 more', not just a generic 'more'.",
              "The Empty slot must occupy space in the grid — it preserves column alignment.",
              "Clicking a slot initiates the booking flow — don't use slots as toggles or filters.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
