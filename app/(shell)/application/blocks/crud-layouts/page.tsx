"use client";

import { useState } from "react";
import { Button, Badge, Modal, TextInput, Select, Label, Dropdown, Table } from "flowbite-react";
import { HiPlus, HiSearch, HiFilter, HiDotsVertical, HiPencil, HiMail, HiCurrencyDollar, HiTrash, HiDownload } from "react-icons/hi";

const members = [
  { name: "Garcia, Maria",    email: "m.garcia@email.com",    tier: "Diamond+", status: "Active",  billing: "Annual",     amount: "$4,660" },
  { name: "Chen, David",      email: "d.chen@email.com",      tier: "Diamond",  status: "Active",  billing: "Semi-annual", amount: "$4,660" },
  { name: "Williams, Sarah",  email: "s.williams@email.com",  tier: "Gold",     status: "Overdue", billing: "Monthly",    amount: "$315" },
  { name: "Patel, Rajan",     email: "r.patel@email.com",     tier: "Diamond+", status: "Pending", billing: "Annual",     amount: "$4,660" },
  { name: "Torres, Elena",    email: "e.torres@email.com",    tier: "Gold",     status: "Active",  billing: "Annual",     amount: "$3,780" },
];

const statusColor: Record<string, "success" | "failure" | "warning" | "gray"> = {
  Active:  "success",
  Overdue: "failure",
  Pending: "warning",
  Expired: "gray",
};

