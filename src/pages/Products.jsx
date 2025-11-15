import React from 'react'
import SK8 from '@/assets/Sk8Hi-Waterproof-Insulated-Shoe.avif'
import ImgBanner from '@/assets/FA25_10302025_PLP_ShopAll_eSpot-01_Desktop_458x673_Image.avif'
import CarouselProducts from '@/components/pages/carousel-products'
import { Salton1, Salton2, Salton3, Salton4 } from '@/assets/sk8/Salton-Pearls'
import Header from '@/components/pages/header'
import { Banner } from '@/components/pages/banner'
import FiltersSidebar from '@/components/pages/filters-sidebar'

function Products() {
  const [showFilters, setShowFilters] = React.useState(false);

  const CardBanner = [
    {
      id: 1,
      title: 'Holiday Hits',
      description: "Shop the Gift guide",
      img: ImgBanner,
      link: '/gift-guide'
    },
  ]

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

  return (
    <div className='min-h-screen p-4 flex flex-col gap-1'>
      <Header 
        title='Shop All' 
        count={products.length} 
        onToggleFilters={() => setShowFilters(!showFilters)}
        showFilters={showFilters}
      />
      
      <div className='flex gap-4 mt-11'>
        {showFilters && <FiltersSidebar topOffset='210px' />}

        {/* Grid de Productos */}
        <div className='grid grid-cols-3 gap-2 flex-1'>
          {CardBanner.map((banner, index) => {
            return (
              <Products.Banner info={banner} key={index} />
            )
          })}
          {products.map((product, index) => (
            <CarouselProducts key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products

Products.Banner = Banner
