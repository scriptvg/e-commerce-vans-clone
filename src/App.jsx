import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { routes } from './routes'
import { Toaster } from 'sonner'

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <RouterProvider router={routes} />
      <Toaster position="top-right" richColors closeButton />
    </ThemeProvider>
  )
}

export default App
