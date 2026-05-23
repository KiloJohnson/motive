"use client";

import { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Radio,
  RangeSlider,
  Select,
  TabItem,
  Tabs,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import { HiSearch } from "react-icons/hi";

function BlockPreview({ children, label, code }: {
  children: React.ReactNode;
  label: string;
  code: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">{label}</h2>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
        <div className="bg-white dark:bg-gray-800 px-5 py-6">
          {children}
        </div>
      </div>
      <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">{code}</pre>
    </div>
  );
}

// Rendered as an open dropdown panel — visible in preview without click
function DropdownPanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-block rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-600 dark:bg-gray-700 ${className}`}>
      {children}
    </div>
  );
}

function DefaultCategoryFilter() {
  return (
    <DropdownPanel className="w-56">
      <div className="px-3 py-3">
        <p className="text-sm font-medium text-gray-900 dark:text-white">Category</p>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            { id: "df-active", label: "Active", checked: true },
            { id: "df-overdue", label: "Overdue", checked: false },
            { id: "df-pending", label: "Pending", checked: true },
            { id: "df-cancelled", label: "Cancelled", checked: false },
            { id: "df-trial", label: "Trial", checked: false },
            { id: "df-paused", label: "Paused", checked: true },
          ].map(({ id, label, checked }) => (
            <li key={id} className="flex items-center">
              <Checkbox id={id} name={id} defaultChecked={checked} />
              <Label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                {label}
              </Label>
            </li>
          ))}
        </ul>
      </div>
    </DropdownPanel>
  );
}

function StatusFilter() {
  return (
    <DropdownPanel className="w-64">
      <ul className="space-y-2 p-2 text-sm">
        {[
          { id: "sf-all", label: "All", dot: "border-gray-300", count: 312 },
          { id: "sf-active", label: "Active", dot: "bg-green-400 border-green-400", count: 189 },
          { id: "sf-trial", label: "Trial", dot: "bg-blue-400 border-blue-400", count: 43 },
          { id: "sf-overdue", label: "Overdue", dot: "bg-orange-400 border-orange-400", count: 27 },
          { id: "sf-paused", label: "Paused", dot: "bg-gray-300 border-gray-300", count: 38 },
          { id: "sf-cancelled", label: "Cancelled", dot: "bg-red-500 border-red-500", count: 15 },
        ].map(({ id, label, dot, count }) => (
          <li key={id} className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id={id} name={id} defaultChecked={id === "sf-active" || id === "sf-trial"} />
              <div className={`ml-2 h-3 w-3 rounded-full border-2 ${dot}`} />
              <label
                htmlFor={id}
                className="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                {label}
              </label>
            </div>
            <div className="text-gray-400 text-xs">{count}</div>
          </li>
        ))}
      </ul>
    </DropdownPanel>
  );
}

function RangeFilter() {
  return (
    <DropdownPanel className="w-56">
      <div className="p-3">
        <ul className="space-y-1 text-sm">
          {["$10,000+", "$5,001–$10,000", "$1,001–$5,000", "$501–$1,000", "$101–$500", "$1–$100"].map((range) => (
            <li key={range} className="flex items-center">
              <button className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600">
                {range}
              </button>
            </li>
          ))}
        </ul>
        <div className="my-2 border-t border-gray-200 py-2 dark:border-gray-600">
          <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Custom range</span>
          <div className="flex items-center space-x-2">
            <TextInput
              defaultValue="200"
              id="rf-min"
              name="rf-min"
              type="number"
              className="w-1/2 [&_input]:py-2 [&_input]:sm:text-xs"
            />
            <TextInput
              defaultValue="2500"
              id="rf-max"
              name="rf-max"
              type="number"
              className="w-1/2 [&_input]:py-2 [&_input]:sm:text-xs"
            />
          </div>
        </div>
        <Button type="button" className="w-full" size="sm">Apply</Button>
      </div>
    </DropdownPanel>
  );
}

function PropertiesFilter() {
  return (
    <DropdownPanel className="w-auto">
      <form className="space-y-3 p-3">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center space-x-2 rounded-lg">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
              <Select id={`pf-include-${i}`} name={`pf-include-${i}`} sizing="sm">
                <option value="" disabled>Include</option>
                <option>All</option>
                <option>Exclude</option>
              </Select>
              <Select id={`pf-field-${i}`} name={`pf-field-${i}`} sizing="sm">
                <option value="" disabled>Field</option>
                <option>Status</option>
                <option>Tier</option>
                <option>Join date</option>
              </Select>
              <TextInput id={`pf-match-${i}`} name={`pf-match-${i}`} placeholder="Exactly matching" sizing="sm" />
              <TextInput id={`pf-value-${i}`} name={`pf-value-${i}`} placeholder="Enter value" sizing="sm" />
            </div>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              aria-label="Remove row"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" />
              </svg>
            </button>
          </div>
        ))}
        <button
          type="button"
          className="flex items-center border-b pb-2 text-sm font-medium text-blue-600 hover:underline dark:border-gray-600 dark:text-blue-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1.5 h-4 w-4" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
          </svg>
          Add Property
        </button>
        <div className="flex items-center justify-between pt-1">
          <Button type="button" size="sm">Apply</Button>
          <button
            type="reset"
            className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
            Clear all
          </button>
        </div>
      </form>
    </DropdownPanel>
  );
}

function TabsFilter() {
  return (
    <DropdownPanel className="w-72">
      <div className="p-2">
        <Tabs
          variant="underline"
          theme={{
            tablist: {
              variant: {
                underline: "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-600",
              },
              tabitem: {
                base: "flex items-center justify-center rounded-t-lg p-1 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400",
                variant: {
                  underline: {
                    base: "",
                    active: {
                      on: "active text-blue-700 dark:text-blue-500",
                      off: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
                    },
                  },
                },
              },
            },
            tabpanel: "px-1 pt-2",
          }}
        >
          <TabItem title="Status">
            <ul className="space-y-2 pb-2">
              {[
                { id: "tf-active", label: "Active" },
                { id: "tf-trial", label: "Trial" },
                { id: "tf-overdue", label: "Overdue" },
                { id: "tf-paused", label: "Paused" },
                { id: "tf-cancelled", label: "Cancelled" },
              ].map(({ id, label }) => (
                <li key={id} className="flex items-center">
                  <Checkbox id={id} name={id} defaultChecked={id === "tf-active" || id === "tf-trial"} />
                  <Label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {label}
                  </Label>
                </li>
              ))}
            </ul>
          </TabItem>
          <TabItem title="Tier">
            <ul className="space-y-2 pb-2">
              {[
                { id: "tf-gold", label: "Gold (89)" },
                { id: "tf-diamond", label: "Diamond (47)" },
                { id: "tf-diamondplus", label: "Diamond+ (23)" },
                { id: "tf-corporate", label: "Corporate (14)" },
              ].map(({ id, label }) => (
                <li key={id} className="flex items-center">
                  <Checkbox id={id} name={id} defaultChecked={id === "tf-gold"} />
                  <Label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {label}
                  </Label>
                </li>
              ))}
            </ul>
          </TabItem>
          <TabItem title="Amount">
            <div className="col-span-2 flex items-center justify-between space-x-3 pb-2">
              <div className="w-full">
                <Label
                  htmlFor="tf-price-from"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  From
                </Label>
                <TextInput
                  defaultValue="100"
                  id="tf-price-from"
                  name="tf-price-from"
                  type="number"
                  className="[&_input]:py-2 [&_input]:sm:text-xs"
                />
              </div>
              <div className="w-full">
                <Label
                  htmlFor="tf-price-to"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  To
                </Label>
                <TextInput
                  defaultValue="5000"
                  id="tf-price-to"
                  name="tf-price-to"
                  type="number"
                  className="[&_input]:py-2 [&_input]:sm:text-xs"
                />
              </div>
            </div>
          </TabItem>
        </Tabs>
      </div>
    </DropdownPanel>
  );
}

function AdvancedKeywordsFilter() {
  const [isInpatient, setInpatient] = useState(true);
  const [isOutpatient, setOutpatient] = useState(false);
  const [isUrgentCare, setUrgentCare] = useState(true);
  const [isTelehealth, setTelehealth] = useState(false);
  const [isSurgery, setSurgery] = useState(false);

  return (
    <DropdownPanel className="w-80">
      <div className="px-3">
        <div className="flex items-center justify-between pt-3">
          <p className="text-sm font-medium text-black dark:text-white">Filters</p>
          <div className="flex items-center space-x-3">
            <button type="button" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              Save view
            </button>
            <button type="button" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              Clear all
            </button>
          </div>
        </div>
        <div className="pb-2 pt-3">
          <Label htmlFor="akf-search" className="sr-only">Search</Label>
          <TextInput
            icon={HiSearch}
            id="akf-search"
            name="akf-search"
            placeholder="Search filters..."
            className="[&_input]:py-2"
          />
        </div>
        {/* Category section */}
        <div className="border-t border-gray-200 dark:border-gray-600 py-2">
          <p className="px-1.5 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Service Type
          </p>
          <ul className="space-y-1">
            {[
              { id: "akf-inpatient", label: "Inpatient (124)" },
              { id: "akf-outpatient", label: "Outpatient (287)" },
              { id: "akf-urgent", label: "Urgent Care (56)" },
              { id: "akf-er", label: "Emergency (33)" },
              { id: "akf-surgery", label: "Surgery (71)" },
            ].map(({ id, label }) => (
              <li key={id} className="flex items-center">
                <Checkbox id={id} name={id} defaultChecked={id === "akf-inpatient" || id === "akf-outpatient"} />
                <Label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {label}
                </Label>
              </li>
            ))}
          </ul>
        </div>
        {/* Shipping-style toggles mapped to care settings */}
        <div className="border-t border-gray-200 dark:border-gray-600 py-3">
          <p className="px-1.5 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Care Setting
          </p>
          <div className="space-y-2">
            <ToggleSwitch checked={isInpatient} label="Inpatient" onChange={() => setInpatient(!isInpatient)} sizing="sm" />
            <ToggleSwitch checked={isOutpatient} label="Outpatient" onChange={() => setOutpatient(!isOutpatient)} sizing="sm" />
            <ToggleSwitch checked={isUrgentCare} label="Urgent Care" onChange={() => setUrgentCare(!isUrgentCare)} sizing="sm" />
            <ToggleSwitch checked={isTelehealth} label="Telehealth" onChange={() => setTelehealth(!isTelehealth)} sizing="sm" />
            <ToggleSwitch checked={isSurgery} label="Surgery Center" onChange={() => setSurgery(!isSurgery)} sizing="sm" />
          </div>
        </div>
        {/* State/condition radio group */}
        <div className="border-t border-gray-200 dark:border-gray-600 py-3">
          <p className="px-1.5 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Priority
          </p>
          <ul className="space-y-1">
            {[
              { id: "akf-p-all", label: "All" },
              { id: "akf-p-high", label: "High" },
              { id: "akf-p-medium", label: "Medium" },
              { id: "akf-p-low", label: "Low" },
            ].map(({ id, label }, i) => (
              <li key={id} className="flex items-center">
                <Radio id={id} name="akf-priority" defaultChecked={i === 0} />
                <Label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {label}
                </Label>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-600 pb-3 pt-3">
          <Button type="button" className="w-full" size="sm">Show Results</Button>
        </div>
      </div>
    </DropdownPanel>
  );
}

function AdvancedOptionsFilter() {
  return (
    <DropdownPanel className="w-72">
      <form className="space-y-4 p-3">
        <p className="text-sm font-medium text-gray-900 dark:text-white">Advanced Filter</p>
        <div>
          <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Payment Amount ($)</span>
          <div className="grid grid-cols-2 gap-3">
            <RangeSlider
              defaultValue={200}
              id="adv-min-amount"
              max={5000}
              min={0}
              name="adv-min-amount"
              className="[&_input]:dark:bg-gray-600"
            />
            <RangeSlider
              defaultValue={2000}
              id="adv-max-amount"
              max={5000}
              min={0}
              name="adv-max-amount"
              className="[&_input]:dark:bg-gray-600"
            />
            <div className="col-span-2 flex items-center space-x-2">
              <div className="w-full">
                <Label htmlFor="adv-amount-from" className="mb-1 block text-xs font-medium text-gray-900 dark:text-white">
                  From
                </Label>
                <TextInput
                  defaultValue="200"
                  id="adv-amount-from"
                  name="adv-amount-from"
                  type="number"
                  className="[&_input]:py-2 [&_input]:sm:text-xs"
                />
              </div>
              <div className="w-full">
                <Label htmlFor="adv-amount-to" className="mb-1 block text-xs font-medium text-gray-900 dark:text-white">
                  To
                </Label>
                <TextInput
                  defaultValue="2000"
                  id="adv-amount-to"
                  name="adv-amount-to"
                  type="number"
                  className="[&_input]:py-2 [&_input]:sm:text-xs"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Subscription Tier</span>
          <ul className="grid w-full grid-cols-2 gap-2">
            {[
              { id: "adv-gold", label: "Gold", checked: false },
              { id: "adv-diamond", label: "Diamond", checked: true },
              { id: "adv-diamondplus", label: "Diamond+", checked: false },
              { id: "adv-corporate", label: "Corporate", checked: false },
            ].map(({ id, label, checked }) => (
              <li key={id}>
                <Checkbox id={id} name={id} defaultChecked={checked} className="peer hidden" />
                <Label
                  htmlFor={id}
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-100 p-2 text-center text-sm font-medium text-gray-500 hover:bg-blue-500 hover:text-white peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100 dark:hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white dark:peer-checked:bg-blue-600"
                >
                  {label}
                </Label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="mb-2 block text-sm font-medium text-black dark:text-white">Payment Method</span>
          <ul className="flex w-full flex-col rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            {[
              { id: "adv-pm-all", label: "All methods" },
              { id: "adv-pm-card", label: "Credit / Debit card" },
              { id: "adv-pm-cash", label: "Cash" },
              { id: "adv-pm-check", label: "Check" },
            ].map(({ id, label }, i) => (
              <li key={id} className={`w-full ${i < 3 ? "border-b border-gray-200 dark:border-gray-600" : ""}`}>
                <div className="flex items-center pl-3">
                  <Radio id={id} name="adv-pm" defaultChecked={i === 0} />
                  <Label htmlFor={id} className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {label}
                  </Label>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-3">
          <Button type="button" size="sm">Show Results</Button>
          <Button type="reset" color="alternative" size="sm">Reset</Button>
        </div>
      </form>
    </DropdownPanel>
  );
}

export default function DropdownFiltersPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">Dropdown Filters</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Filter menu patterns for narrowing data sets by category, date range, status, or custom criteria — dropdown
          variants for table and list views.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/dropdown-filters/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — checkbox list by category"
          code={`<Dropdown label="Filter by category">
  <div className="px-3 py-3">
    <p className="text-sm font-medium text-gray-900 dark:text-white">Category</p>
    <ul className="mt-3 space-y-2 text-sm">
      <li className="flex items-center">
        <Checkbox id="active" name="active" defaultChecked />
        <Label htmlFor="active" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Active
        </Label>
      </li>
      <li className="flex items-center">
        <Checkbox id="overdue" name="overdue" />
        <Label htmlFor="overdue" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          Overdue
        </Label>
      </li>
      {/* ...more items */}
    </ul>
  </div>
</Dropdown>`}
        >
          <DefaultCategoryFilter />
        </BlockPreview>

        <BlockPreview
          label="Status filter — color-coded dots with counts"
          code={`<Dropdown label="Filter by status">
  <ul className="space-y-2 p-2 text-sm">
    <li className="flex items-center justify-between">
      <div className="flex items-center">
        <Checkbox id="all" name="all" />
        <div className="ml-2 h-3 w-3 rounded-full border-2 border-gray-300" />
        <label htmlFor="all" className="ml-1.5 text-sm font-medium text-gray-900 dark:text-gray-100">
          All
        </label>
      </div>
      <div className="text-gray-400 text-xs">312</div>
    </li>
    <li className="flex items-center justify-between">
      <div className="flex items-center">
        <Checkbox id="active" name="active" defaultChecked />
        <div className="ml-2 h-3 w-3 rounded-full border-2 bg-green-400 border-green-400" />
        <label htmlFor="active" className="ml-1.5 text-sm font-medium text-gray-900 dark:text-gray-100">
          Active
        </label>
      </div>
      <div className="text-gray-400 text-xs">189</div>
    </li>
    {/* Overdue = orange, Paused = gray, Cancelled = red */}
  </ul>
</Dropdown>`}
        >
          <StatusFilter />
        </BlockPreview>

        <BlockPreview
          label="Range filter — preset buckets + custom min/max"
          code={`<Dropdown label="Filter by range">
  <div className="p-3">
    <ul className="space-y-1 text-sm">
      {["$10,000+", "$5,001–$10,000", "$1,001–$5,000", "$501–$1,000", "$101–$500", "$1–$100"].map((range) => (
        <li key={range} className="flex items-center">
          <button className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600">
            {range}
          </button>
        </li>
      ))}
    </ul>
    <div className="my-2 border-t border-gray-200 py-2 dark:border-gray-600">
      <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Custom range</span>
      <div className="flex items-center space-x-2">
        <TextInput defaultValue="200" id="rf-min" name="rf-min" type="number" className="w-1/2 [&_input]:py-2 [&_input]:sm:text-xs" />
        <TextInput defaultValue="2500" id="rf-max" name="rf-max" type="number" className="w-1/2 [&_input]:py-2 [&_input]:sm:text-xs" />
      </div>
    </div>
    <Button type="button" className="w-full" size="sm">Apply</Button>
  </div>
</Dropdown>`}
        >
          <RangeFilter />
        </BlockPreview>

        <BlockPreview
          label="Properties filter — multi-row condition builder"
          code={`<Dropdown label="Filter by properties">
  <form className="space-y-3 p-3">
    <div className="flex items-center space-x-2">
      <div className="grid grid-cols-4 gap-2">
        <Select id="include" name="include" sizing="sm">
          <option value="" disabled>Include</option>
          <option>All</option>
          <option>Exclude</option>
        </Select>
        <Select id="field" name="field" sizing="sm">
          <option value="" disabled>Field</option>
          <option>Status</option>
          <option>Tier</option>
        </Select>
        <TextInput id="match" name="match" placeholder="Exactly matching" sizing="sm" />
        <TextInput id="value" name="value" placeholder="Enter value" sizing="sm" />
      </div>
      <button type="button" aria-label="Remove row">
        {/* trash icon */}
      </button>
    </div>
    <button type="button" className="flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
      + Add Property
    </button>
    <div className="flex items-center justify-between">
      <Button type="button" size="sm">Apply</Button>
      <button type="reset" className="text-sm font-medium text-gray-700 hover:bg-gray-100 ...">Clear all</button>
    </div>
  </form>
</Dropdown>`}
        >
          <PropertiesFilter />
        </BlockPreview>

        <BlockPreview
          label="Tabs filter — tabbed panels for distinct filter dimensions"
          code={`<Dropdown label="Filter with tabs">
  <div className="p-2">
    <Tabs variant="underline" theme={{ /* underline tab theme */ }}>
      <Tabs.Item title="Status">
        <ul className="space-y-2 pb-2">
          <li className="flex items-center">
            <Checkbox id="active" name="active" defaultChecked />
            <Label htmlFor="active" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              Active
            </Label>
          </li>
          {/* more statuses */}
        </ul>
      </Tabs.Item>
      <Tabs.Item title="Tier">
        {/* tier checkboxes */}
      </Tabs.Item>
      <Tabs.Item title="Amount">
        <div className="flex space-x-3 pb-2">
          <TextInput label="From" defaultValue="100" id="price-from" type="number" />
          <TextInput label="To" defaultValue="5000" id="price-to" type="number" />
        </div>
      </Tabs.Item>
    </Tabs>
  </div>
</Dropdown>`}
        >
          <TabsFilter />
        </BlockPreview>

        <BlockPreview
          label="Advanced keywords — sectioned panel with search, toggles, and radio"
          code={`<Dropdown label="Filter by keywords" theme={{ floating: { base: twMerge(theme.dropdown.floating.base, "w-80 rounded-lg") } }}>
  <div className="px-3">
    <div className="flex items-center justify-between pt-3">
      <p className="text-sm font-medium">Filters</p>
      <div className="flex space-x-3">
        <button className="text-sm font-medium text-blue-600 hover:underline">Save view</button>
        <button className="text-sm font-medium text-blue-600 hover:underline">Clear all</button>
      </div>
    </div>
    <TextInput icon={HiSearch} placeholder="Search filters..." className="[&_input]:py-2" />
    {/* Section: Service Type (checkboxes) */}
    {/* Section: Care Setting (ToggleSwitch list) */}
    {/* Section: Priority (Radio group) */}
    <Button type="button" className="w-full" size="sm">Show Results</Button>
  </div>
</Dropdown>`}
        >
          <AdvancedKeywordsFilter />
        </BlockPreview>

        <BlockPreview
          label="Advanced options — range sliders, toggle pills, radio list, apply/reset"
          code={`<Dropdown label="Advanced filter">
  <form className="space-y-4 p-3">
    {/* Payment Amount range sliders */}
    <div>
      <span className="mb-2 block text-sm font-medium">Payment Amount ($)</span>
      <div className="grid grid-cols-2 gap-3">
        <RangeSlider defaultValue={200} id="min-amount" max={5000} min={0} name="min-amount" />
        <RangeSlider defaultValue={2000} id="max-amount" max={5000} min={0} name="max-amount" />
        <div className="col-span-2 flex space-x-2">
          <TextInput defaultValue="200" id="amount-from" type="number" />
          <TextInput defaultValue="2000" id="amount-to" type="number" />
        </div>
      </div>
    </div>
    {/* Subscription Tier — pill toggle checkboxes */}
    {/* Payment Method — radio list */}
    <div className="flex space-x-3">
      <Button type="button" size="sm">Show Results</Button>
      <Button type="reset" color="alternative" size="sm">Reset</Button>
    </div>
  </form>
</Dropdown>`}
        >
          <AdvancedOptionsFilter />
        </BlockPreview>

      </section>
    </div>
  );
}
