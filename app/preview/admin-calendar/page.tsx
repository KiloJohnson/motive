"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";
import {
  HiChevronLeft,
  HiChevronRight,
  HiPlus,
  HiX,
  HiPencil,
  HiTrash,
  HiLocationMarker,
  HiCalendar,
  HiClock,
} from "react-icons/hi";

// ── Types ─────────────────────────────────────────────────────────────────────

type EventColor =
  | "blue"
  | "purple"
  | "indigo"
  | "pink"
  | "teal"
  | "green"
  | "yellow"
  | "orange"
  | "red";

interface CalEvent {
  id: number;
  title: string;
  date: number; // day of month
  startTime?: string;
  endTime?: string;
  location?: string;
  description?: string;
  color: EventColor;
  allDay?: boolean;
  span?: number; // how many days it spans visually (max 3 for month view)
}

// ── Static event data (May 2025) ───────────────────────────────────────────────

const EVENTS: CalEvent[] = [
  {
    id: 1,
    title: "PIMC Sprint Planning",
    date: 1,
    startTime: "9:00 AM",
    endTime: "10:30 AM",
    location: "Zoom",
    description: "Kick off sprint 14. Review backlog, set goals.",
    color: "blue",
  },
  {
    id: 2,
    title: "Stakeholder Review",
    date: 5,
    startTime: "2:00 PM",
    endTime: "3:00 PM",
    location: "Scripps HQ — Room 3B",
    description: "Present Q2 design progress to leadership.",
    color: "purple",
  },
  {
    id: 3,
    title: "Design System Workshop",
    date: 7,
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    location: "La Jolla Campus",
    description: "Live Motive walkthrough with the PIMC dev team.",
    color: "indigo",
    span: 2,
  },
  {
    id: 4,
    title: "All-Hands Meeting",
    date: 12,
    allDay: true,
    location: "Scripps Memorial",
    description: "Quarterly company all-hands. Attendance required.",
    color: "teal",
    span: 3,
  },
  {
    id: 5,
    title: "UX Peer Review",
    date: 14,
    startTime: "1:00 PM",
    endTime: "2:30 PM",
    location: "Google Meet",
    description: "Cross-team UX critique session.",
    color: "green",
  },
  {
    id: 6,
    title: "Epic Integration Sync",
    date: 19,
    startTime: "11:00 AM",
    endTime: "12:00 PM",
    location: "Zoom",
    description: "Align on Epic API contract for PIMC portal.",
    color: "orange",
  },
  {
    id: 7,
    title: "Prototype Demo",
    date: 20,
    startTime: "3:00 PM",
    endTime: "4:00 PM",
    location: "Clinic Boardroom",
    description: "Live demo of appointment booking flow to clinical team.",
    color: "pink",
  },
  {
    id: 8,
    title: "Memorial Day",
    date: 26,
    allDay: true,
    color: "red",
    span: 1,
  },
  {
    id: 9,
    title: "Sprint Retrospective",
    date: 28,
    startTime: "9:30 AM",
    endTime: "10:30 AM",
    location: "Zoom",
    description: "Sprint 14 retro. What worked, what didn't.",
    color: "blue",
  },
  {
    id: 10,
    title: "Figma Token Sync",
    date: 30,
    startTime: "2:00 PM",
    endTime: "3:30 PM",
    location: "Zoom",
    description: "Sync Motive design tokens with Figma variables library.",
    color: "indigo",
  },
];

// ── Color maps ─────────────────────────────────────────────────────────────────

const eventBg: Record<EventColor, string> = {
  blue:   "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  pink:   "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  teal:   "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  green:  "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  orange: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  red:    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

const dotColor: Record<EventColor, string> = {
  blue:   "bg-blue-500",
  purple: "bg-purple-500",
  indigo: "bg-indigo-500",
  pink:   "bg-pink-500",
  teal:   "bg-teal-500",
  green:  "bg-green-500",
  yellow: "bg-yellow-400",
  orange: "bg-orange-400",
  red:    "bg-red-500",
};

const pickerBg: Record<EventColor, string> = {
  blue:   "bg-blue-500",
  purple: "bg-purple-500",
  indigo: "bg-indigo-500",
  pink:   "bg-pink-500",
  teal:   "bg-teal-400",
  green:  "bg-green-400",
  yellow: "bg-yellow-300",
  orange: "bg-orange-400",
  red:    "bg-red-500",
};

// ── Helpers ────────────────────────────────────────────────────────────────────

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAY_LABELS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay(); // 0=Sun
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function ColorPicker({
  value,
  onChange,
}: {
  value: EventColor;
  onChange: (c: EventColor) => void;
}) {
  const colors: EventColor[] = [
    "purple","indigo","blue","pink","teal","green","yellow","orange","red",
  ];
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {colors.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onChange(c)}
          className={`h-6 w-6 rounded ${pickerBg[c]} ring-2 ring-offset-1 ${
            value === c ? "ring-gray-500 dark:ring-gray-300" : "ring-transparent"
          }`}
          aria-label={c}
        />
      ))}
    </div>
  );
}

