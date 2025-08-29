import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { ClockCounterClockwiseIcon, PushPinIcon } from "@phosphor-icons/react";

export const SavedItems = () => {
  return (
    <Tabs defaultValue="tab1" className="h-full flex flex-col gap-y-20">
      <div className="flex justify-center items-center">
        <TabsList variant="solid">
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
        <TabsContent value="tab1">
          <p className="text-base text-gray-11 uppercase">today</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p className="text-lg text-gray-11 font-bold uppercase">August 21</p>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export const savedItemsLoader = () => {};
