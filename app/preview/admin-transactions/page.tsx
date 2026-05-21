"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Button, Checkbox, TextInput } from "flowbite-react";
import { HiSearch, HiDownload, HiChartBar } from "react-icons/hi";

const transactions = [
  { id: "#AB4125", customer: "Flowbite LLC",       email: "flowbite@example.com", total: "$488",   date: "03 Mar 2025", due: "10 Mar 2025", status: "Completed", delivery: "Instant Digital"     },
  { id: "#AB4126", customer: "Jose Leos",           email: "name@example.com",     total: "$1340",  date: "11 Mar 2025", due: "18 Mar 2025", status: "Completed", delivery: "Scheduled Digital"   },
  { id: "#AB4127", customer: "Bonnie Green",        email: "name@example.com",     total: "$245",   date: "14 Mar 2025", due: "20 Mar 2025", status: "Completed", delivery: "Scheduled Digital"   },
  { id: "#AB4128", customer: "Microsoft LLC",       email: "name@example.com",     total: "$46",    date: "20 Mar 2025", due: "27 Mar 2025", status: "Completed", delivery: "Scheduled Digital"   },
  { id: "#AB4129", customer: "Thermsberg LLC",      email: "name@example.com",     total: "$2289",  date: "24 Apr 2025", due: "01 May 2025", status: "Completed", delivery: "Instant Digital"     },
  { id: "#AB4130", customer: "Lana Byrd",           email: "name@example.com",     total: "$10667", date: "09 May 2025", due: "16 May 2025", status: "Refunded",  delivery: "Shipment (Packaging)" },
  { id: "#AB4131", customer: "Netflix LLC",         email: "name@example.com",     total: "$89",    date: "02 May 2025", due: "09 May 2025", status: "Completed", delivery: "Instant Digital"     },
  { id: "#AB4132", customer: "Leslie Livingston",   email: "name@example.com",     total: "$10087", date: "06 May 2025", due: "13 May 2025", status: "Refunded",  delivery: "Shipment (Packaging)" },
  { id: "#AB4133", customer: "Robert Brown",        email: "name@example.com",     total: "$499",   date: "20 Jun 2025", due: "27 Jun 2025", status: "Completed", delivery: "Instant Digital"     },
  { id: "#AB4134", customer: "Neil Sims",           email: "name@example.com",     total: "$6284",  date: "21 Jul 2025", due: "28 Jul 2025", status: "Completed", delivery: "Shipment (Packaging)" },
  { id: "#AB4135", customer: "Joseph McFall",       email: "company@example.com",  total: "$499",   date: "01 Jun 2025", due: "08 Jun 2025", status: "Completed", delivery: "Instant Digital"     },
  { id: "#AB4136", customer: "Pixel LLC",           email: "company@example.com",  total: "$857",   date: "05 Jun 2025", due: "12 Jun 2025", status: "Completed", delivery: "Instant Digital"     },
  { id: "#AB4137", customer: "Floyd Miles",         email: "name@example.com",     total: "$989",   date: "05 Jun 2025", due: "12 Jun 2025", status: "Completed", delivery: "Instant Digital"     },
];

const statusColor: Record<string, string> = {
  Completed: "success",
  Refunded:  "failure",
  Pending:   "warning",
};

const tabs = ["All", "Completed", "Pending", "Refunded"];

export default function AdminTransactionsPage() {
  return (
    <PreviewShell variant="admin" title="Transactions">
      <div className="p-6 space-y-5">

        <nav className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
          <a href="#" className="hover:text-primary-600">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-primary-600">E-commerce</a>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Transactions</span>
        </nav>

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Transactions</h1>
          <Button size="sm">
            <HiChartBar className="mr-1.5 h-3.5 w-3.5" />Generate report
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">

          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <TextInput placeholder="Search for customer or Business" icon={HiSearch} sizing="sm" className="w-72" />
            <div className="flex items-center gap-2 ml-auto">
              <div className="flex rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden text-xs">
                {["Last 7 days","Last 30 days","Last 90 days"].map((t,i) => (
                  <button key={t} className={`px-3 py-2 ${i === 0 ? "bg-primary-600 text-white" : "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"}`}>{t}</button>
                ))}
              </div>
              <Button color="alternative" size="sm"><HiDownload className="mr-1.5 h-3.5 w-3.5" />Export CSV</Button>
            </div>
          </div>

          {/* Show only tabs */}
          <div className="flex items-center gap-1 px-5 py-2 border-b border-gray-100 dark:border-gray-700">
            <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">Show only:</span>
            {tabs.map((t, i) => (
              <button key={t} className={`px-3 py-1 rounded-lg text-xs font-medium ${i === 0 ? "bg-primary-600 text-white" : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`}>{t}</button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 w-8"><Checkbox /></th>
                  {["Invoice ID", "Customer", "Total", "Date", "Due Date", "Status", "Delivery Type"].map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {transactions.map((t) => (
                  <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer">
                    <td className="px-4 py-3"><Checkbox /></td>
                    <td className="px-4 py-3">
                      <a href="/preview/admin-transaction" className="font-mono text-xs text-primary-700 dark:text-primary-400 hover:underline">{t.id}</a>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-gray-900 dark:text-white">{t.customer}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{t.email}</p>
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">{t.total}</td>
                    <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap">{t.date}</td>
                    <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap">{t.due}</td>
                    <td className="px-4 py-3"><Badge color={statusColor[t.status] as any} size="xs">{t.status}</Badge></td>
                    <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">{t.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 dark:border-gray-700">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Showing <strong className="text-gray-900 dark:text-white">1–13</strong> of <strong className="text-gray-900 dark:text-white">1000</strong>
            </span>
            <div className="flex gap-1">
              {["1","2","3","...","100"].map((p, i) => (
                <button key={i} className={`w-8 h-8 rounded-lg text-sm ${i === 0 ? "bg-primary-600 text-white font-medium" : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`}>{p}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}
