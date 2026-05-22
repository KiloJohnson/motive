"use client";

import { PreviewShell } from "../PreviewShell";

// ── SVG helpers ───────────────────────────────────────────────────────────────

const HomeIcon = () => (
  <svg className="me-2.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd" />
  </svg>
);

const ChevronRight = () => (
  <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
  </svg>
);

const PlusIcon = () => (
  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
  </svg>
);

const SearchIcon = () => (
  <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
  </svg>
);

const ChevronDown = () => (
  <svg className="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
  </svg>
);

const DotsIcon = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="4" d="M6 12h0m6 0h0m6 0h0" />
  </svg>
);

const ClockIcon = () => (
  <svg className="me-1.5 h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z" clipRule="evenodd" />
  </svg>
);

const PauseIcon = () => (
  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M8 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z" clipRule="evenodd" />
  </svg>
);

const PlayIcon = () => (
  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="mr-1 h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2" />
  </svg>
);

const EditIcon = () => (
  <>
    <path fillRule="evenodd" d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z" clipRule="evenodd" />
  </>
);

const ViewIcon = () => (
  <path fillRule="evenodd" d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
);

const TrashIcon = () => (
  <path fillRule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
);

// ── Static data ───────────────────────────────────────────────────────────────

type Project = {
  name: string;
  status: "In progress" | "Completed" | "In review";
  avatars: string[];
  overflow?: string;
  progress: number;
  progressColor: string;
  preview: boolean;
  timeTracked?: string;
  timeTotal: string;
  timerRunning: boolean;
  dueDate: string;
};

const AVATAR_BASE = "/images/users/";

const projects: Project[] = [
  {
    name: "Upload feed and Reels in Instagram",
    status: "In progress",
    avatars: ["avatar-10.png", "avatar-1.png", "avatar-3.png"],
    overflow: "+5",
    progress: 75,
    progressColor: "bg-blue-600",
    preview: true,
    timeTracked: "6:47",
    timeTotal: "8:00",
    timerRunning: false,
    dueDate: "23 Nov 2025",
  },
  {
    name: "Crossplatform analysis",
    status: "Completed",
    avatars: ["avatar-6.png", "avatar-7.png", "avatar-2.png"],
    overflow: "+2",
    progress: 100,
    progressColor: "bg-green-500",
    preview: true,
    timeTotal: "7:00",
    timerRunning: true,
    dueDate: "03 Nov 2025",
  },
  {
    name: "Product features analysis",
    status: "In progress",
    avatars: ["avatar-8.png", "avatar-1.png", "avatar-3.png"],
    progress: 50,
    progressColor: "bg-blue-600",
    preview: true,
    timeTracked: "3:25",
    timeTotal: "8:00",
    timerRunning: false,
    dueDate: "Yesterday",
  },
  {
    name: "Create user story",
    status: "Completed",
    avatars: ["avatar-2.png", "avatar-1.png", "avatar-5.png"],
    progress: 100,
    progressColor: "bg-green-500",
    preview: false,
    timeTotal: "8:00",
    timerRunning: true,
    dueDate: "23 Nov 2025",
  },
  {
    name: "Users profile update",
    status: "In progress",
    avatars: ["avatar-10.png", "avatar-1.png", "avatar-5.png"],
    overflow: "+2",
    progress: 20,
    progressColor: "bg-blue-600",
    preview: true,
    timeTracked: "4:21",
    timeTotal: "8:00",
    timerRunning: false,
    dueDate: "Yesterday",
  },
  {
    name: "User flow update",
    status: "Completed",
    avatars: ["avatar-6.png", "avatar-7.png", "avatar-3.png"],
    progress: 100,
    progressColor: "bg-green-500",
    preview: false,
    timeTotal: "7:00",
    timerRunning: true,
    dueDate: "23 Oct 2025",
  },
  {
    name: "Update design system",
    status: "In review",
    avatars: ["avatar-10.png", "avatar-1.png"],
    progress: 100,
    progressColor: "bg-yellow-300",
    preview: false,
    timeTotal: "7:00",
    timerRunning: true,
    dueDate: "02 Nov 2025",
  },
  {
    name: "Create a new logo",
    status: "Completed",
    avatars: ["avatar-2.png", "avatar-1.png", "avatar-3.png"],
    overflow: "+2",
    progress: 100,
    progressColor: "bg-green-500",
    preview: true,
    timeTotal: "5:00",
    timerRunning: true,
    dueDate: "30 Oct 2025",
  },
  {
    name: "Screen structure",
    status: "In review",
    avatars: ["avatar-8.png", "avatar-1.png"],
    progress: 100,
    progressColor: "bg-yellow-300",
    preview: true,
    timeTotal: "2:00",
    timerRunning: true,
    dueDate: "23 Nov 2025",
  },
  {
    name: "Implement GPT 3.0 in Flowbite",
    status: "In progress",
    avatars: ["avatar-10.png", "avatar-1.png", "avatar-5.png"],
    overflow: "+2",
    progress: 25,
    progressColor: "bg-blue-600",
    preview: false,
    timeTracked: "3:11",
    timeTotal: "8:00",
    timerRunning: false,
    dueDate: "Today",
  },
  {
    name: "User flow update",
    status: "Completed",
    avatars: ["avatar-6.png", "avatar-7.png", "avatar-3.png"],
    progress: 100,
    progressColor: "bg-green-500",
    preview: false,
    timeTotal: "7:00",
    timerRunning: true,
    dueDate: "23 Oct 2025",
  },
  {
    name: "Update design system",
    status: "In review",
    avatars: ["avatar-10.png", "avatar-1.png"],
    progress: 100,
    progressColor: "bg-yellow-300",
    preview: false,
    timeTotal: "7:00",
    timerRunning: true,
    dueDate: "02 Nov 2025",
  },
  {
    name: "Create a new logo",
    status: "Completed",
    avatars: ["avatar-2.png", "avatar-1.png", "avatar-3.png"],
    overflow: "+2",
    progress: 100,
    progressColor: "bg-green-500",
    preview: true,
    timeTotal: "5:00",
    timerRunning: true,
    dueDate: "30 Oct 2025",
  },
  {
    name: "Refactor Flowbite React Library",
    status: "In progress",
    avatars: ["avatar-8.png", "avatar-1.png"],
    progress: 80,
    progressColor: "bg-yellow-300",
    preview: true,
    timeTotal: "2:00",
    timerRunning: true,
    dueDate: "23 Nov 2025",
  },
  {
    name: "Implement GPT 3",
    status: "In progress",
    avatars: ["avatar-10.png", "avatar-1.png", "avatar-5.png"],
    overflow: "+2",
    progress: 25,
    progressColor: "bg-blue-600",
    preview: false,
    timeTracked: "3:11",
    timeTotal: "8:00",
    timerRunning: false,
    dueDate: "Today",
  },
];

