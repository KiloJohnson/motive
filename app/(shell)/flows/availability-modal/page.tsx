"use client";

import { useState } from "react";

function CloseIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function ChevronLeft() {
  return <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function ChevronRight() {
  return <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function ChevronDown() {
  return <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function Slot({ time }: { time: string }) {
  return (
    <span className="inline-block bg-[#005FCF] text-white text-xs font-semibold px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#004DA6] transition-colors"
      style={{ fontFamily: "var(--font-red-hat-text)" }}>
      {time}
    </span>
  );
}

const listData = [
  { date: "Wednesday, September 11, 2024",  slots: ["12:15 PM"] },
  { date: "Monday, December 30, 2024",      slots: ["8:00 AM", "10:15 AM", "11:15 AM", "12:45 PM"] },
  { date: "Monday, January 6, 2025",        slots: ["8:00 AM", "10:15 AM", "11:15 AM", "12:45 PM"] },
  { date: "Wednesday, January 8, 2025",     slots: ["8:00 AM", "12:15 PM"] },
  { date: "Monday, January 13, 2025",       slots: ["8:00 AM", "10:15 AM", "11:15 AM", "12:45 PM"] },
];

// Calendar grid for September 2024
const calDays = [
  [null, null, null, null, null, null, null],
  [1,2,3,4,5,6,7],
  [8,9,10,11,12,13,14],
  [15,16,17,18,19,20,21],
  [22,23,24,25,26,27,28],
  [29,30,null,null,null,null,null],
];
const available = new Set([2,3,6,9,11,13,16,17,20,23,27,30]);
const selected = 11;
const today = 10;

function ModalShell({ children, view, setView }: { children: React.ReactNode; view: "list" | "calendar"; setView: (v: "list" | "calendar") => void }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden w-full">
      {/* Provider header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
        <div className="w-9 h-9 rounded-full bg-gray-200 shrink-0 flex items-center justify-center text-xs font-bold text-gray-500">KN</div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>Kosha Nathwani, MD</p>
          <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>Family Medicine</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600"><CloseIcon /></button>
      </div>
      {/* Tabs + filters */}
      <div className="flex items-center justify-between px-5 py-2 border-b border-gray-100">
        <div className="flex gap-1">
          {(["list","calendar"] as const).map(v => (
            <button key={v} onClick={() => setView(v)}
              className={`px-3 py-1.5 text-xs font-semibold capitalize rounded transition-colors ${view === v ? "text-[#005FCF] border-b-2 border-[#005FCF]" : "text-gray-500 hover:text-gray-700"}`}
              style={{ fontFamily: "var(--font-red-hat-text)" }}>
              {v}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {["Visit type / time", "Any patient type"].map(f => (
            <div key={f} className="flex items-center gap-1 text-xs text-gray-600 border border-gray-200 rounded px-2 py-1 cursor-pointer hover:border-gray-300"
              style={{ fontFamily: "var(--font-red-hat-text)" }}>
              {f} <ChevronDown />
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}

// List view
function ListView() {
  const [view, setView] = useState<"list"|"calendar">("list");
  return (
    <ModalShell view={view} setView={setView}>
      <div className="p-5 space-y-4 max-h-72 overflow-y-auto">
        {listData.map(({ date, slots }) => (
          <div key={date}>
            <p className="text-xs font-semibold text-gray-500 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>{date}</p>
            <div className="flex flex-wrap gap-2">
              {slots.map(t => <Slot key={t} time={t} />)}
            </div>
          </div>
        ))}
      </div>
    </ModalShell>
  );
}

// Calendar view
function CalendarView({ expanded = false }: { expanded?: boolean }) {
  const [view, setView] = useState<"list"|"calendar">("calendar");
  const [selDay, setSelDay] = useState<number | null>(expanded ? selected : null);

  return (
    <ModalShell view={view} setView={setView}>
      <div className={`flex ${expanded ? "gap-0" : ""}`}>
        <div className="flex-1 p-5">
          <div className="flex items-center justify-between mb-4">
            <button className="text-gray-400 hover:text-gray-600"><ChevronLeft /></button>
            <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>September 2024</p>
            <button className="text-gray-400 hover:text-gray-600"><ChevronRight /></button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
              <p key={d} className="text-[10px] text-gray-400 font-semibold py-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>{d}</p>
            ))}
          </div>
          {calDays.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7 gap-1 text-center">
              {week.map((day, di) => (
                <div key={di} className="py-0.5">
                  {day ? (
                    <button
                      onClick={() => setSelDay(day)}
                      className={`w-8 h-8 rounded-full text-xs font-medium transition-colors mx-auto flex items-center justify-center
                        ${selDay === day ? "bg-[#005FCF] text-white" : ""}
                        ${day === today && selDay !== day ? "border-2 border-red-400 text-gray-700" : ""}
                        ${available.has(day) && selDay !== day && day !== today ? "text-gray-900 hover:bg-gray-100" : ""}
                        ${!available.has(day) && day !== today ? "text-gray-300 cursor-default" : ""}
                      `}
                      style={{ fontFamily: "var(--font-red-hat-text)" }}
                      disabled={!available.has(day)}
                    >
                      {day}
                    </button>
                  ) : <div className="w-8 h-8" />}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Expanded day detail */}
        {expanded && selDay && (
          <div className="w-48 border-l border-gray-100 p-4">
            <p className="text-xs font-semibold text-gray-600 mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>
              Wednesday, September {selDay}th, 2024
            </p>
            <Slot time="12:15 PM" />
          </div>
        )}
      </div>
    </ModalShell>
  );
}

export default function AvailabilityModalPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Availability Modal</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The full booking overlay for a provider. Triggered by "Full Schedule". Three views: List
          (chronological slots), Calendar (month grid), and Calendar Expanded (calendar + day detail side by side).
        </p>
      </div>
      <div className="px-16 py-12 space-y-16 max-w-2xl">

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">List View</h2>
          <p className="text-sm text-gray-500 mb-6">Appointments grouped chronologically by date. Most scannable for seeing the next available slot.</p>
          <ListView />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Calendar View</h2>
          <p className="text-sm text-gray-500 mb-6">Month grid. Today circled in red. Available dates are selectable — click a date to expand the day detail.</p>
          <CalendarView />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Calendar Expanded</h2>
          <p className="text-sm text-gray-500 mb-6">Calendar + day panel side by side. Selected date highlights in blue, day panel shows available times.</p>
          <CalendarView expanded />
        </section>

        {/* Calendar Date Cell */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Calendar Date States</h2>
          <p className="text-sm text-gray-500 mb-6">Individual date cells have three availability states.</p>
          <div className="border border-gray-100 rounded overflow-hidden">
            {[
              { label: "Available",    style: "w-10 h-10 rounded-full bg-[#005FCF] text-white text-sm font-medium flex items-center justify-center", day: "11" },
              { label: "Today",        style: "w-10 h-10 rounded-full border-2 border-red-400 text-gray-700 text-sm font-medium flex items-center justify-center", day: "10" },
              { label: "Unavailable",  style: "w-10 h-10 rounded-full text-gray-300 text-sm font-medium flex items-center justify-center cursor-default", day: "12" },
            ].map(({ label, style, day }) => (
              <div key={label} className="flex items-center gap-6 px-6 py-4 border-b border-gray-100 last:border-0">
                <div className="w-36 shrink-0">
                  <p className="text-sm font-medium text-gray-900">{label}</p>
                </div>
                <div className={style} style={{ fontFamily: "var(--font-red-hat-text)" }}>{day}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "Default to List view — it's the most scannable for finding the next available slot.",
              "Today's date uses a red circle outline — never fill it blue unless it's also selected.",
              "Calendar only shows available dates as clickable — unavailable dates are grayed out and non-interactive.",
              "Visit type and patient type filters apply across both List and Calendar views simultaneously.",
              "The modal closes on clicking × or pressing Escape.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
