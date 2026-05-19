"use client";

import { Button } from "flowbite-react";
import { HiArrowRight, HiPlus, HiDownload, HiTrash } from "react-icons/hi";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AppButtonsPage() {
  return (
    <div className="min-h-full">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Components
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Button</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Flowbite React <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">Button</code> component
          with Scripps tokens applied. Use <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">color="default"</code> for
          the primary Scripps blue. All other colors remain available for semantic use.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Note: Application buttons use <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">rounded-lg</code> corners and compact spacing —
          distinct from the Marketing context pill buttons.
        </p>
      </section>

      {/* ── Default / Primary ───────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Default (Scripps primary)</h2>
        <div className="flex flex-wrap items-center gap-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Button color="default">Default</Button>
          <Button color="default" disabled>Disabled</Button>
          <Button color="default" isProcessing>Loading</Button>
          <Button color="default"><HiPlus className="mr-2 h-4 w-4" />New member</Button>
          <Button color="default">View invoices<HiArrowRight className="ml-2 h-4 w-4" /></Button>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Button color="default">Default</Button>
<Button color="default" disabled>Disabled</Button>
<Button color="default" isProcessing>Loading</Button>
<Button color="default"><HiPlus className="mr-2 h-4 w-4" />New member</Button>`}</pre>
      </section>

      {/* ── Sizes ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Button color="default" size="xs">Extra small</Button>
          <Button color="default" size="sm">Small</Button>
          <Button color="default" size="md">Medium</Button>
          <Button color="default" size="lg">Large</Button>
          <Button color="default" size="xl">Extra large</Button>
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          Default size for application UI is <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">sm</code> (in tables, toolbars) or <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">md</code> (in modals, forms).
        </p>
      </section>

      {/* ── Outline / Alternative ───────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Outline &amp; alternative</h2>
        <div className="flex flex-wrap items-center gap-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Button color="default" outline>Outline primary</Button>
          <Button color="default" outline disabled>Disabled</Button>
          <Button color="alternative">Alternative</Button>
          <Button color="light">Light</Button>
          <Button color="dark">Dark</Button>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Button color="default" outline>Outline primary</Button>
<Button color="alternative">Alternative</Button>
<Button color="light">Light</Button>`}</pre>
      </section>

      {/* ── Semantic colors ─────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Semantic colors</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Use semantic colors for destructive or status-driven actions — never for branding.
        </p>
        <div className="flex flex-wrap items-center gap-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Button color="green"><HiDownload className="mr-2 h-4 w-4" />Export</Button>
          <Button color="red"><HiTrash className="mr-2 h-4 w-4" />Delete member</Button>
          <Button color="yellow">Warning action</Button>
          <Button color="green" outline>Outline success</Button>
          <Button color="red" outline>Outline danger</Button>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Button color="green">Export</Button>
<Button color="red">Delete member</Button>
<Button color="yellow">Warning action</Button>`}</pre>
      </section>

      {/* ── Pill variant ────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Pill variant</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Available but use sparingly in application UI. Reserve pill shape for tag/filter interactions, not primary actions.
          Marketing context uses pill buttons extensively — see <span style={{ color: "var(--motive-primary)" }}>Marketing → Components → Buttons</span>.
        </p>
        <div className="flex flex-wrap items-center gap-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <Button color="default" pill>Pill primary</Button>
          <Button color="alternative" pill>Pill alternative</Button>
          <Button color="default" pill outline>Pill outline</Button>
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Primary action",   note: "One per section or modal. Use color=\"default\" — this is Scripps blue, not Flowbite blue. The primary color scale in globals.css maps it." },
            { label: "Secondary action", note: "Use color=\"alternative\" or color=\"light\" alongside a primary. Never two color=\"default\" buttons side by side." },
            { label: "Destructive",      note: "color=\"red\" for irreversible actions (delete, cancel subscription). Always pair with a confirmation modal." },
            { label: "Context split",    note: "Application buttons are rounded-lg. Marketing buttons are pill (rounded-full). Don't mix contexts in the same surface." },
            { label: "Import",           note: "import { Button } from \"flowbite-react\" — no custom wrapper needed. Theme is applied globally via the primary color scale in globals.css." },
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
