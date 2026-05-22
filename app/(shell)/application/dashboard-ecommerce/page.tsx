"use client";

import { useState } from "react";
import { Badge, Button } from "flowbite-react";
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";
import { HiArrowUp, HiArrowDown, HiShoppingCart, HiUsers, HiCurrencyDollar, HiRefresh } from "react-icons/hi";

// ── Data ──────────────────────────────────────────────────────────────────────

const revenueData = [
  { day: "Mon", revenue: 4200, orders: 38 },
  { day: "Tue", revenue: 5800, orders: 51 },
  { day: "Wed", revenue: 3900, orders: 34 },
  { day: "Thu", revenue: 6700, orders: 59 },
  { day: "Fri", revenue: 8200, orders: 74 },
  { day: "Sat", revenue: 9400, orders: 88 },
  { day: "Sun", revenue: 7100, orders: 63 },
];

const categoryData = [
  { name: "Electronics",  revenue: 28400 },
  { name: "Apparel",      revenue: 19200 },
  { name: "Home & Garden",revenue: 14600 },
  { name: "Sports",       revenue: 11800 },
  { name: "Books",        revenue: 7300  },
];

type OrderStatus = "Shipped" | "Processing" | "Delivered" | "Refunded";

const orders: { id: string; customer: string; product: string; amount: string; date: string; status: OrderStatus }[] = [
  { id: "ORD-8841", customer: "Garcia, Maria",    product: "Wireless Headphones",  amount: "$89.99",  date: "May 18, 2026", status: "Shipped"    },
  { id: "ORD-8842", customer: "Chen, David",      product: "Running Shoes (M 10)", amount: "$124.00", date: "May 18, 2026", status: "Processing" },
  { id: "ORD-8843", customer: "Whitmore, James",  product: "Coffee Maker Pro",     amount: "$179.99", date: "May 17, 2026", status: "Delivered"  },
  { id: "ORD-8844", customer: "Nguyen, Linda",    product: "Yoga Mat + Blocks",    amount: "$54.50",  date: "May 17, 2026", status: "Delivered"  },
  { id: "ORD-8845", customer: "Patel, Susan",     product: "Desk Lamp (White)",    amount: "$42.00",  date: "May 16, 2026", status: "Refunded"   },
  { id: "ORD-8846", customer: "Reyes, Thomas",    product: "Bluetooth Speaker",    amount: "$67.99",  date: "May 16, 2026", status: "Shipped"    },
  { id: "ORD-8847", customer: "Foster, Angela",   product: "Novel — Spring List",  amount: "$18.99",  date: "May 15, 2026", status: "Delivered"  },
  { id: "ORD-8848", customer: "Morales, Richard", product: "Standing Desk Mat",    amount: "$38.00",  date: "May 15, 2026", status: "Processing" },
];

const statusColor: Record<OrderStatus, "success" | "warning" | "info" | "failure"> = {
  Delivered:  "success",
  Shipped:    "info",
  Processing: "warning",
  Refunded:   "failure",
};

const tooltipStyle = {
  contentStyle: {
    backgroundColor: "#1f2937",
    border: "1px solid #374151",
    borderRadius: "8px",
    fontSize: "12px",
    color: "#f9fafb",
  },
  labelStyle: { color: "#9ca3af", marginBottom: "4px" },
};

// ── Stat card ─────────────────────────────────────────────────────────────────

