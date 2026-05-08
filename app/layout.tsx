import type { Metadata } from "next";
import { Geist, Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import Providers from "./components/Providers";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Motive™ — Scripps Health Design System",
  description: "The unified design language for Scripps Health digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${redHatDisplay.variable} ${redHatText.variable} h-full`}>
      <body className="h-full flex flex-col overflow-hidden">
        <Providers>
          <TopBar />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="motive-content flex-1 overflow-y-auto" style={{ background: "var(--motive-content-bg)", color: "var(--motive-content-fg)" }}>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
