import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import { Inicio } from '@/pages'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    
    children: [
      {
        index: true,
        element: <Inicio />
      }
    ]
  }
])
