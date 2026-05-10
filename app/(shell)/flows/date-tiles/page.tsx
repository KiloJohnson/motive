function ChevronDown() {
  return <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function Slot({ time }: { time: string }) {
  return (
    <div className="bg-[#005FCF] text-white text-xs font-semibold px-4 py-2 rounded-full cursor-pointer hover:bg-[#004DA6] transition-colors"
      style={{ fontFamily: "var(--font-red-hat-text)" }}>
      {time}
    </div>
  );
}

function MoreSlots({ count }: { count: number }) {
  return (
    <div className="inline-flex items-center gap-1 bg-[#005FCF] text-white text-xs font-semibold px-4 py-2 rounded-full cursor-pointer hover:bg-[#004DA6] transition-colors"
      style={{ fontFamily: "var(--font-red-hat-text)" }}>
      {count} more <ChevronDown />
    </div>
  );
}

// Grid tile — tall, stacked slots
function GridTile({ date = "Jan 1", day = "Mon", slots = ["9:00 AM", "10:00 AM", "10:30 AM"], more = 3 }) {
  return (
    <div className="flex flex-col gap-2 w-[190px]">
      <div className="text-center mb-1">
        <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>{day}</p>
        <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>{date}</p>
      </div>
      {slots.map(t => <Slot key={t} time={t} />)}
      <MoreSlots count={more} />
    </div>
  );
}

// Card tile — white card with shadow
function CardTile({ date = "Jan 1", day = "Monday", slots = ["9:00 AM", "10:00 AM"], more = 1 }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 w-[190px] flex flex-col gap-3">
      <div>
        <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>{date}</p>
        <p className="text-sm text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>{day}</p>
      </div>
      {slots.map(t => <Slot key={t} time={t} />)}
      <MoreSlots count={more} />
    </div>
  );
}

// Compact tile — condensed
function CompactTile({ date = "Jan 1", day = "Monday", slot = "9:00 AM", more = 3 }) {
  return (
    <div className="border border-gray-200 rounded-lg p-3 w-[190px]">
      <p className="text-base font-bold text-gray-900 mb-0.5" style={{ fontFamily: "var(--font-red-hat-display)" }}>{date}</p>
      <p className="text-xs text-gray-400 mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>{day}</p>
      <div className="flex items-center gap-2 flex-wrap">
        <Slot time={slot} />
        <MoreSlots count={more} />
      </div>
    </div>
  );
}

// Nano tile — just a count
function NanoTile({ date = "Jan 1", day = "Mon", count = 3 }) {
  return (
    <div className="border-2 border-[#005FCF] rounded-lg p-3 w-[190px] flex flex-col gap-1">
      <p className="text-base font-bold text-gray-900" style={{ fontFamily: "var(--font-red-hat-display)" }}>{date}</p>
      <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>{day}</p>
      <p className="text-sm font-bold" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>{count} appts</p>
    </div>
  );
}

// Full Schedule CTA
function FullScheduleBtn() {
  return (
    <button className="flex items-center gap-1.5 text-sm font-semibold hover:underline transition-colors"
      style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M4 4h6M4 7h6M4 10h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
      Full Schedule
    </button>
  );
}

const tiles = [
  {
    style: "Grid",
    desc: "Tall vertical layout. Multiple slot pills stacked, overflow count below. Used in wide calendar views.",
    usage: "Desktop calendar. Best when showing 3–5 days side by side.",
    component: <GridTile />,
  },
  {
    style: "Card",
    desc: "White card with shadow. Date prominent at top, slots below. More visual emphasis per day.",
    usage: "Featured date views, single-day spotlights.",
    component: <CardTile />,
  },
  {
    style: "Compact",
    desc: "Condensed — date header with one slot and an overflow count inline. Saves vertical space.",
    usage: "Compact results list, mobile-friendly grid views.",
    component: <CompactTile />,
  },
  {
    style: "Nano",
    desc: "Minimal — just date and total appointment count. No individual times shown.",
    usage: "Calendar month view, high-density grids where time detail isn't needed.",
    component: <NanoTile />,
  },
];

export default function DateTilesPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Date Tiles</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Containers that group appointment slots by date. Four styles scale from information-rich
          (Grid, Card) to high-density (Compact, Nano). All include a "Full Schedule" link for overflow.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {tiles.map(({ style, desc, usage, component }) => (
          <section key={style}>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">{style}</h2>
            <p className="text-sm text-gray-500 mb-1 leading-relaxed">{desc}</p>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>Use for</span>
              <span className="text-sm text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>{usage}</span>
            </div>
            <div className="p-8 bg-gray-50 border border-gray-100 rounded">
              {component}
            </div>
          </section>
        ))}

        {/* Full Schedule */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Full Schedule</h2>
          <p className="text-sm text-gray-500 mb-6">Appears below a date tile when the provider has more availability than what's displayed. Links to the Availability Modal.</p>
          <div className="p-6 bg-gray-50 border border-gray-100 rounded flex gap-8 items-center">
            <div>
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">Default</p>
              <FullScheduleBtn />
            </div>
          </div>
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "Choose the tile style based on the view density — Grid/Card for focus views, Compact/Nano for high-density grids.",
              "Always show 'Full Schedule' when a provider has more availability than what's visible.",
              "Overflow count ('3 more') should reflect the actual number of additional slots, not a generic label.",
              "Nano tiles only show a count — clicking navigates to the full availability view, not a dropdown.",
              "Card tiles get a shadow (elevation-1) to visually separate them from the page background.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
