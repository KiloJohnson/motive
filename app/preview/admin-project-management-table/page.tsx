"use client";

import { PreviewShell } from "../PreviewShell";

// ── Data ───────────────────────────────────────────────────────────────────

type TaskStatus = "In progress" | "Completed" | "In review" | "Canceled";

type TimeTracking = {
  elapsed: string | null;
  total: string;
  running: boolean;
};

type Task = {
  id: number;
  name: string;
  status: TaskStatus;
  avatars: string[];
  extraUsers?: number;
  progress: number;
  timeTracking: TimeTracking;
  dueDate: string;
};

const tasks: Task[] = [
  {
    id: 1,
    name: "Upload feed and Reels in Instagram",
    status: "In progress",
    avatars: ["10", "1", "3"],
    extraUsers: 5,
    progress: 75,
    timeTracking: { elapsed: "6:47", total: "8:00", running: true },
    dueDate: "23 Nov 2025",
  },
  {
    id: 2,
    name: "Crossplatform analysis",
    status: "Completed",
    avatars: ["6", "7", "2"],
    extraUsers: 2,
    progress: 100,
    timeTracking: { elapsed: null, total: "7:00", running: false },
    dueDate: "03 Nov 2025",
  },
  {
    id: 3,
    name: "Product features analysis",
    status: "In progress",
    avatars: ["8", "1", "3"],
    progress: 50,
    timeTracking: { elapsed: "3:25", total: "8:00", running: true },
    dueDate: "Yesterday",
  },
  {
    id: 4,
    name: "Create user story",
    status: "Completed",
    avatars: ["2", "1", "5"],
    progress: 100,
    timeTracking: { elapsed: null, total: "8:00", running: false },
    dueDate: "23 Nov 2025",
  },
  {
    id: 5,
    name: "Users profile update",
    status: "In progress",
    avatars: ["10", "1", "5"],
    extraUsers: 2,
    progress: 20,
    timeTracking: { elapsed: "4:21", total: "8:00", running: true },
    dueDate: "Yesterday",
  },
  {
    id: 6,
    name: "User flow update",
    status: "Completed",
    avatars: ["6", "7", "3"],
    progress: 100,
    timeTracking: { elapsed: null, total: "7:00", running: false },
    dueDate: "23 Oct 2025",
  },
  {
    id: 7,
    name: "Update design system",
    status: "In review",
    avatars: ["10", "1"],
    progress: 100,
    timeTracking: { elapsed: null, total: "7:00", running: false },
    dueDate: "02 Nov 2025",
  },
  {
    id: 8,
    name: "Create a new logo",
    status: "Completed",
    avatars: ["2", "1", "3"],
    extraUsers: 2,
    progress: 100,
    timeTracking: { elapsed: null, total: "5:00", running: false },
    dueDate: "30 Oct 2025",
  },
  {
    id: 9,
    name: "Screen structure",
    status: "In review",
    avatars: ["8", "1"],
    progress: 100,
    timeTracking: { elapsed: null, total: "2:00", running: false },
    dueDate: "23 Nov 2025",
  },
  {
    id: 10,
    name: "Implement GPT 3",
    status: "In progress",
    avatars: ["10", "1", "5"],
    extraUsers: 2,
    progress: 25,
    timeTracking: { elapsed: "3:11", total: "8:00", running: true },
    dueDate: "Today",
  },
];

// ── Status badge helper ────────────────────────────────────────────────────

function StatusBadge({ status }: { status: TaskStatus }) {
  const map: Record<TaskStatus, string> = {
    "In progress":
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Completed:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "In review":
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    Canceled:
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  };
  return (
    <span
      className={`rounded-sm px-2.5 py-0.5 text-xs font-medium ${map[status]}`}
    >
      {status}
    </span>
  );
}

// ── Progress bar helper ────────────────────────────────────────────────────

function ProgressBar({ value, status }: { value: number; status: TaskStatus }) {
  const color =
    status === "Completed"
      ? "bg-green-500"
      : status === "In review"
      ? "bg-yellow-300"
      : "bg-blue-600";
  return (
    <div>
      <div className="mb-1 flex justify-end">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {value}%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className={`h-1.5 rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

// ── Avatar stack helper ────────────────────────────────────────────────────

function AvatarStack({
  avatars,
  extraUsers,
}: {
  avatars: string[];
  extraUsers?: number;
}) {
  // Use placeholder colored circles since we don't have the Flowbite user images
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-orange-500",
    "bg-pink-500",
  ];
  return (
    <div className="flex -space-x-4 w-28">
      {avatars.map((num, i) => (
        <div
          key={`${num}-${i}`}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white dark:border-gray-800 ${
            colors[i % colors.length]
          }`}
        >
          {num}
        </div>
      ))}
      {extraUsers != null && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-gray-700">
          +{extraUsers}
        </div>
      )}
    </div>
  );
}

// ── Time tracking cell ─────────────────────────────────────────────────────

