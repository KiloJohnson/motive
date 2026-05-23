"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Button,
  Checkbox,
  Datepicker,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Label,
  Radio,
  RangeSlider,
  Select,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import { HiSearch } from "react-icons/hi";

// ── Shared helpers ─────────────────────────────────────────────────────────────

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

function Stars({ count, total = 5 }: { count: number; total?: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: total }, (_, i) => (
        <StarIcon key={i} filled={i < count} />
      ))}
    </span>
  );
}

// ── Default Faceted Search Drawer ──────────────────────────────────────────────

function DefaultFacetedSearchDrawer() {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className="relative h-150 w-full max-w-xs overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      {!isOpen && (
        <div className="flex h-full items-center justify-center">
          <Button onClick={() => setOpen(true)}>Show drawer</Button>
        </div>
      )}
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        className="w-full max-w-xs"
        style={{ position: "absolute" }}
      >
        <DrawerHeader title="APPLY FILTERS" titleIcon={() => <></>} />
        <DrawerItems>
          <div className="flex flex-1 flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <h6 className="mt-4 text-base font-medium text-black dark:text-white">
                  Categories
                </h6>
                <div className="flex items-center">
                  <Checkbox id="tv" name="tv" />
                  <Label htmlFor="tv" className="ml-2">TV, Audio-Video</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox defaultChecked id="desktop" name="desktop" />
                  <Label htmlFor="desktop" className="ml-2">Desktop PC</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="gaming" name="gaming" />
                  <Label htmlFor="gaming" className="ml-2">Gaming</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="monitors" name="monitors" />
                  <Label htmlFor="monitors" className="ml-2">Monitors</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="laptops" name="laptops" />
                  <Label htmlFor="laptops" className="ml-2">Laptops</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox defaultChecked id="console" name="console" />
                  <Label htmlFor="console" className="ml-2">Console</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="tablets" name="tablets" />
                  <Label htmlFor="tablets" className="ml-2">Tablets</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="foto" name="foto" />
                  <Label htmlFor="foto" className="ml-2">Foto</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="fashion" name="fashion" />
                  <Label htmlFor="fashion" className="ml-2">Fashion</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="books" name="books" />
                  <Label htmlFor="books" className="ml-2">Books</Label>
                </div>
                <a href="#" className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  View all
                </a>
              </div>
              <div className="space-y-2">
                <h6 className="text-base font-medium text-black dark:text-white">Prices</h6>
                <div className="col-span-2 flex items-center justify-between space-x-3">
                  <div className="w-full">
                    <Label htmlFor="price-from" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                      From
                    </Label>
                    <TextInput type="number" id="price-from" defaultValue={300} min={1} max={10000} required />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="price-to" className="mb-2 block">To</Label>
                    <TextInput type="number" id="price-to" defaultValue={3500} min={1} max={10000} required />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h6 className="text-base font-medium text-black dark:text-white">Rating</h6>
                {[5, 4, 3, 2, 1].map((n) => (
                  <div key={n} className="flex items-center">
                    <Radio id={`def-${n}-stars`} name="def-rating" defaultChecked={n === 3} />
                    <Label htmlFor={`def-${n}-stars`} className="ml-2 flex items-center">
                      <Stars count={n} />
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="bottom-0 left-0 mt-6 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
              <Button type="submit" className="w-full">Apply filters</Button>
              <Button color="gray" outline type="reset" className="w-full">Clear all</Button>
            </div>
          </div>
        </DrawerItems>
      </Drawer>
    </div>
  );
}

// ── Accordion Faceted Search Drawer ───────────────────────────────────────────

function AccordionFacetedSearchDrawer() {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className="relative h-175 w-full max-w-xs overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      {!isOpen && (
        <div className="flex h-full items-center justify-center">
          <Button onClick={() => setOpen(true)}>Show drawer</Button>
        </div>
      )}
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        className="w-full max-w-xs px-0"
        style={{ position: "absolute" }}
      >
        <DrawerHeader title="APPLY FILTERS" titleIcon={() => <></>} className="px-4" />
        <DrawerItems className="px-0">
          <form>
            <Accordion flush className="mt-3">
              <AccordionPanel>
                <AccordionTitle className="bg-transparent px-4 py-3 text-sm dark:bg-transparent">
                  Category
                </AccordionTitle>
                <AccordionContent className="space-y-2 px-4 dark:bg-gray-800">
                  <div className="flex items-center">
                    <Checkbox id="acc-tv" name="acc-tv" />
                    <Label htmlFor="acc-tv" className="ml-2">TV, Audio-Video</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox defaultChecked id="acc-desktop" name="acc-desktop" />
                    <Label htmlFor="acc-desktop" className="ml-2">Desktop PC</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="acc-gaming" name="acc-gaming" />
                    <Label htmlFor="acc-gaming" className="ml-2">Gaming</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="acc-monitors" name="acc-monitors" />
                    <Label htmlFor="acc-monitors" className="ml-2">Monitors</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="acc-laptops" name="acc-laptops" />
                    <Label htmlFor="acc-laptops" className="ml-2">Laptops</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox defaultChecked id="acc-console" name="acc-console" />
                    <Label htmlFor="acc-console" className="ml-2">Console</Label>
                  </div>
                  <a href="#" className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    View all
                  </a>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle className="bg-transparent px-4 py-3 text-sm dark:bg-transparent">
                  Brand
                </AccordionTitle>
                <AccordionContent className="space-y-2 px-4 dark:bg-gray-800">
                  <ul className="space-y-2 text-sm">
                    {[
                      { id: "acc-apple", label: "Apple (56)" },
                      { id: "acc-fitbit", label: "Fitbit (56)" },
                      { id: "acc-dell", label: "Dell (56)" },
                      { id: "acc-asus", label: "Asus (97)", checked: true },
                      { id: "acc-logitech", label: "Logitech (97)", checked: true },
                      { id: "acc-samsung", label: "Samsung (76)", checked: true },
                    ].map(({ id, label, checked }) => (
                      <li key={id} className="flex items-center">
                        <Checkbox id={id} name={id} defaultChecked={checked} />
                        <Label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                          {label}
                        </Label>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    View all
                  </a>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle className="bg-transparent px-4 py-3 text-sm dark:bg-transparent">
                  Color
                </AccordionTitle>
                <AccordionContent className="space-y-2 px-4 dark:bg-gray-800">
                  {[
                    { id: "acc-blue", color: "bg-primary-600", label: "Blue" },
                    { id: "acc-gray-color", color: "bg-gray-400", label: "Gray" },
                    { id: "acc-green", color: "bg-green-400", label: "Green" },
                    { id: "acc-pink", color: "bg-pink-400", label: "Pink" },
                    { id: "acc-red", color: "bg-red-500", label: "Red", checked: true },
                  ].map(({ id, color, label, checked }) => (
                    <div key={id} className="flex items-center">
                      <Checkbox id={id} name={id} defaultChecked={checked} />
                      <Label htmlFor={id} className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                        <div className={`mr-2 h-3.5 w-3.5 rounded-full ${color}`}></div>
                        {label}
                      </Label>
                    </div>
                  ))}
                  <a href="#" className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    View all
                  </a>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle className="bg-transparent px-4 py-3 text-sm dark:bg-transparent">
                  Price
                </AccordionTitle>
                <AccordionContent className="space-y-2 px-4 dark:bg-gray-800">
                  <div className="grid grid-cols-2 gap-3">
                    <RangeSlider defaultValue={300} id="acc-min-price" max={7000} min={0} name="acc-min-price" className="[&_input]:dark:bg-gray-600" />
                    <RangeSlider defaultValue={3500} id="acc-max-price" max={7000} min={0} name="acc-max-price" className="[&_input]:dark:bg-gray-600" />
                    <div className="flex items-center justify-between space-x-2 md:col-span-2">
                      <div className="w-full">
                        <Label htmlFor="acc-min-price-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                          From
                        </Label>
                        <TextInput defaultValue="300" id="acc-min-price-input" max="7000" min="0" type="number" className="[&_input]:py-2 [&_input]:sm:text-xs" />
                      </div>
                      <div className="w-full">
                        <Label htmlFor="acc-max-price-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                          To
                        </Label>
                        <TextInput defaultValue="3500" id="acc-max-price-input" max="7000" min="0" type="number" className="[&_input]:py-2 [&_input]:sm:text-xs" />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle className="bg-transparent px-4 py-3 text-sm dark:bg-transparent">
                  Rating
                </AccordionTitle>
                <AccordionContent className="space-y-2 px-4 dark:bg-gray-800">
                  {[5, 4, 3].map((n) => (
                    <div key={n} className="flex items-center">
                      <Radio id={`acc-${n}-stars`} name="acc-rating" defaultChecked={n === 3} />
                      <Label htmlFor={`acc-${n}-stars`} className="ml-2 flex items-center">
                        <Stars count={n} />
                      </Label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel>
                <AccordionTitle className="bg-transparent px-4 py-3 text-sm dark:bg-transparent">
                  Delivery Location
                </AccordionTitle>
                <AccordionContent className="space-y-2 px-4 dark:bg-gray-800">
                  <TextInput icon={HiSearch} id="acc-search-city" name="acc-search-city" placeholder="Search for city" type="search" />
                  {[
                    { id: "acc-dc", label: "Washington, D.C.", checked: true },
                    { id: "acc-ny", label: "New York City" },
                    { id: "acc-sf", label: "San Francisco" },
                    { id: "acc-la", label: "Los Angeles" },
                    { id: "acc-sd", label: "San Diego" },
                  ].map(({ id, label, checked }) => (
                    <div key={id} className="flex items-center">
                      <Radio id={id} name="acc-city" defaultChecked={checked} />
                      <Label htmlFor={id} className="ml-2">{label}</Label>
                    </div>
                  ))}
                  <a href="#" className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    View all
                  </a>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
            <div className="bottom-0 left-0 mt-6 flex w-full justify-center space-x-4 px-4 pb-4 md:absolute">
              <Button type="submit" className="w-full">Apply filters</Button>
              <Button color="gray" outline type="reset" className="w-full">Clear all</Button>
            </div>
          </form>
        </DrawerItems>
      </Drawer>
    </div>
  );
}

// ── Advanced Faceted Search with Datepicker ────────────────────────────────────

function AdvancedFacetedSearchDrawer() {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className="relative h-750 w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      {!isOpen && (
        <div className="flex h-full items-center justify-center">
          <Button onClick={() => setOpen(true)}>Show drawer</Button>
        </div>
      )}
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        className="w-96 overflow-visible"
        style={{ position: "absolute" }}
      >
        <DrawerHeader title="FILTERS" titleIcon={() => <></>} />
        <DrawerItems>
          <form>
            <div className="mt-4 flex flex-1 flex-col justify-between">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="adv-brand" className="mb-2 block">Product Brand</Label>
                    <Select id="adv-brand" name="adv-brand">
                      <option value="apple">Apple</option>
                      <option value="lg">LG</option>
                      <option value="samsung">Samsung</option>
                      <option value="logitech">Logitech</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="adv-model" className="mb-2 block">Product Model</Label>
                    <Select id="adv-model" name="adv-model">
                      <option value="imac-27">iMac 27&quot;</option>
                      <option value="imac-24">iMac 24&quot;</option>
                      <option value="macbook-pro-16">Macbook Pro 16&quot;</option>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="adv-manufacture-year" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Manufacture Year
                  </Label>
                  <div className="flex items-center gap-x-3">
                    <Datepicker />
                    <span className="dark:text-white">&nbsp;to&nbsp;</span>
                    <Datepicker />
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Price Range</h6>
                  <div className="grid grid-cols-2 gap-3">
                    <RangeSlider defaultValue={300} id="adv-min-price" max={7000} min={0} name="adv-min-price" className="[&_input]:dark:bg-gray-600" />
                    <RangeSlider defaultValue={3500} id="adv-max-price" max={7000} min={0} name="adv-max-price" className="[&_input]:dark:bg-gray-600" />
                    <div className="col-span-2 flex items-center justify-between space-x-4">
                      <div className="w-full">
                        <Label htmlFor="adv-min-price-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">From</Label>
                        <TextInput type="number" id="adv-min-price-input" defaultValue="300" min="0" max="7000" required />
                      </div>
                      <div className="w-full">
                        <Label htmlFor="adv-max-price-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">To</Label>
                        <TextInput type="number" id="adv-max-price-input" defaultValue="3500" min="0" max="7000" required />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Condition</h6>
                  <ul className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                    <li className="w-full border-r border-gray-200 dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <Radio id="adv-cond-all" name="adv-condition" defaultChecked />
                        <Label htmlFor="adv-cond-all" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">All</Label>
                      </div>
                    </li>
                    <li className="w-full border-r border-gray-200 dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <Radio id="adv-cond-new" name="adv-condition" />
                        <Label htmlFor="adv-cond-new" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">New</Label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center pl-3">
                        <Radio id="adv-cond-used" name="adv-condition" />
                        <Label htmlFor="adv-cond-used" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">Used</Label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full">
                    <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Colour</h6>
                    <div className="space-y-2">
                      {[
                        { id: "adv-blue", color: "bg-primary-600", label: "Blue" },
                        { id: "adv-gray", color: "bg-gray-400", label: "Gray" },
                        { id: "adv-green", color: "bg-green-400", label: "Green", checked: true },
                        { id: "adv-red", color: "bg-red-500", label: "Red", checked: true },
                      ].map(({ id, color, label, checked }) => (
                        <div key={id} className="flex items-center">
                          <Checkbox id={id} name={id} defaultChecked={checked} />
                          <Label htmlFor={id} className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300">
                            <div className={`mr-2 h-3.5 w-3.5 rounded-full ${color}`}></div>
                            {label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full">
                    <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Rating</h6>
                    <div className="space-y-2">
                      {[5, 4, 3].map((n) => (
                        <div key={n} className="flex items-center">
                          <Radio id={`adv-${n}-stars`} name="adv-rating" defaultChecked={n === 3} />
                          <Label htmlFor={`adv-${n}-stars`} className="ml-2 flex items-center">
                            <Stars count={n} />
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-0 left-0 mt-6 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
                <Button type="submit" className="w-full">Apply filters</Button>
                <Button color="gray" outline type="reset" className="w-full">Clear all</Button>
              </div>
            </div>
          </form>
        </DrawerItems>
      </Drawer>
    </div>
  );
}

// ── Large Faceted Search with Multiple Options ─────────────────────────────────

function LargeFacetedSearchDrawer() {
  const [isOpen, setOpen] = useState(true);
  const [projectsCompleted, setProjectsCompleted] = useState(false);
  const [technologiesUsed, setTechnologiesUsed] = useState(true);
  const [numberReviews, setNumberReviews] = useState(false);

  const skillTagClass =
    "inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500";

  return (
    <div className="relative h-150 w-full max-w-lg overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      {!isOpen && (
        <div className="flex h-full items-center justify-center">
          <Button onClick={() => setOpen(true)}>Show drawer</Button>
        </div>
      )}
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        className="w-full max-w-lg"
        style={{ position: "absolute" }}
      >
        <DrawerHeader title="FILTERS" titleIcon={() => <></>} />
        <DrawerItems className="h-full">
          <form className="h-full">
            <div className="mt-4 flex h-full flex-1 flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <h6 className="mb-2 text-sm font-medium text-black dark:text-white">Status</h6>
                  <ul className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                    <li className="w-full border-r border-gray-200 dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <Radio id="lg-status-all" name="lg-status" defaultChecked />
                        <Label htmlFor="lg-status-all" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">All</Label>
                      </div>
                    </li>
                    <li className="w-full border-r border-gray-200 dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <Radio id="lg-status-active" name="lg-status" />
                        <Label htmlFor="lg-status-active" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</Label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center pl-3">
                        <Radio id="lg-status-inactive" name="lg-status" />
                        <Label htmlFor="lg-status-inactive" className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">Inactive</Label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <Label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Skills</Label>
                  <ul className="grid w-full grid-cols-2 gap-3 md:grid-cols-3">
                    {[
                      { id: "lg-html-css", label: "HTML/CSS" },
                      { id: "lg-ui-design", label: "UI Design" },
                      { id: "lg-figma", label: "Figma", checked: true },
                      { id: "lg-react", label: "React" },
                      { id: "lg-flowbite", label: "Flowbite", checked: true },
                      { id: "lg-js", label: "JS" },
                      { id: "lg-php", label: "PHP" },
                      { id: "lg-ux", label: "UX" },
                      { id: "lg-logo", label: "Logo Design" },
                    ].map(({ id, label, checked }) => (
                      <li key={id}>
                        <Checkbox id={id} className="peer hidden" name="lg-skills" defaultChecked={checked} />
                        <Label htmlFor={id} className={skillTagClass}>{label}</Label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <ToggleSwitch
                      checked={projectsCompleted}
                      label="Projects Completed"
                      onChange={setProjectsCompleted}
                    />
                    <Select id="lg-projects-completed" name="lg-projects-completed">
                      <option>Min</option>
                      <option>Max</option>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <ToggleSwitch
                      checked={technologiesUsed}
                      label="Technologies Used"
                      onChange={setTechnologiesUsed}
                    />
                    <Select id="lg-technologies-used" name="lg-technologies-used">
                      <option>Min</option>
                      <option>Max</option>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <ToggleSwitch
                      checked={numberReviews}
                      label="Number of reviews"
                      onChange={setNumberReviews}
                    />
                    <Select id="lg-number-reviews" name="lg-number-reviews">
                      <option>Min</option>
                      <option>Max</option>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex w-full justify-center space-x-4 pb-4 md:px-4">
                <Button type="submit" className="w-full">Apply filters</Button>
                <Button color="gray" outline type="reset" className="w-full">Clear all</Button>
              </div>
            </div>
          </form>
        </DrawerItems>
      </Drawer>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function FacetedSearchDrawersPage() {
  return (
    <div className="min-h-full">

      <section className="border-b border-gray-100 dark:border-gray-700 px-16 py-12">
        <p style={{ color: "var(--motive-primary)" }} className="text-xs font-semibold uppercase tracking-widest mb-3">
          Application · Blocks
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
          Faceted Search Drawers
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Slide-out filter panels with multiple facets — checkboxes, range sliders, tag selections —
          for narrowing large data sets from a persistent side panel.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
          Reference:{" "}
          <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">
            _flowbite-pro/blocks react/app/application-ui/faceted-search-drawers/
          </code>
        </p>
      </section>

      <section className="px-16 py-12">

        <BlockPreview
          label="Default — checkbox categories, price range inputs, star rating"
          code={`const [isOpen, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Show drawer</Button>
<Drawer open={isOpen} onClose={() => setOpen(false)} className="w-full max-w-xs">
  <DrawerHeader title="APPLY FILTERS" titleIcon={() => <></>} />
  <DrawerItems>
    <div className="space-y-6">
      {/* Categories */}
      <h6 className="text-base font-medium">Categories</h6>
      <div className="flex items-center">
        <Checkbox id="desktop" name="desktop" defaultChecked />
        <Label htmlFor="desktop" className="ml-2">Desktop PC</Label>
      </div>
      {/* ... more checkboxes */}

      {/* Price inputs */}
      <h6 className="text-base font-medium">Prices</h6>
      <div className="flex items-center space-x-3">
        <div className="w-full">
          <Label htmlFor="price-from" className="mb-2 block">From</Label>
          <TextInput type="number" id="price-from" defaultValue={300} />
        </div>
        <div className="w-full">
          <Label htmlFor="price-to" className="mb-2 block">To</Label>
          <TextInput type="number" id="price-to" defaultValue={3500} />
        </div>
      </div>

      {/* Star rating radios */}
      <h6 className="text-base font-medium">Rating</h6>
      <div className="flex items-center">
        <Radio id="three-stars" name="rating" defaultChecked />
        <Label htmlFor="three-stars" className="ml-2 flex items-center">
          {/* StarIcon x3 filled, x2 empty */}
        </Label>
      </div>
    </div>

    <div className="bottom-0 left-0 mt-6 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
      <Button type="submit" className="w-full">Apply filters</Button>
      <Button color="gray" outline type="reset" className="w-full">Clear all</Button>
    </div>
  </DrawerItems>
</Drawer>`}
        >
          <DefaultFacetedSearchDrawer />
        </BlockPreview>

        <BlockPreview
          label="Accordion — facets collapsed into expandable sections"
          code={`const [isOpen, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Show drawer</Button>
<Drawer open={isOpen} onClose={() => setOpen(false)} className="w-full max-w-xs px-0">
  <DrawerHeader title="APPLY FILTERS" titleIcon={() => <></>} className="px-4" />
  <DrawerItems className="px-0">
    <form>
      <Accordion flush className="mt-3">
        <AccordionPanel>
          <AccordionTitle className="bg-transparent px-4 py-3 text-sm dark:bg-transparent">
            Category
          </AccordionTitle>
          <AccordionContent className="space-y-2 px-4 dark:bg-gray-800">
            <div className="flex items-center">
              <Checkbox id="acc-desktop" defaultChecked />
              <Label htmlFor="acc-desktop" className="ml-2">Desktop PC</Label>
            </div>
            {/* ... more options */}
          </AccordionContent>
        </AccordionPanel>
        {/* Brand, Color, Price, Rating, Delivery Location panels... */}
      </Accordion>
      <div className="mt-6 flex w-full justify-center space-x-4 px-4 pb-4 md:absolute">
        <Button type="submit" className="w-full">Apply filters</Button>
        <Button color="gray" outline type="reset" className="w-full">Clear all</Button>
      </div>
    </form>
  </DrawerItems>
</Drawer>`}
        >
          <AccordionFacetedSearchDrawer />
        </BlockPreview>

        <BlockPreview
          label="Advanced — datepicker, range sliders, condition toggle group, colour swatches"
          code={`const [isOpen, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Show drawer</Button>
<Drawer open={isOpen} onClose={() => setOpen(false)} className="w-96 overflow-visible">
  <DrawerHeader title="FILTERS" titleIcon={() => <></>} />
  <DrawerItems>
    <form>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="brand" className="mb-2 block">Product Brand</Label>
          <Select id="brand"><option>Apple</option></Select>
        </div>
        <div>
          <Label htmlFor="model" className="mb-2 block">Product Model</Label>
          <Select id="model"><option>iMac 27"</option></Select>
        </div>
      </div>
      <Label className="mb-2 block">Manufacture Year</Label>
      <div className="flex items-center gap-x-3">
        <Datepicker />
        <span>&nbsp;to&nbsp;</span>
        <Datepicker />
      </div>
      <h6 className="mb-2 text-sm font-medium">Price Range</h6>
      <RangeSlider id="min-price" defaultValue={300} min={0} max={7000} />
      <RangeSlider id="max-price" defaultValue={3500} min={0} max={7000} />
      {/* Inline radio condition group, colour swatches, star ratings... */}
      <div className="mt-6 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
        <Button type="submit" className="w-full">Apply filters</Button>
        <Button color="gray" outline type="reset" className="w-full">Clear all</Button>
      </div>
    </form>
  </DrawerItems>
</Drawer>`}
        >
          <AdvancedFacetedSearchDrawer />
        </BlockPreview>

        <BlockPreview
          label="Large — status radio group, pill-tag skills, toggle + select filter rows"
          code={`const [isOpen, setOpen] = useState(false);
const [technologiesUsed, setTechnologiesUsed] = useState(true);

<Button onClick={() => setOpen(true)}>Show drawer</Button>
<Drawer open={isOpen} onClose={() => setOpen(false)} className="w-full max-w-lg">
  <DrawerHeader title="FILTERS" titleIcon={() => <></>} />
  <DrawerItems className="h-full">
    <form className="h-full">
      {/* Inline radio status group */}
      <ul className="flex w-full items-center rounded-lg border border-gray-200 bg-white">
        <li className="w-full border-r">
          <div className="flex items-center pl-3">
            <Radio id="status-all" name="status" defaultChecked />
            <Label htmlFor="status-all" className="ml-2 w-full py-3">All</Label>
          </div>
        </li>
        {/* Active, Inactive options... */}
      </ul>

      {/* Pill-style skill tags */}
      <ul className="grid w-full grid-cols-3 gap-3">
        <li>
          <Checkbox id="figma" className="peer hidden" name="skills" defaultChecked />
          <Label htmlFor="figma" className="...peer-checked:bg-primary-600 peer-checked:text-white...">
            Figma
          </Label>
        </li>
      </ul>

      {/* Toggle + Select rows */}
      <div className="flex items-center justify-between">
        <ToggleSwitch checked={technologiesUsed} label="Technologies Used" onChange={setTechnologiesUsed} />
        <Select><option>Min</option><option>Max</option></Select>
      </div>

      <div className="mt-6 flex w-full justify-center space-x-4 pb-4 md:px-4">
        <Button type="submit" className="w-full">Apply filters</Button>
        <Button color="gray" outline type="reset" className="w-full">Clear all</Button>
      </div>
    </form>
  </DrawerItems>
</Drawer>`}
        >
          <LargeFacetedSearchDrawer />
        </BlockPreview>

      </section>
    </div>
  );
}
