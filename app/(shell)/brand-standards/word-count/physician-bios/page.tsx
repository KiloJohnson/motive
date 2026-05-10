export default function WordCountPhysicianBiosPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Word Count Examples</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Physician Bios</h1>
        <p className="text-sm text-gray-400">Pages 58–60</p>
      </section>
      <section className="px-16 py-12 max-w-5xl space-y-14">

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">8.5×11″</h2>
          <div className="inline-flex items-baseline gap-3 mb-6 px-4 py-3 bg-gray-50 rounded border border-gray-200">
            <span className="text-2xl font-semibold text-gray-900">275 words</span>
            <span className="text-gray-400 text-sm">/</span>
            <span className="text-lg font-medium text-gray-600">57 lines</span>
          </div>
          <img
            src="/brand-standards/05-word-count/01-physician-bios/page-58.jpg"
            alt="8.5×11 physician bio word count example — two completed bios showing 275 words / 57 lines with real physician content"
            className="w-full h-auto rounded border border-gray-100"
          />
        </div>

        <div className="border-t border-gray-100 pt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">4×9″ Front &amp; Back</h2>
          <div className="inline-flex items-baseline gap-3 mb-4 px-4 py-3 bg-gray-50 rounded border border-gray-200">
            <span className="text-2xl font-semibold text-gray-900">75 words</span>
            <span className="text-gray-400 text-sm">/</span>
            <span className="text-lg font-medium text-gray-600">31 lines</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Before you begin writing and formatting copy for a 4×9" bio, be sure to refer to the word counts in this guide, which will help you gauge the amount of copy for the space provided.
          </p>
          <img
            src="/brand-standards/05-word-count/01-physician-bios/page-59.jpg"
            alt="4×9 physician bio word count example — completed front and back showing 75 words / 31 lines with real physician content"
            className="w-full h-auto rounded border border-gray-100"
          />
        </div>

        <div className="border-t border-gray-100 pt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Additional Examples</h2>
          <img
            src="/brand-standards/05-word-count/01-physician-bios/page-60.jpg"
            alt="Additional 4×9 physician bio examples — three completed bios side by side showing layout consistency"
            className="w-full h-auto rounded border border-gray-100"
          />
        </div>

      </section>
    </div>
  );
}
