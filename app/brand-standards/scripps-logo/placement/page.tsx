export default function PlacementPage() {
  const printUpperRows = [
    { layout: "Large Layouts — Left", measurements: "1/2\" from left edge, 2\" indent; 3/4\" from top" },
    { layout: "Large Layouts — Right", measurements: "2\" from right, 1/2\" from edge; 3/4\" from top" },
    { layout: "Small Layouts — Left", measurements: "3/8\" from left, 1.75\" indent; 1/2\" from top" },
    { layout: "Small Layouts — Right", measurements: "1.75\" from right, 3/8\" from edge; 1/2\" from top" },
  ];
  const printLowerRows = [
    { layout: "Large Layouts — Left", measurements: "1/2\" from left edge, 2\" indent; 3/4\" from bottom" },
    { layout: "Large Layouts — Right", measurements: "2\" from right, 1/2\" from edge; 3/4\" from bottom" },
    { layout: "Small Layouts — Left", measurements: "3/8\" from left, 1.75\" indent; 1/2\" from bottom" },
    { layout: "Small Layouts — Right", measurements: "1.75\" from right, 3/8\" from edge; 1/2\" from bottom" },
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          The Scripps Logo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Placement</h1>
        <p className="text-sm text-gray-400">Pages 11–13</p>
      </section>

      <section className="px-16 py-12 max-w-5xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {[
            { src: "/brand-standards/02-scripps-logo/05-placement/page-11a.png", alt: "Print placement — Large Layout, left and right alignment" },
            { src: "/brand-standards/02-scripps-logo/05-placement/page-11b.png", alt: "Print placement — Small Layout, left alignment" },
            { src: "/brand-standards/02-scripps-logo/05-placement/page-11c.png", alt: "Print placement — Small Layout, right alignment" },
            { src: "/brand-standards/02-scripps-logo/05-placement/page-12a.png", alt: "Web/digital placement — Large Layout, left and right alignment" },
            { src: "/brand-standards/02-scripps-logo/05-placement/page-12b.png", alt: "Web/digital placement — Small Layout, left alignment" },
            { src: "/brand-standards/02-scripps-logo/05-placement/page-12c.png", alt: "Web/digital placement — Small Layout, right alignment" },
            { src: "/brand-standards/02-scripps-logo/05-placement/page-13.png", alt: "Digital nav placement — logo in navigation bar, 150px wide" },
          ].map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} className="w-full h-auto object-contain border border-gray-100 rounded" />
          ))}
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Placement: Print Collateral</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-6">To ensure a prominent and proud display of the Scripps logo, the preferred placement is the upper section of the page. A lower placement is acceptable as an alternative when necessary.</p>

            <h3 className="text-sm font-semibold text-gray-700 mb-3">Upper Corners</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Layout</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Measurements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {printUpperRows.map((r) => (
                    <tr key={r.layout} className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.layout}</td>
                      <td className="px-4 py-3 text-gray-600">{r.measurements}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-sm font-semibold text-gray-700 mb-3">Lower Corners</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Layout</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Measurements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {printLowerRows.map((r) => (
                    <tr key={r.layout} className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{r.layout}</td>
                      <td className="px-4 py-3 text-gray-600">{r.measurements}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Placement: Web and Mobile Properties</h2>
            <div className="space-y-3 text-base text-gray-600 leading-relaxed">
              <p>To ensure a prominent and proud display of the Scripps logo, it should be placed on the upper section of the page.</p>
              <p>Preferred placement of the Scripps logo is at the top left corner at 150 pixels wide. The logo should be placed equal distance between the navigational bar and the top of the page.</p>
              <p>A minimum 15 pixels of clear space should be around the logo. The clear space is proportional and based on the x-height of the Scripps logotype. The minimum clear space is 1&ldquo;S&rdquo;. This area should be clear of any typography, photography, color and page trim that would affect the legibility of logo.</p>
              <p>It is highly recommended that a more generous &ldquo;clear space&rdquo; surround the logo whenever possible.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
