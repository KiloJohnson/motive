export default function ImagesPage() {
  const ratios = [
    { ratio: "16:9", use: "Hero banners, video thumbnails, news articles", example: "1440 × 810", padding: "56.25%" },
    { ratio: "3:2",  use: "Provider photos in cards, featured content", example: "600 × 400", padding: "66.67%" },
    { ratio: "1:1",  use: "Provider avatars, icons, social thumbnails", example: "400 × 400", padding: "100%" },
    { ratio: "4:3",  use: "Content cards, section images", example: "800 × 600", padding: "75%" },
    { ratio: "2:3",  use: "Portrait photos (mobile hero)", example: "400 × 600", padding: "150%" },
  ];

  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Guidelines</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Images</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Photography is one of Scripps's strongest brand assets. These guidelines ensure images are used consistently, load efficiently, and remain accessible across all contexts.
        </p>
      </div>

      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {/* Aspect ratios */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Aspect Ratios</h2>
          <p className="text-sm text-gray-500 mb-6">
            Always crop to a defined aspect ratio — never let images resize freely. This prevents layout shift and keeps the visual grid stable as images load.
          </p>
          <div className="grid grid-cols-5 gap-3 mb-6">
            {ratios.map(r => (
              <div key={r.ratio} className="flex flex-col gap-2">
                <div className="w-full bg-gray-100 rounded-lg overflow-hidden relative" style={{ paddingBottom: r.ratio === "2:3" ? "100%" : r.padding }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>{r.ratio}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-snug" style={{ fontFamily: "var(--font-red-hat-text)" }}>{r.use.split(",")[0]}</p>
              </div>
            ))}
          </div>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[80px_160px_1fr] bg-gray-50 border-b border-gray-100 px-6 py-3">
              {["Ratio", "Min size", "Used for"].map(h => (
                <p key={h} className="text-xs font-semibold uppercase tracking-wider text-gray-400">{h}</p>
              ))}
            </div>
            {ratios.map(row => (
              <div key={row.ratio} className="grid grid-cols-[80px_160px_1fr] px-6 py-3.5 border-b border-gray-100 last:border-0 bg-white text-sm">
                <p className="font-mono font-semibold text-gray-700">{row.ratio}</p>
                <p className="font-mono text-xs text-gray-400 mt-0.5">{row.example}px</p>
                <p className="text-gray-500" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Focal points */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Focal Points</h2>
          <p className="text-sm text-gray-500 mb-6">
            Images must define a focal point so cropping across breakpoints doesn't cut off faces or key subjects. Use <span className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">object-position</span> or the CMS focal point tool.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Provider photos", rule: "Focal point on the face. Eyes should remain visible at all crop ratios.", pos: "center top" },
              { label: "Environment / clinic", rule: "Center or rule-of-thirds. Avoid focal points at hard edges where cropping is unpredictable.", pos: "center center" },
              { label: "Hero with text overlay", rule: "Focal point opposite the text zone. If text sits left, subject sits right — and vice versa.", pos: "center right" },
            ].map(card => (
              <div key={card.label} className="border border-gray-100 rounded-xl overflow-hidden bg-white">
                <div className="h-28 bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full border-2 border-[#005EB8] bg-white relative">
                      <div className="absolute inset-0.5 rounded-full bg-[#005EB8]" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-xs font-mono text-gray-400 bg-white/80 px-1.5 py-0.5 rounded">{card.pos}</div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold text-gray-800 mb-1" style={{ fontFamily: "var(--font-red-hat-display)" }}>{card.label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>{card.rule}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performance */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Performance</h2>
          <p className="text-sm text-gray-500 mb-6">Images are the #1 cause of slow page loads. Follow these rules on every image.</p>
          <div className="space-y-3">
            {[
              { rule: "Always use lazy loading", detail: 'Add loading="lazy" to every image not in the first viewport. In Next.js this is the default for <Image /> components.' },
              { rule: "Serve WebP", detail: "WebP is 25–35% smaller than JPEG at equivalent quality. The Sparkle CMS CDN handles conversion automatically — use it." },
              { rule: "Match rendered size", detail: "Never serve a 2000px image in a 400px slot. Use srcset or Next.js Image sizes prop to match the largest rendered dimension." },
              { rule: "No unoptimized hero images", detail: "Hero images load above the fold and directly impact LCP (Largest Contentful Paint). Use priority loading and pre-optimize to ≤200kb." },
              { rule: "Compress before uploading", detail: "Target 80% quality JPEG or WebP. Anything above that is imperceptible to users but doubles file size." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-xl bg-white">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-bold" style={{ backgroundColor: "#005EB8" }}>{i + 1}</div>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: "var(--font-red-hat-display)" }}>{item.rule}</p>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alt text */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Alt Text</h2>
          <p className="text-sm text-gray-500 mb-6">Alt text is not optional. It serves screen reader users, SEO, and is a legal requirement under WCAG 2.1 AA.</p>
          <div className="space-y-3">
            {[
              { type: "Provider photo", do: '"Kosha Nathwani, MD — Family Medicine physician at Scripps Clinic"', dont: '"doctor photo" or ""' },
              { type: "Decorative image", do: 'alt="" (empty string — signals decorative to screen readers)', dont: '"decorative" or skipping the attribute entirely' },
              { type: "CTA image / card", do: "Describe the subject AND the action if the image is wrapped in a link", dont: "Repeat the visible caption verbatim — screen readers read both" },
              { type: "Hero banner", do: "Describe the scene and subject. Include any text overlaid on the image that isn't in the DOM.", dont: '"hero image" or "banner"' },
            ].map(row => (
              <div key={row.type} className="border border-gray-100 rounded-xl p-5 bg-white">
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.type}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <span className="text-green-500 font-bold text-xs mt-0.5 shrink-0">✓</span>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.do}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-red-400 font-bold text-xs mt-0.5 shrink-0">✗</span>
                    <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>{row.dont}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
