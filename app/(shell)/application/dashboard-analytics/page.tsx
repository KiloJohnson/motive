"use client";

import { useState } from "react";

// ── Data ─────────────────────────────────────────────────────────────────────

type InvoiceStatus = "Paid" | "Sent" | "Overdue" | "Draft";

const invoices = [
  { id: "INV-2849", member: "Garcia, Maria",     tier: "Diamond+", amount: "$4,660", due: "May 10, 2026", status: "Overdue"  as InvoiceStatus },
  { id: "INV-2850", member: "Whitmore, James",   tier: "Gold",     amount: "$3,780", due: "May 15, 2026", status: "Overdue"  as InvoiceStatus },
  { id: "INV-2851", member: "Nguyen, Linda",     tier: "Diamond",  amount: "$4,660", due: "May 20, 2026", status: "Sent"     as InvoiceStatus },
  { id: "INV-2852", member: "Kim, David",        tier: "Diamond",  amount: "$4,660", due: "May 22, 2026", status: "Sent"     as InvoiceStatus },
  { id: "INV-2853", member: "Patel, Susan",      tier: "Gold",     amount: "$3,780", due: "May 25, 2026", status: "Sent"     as InvoiceStatus },
  { id: "INV-2854", member: "Reyes, Thomas",     tier: "Diamond+", amount: "$4,660", due: "May 28, 2026", status: "Draft"    as InvoiceStatus },
  { id: "INV-2845", member: "Foster, Angela",    tier: "Gold",     amount: "$3,780", due: "May 5, 2026",  status: "Paid"     as InvoiceStatus },
  { id: "INV-2846", member: "Morales, Richard",  tier: "Diamond",  amount: "$4,660", due: "May 6, 2026",  status: "Paid"     as InvoiceStatus },
];

const statusStyles: Record<InvoiceStatus, string> = {
  Paid:    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Sent:    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Overdue: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  Draft:   "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400",
};

const tierColors: Record<string, string> = {
  "Gold":     "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "Diamond":  "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  "Diamond+": "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
};

// ── Icons (inline SVG) ────────────────────────────────────────────────────────

function IconMembers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function IconRevenue() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  );
}

function IconAlert() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  );
}

