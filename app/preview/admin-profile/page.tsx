"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";

// ── Info icon (shared) ─────────────────────────────────────────────────────

function InfoIcon() {
  return (
    <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clipRule="evenodd" />
    </svg>
  );
}

// ── Calendar icon ──────────────────────────────────────────────────────────

function CalendarIcon() {
  return (
    <svg className="h-3.5 w-3.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
    </svg>
  );
}

// ── Edit pencil icon ───────────────────────────────────────────────────────

function EditIcon() {
  return (
    <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M5 8a4 4 0 1 1 7.8 1.3l-2.5 2.5A4 4 0 0 1 5 8Zm4 5H7a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h2.2a3 3 0 0 1-.1-1.6l.6-3.4a3 3 0 0 1 .9-1.5L9 13Zm9-5a3 3 0 0 0-2 .9l-6 6a1 1 0 0 0-.3.5L9 18.8a1 1 0 0 0 1.2 1.2l3.4-.7c.2 0 .3-.1.5-.3l6-6a3 3 0 0 0-2-5Z" clipRule="evenodd" />
    </svg>
  );
}

// ── Input / Select shared classes ──────────────────────────────────────────

const inputCls = "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500";
const primaryBtn = "inline-flex items-center justify-center rounded-lg bg-[#1A56DB] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

// ── Tabs ───────────────────────────────────────────────────────────────────

