export default function WordCountFlyersPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Word Count Examples</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Flyers</h1>
        <p className="text-sm text-gray-400">Page 63</p>
      </section>
      <section className="px-16 py-12 max-w-5xl space-y-14">

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Event Flyer w/ Physician Bio Sheet</h2>
          <div className="inline-flex items-baseline gap-3 mb-6 px-4 py-3 bg-gray-50 rounded border border-gray-200">
            <span className="text-2xl font-semibold text-gray-900">220 words</span>
          </div>
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/brand-standards/05-word-count/03-flyers/page-63.jpg`}
            alt="Event flyer word count examples — two completed flyers showing 220 words each with real physician bio content"
            className="w-full h-auto rounded border border-gray-100"
          />
        </div>

      </section>
    </div>
  );
}
