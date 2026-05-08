"use client";

import { useState } from "react";

type Status = "Confirmed" | "Pending" | "Cancelled" | "Completed";

type Appointment = {
  id: string;
  patient: string;
  provider: string;
  department: string;
  date: string;
  time: string;
  type: string;
  status: Status;
};

const appointments: Appointment[] = [
  { id: "APT-3841", patient: "Maria Garcia",    provider: "Dr. Sarah Chen",     department: "Cardiology",       date: "May 12, 2026", time: "9:00 AM",  type: "Follow-up",   status: "Confirmed" },
  { id: "APT-3842", patient: "James Whitmore",  provider: "Dr. Robert Park",    department: "Orthopedics",      date: "May 12, 2026", time: "10:30 AM", type: "New Patient", status: "Pending" },
  { id: "APT-3843", patient: "Linda Nguyen",    provider: "Dr. Amanda Torres",  department: "Oncology",         date: "May 12, 2026", time: "11:00 AM", type: "Follow-up",   status: "Confirmed" },
  { id: "APT-3844", patient: "David Kim",       provider: "Dr. Michael Ross",   department: "Neurology",        date: "May 13, 2026", time: "8:30 AM",  type: "Consultation",status: "Confirmed" },
  { id: "APT-3845", patient: "Susan Patel",     provider: "Dr. Sarah Chen",     department: "Cardiology",       date: "May 13, 2026", time: "2:00 PM",  type: "New Patient", status: "Cancelled" },
  { id: "APT-3846", patient: "Thomas Reyes",    provider: "Dr. Lisa Huang",     department: "Dermatology",      date: "May 13, 2026", time: "3:30 PM",  type: "Follow-up",   status: "Confirmed" },
  { id: "APT-3847", patient: "Angela Foster",   provider: "Dr. Kevin O'Brien",  department: "Primary Care",     date: "May 14, 2026", time: "9:00 AM",  type: "Annual Exam", status: "Pending" },
  { id: "APT-3848", patient: "Richard Morales", provider: "Dr. Robert Park",    department: "Orthopedics",      date: "May 14, 2026", time: "11:30 AM", type: "Follow-up",   status: "Completed" },
  { id: "APT-3849", patient: "Patricia Okafor", provider: "Dr. Amanda Torres",  department: "Oncology",         date: "May 14, 2026", time: "1:00 PM",  type: "Consultation",status: "Confirmed" },
  { id: "APT-3850", patient: "John Stavros",    provider: "Dr. Lisa Huang",     department: "Dermatology",      date: "May 15, 2026", time: "10:00 AM", type: "New Patient", status: "Pending" },
];

const statusStyles: Record<Status, string> = {
  Confirmed:  "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Pending:    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  Cancelled:  "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  Completed:  "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
};

function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status]}`}>
      {status}
    </span>
  );
}

export default function TablesPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<Status | "All">("All");

  const filtered = appointments.filter((a) => {
    const matchesQuery =
      query === "" ||
      a.patient.toLowerCase().includes(query.toLowerCase()) ||
      a.provider.toLowerCase().includes(query.toLowerCase()) ||
      a.department.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = statusFilter === "All" || a.status === statusFilter;
    return matchesQuery && matchesStatus;
  });

  return (
    <div className="min-h-full">

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Data Table</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Sortable, filterable, paginated tables for patient records, provider rosters,
          appointment logs, and admin views. Built on Flowbite&apos;s Table component with Scripps tokens applied.
        </p>
      </section>

      {/* ── Live demo ──────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Live demo</h2>

        {/* Toolbar */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative flex-1 max-w-xs">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search patient, provider, department…"
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 placeholder-gray-400 outline-none focus:ring-2 focus:border-transparent"
              style={{ ["--tw-ring-color" as string]: "var(--motive-primary)" }}
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as Status | "All")}
            className="px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 outline-none"
          >
            {["All", "Confirmed", "Pending", "Cancelled", "Completed"].map((s) => (
              <option key={s} value={s}>{s === "All" ? "All statuses" : s}</option>
            ))}
          </select>

          <div className="ml-auto">
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--motive-primary)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              New appointment
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <tr>
                {["ID", "Patient", "Provider", "Department", "Date / Time", "Type", "Status", ""].map((h, i) => (
                  <th key={i} className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center text-gray-400 py-12 text-sm">
                    No appointments match your search.
                  </td>
                </tr>
              ) : (
                filtered.map((appt) => (
                  <tr key={appt.id} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-gray-400 dark:text-gray-500">{appt.id}</td>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">{appt.patient}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 whitespace-nowrap">{appt.provider}</td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{appt.department}</td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      <span className="block">{appt.date}</span>
                      <span className="text-gray-400 text-xs">{appt.time}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap">{appt.type}</td>
                    <td className="px-4 py-3"><StatusBadge status={appt.status} /></td>
                    <td className="px-4 py-3">
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium text-gray-700 dark:text-gray-300">{filtered.length}</span> of <span className="font-medium text-gray-700 dark:text-gray-300">{appointments.length}</span> appointments
          </p>
          <div className="flex items-center gap-1">
            {["←", "1", "2", "3", "...", "12", "→"].map((p, i) => (
              <button
                key={i}
                className={`px-3 py-1.5 text-sm rounded transition-colors ${
                  p === "1"
                    ? "text-white font-medium"
                    : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                style={p === "1" ? { backgroundColor: "var(--motive-primary)" } : {}}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Variants ───────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Variants</h2>
        <div className="grid grid-cols-3 gap-6 max-w-3xl">
          {[
            { name: "Default", note: "Hoverable rows, bordered container, gray head. Use for most data views." },
            { name: "Striped", note: "Alternating row backgrounds. Add striped prop to Table. Better for dense, long tables." },
            { name: "Compact", note: "Reduced cell padding. Use when vertical density matters more than legibility." },
          ].map((v) => (
            <div key={v.name} className="p-5 border border-gray-100 rounded">
              <h3 className="text-sm font-bold text-gray-900 mb-2">{v.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Usage ──────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Component", note: "Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell — all from flowbite-react." },
            { label: "Status badges", note: "Use semantic color pairs — green/Confirmed, yellow/Pending, red/Cancelled, gray/Completed. Never use color alone to convey status (include the label text for accessibility)." },
            { label: "Empty state", note: "Always handle zero results explicitly. Show a clear message — never an empty table body." },
            { label: "Actions column", note: "Keep action triggers in the rightmost column. Use a kebab menu (⋮) for 3+ actions. Use text links for 1–2." },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-[160px_1fr] gap-8 py-6 border-b border-gray-100 last:border-0">
              <p className="text-sm font-bold text-gray-900">{item.label}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
