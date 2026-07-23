"use client";

import { PreviewShell } from "../PreviewShell";

export default function AdminIncomingCallPage() {
  return (
    <PreviewShell title="Incoming Call" variant="admin">
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">

        {/* Caller info */}
        <div className="relative mb-10 flex w-full flex-col items-center justify-center">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/audio-call/call-image.png`}
            alt=""
            className="mb-3 h-36 w-36 rounded-full object-cover"
          />
          <button
            type="button"
            className="mb-2 text-3xl font-bold text-gray-900 hover:underline dark:text-white"
          >
            Robert Brown
          </button>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            call from +123 456 7890
          </p>
        </div>

        {/* Remind me / Message — mobile only */}
        <div className="mx-auto mb-12 grid w-full max-w-64 grid-cols-2 items-center justify-center gap-8 px-4 lg:hidden">
          <div className="flex flex-col items-center justify-center">
            <button
              type="button"
              title="Set reminder"
              className="group flex flex-col items-center justify-center rounded-full focus:outline-none focus:ring-4"
            >
              <svg
                className="mb-2 h-6 w-6 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-center text-sm text-gray-900 group-hover:underline dark:text-white">
                Remind me
              </p>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center">
            <button
              type="button"
              title="Send message"
              className="group flex flex-col items-center justify-center rounded-full focus:outline-none focus:ring-4"
            >
              <svg
                className="mb-2 h-6 w-6 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-center text-sm text-gray-900 group-hover:underline dark:text-white">
                Message
              </p>
            </button>
          </div>
        </div>

        {/* Decline / Accept */}
        <div className="mx-auto grid w-full max-w-64 grid-cols-2 items-center justify-center gap-8 px-4">
          <div className="flex flex-col items-center justify-center">
            <button
              type="button"
              title="Decline call"
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200 dark:bg-red-600 dark:focus:ring-red-800"
            >
              <svg
                className="h-6 w-6 text-white"
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
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              <span className="sr-only">Decline call</span>
            </button>
            <p className="text-center text-gray-900 dark:text-white">Decline</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <button
              type="button"
              title="Accept call"
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-full focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
              style={{ backgroundColor: "#1A56DB" }}
            >
              <svg
                className="h-6 w-6 text-white"
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
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
              <span className="sr-only">Accept call</span>
            </button>
            <p className="text-center text-gray-900 dark:text-white">Accept</p>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
