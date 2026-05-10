export default function ProgramAndEventVisualsPage() {
  const guidelines = [
    "Visual treatments should never appear in the main Scripps logo staging area for any given application.",
    "The Scripps logo should never be \"intermingled\" with any thematic visuals, typography, graphics or messaging.",
  ];

  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          The Scripps Logo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Program and Event Visuals</h1>
        <p className="text-sm text-gray-400">Page 15</p>
      </section>

      <section className="px-16 py-12 max-w-3xl space-y-6 text-base text-gray-600 leading-relaxed">
        <p>From time to time, thematic visuals may be used to promote special programs and/or events. Thematic visuals are not logos and should not be designed as, or used, if they may be misconstrued as such. Generally, thematic visuals should be planned for limited use over a 6–12 month period. Exceptions may include: long-term internal programs, annual events and high profile ongoing initiatives.</p>
        <p>Thematic visual treatments are only allowed when an illustrative approach is required to express a unique promotional graphic style or character. Generally, thematic treatments/graphics are used on stand-alone pieces or to distinguish a series of communication or campaign materials. Thematic graphics should never be used in lieu of, and/or as a replacement for, Scripps system design elements. The nature of the graphic and/or illustrative style must reinforce Scripps brand attributes — conveying innovative, quality, excellence, engaging, etc. To ensure thematic visuals support and reinforce Scripps brand attributes, avoid the use of generic clip art graphics or stock illustration.</p>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Guidelines for Correct Use</h2>
          <p className="mb-4">Adhere to the following basic guidelines to ensure correct use of thematic visuals:</p>
          <ul className="space-y-2 mb-6">
            {guidelines.map((g, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-semibold text-gray-400 shrink-0">—</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
          <p>To the extent possible, thematic visual treatments must incorporate or utilize the Scripps identity system elements.</p>
        </div>

        <div>
          <p className="mb-3">Scripps sponsorship/participation can be displayed in relationship to a promotional design in one of two ways:</p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="font-bold text-gray-900 shrink-0">1.</span>
              <p>Our logo is displayed in tandem with the promotional design, BUT must always be significantly distanced from the promotional design. The Scripps logo should always be displayed in the recommended logo staging area.</p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-gray-900 shrink-0">2.</span>
              <p>The Scripps name can be part of a promotional design BUT never employing the Scripps symbol or logotype. Rather, the name should be set in a type compatible with the promotional typography. Our logo should also appear prominently elsewhere on the promotional material, significantly distanced from the promotional design and displayed in the recommended logo staging area.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
