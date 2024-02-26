import React from 'react'
import Image from 'next/image'

export const HeroGridCard = ({src, prompt}) => {
  return (
    <div className="relative w-96 h-96">
        <Image
        src={src}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 rounded-md"
        />
        <div className="absolute inset-0 flex items-end justify-center p-4">
        <div className="bg-transparent border border-white backdrop-blur-md text-white rounded-md p-2 px-5">
            {prompt}
        </div>
        </div>
    </div>    
  )
}
