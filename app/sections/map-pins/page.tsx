type PinState = "default" | "highlighted";
type PinType = "single" | "multi";

// Teardrop pin shape — rounded top, pointed bottom
function PinShape({ fill, children, count }: { fill: string; children: React.ReactNode; count?: number }) {
  return (
    <div className="relative flex flex-col items-center" style={{ width: 48 }}>
      <svg width="48" height="56" viewBox="0 0 48 56" fill="none" className="drop-shadow-md">
        <path
          d="M24 2C13.5 2 5 10.5 5 21C5 33 24 54 24 54C24 54 43 33 43 21C43 10.5 34.5 2 24 2Z"
          fill={fill}
        />
      </svg>
      {/* Icon centered in the pin body */}
      <div className="absolute top-[8px] flex items-center justify-center" style={{ width: 48, height: 34 }}>
        {children}
      </div>
      {/* Count badge for multi */}
      {count !== undefined && (
        <div
          className="absolute top-0 right-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shadow"
          style={{ backgroundColor: "#E9C46A", color: "#1a1a1a", fontFamily: "var(--font-red-hat-text)", fontSize: 10 }}
        >
          {count}
        </div>
      )}
    </div>
  );
}

function PeopleIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
      <circle cx="8" cy="5" r="3.5" fill={color}/>
      <path d="M1 17c0-3.866 3.134-7 7-7" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="15" cy="5" r="3.5" fill={color}/>
      <path d="M22 17c0-3.866-3.134-7-7-7" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 17h7" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function RingIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="3"/>
    </svg>
  );
}

function MapPin({ type, state }: { type: PinType; state: PinState }) {
  const isHighlighted = state === "highlighted";
  const fill = isHighlighted ? "#E9C46A" : "#005FCF";
  const iconColor = isHighlighted ? "#1a1a1a" : "white";

  return (
    <PinShape fill={fill} count={type === "multi" ? 2 : undefined}>
      {type === "multi"
        ? <PeopleIcon color={iconColor} />
        : <RingIcon color={iconColor} />
      }
    </PinShape>
  );
}

// Small dot (mini pin)
function MiniPin() {
  return <div className="w-3 h-3 rounded-full shadow" style={{ backgroundColor: "#005FCF" }} />;
}

function MapPreview() {
  return (
    <div
      className="relative rounded overflow-hidden border border-gray-200"
      style={{
        height: "300px",
        background: "linear-gradient(135deg, #e8f0e8 0%, #d4e8d4 30%, #c8dfc8 60%, #b8d4b8 100%)",
      }}
    >
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 300" preserveAspectRatio="xMidYMid slice">
        <path d="M0 150 H700" stroke="#fff" strokeWidth="5" opacity="0.5"/>
        <path d="M350 0 V300" stroke="#fff" strokeWidth="4" opacity="0.4"/>
        <path d="M0 80 H700" stroke="#fff" strokeWidth="2" opacity="0.3"/>
        <path d="M0 220 H700" stroke="#fff" strokeWidth="2" opacity="0.3"/>
        <path d="M175 0 V300" stroke="#fff" strokeWidth="2" opacity="0.3"/>
        <path d="M525 0 V300" stroke="#fff" strokeWidth="2" opacity="0.3"/>
        <path d="M0 30 L700 200" stroke="#fff" strokeWidth="1.5" opacity="0.2"/>
      </svg>
      <div className="absolute" style={{ top: 60, left: 110 }}><MapPin type="single" state="default" /></div>
      <div className="absolute" style={{ top: 80, left: 270 }}><MapPin type="multi" state="highlighted" /></div>
      <div className="absolute" style={{ top: 40, left: 420 }}><MapPin type="single" state="default" /></div>
      <div className="absolute" style={{ top: 150, left: 190 }}><MapPin type="multi" state="default" /></div>
      <div className="absolute" style={{ top: 130, left: 490 }}><MapPin type="single" state="highlighted" /></div>
      <div className="absolute" style={{ top: 200, left: 350 }}><MiniPin /></div>
    </div>
  );
}

export default function MapPinsPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Sections</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Map Pins</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          Location markers for the Find a Doctor map view. Teardrop-shaped pins in two types —
          Single and Multi — each with Default (blue) and Highlighted (yellow) states.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16">

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Variants</h2>
          </div>
          <div className="border border-gray-100 rounded divide-y divide-gray-100">
            {([
              { type: "single" as PinType, state: "default" as PinState,     label: "Single — Default",     desc: "One provider at this location. Blue fill, ring icon." },
              { type: "single" as PinType, state: "highlighted" as PinState,  label: "Single — Highlighted", desc: "Selected or hovered. Yellow fill, dark ring icon." },
              { type: "multi"  as PinType, state: "default" as PinState,     label: "Multi — Default",      desc: "2+ providers at this location. Blue fill, people icon, yellow count badge." },
              { type: "multi"  as PinType, state: "highlighted" as PinState,  label: "Multi — Highlighted",  desc: "Selected cluster. Yellow fill, dark people icon, count badge." },
            ]).map(({ type, state, label, desc }) => (
              <div key={label} className="flex items-center gap-8 px-6 py-6">
                <div className="w-52 shrink-0">
                  <p className="text-sm font-medium text-gray-900">{label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                </div>
                <MapPin type={type} state={state} />
              </div>
            ))}
            <div className="flex items-center gap-8 px-6 py-6">
              <div className="w-52 shrink-0">
                <p className="text-sm font-medium text-gray-900">Mini Pin</p>
                <p className="text-xs text-gray-400 mt-0.5">Small dot used for de-emphasised locations at low zoom.</p>
              </div>
              <MiniPin />
            </div>
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">In context</h2>
            <p className="text-sm text-gray-500">How pins appear on the map. Only one pin can be highlighted at a time.</p>
          </div>
          <MapPreview />
        </section>

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "Single pin: one provider at that exact address.",
              "Multi pin: 2+ providers at the same address — clicking expands a list or zooms in to split them.",
              "Highlighted state triggers on hover (desktop) or tap (mobile) — only one active at a time.",
              "Yellow (#E9C46A) is the only highlighted color — never use other colors for selection state.",
              "The count badge on Multi pins always shows the number of providers, not a generic indicator.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
