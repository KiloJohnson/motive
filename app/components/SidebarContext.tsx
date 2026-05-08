"use client";

import { createContext, useContext, useEffect, useState } from "react";

// ── Sidebar open/close ────────────────────────────────────────────────────

type SidebarContextType = {
  isOpen: boolean;
  toggle: () => void;
  activeContext: MotiveContext;
  setActiveContext: (c: MotiveContext) => void;
};

const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  toggle: () => {},
  activeContext: "marketing",
  setActiveContext: () => {},
});

export const useSidebar = () => useContext(SidebarContext);

// ── Motive contexts ───────────────────────────────────────────────────────

export type MotiveContext = "about" | "marketing" | "application" | "myscripps" | "scrippsconnect";

export const motiveContexts: {
  id: MotiveContext;
  label: string;
  href: string;
  stub: boolean;
}[] = [
  { id: "about",          label: "About Motive",         href: "/",                stub: false },
  { id: "marketing",      label: "Marketing Pages",      href: "/marketing",       stub: false },
  { id: "application",    label: "Application",           href: "/application",     stub: false },
  { id: "myscripps",      label: "My Scripps (Epic)",     href: "/myscripps",       stub: true  },
  { id: "scrippsconnect", label: "ScrippsConnect",        href: "/scrippsconnect",  stub: true  },
];

// ── Provider ──────────────────────────────────────────────────────────────

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeContext, setActiveContextState] = useState<MotiveContext>("marketing");

  useEffect(() => {
    const saved = localStorage.getItem("motive-context") as MotiveContext | null;
    if (saved && motiveContexts.find((c) => c.id === saved)) {
      setActiveContextState(saved);
    }
  }, []);

  const setActiveContext = (c: MotiveContext) => {
    setActiveContextState(c);
    localStorage.setItem("motive-context", c);
  };

  return (
    <SidebarContext.Provider
      value={{ isOpen, toggle: () => setIsOpen((v) => !v), activeContext, setActiveContext }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
