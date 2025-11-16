import React from 'react'
import { Switch } from '@/components/ui/switch'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from '@/components/ui/accordion'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import { Checkbox } from '@/components/ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'

const defaultSortOptions = [
  { value: "relevance", label: "Relevance", id: "relevance" },
  { value: "new", label: "What's New", id: "new" },
  { value: "low-high", label: "Prices: Low to high", id: "low-high" },
  { value: "high-low", label: "Prices: High to low", id: "high-low" },
  { value: "best-selling", label: "Best Selling", id: "best-selling" }
]

function FiltersSidebar({ 
  topOffset = '290px', 
  maxHeight = '205px',
  filters = []
}) {
  const [selectedColors, setSelectedColors] = React.useState([])

  const toggleColor = (colorId) => {
    setSelectedColors(prev =>
      prev.includes(colorId)
        ? prev.filter(id => id !== colorId)
        : [...prev, colorId]
    )
  }

  const renderFilterContent = (filter) => {
    switch (filter.type) {
      case 'sort':
        return (
          <RadioGroup defaultValue="relevance" className='space-y-2'>
            {(filter.options || defaultSortOptions).map((option) => (
              <div key={option.value} className='flex items-center space-x-2'>
                <RadioGroupItem value={option.value} id={option.id} />
                <Label htmlFor={option.id}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        )
      
      case 'color':
        return (
          <div className='grid grid-cols-5 gap-4'>
            {filter.options.map((color) => (
              <button
                key={color.id}
                onClick={() => toggleColor(color.id)}
                className='flex flex-col mt-1 items-center gap-2 group'
              >
                <div
                  className={`w-5 h-5 border rounded-full transition-all ${
                    selectedColors.includes(color.id)
                      ? 'border-black ring-2 ring-offset-2 ring-black'
                      : 'border-background'
                  }`}
                  style={{
                    backgroundColor: color.color,
                    backgroundImage: color.pattern === 'checkerboard'
                      ? 'repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)'
                      : 'none',
                    backgroundSize: color.pattern === 'checkerboard' ? '8px 8px' : 'auto'
                  }}
                />
                <span className='text-xs text-muted-foreground text-center'>{color.label}</span>
              </button>
            ))}
          </div>
        )
      
      case 'checkbox':
      default:
        return (
          <div className='space-y-3'>
            {filter.options.map((option) => (
              <div key={option.id} className='flex items-center space-x-2'>
                <Checkbox id={option.id} />
                <Label htmlFor={option.id} className='cursor-pointer flex-1'>
                  {option.label} {option.count && `(${option.count})`}
                </Label>
              </div>
            ))}
          </div>
        )
    }
  }

  return (
    <aside
      className='w-64 shrink-0 sticky self-start'
      style={{ top: topOffset }}
    >
      <ScrollArea style={{ height: `calc(100vh - ${maxHeight})` }}>
        <div className='pr-4'>
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
                      <SheetTitle>Find Store</SheetTitle>
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
            {filters.map((filter) => (
              <AccordionItem key={filter.id} value={filter.id}>
                <AccordionTrigger>{filter.title}</AccordionTrigger>
                <AccordionContent>
                  {renderFilterContent(filter)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollArea>
    </aside>
  )
}

export default FiltersSidebar
