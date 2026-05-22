"use client";

import { Dropdown, Avatar, DropdownItem, DropdownDivider, DropdownHeader} from "flowbite-react";
import { HiPencil, HiMail, HiCurrencyDollar, HiDocumentText, HiBan, HiDotsVertical, HiCheck } from "react-icons/hi";

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
            <DropdownItem icon={HiPencil}>Edit member</DropdownItem>
            <DropdownItem icon={HiMail}>Resend payment link</DropdownItem>
            <DropdownItem icon={HiCurrencyDollar}>Record payment</DropdownItem>
            <DropdownItem icon={HiDocumentText}>View invoices</DropdownItem>
            <DropdownDivider />
            <DropdownItem icon={HiBan} className="text-red-600 dark:text-red-400">Cancel membership</DropdownItem>
          </Dropdown>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Dropdown label="" renderTrigger={() => <button><HiDotsVertical /></button>}>
  <DropdownItem icon={HiPencil}>Edit member</DropdownItem>
  <DropdownItem icon={HiMail}>Resend payment link</DropdownItem>
  <DropdownItem icon={HiCurrencyDollar}>Record payment</DropdownItem>
  <DropdownDivider />
  <DropdownItem icon={HiBan} className="text-red-600">Cancel membership</DropdownItem>
</Dropdown>`}</pre>
      </section>

      {/* ── Standard labeled ────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Labeled dropdown</h2>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl flex flex-wrap gap-4">
          <Dropdown label="Filter status" color="alternative" size="sm">
            <DropdownItem>All statuses</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Active</DropdownItem>
            <DropdownItem>Pending</DropdownItem>
            <DropdownItem>Overdue</DropdownItem>
            <DropdownItem>Cancelled</DropdownItem>
          </Dropdown>

          <Dropdown label="Filter tier" color="alternative" size="sm">
            <DropdownItem>All tiers</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Gold</DropdownItem>
            <DropdownItem>Diamond</DropdownItem>
            <DropdownItem>Diamond+</DropdownItem>
          </Dropdown>

          <Dropdown label="Actions" color="default" size="sm">
            <DropdownItem>Export CSV</DropdownItem>
            <DropdownItem>Print list</DropdownItem>
            <DropdownItem>Send bulk reminder</DropdownItem>
          </Dropdown>
        </div>
      </section>

      {/* ── Placement ───────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Placement options</h2>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl flex flex-wrap gap-4">
          {(["bottom", "top", "right", "left"] as const).map((p) => (
            <Dropdown key={p} label={p} placement={p} color="alternative" size="sm">
              <DropdownItem>Option one</DropdownItem>
              <DropdownItem>Option two</DropdownItem>
            </Dropdown>
          ))}
        </div>
      </section>

      {/* ── User / topbar menu ──────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">User menu — topbar</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          The avatar dropdown in the top bar. Shows identity context, quick links, and sign out.
          Use <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">DropdownHeader</code> for the identity block.
        </p>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4 flex justify-end">
          <Dropdown
            label=""
            dismissOnClick
            renderTrigger={() => (
              <button className="flex items-center gap-2 rounded-full focus:ring-2 focus:ring-primary-300">
                <Avatar placeholderInitials="KJ" rounded size="sm" />
              </button>
            )}
          >
            <DropdownHeader>
              <span className="block text-sm font-semibold text-gray-900 dark:text-white">Kilo Johnson</span>
              <span className="block text-xs text-gray-500 truncate">kilo@scrippshealth.org</span>
            </DropdownHeader>
            <DropdownItem>My profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Dropdown label="" renderTrigger={() => <Avatar placeholderInitials="KJ" rounded size="sm" />}>
  <DropdownHeader>
    <span className="block text-sm font-semibold">Kilo Johnson</span>
    <span className="block text-xs text-gray-500">kilo@scrippshealth.org</span>
  </DropdownHeader>
  <DropdownItem>My profile</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>`}</pre>
      </section>

      {/* ── Checkbox items ───────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Multi-select filter</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          For filters that allow multiple selections — billing cycles, tier filters, status filters.
          Use a custom item with a checkbox rather than dismissing on click.
        </p>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4 flex gap-4">
          <Dropdown label="Billing cycle" color="alternative" size="sm" dismissOnClick={false}>
            <DropdownHeader>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Select cycles</span>
            </DropdownHeader>
            {["Monthly", "Semi-annual", "Annual"].map((item) => (
              <DropdownItem key={item} as="label" className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-primary-600" defaultChecked={item === "Annual"} />
                <span className="text-sm">{item}</span>
              </DropdownItem>
            ))}
          </Dropdown>

          <Dropdown label="Tier" color="alternative" size="sm" dismissOnClick={false}>
            <DropdownHeader>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Select tiers</span>
            </DropdownHeader>
            {["Gold", "Diamond", "Diamond+"].map((item) => (
              <DropdownItem key={item} as="label" className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-primary-600" defaultChecked />
                <span className="text-sm">{item}</span>
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Dropdown label="Billing cycle" color="alternative" dismissOnClick={false}>
  <DropdownItem as="label" className="flex items-center gap-3 cursor-pointer">
    <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
    <span>Monthly</span>
  </DropdownItem>
</Dropdown>`}</pre>
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
