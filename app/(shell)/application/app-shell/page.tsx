"use client";

import { useState } from "react";

const navItems = [
  { label: "Dashboard" },
  { label: "Patients" },
  { label: "Providers" },
  { label: "Appointments" },
  { label: "Reports" },
  { label: "Settings" },
];

const contentByNav: Record<string, { stats: { label: string; value: string }[] }> = {
  Dashboard:    { stats: [{ label: "Patients", value: "2,847" }, { label: "Appointments", value: "412" }, { label: "Satisfaction", value: "94%" }] },
  Patients:     { stats: [{ label: "Active", value: "2,847" }, { label: "New this month", value: "134" }, { label: "Avg. age", value: "51" }] },
  Providers:    { stats: [{ label: "On staff", value: "186" }, { label: "Specialties", value: "34" }, { label: "Accepting new", value: "142" }] },
  Appointments: { stats: [{ label: "Today", value: "412" }, { label: "Pending", value: "38" }, { label: "Cancelled", value: "9" }] },
  Reports:      { stats: [{ label: "Generated", value: "1,204" }, { label: "Scheduled", value: "18" }, { label: "Exports", value: "47" }] },
  Settings:     { stats: [{ label: "Users", value: "24" }, { label: "Roles", value: "6" }, { label: "Integrations", value: "3" }] },
};

const anatomy = [
  { part: "Sidebar", description: "Fixed-width dark panel. Houses the logo, primary navigation, and secondary utilities. Width: 256px. Background: #111827." },
  { part: "Topbar", description: "Fixed-height bar across the top of the content area. Search, notifications, and user identity. Height: 56px." },
  { part: "Content area", description: "Scrollable main region. All page content renders here. Background adapts to light/dark mode." },
  { part: "Active state", description: "Left-border indicator on the active nav item. Color: var(--motive-primary). Reacts to brand theme." },
];

export default function AppShellPage() {
  const [active, setActive] = useState("Dashboard");
  const content = contentByNav[active];

  return (
    <div className="min-h-full">

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">App Shell</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          The foundational layout for all Scripps application interfaces — sidebar navigation,
          topbar, and scrollable content area. Every application page lives inside this shell.
          Click the nav items below to see the active state in action.
        </p>
      </section>

      {/* ── Live preview ───────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Live preview</h2>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden" style={{ height: "560px" }}>
          <div className="flex h-full">

            {/* Sidebar */}
            <div className="w-64 shrink-0 flex flex-col" style={{ backgroundColor: "#111827" }}>
              <div className="h-14 flex items-center px-4 shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <img src="/logos/scripps_dark.svg" alt="Scripps Health" className="h-6 w-auto" />
              </div>
              <nav className="flex-1 py-3 overflow-y-auto">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setActive(item.label)}
                    style={active === item.label ? { borderLeftColor: "var(--motive-primary)" } : {}}
                    className={`w-full flex items-center px-4 py-2.5 text-sm text-left border-l-2 transition-colors ${
                      active === item.label
                        ? "text-white bg-white/10 font-medium"
                        : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Main */}
            <div className="flex-1 flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-900">
              {/* Topbar */}
              <div className="h-14 shrink-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-5 gap-3">
                <div className="flex-1 max-w-xs flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-400 text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                  Search…
                </div>
                <div className="ml-auto flex items-center gap-3">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                  </button>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ backgroundColor: "var(--motive-primary)" }}>
                    KJ
                  </div>
                </div>
              </div>

              {/* Content */}
              <main className="flex-1 overflow-y-auto p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{active}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Application content renders here.</p>
                <div className="grid grid-cols-3 gap-4 mb-5">
                  {content.stats.map((stat) => (
                    <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 h-28 flex items-center justify-center">
                  <p className="text-sm text-gray-300 dark:text-gray-600">Content area</p>
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>

      {/* ── Anatomy ────────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Anatomy</h2>
        <div className="grid grid-cols-2 gap-6 max-w-3xl">
          {anatomy.map((item) => (
            <div key={item.part} className="p-6 border border-gray-100 dark:border-gray-700 rounded">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{item.part}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Usage ──────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Key components</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { name: "Sidebar", pkg: "flowbite-react", note: "Use Sidebar, Sidebar.Items, Sidebar.ItemGroup, Sidebar.Item. Override active color via var(--motive-primary)." },
            { name: "Navbar", pkg: "flowbite-react", note: "Use for the topbar. Pair with DarkThemeToggle for light/dark switching." },
            { name: "Avatar", pkg: "flowbite-react", note: "User identity in the topbar. Use with the user's initials or profile photo." },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-[160px_1fr] gap-8 py-6 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{item.name}</p>
                <p className="text-xs text-gray-400 font-mono mt-0.5">{item.pkg}</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
