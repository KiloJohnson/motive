"use client";

import { PreviewShell } from "../PreviewShell";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// ── Color constants ────────────────────────────────────────────────────────
const PRIMARY   = "#1A56DB";
const SECONDARY = "#FF9963";
const TERTIARY  = "#16BDCA";
const QUATERNARY = "#E74694";
const SUCCESS   = "#31C48D";
const DANGER    = "#F05252";

// ── Heatmap data generator (mirrors charts.js generateData) ───────────────
function makeHeatData(count: number, min: number, max: number) {
  return Array.from({ length: count }, (_, i) => ({
    x: String(i + 1),
    y: Math.floor(Math.random() * (max - min + 1)) + min,
  }));
}

// ── Chart: Commits (heatmap) ───────────────────────────────────────────────
const commitsSeries = [
  { name: "Mon", data: makeHeatData(53, 0, 90) },
  { name: "Tue", data: makeHeatData(53, 0, 90) },
  { name: "Wed", data: makeHeatData(53, 0, 90) },
  { name: "Thu", data: makeHeatData(53, 0, 90) },
  { name: "Fri", data: makeHeatData(53, 0, 90) },
  { name: "Sat", data: makeHeatData(53, 0, 90) },
  { name: "Sun", data: makeHeatData(53, 0, 90) },
];

const commitsOptions = {
  colors: [PRIMARY],
  chart: {
    width: "100%",
    height: 350,
    type: "heatmap" as const,
    toolbar: { show: false },
  },
  grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
  dataLabels: { enabled: false },
  yaxis: {
    show: false,
    labels: {
      show: true,
      style: { fontFamily: "Inter, sans-serif", cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400" },
    },
  },
  tooltip: {
    shared: false,
    followCursor: true,
    fillSeriesColor: true,
    style: { fontSize: "14px", fontFamily: "Inter, sans-serif" },
    y: { formatter: (v: number) => v + " commits" },
  },
  xaxis: {
    type: "category" as const,
    categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    floating: false,
    labels: {
      show: true,
      trim: true,
      style: { fontFamily: "Inter, sans-serif", cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400" },
    },
    tooltip: { enabled: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  responsive: [{ breakpoint: 480, options: { yaxis: { labels: { show: false } } } }],
};

// ── Chart: Radial (team progress) ─────────────────────────────────────────
const radialSeries = [90, 85, 70, 25];

const radialOptions = {
  series: radialSeries,
  colors: [PRIMARY, TERTIARY, SECONDARY, QUATERNARY],
  chart: {
    height: "320px",
    width: "100%",
    type: "radialBar" as const,
    sparkline: { enabled: true },
  },
  responsive: [{ breakpoint: 768, options: { chart: { height: "300px" } } }],
  plotOptions: {
    radialBar: {
      track: { background: "#F3F4F6" },
      dataLabels: { show: false },
      hollow: { margin: 0, size: "32%" },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: { left: 2, right: 2, top: -23, bottom: -20 },
  },
  labels: ["Done", "In progress", "To do"],
  legend: { show: false, position: "bottom" as const, fontFamily: "Inter, sans-serif" },
  tooltip: { enabled: true, x: { show: false } },
  yaxis: { show: false, labels: { formatter: (v: number) => v + "%" } },
};

// ── Chart: Profit (horizontal bar) ────────────────────────────────────────
const profitSeries = [
  { name: "Income",  color: SUCCESS, data: [1420, 1620, 1820, 1420, 1650, 2120] },
  { name: "Expense", color: DANGER,  data: [788,  810,  866,  788,  1100, 1200] },
];

const profitOptions = {
  series: profitSeries,
  chart: {
    sparkline: { enabled: false },
    type: "bar" as const,
    width: "100%",
    height: 400,
    toolbar: { show: false },
  },
  fill: { opacity: 1 },
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: "100%",
      borderRadiusApplication: "end" as const,
      borderRadius: 6,
      dataLabels: { position: "top" as const },
    },
  },
  legend: { show: true, position: "bottom" as const },
  dataLabels: { enabled: false },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: (val: number) => val >= 1000 ? "$" + (val / 1000) + "k" : "$" + val,
    },
  },
  xaxis: {
    labels: {
      show: true,
      style: { fontFamily: "Inter, sans-serif", cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400" },
      formatter: (val: number | string) => {
        const n = Number(val);
        return n >= 1000 ? "$" + (n / 1000) + "k" : "$" + n;
      },
    },
    categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    axisTicks: { show: false },
    axisBorder: { show: false },
  },
  yaxis: {
    labels: {
      show: true,
      style: { fontFamily: "Inter, sans-serif", cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400" },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: { left: 2, right: 2, top: -20 },
  },
};

// ── Chart: Donut traffic ───────────────────────────────────────────────────
const donutTrafficSeries = [75, 14, 6.4, 2.6, 2];

const donutTrafficOptions = {
  series: donutTrafficSeries,
  colors: [PRIMARY, TERTIARY, SECONDARY, QUATERNARY, "#9061F9"],
  chart: { height: 400, width: "100%", type: "donut" as const },
  stroke: { colors: ["#ffffff"], lineCap: "round" as const },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: { show: true, fontFamily: "Inter, sans-serif", offsetY: 20 },
          total: {
            showAlways: true,
            show: true,
            label: "Unique visitors",
            fontFamily: "Inter, sans-serif",
            formatter: (w: { globals: { seriesTotals: number[] } }) =>
              w.globals.seriesTotals.reduce((a, b) => a + b, 0) + "k",
          },
          value: {
            show: true,
            fontFamily: "Inter, sans-serif",
            offsetY: -20,
            formatter: (v: string) => v + "%",
          },
        },
        size: "80%",
      },
    },
  },
  grid: { padding: { top: -2 } },
  labels: ["Direct", "Google", "Reddit", "Twitter", "Producthunt"],
  dataLabels: { enabled: false },
  legend: { position: "bottom" as const, fontFamily: "Inter, sans-serif" },
  yaxis: { labels: { formatter: (v: number) => v + "%" } },
  xaxis: {
    labels: { formatter: (v: string) => v + "k" },
    axisTicks: { show: false },
    axisBorder: { show: false },
  },
};

