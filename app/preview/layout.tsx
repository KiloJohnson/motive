import { PreviewTopBar } from "./PreviewTopBar";

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <PreviewTopBar />
      <div className="flex-1 min-h-0">
        {children}
      </div>
    </div>
  );
}
