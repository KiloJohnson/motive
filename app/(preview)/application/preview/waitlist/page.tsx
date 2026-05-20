"use client";

import { useState } from "react";
import { PreviewShell } from "../PreviewShell";
import { Badge, Button, TextInput, Table, Modal, Label, Dropdown } from "flowbite-react";
import { HiSearch, HiDotsVertical, HiCheck, HiPhone, HiX, HiArrowUp, HiArrowDown } from "react-icons/hi";

const waitlist = [
  { pos: 1,  name: "Nguyen, Lily",      email: "l.nguyen@email.com",    phone: "(619) 555-0101", tier: "Diamond+", status: "Waiting",   deposit: "$500", joined: "Apr 12" },
  { pos: 2,  name: "Obi, Emeka",        email: "e.obi@email.com",        phone: "(858) 555-0182", tier: "Diamond",  status: "Contacted", deposit: "$500", joined: "Apr 18" },
  { pos: 3,  name: "Reyes, Sofia",      email: "s.reyes@email.com",      phone: "(619) 555-0243", tier: "Gold",     status: "Waiting",   deposit: "$500", joined: "Apr 22" },
  { pos: 4,  name: "Park, Daniel",      email: "d.park@email.com",       phone: "(760) 555-0314", tier: "Diamond+", status: "Waiting",   deposit: "$500", joined: "Apr 29" },
  { pos: 5,  name: "Vasquez, Carmen",   email: "c.vasquez@email.com",    phone: "(619) 555-0395", tier: "Gold",     status: "Contacted", deposit: "$500", joined: "May 3" },
  { pos: 6,  name: "Tanaka, Hiroshi",   email: "h.tanaka@email.com",     phone: "(858) 555-0476", tier: "Diamond",  status: "Waiting",   deposit: "$500", joined: "May 10" },
];

const statusColor: Record<string, any> = { Waiting: "gray", Contacted: "indigo", Converted: "success" };

export default function WaitlistPage() {
  const [convertOpen, setConvertOpen] = useState(false);
  const [declineOpen, setDeclineOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof waitlist)[0] | null>(null);

  return (
    <PreviewShell title="Waitlist">
      <div className="p-6">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Total waitlist",     value: "34", sub: "3 converted this week" },
            { label: "Avg wait time",      value: "18 days", sub: "↓ 2 days from last month" },
            { label: "Deposit collected",  value: "$17,000", sub: "34 × $500" },
          ].map((s) => (
            <div key={s.label} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{s.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{s.value}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700">
            <TextInput placeholder="Search waitlist..." icon={HiSearch} sizing="sm" className="w-56" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">34</span> waiting
            </p>
          </div>

          {/* Table */}
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="w-12">Pos</Table.HeadCell>
              <Table.HeadCell>Applicant</Table.HeadCell>
              <Table.HeadCell>Tier interest</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>Deposit</Table.HeadCell>
              <Table.HeadCell>Applied</Table.HeadCell>
              <Table.HeadCell><span className="sr-only">Actions</span></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-gray-100 dark:divide-gray-700">
              {waitlist.map((w) => (
                <Table.Row key={w.name} className="bg-white dark:bg-gray-800">
                  <Table.Cell>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-mono font-medium text-gray-500 dark:text-gray-400 w-5">{w.pos}</span>
                      <div className="flex flex-col gap-0.5">
                        <button className="text-gray-300 hover:text-gray-500"><HiArrowUp className="h-3 w-3" /></button>
                        <button className="text-gray-300 hover:text-gray-500"><HiArrowDown className="h-3 w-3" /></button>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{w.name}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{w.email}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{w.phone}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge color={w.tier === "Diamond+" ? "indigo" : w.tier === "Diamond" ? "purple" : "warning"} size="xs">{w.tier}</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge color={statusColor[w.status]} size="xs">{w.status}</Badge>
                  </Table.Cell>
                  <Table.Cell className="text-xs font-medium text-gray-900 dark:text-white">{w.deposit}</Table.Cell>
                  <Table.Cell className="text-xs text-gray-500 dark:text-gray-400">{w.joined}</Table.Cell>
                  <Table.Cell>
                    <Dropdown label="" dismissOnClick renderTrigger={() => (
                      <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600">
                        <HiDotsVertical className="h-4 w-4" />
                      </button>
                    )}>
                      <Dropdown.Item icon={HiPhone}>Mark as contacted</Dropdown.Item>
                      <Dropdown.Item icon={HiCheck}
                        onClick={() => { setSelected(w); setConvertOpen(true); }}>
                        Convert to member
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item icon={HiX} className="text-red-600 dark:text-red-400"
                        onClick={() => { setSelected(w); setDeclineOpen(true); }}>
                        Decline &amp; refund deposit
                      </Dropdown.Item>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">Showing 1–6 of 34</p>
            <div className="flex gap-2">
              <Button color="alternative" size="sm" disabled>Previous</Button>
              <Button color="alternative" size="sm">Next</Button>
            </div>
          </div>
        </div>

        {/* Convert modal */}
        <Modal show={convertOpen} size="md" onClose={() => setConvertOpen(false)}>
          <Modal.Header>Convert to member</Modal.Header>
          <Modal.Body>
            <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <p>Convert <span className="font-semibold text-gray-900 dark:text-white">{selected?.name}</span> to an active member?</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>A member account will be created automatically</li>
                <li>A signup link will be emailed to {selected?.email}</li>
                <li>The <span className="font-medium text-gray-700 dark:text-gray-300">{selected?.deposit}</span> deposit will be applied to their first invoice</li>
                <li>SMS opt-in will be collected separately at signup</li>
              </ul>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="default" onClick={() => setConvertOpen(false)}>Convert to member</Button>
            <Button color="alternative" onClick={() => setConvertOpen(false)}>Cancel</Button>
          </Modal.Footer>
        </Modal>

        {/* Decline modal */}
        <Modal show={declineOpen} size="md" onClose={() => setDeclineOpen(false)}>
          <Modal.Header>Decline &amp; refund deposit</Modal.Header>
          <Modal.Body>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Decline <span className="font-semibold text-gray-900 dark:text-white">{selected?.name}</span>?
              Their <span className="font-medium text-gray-700 dark:text-gray-300">{selected?.deposit}</span> deposit
              will be automatically refunded via Orbital to the card on file.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button color="red" onClick={() => setDeclineOpen(false)}>Decline &amp; refund</Button>
            <Button color="alternative" onClick={() => setDeclineOpen(false)}>Keep on waitlist</Button>
          </Modal.Footer>
        </Modal>

      </div>
    </PreviewShell>
  );
}
