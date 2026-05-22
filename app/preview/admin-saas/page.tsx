"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Button, Checkbox } from "flowbite-react";
import dynamic from "next/dynamic";
import { HiArrowUp, HiArrowDown, HiArrowRight, HiDotsVertical, HiChevronDown } from "react-icons/hi";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const highlightedCountries = new Set(["840","124","250","380","036","724","392","056","826","356"]);

// ── ApexCharts configs (direct from charts.js source) ─────────────────────

const PRIMARY   = "#1A56DB";
const SECONDARY = "#FF9963";
const TERTIARY  = "#16BDCA";

const totalSalesSeries = [
  {
    name: "Templates",
    color: PRIMARY,
    data: [
      { x: "Mon", y: 631 }, { x: "Tue", y: 600 }, { x: "Wed", y: 540 },
      { x: "Thu", y: 580 }, { x: "Fri", y: 490 }, { x: "Sat", y: 580 }, { x: "Sun", y: 620 },
    ],
  },
  {
    name: "Icons",
    color: SECONDARY,
    data: [
      { x: "Mon", y: 460 }, { x: "Tue", y: 490 }, { x: "Wed", y: 390 },
      { x: "Thu", y: 620 }, { x: "Fri", y: 410 }, { x: "Sat", y: 640 }, { x: "Sun", y: 360 },
    ],
  },
  {
    name: "Illustrations",
    color: TERTIARY,
    data: [
      { x: "Mon", y: 232 }, { x: "Tue", y: 630 }, { x: "Wed", y: 341 },
      { x: "Thu", y: 224 }, { x: "Fri", y: 522 }, { x: "Sat", y: 411 }, { x: "Sun", y: 243 },
    ],
  },
];

