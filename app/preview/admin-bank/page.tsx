"use client";

import { PreviewShell } from "../PreviewShell";
import dynamic from "next/dynamic";
import { HiChevronDown, HiArrowRight, HiArrowUp, HiArrowDown } from "react-icons/hi";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// ── ApexCharts configs (direct from charts.js source) ─────────────────────

const PRIMARY = "#1A56DB";

const expensesChartSeries = [
  {
    name: "Expenses",
    data: [2450, 3550, 2400, 4350, 2756, 3450],
    color: PRIMARY,
  },
];

const expensesChartOptions = {
  chart: {
    height: 520,
    maxWidth: "100%",
    type: "area" as const,
    fontFamily: "Inter, sans-serif",
    dropShadow: { enabled: false },
    toolbar: { show: false },
  },
  tooltip: { enabled: true, x: { show: true } },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: PRIMARY,
      gradientToColors: [PRIMARY],
    },
  },
  dataLabels: { enabled: false },
  stroke: { width: 6 },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: { left: 2, right: 2, top: 0 },
  },
  xaxis: {
    categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan"],
    labels: {
      show: true,
      trim: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
      offsetY: 4,
    },
    axisBorder: { show: false },
    axisTicks: { show: true },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      align: "right" as const,
      minWidth: 60,
      maxWidth: 60,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
      offsetX: -20,
      rotate: 0,
      formatter: (val: number) => {
        if (val >= 1000) return "$" + val / 1000 + "k";
        return "$" + val;
      },
    },
  },
};

// ── Static data ────────────────────────────────────────────────────────────

const savingsGoals = [
  { label: "New house savings",   amount: "$103,256", delta: "7%",   up: true,  pct: 75  },
  { label: "Wedding savings",     amount: "$32,131",  delta: "5.4%", up: false, pct: 45  },
  { label: "Vacation savings",    amount: "$12,657",  delta: "1.8%", up: true,  pct: 24  },
  { label: "New car savings",     amount: "$50,000",  delta: "90%",  up: false, pct: 100 },
];

const accounts = [
  {
    label: "Your main account (USD)",
    number: "USD395768402049576GFH598",
    icon: "dollar",
  },
  {
    label: "My spending account (USD)",
    number: "USD395768402049576GFH595",
    icon: "dollar",
  },
  {
    label: "My EUR account",
    number: "EU395768402049576GFH590",
    icon: "euro",
  },
  {
    label: "My savings account",
    number: "USD395768402049576GFH597",
    icon: "dollar",
  },
];

const bankTransactions = [
  {
    product: "Iphone 15 PRO Max",
    company: "Apple Inc.",
    price: "$899",
    dueDate: "30 Mar 2025",
    status: "Pending",
    iconType: "apple",
  },
  {
    product: "Nitro Basic for 12 months",
    company: "Discord Inc.",
    price: "$99",
    dueDate: "27 Mar 2025",
    status: "Completed",
    iconType: "discord",
  },
  {
    product: "Figma PRO yearly plan",
    company: "Figma Inc.",
    price: "$199",
    dueDate: "10 Mar 2025",
    status: "Completed",
    iconType: "figma",
  },
  {
    product: "Spotify Platinum",
    company: "Spotify Inc.",
    price: "$29",
    dueDate: "05 Mar 2025",
    status: "Failed",
    iconType: "spotify",
  },
  {
    product: "iMac 27 Inch",
    company: "Apple Inc.",
    price: "$1899",
    dueDate: "01 Feb 2025",
    status: "Completed",
    iconType: "apple",
  },
];

const txnBadge: Record<string, string> = {
  Completed: "rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",
  Failed:    "rounded-sm bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",
  Pending:   "rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Refunded:  "rounded-sm bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300",
};

