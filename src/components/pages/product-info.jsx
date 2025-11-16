import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Truck, Store } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(0)

  return (
    <div className="w-[400px] sticky top-[70px] self-start">
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
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedColor === index
                    ? "border-black dark:border-white"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <img
                  src={product.images[0]}
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
        <div className="space-y-4 pt-4 border-t">
          <div className="flex items-start gap-3 border-foreground border p-2">
            <Truck className="w-5 h-5 mt-1 shrink-0" />
            <div className="mb-2">
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
  )
}
