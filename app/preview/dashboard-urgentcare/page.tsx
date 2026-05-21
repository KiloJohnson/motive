"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { DashboardShell } from "../DashboardShell";

const ACCENT = "#d97706";

const hourlyArrivals = [
  { hour: "12a", n: 3 }, { hour: "1a",  n: 2 }, { hour: "2a",  n: 1 }, { hour: "3a",  n: 1 },
  { hour: "4a",  n: 2 }, { hour: "5a",  n: 3 }, { hour: "6a",  n: 6 }, { hour: "7a",  n: 9 },
  { hour: "8a",  n: 14 }, { hour: "9a", n: 18 }, { hour: "10a", n: 22 }, { hour: "11a", n: 19 },
  { hour: "12p", n: 21 }, { hour: "1p", n: 23 }, { hour: "2p",  n: 20 }, { hour: "3p",  n: 17 },
  { hour: "4p",  n: 15 }, { hour: "5p", n: 18 }, { hour: "6p",  n: 20 }, { hour: "7p",  n: 16 },
  { hour: "8p",  n: 12 }, { hour: "9p", n: 9 }, { hour: "10p", n: 7 },  { hour: "11p", n: 5 },
];

const esiBreakdown = [
  { level: "ESI 1 · Critical",    n: 3,  color: "#7f1d1d" },
  { level: "ESI 2 · Emergent",    n: 18, color: "#dc2626" },
  { level: "ESI 3 · Urgent",      n: 61, color: ACCENT },
  { level: "ESI 4 · Less Urgent", n: 52, color: "#fcd34d" },
  { level: "ESI 5 · Non-Urgent",  n: 17, color: "#d1d5db" },
];

const disposition = [
  { name: "Discharged",  value: 68, color: "#16a34a" },
  { name: "Admitted",    value: 24, color: "#d97706" },
  { name: "Transferred", value: 8,  color: "#94a3b8" },
];

const patients = [
  { id: "UC-2241", acuity: "ESI 2", complaint: "Chest pain", door: "09:12", status: "In Treatment" },
  { id: "UC-2242", acuity: "ESI 3", complaint: "Abdominal pain", door: "09:34", status: "In Treatment" },
  { id: "UC-2243", acuity: "ESI 3", complaint: "Laceration — arm", door: "09:51", status: "Awaiting Suture" },
  { id: "UC-2244", acuity: "ESI 4", complaint: "Sprained ankle", door: "10:03", status: "Awaiting X-Ray" },
  { id: "UC-2245", acuity: "ESI 2", complaint: "Difficulty breathing", door: "10:17", status: "In Treatment" },
  { id: "UC-2246", acuity: "ESI 3", complaint: "Headache / nausea", door: "10:28", status: "Triage" },
  { id: "UC-2247", acuity: "ESI 4", complaint: "UTI symptoms", door: "10:44", status: "Awaiting Lab" },
  { id: "UC-2248", acuity: "ESI 5", complaint: "Prescription refill", door: "10:52", status: "Triage" },
];

const acuityColor: Record<string, string> = {
  "ESI 1": "text-red-900 dark:text-red-300 bg-red-100 dark:bg-red-900/40",
  "ESI 2": "text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20",
  "ESI 3": "text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20",
  "ESI 4": "text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20",
  "ESI 5": "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700",
};

const kpis = [
  { label: "Current Census",       value: "23/30", sub: "77% bed capacity", alert: false },
  { label: "Door-to-Doctor",       value: "18 min", sub: "↓ Target ≤ 20 min", alert: false },
  { label: "LWBS Rate",            value: "2.1%",  sub: "⚠ Scripps target < 2%", alert: true },
  { label: "Divert Status",        value: "OPEN",  sub: "Accepting all patients", alert: false, green: true },
];

export default function UrgentCareDashboardPage() {
  return (
    <DashboardShell>
    <div className="min-h-full bg-gray-50 dark:bg-gray-900">
      <div className="p-6 space-y-6 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Scripps Mercy Hospital · Urgent Care</p>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Clinical Dashboard</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Hillcrest location · {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 font-medium bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />Live
          </span>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <div key={k.label} className={`bg-white dark:bg-gray-800 rounded-xl p-5 border ${k.alert ? "border-amber-300 dark:border-amber-700" : "border-gray-100 dark:border-gray-700"}`}>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{k.label}</p>
              <p className={`text-3xl font-bold tracking-tight ${k.green ? "text-green-600 dark:text-green-400" : k.alert ? "text-amber-600 dark:text-amber-400" : "text-gray-900 dark:text-white"}`}>{k.value}</p>
              <p className={`text-xs mt-1 ${k.alert ? "text-amber-500 font-medium" : "text-gray-400 dark:text-gray-500"}`}>{k.sub}</p>
            </div>
          ))}
        </div>

        {/* Charts — 3 across */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-1 bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Hourly Arrivals — 24hr</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">Today's patient flow</p>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={hourlyArrivals} barSize={6}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
                <XAxis dataKey="hour" tick={{ fontSize: 9 }} interval={3} />
                <YAxis tick={{ fontSize: 11 }} width={25} />
                <Tooltip />
                <Bar dataKey="n" fill={ACCENT} radius={[2,2,0,0]} name="Patients" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="xl:col-span-1 bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">ESI Acuity Breakdown</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">Today's patient acuity mix</p>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={esiBreakdown} layout="vertical" barSize={12}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 10 }} />
                <YAxis type="category" dataKey="level" tick={{ fontSize: 9 }} width={95} />
                <Tooltip />
                {esiBreakdown.map((e) => (
                  <Bar key={e.level} dataKey="n" fill={e.color} radius={[0,2,2,0]} name="Patients" />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Disposition</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">Today · all patients cleared</p>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={disposition} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value">
                  {disposition.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Legend iconSize={8} iconType="circle" />
                <Tooltip formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Current patients */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
          <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Current Patients — Anonymized</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <tr>
                  {["Patient #", "Acuity", "Chief Complaint", "Door Time", "Status"].map((h) => (
                    <th key={h} className="px-5 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {patients.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-5 py-3 font-mono text-xs font-medium text-gray-900 dark:text-white">{p.id}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${acuityColor[p.acuity]}`}>{p.acuity}</span>
                    </td>
                    <td className="px-5 py-3 text-gray-700 dark:text-gray-300">{p.complaint}</td>
                    <td className="px-5 py-3 font-mono text-xs text-gray-500 dark:text-gray-400">{p.door}</td>
                    <td className="px-5 py-3 text-xs text-gray-600 dark:text-gray-400">{p.status}</td>
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
