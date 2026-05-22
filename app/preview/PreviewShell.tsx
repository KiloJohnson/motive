"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dropdown, DropdownHeader, DropdownItem, DropdownDivider, Avatar, Badge } from "flowbite-react";
import {
  HiHome, HiUsers, HiDocumentText, HiCurrencyDollar,
  HiClock, HiChartBar, HiCog, HiLogout, HiUser,
  HiBell, HiMenu, HiX, HiChevronDown,
  HiChartPie, HiShoppingBag, HiInboxIn, HiViewGrid,
  HiLockClosed,
} from "react-icons/hi";

// ── Nav types ──────────────────────────────────────────────────────────────

type FlatItem = {
  kind: "link";
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeColor?: "gray" | "failure" | "warning" | "success";
  disabled?: boolean;
};

type GroupItem = {
  kind: "group";
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: { label: string; href: string }[];
};

type NavEntry = FlatItem | GroupItem;

// ── PIMC nav ───────────────────────────────────────────────────────────────

const pimcNav: NavEntry[] = [
  { kind: "link", label: "Dashboard",  href: "/preview/pimc-backoffice",        icon: HiHome },
  { kind: "link", label: "Invoices",   href: "/preview/dashboard-analytics",    icon: HiDocumentText, badge: "12", badgeColor: "failure" },
  { kind: "link", label: "Members",    href: "/preview/member-list",            icon: HiUsers,        badge: "847" },
  { kind: "link", label: "Waitlist",   href: "/preview/waitlist",               icon: HiClock,        badge: "34" },
  { kind: "link", label: "Payments",   href: "#", icon: HiCurrencyDollar, disabled: true },
  { kind: "link", label: "Analytics",  href: "#", icon: HiChartBar,       disabled: true },
];

// ── Admin nav ──────────────────────────────────────────────────────────────

const adminNav: NavEntry[] = [
  {
    kind: "group", label: "Dashboards", icon: HiChartPie,
    items: [
      { label: "Main",               href: "/preview/admin-dashboard" },
      { label: "SaaS",               href: "/preview/admin-saas" },
      { label: "Bank",               href: "/preview/admin-bank" },
      { label: "Car Service",        href: "/preview/admin-car-service" },
      { label: "Crypto",             href: "/preview/admin-crypto" },
      { label: "Customer Service",   href: "/preview/admin-customer-service" },
      { label: "E-Commerce",         href: "/preview/admin-ecommerce" },
      { label: "Logistics",          href: "/preview/admin-logistics" },
      { label: "Marketing",          href: "/preview/admin-marketing" },
      { label: "Music",              href: "/preview/admin-music" },
      { label: "Project Management", href: "/preview/admin-project-management" },
    ],
  },
  {
    kind: "group", label: "Project Mgmt", icon: HiDocumentText,
    items: [
      { label: "All Files",       href: "/preview/admin-all-files" },
      { label: "All Projects",    href: "/preview/admin-all-projects" },
      { label: "My Projects",     href: "/preview/admin-my-projects" },
      { label: "PM Table",        href: "/preview/admin-project-management-table" },
      { label: "Project Summary", href: "/preview/admin-project-summary" },
      { label: "To-Do",           href: "/preview/admin-todo" },
      { label: "To-Do Upcoming",  href: "/preview/admin-todo-upcoming" },
    ],
  },
  {
    kind: "group", label: "E-Commerce", icon: HiShoppingBag,
    items: [
      { label: "Products",           href: "/preview/admin-products" },
      { label: "Datatables",         href: "/preview/admin-datatables" },
      { label: "Billing",            href: "/preview/admin-billing" },
      { label: "Invoices",           href: "/preview/admin-invoices" },
      { label: "Invoice",            href: "/preview/admin-invoice" },
      { label: "Invoice Preview",    href: "/preview/admin-invoice-preview" },
      { label: "Create Invoice",     href: "/preview/admin-invoice-create" },
      { label: "Transactions",       href: "/preview/admin-transactions" },
      { label: "Single Transaction",  href: "/preview/admin-transaction" },
    ],
  },
  {
    kind: "group", label: "Users", icon: HiUsers,
    items: [
      { label: "All Users",      href: "/preview/admin-users" },
      { label: "User Feed",      href: "/preview/admin-feed" },
      { label: "Profile",        href: "/preview/admin-profile" },
      { label: "Settings",       href: "/preview/admin-settings" },
      { label: "Notifications",  href: "/preview/admin-notifications" },
    ],
  },
  { kind: "link",  label: "Kanban",         href: "/preview/admin-kanban",    icon: HiViewGrid },
  { kind: "link",  label: "Calendar",       href: "/preview/admin-calendar",  icon: HiClock },
  { kind: "link",  label: "AI Chat",        href: "/preview/admin-ai-chat",   icon: HiInboxIn },
  { kind: "link",  label: "Mailing",        href: "/preview/admin-mailing",   icon: HiInboxIn, badge: "4" },
  {
    kind: "group", label: "Pages", icon: HiDocumentText,
    items: [
      { label: "Pricing",        href: "/preview/admin-pricing" },
      { label: "404 Not Found",  href: "/preview/admin-404" },
      { label: "500 Error",      href: "/preview/admin-500" },
      { label: "Maintenance",    href: "/preview/admin-maintenance" },
      { label: "Text Editor",    href: "/preview/admin-text-editor" },
      { label: "API Keys",       href: "/preview/admin-api" },
      { label: "Chat Room",      href: "/preview/admin-chat-room" },
      { label: "Events",         href: "/preview/admin-events" },
      { label: "Integrations",   href: "/preview/admin-integrations" },
    ],
  },
  {
    kind: "group", label: "Authentication", icon: HiLockClosed,
    items: [
      { label: "Sign In",           href: "/preview/admin-signin" },
      { label: "Sign Up",           href: "/preview/admin-signup" },
      { label: "Forgot Password",   href: "/preview/admin-forgot-password" },
      { label: "Reset Password",    href: "/preview/admin-reset-password" },
      { label: "Profile Lock",      href: "/preview/admin-profile-lock" },
    ],
  },
];

