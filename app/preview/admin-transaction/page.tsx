"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Button, Select } from "flowbite-react";
import { HiCheck, HiShoppingCart, HiMail } from "react-icons/hi";

const lineItems = [
  { name: "Flowbite Developer Edition", sub: "HTML, Figma, JS",       price: "$269", qty: 2, discount: "50%", total: "$269"  },
  { name: "Flowbite Designer Edition",  sub: "Figma Design System",    price: "$149", qty: 3, discount: "0%",  total: "$447"  },
  { name: "Flowbite Open Source",       sub: "Open source components", price: "$0",   qty: 1, discount: "0%",  total: "$0"    },
  { name: "2 Years Support",            sub: "Premium support",        price: "$199", qty: 1, discount: "0%",  total: "$199"  },
  { name: "Flowbite Developer (Team)",  sub: "HTML, Figma, JS",        price: "$799", qty: 2, discount: "0%",  total: "$1598" },
];

const orderHistory = [
  { icon: HiShoppingCart, label: "Checkout started",    detail: "via flowbite.com / www.google.com", time: "09:23", date: "25th August 2025", done: true  },
  { icon: HiCheck,        label: "Purchased",           detail: "for $2990 via VISA card ending in 8262", time: "09:27", date: "25th August 2025", done: true  },
  { icon: HiMail,         label: "Receipt email sent",  detail: "Receipt #648573", time: "09:29", date: "25th August 2025", done: false },
];

export default function AdminTransactionPage() {
  return (
    <PreviewShell variant="admin" title="Transaction">
      <div className="p-6 max-w-4xl mx-auto space-y-5">

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Order #1846325</h1>
            <Badge color="success">Completed</Badge>
            <span className="text-sm text-gray-500 dark:text-gray-400">Due date: 25 August 2025</span>
          </div>
          <div className="flex gap-2">
            <Button color="alternative" size="sm">View receipt</Button>
            <Button color="alternative" size="sm">Refund <span className="ml-1">▾</span></Button>
          </div>
        </div>

        {/* Order details */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Order details</h2>
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
                  <td className="py-3 text-right text-gray-600 dark:text-gray-300">{item.price}</td>
                  <td className="py-3 text-right text-gray-600 dark:text-gray-300">{item.qty}</td>
                  <td className="py-3 text-right text-gray-500 dark:text-gray-400">{item.discount}</td>
                  <td className="py-3 text-right font-semibold text-gray-900 dark:text-white">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Order summary */}
          <div className="flex justify-end mt-4">
            <div className="w-64 space-y-2">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Order summary</p>
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
              <div className="flex justify-between text-base font-bold border-t border-gray-100 dark:border-gray-700 pt-2">
                <span className="text-gray-900 dark:text-white">Order total</span>
                <span className="text-gray-900 dark:text-white">$2990</span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer details */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Customer details</h2>
          <div className="space-y-3">
            {[
              { label: "Name",    value: "Joseph McFall" },
              { label: "Email",   value: "name@example.com" },
              { label: "Phone",   value: "+123 456 7890" },
              { label: "Country", value: "🇺🇸  United States" },
              { label: "Address", value: "62 Miles Drive St, Newark, NJ 07103, California," },
            ].map((r) => (
              <div key={r.label} className="flex justify-between text-sm py-2 border-b border-gray-50 dark:border-gray-700/50 last:border-0">
                <span className="font-medium text-gray-900 dark:text-white">{r.label}</span>
                <span className="text-gray-600 dark:text-gray-400 text-right">{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Order history */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-5">Order history</h2>
          <div className="space-y-5">
            {orderHistory.map((h, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${h.done ? "bg-primary-100 dark:bg-primary-900/30" : "bg-gray-100 dark:bg-gray-700"}`}>
                  <h.icon className={`h-4 w-4 ${h.done ? "text-primary-600 dark:text-primary-400" : "text-gray-400"}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{h.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{h.detail}</p>
                </div>
                <div className="text-right text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  <p>{h.time} · {h.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
