"use client";

import React from "react";
import { PreviewShell } from "../PreviewShell";

// ── Incident data ─────────────────────────────────────────────────────────────

type IncidentType = "maintenance" | "warning" | "ok" | "error";

interface Incident {
  date: string;
  title: string;
  type: IncidentType;
  body: string | React.ReactNode;
  viewMore?: boolean;
}

const NOVEMBER: Incident[] = [
  {
    date: "November 25",
    title: "Scheduled maintenance for data migrations",
    type: "maintenance",
    body: "The scheduled maintenance has been completed.",
    viewMore: true,
  },
  {
    date: "November 21",
    title: "Intermittent issues with package install",
    type: "warning",
    body: "This incident has been resolved.",
    viewMore: true,
  },
  {
    date: "November 14",
    title: "No concerns",
    type: "ok",
    body: "No known issues at this time.",
  },
];

const OCTOBER: Incident[] = [
  {
    date: "October 30",
    title: "Scheduled maintenance for data migrations",
    type: "maintenance",
    body: "The scheduled maintenance has been completed.",
    viewMore: true,
  },
  {
    date: "October 18",
    title: "Disruption with Flowbite Search",
    type: "warning",
    body: (
      <>
        Between{" "}
        <span className="font-medium text-gray-900 dark:text-white">
          13:30 and 15:00 UTC
        </span>
        , repository searches were timing out for most users. The ongoing
        efforts from the similar incident last week helped uncover the main
        contributing factors. We have deployed short-term mitigations and
        identified longer term work to proactively identify and limit
        resource-intensive searches.
      </>
    ),
    viewMore: true,
  },
  {
    date: "October 08",
    title: "Disruption with some Flowbite services",
    type: "error",
    body: (
      <>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 md:text-base">
          On{" "}
          <span className="font-medium text-gray-900 dark:text-white">
            October 02th, 2025 from 10:43 UTC to 11:26 UTC
          </span>{" "}
          Flowbite customers in the Central India region were unable to create
          new Flowbite. Resumes were not impacted. Additionally, there was no
          impact to customers in other regions.
        </p>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 md:text-base">
          The cause was traced to storage capacity constraints in the region
          and was mitigated by temporarily redirecting create requests to other
          regions. Afterwards, additional storage capacity was added to the
          region and traffic was routed back.
        </p>
      </>
    ),
    viewMore: true,
  },
  {
    date: "October 03",
    title: "No concerns",
    type: "ok",
    body: "No known issues at this time.",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const titleColor: Record<IncidentType, string> = {
  maintenance: "text-[#1A56DB] dark:text-blue-500",
  warning:     "text-yellow-500 dark:text-yellow-400",
  ok:          "text-green-500 dark:text-yellow-400",
  error:       "text-red-600 dark:text-red-500",
};

// SVG: eye / view-more icon
function EyeIcon() {
  return (
    <svg
      className="-ms-0.5 me-1.5 h-4 w-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ViewMoreButton() {
  return (
    <a
      href="#"
      className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-[#1A56DB] focus:z-10 focus:text-[#1A56DB] focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
    >
      <EyeIcon />
      View more
    </a>
  );
}

function IncidentTimeline({ items }: { items: Incident[] }) {
  return (
    <ol className="relative ms-1 border-s border-gray-200 dark:border-gray-700">
      {items.map((item, i) => (
        <li key={i} className="mb-10 ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
          <time className="text-sm leading-none text-gray-500 dark:text-gray-400">
            {item.date}
          </time>
          <h3 className={`my-2 font-medium ${titleColor[item.type]}`}>
            {item.title}
          </h3>
          {typeof item.body === "string" ? (
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 md:text-base">
              {item.body}
            </p>
          ) : (
            item.body
          )}
          {item.viewMore && <ViewMoreButton />}
        </li>
      ))}
    </ol>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AdminStatusHistoryPage() {
  return (
    <PreviewShell variant="admin" title="Status History">
      <section className="bg-gray-50 dark:bg-gray-900 min-h-full">
        <div className="mx-auto max-w-screen-lg px-4 py-4 md:py-12 lg:px-0">

          {/* ── Header row ─────────────────────────────────────────────── */}
          <div className="mb-4 items-end justify-between sm:flex md:mb-6">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-4 flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#1A56DB] dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="me-2.5 h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg
                        className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                      <a
                        href="#"
                        className="ms-1 text-sm font-medium text-gray-700 hover:text-[#1A56DB] dark:text-gray-400 dark:hover:text-white md:ms-2"
                      >
                        Status
                      </a>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg
                        className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                      <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                        flowbite.com
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Incident History
              </h1>
            </div>

            {/* Date picker */}
            <div className="relative mb-4 w-full sm:mb-0 sm:w-auto">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 ps-9 text-sm text-gray-900 focus:border-[#1A56DB] focus:ring-[#1A56DB] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-[#1A56DB] dark:focus:ring-[#1A56DB] sm:w-auto"
                placeholder="Select date"
              />
            </div>
          </div>

          {/* ── December 2025 — no incidents ───────────────────────────── */}
          <div className="mb-4 rounded-lg bg-white p-4 shadow-xs dark:bg-gray-800 md:p-6">
            <h4 className="mb-4 border-b border-gray-200 pb-4 text-lg font-semibold text-gray-900 dark:border-gray-700 dark:text-white">
              December, 2025
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 md:text-base">
              No incidents reported until today.
            </p>
          </div>

          {/* ── November 2025 ──────────────────────────────────────────── */}
          <div className="mb-4 rounded-lg bg-white p-4 shadow-xs dark:bg-gray-800 md:p-6">
            <h4 className="mb-4 border-b border-gray-200 pb-4 text-lg font-semibold text-gray-900 dark:border-gray-700 dark:text-white">
              November 2025
            </h4>
            <IncidentTimeline items={NOVEMBER} />
          </div>

          {/* ── October 2025 ───────────────────────────────────────────── */}
          <div className="mb-4 rounded-lg bg-white p-4 shadow-xs dark:bg-gray-800 md:p-6">
            <h4 className="mb-4 border-b border-gray-200 pb-4 text-lg font-semibold text-gray-900 dark:border-gray-700 dark:text-white">
              October 2025
            </h4>
            <IncidentTimeline items={OCTOBER} />
          </div>

          {/* ── September 2025 — no incidents ──────────────────────────── */}
          <div className="mb-4 rounded-lg bg-white p-4 shadow-xs dark:bg-gray-800 md:p-6">
            <h4 className="mb-4 border-b border-gray-200 pb-4 text-lg font-semibold text-gray-900 dark:border-gray-700 dark:text-white">
              September, 2025
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 md:text-base">
              No incidents reported until today.
            </p>
          </div>

          {/* ── Footer row ─────────────────────────────────────────────── */}
          <div className="mt-4 items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800 sm:flex md:mt-6">
            <p className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-0">
              Check the{" "}
              <a
                href="#"
                className="font-medium text-[#1A56DB] hover:underline dark:text-blue-500"
              >
                uptime page
              </a>{" "}
              for a more comprehensive view.
            </p>
            <a
              href="#"
              className="flex items-center font-medium text-[#1A56DB] hover:underline dark:text-blue-500"
            >
              Current status
              <svg
                className="ms-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </PreviewShell>
  );
}
