import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Truck, Store } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import SK8 from '@/assets/Sk8Hi-Waterproof-Insulated-Shoe.avif'
import SK82 from '@/assets/sk8/Sk8Hi-Waterproof-Insulated-Shoe (1).avif'
import SK83 from '@/assets/sk8/Sk8Hi-Waterproof-Insulated-Shoe (3).avif'
import SK84 from '@/assets/sk8/Sk8Hi-Waterproof-Insulated-Shoe (4).avif'
import SK85 from '@/assets/sk8/Sk8Hi-Waterproof-Insulated-Shoe (5).avif'
import SK86 from '@/assets/sk8/Sk8Hi-Waterproof-Insulated-Shoe (6).avif'
import SK88 from '@/assets/sk8/Sk8Hi-Waterproof-Insulated-Shoe (2).avif'
import SK87 from '@/assets/sk8/Sk8Hi-Waterproof-Insulated-Shoe.avif'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function ProductDetail({ top = false }) {
  const [selectedColor, setSelectedColor] = useState(0);



  const options = [
    {
      icon: Truck,
      value: "Ship to Home",
      label: "Standard Shipping",
      description: "3-8 Business Days",
    },
    {
      icon: Store,
      value: "In-Store Pickup",
      label: "Find Store",
      description: "Complete order/pickup in-store availability",
    },
  ];

  const product = {
    name: "Sk8-Hi Waterproof Insulated Shoe",
    price: "$143.00",
    category: "New",
    color: "Color Leopard/Black",
    images: [SK8, SK82, SK83, SK84, SK85, SK86, SK87, SK88],
    colors: [
      { name: "Black" },
      { name: "Tan" },
      { name: "Brown" },
      { name: "Beige" },
    ],
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
  };

  return (
    <div className={`min-h-screen ${top ? 'bg-foreground/5' : ''}`}>
      <div className="flex relative">
        {/* Galería de imágenes - scrolleable */}
        <div className="flex-1 grid grid-cols-2 gap-1 mr-1">
          {product.images.map((image, index) => (
            <div key={index} className="aspect-square bg-gray-100 dark:bg-gray-800">
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Información del producto - sticky */}
        <div className="w-[400px] sticky top-0 self-start border-l">
          <div className="h-16" />
          <div className="space-y-6 p-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <p className="text-xl font-semibold">{product.price}</p>
            </div>

            {/* Selector de color */}
            <div>
              <p className="font-medium mb-3">{product.color}</p>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${selectedColor === index
                      ? "border-black dark:border-white"
                      : "border-gray-300 hover:border-gray-400"
                      }`}
                  >
                    <img
                      src={SK8}
                      alt={color.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
                <button className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center text-sm font-medium">
                  +1
                </button>
              </div>
            </div>

            {/* Selector de talla */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <p className="font-medium">Size</p>
                <button className="text-sm underline">Size Chart</button>
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose Your Size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Botones de acción */}
            <div className="space-y-3">
              <Button className="w-full h-12 text-base" size="lg">
                Choose Your Size
              </Button>
              <Button variant="outline" className="w-full h-12 text-base" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                Add to Wishlist
              </Button>
            </div>

            {/* Información de envío */}
{/*             <RadioGroupPrimitive.Root
              defaultValue={options[0].value}
              className="space-y-3 pt-4 border-t">
              {options.map((option, index) => (
                <label
                  key={index}
                  htmlFor={option.value}
                  className="flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-foreground/20 has-checked:border-foreground has-checked:bg-foreground/5"
                >
                  <RadioGroupPrimitive.Item 
                    value={option.value} 
                    id={option.value} 
                    className="mt-1 w-4 h-4 rounded-full border-2 border-foreground/30 data-[state=checked]:border-foreground data-[state=checked]:bg-foreground relative after:absolute after:inset-0 after:m-auto after:w-2 after:h-2 after:rounded-full after:bg-background data-[state=checked]:after:block after:hidden" 
                  />
                  <option.icon className="w-5 h-5 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium">{option.value}</p>
                    <p className="text-sm text-muted-foreground">{option.label}</p>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </label>
              ))}
            </RadioGroupPrimitive.Root> */}
                        <div className="space-y-4 pt-4 border-t">
              <div className="flex items-start gap-3 bg-accent p-2">
                <Truck className="w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Ship to Home</p>
                  <p className="text-sm text-muted-foreground">Standard Shipping</p>
                  <p className="text-sm text-muted-foreground">3-8 Business days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Store className="w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="font-medium">In-Store Pickup</p>
                  <button className="text-sm underline">Find Store</button>
                  <p className="text-sm text-muted-foreground">
                    Complete order/pickup in-store availability
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="space-y-3 p-2">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Style <span>VN000ED8CJK</span>
                </p>
                <p>
                  Sk8-Hi Insulated Shoe
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Shipping Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express shipping
                  ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track your
                  shipment in real-time through our dedicated tracking portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Return Policy</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day return
                  policy. If you&apos;re not completely satisfied, simply return the
                  item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping and
                  full refunds processed within 48 hours of receiving the returned
                  item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}



export default ProductDetail;
