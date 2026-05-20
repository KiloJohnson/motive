"use client";

import { useState } from "react";
import { Button, Label, Modal, ModalHeader, ModalBody, ModalFooter, Select, TextInput, Textarea } from "flowbite-react";
import { HiPlus, HiX } from "react-icons/hi";

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

function CreateProductModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Create product</Button>
      <Modal dismissible show={open} size="lg" onClose={() => setOpen(false)}>
        <ModalHeader>Add Product</ModalHeader>
        <ModalBody>
          <form>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="cm-name" className="mb-2 block">Name</Label>
                <TextInput id="cm-name" placeholder="Type product name" required />
              </div>
              <div>
                <Label htmlFor="cm-brand" className="mb-2 block">Brand</Label>
                <TextInput id="cm-brand" placeholder="Product brand" />
              </div>
              <div>
                <Label htmlFor="cm-price" className="mb-2 block">Price</Label>
                <TextInput id="cm-price" placeholder="$2999" type="number" />
              </div>
              <div>
                <Label htmlFor="cm-cat" className="mb-2 block">Category</Label>
                <Select id="cm-cat">
                  <option>Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="cm-desc" className="mb-2 block">Description</Label>
                <Textarea id="cm-desc" placeholder="Write product description here" rows={4} />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpen(false)}>
            <HiPlus className="-ml-1 mr-2 h-4 w-4" />
            Add new product
          </Button>
          <Button color="gray" onClick={() => setOpen(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

function CreateUserModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Create user</Button>
      <Modal dismissible show={open} size="md" onClose={() => setOpen(false)}>
        <ModalHeader>Add new user</ModalHeader>
        <ModalBody>
          <form>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="cmu-user" className="mb-2 block">Username</Label>
                <TextInput id="cmu-user" placeholder="username.example" required />
              </div>
              <div>
                <Label htmlFor="cmu-email" className="mb-2 block">Email</Label>
                <TextInput id="cmu-email" placeholder="name@company.com" type="email" required />
              </div>
              <div>
                <Label htmlFor="cmu-pw" className="mb-2 block">Password</Label>
                <TextInput id="cmu-pw" placeholder="•••••••••" type="password" required />
              </div>
              <div>
                <Label htmlFor="cmu-cpw" className="mb-2 block">Confirm password</Label>
                <TextInput id="cmu-cpw" placeholder="•••••••••" type="password" required />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button type="submit">
            <HiPlus className="mr-2 h-4 w-4" />
            Add new user
          </Button>
          <Button color="gray" onClick={() => setOpen(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default function CreateModalsPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Create Modals</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Modal-based quick-create flows for adding records without leaving the current page.
          Click the trigger button below to open each modal and inspect the form pattern.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/create-modals/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — create product modal"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Create product</Button>
<Modal onClose={() => setOpen(false)} show={open}>
  <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
    <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add Product</h3>
      <button onClick={() => setOpen(false)} className="absolute right-5 top-[18px] ...">
        <HiX className="h-5 w-5" />
      </button>
    </div>
    <form>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        {/* Name, Brand, Price, Category fields */}
        <div className="sm:col-span-2">
          <Textarea id="description" placeholder="Write product description here" rows={4} />
        </div>
      </div>
      <Button size="lg"><HiPlus className="mr-2 h-4 w-4" />Add new product</Button>
    </form>
  </ModalBody>
</Modal>`}
        >
          <CreateProductModal />
        </BlockPreview>

        <BlockPreview
          label="User — create user modal"
          code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Create user</Button>
<Modal onClose={() => setOpen(false)} show={open}>
  <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add new user</h3>
    <form>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        {/* Username, Email, Password, Confirm password */}
      </div>
      <Button type="submit" size="lg"><HiPlus className="mr-2 h-4 w-4" />Add new user</Button>
    </form>
  </ModalBody>
</Modal>`}
        >
          <CreateUserModal />
        </BlockPreview>

      </section>
    </div>
  );
}
