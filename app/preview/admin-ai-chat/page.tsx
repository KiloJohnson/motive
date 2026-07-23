"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";

// ── SVG icon helpers ────────────────────────────────────────────────────────

function IconSettings({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z" />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
}

function IconShare({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8" />
    </svg>
  );
}

function IconHistory({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function IconNewChat({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M17.44 3a1 1 0 0 1 .707.293l2.56 2.56a1 1 0 0 1 0 1.414L18.194 9.78 14.22 5.806l2.513-2.513A1 1 0 0 1 17.44 3Zm-4.634 4.22-9.513 9.513a1 1 0 0 0 0 1.414l2.56 2.56a1 1 0 0 0 1.414 0l9.513-9.513-3.974-3.974ZM6 6a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 0 1 0-2h1V7a1 1 0 0 1 1-1Zm9 9a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1Z" clipRule="evenodd" />
      <path d="M19 13h-2v2h2v-2ZM13 3h-2v2h2V3Zm-2 2H9v2h2V5ZM9 3H7v2h2V3Zm12 8h-2v2h2v-2Zm0 4h-2v2h2v-2Z" />
    </svg>
  );
}

function IconEdit({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z" clipRule="evenodd" />
    </svg>
  );
}

function IconCopy({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clipRule="evenodd" />
    </svg>
  );
}

function IconThumbUp({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z" clipRule="evenodd" />
    </svg>
  );
}

function IconThumbDown({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z" clipRule="evenodd" />
    </svg>
  );
}

function IconDownload({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clipRule="evenodd" />
    </svg>
  );
}

function IconSend({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
      <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
    </svg>
  );
}

function IconChat({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function IconClose({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
    </svg>
  );
}

function IconChevronDown({ className = "mx-1.5 h-2.5 w-2.5" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
    </svg>
  );
}

// ── Reusable action buttons row ─────────────────────────────────────────────

function MessageActions() {
  return (
    <div className="flex items-center gap-1 mt-3">
      <button
        type="button"
        title="Copy text"
        className="inline-flex cursor-pointer justify-center rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <IconCopy />
        <span className="sr-only">Copy text</span>
      </button>
      <button
        type="button"
        title="Like response"
        className="inline-flex cursor-pointer justify-center rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <IconThumbUp />
        <span className="sr-only">Like response</span>
      </button>
      <button
        type="button"
        title="Unlike response"
        className="inline-flex cursor-pointer justify-center rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <IconThumbDown />
        <span className="sr-only">Unlike response</span>
      </button>
    </div>
  );
}

// ── User avatar placeholder ─────────────────────────────────────────────────

function UserAvatar() {
  return (
    <div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
      B
    </div>
  );
}

// ── AI avatar (Scripps blue circle) ────────────────────────────────────────

function AiAvatar() {
  return (
    <div className="h-6 w-6 shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1A56DB" }}>
      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 17.93V18a1 1 0 0 0-2 0v1.93A8.008 8.008 0 0 1 4.07 13H6a1 1 0 0 0 0-2H4.07A8.008 8.008 0 0 1 11 4.07V6a1 1 0 0 0 2 0V4.07A8.008 8.008 0 0 1 19.93 11H18a1 1 0 0 0 0 2h1.93A8.008 8.008 0 0 1 13 19.93z" />
      </svg>
    </div>
  );
}

// ── Edit prompt button ──────────────────────────────────────────────────────

function EditButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title="Edit prompt"
      className="opacity-0 absolute top-4 right-4 group-hover:opacity-100 transition-opacity rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    >
      <IconEdit />
    </button>
  );
}

// ── Chat history drawer ─────────────────────────────────────────────────────

const historyGroups = [
  {
    label: "Today",
    items: [
      "Flowbite: Intuitive AI Chatroom",
      "Sample Daily Schedule",
      "Billing Page Content",
      "Redesign Homepage",
      "DMCA Removal",
      "Figma: Variants vs Text",
    ],
  },
  {
    label: "Yesterday",
    items: [
      "Flowbite: Intuitive AI Chatroom",
      "Sample Daily Schedule",
      "Billing Page Content",
      "Redesign Homepage",
      "DMCA Removal",
      "Figma: Variants vs Text",
    ],
  },
  {
    label: "August",
    items: [
      "Flowbite: Intuitive AI Chatroom",
      "Sample Daily Schedule",
      "Billing Page Content",
      "Redesign Homepage",
      "DMCA Removal",
      "Figma: Variants vs Text",
    ],
  },
];

function HistoryDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/20 dark:bg-black/40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen w-80 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800 ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-labelledby="drawer-chat-history-label"
      >
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h5
            id="drawer-chat-history-label"
            className="inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            Chat History
          </h5>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-2.5 end-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <IconClose />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <div className="my-5 h-[calc(100vh-16rem)] space-y-5 overflow-y-auto">
          {historyGroups.map((group) => (
            <div key={group.label}>
              <h6 className="mb-4 inline-flex items-center text-base font-medium text-gray-500 dark:text-gray-400">
                {group.label}
              </h6>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <IconChat className="me-2 h-5 w-5 shrink-0 text-gray-500 dark:text-gray-400" />
                      <span className="text-base font-medium text-gray-900 dark:text-white">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <ul className="mb-4 space-y-2">
            <li>
              <a href="#" className="flex items-center rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg className="me-2 h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clipRule="evenodd" />
                </svg>
                <span className="text-base font-medium text-gray-900 dark:text-white">User settings</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg className="me-2 h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="m7.4 3.736 3.43 3.429A5.046 5.046 0 0 1 12.133 7c.356.01.71.06 1.056.147l3.41-3.412a2.32 2.32 0 0 1 .451-.344A9.89 9.89 0 0 0 12.268 2a10.022 10.022 0 0 0-5.322 1.392c.165.095.318.211.454.344Zm11.451 1.54-.127-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.03.023.05.054.078.077.237.194.454.41.651.645.033.038.077.067.11.107l2.926-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.025.03-.058.052-.082.082a4.97 4.97 0 0 1-.633.639c-.04.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.443-4.763a3.037 3.037 0 0 0-1.383-1.1l-.012-.007a2.956 2.956 0 0 0-1-.213H12a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.009.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .488 1.716l.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.319.129.657.2 1 .213.393.015.784-.05 1.15-.192.012-.005.021-.013.033-.018a3.01 3.01 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.349.447l-3.426 3.426c.112.428.166.869.161 1.311a4.954 4.954 0 0 1-.148 1.054l3.413 3.412c.133.134.249.283.347.444A9.88 9.88 0 0 0 22 12.269a9.913 9.913 0 0 0-1.386-5.319ZM16.6 20.264l-3.42-3.421c-.386.1-.782.152-1.18.157h-.135c-.356-.01-.71-.06-1.056-.147L7.4 20.265a2.503 2.503 0 0 1-.444.347A9.884 9.884 0 0 0 11.732 22H12a9.9 9.9 0 0 0 5.044-1.388 2.515 2.515 0 0 1-.444-.348ZM3.735 16.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L3.735 7.4a2.508 2.508 0 0 1-.349-.447 9.889 9.889 0 0 0 0 10.1 2.48 2.48 0 0 1 .35-.453Z" />
                </svg>
                <span className="text-base font-medium text-gray-900 dark:text-white">Help &amp; Getting Started</span>
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            <svg className="me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clipRule="evenodd" />
            </svg>
            Upgrade to Pro
          </a>
        </div>
      </div>
    </>
  );
}

// ── Edit prompt modal ───────────────────────────────────────────────────────

function EditPromptModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="relative w-full max-w-md rounded-lg bg-white shadow-sm dark:bg-gray-700">
        <div className="flex items-center justify-between px-4 pt-4 pb-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Edit prompt</h3>
          <button
            type="button"
            onClick={onClose}
            className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <IconClose />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <form className="p-4 md:p-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="mb-4 grid grid-cols-2 gap-4 md:mb-5">
            <div className="col-span-2">
              <label htmlFor="edit-prompt" className="sr-only block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Prompt content
              </label>
              <textarea
                id="edit-prompt"
                rows={4}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Update the prompt content here"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            style={{ backgroundColor: "#1A56DB" }}
          >
            Update prompt
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Settings modal ──────────────────────────────────────────────────────────

type SettingsTab = "general" | "data-controls" | "applications" | "security";

function SettingsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<SettingsTab>("general");

  if (!open) return null;

  const tabs: { id: SettingsTab; label: string; icon: React.ReactNode }[] = [
    {
      id: "general",
      label: "General",
      icon: <IconSettings className="me-2 h-5 w-5" />,
    },
    {
      id: "data-controls",
      label: "Data controls",
      icon: (
        <svg className="me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v14m6-8h-6m6 4h-6m-9-3h1.99093M4 19h16c.5523 0 1-.4477 1-1V6c0-.55228-.4477-1-1-1H4c-.55228 0-1 .44772-1 1v12c0 .5523.44772 1 1 1Zm8-7c0 1.1046-.8954 2-2 2-1.10457 0-2-.8954-2-2s.89543-2 2-2c1.1046 0 2 .8954 2 2Z" />
        </svg>
      ),
    },
    {
      id: "applications",
      label: "Applications",
      icon: (
        <svg className="me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z" />
        </svg>
      ),
    },
    {
      id: "security",
      label: "Security",
      icon: (
        <svg className="me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a28.076 28.076 0 0 1-1.091 9M7.231 4.37a8.994 8.994 0 0 1 12.88 3.73M2.958 15S3 14.577 3 12a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088A5.98 5.98 0 0 1 18 12a30 30 0 0 1-.464 6.232M6 12a6 6 0 0 1 9.352-4.974M4 21a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M7.5 19.336C9 17.092 9 14.845 9 12a3 3 0 1 1 6 0c0 .749 0 1.521-.031 2.311M12 12c0 3 0 6-2 9" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="relative w-full max-w-3xl rounded-lg bg-white shadow-sm dark:bg-gray-800">
        <div className="flex items-center justify-between rounded-t px-4 pt-4 md:px-5 md:pt-5">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Chat settings</h3>
          <button
            type="button"
            onClick={onClose}
            className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <IconClose />
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="p-4 md:p-5">
          {/* Tab buttons */}
          <div className="border-y border-gray-200 py-5 dark:border-gray-700">
            <ul className="grid grid-cols-2 gap-4 text-sm font-medium md:grid-cols-4">
              {tabs.map((tab) => (
                <li key={tab.id} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? "bg-primary-700 text-white dark:bg-primary-600"
                        : "bg-gray-50 text-gray-900 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    }`}
                    style={activeTab === tab.id ? { backgroundColor: "#1A56DB" } : undefined}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tab content */}
          <div className="pt-4">
            {activeTab === "general" && (
              <div className="space-y-5 divide-y divide-gray-200 dark:divide-gray-700">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h6 className="mb-1 text-base font-medium text-gray-900 dark:text-white">Theme</h6>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Adapt your display with Light/Dark mode options</p>
                  </div>
                  <div className="shrink-0">
                    <button className="flex items-center rounded-full p-1.5 text-sm font-medium text-gray-900 hover:text-primary-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:text-primary-500 dark:focus:ring-gray-700" type="button">
                      System <IconChevronDown />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 pt-5">
                  <div>
                    <h6 className="mb-1 text-base font-medium text-gray-900 dark:text-white">Language</h6>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Choose the language used in the application</p>
                  </div>
                  <div className="shrink-0">
                    <button className="flex items-center rounded-full p-1.5 text-sm font-medium text-gray-900 hover:text-primary-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:text-primary-500 dark:focus:ring-gray-700" type="button">
                      English (US) <IconChevronDown />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 pt-5">
                  <div>
                    <h6 className="mb-1 text-base font-medium text-gray-900 dark:text-white">Archive chats</h6>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Keep your chat history stored and organized</p>
                  </div>
                  <div className="shrink-0">
                    <button className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700" type="button">
                      Archive all chats
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 pt-5">
                  <div>
                    <h6 className="mb-1 text-base font-medium text-gray-900 dark:text-white">Delete all chats</h6>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Permanently remove all chat history</p>
                  </div>
                  <div className="shrink-0">
                    <button className="rounded-lg bg-red-700 px-3 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" type="button">
                      Delete all chats
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "data-controls" && (
              <p className="py-6 text-sm text-gray-500 dark:text-gray-400">Data controls settings would appear here.</p>
            )}
            {activeTab === "applications" && (
              <p className="py-6 text-sm text-gray-500 dark:text-gray-400">Application integration settings would appear here.</p>
            )}
            {activeTab === "security" && (
              <p className="py-6 text-sm text-gray-500 dark:text-gray-400">Security settings would appear here.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminAiChatPage() {
  const [historyOpen, setHistoryOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const models = ["GPT-4o mini", "GPT-4o", "Gemini 1.5 Pro"];
  const [selectedModel, setSelectedModel] = useState("Default (GPT-3.5)");

  return (
    <PreviewShell variant="admin" title="AI Chat">
      <div className="relative flex h-[calc(100vh-4rem)] flex-col">

        {/* ── Top bar ─────────────────────────────────────────────────────── */}
        <div className="border-b border-gray-200 bg-white px-4 py-2.5 pb-4 dark:border-gray-700 dark:bg-gray-800 sm:pb-2.5">
          <div className="mb-2.5 flex w-full items-center justify-between sm:mb-0">
            {/* Left: settings + share */}
            <div className="flex items-center gap-0.5">
              <button
                type="button"
                title="Chat settings"
                onClick={() => setSettingsOpen(true)}
                className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
              >
                <span className="sr-only">Chat settings</span>
                <IconSettings />
              </button>
              <button
                type="button"
                title="Share conversation"
                className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
              >
                <span className="sr-only">Share conversation</span>
                <IconShare />
              </button>
            </div>

            {/* Right: new chat + model selector + history */}
            <div className="flex items-center gap-1">
              {/* New chat — hidden on mobile, shown sm+ */}
              <button
                type="button"
                className="me-4 hidden items-center justify-center rounded-lg px-6 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:flex sm:w-auto"
                style={{ backgroundColor: "#1A56DB" }}
              >
                <IconNewChat className="me-2 h-4 w-4" />
                New chat
              </button>

              {/* Model dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setModelDropdownOpen((v) => !v)}
                  className="me-2 flex items-center rounded-full p-1.5 text-sm font-medium text-gray-900 hover:text-primary-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:text-primary-500 dark:focus:ring-gray-700"
                >
                  <span className="sr-only">Open model menu</span>
                  {selectedModel}
                  <IconChevronDown />
                </button>
                {modelDropdownOpen && (
                  <div className="absolute right-0 z-10 mt-1 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700">
                    <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400" role="none">
                      {models.map((m) => (
                        <li key={m}>
                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => { setSelectedModel(m); setModelDropdownOpen(false); }}
                            className="inline-flex w-full items-center rounded-md px-3 py-2 text-left hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {m}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* History */}
              <button
                type="button"
                title="View chat history"
                onClick={() => setHistoryOpen(true)}
                className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
              >
                <span className="sr-only">View history</span>
                <IconHistory />
              </button>
            </div>
          </div>

          {/* New chat — mobile only */}
          <div className="sm:hidden">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-lg px-6 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300"
              style={{ backgroundColor: "#1A56DB" }}
            >
              <IconNewChat className="me-2 h-4 w-4" />
              New chat
            </button>
          </div>
        </div>

        {/* ── Chat messages ────────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-4xl space-y-6 px-4 py-4 lg:px-6 lg:py-6">

            {/* Message 1: User prompt */}
            <div className="group relative flex items-start gap-6 rounded-lg bg-white p-6 pe-14 shadow-xs dark:bg-gray-800">
              <UserAvatar />
              <div className="text-sm text-gray-900 dark:text-white">
                <p>&ldquo;Generate a list of potential essay topics for [design principles], along with a brief outline of main points to be discussed&rdquo;</p>
              </div>
              <EditButton onClick={() => setEditOpen(true)} />
            </div>

            {/* Message 2: AI response */}
            <div className="group relative flex items-start gap-6 rounded-lg bg-white p-6 pe-14 shadow-xs dark:bg-gray-800">
              <AiAvatar />
              <div className="flex-1 min-w-0">
                <p className="mb-3 text-sm text-gray-900 dark:text-white">
                  Certainly! Here is a list of potential essay topics related to design principles, along with a brief outline of main points for each topic:
                </p>
                <p className="mb-2 text-sm font-bold text-gray-900 dark:text-white">1. The Influence of Balance in Visual Design:</p>
                <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Introduction to balance as a fundamental design principle.</li>
                  <li>Exploring symmetrical and asymmetrical balance.</li>
                  <li>Examples of how balance impacts the perception of visual elements.</li>
                  <li>The role of balance in various design disciplines (e.g., graphic design, architecture).</li>
                </ul>
                <p className="mb-2 text-sm font-bold text-gray-900 dark:text-white">2. Contrast and Its Impact on Design Communication:</p>
                <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>Introduction to contrast and its significance in design.</li>
                  <li>Exploring the use of color, typography, and scale to create contrast.</li>
                  <li>How contrast guides the viewer&apos;s attention and conveys meaning.</li>
                  <li>Case studies demonstrating effective use of contrast in real-world designs.</li>
                </ul>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                  These essay topics provide a comprehensive range of subjects related to design principles, each with its own set of key points for discussion.
                </p>
                <MessageActions />
              </div>
              <EditButton onClick={() => setEditOpen(true)} />
            </div>

            {/* Message 3: User prompt */}
            <div className="group relative flex items-center gap-6 rounded-lg bg-white p-6 pe-14 shadow-xs dark:bg-gray-800">
              <UserAvatar />
              <div className="text-sm text-gray-900 dark:text-white">
                <p>&ldquo;Generate a [Flowbite Navbar] code with 2 items&rdquo;</p>
              </div>
              <EditButton onClick={() => setEditOpen(true)} />
            </div>

            {/* Message 4: AI code response */}
            <div className="group relative flex items-start gap-6 rounded-lg bg-white p-6 pe-14 shadow-xs dark:bg-gray-800">
              <AiAvatar />
              <div className="w-full min-w-0 flex-1">
                <p className="mb-3 text-sm text-gray-900 dark:text-white">Certainly! Below is a Flowbite Navbar with two items:</p>
                {/* Code block */}
                <div className="relative mb-4 h-64 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                  <div className="h-full overflow-auto">
                    <pre className="text-sm text-gray-500 dark:text-gray-400">
                      <code>{`'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';

function Component() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg`} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>Home</Navbar.Link>
        <Navbar.Link as={Link} href="#">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}`}</code>
                    </pre>
                  </div>
                  {/* Copy code button */}
                  <div className="absolute end-2 top-2 bg-gray-50 dark:bg-gray-700">
                    <button
                      type="button"
                      className="inline-flex h-8 items-center justify-center rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                    >
                      <svg className="me-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                      </svg>
                      <span className="text-xs font-semibold">Copy code</span>
                    </button>
                  </div>
                </div>
                <MessageActions />
              </div>
              <EditButton onClick={() => setEditOpen(true)} />
            </div>

            {/* Message 5: User prompt */}
            <div className="group relative flex items-center gap-6 rounded-lg bg-white p-6 pe-14 shadow-xs dark:bg-gray-800">
              <UserAvatar />
              <div className="text-sm text-gray-900 dark:text-white">
                <p>&ldquo;Create a advanced list of potential influencers to collaborate with for social media and marketing campaigns&rdquo;</p>
              </div>
              <EditButton onClick={() => setEditOpen(true)} />
            </div>

            {/* Message 6: AI influencer list */}
            <div className="group relative flex items-start gap-6 rounded-lg bg-white p-6 pe-14 shadow-xs dark:bg-gray-800">
              <AiAvatar />
              <div className="flex-1 min-w-0">
                <p className="mb-3 text-sm text-gray-900 dark:text-white">
                  Certainly! When creating a list of potential influencers for social media and marketing campaigns, it&apos;s important to consider factors like their niche, follower demographics, engagement rate, and overall influence. Here&apos;s an advanced list with various niches:
                </p>
                <p className="mb-2 text-sm font-bold text-gray-900 dark:text-white">1. Fitness and Wellness:</p>
                <ul className="mb-3 list-inside list-disc space-y-1 text-sm">
                  <li><a href="#" className="text-primary-700 hover:underline dark:text-primary-400">@FitnessInfluencerX</a></li>
                  <li><a href="#" className="text-primary-700 hover:underline dark:text-primary-400">@YogaGuruY</a></li>
                  <li><a href="#" className="text-primary-700 hover:underline dark:text-primary-400">@NutritionExpertZ</a></li>
                </ul>
                <p className="mb-2 text-sm font-bold text-gray-900 dark:text-white">2. Technology and Gadgets:</p>
                <ul className="mb-3 list-inside list-disc space-y-1 text-sm">
                  <li><a href="#" className="text-primary-700 hover:underline dark:text-primary-400">@TechGeekJ</a></li>
                  <li><a href="#" className="text-primary-700 hover:underline dark:text-primary-400">@GadgetReviewerK</a></li>
                  <li><a href="#" className="text-primary-700 hover:underline dark:text-primary-400">@InnovationExpertL</a></li>
                </ul>
                <p className="mb-2 text-sm font-bold text-gray-900 dark:text-white">3. Photography and Art</p>
                <ul className="mb-3 list-inside list-disc space-y-1 text-sm">
                  <li><a href="#" className="text-primary-700 hover:underline dark:text-primary-400">@PhotographyProBB</a></li>
                  <li><a href="#" className="text-primary-700 hover:underline dark:text-primary-400">@ArtisticCreatorCC</a></li>
                  <li><a href="#" className="text-primary-700 hover:underline dark:text-primary-400">@IllustrationInfluencerDD</a></li>
                </ul>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                  Remember, it&apos;s important to research and vet these influencers thoroughly to ensure they align with your brand&apos;s values and target audience.
                </p>
                <MessageActions />
              </div>
              <EditButton onClick={() => setEditOpen(true)} />
            </div>

            {/* Message 7: User image prompt */}
            <div className="group relative flex items-center gap-6 rounded-lg bg-white p-6 pe-14 shadow-xs dark:bg-gray-800">
              <UserAvatar />
              <div className="text-sm text-gray-900 dark:text-white">
                <p>&ldquo;Please generate 6 surreal landscapes images with bright colors and organic shapes.&rdquo;</p>
              </div>
              <EditButton onClick={() => setEditOpen(true)} />
            </div>

            {/* Message 8: AI image grid response */}
            <div className="group relative flex items-start gap-6 rounded-lg bg-white p-6 pe-14 shadow-xs dark:bg-gray-800">
              <AiAvatar />
              <div className="flex-1 min-w-0">
                {/* 3x2 image grid */}
                <div className="mb-4 grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div key={n} className="group/image relative">
                      {/* Placeholder image using gradient */}
                      <div
                        className="h-auto w-full rounded-lg aspect-square"
                        style={{
                          background: n === 1 ? "linear-gradient(135deg,#a78bfa,#60a5fa)" :
                                      n === 2 ? "linear-gradient(135deg,#34d399,#60a5fa)" :
                                      n === 3 ? "linear-gradient(135deg,#f472b6,#fb923c)" :
                                      n === 4 ? "linear-gradient(135deg,#fbbf24,#f472b6)" :
                                      n === 5 ? "linear-gradient(135deg,#4ade80,#a78bfa)" :
                                               "linear-gradient(135deg,#60a5fa,#34d399)",
                        }}
                      />
                      <button
                        type="button"
                        title="Download image"
                        className="absolute right-2 top-2 rounded-lg bg-black/20 p-1.5 text-sm text-white opacity-0 transition-opacity hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 group-hover/image:opacity-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      >
                        <IconDownload />
                      </button>
                    </div>
                  ))}
                </div>
                <MessageActions />
              </div>
              <EditButton onClick={() => setEditOpen(true)} />
            </div>

          </div>
        </div>

        {/* ── Input bar ────────────────────────────────────────────────────── */}
        <div className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center gap-4 bg-white px-4 py-3 dark:bg-gray-800">
            <label htmlFor="ai-chat-input" className="sr-only">Write message</label>
            <input
              type="text"
              id="ai-chat-input"
              name="ai-chat-input"
              placeholder="Write a prompt..."
              autoFocus
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="block w-full border-0 bg-white px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
            />
            <button
              type="submit"
              title="Send message"
              className="inline-flex cursor-pointer justify-center rounded-full p-2 hover:bg-blue-100 dark:hover:bg-gray-600"
              style={{ color: "#1A56DB" }}
            >
              <IconSend className="h-4 w-4 rotate-90 rtl:-rotate-90" />
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </div>

      </div>

      {/* ── Overlays / modals ──────────────────────────────────────────────── */}
      <HistoryDrawer open={historyOpen} onClose={() => setHistoryOpen(false)} />
      <EditPromptModal open={editOpen} onClose={() => setEditOpen(false)} />
      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />

    </PreviewShell>
  );
}