const statusBadge: Record<string, string> = {
  "In progress": "rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "Completed":   "rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",
  "In review":   "rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
};

// ── Row action dropdown (static) ──────────────────────────────────────────────

function RowActions() {
  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <DotsIcon />
      </button>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AdminAllProjectsPage() {
  return (
    <PreviewShell variant="admin" title="All Projects">
      <div className="grid grid-cols-12 gap-4 bg-white dark:bg-gray-900">

        {/* ── Header row: breadcrumb + add button ── */}
        <div className="col-span-full mx-4 mt-4 items-center justify-between sm:flex">
          <div className="mb-4 sm:mb-0">
            {/* Breadcrumb */}
            <nav className="mb-4 flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white">
                    <HomeIcon />
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight />
                    <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white md:ms-2">Project management</a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <ChevronRight />
                    <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">All projects</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">All projects</h1>
          </div>

          {/* Add new project button */}
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          >
            <PlusIcon />
            Add new project
          </button>
        </div>

        {/* ── Filters + table section ── */}
        <div className="relative col-span-full">
          <div className="px-4">

            {/* Filter controls */}
            <div className="grid w-full grid-cols-2 gap-4 pb-4 md:grid-cols-3 lg:grid-cols-6">
              {/* Search */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Search for projects"
                />
              </div>

              {/* Status */}
              <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500">
                <option>Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>

              {/* Number of users */}
              <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500">
                <option>Number of users</option>
                <option value="1">1</option>
                <option value="5">1-5</option>
                <option value="10">5-10</option>
                <option value="20">10-20</option>
              </select>

              {/* Progress */}
              <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500">
                <option>Progress</option>
                <option value="done">Done</option>
                <option value="almost-done">Almost done</option>
                <option value="half-done">Half done</option>
                <option value="just-started">Just started</option>
              </select>

              {/* Preview link */}
              <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500">
                <option>Preview link</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              {/* Due date */}
              <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500">
                <option>Due date</option>
                <option value="day">This day</option>
                <option value="week">This week</option>
                <option value="month">This month</option>
              </select>
            </div>

            {/* Show filter radio row + Actions dropdown */}
            <div className="block w-full items-center justify-between border-t border-gray-200 py-3 dark:border-gray-800 sm:flex">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-sm font-medium text-gray-900 dark:text-white">Show:</div>
                {[
                  { id: "all-users",   label: "All",         defaultChecked: true  },
                  { id: "sort-role",   label: "Completed",   defaultChecked: false },
                  { id: "sort-type",   label: "In progress", defaultChecked: false },
                  { id: "sort-status", label: "In review",   defaultChecked: false },
                ].map((opt) => (
                  <div key={opt.id} className="flex items-center">
                    <input
                      id={opt.id}
                      type="radio"
                      name="show-only"
                      defaultChecked={opt.defaultChecked}
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label htmlFor={opt.id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{opt.label}</label>
                  </div>
                ))}
              </div>

              {/* Actions button */}
              <div className="mt-4 sm:mt-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                >
                  Actions
                  <ChevronDown />
                </button>
              </div>
            </div>
          </div>

          {/* ── Table ── */}
          <div className="overflow-x-auto relative">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      />
                      <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">Name</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Status</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Users</th>
                  <th scope="col" className="min-w-56 px-4 py-3 font-semibold">Progress</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Preview</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Time Tracking</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Due Date</th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                    {/* Checkbox */}
                    <td className="w-4 px-4 py-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        />
                        <label className="sr-only">checkbox</label>
                      </div>
                    </td>

                    {/* Name */}
                    <th scope="row" className="whitespace-nowrap px-4 py-2">
                      <a href="#" className="font-medium text-gray-900 hover:underline dark:text-white">{p.name}</a>
                    </th>

                    {/* Status */}
                    <td className="whitespace-nowrap px-4 py-2">
                      <span className={statusBadge[p.status]}>{p.status}</span>
                    </td>

                    {/* Users (avatar group) */}
                    <td className="whitespace-nowrap px-4 py-2">
                      <div className="flex w-28 -space-x-4">
                        {p.avatars.map((a, ai) => (
                          <img
                            key={ai}
                            src={`${AVATAR_BASE}${a}`}
                            alt=""
                            className="h-10 w-10 shrink-0 rounded-full border-2 border-white dark:border-gray-800"
                          />
                        ))}
                        {p.overflow && (
                          <a
                            href="#"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                          >
                            {p.overflow}
                          </a>
                        )}
                      </div>
                    </td>

                    {/* Progress bar */}
                    <td className="whitespace-nowrap px-4 py-2 font-medium">
                      <div className="mb-1 flex justify-end">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{p.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div className={`h-1.5 rounded-full ${p.progressColor}`} style={{ width: `${p.progress}%` }} />
                      </div>
                    </td>

                    {/* Preview link */}
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                      {p.preview ? (
                        <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-500">
                          <ExternalLinkIcon />
                          Website
                        </a>
                      ) : (
                        <span className="me-2 rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">None</span>
                      )}
                    </td>

                    {/* Time tracking */}
                    <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                      <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white py-1 pe-1 ps-2 text-xs font-medium dark:border-gray-600 dark:bg-gray-700">
                        <ClockIcon />
                        {p.timeTracked ? (
                          <>
                            <span className="text-green-500">{p.timeTracked}</span>
                            /{p.timeTotal}
                          </>
                        ) : (
                          p.timeTotal
                        )}
                        {p.timerRunning ? (
                          <button className="ms-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                            <PlayIcon />
                          </button>
                        ) : (
                          <button className="ml-3 rounded-md bg-orange-500 p-1 text-white hover:bg-orange-700">
                            <PauseIcon />
                          </button>
                        )}
                      </div>
                    </td>

                    {/* Due date */}
                    <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">{p.dueDate}</td>

                    {/* Row actions */}
                    <td className="px-4 py-2">
                      <RowActions />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Pagination ── */}
          <div className="w-full">
            <div className="relative overflow-hidden">
              <nav
                className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
                aria-label="Table navigation"
              >
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing <span className="font-semibold text-gray-900 dark:text-white">1-15</span> of{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">146</span>
                </span>
                <ul className="inline-flex items-stretch -space-x-px">
                  {/* Previous */}
                  <li>
                    <a
                      href="#"
                      className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Previous</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  {/* Pages */}
                  {["1", "2"].map((page) => (
                    <li key={page}>
                      <a
                        href="#"
                        className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        {page}
                      </a>
                    </li>
                  ))}
                  {/* Current page */}
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 flex items-center justify-center border border-blue-300 bg-blue-50 px-3 py-2 text-sm leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  {/* Ellipsis + last page */}
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      ...
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      10
                    </a>
                  </li>
                  {/* Next */}
                  <li>
                    <a
                      href="#"
                      className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
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
    </PreviewShell>
  );
}
