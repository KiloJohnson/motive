"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import ThemeDropdown from "./ThemeDropdown";
import { useSidebar, motiveContexts } from "./SidebarContext";

export default function TopBar() {
  const { toggle, activeContext, setActiveContext } = useSidebar();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentCtx = motiveContexts.find((c) => c.id === activeContext);
  const label = currentCtx?.label ?? "Motive";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      style={{ backgroundColor: "var(--motive-primary)", height: "48px" }}
      className="flex items-center px-4 shrink-0 z-50 gap-3"
    >
      {/* Hamburger */}
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

      {/* Logo */}
      <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/motive_dark.svg`} alt="Motive — Scripps Health Design System" style={{ height: "26px", width: "auto" }} />
      </Link>

      <div className="ml-auto flex items-center gap-3">
        <ThemeDropdown />
        <ThemeToggle />

        {/* Context switcher */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white border border-white/40 hover:border-white/80 transition-colors"
          >
            {label}
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
              <path d="M2 4l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
              {motiveContexts.map((ctx) => (
                <Link
                  key={ctx.id}
                  href={ctx.href}
                  onClick={() => { setActiveContext(ctx.id); setDropdownOpen(false); }}
                  className={`flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                    ctx.id === activeContext
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>{ctx.label}</span>
                  {ctx.stub && <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">soon</span>}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
