import { SK8, SK82, SK83, SK84, SK85, SK86, SK87, SK88, SK8_Black, SK8_Black2, SK8_Black3 } from '@/assets/sk8/Sk8Hi-Waterproof'
import KnuSkoolShoe from '@/assets/Knu-Skool-Shoe.avif'
import ImgBanner from '@/assets/FA25_10302025_PLP_ShopAll_eSpot-01_Desktop_458x673_Image.avif'
import { Salton1, Salton2, Salton3, Salton4 } from '@/assets/salton/Salton-Pearls'
import { francesca1, francesca2, francesca3, francesca4, francesca5 } from '@/assets/francesca'
import GiftBanner from '@/assets/FA25_11122025_PLP_Holiday_eSpot-01_Desktop_458x673_Image.avif'
import { holiday1, holiday2, holiday3, holiday4, holiday5, holiday6 } from '@/assets/holiday'

// MODELO base de productos de catálogo
// Estos objetos representan realmente tus productos (talla, color, etc.)
export const baseProducts = [
  {
    id: 1,
    sku: 'SALTON-CREW-001',
    new: true,
    name: 'Salton Pearls Crew Sweatshirt',
    description: 'Women’s midweight fleece crew with pearl details.',
    category: 'Women · Tops',
    price: 60.0,
    currency: 'USD',
    colors: ['Marshmallow', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: [Salton1, Salton2, Salton3, Salton4],
    isGiftable: true,
    tags: ['holiday', 'cozy'],
  },
  {
    id: 2,
    sku: 'FRANCESCA-SKIRT-001',
    new: false,
    name: 'Francesca Full Skirt',
    description: 'Adjustable waist, voluminous fit – perfect for layering.',
    category: 'Women · Skirts',
    price: 70.0,
    currency: 'USD',
    colors: ['Red', 'Green', 'Black'],
    sizes: ['XS', 'S', 'M', 'L'],
    image: [francesca1, francesca2, francesca3, francesca4, francesca5],
    isGiftable: true,
    tags: ['holiday', 'dressy'],
  },
  {
    id: 3,
    sku: 'SK8-HI-WATERPROOF-001',
    new: false,
    name: 'Sk8-Hi Waterproof Insulated Shoe',
    description: 'All-weather Sk8-Hi with insulation for colder days.',
    category: 'Unisex · Shoes',
    price: 120.0,
    currency: 'USD',
    colors: ['Leopard/Black', 'Black'],
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    image: [SK8, SK82, SK83, SK84, SK85, SK86, SK87, SK88],
    isGiftable: true,
    tags: ['snow', 'skate'],
    variants: [
      {
        color: 'Leopard/Black',
        isNew: true,
        description: '',
        images: [SK8, SK82, SK83, SK84, SK85, SK86, SK87, SK88],
      },
      {
        color: 'Black',
        isNew: false,
        description: 'Multi-Terrain, Icon, Waterproof, Insulated, Cushioning',
        // Por ahora reutilizamos las mismas imágenes; luego puedes cambiarlas si tienes archivos específicos
        images: [SK8_Black, SK8_Black2, SK8_Black3, SK84, SK85, SK86, SK87, SK88],
      },
    ],
  },
/*   {
    id: 4,
    sku: '',
    new: false,
    sale: true,
    name: 'Knu Skool Shoe',
    description: ''

  } */
]

// Lista principal de productos para la página de "Shop All" / Products
// Reutiliza los productos base y agrega el banner de la colección
export const products = [
  {
    type: 'banner',
    id: 'banner-1',
    title: 'Holiday Hits',
    description: 'Shop the Gift guide',
    img: ImgBanner,
    link: '/gift-guide',
  },
  ...baseProducts,
]

// Productos en oferta / carrusel "Popular Picks"
export const saleProducts = [
  { image: KnuSkoolShoe, alt: 'Knu Skool Shoe', name: 'Knu Skool Shoe', price: '$55.00', link: '' },
  { image: SK8, alt: 'Sk8 Hi-Waterproof Insulated Shoe', name: 'Sk8 Hi-Waterproof Insulated Shoe', price: '$120.00' },
  { image: KnuSkoolShoe, alt: 'Crosspath XC Shoe', name: 'Crosspath XC Shoe', price: '$110.00' },
  { image: KnuSkoolShoe, alt: 'Classic Slip-On Checkerboard', name: 'Classic Slip-On Checkerboard', price: '$50.00' },
  { image: KnuSkoolShoe, alt: 'Classic Slip-On Checkerboard', name: 'Classic Slip-On Checkerboard', price: '$50.00' },
  { image: KnuSkoolShoe, alt: 'Classic Slip-On Checkerboard', name: 'Classic Slip-On Checkerboard', price: '$50.00' },
]

// Productos para la página de Gift
// También reutiliza los productos base para no repetir definiciones
export const giftProducts = [
  baseProducts[0],
  baseProducts[1],
  {
    type: 'banner',
    id: 'gift-banner-1',
    title: 'Dressed In Holiday',
    img: GiftBanner,
    link: '/gift-guide',
  },
  baseProducts[2],
]

// Productos para el carrusel "Holiday Plaids" de Inicio
export const holidayPlaids = [
  { image: holiday1, alt: 'Classic Slip-On Shoe', name: 'Classic Slip-On Shoe', price: '$60.00' },
  { image: holiday2, alt: 'Classic Slip-On Shoe', name: 'Classic Slip-On Shoe', price: '$60.00' },
  { image: holiday3, alt: 'Classic Slip-On Shoe', name: 'Classic Slip-On Shoe', price: '$60.00' },
  { image: holiday4, alt: 'Classic Slip-On Shoe', name: 'Classic Slip-On Shoe', price: '$60.00' },
  { image: holiday5, alt: 'Classic Slip-On Shoe', name: 'Classic Slip-On Shoe', price: '$60.00' },
  { image: holiday6, alt: 'Classic Slip-On Shoe', name: 'Classic Slip-On Shoe', price: '$60.00' },
  { image: holiday6, alt: 'Classic Slip-On Shoe', name: 'Classic Slip-On Shoe', price: '$60.00' },
  { image: holiday6, alt: 'Classic Slip-On Shoe', name: 'Classic Slip-On Shoe', price: '$60.00' },
  { image: holiday6, alt: 'Classic Slip-On Shoe', name: 'Classic Slip-On Shoe', price: '$60.00' },
  { image: holiday6, alt: 'Classic Slip-On Shoe', name: 'Classic Slip-On Shoe', price: '$60.00' },
]

// Productos recomendados en el carrito
export const frequentlyBought = [
  { id: 1, name: 'Drop V Plaid Jockey Hat', price: 28.0, image: SK8 },
  { id: 2, name: 'Vans Drop V Crew Socks', price: 10.0, image: SK8 },
  { id: 3, name: 'Skate Snapback Hat', price: 30.0, image: SK8 },
  { id: 4, name: 'Skate Crew Socks by Ath...', price: 10.0, image: SK8 },
  { id: 5, name: 'Havenrock Crew Socks', price: 10.0, image: SK8 },
]

// Productos por defecto para el carrusel reutilizable
export const carouselDefaultProducts = [
  {
    id: 1,
    name: 'Classic Slip-On Shoe',
    price: '$80.00',
    image: '/products/plaid-1.jpg',
  },
  {
    id: 2,
    name: 'Bixby Plaid Flannel Shirt',
    price: '$80.00',
    image: '/products/plaid-2.jpg',
  },
  {
    id: 3,
    name: 'Drop V Plaid Jockey Hat',
    price: '$28.00',
    image: '/products/plaid-3.jpg',
  },
  {
    id: 4,
    name: 'Crestmont Plaid Shacket',
    price: '$90.00',
    image: '/products/plaid-4.jpg',
  },
  {
    id: 5,
    name: 'Crestmont Plaid Shacket',
    price: '$90.00',
    image: '/products/plaid-4.jpg',
  },
]


