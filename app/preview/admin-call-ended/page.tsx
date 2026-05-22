"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";

const StarFilled = ({ className }: { className?: string }) => (
  <svg
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

export default function AdminCallEndedPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  return (
    <PreviewShell title="Call Ended" variant="admin">
      {/* Main call-ended screen */}
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
        <div className="relative mb-10 flex w-full flex-col items-center justify-center">
          {/* Avatar / caller image */}
          <img
            src="/images/audio-call/call-image.png"
            alt="Robert Brown"
            className="mb-3 h-36 w-36 rounded-full object-cover"
            onError={(e) => {
              // Fallback to a placeholder if the image is missing
              const target = e.currentTarget;
              target.onerror = null;
              target.src =
                "https://ui-avatars.com/api/?name=Robert+Brown&size=144&background=1A56DB&color=fff&rounded=true";
            }}
          />

          {/* Caller name */}
          <button
            type="button"
            className="mb-2 text-3xl font-bold text-gray-900 hover:underline dark:text-white"
          >
            Robert Brown
          </button>

          {/* Call duration */}
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            Call ended (12:32 minutes)
          </p>

          {/* Submit feedback button */}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-[#1A56DB] focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Submit feedback
          </button>
        </div>
      </div>

      {/* Feedback modal overlay */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900/50 dark:bg-gray-900/80"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div className="relative max-h-full w-full max-w-md p-4">
            {/* Modal content */}
            <div className="relative rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-5">

              {/* Modal header */}
              <div className="mb-4 flex items-center justify-between dark:border-gray-600 sm:mb-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Rate your conversation
                </h3>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal body */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setModalOpen(false);
                  setFeedback("");
                }}
              >
                <div className="space-y-4">

                  {/* Star rating — 3 filled, 2 empty (4.0 average) */}
                  <div className="flex items-center">
                    <StarFilled className="h-6 w-6 cursor-pointer text-yellow-300" />
                    <StarFilled className="ms-2 h-6 w-6 cursor-pointer text-yellow-300" />
                    <StarFilled className="ms-2 h-6 w-6 cursor-pointer text-yellow-300" />
                    <StarFilled className="ms-2 h-6 w-6 cursor-pointer text-gray-300 dark:text-gray-500" />
                    <StarFilled className="ms-2 h-6 w-6 cursor-pointer text-gray-300 dark:text-gray-500" />
                    <span className="ms-2 text-lg font-bold text-gray-900 dark:text-white">4.0</span>
                  </div>

                  {/* Feedback textarea */}
                  <div>
                    <label
                      htmlFor="feedback"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your feedback{" "}
                      <span className="font-normal text-gray-500 dark:text-gray-400">
                        (30 — 3000 characters)
                      </span>
                    </label>
                    <textarea
                      id="feedback"
                      rows={5}
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-[#1A56DB] focus:ring-[#1A56DB] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-[#1A56DB] dark:focus:ring-[#1A56DB]"
                      required
                    />
                    <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">
                      Describe your experience or suggestions in detail.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex w-full justify-center space-x-3">
                    <button
                      type="submit"
                      className="w-full justify-center rounded-lg bg-[#1A56DB] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#1e429f] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-[#1A56DB] focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    >
                      Cancel
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </PreviewShell>
  );
}
