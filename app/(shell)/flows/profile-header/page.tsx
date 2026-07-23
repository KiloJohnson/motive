"use client";

import { useState } from "react";
import Link from "next/link";

function StarRating({ rating = 4.9, count = 121, light = false }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1,2,3,4,5].map(i => (
          <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i <= Math.round(rating) ? "#F4B942" : (light ? "rgba(255,255,255,0.3)" : "#E5E7EB")}>
            <path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9l-3 1.5.5-3.5L2 4.5 5.5 4z"/>
          </svg>
        ))}
      </div>
      <span className={`text-xs font-semibold ${light ? "text-white" : "text-gray-700"}`} style={{ fontFamily: "var(--font-red-hat-text)" }}>{rating}</span>
      {count > 0 && <span className={`text-xs ${light ? "text-white/70" : "text-gray-400"}`} style={{ fontFamily: "var(--font-red-hat-text)" }}>({count})</span>}
    </div>
  );
}

function InsuranceBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border" style={{ borderColor: "#2A9D8F", color: "#2A9D8F", fontFamily: "var(--font-red-hat-text)" }}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      Accepts your insurance
    </div>
  );
}

function BookingCTA({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`rounded-xl p-5 w-64 shrink-0 ${dark ? "bg-white" : "border border-gray-200 bg-white shadow-sm"}`}>
      <p className="text-sm font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-red-hat-display)" }}>Schedule online</p>
      <div className="mb-3">
        <select className="w-full text-xs border border-gray-300 rounded px-2 py-1.5 outline-none text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>
          <option>I'm a new patient</option>
          <option>I'm a returning patient</option>
        </select>
      </div>
      <p className="text-xs text-gray-500 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Next: <span className="font-semibold text-gray-800">Wed, September 25</span></p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {["9:00 AM", "10:00 AM", "4 more"].map((t, i) => (
          <div key={t} className={`text-xs font-semibold px-3 py-1.5 rounded-full cursor-pointer ${i === 2 ? "bg-[#005FCF] text-white flex items-center gap-1" : "bg-[#005FCF] text-white"}`}
            style={{ fontFamily: "var(--font-red-hat-text)" }}>
            {t}{i === 2 && <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1l3 3 3-3" stroke="white" strokeWidth="1.3" strokeLinecap="round"/></svg>}
          </div>
        ))}
      </div>
      <button className="w-full py-2.5 text-sm font-semibold text-white rounded-full mb-2" style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
        Show full schedule
      </button>
      <p className="text-xs text-center text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>
        Need help? Call <span className="text-[#005FCF] underline cursor-pointer">877-454-2330</span>
      </p>
    </div>
  );
}

function ProviderInfo({ light = false }: { light?: boolean }) {
  const textPrimary = light ? "text-white" : "text-gray-900";
  const textSecondary = light ? "text-white/80" : "text-gray-500";
  const textLink = light ? "text-white underline" : "text-[#005FCF] underline";

  return (
    <div className="flex-1 min-w-0">
      <p className={`text-2xl font-bold mb-0.5 ${light ? "text-white" : ""}`}
        style={{ color: light ? "white" : "#005FCF", fontFamily: "var(--font-red-hat-display)" }}>
        Kosha Nathwani, MD
      </p>
      <p className={`text-sm mb-3 ${textSecondary}`} style={{ fontFamily: "var(--font-red-hat-text)" }}>Family Medicine</p>
      <p className={`text-sm font-semibold cursor-pointer hover:underline mb-0.5 ${textLink}`} style={{ fontFamily: "var(--font-red-hat-text)" }}>
        Scripps Clinic Encinitas · 326 Santa Fe
      </p>
      <p className={`text-xs mb-0.5 ${textSecondary}`} style={{ fontFamily: "var(--font-red-hat-text)" }}>326 Santa Fe Drive F13 · Encinitas, CA 92024</p>
      <p className={`text-xs mb-2 ${textSecondary}`} style={{ fontFamily: "var(--font-red-hat-text)" }}>📞 714-764-4020</p>
      <div className="flex items-center gap-1.5 mb-3">
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${light ? "bg-white/20 text-white" : "bg-green-100 text-green-700"}`}
          style={{ fontFamily: "var(--font-red-hat-text)" }}>OPEN</span>
        <span className={`text-xs ${textSecondary}`} style={{ fontFamily: "var(--font-red-hat-text)" }}>Closes at 4 ↓</span>
      </div>
      <StarRating light={light} />
      <div className="mt-2"><InsuranceBadge /></div>
      <div className="flex items-center gap-3 mt-3">
        {["👤","📊","▶"].map((icon, i) => (
          <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm cursor-pointer
            ${light ? "bg-white/20 text-white hover:bg-white/30" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

function LightHeader() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <p className="text-xs text-[#005FCF] mb-3 cursor-pointer hover:underline" style={{ fontFamily: "var(--font-red-hat-text)" }}>← Back to search</p>
      <div className="flex gap-6">
        <div className="flex gap-4 flex-1">
          <div className="relative shrink-0">
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/providers/provider-1.png`} alt="Kosha Nathwani, MD" className="w-24 h-24 rounded-full object-cover" />
            <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#005FCF] flex items-center justify-center cursor-pointer shadow">
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><path d="M2 1l8 5-8 5V1z" fill="white"/></svg>
            </div>
          </div>
          <ProviderInfo />
        </div>
        <BookingCTA />
      </div>
    </div>
  );
}

