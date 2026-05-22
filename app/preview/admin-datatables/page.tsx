"use client";

import { useState, useMemo } from "react";
import { PreviewShell } from "../PreviewShell";

// ── Sort icon ──────────────────────────────────────────────────────────────

function SortIcon() {
  return (
    <svg
      className="ms-1 h-4 w-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m8 15 4 4 4-4m0-6-4-4-4 4"
      />
    </svg>
  );
}

// ── Cart icon ──────────────────────────────────────────────────────────────

function CartIcon() {
  return (
    <svg
      className="me-1 h-5 w-5 text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
      />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────

type StockStatus = "In Stock" | "Out of Stock";

interface Product {
  name: string;
  category: string;
  brand: string;
  price: string;
  priceNum: number;
  stockDot: string; // tailwind bg color class
  stockCount: number;
  totalSales: number;
  status: StockStatus;
}

const products: Product[] = [
  { name: 'Apple iMac 27"',        category: "Computers",        brand: "Apple",     price: "$1,299", priceNum: 1299,  stockDot: "bg-orange-400",                          stockCount: 95,   totalSales: 200,  status: "In Stock" },
  { name: "Apple iPhone",          category: "Mobile Phones",    brand: "Apple",     price: "$999",   priceNum: 999,   stockDot: "bg-green-500",                           stockCount: 342,  totalSales: 300,  status: "In Stock" },
  { name: "Samsung Galaxy",        category: "Mobile Phones",    brand: "Samsung",   price: "$899",   priceNum: 899,   stockDot: "bg-orange-400",                          stockCount: 127,  totalSales: 150,  status: "In Stock" },
  { name: "Dell XPS 13",           category: "Computers",        brand: "Dell",      price: "$1,099", priceNum: 1099,  stockDot: "bg-gray-400 dark:bg-gray-600",           stockCount: 0,    totalSales: 120,  status: "Out of Stock" },
  { name: "HP Spectre x360",       category: "Computers",        brand: "HP",        price: "$1,299", priceNum: 1299,  stockDot: "bg-green-500",                           stockCount: 325,  totalSales: 80,   status: "In Stock" },
  { name: "Google Pixel 6",        category: "Mobile Phones",    brand: "Google",    price: "$799",   priceNum: 799,   stockDot: "bg-orange-400",                          stockCount: 100,  totalSales: 200,  status: "In Stock" },
  { name: "Sony WH-1000XM4",       category: "Headphones",       brand: "Sony",      price: "$349",   priceNum: 349,   stockDot: "bg-red-500",                             stockCount: 60,   totalSales: 150,  status: "In Stock" },
  { name: "Apple AirPods Pro",     category: "Headphones",       brand: "Apple",     price: "$249",   priceNum: 249,   stockDot: "bg-green-500",                           stockCount: 200,  totalSales: 300,  status: "In Stock" },
  { name: "Asus ROG Zephyrus",     category: "Computers",        brand: "Asus",      price: "$1,899", priceNum: 1899,  stockDot: "bg-red-500",                             stockCount: 15,   totalSales: 50,   status: "In Stock" },
  { name: "Microsoft Surface Pro 7", category: "Computers",      brand: "Microsoft", price: "$899",   priceNum: 899,   stockDot: "bg-green-500",                           stockCount: 224,  totalSales: 100,  status: "In Stock" },
  { name: "Samsung QLED TV",       category: "Televisions",      brand: "Samsung",   price: "$1,299", priceNum: 1299,  stockDot: "bg-gray-400 dark:bg-gray-600",           stockCount: 0,    totalSales: 70,   status: "Out of Stock" },
  { name: "LG OLED TV",            category: "Televisions",      brand: "LG",        price: "$1,499", priceNum: 1499,  stockDot: "bg-green-500",                           stockCount: 204,  totalSales: 50,   status: "In Stock" },
  { name: "Canon EOS R5",          category: "Cameras",          brand: "Canon",     price: "$3,899", priceNum: 3899,  stockDot: "bg-green-500",                           stockCount: 674,  totalSales: 30,   status: "In Stock" },
  { name: "Nikon Z7 II",           category: "Cameras",          brand: "Nikon",     price: "$3,299", priceNum: 3299,  stockDot: "bg-orange-400",                          stockCount: 164,  totalSales: 25,   status: "In Stock" },
  { name: "Apple Watch Series 7",  category: "Wearables",        brand: "Apple",     price: "$399",   priceNum: 399,   stockDot: "bg-orange-400",                          stockCount: 150,  totalSales: 500,  status: "In Stock" },
  { name: "Fitbit Charge 5",       category: "Wearables",        brand: "Fitbit",    price: "$179",   priceNum: 179,   stockDot: "bg-green-500",                           stockCount: 444,  totalSales: 250,  status: "In Stock" },
  { name: "Dyson V11 Vacuum",      category: "Home Appliances",  brand: "Dyson",     price: "$599",   priceNum: 599,   stockDot: "bg-gray-400 dark:bg-gray-600",           stockCount: 0,    totalSales: 90,   status: "Out of Stock" },
  { name: "iRobot Roomba i7+",     category: "Home Appliances",  brand: "iRobot",    price: "$799",   priceNum: 799,   stockDot: "bg-green-500",                           stockCount: 1043, totalSales: 70,   status: "In Stock" },
  { name: "Bose SoundLink Revolve", category: "Speakers",        brand: "Bose",      price: "$199",   priceNum: 199,   stockDot: "bg-green-500",                           stockCount: 935,  totalSales: 200,  status: "In Stock" },
  { name: "Sonos One",             category: "Sonos",            brand: "Sonos",     price: "$90",    priceNum: 90,    stockDot: "bg-orange-400",                          stockCount: 180,  totalSales: 67,   status: "In Stock" },
  { name: "Apple iPad Pro",        category: "Tablets",          brand: "Apple",     price: "$1,099", priceNum: 1099,  stockDot: "bg-orange-400",                          stockCount: 98,   totalSales: 150,  status: "In Stock" },
  { name: "Samsung Galaxy Tab S7", category: "Tablets",          brand: "Samsung",   price: "$649",   priceNum: 649,   stockDot: "bg-red-500",                             stockCount: 70,   totalSales: 130,  status: "In Stock" },
  { name: "Amazon Echo Dot",       category: "Smart Home",       brand: "Amazon",    price: "$49",    priceNum: 49,    stockDot: "bg-green-500",                           stockCount: 300,  totalSales: 800,  status: "In Stock" },
  { name: "Google Nest Hub",       category: "Smart Home",       brand: "Google",    price: "$89",    priceNum: 89,    stockDot: "bg-orange-400",                          stockCount: 150,  totalSales: 400,  status: "In Stock" },
  { name: "PlayStation 5",         category: "Gaming Consoles",  brand: "Sony",      price: "$499",   priceNum: 499,   stockDot: "bg-red-500",                             stockCount: 10,   totalSales: 500,  status: "In Stock" },
  { name: "Xbox Series X",         category: "Gaming Consoles",  brand: "Microsoft", price: "$499",   priceNum: 499,   stockDot: "bg-gray-400 dark:bg-gray-600",           stockCount: 0,    totalSales: 450,  status: "Out of Stock" },
  { name: "Nintendo Switch",       category: "Gaming Consoles",  brand: "Nintendo",  price: "$299",   priceNum: 299,   stockDot: "bg-orange-400",                          stockCount: 65,   totalSales: 600,  status: "In Stock" },
  { name: "Apple MacBook Pro",     category: "Computers",        brand: "Apple",     price: "$1,299", priceNum: 1299,  stockDot: "bg-red-500",                             stockCount: 20,   totalSales: 100,  status: "In Stock" },
];

// ── KPI cards data ─────────────────────────────────────────────────────────

const kpiCards = [
  {
    label: "Total products",
    value: "6,043",
    iconBg: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-700 dark:text-teal-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clipRule="evenodd" />
        <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
      </svg>
    ),
  },
  {
    label: "New products",
    value: "978",
    iconBg: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-700 dark:text-purple-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.535a3.5 3.5 0 1 0 6.93 0h3.07a3.5 3.5 0 1 0 6.93 0H21a1 1 0 0 0 1-1v-4a.999.999 0 0 0-.106-.447l-2-4A1 1 0 0 0 19 6h-5a2 2 0 0 0-2-2H4Zm14.192 11.59.016.02a1.5 1.5 0 1 1-.016-.021Zm-10 0 .016.02a1.5 1.5 0 1 1-.016-.021Zm5.806-5.572v-2.02h4.396l1 2.02h-5.396Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Sales",
    value: "1,945",
    iconBg: "bg-yellow-100 dark:bg-yellow-900",
    iconColor: "text-yellow-700 dark:text-yellow-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Total Income",
    value: "$1,657,856",
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-700 dark:text-blue-400",
    icon: (
      <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M9 15a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm3.845-1.855a2.4 2.4 0 0 1 1.2-1.226 1 1 0 0 1 1.992-.026c.426.15.809.408 1.111.749a1 1 0 1 1-1.496 1.327.682.682 0 0 0-.36-.213.997.997 0 0 1-.113-.032.4.4 0 0 0-.394.074.93.93 0 0 0 .455.254 2.914 2.914 0 0 1 1.504.9c.373.433.669 1.092.464 1.823a.996.996 0 0 1-.046.129c-.226.519-.627.94-1.132 1.192a1 1 0 0 1-1.956.093 2.68 2.68 0 0 1-1.227-.798 1 1 0 1 1 1.506-1.315.682.682 0 0 0 .363.216c.038.009.075.02.111.032a.4.4 0 0 0 .395-.074.93.93 0 0 0-.455-.254 2.91 2.91 0 0 1-1.503-.9c-.375-.433-.666-1.089-.466-1.817a.994.994 0 0 1 .047-.134Zm1.884.573.003.008c-.003-.005-.003-.008-.003-.008Zm.55 2.613s-.002-.002-.003-.007a.032.032 0 0 1 .003.007ZM4 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm3-2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm6.5-8a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.796l-2.341 2.049a1 1 0 0 1-1.24.06l-2.894-2.066L6.614 9.29a1 1 0 1 1-1.228-1.578l4.5-3.5a1 1 0 0 1 1.195-.025l2.856 2.04L15.34 5h-.84a1 1 0 0 1-1-1Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

// ── Column keys ────────────────────────────────────────────────────────────

type SortKey = "name" | "category" | "brand" | "priceNum" | "stockCount" | "totalSales" | "status";
type SortDir = "asc" | "desc";

const columns: { key: SortKey; label: string }[] = [
  { key: "name",       label: "Name" },
  { key: "category",   label: "Category" },
  { key: "brand",      label: "Brand" },
  { key: "priceNum",   label: "Price" },
  { key: "stockCount", label: "Stock" },
  { key: "totalSales", label: "Total Sales" },
  { key: "status",     label: "Status" },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminDatatablesPage() {
  const [sortKey, setSortKey]   = useState<SortKey>("name");
  const [sortDir, setSortDir]   = useState<SortDir>("asc");
  const [search, setSearch]     = useState("");
  const [page, setPage]         = useState(1);
  const perPage = 10;

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
    setPage(1);
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.status.toLowerCase().includes(q)
    );
  }, [search]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (typeof av === "number" && typeof bv === "number") {
        return sortDir === "asc" ? av - bv : bv - av;
      }
      return sortDir === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
  }, [filtered, sortKey, sortDir]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / perPage));
  const paginated  = sorted.slice((page - 1) * perPage, page * perPage);

  return (
    <PreviewShell variant="admin" title="Datatables">

      {/* ── Header band: KPIs + breadcrumb ── */}
      <div className="grid grid-cols-12 gap-4 border-b border-gray-200 bg-white pb-4 dark:border-gray-700 dark:bg-gray-900">
        <div className="col-span-full mx-4 mt-4">

          {/* Breadcrumb */}
          <nav className="mb-4 flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="/preview/admin-dashboard"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg className="me-2.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                  </svg>
                  <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white md:ms-2">
                    E-commerce
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Datatable</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Page title */}
          <h1 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Flowbite Datatable
          </h1>

          {/* KPI cards */}
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {kpiCards.map((card) => (
              <div
                key={card.label}
                className="items-center space-x-0 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex sm:space-x-4 md:p-6"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${card.iconBg} ${card.iconColor} sm:mb-0`}>
                  {card.icon}
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">{card.label}</p>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{card.value}</h2>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Datatable ── */}
      <div className="mx-auto w-full bg-white p-4 dark:bg-gray-900">

        {/* Toolbar */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-4 w-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search products…"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 sm:w-72"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M6 12h12m-9 6h6" />
              </svg>
              Filter
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4" />
              </svg>
              Export
            </button>
            <button
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white"
              style={{ backgroundColor: "#1A56DB" }}
            >
              <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
              Add product
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left text-sm text-gray-600 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    scope="col"
                    className="cursor-pointer select-none whitespace-nowrap px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => handleSort(col.key)}
                  >
                    <span className="flex items-center">
                      {col.label}
                      <SortIcon />
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-gray-400 dark:text-gray-500">
                    No products match your search.
                  </td>
                </tr>
              ) : (
                paginated.map((product) => (
                  <tr
                    key={product.name}
                    className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    {/* Name */}
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                      {product.name}
                    </td>

                    {/* Category badge */}
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className="rounded-sm bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {product.category}
                      </span>
                    </td>

                    {/* Brand */}
                    <td className="whitespace-nowrap px-4 py-3">{product.brand}</td>

                    {/* Price */}
                    <td className="whitespace-nowrap px-4 py-3">{product.price}</td>

                    {/* Stock */}
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className={`me-2 inline-block h-2.5 w-2.5 rounded-full ${product.stockDot}`} />
                      {product.stockCount}
                    </td>

                    {/* Total Sales */}
                    <td className="flex items-center whitespace-nowrap px-4 py-3">
                      <CartIcon />
                      {product.totalSales}
                    </td>

                    {/* Status */}
                    <td className="whitespace-nowrap px-4 py-3">
                      {product.status === "In Stock" ? (
                        <span className="rounded-sm bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                          In Stock
                        </span>
                      ) : (
                        <span className="rounded-sm bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                          Out of Stock
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {sorted.length === 0 ? 0 : (page - 1) * perPage + 1}
            </span>
            {" "}–{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {Math.min(page * perPage, sorted.length)}
            </span>
            {" "}of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">{sorted.length}</span>
            {" "}results
          </span>
          <div className="flex items-center gap-1">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <svg className="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
              </svg>
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`h-8 min-w-[2rem] rounded-lg border px-2 text-sm font-medium transition-colors ${
                  p === page
                    ? "border-blue-700 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                }`}
                style={p === page ? { backgroundColor: "#1A56DB", borderColor: "#1A56DB" } : undefined}
              >
                {p}
              </button>
            ))}
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              Next
              <svg className="ms-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </PreviewShell>
  );
}
