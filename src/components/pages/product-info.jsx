import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, Truck, Store } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from "../ui/breadcrumb";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TabChart from "./tab-chart";
import { TabListOption } from "./tab-list-option";
import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

export function ProductInfo({ product, selectedColorIndex, onSelectColor }) {
  const [sizeTab, setSizeTab] = useState("chart");

  const options = [
    { value: "chart", title: "Chart", component: <TabChart /> },
    { value: "measurements", title: "Measurements" },
  ];

  return (
    <div className="w-[400px] sticky top-[70px] self-start">
      <div className="space-y-6 p-4">
        <div>
          <div className="flex items-end justify-end mb-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink>Icons</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>SK8 Hi</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold mb-2">{product.name}</h1>
            <Button variant="ghost">
              <Heart />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            {product.description}
          </p>
          <p className="text-xl font-semibold">{product.price}</p>
        </div>

        {/* Selector de color */}
        <div>
          <p className="font-medium mb-3">{product.color}</p>
          <div className="flex gap-2">
            {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => onSelectColor?.(index)}
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${selectedColorIndex === index
                  ? "border-black dark:border-white"
                  : "border-gray-300 hover:border-gray-400"
                  }`}
              >
                <img
                  src={(product.colorImages?.[index]) ?? product.images[0]}
                  alt={color.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
            <button className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center text-sm font-medium">
              +1
            </button>
          </div>
        </div>

        {/* Selector de talla */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <p className="font-medium">Size</p>
            <Sheet>
              <SheetTrigger>
                <Button variant="link" effect="hoverUnderline">
                  Size chart
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-xl p-0 gap-0 bg-background backdrop-blur-md border-none">
                <SheetHeader className="border-b">Shoes</SheetHeader>

                <Tabs
                  value={sizeTab}
                  onValueChange={setSizeTab}
                  className="m-0 gap-0"
                >
                  <TabListOption options={options} sizeTab={sizeTab} />
                  <div className="p-4">
                    <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
                      <TabChart value='chart' />
                      <TabsContent value='measurements' className='flex flex-col gap-2'>
                        <header>
                          <h1 className="font-bold text-lg">How to measure yourself for a great fit?</h1>
                        </header>
                        <main className='flex flex-col gap-2 border-b'>
                          <section className='flex flex-col gap-2'>
                            <h1 className="font-semibold">Foot Length:</h1>
                            <p className="text-xs text-muted-foreground">Put your foot on a flat surface with your heel against a wall or straight edge. Use a ruler to measure the length in millimeters from the tip of your longest toe to your heel. Keep in mind that your longest toe isn't necessarily your big toe!</p>
                          </section>
                          <section className='flex flex-col items-start gap-2 '>
                            <h1 className="font-semibold">Free 30-Day Returns</h1>
                            <p className="text-xs text-muted-foreground">We accept returns for online purchases within 30 days of shipment if you need a different size, fit, or style! Just make sure items are unworn, unwashed, and unaltered. For more details on returns, please visit our</p>
                            <Button variant='link' className='p-0'>return page</Button>
                          </section>
                        </main>
                      </TabsContent>
                    </ScrollArea>
                  </div>
                </Tabs>
              </SheetContent>
            </Sheet>
          </div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose Your Size" />
            </SelectTrigger>
            <SelectContent>
              {product.sizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Botones de acción */}
        <div className="space-y-3">
          <Button className="w-full h-12 text-base" size="lg">
            Choose Your Size
          </Button>
          <Button variant="outline" className="w-full h-12 text-base" size="lg">
            <Heart className="w-5 h-5 mr-2" />
            Add to Wishlist
          </Button>
        </div>

        {/* Información de envío */}
        <div className="space-y-4 pt-4 border-t">
          <div className="flex items-start gap-3 border-foreground border p-2">
            <Truck className="w-5 h-5 mt-1 shrink-0" />
            <div className="mb-2">
              <p className="font-medium">Ship to Home</p>
              <p className="text-sm text-muted-foreground">Standard Shipping</p>
              <p className="text-sm text-muted-foreground">3-8 Business days</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Store className="w-5 h-5 mt-1 shrink-0" />
            <div>
              <p className="font-medium">In-Store Pickup</p>
              <button className="text-sm underline">Find Store</button>
              <p className="text-sm text-muted-foreground">
                Complete order/pickup in-store availability
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
