"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { DashboardShell } from "../DashboardShell";

const ACCENT = "#475569";

const monthlyVolume = [
  { month: "Jan", "Total Knee": 28, "Total Hip": 19, Shoulder: 12, Spine: 16, "Sports Med": 22 },
  { month: "Feb", "Total Knee": 31, "Total Hip": 22, Shoulder: 14, Spine: 18, "Sports Med": 25 },
  { month: "Mar", "Total Knee": 26, "Total Hip": 17, Shoulder: 11, Spine: 14, "Sports Med": 20 },
  { month: "Apr", "Total Knee": 34, "Total Hip": 24, Shoulder: 16, Spine: 21, "Sports Med": 28 },
  { month: "May", "Total Knee": 29, "Total Hip": 20, Shoulder: 13, Spine: 17, "Sports Med": 23 },
  { month: "Jun", "Total Knee": 33, "Total Hip": 23, Shoulder: 15, Spine: 19, "Sports Med": 26 },
];

const surgeryTypes = [
  { name: "Total Knee",  value: 35, color: "#475569" },
  { name: "Total Hip",   value: 24, color: "#64748b" },
  { name: "Sports Med",  value: 20, color: "#94a3b8" },
  { name: "Spine",       value: 13, color: "#cbd5e1" },
  { name: "Shoulder",    value: 8,  color: "#e2e8f0" },
];

const orSchedule = [
  { time: "7:00 AM", procedure: "Total Knee Replacement — L",  surgeon: "Dr. Park, J.",     room: "OR 4", duration: "90 min",  status: "In Progress" },
  { time: "9:00 AM", procedure: "Total Hip Replacement — R",   surgeon: "Dr. Vasquez, C.",  room: "OR 5", duration: "75 min",  status: "In Progress" },
  { time: "10:30 AM", procedure: "Rotator Cuff Repair",        surgeon: "Dr. Kim, S.",      room: "OR 6", duration: "60 min",  status: "Prep" },
  { time: "11:00 AM", procedure: "L4–L5 Microdiscectomy",      surgeon: "Dr. Osei, R.",     room: "OR 3", duration: "120 min", status: "Scheduled" },
  { time: "1:30 PM", procedure: "ACL Reconstruction",          surgeon: "Dr. Nguyen, T.",   room: "OR 7", duration: "90 min",  status: "Scheduled" },
  { time: "3:00 PM", procedure: "Total Knee Replacement — R",  surgeon: "Dr. Park, J.",     room: "OR 4", duration: "90 min",  status: "Scheduled" },
];

const statusColor: Record<string, string> = {
  "In Progress": "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
  "Prep":        "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20",
  "Scheduled":   "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700",
};

const kpis = [
  { label: "Surgeries Today",              value: "8",   sub: "3 in progress · 5 remaining" },
  { label: "OR Utilization",               value: "82%", sub: "↑ 4pts vs last month" },
  { label: "Post-op Follow-up Compliance", value: "87%", sub: "Target ≥ 85%" },
  { label: "PT Referral Conversion",       value: "73%", sub: "↑ 5pts vs Q1" },
];

export default function OrthoDashboardPage() {
  return (
    <DashboardShell>
    <div className="min-h-full bg-gray-50 dark:bg-gray-900">
      <div className="p-6 space-y-6 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Scripps Clinic · Orthopedics & Sports Medicine</p>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Clinical Dashboard</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">All Scripps orthopedic facilities · {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 font-medium bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />Live
          </span>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <div key={k.label} className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{k.label}</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{k.value}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{k.sub}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Monthly Surgical Volume</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">Procedures by type · last 6 months</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={monthlyVolume} barSize={7}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} width={30} />
                <Tooltip />
                <Legend iconSize={8} iconType="circle" />
                <Bar dataKey="Total Knee" fill="#475569" radius={[2,2,0,0]} />
                <Bar dataKey="Total Hip"  fill="#64748b" radius={[2,2,0,0]} />
                <Bar dataKey="Shoulder"   fill="#94a3b8" radius={[2,2,0,0]} />
                <Bar dataKey="Spine"      fill="#b0bec5" radius={[2,2,0,0]} />
                <Bar dataKey="Sports Med" fill="#3b82f6" radius={[2,2,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Surgery Type Mix</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">YTD proportion by procedure</p>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={surgeryTypes} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                  {surgeryTypes.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Legend iconSize={8} iconType="circle" />
                <Tooltip formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* OR schedule */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
          <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Today's OR Schedule</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <tr>
                  {["Time", "Procedure", "Surgeon", "OR Room", "Est. Duration", "Status"].map((h) => (
                    <th key={h} className="px-5 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {orSchedule.map((s) => (
                  <tr key={s.time + s.procedure} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-5 py-3 font-mono text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap">{s.time}</td>
                    <td className="px-5 py-3 text-gray-700 dark:text-gray-300">{s.procedure}</td>
                    <td className="px-5 py-3 text-gray-600 dark:text-gray-400">{s.surgeon}</td>
                    <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{s.room}</td>
                    <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{s.duration}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${statusColor[s.status]}`}>{s.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
    </DashboardShell>
  );
}
