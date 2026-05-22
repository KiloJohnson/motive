"use client";

import { PreviewShell } from "../PreviewShell";
import { Avatar, Badge } from "flowbite-react";
import dynamic from "next/dynamic";
import {
  HiArrowUp, HiArrowDown, HiChevronDown, HiChevronRight,
  HiDotsHorizontal, HiMusicNote, HiPlay,
} from "react-icons/hi";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// ── Colors ─────────────────────────────────────────────────────────────────

const PRIMARY   = "#1A56DB";
const SECONDARY = "#FF9963";
const TERTIARY  = "#7E3AF2";
const TEAL      = "#16BDCA";

// ── Chart configs ──────────────────────────────────────────────────────────

// Streams over time — area chart
const streamsSeries = [
  {
    name: "Streams",
    data: [1_840_000, 2_120_000, 1_950_000, 2_380_000, 2_690_000, 2_450_000, 3_100_000],
    color: PRIMARY,
  },
  {
    name: "Downloads",
    data: [420_000, 510_000, 480_000, 560_000, 620_000, 590_000, 710_000],
    color: SECONDARY,
  },
];

const streamsOptions = {
  chart: {
    width: "100%", height: 380, type: "area" as const,
    fontFamily: "Inter, sans-serif", toolbar: { show: false },
  },
  fill: { type: "gradient", gradient: { enabled: true, opacityFrom: 0.45, opacityTo: 0 } },
  stroke: { curve: "smooth" as const },
  dataLabels: { enabled: false },
  tooltip: { style: { fontSize: "14px", fontFamily: "Inter, sans-serif" } },
  grid: { show: false, padding: { left: 8, right: 8, top: 0, bottom: 5 } },
  markers: { size: 4, strokeColors: "#ffffff", hover: { sizeOffset: 3 } },
  xaxis: {
    categories: ["01 Jun", "02 Jun", "03 Jun", "04 Jun", "05 Jun", "06 Jun", "07 Jun"],
    labels: { trim: true, style: { colors: ["#6B7280"], fontSize: "14px", fontWeight: 400 } },
    axisBorder: { color: "#F3F4F6" },
    axisTicks: { color: "#F3F4F6" },
  },
  yaxis: { show: false },
  legend: {
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    labels: { colors: ["#6B7280"] },
    itemMargin: { horizontal: 10 },
  },
};

// Revenue by genre — donut
const genreSeries = [38.4, 24.6, 19.2, 11.5, 6.3];

const genreOptions = {
  colors: [PRIMARY, SECONDARY, TERTIARY, TEAL, "#FDBA74"],
  chart: { height: 300, width: "100%", type: "donut" as const },
  stroke: { colors: ["#ffffff"] },
  plotOptions: {
    pie: {
      donut: { size: "60%", labels: { show: true, total: { show: true, label: "Total", formatter: () => "$2.4M" } } },
    },
  },
  labels: ["Pop", "Hip-Hop", "Electronic", "R&B", "Other"],
  dataLabels: { enabled: false },
  legend: { position: "bottom" as const, fontFamily: "Inter, sans-serif" },
  tooltip: { y: { formatter: (v: number) => v + "%" } },
};

// Monthly revenue — bar chart
const revenueSeries = [
  { name: "Streaming",  color: PRIMARY,   data: [412, 480, 390, 510, 465, 570] },
  { name: "Downloads",  color: SECONDARY, data: [90,  110, 85,  130, 105, 120] },
  { name: "Licensing",  color: TERTIARY,  data: [55,  70,  60,  80,  65,  95]  },
];

