import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { carouselDefaultProducts } from "@/data/products";

export function ProductsCarousel({ products: productsProp, title = "Holiday Plaids" }) {
  const products = productsProp || carouselDefaultProducts;
  const { addToCart } = useCart();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success('Added to cart!', {
      description: product.name
    });
  };

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <div className="bg-background py-4 px-6 flex items-center justify-between ">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex gap-2">
            <CarouselPrevious className="static translate-y-0 h-8 w-8" />
            <CarouselNext className="static translate-y-0 h-8 w-8" />
          </div>
        </div>

        <CarouselContent className="ml-0">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-1 basis-[30%]">
              <Link to={`/product/${product.id}`} className="relative">
                <div className=" flex items-center justify-center relative ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <Button 
                    className='absolute top-3 right-3' 
                    onClick={(e) => handleAddToCart(e, product)} 
                    size='icon' 
                    variant='ghost'
                  >
                    <Plus className="h-4 w-4 text-black" />
                  </Button>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-normal mb-0.5">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.price}</p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
