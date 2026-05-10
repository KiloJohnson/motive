import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";

export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main
          className="motive-content flex-1 overflow-y-auto"
          style={{ background: "var(--motive-content-bg)", color: "var(--motive-content-fg)" }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
