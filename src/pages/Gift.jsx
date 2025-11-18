import React from 'react'
import Header from '@/components/pages/header'
import { Button } from '@/components/ui/button'
import CarouselProducts from '@/components/pages/carousel-products'
import FiltersSidebar from '@/components/pages/filters-sidebar'
import { Banner } from '@/components/pages/banner'
import { giftFilters } from '@/data/filterConfigs'
import { ProductsCarousel } from '@/components/home/ProductsCarousel'
import { saleProducts, giftProducts } from '@/data/products'

function Gift() {
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <div className='min-h-screen flex flex-col gap-1'>
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
        count={giftProducts.length}
        onToggleFilters={() => setShowFilters(!showFilters)}
        showFilters={showFilters}
      />

      <div className='p-4'>
        <div className='flex gap-4'>
          {showFilters && <FiltersSidebar topOffset='290px' filters={giftFilters} />}

          <div className='flex-1 flex flex-col gap-4'>
            {/* Grid de Productos */}
            <div className='grid grid-cols-3 gap-2'>
              {giftProducts.map((item) => {
                if (item.type === 'banner') {
                  return <Banner info={item} key={item.id} />
                }
                return <CarouselProducts key={item.id} product={item} />
              })}
            </div>
            
            <div className='m-11 justify-center items-center flex flex-col gap-2'>
              <p>Viewing 48 of 2158 Products</p>
              <Button>View More</Button>
            </div>
          </div>
        </div>
      </div>
      <ProductsCarousel products={saleProducts} title='Popular Picks' />
    </div>
  )
}

export default Gift
