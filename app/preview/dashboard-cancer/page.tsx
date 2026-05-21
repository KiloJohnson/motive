"use client";

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const ACCENT = "#0d9488";

const weeklyVolume = [
  { week: "Wk 1", Radiation: 42, Chemo: 38, Immunotherapy: 14, Surgery: 8 },
  { week: "Wk 2", Radiation: 45, Chemo: 41, Immunotherapy: 16, Surgery: 11 },
  { week: "Wk 3", Radiation: 39, Chemo: 36, Immunotherapy: 12, Surgery: 7 },
  { week: "Wk 4", Radiation: 48, Chemo: 44, Immunotherapy: 18, Surgery: 9 },
  { week: "Wk 5", Radiation: 51, Chemo: 47, Immunotherapy: 21, Surgery: 13 },
  { week: "Wk 6", Radiation: 46, Chemo: 43, Immunotherapy: 19, Surgery: 10 },
];

const cancerTypes = [
  { name: "Breast",     value: 28, color: "#0d9488" },
  { name: "Prostate",   value: 21, color: "#2dd4bf" },
  { name: "Colorectal", value: 18, color: "#5eead4" },
  { name: "Lung",       value: 16, color: "#99f6e4" },
  { name: "Other",      value: 17, color: "#ccfbf1" },
];

const tumorBoard = [
  { id: "SC-4821", diagnosis: "Breast Ca, HER2+",   stage: "III-A", physician: "Dr. Nakamura, K.",  date: "Mon, Jun 2" },
  { id: "SC-4836", diagnosis: "NSCLC",               stage: "II-B",  physician: "Dr. Osei, F.",      date: "Mon, Jun 2" },
  { id: "SC-4847", diagnosis: "Colorectal Ca",       stage: "III-C", physician: "Dr. Reyes, A.",     date: "Tue, Jun 3" },
  { id: "SC-4853", diagnosis: "Prostate Ca, castrate-resistant", stage: "IV", physician: "Dr. Singh, P.", date: "Tue, Jun 3" },
  { id: "SC-4861", diagnosis: "Melanoma",            stage: "III-B", physician: "Dr. Tanaka, M.",    date: "Wed, Jun 4" },
];

const kpis = [
  { label: "Active Treatment Patients", value: "284",  sub: "↑ 6 from last week" },
  { label: "New Consults This Week",    value: "18",   sub: "Target: 15–20" },
  { label: "Treatment Compliance",      value: "91%",  sub: "↑ 2pts vs last month" },
  { label: "Clinical Trials Enrolled",  value: "23",   sub: "4 trials active" },
];

export default function CancerCareDashboardPage() {
  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-900">
      <div className="p-6 space-y-6 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Scripps Cancer Center · Oncology</p>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Clinical Dashboard</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">All Scripps Cancer Center locations · {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
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
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Weekly Treatment Volume</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">Treatments delivered by modality · last 6 weeks</p>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={weeklyVolume}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="week" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} width={30} />
                <Tooltip />
                <Legend iconSize={8} iconType="circle" />
                <Line type="monotone" dataKey="Radiation"      stroke="#0d9488" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Chemo"          stroke="#2dd4bf" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Immunotherapy"  stroke="#f59e0b" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Surgery"        stroke="#94a3b8" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Cancer Type Mix</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">Active patients by primary site</p>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={cancerTypes} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                  {cancerTypes.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Legend iconSize={8} iconType="circle" />
                <Tooltip formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tumor board table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
          <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Tumor Board Cases — This Week</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <tr>
                  {["Patient ID", "Diagnosis", "Stage", "Presenting Physician", "Board Date"].map((h) => (
                    <th key={h} className="px-5 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {tumorBoard.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-5 py-3 font-mono text-xs font-medium text-gray-900 dark:text-white">{r.id}</td>
                    <td className="px-5 py-3 text-gray-700 dark:text-gray-300">{r.diagnosis}</td>
                    <td className="px-5 py-3">
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold" style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}>{r.stage}</span>
                    </td>
                    <td className="px-5 py-3 text-gray-600 dark:text-gray-400">{r.physician}</td>
                    <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{r.date}</td>
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
