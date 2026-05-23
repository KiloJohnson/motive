"use client";

import { useState } from "react";
import { Button, Modal, ModalBody } from "flowbite-react";

function BlockPreview({ children, label, code }: {
  children: React.ReactNode;
  label: string;
  code: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">{label}</h2>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
        <div className="bg-gray-50 dark:bg-gray-900 px-5 py-8 flex justify-center">
          {children}
        </div>
      </div>
      <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{code}</pre>
    </div>
  );
}

// Close button SVG shared across all modals
function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
      <span className="sr-only">Close modal</span>
    </button>
  );
}

// Checkmark circle SVG used in list items
function CheckCircleIcon() {
  return (
    <svg aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-green-500 dark:text-green-400">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

// ── 1. Default ────────────────────────────────────────────────────────────────
function DefaultSuccessMessage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show success message</Button>
      <Modal onClose={() => setOpen(false)} popup size="md" show={open}>
        <ModalBody className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
          <CloseButton onClick={() => setOpen(false)} />
          <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 p-2 dark:bg-green-900">
            <svg aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500 dark:text-green-400">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">Success</span>
          </div>
          <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Successfully removed product.
          </p>
          <Button onClick={() => setOpen(false)} size="sm">Continue</Button>
        </ModalBody>
      </Modal>
    </>
  );
}

// ── 2. With description ───────────────────────────────────────────────────────
function SuccessMessageWithDescription() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show success message</Button>
      <Modal onClose={() => setOpen(false)} popup size="md" show={open}>
        <ModalBody className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
          <CloseButton onClick={() => setOpen(false)} />
          <div className="mb-2 flex items-center space-x-1.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <svg aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 dark:text-green-400">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Success icon</span>
            </div>
            <h3 className="text-lg font-medium text-green-500 dark:text-green-400">User deleted!</h3>
          </div>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            User&nbsp;
            <span className="font-semibold text-gray-900 dark:text-white">@bonnieGr</span>
            &nbsp;has been successfully removed.
          </p>
          <Button onClick={() => setOpen(false)} size="sm">Continue</Button>
        </ModalBody>
      </Modal>
    </>
  );
}

// ── 3. With item details ──────────────────────────────────────────────────────
function SuccessMessageWithItemDetails() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show success message</Button>
      <Modal onClose={() => setOpen(false)} popup size="md" show={open}>
        <ModalBody className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
          <CloseButton onClick={() => setOpen(false)} />
          <svg aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 h-11 w-11 text-green-400">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="sr-only">Success icon</span>
          <div className="mb-3.5 flex items-center justify-center space-x-3 rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
            <img
              alt="Apple iMac"
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
              className="h-11 w-11"
            />
            <div className="text-left">
              <p className="font-semibold text-gray-900 dark:text-white">Apple iMac 27&quot;</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">256GB SSD, Apple M1</p>
            </div>
          </div>
          <p className="mb-4 text-lg text-gray-500 dark:text-gray-400">
            This product was successfully deleted.
          </p>
          <Button onClick={() => setOpen(false)} size="sm">Continue</Button>
        </ModalBody>
      </Modal>
    </>
  );
}

// ── 4. With list ──────────────────────────────────────────────────────────────
function SuccessMessageWithList() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show success message</Button>
      <Modal onClose={() => setOpen(false)} popup size="md" show={open}>
        <ModalBody className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <CloseButton onClick={() => setOpen(false)} />
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Products successfully deleted
          </h3>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            The following products have been successfully removed from the database:
          </p>
          <ul className="mb-4 space-y-2 text-left text-gray-500 dark:text-gray-400 sm:mb-5">
            <li className="flex items-center space-x-2">
              <CheckCircleIcon />
              <span>Apple iMac 27&quot;</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircleIcon />
              <span>Magic Keyboard</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircleIcon />
              <span>Xbox Series X</span>
            </li>
          </ul>
          <Button onClick={() => setOpen(false)} size="sm">Continue</Button>
        </ModalBody>
      </Modal>
    </>
  );
}

// ── 5. With repository ────────────────────────────────────────────────────────
function SuccessMessageWithRepository() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show success message</Button>
      <Modal onClose={() => setOpen(false)} popup size="lg" show={open}>
        <ModalBody className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold leading-none text-gray-900 dark:text-white">Awesome!</h3>
            <CloseButton onClick={() => setOpen(false)} />
          </div>
          <p className="text-left text-gray-500 dark:text-gray-400">
            The following repositories have been successfully deleted:
          </p>
          <div className="mb-4 mt-2 flex items-center space-x-1.5 border-y border-green-200 bg-green-100 p-4 text-green-700 dark:border-gray-600 dark:bg-gray-700 dark:text-green-300 sm:mb-5">
            <CheckCircleIcon />
            <p className="font-medium leading-none">bergside/flowbite-library</p>
          </div>
          <Button onClick={() => setOpen(false)} className="w-full" size="sm">Continue</Button>
        </ModalBody>
      </Modal>
    </>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function SuccessMessagePage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Success Messages</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Confirmation and success state patterns — post-create, post-submit, and post-action feedback screens
          with CTAs for what to do next.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/success-message/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — simple success confirmation"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Show success message</Button>
