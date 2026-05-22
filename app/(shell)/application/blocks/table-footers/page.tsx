"use client";

import { useState } from "react";
import { Button, Dropdown, Label, Pagination, Progress, Select, DropdownItem, DropdownDivider, DropdownHeader} from "flowbite-react";
import { HiChevronRight, HiEye } from "react-icons/hi";

function BlockPreview({ children, label, code }: {
  children: React.ReactNode;
  label: string;
  code: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">{label}</h2>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
        <div className="bg-gray-50 dark:bg-gray-900 px-5 py-6">
          {children}
        </div>
      </div>
      <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{code}</pre>
    </div>
  );
}

function DefaultPaginationFooter() {
  const [page, setPage] = useState(3);
  return (
    <div className="rounded-b-lg bg-white dark:bg-gray-800 shadow-md">
      <div className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Showing <strong className="text-gray-900 dark:text-white">1-10</strong> of{" "}
          <strong className="text-gray-900 dark:text-white">1000</strong>
        </span>
        <Pagination
          currentPage={page}
          onPageChange={setPage}
          totalPages={100}
          showIcons
          nextLabel=""
          previousLabel=""
        />
      </div>
    </div>
  );
}

function SelectInputPaginationFooter() {
  const [page, setPage] = useState(1);
  return (
    <div className="rounded-b-lg bg-white dark:bg-gray-800 shadow-md">
      <div className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex items-center space-x-3">
          <Label htmlFor="rows" className="text-sm font-normal text-gray-500 dark:text-gray-400 whitespace-nowrap">
            Rows per page
          </Label>
          <Select id="rows" className="[&_select]:py-2 [&_select]:pr-6">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Select>
          <div className="text-xs font-normal text-gray-500 dark:text-gray-400 whitespace-nowrap">
            <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
            {" "}of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">100</span>
          </div>
        </div>
        <Pagination
          currentPage={page}
          onPageChange={setPage}
          totalPages={100}
          layout="navigation"
        />
      </div>
    </div>
  );
}

