export default function LogoIntroductionPage() {
  const colors = [
    { name: "Blue", pantone: "2728", c: "100", m: "73", y: "0", k: "10", r: "0", g: "71", b: "187", web: "#005CAB" },
    { name: "Green", pantone: "334", c: "100", m: "0", y: "60", k: "3", r: "0", g: "151", b: "117", web: "#00B194" },
    { name: "Orange", pantone: "1665", c: "0", m: "68", y: "100", k: "0", r: "220", g: "68", b: "5", web: "#F89728" },
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          The Scripps Logo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Introduction</h1>
        <p className="text-sm text-gray-400">Page 6</p>
      </section>

      <section className="px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl">
          <div className="space-y-4 text-base text-gray-600 leading-relaxed">
            <p>The Scripps signature is the visual graphic element used to identify our organization. It is composed of two basic elements: the symbol and the logotype.</p>
            <p>Our logo is a visual expression of the Scripps brand promise: <strong className="text-gray-900">&ldquo;Excellence all around you.&rdquo;</strong></p>
            <p>The three figures at the heart of our logo represent a patient, a physician and a Scripps staff member working together toward one goal: Improving Health.</p>
            <p>The circle suggests complete, 360 degree care and increased access to the excellence Scripps provides our community.</p>
            <p>Our logo colors are bright and welcoming, representing accessible, patient-centered care.</p>
          </div>
          <div>
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/brand-standards/02-scripps-logo/01-introduction/page-06.png`} alt="Logo anatomy — symbol, logotype, and three brand colors labeled with Pantone values" className="w-full h-auto object-contain" />
          </div>
        </div>

        <div className="mt-12 max-w-5xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Logo Colors</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {["Color", "Pantone", "C", "M", "Y", "K", "R", "G", "B", "Web"].map((h) => (
                    <th key={h} className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {colors.map((c) => (
                  <tr key={c.name} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full shrink-0 border border-gray-200" style={{ backgroundColor: c.web }} />
                      {c.name}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{c.pantone}</td>
                    <td className="px-4 py-3 text-gray-500">{c.c}</td>
                    <td className="px-4 py-3 text-gray-500">{c.m}</td>
                    <td className="px-4 py-3 text-gray-500">{c.y}</td>
                    <td className="px-4 py-3 text-gray-500">{c.k}</td>
                    <td className="px-4 py-3 text-gray-500">{c.r}</td>
                    <td className="px-4 py-3 text-gray-500">{c.g}</td>
                    <td className="px-4 py-3 text-gray-500">{c.b}</td>
                    <td className="px-4 py-3 font-mono text-gray-700">{c.web}</td>
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
