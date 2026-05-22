"use client";

import { PreviewShell } from "../PreviewShell";
import dynamic from "next/dynamic";
import { HiChevronDown, HiArrowRight } from "react-icons/hi";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// ── Colors ────────────────────────────────────────────────────────────────────

const PRIMARY   = "#1A56DB";
const SECONDARY = "#FF9963";
const SUCCESS   = "#0E9F6E";
const DANGER    = "#F05252";
const WARNING   = "#C27803";

// ── KPI sparklines ────────────────────────────────────────────────────────────

const makeSparkline = (color: string) => ({
  chart: { height: 80, maxWidth: "100%", type: "line" as const, fontFamily: "Inter, sans-serif", dropShadow: { enabled: false }, toolbar: { show: false } },
  tooltip: { enabled: true, followCursor: true, x: { show: false }, fixed: { enabled: true, position: "top" as const, offsetX: 0, offsetY: -24 } },
  dataLabels: { enabled: false },
  stroke: { width: 3, curve: "smooth" as const },
  grid: { show: false, strokeDashArray: 4, padding: { left: 2, right: 2, top: 0 } },
  xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
  yaxis: { show: false },
  colors: [color],
});

const kpiCards = [
  {
    label: "Total Revenue",
    value: "$84,320",
    delta: "12%",
    up: true,
    series: [{ name: "Revenue", data: [52000, 58000, 61000, 59000, 72000, 78000, 84320] }],
    options: makeSparkline(SUCCESS),
  },
  {
    label: "Bookings This Week",
    value: "1,248",
    delta: "8.4%",
    up: true,
    series: [{ name: "Bookings", data: [140, 162, 175, 158, 190, 210, 213] }],
    options: makeSparkline(PRIMARY),
  },
  {
    label: "Avg. Service Time",
    value: "2h 14m",
    delta: "3.2%",
    up: false,
    series: [{ name: "Minutes", data: [118, 124, 132, 139, 128, 136, 134] }],
    options: makeSparkline(DANGER),
  },
  {
    label: "Customer Satisfaction",
    value: "4.7 / 5",
    delta: "0.2",
    up: true,
    series: [{ name: "Rating", data: [4.3, 4.4, 4.5, 4.4, 4.6, 4.7, 4.7] }],
    options: makeSparkline(SUCCESS),
  },
];

// ── Revenue by service type — grouped bar ─────────────────────────────────────

const revenueSeries = [
  {
    name: "Oil & Maintenance",
    color: PRIMARY,
    data: [
      { x: "Mon", y: 8400 }, { x: "Tue", y: 7200 }, { x: "Wed", y: 9100 },
      { x: "Thu", y: 8800 }, { x: "Fri", y: 10200 }, { x: "Sat", y: 11400 }, { x: "Sun", y: 6300 },
    ],
  },
  {
    name: "Tires & Wheels",
    color: SECONDARY,
    data: [
      { x: "Mon", y: 4200 }, { x: "Tue", y: 5100 }, { x: "Wed", y: 3800 },
      { x: "Thu", y: 6400 }, { x: "Fri", y: 5600 }, { x: "Sat", y: 7200 }, { x: "Sun", y: 3100 },
    ],
  },
  {
    name: "Diagnostics & Repair",
    color: "#7E3AF2",
    data: [
      { x: "Mon", y: 2900 }, { x: "Tue", y: 3700 }, { x: "Wed", y: 4200 },
      { x: "Thu", y: 3100 }, { x: "Fri", y: 4800 }, { x: "Sat", y: 3600 }, { x: "Sun", y: 1900 },
    ],
  },
];

