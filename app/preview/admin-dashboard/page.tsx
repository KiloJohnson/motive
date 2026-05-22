"use client";

import { PreviewShell } from "../PreviewShell";
import { Avatar } from "flowbite-react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer,
  XAxis, YAxis,
} from "recharts";
import {
  HiChevronDown, HiChevronRight, HiArrowUp, HiCalendar,
  HiDotsHorizontal, HiPaperAirplane,
} from "react-icons/hi";

// ── Chart data ─────────────────────────────────────────────────────────────

const mainData = [
  { date: "01 Mar", revenue: 10356, prev: 10256 },
  { date: "02 Mar", revenue: 10456, prev: 10356 },
  { date: "03 Mar", revenue: 10356, prev: 10456 },
  { date: "04 Mar", revenue: 10456, prev: 10356 },
  { date: "05 Mar", revenue: 10556, prev: 10556 },
  { date: "06 Mar", revenue: 10556, prev: 10456 },
  { date: "07 Mar", revenue: 10656, prev: 10556 },
];

const newProductsData = [
  { date: "01 Feb", digital: 170, goods: 120 },
  { date: "02 Feb", digital: 180, goods: 134 },
  { date: "03 Feb", digital: 164, goods: 167 },
  { date: "04 Feb", digital: 145, goods: 179 },
  { date: "05 Feb", digital: 174, goods: 145 },
  { date: "06 Feb", digital: 170, goods: 182 },
  { date: "07 Feb", digital: 155, goods: 143 },
];

const trafficData = [
  { name: "Direct",         value: 52.8 },
  { name: "Organic search", value: 26.8 },
  { name: "Referrals",      value: 20.4 },
];

const cpcData = [
  { date: "01 Feb", clicks: 6500, cpc: 6456 },
  { date: "02 Feb", clicks: 6418, cpc: 6356 },
  { date: "03 Feb", clicks: 6456, cpc: 6526 },
  { date: "04 Feb", clicks: 6526, cpc: 6332 },
  { date: "05 Feb", clicks: 6356, cpc: 6418 },
  { date: "06 Feb", clicks: 6456, cpc: 6500 },
];

const PRIMARY   = "#1A56DB";
const SECONDARY = "#FF9963";
const TERTIARY  = "#7E3AF2";
const TRAFFIC_COLORS = [PRIMARY, SECONDARY, TERTIARY];

// ── Static content ─────────────────────────────────────────────────────────

const customers = [
  { initials: "NS", name: "Neil Sims",     email: "email@flowbite.com", amount: "$320"  },
  { initials: "BG", name: "Bonnie Green",  email: "email@flowbite.com", amount: "$3467" },
  { initials: "MG", name: "Michael Gough", email: "email@flowbite.com", amount: "$67"   },
  { initials: "TL", name: "Thomas Lean",   email: "email@flowbite.com", amount: "$2367" },
  { initials: "LB", name: "Lana Byrd",     email: "email@flowbite.com", amount: "$367"  },
];

type ActivityItem = {
  initials: string; name: string; text: string;
  note?: string; privacy?: string; request?: boolean;
};

const activityFeed: { date: string; items: ActivityItem[] }[] = [
  {
    date: "December 16th, 2025",
    items: [
      { initials: "JL", name: "Jese Leos",    text: "likes Bonnie Green's post in How to start with Flowbite library", note: '"I wanted to share a webinar zeroheight."', privacy: "Public"  },
      { initials: "NS", name: "Neil Sims",    text: "is requesting access to the Flowbite database.",                  request: true },
      { initials: "BG", name: "Bonnie Green", text: "react to Thomas Lean's comment",                                  privacy: "Private" },
    ],
  },
  {
    date: "December 12th, 2025",
    items: [
      { initials: "LB", name: "Lana Byrd",             text: "likes Bonnie Green's post in How to start with Flowbite library", note: '"I wanted to share a webinar zeroheight."', privacy: "Private" },
      { initials: "JM", name: "Joseph Mcfall",          text: "removed Lana Byrd account",                                       privacy: "Public"  },
      { initials: "TL", name: "Thomas Lean",             text: "likes Bonnie Green's post in How to start with Flowbite library", note: '"I wanted to share a webinar zeroheight."', privacy: "Public"  },
      { initials: "LL", name: "Leslie Livingston Green", text: "likes Bonnie Green's post in Top figma designs",                  note: '"I wanted to share a webinar zeroheight."', privacy: "Private" },
    ],
  },
];

