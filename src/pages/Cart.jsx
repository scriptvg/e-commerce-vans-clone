import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { ButtonGroup } from '@/components/ui/button-group'
import { Minus, Plus, ChevronDown, Info } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import SK8 from '@/assets/Sk8Hi-Waterproof-Insulated-Shoe.avif'
import { ProductsCarousel } from '@/components/home/ProductsCarousel'

function Cart() {
  const [quantity, setQuantity] = React.useState(1)
  const [shippingMethod, setShippingMethod] = React.useState('home')
  const [showPromoCode, setShowPromoCode] = React.useState(false)

  const cartItems = [
    {
      id: 1,
      name: 'Classic Slip-On Shoe',
      color: 'Navy Blue',
      size: '3.5 Boys = 5.0 Women',
      price: 60.00,
      image: SK8,
      quantity: 1
    }
  ]

  const frequentlyBought = [
    { id: 1, name: 'Drop V Plaid Jockey Hat', price: 28.00, image: SK8 },
    { id: 2, name: 'Vans Drop V Crew Socks', price: 10.00, image: SK8 },
    { id: 3, name: 'Skate Snapback Hat', price: 30.00, image: SK8 },
    { id: 4, name: 'Skate Crew Socks by Ath...', price: 10.00, image: SK8 },
    { id: 5, name: 'Havenrock Crew Socks', price: 10.00, image: SK8 }
  ]

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const shipping = 5.00
  const tax = 0.00
  const total = subtotal + shipping + tax

  const freeShippingThreshold = 39.00
  const progressValue = (subtotal / freeShippingThreshold) * 100

  return (
    <div className='min-h-screen bg-background'>
      <div className='max-w-7xl mx-auto mt-11 p-6'>
        <h1 className='text-3xl font-bold mb-6'>Cart ({cartItems.length})</h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Left Column - Cart Items */}
          <div className='lg:col-span-2 space-y-6'>
            {cartItems.map((item) => (
              <div key={item.id} className='flex gap-4 pb-6 border-b'>
                <img src={item.image} alt={item.name} className='w-32 h-32 object-cover' />

                <div className='flex-1'>
                  <h3 className='font-semibold text-lg'>{item.name}</h3>
                  <p className='text-sm text-muted-foreground'>{item.color}</p>
                  <p className='text-sm text-muted-foreground'>{item.size}</p>
                  <div className='flex items-center gap-2 mt-4'>
                    <ButtonGroup>
                      <Button
                        variant='outline'
                        size='icon'
                        className='h-8 w-8'
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <Input
                        type='number'
                        value={quantity}
                        className='w-16 h-8 text-center'
                        readOnly
                      />
                      <Button
                        variant='outline'
                        size='icon'
                        className='h-8 w-8'
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className='h-4 w-4' />
                      </Button>
                    </ButtonGroup>

                  </div>

                  <div className='mt-4'>
                    <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='home' id='home' />
                        <Label htmlFor='home' className='cursor-pointer'>
                          <div>
                            <p className='font-semibold'>Ship to Home</p>
                            <p className='text-sm text-muted-foreground'>Ships in 3-5 business days</p>
                          </div>
                        </Label>
                      </div>
                      <div className='flex items-center space-x-2 mt-2'>
                        <RadioGroupItem value='store' id='store' />
                        <Label htmlFor='store' className='cursor-pointer'>
                          <div>
                            <p className='font-semibold'>Pickup in Store</p>
                            <button className='text-sm text-blue-600 underline'>Select store</button>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <button className='text-sm underline mt-4'>Save for later</button>
                </div>

                <div className='text-right'>
                  <p className='font-semibold text-lg'>${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}

            {/* Frequently Bought Together */}
            <div className='mt-8'>
              <ProductsCarousel products={frequentlyBought} title='Frequently bought together' />
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className='lg:col-span-1'>
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
                  <span>Subtotal ({cartItems.length} item)</span>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
