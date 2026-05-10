"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-24 h-7" />;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center rounded-full border border-white/50 p-0.5 text-xs font-semibold">
      <button
        onClick={() => setTheme("light")}
        className={`px-3 py-1 rounded-full transition-all duration-200 ${
          !isDark
            ? "bg-white text-gray-900"
            : "text-white/70 hover:text-white"
        }`}
      >
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`px-3 py-1 rounded-full transition-all duration-200 ${
          isDark
            ? "bg-white text-gray-900"
            : "text-white/70 hover:text-white"
        }`}
      >
        Dark
      </button>
    </div>
  );
}
