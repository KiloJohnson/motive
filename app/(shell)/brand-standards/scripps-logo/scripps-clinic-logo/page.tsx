export default function ScrippsClinicLogoPage() {
  const variations = [
    { name: "Preferred Full-Color Logo", specs: "Pantone 2728 · Pantone 334 · Pantone 1665" },
    { name: "Preferred One-Color Logo", specs: "Pantone 2728 / Web #005CAB" },
    { name: "One-Color Logo", specs: "100% Black / Web #000000" },
    { name: "Limited Use Reverse Logo", specs: "White (#FFFFFF) on Pantone 2728 (Web #005CAB)" },
    { name: "Limited Use Reverse Logo", specs: "White on White (#FFFFFF) / 100% Black (Web #000000)" },
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          The Scripps Logo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Scripps Clinic Logo</h1>
        <p className="text-sm text-gray-400">Pages 17–18</p>
      </section>

      <section className="px-16 py-12">
        <div className="grid grid-cols-2 gap-6 max-w-5xl mb-10">
          <img src="/brand-standards/02-scripps-logo/09-scripps-clinic-logo/page-17.png" alt="Scripps Clinic logo color variations — full-color, one-color, and reverse treatments" className="w-full h-auto object-contain border border-gray-100 rounded" />
          <img src="/brand-standards/02-scripps-logo/09-scripps-clinic-logo/page-18.png" alt="Scripps Clinic logo clear space and placement guidelines" className="w-full h-auto object-contain border border-gray-100 rounded" />
        </div>

        <div className="max-w-5xl space-y-6 text-base text-gray-600 leading-relaxed mb-10">
          <p>As the icon which represents our system-wide brand, the Scripps symbol is used graphically in conjunction with, and attached to, the name &ldquo;Scripps.&rdquo; Scripps Health Foundation, our hospitals, specialty centers, ambulatory, home health, hospice and other services are always identified as part of the corporate brand through the use of the Scripps symbol and name Scripps.</p>
          <div className="p-5 border-l-4 bg-gray-50 border-gray-300 rounded-r">
            <p className="font-semibold text-gray-900 mb-2">There is one exception to this standard.</p>
            <p>The symbol will also be attached to the name &ldquo;Scripps Clinic&rdquo; when we are representing the Scripps Clinic physicians, programs and facilities to internal or external audiences. The Scripps Clinic logo is never to be used with the Scripps logo. Only one may be used. Use the Scripps Clinic logo when the piece is exclusively representing Scripps Clinic physicians, programs and services. When a system program is based at Scripps Clinic, the system logo should be used, e.g. Scripps Transplant Program. <em>(NOTE: Use of the Scripps Clinic Medical Group &ldquo;nested boxes&rdquo; logo is never to be used for marketing communications purposes.)</em></p>
          </div>
        </div>

        <div className="max-w-5xl space-y-6">
          {[
            { title: "Color", body: "Consistent logo appearance is important in maintaining the strength of our brand identity. The logo color must be applied as demonstrated here. The full-color positive logo treatment is the most impactful and recognizable configuration; therefore, it should be used whenever possible. The one-color logo treatments are restricted and should only be used when it is not possible to use the full-color logo. The reverse logo should only be used in specialty applications, when production and manufacturing requires special considerations." },
            { title: "Placement", body: "To ensure a prominent and proud display of the Scripps Clinic logo, the preferred placement is the upper section of the page. A lower placement is acceptable as an alternative when necessary." },
            { title: "Clear Space", body: "To ensure optimum legibility, and the visual impact of the Scripps Clinic logo, a minimum clear space surrounding the logo should always be maintained. The clear space is proportional and based on the x-height of the Scripps logotype. The minimum clear space is 1\"S\". This area should be clear of any typography, photography, folds, surface edges, and page trim that would affect the legibility of logo components." },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-base text-gray-600 leading-relaxed">{item.body}</p>
            </div>
          ))}

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Scripps Clinic Logo Variations</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Variation</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Specs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {variations.map((v, i) => (
                    <tr key={i} className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{v.name}</td>
                      <td className="px-4 py-3 text-gray-600">{v.specs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
