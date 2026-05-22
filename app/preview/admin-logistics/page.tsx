"use client";

import { PreviewShell } from "../PreviewShell";
import dynamic from "next/dynamic";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";
import { SvgMap } from "../SvgMap";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// ── Color constants ──────────────────────────────────────────────────────────
const PRIMARY   = "#1A56DB";
const SUCCESS   = "#0E9F6E";
const DANGER    = "#F05252";
const SECONDARY = "#FF9963";

// ── Small KPI sparkline charts (from charts.js) ──────────────────────────────

const revenueSmallSeries = [
  { name: "Revenue", data: [23500, 22418, 24178, 21200, 20157, 23200, 22246], color: SUCCESS },
];
const revenueSmallOptions = {
  chart: { height: 100, maxWidth: "100%", type: "line" as const, fontFamily: "Inter, sans-serif", dropShadow: { enabled: false }, toolbar: { show: false } },
  tooltip: { enabled: true, followCursor: true, x: { show: false }, y: { formatter: (v: number) => "$ " + v }, fixed: { enabled: true, position: "top" as const, offsetX: 0, offsetY: -24 } },
  dataLabels: { enabled: false },
  stroke: { width: 4, curve: "smooth" as const },
  grid: { show: false, strokeDashArray: 4, padding: { left: 2, right: 2, top: 0 } },
  xaxis: { categories: ["01 Feb","02 Feb","03 Feb","04 Feb","05 Feb","06 Feb","07 Feb"], labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { show: false },
};

const completedOrdersSeries = [
  { name: "Orders", data: [3500, 3418, 3378, 3400, 3457, 3400, 3546], color: SUCCESS },
];
const completedOrdersOptions = {
  chart: { height: 100, maxWidth: "100%", type: "line" as const, fontFamily: "Inter, sans-serif", dropShadow: { enabled: false }, toolbar: { show: false } },
  tooltip: { enabled: true, followCursor: true, x: { show: false }, fixed: { enabled: true, position: "top" as const, offsetX: 0, offsetY: -24 } },
  dataLabels: { enabled: false },
  stroke: { width: 4, curve: "smooth" as const },
  grid: { show: false, strokeDashArray: 4, padding: { left: 2, right: 2, top: 0 } },
  xaxis: { categories: ["01 Feb","02 Feb","03 Feb","04 Feb","05 Feb","06 Feb","07 Feb"], labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { show: false },
};

const materialStockSeries = [
  { name: "Stock", data: [5000, 4997, 5378, 5400, 5057, 4400, 4346], color: DANGER },
];
const materialStockOptions = {
  chart: { height: 100, maxWidth: "100%", type: "line" as const, fontFamily: "Inter, sans-serif", dropShadow: { enabled: false }, toolbar: { show: false } },
  tooltip: { enabled: true, followCursor: true, x: { show: false }, fixed: { enabled: true, position: "top" as const, offsetX: 0, offsetY: -24 } },
  dataLabels: { enabled: false },
  stroke: { width: 4, curve: "smooth" as const },
  grid: { show: false, strokeDashArray: 4, padding: { left: 2, right: 2, top: 0 } },
  xaxis: { categories: ["01 Feb","02 Feb","03 Feb","04 Feb","05 Feb","06 Feb","07 Feb"], labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { show: false },
};

const successfulDeliveriesSeries = [
  { name: "Success rate", data: [98, 96, 97, 95, 95, 98, 98], color: SUCCESS },
];
const successfulDeliveriesOptions = {
  chart: { height: 100, maxWidth: "100%", type: "line" as const, fontFamily: "Inter, sans-serif", dropShadow: { enabled: false }, toolbar: { show: false } },
  tooltip: { enabled: true, followCursor: true, x: { show: false }, y: { formatter: (v: number) => v + " %" }, fixed: { enabled: true, position: "top" as const, offsetX: 0, offsetY: -24 } },
  dataLabels: { enabled: false },
  stroke: { width: 4, curve: "smooth" as const },
  grid: { show: false, strokeDashArray: 4, padding: { left: 2, right: 2, top: 0 } },
  xaxis: { categories: ["01 Feb","02 Feb","03 Feb","04 Feb","05 Feb","06 Feb","07 Feb"], labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { show: false },
};

// ── Inventory bar chart (from charts.js) ─────────────────────────────────────

const inventorySeries = [
  {
    name: "Units",
    color: PRIMARY,
    data: [
      { x: "Mon", y: 5631 }, { x: "Tue", y: 4600 }, { x: "Wed", y: 5540 },
      { x: "Thu", y: 5080 }, { x: "Fri", y: 4490 }, { x: "Sat", y: 4580 }, { x: "Sun", y: 5620 },
    ],
  },
];
const inventoryOptions = {
  colors: [PRIMARY],
  chart: { type: "bar" as const, height: 520, fontFamily: "Inter, sans-serif", toolbar: { show: false }, animations: { enabled: false } },
  plotOptions: { bar: { horizontal: false, columnWidth: "70%", borderRadiusApplication: "end" as const, borderRadius: 8 } },
  tooltip: { shared: true, intersect: false, style: { fontFamily: "Inter, sans-serif" } },
  states: { hover: { filter: { type: "darken" as const, value: 1 } } },
  stroke: { show: false, width: 0, colors: ["transparent"] },
  grid: { show: false, strokeDashArray: 4, padding: { left: 0, right: 0, top: 0, bottom: 0 } },
  dataLabels: { enabled: false },
  legend: { show: false },
  xaxis: {
    floating: false,
    labels: { show: true, trim: true, style: { fontFamily: "Inter, sans-serif", cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400" } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
  fill: { opacity: 1 },
};

// ── Trucks bar chart (from charts.js) ────────────────────────────────────────

const trucksSeries = [
  {
    name: "Units",
    color: PRIMARY,
    data: [
      { x: "Mon", y: 5631 }, { x: "Tue", y: 4600 }, { x: "Wed", y: 5540 },
      { x: "Thu", y: 5080 }, { x: "Fri", y: 4490 }, { x: "Sat", y: 4580 }, { x: "Sun", y: 5620 },
    ],
  },
];
const trucksOptions = {
  colors: [PRIMARY],
  chart: { type: "bar" as const, height: 420, fontFamily: "Inter, sans-serif", toolbar: { show: false }, animations: { enabled: false } },
  plotOptions: { bar: { horizontal: false, columnWidth: "70%", borderRadiusApplication: "end" as const, borderRadius: 8 } },
  tooltip: { shared: true, intersect: false, style: { fontFamily: "Inter, sans-serif" } },
  states: { hover: { filter: { type: "darken" as const, value: 1 } } },
  stroke: { show: true, width: 0, colors: ["transparent"] },
  grid: { show: false, strokeDashArray: 4, padding: { left: 2, right: 2, top: -14 } },
  dataLabels: { enabled: false },
  legend: { show: false },
  xaxis: {
    floating: false,
    labels: { show: true, style: { fontFamily: "Inter, sans-serif", cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400" } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
  fill: { opacity: 1 },
};

// ── Total deliveries bar chart (from charts.js) ───────────────────────────────

const totalDeliveriesSeries = [
  {
    name: "Organic",
    color: PRIMARY,
    data: [
      { x: "Mon", y: 231 }, { x: "Tue", y: 122 }, { x: "Wed", y: 63 },
      { x: "Thu", y: 421 }, { x: "Fri", y: 122 }, { x: "Sat", y: 323 }, { x: "Sun", y: 111 },
    ],
  },
  {
    name: "Social media",
    color: SECONDARY,
    data: [
      { x: "Mon", y: 232 }, { x: "Tue", y: 113 }, { x: "Wed", y: 341 },
      { x: "Thu", y: 224 }, { x: "Fri", y: 522 }, { x: "Sat", y: 411 }, { x: "Sun", y: 243 },
    ],
  },
];
const totalDeliveriesOptions = {
  colors: [PRIMARY, SECONDARY],
  chart: { type: "bar" as const, height: 420, fontFamily: "Inter, sans-serif", toolbar: { show: false } },
  plotOptions: { bar: { horizontal: false, columnWidth: "70%", borderRadiusApplication: "end" as const, borderRadius: 8 } },
  tooltip: { shared: true, intersect: false, style: { fontFamily: "Inter, sans-serif" } },
  states: { hover: { filter: { type: "darken" as const, value: 1 } } },
  stroke: { show: true, width: 0, colors: ["transparent"] },
  grid: { show: false, strokeDashArray: 4, padding: { left: 2, right: 2, top: -14 } },
  dataLabels: { enabled: false },
  legend: { show: false },
  xaxis: {
    floating: false,
    labels: { show: true, style: { fontFamily: "Inter, sans-serif", cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400" } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
  fill: { opacity: 1 },
};

// ── Delivered shipments area chart (from charts.js) ───────────────────────────

const deliveredShipmentsSeries = [
  { name: "Shipments", data: [78234, 76555, 74853, 79033, 76756, 77373, 76221], color: PRIMARY },
];
const deliveredShipmentsOptions = {
  chart: { height: 346, maxWidth: "100%", type: "area" as const, fontFamily: "Inter, sans-serif", dropShadow: { enabled: false }, toolbar: { show: false } },
  tooltip: { enabled: true, x: { show: false } },
  fill: { type: "gradient", gradient: { opacityFrom: 0.55, opacityTo: 0, shade: PRIMARY, gradientToColors: [PRIMARY] } },
  dataLabels: { enabled: false },
  stroke: { width: 6 },
  grid: { show: false, strokeDashArray: 4, padding: { left: 2, right: 2, top: 0 } },
  xaxis: { categories: ["01 Feb","02 Feb","03 Feb","04 Feb","05 Feb","06 Feb","07 Feb"], labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { show: false },
};

// ── Static data ───────────────────────────────────────────────────────────────

const kpiCards = [
  { label: "Revenue",         value: "$163,256", delta: "19%", up: true,  chartSeries: revenueSmallSeries,          chartOptions: revenueSmallOptions },
  { label: "Completed orders",value: "23,256",   delta: "2%",  up: true,  chartSeries: completedOrdersSeries,       chartOptions: completedOrdersOptions },
  { label: "Material stock",  value: "39,198",   delta: "4%",  up: false, chartSeries: materialStockSeries,         chartOptions: materialStockOptions },
  { label: "On time delivery",value: "95%",      delta: "0.9%",up: true,  chartSeries: successfulDeliveriesSeries,  chartOptions: successfulDeliveriesOptions },
];

const ordersTable = [
  { country: "United States", orders: "8,756",  ordersUp: true,  customers: "7,957", customersUp: true,  rate: "97", rateUp: true  },
  { country: "Canada",        orders: "7,236",  ordersUp: true,  customers: "6,968", customersUp: false, rate: "90", rateUp: false },
  { country: "France",        orders: "3,756",  ordersUp: false, customers: "2,394", customersUp: false, rate: "92", rateUp: false },
  { country: "United Kingdom",orders: "2,556",  ordersUp: true,  customers: "1,385", customersUp: true,  rate: "93", rateUp: true  },
  { country: "Spain",         orders: "2,257",  ordersUp: false, customers: "939",   customersUp: true,  rate: "98", rateUp: true  },
];

const shipments = [
  { id: "#1846325", customer: "Flowbite LLC",     email: "flowbite@example.com",  total: "$466",  date: "09 Mar 2025", status: "Completed", type: "Instant (digital)" },
  { id: "#1846326", customer: "Jese Leos",         email: "name@example.com",      total: "$2000", date: "07 Mar 2025", status: "Failed",    type: "Shipment (Packaging)" },
  { id: "#1846327", customer: "Bonnie Green",      email: "name@company.com",      total: "$245",  date: "12 Mar 2025", status: "Completed", type: "Scheduled (Digital)" },
  { id: "#1846328", customer: "Themesberg LLC",    email: "company@example.com",   total: "$90",   date: "18 Apr 2025", status: "Refunded",  type: "Instant (Digital)" },
  { id: "#1846329", customer: "Micheal Gough",     email: "name@example.com",      total: "$3040", date: "21 Apr 2025", status: "Pending",   type: "Shipment (Packaging)" },
  { id: "#1846330", customer: "Lana Byrd",         email: "name@example.com",      total: "$2999", date: "24 Apr 2025", status: "Completed", type: "Instant (Digital)" },
  { id: "#1846331", customer: "Netflix LLC",       email: "company@example.com",   total: "$1870", date: "05 May 2025", status: "Completed", type: "Instant (Digital)" },
  { id: "#1846332", customer: "Leslie Livingston", email: "name@example.com",      total: "$5067", date: "08 May 2025", status: "Refunded",  type: "Shipment (Packaging)" },
  { id: "#1846333", customer: "Bergside LLC",      email: "company@example.com",   total: "$60",   date: "02 May 2025", status: "Pending",   type: "Instant (Digital)" },
  { id: "#1846334", customer: "Robert Brown",      email: "name@example.com",      total: "$499",  date: "20 Jun 2025", status: "Completed", type: "Instant (Digital)" },
];

const statusBadge: Record<string, string> = {
  Completed: "rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",
  Failed:    "rounded-sm bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",
  Pending:   "rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Refunded:  "rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300",
};

// ── SVG helpers ───────────────────────────────────────────────────────────────
const ArrowUp = () => (
  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
  </svg>
);
const ArrowDown = () => (
  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14-4-4m4 4 4-4" />
  </svg>
);
const SortIcon = () => (
  <svg className="ml-1 inline-block h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
  </svg>
);
const DotsHorizontal = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth={4} d="M6 12h0m6 0h0m6 0h0" />
  </svg>
);
const CalendarIcon = () => (
  <svg className="-ms-0.5 me-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
  </svg>
);
const ChevronDown = () => (
  <svg className="-me-0.5 ms-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
  </svg>
);
const ChevronRight = () => (
  <svg className="-me-0.5 ms-1 h-4 w-4" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
  </svg>
);
const TruckIcon = () => (
  <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M4 4a2 2 0 0 0-2 2v9c0 .6.4 1 1 1h.5v.5a3.5 3.5 0 1 0 7-.5h3v.5a3.5 3.5 0 1 0 7-.5h.5c.6 0 1-.4 1-1v-4l-.1-.4-2-4A1 1 0 0 0 19 6h-5a2 2 0 0 0-2-2H4Zm14.2 11.6.3.9a1.5 1.5 0 1 1-.3-1Zm-10 0 .3.9a1.5 1.5 0 1 1-.3-1ZM14 10V8h4.4l1 2H14Z" clipRule="evenodd" />
  </svg>
);

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AdminLogisticsPage() {
  return (
    <PreviewShell variant="admin" title="Logistics Dashboard">
      <div className="px-4">

        {/* 1 ── 4 KPI cards with sparklines */}
        <div className="my-4 grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
          {kpiCards.map((k) => (
            <div key={k.label} className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <div className="shrink-0">
                <h3 className="mb-1 text-gray-500 dark:text-gray-400">{k.label}</h3>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{k.value}</span>
                <p className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className={`mr-1.5 flex items-center text-sm font-medium sm:text-base ${k.up ? "text-green-500 dark:text-green-400" : "text-red-600 dark:text-red-500"}`}>
                    {k.up ? <ArrowUp /> : <ArrowDown />}
                    {k.delta}
                  </span>
                  vs last month
                </p>
              </div>
              <ReactApexChart
                options={k.chartOptions}
                series={k.chartSeries}
                type="line"
                height={100}
                width={120}
              />
            </div>
          ))}
        </div>

        {/* 2 ── Orders by countries (map + table) */}
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div className="justify-between sm:mb-4 sm:flex">
            <div className="mb-4 sm:mb-0">
              <h2 className="mb-2 pe-1 text-xl font-bold leading-none text-gray-900 dark:text-white">Orders by countries</h2>
              <p className="text-gray-500 dark:text-gray-400">Total orders by countries around the world</p>
            </div>
            <div>
              <button className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:w-auto">
                <CalendarIcon />
                Dec 31 - Jan 31
                <ChevronDown />
              </button>
            </div>
          </div>
          <div className="items-center lg:flex lg:space-x-6">
            {/* World map */}
            <div className="my-4 w-full lg:my-0">
              <SvgMap />
            </div>
            {/* Table */}
            <div className="relative mb-4 w-full overflow-x-auto md:mb-6">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="w-48 rounded-s-lg px-6 py-3 font-semibold">Country</th>
                    <th scope="col" className="px-6 py-3 font-semibold">Orders</th>
                    <th scope="col" className="px-6 py-3 font-semibold">Customers</th>
                    <th scope="col" className="w-36 rounded-e-lg px-6 py-3 font-semibold">Delivery rate</th>
                  </tr>
                </thead>
                <tbody>
                  {ordersTable.map((row) => (
                    <tr key={row.country} className="border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{row.country}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {row.ordersUp ? <ArrowUp /> : <ArrowDown />}
                          {row.orders}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {row.customersUp ? <ArrowUp /> : <ArrowDown />}
                          {row.customers}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {row.rateUp ? <ArrowUp /> : <ArrowDown />}
                          {row.rate}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end">
            <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
              View full report
              <ChevronRight />
            </a>
          </div>
        </div>

        {/* 3 ── Inventory level chart */}
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div className="justify-between sm:mb-4 sm:flex">
            <div className="mb-4 sm:mb-0">
              <h2 className="mb-2 pe-1 text-xl font-bold leading-none text-gray-900 dark:text-white">
                Inventory level <span className="ms-2 font-semibold text-green-500">+1,452 (9,85%)</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400">Material stock</p>
            </div>
            <div>
              <button className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:w-auto">
                <CalendarIcon />
                Dec 31 - Jan 31
                <ChevronDown />
              </button>
            </div>
          </div>
          <ReactApexChart options={inventoryOptions} series={inventorySeries} type="bar" height={420} />
        </div>

        {/* 4 ── Three-column panel: trucks / deliveries / shipments */}
        <div className="my-4 grid grid-cols-1 gap-4 2xl:grid-cols-3">

          {/* Total trucks on the road */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="mb-4 flex justify-between">
              <div>
                <h2 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Total trucks on the road</h2>
                <button type="button" className="inline-flex items-center font-medium leading-none text-primary-700 hover:underline dark:text-primary-500">
                  United States
                  <HiChevronDown className="ms-1 h-4 w-4" />
                </button>
              </div>
            </div>
            <ReactApexChart options={trucksOptions} series={trucksSeries} type="bar" height={320} />
            <div className="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between pt-5">
                <button className="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Last 7 days
                  <HiChevronDown className="ms-1 h-4 w-4" />
                </button>
                <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                  Trucks report
                  <ChevronRight />
                </a>
              </div>
            </div>
          </div>

          {/* Total deliveries */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">576,235</h2>
                <p className="text-gray-500 dark:text-gray-400">Total deliveries</p>
              </div>
              <button type="button" className="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500">
                Apr 17 - May 17, 2025
                <HiChevronDown className="ms-1 h-4 w-4" />
              </button>
            </div>
            <ReactApexChart options={totalDeliveriesOptions} series={totalDeliveriesSeries} type="bar" height={320} />
            <div className="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between pt-5">
                <button className="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Last 7 days
                  <HiChevronDown className="ms-1 h-4 w-4" />
                </button>
                <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                  Full report
                  <ChevronRight />
                </a>
              </div>
            </div>
          </div>

          {/* Delivered shipments */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="mb-4 flex justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
              <div className="flex items-center">
                <div className="me-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                  <TruckIcon />
                </div>
                <div>
                  <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">546,354</h5>
                  <p className="text-gray-500 dark:text-gray-400">Delivered shipments</p>
                </div>
              </div>
              <div>
                <span className="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                  <svg className="me-1.5 h-2.5 w-2.5" fill="none" viewBox="0 0 10 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13V1m0 0L1 5m4-4 4 4" />
                  </svg>
                  24%
                </span>
              </div>
            </div>
            <div className="mb-4 grid grid-cols-2 md:mb-6">
              <dl className="flex items-center">
                <dt className="me-1 shrink-0 text-sm text-gray-500 dark:text-gray-400">Delivered shipments:</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">3,423</dd>
              </dl>
              <dl className="flex items-center justify-end">
                <dt className="me-1 text-sm text-gray-500 dark:text-gray-400">Countries:</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">22</dd>
              </dl>
            </div>
            <div className="mb-4">
              <ReactApexChart options={deliveredShipmentsOptions} series={deliveredShipmentsSeries} type="area" height={260} />
            </div>
            <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-6">
              <button className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                View full report
              </button>
            </div>
          </div>

        </div>

        {/* 5 ── Latest shipments table */}
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6">
          {/* Table header */}
          <div className="border-b dark:border-gray-700 border-gray-200">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Latest shipments</h2>
            <div className="flex flex-col-reverse items-center justify-between pb-4 md:flex-row md:space-x-4 md:pb-6">
              <div className="flex w-full flex-col space-y-4 md:flex-row md:items-center md:space-y-0 lg:w-2/3">
                {/* Search */}
                <form className="w-full flex-1 md:mr-4 md:max-w-sm">
                  <label htmlFor="shipment-search" className="sr-only">Search</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="shipment-search"
                      className="block w-full min-w-64 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                      placeholder="Search for shipment"
                    />
                    <button type="submit" className="absolute bottom-0 right-0 top-0 rounded-r-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800">
                      Search
                    </button>
                  </div>
                </form>
                <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                  {/* Filter dropdown trigger */}
                  <button className="inline-flex w-full shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:w-auto">
                    Last 7 days
                    <HiChevronDown className="-me-0.5 ms-1.5 h-4 w-4" />
                  </button>
                  {/* Export CSV */}
                  <button className="inline-flex w-full shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:w-auto">
                    <svg className="-ms-0.5 me-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2 0 1.1.9 2 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm1 8.8A2.3 2.3 0 0 0 9.6 13a2.3 2.3 0 0 0 2.1 2.5h.7a.3.3 0 0 1 .2.4l-.4.1h-1a1 1 0 1 0 0 2h1c.5 0 1 0 1.4-.3a2 2 0 0 0 1-1.1 2.3 2.3 0 0 0-2.2-3l-.5-.1a.3.3 0 0 1-.3-.4.3.3 0 0 1 .4-.3h1a1 1 0 1 0 0-2h-1Zm8 1.5a1 1 0 1 0-2-.6l-.5 1.7-.5-1.7a1 1 0 0 0-2 .6l1.5 4.8a1 1 0 0 0 1.9 0l1.6-4.8Zm-13.8.9.4-.2h1a1 1 0 1 0 0-2h-1A2.6 2.6 0 0 0 4 13.6v1.8A2.6 2.6 0 0 0 6.6 18h1a1 1 0 1 0 0-2h-1a.6.6 0 0 1-.6-.6v-1.8c0-.1 0-.3.2-.4Z" clipRule="evenodd" />
                    </svg>
                    Export CSV
                  </button>
                </div>
              </div>
              {/* Add shipment button */}
              <div className="mb-4 flex w-full shrink-0 flex-col items-stretch justify-end md:mb-0 md:w-auto md:flex-row md:items-center md:space-x-3">
                <button className="flex items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800">
                  <svg className="-ms-0.5 me-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
                  </svg>
                  Add shipment
                </button>
              </div>
            </div>
          </div>

          {/* Show only filter radios */}
          <div className="flex flex-wrap py-4 md:py-6">
            <div className="mr-4 hidden items-center text-sm font-medium text-gray-900 dark:text-white md:flex">Show only:</div>
            <div className="flex flex-wrap gap-4">
              {["All", "Delivered", "In transit"].map((label) => (
                <div key={label} className="flex items-center">
                  <input
                    id={`radio-${label}`}
                    type="radio"
                    name="shipment-filter"
                    defaultChecked={label === "All"}
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label htmlFor={`radio-${label}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto relative">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600" />
                  </th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Shipment ID</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Customer <SortIcon /></th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Email</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Total <SortIcon /></th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Due Date <SortIcon /></th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Status <SortIcon /></th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Delivery Type <SortIcon /></th>
                  <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {shipments.map((s, i) => (
                  <tr key={s.id} className={`border-b hover:bg-gray-100 dark:hover:bg-gray-700 ${i < shipments.length - 1 ? "border-gray-200 dark:border-gray-700" : ""}`}>
                    <td className="w-4 px-4 py-3">
                      <input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600" />
                    </td>
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                      <a href="#" className="hover:underline">{s.id}</a>
                    </th>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{s.customer}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium">{s.email}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{s.total}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{s.date}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className={statusBadge[s.status]}>{s.status}</span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{s.type}</td>
                    <td className="px-4 py-3">
                      <button className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <DotsHorizontal />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="relative overflow-hidden rounded-b-lg border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-6">
            <nav className="flex flex-col items-start justify-between space-y-3 md:flex-row md:items-center md:space-y-0">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">1000</span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a href="#" className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Previous</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" /></svg>
                  </a>
                </li>
                {["1","2","3","...","100"].map((p, i) => (
                  <li key={i}>
                    <a href="#" aria-current={p === "3" ? "page" : undefined} className={`flex items-center justify-center border px-3 py-2 text-sm leading-tight ${p === "3" ? "z-10 border-primary-300 bg-primary-50 text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}`}>
                      {p}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Next</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" /></svg>
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
