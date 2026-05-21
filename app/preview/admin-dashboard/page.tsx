"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Dropdown, DropdownItem } from "flowbite-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { HiArrowUp, HiArrowDown, HiDotsVertical, HiShoppingCart, HiUsers, HiCursorClick, HiChartBar } from "react-icons/hi";

const weeklyRevenue = [
  { day: "Mon", current: 6356, prev: 6556 },
  { day: "Tue", current: 6218, prev: 6725 },
  { day: "Wed", current: 6156, prev: 6424 },
  { day: "Thu", current: 6526, prev: 6356 },
  { day: "Fri", current: 6356, prev: 6586 },
  { day: "Sat", current: 6256, prev: 6756 },
  { day: "Sun", current: 6056, prev: 6616 },
];

const acquisitionData = [
  { source: "Organic", value: 432 },
  { source: "Referral", value: 318 },
  { source: "Social", value: 287 },
  { source: "Email", value: 211 },
  { source: "Direct", value: 195 },
];

const transactions = [
  { id: "INV-001", user: "Leslie Livingston", date: "Apr 23, 2021", amount: "$2,300", status: "Completed" },
  { id: "INV-002", user: "Roberta Casas",     date: "Apr 22, 2021", amount: "$900",   status: "Pending" },
  { id: "INV-003", user: "Joseph McFall",     date: "Apr 21, 2021", amount: "$4,660", status: "Completed" },
  { id: "INV-004", user: "Bonnie Green",      date: "Apr 20, 2021", amount: "$780",   status: "Cancelled" },
  { id: "INV-005", user: "Thomas Lean",       date: "Apr 19, 2021", amount: "$1,250", status: "Completed" },
];

const kpis = [
  { label: "Total Sales",   value: "$45,385", change: "+12.5%", up: true,  icon: HiShoppingCart, color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
  { label: "New Users",     value: "2,340",   change: "+14.6%", up: true,  icon: HiUsers,        color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" },
  { label: "Avg Session",   value: "5,355",   change: "-3.2%",  up: false, icon: HiCursorClick,  color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
  { label: "Conversion",    value: "3.12%",   change: "+4.8%",  up: true,  icon: HiChartBar,     color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" },
];

const statusColor: Record<string, string> = {
  Completed: "success",
  Pending:   "warning",
  Cancelled: "failure",
};

export default function AdminDashboardPage() {
  return (
    <PreviewShell variant="admin" title="Dashboard">
      <div className="p-6 space-y-6">

        {/* KPI cards */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <div key={k.label} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{k.label}</span>
                <span className={`p-2 rounded-lg ${k.color}`}><k.icon className="h-4 w-4" /></span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{k.value}</p>
              <div className={`flex items-center gap-1 mt-1 text-xs font-medium ${k.up ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
                {k.up ? <HiArrowUp className="h-3 w-3" /> : <HiArrowDown className="h-3 w-3" />}
                {k.change} vs last week
              </div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

          {/* Revenue area chart */}
          <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">$45,385</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sales this week</p>
              </div>
              <Dropdown label="" renderTrigger={() => (
                <button className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"><HiDotsVertical className="h-4 w-4" /></button>
              )}>
                <DropdownItem>Last 7 days</DropdownItem>
                <DropdownItem>Last 30 days</DropdownItem>
                <DropdownItem>Last 90 days</DropdownItem>
              </Dropdown>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={weeklyRevenue}>
                <defs>
                  <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#005EB8" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#005EB8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPrev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FDBA8C" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#FDBA8C" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} width={50} />
                <Tooltip />
                <Area type="monotone" dataKey="current" stroke="#005EB8" strokeWidth={2} fill="url(#colorCurrent)" name="This week" />
                <Area type="monotone" dataKey="prev" stroke="#FDBA8C" strokeWidth={2} fill="url(#colorPrev)" name="Last week" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Acquisition bar chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <p className="text-base font-semibold text-gray-900 dark:text-white mb-1">Traffic Sources</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Last 7 days</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={acquisitionData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis dataKey="source" type="category" tick={{ fontSize: 11 }} width={55} />
                <Tooltip />
                <Bar dataKey="value" fill="#005EB8" radius={[0, 4, 4, 0]} name="Sessions" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Transactions table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <p className="font-semibold text-gray-900 dark:text-white">Latest Transactions</p>
            <a href="#" className="text-sm font-medium text-primary-700 dark:text-primary-400 hover:underline">View all</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <tr>
                  {["Transaction", "Customer", "Date", "Amount", "Status"].map((h) => (
                    <th key={h} className="px-5 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {transactions.map((t) => (
                  <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-5 py-3 font-mono text-xs text-gray-500 dark:text-gray-400">{t.id}</td>
                    <td className="px-5 py-3 font-medium text-gray-900 dark:text-white">{t.user}</td>
                    <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{t.date}</td>
                    <td className="px-5 py-3 font-semibold text-gray-900 dark:text-white">{t.amount}</td>
                    <td className="px-5 py-3">
                      <Badge color={statusColor[t.status] as any} size="xs">{t.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