// ── Inline icon components ─────────────────────────────────────────────────

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.1227 18.1534C20.7996 18.9 20.417 19.5872 19.9738 20.2191C19.3697 21.0804 18.8751 21.6766 18.4938 22.0077C17.9029 22.5512 17.2698 22.8295 16.5917 22.8453C16.105 22.8453 15.518 22.7068 14.8348 22.4259C14.1492 22.1462 13.5192 22.0077 12.9432 22.0077C12.3391 22.0077 11.6911 22.1462 10.9981 22.4259C10.304 22.7068 9.74486 22.8532 9.31735 22.8678C8.66718 22.8955 8.01913 22.6092 7.37226 22.0077C6.95939 21.6476 6.44297 21.0303 5.82433 20.1557C5.16057 19.2218 4.61488 18.1389 4.18737 16.9042C3.72952 15.5707 3.5 14.2793 3.5 13.0291C3.5 11.597 3.80945 10.3618 4.42928 9.32671C4.91642 8.4953 5.56447 7.83946 6.37557 7.35799C7.18666 6.87653 8.06305 6.63119 9.00684 6.61549C9.52326 6.61549 10.2005 6.77523 11.042 7.08917C11.8812 7.40416 12.4201 7.5639 12.6563 7.5639C12.8329 7.5639 13.4315 7.37712 14.4463 7.00475C15.4059 6.65941 16.2158 6.51643 16.8793 6.57275C18.6772 6.71785 20.0279 7.42659 20.9262 8.70345C19.3183 9.67771 18.5229 11.0423 18.5387 12.7928C18.5532 14.1564 19.0479 15.291 20.02 16.1919C20.4606 16.6101 20.9526 16.9333 21.5 17.1628C21.3813 17.5071 21.256 17.8368 21.1227 18.1534ZM16.9993 1.92751C16.9993 2.99624 16.6089 3.9941 15.8306 4.91771C14.8915 6.01571 13.7555 6.65018 12.5236 6.55006C12.5079 6.42185 12.4988 6.28691 12.4988 6.14511C12.4988 5.11914 12.9454 4.02114 13.7386 3.12338C14.1346 2.66883 14.6382 2.29088 15.2489 1.98938C15.8583 1.69238 16.4348 1.52813 16.9769 1.5C16.9927 1.64287 16.9993 1.78575 16.9993 1.9275V1.92751Z" fill="currentColor" />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.1239 4.89005C18.7217 4.24665 17.2181 3.77263 15.6459 3.50114C15.6173 3.4959 15.5887 3.50899 15.5739 3.53518C15.3805 3.87913 15.1663 4.32784 15.0163 4.68052C13.3254 4.42736 11.6431 4.42736 9.98679 4.68052C9.83676 4.32 9.61478 3.87913 9.42053 3.53518C9.40578 3.50987 9.37718 3.49677 9.34855 3.50114C7.77725 3.77176 6.2736 4.24579 4.87052 4.89005C4.85838 4.89528 4.84797 4.90402 4.84106 4.91536C1.98894 9.17636 1.20763 13.3326 1.59092 17.4374C1.59265 17.4574 1.60392 17.4766 1.61953 17.4889C3.50127 18.8708 5.32406 19.7097 7.11301 20.2658C7.14164 20.2745 7.17197 20.264 7.19019 20.2405C7.61337 19.6626 7.99059 19.0532 8.31402 18.4125C8.33311 18.3749 8.31489 18.3304 8.27588 18.3156C7.67754 18.0886 7.1078 17.8119 6.55975 17.4976C6.5164 17.4723 6.51293 17.4103 6.55281 17.3806C6.66814 17.2942 6.7835 17.2043 6.89363 17.1135C6.91355 17.0969 6.94131 17.0934 6.96474 17.1039C10.5652 18.7477 14.4631 18.7477 18.021 17.1039C18.0445 17.0925 18.0722 17.096 18.093 17.1126C18.2032 17.2034 18.3185 17.2942 18.4347 17.3806C18.4746 17.4103 18.472 17.4723 18.4286 17.4976C17.8806 17.818 17.3108 18.0886 16.7116 18.3147C16.6726 18.3295 16.6553 18.3749 16.6744 18.4125C17.0047 19.0523 17.382 19.6617 17.7973 20.2396C17.8147 20.264 17.8459 20.2745 17.8745 20.2658C19.6721 19.7097 21.4949 18.8708 23.3766 17.4889C23.3931 17.4766 23.4035 17.4583 23.4053 17.4382C23.864 12.6927 22.6369 8.57052 20.1525 4.91623C20.1465 4.90402 20.1361 4.89528 20.1239 4.89005ZM8.85169 14.938C7.76771 14.938 6.87454 13.9428 6.87454 12.7207C6.87454 11.4985 7.75039 10.5033 8.85169 10.5033C9.96163 10.5033 10.8462 11.5072 10.8288 12.7207C10.8288 13.9428 9.95296 14.938 8.85169 14.938ZM16.1619 14.938C15.0779 14.938 14.1847 13.9428 14.1847 12.7207C14.1847 11.4985 15.0606 10.5033 16.1619 10.5033C17.2718 10.5033 18.1563 11.5072 18.139 12.7207C18.139 13.9428 17.2718 14.938 16.1619 14.938Z" fill="#5865F2" />
    </svg>
  );
}

