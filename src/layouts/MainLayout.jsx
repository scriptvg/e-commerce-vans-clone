import React, { useState, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/navbar'
import { ScrollArea } from '@/components/ui/scroll-area'

function MainLayout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollRef = useRef(null)

  const handleScroll = (event) => {
    const scrollTop = event.target.scrollTop
    setIsScrolled(scrollTop > 20)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar isScrolled={isScrolled} />
      <ScrollArea className="h-screen w-screen" onScrollCapture={handleScroll}>
        <main>
          <Outlet />
        </main>
      </ScrollArea>
    </div>
  )
}

export default MainLayout
