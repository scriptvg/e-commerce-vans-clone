import React from 'react'
import SK8 from '@/assets/Sk8Hi-Waterproof-Insulated-Shoe.avif'
import { ProductsCarousel } from '@/components/home/ProductsCarousel'
import { useCart } from '@/context/CartContext'
import { CartEmpty } from '@/components/pages/cart-empty'
import { CartItem } from '@/components/pages/cart-item'
import { CartSummary } from '@/components/pages/cart-summary'

const frequentlyBought = [
  { id: 1, name: 'Drop V Plaid Jockey Hat', price: 28.00, image: SK8 },
  { id: 2, name: 'Vans Drop V Crew Socks', price: 10.00, image: SK8 },
  { id: 3, name: 'Skate Snapback Hat', price: 30.00, image: SK8 },
  { id: 4, name: 'Skate Crew Socks by Ath...', price: 10.00, image: SK8 },
  { id: 5, name: 'Havenrock Crew Socks', price: 10.00, image: SK8 }
]

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, updateShippingMethod, updateItemDetails, getCartTotal, getCartCount } = useCart()

  const subtotal = getCartTotal()
  const shipping = 5.00
  const tax = 0.00
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return <CartEmpty />
  }

  return (
    <div className='min-h-screen bg-background'>
      <div className='max-w-7xl mx-auto mt-11 p-6'>
        <h1 className='text-3xl font-bold mb-6'>Cart ({getCartCount()})</h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2 space-y-6'>
            {cartItems.map((item) => (
              <CartItem
                key={item.cartItemId}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                updateShippingMethod={updateShippingMethod}
                updateItemDetails={(updates) => updateItemDetails(item.cartItemId, updates)}
              />
            ))}

            <div className='mt-8'>
              <ProductsCarousel products={frequentlyBought} title='Frequently bought together' />
            </div>
          </div>

          <div className='lg:col-span-1'>
            <CartSummary
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
              itemCount={getCartCount()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