const revenueOptions = {
  colors: [PRIMARY, SECONDARY, TERTIARY],
  chart: {
    type: "bar" as const, height: 280,
    fontFamily: "Inter, sans-serif", toolbar: { show: false },
  },
  plotOptions: { bar: { columnWidth: "75%", borderRadius: 4, borderRadiusApplication: "end" as const } },
  tooltip: { shared: true, intersect: false, style: { fontSize: "14px", fontFamily: "Inter, sans-serif" } },
  states: { hover: { filter: { type: "darken" as const, value: 1 } } },
  stroke: { show: true, width: 4, colors: ["transparent"] },
  grid: { show: false },
  dataLabels: { enabled: false },
  legend: { show: false },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    labels: { style: { fontFamily: "Inter, sans-serif", fontSize: "12px" } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
  fill: { opacity: 1 },
};

// Listener growth — radial bars
const listenerSeries = [82, 67, 91];

const listenerOptions = {
  colors: [PRIMARY, SECONDARY, TERTIARY],
  chart: { height: 220, type: "radialBar" as const, fontFamily: "Inter, sans-serif" },
  plotOptions: {
    radialBar: {
      track: { background: "#F3F4F6" },
      dataLabels: { show: false },
      hollow: { size: "20%" },
    },
  },
  labels: ["Returning", "New", "Premium"],
  legend: { show: true, position: "bottom" as const, fontFamily: "Inter, sans-serif", itemMargin: { horizontal: 8 } },
};

// ── Static data ────────────────────────────────────────────────────────────

const kpis = [
  { label: "Total Streams",    value: "14.2M",  delta: "12.4%", up: true  },
  { label: "Monthly Revenue",  value: "$186.4k", delta: "8.1%",  up: true  },
  { label: "Active Artists",   value: "3,847",  delta: "3.2%",  up: true  },
  { label: "Avg. Completion",  value: "74.6%",  delta: "1.8%",  up: false },
];

const topTracks = [
  { rank: 1,  title: "Golden Hour",       artist: "Kali Uchis",        streams: "8.4M",  change: +12, duration: "3:24" },
  { rank: 2,  title: "Levitating",        artist: "Dua Lipa",          streams: "7.9M",  change: +4,  duration: "3:23" },
  { rank: 3,  title: "Blinding Lights",   artist: "The Weeknd",        streams: "7.3M",  change: -2,  duration: "3:20" },
  { rank: 4,  title: "As It Was",         artist: "Harry Styles",      streams: "6.8M",  change: +8,  duration: "2:37" },
  { rank: 5,  title: "Heat Waves",        artist: "Glass Animals",     streams: "6.2M",  change: -1,  duration: "3:59" },
  { rank: 6,  title: "Stay",              artist: "The Kid LAROI",     streams: "5.9M",  change: +3,  duration: "2:21" },
  { rank: 7,  title: "Industry Baby",     artist: "Lil Nas X",         streams: "5.6M",  change: -5,  duration: "3:32" },
  { rank: 8,  title: "abcdefu",           artist: "GAYLE",             streams: "5.1M",  change: +6,  duration: "3:05" },
  { rank: 9,  title: "Peaches",           artist: "Justin Bieber",     streams: "4.8M",  change: 0,   duration: "3:18" },
  { rank: 10, title: "Easy On Me",        artist: "Adele",             streams: "4.5M",  change: -3,  duration: "3:44" },
];

const topArtists = [
  { initials: "KU", name: "Kali Uchis",     genre: "R&B / Pop",       monthly: "21.4M", trend: "up"   },
  { initials: "DL", name: "Dua Lipa",       genre: "Pop / Dance",     monthly: "19.8M", trend: "up"   },
  { initials: "TW", name: "The Weeknd",     genre: "R&B / Pop",       monthly: "18.3M", trend: "down" },
  { initials: "HS", name: "Harry Styles",   genre: "Pop / Rock",      monthly: "17.1M", trend: "up"   },
  { initials: "GA", name: "Glass Animals",  genre: "Indie / Alt",     monthly: "14.6M", trend: "up"   },
];

const recentAlbums = [
  { title: "Red (TV)", artist: "Taylor Swift", released: "Nov 2021", tracks: 30, status: "Active"  },
  { title: "Future Nostalgia", artist: "Dua Lipa", released: "Mar 2020", tracks: 11, status: "Active"  },
  { title: "After Hours", artist: "The Weeknd", released: "Mar 2020", tracks: 14, status: "Active"  },
  { title: "Harry's House", artist: "Harry Styles", released: "May 2022", tracks: 13, status: "Active"  },
  { title: "Dreamland", artist: "Glass Animals", released: "Aug 2020", tracks: 14, status: "Archived" },
];

const albumBadge: Record<string, string> = {
  Active:   "rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",
  Archived: "rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300",
};

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminMusicPage() {
  return (
    <PreviewShell variant="admin" title="Music Dashboard">
      <div className="p-4 space-y-4">

        {/* 1 ── KPI Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <h3 className="text-sm text-gray-500 dark:text-gray-400">{k.label}</h3>
              <span className="mt-1 block text-2xl font-bold leading-none text-gray-900 dark:text-white">
                {k.value}
              </span>
              <p className={`mt-2 flex items-center text-sm font-medium ${k.up ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
                {k.up ? <HiArrowUp className="me-1 h-4 w-4" /> : <HiArrowDown className="me-1 h-4 w-4" />}
                {k.delta} vs last month
              </p>
            </div>
          ))}
        </div>

        {/* 2 ── Streams area chart */}
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-gray-500 dark:text-gray-400">Streams &amp; Downloads</h2>
              <span className="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
                14,230,000
              </span>
            </div>
            <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
              01 Jun – 07 Jun
              <HiChevronDown className="-me-0.5 h-4 w-4" />
            </button>
          </div>
          <ReactApexChart options={streamsOptions} series={streamsSeries} type="area" height={380} />
        </div>

        {/* 3 ── Three-column: Revenue bar + Genre donut + Listener radial */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

          {/* Monthly revenue breakdown */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">$186.4k</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Monthly revenue</p>
              </div>
              <button className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                6 months <HiChevronDown className="h-4 w-4" />
              </button>
            </div>
            <ReactApexChart options={revenueOptions} series={revenueSeries} type="bar" height={280} />
            <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
              <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
                {["Streaming", "Downloads", "Licensing"].map((l, i) => (
                  <span key={l} className="flex items-center gap-1">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: [PRIMARY, SECONDARY, TERTIARY][i] }}
                    />
                    {l}
                  </span>
                ))}
              </div>
              <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
                Report <HiChevronRight className="ms-1 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Revenue by genre */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="mb-2 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Revenue by Genre</h3>
                <button className="mt-1 inline-flex items-center text-sm font-medium text-primary-700 hover:underline dark:text-primary-500">
                  This month <HiChevronDown className="ms-1.5 h-4 w-4" />
                </button>
              </div>
              <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                <HiDotsHorizontal className="h-5 w-5" />
              </button>
            </div>
            <ReactApexChart options={genreOptions} series={genreSeries} type="donut" height={300} />
            <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
              <button className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Last 30 days <HiChevronDown className="ms-1 h-4 w-4" />
              </button>
              <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
                Full Report <HiChevronRight className="ms-1 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Listener types radial + top artists */}
          <div className="space-y-4">
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <h3 className="mb-1 text-xl font-bold leading-none text-gray-900 dark:text-white">Listener Mix</h3>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">Returning · New · Premium</p>
              <ReactApexChart options={listenerOptions} series={listenerSeries} type="radialBar" height={220} />
            </div>

            {/* Top artist of the week */}
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-white">Artist of the Week</h3>
                <Badge color="purple">New #1</Badge>
              </div>
              <div className="flex items-center gap-4">
                <Avatar placeholderInitials="KU" rounded size="lg" />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Kali Uchis</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">R&amp;B / Pop · 21.4M streams</p>
                  <p className="mt-1 flex items-center text-xs font-medium text-green-500">
                    <HiArrowUp className="me-0.5 h-3 w-3" />12% this week
                  </p>
                </div>
              </div>
              <button className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600">
                <HiPlay className="h-4 w-4" />
                Preview top track
              </button>
            </div>
          </div>
        </div>

        {/* 4 ── Top Tracks table + Top Artists */}
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">

          {/* Top Tracks — takes 2 of 3 cols */}
          <div className="xl:col-span-2 rounded-lg bg-white shadow-sm dark:bg-gray-800">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 dark:border-gray-700 md:px-6">
              <div>
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">Top Tracks</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">By total streams this week</p>
              </div>
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                This week <HiChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {["#", "Title", "Artist", "Streams", "Change", "Duration"].map((h) => (
                      <th key={h} scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topTracks.map((t) => (
                    <tr key={t.rank} className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{t.rank}</td>
                      <td className="whitespace-nowrap px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900">
                            <HiMusicNote className="h-4 w-4 text-primary-700 dark:text-primary-300" />
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white">{t.title}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">{t.artist}</td>
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{t.streams}</td>
                      <td className="whitespace-nowrap px-4 py-3">
                        {t.change > 0 && (
                          <span className="flex items-center text-xs font-medium text-green-600 dark:text-green-400">
                            <HiArrowUp className="me-0.5 h-3.5 w-3.5" />+{t.change}
                          </span>
                        )}
                        {t.change < 0 && (
                          <span className="flex items-center text-xs font-medium text-red-600 dark:text-red-400">
                            <HiArrowDown className="me-0.5 h-3.5 w-3.5" />{t.change}
                          </span>
                        )}
                        {t.change === 0 && (
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">—</span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-gray-500 dark:text-gray-400">{t.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-gray-200 px-4 py-4 dark:border-gray-700 md:px-6">
              <a href="#" className="inline-flex items-center text-sm font-medium text-primary-700 hover:underline dark:text-primary-400">
                View all tracks <HiChevronRight className="ms-1.5 h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Top Artists panel */}
          <div className="space-y-4">
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
                <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Top Artists</h3>
                <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                  View all
                </a>
              </div>
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {topArtists.map((a) => (
                  <li key={a.name} className="py-3">
                    <div className="flex items-center gap-3">
                      <Avatar placeholderInitials={a.initials} rounded size="sm" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-gray-900 dark:text-white">{a.name}</p>
                        <p className="truncate text-xs text-gray-500 dark:text-gray-400">{a.genre}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{a.monthly}</p>
                        {a.trend === "up"
                          ? <p className="flex items-center justify-end text-xs text-green-500"><HiArrowUp className="h-3 w-3" /></p>
                          : <p className="flex items-center justify-end text-xs text-red-500"><HiArrowDown className="h-3 w-3" /></p>
                        }
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent albums */}
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Albums</h3>
                <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                  Manage
                </a>
              </div>
              <ul className="space-y-3">
                {recentAlbums.map((al) => (
                  <li key={al.title} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                      <HiMusicNote className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">{al.title}</p>
                      <p className="truncate text-xs text-gray-500 dark:text-gray-400">{al.artist} · {al.tracks} tracks</p>
                    </div>
                    <span className={albumBadge[al.status]}>{al.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
