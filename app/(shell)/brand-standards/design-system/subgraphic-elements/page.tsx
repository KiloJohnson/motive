export default function SubgraphicElementsPage() {
  const printPalettes = [
    { name: "Windandsea", pantone: "Pantone 2925" },
    { name: "Coronado", pantone: "Pantone 297" },
    { name: "Mt. Laguna", pantone: "Pantone 334" },
    { name: "Torrey Pine", pantone: "Pantone 368" },
    { name: "Avocado", pantone: "Pantone 382" },
    { name: "Julian", pantone: "Pantone 1665" },
    { name: "CA Poppy", pantone: "Pantone 1375" },
    { name: "Sunset Cliffs", pantone: "Pantone 1235" },
  ];
  const printNoImagePalettes = [
    { name: "Swarmis", colors: "Pantone 2728 · Pantone 2925 · Pantone 297" },
    { name: "Garibaldi", colors: "Pantone 1665 · Pantone 1375 · Pantone 1235" },
    { name: "Greenflash", colors: "Pantone 334 · Pantone 368 · Pantone 382" },
  ];
  const veilColors = [
    { color: "Pantone 5425", printFill: "20–40%", webFill: "70–20%", effect: "Multiply" },
    { color: "Pantone 624",  printFill: "20–40%", webFill: "70–20%", effect: "Multiply" },
    { color: "Pantone 7403", printFill: "40–60%", webFill: "70–20%", effect: "Multiply" },
    { color: "White",        printFill: "—",       webFill: "Opacity: 30–80%", effect: "Opacity" },
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          The Scripps Design System
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Subgraphic Elements</h1>
        <p className="text-sm text-gray-400">Pages 24–29</p>
      </section>

      <section className="px-16 py-12 max-w-5xl space-y-14">

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Wave Graphic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <p>The Wave Graphic is a unique visual pattern inspired and derived from the Scripps symbol. Its dynamic characteristics reinforce important qualities of Scripps Health such as integration, accessibility and innovation, wrapped in an energetic and optimistic appearance.</p>
              <p>The fluid and dynamic appearance, which always changes from one communication to the next, reinforces the agile and responsive approach we use to serve each unique individual&apos;s needs.</p>
              <p>The Scripps Wave Graphic will distinguish Scripps communication materials from those of our competitors. It&apos;s important that it is used consistently and accurately to effectively build recognition in the marketplace.</p>
            </div>
            <img src="/brand-standards/03-design-system/04-subgraphic-elements/page-24.png" alt="Wave Graphic introduction — full annotated diagram showing the wave form derived from the Scripps symbol" className="w-full h-auto object-contain" />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Wave Graphic Compositions</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img src="/brand-standards/03-design-system/04-subgraphic-elements/page-25a.png" alt="Wave Graphic compositions — 8 thumbnail variations in medium and large sizes" className="w-full h-auto object-contain border border-gray-100 rounded" />
            <img src="/brand-standards/03-design-system/04-subgraphic-elements/page-25b.png" alt="Wave Graphic compositions — horizontal banner format" className="w-full h-auto object-contain border border-gray-100 rounded" />
          </div>
          <p className="text-base text-gray-600 leading-relaxed mb-2">The Wave Graphic used in the Scripps design system comes in three different sizes. Select the size that best fits the application and content parameters. A slight cropping of the Wave Graphic is acceptable for applications with limited space. For variety and visual interest, four different wave compositions are available in each size.</p>
          <p className="text-sm text-gray-500 leading-relaxed p-4 bg-gray-50 rounded border border-gray-100">The preferred wave graphic for web page headers or footers is noted to reflect flexibility for screen size, when the design needs that flexibility.</p>

          <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Wave Graphic Cropping</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-4">
            <div className="space-y-3 text-base text-gray-600 leading-relaxed">
              <p>When an application requires a slightly different Wave Graphic size, a slight cropping is acceptable. Choose the starting size that is closest to the shape needed. When cropping, do not cut off dynamic areas, such as the intersections of the shapes. Always crop with sensitivity to ensure that the overall visual integrity of the wave composition is preserved.</p>
              <p>The Wave Graphic should maintain a horizontal orientation across all applications. The graphic may be flipped horizontally in order to ensure the best composition is achieved. <strong className="text-gray-900">Never flip the graphic vertically.</strong></p>
            </div>
            <img src="/brand-standards/03-design-system/04-subgraphic-elements/page-26.png" alt="Wave Graphic cropping guidelines — correct vs. incorrect crop examples" className="w-full h-auto object-contain" />
          </div>
        </div>

        <div className="border-t border-gray-100 pt-14">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Wave Graphic Color Palettes — Print (with Imagery)</h2>
          <img src="/brand-standards/03-design-system/04-subgraphic-elements/page-27.png" alt="Print wave palette table — 8 named color schemes at 100/75/50% tints, plus 3 no-image palettes" className="w-full h-auto object-contain mb-6 border border-gray-100 rounded" />
          <p className="text-base text-gray-600 leading-relaxed mb-5">To maintain a diverse look and feel, a variety of color options are available. Choose one color and apply it to the Wave Graphic. Do not mix different colors in the same Wave Graphic. Select the color scheme that best complements the image.</p>

          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Palette Name</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">100%</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">75%</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">50%</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {printPalettes.map((p) => (
                  <tr key={p.name} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">{p.name}</td>
                    <td className="px-4 py-3 text-gray-600">{p.pantone}</td>
                    <td className="px-4 py-3 text-gray-600">{p.pantone}</td>
                    <td className="px-4 py-3 text-gray-600">{p.pantone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-gray-900 mb-3">Without Imagery</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">When used without imagery, the Wave Graphic can host one of the following three palettes, each featuring three different colors.</p>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Palette Name</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Colors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {printNoImagePalettes.map((p) => (
                  <tr key={p.name} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">{p.name}</td>
                    <td className="px-4 py-3 text-gray-600">{p.colors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-14">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Wave Graphic Color Palettes — Digital</h2>
          <img src="/brand-standards/03-design-system/04-subgraphic-elements/page-28.png" alt="Digital wave palette table — same 8 named palettes at enhanced digital saturation" className="w-full h-auto object-contain mb-5 border border-gray-100 rounded" />
          <p className="text-base text-gray-600 leading-relaxed">Colors have been enhanced for digital use with a higher percentage of color and saturation in each section (digital 85% and 60% versus print 75% and 50%).</p>
        </div>

        <div className="border-t border-gray-100 pt-14">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Veil Column</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-6">
            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <p>The secondary subgraphic element in the Scripps design system is the Veil Column.</p>
              <p>Together with the Wave Graphic, the Veil Column helps frame images and messages. It can also be used to feature important information apart from body copy. The muted tones approved for this graphic add sophistication to balance the bright nature of the Wave Graphic.</p>
              <p>There are four color options. Choose the Veil color with sensitivity to the overall color signal of the application, including the Wave Graphic and image selection. Generally, there should be a harmonic and well-balanced use of color between all elements on the page.</p>
            </div>
            <img src="/brand-standards/03-design-system/04-subgraphic-elements/page-29.png" alt="Veil Column color swatches — four options showing print fill range, web fill range, and multiply/opacity effect" className="w-full h-auto object-contain" />
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {["Color", "Print Fill", "Web Fill", "Effect"].map((h) => (
                    <th key={h} className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {veilColors.map((v) => (
                  <tr key={v.color} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">{v.color}</td>
                    <td className="px-4 py-3 text-gray-600">{v.printFill}</td>
                    <td className="px-4 py-3 text-gray-600">{v.webFill}</td>
                    <td className="px-4 py-3 text-gray-600">{v.effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </section>
    </div>
  );
}
