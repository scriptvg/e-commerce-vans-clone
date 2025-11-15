import React from 'react'
import { Switch } from '@/components/ui/switch'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from '@/components/ui/accordion'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import { Checkbox } from '@/components/ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

function FiltersSidebar({ className }) {
  return (
    <aside className={cn('w-64 shrink-0 sticky top-[200px] self-start', className)}>
      <ScrollArea className='h-[calc(100vh-290px)]'></ScrollArea>
        <div className='space-y-4 pr-4'>
        {/* In-Store Pickup */}
        <div className='border-b pb-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='font-semibold'>In-Store Pickup</h3>
              <Sheet>
                <SheetTrigger>
                  <button className='text-sm underline text-left'>Select store</button>
                </SheetTrigger>
                <SheetContent className='w-full sm:max-w-md p-0 bg-background backdrop-blur-md border-none'>
                  <SheetHeader className='border-b'>
                    <SheetTitle className=''>
                      Find Store
                    </SheetTitle>
                  </SheetHeader>
                  <div className='p-4'>
                    <p className='text-sm text-muted-foreground'>Store filters coming soon...</p>
                  </div>

                </SheetContent>
              </Sheet>
            </div>
            <Switch />
          </div>
        </div>

        <Accordion type='single' collapsible className='w-full' defaultValue="sort">
          <AccordionItem value='sort'>
            <AccordionTrigger>Sort</AccordionTrigger>
            <AccordionContent>
              <RadioGroup defaultValue="relevance" className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value="relevance" id="relevance" />
                  <Label htmlFor="relevance">Relevance</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value="new" id="new" />
                  <Label htmlFor="new">What's New</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value="low-high" id="low-high" />
                  <Label htmlFor="low-high">Prices: Low to high</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value="high-low" id="high-low" />
                  <Label htmlFor="high-low">Prices: High to low</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value="best-selling" id="best-selling" />
                  <Label htmlFor="best-selling">Best Selling</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='price'>
            <AccordionTrigger>Shop By Price</AccordionTrigger>
            <AccordionContent>
              <div className='space-y-3'>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="price-0-25" />
                  <Label htmlFor="price-0-25" className='cursor-pointer'>$0 - $25 (73)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="price-25-50" />
                  <Label htmlFor="price-25-50" className='cursor-pointer'>$25 - $50 (87)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="price-50-75" />
                  <Label htmlFor="price-50-75" className='cursor-pointer'>$50 - $75 (101)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="price-75-100" />
                  <Label htmlFor="price-75-100" className='cursor-pointer'>$75 - $100 (67)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="price-100-125" />
                  <Label htmlFor="price-100-125" className='cursor-pointer'>$100 - $125 (23)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="price-over-125" />
                  <Label htmlFor="price-over-125" className='cursor-pointer'>OVER $125 (49)</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='type'>
            <AccordionTrigger>Product Type</AccordionTrigger>
            <AccordionContent>
              <div className='space-y-3'>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="type-shoes" />
                  <Label htmlFor="type-shoes" className='cursor-pointer'>Shoes (176)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="type-accessories" />
                  <Label htmlFor="type-accessories" className='cursor-pointer'>Accessories (98)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="type-clothing" />
                  <Label htmlFor="type-clothing" className='cursor-pointer'>Clothing (83)</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='category'>
            <AccordionTrigger>Product Category</AccordionTrigger>
            <AccordionContent>
              <div className='space-y-3'>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-backpacks" />
                  <Label htmlFor="cat-backpacks" className='cursor-pointer'>Backpacks (7)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-bags" />
                  <Label htmlFor="cat-bags" className='cursor-pointer'>Bags (16)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-boots" />
                  <Label htmlFor="cat-boots" className='cursor-pointer'>Boots (26)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-hats" />
                  <Label htmlFor="cat-hats" className='cursor-pointer'>Hats (24)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-hoodies" />
                  <Label htmlFor="cat-hoodies" className='cursor-pointer'>Hoodies & Sweatshirts (13)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-jackets" />
                  <Label htmlFor="cat-jackets" className='cursor-pointer'>Jackets (21)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-loafers" />
                  <Label htmlFor="cat-loafers" className='cursor-pointer'>Loafers (2)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-mary-jane" />
                  <Label htmlFor="cat-mary-jane" className='cursor-pointer'>Mary Jane (6)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-mules" />
                  <Label htmlFor="cat-mules" className='cursor-pointer'>Mules (4)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-novelty" />
                  <Label htmlFor="cat-novelty" className='cursor-pointer'>Novelty (22)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-pants" />
                  <Label htmlFor="cat-pants" className='cursor-pointer'>Pants (17)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-shirts" />
                  <Label htmlFor="cat-shirts" className='cursor-pointer'>Shirts (9)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-shoecare" />
                  <Label htmlFor="cat-shoecare" className='cursor-pointer'>Shoecare (2)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-skirts" />
                  <Label htmlFor="cat-skirts" className='cursor-pointer'>Skirts (3)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-slip-ons" />
                  <Label htmlFor="cat-slip-ons" className='cursor-pointer'>Slip Ons (26)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-sneakers" />
                  <Label htmlFor="cat-sneakers" className='cursor-pointer'>Sneakers (112)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-socks" />
                  <Label htmlFor="cat-socks" className='cursor-pointer'>Socks (25)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-sweaters" />
                  <Label htmlFor="cat-sweaters" className='cursor-pointer'>Sweaters (3)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-tshirts" />
                  <Label htmlFor="cat-tshirts" className='cursor-pointer'>T-Shirts (13)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-tops" />
                  <Label htmlFor="cat-tops" className='cursor-pointer'>Tops (4)</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="cat-wallets" />
                  <Label htmlFor="cat-wallets" className='cursor-pointer'>Wallets (2)</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='gifting'>
            <AccordionTrigger>Gifting</AccordionTrigger>
            <AccordionContent>
              <p className='text-sm text-muted-foreground'>Gifting filters coming soon...</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='family'>
            <AccordionTrigger>Product Family</AccordionTrigger>
            <AccordionContent>
              <p className='text-sm text-muted-foreground'>Family filters coming soon...</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>
      </ScrollArea>
    </aside>
  )
}

export default FiltersSidebar

