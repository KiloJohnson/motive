"use client";

import { useState, useRef, useEffect } from "react";
import { PreviewShell } from "../PreviewShell";

// ── Types ──────────────────────────────────────────────────────────────────

type NotificationItem = {
  id: number;
  avatar: string;
  content: React.ReactNode;
  time: string;
};

// ── SVG icons (inline, reused) ─────────────────────────────────────────────

function ClockIcon() {
  return (
    <svg className="me-1 h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z" clipRule="evenodd" />
    </svg>
  );
}

function DotsIcon() {
  return (
    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="4" d="M6 12h0m6 0h0m6 0h0" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "me-1.5 h-4 w-4"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
    </svg>
  );
}

// ── Notification action dropdown ───────────────────────────────────────────

function NotificationMenu({ onDelete }: { onDelete: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="absolute end-1 top-1 inline-flex items-center rounded-md p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:relative sm:end-0 sm:top-0"
      >
        <DotsIcon />
      </button>
      {open && (
        <div className="absolute end-0 z-20 mt-1 w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-lg dark:divide-gray-600 dark:bg-gray-700">
          <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <button
                type="button"
                className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setOpen(false)}
              >
                <EyeIcon />
                View
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600"
                onClick={() => { setOpen(false); onDelete(); }}
              >
                <TrashIcon />
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

// ── Single notification row ────────────────────────────────────────────────

function NotificationRow({ item, onDelete }: { item: NotificationItem; onDelete: () => void }) {
  return (
    <div className="relative flex items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
      <div className="me-8 flex items-start sm:items-center">
        <img
          src={item.avatar}
          alt="Avatar"
          className="me-3 flex h-6 w-6 rounded-full sm:h-8 sm:w-8"
        />
        <div className="text-gray-500 dark:text-gray-400">
          <div className="mb-1 text-sm sm:text-base">{item.content}</div>
          <div className="flex items-center text-xs sm:text-sm">
            <ClockIcon />
            {item.time}
          </div>
        </div>
      </div>
      <NotificationMenu onDelete={onDelete} />
    </div>
  );
}

// ── Delete confirmation modal ──────────────────────────────────────────────

function DeleteModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 dark:bg-gray-900/80"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative max-h-full w-full max-w-md p-4">
        <div className="relative rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-5">
          <button
            type="button"
            className="absolute end-2.5 top-2.5 me-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <XIcon />
            <span className="sr-only">Close modal</span>
          </button>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Delete notification</h3>
          <p className="mb-4 text-gray-500 dark:text-gray-400">Do you want to delete this notification?</p>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-lg bg-red-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
              onClick={onClose}
            >
              <TrashIcon className="-ml-0.5 mr-1 h-4 w-4" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

const PRIMARY_LINK = "font-medium text-[#1A56DB] underline hover:no-underline dark:text-blue-400";
const USER_LINK    = "cursor-pointer font-medium text-gray-900 underline hover:no-underline dark:text-white";

export default function AdminNotificationsPage() {
  const [showModal, setShowModal] = useState(false);

  const todayNotifications: NotificationItem[] = [
    {
      id: 1,
      avatar: "/images/providers/provider-1.png",
      time: "a few moments ago",
      content: (
        <p>
          New message from <span className={USER_LINK}>Jese Leos:</span>{" "}
          &ldquo;Hey, what&apos;s up? All set for the showcase&rdquo;
        </p>
      ),
    },
    {
      id: 2,
      avatar: "/images/providers/provider-2.png",
      time: "32 minutes ago",
      content: (
        <p>
          <a href="#" className={USER_LINK}>Joseph Mcfall</a> and{" "}
          <a href="#" className={USER_LINK}>5 others</a> started following you.
        </p>
      ),
    },
    {
      id: 3,
      avatar: "/images/providers/provider-3.png",
      time: "1 hour ago",
      content: (
        <p>
          <a href="#" className={USER_LINK}>Bonnie Green</a> and{" "}
          <a href="#" className={USER_LINK}>141 others</a> love your story. See it and view more stories.
        </p>
      ),
    },
    {
      id: 4,
      avatar: "/images/providers/provider-4.png",
      time: "4 hours ago",
      content: (
        <p>
          <a href="#" className={USER_LINK}>Leslie Livingstone</a> mentioned you in a comment:{" "}
          <a href="#" className={PRIMARY_LINK}>@bonnie.green</a> what do you say?
        </p>
      ),
    },
    {
      id: 5,
      avatar: "/images/providers/provider-1.png",
      time: "10 hours ago",
      content: (
        <p>
          <a href="#" className={USER_LINK}>Robert Brown</a> posted a new video:{" "}
          <a href="#" className={PRIMARY_LINK}>
            Glassmorphism - learn how to implement the new design trend.
          </a>
        </p>
      ),
    },
  ];

  const yesterdayNotifications: NotificationItem[] = [
    {
      id: 6,
      avatar: "/images/providers/provider-5.png",
      time: "1 day ago",
      content: (
        <p>
          <a href="#" className={USER_LINK}>Roberta Casas</a> liked your{" "}
          <a href="#" className={USER_LINK}>comment</a>{" "}
          &ldquo;Welcome to Flowbite community&rdquo;
        </p>
      ),
    },
    {
      id: 7,
      avatar: "/images/providers/provider-2.png",
      time: "1 day ago",
      content: (
        <p>
          <a href="#" className={USER_LINK}>Lana Byrd</a> tagged you in a{" "}
          <a href="#" className={PRIMARY_LINK}>photo</a>.
        </p>
      ),
    },
    {
      id: 8,
      avatar: "/images/providers/provider-3.png",
      time: "1 day ago",
      content: (
        <p>
          <a href="#" className={USER_LINK}>Bonnie Green</a> and{" "}
          <a href="#" className={USER_LINK}>141 others</a> love your story. See it and view more stories.
        </p>
      ),
    },
    {
      id: 9,
      avatar: "/images/providers/provider-4.png",
      time: "1 day ago",
      content: (
        <p>
          <a href="#" className={USER_LINK}>Leslie Livingstone</a> mentioned you in a comment:{" "}
          <a href="#" className={PRIMARY_LINK}>@bonnie.green</a> what do you say?
        </p>
      ),
    },
    {
      id: 10,
      avatar: "/images/providers/provider-1.png",
      time: "1 day ago",
      content: (
        <p>
          <a href="#" className={USER_LINK}>Robert Brown</a> posted a new video:{" "}
          <a href="#" className={PRIMARY_LINK}>
            Glassmorphism - learn how to implement the new design trend.
          </a>
        </p>
      ),
    },
  ];

  return (
    <PreviewShell variant="admin" title="Notifications">
      <div className="mx-4 mb-4 grid grid-cols-12">

        {/* Breadcrumb + heading */}
        <div className="col-span-full mt-4">
          <nav className="mb-4 flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="/preview/admin-dashboard"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#1A56DB] dark:text-gray-400 dark:hover:text-white"
                >
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
                  <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-[#1A56DB] dark:text-gray-400 dark:hover:text-white md:ms-2">
                    Account
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Notifications</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Notifications</h1>
        </div>

        {/* Today */}
        <div className="col-span-full my-4 space-y-4 md:mb-8">
          <h2 className="mb-4 text-xl text-gray-500 dark:text-gray-400">Today</h2>
          {todayNotifications.map((item) => (
            <NotificationRow
              key={item.id}
              item={item}
              onDelete={() => setShowModal(true)}
            />
          ))}
        </div>

        {/* Yesterday */}
        <div className="col-span-full space-y-4">
          <h2 className="mb-4 text-xl text-gray-500 dark:text-gray-400">Yesterday</h2>
          {yesterdayNotifications.map((item) => (
            <NotificationRow
              key={item.id}
              item={item}
              onDelete={() => setShowModal(true)}
            />
          ))}
        </div>

      </div>

      {/* Delete confirmation modal */}
      {showModal && <DeleteModal onClose={() => setShowModal(false)} />}
    </PreviewShell>
  );
}
