"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const ACCENT = "#16a34a";

const waitByHour = [
  { hour: "8am",  wait: 12 }, { hour: "9am",  wait: 18 }, { hour: "10am", wait: 26 },
  { hour: "11am", wait: 41 }, { hour: "12pm", wait: 52 }, { hour: "1pm",  wait: 48 },
  { hour: "2pm",  wait: 35 }, { hour: "3pm",  wait: 29 }, { hour: "4pm",  wait: 38 },
  { hour: "5pm",  wait: 44 }, { hour: "6pm",  wait: 31 }, { hour: "7pm",  wait: 22 },
];

const checkInMethod = [
  { name: "Walk-in",         value: 58, color: "#16a34a" },
  { name: "Online Pre-check",value: 27, color: "#4ade80" },
  { name: "Kiosk",           value: 15, color: "#bbf7d0" },
];

const queue = [
  { num: "HE-041", wait: 8,  status: "In Room",    chiefComplaint: "Sore throat" },
  { num: "HE-042", wait: 14, status: "In Room",    chiefComplaint: "Ear pain" },
  { num: "HE-043", wait: 19, status: "In Room",    chiefComplaint: "Wrist injury" },
  { num: "HE-044", wait: 22, status: "In Room",    chiefComplaint: "Laceration" },
  { num: "HE-045", wait: 28, status: "Waiting",    chiefComplaint: "Fever / chills" },
  { num: "HE-046", wait: 33, status: "Waiting",    chiefComplaint: "Back pain" },
  { num: "HE-047", wait: 38, status: "Waiting",    chiefComplaint: "Cough / congestion" },
  { num: "HE-048", wait: 44, status: "Completing", chiefComplaint: "Rash" },
];

function waitColor(min: number) {
  if (min < 20) return { bg: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800", badge: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300", dot: "bg-green-500" };
  if (min < 40) return { bg: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800", badge: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300", dot: "bg-amber-500" };
  return { bg: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800", badge: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300", dot: "bg-red-500" };
}

export default function HealthExpressDashboardPage() {
  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-900">
      <div className="p-6 space-y-6 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Scripps HealthExpress · Walk-In Care</p>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Live Operations Dashboard</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">La Jolla Village Dr. location · {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 font-medium bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />Live
          </span>
        </div>

        {/* KPIs — large current wait time first */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {/* Current wait — oversized, amber threshold */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border-2 border-amber-200 dark:border-amber-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Current Wait Time</p>
            <p className="text-4xl font-extrabold tracking-tight text-amber-500">38 min</p>
            <p className="text-xs text-amber-500 mt-1 font-medium">⚠ Elevated — target &lt; 30 min</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Patients Waiting</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">7</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">In queue</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Currently In Room</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">4</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Being seen</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Avg Visit Duration</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">52 min</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">↓ 4 min vs yesterday</p>
          </div>
        </div>

        {/* Visual patient queue */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Live Patient Queue</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Green &lt;20 min · Yellow 20–40 min · Red &gt;40 min</p>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500">Updated just now</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-3">
            {queue.map((p) => {
              const c = waitColor(p.wait);
              return (
                <div key={p.num} className={`rounded-lg border p-3 flex flex-col gap-2 ${c.bg}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-gray-700 dark:text-gray-300">{p.num}</span>
                    <span className={`h-2 w-2 rounded-full ${c.dot}`} />
                  </div>
                  <p className="text-lg font-extrabold text-gray-900 dark:text-white leading-none">{p.wait}<span className="text-xs font-normal text-gray-500 dark:text-gray-400 ml-0.5">min</span></p>
                  <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${c.badge}`}>{p.status}</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{p.chiefComplaint}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Wait Time by Hour of Day</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">Today's trend — 30 min target shown as dashed line</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={waitByHour}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} width={30} />
                <Tooltip formatter={(v) => `${v} min`} />
                <Line type="monotone" dataKey="wait" stroke={ACCENT} strokeWidth={2.5} dot={{ fill: ACCENT, r: 3 }} name="Wait time" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Check-In Method</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">Today's arrivals</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={checkInMethod} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                  {checkInMethod.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Legend iconSize={8} iconType="circle" />
                <Tooltip formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
