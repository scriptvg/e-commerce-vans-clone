import React from 'react'
import { Link } from 'react-router-dom'


export function Banner({ info, key }) {

  const { link, img, title, description } = info

  return (
    <Link to={link} className='aspect-square relative' key={key}>
      <img src={img} alt={title} className='h-auto' />
      <div className='absolute bottom-0 left-0 bg-foreground/1 backdrop-grayscale-45 text-background w-full h-[300px] p-4 flex items-end'>
        <div>
          <h1 className='text-4xl font-bold'>{title}</h1>
          <Link to={link} className='underline'>{description}</Link>
        </div>
      </div>
    </Link>
  )
}
