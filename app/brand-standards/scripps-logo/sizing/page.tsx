export default function SizingPage() {
  const printSizes = [
    { size: "2\"", application: "Standard Large Collateral — 11×17\", 9×12\", 8.5×11\" Brochures and flyers" },
    { size: "1.75\"", application: "Standard Small Collateral — 4×9\" Brochures and rack cards, note cards, table tents, and panel invitations" },
    { size: "1.5\"", application: "Stationery and Forms" },
    { size: "1.25\"", application: "Alternate Business Card Size — used for business cards with heavy personalization" },
    { size: "1\"", application: "Minimum — Pens and other small applications" },
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          The Scripps Logo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Sizing</h1>
        <p className="text-sm text-gray-400">Page 8</p>
      </section>

      <section className="px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl">
          <div className="space-y-4 text-base text-gray-600 leading-relaxed">
            <p>For visual consistency among similar high-visibility print communications, the logo sizes shown here are approved as standard sizes. The logo size is determined by measuring the width of the logotype and symbol.</p>
            <p>Other sizes may be used for unique applications and with prior permission from Marketing Services. For posters that are 24×36&rdquo; wide, a 5&rdquo; logo may be applied. When considering giveaway items use the logo size that best fits in proportion to the giveaway item. Avoid using the logo at sizes smaller than 1&rdquo; to ensure clear reproduction of all logo colors and tonal elements.</p>
          </div>
          <div>
            <img src="/brand-standards/02-scripps-logo/03-sizing/page-08.png" alt="Logo size specification chart showing print sizes from 1 inch to 2 inches with application context for each" className="w-full h-auto object-contain" />
          </div>
        </div>

        <div className="mt-12 max-w-5xl space-y-10">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Standard Print Sizes</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Size</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {printSizes.map((row) => (
                    <tr key={row.size} className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-900">{row.size}</td>
                      <td className="px-4 py-3 text-gray-600">{row.application}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Web and Mobile Properties</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-5">The size of the Scripps logo online will be determined by the design of the page. The preferred size for the Scripps logo is 150 pixels wide. Avoid using the logo at sizes smaller than 120 pixels wide to ensure readability.</p>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider w-32">Size</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-gray-900">150 pixels</td>
                    <td className="px-4 py-3 text-gray-600">Digital Use — When applied to site headers use a logo with a minimum width of 150 pixels</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">Other sizes may be used for unique digital applications, with prior permission from the web center or in conjunction with marketing services.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
