"use client";

import { PreviewShell } from "../PreviewShell";
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";
import { HiPlus, HiTrash, HiArrowLeft } from "react-icons/hi";
import { useState } from "react";

const defaultItems = [
  { name: "Flowbite Developer Edition", desc: "HTML, Figma, JS", qty: 2, price: 269, discount: 50 },
  { name: "Flowbite Designer Edition",  desc: "Figma Design System", qty: 3, price: 149, discount: 0  },
];

export default function AdminInvoiceCreatePage() {
  const [items, setItems] = useState(defaultItems);

  const subtotal = items.reduce((sum, i) => sum + (i.price * i.qty * (1 - i.discount / 100)), 0);

  return (
    <PreviewShell variant="admin" title="Create Invoice">
      <div className="p-6 max-w-5xl mx-auto space-y-5">

        <nav className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
          <a href="#" className="hover:text-primary-600">Home</a>
          <span>/</span>
          <a href="/preview/admin-invoices" className="hover:text-primary-600">Invoices</a>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Create invoice</span>
        </nav>

        <div className="flex items-center justify-between">
          <a href="/preview/admin-invoices" className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium">
            <HiArrowLeft className="h-4 w-4" />Back to invoices
          </a>
          <div className="flex gap-2">
            <Button color="alternative" size="sm">Save draft</Button>
            <Button size="sm">Send invoice</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Left — invoice form */}
          <div className="xl:col-span-2 space-y-5">

            {/* From / To */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Bill from:</h3>
                  <div className="space-y-3">
                    <div><Label className="mb-1 block text-xs dark:text-white">Company name</Label><TextInput sizing="sm" defaultValue="Flowbite LLC" /></div>
                    <div><Label className="mb-1 block text-xs dark:text-white">Email</Label><TextInput sizing="sm" type="email" defaultValue="billing@flowbite.com" /></div>
                    <div><Label className="mb-1 block text-xs dark:text-white">Address</Label><TextInput sizing="sm" defaultValue="3864 Johnson Street" /></div>
                    <div><Label className="mb-1 block text-xs dark:text-white">City, State, ZIP</Label><TextInput sizing="sm" defaultValue="Louisville, KY 40202" /></div>
                    <div><Label className="mb-1 block text-xs dark:text-white">VAT number</Label><TextInput sizing="sm" defaultValue="AA-1234567890" /></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Bill to:</h3>
                  <div className="space-y-3">
                    <div><Label className="mb-1 block text-xs dark:text-white">Client name</Label><TextInput sizing="sm" placeholder="Client name" /></div>
                    <div><Label className="mb-1 block text-xs dark:text-white">Email</Label><TextInput sizing="sm" type="email" placeholder="name@company.com" /></div>
                    <div><Label className="mb-1 block text-xs dark:text-white">Address</Label><TextInput sizing="sm" placeholder="Street address" /></div>
                    <div><Label className="mb-1 block text-xs dark:text-white">City, State, ZIP</Label><TextInput sizing="sm" placeholder="City, State, ZIP" /></div>
                    <div><Label className="mb-1 block text-xs dark:text-white">VAT number (optional)</Label><TextInput sizing="sm" placeholder="VAT number" /></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Invoice details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Invoice details</h3>
              <div className="grid grid-cols-3 gap-4">
                <div><Label className="mb-1 block text-xs dark:text-white">Invoice number</Label><TextInput sizing="sm" defaultValue="#AB4521" /></div>
                <div><Label className="mb-1 block text-xs dark:text-white">Issue date</Label><TextInput sizing="sm" type="date" defaultValue="2025-06-01" /></div>
                <div><Label className="mb-1 block text-xs dark:text-white">Due date</Label><TextInput sizing="sm" type="date" defaultValue="2025-06-15" /></div>
              </div>
            </div>

            {/* Line items */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Line items</h3>
              <table className="w-full text-sm mb-3">
                <thead>
                  <tr className="text-xs text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">
                    <th className="text-left py-2 font-semibold w-2/5">Product / Service</th>
                    <th className="text-right py-2 font-semibold w-16">QTY</th>
                    <th className="text-right py-2 font-semibold w-24">Price</th>
                    <th className="text-right py-2 font-semibold w-20">Discount</th>
                    <th className="text-right py-2 font-semibold w-24">Total</th>
                    <th className="w-8" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
                  {items.map((item, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-3">
                        <input className="w-full text-sm border-0 bg-transparent text-gray-900 dark:text-white focus:ring-0 p-0 font-medium" defaultValue={item.name} />
                        <input className="w-full text-xs border-0 bg-transparent text-gray-500 dark:text-gray-400 focus:ring-0 p-0 mt-0.5" defaultValue={item.desc} />
                      </td>
                      <td className="py-2 text-right"><input className="w-14 text-sm text-right border border-gray-200 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-1" defaultValue={item.qty} type="number" /></td>
                      <td className="py-2 text-right"><input className="w-20 text-sm text-right border border-gray-200 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-1" defaultValue={`$${item.price}`} /></td>
                      <td className="py-2 text-right"><input className="w-16 text-sm text-right border border-gray-200 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-1" defaultValue={`${item.discount}%`} /></td>
                      <td className="py-2 text-right font-semibold text-gray-900 dark:text-white">${(item.price * item.qty * (1 - item.discount / 100)).toFixed(0)}</td>
                      <td className="py-2 pl-2">
                        <button onClick={() => setItems(items.filter((_, j) => j !== i))} className="text-gray-400 hover:text-red-500">
                          <HiTrash className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={() => setItems([...items, { name: "New item", desc: "Description", qty: 1, price: 0, discount: 0 }])}
                className="flex items-center gap-1.5 text-sm text-primary-700 dark:text-primary-400 hover:underline font-medium">
                <HiPlus className="h-4 w-4" />Add item
              </button>
            </div>

            {/* Notes */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
              <Label className="mb-2 block text-sm font-semibold dark:text-white">Notes</Label>
              <Textarea placeholder="Payment due within 30 days. Please include the invoice number on your payment." rows={3} className="text-sm" />
            </div>
          </div>

          {/* Right — summary */}
          <div className="space-y-5">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Order summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500 dark:text-gray-400">Subtotal</span><span className="font-medium text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-gray-500 dark:text-gray-400">Tax (0%)</span><span className="font-medium text-gray-900 dark:text-white">$0.00</span></div>
                <div className="flex justify-between"><span className="text-gray-500 dark:text-gray-400">Shipping</span><span className="font-medium text-gray-900 dark:text-white">$0.00</span></div>
                <div className="flex justify-between text-base font-bold border-t border-gray-100 dark:border-gray-700 pt-2">
                  <span className="text-gray-900 dark:text-white">Total</span>
                  <span className="text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 space-y-3">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Payment settings</h3>
              <div><Label className="mb-1 block text-xs dark:text-white">Currency</Label>
                <Select sizing="sm"><option>USD — US Dollar</option><option>EUR — Euro</option><option>GBP — British Pound</option></Select>
              </div>
              <div><Label className="mb-1 block text-xs dark:text-white">Payment method</Label>
                <Select sizing="sm"><option>Bank transfer</option><option>Credit card</option><option>PayPal</option></Select>
              </div>
            </div>
            <Button className="w-full">Send invoice</Button>
            <Button color="alternative" className="w-full">Save as draft</Button>
          </div>

        </div>
      </div>
    </PreviewShell>
  );
}
