"use client";

import { PreviewShell } from "../PreviewShell";
import dynamic from "next/dynamic";
import { HiArrowUp, HiArrowDown, HiArrowRight, HiChevronDown } from "react-icons/hi";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// ── Color constants ────────────────────────────────────────────────────────
const PRIMARY    = "#1A56DB";
const SECONDARY  = "#FF9963";
const TERTIARY   = "#16BDCA";
const QUATERNARY = "#E74694";
const QUINARY    = "#9061F9";

// ── Revenue chart (area sparkline) ────────────────────────────────────────
const revenueSeries = [
  { name: "Revenue", data: [23500, 22418, 24178, 21200, 20157, 23200, 22246], color: PRIMARY },
];
const revenueOptions = {
  chart: {
    height: "100%" as const,
    maxWidth: "100%",
    type: "area" as const,
    fontFamily: "Inter, sans-serif",
    dropShadow: { enabled: false , animations: { enabled: false } },
    toolbar: { show: false },
    sparkline: { enabled: true },
  },
  tooltip: { enabled: true, x: { show: false } },
  fill: {
    type: "gradient",
    gradient: { opacityFrom: 0.55, opacityTo: 0, shade: PRIMARY, gradientToColors: [PRIMARY] },
  },
  dataLabels: { enabled: false },
  stroke: { width: 4 },
  grid: { show: false, strokeDashArray: 4, padding: { left: 2, right: 2, top: 0 } },
  xaxis: {
    categories: ["01 Feb","02 Feb","03 Feb","04 Feb","05 Feb","06 Feb","07 Feb"],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
};

// ── Customers chart (area sparkline) ──────────────────────────────────────
const customersSeries = [
  { name: "Customers", data: [213457, 214374, 213638, 214111, 213457, 214768, 213869], color: PRIMARY },
];
const customersOptions = { ...revenueOptions };

// ── Conversion chart (area sparkline) ─────────────────────────────────────
const conversionSeries = [
  { name: "Conversion", data: [0.7, 0.7, 0.6, 0.8, 0.6, 0.7, 0.8], color: PRIMARY },
];
const conversionOptions = { ...revenueOptions };

// ── Visits chart (stacked horizontal bar) ─────────────────────────────────
const visitsSeries = [
  { name: "Desktop", data: [45] },
  { name: "Phone",   data: [35] },
  { name: "Tablet",  data: [20] },
];
const visitsOptions = {
  colors: [PRIMARY, SECONDARY, TERTIARY],
  chart: {
    type: "bar" as const,
    height: 130,
    stacked: true,
    stackType: "100%" as const,
    toolbar: { show: false },
  },
  plotOptions: { bar: { horizontal: true, borderRadius: 8 } },
  stroke: { width: 0, colors: ["#ffffff"] },
  xaxis: {
    categories: ["Visits"],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { labels: { show: false } },
  tooltip: { y: { formatter: (v: number) => v + "%" } },
  grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
  fill: { opacity: 1 },
  legend: {
    position: "bottom" as const,
    horizontalAlign: "center" as const,
    offsetX: 40,
    fontFamily: "Inter, sans-serif",
  },
};

// ── Performance chart (radialBar) ─────────────────────────────────────────
const performanceSeries = [90, 85, 70, 25];
const performanceOptions = {
  series: performanceSeries,
  colors: [PRIMARY, TERTIARY, SECONDARY, QUATERNARY],
  chart: {
    height: "320px",
    width: "100%",
    type: "radialBar" as const,
    sparkline: { enabled: true },
  },
  plotOptions: {
    radialBar: {
      track: { background: "#E5E7EB" },
      dataLabels: { show: false },
      hollow: { margin: 0, size: "32%" },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: { left: 2, right: 2, top: -23, bottom: -20 },
  },
  labels: ["Direct", "Sponsor", "Affiliate", "E-mail"],
  legend: { show: false, position: "bottom" as const, fontFamily: "Inter, sans-serif" },
  tooltip: { enabled: true, x: { show: false } },
  yaxis: { show: false },
};

// ── Donut chart (referrers) ────────────────────────────────────────────────
const donutSeries = [75, 14, 6.4, 2.6, 2];
const donutOptions = {
  series: donutSeries,
  colors: [PRIMARY, TERTIARY, SECONDARY, QUINARY, QUATERNARY],
  chart: { height: 400, width: "100%", type: "donut" as const },
  stroke: { colors: ["transparent"] },
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
            formatter: (w: { globals: { seriesTotals: number[] } }) => {
              const sum = w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0);
              return sum + "k";
            },
          },
          value: {
            show: true,
            fontFamily: "Inter, sans-serif",
            offsetY: -20,
            formatter: (value: string) => value + "%",
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
  yaxis: { labels: { formatter: (value: number) => value + "%" } },
  xaxis: {
    labels: { formatter: (value: string) => value + "k" },
    axisTicks: { show: false },
    axisBorder: { show: false },
  },
};

// ── Traffic chart (pie) ────────────────────────────────────────────────────
const trafficSeries = [52.8, 26.8, 20.4];
const trafficOptions = {
  series: trafficSeries,
  colors: [PRIMARY, TERTIARY, QUATERNARY],
  chart: { height: 420, width: "100%", type: "pie" as const },
  stroke: { colors: ["#ffffff"] },
  plotOptions: {
    pie: {
      labels: { show: true },
      size: "100%",
      dataLabels: { offset: -25 },
    },
  },
  labels: ["Direct", "Organic search", "Referrals"],
  dataLabels: { enabled: true, style: { fontFamily: "Inter, sans-serif" } },
  legend: { position: "bottom" as const, fontFamily: "Inter, sans-serif" },
  yaxis: { labels: { formatter: (value: number) => value + "%" } },
  xaxis: {
    labels: { formatter: (value: string) => value + "%" },
    axisTicks: { show: false },
    axisBorder: { show: false },
  },
};

// ── Sessions chart (half donut — OS) ─────────────────────────────────────
const sessionsSeries = [74, 36];
const sessionsOptions = {
  series: sessionsSeries,
  colors: [PRIMARY, SECONDARY],
  chart: { type: "donut" as const, height: 220 },
  stroke: { colors: ["#ffffff"] },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
    },
  },
  labels: ["Windows", "macOS"],
  grid: { padding: { top: 0, left: 0, right: 0, bottom: -180 } },
  yaxis: { labels: { formatter: (value: number) => value + "%" } },
};

