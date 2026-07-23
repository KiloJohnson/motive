"use client";

import { PreviewShell } from "../PreviewShell";
import { Button, Label, TextInput, Select, Textarea, ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { HiArrowLeft, HiTrash, HiPaperClip, HiPhotograph, HiCode, HiEmojiHappy, HiViewList, HiCog, HiClock, HiDownload, HiArrowsExpand, HiPlus, HiInformationCircle } from "react-icons/hi";

const existingItems = [
  { name: "Flowbite Developer Edition", price: "$269", qty: 2, discount: "50%", total: "$269"  },
  { name: "Flowbite Designer Edition",  price: "$149", qty: 3, discount: "0%",  total: "$447"  },
];

const lineItemsFull = [
  { name: "Flowbite Developer Edition", sub: "HTML, Figma, JS",       price: "$269", qty: 2, discount: "50%", total: "$269"  },
  { name: "Flowbite Designer Edition",  sub: "Figma Design System",    price: "$149", qty: 3, discount: "0%",  total: "$447"  },
  { name: "Flowbite Open Source",       sub: "Open source components", price: "$0",   qty: 1, discount: "0%",  total: "$0"    },
  { name: "2 Years Support",            sub: "Premium support",        price: "$199", qty: 1, discount: "0%",  total: "$199"  },
  { name: "Flowbite Developer (Team License)", sub: "HTML, Figma, JS", price: "$799", qty: 2, discount: "0%",  total: "$1598" },
];

export default function AdminInvoiceCreatePage() {
  const [vatApplicable, setVatApplicable] = useState(false);

  return (
    <PreviewShell variant="admin" title="Create Invoice">
      <div className="p-6 space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <nav className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <a href="#" className="hover:text-primary-600">Home</a>
              <span>/</span>
              <a href="/preview/admin-invoices" className="hover:text-primary-600">Invoices</a>
              <span>/</span>
              <span className="text-gray-900 dark:text-white font-medium">New Invoice</span>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <a href="/preview/admin-invoices" className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium">
              <HiArrowLeft className="h-4 w-4" />Back to invoices
            </a>
            <Button size="sm" color="alternative">Discard</Button>
            <Button size="sm">Save</Button>
          </div>
        </div>

        {/* Two-column: form left, preview right */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-5 items-start">

        {/* Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 space-y-5">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="inv-num" className="mb-2 block dark:text-white text-sm">Invoice Number*</Label>
              <TextInput id="inv-num" placeholder="F18-XXXXXX" sizing="sm" />
            </div>
            <div>
              <Label htmlFor="inv-customer" className="mb-2 block dark:text-white text-sm">Customer*</Label>
              <TextInput id="inv-customer" defaultValue="Bonnie Green" sizing="sm" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <div className="flex items-center gap-1 mb-2">
                <Label className="dark:text-white text-sm">Payment Condition</Label>
                <HiInformationCircle className="h-3.5 w-3.5 text-gray-400" />
              </div>
              <Select sizing="sm">
                <option value="">Select condition</option>
                <option>Cash in Advance</option>
                <option>Cash on Delivery</option>
                <option>Advance Payment</option>
                <option>Credit</option>
              </Select>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-2">
                <Label className="dark:text-white text-sm">Currency</Label>
                <HiInformationCircle className="h-3.5 w-3.5 text-gray-400" />
              </div>
              <Select sizing="sm">
                <option>United States Dollar (USD)</option>
                <option>Euro (EUR)</option>
                <option>British Pound Sterling (GBP)</option>
                <option>Japanese Yen (JPY)</option>
                <option>Swiss Franc (CHF)</option>
                <option>Canadian Dollar (CAD)</option>
              </Select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="inv-issue" className="mb-2 block dark:text-white text-sm">Issue Date*</Label>
              <TextInput id="inv-issue" type="date" sizing="sm" />
            </div>
            <div>
              <Label htmlFor="inv-due" className="mb-2 block dark:text-white text-sm">Due Date*</Label>
              <TextInput id="inv-due" type="date" sizing="sm" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="inv-delivery" className="mb-2 block dark:text-white text-sm">Delivery Date</Label>
              <TextInput id="inv-delivery" type="date" sizing="sm" />
            </div>
            <div>
              <Label htmlFor="inv-ref" className="mb-2 block dark:text-white text-sm">Reference of the Invoice</Label>
              <TextInput id="inv-ref" placeholder="Invoice number" sizing="sm" />
            </div>
          </div>

          {/* Object */}
          <div>
            <Label htmlFor="inv-object" className="mb-2 block dark:text-white text-sm">Object</Label>
            <TextInput id="inv-object" placeholder="Payment terms" sizing="sm" />
          </div>

          {/* Additional Info rich text */}
          <div>
            <Label className="mb-2 block dark:text-white text-sm">Additional Info</Label>
            <div className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
              {/* Toolbar */}
              <div className="flex items-center gap-1 px-3 py-2 border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 flex-wrap">
                {[HiPaperClip, HiPhotograph, HiCode, HiEmojiHappy, HiViewList, HiCog, HiClock, HiDownload, HiArrowsExpand].map((Icon, i) => (
                  <button key={i} className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400">
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
                <button className="ml-auto p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400">
                  <HiArrowsExpand className="h-4 w-4" />
                </button>
              </div>
              <Textarea placeholder="Receipt info (optional)" rows={4} className="border-0 rounded-none resize-none" />
            </div>
          </div>

          {/* VAT toggle */}
          <div className="flex items-center gap-3">
            <ToggleSwitch checked={vatApplicable} onChange={setVatApplicable} label="VAT Applicable" />
          </div>

          {/* Products table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-700 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  <th className="py-3 text-left">Product name</th>
                  <th className="py-3 text-right">Price</th>
                  <th className="py-3 text-right">Quantity</th>
                  <th className="py-3 text-right">Discount</th>
                  <th className="py-3 text-right">Total Price</th>
                  <th className="py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
                {existingItems.map((item, i) => (
                  <tr key={i}>
                    <td className="py-3 font-medium text-gray-900 dark:text-white">{item.name}</td>
                    <td className="py-3 text-right text-gray-600 dark:text-gray-300">{item.price}</td>
                    <td className="py-3 text-right text-gray-600 dark:text-gray-300">{item.qty}</td>
                    <td className="py-3 text-right text-gray-500 dark:text-gray-400">{item.discount}</td>
                    <td className="py-3 text-right font-semibold text-gray-900 dark:text-white">{item.total}</td>
                    <td className="py-3 text-right">
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <HiTrash className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}

                {/* New product row */}
                <tr className="border-t border-gray-200 dark:border-gray-600">
                  <td className="py-3 pr-3">
                    <TextInput placeholder="Product Name" sizing="sm" />
                  </td>
                  <td className="py-3 px-2">
                    <TextInput placeholder="Price" sizing="sm" className="w-24 ml-auto" />
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex items-center justify-end gap-1">
                      <button className="h-7 w-7 rounded border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 text-xs">−</button>
                      <span className="text-sm w-6 text-center text-gray-700 dark:text-gray-300">1</span>
                      <button className="h-7 w-7 rounded border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 text-xs">+</button>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <Select sizing="sm" className="w-24 ml-auto">
                      <option>0%</option>
                      <option>10%</option>
                      <option>25%</option>
                      <option>75%</option>
                      <option>100%</option>
                    </Select>
                  </td>
                  <td className="py-3 px-2 text-right text-gray-500 dark:text-gray-400">$0</td>
                  <td className="py-3 pl-2 text-right">
                    <Button size="xs">Save product</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Add product + Order summary */}
          <div className="flex items-start justify-between">
            <button className="flex items-center gap-1.5 text-sm font-medium text-primary-700 dark:text-primary-400 hover:underline">
              <HiPlus className="h-4 w-4" />Add new product
            </button>
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

        {/* Invoice Preview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden sticky top-6">

          {/* Preview header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <button className="hover:text-gray-900 dark:hover:text-white">−</button>
              <button className="hover:text-gray-900 dark:hover:text-white">+</button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <button className="hover:text-gray-900 dark:hover:text-white">‹</button>
              <span>1 / 3</span>
              <button className="hover:text-gray-900 dark:hover:text-white">›</button>
            </div>
            <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1">
              <HiArrowsExpand className="h-4 w-4" />Full Screen
            </button>
          </div>

          {/* Rendered invoice */}
          <div className="p-8 space-y-6 bg-white dark:bg-gray-800">

            <div className="flex items-center gap-2">
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/scripps_light.svg`} alt="Scripps Health" className="h-7 w-auto dark:hidden" />
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/scripps_dark.svg`} alt="Scripps Health" className="h-7 w-auto hidden dark:block" />
            </div>

            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Invoice #1846325</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Date: 05/07/2025</p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-gray-100 dark:border-gray-700">
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Pay to:</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Flowbite LLC, LOUISVILLE, Selby</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">3864 Johnson Street, United States of America,</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">VAT Code: AA-1234567890</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Invoice to:</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green, Carolina, Selby</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">3864 Johnson Street, United States of America,</p>
                <p className="text-sm text-primary-600 dark:text-primary-400">name@company.com</p>
              </div>
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  {["Product name", "Price", "Quantity", "Discount", "Total price"].map((h) => (
                    <th key={h} className={`py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 ${h === "Product name" ? "text-left" : "text-right"}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-700/50">
                {lineItemsFull.map((item, i) => (
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

            <div className="flex justify-end">
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
        </div>

        </div>{/* end two-column grid */}
      </div>
    </PreviewShell>
  );
}
