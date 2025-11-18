import React from 'react'
import CarouselProducts from '@/components/pages/carousel-products'
import Header from '@/components/pages/header'
import { Banner } from '@/components/pages/banner'
import FiltersSidebar from '@/components/pages/filters-sidebar'
import { productsFilters } from '@/data/filterConfigs'
import { ProductsCarousel } from '@/components/home/ProductsCarousel'
import { Button } from '@/components/ui/button'
import { products, saleProducts } from '@/data/products'

function Products() {
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <div className='min-h-screen flex flex-col gap-1'>
      <Header 
        title='Shop All' 
        count={products.filter(item => item.type !== 'banner').length} 
        onToggleFilters={() => setShowFilters(!showFilters)}
        showFilters={showFilters}
      />
      
      <div className='p-4'>
        <div className='flex gap-4'>
          {showFilters && <FiltersSidebar topOffset='240px' filters={productsFilters} />}

          <div className='flex-1 flex flex-col gap-4'>
            {/* Grid de Productos */}
            <div className='grid grid-cols-3 mt-11 gap-2'>
              {products.map((item) => {
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

export default Products