export default function CRUDLayoutsPage() {
  const [createOpen, setCreateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-full">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">CRUD Layouts</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Full-page layouts for list, create, read, update, and delete flows. The member management
          layout below is the PIMC back office pattern — table header, data table, and inline modals for all four operations.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/crud-layouts/user-management.tsx
          </code>
        </p>
      </section>

      {/* ── Live block ──────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
          Member management — PIMC back office
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">

          {/* Table header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-64">
                <TextInput
                  placeholder="Search members..."
                  icon={HiSearch}
                  sizing="sm"
                />
              </div>
              <Button color="alternative" size="sm">
                <HiFilter className="mr-1.5 h-3.5 w-3.5" />Filter
              </Button>
              <Button color="alternative" size="sm">
                <HiDownload className="mr-1.5 h-3.5 w-3.5" />Export
              </Button>
            </div>
            <Button color="default" size="sm" onClick={() => setCreateOpen(true)}>
              <HiPlus className="mr-1.5 h-3.5 w-3.5" />New member
            </Button>
          </div>

          {/* Table */}
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Member</Table.HeadCell>
              <Table.HeadCell>Tier</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>Billing</Table.HeadCell>
              <Table.HeadCell>Next charge</Table.HeadCell>
              <Table.HeadCell><span className="sr-only">Actions</span></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-gray-100 dark:divide-gray-700">
              {members.map((m) => (
                <Table.Row key={m.name} className="bg-white dark:bg-gray-800">
                  <Table.Cell>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white text-sm">{m.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{m.email}</p>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge color={m.tier === "Diamond+" ? "indigo" : m.tier === "Diamond" ? "purple" : "warning"} size="sm">
                      {m.tier}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge color={statusColor[m.status]} size="sm">{m.status}</Badge>
                  </Table.Cell>
                  <Table.Cell className="text-sm text-gray-500 dark:text-gray-400">{m.billing}</Table.Cell>
                  <Table.Cell className="text-sm font-medium text-gray-900 dark:text-white">{m.amount}</Table.Cell>
                  <Table.Cell>
                    <Dropdown label="" dismissOnClick renderTrigger={() => (
                      <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600">
                        <HiDotsVertical className="h-4 w-4" />
                      </button>
                    )}>
                      <Dropdown.Item icon={HiPencil}>Edit member</Dropdown.Item>
                      <Dropdown.Item icon={HiMail}>Resend payment link</Dropdown.Item>
                      <Dropdown.Item icon={HiCurrencyDollar}>Record payment</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item icon={HiTrash} className="text-red-600 dark:text-red-400"
                        onClick={() => { setSelected(m.name); setDeleteOpen(true); }}>
                        Cancel membership
                      </Dropdown.Item>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          {/* Table footer */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-3 border-t border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing <span className="font-medium text-gray-900 dark:text-white">1–5</span> of{" "}
              <span className="font-medium text-gray-900 dark:text-white">847</span> members
            </p>
            <div className="flex items-center gap-2">
              <Button color="alternative" size="sm" disabled>Previous</Button>
              <Button color="alternative" size="sm">Next</Button>
            </div>
          </div>
        </div>

        {/* Create modal */}
        <Modal show={createOpen} size="lg" onClose={() => setCreateOpen(false)}>
          <Modal.Header>New member</Modal.Header>
          <Modal.Body>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cfirst" value="First name" className="mb-2 block" />
                  <TextInput id="cfirst" placeholder="Maria" sizing="sm" />
                </div>
                <div>
                  <Label htmlFor="clast" value="Last name" className="mb-2 block" />
                  <TextInput id="clast" placeholder="Garcia" sizing="sm" />
                </div>
              </div>
              <div>
                <Label htmlFor="cemail" value="Email" className="mb-2 block" />
                <TextInput id="cemail" type="email" placeholder="maria.garcia@email.com" sizing="sm" />
              </div>
              <div>
                <Label htmlFor="cphone" value="Phone" className="mb-2 block" />
                <TextInput id="cphone" type="tel" placeholder="+1 (619) 555-0100" sizing="sm" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ctier" value="Membership tier" className="mb-2 block" />
                  <Select id="ctier" sizing="sm">
                    <option>Gold — $3,780 / yr</option>
                    <option>Diamond — $4,660 / yr</option>
                    <option>Diamond+ — $4,660 / yr</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="cbilling" value="Billing cycle" className="mb-2 block" />
                  <Select id="cbilling" sizing="sm">
                    <option>Annual</option>
                    <option>Semi-annual</option>
                    <option>Monthly</option>
                  </Select>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="default" onClick={() => setCreateOpen(false)}>Create member</Button>
            <Button color="alternative" onClick={() => setCreateOpen(false)}>Cancel</Button>
          </Modal.Footer>
        </Modal>

        {/* Delete confirm modal */}
        <Modal show={deleteOpen} size="md" onClose={() => setDeleteOpen(false)}>
          <Modal.Header>Cancel membership</Modal.Header>
          <Modal.Body>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Are you sure you want to cancel <span className="font-semibold text-gray-900 dark:text-white">{selected}'s</span> membership?
              The remaining balance will be prorated and refunded. This action cannot be undone.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button color="red" onClick={() => setDeleteOpen(false)}>Cancel membership</Button>
            <Button color="alternative" onClick={() => setDeleteOpen(false)}>Keep membership</Button>
          </Modal.Footer>
        </Modal>

        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`// Full CRUD layout — table + create modal + delete confirm
// See _flowbite-pro/blocks react/app/application-ui/crud-layouts/user-management.tsx
// for the complete source. Scripps-ified version above.

<Table hoverable>
  <Table.Head>
    <Table.HeadCell>Member</Table.HeadCell>
    <Table.HeadCell>Tier</Table.HeadCell>
    <Table.HeadCell>Status</Table.HeadCell>
    <Table.HeadCell><span className="sr-only">Actions</span></Table.HeadCell>
  </Table.Head>
  <Table.Body>
    {members.map(m => (
      <Table.Row key={m.id}>
        <Table.Cell>{m.name}</Table.Cell>
        <Table.Cell><Badge color="indigo">{m.tier}</Badge></Table.Cell>
        <Table.Cell><Badge color={statusColor[m.status]}>{m.status}</Badge></Table.Cell>
        <Table.Cell>
          <Dropdown label="" renderTrigger={() => <button><HiDotsVertical /></button>}>
            <Dropdown.Item icon={HiPencil}>Edit member</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item icon={HiTrash} className="text-red-600">Cancel membership</Dropdown.Item>
          </Dropdown>
        </Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>`}</pre>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "One CRUD per page",    note: "Each entity (members, invoices, waitlist) gets its own page with this layout. Don't nest multiple entity tables on the same page." },
            { label: "Modals for quick ops", note: "Create, read, and delete use modals to keep the user in context. Complex edits (full member profile, tier override) go to a dedicated edit page." },
            { label: "Destructive last",     note: "In the row action dropdown, destructive actions (Cancel membership) always appear at the bottom, separated by a Divider, styled red." },
            { label: "Status via badge",     note: "Every row has a status badge. Active = green, Overdue = red, Pending = yellow, Expired = gray. Never use color alone — the label must match." },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-[180px_1fr] gap-8 py-6 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <p className="text-sm font-bold text-gray-900 dark:text-white">{item.label}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
