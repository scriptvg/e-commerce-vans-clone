import React from 'react'
import { Button } from './ui/button'
import { User } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetHeader } from './ui/sheet'
import Logo from '@/assets/loyalty.svg'
import LoyaltyForm from './LoyaltyForm'


function SubscribeSheet({ isScrolled, isProductPage }) {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <User className={`h-[1.2rem] w-[1.2rem] transition-colors ${isScrolled || isProductPage ? "text-black dark:text-white" : "text-white"}`} />
        </Button>
      </SheetTrigger>
      <SheetContent className='w-full sm:max-w-md p-0 bg-background backdrop-blur-md border-none'>
        <SheetHeader className='border-b p-6' />
        <div className='flex flex-col p-4'>
          <div className='w-full max-w-md flex flex-col justify-center items-center'>
            <img src={Logo} alt="" className='size-32 dark:brightness-0 dark:invert' />
          </div>
          <div className='w-full max-w-md'>
            <LoyaltyForm />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SubscribeSheet
