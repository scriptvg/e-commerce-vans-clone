import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Trash2, Pencil } from 'lucide-react'
import { EditCartItemSheet } from './edit-cart-item-sheet'

export function CartItem({ item, updateQuantity, removeFromCart, updateShippingMethod, updateItemDetails }) {
  const [isEditOpen, setIsEditOpen] = React.useState(false)

  return (
    <>
      <EditCartItemSheet 
        open={isEditOpen} 
        onOpenChange={setIsEditOpen}
        item={item}
        onUpdate={updateItemDetails}
      />
      <div className='pb-8 mb-8 border-b'>
        {/* Header con nombre y precio */}
        <div className='flex items-start justify-between mb-4'>
          <h3 className='text-xl font-semibold'>{item.name}</h3>
          <p className='text-xl font-semibold'>${(item.price * item.quantity).toFixed(2)}</p>
        </div>

        {/* Grid con imagen e info */}
        <div className='grid grid-cols-[auto_1fr] gap-4'>
          {/* Columna 1: Imagen */}
          <div className='relative w-40 h-40 bg-muted'>
            <img 
              src={Array.isArray(item.image) ? item.image[0] : item.image} 
              alt={item.name} 
              className='w-full h-full object-cover' 
            />
            <Button 
              variant='ghost' 
              size='icon' 
              className='absolute top-2 right-2 h-8 w-8 bg-background/80 hover:bg-background'
              onClick={() => setIsEditOpen(true)}
            >
              <Pencil className='h-4 w-4' />
            </Button>
          </div>

          {/* Columna 2: Info del producto */}
          <div className='space-y-4'>
            {/* Color y talla */}
            <div>
              {item.selectedColor && (
                <p className='text-sm text-muted-foreground'>{item.selectedColor}</p>
              )}
              {item.selectedSize && (
                <p className='text-sm text-muted-foreground'>{item.selectedSize}</p>
              )}
              {item.new && (
                <p className='text-sm font-semibold mt-1'>New</p>
              )}
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between mt-4'>
          {/* Controles de cantidad */}
          <div className='flex items-center gap-0 w-fit border rounded'>
            <Button
              variant='ghost'
              size='icon'
              className='h-10 w-10 rounded-none'
              onClick={() => {
                if (item.quantity === 1) {
                  removeFromCart(item.cartItemId)
                } else {
                  updateQuantity(item.cartItemId, item.quantity - 1)
                }
              }}
            >
              <Trash2 className='h-4 w-4' />
            </Button>
            <Input
              type='number'
              value={item.quantity}
              className='w-16 h-10 text-center border-0 border-x rounded-none'
              readOnly
            />
            <Button
              variant='ghost'
              size='icon'
              className='h-10 w-10 rounded-none'
              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
            >
              +
            </Button>
          </div>

          {/* Save for later */}
          <button className='text-sm underline text-left'>Save for later</button>
        </div>

        {/* Opciones de envío */}
        <div className='mt-6'>
          <RadioGroup 
            value={item.shippingMethod || 'home'} 
            onValueChange={(value) => updateShippingMethod(item.cartItemId, value)}
            className='space-y-3'
          >
            <div className='flex items-start space-x-3'>
              <RadioGroupItem value='home' id={`home-${item.cartItemId}`} className='mt-1' />
              <Label htmlFor={`home-${item.cartItemId}`} className='cursor-pointer flex-1'>
                <div>
                  <p className='font-semibold'>Ship to Home</p>
                  <p className='text-sm text-muted-foreground'>Ships in 3-6 business days</p>
                </div>
              </Label>
            </div>
            <div className='flex items-start space-x-3'>
              <RadioGroupItem value='store' id={`store-${item.cartItemId}`} className='mt-1' />
              <Label htmlFor={`store-${item.cartItemId}`} className='cursor-pointer flex-1'>
                <div>
                  <p className='font-semibold'>Pickup in Store</p>
                  <button className='text-sm underline'>Select store</button>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </>
  )
}