function DarkHeader() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#005FCF" }}>
      <div className="p-6">
        <p className="text-xs text-white/70 mb-3 cursor-pointer hover:text-white" style={{ fontFamily: "var(--font-red-hat-text)" }}>← Back to search</p>
        <div className="flex gap-6">
          <div className="flex gap-4 flex-1">
            <div className="relative shrink-0">
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/providers/provider-1.png`} alt="Kosha Nathwani, MD" className="w-24 h-24 rounded-full object-cover border-2 border-white/30" />
              <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-white flex items-center justify-center cursor-pointer shadow">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><path d="M2 1l8 5-8 5V1z" fill="#005FCF"/></svg>
              </div>
            </div>
            <ProviderInfo light />
          </div>
          <BookingCTA dark />
        </div>
      </div>
    </div>
  );
}

function PhoneOnlyCTA() {
  return (
    <div className="border border-gray-200 rounded-xl p-5 w-64 shrink-0 bg-white shadow-sm">
      <p className="text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-red-hat-display)" }}>Schedule by phone</p>
      <p className="text-xs text-gray-500 mb-4 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
        This provider does not offer online scheduling. Call to book an appointment.
      </p>
      <button className="w-full py-2.5 text-sm font-semibold text-white rounded-full" style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
        📞 877-454-2330
      </button>
    </div>
  );
}

function MobileHeader() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm max-w-sm">
      <div className="relative h-40">
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/providers/video.png`} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <div className="flex items-center gap-3">
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/providers/provider-1.png`} alt="Kosha Nathwani, MD" className="w-14 h-14 rounded-full object-cover border-2 border-white shrink-0" />
            <div>
              <p className="text-white font-bold text-base" style={{ fontFamily: "var(--font-red-hat-display)" }}>Kosha Nathwani, MD</p>
              <p className="text-white/80 text-xs" style={{ fontFamily: "var(--font-red-hat-text)" }}>Family Medicine</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <StarRating />
        <p className="text-xs text-[#005FCF] underline cursor-pointer mt-1 mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Scripps Clinic Encinitas</p>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-red-hat-display)" }}>Schedule online</p>
          <p className="text-xs text-gray-500 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Next: <span className="font-semibold">Wed, Sep 25</span></p>
          <div className="flex gap-2 mb-2">
            <div className="bg-[#005FCF] text-white text-xs font-semibold px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-red-hat-text)" }}>9:00 AM</div>
            <div className="bg-[#005FCF] text-white text-xs font-semibold px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-red-hat-text)" }}>10:00 AM</div>
          </div>
          <button className="w-full py-2 text-xs font-semibold text-white rounded-full" style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
            Show full schedule
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProfileHeaderPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Profile Header</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The top section of every provider profile page. Provider photo, identity, location, rating,
          and the booking CTA. Light and dark theme variants. Online and phone-only scheduling variants.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16 max-w-5xl">

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Light — Desktop</h2>
          <p className="text-sm text-gray-500 mb-6">Default theme. White background, blue name link. Used on standard provider profiles.</p>
          <LightHeader />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Dark — Desktop</h2>
          <p className="text-sm text-gray-500 mb-6">Brand-primary blue background. White text. Used for featured or promoted providers.</p>
          <DarkHeader />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Phone Only — Booking CTA</h2>
          <p className="text-sm text-gray-500 mb-6">When online scheduling is unavailable, the CTA panel shifts to a phone-only state.</p>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-xs text-[#005FCF] mb-3 cursor-pointer" style={{ fontFamily: "var(--font-red-hat-text)" }}>← Back to search</p>
            <div className="flex gap-6">
              <div className="flex gap-4 flex-1">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/providers/provider-1.png`} alt="" className="w-24 h-24 rounded-full object-cover shrink-0" />
                <ProviderInfo />
              </div>
              <PhoneOnlyCTA />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Mobile</h2>
          <p className="text-sm text-gray-500 mb-6">Hero image with provider photo overlay. Compact booking CTA below.</p>
          <MobileHeader />
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "The video play button always appears over the provider photo — links to their introduction video.",
              "Dark theme is a design choice per provider type — not applied automatically.",
              "Insurance badge only shows if the patient has selected an insurance plan in the session.",
              "Phone-only CTA shows when the provider has no online booking availability.",
              "The share/profile icons (person, chart, play) link to patient satisfaction data and video.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
