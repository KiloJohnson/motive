"use client";

import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const ACCENT = "#005EB8";

const hourlyVolume = [
  { time: "8am", patients: 18 }, { time: "9am", patients: 34 },
  { time: "10am", patients: 42 }, { time: "11am", patients: 38 },
  { time: "12pm", patients: 22 }, { time: "1pm", patients: 29 },
  { time: "2pm", patients: 41 }, { time: "3pm", patients: 37 },
  { time: "4pm", patients: 28 }, { time: "5pm", patients: 14 },
];

const appointmentTypes = [
  { name: "Well Visit", value: 31, color: "#005EB8" },
  { name: "Sick Visit", value: 28, color: "#60a5fa" },
  { name: "Follow-up", value: 24, color: "#93c5fd" },
  { name: "Annual Physical", value: 17, color: "#bfdbfe" },
];

const providers = [
  { name: "Dr. Chen, M.",      patients: 28, available: 30, utilization: 93 },
  { name: "Dr. Patel, R.",     patients: 26, available: 28, utilization: 93 },
  { name: "Dr. Williams, S.",  patients: 24, available: 28, utilization: 86 },
  { name: "Dr. Torres, E.",    patients: 22, available: 26, utilization: 85 },
  { name: "Dr. Kim, J.",       patients: 20, available: 24, utilization: 83 },
];

const kpis = [
  { label: "Patients Today",        value: "247",  sub: "↑ 12 vs yesterday",     accent: false },
  { label: "Scheduled Tomorrow",    value: "312",  sub: "94% fill rate",          accent: false },
  { label: "Avg Wait Time",         value: "18 min", sub: "↓ 3 min vs last week", accent: false },
  { label: "No-show Rate",          value: "6.2%", sub: "Target < 8%",            accent: false },
];

export default function PrimaryCareDashboardPage() {
  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-900">
      <div className="p-6 space-y-6 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Scripps Clinic · Primary Care</p>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Clinical Dashboard</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">All Scripps Clinic locations · Today, {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 font-medium bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />Live
            </span>
          </div>
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
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Patient Volume by Hour</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">All locations combined · today</p>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={hourlyVolume}>
                <defs>
                  <linearGradient id="pcGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={ACCENT} stopOpacity={0.15} />
                    <stop offset="95%" stopColor={ACCENT} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} width={30} />
                <Tooltip />
                <Area type="monotone" dataKey="patients" stroke={ACCENT} strokeWidth={2} fill="url(#pcGrad)" name="Patients" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Appointment Types</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">Today's mix</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={appointmentTypes} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                  {appointmentTypes.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Legend iconSize={8} iconType="circle" />
                <Tooltip formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Provider utilization */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
          <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Provider Utilization — Today</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <tr>
                  {["Provider", "Patients Seen", "Capacity", "Utilization"].map((h) => (
                    <th key={h} className="px-5 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {providers.map((p) => (
                  <tr key={p.name} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-5 py-3 font-medium text-gray-900 dark:text-white">{p.name}</td>
                    <td className="px-5 py-3 text-gray-600 dark:text-gray-300">{p.patients}</td>
                    <td className="px-5 py-3 text-gray-600 dark:text-gray-300">{p.available}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${p.utilization}%`, backgroundColor: ACCENT }} />
                        </div>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 w-10 text-right">{p.utilization}%</span>
                      </div>
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