// ── Chart: Project completion (radial) ────────────────────────────────────
const projectCompletionSeries = [92];

const projectCompletionOptions = {
  series: projectCompletionSeries,
  fill: { colors: [PRIMARY], opacity: 1, type: "solid" as const },
  chart: {
    height: "400px",
    width: "100%",
    type: "radialBar" as const,
    sparkline: { enabled: true },
  },
  responsive: [{ breakpoint: 768, options: { chart: { height: "300px" } } }],
  plotOptions: {
    radialBar: {
      track: { background: "#F3F4F6" },
      hollow: { margin: 0, size: "60%" },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: { left: 2, right: 2, top: -23, bottom: -20 },
  },
  labels: ["Completion rate"],
  tooltip: { enabled: true, x: { show: true } },
  yaxis: { labels: { formatter: (v: number) => v + "%" } },
};

// ── Chart: Website traffic (pie) ──────────────────────────────────────────
const websiteTrafficSeries = [52.8, 26.8, 20.4];

const websiteTrafficOptions = {
  series: websiteTrafficSeries,
  colors: [PRIMARY, SECONDARY, QUATERNARY],
  chart: { height: 320, width: "100%", type: "pie" as const },
  stroke: { colors: ["#ffffff"], lineCap: "round" as const },
  plotOptions: {
    pie: {
      labels: { show: true },
      size: "100%",
      dataLabels: { offset: -25 },
    },
  },
  grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
  labels: ["Direct", "Organic search", "Referrals"],
  dataLabels: {
    enabled: true,
    style: { fontFamily: "Inter, sans-serif" },
  },
  legend: { position: "bottom" as const, fontFamily: "Inter, sans-serif" },
  yaxis: { labels: { formatter: (v: number) => v + "%" } },
  xaxis: {
    labels: { formatter: (v: string) => v + "%" },
    axisTicks: { show: false },
    axisBorder: { show: false },
  },
};

// ── Chart: Projects taken (bar) ───────────────────────────────────────────
const projectsTakenSeries = [{ name: "Projects", data: [7, 8, 9, 6, 7, 10] }];

const projectsTakenOptions = {
  fill: { colors: [PRIMARY], opacity: 1, type: "solid" as const },
  series: projectsTakenSeries,
  chart: { height: 400, type: "bar" as const, toolbar: { show: false } },
  plotOptions: {
    bar: {
      borderRadius: 8,
      dataLabels: { position: "top" as const },
    },
  },
  dataLabels: {
    enabled: false,
    offsetY: -30,
    style: { fontSize: "16px", colors: ["#304758"] },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    position: "bottom" as const,
    labels: {
      show: true,
      trim: true,
      style: { fontFamily: "Inter, sans-serif", cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400" },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
    tooltip: { enabled: true },
  },
  yaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { show: false },
  },
  grid: { show: false, padding: { left: 0, right: 0, top: 0, bottom: 0 } },
};

// ── Task table data ────────────────────────────────────────────────────────
const tasks = [
  {
    name: "Upload feed and Reels in Instagram",
    status: "In progress",
    avatars: [10, 1, 3],
    extra: "+5",
    progress: 75,
    progressColor: "bg-blue-700",
    preview: "Website",
    time: { elapsed: "6:47", total: "/8:00", running: true },
    due: "23 Nov 2025",
  },
  {
    name: "Crossplatform analysis",
    status: "Completed",
    avatars: [6, 7, 2],
    extra: "+2",
    progress: 100,
    progressColor: "bg-green-500",
    preview: "Website",
    time: { elapsed: "7:00", total: "", running: false },
    due: "03 Nov 2025",
  },
  {
    name: "Product features analysis",
    status: "In progress",
    avatars: [8, 1, 3],
    extra: null,
    progress: 50,
    progressColor: "bg-blue-700",
    preview: "Website",
    time: { elapsed: "3:25", total: "/8:00", running: true },
    due: "Yesterday",
  },
  {
    name: "Create user story",
    status: "Completed",
    avatars: [2, 1, 5],
    extra: null,
    progress: 100,
    progressColor: "bg-green-500",
    preview: "None",
    time: { elapsed: "8:00", total: "", running: false },
    due: "23 Nov 2025",
  },
  {
    name: "Users profile update",
    status: "In progress",
    avatars: [10, 1, 5],
    extra: "+2",
    progress: 20,
    progressColor: "bg-blue-700",
    preview: "Website",
    time: { elapsed: "4:21", total: "/8:00", running: true },
    due: "Yesterday",
  },
  {
    name: "User flow update",
    status: "Completed",
    avatars: [6, 7, 3],
    extra: null,
    progress: 100,
    progressColor: "bg-green-500",
    preview: "None",
    time: { elapsed: "7:00", total: "", running: false },
    due: "23 Oct 2025",
  },
  {
    name: "Update design system",
    status: "In review",
    avatars: [10, 1],
    extra: null,
    progress: 100,
    progressColor: "bg-yellow-300",
    preview: "None",
    time: { elapsed: "7:00", total: "", running: false },
    due: "02 Nov 2025",
  },
  {
    name: "Create a new logo",
    status: "Completed",
    avatars: [2, 1, 3],
    extra: "+2",
    progress: 100,
    progressColor: "bg-green-500",
    preview: "Website",
    time: { elapsed: "5:00", total: "", running: false },
    due: "30 Oct 2025",
  },
  {
    name: "Screen structure",
    status: "In review",
    avatars: [8, 1],
    extra: null,
    progress: 100,
    progressColor: "bg-yellow-300",
    preview: "Website",
    time: { elapsed: "2:00", total: "", running: false },
    due: "23 Nov 2025",
  },
  {
    name: "Implement GPT 3",
    status: "In progress",
    avatars: [10, 1, 5],
    extra: "+2",
    progress: 25,
    progressColor: "bg-blue-700",
    preview: "None",
    time: { elapsed: "3:11", total: "/8:00", running: true },
    due: "Today",
  },
];

const statusBadge: Record<string, string> = {
  "In progress": "rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "Completed":   "rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",
  "In review":   "rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
};

// ── Shared SVG fragments ───────────────────────────────────────────────────
const ChevronDown = () => (
  <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="mr-1 h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2" />
  </svg>
);

const ClockIcon = () => (
  <svg className="me-1.5 h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z" clipRule="evenodd" />
  </svg>
);

const DotsIcon = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth={4} d="M6 12h0m6 0h0m6 0h0" />
  </svg>
);

const UpArrow = () => (
  <svg className="me-1.5 h-2.5 w-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13V1m0 0L1 5m4-4 4 4" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
  </svg>
);

// ── Page ───────────────────────────────────────────────────────────────────
export default function AdminProjectManagementPage() {
  return (
    <PreviewShell variant="admin" title="Project Management Dashboard">
      <div className="px-4">

        {/* ── 1. KPI stat cards ── */}
        <div className="my-4 grid gap-4 grid-cols-2 2xl:grid-cols-4">

          {/* Done */}
          <div className="items-center space-x-0 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:flex sm:space-x-4 md:p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-400 sm:mb-0 shrink-0">
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
          <div className="items-center space-x-0 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:flex sm:space-x-4 md:p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-400 sm:mb-0 shrink-0">
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
          <div className="items-center space-x-0 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:flex sm:space-x-4 md:p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-400 sm:mb-0 shrink-0">
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
          <div className="items-center space-x-0 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:flex sm:space-x-4 md:p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400 sm:mb-0 shrink-0">
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

        {/* ── 2. Commits over time (heatmap) ── */}
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div className="items-center justify-between gap-6 sm:flex">
            <div className="mb-4 shrink-0 sm:mb-0">
              <h2 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">Commits over time</h2>
              <p className="text-gray-500 dark:text-gray-400">Number of commits</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <CalendarIcon />
                </div>
                <input name="start" type="text" className="block w-36 rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Start date" />
              </div>
              <span className="text-gray-500 dark:text-gray-400">to</span>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <CalendarIcon />
                </div>
                <input name="end" type="text" className="block w-36 rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="End date" />
              </div>
            </div>
          </div>
          <ReactApexChart options={commitsOptions} series={commitsSeries} type="heatmap" height={350} />
        </div>

        {/* ── 3. Two-col: Team progress + Profit ── */}
        <div className="mb-4 grid gap-4 md:grid-cols-2">

          {/* Team progress */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="mb-3 flex justify-between">
              <div className="flex items-center">
                <div className="mb-4 flex items-center justify-center md:mb-6">
                  <h5 className="pe-1 text-xl font-bold leading-none text-gray-900 dark:text-white">Your team&apos;s progress</h5>
                  <svg className="ms-1 h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
              <div className="mb-2 grid grid-cols-3 gap-3">
                <dl className="flex h-[78px] flex-col items-center justify-center rounded-lg bg-orange-50 dark:bg-gray-600">
                  <dt className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-600 dark:bg-gray-500 dark:text-orange-300">12</dt>
                  <dd className="text-sm font-medium text-orange-600 dark:text-orange-300">To do</dd>
                </dl>
                <dl className="flex h-[78px] flex-col items-center justify-center rounded-lg bg-teal-50 dark:bg-gray-600">
                  <dt className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-medium text-teal-600 dark:bg-gray-500 dark:text-teal-300">23</dt>
                  <dd className="text-sm font-medium text-teal-600 dark:text-teal-300">In progress</dd>
                </dl>
                <dl className="flex h-[78px] flex-col items-center justify-center rounded-lg bg-blue-50 dark:bg-gray-600">
                  <dt className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-700 dark:bg-gray-500 dark:text-blue-300">64</dt>
                  <dd className="text-sm font-medium text-blue-700 dark:text-blue-300">Done</dd>
                </dl>
              </div>
              <div className="mt-3 space-y-2 border-t border-gray-200 pt-3 dark:border-gray-600">
                <dl className="flex items-center justify-between">
                  <dt className="text-sm font-normal text-gray-500 dark:text-gray-400">Average task completion rate:</dt>
                  <dd className="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                    <svg className="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                    </svg>
                    57%
                  </dd>
                </dl>
                <dl className="flex items-center justify-between">
                  <dt className="text-sm font-normal text-gray-500 dark:text-gray-400">Days until sprint ends:</dt>
                  <dd className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800 dark:bg-gray-600 dark:text-gray-300">13 days</dd>
                </dl>
                <dl className="flex items-center justify-between">
                  <dt className="text-sm font-normal text-gray-500 dark:text-gray-400">Next meeting:</dt>
                  <dd className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800 dark:bg-gray-600 dark:text-gray-300">Thursday</dd>
                </dl>
              </div>
            </div>

            {/* Radial chart */}
            <div className="py-6">
              <ReactApexChart options={radialOptions} series={radialSeries} type="radialBar" height={320} />
            </div>

            <div className="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between pt-5">
                <button type="button" className="inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Last 7 days <ChevronDown />
                </button>
                <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-blue-700 hover:bg-gray-100 dark:text-blue-500 dark:hover:bg-gray-700">
                  Progress report <ArrowRight />
                </a>
              </div>
            </div>
          </div>

          {/* Profit */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="flex justify-between border-b border-gray-200 pb-3 dark:border-gray-700">
              <dl>
                <dt className="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Profit</dt>
                <dd className="text-xl font-bold leading-none text-gray-900 dark:text-white">$5,405</dd>
              </dl>
              <div>
                <span className="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                  <UpArrow />
                  Profit rate 23.5%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 py-3">
              <dl>
                <dt className="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Income</dt>
                <dd className="text-xl font-bold leading-none text-green-500 dark:text-green-400">$23,635</dd>
              </dl>
              <dl>
                <dt className="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Expense</dt>
                <dd className="text-xl font-bold leading-none text-red-600 dark:text-red-500">-$18,230</dd>
              </dl>
            </div>

            <ReactApexChart options={profitOptions} series={profitSeries} type="bar" height={400} />

            <div className="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between pt-5">
                <button type="button" className="inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Last 7 days <ChevronDown />
                </button>
                <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-blue-700 hover:bg-gray-100 dark:text-blue-500 dark:hover:bg-gray-700">
                  Profit report <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. Three-col: Project completion, Website traffic, Projects taken ── */}
        <div className="mb-4 grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">

          {/* Projects completion */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="flex justify-between">
              <div>
                <h5 className="mb-2 pe-1 text-xl font-bold leading-none text-gray-900 dark:text-white">Projects completion</h5>
                <p className="text-gray-500 dark:text-gray-400">Average project success rate</p>
              </div>
              <div>
                <a href="#" className="inline-flex items-center font-medium text-blue-700 hover:underline dark:text-blue-500">
                  View all <ArrowRight />
                </a>
              </div>
            </div>

            <div className="py-6">
              <ReactApexChart options={projectCompletionOptions} series={projectCompletionSeries} type="radialBar" height={400} />
            </div>

            <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-6">
              <p className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                <span className="me-1.5 flex items-center font-medium text-green-500 dark:text-green-400">
                  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                  </svg>
                  3.2%
                </span>
                compared to last month
              </p>
            </div>
          </div>

          {/* Website traffic */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="mb-3 flex justify-between">
              <h5 className="inline-flex items-center pe-1 text-xl font-bold leading-none text-gray-900 dark:text-white">
                Website traffic
                <button type="button" className="ms-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clipRule="evenodd" />
                  </svg>
                </button>
              </h5>
            </div>

            <div className="flex" id="devices">
              {["Desktop", "Tablet", "Mobile"].map((label) => (
                <div key={label} className="me-4 flex items-center">
                  <input id={label.toLowerCase()} type="checkbox" value={label.toLowerCase()} className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700" />
                  <label htmlFor={label.toLowerCase()} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
                </div>
              ))}
            </div>

            <div className="py-6">
              <ReactApexChart options={websiteTrafficOptions} series={websiteTrafficSeries} type="pie" height={320} />
            </div>

            <div className="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between pt-5">
                <button type="button" className="inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Last 7 days <ChevronDown />
                </button>
                <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-blue-700 hover:bg-gray-100 dark:text-blue-500 dark:hover:bg-gray-700">
                  Traffic report <ArrowRight />
                </a>
              </div>
            </div>
          </div>

          {/* Projects taken */}
          <div className="col-span-1 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6 xl:col-span-2 2xl:col-span-1">
            <h5 className="mb-2 pe-1 text-xl font-bold leading-none text-gray-900 dark:text-white">Projects taken</h5>

            <div className="py-6">
              <ReactApexChart options={projectsTakenOptions} series={projectsTakenSeries} type="bar" height={400} />
            </div>

            <div className="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between pt-5">
                <button type="button" className="inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Last 7 days <ChevronDown />
                </button>
                <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-blue-700 hover:bg-gray-100 dark:text-blue-500 dark:hover:bg-gray-700">
                  Projects report <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── 5. Latest tasks table ── */}
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div className="relative">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Latest tasks</h2>
            <div className="flex flex-col-reverse items-stretch justify-between pb-4 md:flex-row md:items-center">
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0 lg:w-2/3">
                {/* Search */}
                <form className="w-full flex-1 sm:mr-4 md:max-w-sm">
                  <label htmlFor="default-search" className="sr-only text-sm font-medium text-gray-900 dark:text-white">Search</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center ps-3">
                      <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full min-w-64 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Search for projects" />
                    <button type="submit" className="absolute bottom-0 right-0 top-0 rounded-r-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800">Search</button>
                  </div>
                </form>
                {/* Filter button */}
                <div className="flex items-center space-x-4 pe-4">
                  <button type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:w-auto">
                    <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z" />
                    </svg>
                    Filter
                    <ChevronDown />
                  </button>
                  <button type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:w-auto">
                    <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clipRule="evenodd" />
                    </svg>
                    Options
                    <ChevronDown />
                  </button>
                </div>
              </div>
              {/* Add new task */}
              <div className="flex w-full shrink-0 flex-col items-stretch justify-end pb-4 md:w-auto md:flex-row md:items-center md:pb-0">
                <button type="button" className="flex items-center justify-center rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800">
                  <svg className="-ml-1 mr-1.5 h-3.5 w-3.5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 20 20">
                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                  </svg>
                  Add new task
                </button>
              </div>
            </div>

            {/* Show only filter radios */}
            <div className="flex flex-wrap border-t pb-4 pt-1 dark:border-gray-700 border-gray-200">
              <div className="mr-4 mt-3 hidden items-center text-sm font-medium text-gray-900 dark:text-white md:flex">Show only:</div>
              <div className="flex flex-wrap">
                {["All", "Completed", "In progress", "In review"].map((label) => (
                  <div key={label} className="mr-4 mt-3 flex items-center">
                    <input id={`show-${label}`} type="radio" name="show-only" className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-700 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700" />
                    <label htmlFor={`show-${label}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto relative">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-700 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700" />
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">Name</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Status</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Users</th>
                  <th scope="col" className="min-w-56 px-4 py-3 font-semibold">Progress</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Preview</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Time Tracking</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Due Date</th>
                  <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 border-gray-200">
                    <td className="w-4 px-4 py-2">
                      <input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-700 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700" />
                    </td>
                    <th scope="row" className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                      <a href="#" className="font-medium text-gray-900 hover:underline dark:text-white">{task.name}</a>
                    </th>
                    <td className="whitespace-nowrap px-4 py-2">
                      <span className={statusBadge[task.status]}>{task.status}</span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <div className="flex w-28 -space-x-4">
                        {task.avatars.map((n, i) => (
                          <img key={i} src={`/images/users/avatar-${n}.png`} alt="" className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800" />
                        ))}
                        {task.extra && (
                          <a href="#" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600">
                            {task.extra}
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium">
                      <div className="mb-1 flex justify-end">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{task.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className={`h-1.5 rounded-full ${task.progressColor}`} style={{ width: `${task.progress}%` }}></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                      {task.preview === "Website" ? (
                        <a href="#" className="inline-flex items-center font-medium text-blue-700 hover:underline dark:text-blue-500">
                          <ExternalLinkIcon />
                          Website
                        </a>
                      ) : (
                        <span className="me-2 rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">None</span>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                      <div className="inline-flex items-center rounded-lg border bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700 border-gray-200">
                        <ClockIcon />
                        {task.time.running ? (
                          <><span className="text-green-500">{task.time.elapsed}</span>{task.time.total}</>
                        ) : (
                          task.time.elapsed
                        )}
                        {task.time.running ? (
                          <button className="ml-3 rounded-md bg-orange-500 p-1 text-white hover:bg-orange-700">
                            <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M8 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z" clipRule="evenodd" />
                            </svg>
                          </button>
                        ) : (
                          <button className="ms-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                            <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clipRule="evenodd" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">{task.due}</td>
                    <td className="px-4 py-2">
                      <button type="button" className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <DotsIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