<Modal onClose={() => setOpen(false)} popup size="md" show={open}>
  <ModalBody className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
    {/* close button */}
    <div className="mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 p-2 dark:bg-green-900">
      <svg className="h-8 w-8 text-green-500 dark:text-green-400" ...checkmark />
    </div>
    <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
      Successfully removed product.
    </p>
    <Button onClick={() => setOpen(false)} size="sm">Continue</Button>
  </ModalBody>
</Modal>`}
        >
          <DefaultSuccessMessage />
        </BlockPreview>

        <BlockPreview
          label="With description — named entity confirmation"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Show success message</Button>
<Modal onClose={() => setOpen(false)} popup size="md" show={open}>
  <ModalBody className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
    {/* close button */}
    <div className="mb-2 flex items-center space-x-1.5">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
        <svg className="h-4 w-4 text-green-500 dark:text-green-400" ...checkmark />
      </div>
      <h3 className="text-lg font-medium text-green-500 dark:text-green-400">User deleted!</h3>
    </div>
    <p className="mb-4 text-gray-500 dark:text-gray-400">
      User <span className="font-semibold text-gray-900 dark:text-white">@bonnieGr</span> has been successfully removed.
    </p>
    <Button onClick={() => setOpen(false)} size="sm">Continue</Button>
  </ModalBody>
</Modal>`}
        >
          <SuccessMessageWithDescription />
        </BlockPreview>

        <BlockPreview
          label="With item details — product / record reference"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Show success message</Button>
<Modal onClose={() => setOpen(false)} popup size="md" show={open}>
  <ModalBody className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
    {/* close button */}
    <svg className="mx-auto mb-4 h-11 w-11 text-green-400" ...checkmark />
    <div className="mb-3.5 flex items-center justify-center space-x-3 rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
      <img alt="Apple iMac" src="..." className="h-11 w-11" />
      <div className="text-left">
        <p className="font-semibold text-gray-900 dark:text-white">Apple iMac 27"</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">256GB SSD, Apple M1</p>
      </div>
    </div>
    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400">
      This product was successfully deleted.
    </p>
    <Button onClick={() => setOpen(false)} size="sm">Continue</Button>
  </ModalBody>
</Modal>`}
        >
          <SuccessMessageWithItemDetails />
        </BlockPreview>

        <BlockPreview
          label="With list — bulk action confirmation"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Show success message</Button>
<Modal onClose={() => setOpen(false)} popup size="md" show={open}>
  <ModalBody className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
    {/* close button */}
    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
      Products successfully deleted
    </h3>
    <p className="mb-4 text-gray-500 dark:text-gray-400">
      The following products have been successfully removed from the database:
    </p>
    <ul className="mb-4 space-y-2 text-left text-gray-500 dark:text-gray-400">
      <li className="flex items-center space-x-2">
        <svg className="h-4 w-4 shrink-0 text-green-500 dark:text-green-400" ...check-circle />
        <span>Apple iMac 27"</span>
      </li>
      <li className="flex items-center space-x-2">
        <svg className="h-4 w-4 shrink-0 text-green-500 dark:text-green-400" ...check-circle />
        <span>Magic Keyboard</span>
      </li>
    </ul>
    <Button onClick={() => setOpen(false)} size="sm">Continue</Button>
  </ModalBody>
</Modal>`}
        >
          <SuccessMessageWithList />
        </BlockPreview>

        <BlockPreview
          label="With repository — resource name banner"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Show success message</Button>
<Modal onClose={() => setOpen(false)} popup size="lg" show={open}>
  <ModalBody className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
    <div className="mb-3 flex items-center justify-between">
      <h3 className="text-lg font-semibold leading-none text-gray-900 dark:text-white">Awesome!</h3>
      {/* close button */}
    </div>
    <p className="text-left text-gray-500 dark:text-gray-400">
      The following repositories have been successfully deleted:
    </p>
    <div className="mb-4 mt-2 flex items-center space-x-1.5 border-y border-green-200 bg-green-100 p-4 text-green-700 dark:border-gray-600 dark:bg-gray-700 dark:text-green-300">
      <svg className="h-4 w-4 shrink-0" ...check-circle />
      <p className="font-medium leading-none">bergside/flowbite-library</p>
    </div>
    <Button onClick={() => setOpen(false)} className="w-full" size="sm">Continue</Button>
  </ModalBody>
</Modal>`}
        >
          <SuccessMessageWithRepository />
        </BlockPreview>

      </section>
    </div>
  );
}