const totalSalesOptions = {
  colors: [PRIMARY, SECONDARY, TERTIARY],
  chart: { type: "bar" as const, height: 520, fontFamily: "Inter, sans-serif", toolbar: { show: false } },
  plotOptions: { bar: { horizontal: false, columnWidth: "70%", borderRadiusApplication: "end" as const, borderRadius: 8 } },
  tooltip: { shared: true, intersect: false, style: { fontFamily: "Inter, sans-serif" } },
  states: { hover: { filter: { type: "darken" as const, value: 1 } } },
  stroke: { show: true, width: 0, colors: ["transparent"] },
  grid: { show: false, strokeDashArray: 4, padding: { left: 2, right: 2, top: -14 } },
  dataLabels: { enabled: false },
  legend: { position: "bottom" as const, fontFamily: "Inter, sans-serif", offsetY: 20, height: 40 },
  xaxis: {
    floating: false,
    labels: { show: true, style: { fontFamily: "Inter, sans-serif", cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400" } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
  fill: { opacity: 1 },
};

const visitsSeries = [
  { name: "Desktop", data: [45] },
  { name: "Phone",   data: [35] },
  { name: "Tablet",  data: [20] },
];

const visitsOptions = {
  colors: [PRIMARY, SECONDARY, TERTIARY],
  chart: { type: "bar" as const, height: 130, stacked: true, stackType: "100%" as const, toolbar: { show: false } },
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
  fill: { opacity: 1 },
  legend: { position: "bottom" as const, fontFamily: "Inter, sans-serif", offsetY: 8 },
};

// ── Static data ────────────────────────────────────────────────────────────

const kpis = [
  { label: "Total Income",   value: "$163.4k", delta: "7%",   up: true  },
  { label: "Total Outcome",  value: "$82.1k",  delta: "8.8%", up: true  },
  { label: "Total Profit",   value: "$54.3k",  delta: "2.5%", up: false },
  { label: "New Customers",  value: "68",      delta: "5.6%", up: true  },
];

const countries = [
  { name: "United States", visits: "2.1M", pct: 55, flag: "🇺🇸" },
  { name: "Canada",        visits: "1.5M", pct: 46, flag: "🇨🇦" },
  { name: "France",        visits: "1.2M", pct: 38, flag: "🇫🇷" },
  { name: "Italy",         visits: "1.0M", pct: 27, flag: "🇮🇹" },
  { name: "Australia",     visits: "820k", pct: 24, flag: "🇦🇺" },
  { name: "Spain",         visits: "730k", pct: 20, flag: "🇪🇸" },
  { name: "Japan",         visits: "540k", pct: 16, flag: "🇯🇵" },
  { name: "Belgium",       visits: "322k", pct: 9,  flag: "🇧🇪" },
  { name: "UK",            visits: "208k", pct: 7,  flag: "🇬🇧" },
  { name: "India",         visits: "70.1k",pct: 7,  flag: "🇮🇳" },
];

const topProducts = [
  { name: "Scripps Health Portal",     cat: "Digital / Platform",     revenue: "$36,820" },
  { name: "PIMC Membership Platform",  cat: "Digital / Membership",   revenue: "$33,498" },
  { name: "Clinical Analytics Suite",  cat: "Digital / Analytics",    revenue: "$30,745" },
  { name: "Patient Engagement App",    cat: "Digital / Mobile",       revenue: "$29,423" },
  { name: "Epic Integration Module",   cat: "Digital / Integration",  revenue: "$28,637" },
];

const transactions = [
  { id: "#1846325", customer: "Scripps Clinic",    email: "billing@scripps.org",    total: "$466",  date: "09 Mar 2025", status: "Completed", delivery: "Instant (Digital)"    },
  { id: "#1846326", customer: "Jese Leos",          email: "name@example.com",       total: "$2000", date: "07 Mar 2025", status: "Failed",    delivery: "Scheduled (Digital)"  },
  { id: "#1846327", customer: "Bonnie Green",        email: "name@company.com",       total: "$245",  date: "12 Mar 2025", status: "Completed", delivery: "Instant (Digital)"    },
  { id: "#1846328", customer: "Scripps Research",   email: "company@scripps.edu",    total: "$90",   date: "18 Apr 2025", status: "Refunded",  delivery: "Scheduled (Digital)"  },
  { id: "#1846329", customer: "Michael Gough",       email: "name@example.com",       total: "$3040", date: "21 Apr 2025", status: "Pending",   delivery: "Shipment (Packaging)" },
  { id: "#1846330", customer: "Lana Byrd",           email: "name@example.com",       total: "$2999", date: "24 Apr 2025", status: "Completed", delivery: "Instant (Digital)"    },
  { id: "#1846331", customer: "Scripps Mercy",       email: "admin@scrippsmergy.org", total: "$1870", date: "05 May 2025", status: "Completed", delivery: "Shipment (Packaging)" },
  { id: "#1846332", customer: "Leslie Livingston",   email: "name@example.com",       total: "$5067", date: "08 May 2025", status: "Refunded",  delivery: "Instant (Digital)"    },
];

const txnBadge: Record<string, string> = {
  Completed: "rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",
  Failed:    "rounded-sm bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",
  Pending:   "rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Refunded:  "rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300",
};

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminSaaSPage() {
  return (
    <PreviewShell variant="admin" title="SaaS Dashboard">
      <div className="px-4 pt-4">

        {/* 1 ── Total sales chart */}
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div className="items-start justify-between sm:flex">
            <div className="mb-4 sm:mb-0">
              <h2 className="mb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white">$401,857</h2>
              <p className="text-gray-500 dark:text-gray-400">Total revenue for flowbite.com</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <input type="text" className="block w-32 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-9 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Start date" />
              </div>
              <span className="text-gray-500 dark:text-gray-400">to</span>
              <div className="relative">
                <input type="text" className="block w-32 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-9 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="End date" />
              </div>
            </div>
          </div>
          <ReactApexChart options={totalSalesOptions} series={totalSalesSeries} type="bar" height={420} />
        </div>

        {/* 2 ── 4 KPI cards */}
        <div className="my-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <h3 className="text-gray-500 dark:text-gray-400">{k.label}</h3>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{k.value}</span>
              <p className={`mt-2 flex items-center text-sm ${k.up ? "text-green-500 dark:text-green-400" : "text-red-600 dark:text-red-500"}`}>
                <span className="mr-1.5 flex items-center font-medium">
                  {k.up
                    ? <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" /></svg>
                    : <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14-4-4m4 4 4-4" /></svg>
                  }
                  {k.delta}
                </span>
                vs last month
              </p>
            </div>
          ))}
        </div>

        {/* 3 ── Map + right panel */}
        <div className="my-4 grid grid-cols-1 gap-4 xl:grid-cols-3">

          {/* Map + country list (col-span-2) */}
          <div className="space-y-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:space-y-6 md:p-6 xl:col-span-2">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="mb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white">United States</h2>
                <p className="text-gray-500 dark:text-gray-400">Visits by country</p>
              </div>
              <button className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                Today <HiChevronDown className="-me-1 ms-1.5 h-4 w-4" />
              </button>
            </div>

            {/* World map */}
            <div style={{ height: 260 }} className="overflow-hidden rounded-lg">
              <ComposableMap projectionConfig={{ scale: 140 }} style={{ width: "100%", height: "100%" }}>
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const active = highlightedCountries.has(geo.id);
                      return (
                        <Geography key={geo.rsmKey} geography={geo}
                          fill={active ? PRIMARY : "#E2E8F0"} stroke="#ffffff" strokeWidth={0.5}
                          style={{ default: { outline: "none" }, hover: { outline: "none" }, pressed: { outline: "none" } }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ComposableMap>
            </div>

            {/* Country list */}
            <ul className="space-y-6" role="list">
              {countries.map((c) => (
                <li key={c.name} className="w-full items-center sm:flex">
                  <div className="mb-3 flex items-center sm:mb-0">
                    <span className="text-lg w-6 shrink-0">{c.flag}</span>
                    <span className="mx-5 ml-3 w-32 text-base font-medium text-gray-900 dark:text-white sm:flex-none">{c.name}</span>
                  </div>
                  <div className="h-5 w-full rounded-lg bg-gray-100 dark:bg-gray-700">
                    <div className="h-5 rounded-md bg-primary-700 p-1 text-center text-xs font-bold leading-none text-primary-100" style={{ width: `${c.pct}%` }}>{c.visits}</div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:w-auto">
              View full report
              <svg className="-me-0.5 ms-1.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </button>
          </div>

          {/* Right panel: visits + products */}
          <div className="grid gap-4 xl:grid-cols-1">

            {/* Visits by device */}
            <div className="space-y-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:space-y-6 md:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="mb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white">867.4k</h2>
                  <p className="text-gray-500 dark:text-gray-400">Visits by device</p>
                </div>
                <span className="flex items-center font-semibold text-green-500 dark:text-green-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" /></svg>
                  7%
                </span>
              </div>
              <div className="items-center justify-between space-y-4 sm:flex sm:space-y-0">
                {[
                  { label: "Desktop PC", pct: "55%", visits: "753.6k Visits" },
                  { label: "Mobile",     pct: "45%", visits: "56.2k Visits" },
                  { label: "Tablet",     pct: "5%",  visits: "6.5k Visits" },
                ].map((d) => (
                  <div key={d.label} className="text-gray-900 dark:text-white">
                    <span className="font-medium text-sm">{d.label}</span>
                    <h4 className="text-2xl font-bold">{d.pct}</h4>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{d.visits}</span>
                  </div>
                ))}
              </div>
              <ReactApexChart options={visitsOptions} series={visitsSeries} type="bar" height={130} />
              <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
                <button className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Last 7 days <HiChevronDown className="ms-1 h-4 w-4" />
                </button>
                <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
                  Sales Report <HiArrowRight className="ms-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Top products */}
            <div className="space-y-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:space-y-6 md:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="mb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white">$384,567</h2>
                  <p className="text-gray-500 dark:text-gray-400">Top products this month</p>
                </div>
                <span className="flex items-center font-semibold text-green-500 dark:text-green-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" /></svg>
                  10%
                </span>
              </div>
              <ul className="divide-y divide-gray-100 dark:divide-gray-700">
                {topProducts.map((p, i) => (
                  <li key={i} className="py-3 sm:py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xs font-bold text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-gray-900 dark:text-white">{p.name}</p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">{p.cat}</p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">{p.revenue}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
                <button className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Last 7 days <HiChevronDown className="ms-1 h-4 w-4" />
                </button>
                <a href="/preview/admin-products" className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
                  Products Report <HiArrowRight className="ms-1 h-4 w-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4 ── Transactions table */}
        <div className="mb-4 rounded-lg bg-white shadow-sm dark:bg-gray-800">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 dark:border-gray-700 md:px-6">
            <div>
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Transactions</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Latest transactions</p>
            </div>
            <div className="flex items-center gap-2">
              <Button size="xs" color="alternative">Archive all</Button>
              <Button size="xs" color="failure" outline>Delete all</Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4"><input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600" /></th>
                  {["Order ID","Customer","Email","Total","Due Date","Status","Delivery Type",""].map((h,i) => (
                    <th key={i} scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t.id} className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
                    <td className="w-4 px-4 py-3"><input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600" /></td>
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{t.id}</th>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{t.customer}</td>
                    <td className="whitespace-nowrap px-4 py-3">{t.email}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{t.total}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{t.date}</td>
                    <td className="whitespace-nowrap px-4 py-3"><span className={txnBadge[t.status]}>{t.status}</span></td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{t.delivery}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <a href="/preview/admin-transaction" className="text-xs font-medium text-primary-700 hover:underline dark:text-primary-400">Details</a>
                        <button className="text-xs font-medium text-red-600 hover:underline dark:text-red-400">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t border-gray-200 px-4 py-4 dark:border-gray-700 md:px-6">
            <a href="/preview/admin-transactions" className="inline-flex items-center text-sm font-medium text-primary-700 hover:underline dark:text-primary-400">
              View all transactions <HiArrowRight className="ms-1.5 h-3.5 w-3.5" />
            </a>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
