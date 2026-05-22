"use client";

import { PreviewShell } from "../PreviewShell";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// ── ApexCharts configs (direct from charts.js source) ─────────────────────

const PRIMARY   = "#1A56DB";
const SECONDARY = "#FF9963";
const TERTIARY  = "#16BDCA";
const QUATERNARY = "#E74694";

// column-chart — Priority breakdown
const columnSeries = [
  {
    name: "Projects",
    data: [
      { x: "Completed", y: 7 },
      { x: "In review",  y: 5 },
      { x: "In progress", y: 8 },
      { x: "To do",      y: 6 },
      { x: "Rejected",   y: 9 },
    ],
  },
];

const columnOptions = {
  colors: [PRIMARY, SECONDARY, TERTIARY],
  chart: {
    type: "bar" as const,
    height: "320px",
    fontFamily: "Inter, sans-serif",
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      borderRadiusApplication: "end" as const,
      borderRadius: 8,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: { fontFamily: "Inter, sans-serif" },
  },
  states: {
    hover: { filter: { type: "darken" as const, value: 1 } },
  },
  stroke: { show: true, width: 0, colors: ["transparent"] },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: { left: 2, right: 2, top: -14 },
  },
  dataLabels: { enabled: false },
  legend: { show: false },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
  fill: { opacity: 1 },
};

// radial-chart — Types of work
const radialSeries = [90, 85, 70, 25];

