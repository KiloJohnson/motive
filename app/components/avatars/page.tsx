"use client";

import { useState } from "react";

const sizes = [
  { label: "Large", px: 180, initials: "KN", textSize: "text-4xl" },
  { label: "Medium", px: 96,  initials: "KN", textSize: "text-xl" },
  { label: "Small",  px: 44,  initials: "KN", textSize: "text-sm" },
];

function Avatar({
  src,
  size,
  initials,
  textSize,
  video = false,
}: {
  src?: string;
  size: number;
  initials: string;
  textSize: string;
  video?: boolean;
}) {
  const [err, setErr] = useState(false);
  const videoSize = Math.round(size * 0.25);
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      {src && !err ? (
        <img
          src={src}
          alt=""
          className="rounded-full object-cover w-full h-full"
          style={{ border: "2px solid white" }}
          onError={() => setErr(true)}
        />
      ) : (
        <div
          className={`w-full h-full rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 ${textSize}`}
          style={{ fontFamily: "var(--font-red-hat-display)", border: "2px solid white" }}
        >
          {initials}
        </div>
      )}
      {video && (
        <div
          className="absolute bottom-0 right-0 rounded-full bg-[#005FCF] flex items-center justify-center shadow"
          style={{ width: videoSize, height: videoSize }}
        >
          <svg width={videoSize * 0.4} height={videoSize * 0.45} viewBox="0 0 10 12" fill="none">
            <path d="M2 1l8 5-8 5V1z" fill="white" />
          </svg>
        </div>
      )}
    </div>
  );
}

function AvatarGroup({ photos }: { photos: string[] }) {
  const overlap = 14;
  const size = 48;
  return (
    <div className="flex items-center" style={{ width: size + (photos.length - 1) * (size - overlap) }}>
      {photos.map((src, i) => (
        <div
          key={i}
          className="relative rounded-full overflow-hidden bg-gray-200 border-2 border-white"
          style={{
            width: size,
            height: size,
            marginLeft: i === 0 ? 0 : -overlap,
            zIndex: photos.length - i,
          }}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}

export default function AvatarsPage() {
  const photos = [
    "/images/providers/provider-1.png",
    "/images/providers/provider-2.png",
    "/images/providers/provider-3.png",
    "/images/providers/provider-4.png",
  ];

  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Components</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Avatars</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Circular images representing providers or users. Used across search results, profile headers, booking flows, and group listings.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Sizes */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Sizes</h2>
          <p className="text-sm text-gray-500 mb-6">Three sizes cover all contexts — large for profile headers, medium for cards and results, small for inline references and stacked groups.</p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50 flex items-end gap-10">
            {sizes.map(s => (
              <div key={s.label} className="flex flex-col items-center gap-4">
                <Avatar src={photos[0]} size={s.px} initials={s.initials} textSize={s.textSize} />
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>{s.label}</p>
                  <p className="text-xs font-mono text-gray-400">{s.px}px</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fallback */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Fallback — Initials</h2>
          <p className="text-sm text-gray-500 mb-6">When no photo is available, show the provider's initials on a gray background. Always derive initials from the first two name segments — never show a generic icon.</p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50 flex items-end gap-10">
            {sizes.map(s => (
              <div key={s.label} className="flex flex-col items-center gap-4">
                <Avatar size={s.px} initials={s.initials} textSize={s.textSize} />
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>{s.label}</p>
                  <p className="text-xs font-mono text-gray-400">{s.px}px</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video overlay */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Video Overlay</h2>
          <p className="text-sm text-gray-500 mb-6">A play button badge appears in the bottom-right corner when the provider has an intro video. Sized proportionally — always 25% of the avatar diameter.</p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50 flex items-end gap-10">
            {sizes.map(s => (
              <div key={s.label} className="flex flex-col items-center gap-4">
                <Avatar src={photos[0]} size={s.px} initials={s.initials} textSize={s.textSize} video />
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>{s.label}</p>
                  <p className="text-xs font-mono text-gray-400">{s.px}px</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Group / stacked */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Group — Stacked</h2>
          <p className="text-sm text-gray-500 mb-6">Used on clinic/group result cards to represent multiple providers at a location. Photos overlap with a white border between them. Show a max of 4 — add a count label for more.</p>
          <div className="border border-gray-100 rounded-xl p-8 bg-gray-50 flex flex-col gap-8">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>3 providers</p>
              <AvatarGroup photos={photos.slice(0, 3)} />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>4 providers + count</p>
              <div className="flex items-center gap-3">
                <AvatarGroup photos={photos} />
                <span className="text-sm font-semibold text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>+7 providers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Usage</h2>
          <ul className="space-y-2">
            {[
              "Always circular — never square or rounded-rectangle for provider photos.",
              "Use a white border (2px) on avatars that appear on colored or image backgrounds.",
              "Fallback to initials, never a generic silhouette or placeholder icon.",
              "Initials are always 2 characters — first initial of first name + first initial of last name.",
              "The video play badge only appears when a video asset exists — don't show it as a teaser.",
              "In stacked groups, the leftmost avatar represents the primary or most relevant provider.",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2" />
                {t}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}
