export default function ClearSpacePage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          The Scripps Logo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Clear Space and Alignments</h1>
        <p className="text-sm text-gray-400">Page 7</p>
      </section>

      <section className="px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl">
          <div className="space-y-4 text-base text-gray-600 leading-relaxed">
            <p>To ensure optimum legibility, and the visual impact of the Scripps logo, a minimum clear space surrounding the logo should always be maintained.</p>
            <p>The clear space is proportional and based on the x-height of the Scripps logotype. The minimum clear space is <strong className="text-gray-900">1&ldquo;S&rdquo;</strong>. This area should be clear of any typography, photography, folds, surface edges, and page trim that would affect the legibility of logo components.</p>
            <p>It is highly recommended that a more generous &ldquo;clear space&rdquo; surround the logo whenever possible.</p>
            <p>An organized and integrated design will promote a more professional image in communications. The design is enhanced when the Scripps logo is consistently positioned and aligned with other images such as: headlines, text, photography, illustrations and other graphic components. Using the alignment options shown here will provide sufficient flexibility to create an integrated logo appearance in a variety of layouts.</p>
          </div>
          <div>
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/brand-standards/02-scripps-logo/02-clear-space-and-alignments/page-07.png`} alt="Clear space diagram with 1-S measurement guides and approved logo alignment positions" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
