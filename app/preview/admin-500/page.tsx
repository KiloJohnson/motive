"use client";

import { Button } from "flowbite-react";
import { HiHome, HiArrowLeft, HiSwitchHorizontal } from "react-icons/hi";
import { PreviewShell } from "../PreviewShell";

export default function Admin500Page() {
  return (
    <PreviewShell title="500" variant="admin">
      <div className="min-h-full flex items-center justify-center bg-white dark:bg-gray-900 px-4">
        <div className="max-w-7xl grid-cols-2 content-center gap-8 px-4 py-8 md:grid lg:px-6 lg:py-16 w-full">

          {/* Text content */}
          <div className="self-center text-center md:text-left">

            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/scripps_light.svg`} alt="Scripps" className="h-7 w-auto mx-auto md:mx-0 mb-6 dark:hidden" />
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/scripps_dark.svg`} alt="Scripps" className="h-7 w-auto mx-auto md:mx-0 mb-6 hidden dark:block" />

            <h1 className="mb-4 text-2xl font-bold" style={{ color: "#1A56DB" }}>
              500 Internal Error
            </h1>
            <p className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-10">
              Whoops! Something went wrong.
            </p>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Here are some helpful links:
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
              <Button href="/preview/admin-dashboard">
                <HiHome className="mr-2 h-4 w-4" />Back to dashboard
              </Button>
              <Button color="alternative" onClick={() => window.location.reload()}>
                <HiSwitchHorizontal className="mr-2 h-4 w-4" />Try again
              </Button>
              <Button color="light" href="javascript:history.back()">
                <HiArrowLeft className="mr-2 h-4 w-4" />Go back
              </Button>
            </div>

            <ul className="flex items-center justify-center md:justify-start space-x-4 text-gray-500 dark:text-gray-400 text-sm">
              <li>
                <a href="#" className="underline hover:text-gray-900 dark:hover:text-white">Support</a>
              </li>
              <li>
                <a href="#" className="underline hover:text-gray-900 dark:hover:text-white">Search</a>
              </li>
            </ul>

            <p className="text-xs text-gray-400 dark:text-gray-500 mt-10">
              © 2025 Scripps Health. If this error persists, contact{" "}
              <a href="#" className="hover:underline" style={{ color: "#1A56DB" }}>support</a>.
            </p>
          </div>

          {/* Illustration */}
          <div className="hidden md:flex items-center justify-center">
            {/* 500 large number illustration */}
            <div className="relative">
              <p className="text-[12rem] font-black text-gray-100 dark:text-gray-800 select-none leading-none">
                500
              </p>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-md border border-gray-100 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Internal server error</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PreviewShell>
  );
}
