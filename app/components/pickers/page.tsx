"use client";

import { useState } from "react";

// --- Date Picker ---

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function DatePicker() {
  const today = new Date(2026, 4, 8); // May 8 2026
  const [viewing, setViewing] = useState({ month: today.getMonth(), year: today.getFullYear() });
  const [selected, setSelected] = useState<number | null>(null);

  const firstDay = new Date(viewing.year, viewing.month, 1).getDay();
  const daysInMonth = new Date(viewing.year, viewing.month + 1, 0).getDate();

  const prev = () => setViewing(v => v.month === 0 ? { month: 11, year: v.year - 1 } : { month: v.month - 1, year: v.year });
  const next = () => setViewing(v => v.month === 11 ? { month: 0, year: v.year + 1 } : { month: v.month + 1, year: v.year });

  const cells = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 w-72" style={{ fontFamily: "var(--font-red-hat-text)" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prev} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <p className="text-sm font-bold text-gray-900">{MONTHS[viewing.month]} {viewing.year}</p>
        <button onClick={next} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      {/* Day labels */}
      <div className="grid grid-cols-7 mb-1">
        {DAYS.map(d => (
          <div key={d} className="text-center text-xs font-semibold text-gray-400 py-1">{d}</div>
        ))}
      </div>
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-y-0.5">
        {cells.map((day, i) => {
          const isToday = day === today.getDate() && viewing.month === today.getMonth() && viewing.year === today.getFullYear();
          const isSelected = day === selected;
          return (
            <button
              key={i}
              disabled={!day}
              onClick={() => day && setSelected(day)}
              className={`h-8 w-8 mx-auto text-xs rounded-full flex items-center justify-center transition-colors
                ${!day ? "invisible" : ""}
                ${isSelected ? "text-white font-bold" : ""}
                ${isToday && !isSelected ? "font-bold border" : ""}
                ${!isSelected && !isToday && day ? "hover:bg-gray-100 text-gray-700" : ""}
              `}
              style={{
                backgroundColor: isSelected ? "#005FCF" : undefined,
                borderColor: isToday && !isSelected ? "#005FCF" : undefined,
                color: isToday && !isSelected ? "#005FCF" : isSelected ? "white" : undefined,
              }}
            >
              {day}
            </button>
          );
        })}
      </div>
      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
        <button onClick={() => { setViewing({ month: today.getMonth(), year: today.getFullYear() }); setSelected(today.getDate()); }}
          className="text-xs font-semibold" style={{ color: "#005FCF" }}>
          Today
        </button>
        {selected && (
          <p className="text-xs text-gray-500">
            {MONTHS[viewing.month].slice(0, 3)} {selected}, {viewing.year}
          </p>
        )}
      </div>
    </div>
  );
}

// --- Time Picker ---

