"use client";

import { PreviewShell } from "../PreviewShell";
import dynamic from "next/dynamic";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// ── ApexCharts configs (direct from charts.js source) ─────────────────────

const PRIMARY   = "#1A56DB";
const SECONDARY = "#FF9963";
const SUCCESS   = "#0E9F6E";
const GRAY_100  = "#F3F4F6";

// tickets-overview-chart
const ticketsOverviewSeries = [
  {
    name: "Received tickets",
    data: [1500, 2918, 1456, 4526, 1656, 1856],
    color: PRIMARY,
  },
  {
    name: "Solved Tickets",
    data: [643, 2413, 765, 3412, 1423, 1731],
    color: SECONDARY,
  },
];

const ticketsOverviewOptions = {
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: { left: 2, right: 2, top: -26 },
  },
  chart: {
    height: 520,
    type: "area" as const,
    fontFamily: "Inter, sans-serif",
    dropShadow: { enabled: false , animations: { enabled: false } },
    toolbar: { show: false },
  },
  tooltip: { enabled: true, x: { show: false } },
  legend: { show: true },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: PRIMARY,
      gradientToColors: [PRIMARY],
    },
  },
  dataLabels: { enabled: false },
  stroke: { width: 6, curve: "smooth" as const },
  xaxis: {
    categories: [
      "01 February",
      "02 February",
      "03 February",
      "04 February",
      "05 February",
      "06 February",
      "07 February",
    ],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
};

// service-level-chart
const serviceLevelSeries = [87.2];