function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.75006 23.5C10.8201 23.5 12.5001 21.82 12.5001 19.75V15.9999H8.75006C6.68004 15.9999 5 17.68 5 19.75C5 21.82 6.68004 23.5 8.75006 23.5Z" fill="#0ACF83" />
      <path d="M5 12.25C5 10.18 6.68004 8.49996 8.75006 8.49996H12.5001V15.9999H8.75006C6.68004 16 5 14.32 5 12.25Z" fill="#A259FF" />
      <path d="M5 4.75003C5 2.68003 6.68004 1 8.75006 1H12.5001V8.49996H8.75006C6.68004 8.49996 5 6.82003 5 4.75003Z" fill="#F24E1E" />
      <path d="M12.5001 1H16.2499C18.32 1 20 2.68003 20 4.75003C20 6.82003 18.32 8.49997 16.2499 8.49997L12.5001 8.49996V1Z" fill="#FF7262" />
      <path d="M20 12.25C20 14.32 18.32 16 16.2499 16C14.1799 16 12.4999 14.32 12.4999 12.25C12.4999 10.18 14.1799 8.49997 16.2499 8.49997C18.32 8.49997 20 10.18 20 12.25Z" fill="#1ABCFE" />
    </svg>
  );
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 1C6.425 1 1.5 5.9245 1.5 12C1.5 18.0755 6.425 23 12.5 23C18.575 23 23.5 18.0755 23.5 12C23.5 5.9245 18.575 1 12.5 1ZM17.8667 16.8572C17.69 17.17 17.365 17.346 17.03 17.346C16.8733 17.346 16.7117 17.3068 16.5633 17.2243C15.19 16.4543 13.6933 15.9827 12.1117 15.8225C10.5267 15.6637 8.96167 15.8245 7.45833 16.3045C6.95667 16.4647 6.41667 16.1875 6.25667 15.685C6.09501 15.1817 6.37333 14.6435 6.87667 14.4825C8.63 13.9223 10.4583 13.7318 12.305 13.9195C14.1483 14.1072 15.895 14.6572 17.4983 15.5558C17.96 15.8128 18.125 16.3958 17.8667 16.8572ZM19.1833 13.516C19.0133 13.8432 18.68 14.0308 18.335 14.0308C18.185 14.0308 18.035 13.9965 17.8933 13.9223C16.205 13.043 14.3817 12.4985 12.47 12.3045C10.5433 12.1073 8.635 12.2792 6.795 12.8098C6.28667 12.9542 5.75667 12.6635 5.61167 12.1553C5.46501 11.648 5.75833 11.118 6.26499 10.9715C8.34166 10.3727 10.495 10.1808 12.6633 10.4008C14.8167 10.6202 16.8733 11.2335 18.7783 12.2262C19.245 12.4703 19.4283 13.0477 19.1833 13.516ZM19.66 10.7363C19.5167 10.7363 19.3717 10.704 19.2333 10.636C17.23 9.637 15.075 9.01483 12.8267 8.78667C10.575 8.55633 8.335 8.73433 6.16667 9.31333C5.65667 9.44867 5.13333 9.14617 4.99666 8.63533C4.86 8.12517 5.16334 7.60067 5.67501 7.4645C8.06668 6.82583 10.54 6.63133 13.0217 6.88367C15.5 7.1345 17.8767 7.82133 20.0867 8.9235C20.56 9.15917 20.7517 9.734 20.5167 10.2063C20.35 10.5425 20.0117 10.7363 19.66 10.7363Z" fill="#1ED760" />
    </svg>
  );
}

