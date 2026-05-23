"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Button,
  Checkbox,
  Label,
  Modal,
  ModalBody,
  Select,
  TextInput,
  Textarea,
  ToggleSwitch,
  Tooltip,
} from "flowbite-react";
import { HiPencil, HiTrash } from "react-icons/hi";

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

// ─── Close button SVG shared across modals ────────────────────────────────────
function CloseBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-5 top-4.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
      <span className="sr-only">Close modal</span>
    </button>
  );
}

// ─── Delete button shared across modals ──────────────────────────────────────
function DeleteBtn() {
  return (
    <Button
      color="failure"
      outline
      className="[&>span]:border-red-600 [&>span]:px-5 [&>span]:py-2.5 border-red-600 text-red-600 hover:bg-red-600 hover:text-white dark:border-red-500 dark:text-red-500"
    >
      <HiTrash className="-ml-1 mr-1 h-5 w-5" />
      Delete
    </Button>
  );
}

// ─── 1. Default — update product (simple) ────────────────────────────────────
function UpdateProductModal() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Update product</Button>
      <Modal popup show={open} size="2xl" onClose={() => setOpen(false)}>
        <ModalBody className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Update Product</h3>
            <CloseBtn onClick={() => setOpen(false)} />
          </div>
          <form>
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="up-name" className="mb-2 block">Name</Label>
                <TextInput id="up-name" defaultValue="iPad Air Gen 5th Wi-Fi" name="name" placeholder="Ex. Apple iMac 27&quot;" />
              </div>
              <div>
                <Label htmlFor="up-brand" className="mb-2 block">Brand</Label>
                <TextInput id="up-brand" defaultValue="Google" name="brand" placeholder="Ex. Apple" />
              </div>
              <div>
                <Label htmlFor="up-price" className="mb-2 block">Price</Label>
                <TextInput id="up-price" defaultValue="399" name="price" placeholder="$299" type="number" />
              </div>
              <div>
                <Label htmlFor="up-category" className="mb-2 block">Category</Label>
                <Select id="up-category" name="category">
                  <option>Electronics</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="up-desc" className="mb-2 block">Description</Label>
                <Textarea id="up-desc" name="description" placeholder="Write a description..." rows={5} defaultValue="Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage." />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button type="submit" size="lg">
                <HiPencil className="-ml-1 mr-2 h-4 w-4" />
                Update product
              </Button>
              <DeleteBtn />
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}

// ─── 2. Update user ───────────────────────────────────────────────────────────
function UpdateUserModal() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Update user</Button>
      <Modal popup show={open} size="xl" onClose={() => setOpen(false)}>
        <ModalBody className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Update user</h3>
            <CloseBtn onClick={() => setOpen(false)} />
          </div>
          <form>
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="uu-username" className="mb-2 block">Username</Label>
                <TextInput id="uu-username" defaultValue="leslie.livingston" name="username" placeholder="Ex. bonnie.green" required />
              </div>
              <div>
                <Label htmlFor="uu-email" className="mb-2 block">Email</Label>
                <TextInput id="uu-email" defaultValue="leslie@company.com" name="email" placeholder="bonnie@company.com" required type="email" />
              </div>
              <div>
                <Label htmlFor="uu-password" className="mb-2 block">Password</Label>
                <TextInput id="uu-password" name="password" placeholder="•••••••••" required type="password" />
              </div>
              <div>
                <Label htmlFor="uu-confirm-password" className="mb-2 block">Confirm password</Label>
                <TextInput id="uu-confirm-password" name="confirm-password" placeholder="•••••••••" required type="password" />
              </div>
            </div>
            <Button size="lg" type="submit" onClick={() => setOpen(false)}>
              <HiPencil className="-ml-1 mr-2 h-4 w-4" />
              Update user
            </Button>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}

