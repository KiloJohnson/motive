export default function WebsitesAndSocialMediaPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application Examples</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Websites &amp; Social Media</h1>
        <p className="text-sm text-gray-400">Pages 52–53</p>
      </section>
      <section className="px-16 py-12 max-w-5xl space-y-14">

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Employee Portal</h2>
          <ol className="space-y-3 mb-8">
            {[
              "The Scripps design system should remain apparent in web environments. Utilize the Wave Graphic and Veil Column to house information and highlight site features.",
              "Use the accent colors from the main color palette throughout the website.",
            ].map((r, i) => (
              <li key={i} className="flex gap-4 text-base text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-400 shrink-0 w-6">{String(i + 1).padStart(2, "0")}.</span>
                <span>{r}</span>
              </li>
            ))}
          </ol>
          <img src="/brand-standards/04-application-examples/09-websites-and-social-media/page-52.jpg" alt="Employee portal homepage — Wave Graphic footer, orange accent headers, news/events grid" className="w-full h-auto rounded border border-gray-100" />
        </div>

        <div className="border-t border-gray-100 pt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Social Media — Facebook</h2>
          <ol className="space-y-3 mb-8">
            {[
              "The Scripps design system should remain apparent in web environments. Utilize the Wave Graphic and Veil Column to house information and highlight site features.",
              "Refer to the image guide on pages 28–30.",
              "Use the accent colors from the main color palette throughout the website.",
              "The Scripps symbol may not stand alone unless the complete logo is represented visually on the same print or web page. An exception is made where space is limited.",
            ].map((r, i) => (
              <li key={i} className="flex gap-4 text-base text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-400 shrink-0 w-6">{String(i + 1).padStart(2, "0")}.</span>
                <span>{r}</span>
              </li>
            ))}
          </ol>
          <img src="/brand-standards/04-application-examples/09-websites-and-social-media/page-53.jpg" alt="Facebook page templates — cover image examples using Wave Graphic strip, Veil Column, and brand color accents" className="w-full h-auto rounded border border-gray-100" />
        </div>

      </section>
    </div>
  );
}
