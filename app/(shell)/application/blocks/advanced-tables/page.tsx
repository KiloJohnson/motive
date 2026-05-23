"use client";

import { useState } from "react";
import {
  Badge,
  Button,
  Checkbox,
  Dropdown,
  DropdownItem,
  DropdownDivider,
  Label,
  Pagination,
  Select,
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import {
  HiSearch,
  HiPlus,
  HiDownload,
  HiFilter,
  HiDotsVertical,
  HiChevronDown,
  HiChevronUp,
  HiArrowUp,
  HiArrowDown,
} from "react-icons/hi";

// ---------------------------------------------------------------------------
// BlockPreview
// ---------------------------------------------------------------------------
function BlockPreview({
  children,
  label,
  code,
}: {
  children: React.ReactNode;
  label: string;
  code: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
        {label}
      </h2>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
        <div className="bg-white dark:bg-gray-800 px-5 py-4">{children}</div>
      </div>
      <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">
        {code}
      </pre>
    </div>
  );
}

// ---------------------------------------------------------------------------
// DotsMenu — inline row action dropdown
// ---------------------------------------------------------------------------
function DotsMenu() {
  return (
    <Dropdown
      inline
      label={
        <>
          <span className="sr-only">Row actions</span>
          <HiDotsVertical className="h-5 w-5 text-gray-400 dark:text-gray-500" />
        </>
      }
      arrowIcon={false}
    >
      <DropdownItem>View</DropdownItem>
      <DropdownItem>Edit</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Delete</DropdownItem>
    </Dropdown>
  );
}

// ---------------------------------------------------------------------------
// StatusDot
// ---------------------------------------------------------------------------
function StatusDot({ status }: { status: "Active" | "Pending" | "Inactive" }) {
  const colors: Record<string, string> = {
    Active: "bg-green-500",
    Pending: "bg-yellow-400",
    Inactive: "bg-red-500",
  };
  return (
    <div className="flex items-center gap-2">
      <div className={`h-2.5 w-2.5 rounded-full ${colors[status]}`} />
      <span className="text-sm font-medium text-gray-900 dark:text-white">
        {status}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SortIcon — visual affordance for sortable column headers
// ---------------------------------------------------------------------------
function SortIcon({ direction }: { direction?: "asc" | "desc" | null }) {
  return (
    <span className="ml-1 inline-flex flex-col leading-none">
      <HiArrowUp
        className={`h-2.5 w-2.5 ${
          direction === "asc"
            ? "text-gray-900 dark:text-white"
            : "text-gray-400 dark:text-gray-600"
        }`}
      />
      <HiArrowDown
        className={`h-2.5 w-2.5 ${
          direction === "desc"
            ? "text-gray-900 dark:text-white"
            : "text-gray-400 dark:text-gray-600"
        }`}
      />
    </span>
  );
}

// ---------------------------------------------------------------------------
// 1. Default — search + primary action + row actions
// ---------------------------------------------------------------------------
function DefaultAdvancedTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const members = [
    { id: 1, name: "Eleanor Voss",       plan: "Gold",      status: "Active",   joined: "Jan 12, 2024" },
    { id: 2, name: "Marcus Reid",        plan: "Diamond",   status: "Active",   joined: "Feb 3, 2024"  },
    { id: 3, name: "Priya Nair",         plan: "Diamond+",  status: "Pending",  joined: "Mar 7, 2024"  },
    { id: 4, name: "James Okafor",       plan: "Gold",      status: "Inactive", joined: "Apr 19, 2024" },
    { id: 5, name: "Sofia Andersson",    plan: "Diamond",   status: "Active",   joined: "May 2, 2024"  },
  ];

  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-100 dark:border-gray-700">
        <TextInput
          placeholder="Search members..."
          icon={HiSearch}
          sizing="sm"
          className="w-full sm:w-64"
        />
        <Button color="default" size="sm">
          <HiPlus className="mr-1.5 h-3.5 w-3.5" />
          New member
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableHeadCell className="w-4 px-4 py-3">
              <Checkbox id="check-all" name="check-all" />
              <Label htmlFor="check-all" className="sr-only">Select all</Label>
            </TableHeadCell>
            <TableHeadCell className="px-4 py-3">Member</TableHeadCell>
            <TableHeadCell className="px-4 py-3">Plan</TableHeadCell>
            <TableHeadCell className="px-4 py-3">Status</TableHeadCell>
            <TableHeadCell className="px-4 py-3">Joined</TableHeadCell>
            <TableHeadCell className="px-4 py-3">
              <span className="sr-only">Actions</span>
            </TableHeadCell>
          </TableHead>
          <TableBody>
            {members.map((m) => (
              <TableRow
                key={m.id}
                className="border-b hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <TableCell className="w-4 px-4 py-3">
                  <Checkbox id={`chk-${m.id}`} name={`chk-${m.id}`} />
                  <Label htmlFor={`chk-${m.id}`} className="sr-only">
                    Select {m.name}
                  </Label>
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                  {m.name}
                </TableCell>
                <TableCell className="px-4 py-3">
                  <Badge
                    color={
                      m.plan === "Diamond+"
                        ? "purple"
                        : m.plan === "Diamond"
                        ? "indigo"
                        : "gray"
                    }
                    className="w-fit"
                  >
                    {m.plan}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <StatusDot status={m.status as "Active" | "Pending" | "Inactive"} />
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  {m.joined}
                </TableCell>
                <TableCell className="flex items-center justify-end px-4 py-3">
                  <DotsMenu />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Footer */}
      <nav
        className="flex flex-col items-start justify-between gap-3 px-5 py-4 md:flex-row md:items-center"
        aria-label="Table navigation"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">1–5</span> of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">248</span>
        </span>
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={50}
          showIcons
          nextLabel=""
          previousLabel=""
        />
      </nav>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 2. With bulk action toolbar + filter selects
// ---------------------------------------------------------------------------
function BulkActionTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const invoices = [
    { id: 101, patient: "Diane Holloway",  amount: "$1,200", status: "Paid",     date: "May 1, 2025"  },
    { id: 102, patient: "Carlos Vega",     amount: "$450",   status: "Overdue",  date: "Apr 15, 2025" },
    { id: 103, patient: "Taryn Osei",      amount: "$890",   status: "Pending",  date: "May 5, 2025"  },
    { id: 104, patient: "Wei Zhang",       amount: "$2,100", status: "Paid",     date: "Apr 28, 2025" },
    { id: 105, patient: "Amara Diallo",    amount: "$330",   status: "Cancelled",date: "Mar 30, 2025" },
  ];

  const toggle = (id: number) =>
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const toggleAll = () =>
    setSelectedIds(
      selectedIds.length === invoices.length ? [] : invoices.map((i) => i.id)
    );

  const statusColor: Record<string, string> = {
    Paid: "success",
    Overdue: "failure",
    Pending: "warning",
    Cancelled: "gray",
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-700 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <TextInput
            placeholder="Search invoices..."
            icon={HiSearch}
            sizing="sm"
            className="w-56"
          />
          <Select sizing="sm" className="w-36">
            <option value="">All statuses</option>
            <option>Paid</option>
            <option>Overdue</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          {selectedIds.length > 0 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {selectedIds.length} selected
            </span>
          )}
          <Button color="alternative" size="sm">
            <HiDownload className="mr-1.5 h-3.5 w-3.5" />
            Export
          </Button>
          <Dropdown label="Bulk actions" color="alternative" size="sm">
            <DropdownItem>Mark as paid</DropdownItem>
            <DropdownItem>Send reminder</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Delete selected</DropdownItem>
          </Dropdown>
          <Button color="default" size="sm">
            <HiPlus className="mr-1.5 h-3.5 w-3.5" />
            New invoice
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableHeadCell className="w-4 px-4 py-3">
              <Checkbox
                id="bulk-all"
                name="bulk-all"
                checked={selectedIds.length === invoices.length}
                onChange={toggleAll}
              />
              <Label htmlFor="bulk-all" className="sr-only">Select all</Label>
            </TableHeadCell>
            <TableHeadCell className="px-4 py-3">Invoice #</TableHeadCell>
            <TableHeadCell className="px-4 py-3">Patient</TableHeadCell>
            <TableHeadCell className="px-4 py-3">Amount</TableHeadCell>
            <TableHeadCell className="px-4 py-3">Status</TableHeadCell>
            <TableHeadCell className="px-4 py-3">Date</TableHeadCell>
            <TableHeadCell className="px-4 py-3">
              <span className="sr-only">Actions</span>
            </TableHeadCell>
          </TableHead>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow
                key={inv.id}
                className="border-b hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <TableCell className="w-4 px-4 py-3">
                  <Checkbox
                    id={`bulk-${inv.id}`}
                    name={`bulk-${inv.id}`}
                    checked={selectedIds.includes(inv.id)}
                    onChange={() => toggle(inv.id)}
                  />
                  <Label htmlFor={`bulk-${inv.id}`} className="sr-only">
                    Select invoice {inv.id}
                  </Label>
                </TableCell>
                <TableCell className="px-4 py-3 font-mono text-sm text-gray-900 dark:text-white">
                  #{inv.id}
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                  {inv.patient}
                </TableCell>
                <TableCell className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                  {inv.amount}
                </TableCell>
                <TableCell className="px-4 py-3">
                  <Badge color={statusColor[inv.status] as "success" | "failure" | "warning" | "gray"} className="w-fit">
                    {inv.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  {inv.date}
                </TableCell>
                <TableCell className="flex items-center justify-end px-4 py-3">
                  <DotsMenu />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Footer */}
      <nav
        className="flex flex-col items-start justify-between gap-3 px-5 py-4 md:flex-row md:items-center"
        aria-label="Table navigation"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">1–5</span> of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">1,024</span>
        </span>
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={205}
          showIcons
          nextLabel=""
          previousLabel=""
        />
      </nav>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 3. Expandable rows
// ---------------------------------------------------------------------------
function ExpandableRowsTable() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const patients = [
    {
      id: 1,
      name: "Robert Fenn",
      plan: "PIMC Gold",
      provider: "Dr. Yolanda Cruz",
      nextAppt: "Jun 10, 2025",
      status: "Active" as const,
      notes:
        "Patient enrolled in remote monitoring program. Last health assessment completed May 14. No flagged concerns.",
      coverage: "Cardiology, Primary Care, Dermatology",
      location: "La Jolla Campus",
      since: "Jan 2022",
    },
    {
      id: 2,
      name: "Ingrid Matsuda",
      plan: "PIMC Diamond",
      provider: "Dr. Samuel Park",
      nextAppt: "Jun 4, 2025",
      status: "Active" as const,
      notes:
        "Upcoming annual physical scheduled. Prescription renewal request pending review.",
      coverage: "Full Spectrum + Behavioral Health",
      location: "Encinitas Campus",
      since: "Mar 2019",
    },
    {
      id: 3,
      name: "Devon Achebe",
      plan: "PIMC Gold",
      provider: "Dr. Reina Walsh",
      nextAppt: "Unscheduled",
      status: "Pending" as const,
      notes:
        "Waiting on insurance verification. Enrollment pending secondary review.",
      coverage: "Primary Care, Urgent Care",
      location: "Hillcrest Campus",
      since: "May 2025",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <h5 className="font-semibold text-gray-900 dark:text-white">
            PIMC Members
          </h5>
          <span className="text-sm text-gray-400 dark:text-gray-500">
            {patients.length} results
          </span>
        </div>
        <Button color="default" size="sm">
          <HiPlus className="mr-1.5 h-3.5 w-3.5" />
          Add member
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableHeadCell className="w-8 px-4 py-3">
              <span className="sr-only">Expand</span>
            </TableHeadCell>
            <TableHeadCell className="px-4 py-3">Member</TableHeadCell>
            <TableHeadCell className="px-4 py-3">Plan</TableHeadCell>
            <TableHeadCell className="px-4 py-3">Provider</TableHeadCell>
            <TableHeadCell className="px-4 py-3">Next Appt</TableHeadCell>
            <TableHeadCell className="px-4 py-3">Status</TableHeadCell>
            <TableHeadCell className="px-4 py-3">
              <span className="sr-only">Actions</span>
            </TableHeadCell>
          </TableHead>
          <TableBody>
            {patients.map((p) => (
              <>
                {/* Summary row */}
                <TableRow
                  key={`row-${p.id}`}
                  className="cursor-pointer border-b hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition"
                  onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                >
                  <TableCell className="w-8 px-4 py-3 text-gray-400 dark:text-gray-500">
                    {expanded === p.id ? (
                      <HiChevronUp className="h-5 w-5" />
                    ) : (
                      <HiChevronDown className="h-5 w-5" />
                    )}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    {p.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                    {p.plan}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                    {p.provider}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                    {p.nextAppt}
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <StatusDot status={p.status} />
                  </TableCell>
                  <TableCell
                    className="flex items-center justify-end px-4 py-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <DotsMenu />
                  </TableCell>
                </TableRow>

                {/* Expanded detail row */}
                {expanded === p.id && (
                  <TableRow key={`detail-${p.id}`} className="bg-gray-50 dark:bg-gray-900">
                    <TableCell
                      colSpan={7}
                      className="px-6 py-4 border-b border-gray-200 dark:border-gray-700"
                    >
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1">
                            Coverage
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {p.coverage}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1">
                            Home Campus
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {p.location}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1">
                            Member Since
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {p.since}
                          </p>
                        </div>
                        <div className="sm:col-span-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1">
                            Care Notes
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {p.notes}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-3">
                        <Button size="sm">Edit member</Button>
                        <Button color="alternative" size="sm">
                          View chart
                        </Button>
                        <Button color="failure" size="sm">
                          Deactivate
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 4. Sortable columns
// ---------------------------------------------------------------------------
type SortKey = "name" | "plan" | "amount" | "date";
type SortDir = "asc" | "desc";

function SortableTable() {
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const raw = [
    { id: 1, name: "Eleanor Voss",     plan: "Gold",     amount: 1200, date: "2025-01-12" },
    { id: 2, name: "Marcus Reid",      plan: "Diamond",  amount: 3400, date: "2025-02-03" },
    { id: 3, name: "Priya Nair",       plan: "Diamond+", amount: 5800, date: "2024-11-07" },
    { id: 4, name: "James Okafor",     plan: "Gold",     amount: 900,  date: "2025-03-19" },
    { id: 5, name: "Sofia Andersson",  plan: "Diamond",  amount: 2200, date: "2025-04-02" },
    { id: 6, name: "Devon Achebe",     plan: "Gold",     amount: 750,  date: "2025-05-14" },
  ];

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sorted = [...raw].sort((a, b) => {
    const av = a[sortKey];
    const bv = b[sortKey];
    const cmp =
      typeof av === "number"
        ? av - (bv as number)
        : String(av).localeCompare(String(bv));
    return sortDir === "asc" ? cmp : -cmp;
  });

  const dir = (k: SortKey) => (sortKey === k ? sortDir : null);

  const colHead = (key: SortKey, label: string) => (
    <TableHeadCell
      className="px-4 py-3 cursor-pointer select-none"
      onClick={() => handleSort(key)}
    >
      <span className="flex items-center">
        {label}
        <SortIcon direction={dir(key)} />
      </span>
    </TableHeadCell>
  );

  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Click any column header to sort. Click again to reverse.
        </p>
        <Button color="alternative" size="sm">
          <HiDownload className="mr-1.5 h-3.5 w-3.5" />
          Export
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableHeadCell className="px-4 py-3">#</TableHeadCell>
            {colHead("name", "Member")}
            {colHead("plan", "Plan")}
            {colHead("amount", "Annual Spend")}
            {colHead("date", "Enrolled")}
          </TableHead>
          <TableBody>
            {sorted.map((r) => (
              <TableRow
                key={r.id}
                className="border-b hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <TableCell className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  {r.id}
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                  {r.name}
                </TableCell>
                <TableCell className="px-4 py-3">
                  <Badge
                    color={
                      r.plan === "Diamond+"
                        ? "purple"
                        : r.plan === "Diamond"
                        ? "indigo"
                        : "gray"
                    }
                    className="w-fit"
                  >
                    {r.plan}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                  ${r.amount.toLocaleString()}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  {r.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 5. User management — toggle + status badges
// ---------------------------------------------------------------------------
function UserManagementTable() {
  const [enabled, setEnabled] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: true,
    4: true,
  });

  const users = [
    { id: 1, name: "Yasmine Cole",   email: "y.cole@scripps.org",    role: "Administrator", lastLogin: "May 20, 2025" },
    { id: 2, name: "Brandon Holt",   email: "b.holt@scripps.org",    role: "Viewer",        lastLogin: "Apr 12, 2025" },
    { id: 3, name: "Fatima Osei",    email: "f.osei@scripps.org",    role: "Editor",        lastLogin: "May 21, 2025" },
    { id: 4, name: "Leo Kirchner",   email: "l.kirchner@scripps.org",role: "Moderator",     lastLogin: "May 18, 2025" },
  ];

  const roleColor: Record<string, string> = {
    Administrator: "failure",
    Editor: "success",
    Moderator: "warning",
    Viewer: "gray",
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            All users:{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {users.length}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button color="failure" size="sm" outline>
            Suspend all
          </Button>
          <Button color="default" size="sm">
            <HiPlus className="mr-1.5 h-3.5 w-3.5" />
            New user
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableHeadCell className="w-4 px-4 py-3">
              <Checkbox id="um-all" name="um-all" />
              <Label htmlFor="um-all" className="sr-only">Select all</Label>
            </TableHeadCell>
            <TableHeadCell className="px-4 py-3">User</TableHeadCell>
            <TableHeadCell className="px-4 py-3">Role</TableHeadCell>
            <TableHeadCell className="px-4 py-3">Active</TableHeadCell>
            <TableHeadCell className="whitespace-nowrap px-4 py-3">Last Login</TableHeadCell>
            <TableHeadCell className="px-4 py-3">
              <span className="sr-only">Actions</span>
            </TableHeadCell>
          </TableHead>
          <TableBody>
            {users.map((u) => (
              <TableRow
                key={u.id}
                className="border-b hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <TableCell className="w-4 px-4 py-3">
                  <Checkbox id={`um-${u.id}`} name={`um-${u.id}`} />
                  <Label htmlFor={`um-${u.id}`} className="sr-only">
                    Select {u.name}
                  </Label>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      {u.name}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {u.email}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <Badge
                    color={
                      roleColor[u.role] as
                        | "failure"
                        | "success"
                        | "warning"
                        | "gray"
                    }
                    className="w-fit"
                  >
                    {u.role}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <ToggleSwitch
                    checked={enabled[u.id] ?? false}
                    onChange={(val) =>
                      setEnabled((prev) => ({ ...prev, [u.id]: val }))
                    }
                    label=""
                  />
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  {u.lastLogin}
                </TableCell>
                <TableCell className="flex items-center justify-end px-4 py-3">
                  <DotsMenu />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function AdvancedTablesPage() {
  return (
    <div className="min-h-full">
      {/* Page header */}
      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p
          style={{ color: "var(--motive-primary)" }}
          className="text-xs font-semibold uppercase tracking-widest mb-3"
        >
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
          Advanced Tables
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Complex table patterns with sorting, filtering, expandable rows, and bulk actions
          for data-heavy admin interfaces.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/advanced-tables/
          </code>
        </p>
      </section>

      {/* Blocks */}
      <section className="px-16 py-12">

        <BlockPreview
          label="Default — search + status badges + row actions"
          code={`<div className="flex items-center justify-between gap-3 px-5 py-4 border-b">
  <TextInput placeholder="Search members..." icon={HiSearch} sizing="sm" className="w-64" />
  <Button color="default" size="sm">
    <HiPlus className="mr-1.5 h-3.5 w-3.5" />New member
  </Button>
</div>

<Table>
  <Table.Head>
    <Table.HeadCell className="w-4 px-4 py-3">
      <Checkbox id="check-all" name="check-all" />
      <Label htmlFor="check-all" className="sr-only">Select all</Label>
    </Table.HeadCell>
    <Table.HeadCell>Member</Table.HeadCell>
    <Table.HeadCell>Plan</Table.HeadCell>
    <Table.HeadCell>Status</Table.HeadCell>
    <Table.HeadCell>Joined</Table.HeadCell>
    <Table.HeadCell><span className="sr-only">Actions</span></Table.HeadCell>
  </Table.Head>
  <Table.Body>
    {members.map((m) => (
      <Table.Row key={m.id} className="border-b hover:bg-gray-50 dark:border-gray-700">
        <Table.Cell><Checkbox /></Table.Cell>
        <Table.Cell>{m.name}</Table.Cell>
        <Table.Cell><Badge color="indigo">{m.plan}</Badge></Table.Cell>
        <Table.Cell>
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
            {m.status}
          </div>
        </Table.Cell>
        <Table.Cell>{m.joined}</Table.Cell>
        <Table.Cell>
          <Dropdown inline label={<HiDotsVertical />} arrowIcon={false}>
            <DropdownItem>View</DropdownItem>
            <DropdownItem>Edit</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Delete</DropdownItem>
          </Dropdown>
        </Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>`}
        >
          <DefaultAdvancedTable />
        </BlockPreview>

        <BlockPreview
          label="Bulk actions — checkboxes + multi-select + export"
          code={`// Track selected rows
const [selectedIds, setSelectedIds] = useState<number[]>([]);

const toggle = (id: number) =>
  setSelectedIds((prev) =>
    prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
  );

// Bulk action dropdown — named imports only (0.12.17)
<Dropdown label="Bulk actions" color="alternative" size="sm">
  <DropdownItem>Mark as paid</DropdownItem>
  <DropdownItem>Send reminder</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Delete selected</DropdownItem>
</Dropdown>

// Row checkbox
<Checkbox
  checked={selectedIds.includes(inv.id)}
  onChange={() => toggle(inv.id)}
/>`}
        >
          <BulkActionTable />
        </BlockPreview>

        <BlockPreview
          label="Expandable rows — click row to reveal detail panel"
          code={`const [expanded, setExpanded] = useState<number | null>(null);

// Summary row — toggle on click
<Table.Row
  className="cursor-pointer border-b hover:bg-gray-50 transition"
  onClick={() => setExpanded(expanded === p.id ? null : p.id)}
>
  <Table.Cell>
    {expanded === p.id
      ? <HiChevronUp className="h-5 w-5" />
      : <HiChevronDown className="h-5 w-5" />}
  </Table.Cell>
  ...
</Table.Row>

// Detail row — visible when expanded
{expanded === p.id && (
  <Table.Row>
    <Table.Cell colSpan={7} className="px-6 py-4">
      <div className="grid grid-cols-3 gap-4">
        <div><p className="text-xs uppercase">Coverage</p><p>{p.coverage}</p></div>
        ...
      </div>
      <div className="mt-4 flex gap-3">
        <Button size="sm">Edit member</Button>
        <Button color="failure" size="sm">Deactivate</Button>
      </div>
    </Table.Cell>
  </Table.Row>
)}`}
        >
          <ExpandableRowsTable />
        </BlockPreview>

        <BlockPreview
          label="Sortable columns — click headers to sort asc/desc"
          code={`const [sortKey, setSortKey] = useState<SortKey>("name");
const [sortDir, setSortDir] = useState<SortDir>("asc");

const handleSort = (key: SortKey) => {
  if (sortKey === key) {
    setSortDir((d) => (d === "asc" ? "desc" : "asc"));
  } else {
    setSortKey(key);
    setSortDir("asc");
  }
};

const sorted = [...rows].sort((a, b) => {
  const cmp = typeof a[sortKey] === "number"
    ? (a[sortKey] as number) - (b[sortKey] as number)
    : String(a[sortKey]).localeCompare(String(b[sortKey]));
  return sortDir === "asc" ? cmp : -cmp;
});

// Clickable header cell
<Table.HeadCell
  className="px-4 py-3 cursor-pointer select-none"
  onClick={() => handleSort("name")}
>
  <span className="flex items-center">
    Member
    <SortIcon direction={sortKey === "name" ? sortDir : null} />
  </span>
</Table.HeadCell>`}
        >
          <SortableTable />
        </BlockPreview>

        <BlockPreview
          label="User management — role badges + active toggle + bulk suspend"
          code={`// ToggleSwitch per row (Flowbite React 0.12.17)
const [enabled, setEnabled] = useState<Record<number, boolean>>({ 1: true, 2: false });

<ToggleSwitch
  checked={enabled[u.id] ?? false}
  onChange={(val) => setEnabled((prev) => ({ ...prev, [u.id]: val }))}
  label=""
/>

// Role badge
<Badge color={roleColor[u.role]} className="w-fit">
  {u.role}
</Badge>

// Bulk action buttons
<Button color="failure" size="sm" outline>Suspend all</Button>
<Button color="default" size="sm">
  <HiPlus className="mr-1.5 h-3.5 w-3.5" />New user
</Button>`}
        >
          <UserManagementTable />
        </BlockPreview>

      </section>
    </div>
  );
}
