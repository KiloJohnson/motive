export default function InvitationsPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">Application Examples</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Invitations</h1>
        <p className="text-sm text-gray-400">Page 42</p>
      </section>
      <section className="px-16 py-12 max-w-5xl">
        <ol className="space-y-3 mb-8">
          {[
            "When appropriate, a headline and other text may be placed on the Veil Column. Always typeset copy following the typographic specifications on page 20.",
            "If there is text placed on the veil, make sure the image behind it is not distracting and that the contrast allows optimal readability.",
            "Try to leave the area around the logo clear of distracting text so that the emphasis is kept on the Scripps logo.",
          ].map((r, i) => (
            <li key={i} className="flex gap-4 text-base text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-400 shrink-0 w-6">{String(i + 1).padStart(2, "0")}.</span>
              <span>{r}</span>
            </li>
          ))}
        </ol>
        <img src="/brand-standards/04-application-examples/04-invitations/page-42.jpg" alt="Invitation design — Veil Column with text placement over photograph background" className="w-full h-auto rounded border border-gray-100" />
      </section>
    </div>
  );
}
