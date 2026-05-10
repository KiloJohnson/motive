export default function HeadlinePage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          The Scripps Logo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Headline Scaling</h1>
        <p className="text-sm text-gray-400">Page 16</p>
      </section>

      <section className="px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Logo to Headline Scaling Size Relationship</h2>
            <p className="text-base text-gray-600 leading-relaxed">The headline should always be secondary to the Scripps logo. Although there is no given size relationship between the two, the headline should be scaled to never overpower the Scripps logo — which means that longer titles should appear in a smaller type size than short headlines.</p>
          </div>
          <div>
            <img src="/brand-standards/02-scripps-logo/08-headline/page-16.jpg" alt="Headline scaling example — short headline vs. long headline sized relative to the Scripps logo" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
