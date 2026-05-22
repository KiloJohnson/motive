"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";

// ── Icons ──────────────────────────────────────────────────────────────────

function IconArrowLeft() {
  return (
    <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
    </svg>
  );
}

function IconFilter() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 3a2 2 0 0 0-1.5 3.3l5.4 6v5c0 .4.3.9.6 1.1l3.1 2.3c1 .7 2.5 0 2.5-1.2v-7.1l5.4-6C21.6 5 20.7 3 19 3H5Z" />
    </svg>
  );
}

function IconPrint() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H8Zm-3 7a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h1v-4c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5Zm4 11a1 1 0 0 1-1-1v-4h8v4c0 .6-.4 1-1 1H9Z" clipRule="evenodd" />
    </svg>
  );
}

function IconArchive() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M4 4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H4Zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm10.7 5.7a1 1 0 0 0-1.4-1.4l-.3.3V12a1 1 0 1 0-2 0v2.6l-.3-.3a1 1 0 0 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l2-2Z" clipRule="evenodd" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeWidth="2" d="M11 5.1a1 1 0 0 1 2 0l1.7 4c.1.4.4.6.8.6l4.5.4a1 1 0 0 1 .5 1.7l-3.3 2.8a1 1 0 0 0-.3 1l1 4a1 1 0 0 1-1.5 1.2l-3.9-2.3a1 1 0 0 0-1 0l-4 2.3a1 1 0 0 1-1.4-1.1l1-4.1c.1-.4 0-.8-.3-1l-3.3-2.8a1 1 0 0 1 .5-1.7l4.5-.4c.4 0 .7-.2.8-.6l1.8-4Z" />
    </svg>
  );
}

function IconReply() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.5 8H11V6.1c0-.9-.9-1.4-1.5-.9L4.4 9.7a1.2 1.2 0 0 0 0 1.8l5 4.4c.7.6 1.6 0 1.6-.8v-2h2a3 3 0 0 1 3 3V19a5.6 5.6 0 0 0-1.5-11Z" />
    </svg>
  );
}

function IconChevronDown({ small = false }: { small?: boolean }) {
  const cls = small ? "h-3.5 w-3.5" : "h-4 w-4";
  return (
    <svg className={cls} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
    </svg>
  );
}

function IconFullscreen() {
  return (
    <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5" />
    </svg>
  );
}

function IconUndo() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4" />
    </svg>
  );
}

function IconRedo() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4" />
    </svg>
  );
}

function IconTextSize() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3" />
    </svg>
  );
}

function IconBold() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6" />
    </svg>
  );
}

function IconItalic() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.9 19 15 5M6 19h6.3m-.6-14H18" />
    </svg>
  );
}

function IconUnderline() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4" />
    </svg>
  );
}

function IconStrikethrough() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.7 6.5M9.6 19l1-4M5 5l6.5 6.5M19 19l-7.5-7.5" />
    </svg>
  );
}

function IconParagraph() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v7m0 7v-7m4-7v14m3-14H8.5C6.5 5 5 6.6 5 8.5v0c0 2 1.6 3.5 3.5 3.5H12" />
    </svg>
  );
}

function IconQuote() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M6 6a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z" clipRule="evenodd" />
    </svg>
  );
}

function IconAlignCenter() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h8M6 10h12M8 14h8M6 18h12" />
    </svg>
  );
}

function IconOrderedList() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.3 1.5L4 20h5M4 5l2-1v6m-2 0h4" />
    </svg>
  );
}

function IconList() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0" />
    </svg>
  );
}

function IconIndent() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6h12M6 18h12m-5-8h5m-5 4h5M6 9v6l3.5-3L6 9Z" />
    </svg>
  );
}

function IconOutdent() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6h12M6 18h12m-5-8h5m-5 4h5M9.5 9v6L6 12l3.5-3Z" />
    </svg>
  );
}

function IconAttach() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
    </svg>
  );
}