// ── User-count heatmap (static data) ──────────────────────────────────────
function makeHeatRow(seed: number): number[] {
  const base = [12, 30, 55, 70, 45, 80, 62, 38, 20, 10];
  return base.map((v, i) => Math.max(0, Math.min(90, Math.round(v + (seed * 7 + i * 3) % 30 - 10))));
}

const userCountSeries = [
  { name: "Mon", data: makeHeatRow(1) },
  { name: "Tue", data: makeHeatRow(2) },
  { name: "Wed", data: makeHeatRow(3) },
  { name: "Thu", data: makeHeatRow(4) },
  { name: "Fri", data: makeHeatRow(5) },
  { name: "Sat", data: makeHeatRow(6) },
  { name: "Sun", data: makeHeatRow(7) },
];

const userCountOptions = {
  colors: [PRIMARY],
  chart: {
    height: 350,
    type: "heatmap" as const,
    toolbar: { show: false },
  },
  dataLabels: { enabled: false },
  yaxis: {
    show: false,
    labels: {
      show: true,
      style: { fontFamily: "Inter, sans-serif" },
    },
  },
  tooltip: {
    shared: false,
    followCursor: true,
    fillSeriesColor: true,
    style: { fontSize: "14px", fontFamily: "Inter, sans-serif" },
    y: { formatter: (value: number) => value + " users" },
  },
  grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
  xaxis: {
    type: "category" as const,
    categories: ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"],
    floating: false,
    labels: {
      show: true,
      trim: true,
      style: { fontFamily: "Inter, sans-serif" },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
};

// ── SVG arrows ────────────────────────────────────────────────────────────
const ArrowUp = () => (
  <svg className="-ms-1 me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
  </svg>
);
const ArrowDown = () => (
  <svg className="-ms-1 me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14-4-4m4 4 4-4" />
  </svg>
);
const TrendIcon = () => (
  <svg className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
  </svg>
);
const CalendarIcon = () => (
  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
  </svg>
);
const ChevronDown = () => (
  <svg className="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
  </svg>
);
const ArrowRight = () => (
  <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
  </svg>
);

// ── Top pages table data ───────────────────────────────────────────────────
const topPages = [
  { page: "/home",                                              views: "14,882", viewsPct: "22.26%", unique: "10,723", uniquePct: "22.03%", time: "00:00:51", entrances: "8,298",  entrPct: "53.69%", bounce: "47.51%" },
  { page: "/store.html",                                        views: "3,809",  viewsPct: "5.70%",  unique: "2,943",  uniquePct: "6.05%",  time: "00:02:16", entrances: "1,152",  entrPct: "7.45%",  bounce: "36.62%" },
  { page: "/sale.html",                                         views: "3,309",  viewsPct: "4.95%",  unique: "1,554",  uniquePct: "3.17%",  time: "00:01:41", entrances: "236",    entrPct: "1.53%",  bounce: "39.11%" },
  { page: "/google+flowbite/apparel/mens/mens+t+shirts",        views: "2,566",  viewsPct: "3.84%",  unique: "1,890",  uniquePct: "3.88%",  time: "00:00:36", entrances: "919",    entrPct: "5.95%",  bounce: "36%" },
  { page: "/google+flowbite/shop+by+brand/youtube",             views: "1,718",  viewsPct: "2.57%",  unique: "1,342",  uniquePct: "2.76%",  time: "00:01:22", entrances: "1,109",  entrPct: "7.18%",  bounce: "55.20%" },
  { page: "/signin.html",                                       views: "1,606",  viewsPct: "2.40%",  unique: "1,142",  uniquePct: "2.35%",  time: "00:00:57", entrances: "183",    entrPct: "1.18%",  bounce: "36.61%" },
  { page: "/google+flowbite/bags/backpacks/home",               views: "1,479",  viewsPct: "2.21%",  unique: "1,101",  uniquePct: "2.26%",  time: "00:00:49", entrances: "168",    entrPct: "1.09%",  bounce: "25.15%" },
  { page: "/contact",                                           views: "1,325",  viewsPct: "2.05%",  unique: "873",    uniquePct: "2.18%",  time: "00:01:29", entrances: "395",    entrPct: "2.79%",  bounce: "34.43%" },
  { page: "/sport",                                             views: "1,098",  viewsPct: "1.66%",  unique: "768",    uniquePct: "1.57%",  time: "00:01:02", entrances: "86",     entrPct: "0.79%",  bounce: "62.79%" },
  { page: "/google+flowbite/apparel/mens/mens+t+shirts/quickview", views: "996", viewsPct: "1.24%", unique: "387",    uniquePct: "0.77%",  time: "00:00:22", entrances: "9",      entrPct: "0.09%",  bounce: "10.12%" },
];

// ── Sessions by countries data ─────────────────────────────────────────────
const sessionsByCountry = [
  { state: "United States", visitors: "345,756", visUp: true,  customers: "55,834",  custUp: true,  rate: "6.19",  rateUp: true  },
  { state: "UK",            visitors: "234,233", visUp: true,  customers: "23,567",  custUp: false, rate: "9.93",  rateUp: false },
  { state: "France",        visitors: "200,400", visUp: false, customers: "11,345",  custUp: false, rate: "2.93",  rateUp: false },
  { state: "Australia",     visitors: "160,283", visUp: true,  customers: "6,422",   custUp: true,  rate: "12.80", rateUp: true  },
  { state: "Germany",       visitors: "134,935", visUp: false, customers: "10,203",  custUp: true,  rate: "5.80",  rateUp: true  },
];

// ── Page component ─────────────────────────────────────────────────────────

export default function AdminMarketingPage() {
  return (
    <PreviewShell variant="admin" title="Marketing Dashboard">
      <div className="px-4 pt-4">

        {/* ── 1. Top KPI widget ── */}
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div className="items-start justify-between border-b border-gray-200 pb-4 dark:border-gray-700 lg:pb-6 xl:flex">
            {/* 6 stats */}
            <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:mb-0 lg:grid-cols-6 lg:gap-8 xl:grid-cols-6 xl:gap-10">
              {[
                { label: "Live Users",        value: "475",   delta: "1.4%", up: true,  vsLabel: "vs last day"   },
                { label: "Visitors",          value: "657.8k", delta: "2%",  up: false, vsLabel: "vs last month" },
                { label: "Views",             value: "849.7", delta: "4.2%", up: true,  vsLabel: "vs last month" },
                { label: "Avg time on site",  value: "04:14", delta: "5%",   up: true,  vsLabel: "vs last month" },
                { label: "Bounce rate",       value: "40%",   delta: "2.3%", up: true,  vsLabel: "vs last month" },
                { label: "Completions",       value: "20.5k", delta: "1%",   up: true,  vsLabel: "vs last month" },
              ].map((stat) => (
                <div key={stat.label} className="border-b border-gray-200 pb-4 lg:border-0 lg:pb-0 dark:border-gray-700">
                  <h3 className="mb-2 text-gray-500 dark:text-gray-400">{stat.label}</h3>
                  <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                    <span className={`ms-2 inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-medium ${stat.up ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"}`}>
                      {stat.up ? <ArrowUp /> : <ArrowDown />}
                      {stat.delta}
                    </span>
                  </span>
                  <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                    <TrendIcon />
                    {stat.vsLabel}
                  </p>
                </div>
              ))}
            </div>
            {/* "This month" date button */}
            <button className="flex w-full items-center ms-auto justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:w-auto" type="button">
              <CalendarIcon />
              This month
              <ChevronDown />
            </button>
          </div>

          {/* 4 mini charts row */}
          <div className="mb-4 grid items-center gap-4 divide-y pt-4 dark:divide-gray-700 sm:divide-y-0 md:mb-6 md:grid-cols-2 md:pt-6 lg:gap-8 xl:grid-cols-3 2xl:grid-cols-4 2xl:divide-x 2xl:divide-gray-200">
            {/* Revenue */}
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Revenue</p>
                  <h5 className="pb-2 text-2xl font-bold leading-none text-gray-900 dark:text-white">$163.4k</h5>
                </div>
                <span className="rounded-sm bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">-2.4%</span>
              </div>
              <ReactApexChart options={revenueOptions} series={revenueSeries} type="area" height={80} />
            </div>
            {/* Customers */}
            <div className="pt-4 sm:pt-0 lg:ps-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Customers</p>
                  <h5 className="pb-2 text-2xl font-bold leading-none text-gray-900 dark:text-white">1.5M</h5>
                </div>
                <span className="rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">+1.24%</span>
              </div>
              <ReactApexChart options={customersOptions} series={customersSeries} type="area" height={80} />
            </div>
            {/* Conversion rate */}
            <div className="pt-4 sm:pt-0 lg:ps-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Conversion rate</p>
                  <h5 className="pb-2 text-2xl font-bold leading-none text-gray-900 dark:text-white">0.7%</h5>
                </div>
                <span className="rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">+2%</span>
              </div>
              <ReactApexChart options={conversionOptions} series={conversionSeries} type="area" height={80} />
            </div>
            {/* Device split */}
            <div className="pt-4 sm:pt-0 lg:col-span-3 2xl:col-span-1 2xl:ps-8">
              <div className="items-center justify-between space-y-4 sm:flex sm:space-y-0">
                <div className="text-gray-900 dark:text-white">
                  <span className="flex items-center font-medium text-sm">
                    <svg className="me-1 h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M5 3a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2H5ZM3 14v-2h18v2a2 2 0 0 1-2 2h-6v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H5a2 2 0 0 1-2-2Z" clipRule="evenodd" />
                    </svg>
                    Desktop PC
                  </span>
                  <h4 className="text-2xl font-bold">55%</h4>
                  <span className="text-gray-500 dark:text-gray-400">753.6k Visits</span>
                </div>
                <div className="text-gray-900 dark:text-white">
                  <span className="flex items-center font-medium text-sm">
                    <svg className="me-1 h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M5 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clipRule="evenodd" />
                    </svg>
                    Mobile
                  </span>
                  <h4 className="text-2xl font-bold">45%</h4>
                  <span className="text-gray-500 dark:text-gray-400">56.2k Visits</span>
                </div>
                <div className="text-gray-900 dark:text-white">
                  <span className="flex items-center font-medium text-sm">
                    <svg className="me-1 h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M4 4c0-1 .7-2 1.9-2H18c1.3 0 2 1 2 2v16c0 1-.7 2-1.9 2H6a2 2 0 0 1-2-2V4Zm7 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z" clipRule="evenodd" />
                    </svg>
                    Tablet
                  </span>
                  <h4 className="text-2xl font-bold">5%</h4>
                  <span className="text-gray-500 dark:text-gray-400">6.5k Visits</span>
                </div>
              </div>
              <ReactApexChart options={visitsOptions} series={visitsSeries} type="bar" height={130} />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-6">
            <button type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:w-auto">
              View full report
              <svg className="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── 2. Two-column layout ── */}
        <div className="mb-4 grid grid-cols-1 gap-4 xl:grid-cols-2">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-4">

            {/* Website performance widget */}
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <div className="mb-4 items-start justify-between sm:flex">
                <div className="mb-4 sm:mb-0">
                  <h2 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">Website performance</h2>
                  <p className="text-gray-500 dark:text-gray-400">Last month website stats.</p>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:w-auto" type="button">
                  <CalendarIcon />
                  Dec 31 - Jan 31
                  <ChevronDown />
                </button>
              </div>
              <div className="items-center justify-between gap-8 sm:flex xl:block 2xl:flex">
                <div className="w-full">
                  <ul role="list" className="mb-4 grid grid-cols-2 rounded-lg md:mb-6">
                    {[
                      { pct: "4.5%",  up: true,  value: "163.4M", label: "Last month website visits" },
                      { pct: "1.12%", up: false, value: "$768k",  label: "Last month revenue" },
                      { pct: "2%",    up: true,  value: "6,567",  label: "Avg transaction" },
                      { pct: "1.5%",  up: false, value: "$117",   label: "Last month website visits" },
                      { pct: "4.5%",  up: true,  value: "6,010",  label: "Customers" },
                      { pct: "3%",    up: true,  value: "$910",   label: "Performance" },
                    ].map((item, i) => {
                      const isRight  = i % 2 === 1;
                      const isBottom = i >= 4;
                      return (
                        <li key={i} className={`p-2.5 border-gray-200 dark:border-gray-700 ${!isBottom ? "border-b" : ""} ${!isRight ? "border-r" : ""}`}>
                          <div className={`mb-2 inline-flex items-center text-sm font-bold ${item.up ? "text-green-500 dark:text-green-400" : "text-red-600 dark:text-red-500"}`}>
                            {item.pct}
                            <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              {item.up
                                ? <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                                : <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14-4-4m4 4 4-4" />
                              }
                            </svg>
                          </div>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                        </li>
                      );
                    })}
                  </ul>
                  <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
                    View full report <ArrowRight />
                  </a>
                </div>
                {/* Radial performance chart */}
                <div className="w-full pb-4">
                  <ReactApexChart options={performanceOptions} series={performanceSeries} type="radialBar" height={320} />
                </div>
              </div>
            </div>

            {/* Website traffic widget */}
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <div className="flex w-full items-start justify-between">
                <div className="flex-col items-center">
                  <div className="mb-1 flex items-center">
                    <h5 className="me-1 text-xl font-bold leading-none text-gray-900 dark:text-white">Website traffic</h5>
                  </div>
                  <button type="button" className="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500">
                    31 Nov - 31 Dec
                    <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <button type="button" className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                  <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth={3} d="M6 12h0m6 0h0m6 0h0" />
                  </svg>
                </button>
              </div>
              {/* Pie chart — traffic sources */}
              <div className="py-6">
                <ReactApexChart options={trafficOptions} series={trafficSeries} type="pie" height={420} />
              </div>
              <div className="flex justify-center border-t border-gray-200 pt-4 text-gray-500 dark:border-gray-700 dark:text-gray-400 md:pt-6">
                <span className="me-2 inline-flex items-center font-medium text-green-500">
                  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                  </svg>
                  3.2
                </span>
                compared to last month
              </div>
            </div>

            {/* Ask AI widget */}
            <div className="space-y-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:space-y-6 md:p-6">
              <h2 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">Ask Flowbite AI</h2>
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    icon: (
                      <path d="M18 17v-2h1a1 1 0 0 0 0-2h-1a6 6 0 0 0-.4-1H17a2 2 0 0 0 2-2V8a1 1 0 0 0-2 0v2h-.5l-.5-.5V8a4 4 0 0 0-1-2.6l.7-.7c.2-.2.3-.4.3-.7V3a1 1 0 0 0-2 0v.6l-.7.6c-.8-.3-1.8-.3-2.6 0l-.7-.6V3a1 1 0 0 0-2 0v1c0 .3.1.5.3.7l.7.7A4 4 0 0 0 8 8v1.5l-.5.5H7V8a1 1 0 0 0-2 0v2a2 2 0 0 0 2 2h-.7a6 6 0 0 0-.2 1H5a1 1 0 0 0 0 2h1v2a2 2 0 0 0-2 2v2a1 1 0 1 0 2 0v-2h.8a6 6 0 0 0 4.2 3V12a1 1 0 0 1 2 0v10a6 6 0 0 0 4.2-3h.8v2a1 1 0 0 0 2 0v-2a2 2 0 0 0-2-2Zm-4-8.7a5.5 5.5 0 0 0-3-.3v.1a6 6 0 0 0-1 .3V8a2 2 0 1 1 4 0v.3Z" />
                    ),
                    category: "Technical performance",
                    question: "What's my average page load time?",
                  },
                  {
                    icon: (
                      <>
                        <path d="M13.5 2a7 7 0 0 0-.5 0 1 1 0 0 0-1 1v8c0 .6.4 1 1 1h8c.5 0 1-.4 1-1v-.5A8.5 8.5 0 0 0 13.5 2Z" />
                        <path d="M11 6a1 1 0 0 0-1-1 8.5 8.5 0 1 0 9 9 1 1 0 0 0-1-1h-7V6Z" />
                      </>
                    ),
                    category: "Product performance",
                    question: "What default channel groupings have the most revenue?",
                  },
                  {
                    icon: (
                      <path fillRule="evenodd" d="M5 6a3 3 0 1 1 4 2.8V10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8.8a3 3 0 1 1 2 0V10a3 3 0 0 1-3 3h-1v2.2a3 3 0 1 1-2 0V13h-1a3 3 0 0 1-3-3V8.8A3 3 0 0 1 5 6Z" clipRule="evenodd" />
                    ),
                    category: "User channel",
                    question: "What are my top default channel groupings by user?",
                  },
                ].map((item, i) => (
                  <a key={i} href="#" className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-500 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 gap-4">
                    <div>
                      <span className="mb-2 inline-flex items-center font-medium uppercase text-gray-900 dark:text-white">
                        <svg className="me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                        {item.category}
                      </span>
                      <span className="block">{item.question}</span>
                    </div>
                    <svg className="h-6 w-6 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </a>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-6">
                <button type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none sm:w-auto">
                  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16c0-.6.4-1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clipRule="evenodd" />
                  </svg>
                  More insights
                </button>
              </div>
            </div>

            {/* Users by time of day (heatmap) */}
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <div className="w-full items-start justify-between sm:flex">
                <div className="mb-2 sm:mb-0">
                  <h5 className="me-1 text-xl font-bold leading-none text-gray-900 dark:text-white">Users by time of day</h5>
                  <p className="text-gray-500 dark:text-gray-400">vs last day</p>
                </div>
                <button type="button" className="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500">
                  Apr 16 - Apr 17, 2025
                  <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <ReactApexChart options={userCountOptions} series={userCountSeries} type="heatmap" height={350} />
              <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700 sm:pt-6">
                <div>
                  <button className="inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" type="button">
                    Last 7 days
                    <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="shrink-0">
                  <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
                    Users Report <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="space-y-4">

            {/* Referrers widget */}
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <div className="mb-3 flex justify-between">
                <div className="flex items-center justify-center">
                  <h2 className="pe-1 text-xl font-bold leading-none text-gray-900 dark:text-white">Referrers</h2>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:w-auto" type="button">
                  <CalendarIcon />
                  Dec 31 - Jan 31
                  <ChevronDown />
                </button>
              </div>

              {/* Device checkboxes */}
              <div className="flex mb-4">
                {["Desktop","Tablet","Mobile"].map((d) => (
                  <div key={d} className="me-4 flex items-center">
                    <input id={d.toLowerCase()} type="checkbox" defaultChecked={d === "Desktop"} className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700" />
                    <label htmlFor={d.toLowerCase()} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{d}</label>
                  </div>
                ))}
              </div>

              {/* Donut chart */}
              <div className="py-6">
                <ReactApexChart options={donutOptions} series={donutSeries} type="donut" height={400} />
              </div>

              {/* Referrers table */}
              <div className="relative mb-4 overflow-x-auto md:mb-6">
                <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="rounded-s-lg px-6 py-3"></th>
                      <th scope="col" className="px-6 py-3 font-semibold">Websites</th>
                      <th scope="col" className="px-6 py-3 font-semibold">Page views</th>
                      <th scope="col" className="rounded-e-lg px-6 py-3 font-semibold">Visitors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { color: "bg-primary-700",  label: "Direct",       views: "176.8k", visitors: "76.8k" },
                      { color: "bg-teal-400",     label: "Google",       views: "153.2k", visitors: "15.2k" },
                      { color: "bg-orange-300",   label: "Reddit",       views: "102.4k", visitors: "10.4k" },
                      { color: "bg-pink-500",     label: "Twitter/X",    views: "38.7k",  visitors: "8.7k"  },
                      { color: "bg-purple-500",   label: "Producthunt",  views: "44.1k",  visitors: "4.1k"  },
                    ].map((row) => (
                      <tr key={row.label} className="border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                        <td className="px-6 py-4"><div className={`h-3 w-3 rounded-full ${row.color}`}></div></td>
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{row.label}</td>
                        <td className="px-6 py-4">{row.views}</td>
                        <td className="px-6 py-4">{row.visitors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
                View full report <ArrowRight />
              </a>
            </div>

            {/* Sessions by countries */}
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <div className="justify-between sm:mb-3 sm:flex">
                <div className="mb-4 sm:mb-0">
                  <h2 className="mb-2 pe-1 text-xl font-bold leading-none text-gray-900 dark:text-white">Sessions by countries</h2>
                  <p className="text-gray-500 dark:text-gray-400">vs last month</p>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:w-auto" type="button">
                  <CalendarIcon />
                  Dec 31 - Jan 31
                  <ChevronDown />
                </button>
              </div>

              {/* Map placeholder */}
              <div className="py-6 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700" style={{ minHeight: 200 }}>
                <p className="text-sm text-gray-400 dark:text-gray-500">Map visualization</p>
              </div>

              {/* Country table */}
              <div className="relative mb-4 overflow-x-auto md:mb-6">
                <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="rounded-s-lg px-6 py-3 font-semibold whitespace-nowrap">State</th>
                      <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">Visitors</th>
                      <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">Customers</th>
                      <th scope="col" className="rounded-e-lg px-6 py-3 font-semibold whitespace-nowrap">Conversion rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sessionsByCountry.map((row) => (
                      <tr key={row.state} className="border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{row.state}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <svg className={`h-5 w-5 ${row.visUp ? "text-green-500" : "text-red-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              {row.visUp
                                ? <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                                : <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14-4-4m4 4 4-4" />
                              }
                            </svg>
                            {row.visitors}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <svg className={`h-5 w-5 ${row.custUp ? "text-green-500" : "text-red-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              {row.custUp
                                ? <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                                : <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14-4-4m4 4 4-4" />
                              }
                            </svg>
                            {row.customers}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <svg className={`h-5 w-5 ${row.rateUp ? "text-green-500" : "text-red-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              {row.rateUp
                                ? <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                                : <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14-4-4m4 4 4-4" />
                              }
                            </svg>
                            {row.rate}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
                View full report <ArrowRight />
              </a>
            </div>

            {/* Windows / OS sessions chart */}
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <h2 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">Windows</h2>
              <p className="text-gray-500 dark:text-gray-400">Sessions by OS</p>
              <ReactApexChart options={sessionsOptions} series={sessionsSeries} type="donut" height={220} />
            </div>
          </div>
        </div>

        {/* ── 3. Top pages table ── */}
        <div className="relative overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 mb-4">
          <div className="flex-row items-center justify-between space-y-4 p-4 sm:flex sm:space-x-4 sm:space-y-0 md:p-6">
            <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Top pages</h2>
            <div className="flex items-center space-x-4">
              <button type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:w-auto">
                <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.7 7.7A7.1 7.1 0 0 0 5 10.8M18 4v4h-4m-7.7 8.3A7.1 7.1 0 0 0 19 13.2M6 20v-4h4" />
                </svg>
                Refresh
              </button>
              <button type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:w-auto">
                <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v9.3l-2-2a1 1 0 0 0-1.4 1.4l.3.3h-6.6a1 1 0 1 0 0 2h6.6l-.3.3a1 1 0 0 0 1.4 1.4l2-2V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd" />
                </svg>
                Export
              </button>
            </div>
          </div>

          <div className="overflow-x-auto relative">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold md:px-6">Page</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold md:px-6">Pageviews</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold md:px-6">Unique Pageviews</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold md:px-6">Avg. time on page</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold md:px-6">Entrances</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold md:px-6">Bounce rate</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((row) => (
                  <tr key={row.page} className="border-b dark:border-gray-700 border-gray-200">
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white md:px-6">{row.page}</th>
                    <td className="px-4 py-3 md:px-6"><span className="me-1 font-medium text-gray-900 dark:text-white">{row.views}</span>({row.viewsPct})</td>
                    <td className="px-4 py-3 md:px-6"><span className="me-1 font-medium text-gray-900 dark:text-white">{row.unique}</span>({row.uniquePct})</td>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white md:px-6">{row.time}</td>
                    <td className="px-4 py-3 md:px-6"><span className="me-1 font-medium text-gray-900 dark:text-white">{row.entrances}</span>({row.entrPct})</td>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white md:px-6">{row.bounce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <nav className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <a href="#" className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Previous</span>
                  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
                  </svg>
                </a>
              </li>
              {["1","2"].map((n) => (
                <li key={n}>
                  <a href="#" className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{n}</a>
                </li>
              ))}
              <li>
                <a href="#" aria-current="page" className="z-10 flex items-center justify-center border border-primary-300 bg-primary-50 px-3 py-2 text-sm leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
              </li>
              <li>
                <a href="#" className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
    </PreviewShell>
  );
}
