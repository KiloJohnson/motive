"use client";

import { useState } from "react";
import { Badge } from "flowbite-react";
import {
  HiHome, HiUsers, HiDocumentText, HiCurrencyDollar,
  HiClock, HiCog, HiChevronDown, HiChevronRight,
} from "react-icons/hi";

function BlockPreview({ children, label, code }: {
  children: React.ReactNode;
  label: string;
  code: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">{label}</h2>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4 max-w-xs">
        {children}
      </div>
      <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{code}</pre>
    </div>
  );
}

const navItems = [
  { label: "Dashboard", icon: HiHome, active: true },
  { label: "Members", icon: HiUsers, badge: "847" },
  { label: "Invoices", icon: HiDocumentText, badge: "12", badgeColor: "failure" as const },
  { label: "Payments", icon: HiCurrencyDollar },
  { label: "Waitlist", icon: HiClock, badge: "34" },
];

function DefaultSidebar() {
  return (
    <aside className="bg-gray-800 h-auto min-h-[320px] w-full py-4">
      <div className="px-3 mb-4 flex items-center gap-2">
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/scripps_dark.svg`} alt="Scripps" className="h-6 w-auto" />
        <span className="text-sm font-semibold text-white">PIMC Back Office</span>
      </div>
      <nav className="px-2 space-y-0.5">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
              item.active
                ? "bg-white/10 text-white font-medium"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </div>
            {item.badge && (
              <Badge color={item.badgeColor ?? "gray"} size="xs">{item.badge}</Badge>
            )}
          </a>
        ))}
      </nav>
      <div className="px-2 mt-4 pt-4 border-t border-gray-700">
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
          <HiCog className="h-4 w-4 shrink-0" />Settings
        </a>
      </div>
    </aside>
  );
}

function CollapsibleSidebar() {
  const [membersOpen, setMembersOpen] = useState(true);

  return (
    <aside className="bg-gray-800 h-auto min-h-[320px] w-full py-4">
      <div className="px-3 mb-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Main menu</span>
      </div>
      <nav className="px-2 space-y-0.5">
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm bg-white/10 text-white font-medium">
          <HiHome className="h-4 w-4 shrink-0" />Dashboard
        </a>
        <div>
          <button
            onClick={() => setMembersOpen(!membersOpen)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <div className="flex items-center gap-3">
              <HiUsers className="h-4 w-4 shrink-0" />Members
            </div>
            {membersOpen ? <HiChevronDown className="h-3.5 w-3.5" /> : <HiChevronRight className="h-3.5 w-3.5" />}
          </button>
          {membersOpen && (
            <div className="ml-7 mt-0.5 space-y-0.5">
              {["All members", "Waitlist", "Inactive"].map((sub) => (
                <a key={sub} href="#" className="block px-3 py-1.5 rounded-lg text-xs text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
                  {sub}
                </a>
              ))}
            </div>
          )}
        </div>
        <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
          <div className="flex items-center gap-3">
            <HiDocumentText className="h-4 w-4 shrink-0" />Invoices
          </div>
          <Badge color="failure" size="xs">12</Badge>
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
          <HiCurrencyDollar className="h-4 w-4 shrink-0" />Payments
        </a>
      </nav>
    </aside>
  );
}

export default function SideNavigationPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Side Navigation</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Sidebar navigation patterns for the PIMC back office and portal. Always dark background.
          Badge counts surface urgent items — overdue invoices, waitlist size.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/side-navigation/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — flat nav with badges"
          code={`<aside className="bg-gray-800 py-4">
  <nav className="px-2 space-y-0.5">
    {navItems.map(item => (
      <a key={item.label} href="#"
        className={\`flex items-center justify-between px-3 py-2 rounded-lg text-sm \${
          item.active ? "bg-white/10 text-white font-medium" : "text-gray-400 hover:bg-white/5"
        }\`}
      >
        <div className="flex items-center gap-3">
          <item.icon className="h-4 w-4" />
          {item.label}
        </div>
        {item.badge && <Badge color={item.badgeColor ?? "gray"} size="xs">{item.badge}</Badge>}
      </a>
    ))}
  </nav>
</aside>`}
        >
          <DefaultSidebar />
        </BlockPreview>

        <BlockPreview
          label="With collapsible sections — sub-nav"
          code={`const [open, setOpen] = useState(true);

<aside className="bg-gray-800 py-4">
  <button onClick={() => setOpen(!open)}
    className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-400 hover:text-white">
    <div className="flex items-center gap-3">
      <HiUsers className="h-4 w-4" />Members
    </div>
    {open ? <HiChevronDown /> : <HiChevronRight />}
  </button>
  {open && (
    <div className="ml-7 space-y-0.5">
      <a href="#" className="block px-3 py-1.5 text-xs text-gray-400 hover:text-white">All members</a>
      <a href="#" className="block px-3 py-1.5 text-xs text-gray-400 hover:text-white">Waitlist</a>
    </div>
  )}
</aside>`}
        >
          <CollapsibleSidebar />
        </BlockPreview>

      </section>
    </div>
  );
}
