"use client";

import { PreviewShell } from "../PreviewShell";
import { HiHome, HiChevronRight, HiDocumentAdd, HiFilter, HiAdjustments, HiDotsHorizontal } from "react-icons/hi";
import Link from "next/link";

type Invoice = {
  id: string; client: string; email: string;
  startDate: string; dueDate: string; amount: string;
  status: "Paid" | "Unpaid" | "Pending" | "Overdue";
};

const kpis = [
  { label: "Paid",    amount: "$76,940", count: "350 invoices", badge: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
  { label: "Unpaid",  amount: "$23,145", count: "64 invoices",  badge: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"       },
  { label: "Pending", amount: "$7,431",  count: "14 invoices",  badge: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
  { label: "Overdue", amount: "$2,826",  count: "10 invoices",  badge: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"   },
];

const invoices: Invoice[] = [
  { id: "#1846325", client: "Flowbite LLC",      email: "flowbite@example.com", startDate: "02 Mar 2025", dueDate: "09 Mar 2025", amount: "$466",  status: "Paid"    },
  { id: "#1846326", client: "Jese Leos",          email: "name@example.com",     startDate: "06 Mar 2025", dueDate: "07 Mar 2025", amount: "$2000", status: "Unpaid"  },
  { id: "#1846327", client: "Bonnie Green",        email: "name@company.com",     startDate: "08 Mar 2025", dueDate: "12 Mar 2025", amount: "$245",  status: "Paid"    },
  { id: "#1846328", client: "Themesberg LLC",      email: "company@example.com",  startDate: "15 Apr 2025", dueDate: "18 Apr 2025", amount: "$90",   status: "Overdue" },
  { id: "#1846329", client: "Micheal Gough",       email: "name@example.com",     startDate: "18 Apr 2025", dueDate: "21 Apr 2025", amount: "$3040", status: "Pending" },
  { id: "#1846330", client: "Lana Byrd",           email: "name@example.com",     startDate: "21 Apr 2025", dueDate: "24 Apr 2025", amount: "$2999", status: "Paid"    },
  { id: "#1846331", client: "Netflix LLC",         email: "company@example.com",  startDate: "02 May 2025", dueDate: "05 May 2025", amount: "$1870", status: "Paid"    },
  { id: "#1846332", client: "Leslie Livingston",   email: "name@example.com",     startDate: "05 May 2025", dueDate: "08 May 2025", amount: "$5067", status: "Overdue" },
];

const statusBadge: Record<string, string> = {
  Paid:    "rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",
  Unpaid:  "rounded-sm bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",
  Pending: "rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Overdue: "rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300",
};

export default function AdminInvoicesPage() {
  return (
    <PreviewShell variant="admin" title="All Invoices">
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
                <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Invoices</span>
              </li>
            </ol>
          </nav>

          <h1 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">My Invoices</h1>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                <span className={`me-2 rounded-sm px-2.5 py-0.5 text-xs font-medium ${k.badge}`}>{k.label}</span>
                <h2 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">{k.amount}</h2>
                <p className="text-gray-500 dark:text-gray-400">{k.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Toolbar + Table */}
        <div className="relative col-span-full">
          <div className="mx-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col-reverse items-center justify-between pb-4 md:flex-row md:space-x-4">
              <div className="flex w-full flex-col space-y-3 md:flex-row md:items-center md:space-y-0 lg:w-2/3">
                <form className="w-full flex-1 md:mr-4 md:max-w-sm">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input type="search" className="block w-full min-w-64 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Search invoice" />
                    <button type="submit" className="absolute bottom-0 right-0 top-0 rounded-r-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 dark:bg-primary-600">Search</button>
                  </div>
                </form>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <HiFilter className="-ms-0.5 me-1.5 h-4 w-4" />Filter
                    <svg className="-me-0.5 ms-1.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" /></svg>
                  </button>
                  <button className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <HiAdjustments className="-ms-0.5 me-1.5 h-4 w-4" />Configurations
                    <svg className="-me-0.5 ms-1.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" /></svg>
                  </button>
                </div>
              </div>
              <div className="mb-3 flex w-full shrink-0 items-stretch justify-end md:mb-0 md:w-auto md:flex-row md:items-center">
                <Link href="/preview/admin-invoice-create" className="flex items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700">
                  <HiDocumentAdd className="-ms-0.5 me-1.5 h-4 w-4" />Create an invoice
                </Link>
              </div>
            </div>
          </div>

          {/* Radio filters */}
          <div className="mx-4 flex flex-wrap py-4">
            <div className="mr-4 hidden items-center text-sm font-medium text-gray-900 dark:text-white md:flex">Show only:</div>
            <div className="flex flex-wrap gap-4">
              {["All", "Unpaid", "Paid", "Pending"].map((opt, i) => (
                <div key={opt} className="flex items-center">
                  <input id={`inv-r-${i}`} type="radio" name="inv-filter" defaultChecked={i === 0} className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700" />
                  <label htmlFor={`inv-r-${i}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{opt}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700" />
                  </th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Invoice ID</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Client</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Email</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Start Date</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Due Date</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Amount</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Status</th>
                  <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id} className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                    <td className="w-4 px-4 py-3">
                      <input type="checkbox" className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700" />
                    </td>
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                      <Link href="/preview/admin-invoice" className="hover:underline">{inv.id}</Link>
                    </th>
                    <td className="px-4 py-3">{inv.client}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{inv.email}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{inv.startDate}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{inv.dueDate}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{inv.amount}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className={statusBadge[inv.status]}>{inv.status}</span>
                    </td>
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
              Showing <span className="font-semibold text-gray-900 dark:text-white">1–8</span> of <span className="font-semibold text-gray-900 dark:text-white">438</span>
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
