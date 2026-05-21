"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Button } from "flowbite-react";
import { HiDownload, HiPrinter, HiMail } from "react-icons/hi";

const lineItems = [
  { desc: "Pro Plan — Annual Subscription",              qty: 1, unit: "$588.00",  total: "$588.00" },
  { desc: "Additional Seats (3 × $99/yr)",               qty: 3, unit: "$99.00",   total: "$297.00" },
  { desc: "Priority Support Package",                    qty: 1, unit: "$149.00",  total: "$149.00" },
  { desc: "Onboarding & Setup",                          qty: 1, unit: "$0.00",    total: "$0.00"   },
  { desc: "Early renewal discount (10%)",                qty: 1, unit: "-$103.40", total: "-$103.40" },
];

export default function AdminInvoicePage() {
  return (
    <PreviewShell variant="admin" title="Invoice">
      <div className="max-w-3xl mx-auto p-6">

        {/* Actions */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Invoice</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">INV-2024-0089</p>
          </div>
          <div className="flex gap-2">
            <Button color="alternative" size="sm"><HiPrinter className="mr-1.5 h-4 w-4" />Print</Button>
            <Button color="alternative" size="sm"><HiDownload className="mr-1.5 h-4 w-4" />Download PDF</Button>
            <Button size="sm"><HiMail className="mr-1.5 h-4 w-4" />Send</Button>
          </div>
        </div>

        {/* Invoice card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 space-y-8">

          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <img src="/logos/scripps_dark.svg" alt="Scripps" className="h-8 w-auto mb-3 dark:invert" />
              <p className="text-sm text-gray-500 dark:text-gray-400">Scripps Health</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">4275 Campus Point Ct, San Diego, CA 92121</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">billing@scrippshealth.org</p>
            </div>
            <div className="text-right">
              <Badge color="warning" size="sm" className="mb-3">Pending</Badge>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">$930.60</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Due Jan 15, 2025</p>
            </div>
          </div>

          {/* Bill to */}
          <div className="grid grid-cols-2 gap-6 pt-2 border-t border-gray-100 dark:border-gray-700">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">Bill To</p>
              <p className="font-medium text-gray-900 dark:text-white">Bonnie Green</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">bonnie@company.com</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">123 Main St, Austin, TX 78701</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">Invoice Details</p>
              <div className="space-y-1">
                {[
                  { label: "Invoice #",    value: "INV-2024-0089" },
                  { label: "Issue date",   value: "Dec 15, 2024" },
                  { label: "Due date",     value: "Jan 15, 2025" },
                  { label: "PO Number",    value: "PO-8842" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{r.label}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Line items */}
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-700">
                {["Description", "Qty", "Unit Price", "Total"].map((h) => (
                  <th key={h} className={`py-3 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 ${h === "Description" ? "text-left" : "text-right"}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
              {lineItems.map((item, i) => (
                <tr key={i}>
                  <td className="py-3 text-gray-700 dark:text-gray-300">{item.desc}</td>
                  <td className="py-3 text-right text-gray-500 dark:text-gray-400">{item.qty}</td>
                  <td className="py-3 text-right text-gray-500 dark:text-gray-400">{item.unit}</td>
                  <td className={`py-3 text-right font-medium ${item.total.startsWith("-") ? "text-red-500" : "text-gray-900 dark:text-white"}`}>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end border-t border-gray-100 dark:border-gray-700 pt-4">
            <div className="w-56 space-y-2">
              {[
                { label: "Subtotal",  value: "$1,034.00" },
                { label: "Discount",  value: "-$103.40" },
                { label: "Tax (0%)",  value: "$0.00" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">{r.label}</span>
                  <span className="text-gray-700 dark:text-gray-300">{r.value}</span>
                </div>
              ))}
              <div className="flex justify-between text-base font-bold border-t border-gray-100 dark:border-gray-700 pt-2">
                <span className="text-gray-900 dark:text-white">Total Due</span>
                <span className="text-gray-900 dark:text-white">$930.60</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">Notes</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Payment due within 30 days. Please include the invoice number on your payment. Wire transfer and ACH accepted.</p>
          </div>

        </div>
      </div>
    </PreviewShell>
  );
}
