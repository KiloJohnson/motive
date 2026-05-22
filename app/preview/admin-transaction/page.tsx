"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Button } from "flowbite-react";
import { HiChevronDown, HiShoppingCart, HiCheckCircle, HiMail } from "react-icons/hi";
import { useTheme } from "next-themes";

const lineItems = [
  { name: "Flowbite Developer Edition", sub: "HTML, Figma, JS",       price: "$269", qty: 2, discount: "50%", total: "$269"  },
  { name: "Flowbite Designer Edition",  sub: "Figma Design System",    price: "$149", qty: 3, discount: "0%",  total: "$447"  },
  { name: "Flowbite Open Source",       sub: "Open source components", price: "$0",   qty: 1, discount: "0%",  total: "$0"    },
  { name: "2 Years Support",            sub: "Premium support",        price: "$199", qty: 1, discount: "0%",  total: "$199"  },
  { name: "Flowbite Developer (Team License)", sub: "HTML, Figma, JS", price: "$799", qty: 2, discount: "0%",  total: "$1598" },
];

const history = [
  { icon: HiShoppingCart, label: "Checkout started",   time: "09:23", date: "25th August 2025", detail: "via flowbite.com / www.google.com",      last: false },
  { icon: HiCheckCircle,  label: "Purchased",          time: "09:27", date: "25th August 2025", detail: "for $2990 via VISA card ending in 8262", last: false },
  { icon: HiMail,         label: "Receipt email sent", time: "09:29", date: "25th August 2025", detail: "Receipt #648573",                        last: true  },
];

export default function AdminTransactionPage() {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";
  const iconBg    = dark ? "#1C337C" : "#D6E7FC";
  const iconColor = dark ? "#89BDF9" : "#1B38A1";
  const lineColor = dark ? "#556377" : "#C8CCD7";

  return (
    <PreviewShell variant="admin" title="Single Transaction">
      <div className="p-6 space-y-5">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Order #1846325</h1>
            <Badge color="success">Completed</Badge>
            <span className="text-sm text-gray-500 dark:text-gray-400">Due date: 25 August 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" color="alternative">View receipt</Button>
            <Button size="sm" color="alternative">
              Refund <HiChevronDown className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

        {/* Two columns — stretched to same height */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-5 items-stretch">

          {/* Left — Order details */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Order details</h2>
            </div>
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-700 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <th className="px-6 py-3 text-left">Product name</th>
                    <th className="px-6 py-3 text-right">Qty</th>
                    <th className="px-6 py-3 text-right">Price</th>
                    <th className="px-6 py-3 text-right">Discount</th>
                    <th className="px-6 py-3 text-right">Total price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
                  {lineItems.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                      <td className="px-6 py-4">
                        <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.sub}</p>
                      </td>
                      <td className="px-6 py-4 text-right text-gray-600 dark:text-gray-300">{item.qty}</td>
                      <td className="px-6 py-4 text-right text-gray-600 dark:text-gray-300">{item.price}</td>
                      <td className="px-6 py-4 text-right text-gray-500 dark:text-gray-400">{item.discount}</td>
                      <td className="px-6 py-4 text-right font-semibold text-gray-900 dark:text-white">{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Order summary */}
            <div className="flex justify-end px-6 py-5 border-t border-gray-100 dark:border-gray-700 mt-auto">
              <div className="w-64 space-y-2">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Order summary</p>
                {[["Subtotal","$320"],["Tax","$477"],["Shipping estimate","$0"]].map(([l,v]) => (
                  <div key={l} className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{l}</span>
                    <span className="text-gray-700 dark:text-gray-300">{v}</span>
                  </div>
                ))}
                <div className="flex justify-between text-base font-bold border-t border-gray-100 dark:border-gray-700 pt-2 mt-2">
                  <span className="text-gray-900 dark:text-white">Order total</span>
                  <span className="text-gray-900 dark:text-white">$2990</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — flex col to fill full height */}
          <div className="flex flex-col gap-5">

            {/* Customer details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
              <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">Customer details</h2>
              </div>
              <div className="divide-y divide-gray-50 dark:divide-gray-700/50">
                {[
                  { label: "Name",    value: "Joseph McFall" },
                  { label: "Email",   value: "name@example.com" },
                  { label: "Phone",   value: "+123 456 7890" },
                  { label: "Country", value: "🇺🇸  United States" },
                  { label: "Address", value: "62 Miles Drive St, Newark, NJ 07103, California," },
                ].map((r) => (
                  <div key={r.label} className="flex items-start justify-between px-6 py-3 text-sm gap-4">
                    <span className="text-gray-500 dark:text-gray-400 shrink-0">{r.label}</span>
                    <span className="text-gray-900 dark:text-white text-right">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order history — flex-1 to fill remaining height */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 flex-1 flex flex-col">
              <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">Order history</h2>
              </div>
              <div className="px-6 py-5 flex-1">
                {history.map((h, i) => (
                  <div key={i} className="flex gap-3">
                    {/* Icon + connecting line */}
                    <div className="flex flex-col items-center">
                      <div className="h-9 w-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: iconBg, color: iconColor }}>
                        <h.icon className="h-4 w-4" />
                      </div>
                      {!h.last && (
                        <div className="w-px flex-1 my-1" style={{ backgroundColor: lineColor, minHeight: "24px" }} />
                      )}
                    </div>
                    {/* Content */}
                    <div className={`flex-1 min-w-0 ${!h.last ? "pb-4" : ""}`}>
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{h.label}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">{h.time} · {h.date}</p>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{h.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
