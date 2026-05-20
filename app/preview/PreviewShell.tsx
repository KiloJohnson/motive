"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dropdown, Avatar, Badge } from "flowbite-react";
import {
  HiHome, HiUsers, HiDocumentText, HiCurrencyDollar,
  HiClock, HiChartBar, HiCog, HiLogout, HiUser,
  HiBell, HiMenu, HiX, HiChevronDown, HiChevronRight,
} from "react-icons/hi";

const nav = [
  { label: "Dashboard",   href: "/preview/pimc-backoffice", icon: HiHome },
  { label: "Members",     href: "/preview/member-list",      icon: HiUsers,          badge: "847" },
  { label: "Invoices",    href: "#",                                      icon: HiDocumentText,   badge: "12", badgeColor: "failure" as const },
  { label: "Payments",    href: "#",                                      icon: HiCurrencyDollar },
  { label: "Waitlist",    href: "/preview/waitlist",          icon: HiClock,          badge: "34" },
  { label: "Reports",     href: "#",                                      icon: HiChartBar },
];

export function PreviewShell({
  children,
  title = "PIMC Back Office",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">

      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-0 overflow-hidden"} shrink-0 bg-gray-900 flex flex-col transition-all duration-200`}>
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-gray-700/50">
          <img src="/logos/scripps_dark.svg" alt="Scripps" className="h-7 w-auto" />
          <div>
            <p className="text-xs font-semibold text-white leading-tight">PIMC Back Office</p>
            <p className="text-xs text-gray-500 leading-tight">Scripps Health</p>
          </div>
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
                  active ? "bg-primary-700 text-white font-medium" : "hover:bg-white/5 hover:text-white"
                }`}
                style={!active ? { color: '#ffffff' } : {}}
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
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 hover:text-white transition-colors" style={{ color: '#ffffff' }}>
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
              <h1 className="text-sm font-semibold text-gray-800 dark:text-white">{title}</h1>
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
                <Dropdown.Header>
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">Kilo Johnson</span>
                  <span className="block text-xs text-gray-500">kilo@scrippshealth.org · Staff</span>
                </Dropdown.Header>
                <Dropdown.Item icon={HiUser}>My profile</Dropdown.Item>
                <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
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