const radialOptions = {
  colors: [PRIMARY, TERTIARY, SECONDARY, QUATERNARY],
  chart: {
    height: "320px",
    width: "100%",
    type: "radialBar" as const,
    sparkline: { enabled: true },
  },
  responsive: [
    {
      breakpoint: 768,
      options: { chart: { height: "300px" } },
    },
  ],
  plotOptions: {
    radialBar: {
      track: {
        background: "#f3f4f6",
      },
      dataLabels: { show: false },
      hollow: { margin: 0, size: "32%" },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: { left: 2, right: 2, top: -23, bottom: -20 },
  },
  labels: ["Done", "In progress", "To do", "Rejected"],
  legend: {
    show: false,
    position: "bottom" as const,
    fontFamily: "Inter, sans-serif",
  },
  tooltip: {
    enabled: true,
    x: { show: false },
  },
  yaxis: {
    show: false,
    labels: {
      formatter: (value: number) => value + "%",
    },
  },
};

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminMyProjectsPage() {
  return (
    <PreviewShell variant="admin" title="My Projects">

      {/* Breadcrumb + page title */}
      <div className="my-4 px-4">
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
                <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white md:ms-2">Projects</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">My projects</span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">My projects</h1>
      </div>

      {/* ── 4 stat cards ── */}
      <div className="mb-4 grid grid-cols-2 gap-4 px-4 2xl:grid-cols-4">

        {/* Done */}
        <div className="items-center space-x-0 rounded-lg bg-white p-4 shadow-sm sm:flex sm:space-x-4 md:p-6 dark:bg-gray-800">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-400 sm:mb-0">
            <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Z" />
              <path fillRule="evenodd" d="M11 7V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm4.7 5.7a1 1 0 0 0-1.4-1.4L11 14.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l4-4Z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">10 done</h2>
            <p className="text-gray-500 dark:text-gray-400">in the last 7 days</p>
          </div>
        </div>

        {/* Updated */}
        <div className="items-center space-x-0 rounded-lg bg-white p-4 shadow-sm sm:flex sm:space-x-4 md:p-6 dark:bg-gray-800">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-400 sm:mb-0">
            <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M8 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H8Zm2 0V2h7a2 2 0 0 1 2 2v.1a5 5 0 0 0-4.7 1.4l-6.7 6.6a3 3 0 0 0-.8 1.6l-.7 3.7a3 3 0 0 0 3.5 3.5l3.7-.7a3 3 0 0 0 1.5-.9l4.2-4.2V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M17.4 8a1 1 0 0 1 1.2.3 1 1 0 0 1 0 1.6l-.3.3-1.6-1.5.4-.4.3-.2Zm-2.1 2.1-4.6 4.7-.4 1.9 1.9-.4 4.6-4.7-1.5-1.5ZM17.9 6a3 3 0 0 0-2.2 1L9 13.5a1 1 0 0 0-.2.5L8 17.8a1 1 0 0 0 1.2 1.1l3.7-.7c.2 0 .4-.1.5-.3l6.6-6.6A3 3 0 0 0 18 6Z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">3 updated</h2>
            <p className="text-gray-500 dark:text-gray-400">in the last 7 days</p>
          </div>
        </div>

        {/* Created */}
        <div className="items-center space-x-0 rounded-lg bg-white p-4 shadow-sm sm:flex sm:space-x-4 md:p-6 dark:bg-gray-800">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-400 sm:mb-0">
            <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v6.4A7.5 7.5 0 1 0 10.5 22H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M9 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-3c.6 0 1 .4 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1c0-.6.4-1 1-1Z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">7 created</h2>
            <p className="text-gray-500 dark:text-gray-400">in the last 7 days</p>
          </div>
        </div>

        {/* Due */}
        <div className="items-center space-x-0 rounded-lg bg-white p-4 shadow-sm sm:flex sm:space-x-4 md:p-6 dark:bg-gray-800">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400 sm:mb-0">
            <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">1 due</h2>
            <p className="text-gray-500 dark:text-gray-400">in the next 7 days</p>
          </div>
        </div>

      </div>

      {/* ── 2-col grid: charts + activity ── */}
      <div className="mb-4 grid gap-4 px-4 2xl:grid-cols-2">

        {/* Priority breakdown — column chart */}
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div className="mb-4 sm:flex justify-between items-start">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Priority breakdown</h2>
              <p className="text-gray-500 dark:text-gray-400">View how work is being prioritized.</p>
            </div>
            <a href="#" className="inline-flex items-center hover:underline font-medium text-primary-700 dark:text-primary-500">
              View board
              <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <ReactApexChart options={columnOptions} series={columnSeries} type="bar" height={320} />

          <div className="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between pt-5">
              <button
                className="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                type="button"
              >
                Last 30 days
                <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                </svg>
              </button>
              <a
                href="#"
                className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-primary-500 dark:focus:ring-gray-700"
              >
                Progress Report
                <svg className="ms-1.5 h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Recent activity */}
        <div className="rounded-lg bg-white p-4 shadow-sm md:p-6 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white md:mb-6">Recent activity</h2>

          {/* Activity block 1 */}
          <div className="sm:flex items-center text-gray-500 dark:text-gray-400">
            <p className="mb-2 sm:mb-0">
              <span className="font-medium text-gray-900 dark:text-white">Bonnie Green</span>{" "}
              pushed to{" "}
              <a href="#" className="hover:underline font-medium text-gray-900 dark:text-white">flowbite/flowbite-design-system</a>
            </p>
            <div className="hidden sm:flex mx-2 h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
            <span>1 hours ago</span>
          </div>
          <ul className="text-gray-500 dark:text-gray-400 bg-gray-50 rounded-lg mt-4 dark:bg-gray-700 p-4 space-y-2 mb-4">
            <li className="flex items-center">
              3 commits to{" "}
              <span className="bg-primary-100 text-primary-800 text-xs font-medium ms-2 px-2.5 py-0.5 rounded-sm dark:bg-primary-900 dark:text-primary-300">
                redesign-homepage
              </span>
            </li>
            <li>
              <a href="#" className="me-2 hover:underline font-medium text-primary-700 dark:text-primary-500">#867354</a>
              fix: ads position since it does not show unless you refres the browser
            </li>
            <li>
              <a href="#" className="me-2 hover:underline font-medium text-primary-700 dark:text-primary-500">#867353</a>
              fix: fix margins and paddings for pricing card
            </li>
            <li>
              <a href="#" className="me-2 hover:underline font-medium text-primary-700 dark:text-primary-500">#867353</a>
              fix: fix font-weight for pricing card headings
            </li>
          </ul>

          {/* Activity block 2 */}
          <div className="sm:flex items-center text-gray-500 dark:text-gray-400">
            <p className="mb-2 sm:mb-0">
              <span className="font-medium text-gray-900 dark:text-white">Jese Leos</span>{" "}
              pushed to{" "}
              <a href="#" className="hover:underline font-medium text-gray-900 dark:text-white">flowbite/flowbite-design-system</a>
            </p>
            <div className="hidden sm:flex mx-2 h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
            <span>2 hours ago</span>
          </div>
          <ul className="text-gray-500 dark:text-gray-400 bg-gray-50 rounded-lg mt-4 dark:bg-gray-700 p-4 space-y-2 mb-4">
            <li className="flex items-center">
              2 commits to{" "}
              <span className="bg-primary-100 text-primary-800 text-xs font-medium ms-2 px-2.5 py-0.5 rounded-sm dark:bg-primary-900 dark:text-primary-300">
                redesign-homepage
              </span>
            </li>
            <li>
              <a href="#" className="me-2 hover:underline font-medium text-primary-700 dark:text-primary-500">#867353</a>
              fix: ads position since it does not show unless you refres the browser
            </li>
            <li>
              <a href="#" className="me-2 hover:underline font-medium text-primary-700 dark:text-primary-500">#867352</a>
              fix: fix margins and paddings for pricing card
            </li>
          </ul>

          {/* Activity block 3 */}
          <div className="sm:flex items-center text-gray-500 dark:text-gray-400">
            <p className="mb-2 sm:mb-0">
              <span className="font-medium text-gray-900 dark:text-white">Roberta Casas</span>{" "}
              pushed to{" "}
              <a href="#" className="hover:underline font-medium text-gray-900 dark:text-white">flowbite/flowbite-design-system</a>
            </p>
            <div className="hidden sm:flex mx-2 h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
            <span>3 hours ago</span>
          </div>
          <ul className="text-gray-500 dark:text-gray-400 bg-gray-50 rounded-lg mt-4 dark:bg-gray-700 p-4 space-y-2 mb-4 sm:mb-6">
            <li className="flex items-center">
              2 commits to{" "}
              <span className="bg-primary-100 text-primary-800 text-xs font-medium ms-2 px-2.5 py-0.5 rounded-sm dark:bg-primary-900 dark:text-primary-300">
                redesign-homepage
              </span>
            </li>
            <li>
              <a href="#" className="me-2 hover:underline font-medium text-primary-700 dark:text-primary-500">#867351</a>
              fix: ads position since it does not show unless you refres the browser
            </li>
            <li>
              <a href="#" className="me-2 hover:underline font-medium text-primary-700 dark:text-primary-500">#867350</a>
              fix: fix margins and paddings for pricing card
            </li>
          </ul>

          <button
            type="button"
            className="py-2 px-3 w-full sm:w-auto text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            View all
          </button>
        </div>

        {/* Types of work — radial chart + list */}
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div className="mb-4 sm:flex justify-between items-start">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Types of work</h2>
              <p className="text-gray-500 dark:text-gray-400">Get a breakdown of items by their types.</p>
            </div>
            <a href="#" className="inline-flex items-center hover:underline font-medium text-primary-700 dark:text-primary-500">
              View board
              <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="sm:flex xl:block 2xl:flex items-center gap-8 justify-between">
            <ul role="list" className="w-full divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3">
                <div className="flex items-center justify-between">
                  <div className="ms-4">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">10</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Issues</p>
                  </div>
                  <div className="inline-flex items-center text-sm font-bold text-green-500 dark:text-green-400">
                    4,5%
                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-center justify-between">
                  <div className="ms-4">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">5</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Sprints</p>
                  </div>
                  <div className="inline-flex items-center text-sm font-bold text-green-500 dark:text-green-400">
                    1,15%
                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-center justify-between">
                  <div className="ms-4">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">9</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Milestones</p>
                  </div>
                  <div className="inline-flex items-center text-sm font-bold text-green-500 dark:text-green-400">
                    3%
                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-center justify-between">
                  <div className="ms-4">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">17</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Issues</p>
                  </div>
                  <div className="inline-flex items-center text-sm font-bold text-red-600 dark:text-red-500">
                    2%
                    <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14-4-4m4 4 4-4" />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>

            <div className="w-full pb-4 sm:pb-0">
              <ReactApexChart options={radialOptions} series={radialSeries} type="radialBar" height={320} />
            </div>
          </div>

          <div className="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between pt-5">
              <button
                className="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                type="button"
              >
                Last 30 days
                <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                </svg>
              </button>
              <a
                href="#"
                className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-primary-500 dark:focus:ring-gray-700"
              >
                View Report
                <svg className="ms-1.5 h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* My projects activity — empty state + create modal trigger */}
        <div className="rounded-lg bg-white p-4 shadow-sm md:p-6 dark:bg-gray-800">
          <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">My projects activity</h2>
          <p className="text-gray-500 dark:text-gray-400">Use projects to manage all your work in one place and stay aligned with stakeholders.</p>

          {/* Placeholder illustration */}
          <div className="flex items-center justify-center my-6">
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
              <svg className="h-20 w-20 text-gray-300 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
              </svg>
            </div>
          </div>

          <div className="flex items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center flex-col sm:flex-row mt-4 sm:mt-0">
            <button
              type="button"
              className="w-full justify-center sm:w-auto inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <svg className="w-4 h-4 -ms-0.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v6.4A7.5 7.5 0 1 0 10.5 22H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M9 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-3c.6 0 1 .4 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1c0-.6.4-1 1-1Z" clipRule="evenodd" />
              </svg>
              Create new project
            </button>
            <button
              type="button"
              className="w-full sm:w-auto py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              View all projects
            </button>
          </div>
        </div>

      </div>

      {/* ── New Project Modal ── */}
      <div
        id="newProjectModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
      >
        <div className="relative max-h-full w-full max-w-5xl p-4">
          <div className="relative rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-5">
            {/* Modal header */}
            <div className="mb-4 flex items-center justify-between dark:border-gray-600 sm:mb-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add new project</h3>
              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6m0 12L6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal body */}
            <form>
              <div className="mb-4 grid gap-5 sm:mb-5 lg:grid-cols-2">
                {/* Left column */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input
                      type="text"
                      id="title"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Add title here"
                    />
                  </div>
                  <div>
                    <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <div className="w-full rounded-lg border border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-600">
                      <div className="flex items-center justify-between border-b p-1 dark:border-gray-600 border-gray-300">
                        <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
                          <div className="flex items-center space-x-1 sm:pr-2">
                            {[
                              { label: "Attach file", path: "M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8" },
                            ].map(({ label, path }) => (
                              <button key={label} type="button" className="cursor-pointer rounded-sm p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
                                </svg>
                                <span className="sr-only">{label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                        <button
                          type="button"
                          className="cursor-pointer rounded-sm p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto"
                        >
                          <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5" />
                          </svg>
                          <span className="sr-only">Full screen</span>
                        </button>
                      </div>
                      <div className="rounded-b-lg bg-gray-50 px-4 py-2 dark:bg-gray-700">
                        <textarea
                          id="description"
                          rows={8}
                          className="block w-full border-0 bg-gray-50 px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                          placeholder="Write a description here"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div>
                  <div className="mb-4">
                    <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Assignee &amp; Communication</div>
                    <div className="flex items-center space-x-4">
                      <div className="flex -space-x-4 sm:mb-0">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-300 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-600 dark:text-gray-300">HE</div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-300 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-600 dark:text-gray-300">RB</div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-300 text-xs font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-600 dark:text-gray-300">BG</div>
                        <a className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800" href="#">+9</a>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        <svg className="-ml-1 mr-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
                        </svg>
                        Add member
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mb-4 inline-flex items-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55"
                  >
                    <svg className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" fill="currentColor">
                      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                    </svg>
                    Add Google Meet video conference
                  </button>

                  <div className="mb-4">
                    <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                    <div className="flex items-center space-x-4 flex-wrap gap-y-2">
                      {["High", "Medium", "Low", "Lowest"].map((p, i) => (
                        <div key={p} className="flex items-center">
                          <input
                            id={`priority-${i}-checkbox`}
                            type="checkbox"
                            defaultChecked={p === "Low"}
                            className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                          <label htmlFor={`priority-${i}-checkbox`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{p}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 flex items-center space-x-4">
                    {[
                      { id: "startDate", label: "Start date", placeholder: "Start date" },
                      { id: "dueDate",   label: "Due date",   placeholder: "End date" },
                    ].map(({ id, label, placeholder }) => (
                      <div key={id} className="w-full">
                        <label htmlFor={id} className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <input
                            id={id}
                            type="text"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder={placeholder}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4 flex items-center space-x-4">
                    <div className="w-full">
                      <label htmlFor="project-category" className="mb-2 inline-flex items-center text-sm font-medium text-gray-900 dark:text-white">Category</label>
                      <select
                        id="project-category"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      >
                        <option>Design</option>
                        <option value="seo">SEO</option>
                        <option value="marketing">Marketing</option>
                        <option value="programming">Programming</option>
                        <option value="sales">Sales</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <label htmlFor="project-type" className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">Project type</label>
                      <select
                        id="project-type"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      >
                        <option>Sprint</option>
                        <option value="decision">Decision</option>
                        <option value="finance">Finance</option>
                        <option value="problems">Problem-solving</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Deadline notification</div>
                    <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                      <div className="w-full">
                        <label htmlFor="reminder-type" className="sr-only">Reminder type</label>
                        <select
                          id="reminder-type"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        >
                          <option>Notification</option>
                          <option value="AL">Alarm</option>
                          <option value="EM">Email</option>
                          <option value="SM">SMS</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <label htmlFor="reminder-counter-days" className="sr-only">Counter</label>
                        <input
                          type="number"
                          id="reminder-counter-days"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="1"
                        />
                      </div>
                      <div className="w-full">
                        <label htmlFor="reminder-length-type" className="sr-only">Length</label>
                        <select
                          id="reminder-length-type"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        >
                          <option>Days</option>
                          <option value="WE">Weeks</option>
                          <option value="MO">Months</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
                  </svg>
                  Add new project
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </PreviewShell>
  );
}
