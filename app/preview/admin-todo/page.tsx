"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";

// ── SVG icon helpers ───────────────────────────────────────────────────────

const HomeIcon = () => (
  <svg className="me-2.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd" />
  </svg>
);

const ChevronRight = () => (
  <svg className="mx-1 h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
  </svg>
);

const CalendarIcon = ({ className = "me-1 h-4 w-4" }: { className?: string }) => (
  <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
  </svg>
);

const PlusIcon = ({ className = "me-2 h-5 w-5" }: { className?: string }) => (
  <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
  </svg>
);

const FlagIcon = ({ color }: { color: string }) => (
  <svg className={`me-1.5 hidden h-6 w-6 shrink-0 sm:flex ${color}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 14v7M5 5v9.5c5.6-5.5 8.4 2.7 14 0V4.8c-5.6 2.7-8.4-5.5-14 0Z" />
  </svg>
);

const DotsHorizontal = () => (
  <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M6 12h0m6 0h0m6 0h0" />
  </svg>
);

const EditIcon = () => (
  <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z" clipRule="evenodd" />
  </svg>
);

const DuplicateIcon = () => (
  <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M8 12.7a2 2 0 0 1-1 .3H3v6c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2h-2a4 4 0 0 1-4-4v-2.3ZM7 11V7a2 2 0 0 0-1 .7l-2.5 2.9a2 2 0 0 0-.3.4H7Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M14 3v4h-3.8c0-.2.2-.3.3-.4l2.4-2.9a2 2 0 0 1 1.1-.6Zm2 0v4a2 2 0 0 1-2 2h-4v6c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Z" clipRule="evenodd" />
  </svg>
);

const FolderIcon = () => (
  <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M3 6c0-1.1.9-2 2-2h5.5a2 2 0 0 1 1.6.7L14 7H3V6Zm0 3v10c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V9H3Z" clipRule="evenodd" />
  </svg>
);

const TrashIcon = ({ className = "me-1.5 h-4 w-4" }: { className?: string }) => (
  <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
  </svg>
);

const AttachIcon = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
  </svg>
);

const ImageIcon = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm.4 9.6a1 1 0 0 0-1.8 0l-2.5 6A1 1 0 0 0 8 19h8a1 1 0 0 0 .9-1.4l-2-4a1 1 0 0 0-1.7-.2l-.5.7-1.3-2.5ZM13 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
  </svg>
);

const CodeIcon = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm-.3 9.3c.4.4.4 1 0 1.4L9.4 14l1.3 1.3a1 1 0 0 1-1.4 1.4l-2-2a1 1 0 0 1 0-1.4l2-2a1 1 0 0 1 1.4 0Zm2.6 1.4a1 1 0 0 1 1.4-1.4l2 2c.4.4.4 1 0 1.4l-2 2a1 1 0 0 1-1.4-1.4l1.3-1.3-1.3-1.3Z" clipRule="evenodd" />
  </svg>
);

const EmojiIcon = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM8 9c0-.6.4-1 1-1a1 1 0 0 1 0 2 1 1 0 0 1-1-1Zm6 0c0-.6.4-1 1-1a1 1 0 1 1 0 2 1 1 0 0 1-1-1Zm-5.5 7.2c-1-.8-1.7-2-1.9-3.2h10.8a5.5 5.5 0 0 1-9 3.2Z" clipRule="evenodd" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M13 11.1V4a1 1 0 1 0-2 0v7.1L8.8 8.4a1 1 0 1 0-1.6 1.2l4 5a1 1 0 0 0 1.6 0l4-5a1 1 0 1 0-1.6-1.2L13 11Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M9.7 15.9 7.4 13H5a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.4l-2.3 2.9a3 3 0 0 1-4.6 0Zm7.3.1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clipRule="evenodd" />
  </svg>
);

const FullscreenIcon = () => (
  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5" />
  </svg>
);

const GoogleIcon = () => (
  <svg className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
  </svg>
);

const ReplyIcon = () => (
  <svg className="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1h-6.6a1 1 0 0 0-.7.3l-2.9 2.5c-.3.3-.8.1-.8-.3V17c0-.6-.4-1-1-1H5a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Z" />
  </svg>
);

// ── Toolbar for rich text areas ────────────────────────────────────────────

function RichTextToolbar() {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 p-1 dark:border-gray-600">
      <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
        <div className="flex items-center space-x-1 sm:pr-2">
          <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"><AttachIcon /><span className="sr-only">Attach file</span></button>
          <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"><MapPinIcon /><span className="sr-only">Embed map</span></button>
          <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"><ImageIcon /><span className="sr-only">Upload image</span></button>
          <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"><CodeIcon /><span className="sr-only">Format code</span></button>
          <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"><EmojiIcon /><span className="sr-only">Add emoji</span></button>
        </div>
        <div className="hidden flex-wrap items-center space-x-1 sm:flex sm:pl-2">
          <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"><CalendarIcon className="h-5 w-5" /><span className="sr-only">Timeline</span></button>
          <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"><DownloadIcon /><span className="sr-only">Download</span></button>
        </div>
      </div>
      <button type="button" className="cursor-pointer rounded-sm p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"><FullscreenIcon /><span className="sr-only">Full screen</span></button>
    </div>
  );
}

// ── Assignee avatars ──────────────────────────────────────────────────────

function AssigneeAvatars() {
  return (
    <div className="flex -space-x-4">
      {[
        { src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png", alt: "Helene Engels" },
        { src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png", alt: "Robert Brown" },
        { src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png", alt: "Bonnie Green" },
      ].map((a) => (
        <img key={a.alt} className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src={a.src} alt={a.alt} />
      ))}
      <a className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800" href="#">+9</a>
    </div>
  );
}

// ── Dropdown: task card context menu ──────────────────────────────────────

function TaskDropdown({ id, onEditClick }: { id: string; onEditClick: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        aria-label="Task options"
      >
        <DotsHorizontal />
      </button>
      {open && (
        <div className="absolute right-0 z-20 mt-1 w-40 divide-y divide-gray-100 rounded-sm bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700">
          <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <button type="button" onClick={() => { onEditClick(); setOpen(false); }} className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                <EditIcon /> Edit
              </button>
            </li>
            <li>
              <button type="button" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                <DuplicateIcon /> Duplicate
              </button>
            </li>
            <li>
              <button type="button" className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                <FolderIcon /> Go to project
              </button>
            </li>
          </ul>
          <div className="p-2">
            <button type="button" className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600">
              <TrashIcon /> Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Single task card ───────────────────────────────────────────────────────

type Priority = "high" | "medium" | "low";

interface TaskCardProps {
  text: string;
  priority: Priority;
  onEditClick: () => void;
}

const flagColorMap: Record<Priority, string> = {
  high: "text-red-600 dark:text-red-500",
  medium: "text-orange-400",
  low: "text-green-500 dark:text-green-400",
};

function TaskCard({ text, priority, onEditClick }: TaskCardProps) {
  return (
    <div className="mb-2 flex items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6">
      <div className="me-4 flex items-center sm:me-0">
        <div className="me-4 flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
          />
          <label className="sr-only">Task checkbox</label>
        </div>
        <FlagIcon color={flagColorMap[priority]} />
        <h3 className="text-sm font-medium text-gray-900 dark:text-white sm:text-base">{text}</h3>
      </div>
      <TaskDropdown id={`task-${text.slice(0, 8)}`} onEditClick={onEditClick} />
    </div>
  );
}

// ── Add new task dashed button ─────────────────────────────────────────────

function AddTaskButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 flex w-full items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-100 py-2 font-medium text-gray-500 hover:border-primary-700 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <PlusIcon /> Add new task
    </button>
  );
}

// ── Priority section ───────────────────────────────────────────────────────

function PrioritySection({ title, tasks, priority, onEditClick, onAddClick }: {
  title: string;
  tasks: string[];
  priority: Priority;
  onEditClick: () => void;
  onAddClick: () => void;
}) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
      {tasks.map((t) => (
        <TaskCard key={t} text={t} priority={priority} onEditClick={onEditClick} />
      ))}
      <AddTaskButton onClick={onAddClick} />
    </div>
  );
}

// ── Delete Task Modal ──────────────────────────────────────────────────────

function DeleteTaskModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-md">
        <div className="relative rounded-lg bg-white p-4 text-center shadow-sm dark:bg-gray-800 sm:p-5">
          <button type="button" onClick={onClose} className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
            <CloseIcon /><span className="sr-only">Close modal</span>
          </button>
          <TrashIcon className="mx-auto mb-3.5 h-11 w-11 text-gray-400 dark:text-gray-500" />
          <p className="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this task?</p>
          <div className="flex items-center justify-center space-x-4">
            <button onClick={onClose} type="button" className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600">
              No, cancel
            </button>
            <button type="submit" className="rounded-lg bg-red-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
              Yes, I&apos;m sure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Priority checkboxes ───────────────────────────────────────────────────

function PriorityCheckboxes({ prefix }: { prefix: string }) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Priority</label>
      <div className="flex space-x-4">
        {["High", "Medium", "Low", "Lowest"].map((p, i) => (
          <div key={p} className="flex items-center">
            <input id={`${prefix}-${i}`} type="checkbox" defaultChecked={p === "Low"} className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
            <label htmlFor={`${prefix}-${i}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{p}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Date range fields ──────────────────────────────────────────────────────

function DateRangeFields() {
  return (
    <div className="mb-4 flex items-center space-x-4">
      {["Start date", "Due date"].map((label) => (
        <div key={label} className="w-full">
          <label className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">{label}</label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input type="text" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder={label} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Deadline notification fields ───────────────────────────────────────────

function DeadlineNotification() {
  return (
    <div>
      <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Deadline notification</div>
      <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
        <div className="w-full">
          <label className="sr-only">Reminder type</label>
          <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
            <option>Notification</option>
            <option value="AL">Alarm</option>
            <option value="EM">Email</option>
            <option value="SM">SMS</option>
          </select>
        </div>
        <div className="w-full">
          <label className="sr-only">Counter</label>
          <input type="number" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="1" />
        </div>
        <div className="w-full">
          <label className="sr-only">Length</label>
          <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
            <option>Days</option>
            <option value="WE">Weeks</option>
            <option value="MO">Months</option>
          </select>
        </div>
      </div>
    </div>
  );
}

// ── New Task Modal ─────────────────────────────────────────────────────────

function NewTaskModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-xl max-h-full overflow-y-auto">
        <div className="relative rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-5">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add new task</h3>
            <button type="button" onClick={onClose} className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <CloseIcon /><span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Body */}
          <form className="space-y-4">
            <div>
              <label htmlFor="new-title" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Title</label>
              <input type="text" id="new-title" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Add title here" />
            </div>
            <div>
              <label htmlFor="new-description" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <div className="mb-4 w-full rounded-lg border border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700">
                <RichTextToolbar />
                <div className="rounded-b-lg bg-gray-50 px-4 py-2 dark:bg-gray-700">
                  <textarea id="new-description" rows={6} className="block w-full border-0 bg-gray-50 px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400" placeholder="Write a description here" />
                </div>
              </div>
            </div>
            {/* Assignee & Google */}
            <div className="items-start justify-between sm:flex">
              <div>
                <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Assignee &amp; Communication</div>
                <div className="mb-4 flex items-center space-x-4 sm:mb-0">
                  <AssigneeAvatars />
                  <button type="button" className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                    <PlusIcon className="-ml-1 mr-1 h-4 w-4" /> Add member
                  </button>
                </div>
              </div>
              <button type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55 sm:w-auto">
                <GoogleIcon /> Add to calendar
              </button>
            </div>
            <PriorityCheckboxes prefix="new-priority" />
            <DateRangeFields />
            <DeadlineNotification />
            <div className="mt-4 flex items-center space-x-4 sm:mt-5">
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <PlusIcon className="-ms-0.5 me-1.5 h-4 w-4" /> Add new task
              </button>
              <button type="button" onClick={onClose} className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ── Edit Task Modal ────────────────────────────────────────────────────────

function EditTaskModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-5">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Edit task</h3>
            <div className="flex items-center gap-1">
              {/* Watch */}
              <button type="button" className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Watch</span>
              </button>
              {/* Share */}
              <button type="button" className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.5 3A3.5 3.5 0 0 0 14 7L8.1 9.8A3.5 3.5 0 0 0 2 12a3.5 3.5 0 0 0 6.1 2.3l6 2.7-.1.5a3.5 3.5 0 1 0 1-2.3l-6-2.7a3.5 3.5 0 0 0 0-1L15 9a3.5 3.5 0 0 0 6-2.4c0-2-1.6-3.5-3.5-3.5Z" />
                </svg>
                <span className="sr-only">Share</span>
              </button>
              {/* More actions */}
              <button type="button" className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <DotsHorizontal /><span className="sr-only">More actions</span>
              </button>
              {/* Close */}
              <button type="button" onClick={onClose} className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <CloseIcon /><span className="sr-only">Close modal</span>
              </button>
            </div>
          </div>
          {/* Body */}
          <form>
            <div className="mb-4 grid gap-5 sm:mb-5 lg:grid-cols-2">
              {/* Left: title + description */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="edit-title" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Title</label>
                  <input type="text" id="edit-title" defaultValue="Redesign Flowbite homepage" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Add title here" />
                </div>
                <div>
                  <label htmlFor="edit-description" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="edit-description" rows={15} className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Write your thoughts here..." defaultValue="Redesigning a homepage can be a powerful way to improve user experience, engagement, and overall brand perception.

Here are some tips for a successful homepage redesign: User-Centric Approach:

Prioritize the needs and expectations of your target audience. Conduct user research, analyze user behavior, and consider feedback to understand what elements are most valuable to them." />
                </div>
              </div>
              {/* Right: meta fields */}
              <div>
                <div className="mb-4">
                  <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Assignee &amp; Communication</div>
                  <div className="flex items-center space-x-4">
                    <AssigneeAvatars />
                    <button type="button" className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                      <PlusIcon className="-ml-1 mr-1 h-4 w-4" /> Add member
                    </button>
                  </div>
                </div>
                <button type="button" className="mb-4 inline-flex items-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55">
                  <GoogleIcon /> Add Google Meet video conference
                </button>
                <PriorityCheckboxes prefix="edit-priority" />
                <DateRangeFields />
                {/* Category + Type */}
                <div className="mb-4 flex items-center space-x-4">
                  <div className="w-full">
                    <label htmlFor="edit-category" className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">Category</label>
                    <select id="edit-category" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                      <option>Design</option>
                      <option value="seo">SEO</option>
                      <option value="marketing">Marketing</option>
                      <option value="programming">Programming</option>
                      <option value="sales">Sales</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label htmlFor="edit-task-type" className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">Type</label>
                    <select id="edit-task-type" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                      <option>Sprint</option>
                      <option value="decision">Decision</option>
                      <option value="finance">Finance</option>
                      <option value="problems">Problem-solving</option>
                    </select>
                  </div>
                </div>
                <DeadlineNotification />
              </div>
            </div>
            {/* Activity section */}
            <div className="mt-4">
              <h3 className="mb-5 font-medium text-gray-900 dark:text-white">Activity</h3>
              {/* Comment form */}
              <div className="flex">
                <div className="me-3 hidden shrink-0 sm:flex">
                  <img className="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Roberta Casas" />
                </div>
                <div className="mb-6 w-full">
                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Add a comment</label>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Press M to comment</span>
                  </div>
                  <div className="mb-4 w-full rounded-lg border border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700">
                    <RichTextToolbar />
                    <div className="rounded-b-lg bg-gray-50 px-4 py-2 dark:bg-gray-700">
                      <textarea rows={6} className="block w-full border-0 bg-gray-50 px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400" placeholder="Write a description here" />
                    </div>
                  </div>
                  <button type="submit" className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Post comment
                  </button>
                </div>
              </div>
              {/* Existing comment */}
              <article>
                <footer className="mb-2 flex w-full items-center justify-between">
                  <a href="#" className="flex items-center">
                    <img className="mr-2 h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Roberta Casas profile picture" />
                    <p className="mr-3 inline-flex flex-col items-start text-sm text-gray-900 dark:text-white md:flex-row">
                      <span className="font-semibold">Roberta Casas</span>
                      <time className="text-sm text-gray-500 dark:text-gray-400 md:ml-2" dateTime="2025-03-15" title="March 15th, 2025">Mar. 15, 2025</time>
                      <span className="ms-2 hidden text-gray-500 dark:text-gray-400 md:flex">Edited on Aug 18</span>
                    </p>
                  </a>
                  <button type="button" className="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <DotsHorizontal /><span className="sr-only">Comment settings</span>
                  </button>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">
                  Any frictions in the user journey hinder customers from reaching their goals. Before starting redesign, it&apos;s crucial to detect the obstacles users face when interacting with your website.
                </p>
                <div className="mt-4 flex items-center space-x-4">
                  <button type="button" className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400">Edit</button>
                  <button type="button" className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400">
                    <ReplyIcon /> Reply
                  </button>
                </div>
              </article>
            </div>
            {/* Form actions */}
            <div className="mt-4 flex items-center space-x-4">
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <PlusIcon className="-ms-0.5 me-1.5 h-4 w-4" /> Save task
              </button>
              <button type="button" onClick={onClose} className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ── Task data ──────────────────────────────────────────────────────────────

const HIGH_TASKS = [
  "Change the homepage design for the Flowbite website.",
  "Redesign the company's website to enhance user experience.",
  "Design the packaging for a new product, considering both physical packaging and any digital representations.",
  "Develop a series of graphics and visual content for a social media campaign.",
  "Review and enhance the user interface of Flowbite chat.",
];

const MEDIUM_TASKS = [
  "Change the homepage design for the Flowbite website.",
  "Redesign the company's website to enhance user experience.",
];

const LOW_TASKS = [
  "Change the homepage design for the Flowbite website.",
  "Redesign the company's website to enhance user experience.",
  "Design the packaging for a new product, considering both physical packaging and any digital representations.",
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminTodoPage() {
  const [newTaskOpen, setNewTaskOpen] = useState(false);
  const [editTaskOpen, setEditTaskOpen] = useState(false);

  return (
    <PreviewShell variant="admin" title="To-do">
      {/* Modals */}
      <DeleteTaskModal open={false} onClose={() => {}} />
      <NewTaskModal open={newTaskOpen} onClose={() => setNewTaskOpen(false)} />
      <EditTaskModal open={editTaskOpen} onClose={() => setEditTaskOpen(false)} />

      {/* Page header */}
      <div className="mb-4 items-center justify-between border-b border-gray-200 bg-white px-4 py-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div>
          {/* Breadcrumb */}
          <nav className="mb-4 flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">
                  <HomeIcon /> Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight />
                  <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white md:ms-2">Project management</a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight />
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">My day</span>
                </div>
              </li>
            </ol>
          </nav>
          {/* Title row */}
          <div className="mb-4 flex items-center space-x-4 sm:mb-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">My day</h1>
            <span className="me-2 inline-flex items-center rounded-sm bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              <CalendarIcon /> Mon 25 Sept
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setNewTaskOpen(true)}
          className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
        >
          <PlusIcon className="-ms-0.5 me-1.5 h-4 w-4" /> Add new task
        </button>
      </div>

      {/* Task lists */}
      <div className="space-y-4 px-4 xl:me-80">
        <PrioritySection
          title="High priority"
          tasks={HIGH_TASKS}
          priority="high"
          onEditClick={() => setEditTaskOpen(true)}
          onAddClick={() => setNewTaskOpen(true)}
        />
        <PrioritySection
          title="Medium priority"
          tasks={MEDIUM_TASKS}
          priority="medium"
          onEditClick={() => setEditTaskOpen(true)}
          onAddClick={() => setNewTaskOpen(true)}
        />
        <PrioritySection
          title="Low priority"
          tasks={LOW_TASKS}
          priority="low"
          onEditClick={() => setEditTaskOpen(true)}
          onAddClick={() => setNewTaskOpen(true)}
        />
      </div>

      {/* ── Right panel: My Day schedule ───────────────────────────────────── */}
      <aside
        className="fixed right-0 h-full w-80 translate-x-full border-l border-gray-200 bg-white pt-14 transition-transform dark:border-gray-700 dark:bg-gray-800 xl:!translate-x-0"
        aria-label="Daily schedule"
      >
        <div className="h-full overflow-y-auto bg-white px-3 py-5 dark:bg-gray-800">
          {/* Date nav */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white p-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
              </svg>
            </button>
            <h3 className="font-medium text-gray-900 dark:text-white">Tue, Sep 18</h3>
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white p-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Hourly time list */}
          <ol className="space-y-6 py-6">
            {/* 06:00 */}
            <li className="flex items-center">
              <time dateTime="06:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">06:00 am</time>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </li>
            {/* 07:00 */}
            <li className="flex items-center">
              <time dateTime="07:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">07:00 am</time>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </li>
            {/* 08:00 + purple event */}
            <li>
              <div className="mb-6 flex items-center">
                <time dateTime="08:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">08:00 am</time>
                <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
              </div>
              <a href="#" className="flex items-start rounded-lg bg-purple-600 p-2 text-white hover:bg-purple-500">
                <svg className="me-1.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M5 9a7 7 0 1 1 8 7v5a1 1 0 1 1-2 0v-5a7 7 0 0 1-6-7Zm6-1c.2-.3.6-.5 1-.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.4.2-.8.4-1Z" clipRule="evenodd" />
                </svg>
                <div className="space-y-1.5 leading-none">
                  <time dateTime="08:15" className="block text-xs font-normal leading-none">08:15 am</time>
                  <p className="text-sm font-medium">Video presentation for Flowbite Inc</p>
                </div>
              </a>
            </li>
            {/* 09:00 */}
            <li className="flex items-center">
              <time dateTime="09:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">09:00 am</time>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </li>
            {/* 10:00 + blue event */}
            <li>
              <div className="mb-6 flex items-center">
                <time dateTime="10:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">10:00 am</time>
                <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
              </div>
              <a href="#" className="flex items-start rounded-lg p-2 text-white hover:opacity-90" style={{ backgroundColor: "#1A56DB" }}>
                <svg className="me-1.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M5 9a7 7 0 1 1 8 7v5a1 1 0 1 1-2 0v-5a7 7 0 0 1-6-7Zm6-1c.2-.3.6-.5 1-.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.4.2-.8.4-1Z" clipRule="evenodd" />
                </svg>
                <div className="space-y-1.5 leading-none">
                  <time dateTime="10:25" className="block text-xs font-normal leading-none">10:25 am - 11:00 am</time>
                  <p className="text-sm font-medium">Meeting with Bonnie Green and Jese Leos</p>
                </div>
              </a>
            </li>
            {/* 11:00 */}
            <li className="flex items-center">
              <time dateTime="11:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">11:00 am</time>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </li>
            {/* 12:00 */}
            <li className="flex items-center">
              <time dateTime="12:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">12:00 pm</time>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </li>
            {/* 13:00 */}
            <li className="flex items-center">
              <time dateTime="13:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">13:00 pm</time>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </li>
            {/* 14:00 + teal event */}
            <li>
              <div className="mb-6 flex items-center">
                <time dateTime="14:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">14:00 pm</time>
                <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
              </div>
              <a href="#" className="flex items-start rounded-lg bg-teal-600 p-2 text-white hover:bg-teal-500">
                <svg className="me-1.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M5 9a7 7 0 1 1 8 7v5a1 1 0 1 1-2 0v-5a7 7 0 0 1-6-7Zm6-1c.2-.3.6-.5 1-.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.4.2-.8.4-1Z" clipRule="evenodd" />
                </svg>
                <div className="space-y-1.5 leading-none">
                  <time dateTime="14:00" className="block text-xs font-normal leading-none">14:00 pm - 14:30 pm</time>
                  <p className="text-sm font-medium">Planning for the new website</p>
                </div>
              </a>
            </li>
            {/* 15:00 */}
            <li className="flex items-center">
              <time dateTime="15:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">15:00 pm</time>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </li>
            {/* 16:00 */}
            <li className="flex items-center">
              <time dateTime="16:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">16:00 pm</time>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </li>
            {/* 17:00 + pink event */}
            <li>
              <div className="mb-6 flex items-center">
                <time dateTime="17:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">17:00 pm</time>
                <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
              </div>
              <a href="#" className="flex items-start rounded-lg bg-pink-600 p-2 text-white hover:bg-pink-500">
                <svg className="me-1.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M5 9a7 7 0 1 1 8 7v5a1 1 0 1 1-2 0v-5a7 7 0 0 1-6-7Zm6-1c.2-.3.6-.5 1-.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.4.2-.8.4-1Z" clipRule="evenodd" />
                </svg>
                <div className="space-y-1.5 leading-none">
                  <time dateTime="17:15" className="block text-xs font-normal leading-none">17:15 pm - 18:00 pm</time>
                  <p className="text-sm font-medium">Presentation of Flowbite</p>
                </div>
              </a>
            </li>
            {/* 18:00 */}
            <li className="flex items-center">
              <time dateTime="18:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">18:00 pm</time>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </li>
            {/* 19:00 */}
            <li className="flex items-center">
              <time dateTime="19:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">19:00 pm</time>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </li>
            {/* 20:00 + indigo event */}
            <li>
              <div className="mb-6 flex items-center">
                <time dateTime="20:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">20:00 pm</time>
                <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
              </div>
              <a href="#" className="flex items-start rounded-lg bg-indigo-600 p-2 text-white hover:bg-indigo-500">
                <svg className="me-1.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M5 9a7 7 0 1 1 8 7v5a1 1 0 1 1-2 0v-5a7 7 0 0 1-6-7Zm6-1c.2-.3.6-.5 1-.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.4.2-.8.4-1Z" clipRule="evenodd" />
                </svg>
                <div className="space-y-1.5 leading-none">
                  <time dateTime="20:00" className="block text-xs font-normal leading-none">20:00 pm - 21:00 pm</time>
                  <p className="text-sm font-medium">Meeting with Flowbite CEO to discuss financial results</p>
                </div>
              </a>
            </li>
            {/* 21:00 */}
            <li className="flex items-center">
              <time dateTime="21:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">21:00 pm</time>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </li>
            {/* 22:00 */}
            <li className="flex items-center">
              <time dateTime="22:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">22:00 pm</time>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </li>
            {/* 23:00 */}
            <li className="flex items-center">
              <time dateTime="23:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">23:00 pm</time>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </li>
            {/* 24:00 */}
            <li className="flex items-center">
              <time dateTime="24:00" className="w-20 text-xs font-normal text-gray-500 dark:text-gray-400">24:00 pm</time>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            </li>
          </ol>

          {/* Add new task button */}
          <button
            type="button"
            onClick={() => setNewTaskOpen(true)}
            className="flex w-full items-center justify-center rounded-lg px-3 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
            style={{ backgroundColor: "#1A56DB" }}
          >
            <PlusIcon className="-ms-0.5 me-1.5 h-4 w-4" />
            Add new task
          </button>
        </div>
      </aside>
    </PreviewShell>
  );
}