function IconEmoji() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm5.5 1a.5.5 0 0 0-1 0 5 5 0 0 0 1.6 3.4 5.5 5.5 0 0 0 7.8 0 5 5 0 0 0 1.6-3.4.5.5 0 0 0-1 0h-.2l-1 .3a18.9 18.9 0 0 1-7.8-.4ZM9 8a1 1 0 0 0 0 2 1 1 0 1 0 0-2Zm6 0a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clipRule="evenodd" />
    </svg>
  );
}

function IconPhoto() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm.4 9.6a1 1 0 0 0-1.8 0l-2.5 6A1 1 0 0 0 8 19h8a1 1 0 0 0 .9-1.4l-2-4a1 1 0 0 0-1.7-.2l-.5.7-1.3-2.5ZM13 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M10 5a2 2 0 0 0-2 2v3h2.4a7.5 7.5 0 0 0 0 11H5a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1V7a4 4 0 1 1 8 0v1.2c-.7 0-1.3.3-2 .6V7a2 2 0 0 0-2-2Z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M10 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm6.5-1.5a1 1 0 1 0-2 0v1.5c0 .3.1.5.3.7l1 1a1 1 0 0 0 1.4-1.4l-.7-.7V14Z" clipRule="evenodd" />
    </svg>
  );
}

function IconSignature() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M15.5 3.3a1 1 0 0 0-1.4 0l-2 2h.1l6.5 6.5 2-1.9c.4-.4.4-1 0-1.4l-5.2-5.2ZM7 8.3l3.9-1.5 6.3 6.3-1.5 3.9a1 1 0 0 1-.6.6l-9.5 3.3a1 1 0 0 1-1-.1l6.5-6.5A1 1 0 0 0 9.7 13l-6.5 6.4a1 1 0 0 1-.1-1L6.4 9c.1-.3.3-.5.6-.6Z" clipRule="evenodd" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
    </svg>
  );
}

