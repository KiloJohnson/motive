"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Button, Checkbox, Select } from "flowbite-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import { HiArrowUp, HiArrowDown, HiArrowRight, HiDotsVertical } from "react-icons/hi";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const highlightedCountries = new Set([
  "840", // United States
  "124", // Canada
  "250", // France
  "380", // Italy
  "036", // Australia
  "724", // Spain
  "392", // Japan
  "056", // Belgium
  "826", // UK
  "356", // India
]);

// ── Data ─────────────────────────────────────────────────────────────────────

const revenueData = [
  { month: "Jan", Income: 98, Expense: 62, Investment: 41 },
  { month: "Feb", Income: 112, Expense: 70, Investment: 55 },
  { month: "Mar", Income: 145, Expense: 85, Investment: 63 },
  { month: "Apr", Income: 132, Expense: 78, Investment: 49 },
  { month: "May", Income: 168, Expense: 95, Investment: 72 },
  { month: "Jun", Income: 154, Expense: 88, Investment: 61 },
  { month: "Jul", Income: 189, Expense: 102, Investment: 84 },
  { month: "Aug", Income: 176, Expense: 96, Investment: 77 },
  { month: "Sep", Income: 201, Expense: 118, Investment: 91 },
  { month: "Oct", Income: 187, Expense: 109, Investment: 82 },
  { month: "Nov", Income: 215, Expense: 124, Investment: 98 },
  { month: "Dec", Income: 198, Expense: 115, Investment: 88 },
];

const kpis = [
  { label: "Total Income",    value: "$163.4k", delta: "7%",   up: true  },
  { label: "Total Outcome",   value: "$82.1k",  delta: "8.8%", up: false },
  { label: "Total Profit",    value: "$54.3k",  delta: "2.5%", up: true  },
  { label: "New Patients",    value: "68",      delta: "5.6%", up: true  },
];

const countries = [
  { name: "United States", visits: "2.1M", pct: 100, flag: "🇺🇸" },
  { name: "Canada",        visits: "1.5M", pct: 71,  flag: "🇨🇦" },
  { name: "France",        visits: "1.2M", pct: 57,  flag: "🇫🇷" },
  { name: "Italy",         visits: "1.0M", pct: 48,  flag: "🇮🇹" },
  { name: "Australia",     visits: "820k", pct: 39,  flag: "🇦🇺" },
  { name: "Spain",         visits: "730k", pct: 35,  flag: "🇪🇸" },
  { name: "Japan",         visits: "540k", pct: 26,  flag: "🇯🇵" },
  { name: "Belgium",       visits: "322k", pct: 15,  flag: "🇧🇪" },
  { name: "UK",            visits: "208k", pct: 10,  flag: "🇬🇧" },
  { name: "India",         visits: "70k",  pct: 3,   flag: "🇮🇳" },
];

const deviceData = [
  { name: "Desktop",  value: 55, color: "#005EB8" },
  { name: "Mobile",   value: 45, color: "#60a5fa" },
  { name: "Tablet",   value: 5,  color: "#93c5fd" },
];

const topProducts = [
  { name: "Scripps Health Portal",       cat: "Digital / Platform",       revenue: "$36,820" },
  { name: "PIMC Membership Platform",    cat: "Digital / Membership",      revenue: "$33,498" },
  { name: "Clinical Analytics Suite",    cat: "Digital / Analytics",       revenue: "$30,745" },
  { name: "Patient Engagement App",      cat: "Digital / Mobile",          revenue: "$29,423" },
  { name: "Epic Integration Module",     cat: "Digital / Integration",     revenue: "$28,637" },
  { name: "Telehealth Platform",         cat: "Digital / Telemedicine",    revenue: "$26,221" },
];

