"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";
import { Badge, Button, TextInput, Select, Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell, Modal, ModalHeader, ModalBody, ModalFooter, Label, Dropdown } from "flowbite-react";
import { HiPlus, HiSearch, HiDownload, HiDotsVertical, HiPencil, HiMail, HiCurrencyDollar, HiTrash } from "react-icons/hi";

const members = [
  { name: "Garcia, Maria",     email: "m.garcia@email.com",    tier: "Diamond+", status: "Active",   billing: "Annual",      joined: "Jan 2024", amount: "$4,660" },
  { name: "Chen, David",       email: "d.chen@email.com",      tier: "Diamond",  status: "Active",   billing: "Semi-annual", joined: "Mar 2024", amount: "$4,660" },
  { name: "Williams, Sarah",   email: "s.williams@email.com",  tier: "Gold",     status: "Overdue",  billing: "Monthly",     joined: "Feb 2023", amount: "$315" },
  { name: "Patel, Rajan",      email: "r.patel@email.com",     tier: "Diamond+", status: "Pending",  billing: "Annual",      joined: "Apr 2024", amount: "$4,660" },
  { name: "Torres, Elena",     email: "e.torres@email.com",    tier: "Gold",     status: "Active",   billing: "Annual",      joined: "Nov 2022", amount: "$3,780" },
  { name: "Kim, James",        email: "j.kim@email.com",       tier: "Diamond",  status: "Active",   billing: "Annual",      joined: "Jun 2023", amount: "$4,660" },
  { name: "Okafor, Adaeze",    email: "a.okafor@email.com",    tier: "Gold",     status: "Cancelled",billing: "Monthly",     joined: "Aug 2022", amount: "$0" },
  { name: "Hernandez, Carlos", email: "c.hernandez@email.com", tier: "Diamond+", status: "Active",   billing: "Semi-annual", joined: "Jan 2023", amount: "$2,330" },
];

const statusColor: Record<string, any> = {
  Active: "success", Overdue: "failure", Pending: "warning", Cancelled: "gray",
};

export default function MemberListPage() {
  const [createOpen, setCreateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <PreviewShell title="Members">
      <div className="p-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">

          {/* Table header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <div className="flex flex-wrap items-center gap-3">
              <TextInput placeholder="Search members..." icon={HiSearch} sizing="sm" className="w-56" />
              <Select sizing="sm" className="w-32">
                <option value="">All statuses</option>
                <option>Active</option>
                <option>Overdue</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </Select>
              <Select sizing="sm" className="w-32">
                <option value="">All tiers</option>
                <option>Gold</option>
                <option>Diamond</option>
                <option>Diamond+</option>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Button color="alternative" size="sm">
                <HiDownload className="mr-1.5 h-3.5 w-3.5" />Export
              </Button>
              <Button color="default" size="sm" onClick={() => setCreateOpen(true)}>
                <HiPlus className="mr-1.5 h-3.5 w-3.5" />New member
              </Button>
            </div>
          </div>

          {/* Table */}
          <Table hoverable>
            <TableHead>
              <TableRow>
                <TableHeadCell>Member</TableHeadCell>
                <TableHeadCell>Tier</TableHeadCell>
                <TableHeadCell>Status</TableHeadCell>
                <TableHeadCell>Billing</TableHeadCell>
                <TableHeadCell>Member since</TableHeadCell>
                <TableHeadCell>Next charge</TableHeadCell>
                <TableHeadCell><span className="sr-only">Actions</span></TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y divide-gray-100 dark:divide-gray-700">
              {members.map((m) => (
                <TableRow key={m.name} className="bg-white dark:bg-gray-800">
                  <TableCell>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{m.name}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{m.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge color={m.tier === "Diamond+" ? "indigo" : m.tier === "Diamond" ? "purple" : "warning"} size="xs">{m.tier}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge color={statusColor[m.status]} size="xs">{m.status}</Badge>
                  </TableCell>
                  <TableCell className="text-xs text-gray-500 dark:text-gray-400">{m.billing}</TableCell>
                  <TableCell className="text-xs text-gray-500 dark:text-gray-400">{m.joined}</TableCell>
                  <TableCell className="text-xs font-medium text-gray-900 dark:text-white">{m.amount}</TableCell>
                  <TableCell>
                    <Dropdown label="" dismissOnClick renderTrigger={() => (
                      <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Footer */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing <span className="font-medium text-gray-900 dark:text-white">1–8</span> of{" "}
              <span className="font-medium text-gray-900 dark:text-white">847</span>
            </p>
            <div className="flex gap-2">
              <Button color="alternative" size="sm" disabled>Previous</Button>
              <Button color="alternative" size="sm">Next</Button>
            </div>
          </div>
        </div>

        {/* Create modal */}
        <Modal dismissible show={createOpen} size="lg" onClose={() => setCreateOpen(false)}>
          <ModalHeader>New member</ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><Label value="First name" className="mb-2 block" /><TextInput placeholder="Maria" sizing="sm" /></div>
                <div><Label value="Last name" className="mb-2 block" /><TextInput placeholder="Garcia" sizing="sm" /></div>
              </div>
              <div><Label value="Email" className="mb-2 block" /><TextInput type="email" placeholder="maria@email.com" sizing="sm" /></div>
              <div><Label value="Phone" className="mb-2 block" /><TextInput type="tel" placeholder="+1 (619) 555-0100" sizing="sm" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label value="Tier" className="mb-2 block" />
                  <Select sizing="sm"><option>Gold — $3,780/yr</option><option>Diamond — $4,660/yr</option><option>Diamond+</option></Select>
                </div>
                <div>
                  <Label value="Billing cycle" className="mb-2 block" />
                  <Select sizing="sm"><option>Annual</option><option>Semi-annual</option><option>Monthly</option></Select>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="default" onClick={() => setCreateOpen(false)}>Create member</Button>
            <Button color="alternative" onClick={() => setCreateOpen(false)}>Cancel</Button>
          </ModalFooter>
        </Modal>

        {/* Delete confirm */}
        <Modal dismissible show={deleteOpen} size="md" onClose={() => setDeleteOpen(false)}>
          <ModalHeader>Cancel membership</ModalHeader>
          <ModalBody>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Cancel <span className="font-semibold text-gray-900 dark:text-white">{selected}'s</span> membership?
              The remaining balance will be prorated and refunded.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="red" onClick={() => setDeleteOpen(false)}>Cancel membership</Button>
            <Button color="alternative" onClick={() => setDeleteOpen(false)}>Keep membership</Button>
          </ModalFooter>
        </Modal>
      </div>
    </PreviewShell>
  );
}