function TimeTrackingCell({ tt }: { tt: TimeTracking }) {
  // Pause icon SVG (orange = running/paused)
  const PauseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
  // Play icon SVG (green = stopped/playable)
  const PlayIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
      />
    </svg>
  );

  return (
    <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium dark:border-gray-600 dark:bg-gray-700">
      {/* Clock icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        aria-hidden="true"
        className="mr-1 h-4 w-4 text-gray-400"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        />
      </svg>
      {tt.elapsed ? (
        <>
          <span className="text-green-500">{tt.elapsed}</span>
          <span className="text-gray-700 dark:text-gray-200">/{tt.total}</span>
        </>
      ) : (
        <span className="text-gray-700 dark:text-gray-200">{tt.total}</span>
      )}
      <button
        className={`ml-3 rounded-md p-1 text-white ${
          tt.running
            ? "bg-orange-500 hover:bg-orange-700"
            : "bg-green-500 hover:bg-green-700"
        }`}
      >
        {tt.running ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
}

// ── Actions cell ───────────────────────────────────────────────────────────

function ActionsCell({ id }: { id: number }) {
  return (
    <div className="flex items-center gap-2">
      <a
        href="#"
        className="text-xs font-medium text-blue-700 hover:underline dark:text-blue-400"
      >
        Show
      </a>
      <a
        href="#"
        className="text-xs font-medium text-gray-600 hover:underline dark:text-gray-400"
      >
        Edit
      </a>
      <button className="text-xs font-medium text-red-600 hover:underline dark:text-red-400">
        Delete
      </button>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminProjectManagementTablePage() {
  return (
    <PreviewShell variant="admin" title="Project Management — Table">
      <section className="bg-gray-50 py-3 dark:bg-gray-900 sm:py-5">
        <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
          <div className="relative overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">

            {/* ── Toolbar ─────────────────────────────────────────────── */}
            <div className="mx-4 border-b border-gray-200 dark:border-gray-700">

              {/* Heading */}
              <div className="flex items-center justify-between space-x-4 pt-3">
                <div className="flex flex-1 items-center space-x-3">
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    All Tasks
                  </h5>
                </div>
              </div>

              {/* Search + filters + add button */}
              <div className="flex flex-col-reverse items-center justify-between py-3 md:flex-row md:space-x-4">
                {/* Left: search + filter buttons */}
                <div className="flex w-full flex-col space-y-3 md:w-2/3 md:flex-row md:items-center md:space-y-0 lg:w-2/3">

                  {/* Search form */}
                  <form className="relative mr-0 w-full flex-1 md:mr-4 md:max-w-sm">
                    <label htmlFor="task-search" className="sr-only text-sm font-medium text-gray-900 dark:text-white">
                      Search
                    </label>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="task-search"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Search..."
                    />
                    <button
                      type="submit"
                      className="absolute bottom-0 right-0 top-0 rounded-r-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </form>

                  {/* Filter buttons */}
                  <div className="flex items-center space-x-4">

                    {/* Filter dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="mr-2 h-4 w-4 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                          />
                        </svg>
                        Filter
                        <svg
                          className="-mr-1 ml-1.5 h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Configurations dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-2 h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Configurations
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Add new task */}
                <div className="mb-3 flex w-full shrink-0 flex-col items-stretch justify-end md:mb-0 md:w-auto md:flex-row md:items-center md:space-x-3">
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="mr-2 h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      />
                    </svg>
                    Add new task
                  </button>
                </div>
              </div>
            </div>

            {/* ── Show only radio filters ──────────────────────────── */}
            <div className="mx-4 flex flex-wrap pb-3">
              <div className="mr-4 mt-3 hidden items-center text-sm font-medium text-gray-900 dark:text-white md:flex">
                Show only:
              </div>
              <div className="flex flex-wrap">
                {[
                  { id: "all-tasks",    label: "All" },
                  { id: "completed",    label: "Completed tasks" },
                  { id: "in-progress",  label: "Tasks in progress" },
                  { id: "in-review",    label: "Tasks in review" },
                ].map((r) => (
                  <div key={r.id} className="mr-4 mt-3 flex items-center">
                    <input
                      id={r.id}
                      type="radio"
                      name="show-only"
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      htmlFor={r.id}
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {r.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Table ───────────────────────────────────────────────── */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        />
                        <label htmlFor="checkbox-all" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3">Task</th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3">Status</th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3">Users</th>
                    <th scope="col" className="min-w-[14rem] px-4 py-3">Progress</th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3">Preview</th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3">Time Tracking</th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3">Due Date</th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr
                      key={task.id}
                      className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
                    >
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

                      {/* Task name */}
                      <th
                        scope="row"
                        className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                      >
                        {task.name}
                      </th>

                      {/* Status */}
                      <td className="whitespace-nowrap px-4 py-2">
                        <StatusBadge status={task.status} />
                      </td>

                      {/* Users */}
                      <td className="whitespace-nowrap px-4 py-2">
                        <AvatarStack
                          avatars={task.avatars}
                          extraUsers={task.extraUsers}
                        />
                      </td>

                      {/* Progress */}
                      <td className="whitespace-nowrap px-4 py-2 font-medium">
                        <ProgressBar
                          value={task.progress}
                          status={task.status}
                        />
                      </td>

                      {/* Preview link */}
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                        <a
                          href="#"
                          className="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1 h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                          Website
                        </a>
                      </td>

                      {/* Time tracking */}
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900 dark:text-white">
                        <TimeTrackingCell tt={task.timeTracking} />
                      </td>

                      {/* Due date */}
                      <td className="whitespace-nowrap px-4 py-2 text-xs font-medium text-gray-900 dark:text-white">
                        {task.dueDate}
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-2">
                        <ActionsCell id={task.id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Pagination ──────────────────────────────────────────── */}
            <nav
              className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul className="-space-x-px inline-flex items-stretch">
                {/* Prev */}
                <li>
                  <a
                    href="#"
                    className="flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 ml-0 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                {/* Pages */}
                {["1", "2"].map((p) => (
                  <li key={p}>
                    <a
                      href="#"
                      className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {p}
                    </a>
                  </li>
                ))}
                {/* Active page */}
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 flex items-center justify-center border border-blue-300 bg-blue-50 px-3 py-2 text-sm leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                {/* Ellipsis + last */}
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
                    100
                  </a>
                </li>
                {/* Next */}
                <li>
                  <a
                    href="#"
                    className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </section>
    </PreviewShell>
  );
}