function EventPill({
  event,
  onClick,
}: {
  event: CalEvent;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left truncate rounded px-1.5 py-0.5 text-xs font-medium leading-5 ${eventBg[event.color]}`}
    >
      {!event.allDay && event.startTime && (
        <span className="mr-1 opacity-70">{event.startTime.replace(":00", "")}</span>
      )}
      {event.title}
    </button>
  );
}

// ── Main calendar component ────────────────────────────────────────────────────

export default function AdminCalendarPage() {
  // Calendar state
  const today = new Date(2025, 4, 22); // May 22 2025 (matches project date)
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [view, setView] = useState<"month" | "week" | "day">("month");

  // Event CRUD state
  const [events, setEvents] = useState<CalEvent[]>(EVENTS);
  const [nextId, setNextId] = useState(100);

  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState<"create" | "edit">("create");
  const [editingEvent, setEditingEvent] = useState<CalEvent | null>(null);

  // Modal state
  const [readModalOpen, setReadModalOpen] = useState(false);
  const [readEvent, setReadEvent] = useState<CalEvent | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  // Form state
  const [formTitle, setFormTitle] = useState("");
  const [formDesc, setFormDesc] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formEndDate, setFormEndDate] = useState("");
  const [formStartTime, setFormStartTime] = useState("09:00");
  const [formEndTime, setFormEndTime] = useState("10:00");
  const [formLocation, setFormLocation] = useState("");
  const [formColor, setFormColor] = useState<EventColor>("blue");
  const [formAllDay, setFormAllDay] = useState(false);
  const [formAddTime, setFormAddTime] = useState(false);

  // ── Navigation ────────────────────────────────────────────────────────

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  }
  function nextMonth() {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  }
  function goToday() {
    setYear(today.getFullYear());
    setMonth(today.getMonth());
  }

  // ── Grid layout ──────────────────────────────────────────────────────

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  // Build grid: leading empty cells + days
  const gridCells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  // Pad to full weeks
  while (gridCells.length % 7 !== 0) gridCells.push(null);

  // ── Week view data ────────────────────────────────────────────────────

  // Find the week containing today (or first day of month)
  const [weekOffset, setWeekOffset] = useState(0);
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - today.getDay() + weekOffset * 7);

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  const HOURS = Array.from({ length: 24 }, (_, i) => i);

  // ── Event helpers ────────────────────────────────────────────────────

  function eventsForDay(day: number) {
    return events.filter((e) => e.date === day);
  }

  function openCreateDrawer(day?: number) {
    setDrawerMode("create");
    setFormTitle("");
    setFormDesc("");
    setFormDate(day ? `2025-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}` : "");
    setFormEndDate("");
    setFormStartTime("09:00");
    setFormEndTime("10:00");
    setFormLocation("");
    setFormColor("blue");
    setFormAllDay(false);
    setFormAddTime(false);
    setEditingEvent(null);
    setDrawerOpen(true);
  }

  function openEditDrawer(event: CalEvent) {
    setDrawerMode("edit");
    setFormTitle(event.title);
    setFormDesc(event.description ?? "");
    setFormDate(`2025-${String(month + 1).padStart(2, "0")}-${String(event.date).padStart(2, "0")}`);
    setFormEndDate("");
    setFormStartTime(event.startTime ? convertTo24(event.startTime) : "09:00");
    setFormEndTime(event.endTime ? convertTo24(event.endTime) : "10:00");
    setFormLocation(event.location ?? "");
    setFormColor(event.color);
    setFormAllDay(event.allDay ?? false);
    setFormAddTime(!event.allDay);
    setEditingEvent(event);
    setReadModalOpen(false);
    setDrawerOpen(true);
  }

  function convertTo24(time12: string): string {
    const [time, ampm] = time12.split(" ");
    const [h, m] = time.split(":").map(Number);
    const hour = ampm === "PM" && h !== 12 ? h + 12 : ampm === "AM" && h === 12 ? 0 : h;
    return `${String(hour).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  }

  function formatTo12(time24: string): string {
    const [h, m] = time24.split(":").map(Number);
    const ampm = h >= 12 ? "PM" : "AM";
    const hour = h % 12 || 12;
    return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    const dayNum = formDate ? parseInt(formDate.split("-")[2]) : 1;
    if (drawerMode === "create") {
      const newEvent: CalEvent = {
        id: nextId,
        title: formTitle,
        date: dayNum,
        description: formDesc || undefined,
        location: formLocation || undefined,
        color: formColor,
        allDay: formAllDay,
        startTime: formAddTime ? formatTo12(formStartTime) : undefined,
        endTime: formAddTime ? formatTo12(formEndTime) : undefined,
      };
      setEvents((prev) => [...prev, newEvent]);
      setNextId((n) => n + 1);
    } else if (editingEvent) {
      setEvents((prev) =>
        prev.map((ev) =>
          ev.id === editingEvent.id
            ? {
                ...ev,
                title: formTitle,
                date: dayNum,
                description: formDesc || undefined,
                location: formLocation || undefined,
                color: formColor,
                allDay: formAllDay,
                startTime: formAddTime ? formatTo12(formStartTime) : undefined,
                endTime: formAddTime ? formatTo12(formEndTime) : undefined,
              }
            : ev
        )
      );
    }
    setDrawerOpen(false);
  }

  function handleDelete() {
    if (readEvent) {
      setEvents((prev) => prev.filter((e) => e.id !== readEvent.id));
      setReadModalOpen(false);
      setDeleteConfirm(false);
      setReadEvent(null);
    }
  }

  function openReadModal(event: CalEvent) {
    setReadEvent(event);
    setReadModalOpen(true);
  }

  // ── Render ───────────────────────────────────────────────────────────

  return (
    <PreviewShell variant="admin" title="Calendar">
      <div className="relative h-full bg-white dark:bg-gray-900">

        {/* ── Top toolbar ─────────────────────────────────────────────── */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
          {/* Left: nav + month label */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevMonth}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <HiChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={nextMonth}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <HiChevronRight className="h-4 w-4" />
            </button>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">
              {MONTH_NAMES[month]} {year}
            </h2>
            <button
              type="button"
              onClick={goToday}
              className="ml-2 rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Today
            </button>
          </div>

          {/* Right: view toggle + new event */}
          <div className="flex items-center gap-2">
            {/* View switcher */}
            <div className="flex rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden">
              {(["month", "week", "day"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setView(v)}
                  className={`px-3 py-1.5 text-sm font-medium capitalize transition-colors ${
                    view === v
                      ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                      : "bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => openCreateDrawer()}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-white"
              style={{ backgroundColor: "#1A56DB" }}
            >
              <HiPlus className="h-4 w-4" />
              New event
            </button>
          </div>
        </div>

        {/* ── Month View ──────────────────────────────────────────────── */}
        {view === "month" && (
          <div className="flex flex-col h-[calc(100%-57px)]">
            {/* Day labels */}
            <div className="grid grid-cols-7 border-b border-gray-200 dark:border-gray-700">
              {DAY_LABELS.map((d) => (
                <div
                  key={d}
                  className="py-2 text-center text-xs font-semibold uppercase text-gray-500 dark:text-gray-400"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="flex-1 grid grid-cols-7" style={{ gridTemplateRows: `repeat(${gridCells.length / 7}, minmax(0, 1fr))` }}>
              {gridCells.map((day, idx) => {
                const isToday =
                  day === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear();
                const dayEvents = day ? eventsForDay(day) : [];

                return (
                  <div
                    key={idx}
                    className={`min-h-[100px] border-b border-r border-gray-100 p-1 dark:border-gray-700/50 ${
                      !day ? "bg-gray-50 dark:bg-gray-800/30" : ""
                    }`}
                  >
                    {day && (
                      <>
                        {/* Day number */}
                        <button
                          type="button"
                          onClick={() => openCreateDrawer(day)}
                          className={`mb-1 flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                            isToday
                              ? "text-white"
                              : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                          }`}
                          style={isToday ? { backgroundColor: "#1A56DB" } : {}}
                        >
                          {day}
                        </button>

                        {/* Events */}
                        <div className="space-y-0.5">
                          {dayEvents.slice(0, 3).map((ev) => (
                            <EventPill
                              key={ev.id}
                              event={ev}
                              onClick={() => openReadModal(ev)}
                            />
                          ))}
                          {dayEvents.length > 3 && (
                            <button
                              type="button"
                              className="w-full text-left px-1 text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                              +{dayEvents.length - 3} more
                            </button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Week View ───────────────────────────────────────────────── */}
        {view === "week" && (
          <div className="flex flex-col h-[calc(100%-57px)] overflow-hidden">
            {/* Week nav */}
            <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-2 dark:border-gray-700">
              <button
                onClick={() => setWeekOffset((o) => o - 1)}
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                <HiChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setWeekOffset((o) => o + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                <HiChevronRight className="h-3.5 w-3.5" />
              </button>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {weekDays[0].toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                {" – "}
                {weekDays[6].toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </span>
            </div>

            <div className="flex flex-1 overflow-auto">
              {/* Time gutter */}
              <div className="w-14 shrink-0 border-r border-gray-200 dark:border-gray-700">
                <div className="h-10 border-b border-gray-200 dark:border-gray-700" />
                {HOURS.map((h) => (
                  <div key={h} className="relative h-14 border-b border-gray-100 dark:border-gray-700/50">
                    <span className="absolute -top-2.5 right-2 text-xs text-gray-400 dark:text-gray-500">
                      {h === 0 ? "" : h < 12 ? `${h}am` : h === 12 ? "12pm" : `${h - 12}pm`}
                    </span>
                  </div>
                ))}
              </div>

              {/* Day columns */}
              {weekDays.map((d, i) => {
                const dayNum = d.getDate();
                const isThisMonth = d.getMonth() === month && d.getFullYear() === year;
                const isTodayCol =
                  d.getDate() === today.getDate() &&
                  d.getMonth() === today.getMonth() &&
                  d.getFullYear() === today.getFullYear();
                const dayEvents = isThisMonth ? eventsForDay(dayNum) : [];
                return (
                  <div key={i} className="flex-1 min-w-0 border-r border-gray-200 dark:border-gray-700">
                    {/* Header */}
                    <div
                      className={`flex h-10 items-center justify-center gap-1.5 border-b border-gray-200 dark:border-gray-700 ${
                        isTodayCol ? "bg-blue-50 dark:bg-blue-900/20" : ""
                      }`}
                    >
                      <span className="text-xs font-medium uppercase text-gray-400 dark:text-gray-500">
                        {DAY_LABELS[d.getDay()]}
                      </span>
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-semibold ${
                          isTodayCol
                            ? "text-white"
                            : "text-gray-900 dark:text-white"
                        }`}
                        style={isTodayCol ? { backgroundColor: "#1A56DB" } : {}}
                      >
                        {d.getDate()}
                      </span>
                    </div>

                    {/* Hour rows */}
                    <div className="relative">
                      {HOURS.map((h) => (
                        <div
                          key={h}
                          className={`h-14 border-b border-gray-100 dark:border-gray-700/50 ${
                            isTodayCol ? "bg-blue-50/30 dark:bg-blue-900/10" : ""
                          }`}
                        />
                      ))}

                      {/* Event pills positioned in grid */}
                      {dayEvents.map((ev) => {
                        if (ev.allDay || !ev.startTime) return null;
                        const [h, m] = ev.startTime.replace(" AM", "").replace(" PM", "").split(":").map(Number);
                        const isPM = ev.startTime.includes("PM") && h !== 12;
                        const hour24 = isPM ? h + 12 : ev.startTime.includes("AM") && h === 12 ? 0 : h;
                        const topPx = hour24 * 56 + (m / 60) * 56;
                        return (
                          <button
                            key={ev.id}
                            type="button"
                            onClick={() => openReadModal(ev)}
                            className={`absolute left-0.5 right-0.5 rounded px-1 py-0.5 text-xs font-medium text-left ${eventBg[ev.color]}`}
                            style={{ top: `${topPx}px`, minHeight: "48px" }}
                          >
                            <div className="font-semibold truncate">{ev.title}</div>
                            <div className="opacity-75">{ev.startTime}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Day View ────────────────────────────────────────────────── */}
        {view === "day" && (
          <div className="flex flex-col h-[calc(100%-57px)] overflow-hidden">
            {/* Day nav */}
            <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-2 dark:border-gray-700">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {today.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>

            <div className="flex flex-1 overflow-auto">
              {/* Time gutter */}
              <div className="w-16 shrink-0 border-r border-gray-200 dark:border-gray-700">
                {HOURS.map((h) => (
                  <div key={h} className="relative h-16 border-b border-gray-100 dark:border-gray-700/50">
                    <span className="absolute -top-2.5 right-2 text-xs text-gray-400 dark:text-gray-500">
                      {h === 0 ? "" : h < 12 ? `${h}:00 AM` : h === 12 ? "12:00 PM" : `${h - 12}:00 PM`}
                    </span>
                  </div>
                ))}
              </div>

              {/* Day column */}
              <div className="flex-1 relative">
                {HOURS.map((h) => (
                  <div key={h} className="h-16 border-b border-gray-100 dark:border-gray-700/50" />
                ))}
                {eventsForDay(today.getDate()).map((ev) => {
                  if (ev.allDay || !ev.startTime) return null;
                  const [h, m] = ev.startTime.replace(" AM", "").replace(" PM", "").split(":").map(Number);
                  const isPM = ev.startTime.includes("PM") && h !== 12;
                  const hour24 = isPM ? h + 12 : ev.startTime.includes("AM") && h === 12 ? 0 : h;
                  const topPx = hour24 * 64 + (m / 60) * 64;
                  return (
                    <button
                      key={ev.id}
                      type="button"
                      onClick={() => openReadModal(ev)}
                      className={`absolute left-2 right-4 rounded-lg px-3 py-2 text-left ${eventBg[ev.color]}`}
                      style={{ top: `${topPx}px`, minHeight: "56px" }}
                    >
                      <div className="font-semibold text-sm">{ev.title}</div>
                      <div className="text-xs opacity-75">{ev.startTime} – {ev.endTime}</div>
                      {ev.location && (
                        <div className="mt-0.5 flex items-center gap-1 text-xs opacity-60">
                          <HiLocationMarker className="h-3 w-3" />
                          {ev.location}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── Create / Edit Drawer ──────────────────────────────────────── */}
        <div
          className={`fixed right-0 top-0 z-40 h-screen w-80 overflow-y-auto bg-white p-4 shadow-xl transition-transform duration-300 dark:bg-gray-800 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!drawerOpen}
        >
          <div className="mb-6 flex items-center justify-between">
            <h5 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              {drawerMode === "create" ? "New Event" : "Update Event"}
            </h5>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <HiX className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className="space-y-4">
              {/* Title */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="Add title here"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                />
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Description
                </label>
                <textarea
                  rows={4}
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                  placeholder="Enter event description here"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                />
              </div>

              {/* Start date */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Start date
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiCalendar className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="date"
                    required
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              {/* End date */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  End date
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiCalendar className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="date"
                    value={formEndDate}
                    onChange={(e) => setFormEndDate(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              {/* All day toggle */}
              <div className="flex items-center gap-2">
                <input
                  id="allday-cb"
                  type="checkbox"
                  checked={formAllDay}
                  onChange={(e) => {
                    setFormAllDay(e.target.checked);
                    if (e.target.checked) setFormAddTime(false);
                  }}
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                />
                <label htmlFor="allday-cb" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  All day
                </label>
              </div>

              {/* Add time toggle */}
              {!formAllDay && (
                <div>
                  <div className="flex items-center gap-2">
                    <input
                      id="addtime-cb"
                      type="checkbox"
                      checked={formAddTime}
                      onChange={(e) => setFormAddTime(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                    />
                    <label htmlFor="addtime-cb" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Add time
                    </label>
                  </div>
                  {formAddTime && (
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                          Start time
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <HiClock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          </div>
                          <input
                            type="time"
                            value={formStartTime}
                            onChange={(e) => setFormStartTime(e.target.value)}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                          End time
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <HiClock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          </div>
                          <input
                            type="time"
                            value={formEndTime}
                            onChange={(e) => setFormEndTime(e.target.value)}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Location
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiLocationMarker className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={formLocation}
                    onChange={(e) => setFormLocation(e.target.value)}
                    placeholder="Enter location"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Tag color */}
              <div>
                <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag Color</div>
                <ColorPicker value={formColor} onChange={setFormColor} />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
              <button
                type="submit"
                className="flex-1 rounded-lg py-2.5 text-sm font-medium text-white"
                style={{ backgroundColor: "#1A56DB" }}
              >
                {drawerMode === "create" ? "Add event" : "Update event"}
              </button>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="flex-1 rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Drawer backdrop */}
        {drawerOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/30"
            onClick={() => setDrawerOpen(false)}
          />
        )}

        {/* ── Read Event Modal ─────────────────────────────────────────── */}
        {readModalOpen && readEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => { setReadModalOpen(false); setDeleteConfirm(false); }}
            />
            <div className="relative w-full max-w-2xl rounded-lg bg-white shadow-xl dark:bg-gray-800">
              {/* Modal header */}
              <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full ${dotColor[readEvent.color]}`} />
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {readEvent.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => { setReadModalOpen(false); setDeleteConfirm(false); }}
                  className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <HiX className="h-5 w-5" />
                </button>
              </div>

              {/* Modal body */}
              <div className="grid gap-4 p-5 sm:grid-cols-2">
                {/* Left: details */}
                <dl className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <HiCalendar className="h-4 w-4 text-gray-400 shrink-0" />
                    <span>
                      May {readEvent.date}, 2025
                      {readEvent.allDay ? " · All day" : ""}
                    </span>
                  </div>
                  {(readEvent.startTime || readEvent.endTime) && (
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <HiClock className="h-4 w-4 text-gray-400 shrink-0" />
                      <span>{readEvent.startTime} – {readEvent.endTime}</span>
                    </div>
                  )}
                  {readEvent.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <HiLocationMarker className="h-4 w-4 text-gray-400 shrink-0" />
                      <span>{readEvent.location}</span>
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">Participants</p>
                    <div className="flex -space-x-2">
                      {["KJ", "BG", "HL"].map((initials, i) => (
                        <div
                          key={i}
                          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-50 text-xs font-medium text-white dark:border-gray-700"
                          style={{ backgroundColor: i === 0 ? "#1A56DB" : i === 1 ? "#7C3AED" : "#0694A2" }}
                        >
                          {initials}
                        </div>
                      ))}
                      <button className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-50 bg-gray-600 text-xs font-medium text-white dark:border-gray-700">
                        +9
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Online</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Google Meet</p>
                  </div>
                </dl>

                {/* Right: description */}
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">Details</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {readEvent.description ?? "No description."}
                  </p>
                </div>
              </div>

              {/* Modal footer */}
              <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openEditDrawer(readEvent)}
                    className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white"
                    style={{ backgroundColor: "#1A56DB" }}
                  >
                    <HiPencil className="h-4 w-4" />
                    Edit
                  </button>
                  <button
                    type="button"
                    className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Preview
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setDeleteConfirm(true)}
                  className="flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                >
                  <HiTrash className="h-4 w-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Delete Confirm Modal ─────────────────────────────────────── */}
        {deleteConfirm && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setDeleteConfirm(false)}
            />
            <div className="relative w-full max-w-md rounded-lg bg-white p-6 text-center shadow-xl dark:bg-gray-800">
              <button
                type="button"
                onClick={() => setDeleteConfirm(false)}
                className="absolute right-2.5 top-2.5 rounded-lg p-1.5 text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <HiX className="h-5 w-5" />
              </button>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                <HiTrash className="h-6 w-6 text-red-500 dark:text-red-400" />
              </div>
              <p className="mb-5 text-gray-500 dark:text-gray-300">
                Are you sure you want to delete <strong className="text-gray-900 dark:text-white">&ldquo;{readEvent?.title}&rdquo;</strong>?
              </p>
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setDeleteConfirm(false)}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  No, cancel
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                >
                  Yes, I&rsquo;m sure
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PreviewShell>
  );
}