const serviceLevelOptions = {
  series: [87.2],
  fill: {
    colors: [SUCCESS],
    opacity: 1,
    type: "solid" as const,
  },
  chart: {
    height: 180,
    type: "radialBar" as const,
    sparkline: { enabled: true },
  },
  responsive: [
    {
      breakpoint: 768,
      options: { chart: { height: 200 } },
    },
  ],
  plotOptions: {
    radialBar: {
      track: { background: GRAY_100 },
      hollow: { size: "60%" },
      dataLabels: {
        name: { show: true, offsetY: -5 },
        value: { offsetY: 4 },
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: { bottom: -20 },
  },
  labels: ["Service level"],
  tooltip: { enabled: true, x: { show: true } },
  yaxis: {
    labels: {
      formatter: function (value: number) {
        return value + "%";
      },
    },
  },
};

// ── Static data ───────────────────────────────────────────────────────────

const tickets = [
  { id: "#1846325", requester: "Mark Duan",          subject: "Help with my purchase",       priority: "Medium", priorityCls: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300", agent: "Jese Leos",     agentImg: "/images/users/avatar-10.png", date: "02 Mar 2025", status: "Pending",  statusCls: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",  statusIcon: "pending"  },
  { id: "#1846325", requester: "Donnie Gree",         subject: "Support for Flowbite",        priority: "High",   priorityCls: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",             agent: "Neil Simss",    agentImg: "/images/users/avatar-9.png",  date: "03 Mar 2025", status: "Pending",  statusCls: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",  statusIcon: "pending"  },
  { id: "#1846325", requester: "User123",             subject: "Verify my email and my account", priority: "High", priorityCls: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",           agent: "Roberta Casas", agentImg: "/images/users/avatar-2.png",  date: "03 Mar 2025", status: "Pending",  statusCls: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",  statusIcon: "pending"  },
  { id: "#1846328", requester: "Leslie Livingston",   subject: "New components",              priority: "Low",    priorityCls: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",           agent: "Roberta Casas", agentImg: "/images/users/avatar-2.png",  date: "07 Mar 2025", status: "Solved",   statusCls: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",      statusIcon: "solved"   },
  { id: "#1846329", requester: "User123",             subject: "Figma variants missing",      priority: "High",   priorityCls: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",             agent: "Jese Leos",     agentImg: "/images/users/avatar-10.png", date: "07 Mar 2025", status: "Pending",  statusCls: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",  statusIcon: "pending"  },
  { id: "#1846330", requester: "Bergside LLC",        subject: "How to change colors",        priority: "Medium", priorityCls: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300", agent: "Roberta Casas", agentImg: "/images/users/avatar-2.png",  date: "08 Mar 2025", status: "Solved",   statusCls: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",      statusIcon: "solved"   },
  { id: "#1846331", requester: "Faye Drake",          subject: "Invoice issues",              priority: "Medium", priorityCls: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300", agent: "Jese Leos",     agentImg: "/images/users/avatar-10.png", date: "08 Mar 2025", status: "Solved",   statusCls: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",      statusIcon: "solved"   },
  { id: "#1846332", requester: "Karen Nelson",        subject: "Hello there!",                priority: "High",   priorityCls: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",             agent: "Jese Leos",     agentImg: "/images/users/avatar-10.png", date: "10 Mar 2025", status: "Solved",   statusCls: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",      statusIcon: "solved"   },
  { id: "#1846333", requester: "Lana Byrd",           subject: "Pricing questions",           priority: "High",   priorityCls: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",             agent: "Bonnie Green",  agentImg: "/images/users/avatar-7.png",  date: "11 Mar 2025", status: "Solved",   statusCls: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",      statusIcon: "solved"   },
  { id: "#1846334", requester: "User12345",           subject: "Flowbite license",            priority: "Low",    priorityCls: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",           agent: "Roberta Casas", agentImg: "/images/users/avatar-2.png",  date: "12 Mar 2025", status: "Solved",   statusCls: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",      statusIcon: "solved"   },
];

const bestAgents = [
  { name: "Jese Leos",      email: "email@example.com", tickets: "120 tickets answered", score: "4.9/5", img: "/images/users/avatar-10.png" },
  { name: "Roberta Casas",  email: "email@example.com", tickets: "100 tickets answered", score: "4.9/5", img: "/images/users/avatar-8.png"  },
  { name: "Bonnie Green",   email: "email@example.com", tickets: "92 tickets answered",  score: "4.8/5", img: "/images/users/avatar-1.png"  },
  { name: "Micheal Gough",  email: "email@example.com", tickets: "71 tickets answered",  score: "4.7/5", img: "/images/users/avatar-3.png"  },
  { name: "Robert Brown",   email: "email@example.com", tickets: "49 tickets answered",  score: "4.5/5", img: "/images/users/avatar-5.png"  },
];

const ticketReasons = [
  { label: "Product/Service problems", pct: 41, color: "bg-primary-700 dark:bg-primary-600" },
  { label: "Technical issues",         pct: 22, color: "bg-teal-400" },
  { label: "Payment issues",           pct: 15, color: "bg-orange-300" },
  { label: "Product issues",           pct: 12, color: "bg-pink-500" },
  { label: "New account",              pct: 10, color: "bg-purple-500" },
];

// ── Page ──────────────────────────────────────────────────────────────────

export default function AdminCustomerServicePage() {
  return (
    <PreviewShell variant="admin" title="Customer Service Dashboard">
      <div className="px-4">

        {/* 1 ── Website performance widget */}
        <div className="my-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          {/* Header */}
          <div className="items-start justify-between border-b border-gray-200 pb-4 dark:border-gray-700 sm:flex md:pb-6">
            <div className="mb-4 sm:mb-0">
              <h2 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">Website performance</h2>
              <p className="text-gray-500 dark:text-gray-400">Last month website stats.</p>
            </div>
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
            >
              <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
              </svg>
              Dec 31 - Jan 31
              <svg className="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* KPI stats + service level radial */}
          <div className="items-center justify-between border-b border-gray-200 py-4 dark:border-gray-700 md:py-6 xl:flex">
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4 xl:gap-10">
              {/* Received tickets */}
              <div>
                <svg className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 5a2 2 0 0 0-2 2v2.5a1 1 0 0 0 1 1 1.5 1.5 0 1 1 0 3 1 1 0 0 0-1 1V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.5a1 1 0 0 0-1-1 1.5 1.5 0 1 1 0-3 1 1 0 0 0 1-1V7a2 2 0 0 0-2-2H4Z" />
                </svg>
                <h3 className="mb-2 text-gray-500 dark:text-gray-400">Received tickets</h3>
                <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  15,475
                  <span className="ms-2 inline-flex items-center rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                    <svg className="-ms-1 me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                    </svg>
                    6,4%
                  </span>
                </span>
                <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                  <svg className="me-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
                  </svg>
                  vs 14,987 last week
                </p>
              </div>

              {/* Solved tickets */}
              <div>
                <svg className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z" clipRule="evenodd" />
                </svg>
                <h3 className="mb-2 text-gray-500 dark:text-gray-400">Solved tickets</h3>
                <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  15,001
                  <span className="ms-2 inline-flex items-center rounded-sm bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                    <svg className="-ms-1 me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14-4-4m4 4 4-4" />
                    </svg>
                    1%
                  </span>
                </span>
                <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                  <svg className="me-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
                  </svg>
                  vs 15,221 last month
                </p>
              </div>

              {/* Rejected tickets */}
              <div>
                <svg className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clipRule="evenodd" />
                </svg>
                <h3 className="mb-2 text-gray-500 dark:text-gray-400">Rejected tickets</h3>
                <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  56
                  <span className="ms-2 inline-flex items-center rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                    <svg className="-ms-1 me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                    </svg>
                    9,1%
                  </span>
                </span>
                <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                  <svg className="me-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
                  </svg>
                  vs 49 last week
                </p>
              </div>

              {/* Average CSAT */}
              <div>
                <svg className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.495.93A.5.5 0 0 0 6.5 13c0 1.19.644 2.438 1.618 3.375C9.099 17.319 10.469 18 12 18c1.531 0 2.9-.681 3.882-1.625.974-.937 1.618-2.184 1.618-3.375a.5.5 0 0 0-.995-.07.764.764 0 0 1-.156.096c-.214.106-.554.208-1.006.295-.896.173-2.111.262-3.343.262-1.232 0-2.447-.09-3.343-.262-.452-.087-.792-.19-1.005-.295a.762.762 0 0 1-.157-.096ZM8.99 8a1 1 0 0 0 0 2H9a1 1 0 1 0 0-2h-.01Zm6 0a1 1 0 1 0 0 2H15a1 1 0 1 0 0-2h-.01Z" clipRule="evenodd" />
                </svg>
                <h3 className="mb-2 text-gray-500 dark:text-gray-400">Average CSAT</h3>
                <span className="flex items-baseline text-2xl font-bold text-gray-900 dark:text-white">
                  4.7
                  <span className="ms-2 text-base text-gray-500 dark:text-gray-400"> of 5 </span>
                </span>
                <a href="#" className="mt-2 flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500">
                  See all responses
                  <svg className="ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service level radial chart — 2xl only */}
            <div className="hidden 2xl:flex 2xl:shrink-0 2xl:items-center 2xl:justify-center">
              <ReactApexChart
                options={serviceLevelOptions}
                series={serviceLevelSeries}
                type="radialBar"
                height={180}
                width={180}
              />
            </div>
          </div>

          {/* Tickets overview area chart */}
          <div className="mt-4 md:mt-6">
            <ReactApexChart
              options={ticketsOverviewOptions}
              series={ticketsOverviewSeries}
              type="area"
              height={420}
            />
          </div>

          {/* View full report footer */}
          <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-6">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
            >
              View full report
              <svg className="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </button>
          </div>
        </div>

        {/* 2 ── Quick-stats row */}
        <div className="mb-4 grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
          <div className="flex items-center space-x-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-400">
              <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">15 min</h2>
              <p className="text-gray-500 dark:text-gray-400">Average response time</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-400">
              <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">12%</h2>
              <p className="text-gray-500 dark:text-gray-400">Ticket reopening rate</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-400">
              <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">20</h2>
              <p className="text-gray-500 dark:text-gray-400">Active agents today</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-400">
              <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">0.6%</h2>
              <p className="text-gray-500 dark:text-gray-400">Escalated tickets</p>
            </div>
          </div>
        </div>

        {/* 3 ── Reasons for tickets + Best agents */}
        <div className="mb-4 grid gap-4 xl:grid-cols-2">

          {/* Reasons for tickets */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="mb-4 flex justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
              <div className="items-center sm:flex">
                <div className="mb-4 me-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 sm:mb-0">
                  <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h5 className="pb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white">Reasons for tickets</h5>
                  <p className="shrink-0 text-gray-500 dark:text-gray-400">Top reasons for tickets this week</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2">
              <dl className="mb-4 flex items-center sm:mb-0">
                <dt className="me-1 text-gray-500 dark:text-gray-400">Tickets received:</dt>
                <dd className="font-semibold text-gray-900 dark:text-white">3,232</dd>
              </dl>
              <dl className="flex items-center sm:justify-end">
                <dt className="me-1 text-gray-500 dark:text-gray-400">Response rate:</dt>
                <dd className="font-semibold text-gray-900 dark:text-white">93%</dd>
              </dl>
            </div>

            <ul className="space-y-6 py-6 font-medium text-gray-900 dark:text-white">
              {ticketReasons.map((r) => (
                <li key={r.label}>
                  <div className="items-center justify-between gap-8 sm:flex 2xl:gap-16">
                    <h3 className="mb-2 w-56 shrink-0 sm:mb-0">{r.label}</h3>
                    <div className="flex w-full items-center gap-8 2xl:gap-16">
                      <div className="h-5 w-full rounded-md bg-gray-200 dark:bg-gray-700">
                        <div className={`h-5 rounded-md ${r.color}`} style={{ width: `${r.pct}%` }} />
                      </div>
                      <span>{r.pct}%</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-center space-x-4 border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-6">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Zm5-7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 2a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Z" clipRule="evenodd" />
                </svg>
                Go to inbox
              </a>
              <a
                href="#"
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Download report
              </a>
            </div>
          </div>

          {/* Best agents */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white md:mb-6">Best agents this week</h2>
            <ul>
              {bestAgents.map((agent, i) => (
                <li key={agent.name} className={i < bestAgents.length - 1 ? "border-b border-gray-200 py-2.5 dark:border-gray-700" : "py-2.5"}>
                  <div className="flex items-center space-x-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={agent.img} alt="User avatar" className="h-8 w-8 rounded-full" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-gray-900 dark:text-white">{agent.name}</p>
                      <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">{agent.email}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="hidden text-gray-500 dark:text-gray-400 sm:flex">{agent.tickets}</p>
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-sm font-medium text-green-500 dark:bg-green-900 dark:text-green-300">{agent.score}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between pt-5">
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Last 7 days
                  <HiChevronDown className="ms-1 h-4 w-4" />
                </button>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:border-gray-700 dark:text-primary-500 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Agents report
                  <HiArrowRight className="ms-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 ── Latest tickets table */}
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white md:mb-6">Latest tickets</h2>

          {/* Table toolbar */}
          <div className="border-b dark:border-gray-700 border-gray-200">
            <div className="flex flex-col-reverse items-center justify-between pb-4 md:flex-row md:space-x-4">
              <div className="flex w-full flex-col space-y-3 md:flex-row md:items-center md:space-y-0 lg:w-2/3">
                <form className="w-full flex-1 md:mr-4 md:max-w-sm">
                  <label htmlFor="ticket-search" className="sr-only">Search</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg aria-hidden="true" className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="ticket-search"
                      className="block w-full min-w-64 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Search invoice"
                    />
                    <button
                      type="submit"
                      className="absolute bottom-0 right-0 top-0 rounded-r-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Search
                    </button>
                  </div>
                </form>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="-ms-0.5 me-1.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                    </svg>
                    Filters
                    <svg className="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                  >
                    <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2 0 1.1.9 2 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm1 8.8A2.3 2.3 0 0 0 9.6 13a2.3 2.3 0 0 0 2.1 2.5h.7a.3.3 0 0 1 .2.4l-.4.1h-1a1 1 0 1 0 0 2h1c.5 0 1 0 1.4-.3a2 2 0 0 0 1-1.1 2.3 2.3 0 0 0-2.2-3l-.5-.1a.3.3 0 0 1-.3-.4.3.3 0 0 1 .4-.3h1a1 1 0 1 0 0-2h-1Zm8 1.5a1 1 0 1 0-2-.6l-.5 1.7-.5-1.7a1 1 0 0 0-2 .6l1.5 4.8a1 1 0 0 0 1.9 0l1.6-4.8Zm-13.8.9.4-.2h1a1 1 0 1 0 0-2h-1A2.6 2.6 0 0 0 4 13.6v1.8A2.6 2.6 0 0 0 6.6 18h1a1 1 0 1 0 0-2h-1a.6.6 0 0 1-.6-.6v-1.8c0-.1 0-.3.2-.4Z" clipRule="evenodd" />
                    </svg>
                    Export CSV
                  </button>
                </div>
              </div>

              <div className="mb-3 flex w-full shrink-0 flex-col items-stretch justify-end md:mb-0 md:w-auto md:flex-row md:items-center md:space-x-3">
                <button
                  type="button"
                  className="flex items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
                  </svg>
                  Create ticket
                </button>
              </div>
            </div>
          </div>

          {/* Radio filters */}
          <div className="flex flex-wrap py-4">
            <div className="mr-4 hidden items-center text-sm font-medium text-gray-900 dark:text-white md:flex">Show only:</div>
            <div className="flex flex-wrap gap-4">
              {["All", "Solved", "Pending", "Archived"].map((label) => (
                <div key={label} className="flex items-center">
                  <input
                    id={`filter-${label.toLowerCase()}`}
                    type="radio"
                    name="ticket-filter"
                    defaultChecked={label === "All"}
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label htmlFor={`filter-${label.toLowerCase()}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Tickets table */}
          <div className="overflow-x-auto relative">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-tickets"
                        type="checkbox"
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label htmlFor="checkbox-all-tickets" className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">ID</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Requested by</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Subject</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Priority</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Agent</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Create Date</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Status</th>
                  <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                      </div>
                    </td>
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                      <a className="hover:underline" href="#">{ticket.id}</a>
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{ticket.requester}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{ticket.subject}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                      <span className={`rounded-sm px-2.5 py-0.5 text-xs font-medium ${ticket.priorityCls}`}>{ticket.priority}</span>
                    </td>
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                      <div className="mr-3 flex items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={ticket.agentImg} alt="Avatar" className="mr-3 h-8 w-auto rounded-full" />
                        {ticket.agent}
                      </div>
                    </th>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{ticket.date}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {ticket.statusIcon === "pending" ? (
                        <span className={`inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-medium ${ticket.statusCls}`}>
                          <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M5.5 3a1 1 0 0 0 0 2H7v2.3c0 .7.2 1.3.6 1.8L9 11.9l.1.1v.1L7.5 15a3 3 0 0 0-.6 1.8V19H5.5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H17v-2.3a3 3 0 0 0-.6-1.8l-1.6-2.8v-.2l1.6-2.8a3 3 0 0 0 .6-1.8V5h1.5a1 1 0 1 0 0-2h-13Z" clipRule="evenodd" />
                          </svg>
                          Pending
                        </span>
                      ) : (
                        <span className={`inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-medium ${ticket.statusCls}`}>
                          <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2c0-.6-.4-1-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.7 8.7a1 1 0 0 0-1.4-1.4L11 14.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l4-4Z" clipRule="evenodd" />
                          </svg>
                          Solved
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeWidth={4} d="M6 12h0m6 0h0m6 0h0" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table pagination */}
          <div className="relative overflow-hidden">
            <nav
              className="flex flex-col items-start justify-between space-y-3 pt-4 md:flex-row md:items-center md:space-y-0 md:pt-6"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">1-15</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
                    </svg>
                  </a>
                </li>
                {["1", "2", "3", "...", "100"].map((page, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      aria-current={page === "3" ? "page" : undefined}
                      className={
                        page === "3"
                          ? "z-10 flex items-center justify-center border border-primary-300 bg-primary-50 px-3 py-2 text-sm leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                          : "flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }
                    >
                      {page}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
