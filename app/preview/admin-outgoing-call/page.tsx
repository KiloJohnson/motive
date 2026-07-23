"use client";

import { PreviewShell } from "../PreviewShell";

export default function AdminOutgoingCallPage() {
  return (
    <PreviewShell title="Outgoing Call" variant="admin">
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">

        {/* Avatar + name + status */}
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
            ringing +123 456 7890
          </p>
        </div>

        {/* Controls */}
        <div className="mx-auto grid w-full max-w-xs grid-cols-3 items-center justify-center gap-4 px-4 lg:fixed lg:bottom-0 lg:flex lg:max-w-none lg:pb-8">

          {/* Speaker */}
          <div className="relative group/speaker flex flex-col items-center">
            <button
              type="button"
              className="group flex h-16 w-16 items-center justify-center rounded-full border border-gray-100 bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              aria-label="Enable speaker"
            >
              <svg
                className="h-6 w-6 text-gray-500 group-hover:text-[#1A56DB] dark:text-gray-300 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z" />
                <path
                  fillRule="evenodd"
                  d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Enable speaker</span>
            </button>
            <span className="mt-2 hidden text-xs text-gray-500 dark:text-gray-400 group-hover/speaker:block">
              Enable speaker
            </span>
          </div>

          {/* Video call */}
          <div className="relative group/video flex flex-col items-center">
            <button
              type="button"
              className="group flex h-16 w-16 items-center justify-center rounded-full border border-gray-100 bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              aria-label="Video call"
            >
              <svg
                className="h-6 w-6 text-gray-500 group-hover:text-[#1A56DB] dark:text-gray-300 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Video call</span>
            </button>
            <span className="mt-2 hidden text-xs text-gray-500 dark:text-gray-400 group-hover/video:block">
              Video call
            </span>
          </div>

          {/* Mute */}
          <div className="relative group/mute flex flex-col items-center">
            <button
              type="button"
              className="group flex h-16 w-16 items-center justify-center rounded-full border border-gray-100 bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              aria-label="Mute audio"
            >
              <svg
                className="h-6 w-6 text-gray-500 group-hover:text-[#1A56DB] dark:text-gray-300 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m15.506 14.097.994.995A3.989 3.989 0 0 0 17.975 12V9.011a.996.996 0 0 1 1.992 0v2.99a5.981 5.981 0 0 1-2.054 4.503l1.762 1.762a.996.996 0 1 1-1.408 1.408L4.325 5.733a.996.996 0 0 1 1.408-1.408L7.04 5.632a3.984 3.984 0 0 1 3.964-3.59h1.992c2.2 0 3.983 1.783 3.983 3.983v4.98a3.975 3.975 0 0 1-1.473 3.092ZM4.033 10.008a.996.996 0 1 1 1.992 0V12a3.99 3.99 0 0 0 3.984 3.984H12c.55 0 .996.446.996.996v2.988h1.992a.996.996 0 0 1 0 1.992H9.012a.996.996 0 0 1 0-1.992h1.992v-1.992h-.997a5.981 5.981 0 0 1-5.974-5.974v-1.993Z" />
              </svg>
              <span className="sr-only">Mute audio</span>
            </button>
            <span className="mt-2 hidden text-xs text-gray-500 dark:text-gray-400 group-hover/mute:block">
              Mute audio
            </span>
          </div>

          {/* Invite others */}
          <div className="relative group/participants flex flex-col items-center">
            <button
              type="button"
              className="group flex h-16 w-16 items-center justify-center rounded-full border border-gray-100 bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              aria-label="Invite others"
            >
              <svg
                className="h-6 w-6 text-gray-500 group-hover:text-[#1A56DB] dark:text-gray-300 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Invite others</span>
            </button>
            <span className="mt-2 hidden text-xs text-gray-500 dark:text-gray-400 group-hover/participants:block">
              Invite others
            </span>
          </div>

          {/* End call */}
          <div className="relative group/endcall flex flex-col items-center">
            <button
              type="button"
              className="group flex h-16 w-16 items-center justify-center rounded-full bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              aria-label="End call"
            >
              <svg
                className="h-6 w-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 6.995c-2.306 0-4.534.408-6.215 1.507-1.737 1.135-2.788 2.944-2.797 5.451a4.8 4.8 0 0 0 .01.62c.015.193.047.512.138.763a2.557 2.557 0 0 0 2.579 1.677H7.31a2.685 2.685 0 0 0 2.685-2.684v-.645a.684.684 0 0 1 .684-.684h2.647a.686.686 0 0 1 .686.687v.645c0 .712.284 1.395.787 1.898.478.478 1.101.787 1.847.787h1.647a2.555 2.555 0 0 0 2.575-1.674c.09-.25.123-.57.137-.763.015-.2.022-.433.01-.617-.002-2.508-1.049-4.32-2.785-5.458-1.68-1.1-3.907-1.51-6.213-1.51Z" />
              </svg>
              <span className="sr-only">End call</span>
            </button>
            <span className="mt-2 hidden text-xs text-gray-500 dark:text-gray-400 group-hover/endcall:block">
              End call
            </span>
          </div>

          {/* Dial number (hidden on lg+) */}
          <div className="relative group/dial flex flex-col items-center lg:hidden">
            <button
              type="button"
              className="group flex h-16 w-16 items-center justify-center rounded-full border border-gray-100 bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              aria-label="Dial number"
            >
              <svg
                className="h-6 w-6 text-gray-500 group-hover:text-[#1A56DB] dark:text-gray-300 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Dial number</span>
            </button>
            <span className="mt-2 hidden text-xs text-gray-500 dark:text-gray-400 group-hover/dial:block">
              Dial number
            </span>
          </div>

        </div>
      </div>
    </PreviewShell>
  );
}
