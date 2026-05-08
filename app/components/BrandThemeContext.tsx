"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type BrandThemeId = "scripps" | "qualcomm" | "giving" | "scrippsconnect";

export const brandThemes: { id: BrandThemeId; label: string; stub: boolean }[] = [
  { id: "scripps",       label: "Scripps Health",  stub: false },
  { id: "qualcomm",      label: "Qualcomm",         stub: true  },
  { id: "giving",        label: "Giving",           stub: true  },
  { id: "scrippsconnect",label: "ScrippsConnect",   stub: true  },
];

type BrandThemeContextType = { theme: BrandThemeId; setTheme: (t: BrandThemeId) => void };

const BrandThemeContext = createContext<BrandThemeContextType>({
  theme: "scripps",
  setTheme: () => {},
});

export const useBrandTheme = () => useContext(BrandThemeContext);

export function BrandThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<BrandThemeId>("scripps");

  useEffect(() => {
    const saved = localStorage.getItem("motive-brand-theme") as BrandThemeId | null;
    const valid = brandThemes.find((t) => t.id === saved);
    const active = valid ? saved! : "scripps";
    setThemeState(active);
    document.documentElement.setAttribute("data-theme", active);
  }, []);

  const setTheme = (t: BrandThemeId) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("motive-brand-theme", t);
  };

  return (
    <BrandThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </BrandThemeContext.Provider>
  );
}
