import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import {
  ArrowsOutIcon,
  ArrowsOutSimpleIcon,
  ClockCounterClockwiseIcon,
  FrameCornersIcon,
  PushPinIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button.tsx";
import { ContentPlaceholder } from "@/components/content-placeholder.tsx";

export const SavedItems = () => {
  return (
    <Tabs
      defaultValue="tab1"
      className="h-full flex flex-col gap-y-20 pt-[calc(--spacing(4)+56px+--spacing(5))]"
    >
      <div className="flex justify-center items-center absolute top-top-buffer left-1/2 -translate-x-1/2 z-10">
        <TabsList variant="solid" className="transition-none">
          <TabsTrigger value="tab1" className="gap-1.5 text-xl">
            <ClockCounterClockwiseIcon weight="fill" className="-ml-1 size-4" aria-hidden="true" />
            Recent
          </TabsTrigger>
          <TabsTrigger value="tab2" className="gap-1.5 text-xl">
            <PushPinIcon weight="fill" className="-ml-1 size-4" aria-hidden="true" />
            Pinned
          </TabsTrigger>
        </TabsList>
      </div>
      <div className="grow">
        <TabsContent value="tab1" className="space-y-8">
          <section className="space-y-3">
            <p className="text-lg text-gray-11 font-bold uppercase">today</p>
            <ul className="flex overflow-x-auto gap-x-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <SavedItem />
              ))}
            </ul>
          </section>
          <section className="space-y-3">
            <p className="text-lg text-gray-11 font-bold uppercase">yesterday</p>
            <ul className="flex overflow-x-auto gap-x-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <SavedItem />
              ))}
            </ul>
          </section>
          <section className="space-y-3">
            <p className="text-lg text-gray-11 font-bold uppercase">last friday</p>
            <ul className="flex overflow-x-auto gap-x-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <SavedItem />
              ))}
            </ul>
          </section>
        </TabsContent>
        <TabsContent value="tab2">
          <p className="text-lg text-gray-11 font-bold uppercase">August 21</p>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export const savedItemsLoader = () => {};

function SavedItem() {
  return (
    <div className="isolate relative bg-card rounded-3xl shadow-sm border p-4 w-full max-w-xs">
      <div className="flex flex-col gap-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-wider uppercase">STG.G48</h2>
          <div className="self-end size-10 bg-gray-5 rounded-full flex items-center justify-center">
            <PushPinIcon size={20} weight="fill" className="text-gray-11" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ContentPlaceholder className="h-48 w-auto aspect-video" />
        </div>
        {/* Action Section */}
        <div className="flex items-center justify-center space-x-6 w-full">
          <Button className="text-lg font-semibold">View</Button>
        </div>
      </div>
    </div>
  );
}
