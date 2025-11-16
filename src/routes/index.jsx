import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import { Inicio } from '@/pages'
import ProductDetail from '@/pages/ProductDetail'
import Products from '@/pages/Products'
import Gift from '@/pages/Gift'
import Cart from '@/pages/Cart'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    
    children: [
      {
        index: true,
        element: <Inicio />
      },
      {
        path: 'shop-all/',
        element: <Products />
      },
      {
        path: 'gift-guide/',
        element: <Gift />
      },
      {
        path: 'product/:id',
        element: <ProductDetail />
      },
      {
        path: 'cart/',
        element: <Cart />
      }
    ]
  }
])
