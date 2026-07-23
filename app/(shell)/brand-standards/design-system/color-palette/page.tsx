export default function ColorPalettePage() {
  const colors = [
    { pantone: "Pantone 2728", c: "100", m: "73",  y: "0",   k: "10", r: "0",   g: "71",  b: "187", web: "#005CAB" },
    { pantone: "Pantone 334",  c: "100", m: "0",   y: "60",  k: "3",  r: "0",   g: "151", b: "117", web: "#00B194" },
    { pantone: "Pantone 1665", c: "0",   m: "68",  y: "100", k: "0",  r: "220", g: "68",  b: "5",   web: "#DC4405" },
    { pantone: "Pantone 2925", c: "85",  m: "24",  y: "0",   k: "0",  r: "0",   g: "151", b: "214", web: "#0096D6" },
    { pantone: "Pantone 368",  c: "65",  m: "0",   y: "100", k: "0",  r: "120", g: "190", b: "32",  web: "#73BB44" },
    { pantone: "Pantone 1375", c: "0",   m: "45",  y: "94",  k: "0",  r: "255", g: "158", b: "27",  web: "#F89728" },
    { pantone: "Pantone 425",  c: "48",  m: "29",  y: "26",  k: "76", r: "84",  g: "88",  b: "90",  web: "#555556" },
    { pantone: "Pantone 297",  c: "49",  m: "1",   y: "0",   k: "0",  r: "114", g: "205", b: "244", web: "#72CDF4" },
    { pantone: "Pantone 382",  c: "28",  m: "0",   y: "100", k: "0",  r: "196", g: "214", b: "0",   web: "#C6D42D" },
    { pantone: "Pantone 1235", c: "0",   m: "31",  y: "98",  k: "0",  r: "255", g: "184", b: "28",  web: "#FDB518" },
    { pantone: "Pantone 423",  c: "22",  m: "14",  y: "18",  k: "45", r: "112", g: "115", b: "114", web: "#8D8B8C" },
    { pantone: "Pantone 5425", c: "45",  m: "16",  y: "9",   k: "24", r: "122", g: "153", b: "172", web: "#7C98AC" },
    { pantone: "Pantone 557",  c: "44",  m: "4",   y: "37",  k: "10", r: "133", g: "176", b: "154", web: "#87AF9B" },
    { pantone: "Pantone 7403", c: "1",   m: "11",  y: "58",  k: "2",  r: "238", g: "212", b: "132", web: "#EED180" },
    { pantone: "Pantone 420",  c: "6",   m: "4",   y: "7",   k: "13", r: "199", g: "201", b: "199", web: "#DCDDDE" },
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          The Scripps Design System
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Color Palette</h1>
        <p className="text-sm text-gray-400">Page 21</p>
      </section>

      <section className="px-16 py-12">
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/brand-standards/03-design-system/02-color-palette/page-21.png`} alt="15-color Pantone palette grid showing CMYK, RGB, and Web hex values for each color" className="w-full h-auto object-contain mb-8 max-w-5xl" />

        <div className="max-w-5xl space-y-4 text-base text-gray-600 leading-relaxed mb-10">
          <p>The Scripps color palette is comprised of dynamic, optimistic and innovative colors.</p>
          <p>The palette is inspired by hues found in nature and architecture unique to the greater San Diego area.</p>
        </div>

        <div className="max-w-5xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Color Palette</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {["", "Pantone", "C", "M", "Y", "K", "R", "G", "B", "Web"].map((h) => (
                    <th key={h} className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {colors.map((c) => (
                  <tr key={c.pantone} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="w-6 h-6 rounded block border border-gray-200" style={{ backgroundColor: c.web }} />
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{c.pantone}</td>
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
