function Slot({ time, small }: { time: string; small?: boolean }) {
  return (
    <div className={`bg-[#005FCF] text-white font-semibold rounded-full cursor-pointer hover:bg-[#004DA6] transition-colors inline-flex items-center
      ${small ? "text-xs px-3 py-1.5" : "text-sm px-4 py-2"}`}
      style={{ fontFamily: "var(--font-red-hat-text)" }}>
      {time}
    </div>
  );
}

function ChevronDown() {
  return <svg width="9" height="5" viewBox="0 0 9 5" fill="none"><path d="M1 1l3.5 3L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function MoreSlots({ count, small }: { count: number; small?: boolean }) {
  return (
    <div className={`bg-[#005FCF] text-white font-semibold rounded-full cursor-pointer hover:bg-[#004DA6] transition-colors inline-flex items-center gap-1
      ${small ? "text-xs px-3 py-1.5" : "text-sm px-4 py-2"}`}
      style={{ fontFamily: "var(--font-red-hat-text)" }}>
      {count} more <ChevronDown />
    </div>
  );
}

function DateHeader({ date, day, small }: { date: string; day: string; small?: boolean }) {
  return (
    <div className="mb-2">
      <p className={`text-gray-400 ${small ? "text-xs" : "text-xs"}`} style={{ fontFamily: "var(--font-red-hat-text)" }}>{day}</p>
      <p className={`font-bold text-gray-900 ${small ? "text-xl" : "text-2xl"}`} style={{ fontFamily: "var(--font-red-hat-display)" }}>{date}</p>
    </div>
  );
}

function FullScheduleLink() {
  return (
    <p className="text-xs font-semibold mt-2 cursor-pointer hover:underline" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
      📋 Full Schedule
    </p>
  );
}

// Open — many slots
function AvailOpen() {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded p-6">
      <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-red-hat-text)" }}>Desktop — Calendar</p>
      <div className="flex gap-8 items-start">
        {[
          { date: "Jan 1", day: "Mon", slots: ["9:00 AM", "10:00 AM", "10:30 AM", "2:00 PM"], more: 4 },
          { date: "Jan 2", day: "Tue", slots: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"], more: 3 },
          { date: "Jan 3", day: "Wed", slots: ["8:00 AM", "9:00 AM", "10:00 AM", "4:00 PM"], more: 4 },
        ].map(d => (
          <div key={d.date} className="flex flex-col gap-2 min-w-[120px]">
            <DateHeader date={d.date} day={d.day} />
            {d.slots.map(t => <Slot key={t} time={t} />)}
            <MoreSlots count={d.more} />
          </div>
        ))}
      </div>
      <FullScheduleLink />
    </div>
  );
}

// Moderate — some slots
function AvailModerate() {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded p-6">
      <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-red-hat-text)" }}>Desktop — Calendar</p>
      <div className="flex gap-8 items-start">
        {[
          { date: "Jan 1", day: "Mon", slots: ["2:00 PM", "3:30 PM"] },
          { date: "Jan 2", day: "Tue", slots: ["9:00 AM"] },
          { date: "Jan 3", day: "Wed", slots: ["10:30 AM", "5:00 PM"] },
        ].map(d => (
          <div key={d.date} className="flex flex-col gap-2 min-w-[120px]">
            <DateHeader date={d.date} day={d.day} />
            {d.slots.map(t => <Slot key={t} time={t} />)}
          </div>
        ))}
      </div>
      <FullScheduleLink />
    </div>
  );
}

// Sparse — very few
function AvailSparse() {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded p-6">
      <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-red-hat-text)" }}>Desktop — Calendar</p>
      <div className="flex gap-8 items-start">
        <div className="flex flex-col gap-2 min-w-[120px]">
          <DateHeader date="Jan 1" day="Mon" />
          <Slot time="3:00 PM" />
        </div>
        <div className="flex flex-col gap-2 min-w-[120px]">
          <DateHeader date="Jan 2" day="Tue" />
          <div className="w-6 h-0.5 bg-gray-200 rounded mt-3 ml-2" />
        </div>
        <div className="flex flex-col gap-2 min-w-[120px]">
          <DateHeader date="Jan 3" day="Wed" />
          <div className="w-6 h-0.5 bg-gray-200 rounded mt-3 ml-2" />
        </div>
      </div>
      <p className="text-xs mt-3 cursor-pointer" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
        ← Closest appointments on <span className="underline font-semibold">August 1</span>
      </p>
      <FullScheduleLink />
    </div>
  );
}

// By phone — call to book
function AvailByPhone() {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded p-6">
      <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-red-hat-text)" }}>Desktop — Calendar</p>
      <div className="flex flex-col gap-3">
        <p className="text-sm text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>
          Call <span className="font-semibold underline cursor-pointer" style={{ color: "#005FCF" }}>877-454-2330</span> for appointments.
        </p>
      </div>
    </div>
  );
}

// Split — new vs returning patients
function AvailSplit() {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded p-6">
      <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-red-hat-text)" }}>Desktop — Tiles</p>
      <div className="flex gap-8">
        <div className="flex-1 border border-gray-200 rounded-lg p-4 bg-white">
          <p className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: "var(--font-red-hat-display)" }}>New Patients</p>
          <p className="text-xs text-gray-500 mb-3 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            This provider is accepting new patients only if you are looking for a new doctor. Call 877-454-2330 while you find the right fit.
          </p>
          <p className="text-xs cursor-pointer" style={{ color: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
            <span className="underline font-semibold">Contact Scripps</span> to find available providers.
          </p>
        </div>
        <div className="flex-1 border border-gray-200 rounded-lg p-4 bg-white">
          <p className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: "var(--font-red-hat-display)" }}>Returning Patients</p>
          <p className="text-xs text-gray-500 mb-3 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            Call <span className="underline cursor-pointer" style={{ color: "#005FCF" }}>877-454-2330</span> for appointments.
          </p>
        </div>
      </div>
    </div>
  );
}

const states = [
  { label: "Open",       color: "#005FCF", desc: "Provider has ample availability. Multiple slots shown per day, overflow count indicates more options.", component: <AvailOpen /> },
  { label: "Moderate",   color: "#E9C46A", desc: "Limited slots available. 1–2 slots per day, no overflow. Encourages booking soon.",                  component: <AvailModerate /> },
  { label: "Sparse",     color: "#E76F51", desc: "Very few slots. 'Closest appointments on [date]' link helps user navigate to the nearest available time.", component: <AvailSparse /> },
  { label: "By Phone",   color: "#6B7280", desc: "Online booking unavailable. Phone number provided to call for appointments.",                           component: <AvailByPhone /> },
  { label: "Split",      color: "#2A9D8F", desc: "Different availability for new vs returning patients. Each group shown in a separate panel.",           component: <AvailSplit /> },
];

export default function AvailabilityTablePage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Availability Table</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          The scheduling grid on a provider card. Five availability states communicate how easy it is to
          book with a given provider — from fully open to phone-only.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {states.map(({ label, color, desc, component }) => (
          <section key={label}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: color }} />
              <h2 className="text-xl font-semibold text-gray-900">{label}</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6">{desc}</p>
            {component}
          </section>
        ))}

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "Availability state is determined by the number of open slots in the next 30 days — not a manual setting.",
              "'Closest appointments on [date]' link in Sparse state is always a real date, not a generic label.",
              "Split state should only appear when the provider genuinely has different booking paths for new vs returning patients.",
              "By Phone state removes all slot UI — never show slots alongside a phone-only message.",
              "Always show 'Full Schedule' unless the state is By Phone or no availability exists.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
