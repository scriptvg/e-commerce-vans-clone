import React, { useState, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '@/components/navbar'
import { ScrollArea } from '@/components/ui/scroll-area'

function MainLayout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollRef = useRef(null)
  const location = useLocation()
  
  const isProductPage = location.pathname.startsWith('/product')
  const isProductsPage = location.pathname === '/shop-all'
  const isGiftPage = location.pathname === '/gift-guide'
  const isCartPage = location.pathname === '/cart'

  const handleScroll = (event) => {
    const scrollTop = event.target.scrollTop
    setIsScrolled(scrollTop > 20)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        isScrolled={isScrolled} 
        staticMode={isProductsPage || isGiftPage || isProductPage || isCartPage}
      />
      <ScrollArea className="h-screen w-screen" onScrollCapture={handleScroll}>
        <main>
          <Outlet />
        </main>
      </ScrollArea>
    </div>
  )
}

export default MainLayout
