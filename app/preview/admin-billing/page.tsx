"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Button, Label, TextInput, Select, Textarea, ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { HiCheck, HiPlus } from "react-icons/hi";

const invoices = [
  { id: "#1846325", date: "01 May 2025", amount: "$9,99", status: "Pending" },
  { id: "#1846328", date: "01 Apr 2025", amount: "$9,99", status: "Paid" },
  { id: "#1846329", date: "01 Mar 2025", amount: "$9,99", status: "Paid" },
  { id: "#1846330", date: "01 Feb 2025", amount: "$9,99", status: "Paid" },
  { id: "#1846331", date: "01 Jan 2025", amount: "$9,99", status: "Paid" },
];

const benefits = [
  "35,000 orders per month",
  "Multivariate Testing",
  "Comparative Reporting",
  "Unlimited integrations",
  "Team size: 1-3 developers",
  "Customer Journey Builder",
  "Phone support",
  "Custom Templates",
  "Exclusive discounts",
];

export default function AdminBillingPage() {
  const [recurring, setRecurring] = useState(false);
  const [quickPurchase, setQuickPurchase] = useState(true);

  return (
    <PreviewShell variant="admin" title="Billing">
      <div className="p-6 space-y-6">

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Billing</h1>

        {/* Welcome banner */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-start gap-3">
          <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
            <HiCheck className="h-3 w-3 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-green-800 dark:text-green-300">Welcome to your Billing page!</p>
            <p className="text-xs text-green-700 dark:text-green-400 mt-0.5">New path, you successfully read this important alert and message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* Left column */}
          <div className="space-y-6">

            {/* Current plan */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center text-white text-xs font-bold">F</div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white">Flowbite</span>
                    <Badge color="indigo" size="xs">Essential</Badge>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Renewal Date: 05/07/2025</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">$9,99<span className="text-base font-normal text-gray-500 dark:text-gray-400">/month</span></p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                <p>Orders</p>
                <p><strong className="text-gray-900 dark:text-white">27,965</strong> of 35,000 orders used</p>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 space-y-0.5">
                <p><strong className="text-gray-700 dark:text-gray-300">26,478</strong> Sales orders</p>
                <p><strong className="text-gray-700 dark:text-gray-300">1,478</strong> API orders</p>
              </div>

              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Current plan benefits</p>
              <ul className="grid grid-cols-2 gap-1 mb-5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                    <HiCheck className="h-3.5 w-3.5 text-green-500 shrink-0" />{b}
                  </li>
                ))}
              </ul>

              <div className="flex gap-2">
                <Button size="sm" color="alternative">Cancel subscription</Button>
                <Button size="sm">Upgrade to PRO</Button>
              </div>
            </div>

            {/* Payment details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 space-y-4">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Payment details</h2>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Recurring payment</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Automatically charge your account at regular intervals for Flowbite services.</p>
                </div>
                <ToggleSwitch checked={recurring} onChange={setRecurring} label="" />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Quick purchase</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">You will be asked to verify your account for all Flowbite purchases.</p>
                </div>
                <ToggleSwitch checked={quickPurchase} onChange={setQuickPurchase} label="" />
              </div>
              <Button size="sm">Save changes</Button>
            </div>

            {/* Billing history */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700">
                <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Billing history</h2>
              </div>
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  <tr>
                    {["Invoice ID", "Date", "Amount", "Status", "Actions"].map((h, i) => (
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
                      <td className="px-5 py-3">
                        <Badge color={inv.status === "Paid" ? "success" : "warning"} size="xs">{inv.status}</Badge>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <button className="text-xs text-primary-700 dark:text-primary-400 hover:underline font-medium">Edit</button>
                          <button className="text-xs text-primary-700 dark:text-primary-400 hover:underline font-medium">View</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-5 py-3 border-t border-gray-100 dark:border-gray-700">
                <button className="text-sm font-medium text-primary-700 dark:text-primary-400 hover:underline">View all</button>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">

            {/* Billing details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 space-y-4">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Billing details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="b-name" className="mb-2 block text-sm dark:text-white">Your name</Label>
                  <TextInput id="b-name" placeholder="Enter your name" sizing="sm" defaultValue="Bonnie Green" />
                </div>
                <div>
                  <Label htmlFor="b-email" className="mb-2 block text-sm dark:text-white">Email*</Label>
                  <TextInput id="b-email" type="email" placeholder="name@company.com" sizing="sm" defaultValue="bonnie@flowbite.com" />
                </div>
                <div>
                  <Label htmlFor="b-vat" className="mb-2 block text-sm dark:text-white">VAT number</Label>
                  <TextInput id="b-vat" placeholder="DE123456789" sizing="sm" defaultValue="DE432561283" />
                </div>
                <div>
                  <Label htmlFor="b-company" className="mb-2 block text-sm dark:text-white">Company name</Label>
                  <TextInput id="b-company" placeholder="Your company name" sizing="sm" defaultValue="Flowbite LLC" />
                </div>
                <div>
                  <Label htmlFor="b-country" className="mb-2 block text-sm dark:text-white">Country*</Label>
                  <Select id="b-country" sizing="sm">
                    <option>United States</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>United Kingdom</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="b-address" className="mb-2 block text-sm dark:text-white">Address*</Label>
                  <TextInput id="b-address" placeholder="Enter your address" sizing="sm" />
                </div>
                <div>
                  <Label htmlFor="b-street" className="mb-2 block text-sm dark:text-white">Street number</Label>
                  <TextInput id="b-street" placeholder="Enter your street number" sizing="sm" />
                </div>
                <div>
                  <Label htmlFor="b-city" className="mb-2 block text-sm dark:text-white">Town/City*</Label>
                  <TextInput id="b-city" placeholder="e.g. Sacramento" sizing="sm" />
                </div>
                <div>
                  <Label htmlFor="b-state" className="mb-2 block text-sm dark:text-white">State/County</Label>
                  <TextInput id="b-state" placeholder="e.g. California" sizing="sm" />
                </div>
                <div>
                  <Label htmlFor="b-zip" className="mb-2 block text-sm dark:text-white">Zip/Postal code</Label>
                  <TextInput id="b-zip" placeholder="e.g. 52449" sizing="sm" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="b-info" className="mb-2 block text-sm dark:text-white">Additional info</Label>
                  <Textarea id="b-info" placeholder="Any notes about your billing..." rows={3} className="text-sm" />
                </div>
              </div>
              <Button size="sm">Save changes</Button>
            </div>

            {/* Payment methods */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 space-y-4">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Payment methods</h2>

              {[
                { name: "Visa ending in 7658", detail: "Visa", expires: "Expiry 10/2025", logo: "VISA", color: "#1a1f71", bg: "#EEF2FF" },
                { name: "Mastercard ending in 8429", detail: "Mastercard", expires: "Expiry 10/2025", logo: "MC", color: "#EB001B", bg: "#FFF1F2" },
              ].map((card) => (
                <div key={card.name} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-12 rounded flex items-center justify-center text-xs font-bold" style={{ backgroundColor: card.bg, color: card.color }}>
                      {card.logo}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{card.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{card.expires}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-xs text-primary-700 dark:text-primary-400 hover:underline font-medium">Edit</button>
                    <button className="text-xs text-red-600 dark:text-red-400 hover:underline font-medium">Delete</button>
                  </div>
                </div>
              ))}

              {/* PayPal */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-12 rounded bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-700">PP</div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Paypal account</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">name@example.com</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="text-xs text-primary-700 dark:text-primary-400 hover:underline font-medium">Edit</button>
                  <button className="text-xs text-red-600 dark:text-red-400 hover:underline font-medium">Delete</button>
                </div>
              </div>

              <button className="flex items-center gap-2 text-sm font-medium text-primary-700 dark:text-primary-400 hover:underline">
                <HiPlus className="h-4 w-4" />Add new payment method
              </button>

              <Button size="sm">Save changes</Button>
            </div>

          </div>
        </div>
      </div>
    </PreviewShell>
  );
}
