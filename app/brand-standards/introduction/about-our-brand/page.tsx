export default function AboutOurBrandPage() {
  const attributes = ["Quality-driven", "Innovative", "Esteemed", "Courageous", "Empathetic", "Engaging"];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Introduction
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">About Our Brand</h1>
        <p className="text-sm text-gray-400">Page 4</p>
      </section>

      <section className="px-16 py-12 space-y-12 max-w-4xl">

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What is a brand, and why is it important?</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-3">
            An organization&apos;s brand is a promise of the unique benefits that organization provides to the people it serves.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            When people understand an organization&apos;s brand promise and experience consistent delivery on that promise over time, they put their trust in the organization. For Scripps, having a trusted brand helps us attract and retain patients, physicians, employees, and partners. It creates value by increasing the efficiency and effectiveness of our marketing investments. It unifies us internally around a common goal. Because it has such a powerful influence, the Scripps brand is one of our organization&apos;s most valuable assets.
          </p>
        </div>

        <div className="p-8 border border-gray-100 rounded-lg bg-gray-50">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Brand Promise</p>
          <p className="text-2xl font-semibold text-gray-900">&ldquo;Excellence all around you.&rdquo;</p>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            A brand promise is not a slogan or tagline — it is a simple but powerful encapsulation of the primary value or benefit that can be expected from the brand. All decisions, actions and communications should help fulfill this promise.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Positioning</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-3">
            A positioning statement defines the &ldquo;space&rdquo; a brand wants to occupy in people&apos;s minds relative to competitors. It describes the unique, relevant, authentic and sustainable advantages the brand provides.
          </p>
          <blockquote className="border-l-4 pl-5 py-1 text-base text-gray-600 leading-relaxed italic" style={{ borderLeftColor: "var(--motive-primary)" }}>
            Scripps is the premier integrated health care network that provides access to the best doctors and highest quality, compassionate care, wherever and whenever you need it.
          </blockquote>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Brand Pillars</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Brand Pillars are the key tangible or intangible assets of the organization that make the positioning possible. Supported by specific proof points, they provide foundational &ldquo;reasons to believe&rdquo; that the brand is unique.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {["Medical Excellence", "Accessibility", "Compassionate Patient Focus"].map((pillar) => (
              <div key={pillar} className="p-5 border border-gray-200 rounded text-center">
                <p className="text-sm font-semibold text-gray-900">{pillar}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Brand Attributes</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Brand Attributes are the set of key functional and personality attributes for which we want the brand to be known. Together, they create a unique brand voice and image.
          </p>
          <div className="flex flex-wrap gap-3">
            {attributes.map((attr) => (
              <span key={attr} className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700">
                {attr}
              </span>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
