"use client";

import { PreviewShell } from "../PreviewShell";

// ── Icons ──────────────────────────────────────────────────────────────────

function IconHome() {
  return (
    <svg className="me-2.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
    </svg>
  );
}

function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
    </svg>
  );
}

function IconWarningCircle({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd" />
    </svg>
  );
}

function IconXCircle({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clipRule="evenodd" />
    </svg>
  );
}

function IconInfo() {
  return (
    <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
    </svg>
  );
}

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className ?? "ms-1.5 h-5 w-5"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" />
    </svg>
  );
}

// ── Status card data ────────────────────────────────────────────────────────

type StatusLevel = "ok" | "warn" | "error";

interface ServiceCard {
  name: string;
  subtitle: string;
  status: StatusLevel;
  tooltip: string;
}

const services: ServiceCard[] = [
  {
    name: "flowbite.com website",
    subtitle: "No known issues at this time",
    status: "ok",
    tooltip: "The ability for users to navigate to or interact with Flowbite website",
  },
  {
    name: "Security Audit",
    subtitle: "No known issues at this time",
    status: "ok",
    tooltip: "The ability for users to get output from running Flowbite audit",
  },
  {
    name: "Data Services",
    subtitle: "2 known issues reported",
    status: "warn",
    tooltip: "Check for regional outages that could affect the accessibility of this website services or data.",
  },
  {
    name: "API Requests",
    subtitle: "No known issues at this time",
    status: "ok",
    tooltip: "Requests for Flowbite APIs",
  },
  {
    name: "Issues",
    subtitle: "No known issues at this time",
    status: "ok",
    tooltip: "Requests for Issues on Flowbite.com",
  },
  {
    name: "Flowbite Downloads",
    subtitle: "No known issues at this time",
    status: "ok",
    tooltip: "The ability for users to download assets on Flowbite website",
  },
  {
    name: "Apps and runtime",
    subtitle: "No known issues at this time",
    status: "ok",
    tooltip: "Allow users to interact with Flowbite software for productivity.",
  },
  {
    name: "Actions",
    subtitle: "No known issues at this time",
    status: "ok",
    tooltip: "Workflow, compute and orchestration for Flowbite actions",
  },
  {
    name: "Package installation",
    subtitle: "No known issues at this time",
    status: "ok",
    tooltip: "Allow users to read from the registry so that they can install packages",
  },
  {
    name: "Pages",
    subtitle: "1 unknown issue reported",
    status: "error",
    tooltip: "Frontend application and API servers for pages builds",
  },
];

function StatusIcon({ status }: { status: StatusLevel }) {
  if (status === "ok") return <IconCheckCircle className="h-6 w-6 shrink-0 text-green-500" />;
  if (status === "warn") return <IconWarningCircle className="h-6 w-6 shrink-0 text-yellow-400" />;
  return <IconXCircle className="h-6 w-6 shrink-0 text-red-500" />;
}

// ── Past incidents data ─────────────────────────────────────────────────────

interface TimelineItem {
  time: string;
  title: string;
  body: string;
  action?: { label: string };
}

interface IncidentDay {
  date: string;
  incidentTitle?: string;
  incidentColor?: string;
  timeline?: TimelineItem[];
  noIncident?: boolean;
}

