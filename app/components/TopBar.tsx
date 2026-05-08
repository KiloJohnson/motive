"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import ThemeDropdown from "./ThemeDropdown";
import { useSidebar } from "./SidebarContext";

export default function TopBar() {
  const { toggle } = useSidebar();

  return (
    <header
      style={{ backgroundColor: "var(--motive-primary)", height: "48px" }}
      className="flex items-center px-4 shrink-0 z-50 gap-3"
    >
      <button
        onClick={toggle}
        aria-label="Toggle navigation"
        className="w-8 h-8 flex items-center justify-center rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors shrink-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <span className="text-white font-semibold text-lg tracking-tight">
          Motive™
        </span>
        <span className="text-white/40 text-sm font-light">
          Design System
        </span>
      </Link>

      <div className="ml-auto flex items-center gap-3">
        <ThemeDropdown />
        <ThemeToggle />
        <span className="text-white/50 text-xs font-mono">v2.0</span>
      </div>
    </header>
  );
}
