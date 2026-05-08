"use client";

import { useState } from "react";

// --- Shared atoms ---
function StarRating({ rating = 4.9, count = 121 }: { rating?: number; count?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1,2,3,4,5].map(i => (
          <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i <= Math.round(rating) ? "#F4B942" : "#E5E7EB"}>
            <path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9l-3 1.5.5-3.5L2 4.5 5.5 4z"/>
          </svg>
        ))}
      </div>
      <span className="text-xs font-semibold text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>{rating}</span>
      <span className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>({count} ratings)</span>
    </div>
  );
}

function Slot({ time, video }: { time: string; video?: boolean }) {
  return (
    <div className="inline-flex items-center gap-1 bg-[#005FCF] text-white text-xs font-semibold px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#004DA6] transition-colors"
      style={{ fontFamily: "var(--font-red-hat-text)" }}>
      {video && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><rect x="0.5" y="0.5" width="6" height="7" rx="1" fill="white"/><path d="M7 2.5l3-2v7l-3-2V2.5z" fill="white"/></svg>}
      {time}
    </div>
  );
}

function MoreSlots({ count }: { count: number }) {
  return (
    <div className="inline-flex items-center gap-1 bg-[#005FCF] text-white text-xs font-semibold px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#004DA6]"
      style={{ fontFamily: "var(--font-red-hat-text)" }}>
      {count} more <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1l3 3 3-3" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
  );
}

