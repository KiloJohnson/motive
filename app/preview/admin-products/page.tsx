"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Button, Checkbox, TextInput, Select } from "flowbite-react";
import { HiSearch, HiPlus, HiPencilAlt, HiTrash, HiChevronLeft, HiChevronRight } from "react-icons/hi";

const products = [
  { id: 1, name: "Apple iMac 27\"",     category: "PC",           price: "$2,999", stock: 95,  status: "In Stock",    sku: "IMAC-001" },
  { id: 2, name: "Apple MacBook Pro",   category: "Laptop",       price: "$1,999", stock: 46,  status: "In Stock",    sku: "MBP-002" },
  { id: 3, name: "AirPods Pro",         category: "Accessories",  price: "$249",   stock: 0,   status: "Out of Stock",sku: "APP-003" },
  { id: 4, name: "iPad Pro 12.9\"",     category: "Tablet",       price: "$1,099", stock: 12,  status: "Low Stock",   sku: "IPAD-004" },
  { id: 5, name: "Samsung 4K Monitor",  category: "Monitors",     price: "$799",   stock: 73,  status: "In Stock",    sku: "SAM-005" },
  { id: 6, name: "Logitech MX Keys",   category: "Accessories",  price: "$99",    stock: 28,  status: "In Stock",    sku: "LGT-006" },
  { id: 7, name: "Sony WH-1000XM5",    category: "Audio",        price: "$349",   stock: 4,   status: "Low Stock",   sku: "SNY-007" },
  { id: 8, name: "Anker USB-C Hub",    category: "Accessories",  price: "$49",    stock: 142, status: "In Stock",    sku: "ANK-008" },
];

const stockColor: Record<string, string> = {
  "In Stock":     "success",
  "Low Stock":    "warning",
  "Out of Stock": "failure",
};

export default function AdminProductsPage() {
  return (
    <PreviewShell variant="admin" title="Products">
      <div className="p-6 space-y-4">

        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">All Products</h1>
          <Button size="sm">
            <HiPlus className="mr-1.5 h-4 w-4" />Add product
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">

          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <TextInput placeholder="Search products..." icon={HiSearch} sizing="sm" className="w-64" />
              <Select sizing="sm" className="w-36">
                <option>All categories</option>
                <option>PC</option>
                <option>Laptop</option>
                <option>Accessories</option>
                <option>Audio</option>
              </Select>
            </div>
            <Button color="alternative" size="sm">Export CSV</Button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-3 w-8"><Checkbox /></th>
                  {["Product", "SKU", "Category", "Price", "Stock", "Status", "Actions"].map((h) => (
                    <th key={h} className="px-5 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {products.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-5 py-3"><Checkbox /></td>
                    <td className="px-5 py-3 font-medium text-gray-900 dark:text-white">{p.name}</td>
                    <td className="px-5 py-3 font-mono text-xs text-gray-500 dark:text-gray-400">{p.sku}</td>
                    <td className="px-5 py-3 text-gray-600 dark:text-gray-300">{p.category}</td>
                    <td className="px-5 py-3 font-semibold text-gray-900 dark:text-white">{p.price}</td>
                    <td className="px-5 py-3 text-gray-600 dark:text-gray-300">{p.stock}</td>
                    <td className="px-5 py-3">
                      <Badge color={stockColor[p.status] as any} size="xs">{p.status}</Badge>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-600"><HiPencilAlt className="h-4 w-4" /></button>
                        <button className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-500"><HiTrash className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 dark:border-gray-700">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Showing <strong className="text-gray-900 dark:text-white">1-8</strong> of <strong className="text-gray-900 dark:text-white">487</strong>
            </span>
            <div className="flex items-center gap-1">
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                <HiChevronLeft className="h-4 w-4" />Prev
              </button>
              {[1,2,3].map((n) => (
                <button key={n} className={`w-8 h-8 rounded-lg text-sm ${n === 1 ? "bg-primary-600 text-white font-medium" : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`}>{n}</button>
              ))}
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                Next<HiChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}
