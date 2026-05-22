"use client";

import { PreviewShell } from "../PreviewShell";
import { HiHome, HiChevronRight, HiDocumentReport, HiChevronDown, HiDotsHorizontal } from "react-icons/hi";
import Link from "next/link";

type Txn = {
  id: string; customer: string; email: string;
  total: string; dueDate: string;
  status: "Completed" | "Failed" | "Refunded" | "Pending";
  delivery: string;
};

const txns: Txn[] = [
  { id: "#1846325", customer: "Flowbite LLC",     email: "flowbite@example.com", total: "$466",  dueDate: "09 Mar 2025", status: "Completed", delivery: "Instant (Digital)"       },
  { id: "#1846326", customer: "Jese Leos",         email: "name@example.com",     total: "$2000", dueDate: "07 Mar 2025", status: "Failed",    delivery: "Instant (Digital)"       },
  { id: "#1846327", customer: "Bonnie Green",       email: "name@company.com",     total: "$245",  dueDate: "12 Mar 2025", status: "Completed", delivery: "Scheduled (Digital)"     },
  { id: "#1846328", customer: "Themesberg LLC",     email: "company@example.com",  total: "$90",   dueDate: "18 Apr 2025", status: "Refunded",  delivery: "Scheduled (Digital)"     },
  { id: "#1846329", customer: "Micheal Gough",      email: "name@example.com",     total: "$3040", dueDate: "21 Apr 2025", status: "Pending",   delivery: "Shipment (Packaging)"    },
  { id: "#1846330", customer: "Lana Byrd",          email: "name@example.com",     total: "$2999", dueDate: "24 Apr 2025", status: "Completed", delivery: "Instant (Digital)"       },
  { id: "#1846331", customer: "Netflix LLC",        email: "company@example.com",  total: "$1870", dueDate: "05 May 2025", status: "Completed", delivery: "Shipment (Packaging)"    },
  { id: "#1846332", customer: "Leslie Livingston",  email: "name@example.com",     total: "$5067", dueDate: "08 May 2025", status: "Refunded",  delivery: "Shipment (Packaging)"    },
];

const statusBadge: Record<string, string> = {
  Completed: "rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",
  Failed:    "rounded-sm bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",
  Pending:   "rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Refunded:  "rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300",
};

export default function AdminTransactionsPage() {
  return (
    <PreviewShell variant="admin" title="Transactions">
      <div className="min-h-full bg-white dark:bg-gray-900">

        {/* Header */}
        <div className="mx-4 mt-4">
          <nav className="mb-4 flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <a href="/preview/admin-dashboard" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">
                  <HiHome className="me-2.5 h-4 w-4" />Home
                </a>
              </li>
              <li className="flex items-center">
                <HiChevronRight className="mx-1 h-4 w-4 text-gray-400" />
                <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white md:ms-2">E-commerce</a>
              </li>
              <li aria-current="page" className="flex items-center">
                <HiChevronRight className="mx-1 h-4 w-4 text-gray-400" />
                <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Transactions</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Transactions</h1>
        </div>

        {/* Toolbar + Table */}
        <div className="relative col-span-full">
          <div className="mx-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col-reverse items-center justify-between pb-4 md:flex-row md:space-x-4">
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0 lg:w-2/3">
                <form className="sm:mr-4">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input type="search" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:min-w-72" placeholder="Search by Order ID or Customer" />
                  </div>
                </form>
                <div className="flex items-center gap-4">
                  <button className="flex shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Last 7 days <HiChevronDown className="-me-0.5 ms-1.5 h-4 w-4" />
                  </button>
                  <button className="flex shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg className="-ms-0.5 me-1.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2 0 1.1.9 2 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Z" clipRule="evenodd" />
                    </svg>
                    Export CSV
                  </button>
                </div>
              </div>
              <div className="mb-3 flex w-full shrink-0 flex-col items-stretch justify-end md:mb-0 md:w-auto md:flex-row md:items-center">
                <button className="flex items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700">
                  <HiDocumentReport className="-ms-0.5 me-1.5 h-4 w-4" />Generate report
                </button>
              </div>
            </div>
          </div>

          {/* Radio filters */}
          <div className="mx-4 flex flex-wrap py-4">
            <div className="mr-4 hidden items-center text-sm font-medium text-gray-900 dark:text-white md:flex">Show only:</div>
            <div className="flex flex-wrap gap-4">
              {["All", "Completed", "Pending", "Refunded"].map((opt, i) => (
                <div key={opt} className="flex items-center">
                  <input id={`txn-r-${i}`} type="radio" name="txn-filter" defaultChecked={i === 0} className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700" />
                  <label htmlFor={`txn-r-${i}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{opt}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700" />
                  </th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Order ID</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Customer</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Email</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Total</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Due Date</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Status</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Delivery Type</th>
                  <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {txns.map((t) => (
                  <tr key={t.id} className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                    <td className="w-4 px-4 py-3">
                      <input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700" />
                    </td>
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                      <Link href="/preview/admin-transaction" className="hover:underline">{t.id}</Link>
                    </th>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{t.customer}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium">{t.email}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{t.total}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{t.dueDate}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className={statusBadge[t.status]}>{t.status}</span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{t.delivery}</td>
                    <td className="px-4 py-3">
                      <button className="inline-flex items-center rounded-lg p-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <HiDotsHorizontal className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mx-4 flex flex-col items-start justify-between space-y-3 py-4 md:flex-row md:items-center md:space-y-0">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing <span className="font-semibold text-gray-900 dark:text-white">1–8</span> of <span className="font-semibold text-gray-900 dark:text-white">256</span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <button className="flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" /></svg>
                </button>
              </li>
              {[1, 2, 3].map((p) => (
                <li key={p}>
                  <button className={`flex items-center justify-center border border-gray-300 px-3 py-2 text-sm leading-tight hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white ${p === 1 ? "bg-primary-50 text-primary-600 dark:bg-gray-700 dark:text-white" : "bg-white text-gray-500 dark:bg-gray-800 dark:text-gray-400"}`}>
                    {p}
                  </button>
                </li>
              ))}
              <li>
                <span className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">...</span>
              </li>
              <li>
                <button className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" /></svg>
                </button>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