const transactions = [
  { id: "#1846325", customer: "Scripps Clinic",       email: "billing@scripps.org",       total: "$466",  date: "09 Mar 2025", status: "Completed", delivery: "Instant (Digital)" },
  { id: "#1846326", customer: "Jese Leos",            email: "name@example.com",          total: "$2000", date: "07 Mar 2025", status: "Failed",    delivery: "Scheduled (Digital)" },
  { id: "#1846327", customer: "Bonnie Green",         email: "name@company.com",          total: "$245",  date: "12 Mar 2025", status: "Completed", delivery: "Instant (Digital)" },
  { id: "#1846328", customer: "Scripps Research",     email: "company@scripps.edu",       total: "$90",   date: "18 Apr 2025", status: "Refunded",  delivery: "Scheduled (Digital)" },
  { id: "#1846329", customer: "Michael Gough",        email: "name@example.com",          total: "$3040", date: "21 Apr 2025", status: "Pending",   delivery: "Shipment (Packaging)" },
  { id: "#1846330", customer: "Lana Byrd",            email: "name@example.com",          total: "$2999", date: "24 Apr 2025", status: "Completed", delivery: "Instant (Digital)" },
  { id: "#1846331", customer: "Scripps Mercy",        email: "admin@scrippsmergy.org",    total: "$1870", date: "05 May 2025", status: "Completed", delivery: "Shipment (Packaging)" },
  { id: "#1846332", customer: "Leslie Livingston",    email: "name@example.com",          total: "$5067", date: "08 May 2025", status: "Refunded",  delivery: "Instant (Digital)" },
  { id: "#1846333", customer: "Scripps Encinitas",    email: "company@example.com",       total: "$60",   date: "02 May 2025", status: "Pending",   delivery: "Instant (Digital)" },
  { id: "#1846334", customer: "Robert Brown",         email: "name@example.com",          total: "$499",  date: "20 Jun 2025", status: "Completed", delivery: "Instant (Digital)" },
];

