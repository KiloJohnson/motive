"use client";

import { useState } from "react";
import {
  Button,
  Checkbox,
  Datepicker,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Radio,
  RangeSlider,
  Select,
  TabItem,
  Tabs,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";

// ─── BlockPreview ─────────────────────────────────────────────────────────────

function BlockPreview({
  children,
  label,
  code,
}: {
  children: React.ReactNode;
  label: string;
  code: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
        {label}
      </h2>
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
        <div className="bg-gray-50 dark:bg-gray-900 px-5 py-8 flex justify-center">
          {children}
        </div>
      </div>
      <pre className="text-xs bg-gray-900 text-gray-300 rounded-lg p-4 overflow-x-auto">
        {code}
      </pre>
    </div>
  );
}

// ─── Star helper (replaces Rating.Star dot-notation) ─────────────────────────

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      className={`h-4 w-4 ${filled ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// ─── 1. Default — filter by category ─────────────────────────────────────────

function DefaultFacetedSearchModal() {
  return (
    <Modal show={true} popup size="lg">
      <ModalHeader>Filter by category</ModalHeader>
      <ModalBody>
        <form action="#" method="get">
          <div className="relative bg-white dark:bg-gray-800">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {[
                { id: "cat-apple", label: "Apple (56)" },
                { id: "cat-fitbit", label: "Fitbit (56)" },
                { id: "cat-dell", label: "Dell (56)" },
                { id: "cat-asus", label: "Asus (97)", checked: true },
                { id: "cat-logitech", label: "Logitech (97)", checked: true },
                { id: "cat-msi", label: "MSI (97)", checked: true },
                { id: "cat-bosch", label: "Bosch (176)", checked: true },
                { id: "cat-sony", label: "Sony (234)" },
                { id: "cat-samsung", label: "Samsung (76)", checked: true },
                { id: "cat-canon", label: "Canon (49)" },
                { id: "cat-microsoft", label: "Microsoft (45)" },
                { id: "cat-razer", label: "Razer (49)" },
                { id: "cat-emetec", label: "Emetec (16)" },
                { id: "cat-nvidia", label: "Nvidia (45)" },
                { id: "cat-hp", label: "HP (234)" },
                { id: "cat-benq", label: "BenQ (45)" },
                { id: "cat-rockstar", label: "Rockstar (49)" },
              ].map(({ id, label, checked }) => (
                <div key={id} className="flex items-center">
                  <Checkbox id={id} name={id} defaultChecked={checked} />
                  <Label
                    htmlFor={id}
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {label}
                  </Label>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center space-x-4">
              <Button type="submit">Apply</Button>
              <Button type="reset" color="gray">
                Reset
              </Button>
            </div>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}

// ─── 2. Toggle filters ────────────────────────────────────────────────────────

function ToggleFiltersModal() {
  const [isLastRate, setLastRate] = useState(false);
  const [isNumVehicles, setNumVehicles] = useState(true);
  const [isNumTrips, setNumTrips] = useState(false);
  const [isNumCars, setNumCars] = useState(false);

  return (
    <Modal show={true} popup size="lg">
      <ModalHeader>Show carriers first by:</ModalHeader>
      <ModalBody>
        <form action="#" method="get">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <ToggleSwitch
                checked={isLastRate}
                id="tf-last-rate"
                label="The last rate"
                name="last-rate"
                onChange={() => setLastRate(!isLastRate)}
              />
              <Select id="tf-last-rate-select" name="last-rate-select" className="[&_select]:py-1.5">
                <option>Min</option>
                <option>Max</option>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <ToggleSwitch
                checked={isNumVehicles}
                id="tf-vehicles"
                label="Number of vehicles"
                name="vehicles"
                onChange={() => setNumVehicles(!isNumVehicles)}
              />
              <Select id="tf-vehicles-select" name="vehicles-select" className="[&_select]:py-1.5">
                <option>Min</option>
                <option>Max</option>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <ToggleSwitch
                checked={isNumTrips}
                id="tf-trips"
                label="Number of trips with us"
                name="trips"
                onChange={() => setNumTrips(!isNumTrips)}
              />
              <Select id="tf-trips-select" name="trips-select" className="[&_select]:py-1.5">
                <option>Min</option>
                <option>Max</option>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <ToggleSwitch
                checked={isNumCars}
                id="tf-cars"
                label="Number of cars"
                name="cars"
                onChange={() => setNumCars(!isNumCars)}
              />
              <Select id="tf-cars-select" name="cars-select" className="[&_select]:py-1.5">
                <option>Min</option>
                <option>Max</option>
              </Select>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-b pt-6 dark:border-gray-600">
            <Button type="submit">Apply</Button>
            <Button color="gray" type="reset">
              Reset
            </Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}

// ─── 3. Tabs modal ────────────────────────────────────────────────────────────

function TabsModal() {
  const starRows = [5, 4, 3, 2, 1];
  return (
    <Modal show={true} popup size="2xl">
      <ModalHeader>Filter with tabs</ModalHeader>
      <ModalBody>
        <form action="#" method="get">
          <div className="mb-4">
            <Tabs variant="underline">
              <TabItem active title="Brand">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <h5 className="text-lg font-medium uppercase text-black dark:text-white">A</h5>
                    {[
                      { id: "tab-apple", label: "Apple (56)" },
                      { id: "tab-asus", label: "Asus (97)" },
                      { id: "tab-acer", label: "Acer (234)" },
                      { id: "tab-allview", label: "Allview (45)" },
                      { id: "tab-amd", label: "AMD (49)" },
                    ].map(({ id, label }) => (
                      <div key={id} className="flex items-center">
                        <Checkbox id={id} name={id} />
                        <Label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          {label}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-lg font-medium uppercase text-black dark:text-white">B</h5>
                    {[
                      { id: "tab-beats", label: "Beats (56)" },
                      { id: "tab-bose", label: "Bose (97)", checked: true },
                      { id: "tab-benq", label: "BenQ (45)" },
                      { id: "tab-bosch", label: "Bosch (176)" },
                      { id: "tab-braun", label: "Braun (16)" },
                    ].map(({ id, label, checked }) => (
                      <div key={id} className="flex items-center">
                        <Checkbox id={id} name={id} defaultChecked={checked} />
                        <Label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          {label}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-lg font-medium uppercase text-black dark:text-white">C</h5>
                    {[
                      { id: "tab-canon", label: "Canon (49)" },
                      { id: "tab-cisco", label: "Cisco (97)", checked: true },
                      { id: "tab-cowon", label: "Cowon (234)" },
                      { id: "tab-corsair", label: "Corsair (15)" },
                      { id: "tab-clevo", label: "Clevo (45)" },
                    ].map(({ id, label, checked }) => (
                      <div key={id} className="flex items-center">
                        <Checkbox id={id} name={id} defaultChecked={checked} />
                        <Label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          {label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </TabItem>
              <TabItem title="Advanced Filters">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="tab-min-price" className="block text-sm font-medium text-gray-900 dark:text-white">
                          Min Price
                        </Label>
                        <RangeSlider defaultValue="300" id="tab-min-price" name="min-price" max="7000" min="0" step="1" />
                      </div>
                      <div>
                        <Label htmlFor="tab-max-price" className="block text-sm font-medium text-gray-900 dark:text-white">
                          Max Price
                        </Label>
                        <RangeSlider defaultValue="3500" id="tab-max-price" name="max-price" max="7000" min="0" step="1" />
                      </div>
                      <div className="col-span-2 flex items-center justify-between space-x-2">
                        <TextInput defaultValue="300" id="tab-min-price-input" name="min-price-input" max="7000" min="0" required type="number" className="block w-full" />
                        <div className="shrink-0 text-sm font-medium dark:text-gray-300">to</div>
                        <TextInput defaultValue="3500" id="tab-max-price-input" name="max-price-input" max="7000" min="0" required type="number" className="block w-full" />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Colour</h6>
                      <div className="space-y-2">
                        {[
                          { id: "tab-blue", label: "Blue", dot: "bg-blue-600" },
                          { id: "tab-gray", label: "Gray", dot: "bg-gray-400" },
                          { id: "tab-green", label: "Green", dot: "bg-green-400", checked: true },
                          { id: "tab-red", label: "Red", dot: "bg-red-500", checked: true },
                        ].map(({ id, label, dot, checked }) => (
                          <div key={id} className="flex items-center">
                            <Checkbox id={id} name={id} defaultChecked={checked} />
                            <Label htmlFor={id} className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                              <div className={`mr-2 h-3.5 w-3.5 rounded-full ${dot}`} />
                              {label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Rating</h6>
                    <div className="space-y-2">
                      {starRows.map((count) => (
                        <div key={count} className="flex items-center">
                          <Radio id={`tab-stars-${count}`} name="tab-rating" />
                          <label htmlFor={`tab-stars-${count}`} className="ml-2 flex items-center gap-0.5 cursor-pointer">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <StarIcon key={i} filled={i < count} />
                            ))}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Condition</h6>
                    <ul className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                      {["All", "New", "Used"].map((val, i, arr) => (
                        <li key={val} className={`w-full ${i < arr.length - 1 ? "border-r border-gray-200 dark:border-gray-600" : ""}`}>
                          <div className="flex items-center pl-3">
                            <Radio id={`tab-cond-${val.toLowerCase()}`} name="tab-condition" defaultChecked={i === 0} />
                            <Label htmlFor={`tab-cond-${val.toLowerCase()}`} className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                              {val}
                            </Label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabItem>
            </Tabs>
          </div>
          <div className="mt-5 flex items-center space-x-4 rounded-b dark:border-gray-600">
            <Button type="submit">Show 50 results</Button>
            <Button color="gray" type="reset">
              Reset
            </Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}

// ─── 4. Advanced filters ──────────────────────────────────────────────────────

function AdvancedModal() {
  return (
    <Modal show={true} popup size="3xl">
      <ModalHeader>Advanced filters</ModalHeader>
      <ModalBody>
        <form action="#" method="get" className="space-y-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="adv-min-age" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Min Age
                </Label>
                <RangeSlider defaultValue="18" id="adv-min-age" max="100" min="1" name="min-age" step="1" />
              </div>
              <div>
                <Label htmlFor="adv-max-age" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Max Age
                </Label>
                <RangeSlider defaultValue="45" id="adv-max-age" max="100" min="1" name="max-age" step="1" />
              </div>
              <div className="col-span-2 flex items-center justify-between space-x-3">
                <div className="w-full">
                  <Label htmlFor="adv-min-age-text" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    From
                  </Label>
                  <TextInput defaultValue="18" id="adv-min-age-text" max="100" min="1" name="min-age" required type="number" />
                </div>
                <div className="w-full">
                  <Label htmlFor="adv-max-age-text" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    To
                  </Label>
                  <TextInput defaultValue="45" id="adv-max-age-text" max="100" min="1" name="max-age" required type="number" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="adv-min-exp" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Min Experience
                </Label>
                <RangeSlider defaultValue="5" id="adv-min-exp" max="30" min="1" name="min-experience" step="1" />
              </div>
              <div>
                <Label htmlFor="adv-max-exp" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Max Experience
                </Label>
                <RangeSlider defaultValue="45" id="adv-max-exp" max="100" min="1" name="max-experience" step="1" />
              </div>
              <div className="col-span-2 flex items-center justify-between space-x-3">
                <div className="w-full">
                  <Label htmlFor="adv-min-exp-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    From
                  </Label>
                  <TextInput defaultValue="18" id="adv-min-exp-input" max="100" min="1" name="min-exp-input" required type="number" />
                </div>
                <div className="w-full">
                  <Label htmlFor="adv-max-exp-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    To
                  </Label>
                  <TextInput defaultValue="45" id="adv-max-exp-input" max="100" min="1" name="max-exp-input" required type="number" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Account type</h6>
            <ul className="flex w-full flex-col items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white md:flex-row">
              {["All", "Administrator", "Moderator", "Viewer"].map((val, i, arr) => (
                <li key={val} className={`w-full ${i < arr.length - 1 ? "border-b border-gray-200 dark:border-gray-600 md:border-b-0 md:border-r" : ""}`}>
                  <div className="flex items-center pl-3">
                    <Radio id={`adv-acct-${val.toLowerCase()}`} name="adv-account" defaultChecked={i === 0} />
                    <Label htmlFor={`adv-acct-${val.toLowerCase()}`} className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {val}
                    </Label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Job title
            </Label>
            <ul className="grid w-full grid-cols-2 gap-3 md:grid-cols-3">
              {[
                { id: "adv-frontend", label: "Frontend Developer" },
                { id: "adv-designer", label: "UI/UX Designer" },
                { id: "adv-react", label: "React Developer", checked: true },
                { id: "adv-php", label: "PHP Developer" },
                { id: "adv-engineer", label: "Engineer", checked: true },
                { id: "adv-marketing", label: "Marketing" },
              ].map(({ id, label, checked }) => (
                <li key={id}>
                  <Checkbox id={id} name="job_title" className="peer hidden" defaultChecked={checked} />
                  <Label
                    htmlFor={id}
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-blue-600 bg-white p-2 text-center text-sm font-medium text-blue-600 hover:bg-blue-500 hover:text-white peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white dark:border-blue-500 dark:bg-gray-800 dark:text-blue-500 dark:hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white dark:peer-checked:border-blue-500 dark:peer-checked:bg-blue-500"
                  >
                    {label}
                  </Label>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <Label className="block text-sm font-medium text-gray-900 dark:text-white">
              Properties
            </Label>
            <div className="flex items-center space-x-3 rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
              <div className="grid w-full gap-3 md:grid-cols-3">
                <Select id="adv-country-0" name="country-0">
                  <option value="" disabled>Country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </Select>
                <Select id="adv-state-0" name="state-0">
                  <option value="" disabled>State</option>
                  <option>California</option>
                  <option>Oregon</option>
                  <option>New York</option>
                  <option>Florida</option>
                </Select>
                <Select id="adv-city-0" name="city-0">
                  <option value="" disabled>City</option>
                  <option>Sacramento</option>
                  <option>Los Angeles</option>
                  <option>San Francisco</option>
                  <option>San Diego</option>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-b pt-2 dark:border-gray-600">
            <Button type="submit">Show 32 Results</Button>
            <Button color="gray" type="reset">
              Reset
            </Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}

// ─── 5. Datepicker modal ──────────────────────────────────────────────────────

function DatepickerModal() {
  const [isGoogleMeet, setGoogleMeet] = useState(false);

  return (
    <Modal show={true} popup size="lg">
      <ModalHeader>Filter by date</ModalHeader>
      <ModalBody>
        <div className="space-y-4">
          <div>
            <Label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Date range
            </Label>
            <div className="flex w-full items-center gap-3">
              <Datepicker />
              <span className="shrink-0 text-sm text-gray-500">to</span>
              <Datepicker />
            </div>
          </div>
          <div>
            <Label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Duration
            </Label>
            <ul className="grid w-full grid-cols-3 gap-3">
              {[
                { id: "dp-h1", label: "1 hour" },
                { id: "dp-h2", label: "2 hours" },
                { id: "dp-h3", label: "3 hours", checked: true },
                { id: "dp-h4", label: "4 hours" },
                { id: "dp-h57", label: "5–7 hours", checked: true },
                { id: "dp-hall", label: "All day" },
              ].map(({ id, label, checked }) => (
                <li key={id}>
                  <Checkbox id={id} name="duration" className="peer hidden" defaultChecked={checked} />
                  <Label
                    htmlFor={id}
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-blue-600 bg-white p-2 text-center text-sm font-medium text-blue-600 hover:bg-blue-500 hover:text-white peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white dark:border-blue-500 dark:bg-gray-800 dark:text-blue-500 dark:hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white dark:peer-checked:border-blue-500 dark:peer-checked:bg-blue-500"
                  >
                    {label}
                  </Label>
                </li>
              ))}
            </ul>
            <ToggleSwitch
              checked={isGoogleMeet}
              id="dp-google-meet"
              label="Google Meet"
              name="google_meet"
              onChange={() => setGoogleMeet(!isGoogleMeet)}
              className="mt-4"
            />
          </div>
          <div>
            <Label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Event type
            </Label>
            <div className="space-y-2">
              {[
                { id: "dp-conferences", label: "Industry Conferences" },
                { id: "dp-webinars", label: "Webinars" },
                { id: "dp-kickoffs", label: "Sales Kick-Offs", checked: true },
                { id: "dp-user-conf", label: "User Conferences" },
                { id: "dp-private", label: "Private Events", checked: true },
                { id: "dp-field", label: "Field Marketing Events" },
              ].map(({ id, label, checked }) => (
                <div key={id} className="flex items-center">
                  <Checkbox id={id} name={id} defaultChecked={checked} />
                  <Label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center space-x-4 rounded-b dark:border-gray-600">
          <Button type="submit">Apply filters</Button>
          <Button color="gray" type="reset">
            Reset
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FacetedSearchModalsPage() {
  return (
    <div className="min-h-full">
      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p
          style={{ color: "var(--motive-primary)" }}
          className="text-xs font-semibold uppercase tracking-widest mb-3"
        >
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
          Faceted Search Modals
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Modal-based filter overlays with multiple facets — checkboxes, range inputs, tag pickers —
          for focused filtering without leaving the current context.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/faceted-search-modals/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — filter by category"
          code={`const [show, setShow] = useState(false);

<Button onClick={() => setShow(true)}>Filter by category</Button>
<Modal show={show} popup size="lg" onClose={() => setShow(false)}>
  <ModalHeader>Filter by category</ModalHeader>
  <ModalBody>
    <form>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        <div className="flex items-center">
          <Checkbox id="apple" name="apple" />
          <Label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900">
            Apple (56)
          </Label>
        </div>
        {/* ... more brand checkboxes */}
      </div>
      <div className="mt-5 flex items-center space-x-4">
        <Button type="submit">Apply</Button>
        <Button type="reset" color="gray">Reset</Button>
      </div>
    </form>
  </ModalBody>
</Modal>`}
        >
          <DefaultFacetedSearchModal />
        </BlockPreview>

        <BlockPreview
          label="Toggle filters — sort priority controls"
          code={`const [isNumVehicles, setNumVehicles] = useState(true);

<Modal show={show} popup size="lg" onClose={() => setShow(false)}>
  <ModalHeader>Show carriers first by:</ModalHeader>
  <ModalBody>
    <form>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <ToggleSwitch
            checked={isNumVehicles}
            id="vehicles"
            label="Number of vehicles"
            name="vehicles"
            onChange={() => setNumVehicles(!isNumVehicles)}
          />
          <Select id="vehicles-select" name="vehicles-select">
            <option>Min</option>
            <option>Max</option>
          </Select>
        </div>
        {/* ... more toggle rows */}
      </div>
      <div className="flex items-center space-x-4 pt-6">
        <Button type="submit">Apply</Button>
        <Button color="gray" type="reset">Reset</Button>
      </div>
    </form>
  </ModalBody>
</Modal>`}
        >
          <ToggleFiltersModal />
        </BlockPreview>

        <BlockPreview
          label="Tabs — brand + advanced filters"
          code={`<Modal show={show} popup size="2xl" onClose={() => setShow(false)}>
  <ModalHeader>Filter with tabs</ModalHeader>
  <ModalBody>
    <form>
      <Tabs variant="underline">
        <TabItem active title="Brand">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {/* alphabetical brand columns with Checkbox + Label */}
          </div>
        </TabItem>
        <TabItem title="Advanced Filters">
          <div className="space-y-4">
            {/* RangeSlider for price, Radio list for condition, color swatches */}
          </div>
        </TabItem>
      </Tabs>
      <div className="mt-5 flex items-center space-x-4">
        <Button type="submit">Show 50 results</Button>
        <Button color="gray" type="reset">Reset</Button>
      </div>
    </form>
  </ModalBody>
</Modal>`}
        >
          <TabsModal />
        </BlockPreview>

        <BlockPreview
          label="Advanced — range sliders, radio list, tag pickers"
          code={`<Modal show={show} popup size="3xl" onClose={() => setShow(false)}>
  <ModalHeader>Advanced filters</ModalHeader>
  <ModalBody>
    <form className="space-y-4">
      {/* Age range — dual RangeSlider + TextInput pair */}
      <div className="grid grid-cols-2 gap-3">
        <RangeSlider id="min-age" min="1" max="100" defaultValue="18" />
        <RangeSlider id="max-age" min="1" max="100" defaultValue="45" />
        <TextInput id="min-age-text" type="number" defaultValue="18" />
        <TextInput id="max-age-text" type="number" defaultValue="45" />
      </div>

      {/* Account type — horizontal Radio list */}
      <ul className="flex w-full rounded-lg border">
        <li><Radio id="acct-all" name="account" defaultChecked /><Label htmlFor="acct-all">All</Label></li>
        <li><Radio id="acct-admin" name="account" /><Label htmlFor="acct-admin">Administrator</Label></li>
      </ul>

      {/* Job title — peer-checked tag pickers */}
      <ul className="grid grid-cols-3 gap-3">
        <li>
          <Checkbox id="frontend" name="job_title" className="peer hidden" />
          <Label htmlFor="frontend" className="... peer-checked:bg-blue-600 peer-checked:text-white">
            Frontend Developer
          </Label>
        </li>
      </ul>

      <Button type="submit">Show 32 Results</Button>
    </form>
  </ModalBody>
</Modal>`}
        >
          <AdvancedModal />
        </BlockPreview>

        <BlockPreview
          label="Datepicker — date range + event type"
          code={`const [isGoogleMeet, setGoogleMeet] = useState(false);

<Modal show={show} popup size="lg" onClose={() => setShow(false)}>
  <ModalHeader>Filter by date</ModalHeader>
  <ModalBody>
    <div className="space-y-4">
      {/* Date range pickers */}
      <div className="flex items-center gap-3">
        <Datepicker />
        <span>to</span>
        <Datepicker />
      </div>

      {/* Duration — peer-checked tag pickers */}
      <ul className="grid grid-cols-3 gap-3">
        <li>
          <Checkbox id="hours-3" name="duration" className="peer hidden" defaultChecked />
          <Label htmlFor="hours-3" className="... peer-checked:bg-blue-600 peer-checked:text-white">
            3 hours
          </Label>
        </li>
      </ul>

      <ToggleSwitch checked={isGoogleMeet} id="google-meet" label="Google Meet"
        onChange={() => setGoogleMeet(!isGoogleMeet)} />

      {/* Event type checkboxes */}
      <Checkbox id="webinars" name="webinars" />
      <Label htmlFor="webinars">Webinars</Label>

      <Button type="submit">Apply filters</Button>
    </div>
  </ModalBody>
</Modal>`}
        >
          <DatepickerModal />
        </BlockPreview>

      </section>
    </div>
  );
}
