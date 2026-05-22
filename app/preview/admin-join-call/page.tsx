"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";

// ── Icon helpers ───────────────────────────────────────────────────────────

function IconMicrophone() {
  return (
    <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 19">
      <path d="M15 5a1 1 0 0 0-1 1v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a1 1 0 0 0-2 0v3a6.006 6.006 0 0 0 6 6h1v2H5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9v-2h1a6.006 6.006 0 0 0 6-6V6a1 1 0 0 0-1-1Z" />
      <path d="M9 0H7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z" />
    </svg>
  );
}

function IconCamera() {
  return (
    <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
      <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
    </svg>
  );
}

function IconVisualEffects() {
  return (
    <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M17.44 3a1 1 0 0 1 .707.293l2.56 2.56a1 1 0 0 1 0 1.414L18.194 9.78 14.22 5.806l2.513-2.513A1 1 0 0 1 17.44 3Zm-4.634 4.22-9.513 9.513a1 1 0 0 0 0 1.414l2.56 2.56a1 1 0 0 0 1.414 0l9.513-9.513-3.974-3.974ZM6 6a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 0 1 0-2h1V7a1 1 0 0 1 1-1Zm9 9a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1Z" clipRule="evenodd" />
      <path d="M19 13h-2v2h2v-2ZM13 3h-2v2h2V3Zm-2 2H9v2h2V5ZM9 3H7v2h2V3Zm12 8h-2v2h2v-2Zm0 4h-2v2h2v-2Z" />
    </svg>
  );
}

function IconDotsVertical() {
  return (
    <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
      <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  );
}

function IconMicLarge({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M5 8a1 1 0 0 1 1 1v3a4.006 4.006 0 0 0 4 4h4a4.006 4.006 0 0 0 4-4V9a1 1 0 1 1 2 0v3.001A6.006 6.006 0 0 1 14.001 18H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H9.999A6.006 6.006 0 0 1 4 12.001V9a1 1 0 0 1 1-1Z" clipRule="evenodd" />
      <path d="M7 6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6Z" />
    </svg>
  );
}

function IconSpeaker({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z" />
      <path fillRule="evenodd" d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z" clipRule="evenodd" />
    </svg>
  );
}

function IconCameraLarge({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z" clipRule="evenodd" />
    </svg>
  );
}

function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
    </svg>
  );
}

function IconReport() {
  return (
    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd" />
    </svg>
  );
}

function IconHelp() {
  return (
    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 5c.47 0 .917-.092 1.326-.26l1.967 1.967a1 1 0 0 0 1.414-1.414l-1.817-1.818A3.5 3.5 0 1 0 11.5 17Z" clipRule="evenodd" />
    </svg>
  );
}

function IconSettings() {
  return (
    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clipRule="evenodd" />
    </svg>
  );
}

function IconPresent() {
  return (
    <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
    </svg>
  );
}

function IconCompanion() {
  return (
    <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M8 5a1 1 0 0 1 1-1h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-1a1 1 0 1 1 0-2h1V6H9a1 1 0 0 1-1-1Z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M4 7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H4Zm0 11v-5.5h11V18H4Z" clipRule="evenodd" />
    </svg>
  );
}

// ── Dropdown state helper ──────────────────────────────────────────────────

