"use client";

import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

export function PreviewTopBar() {
  return (
    <header
      className="shrink-0 flex items-center justify-between px-4"
      style={{ height: "var(--motive-topbar-height)", backgroundColor: "var(--motive-primary)" }}
    >
      {/* Motive branding */}
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <img src="/logos/scripps_dark.svg" alt="Scripps" className="h-6 w-auto" />
        <div className="flex items-center gap-1.5">
          <span className="text-white text-sm font-bold tracking-tight">Motive™</span>
          <span className="text-white/40 text-xs">·</span>
          <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Design System</span>
        </div>
      </Link>

      {/* Right: toggle + back link */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link
          href="/application/ui-previews"
          className="text-xs text-white/60 hover:text-white transition-colors"
        >
          ← All previews
        </Link>
      </div>
    </header>
  );
}
