"use client"
import React, { useContext } from 'react'
import { ImageGenOptions } from '@/app/global-state/ImageGeneration';

const UpscaleIntensityInputs = () => {
  const {upscaleIntensity, setUpscaleIntensity} = useContext(ImageGenOptions)

  return (
    <div title='How creative the upscale should be.' className='flex justify-between items-center w-full'>
        <input value={upscaleIntensity} onChange={(e)=> setUpscaleIntensity((e.target.value))} type="range" min="0" max="100" className="block w-[70%] h-2 appearance-none rounded-full bg-white focus:outline-none"/>
        <input value={upscaleIntensity} onChange={(e)=> setUpscaleIntensity((e.target.value))} type="number" min="0" max="100" className="w-16 h-8 appearance-none focus:outline-white outline-1 bg-black text-white rounded-md p-2"/>
    </div>
  )
}

export default UpscaleIntensityInputs