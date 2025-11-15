import React from 'react'
import Header from '@/components/pages/header'
import { Button } from '@/components/ui/button'
import CarouselProducts from '@/components/pages/carousel-products'
import FiltersSidebar from '@/components/pages/filters-sidebar'
import SK8 from '@/assets/Sk8Hi-Waterproof-Insulated-Shoe.avif'
import { Salton1, Salton2, Salton3, Salton4 } from '@/assets/sk8/Salton-Pearls'

const products = [
    {
      id: 1,
      new: true,
      name: 'Salton Pearls Crew Sweetshirt',
      description: 'Women´s - Midweight Fleece',
      colors: ["red"],
      price: 60.00,
      image: [Salton1, Salton2, Salton3, Salton4]
    },
    {
      id: 1,
      new: false,
      name: 'Francesca Full Skirt',
      description: 'Women´s - Adjustable Waist, Voluminous Fit',
      colors: ["red", 'green', 'black'],
      price: 70.00,
      image: [SK8, SK8, SK8, SK8]
    },
    {
      id: 1,
      new: false,
      name: 'Salton Pearls',
      description: 'Women´s - Midweight Fleece',
      colors: 1,
      price: 60.00,
      image: [SK8, SK8, SK8, SK8]
    },
    {
      id: 1,
      new: false,
      name: 'Salton Pearls',
      description: 'Women´s - Midweight Fleece',
      colors: 1,
      price: 60.00,
      image: [SK8, SK8, SK8, SK8]
    },
    {
      id: 1,
      new: false,
      name: 'Salton Pearls',
      description: 'Women´s - Midweight Fleece',
      colors: 1,
      price: 60.00,
      image: [SK8, SK8, SK8, SK8]
    },
  ]

function Gift() {
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <div className='min-h-screen p-4 flex flex-col gap-1'>
      <Header 
        extra={
          <>
            <Button>Gifts for Him</Button>
            <Button>Gifts for Her</Button>
            <Button>Gifts for Kids</Button>
            <Button>Gifts for the Fam</Button>
            <Button>Gifts Under $50</Button>
            <Button>Gifts Under $100</Button>
            <Button>Gifts Under $25</Button>
            <Button>Stocking Stuffers</Button>
          </>
        } 
        title="Holiday Gift Guide" 
        count={products.length}
        onToggleFilters={() => setShowFilters(!showFilters)}
        showFilters={showFilters}
      />
      
      <div className='flex gap-4 mt-11'>
        {showFilters && <FiltersSidebar />}

        <div className='grid grid-cols-3 gap-2 flex-1'>
          {products.map((product, index) => (
            <CarouselProducts key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gift
