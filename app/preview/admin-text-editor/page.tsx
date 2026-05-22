"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";

// ── Toolbar button helper ──────────────────────────────────────────────────

function ToolbarBtn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      title={title}
      className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      {children}
    </button>
  );
}

// ── SVG icons (inline, sourced from Flowbite HTML) ─────────────────────────

const IconBold = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6" />
  </svg>
);
const IconItalic = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18" />
  </svg>
);
const IconUnderline = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4" />
  </svg>
);
const IconStrike = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.677 6.523M9.6 19l1.029-4M5 5l6.523 6.523M19 19l-7.477-7.477" />
  </svg>
);
const IconHighlight = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M9 19.2H5.5c-.3 0-.5-.2-.5-.5V16c0-.2.2-.4.5-.4h13c.3 0 .5.2.5.4v2.7c0 .3-.2.5-.5.5H18m-6-1 1.4 1.8h.2l1.4-1.7m-7-5.4L12 4c0-.1 0-.1 0 0l4 8.8m-6-2.7h4m-7 2.7h2.5m5 0H17" />
  </svg>
);
const IconCode = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
  </svg>
);
const IconLink = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961" />
  </svg>
);
const IconUnlink = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1m7.4 14-1.8-1.8m0 0L16 16.4m1.8 1.8 1.8-1.8m-1.8 1.8L16 20" />
  </svg>
);
const IconTextSize = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3" />
  </svg>
);
const IconTextColor = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m6.532 15.982 1.573-4m-1.573 4h-1.1m1.1 0h1.65m-.077-4 2.725-6.93a.11.11 0 0 1 .204 0l2.725 6.93m-5.654 0H8.1m.006 0h5.654m0 0 .617 1.569m5.11 4.453c0 1.102-.854 1.996-1.908 1.996-1.053 0-1.907-.894-1.907-1.996 0-1.103 1.907-4.128 1.907-4.128s1.909 3.025 1.909 4.128Z" />
  </svg>
);
const IconFontFamily = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.6 19 4.298-10.93a.11.11 0 0 1 .204 0L19.4 19m-8.8 0H9.5m1.1 0h1.65m7.15 0h-1.65m1.65 0h1.1m-7.7-3.985h4.4M3.021 16l1.567-3.985m0 0L7.32 5.07a.11.11 0 0 1 .205 0l2.503 6.945h-5.44Z" />
  </svg>
);
const IconAlignLeft = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6h8m-8 4h12M6 14h8m-8 4h12" />
  </svg>
);
const IconAlignCenter = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h8M6 10h12M8 14h8M6 18h12" />
  </svg>
);
const IconAlignRight = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6h-8m8 4H6m12 4h-8m8 4H6" />
  </svg>
);
const IconImage = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clipRule="evenodd" />
  </svg>
);
const IconVideo = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-2 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9Zm0 2h2v2H9v-2Zm7.965-.557a1 1 0 0 0-1.692-.72l-1.268 1.218a1 1 0 0 0-.308.721v.733a1 1 0 0 0 .37.776l1.267 1.032a1 1 0 0 0 1.631-.776v-2.984Z" clipRule="evenodd" />
  </svg>
);
const IconList = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5" />
  </svg>
);
const IconOrderedList = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4" />
  </svg>
);
const IconBlockquote = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z" clipRule="evenodd" />
  </svg>
);
const IconHR = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 12h14" />
    <path stroke="currentColor" strokeLinecap="round" d="M6 9.5h12m-12 9h12M6 7.5h12m-12 9h12M6 5.5h12m-12 9h12" />
  </svg>
);
const IconSave = () => (
  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.414A2 2 0 0 0 20.414 6L18 3.586A2 2 0 0 0 16.586 3H5Zm3 11a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6H8v-6Zm1-7V5h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M14 17h-4v-2h4v2Z" clipRule="evenodd" />
  </svg>
);
const IconChevronDown = () => (
  <svg className="-me-0.5 ms-1.5 h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
  </svg>
);
const IconPlus = () => (
  <svg className="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
  </svg>
);
const IconX = () => (
  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
  </svg>
);
const IconTrash = () => (
  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
  </svg>
);
const IconCalendar = () => (
  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd" />
  </svg>
);
const IconPublish = () => (
  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clipRule="evenodd" />
  </svg>
);
const IconUpload = () => (
  <svg aria-hidden="true" className="mb-3 h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

// ── Sample rich text content (static mock of WYSIWYG editor output) ────────

const SampleContent = () => (
  <div className="prose prose-sm max-w-none text-gray-800 dark:text-white">
    <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
      The Future of Digital Health Design at Scripps
    </h2>
    <p className="mb-3">
      As Scripps Health continues to expand its digital footprint, the need for a
      consistent, accessible, and scalable design system has never been more critical.
      <strong> Motive™ serves as the single source of truth</strong> for how all
      digital products at Scripps are designed and built — from consumer-facing
      websites to complex clinical applications.
    </p>
    <p className="mb-3">
      This post outlines three core pillars that will guide our design strategy over
      the next year:
    </p>
    <ol className="mb-3 ms-4 list-decimal space-y-1 text-sm">
      <li>Unified token-based theming across all product surfaces</li>
      <li>AI-first documentation that guides both humans and automated agents</li>
      <li>Accessibility as a baseline, not a feature to be added later</li>
    </ol>
    <blockquote className="my-4 border-s-4 border-gray-300 ps-4 text-gray-600 italic dark:border-gray-600 dark:text-gray-400">
      "Design that holds up." — The Motive™ design philosophy
    </blockquote>
    <p className="mb-3">
      The Application context within Motive showcases production-ready Flowbite
      components with Scripps brand tokens applied. These components are the
      foundation for the PIMC back office and future clinical tools.{" "}
      <a href="#" style={{ color: "#1A56DB" }} className="underline hover:no-underline">
        Learn more about the Application context →
      </a>
    </p>
    <p className="text-sm text-gray-500 dark:text-gray-400">
      <em>Word count: 147 words · Last saved 2 minutes ago</em>
    </p>
  </div>
);

// ── Schedule Modal ─────────────────────────────────────────────────────────

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 AM", "12:30 PM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
];

function ScheduleModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState("12:00 AM");

  // Simple inline calendar mock
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const dates = [
    [null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, null, null, null],
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800 sm:p-5">
        {/* Modal header */}
        <div className="mb-4 flex items-center justify-between rounded-t">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Schedule a post</h3>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {/* Calendar + time picker */}
        <div className="mb-4 flex w-full flex-col gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex-row">
          {/* Inline calendar */}
          <div className="mx-auto sm:mx-0">
            <div className="mb-2 flex items-center justify-between">
              <button className="rounded p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">June 2025</span>
              <button className="rounded p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <table className="w-full text-center text-xs">
              <thead>
                <tr>
                  {days.map((d) => (
                    <th key={d} className="pb-1 font-medium text-gray-500 dark:text-gray-400">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dates.map((week, wi) => (
                  <tr key={wi}>
                    {week.map((date, di) => (
                      <td key={di} className="p-0.5">
                        {date ? (
                          <button
                            type="button"
                            className={`h-7 w-7 rounded-full text-xs font-medium ${
                              date === 30
                                ? "text-white"
                                : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            }`}
                            style={date === 30 ? { backgroundColor: "#1A56DB" } : undefined}
                          >
                            {date}
                          </button>
                        ) : (
                          <span className="h-7 w-7 inline-block" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-3 flex justify-center gap-2">
              <button type="button" className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                Today
              </button>
              <button type="button" className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                Clear
              </button>
            </div>
          </div>

          {/* Time picker */}
          <div className="mt-5 w-full border-gray-200 dark:border-gray-700 sm:ms-7 sm:mt-0 sm:max-w-60 sm:border-s sm:ps-5">
            <h3 className="mb-3 text-base font-medium text-gray-900 dark:text-white">Wednesday 30 June 2025</h3>
            <button
              type="button"
              className="me-2 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg className="me-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
              </svg>
              Pick a time
            </button>
            <ul className="mt-5 grid w-full grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <li key={slot}>
                  <button
                    type="button"
                    onClick={() => setSelected(slot)}
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border p-2 text-center text-sm font-medium transition-colors"
                    style={
                      selected === slot
                        ? { backgroundColor: "#1A56DB", borderColor: "#1A56DB", color: "#fff" }
                        : { borderColor: "#1A56DB", color: "#1A56DB", backgroundColor: "transparent" }
                    }
                  >
                    {slot}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
          style={{ backgroundColor: "#1A56DB" }}
        >
          <svg className="-ms-1 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 3V8h1v1H8Z" clipRule="evenodd" />
          </svg>
          Publish
        </button>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminTextEditorPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <PreviewShell variant="admin" title="Text Editor">
      <form action="#" className="flex flex-col">

        {/* ── Header bar ── */}
        <div className="grid grid-cols-12 gap-4 border-b border-gray-200 bg-white pb-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="col-span-full mx-4 mt-4">
            {/* Breadcrumb */}
            <nav className="mb-4 flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <a href="/preview/admin-dashboard" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white">
                    <svg className="me-2.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="mx-1 h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                    </svg>
                    <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white md:ms-2">Pages</a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="mx-1 h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                    </svg>
                    <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Text Editor</span>
                  </div>
                </li>
              </ol>
            </nav>

            {/* Title + action buttons */}
            <div className="items-center justify-between sm:flex">
              <h5 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white sm:mb-0">Add a new post</h5>
              <div className="flex items-center space-x-4">
                {/* Move to trash */}
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-lg border border-red-700 px-3 py-2 text-sm text-red-700 hover:border-red-800 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 sm:w-auto"
                >
                  <IconTrash />
                  <span className="sm:hidden">Trash</span>
                  <span className="hidden sm:block">Move to trash</span>
                </button>
                {/* Schedule */}
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                >
                  <IconCalendar />
                  Schedule
                </button>
                {/* Publish */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg px-3 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-auto"
                  style={{ backgroundColor: "#1A56DB" }}
                >
                  <IconPublish />
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Body: editor + sidebar ── */}
        <div className="flex">

          {/* ── Main editor area ── */}
          <div className="w-full bg-white p-4 dark:bg-gray-900">

            {/* Title input */}
            <label htmlFor="article_title" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              type="text"
              id="article_title"
              defaultValue="The Future of Digital Health Design at Scripps"
              className="mb-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Write your article title here"
            />

            {/* Article content label */}
            <label htmlFor="article_content" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Article content
            </label>

            {/* WYSIWYG editor container */}
            <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 md:mb-6">

              {/* ── Toolbar ── */}
              <div className="border-b border-gray-200 px-3 py-2 dark:border-gray-600">

                {/* Row 1: inline format tools */}
                <div className="flex flex-wrap items-center">
                  <div className="flex flex-wrap items-center space-x-1">
                    <ToolbarBtn title="Bold"><IconBold /></ToolbarBtn>
                    <ToolbarBtn title="Italic"><IconItalic /></ToolbarBtn>
                    <ToolbarBtn title="Underline"><IconUnderline /></ToolbarBtn>
                    <ToolbarBtn title="Strike"><IconStrike /></ToolbarBtn>
                    <ToolbarBtn title="Highlight"><IconHighlight /></ToolbarBtn>
                    <ToolbarBtn title="Code"><IconCode /></ToolbarBtn>
                    <ToolbarBtn title="Add link"><IconLink /></ToolbarBtn>
                    <ToolbarBtn title="Remove link"><IconUnlink /></ToolbarBtn>
                    <ToolbarBtn title="Text size"><IconTextSize /></ToolbarBtn>
                    <ToolbarBtn title="Text color"><IconTextColor /></ToolbarBtn>
                    <ToolbarBtn title="Font family"><IconFontFamily /></ToolbarBtn>

                    {/* Divider */}
                    <div className="px-1">
                      <span className="block h-4 w-px bg-gray-300 dark:bg-gray-600" />
                    </div>

                    <ToolbarBtn title="Align left"><IconAlignLeft /></ToolbarBtn>
                    <ToolbarBtn title="Align center"><IconAlignCenter /></ToolbarBtn>
                    <ToolbarBtn title="Align right"><IconAlignRight /></ToolbarBtn>
                  </div>
                </div>

                {/* Row 2: block-level tools */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {/* Format dropdown (static label) */}
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-500 dark:hover:text-white dark:focus:ring-gray-600"
                  >
                    Format
                    <IconChevronDown />
                  </button>

                  {/* Divider */}
                  <div className="ps-1.5">
                    <span className="block h-4 w-px bg-gray-300 dark:bg-gray-600" />
                  </div>

                  <ToolbarBtn title="Add image"><IconImage /></ToolbarBtn>
                  <ToolbarBtn title="Add video"><IconVideo /></ToolbarBtn>
                  <ToolbarBtn title="Toggle list"><IconList /></ToolbarBtn>
                  <ToolbarBtn title="Toggle ordered list"><IconOrderedList /></ToolbarBtn>
                  <ToolbarBtn title="Toggle blockquote"><IconBlockquote /></ToolbarBtn>
                  <ToolbarBtn title="Toggle Horizontal Rule"><IconHR /></ToolbarBtn>
                </div>
              </div>

              {/* ── Editor content area ── */}
              <div className="rounded-b-lg bg-white px-4 py-4 dark:bg-gray-800">
                <SampleContent />
              </div>
            </div>

            {/* ── Post settings checkboxes ── */}
            <div className="flex flex-wrap items-center gap-4 md:mb-6">
              <div className="flex items-center">
                <input
                  id="enable-notification"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded-sm border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label htmlFor="enable-notification" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Enable email notification
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="disable-comments"
                  type="checkbox"
                  className="h-4 w-4 rounded-sm border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label htmlFor="disable-comments" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Disable comments
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="disable-reactions"
                  type="checkbox"
                  className="h-4 w-4 rounded-sm border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label htmlFor="disable-reactions" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Disable reactions
                </label>
              </div>
            </div>
          </div>

          {/* ── Right sidebar ── */}
          <aside className="hidden w-80 min-w-80 border-s border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 md:flex" aria-label="Post settings">
            <div className="h-full w-full space-y-4 overflow-y-auto p-4">

              {/* Status panel */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="flex items-center border-b border-gray-200 pb-3 font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  <svg className="me-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M5 9a7 7 0 1 1 8 6.93V21a1 1 0 1 1-2 0v-5.07A7.001 7.001 0 0 1 5 9Zm5.94-1.06A1.5 1.5 0 0 1 12 7.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.398.158-.78.44-1.06Z" clipRule="evenodd" />
                  </svg>
                  Status
                </h3>
                <ul className="my-4 flex flex-wrap gap-3">
                  {["Draft", "Free", "Paid"].map((s) => (
                    <li key={s} className="flex items-center">
                      <input
                        id={`status-${s.toLowerCase()}`}
                        type="radio"
                        name="status-radio"
                        defaultChecked={s === "Draft"}
                        className="h-4 w-4 border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                      />
                      <label htmlFor={`status-${s.toLowerCase()}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{s}</label>
                    </li>
                  ))}
                </ul>
                <button type="button" className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                  <IconSave /> Save
                </button>
              </div>

              {/* Visibility panel */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="flex items-center border-b border-gray-200 pb-3 font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  <svg className="me-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  Visibility
                </h3>
                <ul className="my-4 flex flex-wrap gap-3">
                  {[
                    { id: "public", label: "Public", checked: false },
                    { id: "password-protected", label: "Protected", checked: false },
                    { id: "private", label: "Private", checked: true },
                  ].map((opt) => (
                    <li key={opt.id} className="flex items-center">
                      <input
                        id={opt.id}
                        type="radio"
                        name="visibility-radio"
                        defaultChecked={opt.checked}
                        className="h-4 w-4 border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                      />
                      <label htmlFor={opt.id} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{opt.label}</label>
                    </li>
                  ))}
                </ul>
                <button type="button" className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                  <IconSave /> Save
                </button>
              </div>

              {/* Category panel */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="flex items-center border-b border-gray-200 pb-3 font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  <svg className="me-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clipRule="evenodd" />
                  </svg>
                  Category
                </h3>
                <ul className="my-4 space-y-3">
                  {[
                    { id: "news", label: "News", checked: false },
                    { id: "political", label: "Political", checked: false },
                    { id: "business", label: "Business & Finance", checked: true },
                    { id: "sports", label: "Sports", checked: false },
                    { id: "culture", label: "Culture & Lifestyle", checked: false },
                  ].map((cat) => (
                    <li key={cat.id} className="flex items-center">
                      <input
                        id={cat.id}
                        type="checkbox"
                        defaultChecked={cat.checked}
                        className="h-4 w-4 rounded-sm border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                      />
                      <label htmlFor={cat.id} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{cat.label}</label>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center space-x-3">
                  <button type="button" className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                    <IconSave /> Save
                  </button>
                  <button type="button" className="flex items-center text-sm font-medium hover:underline" style={{ color: "#1A56DB" }}>
                    <IconPlus /> Add new category
                  </button>
                </div>
              </div>

              {/* Tags panel */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-3 flex items-center border-b border-gray-200 pb-3 font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  <svg className="me-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                  Tags
                </h3>
                <div className="flex items-center">
                  <label htmlFor="tags-input" className="sr-only">Tags</label>
                  <input
                    type="text"
                    id="tags-input"
                    placeholder="Add a tag…"
                    className="me-2 block w-full rounded-lg border border-gray-300 bg-white p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-lg px-3 py-2 text-xs font-medium text-white focus:outline-none focus:ring-4 sm:w-auto"
                    style={{ backgroundColor: "#1A56DB" }}
                  >
                    Add
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["news", "startups", "finance", "innovation"].map((tag) => (
                    <div
                      key={tag}
                      className="inline-flex items-center rounded-sm px-2.5 py-0.5 text-sm font-medium"
                      style={{ backgroundColor: "#EBF5FF", color: "#1E429F" }}
                    >
                      <button type="button" className="hover:opacity-70">
                        <IconX />
                      </button>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Image panel */}
              <div>
                <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Featured Image</span>
                <div className="flex w-full items-center justify-center">
                  <label
                    htmlFor="dropzone-file"
                    className="flex h-36 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-700"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <IconUpload />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </form>

      {/* Schedule modal (rendered at page level, outside form flow) */}
      {showModal && <ScheduleModal onClose={() => setShowModal(false)} />}
    </PreviewShell>
  );
}
