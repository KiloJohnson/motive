"use client";

import { useEffect, useRef, useState } from "react";
import { brandThemes, useBrandTheme } from "./BrandThemeContext";

export default function ThemeDropdown() {
  const { theme, setTheme } = useBrandTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = brandThemes.find((t) => t.id === theme)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 h-7 text-xs text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded transition-colors whitespace-nowrap"
      >
        <span>{current.label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "transform 0.15s ease" }}
          className={open ? "rotate-180" : "rotate-0"}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-1.5 w-52 rounded shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 z-50 overflow-hidden"
        >
          <p className="px-3 pt-2.5 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            Brand Theme
          </p>
          {brandThemes.map((t) => {
            const active = theme === t.id;
            return (
              <button
                key={t.id}
                role="option"
                aria-selected={active}
                onClick={() => { setTheme(t.id); setOpen(false); }}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm text-left transition-colors ${
                  active
                    ? "text-[var(--motive-primary)] bg-blue-50 dark:bg-blue-950/40 font-medium"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <span>{t.label}</span>
                <span className="flex items-center gap-1.5 shrink-0">
                  {t.stub && (
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500">
                      soon
                    </span>
                  )}
                  {active && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
