"use client";

import { PreviewShell } from "../PreviewShell";

export default function AdminMaintenancePage() {
  return (
    <PreviewShell title="Maintenance" variant="admin">
      <section className="mx-auto flex h-full min-h-full flex-col items-center justify-center bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl w-full content-center gap-8 px-4 py-8 sm:grid sm:grid-cols-12 lg:px-6 lg:py-16">

          {/* Left column — text + CTA */}
          <div className="self-center sm:col-span-7 lg:col-span-6">
            {/* Logo */}
            <a href="/preview/admin-dashboard" className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white mb-6">
              <img className="mr-2 h-8 w-auto dark:hidden" src="/logos/scripps_light.svg" alt="Scripps Health" />
              <img className="mr-2 h-8 w-auto hidden dark:block" src="/logos/scripps_dark.svg" alt="Scripps Health" />
            </a>

            <h1 className="my-4 text-3xl font-bold text-gray-900 dark:text-white md:my-6 md:text-4xl">
              Down for Maintenance
            </h1>

            <p className="mb-2 text-gray-500 dark:text-gray-400">
              This application is down for planned maintenance. We&rsquo;ll be back with the latest updates soon.
            </p>

            <p className="mb-4 text-gray-500 dark:text-gray-400 md:mb-6">
              Follow us on{" "}
              <a href="#" className="font-medium hover:underline" style={{ color: "#1A56DB" }}>
                Twitter
              </a>{" "}
              or our{" "}
              <a href="#" className="font-medium hover:underline" style={{ color: "#1A56DB" }}>
                blog
              </a>{" "}
              for the latest updates.
            </p>

            <button
              type="button"
              className="rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              style={{ backgroundColor: "#1A56DB" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e429f")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1A56DB")}
            >
              Contact us
            </button>
          </div>

          {/* Right column — illustration */}
          <div className="hidden sm:col-span-5 sm:flex lg:col-span-6">
            {/* Light mode illustration */}
            <svg
              className="mx-auto mb-4 h-auto w-44 dark:hidden lg:w-72"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Ground / base */}
              <ellipse cx="200" cy="265" rx="160" ry="18" fill="#E5E7EB" />
              {/* Server rack body */}
              <rect x="120" y="90" width="160" height="160" rx="10" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2" />
              {/* Rack slots */}
              <rect x="132" y="105" width="136" height="22" rx="4" fill="#E5E7EB" />
              <rect x="132" y="135" width="136" height="22" rx="4" fill="#E5E7EB" />
              <rect x="132" y="165" width="136" height="22" rx="4" fill="#DBEAFE" />
              <rect x="132" y="195" width="136" height="22" rx="4" fill="#E5E7EB" />
              {/* Status lights */}
              <circle cx="256" cy="116" r="4" fill="#6EE7B7" />
              <circle cx="244" cy="116" r="4" fill="#6EE7B7" />
              <circle cx="256" cy="146" r="4" fill="#6EE7B7" />
              <circle cx="244" cy="146" r="4" fill="#FCD34D" />
              {/* Active slot light — blinking effect suggestion */}
              <circle cx="256" cy="176" r="4" fill="#FCA5A5" />
              <circle cx="244" cy="176" r="4" fill="#FCA5A5" />
              <circle cx="256" cy="206" r="4" fill="#6EE7B7" />
              <circle cx="244" cy="206" r="4" fill="#E5E7EB" />
              {/* Wrench / tool icon above server */}
              <circle cx="200" cy="58" r="28" fill="#DBEAFE" />
              <path d="M192 50 Q200 42 208 50 L205 65 H195 Z" fill="#1A56DB" opacity="0.7" />
              <rect x="197" y="60" width="6" height="14" rx="2" fill="#1A56DB" />
              {/* Cog */}
              <circle cx="200" cy="54" r="5" fill="#1A56DB" />
              {/* Legs */}
              <rect x="145" y="248" width="20" height="17" rx="3" fill="#D1D5DB" />
              <rect x="235" y="248" width="20" height="17" rx="3" fill="#D1D5DB" />
            </svg>

            {/* Dark mode illustration */}
            <svg
              className="mx-auto mb-4 hidden h-auto w-44 dark:flex lg:w-72"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Ground / base */}
              <ellipse cx="200" cy="265" rx="160" ry="18" fill="#374151" />
              {/* Server rack body */}
              <rect x="120" y="90" width="160" height="160" rx="10" fill="#1F2937" stroke="#374151" strokeWidth="2" />
              {/* Rack slots */}
              <rect x="132" y="105" width="136" height="22" rx="4" fill="#374151" />
              <rect x="132" y="135" width="136" height="22" rx="4" fill="#374151" />
              <rect x="132" y="165" width="136" height="22" rx="4" fill="#1e3a5f" />
              <rect x="132" y="195" width="136" height="22" rx="4" fill="#374151" />
              {/* Status lights */}
              <circle cx="256" cy="116" r="4" fill="#34D399" />
              <circle cx="244" cy="116" r="4" fill="#34D399" />
              <circle cx="256" cy="146" r="4" fill="#34D399" />
              <circle cx="244" cy="146" r="4" fill="#FBBF24" />
              {/* Active slot light */}
              <circle cx="256" cy="176" r="4" fill="#F87171" />
              <circle cx="244" cy="176" r="4" fill="#F87171" />
              <circle cx="256" cy="206" r="4" fill="#34D399" />
              <circle cx="244" cy="206" r="4" fill="#4B5563" />
              {/* Wrench / tool icon above server */}
              <circle cx="200" cy="58" r="28" fill="#1e3a5f" />
              <path d="M192 50 Q200 42 208 50 L205 65 H195 Z" fill="#60A5FA" opacity="0.8" />
              <rect x="197" y="60" width="6" height="14" rx="2" fill="#60A5FA" />
              {/* Cog */}
              <circle cx="200" cy="54" r="5" fill="#60A5FA" />
              {/* Legs */}
              <rect x="145" y="248" width="20" height="17" rx="3" fill="#4B5563" />
              <rect x="235" y="248" width="20" height="17" rx="3" fill="#4B5563" />
            </svg>
          </div>

        </div>
      </section>
    </PreviewShell>
  );
}
