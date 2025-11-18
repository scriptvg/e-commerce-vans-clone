import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from "../ui/breadcrumb";
import { ProductColorSelector } from "./product-color-selector";
import { ProductSizeSelector } from "./product-size-selector";
import { ProductShippingInfo } from "./product-shipping-info";

export function ProductInfo({ product, selectedColorIndex, onSelectColor }) {

  return (
    <div className="w-[400px] sticky top-[70px] self-start">
      <div className="space-y-6 p-4">
        <div>
          <div className="flex items-end justify-end mb-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink>Icons</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>SK8 Hi</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold mb-2">{product.name}</h1>
            <Button variant="ghost">
              <Heart />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            {product.description}
          </p>
          <p className="text-xl font-semibold">{product.price}</p>
        </div>

        <ProductColorSelector 
          product={product}
          selectedColorIndex={selectedColorIndex}
          onSelectColor={onSelectColor}
        />

        <ProductSizeSelector product={product} />

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

        <ProductShippingInfo />
      </div>
    </div>
  );
}
