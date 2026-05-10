type InsuranceState = "in-network" | "unknown" | "rte" | "out-of-network" | "undefined";

const plan = "Aetna Choice® POS (Open Access)";
const provider = "Pamela O. Obi, MD, FAAP";

function ChangeLink() {
  return <span className="underline cursor-pointer font-medium" style={{ color: "#005FCF" }}>Change Plan</span>;
}

function Banner({ state, mobile = false }: { state: InsuranceState; mobile?: boolean }) {
  const w = mobile ? "max-w-sm" : "max-w-2xl";

  if (state === "in-network") {
    return (
      <div className={`${w} flex items-start gap-3 p-4 rounded-lg border`} style={{ backgroundColor: "#DCF0D1", borderColor: "#DCF0D1" }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#427100" }}>
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none"><path d="M1 5.5l4 4L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-800 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            This provider in-network for the insurance you selected, {plan}. <ChangeLink />
          </p>
          <button className="mt-3 px-4 py-2 text-sm font-semibold rounded-full border" style={{ borderColor: "#427100", color: "#427100", fontFamily: "var(--font-red-hat-text)" }}>
            View all 200+ accepted plans
          </button>
        </div>
      </div>
    );
  }

  if (state === "unknown") {
    return (
      <div className={`${w} flex items-start gap-3 p-4 rounded-lg border`} style={{ backgroundColor: "#FBF193", borderColor: "#FBF193" }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-yellow-500">
          <span className="text-white font-bold text-sm">?</span>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-800 leading-relaxed" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            Unfortunately, we are unable to verify if this provider accepts the insurance you selected, {plan}. Please check with your carrier to be sure. <ChangeLink />
          </p>
        </div>
      </div>
    );
  }

  if (state === "rte") {
    return (
      <div className={`${w} flex items-start gap-3 p-4 rounded-lg border`} style={{ backgroundColor: "#FBF193", borderColor: "#FBF193" }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-yellow-500">
          <span className="text-white font-bold text-sm">?</span>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-800 leading-relaxed mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            Unfortunately, we are unable to verify if this provider accepts the insurance you selected, {plan}. Please check with your carrier to be sure. <ChangeLink />
          </p>
          <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            If you have your insurance card, you can perform a one-time eligibility check to determine if {provider} is in your network.
          </p>
          <button className="px-5 py-2.5 text-sm font-semibold text-white rounded-full" style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
            Check Insurance Eligibility
          </button>
        </div>
      </div>
    );
  }

  if (state === "out-of-network") {
    return (
      <div className={`${w} flex items-start gap-3 p-4 rounded-lg border`} style={{ backgroundColor: "#E2C2BD", borderColor: "#E2C2BD" }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-gray-600">
          <svg width="12" height="3" viewBox="0 0 12 3" fill="none"><path d="M1 1.5h10" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-800 leading-relaxed mb-2" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            Unfortunately, this provider is not in-network for the insurance you selected, {plan}. <span className="underline cursor-pointer" style={{ color: "#005FCF" }}>Change plan</span>
          </p>
          <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: "var(--font-red-hat-text)" }}>
            You may have a higher copay or be responsible for the full cost of your visit.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="px-4 py-2 text-sm font-semibold rounded-full border border-gray-700 text-gray-700 hover:bg-gray-100" style={{ fontFamily: "var(--font-red-hat-text)" }}>
              Find In-Network Providers
            </button>
            <button className="px-4 py-2 text-sm font-semibold rounded-full border border-gray-700 text-gray-700 hover:bg-gray-100" style={{ fontFamily: "var(--font-red-hat-text)" }}>
              View all 200+ accepted plans
            </button>
          </div>
        </div>
      </div>
    );
  }

  // undefined
  return (
    <div className={`${w} flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white`}>
      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#D9EBF4" }}>
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none"><path d="M7 1L1 4v5c0 3.5 2.5 6.5 6 7.5C10.5 15.5 13 12.5 13 9V4L7 1z" stroke="#005FCF" strokeWidth="1.5" strokeLinejoin="round"/></svg>
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-700" style={{ fontFamily: "var(--font-red-hat-text)" }}>
          Add an insurance plan to see if this provider is in your network.
        </p>
      </div>
      <div className="flex flex-col gap-2 shrink-0">
        <button className="px-4 py-2 text-sm font-semibold text-white rounded-full flex items-center gap-1" style={{ backgroundColor: "#005FCF", fontFamily: "var(--font-red-hat-text)" }}>
          Check your insurance
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
        <button className="px-4 py-2 text-xs font-semibold rounded-full border border-gray-300 text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>
          View all 200+ accepted plans
        </button>
      </div>
    </div>
  );
}

const states: { state: InsuranceState; label: string; color: string; desc: string; when: string }[] = [
  {
    state: "in-network",
    label: "In-Network",
    color: "#427100",
    desc: "Green banner. Patient's selected plan is confirmed in-network for this provider.",
    when: "Patient has selected a plan AND the provider is verified in-network.",
  },
  {
    state: "unknown",
    label: "Unknown",
    color: "#B7950B",
    desc: "Yellow banner. Insurance match cannot be verified. Patient should call their carrier.",
    when: "Patient has selected a plan BUT network status cannot be confirmed.",
  },
  {
    state: "rte",
    label: "RTE (Real-Time Eligibility)",
    color: "#B7950B",
    desc: "Yellow banner with eligibility check CTA. Patient can run a one-time insurance lookup.",
    when: "Unknown status AND the provider supports real-time eligibility checks.",
  },
  {
    state: "out-of-network",
    label: "Out of Network",
    color: "#A94442",
    desc: "Pink/red banner. Provider confirmed out-of-network. Redirects to find alternative providers.",
    when: "Patient has selected a plan AND provider is confirmed out-of-network.",
  },
  {
    state: "undefined",
    label: "Undefined",
    color: "#005FCF",
    desc: "White/blue banner. No insurance selected. Prompts patient to add their plan.",
    when: "Patient has not selected an insurance plan in the session.",
  },
];

export default function InsuranceBannerPage() {
  return (
    <div className="min-h-full">
      <div className="border-b border-gray-100 px-16 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#005EB8" }}>Flows</p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Insurance Banner</h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          A contextual banner on the provider profile that communicates the patient's insurance
          compatibility with that provider. Five states — each with distinct color, icon, messaging,
          and actions. Desktop and mobile variants.
        </p>
      </div>
      <div className="px-16 py-12 space-y-16 max-w-4xl">

        {states.map(({ state, label, color, desc, when }) => (
          <section key={state}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: color }} />
              <h2 className="text-xl font-semibold text-gray-900">{label}</h2>
            </div>
            <p className="text-sm text-gray-500 mb-1">{desc}</p>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400" style={{ fontFamily: "var(--font-red-hat-text)" }}>Show when</span>
              <span className="text-sm text-gray-600" style={{ fontFamily: "var(--font-red-hat-text)" }}>{when}</span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Desktop</p>
                <Banner state={state} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3" style={{ fontFamily: "var(--font-red-hat-text)" }}>Mobile</p>
                <Banner state={state} mobile />
              </div>
            </div>
          </section>
        ))}

        <section>
          <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900 mb-1">Usage</h2></div>
          <ul className="space-y-2">
            {[
              "Only one banner state is shown at a time — determined by the session insurance selection.",
              "'Change Plan' link re-opens the Insurance Selector to let the patient switch plans.",
              "RTE (Real-Time Eligibility) is a one-time check — clarify this to the user to avoid repeat submissions.",
              "Out-of-Network always shows both 'Find In-Network Providers' and 'View all plans' — give the patient two paths forward.",
              "The Undefined state is the default — it should always prompt the patient to add their insurance.",
            ].map((t, i) => <li key={i} className="flex gap-2 text-sm text-gray-500"><span className="shrink-0 w-1 h-1 rounded-full bg-gray-300 mt-2"/>{t}</li>)}
          </ul>
        </section>

      </div>
    </div>
  );
}
