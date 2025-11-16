import React from 'react'
import { Button } from '@/components/ui/button'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from '@/components/ui/empty'
import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CartEmpty() {
  return (
    <div className='min-h-screen bg-background'>
      <div className='max-w-7xl mx-auto mt-11 p-6'>
        <h1 className='text-3xl font-bold mb-6'>Cart (0)</h1>
        <Empty className='min-h-[400px]'>
          <EmptyHeader>
            <EmptyMedia variant='icon'>
              <ShoppingBag />
            </EmptyMedia>
            <EmptyTitle>Your cart is empty</EmptyTitle>
            <EmptyDescription>
              Add some products to get started shopping
            </EmptyDescription>
          </EmptyHeader>
          <Button asChild size='lg'>
            <Link to='/shop-all'>Start Shopping</Link>
          </Button>
        </Empty>
      </div>
    </div>
  )
}
