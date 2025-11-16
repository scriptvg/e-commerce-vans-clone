import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronDown, Info } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'

export function CartSummary({ subtotal, shipping, tax, total, itemCount }) {
  const [showPromoCode, setShowPromoCode] = React.useState(false)
  const freeShippingThreshold = 39.00
  const progressValue = (subtotal / freeShippingThreshold) * 100

  return (
    <div className='sticky top-20 space-y-4'>
      {/* Free Shipping Progress */}
      <div className='bg-muted p-4 rounded-lg'>
        <div className='flex justify-between items-center mb-2'>
          <span className='text-sm font-medium'>${subtotal.toFixed(2)}</span>
          <span className='text-sm font-medium'>${freeShippingThreshold.toFixed(2)}</span>
        </div>
        <Progress value={progressValue} className='h-2 mb-2' />
        <p className='text-sm text-center'>
          Spend ${(freeShippingThreshold - subtotal).toFixed(2)} more for Free Standard Shipping!
        </p>
      </div>

      {/* Promo Code */}
      <div className='border rounded-lg'>
        <button
          className='w-full p-4 flex items-center justify-between'
          onClick={() => setShowPromoCode(!showPromoCode)}
        >
          <span className='font-medium'>Got a Promo Code?</span>
          <ChevronDown className={`h-5 w-5 transition-transform ${showPromoCode ? 'rotate-180' : ''}`} />
        </button>
        {showPromoCode && (
          <div className='p-4 pt-0'>
            <div className='flex gap-2'>
              <Input placeholder='Enter code' />
              <Button>Apply</Button>
            </div>
          </div>
        )}
      </div>

      {/* Order Summary */}
      <div className='bg-muted p-4 rounded-lg space-y-3'>
        <h3 className='font-semibold text-lg'>Order Summary</h3>

        <div className='flex justify-between text-sm'>
          <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className='flex justify-between text-sm items-center'>
          <div className='flex items-center gap-1'>
            <span>Estimated Shipping</span>
            <Info className='h-4 w-4 text-muted-foreground' />
          </div>
          <span>${shipping.toFixed(2)}</span>
        </div>

        <div className='flex justify-between text-sm items-center'>
          <div className='flex items-center gap-1'>
            <span>Estimated Tax</span>
            <Info className='h-4 w-4 text-muted-foreground' />
          </div>
          <span>${tax.toFixed(2)}</span>
        </div>

        <Separator />

        <div className='flex justify-between font-semibold text-lg'>
          <span>Order Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <Button className='w-full' size='lg'>
          <img src='https://www.paypalobjects.com/webstatic/icon/pp258.png' alt='PayPal' className='h-5' />
        </Button>

        <Button className='w-full' size='lg' variant='default'>
          Checkout
        </Button>
      </div>
    </div>
  )
}