export default function TableFootersPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Table Footers</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Pagination, results count, and page-size selectors that sit below data tables.
          Pair with a Table Header for full toolbar coverage.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/table-footers/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — pagination with results count"
          code={`const [page, setPage] = useState(3);

<div className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0">
  <span className="text-sm text-gray-500 dark:text-gray-400">
    Showing <strong className="text-gray-900 dark:text-white">1-10</strong> of{" "}
    <strong className="text-gray-900 dark:text-white">1000</strong>
  </span>
  <Pagination currentPage={page} onPageChange={setPage} totalPages={100} showIcons nextLabel="" previousLabel="" />
</div>`}
        >
          <DefaultPaginationFooter />
        </BlockPreview>

        <BlockPreview
          label="With button — view report + total count"
          code={`<nav className="flex flex-row items-center justify-between p-4">
  <Button>View full report</Button>
  <p className="text-sm">
    <span className="font-normal text-gray-500 dark:text-gray-400">Total users:&nbsp;</span>
    <span className="font-semibold text-gray-900 dark:text-white">1867</span>
  </p>
</nav>`}
        >
          <div className="rounded-b-lg bg-white dark:bg-gray-800 shadow-md">
            <nav className="flex flex-row items-center justify-between p-4">
              <Button>View full report</Button>
              <p className="text-sm">
                <span className="font-normal text-gray-500 dark:text-gray-400">Total users:&nbsp;</span>
                <span className="font-semibold text-gray-900 dark:text-white">1867</span>
              </p>
            </nav>
          </div>
        </BlockPreview>

        <BlockPreview
          label="With dropdown and link — date range + report CTA"
          code={`<nav className="flex flex-row items-center justify-between p-4">
  <Dropdown inline label="Last 7 days">
    <DropdownHeader className="font-medium text-gray-900 dark:text-white">
      Sep 16 – Sep 22, 2021
    </DropdownHeader>
    <DropdownItem>Yesterday</DropdownItem>
    <DropdownItem>Today</DropdownItem>
    <DropdownItem>Last 7 days</DropdownItem>
    <DropdownItem>Last 30 days</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Custom...</DropdownItem>
  </Dropdown>
  <a href="#" className="inline-flex items-center text-sm font-medium text-primary-700 hover:text-primary-800 dark:text-primary-500">
    Transactions Report <HiChevronRight className="ml-1 h-4 w-4" />
  </a>
</nav>`}
        >
          <div className="rounded-b-lg bg-white dark:bg-gray-800 shadow-md">
            <nav className="flex flex-row items-center justify-between p-4">
              <Dropdown inline label="Last 7 days">
                <DropdownHeader className="font-medium text-gray-900 dark:text-white">
                  Sep 16 – Sep 22, 2021
                </DropdownHeader>
                <DropdownItem>Yesterday</DropdownItem>
                <DropdownItem>Today</DropdownItem>
                <DropdownItem>Last 7 days</DropdownItem>
                <DropdownItem>Last 30 days</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Custom...</DropdownItem>
              </Dropdown>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary-700 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-600"
              >
                Transactions Report
                <HiChevronRight className="ml-1 h-4 w-4" />
              </a>
            </nav>
          </div>
        </BlockPreview>

        <BlockPreview
          label="With select input pagination — rows per page + nav"
          code={`const [page, setPage] = useState(1);

<div className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0">
  <div className="flex items-center space-x-3">
    <Label htmlFor="rows" className="text-sm font-normal text-gray-500">Rows per page</Label>
    <Select id="rows">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </Select>
    <div className="text-xs text-gray-500">
      <span className="font-semibold text-gray-900">1-10</span> of <span className="font-semibold text-gray-900">100</span>
    </div>
  </div>
  <Pagination currentPage={page} onPageChange={setPage} totalPages={100} layout="navigation" />
</div>`}
        >
          <SelectInputPaginationFooter />
        </BlockPreview>

        <BlockPreview
          label="With progress bar — storage usage + last activity"
          code={`<nav className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0">
  <div className="w-full max-w-xs">
    <div className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">3.24 GB of 15 GB used</div>
    <Progress progress={25} size="sm" />
  </div>
  <div className="flex items-center space-x-2">
    <p className="text-sm">
      <span className="font-normal text-gray-500 dark:text-gray-400">Last account activity:&nbsp;</span>
      <span className="font-semibold text-gray-900 dark:text-white">2 hours ago</span>
    </p>
    <HiEye className="h-4 w-4 text-gray-500 dark:text-gray-400" />
  </div>
</nav>`}
        >
          <div className="rounded-b-lg bg-white dark:bg-gray-800 shadow-md">
            <nav className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0">
              <div className="w-full max-w-xs">
                <div className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">3.24 GB of 15 GB used</div>
                <Progress progress={25} size="sm" />
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm">
                  <span className="font-normal text-gray-500 dark:text-gray-400">Last account activity:&nbsp;</span>
                  <span className="font-semibold text-gray-900 dark:text-white">2 hours ago</span>
                </p>
                <HiEye className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
            </nav>
          </div>
        </BlockPreview>

        <BlockPreview
          label="With statistics — summary values + export actions"
          code={`<nav className="flex flex-col items-start justify-between space-y-3 px-4 pb-4 pt-3 md:flex-row md:items-center md:space-y-0">
  <div className="flex items-center space-x-5 text-sm">
    <div>
      <div className="mb-1 text-gray-500 dark:text-gray-400">Purchase price</div>
      <div className="font-medium dark:text-white">$ 3,567,890</div>
    </div>
    <div>
      <div className="mb-1 text-gray-500 dark:text-gray-400">Total selling price</div>
      <div className="font-medium dark:text-white">$ 8,489,400</div>
    </div>
  </div>
  <div className="flex items-center space-x-4">
    <button className="text-sm font-medium text-primary-700 hover:text-primary-800 dark:text-primary-500">
      Print barcodes
    </button>
    <button className="text-sm font-medium text-primary-700 hover:text-primary-800 dark:text-primary-500">
      Duplicate
    </button>
    <Button>Export CSV</Button>
  </div>
</nav>`}
        >
          <div className="rounded-b-lg bg-white dark:bg-gray-800 shadow-md">
            <nav className="flex flex-col items-start justify-between space-y-3 px-4 pb-4 pt-3 md:flex-row md:items-center md:space-y-0">
              <div className="flex items-center space-x-5 text-sm">
                <div>
                  <div className="mb-1 text-gray-500 dark:text-gray-400">Purchase price</div>
                  <div className="font-medium text-gray-900 dark:text-white">$ 3,567,890</div>
                </div>
                <div>
                  <div className="mb-1 text-gray-500 dark:text-gray-400">Total selling price</div>
                  <div className="font-medium text-gray-900 dark:text-white">$ 8,489,400</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-sm font-medium text-primary-700 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-600">
                  Print barcodes
                </button>
                <button className="text-sm font-medium text-primary-700 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-600">
                  Duplicate
                </button>
                <Button>Export CSV</Button>
              </div>
            </nav>
          </div>
        </BlockPreview>

      </section>
    </div>
  );
}
