export default function NewsletterHeaderPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application Examples</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Newsletter Header</h1>
        <p className="text-sm text-gray-400">Page 43</p>
      </section>
      <section className="px-16 py-12 max-w-5xl">
        <ol className="space-y-3 mb-8">
          {[
            "On applications such as newsletter headers, the preferred logo placement may need to be minimized; however, always ensure that the minimum clear space is maintained.",
            "For periodical print pieces, the date and other Scripps information should always appear in a consistent location, such as the top right corner.",
            "When appropriate, a headline and other text may be placed inside the Veil Column. Always typeset copy following the typographic specifications on page 20.",
          ].map((r, i) => (
            <li key={i} className="flex gap-4 text-base text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-400 shrink-0 w-6">{String(i + 1).padStart(2, "0")}.</span>
              <span>{r}</span>
            </li>
          ))}
        </ol>
        <img src="/brand-standards/04-application-examples/05-newsletter-header/page-43.jpg" alt="Newsletter header — horizontal format with logo top-left, date top-right, large photo with Veil Column title overlay" className="w-full h-auto rounded border border-gray-100" />
      </section>
    </div>
  );
}
