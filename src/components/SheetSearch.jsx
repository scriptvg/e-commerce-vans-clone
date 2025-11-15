import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent, SheetClose } from './ui/sheet'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import { Link } from 'react-router-dom'
import SK8 from '@/assets/Sk8Hi-Waterproof-Insulated-Shoe.avif'
import KnuSkoolShoe from '@/assets/Knu-Skool-Shoe.avif'
import { Logo } from './logo'
import CategoryImg from '@/assets/FA25_09122025_Search_LinkedCardContent-01_Mobile_280x356_Image.avif'

// Mock data - replace with your actual data
const trendingCategories = [
  'knu skool',
  'ultrarange',
  'slip on',
  'old skool',
  'sneakers'
]

const quickLinks = [
  { label: 'Order Status', href: '/order-status' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Return Policy', href: '/returns' },
  { label: 'Size Guide', href: '/size-guide' },
  { label: 'Live Chat', href: '/chat' }
]

const featuredProducts = [
  {
    id: 1,
    name: 'Knu Skool Shoe',
    price: '$80.00',
    salePrice: '$59.83',
    image: KnuSkoolShoe
  },
  {
    id: 2,
    name: 'Classic Slip-On Checkerboard',
    price: '$60.00',
    salePrice: '$39.97',
    image: SK8
  },
  {
    id: 3,
    name: 'Old Skool Shoe',
    price: '$70.00',
    image: SK8
  },
  {
    id: 4,
    name: 'Authentic Shoe',
    price: '$55.00',
    salePrice: '$38.97',
    image: SK8
  },
  {
    id: 5,
    name: 'Classic Slip-On Checkerboard',
    price: '$60.00',
    salePrice: '$48.97',
    image: SK8
  },
]

function SheetSearch({ isScrolled, isProductPage }) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Search className={`h-[1.2rem] w-[1.2rem] transition-colors ${isScrolled || isProductPage ? "text-black dark:text-white" : "text-white"}`} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className='w-full h-full max-w-none sm:max-w-none p-0 border-none'>
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="hidden md:flex md:w-48 lg:w-76 flex-col">
            <Logo />
            <div className="space-y-3  p-6">
              <p>Questions? We Got You.</p>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-sm hover:underline text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            {/* Search Header */}
            <div className="p-4 md:p-6 bg-background">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 h-10 text-base border-muted-foreground/20"
                    autoFocus
                  />
                </div>
                <SheetClose asChild>
                  <Button variant="ghost" size="sm" className="text-sm">
                    Cancel
                  </Button>
                </SheetClose>
              </div>
            </div>

            {/* Search Results */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 md:p-6 space-y-6">
                {/* What's Trending */}
                <div>
                  <h3 className="text-sm font-semibold mb-3">What's Trending</h3>
                  <div className="flex flex-wrap gap-2">
                    {trendingCategories.map((category, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="rounded-full px-4 py-1.5 text-xs font-normal cursor-pointer hover:bg-secondary/80"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* New For You */}
                <div>
                  <h3 className="text-sm font-semibold mb-4">New For You</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-1">
                    {featuredProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="group w-full h-[454]"
                      >
                        <div className="bg-muted overflow-hidden mb-2">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-300"
                          />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs font-medium line-clamp-2">
                            {product.name}
                          </h4>
                          <div className="flex items-center gap-2 text-xs">
                            {product.salePrice ? (
                              <>
                                <span className="line-through text-muted-foreground">{product.price}</span>
                                <span className="font-semibold text-red-600">{product.salePrice}</span>
                              </>
                            ) : (
                              <span className="font-semibold">{product.price}</span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Discover New Looks */}
                <div>
                  <h3 className="text-sm font-semibold mb-4">Discover New Looks</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 md:gap-1">
                    <Link to="/collection/classics" className="relative bg-muted overflow-hidden group cursor-pointer">
                      <img
                        src={CategoryImg}
                        alt="Classics"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent" />
                      <div className="absolute bottom-4 left-4 z-10">
                        <p className="text-white font-semibold text-base md:text-lg">Classics</p>
                      </div>
                    </Link>
                    <Link to="/collection/new-arrivals" className="relative bg-muted overflow-hidden group cursor-pointer">
                      <img
                        src={CategoryImg}
                        alt="New Arrivals"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent" />
                      <div className="absolute bottom-4 left-4 z-10">
                        <p className="text-white font-semibold text-base md:text-lg">New Arrivals</p>
                      </div>
                    </Link>
                    <Link to="/collection/slip-on" className="relative bg-muted overflow-hidden group cursor-pointer">
                      <img
                        src={CategoryImg}
                        alt="Classic Slip On"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent" />
                      <div className="absolute bottom-4 left-4 z-10">
                        <p className="text-white font-semibold text-base md:text-lg underline">Classic Slip On</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SheetSearch
