"use client";

import {
  LineChart, Line, AreaChart, Area,
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";

// ── Brand colors ──────────────────────────────────────────────────────────────

const SCRIPPS   = "#005EB8";
const BLUE_LIGHT = "#8ec4ff";
const GOLD      = "#f59e0b";
const DIAMOND   = "#38bdf8";
const DIAMOND_PLUS = "#a78bfa";
const GREEN     = "#22c55e";
const RED       = "#ef4444";
const GRAY      = "#9ca3af";

// ── Chart data ────────────────────────────────────────────────────────────────

const revenueData = [
  { month: "Nov", revenue: 218400, target: 220000 },
  { month: "Dec", revenue: 224600, target: 220000 },
  { month: "Jan", revenue: 231800, target: 230000 },
  { month: "Feb", revenue: 229400, target: 230000 },
  { month: "Mar", revenue: 237200, target: 235000 },
  { month: "Apr", revenue: 241600, target: 240000 },
  { month: "May", revenue: 248400, target: 245000 },
];

const memberGrowthData = [
  { month: "Nov", gold: 388, diamond: 271, diamondPlus: 133 },
  { month: "Dec", gold: 394, diamond: 276, diamondPlus: 138 },
  { month: "Jan", gold: 398, diamond: 279, diamondPlus: 140 },
  { month: "Feb", gold: 402, diamond: 282, diamondPlus: 142 },
  { month: "Mar", gold: 406, diamond: 285, diamondPlus: 144 },
  { month: "Apr", gold: 409, diamond: 287, diamondPlus: 145 },
  { month: "May", gold: 412, diamond: 289, diamondPlus: 146 },
];

const tierData = [
  { name: "Gold",      value: 412, color: GOLD },
  { name: "Diamond",   value: 289, color: DIAMOND },
  { name: "Diamond+",  value: 146, color: DIAMOND_PLUS },
];

const collectionData = [
  { month: "Nov", collected: 97.2, target: 98 },
  { month: "Dec", collected: 98.1, target: 98 },
  { month: "Jan", collected: 97.8, target: 98 },
  { month: "Feb", collected: 96.9, target: 98 },
  { month: "Mar", collected: 98.4, target: 98 },
  { month: "Apr", collected: 98.0, target: 98 },
  { month: "May", collected: 98.6, target: 98 },
];

const retryData = [
  { month: "Nov", day3: 8,  day7: 5,  day14: 3,  cancelled: 1 },
  { month: "Dec", day3: 6,  day7: 4,  day14: 2,  cancelled: 1 },
  { month: "Jan", day3: 11, day7: 7,  day14: 4,  cancelled: 2 },
  { month: "Feb", day3: 9,  day7: 6,  day14: 3,  cancelled: 1 },
  { month: "Mar", day3: 7,  day7: 4,  day14: 2,  cancelled: 0 },
  { month: "Apr", day3: 10, day7: 6,  day14: 3,  cancelled: 1 },
  { month: "May", day3: 8,  day7: 5,  day14: 2,  cancelled: 0 },
];

// ── Shared tooltip style ──────────────────────────────────────────────────────

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

// ── Dollar formatter ──────────────────────────────────────────────────────────

const dollars = (v: number) =>
  "$" + (v >= 1000 ? (v / 1000).toFixed(0) + "k" : v);

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ChartsPage() {
  return (
    <div className="min-h-full">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Data
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Charts</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          <strong className="text-gray-700 dark:text-gray-300">Recharts</strong> with Scripps tokens applied.
          All charts use <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">ResponsiveContainer</code> so
          they reflow at any width. PIMC data shown — swap in your API response and the chart updates.
        </p>
        <div className="flex items-center gap-3 mt-4">
          <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded font-mono text-gray-600 dark:text-gray-300">npm install recharts</code>
          <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded font-mono text-gray-600 dark:text-gray-300">import {"{ LineChart, Line, … }"} from &quot;recharts&quot;</code>
        </div>
      </section>

      {/* ── Revenue vs target (line) ─────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Revenue vs target</h2>
            <p className="text-sm text-gray-400 dark:text-gray-500">Monthly billed vs monthly target · last 7 months</p>
          </div>
          <span className="text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">LineChart</span>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={revenueData} margin={{ top: 4, right: 16, bottom: 0, left: 16 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: GRAY }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={dollars} tick={{ fontSize: 12, fill: GRAY }} axisLine={false} tickLine={false} width={48} />
            <Tooltip {...tooltipStyle} formatter={v => "$" + Number(v).toLocaleString()} />
            <Legend wrapperStyle={{ fontSize: 12, paddingTop: 12 }} />
            <Line type="monotone" dataKey="revenue" name="Revenue" stroke={SCRIPPS} strokeWidth={2.5} dot={{ r: 3, fill: SCRIPPS }} activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="target" name="Target" stroke={GRAY} strokeWidth={1.5} strokeDasharray="4 4" dot={false} />
          </LineChart>
        </ResponsiveContainer>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 mt-6 overflow-x-auto">{`<ResponsiveContainer width="100%" height={280}>
  <LineChart data={revenueData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis tickFormatter={(v) => "$" + v / 1000 + "k"} />
    <Tooltip />
    <Legend />
    <Line dataKey="revenue" stroke="#005EB8" strokeWidth={2.5} />
    <Line dataKey="target" stroke="#9ca3af" strokeDasharray="4 4" />
  </LineChart>
</ResponsiveContainer>`}</pre>
      </section>

      {/* ── Member growth (area, stacked) ───────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Member growth by tier</h2>
            <p className="text-sm text-gray-400 dark:text-gray-500">Stacked area · Gold / Diamond / Diamond+</p>
          </div>
          <span className="text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">AreaChart</span>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={memberGrowthData} margin={{ top: 4, right: 16, bottom: 0, left: 16 }}>
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={GOLD} stopOpacity={0.3} />
                <stop offset="95%" stopColor={GOLD} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="diamondGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={DIAMOND} stopOpacity={0.3} />
                <stop offset="95%" stopColor={DIAMOND} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="dplusGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={DIAMOND_PLUS} stopOpacity={0.3} />
                <stop offset="95%" stopColor={DIAMOND_PLUS} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: GRAY }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: GRAY }} axisLine={false} tickLine={false} domain={[0, 500]} />
            <Tooltip {...tooltipStyle} />
            <Legend wrapperStyle={{ fontSize: 12, paddingTop: 12 }} />
            <Area type="monotone" dataKey="gold" name="Gold" stroke={GOLD} strokeWidth={2} fill="url(#goldGrad)" />
            <Area type="monotone" dataKey="diamond" name="Diamond" stroke={DIAMOND} strokeWidth={2} fill="url(#diamondGrad)" />
            <Area type="monotone" dataKey="diamondPlus" name="Diamond+" stroke={DIAMOND_PLUS} strokeWidth={2} fill="url(#dplusGrad)" />
          </AreaChart>
        </ResponsiveContainer>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 mt-6 overflow-x-auto">{`<AreaChart data={memberGrowthData}>
  <defs>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
    </linearGradient>
  </defs>
  <Area dataKey="gold" stroke="#f59e0b" fill="url(#goldGrad)" />
  <Area dataKey="diamond" stroke="#38bdf8" fill="url(#diamondGrad)" />
  <Area dataKey="diamondPlus" stroke="#a78bfa" fill="url(#dplusGrad)" />
</AreaChart>`}</pre>
      </section>

      {/* ── Tier breakdown (donut) ───────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Membership tier breakdown</h2>
            <p className="text-sm text-gray-400 dark:text-gray-500">847 active members · May 2026</p>
          </div>
          <span className="text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">PieChart</span>
        </div>
        <div className="flex items-center gap-16">
          <ResponsiveContainer width={280} height={280}>
            <PieChart>
              <Pie
                data={tierData}
                cx="50%"
                cy="50%"
                innerRadius={72}
                outerRadius={110}
                paddingAngle={3}
                dataKey="value"
              >
                {tierData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                {...tooltipStyle}
                formatter={v => Number(v) + " members"}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-4">
            {tierData.map(({ name, value, color }) => (
              <div key={name} className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: color }} />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{name}</p>
                  <p className="text-xs text-gray-400">{value} members · {Math.round(value / 847 * 100)}%</p>
                </div>
              </div>
            ))}
            <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
              <p className="text-sm font-bold text-gray-900 dark:text-white">847 total</p>
            </div>
          </div>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 mt-6 overflow-x-auto">{`<PieChart>
  <Pie data={tierData} innerRadius={72} outerRadius={110}
       paddingAngle={3} dataKey="value">
    {tierData.map((entry) => (
      <Cell key={entry.name} fill={entry.color} />
    ))}
  </Pie>
  <Tooltip />
</PieChart>`}</pre>
      </section>

      {/* ── Collection rate (bar) ────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Collection rate by month</h2>
            <p className="text-sm text-gray-400 dark:text-gray-500">% of invoices collected · 98% target line</p>
          </div>
          <span className="text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">BarChart</span>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={collectionData} margin={{ top: 4, right: 16, bottom: 0, left: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: GRAY }} axisLine={false} tickLine={false} />
            <YAxis domain={[95, 100]} tickFormatter={(v) => v + "%"} tick={{ fontSize: 12, fill: GRAY }} axisLine={false} tickLine={false} />
            <Tooltip {...tooltipStyle} formatter={v => Number(v).toFixed(1) + "%"} />
            <Bar dataKey="collected" name="Collected" radius={[4, 4, 0, 0]}>
              {collectionData.map((entry) => (
                <Cell
                  key={entry.month}
                  fill={entry.collected >= entry.target ? GREEN : RED}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Green = at or above 98% target. Red = below target.</p>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 mt-4 overflow-x-auto">{`// Conditional cell color based on value vs target
<Bar dataKey="collected" radius={[4, 4, 0, 0]}>
  {data.map((entry) => (
    <Cell
      key={entry.month}
      fill={entry.collected >= entry.target ? "#22c55e" : "#ef4444"}
    />
  ))}
</Bar>`}</pre>
      </section>

      {/* ── Payment retry funnel (stacked bar) ──────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Payment retry funnel</h2>
            <p className="text-sm text-gray-400 dark:text-gray-500">Failures by retry stage · day 3 / 7 / 14 / cancelled</p>
          </div>
          <span className="text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">BarChart stacked</span>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={retryData} margin={{ top: 4, right: 16, bottom: 0, left: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: GRAY }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: GRAY }} axisLine={false} tickLine={false} />
            <Tooltip {...tooltipStyle} />
            <Legend wrapperStyle={{ fontSize: 12, paddingTop: 12 }} />
            <Bar dataKey="day3"      name="Day 3 retry"   stackId="a" fill={BLUE_LIGHT} />
            <Bar dataKey="day7"      name="Day 7 retry"   stackId="a" fill={SCRIPPS} />
            <Bar dataKey="day14"     name="Day 14 retry"  stackId="a" fill={GOLD} />
            <Bar dataKey="cancelled" name="Cancelled"     stackId="a" fill={RED} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 mt-6 overflow-x-auto">{`// Stacked bar — set stackId to the same string on all bars
<Bar dataKey="day3"      stackId="a" fill="#8ec4ff" />
<Bar dataKey="day7"      stackId="a" fill="#005EB8" />
<Bar dataKey="day14"     stackId="a" fill="#f59e0b" />
<Bar dataKey="cancelled" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />`}</pre>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "ResponsiveContainer", note: "Always wrap charts in ResponsiveContainer width=\"100%\". Set a fixed height. Never use fixed pixel widths — they break at smaller viewport sizes." },
            { label: "Scripps blue first",  note: "Primary data series uses #005EB8. Secondary/comparison series uses #9ca3af (dashed). Tier series uses their fixed colors: amber/sky/violet. Never use Flowbite blue (#3b82f6) in charts." },
            { label: "Tooltip style",       note: "Use a dark tooltip (bg #1f2937, border #374151) so it reads over both light and dark chart backgrounds. The default Recharts tooltip doesn't match Motive aesthetics." },
            { label: "Conditional fill",    note: "Use Cell with conditional fill for performance-indicating bars (collection rate, retry rate). Color change communicates threshold crossing without needing a legend." },
            { label: "Gradient fills",      note: "Area charts use linearGradient with fade to transparent — gives depth without heavy fill. Define gradients in <defs> inside the SVG." },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-[180px_1fr] gap-8 py-6 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <p className="text-sm font-bold text-gray-900 dark:text-white">{item.label}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
