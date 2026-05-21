"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav: { label: string; href: string; newTab?: boolean }[] = [
  { label: "Overview",      href: "/application/ui-previews" },
  { label: "Primary Care",  href: "/preview/dashboard-primary-care" },
  { label: "Cancer Care",   href: "/preview/dashboard-cancer" },
  { label: "Heart Care",    href: "/preview/dashboard-heart" },
  { label: "Orthopedics",   href: "/preview/dashboard-ortho" },
  { label: "HealthExpress", href: "/preview/dashboard-healthexpress" },
  { label: "Urgent Care",   href: "/preview/dashboard-urgentcare" },
  { label: "Sample App",    href: "/preview/admin-dashboard", newTab: true },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <nav className="w-52 shrink-0 flex flex-col overflow-y-auto" style={{ backgroundColor: "#111827" }}>
        <div className="px-4 py-5 border-b border-gray-700/60">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-0.5">Scripps Health</p>
          <p className="text-sm font-semibold text-white">Admin Dashboard</p>
        </div>
        <ul className="py-3 flex-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target={item.newTab ? "_blank" : undefined}
                  rel={item.newTab ? "noopener noreferrer" : undefined}
                  style={active ? { borderLeftColor: "#005EB8" } : {}}
                  className={`flex items-center justify-between px-4 py-2 text-sm border-l-2 transition-colors ${
                    active
                      ? "border-l-2 text-white bg-white/5 font-medium"
                      : "border-transparent text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.newTab && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-50">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Main content */}
      <div className="flex-1 min-w-0 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