function StatCard({
  label, value, delta, positive, icon: Icon,
}: {
  label: string; value: string; delta: string; positive: boolean; icon: React.ElementType;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
        <span className="p-2 rounded-lg" style={{ color: "var(--motive-primary)", background: "color-mix(in srgb, var(--motive-primary) 10%, transparent)" }}>
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">{value}</p>
      <p className={`text-xs flex items-center gap-1 ${positive ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
        {positive ? <HiArrowUp className="h-3 w-3" /> : <HiArrowDown className="h-3 w-3" />}
        {delta} vs last week
      </p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DashboardEcommercePage() {
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "All">("All");

  const filtered = statusFilter === "All"
    ? orders
    : orders.filter((o) => o.status === statusFilter);

  return (
    <div className="min-h-full">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Dashboards
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">E-commerce Dashboard</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          A full e-commerce admin dashboard — KPI cards, revenue chart, category breakdown,
          and order management table. Uses Flowbite React components and Recharts,
          all Scripps-themed. Adapt the data layer for any commerce context.
        </p>
      </section>

      {/* ── Live demo ───────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Store overview</h2>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-0.5">Week of May 12–18, 2026</p>
          </div>
          <Button color="alternative" size="sm">
            <HiRefresh className="mr-2 h-4 w-4" />Refresh
          </Button>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <StatCard label="Weekly revenue"   value="$45,300"  delta="12.4%"  positive icon={HiCurrencyDollar} />
          <StatCard label="Orders"           value="407"      delta="8.1%"   positive icon={HiShoppingCart} />
          <StatCard label="New customers"    value="138"      delta="3.2%"   positive icon={HiUsers} />
          <StatCard label="Refund rate"      value="2.1%"     delta="0.4%"   positive={false} icon={HiRefresh} />
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-5 gap-4 mb-8">

          {/* Revenue area */}
          <div className="col-span-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Revenue this week</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">Daily revenue · Mon–Sun</p>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={revenueData} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#005EB8" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#005EB8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={(v) => "$" + (v / 1000).toFixed(0) + "k"} tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} width={40} />
                <Tooltip {...tooltipStyle} formatter={v => "$" + Number(v).toLocaleString()} />
                <Area type="monotone" dataKey="revenue" stroke="#005EB8" strokeWidth={2.5} fill="url(#revGrad)" dot={false} activeDot={{ r: 4 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Category bar */}
          <div className="col-span-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Revenue by category</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">This week</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={categoryData} layout="vertical" margin={{ top: 0, right: 8, bottom: 0, left: 0 }}>
                <XAxis type="number" tickFormatter={(v) => "$" + v / 1000 + "k"} tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} width={80} />
                <Tooltip {...tooltipStyle} formatter={v => "$" + Number(v).toLocaleString()} />
                <Bar dataKey="revenue" fill="#005EB8" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Orders table */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Recent orders</h3>
            <div className="flex items-center gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as OrderStatus | "All")}
                className="px-3 py-1.5 text-xs border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 outline-none"
              >
                {(["All", "Shipped", "Processing", "Delivered", "Refunded"] as const).map((s) => (
                  <option key={s} value={s}>{s === "All" ? "All statuses" : s}</option>
                ))}
              </select>
              <Button color="default" size="xs">Export CSV</Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700">
                <tr>
                  {["Order", "Customer", "Product", "Amount", "Date", "Status", ""].map((h, i) => (
                    <th key={i} className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {filtered.map((order) => (
                  <tr key={order.id} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-5 py-3 font-mono text-xs text-gray-400 dark:text-gray-500">{order.id}</td>
                    <td className="px-5 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">{order.customer}</td>
                    <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{order.product}</td>
                    <td className="px-5 py-3 font-medium text-gray-900 dark:text-white">{order.amount}</td>
                    <td className="px-5 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap">{order.date}</td>
                    <td className="px-5 py-3">
                      <Badge color={statusColor[order.status]}>{order.status}</Badge>
                    </td>
                    <td className="px-5 py-3">
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <p className="text-xs text-gray-400 dark:text-gray-500">Showing {filtered.length} of {orders.length} orders</p>
            <button className="text-xs font-medium hover:underline" style={{ color: "var(--motive-primary)" }}>
              View all orders →
            </button>
          </div>
        </div>
      </section>

      {/* ── Anatomy ─────────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Anatomy</h2>
        <div className="grid grid-cols-2 gap-6 max-w-3xl">
          {[
            { part: "KPI cards",       description: "4-up row. Delta arrows show week-over-week change — green/red communicates direction without labels. Same pattern as the Analytics dashboard." },
            { part: "Revenue area",    description: "3-column width in a 5-col grid. Daily granularity for weekly view. Gradient fill without heavy opacity." },
            { part: "Category bar",    description: "Horizontal bar chart. 2-column width, same height as revenue area. Rounded right corners only (radius on the open end)." },
            { part: "Orders table",    description: "Same table pattern as Tables page — filterable, status badges, kebab actions. Consistent across all dashboard contexts." },
          ].map((item) => (
            <div key={item.part} className="p-6 border border-gray-100 dark:border-gray-700 rounded">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{item.part}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Grid layout",    note: "Dashboard uses a CSS grid. Charts section is grid-cols-5 — 3 cols for the wide chart, 2 cols for the narrow one. Adjust ratios per content density." },
            { label: "Delta arrows",   note: "Use HiArrowUp (green) and HiArrowDown (red) for metric deltas. Always show the comparison period — 'vs last week', 'vs last month'." },
            { label: "Consistent table", note: "The order table is the same pattern as every other data table in Motive. One table pattern across all contexts — staff learn it once." },
            { label: "Adapt freely",   note: "This dashboard is a template — swap the data shape, relabel the KPIs, change the chart types. The Scripps token layer stays constant." },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-[160px_1fr] gap-8 py-6 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <p className="text-sm font-bold text-gray-900 dark:text-white">{item.label}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
