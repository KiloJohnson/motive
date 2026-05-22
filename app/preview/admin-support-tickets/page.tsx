"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";

// ── Static data ────────────────────────────────────────────────────────────

const kpiCards = [
  {
    label: "Total tickets",
    value: "86,759",
    colorClass: "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 5a2 2 0 0 0-2 2v2.5c0 .6.4 1 1 1a1.5 1.5 0 1 1 0 3 1 1 0 0 0-1 1V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.5a1 1 0 0 0-1-1 1.5 1.5 0 1 1 0-3 1 1 0 0 0 1-1V7a2 2 0 0 0-2-2H4Z" />
      </svg>
    ),
  },
  {
    label: "Pending tickets",
    value: "546",
    colorClass: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M5.5 3a1 1 0 0 0 0 2H7v2.3c0 .7.2 1.3.6 1.8L9 11.9l.1.1v.1L7.5 15a3 3 0 0 0-.6 1.8V19H5.5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H17v-2.3a3 3 0 0 0-.6-1.8l-1.6-2.8v-.2l1.6-2.8a3 3 0 0 0 .6-1.8V5h1.5a1 1 0 1 0 0-2h-13Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Solved tickets",
    value: "80,546",
    colorClass: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2c0-.6-.4-1-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.7 8.7a1 1 0 0 0-1.4-1.4L11 14.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l4-4Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Deleted tickets",
    value: "4,329",
    colorClass: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
      </svg>
    ),
  },
];

type Priority = "High" | "Medium" | "Low";
type TicketStatus = "Pending" | "Solved";

interface Ticket {
  id: string;
  requester: string;
  subject: string;
  priority: Priority;
  agent: string;
  agentAvatar: string;
  date: string;
  status: TicketStatus;
}

const tickets: Ticket[] = [
  { id: "#1846325", requester: "Mark Duan",       subject: "Help with my purchase",        priority: "Medium", agent: "Jese Leos",      agentAvatar: "/images/users/avatar-10.png", date: "02 Mar 2025", status: "Pending" },
  { id: "#1846325", requester: "Donnie Gree",      subject: "Support for Flowbite",         priority: "High",   agent: "Neil Simss",     agentAvatar: "/images/users/avatar-9.png",  date: "03 Mar 2025", status: "Pending" },
  { id: "#1846325", requester: "User123",          subject: "Verify my email and my account",priority: "High",   agent: "Roberta Casas",  agentAvatar: "/images/users/avatar-2.png",  date: "03 Mar 2025", status: "Pending" },
  { id: "#1846328", requester: "Leslie Livingston",subject: "New components",               priority: "Low",    agent: "Roberta Casas",  agentAvatar: "/images/users/avatar-2.png",  date: "07 Mar 2025", status: "Solved"  },
  { id: "#1846329", requester: "User123",          subject: "Figma variants missing",       priority: "High",   agent: "Jese Leos",      agentAvatar: "/images/users/avatar-10.png", date: "07 Mar 2025", status: "Pending" },
  { id: "#1846330", requester: "Bergside LLC",     subject: "How to change colors",         priority: "Medium", agent: "Roberta Casas",  agentAvatar: "/images/users/avatar-2.png",  date: "08 Mar 2025", status: "Solved"  },
  { id: "#1846331", requester: "Faye Drake",       subject: "Invoice issues",               priority: "Medium", agent: "Jese Leos",      agentAvatar: "/images/users/avatar-10.png", date: "08 Mar 2025", status: "Solved"  },
  { id: "#1846332", requester: "Karen Nelson",     subject: "Hello there!",                 priority: "High",   agent: "Jese Leos",      agentAvatar: "/images/users/avatar-10.png", date: "10 Mar 2025", status: "Solved"  },
  { id: "#1846333", requester: "Lana Byrd",        subject: "Pricing questions",            priority: "High",   agent: "Bonnie Green",   agentAvatar: "/images/users/avatar-7.png",  date: "11 Mar 2025", status: "Solved"  },
  { id: "#1846334", requester: "User12345",        subject: "Flowbite license",             priority: "Low",    agent: "Roberta Casas",  agentAvatar: "/images/users/avatar-2.png",  date: "12 Mar 2025", status: "Solved"  },
  { id: "#1846335", requester: "Bergside LLC",     subject: "How to change colors",         priority: "Medium", agent: "Roberta Casas",  agentAvatar: "/images/users/avatar-2.png",  date: "08 Mar 2025", status: "Solved"  },
  { id: "#1846336", requester: "Faye Drake",       subject: "Invoice issues",               priority: "Medium", agent: "Jese Leos",      agentAvatar: "/images/users/avatar-10.png", date: "08 Mar 2025", status: "Solved"  },
  { id: "#1846337", requester: "User12345",        subject: "Flowbite license",             priority: "Low",    agent: "Roberta Casas",  agentAvatar: "/images/users/avatar-2.png",  date: "12 Mar 2025", status: "Solved"  },
  { id: "#1846338", requester: "Bergside LLC",     subject: "Team license pricing",         priority: "Medium", agent: "Roberta Casas",  agentAvatar: "/images/users/avatar-2.png",  date: "08 Mar 2025", status: "Solved"  },
  { id: "#1846339", requester: "Donnie Bruno",     subject: "Flowbite icons license",       priority: "Medium", agent: "Jese Leos",      agentAvatar: "/images/users/avatar-10.png", date: "08 Mar 2025", status: "Solved"  },
];

