export default function DesignSystemIntroPage() {
  const elements = [
    { num: "01", title: "Scripps Logo", desc: "The primary identifier — symbol and logotype — that anchors every communication." },
    { num: "02", title: "Wave Graphic", desc: "A dynamic visual pattern inspired and derived from the Scripps symbol, reinforcing integration, accessibility and innovation." },
    { num: "03", title: "Veil Column", desc: "The secondary subgraphic element that frames images and messages with muted, sophisticated tones." },
    { num: "04", title: "Imagery", desc: "Photography selected to inspire optimism and express genuine confidence, warmth and health." },
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          The Scripps Design System
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Introduction</h1>
        <p className="text-sm text-gray-400">Pages 19–20</p>
      </section>

      <section className="px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl">
          <div className="space-y-4 text-base text-gray-600 leading-relaxed">
            <p>The Scripps graphic elements work in unison to create a unique and meaningful visual language. The Wave Graphic, inspired and derived from the Scripps symbol, reinforces attributes like integration, accessibility and innovation. Its dynamic and fluid nature, balanced with the Veil Column, create a window of focus that frames imagery and/or messages.</p>
            <p>This unique arrangement of the Scripps brand elements visually supports the brand promise <strong className="text-gray-900">&ldquo;Excellence all around you.&rdquo;</strong></p>
            <p className="text-base">The Scripps design system is composed of unique graphic elements that will distinguish Scripps communication materials from those of others in the marketplace.</p>
          </div>
          <div>
            <img src="/brand-standards/03-design-system/01-introduction/page-20.jpg" alt="The four key design system elements — Logo, Wave Graphic, Veil Column, and Imagery shown in a sample layout" className="w-full h-auto object-contain" />
          </div>
        </div>

        <div className="mt-12 max-w-5xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">The Four Key Elements</h2>
          <div className="grid grid-cols-2 gap-5">
            {elements.map((el) => (
              <div key={el.num} className="p-6 border border-gray-100 rounded">
                <p style={{ color: "var(--motive-primary)" }} className="text-xs font-mono font-semibold mb-3">{el.num}</p>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{el.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