const TABS = ["Overview", "Notification", "Projects", "Invoice", "Account"];

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminProfilePage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <PreviewShell variant="admin" title="Settings">

      {/* Breadcrumb + heading */}
      <div className="px-4 pt-4">
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
                <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white md:ms-2">User</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Settings</span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Settings</h1>
      </div>

      <div className="gap-4 p-4 xl:grid xl:grid-cols-2">

        {/* ── Tabs row ────────────────────────────────────────────────────── */}
        <div className="col-span-2 mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 xl:mb-0">
          {/* Mobile select */}
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">Menu</label>
            <select
              id="tabs"
              className={inputCls}
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {TABS.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          {/* Desktop tab list */}
          <ul className="hidden text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:flex sm:space-x-4">
            {TABS.map((t) => (
              <li key={t}>
                <button
                  onClick={() => setActiveTab(t)}
                  className={`inline-block rounded-lg px-4 py-3 ${
                    activeTab === t
                      ? "bg-[#1A56DB] text-white"
                      : "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                  }`}
                  aria-current={activeTab === t ? "page" : undefined}
                >
                  {t}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Profile picture card ─────────────────────────────────────────── */}
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6 xl:mb-0">
          <h2 className="flex items-center text-xl font-bold text-gray-900 dark:text-white">
            Profile picture
            <button type="button" className="ms-1 text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <InfoIcon />
              <span className="sr-only">Show information</span>
            </button>
          </h2>

          <div className="mt-4 flex w-full items-center border-b border-gray-200 pb-4 dark:border-gray-700 sm:mt-6 sm:pb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="me-4 h-24 w-24 rounded-lg sm:mb-0" src="/images/users/joseph-mcfall.png" alt="Joseph McFall avatar" />
            <div className="w-full space-y-2">
              <span className="me-2 rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">PRO</span>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Joseph McFall</h4>
              <span className="text-xl font-normal text-gray-500 dark:text-gray-400">Web Developer</span>
            </div>
          </div>

          <button type="button" className={`mt-4 w-full sm:mt-6 sm:w-auto ${primaryBtn}`}>
            <EditIcon />
            Edit
          </button>
        </div>

        {/* ── Timezone / Language / DOB / Gender form ──────────────────────── */}
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6 xl:mb-0">
          <form action="#">
            <div className="grid gap-4 border-b border-gray-200 pb-4 dark:border-gray-700 sm:grid-cols-2 sm:pb-6">

              {/* Timezone */}
              <div>
                <label htmlFor="timezone" className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  Timezone
                  <button data-popover-target="popover-timezone-description" type="button" className="ms-1 text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <InfoIcon />
                    <span className="sr-only">Show information</span>
                  </button>
                </label>
                <select id="timezone" className={inputCls} defaultValue="UTC-08:00 - Pacific Standard Time (PST)">
                  <option>UTC-08:00 - Pacific Standard Time (PST)</option>
                  <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
                  <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
                  <option value="-10:00">(GMT -10:00) Hawaii</option>
                  <option value="-09:00">(GMT -9:00) Alaska</option>
                  <option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
                  <option value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
                  <option value="-06:00">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
                  <option value="-05:00">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
                  <option value="-04:00">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
                  <option value="+00:00">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
                  <option value="+01:00">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>
                  <option value="+02:00">(GMT +2:00) Kaliningrad, South Africa</option>
                  <option value="+03:00">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
                  <option value="+05:30">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
                  <option value="+08:00">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
                  <option value="+09:00">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
                  <option value="+12:00">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
                </select>
              </div>

              {/* Language */}
              <div>
                <label htmlFor="language" className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">Language</label>
                <select id="language" className={inputCls} defaultValue="">
                  <option value="">Choose your account type</option>
                  <option value="EN">English (US)</option>
                  <option value="ENK">English (UK)</option>
                  <option value="SP">Spanish</option>
                  <option value="FR">French</option>
                  <option value="DE">German</option>
                  <option value="CH">Chinese (Mandarin)</option>
                </select>
              </div>

              {/* Date of birth */}
              <div>
                <label htmlFor="date-of-birth" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Date of birth</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 inset-s-0 flex items-center ps-3.5">
                    <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="date-of-birth"
                    className={`${inputCls} ps-10`}
                    placeholder="Select date"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label htmlFor="gender" className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                <select id="gender" className={inputCls} defaultValue="">
                  <option value="">Choose your gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className={`mt-4 w-full sm:mt-6 sm:w-auto ${primaryBtn}`}
            >
              Save
            </button>
          </form>
        </div>

        {/* ── Personal information ─────────────────────────────────────────── */}
        <div className="col-span-2 mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6 xl:mb-0">
          <h2 className="mb-4 flex items-center border-b border-gray-200 pb-4 text-xl font-bold text-gray-900 dark:border-gray-700 dark:text-white md:mb-6">
            Personal information
            <button type="button" className="ms-1 text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <InfoIcon />
              <span className="sr-only">Show information</span>
            </button>
          </h2>

          <div className="mb-4 mt-4 grid gap-4 border-b border-gray-200 pb-4 dark:border-gray-700 sm:mb-6 sm:mt-6 sm:grid-cols-2 sm:gap-24 sm:pb-6">

            {/* Left column */}
            <div>
              <dl>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Full name</dt>
                <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">Joseph McFall</dd>

                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Biography</dt>
                <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                  I am Joseph McFall, a fervent explorer navigating the intricate landscapes of web design, driven by an unyielding passion for Web 3 and Artificial Intelligence. From the early days of tinkering with computers to my current standing as a web designer, my journey has been a dynamic evolution marked by a relentless pursuit of innovation.
                </dd>

                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Social</dt>
                <dd className="mb-4 inline-flex items-center space-x-1 sm:mb-5">
                  {/* Facebook */}
                  <a href="#" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                  {/* GitHub */}
                  <a href="#" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="sr-only">GitHub</span>
                  </a>
                  {/* Dribbble */}
                  <a href="#" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                    <span className="sr-only">Dribbble</span>
                  </a>
                </dd>

                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Location</dt>
                <dd className="mb-4 flex items-center text-gray-900 dark:text-white sm:mb-5">
                  <svg className="mr-1.5 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-500 dark:text-gray-400">California, United States of America</span>
                </dd>

                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Job Title</dt>
                <dd className="flex items-center text-gray-900 dark:text-white">
                  <svg className="mr-1.5 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.4l1.4.7a7.7 7.7 0 0 0 .7.3 21 21 0 0 0 16.4-.3l1.5-.7V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.4 7.9.6-.3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.4l.6.3a10 10 0 0 0 .7.3 23 23 0 0 0 18-.3h.1L21 13l.4.9ZM12 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-500 dark:text-gray-400">Frontend Developer</span>
                </dd>
              </dl>
            </div>

            {/* Right column */}
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Email Address</dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">helene@company.com</dd>

              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Home Address</dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">92 Miles Drive, Newark, NJ 07103, California, United States of America</dd>

              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Phone Number</dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">+1234 567 890 / +12 345 678</dd>

              <dt className="mb-2.5 font-semibold leading-none text-gray-900 dark:text-white">Software Skills</dt>
              <dd className="mb-4 flex items-center space-x-1 sm:mb-5">
                {/* inDesign */}
                <button type="button" className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="h-4 w-4" aria-hidden="true" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1558 0.238281H1.51087C0.676432 0.238281 0 0.916011 0 1.75205V15.4231C0 16.2592 0.676432 16.9369 1.51087 16.9369H15.1558C15.9902 16.9369 16.6667 16.2592 16.6667 15.4231V1.75205C16.6667 0.916011 15.9902 0.238281 15.1558 0.238281Z" fill="#DC395F" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5851 4.48532C6.5851 5.05555 6.12098 5.49063 5.56694 5.49063C5.0129 5.49063 4.5489 5.05549 4.5489 4.48532C4.5489 3.91548 5.0129 3.48047 5.56694 3.48047C6.12098 3.48047 6.5851 3.91548 6.5851 4.48532ZM3.36647 11.6283C3.36647 11.4037 3.39648 11.1283 3.45632 10.8732H3.45638L4.21986 7.74784H3.03711L3.39648 6.41952H6.24128L5.11823 10.8828C5.04336 11.168 5.01341 11.4046 5.01341 11.5693C5.01341 11.8547 5.15365 11.9382 5.37292 11.9877C5.50645 12.0177 6.57045 11.9967 7.14968 10.7066L7.88731 7.74784H6.68946L7.04883 6.41952H9.60899L9.27969 7.92762C9.72878 7.0874 10.6272 6.28906 11.5106 6.28906C12.4538 6.28906 13.2324 6.96236 13.2324 8.25246C13.2324 8.58238 13.1874 8.94147 13.0677 9.34641L12.5885 11.0709C12.5437 11.2514 12.5136 11.4012 12.5136 11.5362C12.5136 11.8361 12.6334 11.986 12.858 11.986C13.0826 11.986 13.3671 11.8206 13.6966 10.906L14.3553 11.1608C13.966 12.526 13.2623 13.0958 12.3789 13.0958C11.3458 13.0958 10.8518 12.4811 10.8518 11.6408C10.8518 11.4009 10.8816 11.1458 10.9565 10.8907L11.4507 9.12059C11.5106 8.92549 11.5255 8.74565 11.5255 8.58056C11.5255 8.01072 11.1812 7.66552 10.6272 7.66552C9.92344 7.66552 9.45932 8.17164 9.21973 9.14668L8.2614 12.9977H6.58464L6.88562 11.7875C6.39271 12.5988 5.70814 13.1012 4.86374 13.1012C3.84557 13.1012 3.36647 12.5135 3.36647 11.6283Z" fill="white" />
                  </svg>
                  <span className="sr-only">inDesign</span>
                </button>
                {/* Sketch */}
                <button type="button" className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="h-4 w-4" aria-hidden="true" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.29749 1.44122L8.98499 0.9375L13.6725 1.44122L17.3015 6.39306L8.98499 16.237L0.668457 6.39306L4.29749 1.44122Z" fill="#FDB300" />
                    <path d="M4.03512 6.39453L8.98304 16.2384L0.666504 6.39453H4.03512Z" fill="#EA6C00" />
                    <path d="M13.9288 6.39453L8.98082 16.2384L17.2974 6.39453H13.9288Z" fill="#EA6C00" />
                    <path d="M4.03369 6.39453H13.9295L8.98162 16.2384L4.03369 6.39453Z" fill="#FDAD00" />
                    <path d="M8.98357 0.9375L4.29605 1.44121L4.03564 6.39305L8.98357 0.9375Z" fill="#FDD231" />
                    <path d="M8.98225 0.9375L13.6698 1.44121L13.9302 6.39305L8.98225 0.9375Z" fill="#FDD231" />
                    <path d="M17.2993 6.39324L13.6703 1.44141L13.9307 6.39324H17.2993Z" fill="#FDAD00" />
                    <path d="M0.666504 6.39324L4.29552 1.44141L4.03512 6.39324H0.666504Z" fill="#FDAD00" />
                    <path d="M8.98357 0.9375L4.03564 6.39305H13.9315L8.98357 0.9375Z" fill="#FEEEB7" />
                  </svg>
                  <span className="sr-only">Sketch</span>
                </button>
                {/* Figma */}
                <button type="button" className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="h-4 w-4" aria-hidden="true" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.07953 16.9342C4.61287 16.9342 5.85731 15.6877 5.85731 14.1517V11.3691H3.07953C1.5462 11.3691 0.301758 12.6157 0.301758 14.1517C0.301758 15.6877 1.5462 16.9342 3.07953 16.9342Z" fill="#0ACF83" />
                    <path d="M0.301758 8.58723C0.301758 7.05127 1.5462 5.80469 3.07953 5.80469H5.85731V11.3698H3.07953C1.5462 11.3698 0.301758 10.1232 0.301758 8.58723Z" fill="#A259FF" />
                    <path d="M0.301758 3.02278C0.301758 1.48682 1.5462 0.240234 3.07953 0.240234H5.85731V5.80533H3.07953C1.5462 5.80533 0.301758 4.55875 0.301758 3.02278Z" fill="#F24E1E" />
                    <path d="M5.8584 0.240234H8.63618C10.1695 0.240234 11.414 1.48681 11.414 3.02278C11.414 4.55874 10.1695 5.80532 8.63618 5.80532H5.8584V0.240234Z" fill="#FF7262" />
                    <path d="M11.414 8.58723C11.414 10.1232 10.1695 11.3698 8.63618 11.3698C7.10284 11.3698 5.8584 10.1232 5.8584 8.58723C5.8584 7.05127 7.10284 5.80469 8.63618 5.80469C10.1695 5.80469 11.414 7.05127 11.414 8.58723Z" fill="#1ABCFE" />
                  </svg>
                  <span className="sr-only">Figma</span>
                </button>
                {/* HTML5 */}
                <button type="button" className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="h-4 w-4" aria-hidden="true" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.12301 0.771564H4.80021V2.31469H5.56748V0.771564H6.24801V0H4.12301V0.771564ZM2.31024 2.81701e-05H1.54297V2.31473H2.31691V1.54316H3.01746V2.31473H3.78473V2.81701e-05H3.01746V0.764886H2.31024V2.81701e-05ZM6.58398 2.81701e-05H7.38795L7.88167 0.815203L8.37539 2.81701e-05H9.17935V2.31472H8.41208V1.16744L7.875 1.99939L7.33791 1.16744V2.31472H6.58398V2.81701e-05ZM10.3278 2.81701e-05H9.56055V2.31472H11.4153V1.54987H10.3278V2.81701e-05Z" fill="black" />
                    <path d="M1.51493 15.8006L0.414062 3.375H12.5169L11.416 15.7939L6.45547 17.176" fill="#E44D26" />
                    <path d="M6.46484 16.119V4.39453H11.4121L10.468 14.9952" fill="#F16529" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.46706 5.91406H2.66406L3.07772 10.5166H6.46706V8.99697H4.46548L4.32537 7.43707H6.46706V5.91406ZM4.66377 11.2822H3.14258L3.35608 13.6741L6.46518 14.5463V12.9562L4.77052 12.5L4.66377 11.2822Z" fill="#EBEBEB" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.45898 5.91406H10.2553L10.1152 7.43707H6.45898V5.91406ZM6.45703 8.99756H9.97646L9.55946 13.6739L6.45703 14.5394V12.956L8.14836 12.4998L8.32516 10.5206H6.45703V8.99756Z" fill="white" />
                  </svg>
                  <span className="sr-only">HTML</span>
                </button>
                {/* Adobe XD */}
                <button type="button" className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="h-4 w-4" aria-hidden="true" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2735 14.9046H3.03744C1.64855 14.9046 0.516602 13.7899 0.516602 12.4221V2.75202C0.516602 1.38426 1.64855 0.269531 3.03744 0.269531H13.2666C14.6624 0.269531 15.7874 1.38426 15.7874 2.75202V12.4153C15.7944 13.7899 14.6624 14.9046 13.2735 14.9046Z" fill="#2E001F" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.41134 7.07379L8.35579 10.7531C8.39051 10.8078 8.36968 10.8625 8.31412 10.8625H7.10579C7.0294 10.8625 6.99468 10.842 6.95995 10.7736C6.8451 10.5403 6.72979 10.307 6.61389 10.0726L6.61373 10.0723C6.28119 9.39953 5.94383 8.71708 5.59884 7.99703H5.58495C5.16829 8.91343 4.70995 9.8777 4.26551 10.7804C4.23079 10.8351 4.19606 10.8557 4.14051 10.8557H2.99467C2.92523 10.8557 2.91829 10.8009 2.95301 10.7599L4.85579 7.19005L3.01551 3.57914C2.97384 3.52443 3.01551 3.4834 3.05717 3.4834H4.25162C4.32106 3.4834 4.34884 3.49708 4.37662 3.55863C4.81412 4.46135 5.25856 5.39143 5.67523 6.301H5.68912C6.0919 5.39827 6.53634 4.46135 6.9669 3.56547L6.96817 3.56347C7.00214 3.50992 7.02331 3.47656 7.0919 3.47656H8.20996C8.26551 3.47656 8.28635 3.5176 8.25162 3.57231L6.41134 7.07379ZM8.69629 8.18851C8.69629 6.59506 9.77268 5.3504 11.481 5.3504C11.6268 5.3504 11.7032 5.3504 11.8421 5.36408V3.55179C11.8421 3.51075 11.8768 3.4834 11.9116 3.4834H13.0088C13.0643 3.4834 13.0782 3.50391 13.0782 3.53811V9.81615C13.0782 10.0008 13.0782 10.2333 13.113 10.4864C13.113 10.5274 13.0991 10.5411 13.0574 10.5616C12.4741 10.8351 11.863 10.9582 11.2796 10.9582C9.77268 10.9651 8.69629 10.0487 8.69629 8.18851ZM11.4402 6.36914C11.6069 6.36914 11.7458 6.3965 11.843 6.43753V9.82275C11.711 9.87746 11.5305 9.89798 11.3638 9.89798C10.5791 9.89798 9.9541 9.3919 9.9541 8.13356C9.9541 7.03251 10.5652 6.36914 11.4402 6.36914Z" fill="#FFD9F2" />
                  </svg>
                  <span className="sr-only">Adobe XD</span>
                </button>
              </dd>

              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Languages</dt>
              <dd className="text-gray-500 dark:text-gray-400">English, French, Spanish</dd>
            </dl>
          </div>

          <button type="button" className={`w-full sm:w-auto ${primaryBtn}`}>
            <EditIcon />
            Edit
          </button>
        </div>

        {/* ── Education & experience ───────────────────────────────────────── */}
        <div className="col-span-2 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6">
          <h2 className="mb-4 flex items-center border-b border-gray-200 pb-4 text-xl font-bold text-gray-900 dark:border-gray-700 dark:text-white md:mb-6">
            Education &amp; experience
            <button type="button" className="ms-1 text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <InfoIcon />
              <span className="sr-only">Show information</span>
            </button>
          </h2>

          <div className="mb-4 mt-4 grid gap-6 border-b border-gray-200 pb-4 dark:border-gray-700 sm:mb-6 sm:mt-6 sm:pb-6 md:grid-cols-2 md:gap-24">

            {/* Experience list */}
            <ul>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white sm:mb-6">Experience</h3>

              {/* Figma */}
              <li className="border-b border-gray-200 pb-4 dark:border-gray-700">
                <div className="items-center space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                    <svg className="h-6" aria-hidden="true" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_exp1)">
                        <path d="M12 12.6754C12 11.8798 12.3161 11.1167 12.8787 10.5541C13.4413 9.99149 14.2044 9.67542 15 9.67542C15.7956 9.67542 16.5587 9.99149 17.1213 10.5541C17.6839 11.1167 18 11.8798 18 12.6754C18 13.4711 17.6839 14.2341 17.1213 14.7967C16.5587 15.3593 15.7956 15.6754 15 15.6754C14.2044 15.6754 13.4413 15.3593 12.8787 14.7967C12.3161 14.2341 12 13.4711 12 12.6754Z" fill="#1ABCFE" />
                        <path d="M6 18.6754C6 17.8798 6.31607 17.1167 6.87868 16.5541C7.44129 15.9915 8.20435 15.6754 9 15.6754H12V18.6754C12 19.4711 11.6839 20.2341 11.1213 20.7967C10.5587 21.3593 9.79565 21.6754 9 21.6754C8.20435 21.6754 7.44129 21.3593 6.87868 20.7967C6.31607 20.2341 6 19.4711 6 18.6754Z" fill="#0ACF83" />
                        <path d="M12 3.67542V9.67542H15C15.7956 9.67542 16.5587 9.35934 17.1213 8.79674C17.6839 8.23413 18 7.47106 18 6.67542C18 5.87977 17.6839 5.1167 17.1213 4.55409C16.5587 3.99149 15.7956 3.67542 15 3.67542H12Z" fill="#FF7262" />
                        <path d="M6 6.67542C6 7.47106 6.31607 8.23413 6.87868 8.79674C7.44129 9.35934 8.20435 9.67541 9 9.67542H12V3.67542H9C8.20435 3.67542 7.44129 3.99149 6.87868 4.55409C6.31607 5.1167 6 5.87977 6 6.67542Z" fill="#F24E1E" />
                        <path d="M6 12.6754C6 13.4711 6.31607 14.2341 6.87868 14.7967C7.44129 15.3593 8.20435 15.6754 9 15.6754H12V9.67542H9C8.20435 9.67542 7.44129 9.99149 6.87868 10.5541C6.31607 11.1167 6 11.8798 6 12.6754Z" fill="#A259FF" />
                      </g>
                      <defs><clipPath id="clip0_exp1"><rect width="12" height="18" fill="white" transform="translate(6 3.67542)" /></clipPath></defs>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-semibold text-gray-900 dark:text-white">Figma</p>
                    <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">Web Developer, New York, USA</p>
                  </div>
                  <div className="inline-flex items-center">
                    <span className="me-2 flex items-center rounded-sm bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      <CalendarIcon />
                      2015 - Present
                    </span>
                  </div>
                </div>
              </li>

              {/* Skype */}
              <li className="border-b border-gray-200 py-4 dark:border-gray-700">
                <div className="items-center space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                    <svg className="h-6" aria-hidden="true" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.3629 14.1744C20.3572 14.206 20.3532 14.238 20.3472 14.2696L20.3164 14.0883C20.3332 14.1165 20.3472 14.1459 20.3629 14.1744C20.4558 13.6687 20.5046 13.151 20.5046 12.6337C20.5046 11.4863 20.2799 10.3731 19.8361 9.32527C19.4079 8.31303 18.7954 7.40398 18.0143 6.62349C17.2344 5.843 16.3248 5.23041 15.3131 4.80225C14.2655 4.35899 13.1523 4.13436 12.005 4.13436C11.4642 4.13436 10.9226 4.1851 10.3955 4.2863C10.3944 4.28658 10.393 4.28658 10.3916 4.28687C10.4212 4.30255 10.4511 4.31651 10.4802 4.33276L10.3015 4.30483C10.3314 4.29913 10.3616 4.29285 10.3916 4.28687C9.66837 3.90232 8.8551 3.69708 8.03185 3.69708C6.6878 3.69708 5.42413 4.22045 4.47375 5.17112C3.52365 6.1215 3 7.38517 3 8.72922C3 9.58468 3.22006 10.4256 3.63311 11.1687C3.63853 11.138 3.64224 11.1069 3.64822 11.0761L3.67901 11.2543C3.66305 11.2263 3.64908 11.1972 3.63311 11.1687C3.54931 11.6502 3.50512 12.1422 3.50512 12.6337C3.50512 13.7813 3.72975 14.8942 4.17358 15.9423C4.60117 16.9549 5.21405 17.8633 5.99425 18.6438C6.77531 19.4243 7.68379 20.0378 8.6966 20.4648C9.74419 20.9089 10.8576 21.1338 12.005 21.1338C12.5044 21.1338 13.005 21.0882 13.4936 21.0015C13.4651 20.9856 13.436 20.971 13.4069 20.9542L13.5885 20.9861C13.5571 20.9921 13.5255 20.9958 13.4936 21.0015C14.2464 21.4274 15.0987 21.6538 15.969 21.6538C17.3128 21.6538 18.5759 21.1312 19.5262 20.1803C20.4769 19.2305 21 17.9665 21 16.6225C21 15.7642 20.7788 14.9204 20.3629 14.1744ZM12.0389 17.8391C9.01929 17.8391 7.6684 16.3545 7.6684 15.2419C7.6684 14.6713 8.08971 14.2713 8.67038 14.2713C9.96255 14.2713 9.62789 16.1268 12.0389 16.1268C13.2732 16.1268 13.9548 15.4566 13.9548 14.7707C13.9548 14.3583 13.7513 13.901 12.9386 13.7006L10.2527 13.0302C8.08971 12.4877 7.69719 11.3184 7.69719 10.2192C7.69719 7.93704 9.84596 7.08015 11.8639 7.08015C13.7227 7.08015 15.914 8.1075 15.914 9.47664C15.914 10.0633 15.406 10.4045 14.8256 10.4045C13.7227 10.4045 13.9257 8.87802 11.7043 8.87802C10.6019 8.87802 9.99134 9.37715 9.99134 10.0915C9.99134 10.8044 10.8619 11.0322 11.6179 11.2044L13.6059 11.6456C15.7834 12.1308 16.3356 13.4022 16.3356 14.5997C16.3356 16.4543 14.912 17.8391 12.0389 17.8391Z" fill="#00AFF0" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-semibold text-gray-900 dark:text-white">Skype</p>
                    <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">Web Designer, Palo Alto, USA</p>
                  </div>
                  <div className="inline-flex items-center">
                    <span className="me-2 flex items-center rounded-sm bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      <CalendarIcon />
                      2011 - 2015
                    </span>
                  </div>
                </div>
              </li>

              {/* Amazon */}
              <li className="pt-4">
                <div className="items-center space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                    <svg className="h-6" aria-hidden="true" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.6362 11.0391C7.6362 11.2852 7.66281 11.4847 7.70937 11.6311C7.76258 11.7774 7.8291 11.9371 7.92223 12.11C7.95549 12.1632 7.96879 12.2164 7.96879 12.263C7.96879 12.3295 7.92888 12.396 7.84241 12.4626L7.42334 12.7419C7.36348 12.7818 7.30361 12.8018 7.2504 12.8018C7.18388 12.8018 7.11736 12.7685 7.05084 12.7087C6.95772 12.6089 6.8779 12.5025 6.81138 12.396C6.74486 12.283 6.67834 12.1566 6.60517 12.0036C6.08633 12.6155 5.43446 12.9215 4.64955 12.9215C4.0908 12.9215 3.64513 12.7619 3.31919 12.4426C2.99325 12.1233 2.82696 11.6976 2.82696 11.1655C2.82696 10.6001 3.02651 10.1411 3.43227 9.79518C3.83803 9.44929 4.37682 9.27634 5.06196 9.27634C5.28812 9.27634 5.52093 9.2963 5.76705 9.32956C6.01316 9.36282 6.26593 9.41603 6.532 9.4759V8.99032C6.532 8.48478 6.42557 8.13224 6.21937 7.92603C6.00651 7.71983 5.64732 7.62005 5.13513 7.62005C4.90231 7.62005 4.66285 7.64666 4.41673 7.70652C4.17062 7.76639 3.93115 7.83956 3.69834 7.93268C3.59191 7.97925 3.51209 8.00585 3.46553 8.01916C3.41897 8.03246 3.38571 8.03911 3.3591 8.03911C3.26597 8.03911 3.21941 7.97259 3.21941 7.83291V7.50697C3.21941 7.40054 3.23272 7.32072 3.26597 7.27416C3.29923 7.22759 3.3591 7.18103 3.45222 7.13447C3.68504 7.01474 3.96441 6.91496 4.29035 6.83514C4.61629 6.74866 4.96218 6.70875 5.32803 6.70875C6.11959 6.70875 6.6983 6.88835 7.0708 7.24755C7.43665 7.60675 7.6229 8.15219 7.6229 8.88389V11.0391H7.6362ZM4.93557 12.0501C5.15508 12.0501 5.38124 12.0102 5.62071 11.9304C5.86017 11.8506 6.07303 11.7042 6.25263 11.5047C6.35906 11.3783 6.43888 11.2386 6.47879 11.079C6.5187 10.9193 6.54531 10.7264 6.54531 10.5003V10.2209C6.3524 10.1743 6.1462 10.1344 5.93334 10.1078C5.72048 10.0812 5.51428 10.0679 5.30807 10.0679C4.8624 10.0679 4.53647 10.1544 4.31696 10.334C4.09745 10.5136 3.99102 10.7663 3.99102 11.0989C3.99102 11.4116 4.07084 11.6444 4.23714 11.804C4.39678 11.9703 4.62959 12.0501 4.93557 12.0501Z" fill="#252F3E" />
                      <path d="M20.0817 16.1809C17.8933 17.7973 14.7137 18.6554 11.9798 18.6554C8.14838 18.6554 4.6961 17.2385 2.0886 14.8838C1.8824 14.6976 2.06865 14.4448 2.31476 14.5911C5.13512 16.2275 8.61401 17.2186 12.2126 17.2186C14.6405 17.2186 17.3079 16.713 19.7624 15.6754C20.1283 15.5091 20.4409 15.9148 20.0817 16.1809ZM20.993 15.1432C20.7136 14.784 19.1438 14.9703 18.4321 15.0568C18.2192 15.0834 18.1859 14.8971 18.3788 14.7574C19.6294 13.8794 21.6848 14.1322 21.9242 14.4248C22.1637 14.7242 21.8577 16.7796 20.687 17.764C20.5074 17.917 20.3345 17.8372 20.4143 17.6376C20.6804 16.9791 21.2724 15.4958 20.993 15.1432Z" fill="#FF9900" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-semibold text-gray-900 dark:text-white">Amazon</p>
                    <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">Web Designer, Palo Alto, USA</p>
                  </div>
                  <div className="inline-flex items-center">
                    <span className="me-2 flex items-center rounded-sm bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      <CalendarIcon />
                      2009 - 2011
                    </span>
                  </div>
                </div>
              </li>
            </ul>

            {/* Education list */}
            <ul>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white sm:mb-6">Education</h3>

              {/* Stanford */}
              <li className="border-b border-gray-200 pb-4 dark:border-gray-700">
                <div className="items-center space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-bold uppercase text-gray-900 dark:bg-gray-700 dark:text-white">SU</div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-semibold text-gray-900 dark:text-white">Stanford University</p>
                    <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">Computer Science and Engineering</p>
                  </div>
                  <div className="inline-flex items-center">
                    <span className="me-2 flex items-center rounded-sm bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      <CalendarIcon />
                      2009 - 2014
                    </span>
                  </div>
                </div>
              </li>

              {/* Thomas Jeff High School */}
              <li className="border-gray-200 py-4 dark:border-gray-700 md:border-b">
                <div className="items-center space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-bold uppercase text-gray-900 dark:bg-gray-700 dark:text-white">TJ</div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-semibold text-gray-900 dark:text-white">Thomas Jeff High School</p>
                    <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">Secondary School Certificate</p>
                  </div>
                  <div className="inline-flex items-center">
                    <span className="me-2 flex items-center rounded-sm bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      <CalendarIcon />
                      2005 - 2009
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <button type="button" className={`w-full sm:w-auto ${primaryBtn}`}>
            <EditIcon />
            Edit
          </button>
        </div>

      </div>
    </PreviewShell>
  );
}
