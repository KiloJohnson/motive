"use client";

import { PreviewShell } from "../PreviewShell";
import dynamic from "next/dynamic";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// ── ApexCharts configs (direct from charts.js source) ─────────────────────

const PRIMARY   = "#1A56DB";
const SECONDARY = "#FF9963";
const SUCCESS   = "#16BDCA";
const DANGER    = "#F05252";

// sessions-chart — donut (Sessions by OS)
const sessionsChartSeries = [74, 36];
const sessionsChartOptions = {
  series: [74, 36],
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
  grid: {
    padding: { top: 0, left: 0, right: 0, bottom: -180 },
  },
  yaxis: {
    labels: {
      formatter: (value: number) => value + "%",
    },
  },
  legend: {
    position: "bottom" as const,
    fontFamily: "Inter, sans-serif",
  },
  dataLabels: {
    enabled: true,
    style: { fontFamily: "Inter, sans-serif" },
  },
  responsive: [
    {
      breakpoint: 390,
      options: {
        chart: { height: 200 },
        legend: { position: "bottom" as const },
        grid: { padding: { bottom: -120 } },
      },
    },
  ],
};

// small-users-chart — line (Users sparkline)
const smallUsersChartSeries = [
  {
    name: "Users",
    data: [6500, 6418, 3456, 6526, 2356, 6456],
    color: SUCCESS,
  },
];
const smallUsersChartOptions = {
  chart: {
    height: "100%",
    width: "140px",
    type: "line" as const,
    fontFamily: "Inter, sans-serif",
    dropShadow: { enabled: false },
    toolbar: { show: false },
  },
  tooltip: {
    enabled: true,
    followCursor: true,
    x: { show: false },
    fixed: { enabled: true, position: "top", offsetX: 0, offsetY: -24 },
  },
  dataLabels: { enabled: false },
  stroke: { width: 4 },
  grid: { show: false },
  xaxis: {
    categories: ["01 April", "02 April", "03 April", "04 April", "05 April", "06 April", "07 April"],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
};

// small-customers-chart — line (Customers sparkline)
const smallCustomersChartSeries = [
  {
    name: "Customers",
    data: [100, 80, 230, 300, 104, 80],
    color: DANGER,
  },
];
const smallCustomersChartOptions = {
  chart: {
    height: "100%",
    width: "140px",
    type: "line" as const,
    fontFamily: "Inter, sans-serif",
    dropShadow: { enabled: false },
    toolbar: { show: false },
  },
  tooltip: {
    enabled: true,
    followCursor: true,
    x: { show: false },
    fixed: { enabled: true, position: "top", offsetX: 0, offsetY: -24 },
  },
  dataLabels: { enabled: false },
  stroke: { width: 4 },
  grid: { show: false },
  xaxis: {
    categories: ["01 April", "02 April", "03 April", "04 April", "05 April", "06 April", "07 April"],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
};

// small-revenue-chart — line (Revenue sparkline)
const smallRevenueChartSeries = [
  {
    name: "Revenue",
    data: [1500, 800, 947, 1102, 1640, 1847],
    color: SUCCESS,
  },
];
const smallRevenueChartOptions = {
  chart: {
    height: "100%",
    width: "140px",
    type: "line" as const,
    fontFamily: "Inter, sans-serif",
    dropShadow: { enabled: false },
    toolbar: { show: false },
  },
  tooltip: {
    enabled: true,
    followCursor: true,
    x: { show: false },
    fixed: { enabled: true, position: "top", offsetX: 0, offsetY: -24 },
  },
  dataLabels: { enabled: false },
  stroke: { width: 4 },
  grid: { show: false },
  xaxis: {
    categories: ["01 February", "02 February", "03 February", "04 February", "05 February", "06 February", "07 February"],
    labels: { show: false, trim: true },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
};

// products-small-chart — bar
const smallProductsChartSeries = [
  {
    name: "Quantity",
    color: PRIMARY,
    data: [
      { x: "01 Feb", y: 170 },
      { x: "02 Feb", y: 180 },
      { x: "03 Feb", y: 164 },
      { x: "04 Feb", y: 145 },
      { x: "05 Feb", y: 194 },
      { x: "06 Feb", y: 170 },
      { x: "07 Feb", y: 155 },
    ],
  },
];
const smallProductsChartOptions = {
  colors: [PRIMARY, SECONDARY],
  chart: {
    type: "bar" as const,
    height: "90px",
    fontFamily: "Inter, sans-serif",
    foreColor: "#4B5563",
    parentHeightOffset: 0,
    toolbar: { show: false },
  },
  plotOptions: {
    bar: { columnWidth: "90%", borderRadius: 3 },
  },
  tooltip: {
    shared: false,
    intersect: true,
    style: { fontSize: "12px", fontFamily: "Inter, sans-serif" },
  },
  states: { hover: { filter: { type: "darken" as const, value: 1 } } },
  stroke: { show: true, width: 5, colors: ["transparent"] },
  grid: {
    show: false,
    padding: { left: 0, right: 0, top: 0, bottom: 0 },
  },
  dataLabels: { enabled: false },
  legend: { show: false },
  xaxis: {
    floating: true,
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
  fill: { opacity: 1 },
};

// small-users-signups-chart — area sparkline
const smallUserSignupsSeries = [
  {
    name: "Users",
    data: [3460, 3418, 3456, 3414, 3446, 3434],
    color: PRIMARY,
  },
];
const smallUserSignupsOptions = {
  chart: {
    type: "area" as const,
    height: "90px",
    sparkline: { enabled: true },
  },
  tooltip: { followCursor: true },
  dataLabels: { enabled: false },
  stroke: { width: 4, curve: "smooth" as const },
  grid: { show: false },
  xaxis: {
    categories: ["01 February", "02 February", "03 February", "04 February", "05 February", "06 February", "07 February"],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
};

// total-revenue chart — area
const totalRevenueSeries = [
  { name: "Income",   data: [7564, 5643, 4300, 8033, 6444, 4300, 7752], color: PRIMARY },
  { name: "Expenses", data: [4443, 4413, 3765, 4412, 7423, 3731, 1856], color: SECONDARY },
];
const totalRevenueOptions = {
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: { left: 0, right: 0, top: 0, bottom: 0 },
  },
  chart: {
    height: "520px",
    width: "100%",
    type: "area" as const,
    fontFamily: "Inter, sans-serif",
    dropShadow: { enabled: false },
    toolbar: { show: false },
  },
  tooltip: { enabled: true, x: { show: false } },
  legend: { show: false },
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
    categories: ["01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb", "06 Feb", "07 Feb"],
    labels: { trim: true, show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      trim: true,
      align: "right" as const,
      minWidth: 60,
      maxWidth: 60,
      style: { fontFamily: "Inter, sans-serif" },
      offsetX: -20,
      rotate: 0,
      formatter: (val: number) => {
        if (val >= 1000) return "$" + (val / 1000) + "k";
        return "$" + val;
      },
    },
  },
};

// ── Static data ────────────────────────────────────────────────────────────

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    aria-hidden="true"
    className={`h-5 w-5 ${filled ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Stars = ({ count, total = 5 }: { count: number; total?: number }) => (
  <div className="flex items-center">
    {Array.from({ length: total }).map((_, i) => (
      <StarIcon key={i} filled={i < count} />
    ))}
    <span className="ml-1 text-gray-500 dark:text-gray-400">{count}.0</span>
  </div>
);

const CartIcon = () => (
  <svg className="me-2 h-5 w-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd" />
  </svg>
);

const products = [
  { name: 'Apple iMac 27"',  cat: "Desktop PC",      stockColor: "bg-red-700",    stock: 95,   salesDay: "1.47", salesMo: "0.47", stars: 5, sales: "1.6M",  revenue: "$3.2M",  updated: "Just now"     },
  { name: 'Apple iMac 20"',  cat: "Desktop PC",      stockColor: "bg-red-700",    stock: 108,  salesDay: "1.15", salesMo: "0.32", stars: 5, sales: "6M",    revenue: "$785K",  updated: "This week"    },
  { name: "Apple iPhone 15", cat: "Phone",            stockColor: "bg-green-400",  stock: 24,   salesDay: "1.00", salesMo: "0.95", stars: 4, sales: "1.2M",  revenue: "$3.2M",  updated: "Just now"     },
  { name: "Apple iPad Air",  cat: "Tablet",           stockColor: "bg-red-500",    stock: 287,  salesDay: "0.47", salesMo: "1.00", stars: 4, sales: "298K",  revenue: "$425K",  updated: "Just now"     },
  { name: "Xbox Series S",   cat: "Console",          stockColor: "bg-yellow-300", stock: 450,  salesDay: "1.61", salesMo: "0.30", stars: 5, sales: "99",    revenue: "$345K",  updated: "This week"    },
  { name: "PlayStation 5",   cat: "Console",          stockColor: "bg-green-400",  stock: 2435, salesDay: "1.41", salesMo: "0.11", stars: 4, sales: "2.1M",  revenue: "$4.2M",  updated: "This week"    },
  { name: "Xbox Series X",   cat: "Gaming/Console",   stockColor: "bg-orange-500", stock: 235,  salesDay: "7.09", salesMo: "3.32", stars: 5, sales: "989K",  revenue: "$2.27M", updated: "This week"    },
  { name: "Apple Watch SE",  cat: "Watch",            stockColor: "bg-yellow-300", stock: 433,  salesDay: "4.96", salesMo: "0.74", stars: 5, sales: "102",   revenue: "$45K",   updated: "2 weeks ago"  },
  { name: "NIKON D850",      cat: "Photo/Video",      stockColor: "bg-orange-400", stock: 351,  salesDay: "0.20", salesMo: "0.74", stars: 3, sales: "1.2M",  revenue: "$1.52M", updated: "3 weeks ago"  },
  { name: "BenQ EX2710Q",    cat: "TV/Monitor",       stockColor: "bg-yellow-300", stock: 250,  salesDay: "0.18", salesMo: "0.90", stars: 4, sales: "150K",  revenue: "$360K",  updated: "Last month"   },
];

// ── View full report arrow helper ─────────────────────────────────────────

const ViewArrow = () => (
  <svg className="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" />
  </svg>
);

const BtnViewFull = ({ label = "View full report" }: { label?: string }) => (
  <button type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
    {label} <ViewArrow />
  </button>
);

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminEcommercePage() {
  return (
    <PreviewShell variant="admin" title="E-commerce Dashboard">
      <div className="px-4 pt-4">

        {/* Row 1 ── Total revenue area chart (col-span-2) */}
        <div className="mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-xs dark:border-gray-700 dark:bg-gray-800">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {/* Header row */}
            <div className="flex flex-col space-y-4 pb-4 md:flex-row md:items-start md:justify-between md:space-y-0">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">$57.3k</h2>
                <p className="text-gray-500 dark:text-gray-400">Total revenue</p>
              </div>
              <div className="flex items-center">
                <ul className="flex flex-wrap text-center text-sm font-medium text-gray-900 dark:text-gray-400">
                  <li className="mr-2 lg:mr-4">
                    <button type="button" className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Today</button>
                  </li>
                  <li className="mr-2 lg:mr-4">
                    <button type="button" className="inline-block rounded-lg bg-primary-700 px-3 py-2 text-white dark:bg-primary-600">Weekly</button>
                  </li>
                  <li>
                    <button type="button" className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Monthly</button>
                  </li>
                </ul>
              </div>
            </div>
            {/* Tab sub-nav */}
            <div className="hidden flex-wrap space-x-5 py-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400 md:flex">
              <button type="button" className="group inline-flex items-center border-b border-transparent pb-3 pt-4 hover:border-gray-300 hover:text-gray-900 dark:hover:text-white">Expenses</button>
              <button type="button" className="group inline-flex items-center border-b border-primary-700 pb-3 pt-4 text-primary-700 dark:border-primary-500 dark:text-primary-500">Income</button>
              <button type="button" className="group inline-flex items-center border-b border-transparent pb-3 pt-4 hover:border-gray-300 hover:text-gray-900 dark:hover:text-white">Savings</button>
              <button type="button" className="group inline-flex items-center rounded-t-lg border-b border-transparent pb-3 pt-4 hover:border-gray-300 hover:text-gray-900 dark:hover:text-white">Deposits</button>
            </div>
          </div>
          <div className="mt-4 md:mt-6">
            <ReactApexChart options={totalRevenueOptions} series={totalRevenueSeries} type="area" height={320} />
          </div>
          <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
            <BtnViewFull />
          </div>
        </div>

        {/* Row 2 ── Three small stat cards */}
        <div className="mb-4 grid grid-cols-3 gap-4">
          {/* New Products */}
          <div className="col-span-3 rounded-lg border border-gray-200 bg-white p-4 shadow-xs dark:border-gray-700 dark:bg-gray-800 md:p-6 xl:col-span-1">
            <div className="flex items-center space-x-4">
              <div className="w-full">
                <ReactApexChart options={smallProductsChartOptions} series={smallProductsChartSeries} type="bar" height={90} />
              </div>
              <div className="w-full">
                <h5 className="text-gray-500 dark:text-gray-400">New products</h5>
                <p className="my-2 text-xl font-bold leading-none text-gray-900 dark:text-white">2,340</p>
                <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <svg className="me-1 h-4 w-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd" />
                  </svg>
                  <span className="shrink-0 text-sm">Apr 30 - May 30</span>
                </p>
              </div>
            </div>
          </div>
          {/* USD Balance */}
          <div className="col-span-3 rounded-lg border border-gray-200 bg-white p-4 shadow-xs dark:border-gray-700 dark:bg-gray-800 md:p-6 xl:col-span-1">
            <div className="flex items-start space-x-4">
              <div className="w-full">
                <button type="button" className="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  USD Balance
                  <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                  </svg>
                </button>
                <p className="my-2 text-xl font-bold leading-none text-gray-900 dark:text-white">$768.99</p>
                <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">Available to payout</p>
              </div>
              <button type="button" className="flex shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:w-auto">
                View more
              </button>
            </div>
          </div>
          {/* User Signups */}
          <div className="col-span-3 rounded-lg border border-gray-200 bg-white p-4 shadow-xs dark:border-gray-700 dark:bg-gray-800 md:p-6 xl:col-span-1">
            <div className="flex items-center space-x-4">
              <div className="w-full">
                <ReactApexChart options={smallUserSignupsOptions} series={smallUserSignupsSeries} type="area" height={90} />
              </div>
              <div className="w-full">
                <h5 className="text-gray-500 dark:text-gray-400">User signups</h5>
                <p className="my-2 text-xl font-bold leading-none text-gray-900 dark:text-white">15,284</p>
                <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <svg className="me-1 h-4 w-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd" />
                  </svg>
                  <span className="shrink-0 text-sm">Apr 30 - May 30</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 ── Company Stats + Users by Day (side by side) */}
        <div className="mb-4 grid grid-cols-2 gap-4">

          {/* Company Stats */}
          <div className="col-span-2 rounded-lg border border-gray-200 bg-white p-4 shadow-xs dark:border-gray-700 dark:bg-gray-800 md:col-span-1 md:p-6">
            <h5 className="mb-4 pe-1 text-xl font-bold leading-none text-gray-900 dark:text-white">Company stats</h5>
            <div className="mb-2 grid grid-cols-3 gap-3">
              <dl className="flex flex-col items-center justify-center rounded-lg bg-gray-50 py-6 text-sm font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <dt className="mb-1.5 text-base leading-none text-gray-900 dark:text-white">26.7k</dt>
                <dd>Users</dd>
              </dl>
              <dl className="flex flex-col items-center justify-center rounded-lg bg-gray-50 py-6 text-sm font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <dt className="mb-1.5 text-base leading-none text-gray-900 dark:text-white">956</dt>
                <dd>Customers</dd>
              </dl>
              <dl className="flex flex-col items-center justify-center rounded-lg bg-gray-50 py-6 text-sm font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <dt className="mb-1.5 text-base leading-none text-gray-900 dark:text-white">$8,267</dt>
                <dd>Revenue</dd>
              </dl>
            </div>
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 md:my-2">
              {/* Users row */}
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <ReactApexChart options={smallUsersChartOptions} series={smallUsersChartSeries} type="line" height={80} width={140} />
                  </div>
                  <div>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">Users</p>
                    <p className="my-0.5 text-xl font-bold text-gray-900 dark:text-white">26.7k</p>
                    <p className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                      <span className="me-1.5 flex items-center text-green-500">
                        <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                        </svg>
                        8.8%
                      </span>
                      vs last week
                    </p>
                  </div>
                </div>
              </li>
              {/* Customers row */}
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <ReactApexChart options={smallCustomersChartOptions} series={smallCustomersChartSeries} type="line" height={80} width={140} />
                  </div>
                  <div>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">Customers</p>
                    <p className="my-0.5 text-xl font-bold text-gray-900 dark:text-white">956</p>
                    <p className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                      <span className="me-1.5 flex items-center text-red-600 dark:text-red-500">
                        <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14-4-4m4 4 4-4" />
                        </svg>
                        10.6%
                      </span>
                      vs last week
                    </p>
                  </div>
                </div>
              </li>
              {/* Revenue row */}
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <ReactApexChart options={smallRevenueChartOptions} series={smallRevenueChartSeries} type="line" height={80} width={140} />
                  </div>
                  <div>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">Revenue</p>
                    <p className="my-0.5 text-xl font-bold text-gray-900 dark:text-white">$8,267</p>
                    <p className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                      <span className="me-1.5 flex items-center text-green-500">
                        <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                        </svg>
                        4%
                      </span>
                      vs last week
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-6">
              <BtnViewFull />
            </div>
          </div>

          {/* Sessions by OS — donut */}
          <div className="col-span-2 rounded-lg border border-gray-200 bg-white p-4 shadow-xs dark:border-gray-700 dark:bg-gray-800 md:col-span-1 md:p-6">
            <h2 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">Windows</h2>
            <p className="text-gray-500 dark:text-gray-400">Sessions by OS</p>
            <div className="mx-auto my-4 md:my-6">
              <ReactApexChart options={sessionsChartOptions} series={sessionsChartSeries} type="donut" height={220} />
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-6">
              <button className="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Last 7 days
                <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                </svg>
              </button>
              <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                Full report
                <svg className="-me-0.5 ms-1 h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Row 4 ── Products table */}
        <div className="relative mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-xs dark:border-gray-700 dark:bg-gray-800 md:p-6">
          {/* Table toolbar */}
          <div className="mb-4 flex flex-col space-y-3 md:mb-6 lg:flex-row lg:items-center lg:justify-between lg:space-x-4 lg:space-y-0">
            <div className="flex flex-1 items-center space-x-4">
              <h5>
                <span className="text-gray-500">All Products: </span>
                <span className="font-medium text-gray-900 dark:text-white">123456</span>
              </h5>
              <h5>
                <span className="text-gray-500">Total sales: </span>
                <span className="font-medium text-gray-900 dark:text-white">$88.4k</span>
              </h5>
            </div>
            <div className="flex shrink-0 flex-col space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
              <button type="button" className="flex items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
                </svg>
                Add new product
              </button>
              <button type="button" className="flex shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 10V4a1 1 0 0 0-1-1H9.914a1 1 0 0 0-.707.293L5.293 7.207A1 1 0 0 0 5 7.914V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2M10 3v4a1 1 0 0 1-1 1H5m5 6h9m0 0-2-2m2 2-2 2" />
                </svg>
                Export
              </button>
              <button type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:w-auto">
                Actions
                <HiChevronDown className="-me-0.5 ms-1.5 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto relative">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700" />
                  </th>
                  {["Product", "Category", "Stock", "Sales/Day", "Sales/Month", "Rating", "Sales", "Revenue", "Last Update"].map((h) => (
                    <th key={h} scope="col" className="whitespace-nowrap min-w-28 px-4 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((p, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                    <td className="w-4 px-4 py-3">
                      <input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700" />
                    </td>
                    <th scope="row" className="flex items-center whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                      <div className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded bg-gray-100 dark:bg-gray-700 text-gray-400 text-xs font-bold">
                        {i + 1}
                      </div>
                      <span className="hover:underline cursor-pointer">{p.name}</span>
                    </th>
                    <td className="px-4 py-2">
                      <span className="rounded-sm bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">{p.cat}</span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <div className={`me-1.5 inline-block h-3 w-3 rounded-full ${p.stockColor}`}></div>
                        {p.stock}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">{p.salesDay}</td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">{p.salesMo}</td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                      <Stars count={p.stars} />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <CartIcon />
                        {p.sales}
                      </div>
                    </td>
                    <td className="px-4 py-2">{p.revenue}</td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">{p.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col items-start justify-between space-y-3 border-t border-gray-200 pt-4 dark:border-gray-700 md:flex-row md:items-center md:space-y-0 md:pt-6">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">1-{products.length}</span>
              {" "}of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">1000</span>
            </span>
            <nav className="flex items-stretch -space-x-px">
              <button className="flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              {[1, 2, 3, "...", 100].map((n, i) => (
                <button key={i} className={`flex items-center justify-center border border-gray-300 px-3 py-1.5 text-sm dark:border-gray-700 ${n === 1 ? "bg-primary-50 text-primary-600 hover:bg-primary-100 dark:bg-gray-700 dark:text-white" : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}`}>
                  {n}
                </button>
              ))}
              <button className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </nav>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
