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
} from "react-icons/hi";

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeColor?: "gray" | "failure" | "warning" | "success";
};

const pimcNav: NavItem[] = [
  { label: "Dashboard",  href: "/preview/pimc-backoffice", icon: HiHome },
  { label: "Members",    href: "/preview/member-list",     icon: HiUsers,        badge: "847" },
  { label: "Invoices",   href: "#",                        icon: HiDocumentText, badge: "12", badgeColor: "failure" },
  { label: "Payments",   href: "#",                        icon: HiCurrencyDollar },
  { label: "Waitlist",   href: "/preview/waitlist",        icon: HiClock,        badge: "34" },
  { label: "Reports",    href: "#",                        icon: HiChartBar },
];

const adminNav: NavItem[] = [
  { label: "Dashboard",  href: "/preview/admin-dashboard", icon: HiChartPie },
  { label: "Products",   href: "/preview/admin-products",  icon: HiShoppingBag },
  { label: "Users",      href: "/preview/admin-users",     icon: HiUsers },
  { label: "Kanban",     href: "/preview/admin-kanban",    icon: HiViewGrid },
  { label: "Mailing",    href: "/preview/admin-mailing",   icon: HiInboxIn,      badge: "4" },
];

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

  return (
    <div className="flex h-full overflow-hidden bg-gray-50 dark:bg-gray-900">

      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-0 overflow-hidden"} shrink-0 bg-gray-900 flex flex-col transition-all duration-200`}>
        {/* Logo */}
        <div className="flex items-center px-4 py-3.5 border-b border-gray-700/50">
          <p className="text-sm font-semibold text-white tracking-tight">{subtitle}</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-3 space-y-0.5 overflow-y-auto">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  active ? "bg-primary-700 text-white font-medium" : "hover:bg-white/5"
                }`}
                style={!active ? { color: "#ffffff" } : {}}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-4 w-4 shrink-0" />
                  {item.label}
                </div>
                {item.badge && (
                  <Badge color={item.badgeColor ?? "gray"} size="xs">{item.badge}</Badge>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="px-2 py-3 border-t border-gray-700/50 space-y-0.5">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 transition-colors" style={{ color: "#ffffff" }}>
            <HiCog className="h-4 w-4 shrink-0" />Settings
          </a>
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

        {/* Topbar */}
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

        {/* Content */}
        <main className="flex-1 overflow-y-auto app-context">
          {children}
        </main>
      </div>
    </div>
  );
}
