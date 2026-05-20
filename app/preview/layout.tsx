// Standalone layout for UI preview shells.
// No Motive TopBar/Sidebar — these are self-contained application demos.
export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return <div className="h-screen overflow-hidden">{children}</div>;
}