function IconWaitlist() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function StatCard({
  label, value, sub, icon, accent,
}: {
  label: string; value: string; sub: string;
  icon: React.ReactNode; accent?: boolean;
}) {
  return (
    <div className={`bg-white dark:bg-gray-800 border rounded-xl p-5 ${
      accent
        ? "border-red-200 dark:border-red-900/40"
        : "border-gray-200 dark:border-gray-700"
    }`}>
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
        <span className={`p-2 rounded-lg ${
          accent
            ? "bg-red-50 text-red-500 dark:bg-red-900/20 dark:text-red-400"
            : "bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
        }`}
          style={!accent ? { color: "var(--motive-primary)", background: "color-mix(in srgb, var(--motive-primary) 10%, transparent)" } : {}}
        >
          {icon}
        </span>
      </div>
      <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">{value}</p>
      <p className="text-xs text-gray-400 dark:text-gray-500">{sub}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: InvoiceStatus }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status]}`}>
      {status}
    </span>
  );
}

function TierBadge({ tier }: { tier: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tierColors[tier]}`}>
      {tier}
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DashboardAnalyticsPage() {
  const [statusFilter, setStatusFilter] = useState<InvoiceStatus | "All">("All");

  const filtered = statusFilter === "All"
    ? invoices
    : invoices.filter((inv) => inv.status === statusFilter);

  return (
    <div className="min-h-full">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Dashboard</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          KPI summary cards, membership breakdown, and an actionable invoice table.
          The standard opening view for any Scripps application — oriented around what
          staff need to see first, not what the system makes easiest to show.
        </p>
      </section>

      {/* ── Live demo ───────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Live demo</h2>

        {/* Page header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-0.5">PIMC Back Office · May 2026</p>
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--motive-primary)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            New invoice
          </button>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Active Members"
            value="847"
            sub="↑ 34 this month"
            icon={<IconMembers />}
          />
          <StatCard
            label="Revenue MTD"
            value="$248,400"
            sub="98.6% collection rate"
            icon={<IconRevenue />}
          />
          <StatCard
            label="Overdue Invoices"
            value="12"
            sub="Day 7 retries in progress"
            icon={<IconAlert />}
            accent
          />
          <StatCard
            label="Waitlist"
            value="34"
            sub="3 converted this week"
            icon={<IconWaitlist />}
          />
        </div>

        {/* Membership breakdown */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { tier: "Gold",     count: 412, annual: "$3,780 / yr", color: "bg-amber-400" },
            { tier: "Diamond",  count: 289, annual: "$4,660 / yr", color: "bg-sky-400" },
            { tier: "Diamond+", count: 146, annual: "$4,660 / yr", color: "bg-violet-400" },
          ].map(({ tier, count, annual, color }) => (
            <div key={tier} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{tier}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 ml-auto">{annual}</p>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{count}</p>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mt-3">
                <div
                  className={`h-1.5 rounded-full ${color}`}
                  style={{ width: `${Math.round((count / 847) * 100)}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5">
                {Math.round((count / 847) * 100)}% of membership
              </p>
            </div>
          ))}
        </div>

        {/* Recent invoices */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Recent invoices</h3>
            <div className="flex items-center gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as InvoiceStatus | "All")}
                className="px-3 py-1.5 text-xs border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 outline-none"
              >
                {(["All", "Overdue", "Sent", "Paid", "Draft"] as const).map((s) => (
                  <option key={s} value={s}>{s === "All" ? "All statuses" : s}</option>
                ))}
              </select>
              <button
                className="text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                View all
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700">
                <tr>
                  {["Invoice", "Member", "Tier", "Amount", "Due", "Status", ""].map((h, i) => (
                    <th key={i} className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {filtered.map((inv) => (
                  <tr key={inv.id} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-5 py-3 font-mono text-xs text-gray-400 dark:text-gray-500">{inv.id}</td>
                    <td className="px-5 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">{inv.member}</td>
                    <td className="px-5 py-3"><TierBadge tier={inv.tier} /></td>
                    <td className="px-5 py-3 font-medium text-gray-900 dark:text-white">{inv.amount}</td>
                    <td className="px-5 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap">{inv.due}</td>
                    <td className="px-5 py-3"><StatusBadge status={inv.status} /></td>
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
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Showing {filtered.length} of {invoices.length} invoices
            </p>
            <button
              className="text-xs font-medium hover:underline"
              style={{ color: "var(--motive-primary)" }}
            >
              View all invoices →
            </button>
          </div>
        </div>
      </section>

      {/* ── Anatomy ─────────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Anatomy</h2>
        <div className="grid grid-cols-2 gap-6 max-w-3xl">
          {[
            { part: "KPI cards", description: "4-up row. Each card has a label, a large value, and a one-line context note. Alert state uses red border + red icon background. All other cards use the brand primary for icon tint." },
            { part: "Tier breakdown", description: "3-column breakdown of Gold / Diamond / Diamond+ membership counts. Progress bar shows share of total. Always show the per-tier annual fee — staff need this context when resolving billing questions." },
            { part: "Recent invoices table", description: "Compact table scoped to recent activity. Includes a status filter dropdown. Link to full invoice list in footer. Default sort: due date ascending (overdue first)." },
            { part: "Status badges", description: "Overdue = red. Sent = blue. Paid = green. Draft = gray. Never use color alone — the text label is required for accessibility and screen readers." },
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
            { label: "Alert state",   note: "Use the red accent only for actionable problems — overdue invoices, failed payments, expired cards. Don't use it for neutral counts." },
            { label: "KPI selection", note: "Dashboard KPIs should answer the question staff ask first thing in the morning: how many members are active, is revenue on track, what needs follow-up today?" },
            { label: "Table scope",   note: "The dashboard table is a summary — not a full list. Cap it at 8–10 rows. Always include a 'View all' link to the full filtered view." },
            { label: "Tier colors",   note: "Gold = amber, Diamond = sky blue, Diamond+ = violet. Consistent across all surfaces — badges, charts, filters. Never reassign these." },
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
