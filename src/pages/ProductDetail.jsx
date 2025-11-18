import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductGallery } from '@/components/pages/product-gallery'
import { ProductInfo } from '@/components/pages/product-info'
import { ProductDetailsAccordion } from '@/components/pages/product-details-accordion'
import { baseProducts } from '@/data/products'

function ProductDetail() {
  const { id } = useParams()

  const baseProduct = baseProducts.find((p) => p.id === Number(id)) || baseProducts[0]

  const [selectedVariantIndex, setSelectedVariantIndex] = React.useState(0)

  const variants =
    baseProduct.variants ||
    (baseProduct.colors && baseProduct.colors.length
      ? baseProduct.colors.map((color) => ({
          color,
          isNew: baseProduct.new,
          description: baseProduct.description,
          images: baseProduct.image,
        }))
      : [
          {
            color: '',
            isNew: baseProduct.new,
            description: baseProduct.description,
            images: baseProduct.image,
          },
        ])

  const activeVariant = variants[selectedVariantIndex] || variants[0]

  const product = {
    name: baseProduct.name,
    price: `$${baseProduct.price.toFixed(2)}`,
    category: baseProduct.category || (activeVariant.isNew ? 'New' : ''),
    color: activeVariant.color ? `Color ${activeVariant.color}` : '',
    images: activeVariant.images,
    // Para el selector de color usamos todos los variantes
    colors: variants.map((variant) => ({ name: variant.color })),
    // Imagen que representa cada color en el selector (primera de cada variante)
    colorImages: variants.map((variant) => variant.images[0]),
    sizes: baseProduct.sizes || [],
    description: activeVariant.description,
  }

  return (
    <div className="min-h-screen mt-16">
      <div className="flex relative">
        <ProductGallery images={product.images} productName={product.name} />
        <ProductInfo
          product={product}
          selectedColorIndex={selectedVariantIndex}
          onSelectColor={setSelectedVariantIndex}
        />
      </div>
      <ProductDetailsAccordion />
    </div>
  )
}



export default ProductDetail;
