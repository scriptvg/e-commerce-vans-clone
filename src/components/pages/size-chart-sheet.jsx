import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Tabs, TabsContent } from "../ui/tabs";
import { ScrollArea } from "../ui/scroll-area";
import TabChart from "./tab-chart";
import { TabListOption } from "./tab-list-option";

export function SizeChartSheet() {
  const [sizeTab, setSizeTab] = useState("chart");

  const options = [
    { value: "chart", title: "Chart" },
    { value: "measurements", title: "Measurements" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" effect="hoverUnderline">
          Size chart
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-xl p-0 gap-0 bg-background backdrop-blur-md border-none flex flex-col">
        <SheetHeader className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold">Shoes</h2>
        </SheetHeader>

        <Tabs
          value={sizeTab}
          onValueChange={setSizeTab}
          className="flex-1 flex flex-col overflow-hidden"
        >
          <TabListOption options={options} sizeTab={sizeTab} />

          <ScrollArea className="h-[800px]">
            <div className="p-6">
              <TabChart value="chart" />
              <TabsContent value="measurements" className="flex flex-col gap-4 mt-0">
                <header>
                  <h1 className="font-bold text-lg">
                    How to measure yourself for a great fit?
                  </h1>
                </header>
                <main className="flex flex-col gap-6 pb-6">
                  <section className="flex flex-col gap-2 pb-6 border-b">
                    <h2 className="font-semibold">Foot Length:</h2>
                    <p className="text-sm text-muted-foreground">
                      Put your foot on a flat surface with your heel against a wall or
                      straight edge. Use a ruler to measure the length in millimeters
                      from the tip of your longest toe to your heel. Keep in mind that
                      your longest toe isn't necessarily your big toe!
                    </p>
                  </section>
                  <section className="flex flex-col gap-2">
                    <h2 className="font-semibold">Free 30-Day Returns</h2>
                    <p className="text-sm text-muted-foreground">
                      We accept returns for online purchases within 30 days of shipment
                      if you need a different size, fit, or style! Just make sure items
                      are unworn, unwashed, and unaltered. For more details on returns,
                      please visit our
                    </p>
                    <Button variant="link" className="p-0 justify-start h-auto">
                      return page
                    </Button>
                  </section>
                </main>
              </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