// ─── 3. Update user with file upload + role checkboxes + status toggle ────────
function UpdateUserFileUploadModal() {
  const [open, setOpen] = useState(true);
  const [userStatus, setUserStatus] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Update user (full)</Button>
      <Modal popup show={open} size="2xl" onClose={() => setOpen(false)}>
        <ModalBody className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Update user</h3>
            <CloseBtn onClick={() => setOpen(false)} />
          </div>
          <form>
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="uuf-first" className="mb-2 block">First Name</Label>
                <TextInput id="uuf-first" defaultValue="Leslie" name="firstName" placeholder="Leslie" required />
              </div>
              <div>
                <Label htmlFor="uuf-last" className="mb-2 block">Last Name</Label>
                <TextInput id="uuf-last" defaultValue="Livingston" name="lastName" placeholder="Livingston" required />
              </div>
              <div>
                <Label htmlFor="uuf-email" className="mb-2 block">Email</Label>
                <TextInput id="uuf-email" defaultValue="leslie@company.com" name="email" placeholder="bonnie@company.com" required type="email" />
              </div>
              <div>
                <Label htmlFor="uuf-permissions" className="mb-2 inline-flex items-center">
                  User Permissions
                  <Tooltip content="Access granted to users to specific resources such as files, applications, networks, or devices.">
                    <button type="button" className="ml-1">
                      <svg aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      <span className="sr-only">Details</span>
                    </button>
                  </Tooltip>
                </Label>
                <Select id="uuf-permissions" name="user-permissions">
                  <option>Operational</option>
                  <option value="NO">Non Operational</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="uuf-password" className="mb-2 block">Password</Label>
                <TextInput id="uuf-password" name="password" placeholder="•••••••••" required type="password" />
              </div>
              <div>
                <Label htmlFor="uuf-confirm-password" className="mb-2 block">Confirm password</Label>
                <TextInput id="uuf-confirm-password" name="confirm-password" placeholder="•••••••••" required type="password" />
              </div>
              <div className="sm:col-span-2">
                <Label className="mb-2 block" htmlFor="uuf-avatar">Upload avatar</Label>
                <div className="w-full items-center sm:flex">
                  <img
                    alt="User avatar"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                    className="mb-4 h-20 w-20 rounded-full sm:mb-0 sm:mr-4"
                  />
                  <div className="w-full">
                    <input
                      className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
                      aria-describedby="uuf-avatar-help"
                      id="uuf-avatar"
                      type="file"
                    />
                    <p className="mb-3 mt-1 text-xs font-normal text-gray-500 dark:text-gray-300" id="uuf-avatar-help">
                      SVG, PNG, JPG or GIF (MAX. 800x400px).
                    </p>
                    <div className="flex items-center space-x-2.5">
                      <Button size="sm" className="inline-flex [&>span]:text-xs">
                        <svg className="-ml-1 mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        Upload new picture
                      </Button>
                      <Button color="gray" outline size="sm" className="inline-flex dark:border-gray-600 [&>span]:text-xs dark:[&>span]:bg-gray-800 dark:[&>span]:text-gray-400">
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <Label className="mb-2 block" htmlFor="uuf-role">Assign Role</Label>
                <div className="space-y-4 sm:flex sm:space-y-0">
                  <div className="mr-4 flex items-center">
                    <Checkbox id="uuf-role-admin" name="role" />
                    <Label htmlFor="uuf-role-admin" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Administrator</Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox id="uuf-role-member" name="role" />
                    <Label htmlFor="uuf-role-member" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Member</Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox defaultChecked id="uuf-role-viewer" name="role" />
                    <Label htmlFor="uuf-role-viewer" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Viewer</Label>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 dark:text-white text-sm font-medium text-gray-900">Status</div>
                <ToggleSwitch
                  checked={userStatus}
                  id="uuf-status"
                  label={userStatus ? "Active" : "Inactive"}
                  name="status"
                  onChange={() => setUserStatus(!userStatus)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="lg" type="submit" onClick={() => setOpen(false)}>
                <HiPencil className="-ml-1 mr-2 h-4 w-4" />
                Update user
              </Button>
              <DeleteBtn />
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}

// ─── 4. Accordion update modal (general info + additional info) ───────────────
function UpdateUserAccordionModal() {
  const [open, setOpen] = useState(true);
  const [userStatus, setUserStatus] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Update user (accordion)</Button>
      <Modal popup show={open} size="2xl" onClose={() => setOpen(false)}>
        <ModalBody className="relative rounded-lg bg-white p-0 shadow dark:bg-gray-800">
          <div className="flex items-center justify-between rounded-t p-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Update user</h3>
            <CloseBtn onClick={() => setOpen(false)} />
          </div>
          <form>
            <Accordion flush className="divide-y-0 border-0">
              <AccordionPanel>
                <AccordionTitle
                  theme={{
                    base: "flex w-full items-center justify-between px-5 py-5 text-left font-medium text-gray-500 dark:text-gray-400",
                    open: {
                      off: "border-b bg-gray-100 hover:bg-gray-200 dark:border-0 dark:bg-gray-700 dark:hover:bg-gray-600",
                    },
                  }}
                >
                  General Information
                </AccordionTitle>
                <AccordionContent className="dark:bg-gray-800">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="ua-first" className="mb-2 block">First Name</Label>
                      <TextInput id="ua-first" defaultValue="Bonnie" name="first-name" placeholder="John" required />
                    </div>
                    <div>
                      <Label htmlFor="ua-last" className="mb-2 block">Last Name</Label>
                      <TextInput id="ua-last" defaultValue="Green" name="last-name" placeholder="Doe" required />
                    </div>
                    <div>
                      <Label htmlFor="ua-email" className="mb-2 block">Email</Label>
                      <TextInput id="ua-email" defaultValue="bonnie.green@company.com" name="email" placeholder="john@company.com" required type="email" />
                    </div>
                    <div>
                      <Label htmlFor="ua-permissions" className="mb-2 inline-flex items-center">
                        User Permissions
                        <Tooltip content="Access rights granted to users for specific resources.">
                          <button type="button" className="ml-1">
                            <svg aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">User permission details</span>
                          </button>
                        </Tooltip>
                      </Label>
                      <Select id="ua-permissions" name="user-permissions">
                        <option>Operational</option>
                        <option value="NO">Non Operational</option>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="ua-job" className="mb-2 block">Job Title</Label>
                      <TextInput id="ua-job" defaultValue="Back-end software engineer" name="job-title" placeholder="Ex. React Developer" required />
                    </div>
                    <div>
                      <Label htmlFor="ua-role" className="mb-2 inline-flex items-center">
                        User Role
                        <Tooltip content="Assign the most suitable role — Owner, Admin, Editor, Contributor, or Viewer.">
                          <button type="button" className="ml-1">
                            <svg aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">User role details</span>
                          </button>
                        </Tooltip>
                      </Label>
                      <Select id="ua-role" name="user-role">
                        <option>Owner</option>
                        <option value="AD">Admin</option>
                        <option value="ED">Editor</option>
                        <option value="CO">Contributor</option>
                        <option value="VI">Viewer</option>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="ua-password" className="mb-2 block">Password</Label>
                      <TextInput id="ua-password" name="password" placeholder="•••••••••" required type="password" />
                    </div>
                    <div>
                      <Label htmlFor="ua-confirm-password" className="mb-2 block">Confirm password</Label>
                      <TextInput id="ua-confirm-password" name="confirm-password" placeholder="•••••••••" required type="password" />
                    </div>
                    <div className="sm:col-span-2">
                      <Label className="mb-2 block" htmlFor="ua-role-assign">Assign Role</Label>
                      <div className="space-y-4 sm:flex sm:space-y-0">
                        <div className="mr-4 flex items-center">
                          <Checkbox id="ua-role-admin" name="role" />
                          <Label htmlFor="ua-role-admin" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Administrator</Label>
                        </div>
                        <div className="mr-4 flex items-center">
                          <Checkbox id="ua-role-member" name="role" />
                          <Label htmlFor="ua-role-member" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Member</Label>
                        </div>
                        <div className="mr-4 flex items-center">
                          <Checkbox defaultChecked id="ua-role-viewer" name="role" />
                          <Label htmlFor="ua-role-viewer" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Viewer</Label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 text-sm text-gray-900 dark:text-white">Status</div>
                      <ToggleSwitch
                        checked={userStatus}
                        id="ua-status"
                        label={userStatus ? "Active" : "Inactive"}
                        name="status"
                        onChange={() => setUserStatus(!userStatus)}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle
                  theme={{
                    base: "flex w-full items-center justify-between px-5 py-5 text-left font-medium text-gray-500 dark:text-gray-400",
                    open: {
                      off: "border-b bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600",
                    },
                  }}
                >
                  Additional Information
                </AccordionTitle>
                <AccordionContent className="dark:bg-gray-800">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="col-span-2">
                      <Label htmlFor="ua-phone" className="mb-2 block">Phone Number</Label>
                      <TextInput id="ua-phone" defaultValue="+1 631 442 978" name="phone-number" placeholder="Ex. +1234 567 890" required />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="ua-linkedin" className="mb-2 block">LinkedIn URL</Label>
                      <TextInput id="ua-linkedin" defaultValue="https://www.linkedin.com/in/bonniegreen/" name="linkedin" placeholder="Ex. https://www.linkedin.com/in/example/" required type="url" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="ua-website" className="mb-2 block">Personal Website</Label>
                      <TextInput id="ua-website" defaultValue="https://example.com" name="personal-website" placeholder="Ex. https://website.com" required type="url" />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="ua-country" className="mb-2 block">Country</Label>
                      <Select id="ua-country" name="country">
                        <option>United States</option>
                        <option>Australia</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>Germany</option>
                      </Select>
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="ua-bio" className="mb-2 block">Biography</Label>
                      <Textarea id="ua-bio" name="biography" placeholder="Write your biography..." rows={4} defaultValue="Full-stack developer. Open-source contributor. Building things that matter." />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
            <div className="flex items-center space-x-4 px-4 py-6">
              <Button size="lg" type="submit" onClick={() => setOpen(false)}>
                <HiPencil className="-ml-1 mr-2 h-4 w-4" />
                Update user
              </Button>
              <DeleteBtn />
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function UpdateModalsPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Update Modals</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Modal-based edit flows for updating records inline — same patterns as create modals, pre-populated with
          existing data for quick edits. Includes simple product updates, user credential edits, avatar upload, and
          accordion-sectioned detail forms.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/update-modals/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — update product modal"
          code={`const [open, setOpen] = useState(true);

<Button onClick={() => setOpen(true)}>Update product</Button>
<Modal popup show={open} size="2xl" onClose={() => setOpen(false)}>
  <ModalBody className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
    <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 ...">
      <h3>Update Product</h3>
      <button onClick={() => setOpen(false)}>✕</button>
    </div>
    <form>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <TextInput id="name" defaultValue="iPad Air Gen 5th Wi-Fi" />
        <TextInput id="brand" defaultValue="Google" />
        <TextInput id="price" defaultValue="399" type="number" />
        <Select id="category">...</Select>
        <Textarea id="description" className="sm:col-span-2" rows={5} />
      </div>
      <div className="flex items-center space-x-4">
        <Button type="submit">Update product</Button>
        <Button color="failure" outline>Delete</Button>
      </div>
    </form>
  </ModalBody>
</Modal>`}
        >
          <UpdateProductModal />
        </BlockPreview>

        <BlockPreview
          label="User — update user credentials"
          code={`const [open, setOpen] = useState(true);

<Button onClick={() => setOpen(true)}>Update user</Button>
<Modal popup show={open} size="xl" onClose={() => setOpen(false)}>
  <ModalBody className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
    <h3>Update user</h3>
    <form>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <TextInput id="username" defaultValue="leslie.livingston" />
        <TextInput id="email" defaultValue="leslie@company.com" type="email" />
        <TextInput id="password" type="password" />
        <TextInput id="confirm-password" type="password" />
      </div>
      <Button size="lg" type="submit">Update user</Button>
    </form>
  </ModalBody>
</Modal>`}
        >
          <UpdateUserModal />
        </BlockPreview>

        <BlockPreview
          label="User with file upload — avatar, roles, status toggle"
          code={`const [open, setOpen] = useState(true);
const [userStatus, setUserStatus] = useState(false);

<Modal popup show={open} size="2xl" onClose={() => setOpen(false)}>
  <ModalBody>
    <form>
      {/* Name, Email, Permissions, Password fields */}
      <div className="sm:col-span-2">
        {/* Avatar upload section */}
        <img src="..." className="h-20 w-20 rounded-full" />
        <input type="file" />
        <Button size="sm">Upload new picture</Button>
      </div>
      <div className="sm:col-span-2">
        {/* Role checkboxes: Administrator / Member / Viewer (defaultChecked) */}
        <Checkbox id="role-admin" /><Label>Administrator</Label>
        <Checkbox id="role-member" /><Label>Member</Label>
        <Checkbox defaultChecked id="role-viewer" /><Label>Viewer</Label>
      </div>
      <ToggleSwitch
        checked={userStatus}
        label={userStatus ? "Active" : "Inactive"}
        onChange={() => setUserStatus(!userStatus)}
      />
      <div className="flex items-center space-x-4">
        <Button type="submit">Update user</Button>
        <Button color="failure" outline>Delete</Button>
      </div>
    </form>
  </ModalBody>
</Modal>`}
        >
          <UpdateUserFileUploadModal />
        </BlockPreview>

        <BlockPreview
          label="Accordion — general info + additional info sections"
          code={`const [open, setOpen] = useState(true);
const [userStatus, setUserStatus] = useState(false);

<Modal popup show={open} size="2xl" onClose={() => setOpen(false)}>
  <ModalBody className="relative rounded-lg bg-white p-0 shadow dark:bg-gray-800">
    <div className="flex items-center justify-between p-5">
      <h3>Update user</h3>
    </div>
    <form>
      <Accordion flush>
        <AccordionPanel>
          <AccordionTitle>General Information</AccordionTitle>
          <AccordionContent>
            {/* First/Last name, Email, Permissions, Job title, Role select */}
            {/* Password, Confirm password, Role checkboxes, Status toggle */}
            <ToggleSwitch checked={userStatus} label={userStatus ? "Active" : "Inactive"} />
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>Additional Information</AccordionTitle>
          <AccordionContent>
            {/* Phone, LinkedIn, Website, Country, Biography */}
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <div className="flex items-center space-x-4 px-4 py-6">
        <Button type="submit">Update user</Button>
        <Button color="failure" outline>Delete</Button>
      </div>
    </form>
  </ModalBody>
</Modal>`}
        >
          <UpdateUserAccordionModal />
        </BlockPreview>

      </section>
    </div>
  );
}
