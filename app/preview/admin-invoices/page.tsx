"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Button, Checkbox, TextInput } from "flowbite-react";
import { HiSearch, HiFilter, HiAdjustments, HiPlus, HiArrowUp, HiArrowDown } from "react-icons/hi";

const kpis = [
  { label: "Total revenue",  value: "$76,940", sub: "202 invoices",  up: true,  delta: "12%" },
  { label: "Claimable",      value: "$23,145", sub: "84 invoices",   up: true,  delta: "5%"  },
  { label: "Pending",        value: "$7,431",  sub: "14 invoices",   up: false, delta: "3%"  },
  { label: "Overdue",        value: "$2,826",  sub: "10 invoices",   up: false, delta: "8%"  },
];

const invoices = [
  { id: "#AB4521", company: "Flowbite LLC",       email: "flowbite@example.com", start: "02 Mar 2025", due: "09 Mar 2025", amount: "$488",   status: "Paid"    },
  { id: "#AB4520", company: "Apple Inc.",          email: "name@company.com",     start: "06 Mar 2025", due: "12 Mar 2025", amount: "$2000",  status: "Unpaid"  },
  { id: "#AB4519", company: "Bonnie Green",        email: "name@company.com",     start: "06 Mar 2025", due: "12 Mar 2025", amount: "$245",   status: "Paid"    },
  { id: "#AB4518", company: "Microsoft LLC",       email: "name@company.com",     start: "06 Mar 2025", due: "14 Mar 2025", amount: "$2440",  status: "Inactive"},
  { id: "#AB4517", company: "Thermsberg LLC",      email: "name@company.com",     start: "16 Apr 2025", due: "21 Apr 2025", amount: "$660",   status: "Pending" },
  { id: "#AB4516", company: "Michael Gough",       email: "name@company.com",     start: "16 Apr 2025", due: "21 Apr 2025", amount: "$1840",  status: "Paid"    },
  { id: "#AB4515", company: "Netflix LLC",         email: "company@example.com",  start: "02 May 2025", due: "09 May 2025", amount: "$670",   status: "Paid"    },
  { id: "#AB4514", company: "Bergfilm LLC",        email: "company@example.com",  start: "29 May 2025", due: "02 May 2025", amount: "$60",    status: "Pending" },
  { id: "#AB4513", company: "Lana Byrd",           email: "name@company.com",     start: "18 Jun 2025", due: "22 Jun 2025", amount: "$75",    status: "Paid"    },
  { id: "#AB4512", company: "Joseph McFall",       email: "company@example.com",  start: "29 Jun 2025", due: "06 Jul 2025", amount: "$399",   status: "Paid"    },
  { id: "#AB4511", company: "Lana Byrd",           email: "name@company.com",     start: "18 Jun 2025", due: "22 Jun 2025", amount: "$567",   status: "Paid"    },
  { id: "#AB4510", company: "Robert Brown",        email: "name@example.com",     start: "03 Jul 2025", due: "10 Jul 2025", amount: "$299",   status: "Paid"    },
  { id: "#AB4509", company: "Target LLC",          email: "company@example.com",  start: "12 Jul 2025", due: "19 Jul 2025", amount: "$1490",  status: "Paid"    },
  { id: "#AB4508", company: "Pixel LLC",           email: "name@example.com",     start: "22 Jun 2025", due: "01 Jul 2025", amount: "$870",   status: "Paid"    },
  { id: "#AB4507", company: "Nelson James",        email: "name@example.com",     start: "29 Jul 2025", due: "04 Aug 2025", amount: "$949",   status: "Paid"    },
  { id: "#AB4506", company: "Floyd Miles",         email: "company@example.com",  start: "07 Jul 2025", due: "10 Jul 2025", amount: "$989",   status: "Paid"    },
];

const tabs = ["All", "Unpaid", "Paid", "Pending"];

const statusColor: Record<string, string> = {
  Paid:     "success",
  Unpaid:   "failure",
  Pending:  "warning",
  Inactive: "gray",
};

export default function AdminInvoicesPage() {
  return (
    <PreviewShell variant="admin" title="Invoices">
      <div className="p-6 space-y-5">

        <nav className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
          <a href="#" className="hover:text-primary-600">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-primary-600">E-commerce</a>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Invoices</span>
        </nav>

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Invoices</h1>
          <Button size="sm" href="/preview/admin-invoice-create">
            <HiPlus className="mr-1.5 h-3.5 w-3.5" />Create an invoice
          </Button>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <div key={k.label} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-4">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{k.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{k.sub}</p>
              <div className={`flex items-center gap-1 mt-2 text-xs font-medium ${k.up ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                {k.up ? <HiArrowUp className="h-3 w-3" /> : <HiArrowDown className="h-3 w-3" />}
                {k.delta}
                <span className="text-gray-500 dark:text-gray-400 font-normal ml-1">{k.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Table card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">

          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <TextInput placeholder="Search invoices..." icon={HiSearch} sizing="sm" className="w-56" />
            <Button color="alternative" size="sm"><HiFilter className="mr-1.5 h-3.5 w-3.5" />Filter</Button>
            <Button color="alternative" size="sm"><HiAdjustments className="mr-1.5 h-3.5 w-3.5" />Configurations</Button>
          </div>

          {/* Tabs */}
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
                  {["Invoice ID", "Email", "Start Date", "Due Date", "Amount", "Status"].map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer">
                    <td className="px-4 py-3"><Checkbox /></td>
                    <td className="px-4 py-3">
                      <a href="/preview/admin-invoice" className="font-mono text-xs text-primary-700 dark:text-primary-400 hover:underline">{inv.id}</a>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{inv.company}</p>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">{inv.email}</td>
                    <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap">{inv.start}</td>
                    <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap">{inv.due}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">{inv.amount}</td>
                    <td className="px-4 py-3">
                      <Badge color={statusColor[inv.status] as any} size="xs">{inv.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 dark:border-gray-700">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Showing <strong className="text-gray-900 dark:text-white">1–16</strong> of <strong className="text-gray-900 dark:text-white">1000</strong>
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
