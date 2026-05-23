"use client";

import { useState } from "react";
import { Avatar, AvatarGroup, AvatarGroupCounter, Badge, Button } from "flowbite-react";

// ---------------------------------------------------------------------------
// BlockPreview
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Shared close-button SVG
// ---------------------------------------------------------------------------
const CloseIcon = () => (
  <svg aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const EditIcon = () => (
  <svg aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-1 h-5 w-5">
    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
  </svg>
);

const DeleteIcon = () => (
  <svg aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-1.5 h-5 w-5">
    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

// ---------------------------------------------------------------------------
// Shared inline modal shell — renders the modal body as a visible card
// ---------------------------------------------------------------------------
function ModalCard({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="relative w-full max-w-xl rounded-lg bg-white p-5 shadow dark:bg-gray-800">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <CloseIcon />
        <span className="sr-only">Close modal</span>
      </button>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// 1. Default — product summary
// ---------------------------------------------------------------------------
function DefaultReadModal() {
  const [closed, setClosed] = useState(false);
  if (closed) {
    return (
      <button
        onClick={() => setClosed(false)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Show read modal
      </button>
    );
  }
  return (
    <ModalCard onClose={() => setClosed(true)}>
      <div className="mb-4 flex justify-between rounded-t sm:mb-5">
        <div className="text-lg text-gray-900 dark:text-white md:text-xl">
          <h3 className="font-semibold">Apple iMac 27&quot;</h3>
          <p className="font-bold">$2999</p>
        </div>
      </div>
      <dl>
        <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
        <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
          Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz,
          16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
          Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
        </dd>
        <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Category</dt>
        <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">Electronics/PC</dd>
      </dl>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Button size="lg" className="[&>span]:text-sm">
            <EditIcon />Edit
          </Button>
          <Button color="gray" outline size="lg" className="dark:border-gray-600 [&>span]:text-sm dark:[&>span]:bg-gray-800 dark:[&>span]:text-gray-400">
            Preview
          </Button>
        </div>
        <Button color="failure" size="lg" className="inline-flex [&>span]:text-sm">
          <DeleteIcon />Delete
        </Button>
      </div>
    </ModalCard>
  );
}

// ---------------------------------------------------------------------------
// 2. Product — images + metadata grid
// ---------------------------------------------------------------------------
function ReadProductModal() {
  const [closed, setClosed] = useState(false);
  if (closed) {
    return (
      <button
        onClick={() => setClosed(false)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Read product
      </button>
    );
  }
  return (
    <ModalCard onClose={() => setClosed(true)}>
      <div className="mb-4 flex justify-between rounded-t sm:mb-5">
        <div className="text-lg text-gray-900 dark:text-white md:text-xl">
          <h3 className="font-semibold">Apple iMac 27&quot;</h3>
          <p className="font-bold">$2999</p>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-4 sm:mb-5 sm:grid-cols-4">
        {[
          "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png",
          "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
          "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png",
          "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png",
        ].map((src, i) => (
          <div key={i} className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700 md:h-36 md:w-36">
            <img alt={`iMac view ${i + 1}`} src={src} />
          </div>
        ))}
      </div>
      <dl className="sm:mb-5">
        <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
        <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
          Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz,
          16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage.
        </dd>
        <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Colors</dt>
        <dd className="mb-4 flex items-center space-x-2 text-gray-500 dark:text-gray-400">
          <div className="h-6 w-6 rounded-full bg-purple-600"></div>
          <div className="h-6 w-6 rounded-full bg-indigo-400"></div>
          <div className="h-6 w-6 rounded-full bg-blue-600"></div>
          <div className="h-6 w-6 rounded-full bg-pink-400"></div>
          <div className="h-6 w-6 rounded-full bg-teal-300"></div>
          <div className="h-6 w-6 rounded-full bg-green-300"></div>
        </dd>
      </dl>
      <dl className="mb-4 grid grid-cols-2 gap-4 sm:mb-5 sm:grid-cols-3">
        {[
          { label: "Sold by", value: "Flowbite" },
          { label: "Ships from", value: "Flowbite" },
          { label: "Shipping", value: "Worldwide" },
          { label: "Dimensions (cm)", value: "105 x 15 x 23" },
          { label: "Item weight", value: "12kg" },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">{label}</dt>
            <dd className="text-gray-500 dark:text-gray-400">{value}</dd>
          </div>
        ))}
        <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Product State</dt>
          <dd className="text-gray-500 dark:text-gray-400">
            <Badge className="inline-flex [&>span]:flex [&>span]:items-center">
              <svg aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="mr-1 h-3 w-3">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              New
            </Badge>
          </dd>
        </div>
      </dl>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Button size="lg" className="[&>span]:text-sm">
            <EditIcon />Edit
          </Button>
          <Button color="gray" outline size="lg" className="dark:border-gray-600 [&>span]:text-sm dark:[&>span]:bg-gray-800 dark:[&>span]:text-gray-400">
            Preview
          </Button>
        </div>
        <Button color="failure" size="lg" className="inline-flex [&>span]:text-sm">
          <DeleteIcon />Delete
        </Button>
      </div>
    </ModalCard>
  );
}

// ---------------------------------------------------------------------------
// 3. User — simple profile
// ---------------------------------------------------------------------------
function ReadUserModal() {
  const [closed, setClosed] = useState(false);
  if (closed) {
    return (
      <button
        onClick={() => setClosed(false)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Read user
      </button>
    );
  }
  return (
    <ModalCard onClose={() => setClosed(true)}>
      <div className="mb-4 flex justify-between rounded-t sm:mb-5">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white md:text-xl">Helene Engels</h3>
          <p className="text-base text-gray-500 dark:text-gray-400">Moderator</p>
        </div>
      </div>
      <dl>
        <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Email</dt>
        <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">helene@company.com</dd>
        <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Biography</dt>
        <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
          Hello, I&apos;m Helene Engels, USA Designer, Creating things that stand out, Featured by Adobe, Figma,
          Webflow and others, Daily design tips &amp; resources, Exploring Web3.
        </dd>
      </dl>
      <div className="flex items-center justify-between">
        <Button size="lg" className="[&>span]:text-sm">
          <EditIcon />Edit
        </Button>
        <Button color="failure" size="lg" className="inline-flex [&>span]:text-sm">
          <DeleteIcon />Delete
        </Button>
      </div>
    </ModalCard>
  );
}

// ---------------------------------------------------------------------------
// 4. Advanced user — avatar + two-column details + social links
// ---------------------------------------------------------------------------
function AdvancedUserReadModal() {
  const [closed, setClosed] = useState(false);
  if (closed) {
    return (
      <button
        onClick={() => setClosed(false)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Read user (advanced)
      </button>
    );
  }
  return (
    <ModalCard onClose={() => setClosed(true)}>
      <div className="mb-4 flex justify-between rounded-t sm:mb-5">
        <div className="flex items-center">
          <img
            alt="Helene Engels avatar"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
            className="mr-3 h-12 w-12 rounded-full sm:mr-4"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white md:text-xl">Helene Engels</h3>
            <p className="text-base text-gray-500 dark:text-gray-400">Moderator</p>
          </div>
        </div>
      </div>
      <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-2 sm:gap-6">
        <dl>
          <dt className="sr-only">Role</dt>
          <dd className="mb-2 flex items-center text-gray-500 dark:text-gray-400">
            <svg className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            Frontend Developer
          </dd>
          <dt className="sr-only">Location</dt>
          <dd className="mb-4 flex items-center text-gray-500 dark:text-gray-400 sm:mb-5">
            <svg className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            United States of America
          </dd>
          <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">Email Address</dt>
          <dd className="mb-4 font-medium text-gray-900 dark:text-white sm:mb-5">helene@company.com</dd>
          <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">Home Address</dt>
          <dd className="mb-4 font-medium text-gray-900 dark:text-white sm:mb-5">
            92 Miles Drive, Newark, NJ 07103, California, United States of America
          </dd>
          <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">Phone Number</dt>
          <dd className="font-medium text-gray-900 dark:text-white">+1234 567 890 / +12 345 678</dd>
        </dl>
        <dl>
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Biography</dt>
          <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
            Hello, I&apos;m Helene Engels, USA Designer, Creating things that stand out, Featured by Adobe, Figma,
            Webflow and others, Daily design tips &amp; resources, Exploring Web3.
          </dd>
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Social</dt>
          <dd className="inline-flex items-center space-x-1">
            {/* Facebook */}
            <a href="#" className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="#" className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Dribbble */}
            <a href="#" className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
              </svg>
            </a>
          </dd>
        </dl>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Button size="lg" className="[&>span]:text-sm">
            <EditIcon />Edit
          </Button>
          <Button color="gray" outline size="lg" className="dark:border-gray-600 [&>span]:text-sm dark:[&>span]:bg-gray-800 dark:[&>span]:text-gray-400">
            Preview
          </Button>
        </div>
        <Button color="failure" size="lg" className="inline-flex [&>span]:text-sm">
          <DeleteIcon />Delete
        </Button>
      </div>
    </ModalCard>
  );
}

// ---------------------------------------------------------------------------
// 5. Event — date + location + details
// ---------------------------------------------------------------------------
function ReadEventModal() {
  const [closed, setClosed] = useState(false);
  if (closed) {
    return (
      <button
        onClick={() => setClosed(false)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Read event
      </button>
    );
  }
  return (
    <ModalCard onClose={() => setClosed(true)}>
      <div className="mb-4 flex items-center justify-between rounded-t border-b border-gray-200 pb-4 dark:border-gray-700 sm:mb-5">
        <h3 className="font-semibold text-gray-900 dark:text-white">The 4th Digital Transformation</h3>
      </div>
      <dl className="mb-4 sm:mb-5">
        <dt className="sr-only">Date</dt>
        <dd className="mb-2 flex items-center text-gray-500 dark:text-gray-400">
          <svg className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span className="font-medium text-gray-900 dark:text-white">26th November, 2022</span>
        </dd>
        <dt className="sr-only">Location</dt>
        <dd className="mb-4 flex items-center text-gray-500 dark:text-gray-400 sm:mb-5">
          <svg className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium text-gray-900 dark:text-white">California, USA</span>
        </dd>
        <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
        <dd className="text-gray-500 dark:text-gray-400">
          The 4th Digital Transformation and Industry 4.0 Free Online Conference Organized by Flowbite and
          Themesberg, Live on Saturday 26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom Webinars.
        </dd>
      </dl>
      <div className="flex items-center space-x-3 sm:space-x-4">
        <Button size="lg" className="[&>span]:text-sm">
          <EditIcon />Edit
        </Button>
        <Button color="failure" size="lg" className="inline-flex [&>span]:text-sm">
          <DeleteIcon />Delete
        </Button>
      </div>
    </ModalCard>
  );
}

// ---------------------------------------------------------------------------
// 6. Advanced event — two-column with avatars
// ---------------------------------------------------------------------------
function AdvancedReadEventModal() {
  const [closed, setClosed] = useState(false);
  if (closed) {
    return (
      <button
        onClick={() => setClosed(false)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Read event (advanced)
      </button>
    );
  }
  return (
    <ModalCard onClose={() => setClosed(true)}>
      <div className="mb-4 flex items-center justify-between rounded-t border-b border-gray-200 pb-4 dark:border-gray-700 sm:mb-5">
        <h3 className="font-semibold text-gray-900 dark:text-white">The 4th Digital Transformation</h3>
      </div>
      <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-2 sm:gap-6">
        <dl className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
          <dt className="sr-only">Date</dt>
          <dd className="mb-2 flex items-center text-gray-500 dark:text-gray-400">
            <svg className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="font-medium text-gray-900 dark:text-white">26th November, 2022</span>
          </dd>
          <dt className="sr-only">Location</dt>
          <dd className="mb-4 flex items-center text-gray-500 dark:text-gray-400 sm:mb-5">
            <svg aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium text-gray-900 dark:text-white">California, USA</span>
          </dd>
          <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">Participants</dt>
          <AvatarGroup className="mb-6">
            <Avatar
              alt="Helene Engels"
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
              rounded
              size="sm"
              stacked
            />
            <Avatar
              alt="Robert Brown"
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
              rounded
              size="sm"
              stacked
            />
            <Avatar
              alt="Bonnie Green"
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
              rounded
              size="sm"
              stacked
            />
            <AvatarGroupCounter href="#" total={9} className="h-8 w-8" />
          </AvatarGroup>
          <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">Online</dt>
          <dd className="mb-4 font-medium text-gray-900 dark:text-white sm:mb-5">Google Meet</dd>
          <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">Duration</dt>
          <dd className="font-medium text-gray-900 dark:text-white">All day</dd>
        </dl>
        <dl>
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
          <dd className="text-gray-500 dark:text-gray-400">
            The 4th Digital Transformation and Industry 4.0 Free Online Conference Organized by Flowbite and
            Themesberg, Live on Saturday 26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom Webinars.
          </dd>
        </dl>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Button size="lg" className="[&>span]:text-sm">
            <EditIcon />Edit
          </Button>
          <Button color="gray" outline size="lg" className="dark:border-gray-600 [&>span]:text-sm dark:[&>span]:bg-gray-800 dark:[&>span]:text-gray-400">
            Preview
          </Button>
        </div>
        <Button color="failure" size="lg" className="inline-flex [&>span]:text-sm">
          <DeleteIcon />Delete
        </Button>
      </div>
    </ModalCard>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function ReadModalsPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Read Modals</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Modal patterns for displaying record details — user profiles, order summaries, product info — in an
          overlay without navigating away.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/read-modals/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — product summary modal"
          code={`// Product summary: name, price, description, category
<Modal onClose={() => setOpen(false)} popup size="xl" show={open}>
  <Modal.Body className="relative rounded-lg bg-white p-5 shadow dark:bg-gray-800">
    <h3 className="font-semibold text-gray-900 dark:text-white">Apple iMac 27"</h3>
    <p className="font-bold">$2999</p>
    <dl>
      <dt className="mb-2 font-semibold ...">Details</dt>
      <dd className="mb-4 text-gray-500 ...">Standard glass, 3.8GHz 8-core ...</dd>
      <dt className="mb-2 font-semibold ...">Category</dt>
      <dd className="text-gray-500 ...">Electronics/PC</dd>
    </dl>
    <div className="flex items-center justify-between">
      <div className="flex space-x-3">
        <Button size="lg"><EditIcon /> Edit</Button>
        <Button color="gray" outline size="lg">Preview</Button>
      </div>
      <Button color="failure" size="lg"><DeleteIcon /> Delete</Button>
    </div>
  </Modal.Body>
</Modal>`}
        >
          <DefaultReadModal />
        </BlockPreview>

        <BlockPreview
          label="Product — images + metadata grid"
          code={`// Product with image gallery, color swatches, and stat grid
<Modal onClose={() => setOpen(false)} popup size="3xl" show={open}>
  <Modal.Body className="relative rounded-lg bg-white p-5 shadow dark:bg-gray-800">
    <h3 className="font-semibold">Apple iMac 27"</h3>
    <p className="font-bold">$2999</p>
    {/* 4-up image grid */}
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
      <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700 md:h-36 md:w-36">
        <img alt="iMac Side" src="..." />
      </div>
      {/* ...more images */}
    </div>
    {/* Color swatches */}
    <div className="flex space-x-2">
      <div className="h-6 w-6 rounded-full bg-purple-600" />
      {/* ...more colors */}
    </div>
    {/* Stat grid */}
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
        <dt className="font-semibold">Sold by</dt>
        <dd className="text-gray-500">Flowbite</dd>
      </div>
      {/* ...more stats */}
    </dl>
    <div className="flex items-center justify-between">
      <Button size="lg"><EditIcon /> Edit</Button>
      <Button color="failure" size="lg"><DeleteIcon /> Delete</Button>
    </div>
  </Modal.Body>
</Modal>`}
        >
          <ReadProductModal />
        </BlockPreview>

        <BlockPreview
          label="User — simple profile"
          code={`// User profile: name, role, email, bio
<Modal onClose={() => setOpen(false)} popup size="xl" show={open}>
  <Modal.Body className="relative rounded-lg bg-white p-5 shadow dark:bg-gray-800">
    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Helene Engels</h3>
    <p className="text-gray-500">Moderator</p>
    <dl>
      <dt className="font-semibold">Email</dt>
      <dd className="text-gray-500">helene@company.com</dd>
      <dt className="font-semibold">Biography</dt>
      <dd className="text-gray-500">Hello, I'm Helene Engels, USA Designer...</dd>
    </dl>
    <div className="flex items-center justify-between">
      <Button size="lg"><EditIcon /> Edit</Button>
      <Button color="failure" size="lg"><DeleteIcon /> Delete</Button>
    </div>
  </Modal.Body>
</Modal>`}
        >
          <ReadUserModal />
        </BlockPreview>

        <BlockPreview
          label="Advanced user — avatar + two-column details + social"
          code={`// Full user profile: avatar, two-column layout, social icons
<Modal onClose={() => setOpen(false)} popup size="3xl" show={open}>
  <Modal.Body className="relative rounded-lg bg-white p-5 shadow dark:bg-gray-800">
    {/* Avatar + name header */}
    <div className="flex items-center">
      <img src="..." className="mr-3 h-12 w-12 rounded-full" />
      <div>
        <h3 className="font-bold">Helene Engels</h3>
        <p className="text-gray-500">Moderator</p>
      </div>
    </div>
    {/* Two-column grid */}
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <dl>
        {/* Role, location, email, address, phone */}
      </dl>
      <dl>
        <dt className="font-semibold">Biography</dt>
        <dd className="text-gray-500">...</dd>
        <dt className="font-semibold">Social</dt>
        <dd className="inline-flex items-center space-x-1">
          {/* Facebook, Instagram, GitHub, Dribbble icon links */}
        </dd>
      </dl>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex space-x-3">
        <Button size="lg"><EditIcon /> Edit</Button>
        <Button color="gray" outline size="lg">Preview</Button>
      </div>
      <Button color="failure" size="lg"><DeleteIcon /> Delete</Button>
    </div>
  </Modal.Body>
</Modal>`}
        >
          <AdvancedUserReadModal />
        </BlockPreview>

        <BlockPreview
          label="Event — date, location, details"
          code={`// Event record: title, date/location with icons, description
<Modal onClose={() => setOpen(false)} popup size="md" show={open}>
  <Modal.Body className="relative rounded-lg bg-white p-5 shadow dark:bg-gray-800">
    <h3 className="font-semibold border-b pb-4">The 4th Digital Transformation</h3>
    <dl>
      <dd className="flex items-center text-gray-500">
        <CalendarIcon className="mr-1.5 h-4 w-4" />
        <span className="font-medium text-gray-900">26th November, 2022</span>
      </dd>
      <dd className="flex items-center text-gray-500">
        <LocationIcon className="mr-1.5 h-4 w-4" />
        <span className="font-medium text-gray-900">California, USA</span>
      </dd>
      <dt className="font-semibold">Details</dt>
      <dd className="text-gray-500">The 4th Digital Transformation...</dd>
    </dl>
    <div className="flex space-x-3">
      <Button size="lg"><EditIcon /> Edit</Button>
      <Button color="failure" size="lg"><DeleteIcon /> Delete</Button>
    </div>
  </Modal.Body>
</Modal>`}
        >
          <ReadEventModal />
        </BlockPreview>

        <BlockPreview
          label="Advanced event — two-column with avatar group"
          code={`// Event with structured sidebar: date, location, participants, duration
import { Avatar, AvatarGroup, AvatarGroupCounter } from "flowbite-react";

<Modal onClose={() => setOpen(false)} popup size="3xl" show={open}>
  <Modal.Body className="relative rounded-lg bg-white p-5 shadow dark:bg-gray-800">
    <h3 className="font-semibold border-b pb-4">The 4th Digital Transformation</h3>
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
      {/* Left panel: bordered info card */}
      <dl className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <dd className="flex items-center"><CalendarIcon /> 26th November, 2022</dd>
        <dd className="flex items-center"><LocationIcon /> California, USA</dd>
        <dt>Participants</dt>
        <AvatarGroup>
          <Avatar img="..." rounded size="sm" stacked />
          <Avatar img="..." rounded size="sm" stacked />
          <Avatar img="..." rounded size="sm" stacked />
          <AvatarGroupCounter href="#" total={9} />
        </AvatarGroup>
        <dt>Online</dt><dd>Google Meet</dd>
        <dt>Duration</dt><dd>All day</dd>
      </dl>
      {/* Right panel: details */}
      <dl>
        <dt className="font-semibold">Details</dt>
        <dd className="text-gray-500">The 4th Digital Transformation...</dd>
      </dl>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex space-x-3">
        <Button size="lg"><EditIcon /> Edit</Button>
        <Button color="gray" outline size="lg">Preview</Button>
      </div>
      <Button color="failure" size="lg"><DeleteIcon /> Delete</Button>
    </div>
  </Modal.Body>
</Modal>`}
        >
          <AdvancedReadEventModal />
        </BlockPreview>

      </section>
    </div>
  );
}
