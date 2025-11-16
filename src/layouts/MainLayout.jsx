import React, { useState, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '@/components/navbar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CartProvider } from '@/context/CartContext'

function MainLayout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollRef = useRef(null)
  const location = useLocation()
  
  const isProductPage = location.pathname.startsWith('/product')
  const isProductsPage = location.pathname === '/shop-all'
  const isGiftPage = location.pathname === '/gift-guide'
  const isCartPage = location.pathname === '/cart'
  
  // Detectar página de error (cualquier ruta que no sea una de las conocidas)
  const knownRoutes = ['/', '/shop-all', '/gift-guide', '/cart']
  const isKnownRoute = knownRoutes.includes(location.pathname) || isProductPage
  const isErrorPage = !isKnownRoute

  const handleScroll = (event) => {
    const scrollTop = event.target.scrollTop
    setIsScrolled(scrollTop > 20)
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar 
          isScrolled={isScrolled} 
          staticMode={isProductsPage || isGiftPage || isProductPage || isCartPage || isErrorPage}
        />
        <ScrollArea className="h-screen w-screen" onScrollCapture={handleScroll}>
          <main>
            <Outlet />
          </main>
        </ScrollArea>
      </div>
    </CartProvider>
  )
}

export default MainLayout
