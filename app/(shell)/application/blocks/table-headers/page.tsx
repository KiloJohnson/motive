"use client";

import { Button, TextInput, Select, Dropdown } from "flowbite-react";
import { HiSearch, HiFilter, HiDownload, HiPlus, HiRefresh, HiAdjustments } from "react-icons/hi";

function BlockPreview({ children, label, code }: {
  children: React.ReactNode;
  label: string;
  code: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">{label}</h2>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
        <div className="bg-white dark:bg-gray-800 px-5 py-4">
          {children}
        </div>
      </div>
      <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{code}</pre>
    </div>
  );
}

export default function TableHeadersPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Table Headers</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Toolbar patterns that sit above data tables. Combine search, filters, and bulk actions to
          match the density and capabilities of each table.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/table-headers/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — search + primary action"
          code={`<div className="flex items-center justify-between gap-3 px-5 py-4">
  <TextInput placeholder="Search members..." icon={HiSearch} sizing="sm" className="w-64" />
  <Button color="default" size="sm">
    <HiPlus className="mr-1.5 h-3.5 w-3.5" />New member
  </Button>
</div>`}
        >
          <div className="flex items-center justify-between gap-3">
            <TextInput placeholder="Search members..." icon={HiSearch} sizing="sm" className="w-64" />
            <Button color="default" size="sm">
              <HiPlus className="mr-1.5 h-3.5 w-3.5" />New member
            </Button>
          </div>
        </BlockPreview>

        <BlockPreview
          label="With filters — search + filter dropdowns + export"
          code={`<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4">
  <div className="flex items-center gap-3">
    <TextInput placeholder="Search..." icon={HiSearch} sizing="sm" className="w-64" />
    <Select sizing="sm" className="w-36">
      <option value="">All statuses</option>
      <option>Active</option>
      <option>Overdue</option>
      <option>Pending</option>
    </Select>
    <Select sizing="sm" className="w-36">
      <option value="">All tiers</option>
      <option>Gold</option>
      <option>Diamond</option>
      <option>Diamond+</option>
    </Select>
  </div>
  <div className="flex items-center gap-2">
    <Button color="alternative" size="sm">
      <HiDownload className="mr-1.5 h-3.5 w-3.5" />Export
    </Button>
    <Button color="default" size="sm">
      <HiPlus className="mr-1.5 h-3.5 w-3.5" />New member
    </Button>
  </div>
</div>`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <TextInput placeholder="Search members, invoices..." icon={HiSearch} sizing="sm" className="w-56" />
              <Select sizing="sm" className="w-32">
                <option value="">All statuses</option>
                <option>Active</option>
                <option>Overdue</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </Select>
              <Select sizing="sm" className="w-32">
                <option value="">All tiers</option>
                <option>Gold</option>
                <option>Diamond</option>
                <option>Diamond+</option>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Button color="alternative" size="sm">
                <HiDownload className="mr-1.5 h-3.5 w-3.5" />Export
              </Button>
              <Button color="default" size="sm">
                <HiPlus className="mr-1.5 h-3.5 w-3.5" />New member
              </Button>
            </div>
          </div>
        </BlockPreview>

        <BlockPreview
          label="With advanced filters — filter toggle + settings"
          code={`<div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-gray-100">
  <div className="flex items-center gap-3">
    <TextInput placeholder="Search..." icon={HiSearch} sizing="sm" className="w-64" />
    <Button color="alternative" size="sm">
      <HiAdjustments className="mr-1.5 h-3.5 w-3.5" />Filters
    </Button>
    <Button color="alternative" size="sm">
      <HiRefresh className="mr-1.5 h-3.5 w-3.5" />Reset
    </Button>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-xs text-gray-400">847 results</span>
    <Button color="alternative" size="sm">
      <HiDownload className="mr-1.5 h-3.5 w-3.5" />Export CSV
    </Button>
    <Button color="default" size="sm">
      <HiPlus className="mr-1.5 h-3.5 w-3.5" />New member
    </Button>
  </div>
</div>`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <TextInput placeholder="Search members..." icon={HiSearch} sizing="sm" className="w-56" />
              <Button color="alternative" size="sm">
                <HiAdjustments className="mr-1.5 h-3.5 w-3.5" />Filters
              </Button>
              <Button color="alternative" size="sm">
                <HiRefresh className="mr-1.5 h-3.5 w-3.5" />Reset
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">847 results</span>
              <Button color="alternative" size="sm">
                <HiDownload className="mr-1.5 h-3.5 w-3.5" />Export CSV
              </Button>
              <Button color="default" size="sm">
                <HiPlus className="mr-1.5 h-3.5 w-3.5" />New member
              </Button>
            </div>
          </div>
        </BlockPreview>

      </section>
    </div>
  );
}
