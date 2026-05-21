"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Button, Checkbox, TextInput, Select } from "flowbite-react";
import { HiSearch, HiPlus, HiArrowUp, HiArrowDown, HiChevronDown, HiAdjustments } from "react-icons/hi";

const kpis = [
  { label: "Total stocks",      value: "345,768", delta: "8%",  up: true  },
  { label: "New products",      value: "31,385",  delta: "12.4",up: true  },
  { label: "Sold products",     value: "27,274",  delta: "3.7", up: false },
  { label: "Returned products", value: "3,506",   delta: "12.4",up: false },
];

const products = [
  { name: "Apple iMac 27\"",      category: "PC",            brand: "Apple",     price: "$2999", stock: 200,  sales: 245,  active: true  },
  { name: "Apple MacBook PRO",    category: "PC",            brand: "Apple",     price: "$1499", stock: 1237, sales: 2000, active: true  },
  { name: "Apple iPhone 14",      category: "Phone",         brand: "Apple",     price: "$999",  stock: 300,  sales: 466,  active: false },
  { name: "Apple iPad Air",       category: "Tablet",        brand: "Apple",     price: "$1199", stock: 4576, sales: 90,   active: true  },
  { name: "Xbox Series S",        category: "Gaming/Console",brand: "Microsoft", price: "$299",  stock: 56,   sales: 3087, active: true  },
  { name: "PlayStation 5",        category: "Gaming/Console",brand: "Sony",      price: "$799",  stock: 78,   sales: 2999, active: false },
  { name: "Xbox Series X",        category: "Gaming/Console",brand: "Microsoft", price: "$699",  stock: 200,  sales: 1870, active: true  },
  { name: "Apple Watch SE",       category: "Watch",         brand: "Apple",     price: "$399",  stock: 657,  sales: 5067, active: true  },
  { name: "iPad Pro 13-inch (M4)",category: "Photo",         brand: "Nikon",     price: "$599",  stock: 465,  sales: 1870, active: false },
  { name: "Apple iMac 20\"",      category: "TV/Monitor",    brand: "BenQ",      price: "$499",  stock: 354,  sales: 76,   active: true  },
];

export default function AdminProductsPage() {
  return (
    <PreviewShell variant="admin" title="Products">
      <div className="p-6 space-y-5">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
          <a href="#" className="hover:text-primary-600">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-primary-600">E-commerce</a>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">All products</span>
        </nav>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">All products</h1>

        {/* KPI cards */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <div key={k.label} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-4">
              <div className={`flex items-center gap-1.5 text-xs font-semibold mb-1 ${k.up ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                {k.up ? <HiArrowUp className="h-3.5 w-3.5" /> : <HiArrowDown className="h-3.5 w-3.5" />}
                {k.delta}%
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{k.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{k.label}</p>
            </div>
          ))}
        </div>

        {/* Table card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">

          {/* Table header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Flowbite Products</h2>
              <span className="text-xs text-gray-400 dark:text-gray-500">ⓘ</span>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm">
                <HiPlus className="mr-1.5 h-3.5 w-3.5" />Add new product
              </Button>
              <Button color="alternative" size="sm">
                <HiAdjustments className="mr-1.5 h-3.5 w-3.5" />Table settings
                <HiChevronDown className="ml-1 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 px-5 py-3 border-b border-gray-100 dark:border-gray-700">
            <TextInput placeholder="Search" icon={HiSearch} sizing="sm" className="w-48" />
            <Select sizing="sm" className="w-32"><option>Brand</option><option>Apple</option><option>Microsoft</option><option>Sony</option></Select>
            <Select sizing="sm" className="w-32"><option>Price</option><option>Under $500</option><option>$500–$1000</option><option>Over $1000</option></Select>
            <Select sizing="sm" className="w-36"><option>Category</option><option>PC</option><option>Phone</option><option>Gaming</option></Select>
            <div className="ml-auto">
              <Select sizing="sm" className="w-28"><option>Actions</option><option>Edit</option><option>Delete</option><option>Duplicate</option></Select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 w-8"><Checkbox /></th>
                  <th className="px-4 py-3 w-6"></th>
                  <th className="px-4 py-3 font-semibold">Product</th>
                  <th className="px-4 py-3 font-semibold">Category ↕</th>
                  <th className="px-4 py-3 font-semibold">Brand ↕</th>
                  <th className="px-4 py-3 font-semibold">Price ↕</th>
                  <th className="px-4 py-3 font-semibold">Stock ↕</th>
                  <th className="px-4 py-3 font-semibold">Total Sales ↕</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {products.map((p) => (
                  <tr key={p.name} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-4 py-3"><Checkbox /></td>
                    <td className="px-4 py-3">
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <HiChevronDown className="h-4 w-4" />
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center shrink-0">
                          <div className="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded-sm" />
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white whitespace-nowrap">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300 whitespace-nowrap">{p.category}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{p.brand}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">{p.price}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{p.stock}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{p.sales}</td>
                    <td className="px-4 py-3">
                      <Badge color={p.active ? "success" : "failure"} size="xs">{p.active ? "Active" : "Inactive"}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="text-gray-500 dark:text-gray-400">Purchase price</span>
                <p className="font-semibold text-gray-900 dark:text-white">$3,567,890</p>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">Total selling price</span>
                <p className="font-semibold text-gray-900 dark:text-white">$8,489,400</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-sm font-medium text-primary-700 dark:text-primary-400 hover:underline">Print barcodes</button>
              <button className="text-sm font-medium text-primary-700 dark:text-primary-400 hover:underline">Duplicate</button>
              <Button size="sm">Export CSV</Button>
            </div>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