function TimePicker() {
  const [hour, setHour] = useState(9);
  const [minute, setMinute] = useState(0);
  const [ampm, setAmpm] = useState<"AM" | "PM">("AM");

  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-5 w-64" style={{ fontFamily: "var(--font-red-hat-text)" }}>
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Select a time</p>
      <div className="flex items-center justify-center gap-2 mb-5">
        {/* Hour */}
        <div className="flex flex-col items-center gap-1">
          <button onClick={() => setHour(h => (h + 1) % 24)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="w-14 h-12 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-900 border border-gray-200 bg-gray-50">
            {String(displayHour).padStart(2, "0")}
          </div>
          <button onClick={() => setHour(h => (h - 1 + 24) % 24)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <span className="text-2xl font-bold text-gray-400 mb-0.5">:</span>
        {/* Minute */}
        <div className="flex flex-col items-center gap-1">
          <button onClick={() => setMinute(m => (m + 15) % 60)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="w-14 h-12 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-900 border border-gray-200 bg-gray-50">
            {String(minute).padStart(2, "0")}
          </div>
          <button onClick={() => setMinute(m => (m - 15 + 60) % 60)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        {/* AM/PM */}
        <div className="flex flex-col gap-1 ml-1">
          {(["AM", "PM"] as const).map(p => (
            <button
              key={p}
              onClick={() => setAmpm(p)}
              className="w-12 h-[52px] rounded-lg text-xs font-bold transition-colors"
              style={{
                backgroundColor: ampm === p ? "#005FCF" : "#f3f4f6",
                color: ampm === p ? "white" : "#6b7280",
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <button className="w-full py-2.5 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "#005FCF" }}>
        Set time — {String(displayHour).padStart(2, "0")}:{String(minute).padStart(2, "0")} {ampm}
      </button>
    </div>
  );
}

// --- Page ---

export default function PickersPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Pickers</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Date and time selection components. Scripps uses two distinct patterns depending on context — inline tiles for booking flows, and calendar/clock pickers for form inputs and application dashboards.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Context callout */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-4 p-5 rounded-xl border border-green-100 bg-green-50/40">
            <div className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5" style={{ backgroundColor: "#589600" }}>✓</div>
            <div>
              <p className="text-sm font-bold text-gray-800 mb-1" style={{ fontFamily: "var(--font-red-hat-display)" }}>Booking flow — use Date Tiles</p>
              <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
                Patient-facing appointment selection uses the custom Date Tiles + Availability Table components — not a generic calendar widget. See <a href="/flows/date-tiles" className="underline font-semibold" style={{ color: "#005FCF" }}>Date Tiles</a> and <a href="/flows/availability-table" className="underline font-semibold" style={{ color: "#005FCF" }}>Availability Table</a>.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-5 rounded-xl border border-blue-100 bg-blue-50/50">
            <div className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5" style={{ backgroundColor: "#005FCF" }}>i</div>
            <div>
              <p className="text-sm font-bold text-gray-800 mb-1" style={{ fontFamily: "var(--font-red-hat-display)" }}>Application context — Flowbite Pro</p>
              <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
                Admin dashboards and form inputs use Flowbite Pro's date and time pickers. Scripps tokens are applied globally — brand blue for selected states, Red Hat Text throughout.
              </p>
            </div>
          </div>
        </div>

        {/* Date picker */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Date Picker</h2>
          <p className="text-sm text-gray-500 mb-6">
            Calendar widget for form inputs — date of birth, filter date ranges, report periods. Fully interactive below. Today is highlighted with a blue border, selected date fills blue.
          </p>
          <div className="border border-gray-100 rounded-xl p-10 bg-gray-50 flex items-start gap-10 flex-wrap">
            <DatePicker />
            <div className="space-y-4 max-w-xs">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Used for</p>
                <ul className="space-y-1.5">
                  {["Date of birth in patient forms", "Filter date ranges in admin dashboards", "Report period selection", "Appointment date override in admin tools"].map((t, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-500">
                      <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>Not used for</p>
                <ul className="space-y-1.5">
                  {["Patient booking — use Date Tiles instead", "Selecting appointment times — use Time Picker or Availability Table"].map((t, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-500">
                      <span className="shrink-0 w-1 h-1 rounded-full bg-red-200 mt-2" />{t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Time picker */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Time Picker</h2>
          <p className="text-sm text-gray-500 mb-6">
            Scroll-wheel style hour/minute/AM-PM selector for form inputs. Minutes increment in 15-minute steps to match clinical scheduling conventions. Try the arrows.
          </p>
          <div className="border border-gray-100 rounded-xl p-10 bg-gray-50 flex items-start gap-10 flex-wrap">
            <TimePicker />
            <div className="space-y-3 max-w-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>Notes</p>
              <ul className="space-y-1.5">
                {[
                  "Minutes use 15-minute increments (00, 15, 30, 45) — matching clinical scheduling.",
                  "Always use 12-hour format with AM/PM for patient-facing contexts.",
                  "24-hour format is acceptable in admin/operational tools.",
                  "Pair with a Date Picker when both date and time are needed.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-500">
                    <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* When to use which */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Which pattern to use</h2>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[180px_1fr_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              {["Scenario", "Pattern", "Where documented"].map(h => (
                <p key={h} className="text-xs font-semibold uppercase tracking-wider text-gray-400">{h}</p>
              ))}
            </div>
            {[
              { scenario: "Patient booking a slot", pattern: "Date Tiles + Availability Table", where: "/flows/date-tiles" },
              { scenario: "Patient viewing full schedule", pattern: "Availability Modal", where: "/flows/availability-modal" },
              { scenario: "Form — date of birth", pattern: "Date Picker (this page)", where: "Here" },
              { scenario: "Admin — filter by date range", pattern: "Flowbite Date Range Picker", where: "Flowbite Pro" },
              { scenario: "Admin — set appointment time", pattern: "Time Picker (this page)", where: "Here" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-[180px_1fr_1fr] px-6 py-4 border-b border-gray-100 last:border-0 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                <p className="text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.scenario}</p>
                <p className="font-semibold text-gray-800" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.pattern}</p>
                <p className="text-xs font-mono text-gray-400">{row.where}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
