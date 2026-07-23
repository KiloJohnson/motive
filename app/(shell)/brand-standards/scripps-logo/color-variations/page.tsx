export default function ColorVariationsPage() {
  const standardVariations = [
    { name: "Preferred Full-Color Logo", specs: "Blue: Pantone 2728 / Web #005CAB · Green: Pantone 334 / Web #00B194 · Orange: Pantone 1665 / Web #F89728" },
    { name: "Preferred One-Color Logo", specs: "Pantone 2728 / Web #005CAB" },
    { name: "One-Color Logo", specs: "100% Black / Web #000000" },
    { name: "Limited Use Reverse Logo", specs: "White (#FFFFFF) on Pantone 2728 (Web #005CAB)" },
    { name: "Limited Use Reverse Logo", specs: "White on White (#FFFFFF) / 100% Black (Web #000000)" },
  ];

  const foundationVariations = [
    { name: "Preferred Full-Color Logo", specs: "Pantone 2728 · Pantone 334 · Pantone 1665" },
    { name: "Silver Metallic Logo", specs: "Pantone 877" },
    { name: "Gold Metallic Logo", specs: "Pantone 874" },
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          The Scripps Logo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Logo Color Variations</h1>
        <p className="text-sm text-gray-400">Pages 9–10</p>
      </section>

      <section className="px-16 py-12">
        <div className="grid grid-cols-2 gap-6 max-w-5xl mb-10">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/brand-standards/02-scripps-logo/04-logo-color-variations/page-09.png`} alt="Logo color variations — full-color, one-color blue, one-color black, and reverse white treatments" className="w-full h-auto object-contain border border-gray-100 rounded" />
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/brand-standards/02-scripps-logo/04-logo-color-variations/page-10.png`} alt="Logo color variations continued — Foundation metallic silver and gold treatments" className="w-full h-auto object-contain border border-gray-100 rounded" />
        </div>

        <div className="max-w-5xl space-y-4 text-base text-gray-600 leading-relaxed mb-10">
          <p>Consistent logo appearance is important in maintaining the strength of our brand identity. The logo color must be applied as demonstrated here. The full-color positive logo treatment is the most impactful and recognizable configuration; therefore, it should be used whenever possible.</p>
          <p>The one-color logo treatments are restricted and should only be used when it is not possible to use the full-color logo. The reverse logo should only be used in specialty applications, when production and manufacturing requires special considerations.</p>
        </div>

        <div className="max-w-5xl space-y-10">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Standard Logo Variations</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Variation</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Specs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {standardVariations.map((v, i) => (
                    <tr key={i} className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{v.name}</td>
                      <td className="px-4 py-3 text-gray-600">{v.specs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Scripps Health Foundation Colors — Print Collateral</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">To give Scripps Health Foundation printed collateral a more formal appearance, a metallic ink may be used. The silver metallic logo should be used on bright white paper to ensure the greatest contrast. The gold metallic logo should be used on cream paper to ensure the greatest contrast.</p>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Variation</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Specs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {foundationVariations.map((v, i) => (
                    <tr key={i} className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-900">{v.name}</td>
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