type DropdownId = "moreOptions" | "microphone" | "speakers" | "camera" | null;

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminJoinCallPage() {
  const [openDropdown, setOpenDropdown] = useState<DropdownId>(null);

  const toggleDropdown = (id: DropdownId) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <PreviewShell variant="admin" title="Join Call">
      <section>
        <div className="mx-auto h-[calc(100vh-8rem)] max-w-7xl place-items-center px-4 py-8 md:grid md:grid-cols-12 md:gap-x-8 lg:py-0 xl:gap-16 xl:px-0">

          {/* Left col — video preview + controls */}
          <div className="mb-4 md:col-span-6 md:mb-0">

            {/* Main video thumbnail */}
            <div className="relative mb-4">
              <div className="mx-auto h-72 w-full max-w-[512px] rounded-lg bg-gray-800 shadow-lg lg:mx-0 lg:max-w-full lg:h-80 xl:h-96 flex items-center justify-center">
                {/* Video placeholder — real app would use <video> element */}
                <div className="flex flex-col items-center gap-3">
                  <div className="h-20 w-20 rounded-full bg-gray-600 flex items-center justify-center">
                    <svg className="h-10 w-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4Z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400">Camera preview</span>
                </div>
              </div>
              <button
                type="button"
                className="absolute bottom-3 start-4 text-sm font-medium text-white hover:underline"
              >
                Michael Gough
              </button>
            </div>

            {/* Media control buttons */}
            <div className="mx-auto flex items-center justify-center">

              {/* Mute microphone */}
              <div className="relative me-4">
                <button
                  type="button"
                  onClick={() => toggleDropdown(null)}
                  className="group rounded-full bg-gray-100 p-2.5 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  title="Mute microphone"
                >
                  <IconMicrophone />
                  <span className="sr-only">Mute microphone</span>
                </button>
              </div>

              {/* Hide camera */}
              <div className="relative me-4">
                <button
                  type="button"
                  onClick={() => toggleDropdown(null)}
                  className="group rounded-full bg-gray-100 p-2.5 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  title="Hide camera"
                >
                  <IconCamera />
                  <span className="sr-only">Hide camera</span>
                </button>
              </div>

              {/* Visual effects */}
              <div className="relative me-4">
                <button
                  type="button"
                  onClick={() => toggleDropdown(null)}
                  className="group rounded-full bg-gray-100 p-2.5 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  title="Visual effects"
                >
                  <IconVisualEffects />
                  <span className="sr-only">Visual effects</span>
                </button>
              </div>

              {/* More options dropdown */}
              <div className="relative me-4">
                <button
                  type="button"
                  onClick={() => toggleDropdown("moreOptions")}
                  className="group rounded-full bg-gray-100 p-2.5 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <IconDotsVertical />
                  <span className="sr-only">Show options</span>
                </button>
                {openDropdown === "moreOptions" && (
                  <div className="absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700">
                    <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <li>
                        <a href="#" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <IconReport />
                          Report a problem
                        </a>
                      </li>
                      <li>
                        <a href="#" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <IconHelp />
                          Troubleshooting &amp; help
                        </a>
                      </li>
                      <li>
                        <a href="#" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <IconSettings />
                          Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right col — join panel */}
          <div className="w-full md:col-span-6">

            {/* Logo */}
            <a href="#" className="mb-4 hidden items-center text-2xl font-semibold text-gray-900 dark:text-white md:flex lg:mb-6">
              <svg className="mr-2 h-8 w-8 text-[#1A56DB]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 2a8 8 0 1 1 0 16A8 8 0 0 1 12 4Zm-1 4v4H7l5 5 5-5h-4V8h-2Z" />
              </svg>
              Flowbite
            </a>

            {/* Heading */}
            <h1 className="mb-4 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-start">
              Ready to join?
            </h1>

            {/* Action buttons */}
            <div className="flex w-full items-center justify-center space-x-4 dark:border-gray-800 md:justify-start lg:mb-6 lg:border-b lg:border-gray-200 lg:pb-6">
              <button
                type="button"
                className="inline-flex shrink-0 items-center justify-center rounded-lg border border-[#1A56DB] bg-[#1A56DB] px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-[#1e429f] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                Ask to join
              </button>
              <button
                type="button"
                className="hidden shrink-0 items-center rounded-lg px-3 py-2.5 text-base font-medium text-[#1A56DB] hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:flex"
              >
                <IconPresent />
                Present
              </button>
              <button
                type="button"
                className="flex shrink-0 items-center rounded-lg px-3 py-2.5 text-base font-medium text-[#1A56DB] hover:bg-gray-200 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                <IconCompanion />
                Use companion mode
              </button>
            </div>

            {/* Device selectors — lg+ only */}
            <div className="hidden items-center lg:flex">

              {/* Microphone selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("microphone")}
                  className="flex items-center pr-5 text-base font-medium text-gray-500 hover:underline dark:text-gray-400"
                >
                  <IconMicLarge className="me-1.5 h-5 w-5" />
                  MacBook Pro
                  <IconChevronDown className="ms-1.5 h-5 w-5" />
                </button>
                {openDropdown === "microphone" && (
                  <div className="absolute left-0 top-full z-10 mt-2 w-80 rounded-lg bg-white shadow-sm dark:bg-gray-700">
                    <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-[#1A56DB] hover:bg-gray-100 dark:text-blue-500 dark:hover:bg-gray-600"
                        >
                          <IconCheck />
                          MacBook Pro Microphone (Built-in)
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 ps-[38px] hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Shure SM7B Microphone
                        </button>
                      </li>
                      <li className="mt-2 flex items-center space-x-2 border-t border-gray-200 pb-1 pt-3 dark:border-gray-600">
                        <IconMicLarge className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                          <div className="h-1.5 rounded-full bg-[#1A56DB]" style={{ width: "45%" }} />
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Speakers selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("speakers")}
                  className="flex items-center pr-5 text-base font-medium text-gray-500 hover:underline dark:text-gray-400"
                >
                  <IconSpeaker className="me-1.5 h-5 w-5" />
                  Edifier S315
                  <IconChevronDown className="ms-1.5 h-5 w-5" />
                </button>
                {openDropdown === "speakers" && (
                  <div className="absolute left-0 top-full z-10 mt-2 w-80 rounded-lg bg-white shadow-sm dark:bg-gray-700">
                    <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-[#1A56DB] hover:bg-gray-100 dark:text-blue-500 dark:hover:bg-gray-600"
                        >
                          <IconCheck />
                          Edifier S315 D12 (Bluetooth)
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 ps-[38px] hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Monitor Dell 272U Q (DisplayPort)
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 ps-[38px] hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          MacBook PRO Speakers (Built-in)
                        </button>
                      </li>
                      <li className="mt-2 border-t border-gray-200 pb-1 pt-3 dark:border-gray-600">
                        <button
                          type="button"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <IconSpeaker className="me-1.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
                          Test speakers
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Camera selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("camera")}
                  className="flex items-center pr-5 text-base font-medium text-gray-500 hover:underline dark:text-gray-400"
                >
                  <IconCameraLarge className="me-1.5 h-5 w-5" />
                  Zoom Q8
                  <IconChevronDown className="ms-1.5 h-5 w-5" />
                </button>
                {openDropdown === "camera" && (
                  <div className="absolute left-0 top-full z-10 mt-2 w-80 rounded-lg bg-white shadow-sm dark:bg-gray-700">
                    <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 text-[#1A56DB] hover:bg-gray-100 dark:text-blue-500 dark:hover:bg-gray-600"
                        >
                          <IconCheck />
                          Zoom Q8 (Bluetooth)
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 ps-[38px] hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          MacBook PRO Camera (Built-in)
                        </button>
                      </li>
                      <li className="mt-2 border-t border-gray-200 pb-1 pt-3 dark:border-gray-600">
                        <button
                          type="button"
                          className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <IconCameraLarge className="me-1.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
                          Test video camera
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PreviewShell>
  );
}