function Tag({ icon, label, color = "#2A9D8F", link }: { icon?: string; label: string; color?: string; link?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-1.5 text-xs ${link ? "cursor-pointer hover:underline" : ""}`}
      style={{ color: link ? "#005FCF" : "#374151", fontFamily: "var(--font-red-hat-text)" }}>
      {icon && <span>{icon}</span>}
      {!icon && <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />}
      <span>{label}</span>
    </div>
  );
}

function ProviderPhoto({ src, size = 96, initials = "KN" }: { src?: string; size?: number; initials?: string }) {
  const [err, setErr] = useState(false);
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      {src && !err ? (
        <img src={src} alt="" className="w-full h-full rounded-full object-cover" onError={() => setErr(true)} />
      ) : (
        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold"
          style={{ fontFamily: "var(--font-red-hat-display)", fontSize: size * 0.28 }}>
          {initials}
        </div>
      )}
      {/* Video play button overlay */}
      <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#005FCF] flex items-center justify-center cursor-pointer shadow">
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><path d="M2 1l8 5-8 5V1z" fill="white"/></svg>
      </div>
    </div>
  );
}

function GroupPhotos({ count = 7 }: { count?: number }) {
  return (
    <div className="flex flex-col items-center gap-1 shrink-0">
      <div className="relative w-20 h-16">
        {[0,1,2].map(i => (
          <div key={i} className="absolute w-12 h-12 rounded-full bg-gray-300 border-2 border-white overflow-hidden flex items-center justify-center text-gray-500 text-xs font-bold"
            style={{ left: i * 14, top: i * 2, zIndex: 3 - i, fontFamily: "var(--font-red-hat-display)" }}>
            <img src={`/images/providers/provider-${i+1}.jpg`} alt="" className="w-full h-full object-cover"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            {String.fromCharCode(65 + i)}
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{count} Providers</p>
    </div>
  );
}

// --- Individual Provider Card ---
function IndividualProviderCard({ mobile = false }: { mobile?: boolean }) {
  const slots = [
    { date: "Mon Jan 1", times: ["9:00 AM", "10:00 AM", "2:00 PM"], more: 2 },
    { date: "Tue Jan 2", times: ["10:00 AM", "1:30 PM", "2:00 PM"], more: null },
    { date: "Wed Jan 3", times: ["9:00 AM", "11:00 AM", "11:30 AM"], more: null },
    { date: "Thu Jan 4", times: ["9:00 AM", "2:30 PM", "3:00 PM"], more: null },
    { date: "Fri Jan 5", times: ["2:30 PM", "3:30 PM", "4:30 PM"], more: null },
  ];

  if (mobile) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-4 w-[280px] shadow-sm">
        <div className="flex gap-3 mb-3">
          <ProviderPhoto src="/images/providers/provider-1.jpg" size={64} initials="KN" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold leading-tight mb-0.5" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-display)" }}>Kosha Nathwani, MD</p>
            <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>Internal Medicine</p>
            <p className="text-xs text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>Scripps Clinic Encinitas</p>
            <p className="text-xs text-[#005FCF] cursor-pointer hover:underline" style={{ fontFamily: "var(--font-red-hat-text)" }}>📍 Show on Map</p>
          </div>
        </div>
        <StarRating />
        <div className="flex flex-col gap-1 mt-2 mb-3">
          <Tag icon="👤" label="Accepts new patients" />
          <Tag icon="🎥" label="Video and in-person visits" />
        </div>
        <p className="text-xs text-gray-400 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Monday, March 2</p>
        <div className="flex gap-2 flex-wrap mb-2">
          <Slot time="9:00 AM" />
          <Slot time="10:00 AM" video />
        </div>
        <p className="text-xs font-semibold cursor-pointer" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>📋 Full Schedule</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex gap-6">
        {/* Left — provider info */}
        <div className="flex gap-4 w-64 shrink-0">
          <ProviderPhoto src="/images/providers/provider-1.jpg" size={80} initials="KN" />
          <div className="flex-1 min-w-0">
            <p className="text-base font-bold leading-snug mb-0.5" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-display)" }}>Kosha Nathwani, MD</p>
            <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>Family Medicine</p>
            <p className="text-xs text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>Scripps Clinic Encinitas · 326 Santa Fe</p>
            <p className="text-xs text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>Encinitas, CA 92024</p>
            <p className="text-xs text-[#005FCF] cursor-pointer hover:underline mt-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>📍 Show on Map</p>
            <div className="mt-2"><StarRating /></div>
            <div className="flex flex-col gap-1 mt-2">
              <Tag icon="👤" label="Accepts new patients" />
              <Tag icon="🎥" label="Video and in-person visits" />
            </div>
          </div>
        </div>
        {/* Right — availability */}
        <div className="flex-1">
          <div className="flex gap-3">
            {slots.map(col => (
              <div key={col.date} className="flex flex-col gap-1.5 min-w-[90px]">
                {col.times.map(t => <Slot key={t} time={t} video={t === "10:00 AM"} />)}
                {col.more && <MoreSlots count={col.more} />}
              </div>
            ))}
          </div>
          <p className="text-xs font-semibold mt-3 cursor-pointer" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>📋 Full Schedule</p>
        </div>
      </div>
    </div>
  );
}

// --- Group/Clinic Card ---
function GroupCard({ mobile = false }: { mobile?: boolean }) {
  const slots = [
    { times: ["9:00 AM", "2:30 PM", "3:00 PM"] },
    { times: ["10:00 AM", "1:30 PM", "2:00 PM"] },
    { times: ["9:00 AM", "11:00 AM", "11:30 AM"] },
    { times: ["9:00 AM", "2:30 PM", "3:00 PM"] },
    { times: ["2:30 PM", "3:30 PM", "4:30 PM"] },
  ];

  if (mobile) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-4 w-[280px] shadow-sm">
        <div className="flex gap-3 mb-3">
          <GroupPhotos count={7} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold leading-tight mb-0.5" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-display)" }}>Scripps Clinic Del Mar</p>
            <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>Internal Medicine, Family Medicine, and 6 more...</p>
            <p className="text-xs text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>Scripps Clinic Del Mar</p>
            <p className="text-xs text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>San Diego, CA 92130</p>
            <p className="text-xs text-[#005FCF] cursor-pointer hover:underline" style={{ fontFamily: "var(--font-red-hat-text)" }}>📍 Show on Map</p>
          </div>
        </div>
        <StarRating rating={4.9} count={0} />
        <div className="flex flex-col gap-1 mt-2 mb-3">
          <Tag icon="👤" label="Accepts new patients" />
          <Tag icon="🎥" label="Video and in-person visits" />
        </div>
        <p className="text-xs text-gray-400 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Monday, March 2</p>
        <div className="flex gap-2 flex-wrap mb-2">
          <Slot time="9:00 AM" /><Slot time="10:00 AM" video /><Slot time="9:00 AM" />
        </div>
        <p className="text-xs font-semibold cursor-pointer" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>📋 Full Schedule</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex gap-6">
        <div className="flex gap-4 w-64 shrink-0">
          <GroupPhotos count={7} />
          <div className="flex-1 min-w-0">
            <p className="text-base font-bold leading-snug mb-0.5" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-display)" }}>Scripps Clinic Del Mar</p>
            <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>Internal Medicine, Family Medicine, and 6 more...</p>
            <p className="text-xs text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>Scripps Clinic Del Mar</p>
            <p className="text-xs text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>12095 El Camino Real Ste 120 · San Diego, CA 92130</p>
            <p className="text-xs text-[#005FCF] cursor-pointer hover:underline mt-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>📍 Show on Map</p>
            <div className="mt-2"><StarRating rating={4.9} count={0} /></div>
            <div className="flex flex-col gap-1 mt-2">
              <Tag icon="👤" label="Accepts new patients" />
              <Tag icon="🎥" label="Video and in-person visits" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex gap-3">
            {slots.map((col, i) => (
              <div key={i} className="flex flex-col gap-1.5 min-w-[90px]">
                {col.times.map(t => <Slot key={t} time={t} video={i % 2 === 1} />)}
              </div>
            ))}
          </div>
          <p className="text-xs font-semibold mt-3 cursor-pointer" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>📋 Full Schedule</p>
        </div>
      </div>
    </div>
  );
}

// --- Results Badges ---
const badges = [
  { icon: null, color: "#2A9D8F", label: "Accepts your insurance" },
  { icon: null, color: "#E9C46A", label: "May accept your insurance" },
  { icon: null, color: "#005FCF", label: "Accepts self-pay options" },
  { icon: "👤", label: "Accepts new patients" },
  { icon: "📍", label: "Show on Map", link: true },
  { icon: "🗓️", label: "Treats all ages" },
  { icon: "🗓️", label: "Treats adults over 18" },
  { icon: "🗓️", label: "Treats children under 18" },
  { icon: "🎥", label: "Video and in-person visits" },
  { icon: "🎥", label: "Video visits only" },
  { icon: "🏥", label: "In-person visits only" },
  { icon: "🌈", label: "Offers gender-affirming care" },
  { icon: "💬", label: "Speaks Spanish" },
];

export default function ProviderResultPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Provider Result</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The provider card shown in Find a Doctor search results. Two types — Individual Provider
          and Group/Clinic — each with desktop and mobile layouts. Includes attribute badges
          and an inline availability grid.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-5xl">

        {/* Individual — Desktop */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Individual Provider — Desktop</h2>
          <p className="text-sm text-gray-500 mb-6">Provider photo with video play button, info panel, star rating, attribute tags, and inline availability slots.</p>
          <IndividualProviderCard />
        </section>

        {/* Group — Desktop */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Group / Clinic — Desktop</h2>
          <p className="text-sm text-gray-500 mb-6">Stacked provider photos with count, clinic name, specialties list, same availability grid.</p>
          <GroupCard />
        </section>

        {/* Mobile */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Mobile</h2>
          <p className="text-sm text-gray-500 mb-6">Compact vertical layout. Date collapsed to a single day with limited slots visible.</p>
          <div className="flex gap-6 flex-wrap">
            <div>
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-red-hat-text)" }}>Individual</p>
              <IndividualProviderCard mobile />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-red-hat-text)" }}>Group</p>
              <GroupCard mobile />
            </div>
          </div>
        </section>

        {/* Results Badges */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Results Badges</h2>
          <p className="text-sm text-gray-500 mb-6">Attribute tags shown on each provider card. The combination shown depends on what applies to that provider.</p>
          <div className="p-6 bg-gray-50 border border-gray-100 rounded flex flex-wrap gap-4">
            {badges.map(b => (
              <Tag key={b.label} icon={b.icon ?? undefined} color={b.color} label={b.label} link={b.link} />
            ))}
          </div>
          <div className="mt-4 border border-gray-100 rounded overflow-hidden">
            <div className="grid grid-cols-[200px_1fr] bg-gray-50 border-b border-gray-100 px-5 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Badge</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">When shown</p>
            </div>
            {[
              { badge: "Accepts your insurance",     when: "Provider is in-network for the patient's selected insurance plan." },
              { badge: "May accept your insurance",  when: "Insurance match is uncertain — patient should verify before booking." },
              { badge: "Accepts self-pay options",   when: "Provider accepts patients paying out of pocket." },
              { badge: "Accepts new patients",       when: "Provider is currently taking new patient bookings." },
              { badge: "Show on Map",                when: "Always shown — links to the provider's location on the map view." },
              { badge: "Treats all/adult/children",  when: "Based on provider's documented patient age range." },
              { badge: "Video and in-person visits", when: "Provider offers both appointment modalities." },
              { badge: "Gender-affirming care",      when: "Provider has indicated they offer LGBTQ+ affirming care." },
              { badge: "Speaks [language]",          when: "Provider speaks a language other than English." },
            ].map(row => (
              <div key={row.badge} className="grid grid-cols-[200px_1fr] px-5 py-3 border-b border-gray-100 last:border-0">
                <p className="text-sm font-medium text-gray-900">{row.badge}</p>
                <p className="text-sm text-gray-500">{row.when}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Usage */}
        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "Provider name is always a link — clicking navigates to the provider's full profile page.",
              "The video play button on the photo opens a short provider introduction video.",
              "Show a maximum of 5 date columns on desktop. Mobile shows 1 day at a time.",
              "Slots in the inline grid are abbreviated — 3 times max per column before an overflow button.",
              "'Full Schedule' always links to the Availability Modal for that provider.",
              "Group cards show the clinic name as the primary heading, not individual provider names.",
              "Star rating is hidden on group cards unless the group has reviews — don't show '0 ratings'.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
