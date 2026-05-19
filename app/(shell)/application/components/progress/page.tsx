"use client";

import { Progress } from "flowbite-react";

export default function AppProgressPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application · Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Progress</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Flowbite React <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">Progress</code> for
          membership collection rates, payment completion, and multi-step flows.
          Always label the value — never show a bar without context.
        </p>
      </section>

      {/* ── PIMC scenarios ──────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">PIMC scenarios</h2>
        <div className="space-y-6 max-w-lg p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Collection rate — May 2026</span>
              <span className="text-gray-500 dark:text-gray-400">98.6%</span>
            </div>
            <Progress progress={98.6} color="green" size="sm" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Waitlist capacity</span>
              <span className="text-gray-500 dark:text-gray-400">34 / 50</span>
            </div>
            <Progress progress={68} size="sm" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Annual goal — Gold renewals</span>
              <span className="text-gray-500 dark:text-gray-400">412 / 500</span>
            </div>
            <Progress progress={82.4} color="yellow" size="sm" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Overdue resolution — this week</span>
              <span className="text-gray-500 dark:text-gray-400">5 / 12</span>
            </div>
            <Progress progress={41.6} color="failure" size="sm" />
          </div>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Progress progress={98.6} color="green" size="sm" />
<Progress progress={68} size="sm" />           {/* default = primary blue */}
<Progress progress={41.6} color="failure" size="sm" />`}</pre>
      </section>

      {/* ── Sizes ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Sizes</h2>
        <div className="space-y-4 max-w-lg p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          {(["sm", "md", "lg", "xl"] as const).map((size) => (
            <div key={size}>
              <p className="text-xs font-mono text-gray-400 mb-1">{size}</p>
              <Progress progress={65} size={size} />
            </div>
          ))}
        </div>
      </section>

      {/* ── With label inside ───────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Label inside bar</h2>
        <div className="space-y-4 max-w-lg p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <Progress progress={82} size="lg" label="Gold renewals" labelPosition="inside" labelProgress />
          <Progress progress={98.6} color="green" size="lg" label="Collection rate" labelPosition="inside" labelProgress />
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 mt-4 overflow-x-auto">{`<Progress progress={82} size="lg" label="Gold renewals" labelPosition="inside" labelProgress />`}</pre>
      </section>

      {/* ── Colors ──────────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Color scale</h2>
        <div className="space-y-3 max-w-lg p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          {(["default", "green", "yellow", "failure", "purple", "cyan"] as const).map((color) => (
            <div key={color}>
              <p className="text-xs font-mono text-gray-400 mb-1">{color}</p>
              <Progress progress={70} color={color as any} size="sm" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Always label",   note: "Show the numeric value alongside every progress bar — either above it, inside it, or in a nearby stat card. A bar at 68% means nothing without context." },
            { label: "Color semantics", note: "Green for healthy/completed. Default blue (Scripps) for neutral progress. Yellow for approaching a threshold. Red for concerning levels (high overdue rate, low collection)." },
            { label: "Size choice",    note: "Use size=\"sm\" in dashboard stat cards and tables. Use size=\"lg\" with labelPosition=\"inside\" only for standalone KPI visualizations." },
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
