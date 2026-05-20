"use client";

import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, TextInput, Select } from "flowbite-react";
import { HiExclamation, HiCheck, HiCurrencyDollar, HiX, HiUserAdd } from "react-icons/hi";

export default function AppModalPage() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [cancelOpen, setCancelOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [scrollOpen, setScrollOpen] = useState(false);

  return (
    <div className="min-h-full">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Components
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Modal</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Flowbite React <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">Modal</code> component
          for confirmations, payments, and multi-step flows. Modals interrupt the user —
          use them only when a decision or focused task requires it.
        </p>
      </section>

      {/* ── Confirmation ────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Confirmation</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          For low-stakes confirmations: resending a payment link, recording a note, approving a waitlist applicant.
        </p>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Button color="default" onClick={() => setConfirmOpen(true)}>
            <HiCheck className="mr-2 h-4 w-4" />Open confirmation modal
          </Button>
        </div>

        <Modal dismissible show={confirmOpen} size="md" onClose={() => setConfirmOpen(false)}>
          <ModalHeader>Resend payment link</ModalHeader>
          <ModalBody>
            <p className="text-gray-600 dark:text-gray-400">
              A payment link will be sent to <strong>maria.garcia@email.com</strong> for invoice <strong>INV-2849</strong> ($4,660.00).
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
              The previous link will be invalidated. The member has 7 days to complete payment before the next retry.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="default" onClick={() => setConfirmOpen(false)}>Send link</Button>
            <Button color="alternative" onClick={() => setConfirmOpen(false)}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Modal dismissible show={isOpen} size="md" onClose={() => setIsOpen(false)}>
  <ModalHeader>Resend payment link</ModalHeader>
  <ModalBody>
    <p>A payment link will be sent to...</p>
  </ModalBody>
  <ModalFooter>
    <Button color="default">Send link</Button>
    <Button color="alternative">Cancel</Button>
  </ModalFooter>
</Modal>`}</pre>
      </section>

      {/* ── Record payment ──────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Record payment (cash / check)</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          FrontDesk role records cash and check payments. Staff role also has access. Never handles card data — that goes through Orbital iframe.
        </p>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Button color="default" onClick={() => setPaymentOpen(true)}>
            <HiCurrencyDollar className="mr-2 h-4 w-4" />Record cash / check payment
          </Button>
        </div>

        <Modal dismissible show={paymentOpen} size="md" onClose={() => setPaymentOpen(false)}>
          <ModalHeader>Record payment</ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm">
                <div className="flex justify-between text-gray-600 dark:text-gray-300 mb-1">
                  <span>Member</span><span className="font-medium">Garcia, Maria</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300 mb-1">
                  <span>Invoice</span><span className="font-medium">INV-2849</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Amount due</span><span className="font-semibold text-gray-900 dark:text-white">$4,660.00</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Payment method</label>
                <select className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option>Cash</option>
                  <option>Check</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Reference / check number</label>
                <input type="text" placeholder="Optional" className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400" />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="default" onClick={() => setPaymentOpen(false)}>Record payment</Button>
            <Button color="alternative" onClick={() => setPaymentOpen(false)}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Modal dismissible show={isOpen} size="md" onClose={() => setIsOpen(false)}>
  <ModalHeader>Record payment</ModalHeader>
  <ModalBody>
    {/* invoice summary + method select + reference input */}
  </ModalBody>
  <ModalFooter>
    <Button color="default">Record payment</Button>
    <Button color="alternative">Cancel</Button>
  </ModalFooter>
</Modal>`}</pre>
      </section>

      {/* ── Destructive confirmation ────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Destructive confirmation</h2>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          For irreversible actions: cancelling a subscription, removing a waitlist applicant, voiding an invoice.
          Use the warning icon and <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono">color="red"</code> on the confirm button.
        </p>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Button color="red" onClick={() => setCancelOpen(true)}>
            <HiX className="mr-2 h-4 w-4" />Cancel membership
          </Button>
        </div>

        <Modal dismissible show={cancelOpen} size="md" onClose={() => setCancelOpen(false)}>
          <ModalHeader>Cancel membership</ModalHeader>
          <ModalBody>
            <div className="flex items-start gap-3 mb-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <HiExclamation className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white mb-1">This action cannot be undone</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The membership for <strong>Garcia, Maria</strong> (Diamond+) will be cancelled at the end of the current billing period.
                  A prorated refund will be calculated and issued automatically.
                </p>
              </div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300">
              Access ends: <strong className="text-gray-900 dark:text-white">June 30, 2026</strong> &nbsp;·&nbsp;
              Refund estimate: <strong className="text-gray-900 dark:text-white">$1,165.00</strong>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="red" onClick={() => setCancelOpen(false)}>Confirm cancellation</Button>
            <Button color="alternative" onClick={() => setCancelOpen(false)}>Keep membership</Button>
          </ModalFooter>
        </Modal>

        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Modal dismissible show={isOpen} size="md" onClose={() => setIsOpen(false)}>
  <ModalHeader>Cancel membership</ModalHeader>
  <ModalBody>
    {/* warning icon + consequence summary */}
  </ModalBody>
  <ModalFooter>
    <Button color="red">Confirm cancellation</Button>
    <Button color="alternative">Keep membership</Button>
  </ModalFooter>
</Modal>`}</pre>
      </section>

      {/* ── Form modal ──────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Form modal — create member</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Use for short create/edit flows that don't warrant a full page. Keep to 4–6 fields max.
          Longer forms belong on a dedicated page.
        </p>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Button color="default" onClick={() => setFormOpen(true)}>
            <HiUserAdd className="mr-2 h-4 w-4" />New member
          </Button>
        </div>
        <Modal dismissible show={formOpen} size="lg" onClose={() => setFormOpen(false)}>
          <ModalHeader>Create new member</ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first" value="First name" className="mb-2 block" />
                  <TextInput id="first" placeholder="Maria" />
                </div>
                <div>
                  <Label htmlFor="last" value="Last name" className="mb-2 block" />
                  <TextInput id="last" placeholder="Garcia" />
                </div>
              </div>
              <div>
                <Label htmlFor="email" value="Email" className="mb-2 block" />
                <TextInput id="email" type="email" placeholder="maria.garcia@email.com" />
              </div>
              <div>
                <Label htmlFor="phone" value="Phone" className="mb-2 block" />
                <TextInput id="phone" type="tel" placeholder="+1 (619) 555-0100" />
              </div>
              <div>
                <Label htmlFor="tier" value="Membership tier" className="mb-2 block" />
                <Select id="tier">
                  <option>Gold — $3,780 / yr</option>
                  <option>Diamond — $4,660 / yr</option>
                  <option>Diamond+ — $4,660 / yr</option>
                </Select>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="default" onClick={() => setFormOpen(false)}>Create member</Button>
            <Button color="alternative" onClick={() => setFormOpen(false)}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Modal dismissible show={isOpen} size="lg" onClose={() => setOpen(false)}>
  <ModalHeader>Create new member</ModalHeader>
  <ModalBody>
    <div className="space-y-4">
      <Label htmlFor="email" value="Email" className="mb-2 block" />
      <TextInput id="email" type="email" placeholder="..." />
    </div>
  </ModalBody>
  <ModalFooter>
    <Button color="default">Create member</Button>
    <Button color="alternative">Cancel</Button>
  </ModalFooter>
</Modal>`}</pre>
      </section>

      {/* ── Scrollable ──────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Scrollable body</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Add <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">scrollable</code> when
          modal content may overflow — invoice line items, terms, audit log entries. Header and footer stay fixed.
        </p>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4">
          <Button color="alternative" onClick={() => setScrollOpen(true)}>Open scrollable modal</Button>
        </div>
        <Modal dismissible show={scrollOpen} size="md" onClose={() => setScrollOpen(false)}>
          <ModalHeader>Invoice #2024-0847 — Line items</ModalHeader>
          <ModalBody className="overflow-y-auto max-h-64">
            <div className="space-y-3">
              {[
                { desc: "Diamond+ Annual Membership — Year 2", amount: "$4,660.00" },
                { desc: "Executive Health WholePerson Exam — included", amount: "$0.00" },
                { desc: "Scripps Center for Executive Health access", amount: "Included" },
                { desc: "Priority scheduling benefit", amount: "Included" },
                { desc: "24/7 physician access", amount: "Included" },
                { desc: "Comprehensive lab work panel", amount: "Included" },
                { desc: "Annual membership renewal processing", amount: "$0.00" },
                { desc: "Waitlist deposit applied", amount: "-$500.00" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0 text-sm">
                  <span className="text-gray-600 dark:text-gray-300">{item.desc}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{item.amount}</span>
                </div>
              ))}
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="flex justify-between w-full items-center">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Total due: $4,160.00</span>
              <div className="flex gap-2">
                <Button color="default" size="sm">Send payment link</Button>
                <Button color="alternative" size="sm" onClick={() => setScrollOpen(false)}>Close</Button>
              </div>
            </div>
          </ModalFooter>
        </Modal>
        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Modal dismissible show={isOpen} size="md" onClose={() => setOpen(false)}>
  <ModalHeader>Invoice line items</ModalHeader>
  <ModalBody>
    {/* long content scrolls — header + footer stay fixed */}
  </ModalBody>
  <ModalFooter>
    <Button color="default">Send payment link</Button>
  </ModalFooter>
</Modal>`}</pre>
      </section>

      {/* ── Sizes ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Size options</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <tr>
                {["Size", "Width", "Use for"].map((h) => (
                  <th key={h} className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {[
                { size: "sm",   width: "384px",  use: "Simple confirmations, alerts with one action" },
                { size: "md",   width: "448px",  use: "Default — record payment, resend link, short forms" },
                { size: "lg",   width: "512px",  use: "Forms with multiple fields, member detail edit" },
                { size: "xl",   width: "576px",  use: "Multi-step flows, invoice detail view" },
                { size: "2xl",  width: "672px",  use: "Complex data, audit log view" },
              ].map((row) => (
                <tr key={row.size} className="bg-white dark:bg-gray-800">
                  <td className="px-5 py-3 font-mono text-xs text-gray-500 dark:text-gray-400">{row.size}</td>
                  <td className="px-5 py-3 text-gray-600 dark:text-gray-300">{row.width}</td>
                  <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────── */}
      <section className="px-16 py-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Usage notes</h2>
        <div className="max-w-3xl space-y-0">
          {[
            { label: "One action",      note: "Modals should have one primary action. If you need two competing primary actions, reconsider the flow — one should be secondary (color=\"alternative\")." },
            { label: "Escape / close",  note: "Always allow closing via the × button and by clicking the backdrop. The onClose prop handles both. Never trap the user." },
            { label: "Destructive CTA", note: "Destructive confirm button goes on the left (primary position). \"Cancel\" / \"Keep\" goes on the right. This follows the pattern users expect — the dangerous action is clearly labeled and in the primary position." },
            { label: "No card data",    note: "Never put card input inside a Modal. Card capture for PIMC uses the Orbital hosted iframe — a separate, PCI-compliant flow." },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-[160px_1fr] gap-8 py-6 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <p className="text-sm font-bold text-gray-900 dark:text-white">{item.label}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
