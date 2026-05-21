"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Button, Select } from "flowbite-react";
import { HiDownload, HiPrinter, HiPencilAlt, HiArrowLeft, HiCheck, HiClock, HiX } from "react-icons/hi";

const lineItems = [
  { name: "Flowbite Developer Edition", sub: "HTML, Figma, JS",          qty: 2, price: "$269", discount: "50%", total: "$269"   },
  { name: "Flowbite Designer Edition",  sub: "Figma Design System",       qty: 3, price: "$149", discount: "0%",  total: "$447"   },
  { name: "Flowbite Open Source",       sub: "Open source components",    qty: 1, price: "$0",   discount: "0%",  total: "$0"     },
  { name: "2 Years Support",            sub: "Premium support",           qty: 1, price: "$199", discount: "0%",  total: "$199"   },
  { name: "Flowbite Developer (Team)",  sub: "HTML, Figma, JS",           qty: 2, price: "$799", discount: "0%",  total: "$1598"  },
];

const timeline = [
  { label: "Invoice created:", date: "05/07/2025", done: true },
  { label: "Invoice sent:",    date: "06/07/2025", done: true },
  { label: "Invoice paid:",    date: "08/07/2025", done: false },
];

export default function AdminInvoicePage() {
  return (
    <PreviewShell variant="admin" title="Invoice">
      <div className="p-6 max-w-4xl mx-auto space-y-5">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
          <a href="#" className="hover:text-primary-600">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-primary-600">Invoices</a>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Invoice #1846325</span>
        </nav>

        {/* Actions row */}
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium">
            <HiArrowLeft className="h-4 w-4" />Back to invoices
          </button>
          <div className="flex gap-2">
            <Button size="sm" color="alternative"><HiPencilAlt className="mr-1.5 h-3.5 w-3.5" />Edit</Button>
            <Button size="sm" color="alternative"><HiDownload className="mr-1.5 h-3.5 w-3.5" />Download <span className="ml-1">▾</span></Button>
            <Button size="sm"><HiPrinter className="mr-1.5 h-3.5 w-3.5" />Print</Button>
          </div>
        </div>

        {/* Invoice card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 space-y-7">

          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-bold">F</div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">Flowbite</span>
            </div>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Invoice #1846325</h1>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Date: 05/07/2025</p>
          </div>

          {/* Pay to / Invoice to */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Pay to:</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Flowbite LLC, LOUISVILLE, Selby</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">3864 Johnson Street, United</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">States of America,</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">VAT Code: AA-1234567890</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Invoice to:</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green, Carolina, Selby</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">3864 Johnson Street, United</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">States of America,</p>
              <p className="text-sm text-primary-600 dark:text-primary-400">name@company.com</p>
            </div>
          </div>

          {/* Line items */}
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-700">
                {["Product name", "QTY", "Price", "Discount", "Total price"].map((h) => (
                  <th key={h} className={`py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 ${h === "Product name" ? "text-left" : "text-right"}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
              {lineItems.map((item, i) => (
                <tr key={i}>
                  <td className="py-3">
                    <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.sub}</p>
                  </td>
                  <td className="py-3 text-right text-gray-600 dark:text-gray-300">{item.qty}</td>
                  <td className="py-3 text-right text-gray-600 dark:text-gray-300">{item.price}</td>
                  <td className="py-3 text-right text-gray-500 dark:text-gray-400">{item.discount}</td>
                  <td className="py-3 text-right font-semibold text-gray-900 dark:text-white">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Order summary */}
          <div className="flex justify-end">
            <div className="w-64 space-y-2">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Order summary</p>
              {[
                { label: "Subtotal",          value: "$320" },
                { label: "Tax",               value: "$477" },
                { label: "Shipping estimate", value: "$0"   },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">{r.label}</span>
                  <span className="text-gray-700 dark:text-gray-300">{r.value}</span>
                </div>
              ))}
              <div className="flex justify-between text-base font-bold border-t border-gray-100 dark:border-gray-700 pt-2 mt-2">
                <span className="text-gray-900 dark:text-white">Order total</span>
                <span className="text-gray-900 dark:text-white">$2990</span>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice paid status */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 space-y-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-lg px-4 py-2.5">
            <HiCheck className="h-4 w-4" />Invoice paid
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Details:</p>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">$2,999</p>
              <Select sizing="sm" className="w-32"><option>Paid</option><option>Pending</option><option>Overdue</option></Select>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            {[
              { label: "Created by:",       value: "Jese Leos" },
              { label: "Due date:",         value: "08 July 2025" },
              { label: "Payment method:",   value: "Pay by Bank Transfer" },
              { label: "Currency:",         value: "American Dollar" },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-white">{r.label}</span>
                <span>{r.value}</span>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="space-y-3">
            {timeline.map((t) => (
              <div key={t.label} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className={`h-5 w-5 rounded-full flex items-center justify-center ${t.done ? "bg-green-100 dark:bg-green-900/30" : "bg-gray-100 dark:bg-gray-700"}`}>
                    {t.done
                      ? <HiCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                      : <HiClock className="h-3 w-3 text-gray-400" />
                    }
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{t.label}</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">{t.date}</span>
              </div>
            ))}
          </div>

          {/* Promo banner */}
          <div className="flex items-start justify-between bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <div>
              <Badge color="indigo" size="xs" className="mb-1">Version 2.0</Badge>
              <p className="text-xs text-gray-600 dark:text-gray-400">Get paid 3× faster with our PRO plan for online payments!</p>
              <button className="text-xs font-medium text-primary-700 dark:text-primary-400 hover:underline mt-1">Upgrade now for free</button>
            </div>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 ml-4">
              <HiX className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
