import Image from 'next/image'
import React from 'react'
import img1 from '../public/hero-images/img1.webp'

const Sales = () => {
  return (
      <div className='cursor-pointer flex w-full justify-between items-center hover:bg-neutral-900 rounded-md p-2'>
        <div className='flex gap-2 items-center'>
            <div className='size-10'>
                <Image src={img1} className='object-fit w-full h-full rounded-sm'/>
            </div>
            <div className='text-white font-semibold text-lg tracking-tight'>
                The Mona Lisa
            </div>
        </div>
        <div className='text-sm tracking-tight text-right text-gray-300'>
            remixes: <span className='font-bold text-white'>69</span>
        </div>
    </div>
  )
}

export default Sales