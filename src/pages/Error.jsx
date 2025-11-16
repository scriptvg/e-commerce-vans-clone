import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@/components/ui/empty'
import { Button } from '@/components/ui/button'
import { Home, Search } from 'lucide-react'

function Error() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Search className="size-6" />
          </EmptyMedia>
          <EmptyTitle>Página no encontrada</EmptyTitle>
          <EmptyDescription>
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button onClick={() => navigate('/')} className="gap-2">
            <Home className="size-4" />
            Volver al inicio
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}

export default Error
