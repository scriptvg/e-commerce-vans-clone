import React from 'react'
import SK8 from '@/assets/Sk8Hi-Waterproof-Insulated-Shoe.avif'
import KnuSkoolShoe from '@/assets/Knu-Skool-Shoe.avif'
import ImgBanner from '@/assets/FA25_10302025_PLP_ShopAll_eSpot-01_Desktop_458x673_Image.avif'
import CarouselProducts from '@/components/pages/carousel-products'
import { Salton1, Salton2, Salton3, Salton4 } from '@/assets/sk8/Salton-Pearls'
import { francesca1, francesca2, francesca3, francesca4, francesca5 } from '@/assets/francesca'
import Header from '@/components/pages/header'
import { Banner } from '@/components/pages/banner'
import FiltersSidebar from '@/components/pages/filters-sidebar'
import { productsFilters } from '@/data/filterConfigs'
import { ProductsCarousel } from '@/components/home/ProductsCarousel'
import { Button } from '@/components/ui/button'

function Products() {
  const [showFilters, setShowFilters] = React.useState(false);

  const products = [
        {
      type: 'banner',
      id: 'banner-1',
      title: 'Holiday Hits',
      description: "Shop the Gift guide",
      img: ImgBanner,
      link: '/gift-guide'
    },
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
      id: 2,
      new: false,
      name: 'Francesca Full Skirt',
      description: 'Women´s - Adjustable Waist, Voluminous Fit',
      colors: ["red", 'green', 'black'],
      price: 70.00,
      image: [francesca1, francesca2, francesca3, francesca4, francesca5]
    },
    {
      id: 3,
      new: false,
      name: 'Salton Pearls',
      description: 'Women´s - Midweight Fleece',
      colors: 1,
      price: 60.00,
      image: [SK8, SK8, SK8, SK8]
    },
    {
      id: 4,
      new: false,
      name: 'Salton Pearls',
      description: 'Women´s - Midweight Fleece',
      colors: 1,
      price: 60.00,
      image: [SK8, SK8, SK8, SK8]
    },
    {
      id: 5,
      new: false,
      name: 'Salton Pearls',
      description: 'Women´s - Midweight Fleece',
      colors: 1,
      price: 60.00,
      image: [SK8, SK8, SK8, SK8]
    },
  ]

  const saleProducts = [
  { image: KnuSkoolShoe, alt: "Knu Skool Shoe", name: "Knu Skool Shoe", price: "$55.00", link: '' },
  { image: SK8, alt: "Sk8 Hi-Waterproof Insulated Shoe", name: "Sk8 Hi-Waterproof Insulated Shoe", price: "$120.00" },
  { image: KnuSkoolShoe, alt: "Crosspath XC Shoe", name: "Crosspath XC Shoe", price: "$110.00" },
  { image: KnuSkoolShoe, alt: "Classic Slip-On Checkerboard", name: "Classic Slip-On Checkerboard", price: "$50.00" },
  { image: KnuSkoolShoe, alt: "Classic Slip-On Checkerboard", name: "Classic Slip-On Checkerboard", price: "$50.00" },
  { image: KnuSkoolShoe, alt: "Classic Slip-On Checkerboard", name: "Classic Slip-On Checkerboard", price: "$50.00" }
];

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


