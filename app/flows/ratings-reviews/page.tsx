"use client";

import { useState } from "react";

function Stars({ rating = 4.9, size = 14 }: { rating?: number; size?: number }) {
  return (
    <div className="flex">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width={size} height={size} viewBox="0 0 14 14"
          fill={i <= Math.round(rating) ? "#F4B942" : "#E5E7EB"}>
          <path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9l-3 1.5.5-3.5L2 4.5 5.5 4z"/>
        </svg>
      ))}
    </div>
  );
}

function StarRating({ rating = 4.9, count = 37 }: { rating?: number; count?: number }) {
  return (
    <div className="flex items-center gap-2">
      <Stars rating={rating} />
      <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>{rating}</span>
      <span className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>({count} ratings)</span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gray-400">
        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M7 6v4M7 4v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

const reviews = [
  {
    rating: 4.9,
    text: "Dr Nathwani was very kind and professional. I was a little nervous but she made me feel very comfortable",
    date: "February 26, 2025",
    reviewer: "Jennifer L.",
    verified: true,
  },
  {
    rating: 4.9,
    text: "Dr Bamrolia was very kind and professional. I was a little nervous but she made me feel very comfortable",
    date: "February 26, 2025",
    reviewer: "Jennifer L.",
    verified: true,
  },
  {
    rating: 4.9,
    text: "Dr Bamrolia was incredibly attentive and reassuring during my checkup. Her professionalism and warmth helped ease my nerves, making the entire experience pleasant.",
    date: "February 26, 2025",
    reviewer: "Jennifer L.",
    verified: true,
    truncated: true,
  },
];

function ReviewCard({ review, mobile = false }: { review: typeof reviews[0]; mobile?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`py-4 border-b border-gray-100 last:border-0 ${mobile ? "" : ""}`}>
      <div className="flex items-center gap-2 mb-1">
        <Stars rating={review.rating} size={13} />
        <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>{review.rating}</span>
      </div>
      <p className={`text-sm text-gray-700 mb-2 leading-relaxed ${review.truncated && !expanded ? "line-clamp-2" : ""}`}
        style={{ fontFamily: "var(--font-red-hat-text)" }}>
        {review.text}
      </p>
      {review.truncated && !expanded && (
        <button onClick={() => setExpanded(true)} className="text-xs font-semibold" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
          Show more
        </button>
      )}
      <p className="text-xs text-gray-400 mt-1" style={{ fontFamily: "var(--font-red-hat-text)" }}>
        {review.date} &nbsp;|&nbsp; {review.reviewer}
        {review.verified && <span className="ml-1">(Verified patient)</span>}
      </p>
    </div>
  );
}

function RatingSummary({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={`flex ${mobile ? "flex-col gap-2" : "items-center justify-between"} mb-6`}>
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "var(--font-red-hat-display)" }}>
          Ratings and reviews
        </h2>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-4xl font-bold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>4.9</span>
          <div>
            <StarRating />
          </div>
        </div>
      </div>
      {!mobile && (
        <button className="px-4 py-2 text-sm font-semibold rounded-full border border-gray-300 text-gray-700 hover:border-gray-400 transition-colors flex items-center gap-1"
          style={{ fontFamily: "var(--font-red-hat-text)" }}>
          + Detailed scores
        </button>
      )}
      {mobile && (
        <button className="text-sm font-semibold" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
          Show detailed scores
        </button>
      )}
    </div>
  );
}

export default function RatingsReviewsPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Ratings & Reviews</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The provider rating and patient review section on the profile page. Summary score,
          individual review cards, verification badge, and a "View More" pagination control.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Star Rating atom */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Star Rating</h2>
          <p className="text-sm text-gray-500 mb-6">The atomic rating component. Used in provider cards, profile headers, and review summaries.</p>
          <div className="border border-gray-100 rounded divide-y divide-gray-100">
            {[
              { label: "Full rating", el: <StarRating rating={4.9} count={37} /> },
              { label: "No count",    el: <StarRating rating={4.9} count={0} /> },
              { label: "Lower score", el: <StarRating rating={3.2} count={12} /> },
            ].map(({ label, el }) => (
              <div key={label} className="flex items-center gap-8 px-6 py-4">
                <p className="text-sm text-gray-400 w-32 shrink-0" style={{ fontFamily: "var(--font-red-hat-text)" }}>{label}</p>
                {el}
              </div>
            ))}
          </div>
        </section>

        {/* Desktop */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Desktop</h2>
          <p className="text-sm text-gray-500 mb-6">Summary + individual review cards. Truncated long reviews show a "Show more" toggle.</p>
          <div className="border border-gray-100 rounded p-6">
            <RatingSummary />
            <div className="divide-y divide-gray-100">
              {reviews.map((r, i) => <ReviewCard key={i} review={r} />)}
            </div>
            <div className="mt-6 flex justify-center">
              <button className="px-6 py-2.5 text-sm font-semibold rounded-full border border-[#005FCF] hover:bg-[#F3F8FB] transition-colors"
                style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
                + View More
              </button>
            </div>
          </div>
        </section>

        {/* Mobile */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Mobile</h2>
          <p className="text-sm text-gray-500 mb-6">Stacked layout. "Detailed scores" becomes a text link. Review cards are full-width.</p>
          <div className="border border-gray-100 rounded p-4 max-w-sm">
            <RatingSummary mobile />
            <div className="divide-y divide-gray-100">
              {reviews.map((r, i) => <ReviewCard key={i} review={r} mobile />)}
            </div>
            <div className="mt-4 flex justify-center">
              <button className="px-6 py-2.5 text-sm font-semibold rounded-full border border-[#005FCF]"
                style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
                + View More
              </button>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "Only show ratings if the provider has at least 5 reviews — don't display a 5.0 from 1 review.",
              "'Verified patient' badge is applied by the ratings platform — never manually.",
              "Long reviews truncate at 2 lines with 'Show more' — never truncate short reviews.",
              "'Detailed scores' opens a breakdown by category (bedside manner, wait time, etc.).",
              "'View More' loads additional reviews in place — no full page reload.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
