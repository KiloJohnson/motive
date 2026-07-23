"use client";

import { Tooltip, Button, Badge } from "flowbite-react";
import { HiInformationCircle, HiQuestionMarkCircle } from "react-icons/hi";

export default function AppTooltipPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application · Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Tooltip</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Flowbite React <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">Tooltip</code> for
          clarifying labels, explaining status values, and surfacing contextual help
          without cluttering the interface.
        </p>
      </section>

      {/* ── Status clarification ────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Status clarification</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Hover the badges to see what each status means — useful for FrontDesk staff who are new to the system.
        </p>
        <div className="flex flex-wrap items-center gap-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Tooltip content="Member is current. No outstanding invoices.">
            <Badge color="success">Active</Badge>
          </Tooltip>
          <Tooltip content="Invoice sent, awaiting payment. Due within 30 days.">
            <Badge color="info">Sent</Badge>
          </Tooltip>
          <Tooltip content="Payment past due. Retry scheduled per the retry policy (day 3, 7, 14).">
            <Badge color="failure">Overdue</Badge>
          </Tooltip>
          <Tooltip content="Membership cancelled at end of billing period. Prorated refund issued.">
            <Badge color="gray">Cancelled</Badge>
          </Tooltip>
          <Tooltip content="Renewing at end of current billing period. No action required.">
            <Badge color="indigo">Renewing</Badge>
          </Tooltip>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Tooltip content="Payment past due. Retry scheduled per the retry policy.">
  <Badge color="failure">Overdue</Badge>
</Tooltip>`}</pre>
      </section>

      {/* ── Icon help triggers ──────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Icon help triggers</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Use a <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">HiInformationCircle</code> or <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">HiQuestionMarkCircle</code> as the tooltip trigger next to field labels that need explanation.
        </p>
        <div className="flex flex-col gap-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Billing cycle</span>
            <Tooltip content="Monthly, semi-annual, or annual. All cycles bill the same total annual amount. No mid-cycle changes — changes apply at next renewal.">
              <HiInformationCircle className="h-4 w-4 text-gray-400 cursor-help" />
            </Tooltip>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Payment tokenization</span>
            <Tooltip content="Card data is handled by a PCI-compliant hosted iframe. Application servers never see raw card numbers — SAQ A compliant.">
              <HiQuestionMarkCircle className="h-4 w-4 text-gray-400 cursor-help" />
            </Tooltip>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">SMS quiet hours</span>
            <Tooltip content="No automated SMS sent outside 8am–9pm local time. STOP replies are honored immediately and logged for 4 years.">
              <HiInformationCircle className="h-4 w-4 text-gray-400 cursor-help" />
            </Tooltip>
          </div>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<div className="flex items-center gap-2">
  <label>Billing cycle</label>
  <Tooltip content="Monthly, semi-annual, or annual...">
    <HiInformationCircle className="h-4 w-4 text-gray-400 cursor-help" />
  </Tooltip>
</div>`}</pre>
      </section>

      {/* ── Placement ───────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Placement</h2>
        <div className="flex flex-wrap gap-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          {(["top", "right", "bottom", "left"] as const).map((p) => (
            <Tooltip key={p} content={`Tooltip on the ${p}`} placement={p}>
              <Button color="alternative" size="sm">{p}</Button>
            </Tooltip>
          ))}
        </div>
      </section>

      {/* ── Rich content ────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Rich content tooltip</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Pass JSX as the <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">content</code> prop
          for multi-line or structured tooltips. Use for billing rule summaries, tier feature lists, retry schedule details.
        </p>
        <div className="flex flex-wrap items-center gap-8 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Tooltip
            content={
              <div className="text-sm space-y-1 max-w-xs">
                <p className="font-semibold text-white">Retry schedule</p>
                <p className="text-gray-300">Day 3 — first retry</p>
                <p className="text-gray-300">Day 7 — second retry</p>
                <p className="text-gray-300">Day 14 — final retry</p>
                <p className="text-gray-400 text-xs mt-2">Membership cancelled if all retries fail.</p>
              </div>
            }
          >
            <Badge color="failure" className="cursor-help">Payment failed <HiInformationCircle className="ml-1 h-3.5 w-3.5 inline" /></Badge>
          </Tooltip>

          <Tooltip
            content={
              <div className="text-sm space-y-1 max-w-xs">
                <p className="font-semibold text-white">Diamond+ includes</p>
                <p className="text-gray-300">✓ Executive Health WholePerson Exam</p>
                <p className="text-gray-300">✓ Scripps Center for Executive Health</p>
                <p className="text-gray-300">✓ 24/7 physician access</p>
              </div>
            }
          >
            <Badge color="indigo" className="cursor-help">Diamond+ <HiQuestionMarkCircle className="ml-1 h-3.5 w-3.5 inline" /></Badge>
          </Tooltip>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Tooltip
  content={
    <div className="text-sm space-y-1 max-w-xs">
      <p className="font-semibold text-white">Retry schedule</p>
      <p className="text-gray-300">Day 3 — first retry</p>
      <p className="text-gray-300">Day 7 — second retry</p>
    </div>
  }
>
  <Badge color="failure">Payment failed</Badge>
</Tooltip>`}</pre>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Supplement, don't hide", note: "Tooltips should supplement visible labels — never be the only source of critical information. If a user misses the tooltip, they should still be able to complete the task." },
            { label: "Short content",          note: "Keep tooltip text to 1–2 sentences. If the explanation needs more space, use a help drawer or a documentation link instead." },
            { label: "cursor-help",            note: "When using an icon as the tooltip trigger, add cursor-help so users know it's interactive without clicking." },
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
