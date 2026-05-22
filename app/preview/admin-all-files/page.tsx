"use client";

import { PreviewShell } from "../PreviewShell";

// ── SVG icon helpers ────────────────────────────────────────────────────────

const IconDownload = () => (
  <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M13 11.1V4a1 1 0 1 0-2 0v7.1L8.8 8.4a1 1 0 1 0-1.6 1.2l4 5a1 1 0 0 0 1.6 0l4-5a1 1 0 1 0-1.6-1.2L13 11Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M9.7 15.9 7.4 13H5a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.4l-2.3 2.9a3 3 0 0 1-4.6 0Zm7.3.1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clipRule="evenodd" />
  </svg>
);

const IconArchive = () => (
  <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1c0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1Z" clipRule="evenodd" />
    <path d="M2 6c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
  </svg>
);

const IconTrash = () => (
  <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
  </svg>
);

const IconDotsHorizontal = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="4" d="M6 12h0m6 0h0m6 0h0" />
  </svg>
);

const IconChevronDown = () => (
  <svg className="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
  </svg>
);

// ── File icon variants ───────────────────────────────────────────────────────

const IconFilePdf = ({ size = "h-5 w-5" }: { size?: string }) => (
  <svg className={`${size} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2 0 1.1.9 2 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm-6 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H5Zm1.5 3H6v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 0 0-1 1v5c0 .6.4 1 1 1h1.4a2.6 2.6 0 0 0 2.6-2.6v-1.8a2.6 2.6 0 0 0-2.6-2.6H11Zm1 5v-3h.4a.6.6 0 0 1 .6.6v1.8a.6.6 0 0 1-.6.6H12Zm5-5a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1h1a1 1 0 1 0 0-2h-2Z" clipRule="evenodd" />
  </svg>
);

const IconFileVideo = ({ size = "h-5 w-5" }: { size?: string }) => (
  <svg className={`${size} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-2 4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9Zm0 2h2v2H9v-2Zm8-.6a1 1 0 0 0-1.7-.7L14 13a1 1 0 0 0-.3.8v.7c0 .3.1.6.4.8l1.2 1a1 1 0 0 0 1.7-.8v-3Z" clipRule="evenodd" />
  </svg>
);

const IconFileAudio = ({ size = "h-5 w-5" }: { size?: string }) => (
  <svg className={`${size} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm2.3 0A1 1 0 0 0 12 8v5.3a4 4 0 0 0-1.5-.3C8.8 13 7 14.1 7 16s1.8 3 3.5 3 3.5-1.1 3.5-3V9.8a3 3 0 0 1 1 2.2 1 1 0 1 0 2 0 5 5 0 0 0-1.9-3.9 6.4 6.4 0 0 0-1.8-1ZM9 16c0-.4.5-1 1.5-1s1.5.6 1.5 1-.5 1-1.5 1S9 16.4 9 16Z" clipRule="evenodd" />
  </svg>
);

const IconFileImage = ({ size = "h-5 w-5" }: { size?: string }) => (
  <svg className={`${size} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm.4 9.6a1 1 0 0 0-1.8 0l-2.5 6A1 1 0 0 0 8 19h8a1 1 0 0 0 .9-1.4l-2-4a1 1 0 0 0-1.7-.2l-.5.7-1.3-2.5ZM13 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
  </svg>
);

const IconFileCsv = ({ size = "h-5 w-5" }: { size?: string }) => (
  <svg className={`${size} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2 0 1.1.9 2 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm1 8.8A2.3 2.3 0 0 0 9.6 13a2.3 2.3 0 0 0 2.1 2.5h.7a.3.3 0 0 1 .2.4l-.4.1h-1a1 1 0 1 0 0 2h1c.5 0 1 0 1.4-.3a2 2 0 0 0 1-1.1 2.3 2.3 0 0 0-2.2-3l-.5-.1a.3.3 0 0 1-.3-.4.3.3 0 0 1 .4-.3h1a1 1 0 1 0 0-2h-1Zm8 1.5a1 1 0 1 0-2-.6l-.5 1.7-.5-1.7a1 1 0 0 0-2 .6l1.5 4.8a1 1 0 0 0 1.9 0l1.6-4.8Zm-13.8.9.4-.2h1a1 1 0 1 0 0-2h-1A2.6 2.6 0 0 0 4 13.6v1.8A2.6 2.6 0 0 0 6.6 18h1a1 1 0 1 0 0-2h-1a.6.6 0 0 1-.6-.6v-1.8c0-.1 0-.3.2-.4Z" clipRule="evenodd" />
  </svg>
);

const IconFilePpt = ({ size = "h-5 w-5" }: { size?: string }) => (
  <svg className={`${size} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2 0 1.1.9 2 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm-6 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H5Zm1.5 3H6v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H11Zm1.5 3H12v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 1 0 0 2v4a1 1 0 1 0 2 0v-4a1 1 0 1 0 0-2h-2Z" clipRule="evenodd" />
  </svg>
);

const IconFileZip = ({ size = "h-5 w-5" }: { size?: string }) => (
  <svg className={`${size} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm3 2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2V8h-2V6h2V4Z" clipRule="evenodd" />
  </svg>
);

// ── Static data ──────────────────────────────────────────────────────────────

const fileCategories = [
  {
    label: "Images",
    count: "6,043 files",
    iconBg: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-700 dark:text-teal-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm.394 9.553a1 1 0 0 0-1.817.062l-2.5 6A1 1 0 0 0 8 19h8a1 1 0 0 0 .894-1.447l-2-4A1 1 0 0 0 13.2 13.4l-.53.706-1.276-2.553ZM13 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Video files",
    count: "204 files",
    iconBg: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-700 dark:text-purple-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-2 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9Zm0 2h2v2H9v-2Zm7.965-.557a1 1 0 0 0-1.692-.72l-1.268 1.218a1 1 0 0 0-.308.721v.733a1 1 0 0 0 .37.776l1.267 1.032a1 1 0 0 0 1.631-.776v-2.984Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Audio files",
    count: "52 files",
    iconBg: "bg-yellow-100 dark:bg-yellow-900",
    iconColor: "text-yellow-700 dark:text-yellow-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm2.318.052h-.002A1 1 0 0 0 12 8v5.293A4.033 4.033 0 0 0 10.5 13C8.787 13 7 14.146 7 16s1.787 3 3.5 3 3.5-1.146 3.5-3c0-.107-.006-.211-.017-.313A1.04 1.04 0 0 0 14 15.5V9.766c.538.493 1 1.204 1 2.234a1 1 0 1 0 2 0c0-1.881-.956-3.14-1.86-3.893a6.4 6.4 0 0 0-1.636-.985 4.009 4.009 0 0 0-.165-.063l-.014-.005-.005-.001-.002-.001ZM9 16c0-.356.452-1 1.5-1s1.5.644 1.5 1-.452 1-1.5 1S9 16.356 9 16Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Documents",
    count: "1,657 files",
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-700 dark:text-blue-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm-6 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H5Zm1.5 3H6v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1.376A2.626 2.626 0 0 0 15 15.375v-1.75A2.626 2.626 0 0 0 12.375 11H11Zm1 5v-3h.375a.626.626 0 0 1 .625.626v1.748a.625.625 0 0 1-.626.626H12Zm5-5a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1h1a1 1 0 1 0 0-2h-2Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Executable",
    count: "105 files",
    iconBg: "bg-indigo-100 dark:bg-indigo-900",
    iconColor: "text-indigo-700 dark:text-indigo-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M3 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3Zm4.293 5.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L9.586 12 7.293 9.707ZM13 14a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Security",
    count: "11 files",
    iconBg: "bg-gray-100 dark:bg-gray-700",
    iconColor: "text-gray-700 dark:text-gray-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v5.703l-4.311-1.58a2 2 0 0 0-1.377 0l-5 1.832A2 2 0 0 0 8 11.861c.03 2.134.582 4.228 1.607 6.106.848 1.555 2 2.924 3.382 4.033H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M15.345 9.061a1 1 0 0 0-.689 0l-5 1.833a1 1 0 0 0-.656.953c.028 1.97.538 3.905 1.485 5.641a12.425 12.425 0 0 0 3.956 4.34 1 1 0 0 0 1.12 0 12.426 12.426 0 0 0 3.954-4.34A12.14 12.14 0 0 0 21 11.848a1 1 0 0 0-.656-.954l-5-1.833ZM15 19.765a10.401 10.401 0 0 0 2.76-3.235 10.15 10.15 0 0 0 1.206-4.011L15 11.065v8.7Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Compressed",
    count: "2,485 files",
    iconBg: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-700 dark:text-green-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm3 2h2.01v2.01h-2V8h2v2.01h-2V12h2v2.01h-2V16h2v2.01h-2v2H12V18h2v-1.99h-2V14h2v-1.99h-2V10h2V8.01h-2V6h2V4Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Others",
    count: "356 files",
    iconBg: "bg-pink-100 dark:bg-pink-900",
    iconColor: "text-pink-700 dark:text-pink-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Z" clipRule="evenodd" />
      </svg>
    ),
  },
];

const recentUploads = [
  {
    name: "Flowbite License",
    meta: "12 Pages · 18 MB · PDF",
    icon: <IconFilePdf />,
  },
  {
    name: "HomepageVideo.mp4",
    meta: "56 MB · MP4",
    icon: <IconFileVideo />,
  },
  {
    name: "ProjectData.csv",
    meta: "6 Pages · 9 MB · CSV",
    icon: <IconFileCsv />,
  },
  {
    name: "Flowbite Dev Plan",
    meta: "5 Pages · 12 MB · PDF",
    icon: <IconFilePdf />,
  },
];

type FileRow = {
  id: number;
  name: string;
  details: string;
  user: string;
  avatarNum: number;
  dateAdded: string;
  icon: React.ReactNode;
};

const fileRows: FileRow[] = [
  {
    id: 1,
    name: "Flowbite Pro Terms & Conditions",
    details: "12 pages · 18 MB · PDF",
    user: "Roberta Casas",
    avatarNum: 8,
    dateAdded: "Today",
    icon: <IconFilePdf size="h-4 w-4" />,
  },
  {
    id: 2,
    name: "HeroImage.jpg",
    details: "5.6 MB · JPG",
    user: "Bonnie Green",
    avatarNum: 1,
    dateAdded: "1 day ago",
    icon: <IconFileImage size="h-4 w-4" />,
  },
  {
    id: 3,
    name: "FlowbiteMusic.mp3",
    details: "4.7 MB · MP3",
    user: "Leslie Livingston",
    avatarNum: 2,
    dateAdded: "1 day ago",
    icon: <IconFileAudio size="h-4 w-4" />,
  },
  {
    id: 4,
    name: "ProjectPresentation.ppt",
    details: "47 Pages · 5 MB · PPT",
    user: "Micheal Gough",
    avatarNum: 3,
    dateAdded: "3 days ago",
    icon: <IconFilePpt size="h-4 w-4" />,
  },
  {
    id: 5,
    name: "HomepageVideo.mp4",
    details: "123 MB · MP4",
    user: "Joseph McFall",
    avatarNum: 4,
    dateAdded: "3 days ago",
    icon: <IconFileVideo size="h-4 w-4" />,
  },
  {
    id: 6,
    name: "ProjectData.csv",
    details: "1 MB · CSV",
    user: "Robert Brown",
    avatarNum: 5,
    dateAdded: "3 days ago",
    icon: <IconFileCsv size="h-4 w-4" />,
  },
  {
    id: 7,
    name: "FlowbiteMusic.mp4",
    details: "18 MB · MP4",
    user: "Karen Nelson",
    avatarNum: 6,
    dateAdded: "6 days ago",
    icon: <IconFileVideo size="h-4 w-4" />,
  },
  {
    id: 8,
    name: "PortfolioImages.zip",
    details: "50 Files · 37 MB · ZIP",
    user: "Helene Engels",
    avatarNum: 7,
    dateAdded: "1 week ago",
    icon: <IconFileZip size="h-4 w-4" />,
  },
  {
    id: 9,
    name: "Flowbite Pro Terms & Conditions",
    details: "12 pages · 18 MB · PDF",
    user: "Neils Sims",
    avatarNum: 9,
    dateAdded: "1 week ago",
    icon: <IconFilePdf size="h-4 w-4" />,
  },
  {
    id: 10,
    name: "HeroImage.jpg",
    details: "5.6 MB · JPG",
    user: "Bonnie Green",
    avatarNum: 1,
    dateAdded: "1 week ago",
    icon: <IconFileImage size="h-4 w-4" />,
  },
];

// ── Sub-components ──────────────────────────────────────────────────────────

function RowActionMenu({ id }: { id: number }) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        aria-label={`Actions for file ${id}`}
      >
        <IconDotsHorizontal />
      </button>
      {/* Static dropdown — visible on hover for demo purposes */}
      <div className="pointer-events-none absolute right-0 top-8 z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-sm group-hover:pointer-events-auto group-hover:block dark:divide-gray-600 dark:bg-gray-700">
        <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <button type="button" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
              <IconDownload />
              Download
            </button>
          </li>
          <li>
            <button type="button" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
              <IconArchive />
              Archive
            </button>
          </li>
        </ul>
        <div className="p-2">
          <button type="button" className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600">
            <IconTrash />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function AdminAllFilesPage() {
  return (
    <PreviewShell variant="admin" title="All Files">

      {/* ── Breadcrumb + page title ─────────────────────────────────────── */}
      <div className="my-4 px-4">
        <nav className="mb-4 flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white">
                <svg className="me-2.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                </svg>
                <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white md:ms-2">Projects</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Project files</span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Project files</h1>
      </div>

      <div className="mb-4 grid gap-4 px-4">

        {/* ── 1. File category cards ──────────────────────────────────────── */}
        <div className="mb-4 grid grid-cols-2 gap-4 xl:grid-cols-4">
          {fileCategories.map((cat) => (
            <div
              key={cat.label}
              className="items-center space-x-0 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:flex sm:space-x-4 md:p-6"
            >
              <div className={`mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${cat.iconBg} ${cat.iconColor} sm:mb-0`}>
                {cat.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{cat.label}</h2>
                <p className="text-gray-500 dark:text-gray-400">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── 2. Recent uploads ───────────────────────────────────────────── */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent uploads</h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {recentUploads.map((file) => (
            <div
              key={file.name}
              className="flex items-start justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6"
            >
              <div className="me-2">
                <span className="flex items-center gap-1 pb-2 text-sm font-medium text-gray-900 dark:text-white">
                  {file.icon}
                  {file.name}
                </span>
                <span className="flex gap-2 text-xs font-normal text-gray-500 dark:text-gray-400">
                  {file.meta.split(" · ").map((part, i, arr) => (
                    <span key={i} className="flex items-center gap-2">
                      {part}
                      {i < arr.length - 1 && (
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                          <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                        </svg>
                      )}
                    </span>
                  ))}
                </span>
              </div>
              <div className="inline-flex items-center self-center">
                <button
                  type="button"
                  className="inline-flex items-center self-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  title="Download"
                >
                  <svg className="h-4 w-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── 3. Files and assets table ───────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">

          {/* Table toolbar */}
          <div>
            <div className="divide-y px-4 dark:divide-gray-700 divide-gray-200">

              {/* Title row */}
              <div className="flex flex-col space-y-3 py-3 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0">
                <div className="flex flex-1 items-center space-x-2">
                  <h5 className="text-lg font-semibold">
                    <span className="dark:text-white">Files and assets</span>
                    <span className="ml-1 text-base font-normal text-gray-500 dark:text-gray-400">1-10 (436)</span>
                  </h5>
                </div>
                <div className="flex shrink-0 flex-col items-start space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
                  <button
                    type="button"
                    className="inline-flex shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-4 w-4" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
                    </svg>
                    Table settings
                  </button>
                </div>
              </div>

              {/* Search + action buttons row */}
              <div className="flex flex-col items-stretch justify-between space-y-3 py-4 md:flex-row md:items-center md:space-x-3 md:space-y-0">
                {/* Search */}
                <div className="w-full md:w-1/2">
                  <div className="relative w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search for files"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex w-full shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
                  {/* Add new file */}
                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-lg px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
                    style={{ backgroundColor: "#1A56DB" }}
                  >
                    <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v6.4A7.5 7.5 0 1 0 10.5 22H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M9 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-3c.6 0 1 .4 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1c0-.6.4-1 1-1Z" clipRule="evenodd" />
                    </svg>
                    Add new file
                  </button>

                  {/* Filter options */}
                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                  >
                    <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z" />
                    </svg>
                    Filter options
                    <IconChevronDown />
                  </button>

                  {/* Actions */}
                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                  >
                    Actions
                    <IconChevronDown />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Table ─────────────────────────────────────────────────────── */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-6 whitespace-nowrap">File name</th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-6 whitespace-nowrap">Details</th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-6 whitespace-nowrap">User</th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-6 whitespace-nowrap">Date added</th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-6">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {fileRows.map((row) => (
                  <tr key={row.id} className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white sm:px-6">
                      <div className="flex items-center gap-1.5">
                        {row.icon}
                        {row.name}
                      </div>
                    </th>
                    <td className="whitespace-nowrap px-4 py-3 sm:px-6 text-gray-500 dark:text-gray-400">
                      {row.details.split(" · ").map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && <span className="mx-1">&#x2025;</span>}
                        </span>
                      ))}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 sm:px-6">
                      <div className="flex items-center gap-3 font-medium text-gray-900 dark:text-white">
                        <img
                          src={`/images/users/avatar-${row.avatarNum}.png`}
                          alt={`${row.user} avatar`}
                          className="h-8 w-8 rounded-full object-cover"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = "none";
                            const parent = target.parentElement;
                            if (parent) {
                              const initials = document.createElement("div");
                              initials.className = "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-500 dark:bg-gray-700 dark:text-gray-400";
                              initials.textContent = row.user.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
                              parent.insertBefore(initials, target);
                            }
                          }}
                        />
                        {row.user}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white sm:px-6">
                      {row.dateAdded}
                    </td>
                    <td className="px-4 py-3 sm:px-6">
                      <div className="flex items-center justify-end">
                        <RowActionMenu id={row.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Pagination ──────────────────────────────────────────────── */}
          <nav
            className="flex flex-col items-start justify-between space-y-3 p-4 sm:p-6 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
              {" "}of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">78</span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <a
                  href="#"
                  className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                  </svg>
                </a>
              </li>
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
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 flex items-center justify-center border border-blue-300 bg-blue-50 px-3 py-2 text-sm leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              {["...", "7"].map((p) => (
                <li key={p}>
                  <a
                    href="#"
                    className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </PreviewShell>
  );
}
