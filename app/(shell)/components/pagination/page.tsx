"use client";

import { useState } from "react";

// --- Icons ---
function ChevronLeft() {
  return <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function ChevronRight() {
  return <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

// --- Pagination Button ---
type PaginationBtnProps = {
  label: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  isIcon?: boolean;
};

function PaginationBtn({ label, active, disabled, onClick, isIcon }: PaginationBtnProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-10 h-10 flex items-center justify-center rounded text-sm font-semibold transition-all
        ${active ? "bg-[#005FCF] text-white rounded-full" : ""}
        ${!active && !disabled ? "text-[#005FCF] hover:bg-[#F3F8FB] border border-transparent hover:border-gray-200" : ""}
        ${disabled ? "text-gray-300 cursor-not-allowed" : "cursor-pointer"}
      `}
      style={{ fontFamily: "var(--font-red-hat-text)" }}
    >
      {label}
    </button>
  );
}

// --- Full Pagination ---
function Pagination({ totalPages = 10 }: { totalPages?: number }) {
  const [current, setCurrent] = useState(1);

  const getPages = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, "...", totalPages];
    if (current >= totalPages - 2) return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", current, "...", totalPages];
  };

  return (
    <div className="inline-flex items-center rounded-full border border-[#005FCF] overflow-hidden">
      <button
        onClick={() => setCurrent(Math.max(1, current - 1))}
        disabled={current === 1}
        className="w-10 h-10 flex items-center justify-center text-[#005FCF] hover:bg-[#F3F8FB] disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft />
      </button>
      {getPages().map((page, i) => (
        page === "..." ? (
          <span key={`ellipsis-${i}`} className="w-10 h-10 flex items-center justify-center text-sm text-[#005FCF]">…</span>
        ) : (
          <button
            key={page}
            onClick={() => setCurrent(page as number)}
            className={`w-10 h-10 flex items-center justify-center text-sm font-semibold transition-colors
              ${current === page ? "bg-[#005FCF] text-white" : "text-[#005FCF] hover:bg-[#F3F8FB]"}
            `}
            style={{ fontFamily: "var(--font-red-hat-text)" }}
          >
            {page}
          </button>
        )
      ))}
      <button
        onClick={() => setCurrent(Math.min(totalPages, current + 1))}
        disabled={current === totalPages}
        className="w-10 h-10 flex items-center justify-center text-[#005FCF] hover:bg-[#F3F8FB] disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

// --- Results Per Page ---
function ResultsPerPage() {
  const [perPage, setPerPage] = useState(10);
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>
        Results per page
      </span>
      <div className="inline-flex rounded-full border border-[#005FCF] overflow-hidden">
        {[10, 20].map((n) => (
          <button
            key={n}
            onClick={() => setPerPage(n)}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${
              perPage === n ? "bg-[#005FCF] text-white" : "text-[#005FCF] hover:bg-[#F3F8FB]"
            }`}
            style={{ fontFamily: "var(--font-red-hat-text)" }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}

// --- Full Pagination Bar ---
function PaginationBar({ mobile = false }: { mobile?: boolean }) {
  return mobile ? (
    <div className="flex flex-col items-center gap-4">
      <Pagination />
      <ResultsPerPage />
    </div>
  ) : (
    <div className="flex items-center justify-between w-full">
      <Pagination />
      <ResultsPerPage />
    </div>
  );
}

// --- Page ---
export default function PaginationPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>
          Components
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Pagination</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Pagination splits large result sets across multiple pages. The Scripps pagination system
          includes page buttons, prev/next controls, ellipsis truncation, and a results-per-page toggle.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16">

        {/* Pagination buttons */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Pagination Buttons</h2>
            <p className="text-sm text-gray-500">Individual button types and states.</p>
          </div>
          <div className="border border-gray-100 rounded divide-y divide-gray-100">
            {[
              { label: "Number — Enabled",  el: <PaginationBtn label="4" /> },
              { label: "Number — Current",  el: <PaginationBtn label="4" active /> },
              { label: "Number — Disabled", el: <PaginationBtn label="4" disabled /> },
              { label: "Prev (icon)",       el: <PaginationBtn label={<ChevronLeft />} isIcon /> },
              { label: "Next (icon)",       el: <PaginationBtn label={<ChevronRight />} isIcon /> },
              { label: "Ellipsis",          el: <PaginationBtn label="…" disabled /> },
            ].map(({ label, el }) => (
              <div key={label} className="flex items-center gap-6 px-6 py-4">
                <p className="text-sm text-gray-400 w-44 shrink-0">{label}</p>
                {el}
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Pagination</h2>
            <p className="text-sm text-gray-500">Full interactive pagination. Click to navigate — ellipsis truncates middle pages automatically.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded bg-gray-50 flex flex-col gap-6 items-start">
            <div>
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">10 pages</p>
              <Pagination totalPages={10} />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">4 pages</p>
              <Pagination totalPages={4} />
            </div>
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "Always show first and last page numbers — users need anchors.",
              "Truncate middle pages with ellipsis when total pages > 5.",
              "The current page is always visible and highlighted.",
              "Disable Prev on page 1 and Next on the last page.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Results per page */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Results Per Page</h2>
            <p className="text-sm text-gray-500">Segmented control letting users choose how many results to display.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded bg-gray-50">
            <ResultsPerPage />
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "Default selection is 10 — the lower number reduces cognitive load on first view.",
              "Changing results per page resets to page 1.",
              "Use the same options consistently across all paginated lists in the product.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Pagination bar — desktop */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Pagination Bar</h2>
            <p className="text-sm text-gray-500">Combined pagination + results per page. Desktop and mobile layouts.</p>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">Desktop</p>
              <div className="p-6 border border-gray-100 rounded bg-gray-50">
                <PaginationBar />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">Mobile</p>
              <div className="p-6 border border-gray-100 rounded bg-gray-50 flex justify-center">
                <PaginationBar mobile />
              </div>
            </div>
          </div>
          <ul className="mt-4 space-y-1">
            {[
              "Desktop: pagination on the left, results per page on the right.",
              "Mobile: stacked vertically, pagination on top.",
              "Always use the full bar when both pagination and result count controls are needed.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}
