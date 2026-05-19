"use client";

import { Tabs } from "flowbite-react";
import { HiDocumentText, HiCurrencyDollar, HiChat, HiClipboardList } from "react-icons/hi";

export default function AppTabsPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application · Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Tabs</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Flowbite React <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">Tabs</code> for
          member detail views, invoice history, SMS logs, and audit trails.
          Tabs organize related content without navigating away.
        </p>
      </section>

      {/* ── Member detail tabs ──────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Member detail view</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          The standard tab layout for a PIMC member record. Each tab contains a full section — invoices, payment history, SMS log, audit trail.
        </p>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Garcia, Maria</h3>
              <p className="text-sm text-gray-400">Diamond+ · Member since Jan 2024</p>
            </div>
            <Tabs>
              <Tabs.Item title="Invoices" icon={HiDocumentText}>
                <div className="py-4 text-sm text-gray-500 dark:text-gray-400">
                  Invoice history, PDF downloads, and payment status for this member. See{" "}
                  <span style={{ color: "var(--motive-primary)" }}>Application → Data → Tables</span> for the full table pattern.
                </div>
              </Tabs.Item>
              <Tabs.Item title="Payments" icon={HiCurrencyDollar}>
                <div className="py-4 text-sm text-gray-500 dark:text-gray-400">
                  Payment method on file, transaction history, cash/check records.
                </div>
              </Tabs.Item>
              <Tabs.Item title="SMS history" icon={HiChat}>
                <div className="py-4 text-sm text-gray-500 dark:text-gray-400">
                  All SMS messages sent to this member — reminders, 2FA codes, opt-in/out events. 4-year retention.
                </div>
              </Tabs.Item>
              <Tabs.Item title="Audit log" icon={HiClipboardList}>
                <div className="py-4 text-sm text-gray-500 dark:text-gray-400">
                  All staff actions on this record. Leader role only.
                </div>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Tabs>
  <Tabs.Item title="Invoices" icon={HiDocumentText}>
    {/* invoice table */}
  </Tabs.Item>
  <Tabs.Item title="Payments" icon={HiCurrencyDollar}>
    {/* payment history */}
  </Tabs.Item>
  <Tabs.Item title="SMS history" icon={HiChat}>
    {/* sms log */}
  </Tabs.Item>
</Tabs>`}</pre>
      </section>

      {/* ── Style variants ──────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Style variants</h2>
        <div className="space-y-8">
          {(["default", "underline", "pills", "fullWidth"] as const).map((style) => (
            <div key={style}>
              <p className="text-xs font-mono text-gray-400 mb-3">variant="{style}"</p>
              <Tabs variant={style}>
                <Tabs.Item title="Overview" active>Content for overview tab.</Tabs.Item>
                <Tabs.Item title="Details">Content for details tab.</Tabs.Item>
                <Tabs.Item title="History">Content for history tab.</Tabs.Item>
              </Tabs>
            </div>
          ))}
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "Recommended style", note: "Use variant=\"underline\" for most application surfaces — it's the least visually heavy and cleanest in data-dense views. Reserve \"pills\" for secondary navigation within a page section." },
            { label: "Max 5 tabs",        note: "If you need more than 5 tabs, consider a sidebar nav or a secondary page hierarchy instead. Tabs that overflow horizontally are unusable on smaller screens." },
            { label: "No nesting",        note: "Never put Tabs inside Tabs. If a tab's content needs sub-sections, use a secondary nav pattern or expand the section inline." },
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
