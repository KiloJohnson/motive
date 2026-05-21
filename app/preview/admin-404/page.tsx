"use client";

import { Button } from "flowbite-react";
import { HiHome, HiArrowLeft } from "react-icons/hi";

export default function Admin404Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md">

        {/* 404 display */}
        <div className="relative mb-8">
          <p className="text-9xl font-black text-gray-200 dark:text-gray-800 select-none leading-none">404</p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Page not found</p>
            </div>
          </div>
        </div>

        <img src="/logos/scripps_dark.svg" alt="Scripps" className="h-7 w-auto mx-auto mb-6" />

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Oops! This page doesn't exist.
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
          The page you're looking for may have been moved, deleted, or never existed.
          Let's get you back on track.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Button href="/preview/admin-dashboard">
            <HiHome className="mr-2 h-4 w-4" />Back to dashboard
          </Button>
          <Button color="alternative" href="javascript:history.back()">
            <HiArrowLeft className="mr-2 h-4 w-4" />Go back
          </Button>
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500 mt-10">
          © 2025 Scripps Health. If you believe this is an error, contact{" "}
          <a href="#" className="text-primary-700 dark:text-primary-400 hover:underline">support</a>.
        </p>
      </div>
    </div>
  );
}
