export default function BrandStandardsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center gap-3 px-16 py-2.5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Official Document</span>
        <span className="text-gray-300 dark:text-gray-600">·</span>
        <span className="text-xs text-gray-400">
          Scripps Health Brand Identity Guidelines — Print Standard, published 2013
        </span>
      </div>
      {children}
    </>
  );
}
