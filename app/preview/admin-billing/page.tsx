"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Button } from "flowbite-react";
import { HiCheck, HiCreditCard, HiDownload } from "react-icons/hi";

const plans = [
  {
    name: "Free", price: "$0", period: "/ month", current: false,
    features: ["5 users", "10 GB storage", "Basic analytics", "Email support"],
  },
  {
    name: "Pro", price: "$49", period: "/ month", current: true,
    features: ["25 users", "100 GB storage", "Advanced analytics", "Priority support", "API access"],
  },
  {
    name: "Enterprise", price: "$199", period: "/ month", current: false,
    features: ["Unlimited users", "1 TB storage", "Custom analytics", "Dedicated support", "API access", "SSO / SAML"],
  },
];

const invoices = [
  { id: "INV-2024-12", date: "Dec 1, 2024",  amount: "$49.00", status: "Paid" },
  { id: "INV-2024-11", date: "Nov 1, 2024",  amount: "$49.00", status: "Paid" },
  { id: "INV-2024-10", date: "Oct 1, 2024",  amount: "$49.00", status: "Paid" },
  { id: "INV-2024-09", date: "Sep 1, 2024",  amount: "$49.00", status: "Paid" },
  { id: "INV-2024-08", date: "Aug 1, 2024",  amount: "$49.00", status: "Paid" },
];

export default function AdminBillingPage() {
  return (
    <PreviewShell variant="admin" title="Billing">
      <div className="max-w-4xl mx-auto p-6 space-y-8">

        {/* Plan selection */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Current Plan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-5 border-2 transition-colors ${
                  plan.current
                    ? "border-primary-600 bg-primary-50 dark:bg-primary-900/10"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-gray-900 dark:text-white">{plan.name}</p>
                  {plan.current && <Badge color="indigo" size="xs">Current</Badge>}
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <HiCheck className="h-4 w-4 text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  size="sm"
                  className="w-full"
                  color={plan.current ? "alternative" : "default"}
                  disabled={plan.current}
                >
                  {plan.current ? "Current plan" : `Upgrade to ${plan.name}`}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Payment method */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment Method</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md flex items-center justify-center">
                  <HiCreditCard className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Visa ending in 4242</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Expires 08 / 2026</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="xs" color="alternative">Edit</Button>
                <Button size="xs" color="failure" outline>Remove</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Billing history */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Billing History</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <tr>
                  {["Invoice", "Date", "Amount", "Status", ""].map((h, i) => (
                    <th key={i} className="px-5 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-5 py-3 font-mono text-xs text-gray-500 dark:text-gray-400">{inv.id}</td>
                    <td className="px-5 py-3 text-gray-600 dark:text-gray-300">{inv.date}</td>
                    <td className="px-5 py-3 font-semibold text-gray-900 dark:text-white">{inv.amount}</td>
                    <td className="px-5 py-3"><Badge color="success" size="xs">{inv.status}</Badge></td>
                    <td className="px-5 py-3">
                      <button className="flex items-center gap-1 text-xs text-primary-700 dark:text-primary-400 hover:underline">
                        <HiDownload className="h-3.5 w-3.5" />PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
