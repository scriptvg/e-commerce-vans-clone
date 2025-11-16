import SK8 from '@/assets/Sk8Hi-Waterproof-Insulated-Shoe.avif'
import SK82 from '@/assets/sk8/Sk8Hi-Waterproof-Insulated-Shoe (1).avif'
import SK83 from '@/assets/sk8/Sk8Hi-Waterproof-Insulated-Shoe (3).avif'
import SK84 from '@/assets/sk8/Sk8Hi-Waterproof-Insulated-Shoe (4).avif'
import SK85 from '@/assets/sk8/Sk8Hi-Waterproof-Insulated-Shoe (5).avif'
import SK86 from '@/assets/sk8/Sk8Hi-Waterproof-Insulated-Shoe (6).avif'
import SK88 from '@/assets/sk8/Sk8Hi-Waterproof-Insulated-Shoe (2).avif'
import SK87 from '@/assets/sk8/Sk8Hi-Waterproof-Insulated-Shoe.avif'
import { ProductGallery } from '@/components/pages/product-gallery'
import { ProductInfo } from '@/components/pages/product-info'
import { ProductDetailsAccordion } from '@/components/pages/product-details-accordion'

function ProductDetail() {

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
    <div className="min-h-screen mt-16">
      <div className="flex relative">
        <ProductGallery images={product.images} productName={product.name} />
        <ProductInfo product={product} />
      </div>
      <ProductDetailsAccordion />
    </div>
  )
}



export default ProductDetail;
