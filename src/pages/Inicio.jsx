import React from 'react'
import { HeroCarousel } from '@/components/home/hero-carousel'
import { ProductsCarousel } from '@/components/home/ProductsCarousel'
import { FeaturedSections } from '@/components/home/FeaturedSections'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

import Seccion from '@/assets/FA25_11122025_LP_Homepage_LinkedCards-Carousel-01_Desktop_717x601_Image.avif'
import { img1, img2, img3, img4 } from '@/assets/category'
import { Newimg1, Newimg2, Newimg3 } from '@/assets/New'
import { Banner, Banner2, Banner3, Banner4, Banner4Mobile } from '@/assets/hero'

import { saleProducts, holidayPlaids } from '@/data/products'

const category = [
  { img: img1, category: "Him", link: '/category/him' },
  { img: img2, category: "Her" },
  { img: img3, category: "Kids" },
  { img: img4, category: "Fam" }
]

const heroSlides = [
  {
    image: Banner2,
    badge: "Extra 40% Off Sale Ends Today",
    badgeLink: "#",
    title: "Extra 40% Off Sale Ends Today",
    description: "Tons of new styles added to sale! Available online only.",
    primaryButton: "Shop the Sale",
    secondaryButton: "See full terms"
  },
  {
    image: Banner,
    badge: "New Collection",
    badgeLink: "#",
    title: "Introducing the Waffle Shop",
    description: "One-of-a-kind pieces. Remade, renewed, reimaged for now.",
    primaryButton: "Shop Now",
    secondaryButton: "Learn More"
  },
  {
    image: Banner3,
    badge: "Holiday Drop",
    badgeLink: "#",
    title: "Introducing the Waffle Shop",
    description: "One-of-a-kind pieces. Remade, renewed, reimaged for now.",
    primaryButton: "Shop Now",
    secondaryButton: "Learn More"
  },
  {
    image: Banner4,
    mobileImage: Banner4Mobile,
    badge: "Holiday Dro",
    badgeLink: "#",
    title: "Introducing the Waffle Shop",
    description: "One-of-a-kind pieces. Remade, renewed, reimaged for now.",
    primaryButton: "Shop Now",
    secondaryButton: "Learn More"
  }
];

const leftSection = {
  title: "New Live-In Sets",
  description: "Laid-back style that moves with you.",
  cta: "Shop Cozy Fits",
  image: Seccion,
  link: "/collections/live-in-sets",
};

const rightSection = {
  title: "The Waffle Shop",
  description: "One-of-a-kind pieces. Remade, renewed, reimagined for now.",
  cta: "Shop Now",
  link: "/collections/waffle-shop",
};

const rightCarouselImages = [
  Newimg1,
  Newimg2,
];

function Inicio() {
  return (
    <div className='w-full overflow-hidden'>
      <HeroCarousel slides={heroSlides} />
      <section className='flex flex-row gap-1 p-3'>
        {category.map((cat, index) => (
          <div key={index} className=''>
            <Link to={cat.link} className='flex flex-col text-center'>
              <Card className='p-0'>
                <img src={cat.img} alt="" className='w-2xl' />
              </Card>
              <h1>Gifts for {cat.category}</h1>
            </Link>

          </div>
        ))}
      </section>
      <section className='bg-neutral-900 border border-border text-white py-8 items-center justify-center flex flex-col gap-2 shadow'>
        <p className='text-sm'>Order by 11/11 for delivery by 12/25.</p>
        <h1 className='font-bold text-3xl md:text-4xl'>Personal Art, Customized Gifts</h1>
        <Button variant='link' asChild className='text-white underline hover:text-neutral-300'>
          <Link to='#'>Customize Shoes</Link>
        </Button>
      </section>
      <ProductsCarousel products={holidayPlaids} title='Holiday Plaids' />
      <FeaturedSections leftSection={leftSection} rightCarouselImages={rightCarouselImages} rightSection={rightSection} />
      <ProductsCarousel products={saleProducts} title='Get Cozy From Head To Toe' />
    </div>
  )
}

export default Inicio

