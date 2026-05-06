import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
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
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="h-full flex flex-col overflow-hidden">
        <TopBar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