const incidentDays: IncidentDay[] = [
  {
    date: "Nov 28, 2025",
    noIncident: true,
  },
  {
    date: "Nov 27, 2025",
    incidentTitle: "Scheduled maintenance for data migrations",
    incidentColor: "text-[#1A56DB] dark:text-blue-400",
    timeline: [
      {
        time: "Nov 23, 23:00 UTC",
        title: "Completed",
        body: "The scheduled maintenance has been completed.",
        action: { label: "View status" },
      },
      {
        time: "Nov 23, 23:00 UTC",
        title: "In progress",
        body: "Scheduled maintenance is currently in progress. We will provide updates as necessary.",
      },
      {
        time: "Nov 23, 23:00 UTC",
        title: "Scheduled",
        body: "We will be conducting scheduled maintenance for data migration, during which the package publishing functionality will be temporarily unavailable. All other operations, including package installation, and search are expected to function as usual.",
      },
    ],
  },
  {
    date: "Nov 26, 2025",
    noIncident: true,
  },
  {
    date: "Nov 25, 2025",
    incidentTitle: "Intermittent issues with package install",
    incidentColor: "text-yellow-500 dark:text-yellow-400",
    timeline: [
      {
        time: "Nov 25, 21:34 UTC",
        title: "Resolved",
        body: "The scheduled maintenance has been completed.",
      },
      {
        time: "Nov 25, 23:00 UTC",
        title: "Monitoring",
        body: "A fix has been implemented and we are monitoring the results.",
        action: { label: "View more" },
      },
      {
        time: "Nov 25, 13:38 UTC",
        title: "Identified",
        body: "The issue has been identified and a fix is being implemented.",
      },
      {
        time: "Nov 25, 13:31 UTC",
        title: "Investigating",
        body: "We are currently investigating this issue.",
      },
    ],
  },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminServerStatusPage() {
  return (
    <PreviewShell variant="admin" title="Server Status">
      <section className="bg-gray-50 dark:bg-gray-900 min-h-full">
        <div className="mx-auto max-w-screen-lg px-4 py-4 md:py-6 lg:px-0">

          {/* Breadcrumb */}
          <nav className="mb-4 flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#1A56DB] dark:text-gray-400 dark:hover:text-white">
                  <IconHome />
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <IconChevronRight />
                  <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-[#1A56DB] dark:text-gray-400 dark:hover:text-white md:ms-2">Status</a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <IconChevronRight />
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">flowbite.com</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Page title */}
          <h1 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white md:mb-6">
            Current status: Flowbite.com
          </h1>

          {/* All systems operational alert */}
          <div
            className="mb-4 rounded-lg border border-green-300 bg-green-50 p-4 text-green-800 dark:border-green-800 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <div className="flex items-center">
              <IconCheckCircle className="me-2 h-5 w-5 shrink-0" />
              <span className="sr-only">Info</span>
              <h2 className="text-lg font-medium">All systems operational</h2>
            </div>
            <div className="mt-2 text-sm">
              All systems are functioning seamlessly, with no disruptions or downtimes reported. Every component, from critical infrastructure to auxiliary services, is running at full capacity, ensuring optimal performance and reliability.
            </div>
          </div>

          {/* Service status cards grid */}
          <div className="mb-4 grid gap-4 md:mb-6 md:grid-cols-2">
            {services.map((svc, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg bg-white p-4 shadow-xs dark:bg-gray-800 md:p-6"
              >
                <div className="flex items-center space-x-4">
                  <StatusIcon status={svc.status} />
                  <div>
                    <h3 className="mb-1 text-lg font-semibold leading-none text-gray-900 dark:text-white md:text-xl">
                      {svc.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">{svc.subtitle}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                  aria-label={`More info about ${svc.name}`}
                  title={svc.tooltip}
                >
                  <IconInfo />
                  <span className="sr-only">More info</span>
                </button>
              </div>
            ))}
          </div>

          {/* Footer row — uptime link */}
          <div className="mb-8 mt-4 items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800 sm:flex md:mt-6 lg:mb-12">
            <p className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-0">No major downtime reported</p>
            <a
              href="#"
              className="flex items-center font-medium text-[#1A56DB] hover:underline dark:text-blue-400"
            >
              View uptime chart
              <IconArrowRight />
            </a>
          </div>

          {/* Past incidents section */}
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white md:mb-6">
            Past incidents
          </h3>

          {incidentDays.map((day, di) => {
            const isLast = di === incidentDays.length - 1;
            return (
              <div
                key={di}
                className={`${isLast ? "" : "mb-4"} rounded-lg bg-white p-4 shadow-xs dark:bg-gray-800 md:p-6`}
              >
                <h4 className="mb-4 border-b border-gray-200 pb-4 text-lg font-semibold text-gray-900 dark:border-gray-700 dark:text-white">
                  {day.date}
                </h4>

                {day.noIncident && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 md:text-base">
                    No incidents reported today.
                  </p>
                )}

                {day.incidentTitle && (
                  <>
                    <p className={`mb-4 font-medium ${day.incidentColor}`}>
                      {day.incidentTitle}
                    </p>

                    <ol className="relative ms-1 border-s border-gray-200 dark:border-gray-700">
                      {day.timeline?.map((item, ti) => {
                        const isLastItem = ti === (day.timeline?.length ?? 0) - 1;
                        return (
                          <li key={ti} className={`${isLastItem ? "" : "mb-10"} ms-4`}>
                            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
                            <time className="text-sm leading-none text-gray-500 dark:text-gray-400">
                              {item.time}
                            </time>
                            <h3 className="my-2 text-lg font-semibold text-gray-900 dark:text-white">
                              {item.title}
                            </h3>
                            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 md:text-base">
                              {item.body}
                            </p>
                            {item.action && (
                              <a
                                href="#"
                                className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-[#1A56DB] focus:z-10 focus:text-[#1A56DB] focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                              >
                                <IconEye />
                                {item.action.label}
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ol>
                  </>
                )}
              </div>
            );
          })}

          {/* Footer row — incident history link */}
          <div className="mt-4 items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800 sm:flex md:mt-6">
            <p className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-0">No incidents in the last month</p>
            <a
              href="#"
              className="flex items-center font-medium text-[#1A56DB] hover:underline dark:text-blue-400"
            >
              Incident history
              <IconArrowRight />
            </a>
          </div>

        </div>
      </section>
    </PreviewShell>
  );
}