// ── Chevron ────────────────────────────────────────────────────────────────

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ transition: "transform 0.15s ease", transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// ── Shell ──────────────────────────────────────────────────────────────────

export function PreviewShell({
  children,
  title,
  variant = "pimc",
}: {
  children: React.ReactNode;
  title?: string;
  variant?: "pimc" | "admin";
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const nav = variant === "admin" ? adminNav : pimcNav;
  const subtitle = variant === "admin" ? "Admin Dashboard" : "PIMC Back Office";
  const displayTitle = title ?? subtitle;

  // All groups open by default
  const [openGroups, setOpenGroups] = useState<Set<string>>(
    () => new Set(adminNav.filter((e): e is GroupItem => e.kind === "group").map((e) => e.label))
  );

  const toggleGroup = (label: string) =>
    setOpenGroups((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });

  return (
    <div className="flex h-full overflow-hidden bg-gray-50 dark:bg-gray-900">

      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-0 overflow-hidden"} shrink-0 bg-gray-900 flex flex-col transition-all duration-200`}>

        {/* Logo */}
        <div className="flex items-center px-4 py-3.5 border-b border-gray-700/50">
          <p className="text-sm font-semibold text-white tracking-tight">{subtitle}</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-3 overflow-y-auto">
          {nav.map((entry) => {
            if (entry.kind === "link") {
              if (entry.disabled) {
                return (
                  <span
                    key={entry.label}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm mb-0.5 cursor-not-allowed opacity-70 text-white/60"
                  >
                    <entry.icon className="h-4 w-4 shrink-0" />
                    {entry.label}
                  </span>
                );
              }
              const active = pathname === entry.href;
              return (
                <Link
                  key={entry.label}
                  href={entry.href}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors mb-0.5 ${
                    active ? "bg-primary-700 text-white font-medium" : "hover:bg-white/5"
                  }`}
                  style={!active ? { color: "#ffffff" } : {}}
                >
                  <div className="flex items-center gap-3">
                    <entry.icon className="h-4 w-4 shrink-0" />
                    {entry.label}
                  </div>
                  {entry.badge && (
                    <Badge color={entry.badgeColor ?? "gray"} size="xs">{entry.badge}</Badge>
                  )}
                </Link>
              );
            }

            // Group
            const isOpen = openGroups.has(entry.label);
            const anyActive = entry.items.some((i) => pathname === i.href);
            return (
              <div key={entry.label} className="mb-0.5">
                <button
                  onClick={() => toggleGroup(entry.label)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors hover:bg-white/5 ${
                    anyActive ? "text-white" : "text-white/70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <entry.icon className="h-4 w-4 shrink-0" />
                    {entry.label}
                  </div>
                  <Chevron open={isOpen} />
                </button>
                <div
                  className="overflow-hidden"
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.15s ease",
                  }}
                >
                  <ul className="overflow-hidden pl-9 py-0.5 space-y-0.5">
                    {entry.items.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                              active
                                ? "bg-primary-700 text-white font-medium"
                                : "hover:bg-white/5"
                            }`}
                            style={!active ? { color: "#ffffffcc" } : {}}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="px-2 py-3 border-t border-gray-700/50 space-y-0.5">
          <Link href="/preview/admin-settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 transition-colors" style={{ color: "#ffffff" }}>
            <HiCog className="h-4 w-4 shrink-0" />Settings
          </Link>
          <div className="flex items-center gap-3 px-3 py-2">
            <Avatar placeholderInitials="KJ" rounded size="xs" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white truncate">Kilo Johnson</p>
              <p className="text-xs text-gray-500 truncate">Staff</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="shrink-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {sidebarOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
              </button>
              <h1 className="text-sm font-semibold text-gray-800 dark:text-white">{displayTitle}</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="relative p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                <HiBell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
              </button>
              <Dropdown label="" renderTrigger={() => (
                <button className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Avatar placeholderInitials="KJ" rounded size="sm" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">Kilo Johnson</span>
                  <HiChevronDown className="h-3.5 w-3.5 text-gray-400 hidden sm:block" />
                </button>
              )}>
                <DropdownHeader>
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">Kilo Johnson</span>
                  <span className="block text-xs text-gray-500">kilo@scrippshealth.org · Staff</span>
                </DropdownHeader>
                <DropdownItem icon={HiUser}>My profile</DropdownItem>
                <DropdownItem icon={HiCog}>Settings</DropdownItem>
                <DropdownDivider />
                <DropdownItem icon={HiLogout}>Sign out</DropdownItem>
              </Dropdown>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto app-context">
          {children}
        </main>
      </div>
    </div>
  );
}
