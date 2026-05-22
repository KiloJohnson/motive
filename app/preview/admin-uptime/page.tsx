"use client";

import { PreviewShell } from "../PreviewShell";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// ── ApexCharts config (direct from charts.js source) ─────────────────────────

const PRIMARY = "#1A56DB";

// Static data substituting generateData(6, { min: 0, max: 90 })
const uptimeSeries = [
  { name: "Mon", data: [{ x: "Jan", y: 41 }, { x: "Feb", y: 22 }, { x: "Mar", y: 67 }, { x: "Apr", y: 14 }, { x: "May", y: 58 }, { x: "Jun", y: 33 }] },
  { name: "Tue", data: [{ x: "Jan", y: 18 }, { x: "Feb", y: 75 }, { x: "Mar", y: 29 }, { x: "Apr", y: 84 }, { x: "May", y: 11 }, { x: "Jun", y: 52 }] },
  { name: "Wed", data: [{ x: "Jan", y: 63 }, { x: "Feb", y: 37 }, { x: "Mar", y: 50 }, { x: "Apr", y: 22 }, { x: "May", y: 79 }, { x: "Jun", y: 44 }] },
  { name: "Thu", data: [{ x: "Jan", y: 7  }, { x: "Feb", y: 88 }, { x: "Mar", y: 31 }, { x: "Apr", y: 56 }, { x: "May", y: 19 }, { x: "Jun", y: 70 }] },
  { name: "Fri", data: [{ x: "Jan", y: 54 }, { x: "Feb", y: 13 }, { x: "Mar", y: 72 }, { x: "Apr", y: 38 }, { x: "May", y: 61 }, { x: "Jun", y: 27 }] },
  { name: "Sat", data: [{ x: "Jan", y: 46 }, { x: "Feb", y: 60 }, { x: "Mar", y: 9  }, { x: "Apr", y: 83 }, { x: "May", y: 25 }, { x: "Jun", y: 68 }] },
  { name: "Sun", data: [{ x: "Jan", y: 30 }, { x: "Feb", y: 45 }, { x: "Mar", y: 87 }, { x: "Apr", y: 3  }, { x: "May", y: 74 }, { x: "Jun", y: 17 }] },
];

const uptimeOptions = {
  chart: {
    height: 350,
    type: "heatmap" as const,
    toolbar: { show: false },
    fontFamily: "Inter, sans-serif",
  },
  dataLabels: { enabled: false },
  colors: [PRIMARY],
  yaxis: {
    show: true,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
  },
  tooltip: {
    shared: false,
    followCursor: true,
    fillSeriesColor: true,
    style: { fontSize: "14px", fontFamily: "Inter, sans-serif" },
    y: { formatter: (value: number) => value + " issues" },
  },
  xaxis: {
    type: "category" as const,
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    tooltip: { enabled: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  responsive: [
    {
      breakpoint: 480,
      options: { yaxis: { labels: { show: false } } },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AdminUptimePage() {
  return (
    <PreviewShell variant="admin" title="Server Uptime">
      <div className="mx-auto max-w-screen-lg px-4 py-4 md:py-6">

        {/* Breadcrumb */}
        <nav className="mb-4 flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">
                <svg className="me-2.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
                </svg>
                <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white md:ms-2">Status</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Uptime</span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:mb-6">Server uptime chart</h1>

        {/* Uptime chart card */}
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Flowbite.com</h2>
              <p className="text-gray-500 dark:text-gray-400">Website uptime</p>
            </div>
            <div className="relative mb-4 w-full sm:mb-0 sm:w-auto">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:w-auto"
                placeholder="Select date"
              />
            </div>
          </div>

          <ReactApexChart options={uptimeOptions} series={uptimeSeries} type="heatmap" height={350} />
        </div>

        {/* Footer link */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800 md:mt-6">
          <a href="#" className="flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500 sm:ms-auto">
            Current status
            <svg className="ms-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
          </a>
        </div>

      </div>
    </PreviewShell>
  );
}