// ── Badge helpers ──────────────────────────────────────────────────────────

const priorityBadge: Record<Priority, string> = {
  High:   "rounded-sm bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",
  Medium: "rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Low:    "rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300",
};

const SortIcon = () => (
  <svg className="ml-1 inline-block h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
  </svg>
);

const PendingIcon = () => (
  <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M5.5 3a1 1 0 0 0 0 2H7v2.3c0 .7.2 1.3.6 1.8L9 11.9l.1.1v.1L7.5 15a3 3 0 0 0-.6 1.8V19H5.5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H17v-2.3a3 3 0 0 0-.6-1.8l-1.6-2.8v-.2l1.6-2.8a3 3 0 0 0 .6-1.8V5h1.5a1 1 0 1 0 0-2h-13Z" clipRule="evenodd" />
  </svg>
);

const SolvedIcon = () => (
  <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2c0-.6-.4-1-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.7 8.7a1 1 0 0 0-1.4-1.4L11 14.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l4-4Z" clipRule="evenodd" />
  </svg>
);

// ── Row action menu (inline state) ─────────────────────────────────────────

function TicketRowMenu({ idx, onDelete, onArchive, onAssignee }: {
  idx: number;
  onDelete: () => void;
  onArchive: () => void;
  onAssignee: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <td className="relative px-4 py-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        aria-label="Ticket actions"
      >
        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth={4} d="M6 12h0m6 0h0m6 0h0" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-4 z-20 mt-1 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700">
          <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 12 4.7 4.5 9.3-9" />
                </svg>
                Mark as solved
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => { setOpen(false); onAssignee(); }}
                className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.3-2a6 6 0 0 0 0-6A4 4 0 0 1 20 8a4 4 0 0 1-6.7 3Zm2.2 9a4 4 0 0 0 .5-2v-1a6 6 0 0 0-1.5-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.5Z" clipRule="evenodd" />
                </svg>
                Assignee
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => { setOpen(false); onArchive(); }}
                className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1c0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                  <path d="M2 6c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
                </svg>
                Archive
              </button>
            </li>
          </ul>
          <div className="p-2">
            <button
              type="button"
              onClick={() => { setOpen(false); onDelete(); }}
              className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
            >
              <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
              </svg>
              Delete
            </button>
          </div>
        </div>
      )}
    </td>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminSupportTicketsPage() {
  const [showCreate,   setShowCreate]   = useState(false);
  const [showDelete,   setShowDelete]   = useState(false);
  const [showArchive,  setShowArchive]  = useState(false);
  const [showAssignee, setShowAssignee] = useState(false);
  const [filterOpen,   setFilterOpen]   = useState(false);

  return (
    <PreviewShell variant="admin" title="Support Tickets">
      <div className="grid grid-cols-12 gap-4 bg-white dark:bg-gray-900">

        {/* ── Breadcrumb + Title + KPI cards ──────────────────────────── */}
        <div className="col-span-full mx-4 mt-4">
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
                  <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white md:ms-2">Support</a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">All tickets</span>
                </div>
              </li>
            </ol>
          </nav>

          <h1 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Tickets</h1>

          {/* KPI cards */}
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {kpiCards.map((card) => (
              <div key={card.label} className="items-center rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
                <div className={`mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg sm:mb-0 ${card.colorClass}`}>
                  {card.icon}
                </div>
                <div className="ms-3 space-y-1">
                  <h2 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">{card.value}</h2>
                  <p className="text-gray-500 dark:text-gray-400">{card.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Toolbar + Table ─────────────────────────────────────────── */}
        <div className="relative col-span-full">

          {/* Toolbar */}
          <div className="mx-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col-reverse items-center justify-between pb-4 md:flex-row md:space-x-4">

              {/* Left: search + filters + export */}
              <div className="flex w-full flex-col space-y-3 md:flex-row md:items-center md:space-y-0 xl:w-2/3">

                {/* Search */}
                <div className="w-full flex-1 md:mr-4 md:max-w-sm">
                  <label htmlFor="default-search" className="sr-only">Search</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg aria-hidden="true" className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:min-w-64"
                      placeholder="Search ticket"
                    />
                    <button
                      type="button"
                      className="absolute bottom-0 right-0 top-0 rounded-r-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Search
                    </button>
                  </div>
                </div>

                {/* Filters + Export */}
                <div className="flex items-center space-x-4">
                  {/* Filter dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setFilterOpen((v) => !v)}
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
                    {filterOpen && (
                      <div className="absolute left-0 z-20 mt-1 w-72 space-y-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-700">
                        <h5 className="inline-flex items-center font-medium text-gray-500 dark:text-gray-400">Filter</h5>

                        {/* Tags */}
                        <div>
                          <label htmlFor="filter-tags" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Tags</label>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                              </svg>
                            </div>
                            <input type="text" id="filter-tags" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                          </div>
                        </div>

                        {/* Ticket status */}
                        <div>
                          <label htmlFor="filter-ticket-status" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Ticket status</label>
                          <select id="filter-ticket-status" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                            <option>Any</option>
                            <option>Pending</option>
                            <option>Solved</option>
                            <option>Deleted</option>
                          </select>
                        </div>

                        {/* Requester */}
                        <div>
                          <label htmlFor="filter-requester" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Requester</label>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                              </svg>
                            </div>
                            <input type="text" id="filter-requester" placeholder="e.g. Bonnie Green" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                          </div>
                        </div>

                        {/* Type */}
                        <div>
                          <label htmlFor="filter-ticket-type" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Type</label>
                          <select id="filter-ticket-type" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                            <option>Any</option>
                            <option>Question</option>
                            <option>Refund</option>
                            <option>Service request</option>
                            <option>Task</option>
                          </select>
                        </div>

                        {/* Priority */}
                        <div>
                          <label htmlFor="filter-priority-type" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                          <select id="filter-priority-type" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                            <option>Any</option>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                          </select>
                        </div>

                        <div className="mt-6 flex space-x-4">
                          <button
                            type="button"
                            onClick={() => setFilterOpen(false)}
                            className="w-full rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                          >
                            Apply
                          </button>
                          <button
                            type="button"
                            onClick={() => setFilterOpen(false)}
                            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Export CSV */}
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

              {/* Right: Create new ticket */}
              <div className="mb-3 flex w-full shrink-0 flex-col items-stretch justify-end md:mb-0 md:w-auto md:flex-row md:items-center md:space-x-3">
                <button
                  type="button"
                  onClick={() => setShowCreate(true)}
                  className="flex items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
                  </svg>
                  Create new ticket
                </button>
              </div>
            </div>
          </div>

          {/* Show only radio group */}
          <div className="mx-4 flex flex-wrap py-4">
            <div className="mr-4 hidden items-center text-sm font-medium text-gray-900 dark:text-white md:flex">Show only:</div>
            <div className="flex flex-wrap gap-4">
              {["All", "Solved", "Pending", "Archived"].map((label, i) => (
                <div key={label} className="flex items-center">
                  <input
                    defaultChecked={i === 0}
                    id={`radio-${label.toLowerCase()}`}
                    type="radio"
                    name="ticket-filter-group"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label htmlFor={`radio-${label.toLowerCase()}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
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
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">ID</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">
                    Requested by<SortIcon />
                  </th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Subject</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">
                    Priority<SortIcon />
                  </th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">
                    Agent<SortIcon />
                  </th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">
                    Create Date<SortIcon />
                  </th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">
                    Status<SortIcon />
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, idx) => (
                  <tr key={`${ticket.id}-${idx}`} className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input
                          id={`checkbox-${idx}`}
                          type="checkbox"
                          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label htmlFor={`checkbox-${idx}`} className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                      <a href="/preview/admin-support-ticket" className="hover:underline">{ticket.id}</a>
                    </th>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{ticket.requester}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{ticket.subject}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                      <span className={priorityBadge[ticket.priority]}>{ticket.priority}</span>
                    </td>
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                      <div className="mr-3 flex items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={ticket.agentAvatar} alt={ticket.agent} className="mr-3 h-8 w-auto rounded-full" />
                        {ticket.agent}
                      </div>
                    </th>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{ticket.date}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {ticket.status === "Pending" ? (
                        <span className="inline-flex items-center rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                          <PendingIcon />Pending
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                          <SolvedIcon />Solved
                        </span>
                      )}
                    </td>
                    <TicketRowMenu
                      idx={idx}
                      onDelete={() => setShowDelete(true)}
                      onArchive={() => setShowArchive(true)}
                      onAssignee={() => setShowAssignee(true)}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="w-full">
            <div className="relative overflow-hidden">
              <nav
                className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
                aria-label="Table navigation"
              >
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing <span className="font-semibold text-gray-900 dark:text-white">1-15</span> of{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                </span>
                <ul className="inline-flex items-stretch -space-x-px">
                  <li>
                    <a href="#" className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span className="sr-only">Previous</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  {["1", "2", "3", "...", "100"].map((p, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        aria-current={p === "3" ? "page" : undefined}
                        className={
                          p === "3"
                            ? "z-10 flex items-center justify-center border border-primary-300 bg-primary-50 px-3 py-2 text-sm leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            : "flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        }
                      >
                        {p}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#" className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span className="sr-only">Next</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* ── Delete Ticket Modal ──────────────────────────────────────────── */}
      {showDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowDelete(false)}>
          <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="relative rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-5">
              <button
                type="button"
                onClick={() => setShowDelete(false)}
                className="absolute end-2.5 top-2.5 me-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Are you sure?</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">You are about to delete this ticket, this cannot be undone.</p>
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => setShowDelete(false)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setShowDelete(false)}
                  className="inline-flex items-center rounded-lg bg-red-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                >
                  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Create Ticket Modal ──────────────────────────────────────────── */}
      {showCreate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowCreate(false)}>
          <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-5">
              {/* Modal header */}
              <div className="mb-4 flex items-center justify-between rounded-t sm:mb-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add new ticket</h3>
                <button
                  type="button"
                  onClick={() => setShowCreate(false)}
                  className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <form onSubmit={(e) => { e.preventDefault(); setShowCreate(false); }}>
                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  {/* Requester */}
                  <div>
                    <label htmlFor="modal-requester" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Requester</label>
                    <select id="modal-requester" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                      <option>Jese Leos</option>
                      <option>Bergside LLC</option>
                      <option>User1029</option>
                      <option>Leslie Livingston</option>
                      <option>Micheal Gough</option>
                      <option>Karen Nelson</option>
                    </select>
                  </div>
                  {/* Agent */}
                  <div>
                    <label htmlFor="modal-agent" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Agent</label>
                    <select id="modal-agent" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                      <option>Bonnie Green</option>
                      <option>Thomas Lean</option>
                      <option>Roberta Casas</option>
                    </select>
                  </div>
                  {/* Follower */}
                  <div>
                    <label htmlFor="modal-follower" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Follower</label>
                    <select id="modal-follower" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                      <option>Bonnie Green</option>
                      <option>Thomas Lean</option>
                      <option>Roberta Casas</option>
                    </select>
                  </div>
                  {/* Tags */}
                  <div>
                    <label htmlFor="modal-tags" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Tags</label>
                    <input type="text" id="modal-tags" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                  </div>
                  {/* Type */}
                  <div>
                    <label htmlFor="modal-ticket-type" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Type</label>
                    <select id="modal-ticket-type" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                      <option>Question</option>
                      <option>Refund</option>
                      <option>Service request</option>
                      <option>Task</option>
                    </select>
                  </div>
                  {/* Priority */}
                  <div>
                    <label htmlFor="modal-ticket-priority" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                    <select id="modal-ticket-priority" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                      <option>Any</option>
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                  {/* Message */}
                  <div className="col-span-2">
                    <label htmlFor="modal-subject" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea
                      id="modal-subject"
                      rows={4}
                      placeholder="Write your thoughts here..."
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4 sm:mt-5">
                  <button
                    type="button"
                    onClick={() => setShowCreate(false)}
                    className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
                    </svg>
                    Add ticket
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ── Archive Ticket Modal ─────────────────────────────────────────── */}
      {showArchive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowArchive(false)}>
          <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="relative rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-5">
              <button
                type="button"
                onClick={() => setShowArchive(false)}
                className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Archive ticket</h3>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">You are about to archive the following ticket:</p>
              <ul role="list" className="mb-4 space-y-2 text-left text-gray-500 dark:text-gray-400 sm:mb-5">
                <li className="flex items-center space-x-1">
                  <svg className="h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd" />
                  </svg>
                  <span>#1846354 - Mark Duan</span>
                </li>
              </ul>
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => setShowArchive(false)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  No, cancel
                </button>
                <button
                  type="button"
                  onClick={() => setShowArchive(false)}
                  className="flex items-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg className="-ml-0.5 mr-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11.917 9.724 16.5 19 7.5" />
                  </svg>
                  Archive this ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Assignee Modal ───────────────────────────────────────────────── */}
      {showAssignee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowAssignee(false)}>
          <div className="relative w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <div className="relative rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-5">
              <form className="mx-auto mb-4 max-w-sm" onSubmit={(e) => { e.preventDefault(); setShowAssignee(false); }}>
                <label htmlFor="modal-assignee" className="mb-2 flex items-center justify-between text-sm font-medium text-gray-900 dark:text-white">
                  Agent
                  <a href="#" className="text-primary-700 hover:underline dark:text-primary-500">take it</a>
                </label>
                <select
                  id="modal-assignee"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                >
                  <option>Bonnie Green</option>
                  <option>Jese Leos</option>
                  <option>Roberta Casas</option>
                  <option>Neil Sims</option>
                </select>
              </form>
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAssignee(false)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setShowAssignee(false)}
                  className="inline-flex items-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PreviewShell>
  );
}
