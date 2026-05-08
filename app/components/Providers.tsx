"use client";

import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "./SidebarContext";
import { BrandThemeProvider } from "./BrandThemeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <BrandThemeProvider>
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </BrandThemeProvider>
    </ThemeProvider>
  );
}
