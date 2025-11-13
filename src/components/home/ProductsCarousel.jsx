import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const defaultProducts = [
  {
    id: 1,
    name: "Classic Slip-On Shoe",
    price: "$80.00",
    image: "/products/plaid-1.jpg",
  },
  {
    id: 2,
    name: "Bixby Plaid Flannel Shirt",
    price: "$80.00",
    image: "/products/plaid-2.jpg",
  },
  {
    id: 3,
    name: "Drop V Plaid Jockey Hat",
    price: "$28.00",
    image: "/products/plaid-3.jpg",
  },
  {
    id: 4,
    name: "Crestmont Plaid Shacket",
    price: "$90.00",
    image: "/products/plaid-4.jpg",
  },
  {
    id: 5,
    name: "Crestmont Plaid Shacket",
    price: "$90.00",
    image: "/products/plaid-4.jpg",
  },
];

export function ProductsCarousel({ products: productsProp, title = "Holiday Plaids" }) {
  const products = productsProp || defaultProducts;
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
              <div className="relative">
                <div className="aspect-square flex items-center justify-center relative ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <Button className='absolute top-3 right-3' size='icon' variant='ghost'>
                    <Plus className="h-4 w-4 text-black" />
                  </Button>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-normal mb-0.5">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.price}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
