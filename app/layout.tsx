import type { Metadata } from "next";
import { Geist, Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import "./globals.css";
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
      <body className="h-full">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