const replies = [
  { initials: "JM", name: "Joseph McFallen", text: "Hello @jeseleos I need some informations about flowbite react version." },
  { initials: "JL", name: "Jese Leos",       text: "Hi @josephh Sure, just let me know when you are available and we can speak." },
];

// ── Component ──────────────────────────────────────────────────────────────

export default function AdminDashboardPage() {
  return (
    <PreviewShell variant="admin" title="Dashboard">
      <div className="p-4 space-y-4">

        {/* 1 ── Total sales area chart */}
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-gray-500 dark:text-gray-400">Total sales</h2>
              <span className="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">$47,867</span>
            </div>
            <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
              <HiCalendar className="h-4 w-4" />
              Dec 31 - Jan 31
              <HiChevronDown className="-me-0.5 h-4 w-4" />
            </button>
          </div>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={380}>
              <AreaChart data={mainData}>
                <defs>
                  <linearGradient id="gradRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor={PRIMARY}   stopOpacity={0.45} />
                    <stop offset="95%" stopColor={PRIMARY}   stopOpacity={0}    />
                  </linearGradient>
                  <linearGradient id="gradPrev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor={SECONDARY} stopOpacity={0.45} />
                    <stop offset="95%" stopColor={SECONDARY} stopOpacity={0}    />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke={PRIMARY}   strokeWidth={2} fill="url(#gradRevenue)" name="Revenue"
                  dot={{ r: 4, fill: "white", strokeWidth: 2, stroke: PRIMARY }}   activeDot={{ r: 6 }} />
                <Area type="monotone" dataKey="prev"    stroke={SECONDARY} strokeWidth={2} fill="url(#gradPrev)"    name="Revenue (previous period)"
                  dot={{ r: 4, fill: "white", strokeWidth: 2, stroke: SECONDARY }} activeDot={{ r: 6 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 2 ── Three-column stats grid */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

          {/* New products */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="mb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white">7,564</h3>
                <p className="text-gray-500 dark:text-gray-400">New products this week</p>
              </div>
              <span className="flex items-center font-semibold text-green-500 dark:text-green-400">
                <HiArrowUp className="h-5 w-5" />7%
              </span>
            </div>
            <div className="mt-3">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={newProductsData} barGap={2} barSize={10}>
                  <Tooltip />
                  <Bar dataKey="digital" fill={PRIMARY}   name="Digital" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="goods"   fill={SECONDARY} name="Goods"   radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
              <button className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Last 7 days <HiChevronDown className="ms-1 h-4 w-4" />
              </button>
              <a href="/preview/admin-products" className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
                Products Report <HiChevronRight className="ms-1 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Website traffic pie */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="flex w-full items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Website traffic</h3>
                <button className="mt-1 inline-flex items-center text-sm font-medium text-primary-700 hover:underline dark:text-primary-500">
                  31 Nov - 31 Dev <HiChevronDown className="ms-1.5 h-4 w-4" />
                </button>
              </div>
              <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                <HiDotsHorizontal className="h-5 w-5" />
              </button>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={trafficData} cx="50%" cy="45%" outerRadius={90} dataKey="value"
                  label={({ value }) => `${value}%`} labelLine>
                  {trafficData.map((_, i) => <Cell key={i} fill={TRAFFIC_COLORS[i % TRAFFIC_COLORS.length]} />)}
                </Pie>
                <Legend verticalAlign="bottom" iconType="circle" iconSize={10} />
                <Tooltip formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
              <button className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Last 7 days <HiChevronDown className="ms-1 h-4 w-4" />
              </button>
              <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
                Traffic Report <HiChevronRight className="ms-1 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Clicks / CPC line chart */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="mb-5 flex items-start justify-between">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Clicks</h3>
                  <p className="text-2xl font-bold leading-none text-gray-900 dark:text-white">42.3k</p>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">CPC</h3>
                  <p className="text-2xl font-bold leading-none text-gray-900 dark:text-white">$5.40</p>
                </div>
              </div>
              <button className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                Last week <HiChevronDown className="h-4 w-4" />
              </button>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={cpcData}>
                <Tooltip />
                <Line type="monotone" dataKey="clicks" stroke={PRIMARY}   strokeWidth={3} dot={false} name="Clicks" />
                <Line type="monotone" dataKey="cpc"    stroke={SECONDARY} strokeWidth={3} dot={false} name="CPC"    />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-2.5 border-t border-gray-200 dark:border-gray-700 pt-5">
              <a href="#" className="inline-flex items-center gap-1.5 rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700">
                View full report
              </a>
            </div>
          </div>
        </div>

        {/* 3 ── Smart Chat + Activity/Customers */}
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">

          {/* Smart Chat — takes 2 of 3 cols */}
          <div className="xl:col-span-2 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700 md:mb-6 md:pb-6">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Smart Chat</h5>
              <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">View all</a>
            </div>

            {/* Message 1 */}
            <article className="mb-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
              <footer className="mb-2 flex items-center gap-2">
                <Avatar placeholderInitials="BG" rounded size="xs" />
                <a href="#" className="text-sm font-semibold text-gray-900 hover:underline dark:text-white">Bonnie Green</a>
                <p className="text-sm text-gray-600 dark:text-gray-400">01/03/2025 4:15 PM</p>
              </footer>
              <p className="mb-3 text-gray-900 dark:text-white">Hello everyone,</p>
              <p className="mb-2 text-gray-900 dark:text-white">
                Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end of the month.
              </p>
              <p className="text-gray-900 dark:text-white">Cheers!</p>
            </article>

            {/* Message 2 with thread */}
            <div className="mb-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
              <article className="mb-4">
                <footer className="mb-2 flex items-center gap-2">
                  <Avatar placeholderInitials="JL" rounded size="xs" />
                  <a href="#" className="text-sm font-semibold text-gray-900 hover:underline dark:text-white">Jese Leos</a>
                  <p className="text-sm text-gray-600 dark:text-gray-400">01/03/2025 4:15 PM</p>
                </footer>
                <p className="mb-2 text-gray-900 dark:text-white">
                  Ok <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">@team</a> I'am attaching our offer and pitch deck. Take your time to review everything. I'am looking forward to the next steps! Thank you.
                </p>
                <p className="mb-3 text-gray-900 dark:text-white">Looking forward to it! Thanks.</p>
                {/* Attachments */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "flowbite_offer_345", size: "PDF, 2.3 MB",     bg: "bg-primary-100 dark:bg-primary-900", text: "text-primary-700 dark:text-primary-300", label: "PDF" },
                    { name: "flowbite_showcase",  size: "MP4, 100.56 MB",  bg: "bg-teal-100 dark:bg-teal-900",       text: "text-teal-700 dark:text-teal-300",       label: "MP4" },
                  ].map((f) => (
                    <div key={f.name} className="flex items-center rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-600 gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${f.bg} ${f.text} text-xs font-bold`}>{f.label}</div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{f.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{f.size}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Replies */}
              {replies.map((r, i) => (
                <article key={i} className="mb-3 pl-5 border-l-2 border-gray-200 dark:border-gray-600">
                  <footer className="mb-1 flex items-center gap-2">
                    <Avatar placeholderInitials={r.initials} rounded size="xs" />
                    <a href="#" className="text-sm font-semibold text-gray-900 hover:underline dark:text-white">{r.name}</a>
                    <p className="text-sm text-gray-600 dark:text-gray-400">01/03/2025 4:15 PM</p>
                  </footer>
                  <p className="text-sm text-gray-900 dark:text-white">{r.text}</p>
                </article>
              ))}
            </div>

            {/* Reply editor */}
            <div className="mt-4">
              <h3 className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Write a reply</h3>
              <div className="w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
                <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-200 px-3 py-2 dark:border-gray-600">
                  {["B", "I", "U", "S", "</>"].map((btn) => (
                    <button key={btn} type="button" className="flex h-7 w-7 items-center justify-center rounded p-1.5 text-xs font-semibold text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                      {btn}
                    </button>
                  ))}
                </div>
                <div className="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800">
                  <textarea rows={2} className="block w-full resize-none border-0 bg-transparent text-sm text-gray-800 outline-none placeholder-gray-400 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Reply in thread..." />
                </div>
              </div>
              <button type="button" className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600">
                <HiPaperAirplane className="h-4 w-4 rotate-90" />
                Send your message
              </button>
            </div>
          </div>

          {/* Right column — Activity + Customers */}
          <div className="grid grid-cols-1 gap-4">

            {/* Latest activity */}
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <h3 className="mb-4 border-b border-gray-200 pb-4 text-xl font-bold leading-none text-gray-900 dark:border-gray-700 dark:text-white md:mb-6 md:pb-6">
                Latest activity
              </h3>
              {activityFeed.map((group) => (
                <div key={group.date} className="mb-4">
                  <time className="text-lg font-semibold text-gray-900 dark:text-white">{group.date}</time>
                  <ol className="mt-3 divide-y divide-gray-200 dark:divide-gray-700">
                    {group.items.map((item, i) => (
                      <li key={i}>
                        <a href="#" className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-700 sm:flex sm:items-center">
                          <Avatar placeholderInitials={item.initials} rounded size="md" className="mb-3 shrink-0 sm:mb-0 sm:me-3" />
                          <div className="text-gray-600 dark:text-gray-400">
                            <div className="text-sm font-normal">
                              <span className="font-medium text-gray-900 dark:text-white">{item.name}</span>{" "}
                              {item.text}
                            </div>
                            {item.note && <div className="mt-0.5 text-xs font-normal">{item.note}</div>}
                            {item.request && (
                              <div className="mt-2 flex items-center gap-2">
                                <button className="rounded-lg bg-primary-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-primary-800">Accept</button>
                                <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">Decline</button>
                              </div>
                            )}
                            {item.privacy && (
                              <span className="mt-0.5 block text-xs text-gray-500 dark:text-gray-400">{item.privacy}</span>
                            )}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
              <a href="#" className="inline-flex items-center rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600">
                View all
              </a>
            </div>

            {/* Customers */}
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Customers</h3>
                <a href="/preview/admin-transactions" className="inline-flex items-center rounded-lg px-3 py-2 font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                  View transactions
                </a>
              </div>
              <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-700">
                {customers.map((c, i) => (
                  <li key={c.name} className={i === 0 ? "pb-4" : i === customers.length - 1 ? "pt-4" : "py-4"}>
                    <div className="flex items-center gap-4">
                      <Avatar placeholderInitials={c.initials} rounded size="sm" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-gray-900 dark:text-white">{c.name}</p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">{c.email}</p>
                      </div>
                      <div className="inline-flex items-center font-semibold text-gray-900 dark:text-white">{c.amount}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4">
                <button className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Last 7 days <HiChevronDown className="ms-1 h-4 w-4" />
                </button>
              </div>
            </div>

          </div>{/* end right col */}
        </div>{/* end chat/activity grid */}

      </div>
    </PreviewShell>
  );
}
