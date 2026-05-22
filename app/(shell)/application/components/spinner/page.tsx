"use client";

import { Spinner, Button } from "flowbite-react";

export default function AppSpinnerPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application · Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Spinner</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Flowbite React <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">Spinner</code> for
          loading states during API calls, payment processing, and data fetching.
          Always pair with a label — never show a spinner alone.
        </p>
      </section>

      {/* ── Standalone ──────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Standalone</h2>
        <div className="flex flex-wrap items-center gap-8 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Spinner size={size} />
              <span className="text-xs text-gray-400 font-mono">{size}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── In button (most common) ─────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">In button — most common use</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Use <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">isProcessing</code> on the Button component instead of manually placing a spinner. It handles size, position, and aria state.
        </p>
        <div className="flex flex-wrap items-center gap-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Button color="default"><Spinner size="sm" className="mr-2" />Processing payment…</Button>
          <Button color="default" disabled><Spinner size="sm" className="mr-2" />Saving…</Button>
          <Button color="alternative"><Spinner size="sm" className="mr-2" />Loading members…</Button>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`// Prefer isProcessing on Button over manual Spinner placement
<Button color="default"><Spinner size="sm" className="mr-2" />Processing payment…</Button>

// Manual spinner with label — for page-level loading states
<div className="flex items-center gap-2">
  <Spinner size="sm" />
  <span className="text-sm text-gray-500">Loading invoice data…</span>
</div>`}</pre>
      </section>

      {/* ── Page-level loading ──────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Page-level loading</h2>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="flex flex-col items-center gap-3 py-12 text-center">
            <Spinner size="lg" />
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Loading member list…</p>
            <p className="text-xs text-gray-400">This usually takes less than a second</p>
          </div>
        </div>
      </section>

      {/* ── Colors ──────────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Colors</h2>
        <div className="flex flex-wrap items-center gap-6 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          {(["info", "success", "failure", "warning", "pink", "purple"] as const).map((color) => (
            <div key={color} className="flex flex-col items-center gap-2">
              <Spinner color={color} />
              <span className="text-xs text-gray-400 font-mono">{color}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Always label",   note: "Never show a spinner without text context. \"Processing payment…\" tells the user what's happening. A bare spinner creates anxiety." },
            { label: "isProcessing",   note: "For button loading states, use the isProcessing prop on Button — it handles the spinner placement and disables the button automatically." },
            { label: "Timeout fallback", note: "If a spinner has been visible for more than 8 seconds, show an error or fallback message. Don't leave users waiting indefinitely." },
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
