export default function FoundationMaterialsPage() {
  const scriptFonts = ["Zapfino", "Scriptina", "Sleop", "Alana Pro", "Hiatus", "Origins"];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application Examples</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Foundation Materials</h1>
        <p className="text-sm text-gray-400">Pages 54–56</p>
      </section>
      <section className="px-16 py-12 max-w-5xl space-y-14">

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Scripps Health Foundation — Invitations</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img src="/brand-standards/04-application-examples/10-foundation-materials/page-54a.png" alt="Foundation invitation — large format, full-bleed rose photo with Sabon Next and Veil Column" className="w-full h-auto object-contain border border-gray-100 rounded" />
            <img src="/brand-standards/04-application-examples/10-foundation-materials/page-54b.jpg" alt="Foundation invitation — smaller format variations showing three Veil Column color options" className="w-full h-auto object-contain border border-gray-100 rounded" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img src="/brand-standards/04-application-examples/10-foundation-materials/page-55a.png" alt="Foundation formal invitation — Veil Column layout with Sabon Next typesetting" className="w-full h-auto object-contain border border-gray-100 rounded" />
            <img src="/brand-standards/04-application-examples/10-foundation-materials/page-55b.png" alt="Foundation formal invitation — three color variations of the same layout" className="w-full h-auto object-contain border border-gray-100 rounded" />
          </div>
          <p className="text-sm text-gray-500 mb-4">When designing for Scripps Health Foundation invitations, the following elements can be used:</p>
          <ol className="space-y-4">
            <li className="flex gap-4 text-base text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-400 shrink-0 w-6">01.</span>
              <span>A single veil column in the middle of the invite.</span>
            </li>
            <li className="flex gap-4 text-base text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-400 shrink-0 w-6">02.</span>
              <div>
                <p>To give the application a more formal appearance, text may be typeset in Sabon Next with the addition of a script typeface from the following options:</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {scriptFonts.map((f) => (
                    <span key={f} className="px-3 py-1 border border-gray-200 rounded-full text-sm text-gray-600">{f}</span>
                  ))}
                </div>
              </div>
            </li>
            <li className="flex gap-4 text-base text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-400 shrink-0 w-6">03.</span>
              <span>Background images with organic elements can be included. The Scripps Wave may also be used.</span>
            </li>
          </ol>
        </div>

        <div className="border-t border-gray-100 pt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Scripps Health Foundation — Distinguished Speaker Series Postcards</h2>
          <ol className="space-y-3 mb-8">
            {[
              "On postcards, logo placement may need to be minimized; however, always ensure that the minimum clear space is maintained.",
              "For print pieces, the date and other Scripps information should always appear in a consistent location.",
              "When appropriate, a headline and other text may be placed inside the Veil Column. Always typeset copy following the typographic specifications on page 20.",
            ].map((r, i) => (
              <li key={i} className="flex gap-4 text-base text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-400 shrink-0 w-6">{String(i + 1).padStart(2, "0")}.</span>
                <span>{r}</span>
              </li>
            ))}
          </ol>
          <img src="/brand-standards/04-application-examples/10-foundation-materials/page-56.jpg" alt="Distinguished Speaker Series postcards — two postcard designs showing logo placement and physician portraits" className="w-full h-auto rounded border border-gray-100" />
        </div>

      </section>
    </div>
  );
}
