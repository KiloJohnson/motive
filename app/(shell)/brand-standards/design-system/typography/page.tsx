export default function TypographyPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          The Scripps Design System
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Typography</h1>
        <p className="text-sm text-gray-400">Pages 22–23</p>
      </section>

      <section className="px-16 py-12 max-w-5xl space-y-14">

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Frutiger</h2>
              <p className="text-base text-gray-600 leading-relaxed">Originally designed for signage use, Frutiger is a simple, clean and robust font that provides optimal and immediate readability in both print and display form. The high x-height makes this font an ideal choice for setting body copy, with its easy-to-read characteristics suitable for small type sizes.</p>
              <p className="text-base text-gray-600 leading-relaxed">Frutiger is the <strong className="text-gray-900">preferred corporate typeface</strong>. It should be used consistently in headlines and body copy across all high visibility Scripps communications. Frutiger supports and reinforces important Scripps Health brand attributes like innovation, simplicity and approachability.</p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Weights available</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>Frutiger Light</li>
                  <li><em>Frutiger Light Italic</em></li>
                  <li>Frutiger Roman</li>
                  <li><em>Frutiger Italic</em></li>
                  <li><strong>Frutiger Bold</strong></li>
                  <li><strong><em>Frutiger Bold Italic</em></strong></li>
                  <li><strong>Frutiger Black</strong></li>
                </ul>
              </div>
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Typesetting</p>
                <p className="text-sm text-gray-600 leading-relaxed">To promote a clean appearance and ensure ease of reading, always typeset headlines and body copy in upper and lower case, flush left. Avoid word breaks and orphans.</p>
              </div>
            </div>
            <div>
              <img src="/brand-standards/03-design-system/03-typography/page-22.png" alt="Frutiger typeface specimen showing all weights" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-14">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Support Typography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sabon Next</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">Sabon Next is the Scripps support typeface. It should only be used when the communication requires a special or more formal appearance — Foundation communications, special event invitations, awards, certificates and like materials.</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>Sabon Next Roman</li>
                  <li><em>Sabon Next Italic</em></li>
                  <li><strong>Sabon Next Bold</strong></li>
                  <li><strong><em>Sabon Next Bold Italic</em></strong></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Signage Typeface</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">For exterior signage, the preferred typeface is Myriad Pro, Semibold Condensed and Bold Condensed.</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li><strong>Myriad Pro Semibold Condensed</strong></li>
                  <li><strong>Myriad Pro Bold Condensed</strong></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">System Typefaces</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">For non-design applications such as word processing programs and PowerPoint, where Frutiger and Sabon Next are not available, Myriad Pro may be used.</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>Myriad Pro Light / <em>Light Italic</em></li>
                  <li>Myriad Pro Roman / <em>Italic</em></li>
                  <li><strong>Myriad Pro Bold</strong> / <strong><em>Bold Italic</em></strong></li>
                  <li><strong>Myriad Pro Black</strong></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Typefaces</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">For scripps.org, Carto Gothic is the preferred typeface. On all other web sites use Myriad Pro.</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>Carto Gothic Book / <em>Italic</em></li>
                  <li><strong>Carto Gothic Bold</strong> / <strong><em>Bold Italic</em></strong></li>
                </ul>
              </div>
            </div>
            <div>
              <img src="/brand-standards/03-design-system/03-typography/page-23.png" alt="Support typeface specimens — Sabon Next, Myriad Pro, and Carto Gothic" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