function IconTrash() {
  return (
    <svg aria-hidden="true" className="-ml-1 mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  );
}

// ── Toolbar button helper ──────────────────────────────────────────────────

function ToolBtn({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      {children}
      <span className="sr-only">{label}</span>
    </button>
  );
}

// ── Mail detail dropdown ───────────────────────────────────────────────────

type MailDetail = {
  from: string;
  to: string;
  date: string;
  subject: string;
};

function MailDetailsDropdown({ id, detail }: { id: string; detail: MailDetail }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        {id === "contact" ? "to Flowbite Support, me" : "to Joseph, me"}
        <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M18.4 10.3A2 2 0 0 0 17 7H7a2 2 0 0 0-1.5 3.3l4.9 5.9a2 2 0 0 0 3 0l5-6Z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 z-50 mt-1 w-80 rounded-sm bg-white p-4 shadow-sm dark:bg-gray-700">
          <ul className="space-y-2 text-sm font-normal">
            <li className="flex items-center text-gray-500 dark:text-gray-400">
              <div className="w-16">From:</div>
              <div className="ms-1 text-gray-900 dark:text-gray-400">{detail.from}</div>
            </li>
            <li className="flex items-center text-gray-500 dark:text-gray-400">
              <div className="w-16">To:</div>
              <div className="ms-1 text-gray-900 dark:text-gray-400">{detail.to}</div>
            </li>
            <li className="flex items-center text-gray-500 dark:text-gray-400">
              <div className="w-16">Date:</div>
              <div className="ms-1 text-gray-900 dark:text-gray-400">{detail.date}</div>
            </li>
            <li className="flex items-center text-gray-500 dark:text-gray-400">
              <div className="w-16">Subject:</div>
              <div className="ms-1 text-gray-900 dark:text-gray-400">{detail.subject}</div>
            </li>
            <li className="flex items-center text-gray-500 dark:text-gray-400">
              <div className="w-16">Security:</div>
              <div className="ms-1 text-gray-900 dark:text-gray-400">
                Standard encryption (TLS){" "}
                <a className="font-medium text-gray-900 underline hover:no-underline dark:text-white" href="#">
                  Learn more
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminSupportTicketPage() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [replyDropdownOpen, setReplyDropdownOpen] = useState(false);
  const [fontDropdownOpen, setFontDropdownOpen] = useState(false);
  const [submitDropdownOpen, setSubmitDropdownOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Arial (Sans-serif)");

  const fonts = [
    "Arial (Sans-serif)",
    "Times New Roman (Serif)",
    "Helvetica (Sans-serif)",
    "Verdana (Sans-serif)",
    "Georgia (Sans-serif)",
    "Roboto (Sans-serif)",
  ];

  return (
    <PreviewShell variant="admin" title="Support Ticket #1846325">
      <div className="grid grid-cols-12">

        {/* ── Ticket top bar ── */}
        <div className="col-span-full flex items-center justify-between border-b border-gray-200 bg-white px-4 py-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center sm:mb-0 sm:space-x-4">
            <div className="flex items-center">
              {/* Prev */}
              <button
                type="button"
                title="Prev ticket"
                className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <IconArrowLeft />
                <span className="sr-only">Prev ticket</span>
              </button>
              {/* Next */}
              <button
                type="button"
                title="Next ticket"
                className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <IconArrowRight />
                <span className="sr-only">Next ticket</span>
              </button>
            </div>
            <h1 className="ms:ms-0 ms-2 font-semibold text-gray-900 dark:text-white sm:text-xl">
              Ticket #1846325
            </h1>
            <span className="ms-4 hidden items-center rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 sm:ms-0 sm:inline-flex">
              <svg className="me-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M5.5 3a1 1 0 0 0 0 2H7v2.3c0 .7.2 1.3.6 1.8L9 11.9l.1.1v.1L7.5 15a3 3 0 0 0-.6 1.8V19H5.5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H17v-2.3a3 3 0 0 0-.6-1.8l-1.6-2.8v-.2l1.6-2.8a3 3 0 0 0 .6-1.8V5h1.5a1 1 0 1 0 0-2h-13Z" clipRule="evenodd" />
              </svg>
              Pending
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center">
            <ToolBtn label="Filter"><IconFilter /></ToolBtn>
            <ToolBtn label="Print"><IconPrint /></ToolBtn>
            <ToolBtn label="Archive"><IconArchive /></ToolBtn>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="col-span-full p-4 xl:p-8">

          {/* Subject + meta */}
          <div className="mb-4 items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800 sm:flex">
            <div>
              <h2 className="mb-1.5 text-xl font-medium leading-none text-gray-900 dark:text-white">
                I need help with my purchase
              </h2>
              <span className="text-gray-500 dark:text-gray-400">Via email</span>
            </div>
            <div className="mt-4 flex items-center border-t border-gray-200 pt-4 text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:mt-0 sm:border-0 sm:pt-0">
              <p className="me-4 text-sm text-gray-500 dark:text-gray-400">
                Mon,<time dateTime="2025-07-31 15:20"> 3:20 PM</time> (2 hrs ago)
              </p>
              <ToolBtn label="Add to favorites"><IconStar /></ToolBtn>
              <ToolBtn label="Reply"><IconReply /></ToolBtn>
            </div>
          </div>

          {/* Original message — Contact */}
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-semibold text-gray-600 dark:text-gray-300 shrink-0">
              JM
            </div>
            <div className="font-semibold dark:text-white">
              <div>Contact</div>
              <MailDetailsDropdown
                id="contact"
                detail={{
                  from: "Joseph (name@example.com)",
                  to: "name@company.com",
                  date: "Feb 6, 2025, 10:19AM",
                  subject: "I need help with my purchase",
                }}
              />
            </div>
          </div>

          <p className="mt-6 text-gray-500 dark:text-gray-400">Dear Flowbite team,</p>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            I hope this message finds you well. I wanted to inform you that I&apos;m currently experiencing a problem while trying to make a payment for the Flowbite PRO.
          </p>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            Could you please advise on the next steps or provide assistance in resolving this issue?
          </p>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            Thank you for your prompt attention to this matter.
          </p>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            Best regards,<br />
            Joseph McFall, CEO &amp; Founder Digital Things LLC
          </p>

          {/* Response message — Roberta */}
          <div className="mt-4 flex items-center gap-4 border-t border-gray-200 pt-4 dark:border-gray-800 sm:mt-6 sm:pt-6">
            <div className="h-10 w-10 rounded-full bg-blue-200 dark:bg-blue-900 flex items-center justify-center text-sm font-semibold text-blue-700 dark:text-blue-300 shrink-0">
              RC
            </div>
            <div className="font-semibold dark:text-white">
              <div>Roberta Casas</div>
              <MailDetailsDropdown
                id="response"
                detail={{
                  from: "Roberta (name@example.com)",
                  to: "name@company.com",
                  date: "Feb 6, 2025, 11:30AM",
                  subject: "RE: I need help with my purchase",
                }}
              />
            </div>
          </div>

          <p className="mt-6 text-gray-500 dark:text-gray-400">Hello Joseph,</p>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            I hope this message finds you well. My name is Robert Brown, and I&apos;m writing to assist you with the recent purchase issue you&apos;ve encountered. First and foremost, I want to express my sincere apologies for any inconvenience this may have caused you.
          </p>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            I understand how frustrating it can be to experience difficulties with a purchase, and I want to assure you that we are committed to resolving this matter promptly and to your satisfaction.
          </p>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            Could you please provide me with some more details about the issue you&apos;re facing? This will help us better understand the situation and find the best possible solution for you. Feel free to include any relevant order numbers or screenshots that might be helpful.
          </p>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            Cheers,<br />
            Roberta Casas, CTO Flowbite LLC
          </p>

          {/* ── Reply compose form ── */}
          <form className="mt-4 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 sm:mt-6">
            <div className="w-full">

              {/* Compose top bar */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-2">
                  {/* Reply dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setReplyDropdownOpen(!replyDropdownOpen)}
                      className="flex items-center justify-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Reply
                      <IconChevronDown small />
                    </button>
                    {replyDropdownOpen && (
                      <div className="absolute left-0 z-10 mt-1 w-44 rounded-sm bg-white p-2 shadow-sm dark:bg-gray-700">
                        <ul className="space-y-1 text-sm font-medium">
                          {["Reply", "Forward", "Edit subject", "Pop out reply"].map((item) => (
                            <li key={item}>
                              <button
                                type="button"
                                onClick={() => setReplyDropdownOpen(false)}
                                className="flex w-full rounded-sm px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <p className="hidden text-sm text-gray-500 dark:text-gray-400 sm:flex">
                    Joseph McFallen (name@example.com)
                  </p>
                </div>
                <button
                  type="button"
                  title="Show full screen"
                  className="cursor-pointer rounded-sm p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ms-auto"
                >
                  <IconFullscreen />
                  <span className="sr-only">Full screen</span>
                </button>
              </div>

              {/* Textarea */}
              <div className="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800">
                <label htmlFor="editor" className="sr-only">Reply message</label>
                <textarea
                  id="editor"
                  rows={8}
                  className="block w-full border-0 bg-white px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write your reply here..."
                />
              </div>
            </div>

            {/* ── Toolbar row 1: formatting ── */}
            <div className="flex flex-wrap items-center divide-gray-200 rounded-b-lg border-t border-gray-200 px-4 py-3 dark:divide-gray-700 dark:border-gray-700 sm:divide-x sm:rtl:divide-x-reverse">
              {/* Group 1: undo / redo / font / text formatting */}
              <div className="flex flex-wrap items-center space-x-0.5 sm:pe-4 rtl:space-x-reverse">
                <ToolBtn label="Undo"><IconUndo /></ToolBtn>
                <ToolBtn label="Redo"><IconRedo /></ToolBtn>

                {/* Font family dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setFontDropdownOpen(!fontDropdownOpen)}
                    className="flex items-center justify-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {selectedFont}
                    <IconChevronDown small />
                  </button>
                  {fontDropdownOpen && (
                    <div className="absolute left-0 z-10 mt-1 w-72 rounded-sm bg-white p-2 shadow-sm dark:bg-gray-700">
                      <ul className="space-y-1 text-sm font-medium">
                        {fonts.map((f) => (
                          <li key={f}>
                            <button
                              type="button"
                              onClick={() => { setSelectedFont(f); setFontDropdownOpen(false); }}
                              className="flex w-full rounded-sm px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              {f}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <ToolBtn label="Text size"><IconTextSize /></ToolBtn>
                <ToolBtn label="Bold"><IconBold /></ToolBtn>
                <ToolBtn label="Italic"><IconItalic /></ToolBtn>
                <ToolBtn label="Underline"><IconUnderline /></ToolBtn>
                <ToolBtn label="Strikethrough"><IconStrikethrough /></ToolBtn>
                <ToolBtn label="Paragraph"><IconParagraph /></ToolBtn>
              </div>

              {/* Group 2: block formatting (hidden on mobile) */}
              <div className="hidden flex-wrap items-center space-x-1 sm:ps-4 md:flex rtl:space-x-reverse">
                <ToolBtn label="Quote"><IconQuote /></ToolBtn>
                <ToolBtn label="Text center"><IconAlignCenter /></ToolBtn>
                <ToolBtn label="Ordered list"><IconOrderedList /></ToolBtn>
                <ToolBtn label="List"><IconList /></ToolBtn>
                <ToolBtn label="Text indent"><IconIndent /></ToolBtn>
                <ToolBtn label="Text outdent"><IconOutdent /></ToolBtn>
              </div>
            </div>

            {/* ── Toolbar row 2: submit + attachments ── */}
            <div className="items-center space-x-0.5 rounded-b-lg border-t border-gray-200 px-4 py-3 dark:border-gray-700 sm:flex">

              {/* Submit dropdown */}
              <div className="relative mb-4 me-2 sm:mb-0">
                <button
                  type="button"
                  onClick={() => setSubmitDropdownOpen(!submitDropdownOpen)}
                  className="inline-flex w-full items-center justify-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
                  style={{ backgroundColor: "#1A56DB" }}
                >
                  Submit as <span className="ms-1 font-semibold">Open</span>
                  <svg className="-me-1 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                  </svg>
                </button>
                {submitDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-1 z-10 w-44 rounded-sm bg-white shadow-sm dark:bg-gray-700">
                    <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      {["Submit as Open", "Submit as Pending", "Submit as Solved"].map((opt) => (
                        <li key={opt}>
                          <button
                            type="button"
                            onClick={() => setSubmitDropdownOpen(false)}
                            className="block w-full rounded-md px-3 py-2 text-left hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {opt}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <ToolBtn label="Attach file"><IconAttach /></ToolBtn>
              <ToolBtn label="Location"><IconLocation /></ToolBtn>
              <ToolBtn label="Emoji"><IconEmoji /></ToolBtn>
              <ToolBtn label="Insert photo"><IconPhoto /></ToolBtn>
              <ToolBtn label="Toggle confidential mode"><IconLock /></ToolBtn>
              <ToolBtn label="Insert signature"><IconSignature /></ToolBtn>
            </div>
          </form>
        </div>
      </div>

      {/* ── Delete ticket modal ── */}
      {showDeleteModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900/50 dark:bg-gray-900/80"
          onClick={() => setShowDeleteModal(false)}
        >
          <div
            className="relative max-h-full w-full max-w-md p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-5">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                className="absolute end-2.5 top-2.5 me-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <IconClose />
                <span className="sr-only">Close modal</span>
              </button>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Are you sure?</h3>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                You are about to delete this ticket, this cannot be undone.
              </p>
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => setShowDeleteModal(false)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-lg bg-red-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  <IconTrash />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PreviewShell>
  );
}
