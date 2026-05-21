"use client";

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend } from "recharts";

const ACCENT = "#dc2626";

const procedureVolume = [
  { week: "Wk 1", Cath: 18, EP: 9, Echo: 34, "Stress Test": 22, Valve: 4 },
  { week: "Wk 2", Cath: 21, EP: 11, Echo: 38, "Stress Test": 26, Valve: 6 },
  { week: "Wk 3", Cath: 16, EP: 8, Echo: 31, "Stress Test": 20, Valve: 3 },
  { week: "Wk 4", Cath: 24, EP: 13, Echo: 41, "Stress Test": 29, Valve: 7 },
  { week: "Wk 5", Cath: 19, EP: 10, Echo: 36, "Stress Test": 24, Valve: 5 },
  { week: "Wk 6", Cath: 22, EP: 12, Echo: 39, "Stress Test": 27, Valve: 6 },
];

const readmissionTrend = [
  { month: "Jan", rate: 10.1 },
  { month: "Feb", rate: 9.6 },
  { month: "Mar", rate: 9.2 },
  { month: "Apr", rate: 8.8 },
  { month: "May", rate: 8.5 },
  { month: "Jun", rate: 8.2 },
];

const schedule = [
  { time: "7:30 AM", procedure: "Coronary Angiogram",   provider: "Dr. Patel, V.",    room: "Cath Lab 1", status: "Confirmed" },
  { time: "8:15 AM", procedure: "TAVR",                  provider: "Dr. Osei, A.",     room: "Hybrid OR",  status: "Confirmed" },
  { time: "9:00 AM", procedure: "EP Ablation — AFib",    provider: "Dr. Chen, L.",     room: "EP Lab 2",   status: "Confirmed" },
  { time: "10:30 AM", procedure: "Left Heart Cath",      provider: "Dr. Hernandez, R.", room: "Cath Lab 2", status: "Pending" },
  { time: "12:00 PM", procedure: "Stress Echo",          provider: "Dr. Williams, T.", room: "Echo Lab",   status: "Confirmed" },
  { time: "1:30 PM", procedure: "ICD Implant",           provider: "Dr. Torres, M.",   room: "EP Lab 1",   status: "Pending" },
];

const statusColor: Record<string, string> = {
  Confirmed: "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20",
  Pending:   "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20",
};

const kpis = [
  { label: "Cardiac Procedures Today",  value: "12",   sub: "6 completed · 6 remaining" },
  { label: "Cath Lab Utilization",       value: "78%",  sub: "Target ≥ 75%" },
  { label: "30-Day Readmission Rate",    value: "8.2%", sub: "↓ National avg 21%" },
  { label: "CHF Patients Active",        value: "47",   sub: "3 high-risk flags" },
];

export default function HeartCareDashboardPage() {
  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-900">
      <div className="p-6 space-y-6 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Scripps Clinic · Cardiovascular Institute</p>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Clinical Dashboard</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">All cardiac service locations · {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
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
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Procedure Volume by Week</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">All cardiac procedure types · last 6 weeks</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={procedureVolume} barSize={8}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="week" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} width={30} />
                <Tooltip />
                <Legend iconSize={8} iconType="circle" />
                <Bar dataKey="Cath"        fill={ACCENT}    radius={[2,2,0,0]} />
                <Bar dataKey="EP"          fill="#f87171"   radius={[2,2,0,0]} />
                <Bar dataKey="Echo"        fill="#fca5a5"   radius={[2,2,0,0]} />
                <Bar dataKey="Stress Test" fill="#fecaca"   radius={[2,2,0,0]} />
                <Bar dataKey="Valve"       fill="#94a3b8"   radius={[2,2,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">30-Day Readmission Trend</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">% vs Scripps target 10%</p>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={readmissionTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} width={30} domain={[0, 15]} />
                <Tooltip formatter={(v) => `${v}%`} />
                <ReferenceLine y={10} stroke="#94a3b8" strokeDasharray="4 4" label={{ value: "Target 10%", position: "insideTopRight", fontSize: 10, fill: "#94a3b8" }} />
                <Line type="monotone" dataKey="rate" stroke={ACCENT} strokeWidth={2.5} dot={{ fill: ACCENT, r: 3 }} name="Readmission %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tomorrow's schedule */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
          <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Tomorrow's Procedure Schedule</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <tr>
                  {["Time", "Procedure", "Provider", "Room", "Status"].map((h) => (
                    <th key={h} className="px-5 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {schedule.map((s) => (
                  <tr key={s.time} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-5 py-3 font-mono text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap">{s.time}</td>
                    <td className="px-5 py-3 text-gray-700 dark:text-gray-300">{s.procedure}</td>
                    <td className="px-5 py-3 text-gray-600 dark:text-gray-400">{s.provider}</td>
                    <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{s.room}</td>
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
  );
}
