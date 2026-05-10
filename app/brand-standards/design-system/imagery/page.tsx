export default function ImageryPage() {
  const guidelines = [
    "Natural light should be prominent whenever possible.",
    "Use outdoor settings capturing a strong sense of backlit sunshine whenever possible.",
    "Use a selective focus, allowing the focus to fall on the subject matter(s) and the background (or foreground) to be soft and out of focus.",
    "Keep the backgrounds simple.",
    "When possible, choose muted or monochromatic color combinations to maintain a simplified and sophisticated appearance.",
    "Natural poses and gestures provide a genuine quality. Avoid staged or forced appearances, gestures or expressions.",
    "Gestures should be relaxed and easy — expressing a comfortable, natural appearance.",
    "Always consider a unique angle, composition and/or crop.",
    "Abstract photos may be appropriate for some applications. Choose images that reinforce a regional quality and provide interesting textures. The color signal should reinforce the Scripps color palette.",
  ];
  const avoid = [
    "Over-staging or studio settings",
    "Traditional portrait \"year book\" appearance",
    "Unnecessary props or clutter",
    "Images of doctors wearing masks, except when depicting surgery. Always try to depict realistic situations.",
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          The Scripps Design System
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Imagery</h1>
        <p className="text-sm text-gray-400">Pages 30–32</p>
      </section>

      <section className="px-16 py-12 max-w-5xl space-y-8">
        <div className="space-y-4 text-base text-gray-600 leading-relaxed">
          <p>Photography is a powerful visual element in the Scripps Health identity system. Every photograph used, stock or custom, must be carefully considered to ensure we give an accurate and authentic representation of Scripps Health, its people and facilities.</p>
          <p>Consenting patients and employees may be models and subjects in our photographs. Both should be screened carefully to ensure we recruit individuals that are both willing and comfortable in front of the camera.</p>
          <p>Actual patients, employees and physicians are our first choice to include in photographs. There may be times when outside models are used to portray patients. Actual physicians and nurses will always be used to portray their roles.</p>
          <p>A natural, not stiff or staged, appearance will provide the most authentic gestures, emotions and believable image characteristics.</p>
          <p>Always guide the models or provide suitable apparel for the intended shoot. When planning for apparel, consider the model&apos;s skin-tone, as well as the overall surroundings and composition to ensure a well balanced color range. Generally, wear solid color clothing, avoiding patterns, which reinforce the Scripps color palette.</p>
          <p className="font-semibold text-gray-900">The ideal image will inspire optimism and express a genuine sense of confidence, warmth and health.</p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Imagery Guidelines</h2>
          <img src="/brand-standards/03-design-system/05-imagery/page-31.jpg" alt="Approved photography examples — natural light, outdoor settings, selective focus, candid poses" className="w-full h-auto rounded border border-gray-100 mb-6" />
          <ul className="space-y-2">
            {guidelines.map((g, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                <span className="text-gray-300 shrink-0 mt-0.5">—</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <img src="/brand-standards/03-design-system/05-imagery/page-32.jpg" alt="Additional approved photography examples and things to avoid" className="w-full h-auto rounded border border-gray-100 mb-6" />
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-3">Things to Avoid</h3>
            <ul className="space-y-2">
              {avoid.map((a, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="text-red-300 shrink-0 mt-0.5">×</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
