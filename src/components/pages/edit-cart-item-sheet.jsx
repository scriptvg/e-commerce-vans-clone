import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'

const sizes = [
  'B3.5 / W5',
  'B4 / W5.5',
  'B4.5 / W6',
  'B5 / W6.5',
  'B5.5 / W7',
  'B6 / W7.5',
  'M6.5 / W8',
  'M7 / W8.5',
  'M7.5 / W9',
  'M8 / W9.5',
  'M8.5 / W10',
  'M9 / W10.5',
  'M9.5 / W11',
  'M10 / W11.5',
  'M10.5 / W12',
  'M11 / W12.5',
  'M11.5 / W13',
  'M12 / W13.5',
]

export function EditCartItemSheet({ open, onOpenChange, item, onUpdate }) {
  const [selectedSize, setSelectedSize] = React.useState(item?.selectedSize || '')

  const handleSizeSelect = (size) => {
    setSelectedSize(size)
    if (onUpdate) {
      onUpdate({ selectedSize: size })
    }
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side='right' className='w-full sm:max-w-md p-0'>
        <SheetHeader className='px-6 py-4 border-b'>
          <div className='flex items-center justify-between'>
            <SheetTitle>Quickshop</SheetTitle>
            <SheetClose asChild>
              <Button variant='ghost' size='icon' className='h-8 w-8'>
                <X className='h-4 w-4' />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className='px-6 py-4'>
          <h3 className='text-lg font-semibold mb-4'>Choose Your Size</h3>
        </div>

        <ScrollArea className='h-[calc(100vh-140px)]'>
          <div className='px-6 pb-6'>
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className='w-full text-left py-4 border-b hover:bg-muted/50 transition-colors'
              >
                <span className='text-base'>{size}</span>
              </button>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
