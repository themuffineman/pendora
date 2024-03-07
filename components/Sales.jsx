import Image from 'next/image'
import React from 'react'
import img1 from '../public/hero-images/img1.webp'

const Sales = () => {
  return (
      <div className='flex w-max p-4 h-max'>
        <div className='flex gap-1'>
            <div className='size-12'>
                <Image src={img1} layout='fill' className='object-fit'/>
            </div>
            <div className='text-white text-lg tracking-tight'>
                The Mona Lisa
            </div>
        </div>
        <div className='text-xl tracking-tight text-right'>
            +23.50
        </div>
    </div>
  )
}

export default Sales