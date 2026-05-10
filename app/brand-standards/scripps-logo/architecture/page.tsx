export default function ArchitecturePage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          The Scripps Logo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Architecture</h1>
        <p className="text-sm text-gray-400">Page 14</p>
      </section>

      <section className="px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Entity Architecture</h2>
              <p className="text-base text-gray-600 leading-relaxed">The Scripps hospital/entities are typeset in <strong className="text-gray-900">Frutiger Bold</strong>. The preferred color for the hospital names is <strong className="text-gray-900">Pantone 423</strong>.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Entity Size</h2>
              <p className="text-base text-gray-600 leading-relaxed">The established size relationship between the logo and entity names should remain consistent between all materials. The hospital name is <strong className="text-gray-900">50% the cap height of &ldquo;Scripps&rdquo;</strong>.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Entity Placement</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-2">The entity name should always be placed away from the logo on communication materials. <strong className="text-gray-900">Never lock up the entity name in a strict alignment with the logo.</strong> Always place the entity name above the headline whenever possible. The headline should always be more prominent than the entity name.</p>
            </div>
          </div>
          <div>
            <img src="/brand-standards/02-scripps-logo/06-architecture/page-14.jpg" alt="Entity name placement example showing hospital name in Frutiger Bold positioned separately from the logo" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