const revenueOptions = {
  colors: [PRIMARY, SECONDARY, "#7E3AF2"],
  chart: { type: "bar" as const, height: 400, fontFamily: "Inter, sans-serif", toolbar: { show: false } },
  plotOptions: { bar: { horizontal: false, columnWidth: "65%", borderRadiusApplication: "end" as const, borderRadius: 6 } },
  tooltip: { shared: true, intersect: false, style: { fontFamily: "Inter, sans-serif" } },
  states: { hover: { filter: { type: "darken" as const, value: 1 } } },
  stroke: { show: true, width: 0, colors: ["transparent"] },
  grid: { show: false, strokeDashArray: 4, padding: { left: 2, right: 2, top: -14 } },
  dataLabels: { enabled: false },
  legend: { position: "bottom" as const, fontFamily: "Inter, sans-serif", offsetY: 8, height: 36 },
  xaxis: {
    floating: false,
    labels: { show: true, style: { fontFamily: "Inter, sans-serif", cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400" } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
  fill: { opacity: 1 },
};

// ── Booking volume — area chart ────────────────────────────────────────────────

const bookingVolumeSeries = [
  { name: "Bookings", data: [38, 45, 41, 53, 49, 62, 58, 71, 67, 84, 78, 92], color: PRIMARY },
];

const bookingVolumeOptions = {
  chart: { height: 260, type: "area" as const, fontFamily: "Inter, sans-serif", toolbar: { show: false } },
  fill: { type: "gradient", gradient: { opacityFrom: 0.45, opacityTo: 0 } },
  stroke: { curve: "smooth" as const, width: 4 },
  dataLabels: { enabled: false },
  tooltip: { style: { fontSize: "14px", fontFamily: "Inter, sans-serif" } },
  grid: { show: false, padding: { left: 4, right: 4, top: 0, bottom: 0 } },
  markers: { size: 4, strokeColors: "#ffffff", hover: { sizeOffset: 3 } },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: { style: { colors: ["#6B7280"], fontSize: "13px" } },
    axisBorder: { color: "#F3F4F6" },
    axisTicks: { color: "#F3F4F6" },
  },
  yaxis: { show: false },
};

// ── Service mix — donut ────────────────────────────────────────────────────────

const serviceMixSeries = [44, 28, 18, 10];
const serviceMixOptions = {
  colors: [PRIMARY, SECONDARY, "#7E3AF2", SUCCESS],
  chart: { height: 260, type: "donut" as const },
  stroke: { colors: ["#ffffff"], width: 2 },
  plotOptions: { pie: { donut: { size: "72%", labels: { show: true, total: { show: true, label: "Services", formatter: () => "1,248" } } } } },
  labels: ["Oil & Maintenance", "Tires & Wheels", "Diagnostics & Repair", "Detailing"],
  dataLabels: { enabled: false },
  legend: { position: "bottom" as const, fontFamily: "Inter, sans-serif", offsetY: 4 },
};

// ── Static data ────────────────────────────────────────────────────────────────

type ServiceStatus = "Confirmed" | "In Progress" | "Completed" | "Cancelled";

const bookings: {
  id: string;
  customer: string;
  vehicle: string;
  service: string;
  tech: string;
  date: string;
  total: string;
  status: ServiceStatus;
}[] = [
  { id: "#SVC-0041", customer: "Marcus Webb",      vehicle: "2022 Tesla Model 3",   service: "Annual Inspection",       tech: "Dani R.",   date: "22 May 2026",  total: "$189",  status: "Completed"   },
  { id: "#SVC-0042", customer: "Priya Sharma",      vehicle: "2019 Honda Accord",    service: "Oil Change + Tire Rot.",  tech: "James K.",  date: "22 May 2026",  total: "$94",   status: "In Progress" },
  { id: "#SVC-0043", customer: "Lana Byrd",          vehicle: "2021 Ford F-150",      service: "Brake Replacement",       tech: "Chris M.",  date: "22 May 2026",  total: "$465",  status: "In Progress" },
  { id: "#SVC-0044", customer: "Omar Abdullah",      vehicle: "2020 BMW X5",          service: "Diagnostic Scan",         tech: "Dani R.",   date: "23 May 2026",  total: "$120",  status: "Confirmed"   },
  { id: "#SVC-0045", customer: "Sophie Larsson",     vehicle: "2018 Toyota Camry",    service: "Full Detailing",          tech: "Mia T.",    date: "23 May 2026",  total: "$250",  status: "Confirmed"   },
  { id: "#SVC-0046", customer: "James Eriksson",     vehicle: "2023 Chevy Silverado", service: "Transmission Service",    tech: "Chris M.",  date: "23 May 2026",  total: "$890",  status: "Confirmed"   },
  { id: "#SVC-0047", customer: "Nina Okafor",        vehicle: "2017 Subaru Outback",  service: "Timing Belt Replacement", tech: "James K.",  date: "24 May 2026",  total: "$1,240",status: "Confirmed"   },
  { id: "#SVC-0048", customer: "Tyler Nguyen",       vehicle: "2022 Hyundai Sonata",  service: "AC Recharge",             tech: "Mia T.",    date: "24 May 2026",  total: "$160",  status: "Confirmed"   },
  { id: "#SVC-0049", customer: "Carla Moretti",      vehicle: "2019 Mercedes C300",   service: "Oil Change",              tech: "Dani R.",   date: "21 May 2026",  total: "$140",  status: "Completed"   },
  { id: "#SVC-0050", customer: "Derek Washington",   vehicle: "2020 Audi Q7",         service: "Tire Set Installation",   tech: "James K.",  date: "21 May 2026",  total: "$680",  status: "Cancelled"   },
];

const statusStyle: Record<ServiceStatus, string> = {
  Completed:   "rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",
  "In Progress":"rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Confirmed:   "rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Cancelled:   "rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300",
};

type TechStatus = "On Job" | "Available" | "Break" | "Off";

const technicians: {
  initials: string;
  name: string;
  specialty: string;
  jobsToday: number;
  status: TechStatus;
}[] = [
  { initials: "DR", name: "Dani Reyes",    specialty: "Diagnostics",     jobsToday: 5, status: "On Job"    },
  { initials: "JK", name: "James Kowalski",specialty: "Engine & Drive",  jobsToday: 4, status: "On Job"    },
  { initials: "CM", name: "Chris Murphy",  specialty: "Brakes & Chassis",jobsToday: 3, status: "Available" },
  { initials: "MT", name: "Mia Torres",    specialty: "Detailing",       jobsToday: 6, status: "Break"     },
  { initials: "RB", name: "Ryan Brooks",   specialty: "Tires & Alignment",jobsToday: 2, status: "Available" },
];

const techStatusStyle: Record<TechStatus, string> = {
  "On Job":   "rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Available:  "rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",
  Break:      "rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Off:        "rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400",
};

// ── SVG helpers ────────────────────────────────────────────────────────────────

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
const CarIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M5.5 5a.5.5 0 0 0-.48.36L3.67 9H20.3l-1.35-3.64A.5.5 0 0 0 18.5 5h-13ZM21 10H3l-1 .5V16a1 1 0 0 0 1 1h1a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h1a1 1 0 0 0 1-1v-5.5L21 10ZM7 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm8 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" clipRule="evenodd"/>
  </svg>
);

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AdminCarServicePage() {
  return (
    <PreviewShell variant="admin" title="Car Service Dashboard">
      <div className="px-4 pt-4">

        {/* 1 ── KPI cards with sparklines */}
        <div className="mb-4 grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
          {kpiCards.map((k) => (
            <div key={k.label} className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <div className="shrink-0">
                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">{k.label}</p>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{k.value}</span>
                <p className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className={`mr-1 flex items-center font-medium ${k.up ? "text-green-500 dark:text-green-400" : "text-red-600 dark:text-red-500"}`}>
                    {k.up ? <ArrowUp /> : <ArrowDown />}
                    {k.delta}
                  </span>
                  vs last week
                </p>
              </div>
              <ReactApexChart options={k.options} series={k.series} type="line" height={80} width={110} />
            </div>
          ))}
        </div>

        {/* 2 ── Revenue by service type + booking volume */}
        <div className="mb-4 grid gap-4 xl:grid-cols-3">

          {/* Revenue bar chart — 2 cols */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6 xl:col-span-2">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Revenue by Service Type</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">This week</p>
              </div>
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                Last 7 days <HiChevronDown className="h-4 w-4" />
              </button>
            </div>
            <ReactApexChart options={revenueOptions} series={revenueSeries} type="bar" height={400} />
          </div>

          {/* Service mix donut — 1 col */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Service Mix</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">1,248 services this week</p>
              </div>
            </div>
            <ReactApexChart options={serviceMixOptions} series={serviceMixSeries} type="donut" height={260} />
            <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-200 pt-4 dark:border-gray-700">
              {[
                { label: "Oil & Maint.", value: "550", color: PRIMARY },
                { label: "Tires & Wheels", value: "349", color: SECONDARY },
                { label: "Diagnostics", value: "225", color: "#7E3AF2" },
                { label: "Detailing", value: "124", color: SUCCESS },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: s.color }} />
                  <dt className="truncate text-xs text-gray-500 dark:text-gray-400">{s.label}</dt>
                  <dd className="ml-auto text-xs font-semibold text-gray-900 dark:text-white">{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700">
              <a href="#" className="inline-flex items-center text-sm font-medium text-primary-700 hover:underline dark:text-primary-400">
                Full breakdown <HiArrowRight className="ms-1.5 h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 ── Booking volume trend + technician roster */}
        <div className="mb-4 grid gap-4 xl:grid-cols-3">

          {/* Booking volume area chart — 2 cols */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6 xl:col-span-2">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Booking Volume</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Monthly bookings, 2026</p>
              </div>
              <span className="flex items-center font-semibold text-green-500 dark:text-green-400">
                <ArrowUp />
                18% YTD
              </span>
            </div>
            <ReactApexChart options={bookingVolumeOptions} series={bookingVolumeSeries} type="area" height={260} />
          </div>

          {/* Technician roster — 1 col */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Technicians</h2>
              <button className="rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800">
                + Add
              </button>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {technicians.map((t) => (
                <li key={t.initials} className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                      {t.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">{t.name}</p>
                      <p className="truncate text-xs text-gray-500 dark:text-gray-400">{t.specialty}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className={techStatusStyle[t.status]}>{t.status}</span>
                      <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">{t.jobsToday} jobs today</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3 border-t border-gray-200 pt-3 dark:border-gray-700">
              <a href="#" className="inline-flex items-center text-sm font-medium text-primary-700 hover:underline dark:text-primary-400">
                View full roster <HiArrowRight className="ms-1.5 h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 ── Active bookings table */}
        <div className="mb-4 rounded-lg bg-white shadow-sm dark:bg-gray-800">

          {/* Table header */}
          <div className="border-b border-gray-200 px-4 py-4 dark:border-gray-700 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">Service Bookings</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Today and upcoming appointments</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {/* Search */}
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="search"
                    placeholder="Search bookings…"
                    className="block w-52 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                  />
                </div>
                <button className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                  All statuses <HiChevronDown className="h-4 w-4" />
                </button>
                <button className="flex items-center gap-1.5 rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
                  </svg>
                  New Booking
                </button>
              </div>
            </div>
          </div>

          {/* Filter radios */}
          <div className="flex flex-wrap gap-4 px-4 py-3 md:px-6">
            <span className="hidden text-sm font-medium text-gray-900 dark:text-white md:block">Show:</span>
            {["All", "In Progress", "Confirmed", "Completed", "Cancelled"].map((label) => (
              <div key={label} className="flex items-center">
                <input
                  id={`filter-${label}`}
                  type="radio"
                  name="booking-filter"
                  defaultChecked={label === "All"}
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
                />
                <label htmlFor={`filter-${label}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {label}
                </label>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600" />
                  </th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Booking ID</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Customer <SortIcon /></th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Vehicle <SortIcon /></th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Service</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Technician</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Date <SortIcon /></th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Total <SortIcon /></th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Status <SortIcon /></th>
                  <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, i) => (
                  <tr
                    key={b.id}
                    className={`border-b hover:bg-gray-50 dark:hover:bg-gray-700 ${i < bookings.length - 1 ? "border-gray-200 dark:border-gray-700" : "border-transparent"}`}
                  >
                    <td className="w-4 px-4 py-3">
                      <input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600" />
                    </td>
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                      <a href="#" className="hover:underline">{b.id}</a>
                    </th>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{b.customer}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <CarIcon />
                        <span className="text-gray-700 dark:text-gray-300">{b.vehicle}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-gray-700 dark:text-gray-300">{b.service}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{b.tech}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-gray-700 dark:text-gray-300">{b.date}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-semibold text-gray-900 dark:text-white">{b.total}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className={statusStyle[b.status]}>{b.status}</span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="inline-flex items-center rounded-lg p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <DotsHorizontal />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 px-4 py-4 dark:border-gray-700 md:px-6">
            <nav className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">1–10</span> of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">248</span> bookings
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a href="#" className="flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                    <span className="sr-only">Previous</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" /></svg>
                  </a>
                </li>
                {["1", "2", "3", "...", "25"].map((p, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      aria-current={p === "1" ? "page" : undefined}
                      className={`flex items-center justify-center border px-3 py-2 text-sm leading-tight ${
                        p === "1"
                          ? "z-10 border-primary-300 bg-primary-50 text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                          : "border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }`}
                    >
                      {p}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
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
