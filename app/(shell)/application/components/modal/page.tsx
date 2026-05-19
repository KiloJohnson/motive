"use client";

import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { HiExclamation, HiCheck, HiCurrencyDollar, HiX } from "react-icons/hi";

export default function AppModalPage() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [cancelOpen, setCancelOpen] = useState(false);

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

        <Modal show={confirmOpen} size="md" onClose={() => setConfirmOpen(false)}>
          <Modal.Header>Resend payment link</Modal.Header>
          <Modal.Body>
            <p className="text-gray-600 dark:text-gray-400">
              A payment link will be sent to <strong>maria.garcia@email.com</strong> for invoice <strong>INV-2849</strong> ($4,660.00).
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
              The previous link will be invalidated. The member has 7 days to complete payment before the next retry.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button color="default" onClick={() => setConfirmOpen(false)}>Send link</Button>
            <Button color="alternative" onClick={() => setConfirmOpen(false)}>Cancel</Button>
          </Modal.Footer>
        </Modal>

        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Modal show={isOpen} size="md" onClose={() => setIsOpen(false)}>
  <Modal.Header>Resend payment link</Modal.Header>
  <Modal.Body>
    <p>A payment link will be sent to...</p>
  </Modal.Body>
  <Modal.Footer>
    <Button color="default">Send link</Button>
    <Button color="alternative">Cancel</Button>
  </Modal.Footer>
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

        <Modal show={paymentOpen} size="md" onClose={() => setPaymentOpen(false)}>
          <Modal.Header>Record payment</Modal.Header>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button color="default" onClick={() => setPaymentOpen(false)}>Record payment</Button>
            <Button color="alternative" onClick={() => setPaymentOpen(false)}>Cancel</Button>
          </Modal.Footer>
        </Modal>

        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Modal show={isOpen} size="md" onClose={() => setIsOpen(false)}>
  <Modal.Header>Record payment</Modal.Header>
  <Modal.Body>
    {/* invoice summary + method select + reference input */}
  </Modal.Body>
  <Modal.Footer>
    <Button color="default">Record payment</Button>
    <Button color="alternative">Cancel</Button>
  </Modal.Footer>
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

        <Modal show={cancelOpen} size="md" onClose={() => setCancelOpen(false)}>
          <Modal.Header>Cancel membership</Modal.Header>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button color="red" onClick={() => setCancelOpen(false)}>Confirm cancellation</Button>
            <Button color="alternative" onClick={() => setCancelOpen(false)}>Keep membership</Button>
          </Modal.Footer>
        </Modal>

        <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{`<Modal show={isOpen} size="md" onClose={() => setIsOpen(false)}>
  <Modal.Header>Cancel membership</Modal.Header>
  <Modal.Body>
    {/* warning icon + consequence summary */}
  </Modal.Body>
  <Modal.Footer>
    <Button color="red">Confirm cancellation</Button>
    <Button color="alternative">Keep membership</Button>
  </Modal.Footer>
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
