"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";

const StarIcon = ({ filled, className }: { filled: boolean; className?: string }) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
    className={className}
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const STAR_LABELS = ["Terrible", "Bad", "Okay", "Good", "Great"];

export default function AdminRateConversationPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [rating, setRating] = useState(3);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");

  const activeRating = hoverRating ?? rating;

  return (
    <PreviewShell title="Rate Conversation" variant="admin">
      {/* Main section */}
      <section>
        <div className="mx-auto flex h-[calc(100vh-8rem)] max-w-xl items-center justify-center px-4 xl:px-0">
          <div>
            {/* Logo / wordmark */}
            <a
              href="#"
              className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img className="mr-2 h-8 w-8" src="/logos/scripps_icon.svg" alt="Scripps logo" />
              Scripps Health
            </a>

            {/* Heading */}
            <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white">
              You left the meeting
            </h1>
            <p className="mb-4 text-lg text-gray-500 dark:text-gray-400 md:mb-6">
              We&apos;d love to hear your thoughts! Help us improve by sharing your feedback on
              this conversation.
            </p>

            {/* Action buttons */}
            <div className="mb-4 w-full items-center space-y-4 border-b border-gray-200 pb-4 dark:border-gray-800 sm:flex sm:space-x-4 sm:space-y-0 md:mb-6 md:pb-6">
              <button
                type="button"
                className="w-full shrink-0 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-[#1A56DB] focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
              >
                Rejoin
              </button>
              <button
                type="button"
                className="inline-flex w-full shrink-0 items-center justify-center rounded-lg border border-[#1A56DB] bg-[#1A56DB] px-3 py-2.5 text-center text-sm font-medium text-white hover:border-blue-800 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-600 dark:bg-blue-600 dark:hover:border-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
              >
                Return to home screen
              </button>
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="flex justify-center font-medium text-[#1A56DB] hover:underline dark:text-blue-500 sm:justify-start"
              >
                Submit feedback
              </button>
            </div>

            {/* Security note */}
            <div className="flex items-center pr-5 text-sm text-gray-500 dark:text-gray-400">
              <svg
                className="me-1 hidden h-4 w-4 sm:flex"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.356 3.066a1 1 0 0 0-.712 0l-7 2.666A1 1 0 0 0 4 6.68a17.695 17.695 0 0 0 2.022 7.98 17.405 17.405 0 0 0 5.403 6.158 1 1 0 0 0 1.15 0 17.406 17.406 0 0 0 5.402-6.157A17.694 17.694 0 0 0 20 6.68a1 1 0 0 0-.644-.949l-7-2.666Z" />
              </svg>
              Your meeting is safe, no one can join a meeting unless invited by the host
            </div>
          </div>
        </div>
      </section>

      {/* Feedback drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Feedback drawer */}
      <div
        id="feedback-drawer"
        className={`fixed right-0 top-0 z-40 h-screen w-full max-w-md overflow-y-auto bg-white p-4 antialiased transition-transform dark:bg-gray-800 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        tabIndex={-1}
        aria-labelledby="feedback-drawer-label"
        aria-hidden={!drawerOpen}
      >
        {/* Drawer header */}
        <h5
          id="feedback-drawer-label"
          className="mb-6 inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400"
        >
          Submit feedback
        </h5>
        <button
          type="button"
          onClick={() => setDrawerOpen(false)}
          aria-controls="feedback-drawer"
          className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
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
          <span className="sr-only">Close menu</span>
        </button>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            {/* Star rating */}
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  filled={star <= activeRating}
                  className={`${star === 1 ? "" : "ms-2"} h-6 w-6 cursor-pointer ${
                    star <= activeRating
                      ? "text-yellow-300"
                      : "text-gray-300 dark:text-gray-500"
                  }`}
                  // @ts-ignore — onClick/mouse handlers on SVG via wrapper not supported; we pass through aria
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(null)}
                />
              ))}
              <span className="ms-2 text-lg font-bold text-gray-900 dark:text-white">
                {STAR_LABELS[activeRating - 1]}
              </span>
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
                className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-[#1A56DB] focus:ring-[#1A56DB] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
              />
              <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">
                Describe your experience or suggestions in detail.
              </p>
            </div>

            {/* Photo upload */}
            <div>
              <p className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Add real photos of the issue{" "}
                <span className="text-gray-500 dark:text-gray-400">(optional)</span>
              </p>
              <div className="flex w-full items-center justify-center">
                <label
                  htmlFor="dropzone-file"
                  className="flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Max file 30MB</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>

            {/* Submit / Cancel */}
            <div className="flex w-full justify-center space-x-3 pb-4">
              <button
                type="submit"
                className="w-full justify-center rounded-lg bg-[#1A56DB] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-[#1A56DB] focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </PreviewShell>
  );
}
