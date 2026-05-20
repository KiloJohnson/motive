"use client";

import { useState } from "react";
import { Alert, Button, Checkbox, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import { HiTrash } from "react-icons/hi";

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

function DefaultDeleteModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button color="failure" onClick={() => setOpen(true)}>Delete item</Button>
      <Modal dismissible show={open} size="md" popup onClose={() => setOpen(false)}>
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiTrash className="mx-auto mb-3.5 h-11 w-11 text-gray-400 dark:text-gray-500" />
            <p className="mb-5 text-gray-500 dark:text-gray-300">
              Are you sure you want to delete this item?
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button color="gray" onClick={() => setOpen(false)}>No, cancel</Button>
              <Button color="failure">Yes, I'm sure</Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

function AlertDeleteModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button color="failure" onClick={() => setOpen(true)}>Delete user</Button>
      <Modal dismissible show={open} size="md" onClose={() => setOpen(false)}>
        <ModalHeader>Confirm user removal</ModalHeader>
        <ModalBody>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this user from the platform?
          </p>
          <Alert color="warning">
            <span className="font-semibold">Warning —</span>{" "}
            By deleting this user, 6 associated posts will also be permanently deleted.
          </Alert>
        </ModalBody>
        <ModalFooter>
          <Button color="failure">
            <HiTrash className="-ml-1 mr-1.5 h-4 w-4" />
            Yes, confirm delete
          </Button>
          <Button color="gray" onClick={() => setOpen(false)}>No, cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

function CheckboxDeleteModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button color="failure" onClick={() => setOpen(true)}>Remove 15 items</Button>
      <Modal dismissible show={open} size="md" onClose={() => setOpen(false)}>
        <ModalHeader>Remove 15 items?</ModalHeader>
        <ModalBody>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            Associated account activity will be deleted and cannot be restored.
          </p>
          <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
            <div className="flex items-start gap-2">
              <Checkbox
                id="dc-confirm"
                className="mt-0.5 text-primary-600 focus:ring-primary-500"
                required
              />
              <Label htmlFor="dc-confirm" className="text-sm text-gray-500 dark:text-gray-400">
                Also delete{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  all posts, photos and videos
                </span>{" "}
                published on behalf of these items.
              </Label>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="failure">
            <HiTrash className="-ml-1 mr-1.5 h-4 w-4" />
            Yes, delete
          </Button>
          <Button color="gray" onClick={() => setOpen(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default function DeleteConfirmPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Delete Confirm</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Confirmation dialogs for destructive actions. Three escalating patterns: simple confirmation,
          warning alert for cascading deletes, and checkbox acknowledgment for bulk operations.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/delete-confirm/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — simple delete confirmation"
          code={`const [open, setOpen] = useState(false);

<Button color="failure" onClick={() => setOpen(true)}>Delete item</Button>
<Modal dismissible show={open} size="md" popup onClose={() => setOpen(false)}>
  <ModalHeader />
  <ModalBody>
    <div className="text-center">
      <HiTrash className="mx-auto mb-3.5 h-11 w-11 text-gray-400 dark:text-gray-500" />
      <p className="mb-5 text-gray-500 dark:text-gray-300">
        Are you sure you want to delete this item?
      </p>
      <div className="flex items-center justify-center space-x-4">
        <Button color="gray" onClick={() => setOpen(false)}>No, cancel</Button>
        <Button color="failure">Yes, I'm sure</Button>
      </div>
    </div>
  </ModalBody>
</Modal>`}
        >
          <DefaultDeleteModal />
        </BlockPreview>

        <BlockPreview
          label="With alert — cascading delete warning"
          code={`const [open, setOpen] = useState(false);

<Button color="failure" onClick={() => setOpen(true)}>Delete user</Button>
<Modal dismissible show={open} size="md" onClose={() => setOpen(false)}>
  <ModalHeader>Confirm user removal</ModalHeader>
  <ModalBody>
    <p className="mb-4 text-gray-500 dark:text-gray-400">
      Are you sure you want to delete this user from the platform?
    </p>
    <Alert color="warning">
      <span className="font-semibold">Warning —</span>{" "}
      By deleting this user, 6 associated posts will also be permanently deleted.
    </Alert>
  </ModalBody>
  <ModalFooter>
    <Button color="failure">Yes, confirm delete</Button>
    <Button color="gray" onClick={() => setOpen(false)}>No, cancel</Button>
  </ModalFooter>
</Modal>`}
        >
          <AlertDeleteModal />
        </BlockPreview>

        <BlockPreview
          label="With checkbox — bulk delete acknowledgment"
          code={`const [open, setOpen] = useState(false);

<Button color="failure" onClick={() => setOpen(true)}>Remove 15 items</Button>
<Modal dismissible show={open} size="md" onClose={() => setOpen(false)}>
  <ModalHeader>Remove 15 items?</ModalHeader>
  <ModalBody>
    <p className="mb-4 text-gray-500 dark:text-gray-400">
      Associated account activity will be deleted and cannot be restored.
    </p>
    <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
      <div className="flex items-start gap-2">
        <Checkbox id="dc-confirm" required />
        <Label htmlFor="dc-confirm" className="text-sm text-gray-500 dark:text-gray-400">
          Also delete{" "}
          <span className="font-medium text-gray-900 dark:text-white">all posts, photos and videos</span>{" "}
          published on behalf of these items.
        </Label>
      </div>
    </div>
  </ModalBody>
  <ModalFooter>
    <Button color="failure">Yes, delete</Button>
    <Button color="gray" onClick={() => setOpen(false)}>Cancel</Button>
  </ModalFooter>
</Modal>`}
        >
          <CheckboxDeleteModal />
        </BlockPreview>

      </section>
    </div>
  );
}
