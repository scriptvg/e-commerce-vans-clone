import React from 'react'
import { Button } from '../ui/button'
import { Filter } from 'lucide-react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb'
import { Link } from 'react-router-dom'

function Header({ title, count, extra, onToggleFilters, showFilters }) {
  return (
    <header className='sticky top-16 z-10 bg-background pb-4  p-4 flex flex-col gap-2'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to='/'>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to='/shop'>Shop</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {extra ? <div className='mt-4 mb-4 flex gap-1'>{extra}</div> : <></>}
      <h1 className='text-3xl font-bold'>{title}</h1>
      <div className='flex justify-between items-center pt-2 border-t'>
        <div className='flex items-center gap-1 mt-2'>
          <Button 
            variant='outline' 
            size='sm' 
            className='gap-2'
            onClick={onToggleFilters}
          >
            {showFilters ? 'Hide' : 'Show'} Filters
            <Filter className='w-4 h-4' />
          </Button>
        </div>
        <p className='text-sm text-muted-foreground'>{count} items</p>
      </div>
    </header>
  )
}

export default Header
