import React from "react";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { ContentPlaceholder } from "@/components/content-placeholder.tsx";

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

export const SearchItems = () => {
  return (
    <div className="space-y-4">
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
        <span className="text-accent-11 text-lg font-bold" variant="ghost">
          Filter
        </span>
      </div>
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
