"use client";

import { PreviewShell } from "../PreviewShell";
import { useState } from "react";

// ── Dropdown state hook ─────────────────────────────────────────────────────

function useDropdown() {
  const [open, setOpen] = useState(false);
  return { open, toggle: () => setOpen((v) => !v), close: () => setOpen(false) };
}

// ── Icon button ─────────────────────────────────────────────────────────────

function IconBtn({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      title={label}
      className={`inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${className}`}
    >
      {children}
      <span className="sr-only">{label}</span>
    </button>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function AdminMailingReplyPage() {
  const mailMenu = useDropdown();
  const replyMode = useDropdown();
  const fontMenu = useDropdown();
  const detailsMenu = useDropdown();

  return (
    <PreviewShell variant="admin" title="Mailing — Reply">
      {/* ── Toolbar bar ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        {/* Left controls */}
        <div className="flex items-center">
          {/* Checkbox */}
          <div className="pr-3">
            <input
              id="checkbox-all"
              type="checkbox"
              className="focus:ring-3 h-4 w-4 rounded-sm border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
          </div>

          <div className="h-5 w-px bg-gray-100 dark:bg-gray-700" />

          {/* Archive / Spam / Delete */}
          <div className="flex space-x-1 px-2">
            <IconBtn label="Archive">
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4 4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H4Zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm10.7 5.7a1 1 0 0 0-1.4-1.4l-.3.3V12a1 1 0 1 0-2 0v2.6l-.3-.3a1 1 0 0 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l2-2Z" clipRule="evenodd" />
              </svg>
            </IconBtn>
            <IconBtn label="Report Spam">
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clipRule="evenodd" />
              </svg>
            </IconBtn>
            <IconBtn label="Delete">
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
              </svg>
            </IconBtn>
          </div>

          <div className="h-5 w-px bg-gray-100 dark:bg-gray-700" />

          {/* Secondary actions */}
          <div className="flex space-x-1 px-0 sm:px-2">
            <IconBtn label="Mark as unread" className="hidden sm:inline-flex">
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 5.6V18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V5.6l-.9.7-7.9 6a2 2 0 0 1-2.4 0l-8-6-.8-.7Z" />
                <path d="M20.7 4.1A2 2 0 0 0 20 4H4a2 2 0 0 0-.6.1l.7.6 7.9 6 7.9-6 .8-.6Z" />
              </svg>
            </IconBtn>
            <IconBtn label="Snooze" className="hidden sm:inline-flex">
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z" clipRule="evenodd" />
              </svg>
            </IconBtn>
            <IconBtn label="Add to tasks" className="hidden sm:inline-flex">
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M15 21.5a10 10 0 1 1 3.6-17L10.9 12 7.7 8.9a1 1 0 0 0-1.4 1.4l4 4a1 1 0 0 0 1.3 0L20 5.8a10 10 0 0 1 1.6 9.1c-.4-.3-1-.5-1.5-.5h-.5V14a2.5 2.5 0 0 0-5 0v.5H14a2.5 2.5 0 0 0 0 5h.5v.5c0 .6.2 1.1.5 1.5Z" clipRule="evenodd" />
              </svg>
            </IconBtn>
            <IconBtn label="Move to" className="hidden sm:inline-flex">
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M5 4a2 2 0 0 0-2 2v1h11l-2-2.3a2 2 0 0 0-1.5-.7H5ZM3 19V9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm11.7-7.7a1 1 0 0 0-1.4 1.4l.3.3H8a1 1 0 1 0 0 2h5.6l-.3.3a1 1 0 0 0 1.4 1.4l2-2c.4-.4.4-1 0-1.4l-2-2Z" clipRule="evenodd" />
              </svg>
            </IconBtn>
            <IconBtn label="Labels" className="hidden sm:inline-flex">
              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clipRule="evenodd" />
              </svg>
            </IconBtn>

            {/* More dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={mailMenu.toggle}
                className="inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="4" d="M12 6h0m0 6h0m0 6h0" />
                </svg>
              </button>
              {mailMenu.open && (
                <div className="absolute left-0 z-10 w-60 divide-y divide-gray-100 rounded-sm bg-white shadow-sm dark:divide-gray-600 dark:bg-gray-700">
                  <ul className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {[
                      { label: "Mark as Important", icon: <path fillRule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clipRule="evenodd" />, fill: true },
                      { label: "Add star", icon: <path stroke="currentColor" strokeWidth="2" d="M11 5.1a1 1 0 0 1 2 0l1.7 4c.1.4.4.6.8.6l4.5.4a1 1 0 0 1 .5 1.7l-3.3 2.8a1 1 0 0 0-.3 1l1 4a1 1 0 0 1-1.5 1.2l-3.9-2.3a1 1 0 0 0-1 0l-4 2.3a1 1 0 0 1-1.4-1.1l1-4.1c.1-.4 0-.8-.3-1l-3.3-2.8a1 1 0 0 1 .5-1.7l4.5-.4c.4 0 .7-.2.8-.6l1.8-4Z" />, fill: false },
                      { label: "Filter messages like these", icon: <path d="M5 3a2 2 0 0 0-1.5 3.3l5.4 6v5c0 .4.3.9.6 1.1l3.1 2.3c1 .7 2.5 0 2.5-1.2v-7.1l5.4-6C21.6 5 20.7 3 19 3H5Z" />, fill: true },
                      { label: "Forward as attachment", icon: <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8" />, fill: false },
                    ].map(({ label, icon, fill }) => (
                      <li key={label}>
                        <button
                          type="button"
                          onClick={mailMenu.close}
                          className="inline-flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg className="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={fill ? "currentColor" : "none"} viewBox="0 0 24 24">
                            {icon}
                          </svg>
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: pagination */}
        <div className="flex items-center space-x-1">
          <span className="me-4 hidden text-sm text-gray-500 dark:text-gray-400 sm:flex">
            Show <span className="mx-1 font-semibold text-gray-900 dark:text-white">1-25</span> of{" "}
            <span className="ms-1 font-semibold text-gray-900 dark:text-white">2290</span>
          </span>
          <IconBtn label="Prev page">
            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
            </svg>
          </IconBtn>
          <IconBtn label="Next page">
            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
            </svg>
          </IconBtn>
        </div>
      </div>

      {/* ── Email content area ───────────────────────────────────────────── */}
      <div className="p-4 xl:p-8">
        {/* Subject + top actions */}
        <div className="mb-4 items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
          <div className="mb-4 flex items-center justify-between gap-4 border-b border-gray-200 pb-4 dark:border-gray-800">
            <h2 className="text-base font-medium text-gray-900 dark:text-white sm:mb-1.5 sm:flex sm:text-xl sm:leading-none">
              RE: Inquiry about design services{" "}
              <span className="me-2 ms-3 hidden rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 sm:flex">
                External
              </span>
            </h2>
            <div className="flex items-center space-x-1">
              <IconBtn label="Print">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H8Zm-3 7a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h1v-4c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5Zm4 11a1 1 0 0 1-1-1v-4h8v4c0 .6-.4 1-1 1H9Z" clipRule="evenodd" />
                </svg>
              </IconBtn>
              <IconBtn label="In new window">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.4 5H5a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-6.4a3 3 0 0 1-1.7-1.6l-3 3A3 3 0 1 1 10 9.8l3-3A3 3 0 0 1 11.4 5Z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M13.2 4c0-.6.5-1 1-1H20c.6 0 1 .4 1 1v5.8a1 1 0 1 1-2 0V6.4l-6.2 6.2a1 1 0 0 1-1.4-1.4L17.6 5h-3.4a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                </svg>
              </IconBtn>
            </div>
          </div>

          {/* Sender + meta row */}
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-4">
              <img className="h-10 w-10 rounded-full" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/users/avatar-4.png`} alt="Avatar" onError={(e) => { (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%236B7280'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='14' font-family='sans-serif'%3EJM%3C/text%3E%3C/svg%3E"; }} />
              <div className="font-semibold dark:text-white">
                <div>Contact</div>
                <div className="relative">
                  <button
                    type="button"
                    onClick={detailsMenu.toggle}
                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    to Flowbite Support, me
                    <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M18.4 10.3A2 2 0 0 0 17 7H7a2 2 0 0 0-1.5 3.3l4.9 5.9a2 2 0 0 0 3 0l5-6Z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {detailsMenu.open && (
                    <div className="absolute left-0 top-full z-50 mt-1 w-[360px] rounded-sm bg-white p-4 shadow-sm dark:bg-gray-700">
                      <ul className="space-y-2 text-sm font-normal">
                        {[
                          { label: "From:", value: "Joseph (name@example.com)" },
                          { label: "To:", value: "name@company.com" },
                          { label: "Date:", value: "Feb 6, 2025, 10:19AM" },
                          { label: "Subject:", value: "I need help with my purchase" },
                        ].map(({ label, value }) => (
                          <li key={label} className="flex items-center text-gray-500 dark:text-gray-400">
                            <div className="w-16">{label}</div>
                            <div className="ms-1 text-gray-900 dark:text-gray-400">{value}</div>
                          </li>
                        ))}
                        <li className="flex items-center text-gray-500 dark:text-gray-400">
                          <div className="w-16">Security:</div>
                          <div className="ms-1 text-gray-900 dark:text-gray-400">
                            Standard encryption (TLS){" "}
                            <a className="font-medium text-gray-900 underline hover:no-underline dark:text-white" href="#">Learn more</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <p className="me-4 hidden text-xs text-gray-500 dark:text-gray-400 sm:flex sm:text-sm">
                Mon, <time dateTime="2025-07-31 15:20">Jul 31, 3:20 PM</time> (2 hours ago)
              </p>
              <IconBtn label="Add to favorites">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" d="M11 5.1a1 1 0 0 1 2 0l1.7 4c.1.4.4.6.8.6l4.5.4a1 1 0 0 1 .5 1.7l-3.3 2.8a1 1 0 0 0-.3 1l1 4a1 1 0 0 1-1.5 1.2l-3.9-2.3a1 1 0 0 0-1 0l-4 2.3a1 1 0 0 1-1.4-1.1l1-4.1c.1-.4 0-.8-.3-1l-3.3-2.8a1 1 0 0 1 .5-1.7l4.5-.4c.4 0 .7-.2.8-.6l1.8-4Z" />
                </svg>
              </IconBtn>
              <IconBtn label="Reply">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.5 8H11V6.1c0-.9-.9-1.4-1.5-.9L4.4 9.7a1.2 1.2 0 0 0 0 1.8l5 4.4c.7.6 1.6 0 1.6-.8v-2h2a3 3 0 0 1 3 3V19a5.6 5.6 0 0 0-1.5-11Z" />
                </svg>
              </IconBtn>
            </div>
          </div>
        </div>

        {/* ── Email body ─────────────────────────────────────────────────── */}
        <article>
          <p className="mt-6 text-gray-500 dark:text-gray-400">Dear Flowbite team,</p>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            I hope this email finds you well. My name is Jospeh McFallen, and I am reaching out to inquire about the design services offered by your esteemed
            company. I came across your portfolio and was truly impressed by the innovative and captivating designs showcased.
          </p>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            I am currently in the process of launching a Flowbite APP and believe that a distinctive and creative design is essential for setting the right tone
            and establishing a strong brand presence. Your expertise in this field caught my attention, and I am keen to explore the possibility of collaborating
            with your talented team.
          </p>
          <p className="mb-4 mt-6 text-gray-500 dark:text-gray-400">Here are some specific points I would like to discuss:</p>
          <ol className="list-inside list-decimal space-y-4 text-gray-500 dark:text-gray-400">
            <li>
              <span className="font-medium text-gray-900 dark:text-white">Brand Identity:</span> I am interested in creating a unique brand identity that
              resonates with our target audience. This includes logo design, color palette selection, and other visual elements that can effectively communicate
              our mission and values.
            </li>
            <li>
              <span className="font-medium text-gray-900 dark:text-white">Website Design:</span> As our digital storefront, the website needs to be user-friendly,
              visually engaging, and reflective of our brand identity. I would like to explore your approach to web design and understand how we can create an
              immersive online experience for our visitors.
            </li>
            <li>
              <span className="font-medium text-gray-900 dark:text-white">Print Collateral:</span> We also require various print materials, such as business cards,
              brochures, and promotional materials. I would love to see examples of your print design work and discuss how we can make a lasting impact through
              these materials.
            </li>
            <li>
              <span className="font-medium text-gray-900 dark:text-white">Packaging Design:</span> Since our product(s) will be an integral part of our brand,
              we aim to have packaging that is not only aesthetically pleasing but also functional and environmentally friendly. I am curious to know about your
              experience in creating standout packaging designs.
            </li>
            <li>
              <span className="font-medium text-gray-900 dark:text-white">Packaging Design:</span> Since our product(s) will be an integral part of our brand,
              we aim to have packaging that is not only aesthetically pleasing but also functional and environmentally friendly. I am curious to know about your
              experience in creating standout packaging designs.
            </li>
            <li>
              <span className="font-medium text-gray-900 dark:text-white">Timeline and Pricing:</span> Understanding the timeline and cost of your services is
              crucial for our planning process. I would appreciate it if you could provide some insights into your typical project timelines and your pricing
              structure.
            </li>
          </ol>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            I am eager to explore the potential of working together and believe that your creative vision aligns perfectly with our project goals. Your portfolio
            speaks volumes about your talent, and I am excited about the prospect of bringing fresh, imaginative ideas to life with your team.
          </p>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            Please let me know if you would be available for a brief call or meeting to further discuss our requirements and explore the possibilities of
            collaboration. I am confident that together, we can create something exceptional that leaves a lasting impression on our audience.
          </p>
          <p className="mt-6 text-gray-500 dark:text-gray-400">Looking forward to your positive response.</p>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            Best regards,
            <br />
            Joseph McFall, CEO &amp; Founder Digital Things LLC
          </p>
        </article>

        {/* ── Reply compose form ─────────────────────────────────────────── */}
        <form className="mt-6 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="w-full">
            {/* Compose header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center space-x-2">
                {/* Reply mode dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={replyMode.toggle}
                    className="flex items-center justify-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                  >
                    Reply
                    <svg className="-me-0.5 ms-1.5 h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                    </svg>
                  </button>
                  {replyMode.open && (
                    <div className="absolute left-0 top-full z-10 mt-1 w-36 rounded-lg bg-white p-2 shadow-sm dark:bg-gray-700">
                      <ul className="space-y-1 text-sm font-medium">
                        {["Reply", "Forward", "Edit subject", "Pop out reply"].map((item) => (
                          <li key={item}>
                            <button
                              type="button"
                              onClick={replyMode.close}
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
                <p className="text-sm text-gray-500 dark:text-gray-400">Joseph McFallen (name@example.com)</p>
              </div>

              {/* Full screen */}
              <button
                type="button"
                title="Show full screen"
                className="cursor-pointer rounded-sm p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ms-auto"
              >
                <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5" />
                </svg>
                <span className="sr-only">Full screen</span>
              </button>
            </div>

            {/* Textarea */}
            <div className="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800">
              <label htmlFor="editor" className="sr-only">Compose reply</label>
              <textarea
                id="editor"
                rows={8}
                autoFocus
                className="block w-full border-0 bg-white px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                placeholder=""
              />
            </div>
          </div>

          {/* ── Formatting toolbar row 1 ─────────────────────────────────── */}
          <div className="flex flex-wrap items-center divide-gray-200 rounded-b-lg border-t border-gray-200 px-4 py-3 dark:divide-gray-700 dark:border-gray-700 sm:divide-x sm:rtl:divide-x-reverse">
            {/* Left cluster: undo/redo, font, basic formatting */}
            <div className="flex flex-wrap items-center space-x-0.5 sm:pe-4 rtl:space-x-reverse">
              <IconBtn label="Undo">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4" />
                </svg>
              </IconBtn>
              <IconBtn label="Redo">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4" />
                </svg>
              </IconBtn>

              {/* Font family dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={fontMenu.toggle}
                  className="flex items-center justify-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                >
                  Arial (Sans-serif)
                  <svg className="-me-0.5 ms-1.5 h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                  </svg>
                </button>
                {fontMenu.open && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-56 rounded-lg bg-white p-2 shadow-sm dark:bg-gray-700">
                    <ul className="space-y-1 text-sm font-medium">
                      {[
                        "Arial (Sans-serif)",
                        "Times New Roman (Serif)",
                        "Helvetica (Sans-serif)",
                        "Verdana (Sans-serif)",
                        "Georgia (Sans-serif)",
                        "Roboto (Sans-serif)",
                      ].map((font) => (
                        <li key={font}>
                          <button
                            type="button"
                            onClick={fontMenu.close}
                            className="flex w-full rounded-sm px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {font}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <IconBtn label="Text size">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3" />
                </svg>
              </IconBtn>
              <IconBtn label="Bold">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6" />
                </svg>
              </IconBtn>
              <IconBtn label="Italic">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.9 19 15 5M6 19h6.3m-.6-14H18" />
                </svg>
              </IconBtn>
              <IconBtn label="Underline">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4" />
                </svg>
              </IconBtn>
              <IconBtn label="Text slash">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.7 6.5M9.6 19l1-4M5 5l6.5 6.5M19 19l-7.5-7.5" />
                </svg>
              </IconBtn>
              <IconBtn label="Paragraph">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v7m0 7v-7m4-7v14m3-14H8.5C6.5 5 5 6.6 5 8.5v0c0 2 1.6 3.5 3.5 3.5H12" />
                </svg>
              </IconBtn>
            </div>

            {/* Right cluster: quote, alignment, lists, indent/outdent */}
            <div className="hidden flex-wrap items-center space-x-1 sm:ps-4 md:flex rtl:space-x-reverse">
              <IconBtn label="Quote">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M6 6a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z" clipRule="evenodd" />
                </svg>
              </IconBtn>
              <IconBtn label="Text center">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h8M6 10h12M8 14h8M6 18h12" />
                </svg>
              </IconBtn>
              <IconBtn label="Ordered list">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.3 1.5L4 20h5M4 5l2-1v6m-2 0h4" />
                </svg>
              </IconBtn>
              <IconBtn label="List">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0" />
                </svg>
              </IconBtn>
              <IconBtn label="Text indent">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6h12M6 18h12m-5-8h5m-5 4h5M6 9v6l3.5-3L6 9Z" />
                </svg>
              </IconBtn>
              <IconBtn label="Text outdent">
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6h12M6 18h12m-5-8h5m-5 4h5M9.5 9v6L6 12l3.5-3Z" />
                </svg>
              </IconBtn>
            </div>
          </div>

          {/* ── Action bar (send + media toolbar) ──────────────────────── */}
          <div className="items-center space-x-0.5 rounded-b-lg border-t border-gray-200 px-4 py-3 dark:border-gray-700 sm:flex">
            <button
              type="button"
              className="mb-4 me-2 inline-flex w-full items-center justify-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:mb-0 sm:w-auto"
              style={{ backgroundColor: "#1A56DB" }}
            >
              <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2c.4 0 .8.3 1 .6l7 18a1 1 0 0 1-1.4 1.3L13 19.5V13a1 1 0 1 0-2 0v6.5L5.4 22A1 1 0 0 1 4 20.6l7-18a1 1 0 0 1 1-.6Z" clipRule="evenodd" />
              </svg>
              Send message
            </button>

            <IconBtn label="Attach file">
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8" />
              </svg>
            </IconBtn>
            <IconBtn label="Location">
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
              </svg>
            </IconBtn>
            <IconBtn label="Emoji">
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm5.5 1a.5.5 0 0 0-1 0 5 5 0 0 0 1.6 3.4 5.5 5.5 0 0 0 7.8 0 5 5 0 0 0 1.6-3.4.5.5 0 0 0-1 0h-.2l-1 .3a18.9 18.9 0 0 1-7.8-.4ZM9 8a1 1 0 0 0 0 2 1 1 0 1 0 0-2Zm6 0a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clipRule="evenodd" />
              </svg>
            </IconBtn>
            <IconBtn label="Insert photo">
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm.4 9.6a1 1 0 0 0-1.8 0l-2.5 6A1 1 0 0 0 8 19h8a1 1 0 0 0 .9-1.4l-2-4a1 1 0 0 0-1.7-.2l-.5.7-1.3-2.5ZM13 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
              </svg>
            </IconBtn>
            <IconBtn label="Toggle confidential mode">
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M10 5a2 2 0 0 0-2 2v3h2.4a7.5 7.5 0 0 0 0 11H5a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1V7a4 4 0 1 1 8 0v1.2c-.7 0-1.3.3-2 .6V7a2 2 0 0 0-2-2Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M10 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm6.5-1.5a1 1 0 1 0-2 0v1.5c0 .3.1.5.3.7l1 1a1 1 0 0 0 1.4-1.4l-.7-.7V14Z" clipRule="evenodd" />
              </svg>
            </IconBtn>
            <IconBtn label="Insert signature">
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M15.5 3.3a1 1 0 0 0-1.4 0l-2 2h.1l6.5 6.5 2-1.9c.4-.4.4-1 0-1.4l-5.2-5.2ZM7 8.3l3.9-1.5 6.3 6.3-1.5 3.9a1 1 0 0 1-.6.6l-9.5 3.3a1 1 0 0 1-1-.1l6.5-6.5A1 1 0 0 0 9.7 13l-6.5 6.4a1 1 0 0 1-.1-1L6.4 9c.1-.3.3-.5.6-.6Z" clipRule="evenodd" />
              </svg>
            </IconBtn>
          </div>
        </form>
      </div>
    </PreviewShell>
  );
}
