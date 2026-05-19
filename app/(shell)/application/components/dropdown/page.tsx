"use client";

import { Dropdown } from "flowbite-react";
import { HiPencil, HiMail, HiCurrencyDollar, HiDocumentText, HiBan, HiDotsVertical } from "react-icons/hi";

export default function AppDropdownPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application · Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Dropdown</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Flowbite React <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">Dropdown</code> for
          row actions, overflow menus, and filter selectors. The kebab menu (⋮) pattern
          in data tables lives here.
        </p>
      </section>

      {/* ── Row actions (kebab) ─────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Row actions</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          The standard pattern for table rows with 3+ actions. Trigger is an icon-only button — no visible label.
        </p>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4 flex items-center gap-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">Garcia, Maria — Diamond+</span>
          <Dropdown
            label=""
            dismissOnClick
            renderTrigger={() => (
              <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                <HiDotsVertical className="h-4 w-4" />
              </button>
            )}
          >
            <Dropdown.Item icon={HiPencil}>Edit member</Dropdown.Item>
            <Dropdown.Item icon={HiMail}>Resend payment link</Dropdown.Item>
            <Dropdown.Item icon={HiCurrencyDollar}>Record payment</Dropdown.Item>
            <Dropdown.Item icon={HiDocumentText}>View invoices</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item icon={HiBan} className="text-red-600 dark:text-red-400">Cancel membership</Dropdown.Item>
          </Dropdown>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Dropdown label="" renderTrigger={() => <button><HiDotsVertical /></button>}>
  <Dropdown.Item icon={HiPencil}>Edit member</Dropdown.Item>
  <Dropdown.Item icon={HiMail}>Resend payment link</Dropdown.Item>
  <Dropdown.Item icon={HiCurrencyDollar}>Record payment</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item icon={HiBan} className="text-red-600">Cancel membership</Dropdown.Item>
</Dropdown>`}</pre>
      </section>

      {/* ── Standard labeled ────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Labeled dropdown</h2>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl flex flex-wrap gap-4">
          <Dropdown label="Filter status" color="alternative" size="sm">
            <Dropdown.Item>All statuses</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Active</Dropdown.Item>
            <Dropdown.Item>Pending</Dropdown.Item>
            <Dropdown.Item>Overdue</Dropdown.Item>
            <Dropdown.Item>Cancelled</Dropdown.Item>
          </Dropdown>

          <Dropdown label="Filter tier" color="alternative" size="sm">
            <Dropdown.Item>All tiers</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Gold</Dropdown.Item>
            <Dropdown.Item>Diamond</Dropdown.Item>
            <Dropdown.Item>Diamond+</Dropdown.Item>
          </Dropdown>

          <Dropdown label="Actions" color="default" size="sm">
            <Dropdown.Item>Export CSV</Dropdown.Item>
            <Dropdown.Item>Print list</Dropdown.Item>
            <Dropdown.Item>Send bulk reminder</Dropdown.Item>
          </Dropdown>
        </div>
      </section>

      {/* ── Placement ───────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Placement options</h2>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl flex flex-wrap gap-4">
          {(["bottom", "top", "right", "left"] as const).map((p) => (
            <Dropdown key={p} label={p} placement={p} color="alternative" size="sm">
              <Dropdown.Item>Option one</Dropdown.Item>
              <Dropdown.Item>Option two</Dropdown.Item>
            </Dropdown>
          ))}
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "3+ actions",      note: "Use Dropdown when a row or element has 3 or more actions. For 1–2 actions, use inline text links or small buttons — a menu is unnecessary overhead." },
            { label: "Destructive last", note: "Always put destructive actions (Cancel, Delete, Remove) at the bottom, separated by a Divider. Style them with text-red-600 to signal danger." },
            { label: "Kebab trigger",   note: "For table rows, use a renderTrigger icon button — not the default labeled button. Label adds visual noise in dense tables." },
            { label: "dismissOnClick",  note: "Always set dismissOnClick on action menus so the menu closes after the user picks an item." },
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