function getTransactionIcon(type: string) {
  const cls = "h-6 w-6 text-gray-900 dark:text-white";
  switch (type) {
    case "discord": return <DiscordIcon className="h-6 w-6" />;
    case "figma":   return <FigmaIcon className="h-6 w-6" />;
    case "spotify": return <SpotifyIcon className="h-6 w-6" />;
    default:        return <AppleIcon className={cls} />;
  }
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function AdminBankPage() {
  return (
    <PreviewShell variant="admin" title="Bank Dashboard">
      <div className="mx-auto w-full px-4 pt-4 lg:max-w-7xl">

        {/* 1 ── Top widget — balance summary + action buttons */}
        <div className="mb-4 items-center justify-between rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6 xl:flex">
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-6 lg:grid-cols-4 lg:gap-8 xl:mb-0">

            {/* Total balance */}
            <div className="flex items-center">
              <div className="me-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd" />
                  <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-gray-500 dark:text-gray-400">Total balance</h3>
                <p className="text-xl font-bold leading-none text-gray-900 dark:text-white">$857,967</p>
              </div>
            </div>

            {/* Expenses */}
            <div className="flex items-center">
              <div className="me-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-gray-500 dark:text-gray-400">Expenses</h3>
                <p className="text-xl font-bold leading-none text-gray-900 dark:text-white">-$7,534</p>
              </div>
            </div>

            {/* Investment funds */}
            <div className="flex items-center">
              <div className="me-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-gray-500 dark:text-gray-400">Investment funds</h3>
                <p className="text-xl font-bold leading-none text-gray-900 dark:text-white">$65,000</p>
              </div>
            </div>

            {/* Savings */}
            <div className="flex items-center">
              <div className="me-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-gray-500 dark:text-gray-400">Savings</h3>
                <p className="text-xl font-bold leading-none text-gray-900 dark:text-white">$20,449</p>
              </div>
            </div>

          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <button type="button" className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:w-auto">
              <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
              </svg>
              Add money
            </button>
            <button type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto">
              <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M7 6c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M2 11c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd" />
                <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
              </svg>
              New payment
            </button>
          </div>
        </div>

        {/* 2 ── Revenue & Expenses chart */}
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="flex flex-col space-y-4 pb-4 md:flex-row md:items-start md:justify-between md:space-y-0">
              <div>
                <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Revenue and expenses</h2>
                <p className="text-gray-500 dark:text-gray-400">You can see the movements of your money here</p>
              </div>
              <div className="flex items-center">
                <ul className="flex flex-wrap text-center text-sm font-medium text-gray-900 dark:text-gray-400">
                  <li className="mr-2 lg:mr-4">
                    <button type="button" className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Today</button>
                  </li>
                  <li className="mr-2 lg:mr-4">
                    <button type="button" className="inline-block rounded-lg bg-primary-700 px-3 py-2 text-white dark:bg-primary-600">Weekly</button>
                  </li>
                  <li>
                    <button type="button" className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Monthly</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col py-4 md:flex-row md:items-center md:justify-between md:py-0">
              <ul className="hidden flex-wrap space-x-5 text-center text-sm font-medium text-gray-500 dark:text-gray-400 md:flex">
                {["Expenses", "Income", "Savings", "Deposits"].map((tab, i) => (
                  <li key={tab}>
                    <button type="button" className={`group inline-flex items-center pb-3 pt-4 ${i === 1 ? "border-b border-primary-700 text-primary-700 dark:border-primary-500 dark:text-primary-500" : "border-b border-transparent hover:border-gray-300 hover:text-gray-900 dark:hover:text-white"}`}>
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Chart */}
          <ReactApexChart options={expensesChartOptions} series={expensesChartSeries} type="area" height={320} />

          <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700 sm:pt-6">
            <div>
              <button type="button" className="inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Last 7 days
                <HiChevronDown className="ms-1 h-4 w-4" />
              </button>
            </div>
            <div className="shrink-0">
              <a href="#" className="inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm">
                Users Report
                <HiArrowRight className="ms-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 ── Savings goals — 4 cards */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {savingsGoals.map((g) => (
            <div key={g.label} className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="leading-tight text-gray-500 dark:text-gray-400">{g.label}</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{g.amount}</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className={`mr-1.5 flex items-center text-sm font-medium sm:text-base ${g.up ? "text-green-500 dark:text-green-400" : "text-red-600 dark:text-red-500"}`}>
                    {g.up
                      ? <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" /></svg>
                      : <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14-4-4m4 4 4-4" /></svg>
                    }
                    {g.delta}
                  </span>
                  vs last year
                </p>
              </div>
              <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-2.5 rounded-full bg-primary-700 dark:bg-primary-600" style={{ width: `${g.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* 4 ── My accounts */}
        <div className="my-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white md:mb-6">My accounts</h2>
          <ul className="space-y-4">
            {accounts.map((acct, i) => (
              <li key={i} className={`${i < accounts.length - 1 ? "border-b border-gray-200 pb-4 dark:border-gray-700" : "pb-4"}`}>
                <div className="items-center justify-between md:flex">
                  <div className="items-center sm:flex">
                    <div className="mb-4 me-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 sm:mb-0 md:hidden lg:flex">
                      {acct.icon === "euro" ? (
                        <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 10h9.231M6 14h9.231M18 5.086A5.95 5.95 0 0 0 14.615 4c-3.738 0-6.769 3.582-6.769 8s3.031 8 6.769 8A5.94 5.94 0 0 0 18 18.916" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="mb-2 text-gray-500 dark:text-gray-400">{acct.label}</h3>
                      <p className="text-lg font-bold leading-none text-gray-900 dark:text-white">{acct.number}</p>
                    </div>
                  </div>
                  <div className="mt-4 items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">
                    <button type="button" className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:w-auto">
                      Transactions
                    </button>
                    <button type="button" className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:w-auto">
                      Share IBAN
                    </button>
                    <button type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 md:w-auto">
                      <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M7 6c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M2 11c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd" />
                        <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                      </svg>
                      New payment
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-6">
            <button type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto">
              <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
              </svg>
              Add new account
            </button>
          </div>
        </div>

        {/* 5 ── Transactions table + Money Transfer form */}
        <div className="grid grid-cols-1 gap-y-4 lg:mb-4 lg:grid-cols-2 lg:gap-x-4 xl:grid-cols-3">

          {/* Transactions table (col-span-2) */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6 xl:col-span-2">
            <h2 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">Transactions</h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400 md:mb-6">View your transactions, gaining a comprehensive overview of all financial activities within your account.</p>
            <div className="mb-4 overflow-x-auto md:mb-6">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="min-w-64 px-4 py-3 font-semibold">Product</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Price</th>
                    <th scope="col" className="min-w-28 px-4 py-3 font-semibold">Due date</th>
                    <th scope="col" className="min-w-24 px-4 py-3 font-semibold">Status</th>
                    <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody>
                  {bankTransactions.map((t, i) => (
                    <tr key={i} className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
                      <td className="w-4 px-4 py-3">
                        <div className="flex items-center space-x-2">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                            {getTransactionIcon(t.iconType)}
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white">{t.product}</h5>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{t.company}</span>
                          </div>
                        </div>
                      </td>
                      <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{t.price}</th>
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">{t.dueDate}</td>
                      <td className="whitespace-nowrap px-4 py-3">
                        <span className={txnBadge[t.status]}>{t.status}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <a href="#" className="text-xs font-medium text-primary-700 hover:underline dark:text-primary-400">Details</a>
                          <button className="text-xs font-medium text-red-600 hover:underline dark:text-red-400">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:w-auto">
              View all transactions
              <svg className="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </button>
          </div>

          {/* Money Transfer form */}
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6">
            <h2 className="mb-4 text-xl font-bold leading-none text-gray-900 dark:text-white md:mb-6">Money transfer</h2>
            <form>
              {/* Card number */}
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Card number:</label>
              <div className="mb-2 flex w-full -space-x-1">
                <button type="button" className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                  Credit card
                  <HiChevronDown className="ms-1 h-4 w-4" />
                </button>
                <div className="relative w-full">
                  <input
                    type="number"
                    className="w-full rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 ps-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                    placeholder="4242 4242 4242 4242"
                  />
                  <div className="pointer-events-none absolute inset-y-0 end-0 top-0 flex items-center pe-3.5">
                    <svg fill="none" className="h-6 text-[#1434CB] dark:text-white" viewBox="0 0 36 21">
                      <path fill="currentColor" d="M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z" />
                    </svg>
                  </div>
                </div>
              </div>

              <button type="button" className="mb-4 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7 7V5" />
                </svg>
                Add new card
              </button>

              {/* Country & state */}
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Country &amp; state</label>
              <div className="mb-4 flex -space-x-1">
                <button type="button" className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                  USA <HiChevronDown className="ms-1 h-4 w-4" />
                </button>
                <select className="block w-full rounded-e-lg border border-s-2 border-gray-300 border-s-gray-100 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700 dark:bg-gray-700 dark:text-white">
                  <option>Choose a state</option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                  <option value="WH">Washington</option>
                  <option value="FL">Florida</option>
                  <option value="VG">Virginia</option>
                  <option value="GE">Georgia</option>
                  <option value="MI">Michigan</option>
                </select>
              </div>

              {/* Amount */}
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Amount to send</label>
              <div className="flex -space-x-1">
                <button type="button" className="z-10 inline-flex w-[106px] shrink-0 items-center justify-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
                  USD <HiChevronDown className="ms-1 h-4 w-4" />
                </button>
                <div className="relative w-full">
                  <input
                    type="number"
                    className="z-20 block w-full rounded-e-lg border border-s-2 border-gray-300 border-s-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter amount"
                    defaultValue={1000}
                  />
                </div>
              </div>
              <p className="mt-2 block text-sm text-gray-500 dark:text-gray-400">1 USD ≈ 0,94 EUR</p>

              {/* Range slider */}
              <div className="relative mb-12 mt-4">
                <label className="sr-only">Amount range</label>
                <input type="range" defaultValue={1000} min={100} max={1500} className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700" />
                <span className="absolute -bottom-6 start-0 text-sm text-gray-500 dark:text-gray-400">Min ($100)</span>
                <span className="absolute -bottom-6 start-1/3 -translate-x-1/2 text-sm text-gray-500 dark:text-gray-400">$500</span>
                <span className="absolute -bottom-6 start-2/3 -translate-x-1/2 text-sm text-gray-500 dark:text-gray-400">$1000</span>
                <span className="absolute -bottom-6 end-0 text-sm text-gray-500 dark:text-gray-400">Max ($1500)</span>
              </div>

              <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                <button type="button" className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  Preview transfer
                </button>
                <button type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Make transfer
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 6 ── Footer */}
        <footer className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:p-6 xl:p-8">
          <div className="xl:flex xl:items-center xl:justify-between">
            <ul className="mb-4 flex flex-wrap items-center justify-center space-x-6 lg:mb-0">
              {["About", "Become an Author", "Pricing", "Help", "Terms & Conditions", "Cookies", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="inline-block text-gray-900 hover:underline dark:text-white">{link}</a>
                </li>
              ))}
            </ul>
            <button type="button" className="mx-auto flex items-center rounded-full p-1.5 text-sm font-medium text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-500 xl:mr-0">
              English (US)
              <HiChevronDown className="mx-1.5 h-2.5 w-2.5" />
            </button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 xl:mt-6">
            Copyright &copy; 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline" target="_blank" rel="noreferrer">Flowbite</a>. All rights reserved.
          </p>
        </footer>

      </div>
    </PreviewShell>
  );
}
