"use client";

import { PreviewShell } from "../PreviewShell";
import { Badge, Button, Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell } from "flowbite-react";
import { HiPlus, HiArrowUp, HiArrowDown, HiUsers, HiCurrencyDollar, HiExclamationCircle, HiClock } from "react-icons/hi";

const kpis = [
  { label: "Active Members",   value: "847",      delta: "+34 this month",  up: true,  icon: HiUsers,             iconBg: "bg-blue-50 dark:bg-blue-900/20",   iconColor: "text-blue-600 dark:text-blue-400" },
  { label: "Revenue MTD",      value: "$248,400", delta: "98.6% collection", up: true,  icon: HiCurrencyDollar,    iconBg: "bg-green-50 dark:bg-green-900/20", iconColor: "text-green-600 dark:text-green-400" },
  { label: "Overdue Invoices", value: "12",       delta: "Day 7 retries",   up: false, icon: HiExclamationCircle, iconBg: "bg-red-50 dark:bg-red-900/20",     iconColor: "text-red-600 dark:text-red-400" },
  { label: "Waitlist",         value: "34",       delta: "3 converted",     up: true,  icon: HiClock,             iconBg: "bg-amber-50 dark:bg-amber-900/20", iconColor: "text-amber-600 dark:text-amber-400" },
];

const invoices = [
  { member: "Garcia, Maria",    tier: "Diamond+", amount: "$4,660", due: "Jun 1",  status: "Paid",    billing: "Annual" },
  { member: "Chen, David",      tier: "Diamond",  amount: "$2,330", due: "Jun 15", status: "Pending", billing: "Semi-annual" },
  { member: "Williams, Sarah",  tier: "Gold",     amount: "$315",   due: "May 28", status: "Overdue", billing: "Monthly" },
  { member: "Patel, Rajan",     tier: "Diamond+", amount: "$4,660", due: "Jul 1",  status: "Paid",    billing: "Annual" },
  { member: "Torres, Elena",    tier: "Gold",     amount: "$3,780", due: "Jun 20", status: "Pending", billing: "Annual" },
];

const statusColor: Record<string, "success" | "failure" | "warning"> = {
  Paid: "success", Overdue: "failure", Pending: "warning",
};

const tiers = [
  { label: "Gold",     count: 312, amount: "$3,780/yr", color: "#f59e0b" },
  { label: "Diamond",  count: 389, amount: "$4,660/yr", color: "#38bdf8" },
  { label: "Diamond+", count: 146, amount: "$4,660/yr", color: "#a78bfa" },
];

export default function PIMCBackofficePage() {
  return (
    <PreviewShell title="Dashboard">
      <div className="p-6 space-y-6">

        {/* KPI cards */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {kpis.map((k) => (
            <div key={k.label} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 p-5">
              <div className="flex items-start justify-between mb-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">{k.label}</p>
                <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${k.iconBg}`}>
                  <k.icon className={`h-5 w-5 ${k.iconColor}`} />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{k.value}</p>
              <div className="flex items-center gap-1">
                {k.up ? <HiArrowUp className="h-3.5 w-3.5 text-green-500" /> : <HiArrowDown className="h-3.5 w-3.5 text-red-500" />}
                <span className={`text-xs font-medium ${k.up ? "text-green-600" : "text-red-600"}`}>{k.delta}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

          {/* Tier breakdown */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 p-5">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Membership tiers</h2>
            <div className="space-y-4">
              {tiers.map((t) => (
                <div key={t.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: t.color }} />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-300">{t.label}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{t.count}</span>
                      <span className="text-xs text-gray-500 ml-1.5">{t.amount}</span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ backgroundColor: t.color, width: `${(t.count / 847) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent invoices */}
          <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Recent invoices</h2>
              <Button color="default" size="xs">
                <HiPlus className="mr-1 h-3 w-3" />New invoice
              </Button>
            </div>
            <Table hoverable>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Member</TableHeadCell>
                  <TableHeadCell>Tier</TableHeadCell>
                  <TableHeadCell>Amount</TableHeadCell>
                  <TableHeadCell>Due</TableHeadCell>
                  <TableHeadCell>Status</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody className="divide-y divide-gray-100 dark:divide-gray-700">
                {invoices.map((inv) => (
                  <TableRow key={inv.member} className="bg-white dark:bg-gray-800">
                    <TableCell>
                      <p className="text-xs font-medium text-gray-900 dark:text-white">{inv.member}</p>
                      <p className="text-xs text-gray-500">{inv.billing}</p>
                    </TableCell>
                    <TableCell>
                      <Badge color={inv.tier === "Diamond+" ? "indigo" : inv.tier === "Diamond" ? "purple" : "warning"} size="xs">{inv.tier}</Badge>
                    </TableCell>
                    <TableCell className="text-xs font-medium text-gray-900 dark:text-white">{inv.amount}</TableCell>
                    <TableCell className="text-xs text-gray-600 dark:text-gray-400">{inv.due}</TableCell>
                    <TableCell>
                      <Badge color={statusColor[inv.status]} size="xs">{inv.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

        </div>
      </div>
    </PreviewShell>
  );
}
