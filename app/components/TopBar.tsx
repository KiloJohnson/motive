export default function TopBar() {
  return (
    <header
      style={{ backgroundColor: "#005EB8", height: "48px" }}
      className="flex items-center px-6 shrink-0 z-50"
    >
      <div className="flex items-center gap-2">
        <span className="text-white font-semibold text-lg tracking-tight">
          Motive™
        </span>
        <span className="text-white/40 text-sm font-light">
          Design System
        </span>
      </div>
      <div className="ml-auto">
        <span className="text-white/50 text-xs font-mono">v2.0</span>
      </div>
    </header>
  );
}