const statusColor: Record<string, string> = {
  Completed: "success",
  Failed:    "failure",
  Pending:   "warning",
  Refunded:  "purple",
};

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AdminSaaSPage() {
  return (
    <PreviewShell variant="admin" title="SaaS Dashboard">
      <div className="p-6 space-y-6">

        {/* ── Hero revenue chart ────────────────────────────────────────── */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
          <div className="flex items-start justify-between mb-1">
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">$401,857</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total revenue for scripps.org</p>
            </div>
            <div className="flex items-center gap-2">
              <Select sizing="sm" className="w-32"><option>Start date</option></Select>
              <Select sizing="sm" className="w-32"><option>End date</option></Select>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={revenueData} barSize={10} barGap={2}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} width={30} />
              <Tooltip />
              <Legend iconSize={8} iconType="circle" />
              <Bar dataKey="Income"     fill="#005EB8" radius={[2,2,0,0]} />
              <Bar dataKey="Expense"    fill="#f97316" radius={[2,2,0,0]} />
              <Bar dataKey="Investment" fill="#10b981" radius={[2,2,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ── 4 KPI cards ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <div key={k.label} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-5">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{k.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{k.value}</p>
              <div className={`flex items-center gap-1 text-xs font-medium ${k.up ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
                {k.up ? <HiArrowUp className="h-3 w-3" /> : <HiArrowDown className="h-3 w-3" />}
                {k.delta} vs last month
              </div>
            </div>
          ))}
        </div>

        {/* ── Map + Country visits ──────────────────────────────────────── */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Coastal San Diego</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Visits by region</p>
            </div>
            <Select sizing="sm" className="w-32">
              <option>Today</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </Select>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* World map */}
            <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700" style={{ height: 280 }}>
              <ComposableMap
                projectionConfig={{ scale: 140 }}
                style={{ width: "100%", height: "100%" }}
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const isHighlighted = highlightedCountries.has(geo.id);
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={isHighlighted ? "#005EB8" : "#E2E8F0"}
                          stroke="#ffffff"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: "none" },
                            hover:   { fill: isHighlighted ? "#004fa0" : "#cbd5e1", outline: "none" },
                            pressed: { outline: "none" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ComposableMap>
            </div>

            {/* Country list */}
            <div className="space-y-3">
              {countries.map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <span className="text-base w-6 shrink-0">{c.flag}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-700 dark:text-gray-300">{c.name}</span>
                      <span className="text-xs font-medium text-gray-900 dark:text-white">{c.visits}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-primary-600" style={{ width: `${c.pct}%` }} />
                    </div>
                  </div>
                </div>
              ))}
              <button className="text-xs font-medium text-primary-700 dark:text-primary-400 hover:underline mt-2 flex items-center gap-1">
                View full report <HiArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Device visits + Top products ─────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

          {/* Device visits */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">867.4k</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Visits by device</p>
              </div>
              <span className="text-xs font-medium text-green-600 dark:text-green-400 flex items-center gap-1">
                <HiArrowUp className="h-3 w-3" />7%
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4 text-center">
              {[
                { label: "Desktop PC", pct: "55%", visits: "753.6k" },
                { label: "Mobile",     pct: "45%", visits: "56.2k" },
                { label: "Tablet",     pct: "5%",  visits: "6.5k" },
              ].map((d) => (
                <div key={d.label}>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{d.pct}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{d.label}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{d.visits} Visits</p>
                </div>
              ))}
            </div>
            <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
              <div className="h-full bg-primary-600 rounded-l-full" style={{ width: "55%" }} />
              <div className="h-full bg-blue-400" style={{ width: "45%" }} />
              <div className="h-full bg-blue-200 rounded-r-full" style={{ width: "5%" }} />
            </div>
            <div className="flex items-center gap-4 mt-3">
              {deviceData.map((d) => (
                <div key={d.name} className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-xs text-gray-500 dark:text-gray-400">{d.name}</span>
                </div>
              ))}
            </div>
            <Select sizing="sm" className="w-36 mt-4">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </Select>
            <button className="text-xs font-medium text-primary-700 dark:text-primary-400 hover:underline mt-3 flex items-center gap-1">
              Sales Report <HiArrowRight className="h-3 w-3" />
            </button>
          </div>

          {/* Top products */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">$384,567</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Top products this month</p>
              </div>
              <span className="text-xs font-medium text-green-600 dark:text-green-400 flex items-center gap-1">
                <HiArrowUp className="h-3 w-3" />10%
              </span>
            </div>
            <div className="space-y-3">
              {topProducts.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400 shrink-0">
                    {(i + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{p.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{p.cat}</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white shrink-0">{p.revenue}</p>
                </div>
              ))}
            </div>
            <Select sizing="sm" className="w-36 mt-4">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </Select>
            <button className="text-xs font-medium text-primary-700 dark:text-primary-400 hover:underline mt-3 flex items-center gap-1">
              Products Report <HiArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* ── Transactions table ────────────────────────────────────────── */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700">
            <div>
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Transactions</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Latest transactions</p>
            </div>
            <div className="flex items-center gap-2">
              <Button size="xs" color="alternative">Archive all</Button>
              <Button size="xs" color="failure" outline>Delete all</Button>
              <button className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                <HiDotsVertical className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 w-8"><Checkbox /></th>
                  {["Order ID","Customer","Email","Total","Due Date","Status","Delivery Type","Actions"].map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {transactions.map((t) => (
                  <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="px-4 py-3"><Checkbox /></td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{t.id}</td>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">{t.customer}</td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{t.email}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">{t.total}</td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap">{t.date}</td>
                    <td className="px-4 py-3">
                      <Badge color={statusColor[t.status] as any} size="xs">{t.status}</Badge>
                    </td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap">{t.delivery}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="text-xs font-medium text-primary-700 dark:text-primary-400 hover:underline">Details</button>
                        <button className="text-xs font-medium text-red-600 dark:text-red-400 hover:underline">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700">
            <button className="text-sm font-medium text-primary-700 dark:text-primary-400 hover:underline flex items-center gap-1">
              View all transactions <HiArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
