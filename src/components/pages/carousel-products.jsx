import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { toast } from 'sonner'

function CarouselProducts({ product }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
    toast.success('Added to cart!', {
      description: product.name
    })
  }

  return (
    <div className='aspect-square'>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className='group relative'
        setApi={(api) => {
          if (!api) return;
          api.on('select', () => {
            setCurrentSlide(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent>
          {product.image.map((image, imgIndex) => {
            return (
              <CarouselItem key={imgIndex}>
                <Link to={`/product/${product.id}`}>
                  <img src={image} alt={product.name} className='h-auto' />
                </Link>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        <Button 
          className='top-4 right-4 absolute z-5' 
          size='icon' 
          variant='ghost'
          onClick={handleAddToCart}
        >
          <Plus className='text-black' />
        </Button>

        <CarouselNext className='absolute bottom-0 right-1 backdrop-grayscale-45 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 disabled:pointer-events-none' />
        <CarouselPrevious className='absolute bottom-0 left-1 backdrop-grayscale-45 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 disabled:pointer-events-none' />

        {/* barras de cual imagen esta puesta */}
        <div className='absolute opacity-0 group-hover:opacity-100 bottom-0 w-full left-1/2 -translate-x-1/2 flex'>
          {product.image.map((_, imgIndex) => (
            <div
              key={imgIndex}
              className={`h-0.5 w-full transition-all ${imgIndex === currentSlide
                ? 'w-6 bg-background'
                : 'w-4 bg-gray-300'
                }`}
            />
          ))}
        </div>
      </Carousel>
      <div className='h-[135px] p-2'>
        <p className={product.new ? "text-[#7f593b] text-xs mt-2 font-semibold" : "text-transparent"}>New</p>
        <h1 className='text-2xl'>{product.name}</h1>
        <p className='text-xs text-muted-foreground mt-1'>{product.description}</p>
        {product.colors && (
          <p className='text-xs text-muted-foreground mb-2'>
            {Array.isArray(product.colors)
              ? product.colors.length === 1
                ? '1 color'
                : `${product.colors.length} colors`
              : product.colors === 1
                ? '1 color'
                : `${product.colors} colors`
            }
          </p>
        )}
        <p className='text-sm font-mono'>${product.price}</p>
      </div>
    </div>
  )
}

export default CarouselProducts
