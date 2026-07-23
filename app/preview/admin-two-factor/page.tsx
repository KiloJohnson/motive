"use client";

import { useRef } from "react";
import { PreviewShell } from "../PreviewShell";

export default function AdminTwoFactorPage() {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  function handleKeyUp(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    const value = (e.target as HTMLInputElement).value;
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
    if (e.key === "Backspace" && !value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  return (
    <PreviewShell title="Two-Factor Auth" variant="admin">
      <section className="bg-gray-50 dark:bg-gray-900 min-h-full">
        <div className="mx-auto grid min-h-screen max-w-screen-xl items-center justify-items-center px-4 py-8 lg:grid-cols-12 lg:gap-20 lg:py-16">

          {/* Illustration — desktop only */}
          <div className="mr-auto hidden place-self-center lg:col-span-6 lg:flex">
            <img
              className="mx-auto dark:hidden"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/girl-and-computer.svg`}
              alt="Two-factor authentication illustration"
            />
            <img
              className="mx-auto hidden dark:block"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/girl-and-computer-dark.svg`}
              alt="Two-factor authentication illustration"
            />
          </div>

          {/* Card */}
          <div className="place-self-center lg:col-span-6">
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:max-w-xl sm:p-6">

              {/* Logo / brand */}
              <a
                href="#"
                className="mb-4 inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white sm:mb-6"
              >
                <img
                  className="mr-2 h-8 w-auto dark:hidden"
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/scripps_light.svg`}
                  alt="Scripps Health"
                />
                <img
                  className="mr-2 h-8 w-auto hidden dark:block"
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/scripps_dark.svg`}
                  alt="Scripps Health"
                />
                Scripps Health
              </a>

              <h1 className="mb-2 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                Two-factor authentication
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Open the two-factor authentication app on your device to view your
                authentication code and verify your identity.
              </p>

              <form onSubmit={(e) => e.preventDefault()}>
                {/* Code inputs */}
                <div className="my-4 flex space-x-2 sm:my-6 sm:space-x-4">
                  {[1, 2, 3, 4, 5, 6].map((n, i) => (
                    <div key={n}>
                      <label htmlFor={`code-${n}`} className="sr-only">
                        {["First", "Second", "Third", "Fourth", "Fifth", "Sixth"][i]} code
                      </label>
                      <input
                        ref={(el) => { inputRefs.current[i] = el; }}
                        id={`code-${n}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        onKeyUp={(e) => handleKeyUp(i, e)}
                        className="block h-12 w-12 rounded-lg border border-gray-300 bg-white py-3 text-center text-2xl font-extrabold text-gray-900 focus:border-[#1A56DB] focus:ring-2 focus:ring-[#1A56DB] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-[#1A56DB] dark:focus:ring-[#1A56DB] sm:h-16 sm:w-16 sm:py-4 sm:text-4xl"
                        required
                      />
                    </div>
                  ))}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:py-3.5"
                  style={{ backgroundColor: "#1A56DB" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1e429f"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1A56DB"; }}
                >
                  Verify
                </button>

                {/* Recovery note */}
                <p className="mt-4 rounded-lg bg-gray-100 p-4 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400 sm:mt-6">
                  Can&apos;t access your two-factor device?{" "}
                  <a
                    href="#"
                    className="font-medium underline hover:no-underline"
                    style={{ color: "#1A56DB" }}
                  >
                    Recover my account.
                  </a>
                </p>
              </form>

            </div>
          </div>

        </div>
      </section>
    </PreviewShell>
  );
}
