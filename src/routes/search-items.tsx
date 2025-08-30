import React from "react";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { ContentPlaceholder } from "@/components/content-placeholder.tsx";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer.tsx";

const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
];
import { useId } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Component() {
  const id = useId();

  const equipmentTypes = [
    { value: "1", label: "dock door" },
    { value: "2", label: "yard" },
    { value: "3", label: "staging area" },
    { value: "4", label: "stacking area" },
    { value: "5", label: "dropzone" },
    { value: "6", label: "general area", disabled: true },
  ];

  return (
    <fieldset className="space-y-4">
      <RadioGroup className="grid grid-cols-3 gap-2" defaultValue="1">
        {equipmentTypes.map((item) => (
          <label
            key={`${id}-${item.value}`}
            className="border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"
          >
            <RadioGroupItem
              id={`${id}-${item.value}`}
              value={item.value}
              className="sr-only after:absolute after:inset-0"
              disabled={item.disabled}
            />
            <p className="text-foreground text-sm leading-none font-medium">{item.label}</p>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}

export const SearchItems = () => {
  return (
    <div className="space-y-4">
      <Drawer>
        <div className="flex items-center gap-x-4 sticky top-0 z-10 bg-background -mx-3 px-2 pt-top-buffer pb-2">
          <div className="flex-1">
            <Label htmlFor="search" className="sr-only">
              Search
            </Label>
            <Input
              placeholder="Search qr-codes"
              id="search"
              name="search"
              type="search"
              inputClassName="bg-gray-4 border-none py-3"
            />
          </div>
          <DrawerTrigger>
            <span className="text-accent-11 text-lg font-bold">Filter</span>
          </DrawerTrigger>
        </div>
        <DrawerContent className="p-4 space-y-4">
          <h2 className="text-gray-11 text-lg leading-none font-bold uppercase">equipment type</h2>
          <Component />
        </DrawerContent>
      </Drawer>
      <ul role="list" className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="overflow-hidden rounded-md bg-white px-6 py-4 shadow-sm [--tw-shadow-color:var(--color-black-a3)] dark:bg-card dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-gray-a4"
          >
            {/* Your content */}
            <ContentPlaceholder className="h-13" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const searchItemsLoader = () => {};
