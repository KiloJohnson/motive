"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";

// ── SVG icon helpers ────────────────────────────────────────────────────────

const FlagIcon = () => (
  <svg className="me-1.5 hidden h-6 w-6 shrink-0 sm:flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 14v7M5 5v9.5c5.6-5.5 8.4 2.7 14 0V4.8c-5.6 2.7-8.4-5.5-14 0Z" />
  </svg>
);

const DotsIcon = () => (
  <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth={3} d="M6 12h0m6 0h0m6 0h0" />
  </svg>
);

const PlusIcon = ({ size = "h-4 w-4" }: { size?: string }) => (
  <svg className={`${size}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
  </svg>
);

const HomeIcon = () => (
  <svg className="me-2.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="mx-1 h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
  </svg>
);

const EditIcon = () => (
  <>
    <path fillRule="evenodd" d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z" clipRule="evenodd" />
  </>
);

const DuplicateIcon = () => (
  <>
    <path fillRule="evenodd" d="M8 12.7a2 2 0 0 1-1 .3H3v6c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2h-2a4 4 0 0 1-4-4v-2.3ZM7 11V7a2 2 0 0 0-1 .7l-2.5 2.9a2 2 0 0 0-.3.4H7Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M14 3v4h-3.8c0-.2.2-.3.3-.4l2.4-2.9a2 2 0 0 1 1.1-.6Zm2 0v4a2 2 0 0 1-2 2h-4v6c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Z" clipRule="evenodd" />
  </>
);

const FolderIcon = () => (
  <path fillRule="evenodd" d="M3 6c0-1.1.9-2 2-2h5.5a2 2 0 0 1 1.6.7L14 7H3V6Zm0 3v10c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V9H3Z" clipRule="evenodd" />
);

const TrashIcon = () => (
  <path fillRule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
);

const ClipboardIcon = () => (
  <path fillRule="evenodd" d="M8 3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Zm2 5c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clipRule="evenodd" />
);

// ── Data ───────────────────────────────────────────────────────────────────

type Priority = "high" | "medium" | "low";

interface Task {
  id: string;
  title: string;
  priority: Priority;
}

const taskDays: { date: string; tasks: Task[] }[] = [
  {
    date: "Tuesday, 1 August 2025",
    tasks: [
      { id: "t1", title: "Change the homepage design for the Flowbite website.", priority: "high" },
      { id: "t2", title: "Redesign the company's website to enhance user experience.", priority: "high" },
      { id: "t3", title: "Design the packaging for a new product, considering both physical packaging and any digital representations.", priority: "medium" },
      { id: "t4", title: "Develop a series of graphics and visual content for a social media campaign.", priority: "medium" },
      { id: "t5", title: "Review and enhance the user interface of Flowbite chat.", priority: "low" },
    ],
  },
  {
    date: "Wednesday, 2 August 2025",
    tasks: [
      { id: "t6", title: "Change the homepage design for the Flowbite website.", priority: "medium" },
      { id: "t7", title: "Redesign the company's website to enhance user experience.", priority: "high" },
    ],
  },
  {
    date: "Thursday, 3 August 2025",
    tasks: [
      { id: "t8", title: "Change the homepage design for the Flowbite website.", priority: "high" },
      { id: "t9", title: "Redesign the company's website to enhance user experience.", priority: "low" },
      { id: "t10", title: "Design the packaging for a new product, considering both physical packaging and any digital representations.", priority: "low" },
    ],
  },
];

const flagColor: Record<Priority, string> = {
  high:   "text-red-600 dark:text-red-500",
  medium: "text-orange-400",
  low:    "text-green-500 dark:text-green-400",
};

const sidebarDays = [
  { date: "2025-08-01", label: "1 Aug",  tasks: 4,  hasTask: true  },
  { date: "2025-08-02", label: "2 Aug",  tasks: 1,  hasTask: true  },
  { date: "2025-08-03", label: "3 Aug",  tasks: 10, hasTask: true  },
  { date: "2025-08-04", label: "4 Aug",  tasks: 0,  hasTask: false },
  { date: "2025-08-05", label: "5 Aug",  tasks: 2,  hasTask: true  },
  { date: "2025-08-06", label: "6 Aug",  tasks: 14, hasTask: true  },
  { date: "2025-08-07", label: "7 Aug",  tasks: 8,  hasTask: true  },
  { date: "2025-08-08", label: "8 Aug",  tasks: 0,  hasTask: false },
  { date: "2025-08-09", label: "9 Aug",  tasks: 6,  hasTask: true  },
  { date: "2025-08-10", label: "10 Aug", tasks: 8,  hasTask: true  },
  { date: "2025-08-11", label: "11 Aug", tasks: 5,  hasTask: true  },
  { date: "2025-08-12", label: "12 Aug", tasks: 0,  hasTask: false },
  { date: "2025-08-13", label: "13 Aug", tasks: 8,  hasTask: true  },
  { date: "2025-08-14", label: "14 Aug", tasks: 5,  hasTask: true  },
  { date: "2025-08-15", label: "15 Aug", tasks: 0,  hasTask: false },
  { date: "2025-08-16", label: "16 Aug", tasks: 3,  hasTask: true  },
  { date: "2025-08-17", label: "17 Aug", tasks: 0,  hasTask: false },
];

// ── Sub-components ─────────────────────────────────────────────────────────

function TaskDropdownMenu({ taskId }: { taskId: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        aria-label="Task actions"
      >
        <DotsIcon />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 z-20 w-40 divide-y divide-gray-100 rounded-sm bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700">
            <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li>
                <button
                  type="button"
                  className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <EditIcon />
                  </svg>
                  Edit
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <DuplicateIcon />
                  </svg>
                  Duplicate
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <FolderIcon />
                  </svg>
                  Go to project
                </button>
              </li>
            </ul>
            <div className="p-2">
              <button
                type="button"
                className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                onClick={() => setOpen(false)}
              >
                <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <TrashIcon />
                </svg>
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function TaskCard({ task }: { task: Task }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="mb-2 flex items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6">
      <div className="me-4 flex items-center sm:me-0">
        <div className="me-4 flex items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked((v) => !v)}
            className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
          />
          <label className="sr-only">Select task</label>
        </div>
        <span className={flagColor[task.priority]}>
          <FlagIcon />
        </span>
        <h3 className={`text-sm font-medium sm:text-base ${checked ? "line-through text-gray-400 dark:text-gray-500" : "text-gray-900 dark:text-white"}`}>
          {task.title}
        </h3>
      </div>
      <TaskDropdownMenu taskId={task.id} />
    </div>
  );
}

function AddNewTaskButton() {
  return (
    <button
      type="button"
      className="mt-4 flex w-full items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-100 py-2 font-medium text-gray-500 hover:border-primary-700 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg className="me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
      </svg>
      Add new task
    </button>
  );
}

// ── New Task Modal ────────────────────────────────────────────────────────

function NewTaskModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/40 p-4">
      <div className="relative max-h-full w-full max-w-xl">
        <div className="relative rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-5">
          <div className="mb-4 flex items-center justify-between dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add new task</h3>
            <button
              type="button"
              onClick={onClose}
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            {/* Title */}
            <div>
              <label htmlFor="new-title" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Title</label>
              <input
                type="text"
                id="new-title"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Add title here"
                required
              />
            </div>
            {/* Description */}
            <div>
              <label htmlFor="new-description" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <div className="mb-4 w-full rounded-lg border border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700">
                <div className="flex items-center justify-between border-b border-gray-300 p-1 dark:border-gray-600">
                  <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
                    <div className="flex items-center space-x-1 sm:pr-2">
                      {[
                        "M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8",
                      ].map((d, i) => (
                        <button key={i} type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                  <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5" />
                    </svg>
                    <span className="sr-only">Full screen</span>
                  </button>
                </div>
                <div className="rounded-b-lg bg-gray-50 px-4 py-2 dark:bg-gray-700">
                  <textarea
                    id="new-description"
                    rows={6}
                    className="block w-full border-0 bg-gray-50 px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                    placeholder="Write a description here"
                  />
                </div>
              </div>
            </div>
            {/* Assignee & Add to calendar */}
            <div className="items-start justify-between sm:flex">
              <div>
                <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Assignee &amp; Communication</div>
                <div className="mb-4 flex items-center space-x-4 sm:mb-0">
                  <div className="flex -space-x-4">
                    {["HE", "RB", "BG"].map((init, i) => (
                      <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-400 text-xs font-medium text-white dark:border-gray-800">
                        {init}
                      </div>
                    ))}
                    <a className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800" href="#">+9</a>
                  </div>
                  <button type="button" className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg className="-ml-1 mr-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
                    </svg>
                    Add member
                  </button>
                </div>
              </div>
              <button type="button" className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 sm:mt-0 sm:w-auto">
                <svg className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
                Add to calendar
              </button>
            </div>
            {/* Priority */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Priority</label>
              <div className="flex space-x-4">
                {["High", "Medium", "Low", "Lowest"].map((p, i) => (
                  <div key={p} className="flex items-center">
                    <input
                      id={`priority-${i}-new`}
                      type="checkbox"
                      defaultChecked={p === "Low"}
                      className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    />
                    <label htmlFor={`priority-${i}-new`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{p}</label>
                  </div>
                ))}
              </div>
            </div>
            {/* Date range */}
            <div className="mb-4 flex items-center space-x-4">
              {[{ label: "Start date", id: "startDate-new", placeholder: "Start date" }, { label: "Due date", id: "dueDate-new", placeholder: "End date" }].map((f) => (
                <div key={f.id} className="w-full">
                  <label htmlFor={f.id} className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">{f.label}</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                      <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      id={f.id}
                      type="text"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder={f.placeholder}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Deadline notification */}
            <div>
              <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Deadline notification</div>
              <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                <div className="w-full">
                  <label htmlFor="reminder-type-new" className="sr-only">Reminder type</label>
                  <select id="reminder-type-new" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500">
                    <option>Notification</option>
                    <option>Alarm</option>
                    <option>Email</option>
                    <option>SMS</option>
                  </select>
                </div>
                <div className="w-full">
                  <label htmlFor="reminder-counter-new" className="sr-only">Counter</label>
                  <input type="number" id="reminder-counter-new" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="1" />
                </div>
                <div className="w-full">
                  <label htmlFor="reminder-length-new" className="sr-only">Length</label>
                  <select id="reminder-length-new" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500">
                    <option>Days</option>
                    <option>Weeks</option>
                    <option>Months</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="mt-4 flex items-center space-x-4 sm:mt-5">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                style={{ backgroundColor: "#1A56DB" }}
              >
                <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
                </svg>
                Add new task
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ── Delete Task Modal ─────────────────────────────────────────────────────

function DeleteTaskModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="relative w-full max-w-md">
        <div className="relative rounded-lg bg-white p-4 text-center shadow-sm dark:bg-gray-800 sm:p-5">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <svg className="mx-auto mb-3.5 h-11 w-11 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
          </svg>
          <p className="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this task?</p>
          <div className="flex items-center justify-center space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              No, cancel
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-red-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700"
            >
              Yes, I'm sure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Monthly Tasks Sidebar ─────────────────────────────────────────────────

function MonthlyTasksSidebar() {
  return (
    <aside className="hidden xl:block fixed right-0 h-screen w-96 border-l border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 overflow-y-auto" style={{ top: "56px" }}>
      <div className="px-3 py-5">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="rounded-lg border border-gray-200 bg-white p-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
            </svg>
          </button>
          <h3 className="font-medium text-gray-900 dark:text-white">August 2025</h3>
          <button
            type="button"
            className="rounded-lg border border-gray-200 bg-white p-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        <ol className="space-y-2 py-6">
          {sidebarDays.map((day) => (
            <li key={day.date} className="flex items-center border-b border-gray-200 pb-2 dark:border-gray-700">
              <div className="me-2 w-20 rounded-lg bg-gray-100 py-1 dark:bg-gray-700">
                <div className="text-center">
                  <time dateTime="2025" className="w-20 text-sm font-normal text-gray-500 dark:text-gray-400">2025</time>
                </div>
                <div className="text-center">
                  <time dateTime={day.date} className="w-20 text-sm font-medium text-gray-900 dark:text-white">{day.label}</time>
                </div>
              </div>
              {day.hasTask ? (
                <div className="flex grow items-start rounded-lg bg-primary-600 p-2 text-white" style={{ backgroundColor: "#1A56DB" }}>
                  <svg className="me-1.5 h-3.5 w-3.5 shrink-0 mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M8 3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Zm2 5c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm space-y-1.5">
                    <p className="leading-none">
                      You have <span className="font-semibold">{day.tasks} {day.tasks === 1 ? "task" : "tasks"}</span> today
                    </p>
                    <a href="#" className="font-medium hover:underline inline-block">See all</a>
                  </div>
                </div>
              ) : (
                <div className="flex grow items-center rounded-lg bg-gray-100 p-2 text-gray-900 dark:bg-gray-700 dark:text-white">
                  <svg className="me-1.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M8 3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Zm2 5c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm space-y-1.5">
                    <p>No tasks for today</p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminTodoUpcomingPage() {
  const [newTaskOpen, setNewTaskOpen]       = useState(false);
  const [deleteTaskOpen, setDeleteTaskOpen] = useState(false);

  return (
    <PreviewShell variant="admin" title="To-Do Upcoming Tasks">

      {/* Header bar */}
      <div className="mb-4 items-center justify-between border-b border-gray-200 bg-white px-4 py-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div>
          {/* Breadcrumb */}
          <nav className="mb-4 flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">
                  <HomeIcon />
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon />
                  <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white md:ms-2">Projects</a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRightIcon />
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Upcoming tasks</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:mb-0">Upcoming tasks</h1>
        </div>
        <button
          type="button"
          onClick={() => setNewTaskOpen(true)}
          className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
          style={{ backgroundColor: "#1A56DB" }}
        >
          <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
          </svg>
          Add new task
        </button>
      </div>

      {/* Main content area — offset right for sidebar on xl */}
      <div className="space-y-4 px-4 pb-8 xl:me-96">
        {taskDays.map((day) => (
          <div key={day.date}>
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{day.date}</h2>
            {day.tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
            <AddNewTaskButton />
          </div>
        ))}
      </div>

      {/* Right sidebar — monthly tasks overview */}
      <MonthlyTasksSidebar />

      {/* Modals */}
      <NewTaskModal    open={newTaskOpen}    onClose={() => setNewTaskOpen(false)} />
      <DeleteTaskModal open={deleteTaskOpen} onClose={() => setDeleteTaskOpen(false)} />

    </PreviewShell>
  );
}
