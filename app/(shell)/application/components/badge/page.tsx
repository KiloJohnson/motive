"use client";

import { Badge } from "flowbite-react";
import { HiCheck, HiClock, HiX, HiExclamation } from "react-icons/hi";

export default function AppBadgePage() {
  return (
    <div className="min-h-full">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Components
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Badge</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Flowbite React <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">Badge</code> component
          for status indicators, tier labels, and categorization. Badges communicate
          state — they are not interactive and never replace buttons.
        </p>
      </section>

      {/* ── Subscription status ─────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Subscription status</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          The canonical status set for PIMC memberships and invoices. Color is fixed per status — never reassign.
        </p>
        <div className="flex flex-wrap items-center gap-3 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Badge color="success" icon={HiCheck}>Active</Badge>
          <Badge color="warning" icon={HiClock}>Pending</Badge>
          <Badge color="failure" icon={HiX}>Cancelled</Badge>
          <Badge color="gray">Expired</Badge>
          <Badge color="indigo" icon={HiClock}>Renewing</Badge>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Badge color="success" icon={HiCheck}>Active</Badge>
<Badge color="warning" icon={HiClock}>Pending</Badge>
<Badge color="failure" icon={HiX}>Cancelled</Badge>
<Badge color="gray">Expired</Badge>
<Badge color="indigo" icon={HiClock}>Renewing</Badge>`}</pre>
      </section>

      {/* ── Payment status ──────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Payment status</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Used in invoice tables and payment history. Overdue is always <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">failure</code> — it demands attention.
        </p>
        <div className="flex flex-wrap items-center gap-3 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Badge color="success" icon={HiCheck}>Paid</Badge>
          <Badge color="info">Sent</Badge>
          <Badge color="failure" icon={HiExclamation}>Overdue</Badge>
          <Badge color="gray">Draft</Badge>
          <Badge color="warning" icon={HiClock}>Retry scheduled</Badge>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Badge color="success" icon={HiCheck}>Paid</Badge>
<Badge color="info">Sent</Badge>
<Badge color="failure" icon={HiExclamation}>Overdue</Badge>
<Badge color="gray">Draft</Badge>`}</pre>
      </section>

      {/* ── Membership tiers ────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Membership tiers</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Gold / Diamond / Diamond+ are fixed to amber / sky / purple — consistent across all PIMC surfaces.
        </p>
        <div className="flex flex-wrap items-center gap-3 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Badge color="warning">Gold</Badge>
          <Badge color="info">Diamond</Badge>
          <Badge color="purple">Diamond+</Badge>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Badge color="warning">Gold</Badge>
<Badge color="info">Diamond</Badge>
<Badge color="purple">Diamond+</Badge>`}</pre>
      </section>

      {/* ── Sizes ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="flex flex-col gap-3">
            <p className="text-xs text-gray-400 uppercase tracking-wider">Small (default)</p>
            <div className="flex flex-wrap gap-2">
              <Badge color="success">Active</Badge>
              <Badge color="failure">Overdue</Badge>
              <Badge color="gray">Draft</Badge>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs text-gray-400 uppercase tracking-wider">Large</p>
            <div className="flex flex-wrap gap-2">
              <Badge color="success" size="sm">Active</Badge>
              <Badge color="failure" size="sm">Overdue</Badge>
              <Badge color="gray" size="sm">Draft</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* ── All colors ──────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">All color values</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Flowbite's full badge palette — use only for the semantic roles above, not freely.
        </p>
        <div className="flex flex-wrap gap-2 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          {(["info", "gray", "failure", "success", "warning", "indigo", "purple", "pink", "blue", "cyan", "teal", "green", "yellow", "red", "lime", "dark", "light"] as const).map((color) => (
            <Badge key={color} color={color}>{color}</Badge>
          ))}
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Status = color",  note: "Every status has one color. Active is always green. Overdue is always red. Paid is always green. Never repurpose a status color for a different meaning on the same surface." },
            { label: "Text required",   note: "Never use a badge with color alone — the text label is required for accessibility. Screen readers announce badge text, not badge color." },
            { label: "Not interactive", note: "Badges are display-only. If you need a clickable status filter, use a Button or a FilterChip — not a Badge." },
            { label: "Import",          note: "import { Badge } from \"flowbite-react\" — no theme override needed, semantic colors are correct as-is." },
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
